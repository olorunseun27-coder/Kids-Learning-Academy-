/**
 * Kids Learning Academy - Universal Multi-Subject Live Activity Tracker
 * Automatically monitors student activity, tab switches, study minutes, and scores across devices.
 */

(function () {
    "use strict";

    // 1. Extract URL Parameters forwarded from the Parent Container
    const urlParams = new URLSearchParams(window.location.search);
    const parentUid = urlParams.get("p");
    const childId = urlParams.get("c");
    const childName = urlParams.get("name") || localStorage.getItem("tu_pupil_name") || "Student";
    const subTopicParam = urlParams.get("topic") || "";

    // Dynamic Subject Detection (URL > window global > Document Title fallback)
    const detectedSubject = urlParams.get("subject") || window.LESSON_SUBJECT || "Mathematics";

    // Friendly page/lesson title
    const rawFileName = window.location.pathname.split("/").pop().replace(/\.[^/.]+$/, "");
    const pageTitle = document.title ? document.title.split("-")[0].trim() : rawFileName;
    let activeLessonName = subTopicParam ? `${pageTitle} (${subTopicParam})` : pageTitle;

    // If standalone preview (opened directly without parent launcher)
    if (!parentUid || !childId) {
        console.info(`[KidTracker] Preview Mode: Active Pupil: "${childName}", Subject: "${detectedSubject}". (No parent ID attached)`);
        window.KidTracker = {
            setProgress: (pct) => console.log(`[KidTracker Preview] Progress: ${pct}%`),
            setQuizScore: (score) => console.log(`[KidTracker Preview] Quiz Score: ${score}`),
            setTopic: (name) => console.log(`[KidTracker Preview] Topic: ${name}`),
            setSubject: (sub) => console.log(`[KidTracker Preview] Subject: ${sub}`)
        };
        return;
    }

    // 2. Firebase Configuration
    const formalFirebaseConfig = {
        apiKey: "AIzaSyCRL0nXwiqQk4isamyt1UkGWyQ50t3DjYo",
        authDomain: "kids-school-accademy.firebaseapp.com",
        databaseURL: "https://kids-school-accademy-default-rtdb.firebaseio.com",
        projectId: "kids-school-accademy",
        storageBucket: "kids-school-accademy.firebasestorage.app",
        messagingSenderId: "227052035126",
        appId: "1:227052035126:web:432601b90f3d54a00e8c97",
        measurementId: "G-B8DSN41S9K"
    };

    if (typeof firebase === "undefined") {
        console.error("[KidTracker] Firebase library not loaded. Include firebase-app and firebase-database in your HTML.");
        return;
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(formalFirebaseConfig);
    }

    const db = firebase.database();
    const statusRef = db.ref(`parents/${parentUid}/children/${childId}/learningStatus`);
    const connectedRef = db.ref(".info/connected");

    // 3. State Management
    let isAway = false;
    let idleTimer = null;
    let currentSubject = detectedSubject;
    let currentProgress = 0;
    let latestQuizScore = null;

    const IDLE_TIMEOUT_MS = 60000;       // 60 seconds without touch/mouse marks pupil as 'away'
    const HEARTBEAT_INTERVAL_MS = 20000; // Accrues minutes studied every 20 seconds

    // 4. Automatic Disconnection Handler (Triggers immediately on tab close or screen sleep)
    connectedRef.on("value", function (snapshot) {
        if (snapshot.val() === true) {
            statusRef.onDisconnect().update({
                status: "offline",
                lastActivity: firebase.database.ServerValue.TIMESTAMP
            });

            // Mark online and studying immediately
            pushStatusUpdate("studying");
        }
    });

    // 5. Update Status in Firebase Realtime Database
    function pushStatusUpdate(statusText) {
        if (!statusRef) return;
        const now = Date.now();
        const dateKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

        statusRef.transaction(function (current) {
            const data = current || {};
            let todayMins = Number(data.todayMinutes || 0);

            // Reset study minutes if studying on a brand new day
            if (data.todayDate !== dateKey) {
                todayMins = 0;
            }

            // Increment elapsed study minutes while active
            if (data.status === "studying" && data.lastActivity) {
                const diffSec = (now - data.lastActivity) / 1000;
                if (diffSec > 0 && diffSec < 60) {
                    todayMins += diffSec / 60;
                }
            }

            return {
                status: statusText,
                subject: currentSubject,
                topic: activeLessonName,
                startedAt: data.startedAt || now,
                lastActivity: now,
                todayMinutes: Math.round(todayMins * 10) / 10,
                todayDate: dateKey,
                progress: currentProgress !== 0 ? currentProgress : (data.progress || 0),
                quizScore: latestQuizScore !== null ? latestQuizScore : (data.quizScore || "—")
            };
        });
    }

    // 6. Detect Window Minimize or Tab Switching (e.g. child switches to YouTube or games)
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            isAway = true;
            pushStatusUpdate("away");
        } else {
            isAway = false;
            pushStatusUpdate("studying");
            resetIdleTimer();
        }
    });

    // 7. Detect Physical Screen Interactions (Touch, Click, Keyboard, Scrolling)
    function onUserActive() {
        if (document.hidden) return;
        if (isAway) {
            isAway = false;
            pushStatusUpdate("studying");
        }
        resetIdleTimer();
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () {
            if (!document.hidden) {
                isAway = true;
                pushStatusUpdate("away");
            }
        }, IDLE_TIMEOUT_MS);
    }

    ["pointerdown", "touchstart", "mousemove", "keydown", "scroll", "click"].forEach(function (eventName) {
        window.addEventListener(eventName, onUserActive, { passive: true });
    });

    // 8. Background Heartbeat (Keeps active time accurate while tab stays open)
    setInterval(function () {
        if (!document.hidden && !isAway) {
            pushStatusUpdate("studying");
        }
    }, HEARTBEAT_INTERVAL_MS);

    resetIdleTimer();

    // 9. Global KidTracker API for lessons to call
    window.KidTracker = {
        setProgress: function (percent) {
            currentProgress = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
            if (statusRef) {
                statusRef.update({
                    progress: currentProgress,
                    lastActivity: firebase.database.ServerValue.TIMESTAMP
                });
            }
        },
        setQuizScore: function (score) {
            latestQuizScore = String(score);
            if (statusRef) {
                statusRef.update({
                    quizScore: latestQuizScore,
                    lastActivity: firebase.database.ServerValue.TIMESTAMP
                });
            }
        },
        setTopic: function (topicName) {
            activeLessonName = String(topicName);
            if (statusRef) {
                statusRef.update({
                    topic: activeLessonName,
                    lastActivity: firebase.database.ServerValue.TIMESTAMP
                });
            }
        },
        setSubject: function (subjectName) {
            currentSubject = String(subjectName);
            if (statusRef) {
                statusRef.update({
                    subject: currentSubject,
                    lastActivity: firebase.database.ServerValue.TIMESTAMP
                });
            }
        }
    };

    console.info(`[KidTracker] Successfully synchronized for ${childName} | Subject: ${currentSubject} | Lesson: ${activeLessonName}`);
})();

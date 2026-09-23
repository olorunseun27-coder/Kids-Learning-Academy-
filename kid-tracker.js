/**
 * Kids Learning Academy - Live Activity & Heartbeat Tracking Engine
 * Works automatically across devices using URL query parameters (?p=parentUid&c=childId)
 */

(function () {
    // 1. Extract Parent ID and Child ID passed by School_Live_Monitoring.html
    const params = new URLSearchParams(window.location.search);
    const parentUid = params.get("p");
    const childId = params.get("c");
    const childName = params.get("name") || "Student";
    const subTopic = params.get("topic") || "";

    if (!parentUid || !childId) {
        console.warn("[KidTracker] Running in standalone preview mode (no parent or child ID found in URL).");
        return;
    }

    // 2. Initialize Firebase if not already initialized on this page
    const firebaseConfig = {
        apiKey: "AIzaSyCRL0nXwiqQk4isamyt1UkGWyQ50t3DjYo",
        authDomain: "kids-school-accademy.firebaseapp.com",
        databaseURL: "https://kids-school-accademy-default-rtdb.firebaseio.com",
        projectId: "kids-school-accademy",
        storageBucket: "kids-school-accademy.firebasestorage.app",
        messagingSenderId: "227052035126",
        appId: "1:227052035126:web:432601b90f3d54a00e8c97"
    };

    if (typeof firebase === "undefined") {
        console.error("[KidTracker] Firebase library not loaded. Please include firebase-app and firebase-database scripts.");
        return;
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.database();
    const statusRef = db.ref("parents/" + parentUid + "/children/" + childId + "/learningStatus");
    const connectedRef = db.ref(".info/connected");

    // 3. State variables
    let isAway = false;
    let idleTimer = null;
    const IDLE_TIMEOUT_MS = 60000; // After 60 seconds without touch/click/typing, child is marked "away"
    const HEARTBEAT_INTERVAL_MS = 20000; // Push heartbeat every 20 seconds
    const lessonTitle = document.title || window.location.pathname.split("/").pop();

    // 4. Clean shutdown when child closes tab, crashes, or loses internet
    connectedRef.on("value", function (snap) {
        if (snap.val() === true) {
            // When disconnected (browser closed or connection lost), automatically set to offline
            statusRef.onDisconnect().update({
                status: "offline",
                lastActivity: firebase.database.ServerValue.TIMESTAMP
            });

            // Mark online and studying immediately
            pushStatusUpdate("studying");
        }
    });

    // 5. Update Status Helper
    function pushStatusUpdate(statusText) {
        const now = Date.now();
        const dateKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

        statusRef.transaction(function (current) {
            const data = current || {};
            let todayMins = data.todayMinutes || 0;

            // Reset study minutes if it's a brand new day
            if (data.todayDate !== dateKey) {
                todayMins = 0;
            }

            // If previously studying, increment time spent based on heartbeat interval
            if (data.status === "studying" && data.lastActivity) {
                const diffSec = (now - data.lastActivity) / 1000;
                if (diffSec > 0 && diffSec < 60) {
                    todayMins += diffSec / 60;
                }
            }

            return {
                status: statusText,
                subject: "Mathematics",
                topic: subTopic ? `${lessonTitle} (${subTopic})` : lessonTitle,
                startedAt: data.startedAt || now,
                lastActivity: now,
                todayMinutes: Math.round(todayMins * 10) / 10,
                todayDate: dateKey,
                progress: data.progress !== undefined ? data.progress : 0,
                quizScore: data.quizScore !== undefined ? data.quizScore : null
            };
        });
    }

    // 6. Detect when child minimizes browser or switches tabs (e.g., YouTube or games)
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

    // 7. Detect active physical interactions (Mouse, Finger Touch, Keys)
    function onUserActivity() {
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

    ["pointerdown", "touchstart", "mousemove", "keydown", "scroll"].forEach(function (evt) {
        window.addEventListener(evt, onUserActivity, { passive: true });
    });

    // 8. Background Heartbeat (Sends progress every 20 seconds while tab remains open)
    setInterval(function () {
        if (!document.hidden && !isAway) {
            pushStatusUpdate("studying");
        }
    }, HEARTBEAT_INTERVAL_MS);

    // Initial timer setup
    resetIdleTimer();

    // 9. Expose Global Hook so lesson exercises can report live Quiz Scores & Progress
    window.KidTracker = {
        setProgress: function (percent) {
            const clamped = Math.max(0, Math.min(100, Math.round(percent)));
            statusRef.update({
                progress: clamped,
                lastActivity: firebase.database.ServerValue.TIMESTAMP
            });
        },
        setQuizScore: function (score) {
            statusRef.update({
                quizScore: score,
                lastActivity: firebase.database.ServerValue.TIMESTAMP
            });
        },
        setTopic: function (topicName) {
            statusRef.update({
                topic: topicName,
                lastActivity: firebase.database.ServerValue.TIMESTAMP
            });
        }
    };

    console.log("[KidTracker] Connected and monitoring child: " + childName);
})();

/**
 * Nigerian Basic 4 (Primary 4) Complete Term Curriculum
 * Contains:
 * 1. window.LIVE_CHALK_CURRICULUM - Interactive stroke chalkboard lessons
 * 2. window.WEEKLY_CURRICULUM    - Complete assessment bank for Weeks 1 to 11
 */

// =========================================================================
// 1. LIVE CHALKBOARD LESSON CURRICULUM
// =========================================================================
window.LIVE_CHALK_CURRICULUM = {
  english_week1: [
    {
      q: "Singular to Plural: What is the plural of 'baby'?",
      a: "babies",
      tray: ["Rule: For nouns ending in a consonant + 'y', drop 'y' and add '-ies'."]
    },
    {
      q: "Singular to Plural: What is the plural of 'leaf'?",
      a: "leaves",
      tray: ["Rule: Most nouns ending in '-f' or '-fe' change to '-ves' in the plural."]
    },
    {
      q: "Irregular Plurals: What is the plural of 'child'?",
      a: "children",
      tray: ["Rule: Irregular nouns change spelling completely without adding '-s'."]
    }
  ],

  math_fractions: [
    {
      q: "Find 3 equivalent fractions for 1/2",
      num: 1,
      den: 2,
      multipliers: [2, 3, 4],
      tray: ["Equivalent Fraction Rule: Multiply both numerator and denominator by the same number."]
    },
    {
      q: "Find 3 equivalent fractions for 2/3",
      num: 2,
      den: 3,
      multipliers: [2, 3, 4],
      tray: ["2/3 multiplied by 2/2 = 4/6, by 3/3 = 6/9, by 4/4 = 8/12."]
    },
    {
      q: "Find 3 equivalent fractions for 3/4",
      num: 3,
      den: 4,
      multipliers: [2, 3, 4],
      tray: ["Multiplying top and bottom preserves the exact proportion."]
    }
  ],

  vr_week1: [
    {
      q: "Letter Pair Sequence: AB, BC, CD, ?",
      type: "letter_pairs",
      letters1: ["A", "B", "C", "D"],
      letters2: ["B", "C", "D", "E"],
      answer: "DE",
      tray: ["Step: First letters move forward (+1). Second letters move forward (+1)."]
    },
    {
      q: "Letter Pair Sequence: ZA, YB, XC, ?",
      type: "letter_pairs",
      letters1: ["Z", "Y", "X", "W"],
      letters2: ["A", "B", "C", "D"],
      answer: "WD",
      tray: ["Step: Left letter steps backward, right letter steps forward."]
    }
  ],

  qr_week1: [
    {
      q: "Counting in 30's 4-Box Pattern",
      type: "qr_loop",
      bl: 0,
      tl: 30,
      tr: 60,
      answer: 90,
      tray: ["Loop Pattern: Bottom-Left + 30 ➔ Top-Left + 30 ➔ Top-Right + 30 ➔ Bottom-Right."]
    },
    {
      q: "Counting in 30's (Starting from 30)",
      type: "qr_loop",
      bl: 30,
      tl: 60,
      tr: 90,
      answer: 120,
      tray: ["Loop Pattern: 30 ➔ 60 ➔ 90 ➔ 120."]
    }
  ],

  igbo_week1: [
    {
      q: "Gịnị bụ ụdaume dị n'okwu 'Aka'?",
      a: "A",
      tray: ["Ụdaume asatọ dị n'asụsụ Igbo: a, e, i, ị, o, ọ, u, ụ."]
    },
    {
      q: "Kedụ mkpụrụokwu na-amalite na mgbochiume?",
      a: "Bata",
      tray: ["Mgbochiume bụ mkpụrụedemede na-abụghị ụdaume (b, ch, d, f, g, gb...)."]
    }
  ],

  eng_week2: [
    {
      q: "Aural Discrimination: Separate words with short /æ/ and long /ɑː/",
      type: "phonics",
      shortList: ["cat", "hat", "black", "apple"],
      longList: ["cart", "farm", "father", "part"],
      tray: ["/æ/ is short and sharp (cat). /ɑː/ is long and deep (father/cart)."]
    }
  ],

  math_week2: [
    {
      q: "Sequence of Thousands: 1000, 2000, 3000, ?",
      a: "4000",
      tray: ["Place value counting: Adding one thousand (1,000) at every step."]
    },
    {
      q: "Write 5,420 in words:",
      a: "Five thousand, four hundred and twenty",
      tray: ["Thousands ➔ Hundreds ➔ Tens ➔ Units."]
    }
  ],

  comp_week2: [
    {
      q: "The CPU is known as the ______ of the computer.",
      a: "brain",
      tray: ["CPU stands for Central Processing Unit."]
    },
    {
      q: "Unprocessed facts and figures are called ______.",
      a: "data",
      tray: ["Data becomes information after processing by the CPU."]
    }
  ],

  math_week7: [
    {
      q: "Find the Lowest Common Multiple (L.C.M) of 4 and 6",
      a: "12",
      tray: ["Multiples of 4: 4, 8, 12, 16. Multiples of 6: 6, 12, 18. Lowest shared is 12."]
    },
    {
      q: "Find the L.C.M of 3 and 5",
      a: "15",
      tray: ["Since 3 and 5 are prime numbers, their LCM = 3 × 5 = 15."]
    }
  ],

  english_week7: [
    {
      q: "The person who writes a book is called the ______.",
      a: "author",
      tray: ["Concept of Print: An author writes; an illustrator draws the pictures."]
    },
    {
      q: "The title of a book is usually printed on the ______ cover.",
      a: "front",
      tray: ["Front cover displays the Title, Author, and Publisher."]
    }
  ],

  math_week8: [
    {
      q: "Find the Highest Common Factor (H.C.F) of 8 and 12",
      a: "4",
      tray: ["Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. Greatest common is 4."]
    },
    {
      q: "Find the H.C.F of 9 and 15",
      a: "3",
      tray: ["Factors of 9: 1, 3, 9. Factors of 15: 1, 3, 5, 15. The common factor is 3."]
    }
  ],

  english_week8: [
    {
      q: "Identify the parts: 'The diligent pupil passed all tests.'",
      type: "grammar",
      subject: "The diligent pupil",
      predicate: "passed all tests",
      rule: "The subject names the doer; the predicate begins with the verb and tells what happened.",
      tray: ["Subject: The diligent pupil | Predicate: passed all tests."]
    }
  ]
};

// =========================================================================
// 2. COMPLETE WEEKLY ASSESSMENTS (WEEKS 1 — 11)
// =========================================================================
window.WEEKLY_CURRICULUM = {
  // -----------------------------------------------------------------------
  // WEEK 1
  // -----------------------------------------------------------------------
  1: [
    {
      subjectId: "eng_w1",
      subjectTitle: "English Studies",
      topic: "Plurals of Nouns (-s, -es, -ies, -ves)",
      passage: {
        title: "Rules for Plural Nouns",
        text: "Most English nouns form their plurals by adding '-s' or '-es'. For nouns ending in a consonant + 'y', change the 'y' to 'ies'. For nouns ending in 'f' or 'fe', change them to 'ves'. Irregular nouns change form completely."
      },
      questions: [
        {
          id: "w1_eng_q1",
          text: "The mother bought three {dash1} from the local market.",
          dashes: 1,
          options: ["babies", "babys", "babyies", "babyes"],
          correct: ["babies"],
          rule: "Consonant + 'y' becomes '-ies'."
        },
        {
          id: "w1_eng_q2",
          text: "The cook sharpened both kitchen {dash1}.",
          dashes: 1,
          options: ["knifes", "knives", "knivs", "knifees"],
          correct: ["knives"],
          rule: "Nouns ending in '-fe' change to '-ves'."
        },
        {
          id: "w1_eng_q3",
          text: "All the {dash1} were playing happily in the school garden.",
          dashes: 1,
          options: ["children", "childs", "childes", "childrens"],
          correct: ["children"],
          rule: "'Child' has an irregular plural form: 'children'."
        },
        {
          id: "w1_eng_q4",
          text: "Five hungry {dash1} attacked the flock of sheep.",
          dashes: 1,
          options: ["wolfs", "wolves", "wolfes", "wolvs"],
          correct: ["wolves"],
          rule: "'-f' changes to '-ves'."
        }
      ]
    },
    {
      subjectId: "math_w1",
      subjectTitle: "Mathematics",
      topic: "Equivalent Fractions",
      questions: [
        {
          id: "w1_math_q1",
          text: "The equivalent fraction of 1/2 with denominator 6 is {dash1}.",
          dashes: 1,
          options: ["2/6", "3/6", "4/6", "5/6"],
          correct: ["3/6"],
          rule: "Multiply both numerator and denominator by 3: (1×3)/(2×3) = 3/6."
        },
        {
          id: "w1_math_q2",
          text: "2/5 is equivalent to {dash1}/20.",
          dashes: 1,
          options: ["4", "6", "8", "10"],
          correct: ["8"],
          rule: "5 × 4 = 20, so 2 × 4 = 8."
        },
        {
          id: "w1_math_q3",
          text: "Complete the pair: 3/4 = {dash1}/12.",
          dashes: 1,
          options: ["6", "8", "9", "10"],
          correct: ["9"],
          rule: "4 × 3 = 12, so 3 × 3 = 9."
        }
      ]
    },
    {
      subjectId: "qr_w1",
      subjectTitle: "Quantitative Reasoning",
      topic: "Counting in 30's (4-Box H-Diagram)",
      questions: [
        {
          id: "w1_qr_q1",
          text: "Study the sample diagram. Find the missing value in the bottom-right box: {dash1}",
          dashes: 1,
          diagram: { tl: 60, bl: 30, tr: 90, br: "?" },
          options: ["100", "110", "120", "150"],
          correct: ["120"],
          rule: "Bottom-Left + 30 = Top-Left (30+30=60). Top-Left + 30 = Top-Right (60+30=90). Top-Right + 30 = Bottom-Right (90+30=120)."
        },
        {
          id: "w1_qr_q2",
          text: "Find the missing number in the top-left box: {dash1}",
          dashes: 1,
          diagram: { tl: "?", bl: 90, tr: 150, br: 180 },
          options: ["110", "120", "130", "140"],
          correct: ["120"],
          rule: "Bottom-Left 90 + 30 = 120."
        }
      ]
    },
    {
      subjectId: "vr_w1",
      subjectTitle: "Verbal Reasoning",
      topic: "Letter Pairs and Sequences",
      questions: [
        {
          id: "w1_vr_q1",
          text: "Find the next pair in the series: AB, BC, CD, DE, {dash1}.",
          dashes: 1,
          options: ["EF", "FG", "EG", "DF"],
          correct: ["EF"],
          rule: "Both letters advance by 1 consecutively."
        },
        {
          id: "w1_vr_q2",
          text: "Choose the word that means the opposite of 'GENEROUS': {dash1}.",
          dashes: 1,
          options: ["Kind", "Selfish", "Happy", "Polite"],
          correct: ["Selfish"],
          rule: "The antonym of generous is selfish or stingy."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 2
  // -----------------------------------------------------------------------
  2: [
    {
      subjectId: "eng_w2",
      subjectTitle: "English Studies",
      topic: "Aural Discrimination: /æ/ vs /ɑː/",
      questions: [
        {
          id: "w2_eng_q1",
          text: "Which of the following words contains the short vowel sound /æ/? {dash1}",
          dashes: 1,
          options: ["Cart", "Cat", "Father", "Farm"],
          correct: ["Cat"],
          rule: "'Cat' has the short vowel sound /æ/."
        },
        {
          id: "w2_eng_q2",
          text: "Which of the following words contains the long vowel sound /ɑː/? {dash1}",
          dashes: 1,
          options: ["Bat", "Hat", "Star", "Mat"],
          correct: ["Star"],
          rule: "'Star' has the deep long vowel sound /ɑː/."
        },
        {
          id: "w2_eng_q3",
          text: "In the sentence 'The cat sat on the mat', the vowel sound is {dash1}.",
          dashes: 1,
          options: ["/æ/", "/ɑː/", "/iː/", "/e/"],
          correct: ["/æ/"],
          rule: "'Cat', 'sat', and 'mat' share the /æ/ sound."
        }
      ]
    },
    {
      subjectId: "math_w2",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers up to 10,000",
      questions: [
        {
          id: "w2_math_q1",
          text: "What is the place value of 7 in 7,452? {dash1}",
          dashes: 1,
          options: ["Units", "Tens", "Hundreds", "Thousands"],
          correct: ["Thousands"],
          rule: "In 7,452, 7 represents 7 thousands (7,000)."
        },
        {
          id: "w2_math_q2",
          text: "Write in figures: Six thousand, five hundred and eight = {dash1}.",
          dashes: 1,
          options: ["6580", "6508", "6058", "6588"],
          correct: ["6508"],
          rule: "6 thousands + 5 hundreds + 0 tens + 8 units = 6508."
        },
        {
          id: "w2_math_q3",
          text: "What number comes immediately after 4,999? {dash1}",
          dashes: 1,
          options: ["4990", "5000", "5001", "5999"],
          correct: ["5000"],
          rule: "4,999 + 1 = 5,000."
        }
      ]
    },
    {
      subjectId: "comp_w2",
      subjectTitle: "Computer Studies",
      topic: "Data, Information and the CPU",
      questions: [
        {
          id: "w2_comp_q1",
          text: "Raw, unprocessed facts entered into a computer are called {dash1}.",
          dashes: 1,
          options: ["Data", "Information", "Output", "Software"],
          correct: ["Data"],
          rule: "Data is unprocessed material."
        },
        {
          id: "w2_comp_q2",
          text: "The main processing unit that acts as the computer's brain is the {dash1}.",
          dashes: 1,
          options: ["Monitor", "CPU", "Keyboard", "Mouse"],
          correct: ["CPU"],
          rule: "CPU = Central Processing Unit."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 3
  // -----------------------------------------------------------------------
  3: [
    {
      subjectId: "eng_w3",
      subjectTitle: "English Studies",
      topic: "Types of Pronouns (Personal and Possessive)",
      questions: [
        {
          id: "w3_eng_q1",
          text: "Flourish forgot {dash1} notebook on the desk.",
          dashes: 1,
          options: ["her", "hers", "him", "she"],
          correct: ["her"],
          rule: "'Her' is the possessive adjective qualifying the noun 'notebook'."
        },
        {
          id: "w3_eng_q2",
          text: "This green pencil is not mine, it is {dash1}.",
          dashes: 1,
          options: ["yours", "your", "you", "mine"],
          correct: ["yours"],
          rule: "'Yours' is a possessive pronoun used independently."
        },
        {
          id: "w3_eng_q3",
          text: "Emeka and {dash1} went to the science laboratory.",
          dashes: 1,
          options: ["me", "I", "him", "us"],
          correct: ["I"],
          rule: "Use the subject pronoun 'I' as part of the compound subject."
        }
      ]
    },
    {
      subjectId: "math_w3",
      subjectTitle: "Mathematics",
      topic: "Addition and Subtraction of Fractions",
      questions: [
        {
          id: "w3_math_q1",
          text: "Calculate: 2/7 + 3/7 = {dash1}.",
          dashes: 1,
          options: ["5/14", "5/7", "6/7", "1/7"],
          correct: ["5/7"],
          rule: "When denominators are equal, add the numerators directly: 2 + 3 = 5."
        },
        {
          id: "w3_math_q2",
          text: "Calculate: 7/9 - 4/9 = {dash1}.",
          dashes: 1,
          options: ["3/9", "3/18", "11/9", "1/9"],
          correct: ["3/9"],
          rule: "7 - 4 = 3, so the result is 3/9 (or 1/3)."
        },
        {
          id: "w3_math_q3",
          text: "Simplify: 5/8 - 1/8 = {dash1}.",
          dashes: 1,
          options: ["4/8", "4/16", "6/8", "3/8"],
          correct: ["4/8"],
          rule: "5 - 1 = 4 over 8."
        }
      ]
    },
    {
      subjectId: "bsci_w3",
      subjectTitle: "Basic Science",
      topic: "Living and Non-Living Things",
      questions: [
        {
          id: "w3_sci_q1",
          text: "The process by which living organisms produce young ones of their kind is {dash1}.",
          dashes: 1,
          options: ["Respiration", "Reproduction", "Excretion", "Nutrition"],
          correct: ["Reproduction"],
          rule: "Reproduction ensures the continuity of living species."
        },
        {
          id: "w3_sci_q2",
          text: "Plants take in {dash1} gas during photosynthesis.",
          dashes: 1,
          options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
          correct: ["Carbon dioxide"],
          rule: "Plants absorb carbon dioxide and release oxygen."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 4
  // -----------------------------------------------------------------------
  4: [
    {
      subjectId: "eng_w4",
      subjectTitle: "English Studies",
      topic: "Verbs and Tenses: Present Continuous Tense",
      questions: [
        {
          id: "w4_eng_q1",
          text: "The teacher is {dash1} on the chalkboard right now.",
          dashes: 1,
          options: ["write", "wrote", "writing", "written"],
          correct: ["writing"],
          rule: "Present continuous tense uses 'is' + verb-ing."
        },
        {
          id: "w4_eng_q2",
          text: "The boys {dash1} playing football in the field.",
          dashes: 1,
          options: ["is", "are", "was", "has"],
          correct: ["are"],
          rule: "Plural subject 'boys' takes the plural auxiliary 'are'."
        },
        {
          id: "w4_eng_q3",
          text: "I am {dash1} my homework before dinner.",
          dashes: 1,
          options: ["do", "did", "doing", "done"],
          correct: ["doing"],
          rule: "Auxiliary 'am' is followed by 'doing'."
        }
      ]
    },
    {
      subjectId: "math_w4",
      subjectTitle: "Mathematics",
      topic: "Multiplication of Whole Numbers by 2-Digit Numbers",
      questions: [
        {
          id: "w4_math_q1",
          text: "Solve: 25 × 12 = {dash1}.",
          dashes: 1,
          options: ["250", "280", "300", "320"],
          correct: ["300"],
          rule: "25 × 10 = 250; 25 × 2 = 50; 250 + 50 = 300."
        },
        {
          id: "w4_math_q2",
          text: "A box contains 14 pencils. How many pencils are in 10 such boxes? {dash1}",
          dashes: 1,
          options: ["104", "140", "144", "150"],
          correct: ["140"],
          rule: "14 × 10 = 140."
        },
        {
          id: "w4_math_q3",
          text: "Calculate: 40 × 30 = {dash1}.",
          dashes: 1,
          options: ["120", "700", "1200", "12000"],
          correct: ["1200"],
          rule: "4 × 3 = 12, then append two zeros = 1,200."
        }
      ]
    },
    {
      subjectId: "qr_w4",
      subjectTitle: "Quantitative Reasoning",
      topic: "Number Relationships and Missing Products",
      questions: [
        {
          id: "w4_qr_q1",
          text: "If 4 * 5 = 20 and 6 * 3 = 18, then 7 * 4 = {dash1}.",
          dashes: 1,
          options: ["24", "26", "28", "30"],
          correct: ["28"],
          rule: "The operation represents standard multiplication: 7 × 4 = 28."
        },
        {
          id: "w4_qr_q2",
          text: "If 20 # 4 = 5 and 30 # 6 = 5, then 45 # 5 = {dash1}.",
          dashes: 1,
          options: ["7", "8", "9", "10"],
          correct: ["9"],
          rule: "The operation represents division: 45 ÷ 5 = 9."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 5
  // -----------------------------------------------------------------------
  5: [
    {
      subjectId: "eng_w5",
      subjectTitle: "English Studies",
      topic: "Adjectives and Degrees of Comparison",
      questions: [
        {
          id: "w5_eng_q1",
          text: "An elephant is {dash1} than a horse.",
          dashes: 1,
          options: ["big", "bigger", "biggest", "more big"],
          correct: ["bigger"],
          rule: "Comparative degree compares two animals: 'bigger'."
        },
        {
          id: "w5_eng_q2",
          text: "Mount Everest is the {dash1} mountain in the world.",
          dashes: 1,
          options: ["high", "higher", "highest", "most high"],
          correct: ["highest"],
          rule: "Superlative degree uses '-est' after 'the'."
        },
        {
          id: "w5_eng_q3",
          text: "This mango is sweet, but that pawpaw is {dash1}.",
          dashes: 1,
          options: ["sweetest", "sweeter", "sweet", "more sweet"],
          correct: ["sweeter"],
          rule: "Comparing two items requires the comparative degree."
        }
      ]
    },
    {
      subjectId: "math_w5",
      subjectTitle: "Mathematics",
      topic: "Division of Whole Numbers and Remainders",
      questions: [
        {
          id: "w5_math_q1",
          text: "Divide 84 by 4 = {dash1}.",
          dashes: 1,
          options: ["20", "21", "22", "24"],
          correct: ["21"],
          rule: "80 ÷ 4 = 20, and 4 ÷ 4 = 1. Total = 21."
        },
        {
          id: "w5_math_q2",
          text: "Share 47 oranges equally among 5 children. The remainder is {dash1}.",
          dashes: 1,
          options: ["1", "2", "3", "4"],
          correct: ["2"],
          rule: "5 × 9 = 45; 47 - 45 = remainder 2."
        },
        {
          id: "w5_math_q3",
          text: "What is 100 ÷ 5? {dash1}",
          dashes: 1,
          options: ["10", "15", "20", "25"],
          correct: ["20"],
          rule: "100 divided by 5 equals 20."
        }
      ]
    },
    {
      subjectId: "soc_w5",
      subjectTitle: "Social Studies",
      topic: "Our Culture and Values",
      questions: [
        {
          id: "w5_soc_q1",
          text: "The total way of life of a group of people is called {dash1}.",
          dashes: 1,
          options: ["Culture", "Tradition", "Religion", "Education"],
          correct: ["Culture"],
          rule: "Culture includes beliefs, food, language, and customs."
        },
        {
          id: "w5_soc_q2",
          text: "In Yoruba culture, male children show respect by {dash1}.",
          dashes: 1,
          options: ["Prostrating", "Kneeling", "Shaking hands", "Jumping"],
          correct: ["Prostrating"],
          rule: "Prostration (dobale) is the traditional greeting for boys/men."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 6
  // -----------------------------------------------------------------------
  6: [
    {
      subjectId: "eng_w6",
      subjectTitle: "English Studies",
      topic: "Adverbs of Manner and Time",
      questions: [
        {
          id: "w6_eng_q1",
          text: "The tortoise walked {dash1} across the road.",
          dashes: 1,
          options: ["slowly", "slow", "slowness", "slower"],
          correct: ["slowly"],
          rule: "Adverb of manner describes how the action was performed."
        },
        {
          id: "w6_eng_q2",
          text: "We shall travel to Abuja {dash1}.",
          dashes: 1,
          options: ["tomorrow", "yesterday", "sweetly", "carefully"],
          correct: ["tomorrow"],
          rule: "'Tomorrow' is an adverb of time referring to the future."
        },
        {
          id: "w6_eng_q3",
          text: "She sang {dash1} at the school inter-house choir competition.",
          dashes: 1,
          options: ["beautifully", "beauty", "beautify", "beautiful"],
          correct: ["beautifully"],
          rule: "Use 'beautifully' to describe how she sang."
        }
      ]
    },
    {
      subjectId: "math_w6",
      subjectTitle: "Mathematics",
      topic: "Multiples and Factors of Numbers",
      questions: [
        {
          id: "w6_math_q1",
          text: "Which of the following is a multiple of 6? {dash1}",
          dashes: 1,
          options: ["14", "18", "22", "26"],
          correct: ["18"],
          rule: "6 × 3 = 18."
        },
        {
          id: "w6_math_q2",
          text: "The factors of 12 are: 1, 2, 3, 4, {dash1}, and 12.",
          dashes: 1,
          options: ["5", "6", "8", "10"],
          correct: ["6"],
          rule: "12 ÷ 2 = 6, so 6 is a factor of 12."
        },
        {
          id: "w6_math_q3",
          text: "Every number has {dash1} as its smallest factor.",
          dashes: 1,
          options: ["0", "1", "2", "itself"],
          correct: ["1"],
          rule: "1 is a universal factor of all natural numbers."
        }
      ]
    },
    {
      subjectId: "vr_w6",
      subjectTitle: "Verbal Reasoning",
      topic: "Analogies and Word Associations",
      questions: [
        {
          id: "w6_vr_q1",
          text: "Bird is to Fly as Fish is to {dash1}.",
          dashes: 1,
          options: ["Walk", "Swim", "Crawl", "Run"],
          correct: ["Swim"],
          rule: "A bird moves by flying; a fish moves by swimming."
        },
        {
          id: "w6_vr_q2",
          text: "Doctor is to Hospital as Teacher is to {dash1}.",
          dashes: 1,
          options: ["School", "Court", "Bank", "Market"],
          correct: ["School"],
          rule: "A teacher's place of work is the school."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 7 (MID-TERM ASSESSMENT)
  // -----------------------------------------------------------------------
  7: [
    {
      subjectId: "eng_w7",
      subjectTitle: "English Studies (Mid-Term)",
      topic: "Concept of Print and Reading Comprehension",
      passage: {
        title: "The Smart Farmer of Ibadan",
        text: "Mr. Ade was a hardworking farmer in Ibadan. He woke up every morning before sunrise to tend his maize fields. When the harvest arrived, he stored his grains properly in silos to protect them from insects. Because of his careful planning, he never ran out of food throughout the dry season."
      },
      questions: [
        {
          id: "w7_eng_q1",
          text: "Where did Mr. Ade live and farm? {dash1}",
          dashes: 1,
          options: ["Kano", "Ibadan", "Lagos", "Enugu"],
          correct: ["Ibadan"],
          rule: "The passage states that Mr. Ade was a hardworking farmer in Ibadan."
        },
        {
          id: "w7_eng_q2",
          text: "Mr. Ade stored his grains in {dash1} to protect them.",
          dashes: 1,
          options: ["baskets", "silos", "open sacks", "the kitchen"],
          correct: ["silos"],
          rule: "The passage says he stored his grains in silos."
        },
        {
          id: "w7_eng_q3",
          text: "The person who creates the drawings in a textbook is the {dash1}.",
          dashes: 1,
          options: ["Author", "Illustrator", "Publisher", "Printer"],
          correct: ["Illustrator"],
          rule: "Concept of print: The illustrator draws the pictures."
        }
      ]
    },
    {
      subjectId: "math_w7",
      subjectTitle: "Mathematics (Mid-Term)",
      topic: "Lowest Common Multiple (L.C.M)",
      questions: [
        {
          id: "w7_math_q1",
          text: "Find the L.C.M of 4 and 6: {dash1}.",
          dashes: 1,
          options: ["10", "12", "16", "24"],
          correct: ["12"],
          rule: "Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. Smallest common is 12."
        },
        {
          id: "w7_math_q2",
          text: "The L.C.M of 2, 3, and 5 is {dash1}.",
          dashes: 1,
          options: ["15", "20", "30", "60"],
          correct: ["30"],
          rule: "Since 2, 3, and 5 are prime: 2 × 3 × 5 = 30."
        },
        {
          id: "w7_math_q3",
          text: "What is the L.C.M of 8 and 12? {dash1}",
          dashes: 1,
          options: ["16", "24", "32", "48"],
          correct: ["24"],
          rule: "Multiples of 8: 8, 16, 24; multiples of 12: 12, 24."
        }
      ]
    },
    {
      subjectId: "qr_w7",
      subjectTitle: "Quantitative Reasoning (Mid-Term)",
      topic: "Mid-Term Mixed Patterns",
      questions: [
        {
          id: "w7_qr_q1",
          text: "Complete the 4-box loop with pattern (+20): {dash1}",
          dashes: 1,
          diagram: { tl: 40, bl: 20, tr: 60, br: "?" },
          options: ["70", "80", "90", "100"],
          correct: ["80"],
          rule: "60 + 20 = 80."
        },
        {
          id: "w7_qr_q2",
          text: "Find the missing value: 50 -> 40 -> 30 -> {dash1}.",
          dashes: 1,
          options: ["10", "15", "20", "25"],
          correct: ["20"],
          rule: "Decreasing sequence by 10."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 8
  // -----------------------------------------------------------------------
  8: [
    {
      subjectId: "eng_w8",
      subjectTitle: "English Studies",
      topic: "Simple Sentences (Subject and Predicate)",
      questions: [
        {
          id: "w8_eng_q1",
          text: "In 'The brave fireman rescued the cat', the Subject is {dash1}.",
          dashes: 1,
          options: ["The brave fireman", "rescued", "the cat", "fireman rescued"],
          correct: ["The brave fireman"],
          rule: "The subject is the person or thing performing the action."
        },
        {
          id: "w8_eng_q2",
          text: "In 'The little bird sang sweetly', the Predicate is {dash1}.",
          dashes: 1,
          options: ["The little bird", "sang sweetly", "bird sang", "sweetly"],
          correct: ["sang sweetly"],
          rule: "The predicate contains the verb and all words that follow it."
        },
        {
          id: "w8_eng_q3",
          text: "A complete simple sentence must have a Subject and a {dash1}.",
          dashes: 1,
          options: ["Predicate", "Comma", "Question mark", "Pronoun"],
          correct: ["Predicate"],
          rule: "A sentence consists of a subject and a predicate."
        }
      ]
    },
    {
      subjectId: "math_w8",
      subjectTitle: "Mathematics",
      topic: "Highest Common Factor (H.C.F)",
      questions: [
        {
          id: "w8_math_q1",
          text: "The H.C.F of 8 and 12 is {dash1}.",
          dashes: 1,
          options: ["2", "4", "6", "8"],
          correct: ["4"],
          rule: "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. Greatest common is 4."
        },
        {
          id: "w8_math_q2",
          text: "The H.C.F of 15 and 25 is {dash1}.",
          dashes: 1,
          options: ["3", "5", "10", "15"],
          correct: ["5"],
          rule: "Common factors of 15 and 25 is 5."
        },
        {
          id: "w8_math_q3",
          text: "Find the H.C.F of 18 and 24: {dash1}.",
          dashes: 1,
          options: ["3", "4", "6", "8"],
          correct: ["6"],
          rule: "6 divides both 18 and 24 completely."
        }
      ]
    },
    {
      subjectId: "bsci_w8",
      subjectTitle: "Basic Science",
      topic: "States of Matter",
      questions: [
        {
          id: "w8_sci_q1",
          text: "Water changes into ice through the process of {dash1}.",
          dashes: 1,
          options: ["Boiling", "Freezing", "Evaporation", "Melting"],
          correct: ["Freezing"],
          rule: "Freezing cools liquid water into solid ice."
        },
        {
          id: "w8_sci_q2",
          text: "The three states of matter are Solid, Liquid, and {dash1}.",
          dashes: 1,
          options: ["Gas", "Vapour", "Steam", "Ice"],
          correct: ["Gas"],
          rule: "The standard fundamental states of matter are solid, liquid, gas."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 9
  // -----------------------------------------------------------------------
  9: [
    {
      subjectId: "eng_w9",
      subjectTitle: "English Studies",
      topic: "Prepositions of Place and Direction",
      questions: [
        {
          id: "w9_eng_q1",
          text: "The dog jumped {dash1} the low fence.",
          dashes: 1,
          options: ["over", "under", "in", "between"],
          correct: ["over"],
          rule: "'Over' indicates movement above and across."
        },
        {
          id: "w9_eng_q2",
          text: "Put your books {dash1} your school bag.",
          dashes: 1,
          options: ["inside", "on", "at", "against"],
          correct: ["inside"],
          rule: "'Inside' or 'into' indicates enclosing space."
        },
        {
          id: "w9_eng_q3",
          text: "Chidi sat {dash1} Musa and Emeka.",
          dashes: 1,
          options: ["among", "between", "under", "through"],
          correct: ["between"],
          rule: "Use 'between' when referring to two persons or items."
        }
      ]
    },
    {
      subjectId: "math_w9",
      subjectTitle: "Mathematics",
      topic: "Introduction to Decimals",
      questions: [
        {
          id: "w9_math_q1",
          text: "Express 7/10 as a decimal number: {dash1}.",
          dashes: 1,
          options: ["0.07", "0.7", "7.0", "0.77"],
          correct: ["0.7"],
          rule: "Seven tenths = 0.7."
        },
        {
          id: "w9_math_q2",
          text: "What is the value of 5 in 12.5? {dash1}",
          dashes: 1,
          options: ["5 Units", "5 Tens", "5 Tenths", "5 Hundredths"],
          correct: ["5 Tenths"],
          rule: "The first digit after the decimal point is the tenths place."
        },
        {
          id: "w9_math_q3",
          text: "Add: 2.3 + 1.4 = {dash1}.",
          dashes: 1,
          options: ["3.5", "3.7", "4.0", "3.12"],
          correct: ["3.7"],
          rule: "2.3 + 1.4 = 3.7."
        }
      ]
    },
    {
      subjectId: "qr_w9",
      subjectTitle: "Quantitative Reasoning",
      topic: "Fractional and Decimal Relations",
      questions: [
        {
          id: "w9_qr_q1",
          text: "1/2 is to 0.5 as 1/4 is to {dash1}.",
          dashes: 1,
          options: ["0.2", "0.25", "0.4", "0.75"],
          correct: ["0.25"],
          rule: "1/4 expressed in decimal form is 0.25."
        },
        {
          id: "w9_qr_q2",
          text: "If 1/5 = 0.2, then 3/5 = {dash1}.",
          dashes: 1,
          options: ["0.4", "0.5", "0.6", "0.8"],
          correct: ["0.6"],
          rule: "3 × 0.2 = 0.6."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 10
  // -----------------------------------------------------------------------
  10: [
    {
      subjectId: "eng_w10",
      subjectTitle: "English Studies",
      topic: "Conjunctions (and, but, because, although)",
      questions: [
        {
          id: "w10_eng_q1",
          text: "She did not come to school {dash1} she was sick.",
          dashes: 1,
          options: ["because", "but", "so", "and"],
          correct: ["because"],
          rule: "'Because' gives the reason for an action."
        },
        {
          id: "w10_eng_q2",
          text: "He studied hard, {dash1} he still failed the difficult test.",
          dashes: 1,
          options: ["and", "but", "because", "so"],
          correct: ["but"],
          rule: "'But' shows a contrast or unexpected outcome."
        },
        {
          id: "w10_eng_q3",
          text: "Do you prefer tea {dash1} coffee for breakfast?",
          dashes: 1,
          options: ["or", "and", "but", "if"],
          correct: ["or"],
          rule: "'Or' presents a choice between options."
        }
      ]
    },
    {
      subjectId: "math_w10",
      subjectTitle: "Mathematics",
      topic: "Perimeter of Regular Shapes (Rectangles and Squares)",
      questions: [
        {
          id: "w10_math_q1",
          text: "Find the perimeter of a rectangle of length 8cm and breadth 5cm: {dash1} cm.",
          dashes: 1,
          options: ["13", "26", "40", "52"],
          correct: ["26"],
          rule: "Perimeter = 2 × (L + B) = 2 × (8 + 5) = 2 × 13 = 26cm."
        },
        {
          id: "w10_math_q2",
          text: "A square has sides of 6cm. Its perimeter is {dash1} cm.",
          dashes: 1,
          options: ["12", "18", "24", "36"],
          correct: ["24"],
          rule: "Perimeter of square = 4 × length = 4 × 6 = 24cm."
        },
        {
          id: "w10_math_q3",
          text: "Perimeter means the total distance {dash1} a shape.",
          dashes: 1,
          options: ["inside", "around", "across", "under"],
          correct: ["around"],
          rule: "Perimeter is the boundary distance around a 2D shape."
        }
      ]
    },
    {
      subjectId: "comp_w10",
      subjectTitle: "Computer Studies",
      topic: "Input and Output Devices",
      questions: [
        {
          id: "w10_comp_q1",
          text: "Which of the following is an input device? {dash1}",
          dashes: 1,
          options: ["Monitor", "Printer", "Keyboard", "Speaker"],
          correct: ["Keyboard"],
          rule: "A keyboard is used to enter text and data into the computer."
        },
        {
          id: "w10_comp_q2",
          text: "Which device produces hard copies on paper? {dash1}",
          dashes: 1,
          options: ["Monitor", "Printer", "Scanner", "Mouse"],
          correct: ["Printer"],
          rule: "Printers produce physical output (hard copy)."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 11 (END OF TERM COMPREHENSIVE EXAMINATION)
  // -----------------------------------------------------------------------
  11: [
    {
      subjectId: "eng_w11",
      subjectTitle: "English Studies (Terminal Examination)",
      topic: "General Grammar, Comprehension and Vocabulary",
      passage: {
        title: "The National Festival of Arts and Culture",
        text: "Nigeria is a nation blessed with diverse traditions and ethnic groups. Every year, people gather to celebrate the National Festival of Arts and Culture. Pupils perform traditional dances, exhibit pottery, and recite folk tales. This festival teaches young citizens unity, mutual respect, and love for national heritage."
      },
      questions: [
        {
          id: "w11_eng_q1",
          text: "What do young pupils learn from the National Festival? {dash1}",
          dashes: 1,
          options: ["Greed", "Unity and respect", "Idleness", "Fighting"],
          correct: ["Unity and respect"],
          rule: "The passage notes it teaches young citizens unity, mutual respect, and love."
        },
        {
          id: "w11_eng_q2",
          text: "Choose the correct spelling: The girl received an {dash1} for excellence.",
          dashes: 1,
          options: ["aword", "award", "awarde", "awad"],
          correct: ["award"],
          rule: "Correct spelling is 'award'."
        },
        {
          id: "w11_eng_q3",
          text: "The past tense of 'drive' is {dash1}.",
          dashes: 1,
          options: ["drived", "drove", "driven", "driving"],
          correct: ["drove"],
          rule: "'Drive' is an irregular verb: past tense is 'drove'."
        },
        {
          id: "w11_eng_q4",
          text: "Which punctuation mark ends an interrogative sentence? {dash1}",
          dashes: 1,
          options: ["Period (.)", "Question mark (?)", "Comma (,)", "Exclamation mark (!)"],
          correct: ["Question mark (?)"],
          rule: "Questions (interrogative sentences) end with a question mark."
        }
      ]
    },
    {
      subjectId: "math_w11",
      subjectTitle: "Mathematics (Terminal Examination)",
      topic: "Full Term Mathematics Test",
      questions: [
        {
          id: "w11_math_q1",
          text: "Find the sum of 3,450 and 2,150 = {dash1}.",
          dashes: 1,
          options: ["5,500", "5,600", "5,700", "5,800"],
          correct: ["5,600"],
          rule: "3,450 + 2,150 = 5,600."
        },
        {
          id: "w11_math_q2",
          text: "What is 3/4 - 1/4 in simplest form? {dash1}",
          dashes: 1,
          options: ["2/4", "1/2", "1/4", "4/4"],
          correct: ["1/2"],
          rule: "3/4 - 1/4 = 2/4, which simplifies to 1/2."
        },
        {
          id: "w11_math_q3",
          text: "Find the L.C.M of 6 and 9: {dash1}.",
          dashes: 1,
          options: ["15", "18", "27", "36"],
          correct: ["18"],
          rule: "Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. Smallest is 18."
        },
        {
          id: "w11_math_q4",
          text: "Find the H.C.F of 12 and 18: {dash1}.",
          dashes: 1,
          options: ["2", "3", "6", "12"],
          correct: ["6"],
          rule: "The largest number dividing both 12 and 18 without remainder is 6."
        },
        {
          id: "w11_math_q5",
          text: "The perimeter of a rectangle with length 10cm and width 4cm is {dash1} cm.",
          dashes: 1,
          options: ["14", "24", "28", "40"],
          correct: ["28"],
          rule: "2 × (10 + 4) = 2 × 14 = 28cm."
        }
      ]
    },
    {
      subjectId: "qr_w11",
      subjectTitle: "Quantitative Reasoning (Terminal Examination)",
      topic: "Terminal Revision of Diagram Patterns",
      questions: [
        {
          id: "w11_qr_q1",
          text: "Find the missing number in this 4-box diagram: {dash1}",
          dashes: 1,
          diagram: { tl: 90, bl: 60, tr: 120, br: "?" },
          options: ["130", "140", "150", "160"],
          correct: ["150"],
          rule: "Loop adds 30: 120 + 30 = 150."
        },
        {
          id: "w11_qr_q2",
          text: "Find the missing value in the bottom-left box: {dash1}",
          dashes: 1,
          diagram: { tl: 150, bl: "?", tr: 180, br: 210 },
          options: ["100", "110", "120", "130"],
          correct: ["120"],
          rule: "Top-Left 150 - 30 = 120."
        }
      ]
    },
    {
      subjectId: "gen_w11",
      subjectTitle: "General Studies & Science (Terminal Examination)",
      topic: "Computer & Basic Science Revision",
      questions: [
        {
          id: "w11_gen_q1",
          text: "Which part of the computer displays results on the screen? {dash1}",
          dashes: 1,
          options: ["Mouse", "Monitor", "Keyboard", "UPS"],
          correct: ["Monitor"],
          rule: "The monitor is the visual display unit."
        },
        {
          id: "w11_gen_q2",
          text: "Animals that eat only plants are called {dash1}.",
          dashes: 1,
          options: ["Carnivores", "Herbivores", "Omnivores", "Parasites"],
          correct: ["Herbivores"],
          rule: "Herbivores feed directly on plant materials."
        }
      ]
    }
  ]
};

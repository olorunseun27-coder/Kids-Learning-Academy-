/**
 * Nigerian Basic 4 (Primary 4) Complete Question Bank & Live Chalkboard
 * Fully mapped to the exact school curriculum and weekly assessment exercises.
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
      tray: ["Rule: Most nouns ending in '-f' or '-fe' change to '-ves'."]
    }
  ],
  math_fractions: [
    {
      q: "Find 3 equivalent fractions for 1/2",
      num: 1, den: 2,
      multipliers: [2, 3, 4],
      tray: ["Rule: Multiply both numerator and denominator by the same number."]
    },
    {
      q: "Find 3 equivalent fractions for 2/3",
      num: 2, den: 3,
      multipliers: [2, 3, 4],
      tray: ["2/3 x 2/2 = 4/6, x 3/3 = 6/9, x 4/4 = 8/12."]
    }
  ],
  vr_week1: [
    {
      q: "Letter Pair Sequence: GJ, HK, IL, ?",
      type: "letter_pairs",
      letters1: ["G", "H", "I", "J"],
      letters2: ["J", "K", "L", "M"],
      answer: "JM",
      tray: ["First letters step forward: G, H, I, J. Second letters: J, K, L, M."]
    }
  ],
  qr_week1: [
    {
      q: "Counting in 30's 4-Box Pattern",
      type: "qr_loop",
      bl: 0, tl: 30, tr: 60, answer: 90,
      tray: ["Loop: Bottom-Left + 30 -> Top-Left + 30 -> Top-Right + 30 -> Bottom-Right."]
    }
  ],
  igbo_week1: [
    {
      q: "Gịnị bụ ụdaume dị n'okwu 'Aka'?",
      a: "A",
      tray: ["Ụdaume asatọ dị n'asụsụ Igbo: a, e, i, ị, o, ọ, u, ụ."]
    }
  ],
  eng_week2: [
    {
      q: "Aural Discrimination: /æ/ vs /ɑː/",
      type: "phonics",
      shortList: ["pat", "mat", "cat", "hat", "at", "back"],
      longList: ["part", "mart", "cart", "heart", "art", "barn", "bark"],
      tray: ["/æ/ is short (pat, mat). /ɑː/ is long (part, cart)."]
    }
  ],
  math_week2: [
    {
      q: "Complete the sequence: 80, 90, ?, ?, 120, 130",
      a: "100, 110",
      tray: ["Counting forward by 10s."]
    }
  ],
  comp_week2: [
    {
      q: "Information not yet processed is called ______.",
      a: "data",
      tray: ["Data consists of raw, unprocessed facts."]
    }
  ],
  math_week7: [
    {
      q: "Find the Lowest Common Multiple (L.C.M) of 4 and 6",
      a: "12",
      tray: ["Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. Smallest is 12."]
    }
  ],
  english_week7: [
    {
      q: "The person who writes a book is called the ______.",
      a: "author",
      tray: ["An author writes the story; an illustrator draws the pictures."]
    }
  ],
  math_week8: [
    {
      q: "Find the Highest Common Factor (H.C.F) of 8 and 12",
      a: "4",
      tray: ["Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. H.C.F = 4."]
    }
  ],
  english_week8: [
    {
      q: "Identify parts: 'The brave fireman rescued the cat.'",
      type: "grammar",
      subject: "The brave fireman",
      predicate: "rescued the cat",
      rule: "Subject is the doer; predicate tells what was done.",
      tray: ["Subject: The brave fireman | Predicate: rescued the cat"]
    }
  ]
};

// =========================================================================
// 2. COMPLETE ASSESSMENTS BANK (WEEKS 1 — 11)
// =========================================================================
window.WEEKLY_CURRICULUM = {
  // -----------------------------------------------------------------------
  // WEEK 1: KICK OFF TESTS
  // -----------------------------------------------------------------------
  1: [
    {
      subjectId: "bst_w1",
      subjectTitle: "Basic Science and Technology",
      topic: "Kick off Test: Technology",
      questions: [
        {
          id: "w1_bst_q1",
          text: "The application of scientific knowledge to solve practical problems is {dash1}.",
          dashes: 1,
          options: ["energy", "technology", "power"],
          correct: ["technology"],
          rule: "Technology is science put into practical application."
        },
        {
          id: "w1_bst_q2",
          text: "{dash1}, {dash2} and {dash3} are products of technology.",
          dashes: 3,
          options: ["wood", "radio", "phones", "sand", "cars"],
          correct: ["radio", "phones", "cars"],
          rule: "Radios, phones, and cars are manufactured technological inventions."
        },
        {
          id: "w1_bst_q3",
          text: "Two forms of technology are {dash1} and {dash2}.",
          dashes: 2,
          options: ["developed", "controlled", "undeveloped"],
          correct: ["developed", "undeveloped"],
          rule: "Technology is classified as developed or undeveloped."
        },
        {
          id: "w1_bst_q4",
          text: "Phones are developed technology in the area of {dash1}.",
          dashes: 1,
          options: ["transportation", "communication", "building"],
          correct: ["communication"],
          rule: "Telephones allow people to speak and communicate over distances."
        }
      ]
    },
    {
      subjectId: "comp_w1",
      subjectTitle: "Computer Studies",
      topic: "Kick off Test: Computer Mouse",
      questions: [
        {
          id: "w1_comp_q1",
          text: "A computer mouse is an {dash1} device.",
          dashes: 1,
          options: ["input", "output", "storage"],
          correct: ["input"],
          rule: "A mouse sends pointing and clicking commands into the computer."
        },
        {
          id: "w1_comp_q2",
          text: "The small arrow moving on the computer screen controlled by the mouse is called a {dash1}.",
          dashes: 1,
          options: ["pointer", "roller", "wire"],
          correct: ["pointer"],
          rule: "The mouse moves the on-screen cursor/pointer."
        }
      ]
    },
    {
      subjectId: "phe_w1",
      subjectTitle: "Physical and Health Education",
      topic: "Kick off Test: First Aid",
      questions: [
        {
          id: "w1_phe_q1",
          text: "Four things found in a first aid box are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          options: ["cotton wool", "razor", "cigarette", "paracetamol", "pepper", "GIV"],
          correct: ["cotton wool", "razor", "paracetamol", "GIV"],
          rule: "Cotton wool, razor blade, paracetamol and GIV are standard first aid items."
        },
        {
          id: "w1_phe_q2",
          text: "The symbol on a first aid box is a {dash1}.",
          dashes: 1,
          options: ["square", "cross", "circle"],
          correct: ["cross"],
          rule: "A red or green cross is the universal medical first aid symbol."
        },
        {
          id: "w1_phe_q3",
          text: "First aid is given to an injured person after seeing the doctor: {dash1}.",
          dashes: 1,
          options: ["True", "False"],
          correct: ["False"],
          rule: "First aid is the immediate assistance given BEFORE the doctor arrives."
        },
        {
          id: "w1_phe_q4",
          text: "Anybody who is trained can give first aid: {dash1}.",
          dashes: 1,
          options: ["True", "False"],
          correct: ["True"],
          rule: "Anyone trained with basic first aid skills can provide help."
        },
        {
          id: "w1_phe_q5",
          text: "First aid tends to relieve the injured before medical attention: {dash1}.",
          dashes: 1,
          options: ["True", "False"],
          correct: ["True"],
          rule: "First aid stabilizes the patient and minimizes suffering."
        }
      ]
    },
    {
      subjectId: "crs_w1",
      subjectTitle: "Christian Religious Studies",
      topic: "The Good Samaritan",
      questions: [
        {
          id: "w1_crs_q1",
          text: "The story of the good Samaritan teaches us {dash1}.",
          dashes: 1,
          options: ["prophecy", "prayer", "love"],
          correct: ["love"],
          rule: "Jesus taught that loving our neighbour means showing mercy and compassion."
        },
        {
          id: "w1_crs_q2",
          text: "The traveller was going from Jerusalem to {dash1}.",
          dashes: 1,
          options: ["Nigeria", "Israel", "Jericho"],
          correct: ["Jericho"],
          rule: "Luke 10:30 describes a man going down from Jerusalem to Jericho."
        },
        {
          id: "w1_crs_q3",
          text: "The person who helped the wounded traveller was a {dash1}.",
          dashes: 1,
          options: ["pastor", "governor", "Samaritan"],
          correct: ["Samaritan"],
          rule: "A Samaritan stopped and bandaged his wounds."
        },
        {
          id: "w1_crs_q4",
          text: "The man was attacked by {dash1}.",
          dashes: 1,
          options: ["the king", "robbers", "the Pharisees"],
          correct: ["robbers"],
          rule: "Armed bandits beat and stripped him."
        },
        {
          id: "w1_crs_q5",
          text: "Jesus teaches us to love our {dash1}.",
          dashes: 1,
          options: ["neighbours", "enemies only", "money"],
          correct: ["neighbours"],
          rule: "'Love your neighbour as yourself'."
        }
      ]
    },
    {
      subjectId: "soc_w1",
      subjectTitle: "Social Studies",
      topic: "Culture and Our Society",
      questions: [
        {
          id: "w1_soc_q1",
          text: "{dash1} is the people's total way of life.",
          dashes: 1,
          options: ["tradition", "culture", "prayer"],
          correct: ["culture"],
          rule: "Culture encompasses speech, beliefs, morals, dress, and food."
        },
        {
          id: "w1_soc_q2",
          text: "Material culture can be {dash1}.",
          dashes: 1,
          options: ["celebrated", "touched"],
          correct: ["touched"],
          rule: "Material culture consists of physical, tangible objects like clothes and pots."
        },
        {
          id: "w1_soc_q3",
          text: "Three major religions in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          options: ["Christianity", "Islam", "Traditional", "Buddhism"],
          correct: ["Christianity", "Islam", "Traditional"],
          rule: "Christianity, Islam, and African Traditional Religion are the three main religions."
        },
        {
          id: "w1_soc_q4",
          text: "The three major tribes in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          options: ["Igbo", "Ogoja", "Yoruba", "Hausa", "Efik"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo are the largest ethnic groups."
        }
      ]
    },
    {
      subjectId: "civ_w1",
      subjectTitle: "Civic Education",
      topic: "National Symbols",
      questions: [
        {
          id: "w1_civ_q1",
          text: "{dash1}, {dash2} and {dash3} are national symbols.",
          dashes: 3,
          options: ["car", "flag", "coat of arm", "national anthem", "house"],
          correct: ["flag", "coat of arm", "national anthem"],
          rule: "National symbols represent the sovereignty of the nation."
        },
        {
          id: "w1_civ_q2",
          text: "The beginning of the Nigerian national anthem is '{dash1}'.",
          dashes: 1,
          options: ["beggars are everywhere", "Arise O Compatriots"],
          correct: ["Arise O Compatriots"],
          rule: "The national anthem begins with 'Arise, O Compatriots'."
        },
        {
          id: "w1_civ_q3",
          text: "On the coat of arms, we have an eagle and two {dash1}.",
          dashes: 1,
          options: ["horses", "goats", "elephants"],
          correct: ["horses"],
          rule: "Two white horses support the shield on the coat of arms."
        },
        {
          id: "w1_civ_q4",
          text: "The colour of the two horses on the coat of arms is {dash1}.",
          dashes: 1,
          options: ["black", "brown", "white"],
          correct: ["white"],
          rule: "The two supporting horses are pure white, representing dignity."
        }
      ]
    },
    {
      subjectId: "agr_w1",
      subjectTitle: "Agricultural Science",
      topic: "Crops and Farm Tools",
      questions: [
        {
          id: "w1_agr_q1",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are crops produced by farmers.",
          dashes: 4,
          options: ["yam", "rice", "maize", "cassava", "cement"],
          correct: ["yam", "rice", "maize", "cassava"],
          rule: "Yam, rice, maize, and cassava are widely cultivated food crops."
        },
        {
          id: "w1_agr_q2",
          text: "Three sweet fruits are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          options: ["orange", "mango", "apple", "gravel"],
          correct: ["orange", "mango", "apple"],
          rule: "Oranges, mangoes, and apples are tree fruits."
        },
        {
          id: "w1_agr_q3",
          text: "Goat and cow are examples of {dash1} animals.",
          dashes: 1,
          options: ["wild", "domestic", "sea"],
          correct: ["domestic"],
          rule: "Animals kept and raised by humans are domestic animals."
        }
      ]
    },
    {
      subjectId: "hec_w1",
      subjectTitle: "Home Economics",
      topic: "Cleanliness and Personal Grooming",
      questions: [
        {
          id: "w1_hec_q1",
          text: "We make our mouth clean by {dash1} and {dash2}.",
          dashes: 2,
          options: ["brushing", "eating", "washing"],
          correct: ["brushing", "washing"],
          rule: "Brushing teeth and rinsing/washing the mouth prevents decay and bad odour."
        },
        {
          id: "w1_hec_q2",
          text: "We use {dash1} and {dash2} to clean our mouth.",
          dashes: 2,
          options: ["toothpaste", "brush", "sand", "soap"],
          correct: ["toothpaste", "brush"],
          rule: "Toothbrush and toothpaste are standard dental hygiene tools."
        },
        {
          id: "w1_hec_q3",
          text: "{dash1} and {dash2} are used for body maintenance.",
          dashes: 2,
          options: ["soap", "zinc", "body cream", "cement"],
          correct: ["soap", "body cream"],
          rule: "Bathing soap and skin cream maintain skin hygiene."
        },
        {
          id: "w1_hec_q4",
          text: "Shoes are used to protect the {dash1}.",
          dashes: 1,
          options: ["head", "eyes", "foot"],
          correct: ["foot"],
          rule: "Footwear shields our feet from sharp objects and dirt."
        }
      ]
    },
    {
      subjectId: "vr_w1_sub",
      subjectTitle: "Verbal Reasoning",
      topic: "Letter Pattern Sequence",
      questions: [
        {
          id: "w1_vr_q1",
          text: "Complete: GJ, HK, IL, {dash1}, {dash2}",
          dashes: 2,
          options: ["JM", "KN", "LO", "MP"],
          correct: ["JM", "KN"],
          rule: "First letters: G, H, I, J, K. Second letters: J, K, L, M, N."
        },
        {
          id: "w1_vr_q2",
          text: "Complete: AM, BN, CO, {dash1}, {dash2}",
          dashes: 2,
          options: ["DP", "EQ", "FR", "GS"],
          correct: ["DP", "EQ"],
          rule: "A->B->C->D->E and M->N->O->P->Q."
        },
        {
          id: "w1_vr_q3",
          text: "Complete: EH, FI, {dash1}, {dash2}, IL",
          dashes: 2,
          options: ["GJ", "HK", "JM", "KN"],
          correct: ["GJ", "HK"],
          rule: "E, F, G, H, I followed by H, I, J, K, L."
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
          text: "Which of these words has the short vowel sound /æ/ as in 'pat'? {dash1}",
          dashes: 1,
          options: ["cat", "cart", "part", "bark"],
          correct: ["cat"],
          rule: "'Cat' has the short vowel sound /æ/."
        },
        {
          id: "w2_eng_q2",
          text: "Which of these words has the long vowel sound /ɑː/ as in 'part'? {dash1}",
          dashes: 1,
          options: ["mat", "hat", "heart", "back"],
          correct: ["heart"],
          rule: "'Heart' contains the long /ɑː/ sound."
        },
        {
          id: "w2_eng_q3",
          text: "In the word 'barn', the vowel sound is {dash1}.",
          dashes: 1,
          options: ["/ɑː/", "/æ/", "/e/"],
          correct: ["/ɑː/"],
          rule: "'Barn' is pronounced with the long /ɑː/ sound."
        }
      ]
    },
    {
      subjectId: "math_w2",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers Sequence",
      questions: [
        {
          id: "w2_math_q1",
          text: "80, 90, {dash1}, {dash2}, 120, 130",
          dashes: 2,
          options: ["100", "110", "115", "125"],
          correct: ["100", "110"],
          rule: "Counting forward by 10s: 90 + 10 = 100, 100 + 10 = 110."
        },
        {
          id: "w2_math_q2",
          text: "78, 128, 178, {dash1}, {dash2}",
          dashes: 2,
          options: ["228", "278", "298", "328"],
          correct: ["228", "278"],
          rule: "Adding 50 each time: 178 + 50 = 228; 228 + 50 = 278."
        },
        {
          id: "w2_math_q3",
          text: "800, 900, {dash1}, 1,100, 1,200",
          dashes: 1,
          options: ["1,000", "1,050", "950"],
          correct: ["1,000"],
          rule: "Counting in hundreds: 900 + 100 = 1,000."
        },
        {
          id: "w2_math_q4",
          text: "200,000, 300,000, 400,000, {dash1}, {dash2}, 700,000",
          dashes: 2,
          options: ["500,000", "600,000", "550,000", "650,000"],
          correct: ["500,000", "600,000"],
          rule: "Adding 100,000 at each successive interval."
        }
      ]
    },
    {
      subjectId: "igbo_w2",
      subjectTitle: "Asụsụ Igbo",
      topic: "Ụnụọgụgụ 1 — 200 (Numbers)",
      questions: [
        {
          id: "w2_igb_q1",
          text: "Otu narị na iri abụọ = {dash1}",
          dashes: 1,
          options: ["120", "102", "112", "200"],
          correct: ["120"],
          rule: "Otu narị (100) + iri abụọ (20) = 120."
        },
        {
          id: "w2_igb_q2",
          text: "Iri isii na otu = {dash1}",
          dashes: 1,
          options: ["61", "16", "60", "71"],
          correct: ["61"],
          rule: "Iri isii (60) + otu (1) = 61."
        },
        {
          id: "w2_igb_q3",
          text: "Iri asaa = {dash1}",
          dashes: 1,
          options: ["70", "17", "77", "80"],
          correct: ["70"],
          rule: "Iri asaa bụ 70 na bekee."
        },
        {
          id: "w2_igb_q4",
          text: "Iri na atọ = {dash1}",
          dashes: 1,
          options: ["13", "30", "31", "3"],
          correct: ["13"],
          rule: "Iri (10) + na atọ (3) = 13."
        }
      ]
    },
    {
      subjectId: "comp_w2",
      subjectTitle: "Computer Studies",
      topic: "Data and the CPU",
      passage: {
        title: "What is Data?",
        text: "Data are raw facts or unprocessed information which has been keyed, transmitted and stored in a computer but has not yet been processed. Data are processed by the CPU, otherwise called the system unit."
      },
      questions: [
        {
          id: "w2_comp_q1",
          text: "Information that is not yet processed is {dash1}.",
          dashes: 1,
          options: ["news", "fake", "data"],
          correct: ["data"],
          rule: "Data refers to raw, unprocessed facts."
        },
        {
          id: "w2_comp_q2",
          text: "Data is stored inside the {dash1}.",
          dashes: 1,
          options: ["radio", "computer", "sun"],
          correct: ["computer"],
          rule: "Computers store data on memory and hard drives."
        },
        {
          id: "w2_comp_q3",
          text: "{dash1} processes data in the computer.",
          dashes: 1,
          options: ["mouse", "cable", "CPU"],
          correct: ["CPU"],
          rule: "The Central Processing Unit carries out calculations and processing."
        },
        {
          id: "w2_comp_q4",
          text: "Another name for CPU is the {dash1}.",
          dashes: 1,
          options: ["Area unit", "Control board", "System unit"],
          correct: ["System unit"],
          rule: "The CPU box is often called the system unit."
        }
      ]
    },
    {
      subjectId: "bst_w2",
      subjectTitle: "Basic Science and Technology",
      topic: "Changes in Nature",
      questions: [
        {
          id: "w2_bst_q1",
          text: "Two types of change are {dash1} and {dash2}.",
          dashes: 2,
          options: ["temporary", "permanent", "transfer"],
          correct: ["temporary", "permanent"],
          rule: "Changes can be temporary (reversible) or permanent (irreversible)."
        },
        {
          id: "w2_bst_q2",
          text: "A {dash1} change can be reversed to its original form.",
          dashes: 1,
          options: ["temporary", "permanent"],
          correct: ["temporary"],
          rule: "Melting ice to water and freezing it back is a temporary change."
        },
        {
          id: "w2_bst_q3",
          text: "A child growing into an adult man is a {dash1} change.",
          dashes: 1,
          options: ["temporary", "permanent"],
          correct: ["permanent"],
          rule: "Growth in humans cannot be reversed back to infancy."
        },
        {
          id: "w2_bst_q4",
          text: "A kitten grows up to be a {dash1}.",
          dashes: 1,
          options: ["dog", "cat", "goat"],
          correct: ["cat"],
          rule: "A kitten is the young offspring of a cat."
        }
      ]
    },
    {
      subjectId: "phe_w2",
      subjectTitle: "Physical and Health Education",
      topic: "Athletics: Table Tennis",
      questions: [
        {
          id: "w2_phe_q1",
          text: "How many players play a singles match of table tennis? {dash1}",
          dashes: 1,
          options: ["2", "4", "7"],
          correct: ["2"],
          rule: "Singles table tennis is contested between 2 players."
        },
        {
          id: "w2_phe_q2",
          text: "The table tennis board is always in a {dash1} shape.",
          dashes: 1,
          options: ["circle", "square", "rectangular"],
          correct: ["rectangular"],
          rule: "Standard table tennis tables are rectangular (9ft by 5ft)."
        },
        {
          id: "w2_phe_q3",
          text: "{dash1} and {dash2} are used to play table tennis.",
          dashes: 2,
          options: ["bat", "ball", "tyre"],
          correct: ["bat", "ball"],
          rule: "Players hit the celluloid ball using rubber-faced bats/paddles."
        },
        {
          id: "w2_phe_q4",
          text: "To start or continue the game, the first player makes a {dash1}.",
          dashes: 1,
          options: ["service", "punch", "play out"],
          correct: ["service"],
          rule: "A rally begins when the server performs a service."
        }
      ]
    },
    {
      subjectId: "vr_w2",
      subjectTitle: "Verbal Reasoning",
      topic: "Forming New Words",
      questions: [
        {
          id: "w2_vr_q1",
          text: "From 'Shoe', we get the new word: {dash1}",
          dashes: 1,
          options: ["hoe", "he", "she"],
          correct: ["hoe"],
          rule: "'Shoe' without 'S' is 'hoe'."
        },
        {
          id: "w2_vr_q2",
          text: "From 'Hate', we get: {dash1}",
          dashes: 1,
          options: ["ate", "tea", "hat"],
          correct: ["ate"],
          rule: "'Hate' contains 'ate'."
        },
        {
          id: "w2_vr_q3",
          text: "From 'Monday', we get: {dash1}",
          dashes: 1,
          options: ["day", "mon", "man"],
          correct: ["day"],
          rule: "'Monday' ends with the word 'day'."
        },
        {
          id: "w2_vr_q4",
          text: "From 'Cup', we get: {dash1}",
          dashes: 1,
          options: ["up", "cap", "us"],
          correct: ["up"],
          rule: "'Cup' contains 'up'."
        }
      ]
    },
    {
      subjectId: "qr_w2",
      subjectTitle: "Quantitative Reasoning",
      topic: "Roman Numerals",
      questions: [
        {
          id: "w2_qr_q1",
          text: "XI = {dash1}",
          dashes: 1,
          options: ["11", "9", "12", "15"],
          correct: ["11"],
          rule: "X (10) + I (1) = 11."
        },
        {
          id: "w2_qr_q2",
          text: "XL = {dash1}",
          dashes: 1,
          options: ["40", "60", "50", "90"],
          correct: ["40"],
          rule: "L (50) - X (10) = 40."
        },
        {
          id: "w2_qr_q3",
          text: "VIII = {dash1}",
          dashes: 1,
          options: ["8", "7", "13", "6"],
          correct: ["8"],
          rule: "V (5) + III (3) = 8."
        },
        {
          id: "w2_qr_q4",
          text: "IV = {dash1}",
          dashes: 1,
          options: ["4", "6", "5", "9"],
          correct: ["4"],
          rule: "V (5) - I (1) = 4."
        }
      ]
    },
    {
      subjectId: "fr_w2",
      subjectTitle: "French Studies",
      topic: "Les Nombres (1 — 20)",
      questions: [
        {
          id: "w2_fr_q1",
          text: "Dix = {dash1}",
          dashes: 1,
          options: ["10", "15"],
          correct: ["10"],
          rule: "'Dix' is 10 in French."
        },
        {
          id: "w2_fr_q2",
          text: "Vingt = {dash1}",
          dashes: 1,
          options: ["20", "16"],
          correct: ["20"],
          rule: "'Vingt' is 20 in French."
        },
        {
          id: "w2_fr_q3",
          text: "Dix-sept = {dash1}",
          dashes: 1,
          options: ["17", "11"],
          correct: ["17"],
          rule: "10 + 7 = 17 (dix-sept)."
        },
        {
          id: "w2_fr_q4",
          text: "Quatre = {dash1}",
          dashes: 1,
          options: ["4", "14"],
          correct: ["4"],
          rule: "'Quatre' is 4 in French."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 3
  // -----------------------------------------------------------------------
  3: [
    {
      subjectId: "math_w3",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers Sequence",
      questions: [
        {
          id: "w3_math_q1",
          text: "120,000; 130,000; 140,000; {dash1}, {dash2}",
          dashes: 2,
          options: ["150,000", "160,000", "170,000", "180,000"],
          correct: ["150,000", "160,000"],
          rule: "Counting in ten-thousands."
        },
        {
          id: "w3_math_q2",
          text: "900,000; 800,000; {dash1}; 600,000; 500,000",
          dashes: 1,
          options: ["700,000", "750,000", "650,000"],
          correct: ["700,000"],
          rule: "Decreasing in 100,000 intervals."
        },
        {
          id: "w3_math_q3",
          text: "Twenty, thirty, forty, {dash1}, {dash2}",
          dashes: 2,
          options: ["fifty", "sixty", "seventy", "eighty"],
          correct: ["fifty", "sixty"],
          rule: "Words sequence counting in tens."
        },
        {
          id: "w3_math_q4",
          text: "Three, eight, thirteen, {dash1}, {dash2}",
          dashes: 2,
          options: ["eighteen", "twenty-three", "twenty-five", "thirty"],
          correct: ["eighteen", "twenty-three"],
          rule: "Pattern adds 5 at each step."
        }
      ]
    },
    {
      subjectId: "comp_w3",
      subjectTitle: "Computer Studies",
      topic: "Information & Media",
      passage: {
        title: "Processed Data is Information",
        text: "Information is the outcome of data. When data are processed, information is obtained. Information can be transmitted through electronic media (telephone, television, radio) and non-electronic media (oral communication, beating drums, town crying)."
      },
      questions: [
        {
          id: "w3_comp_q1",
          text: "The result of processed data is called {dash1}.",
          dashes: 1,
          options: ["letter", "mail", "information"],
          correct: ["information"],
          rule: "Processed data produces meaningful information."
        },
        {
          id: "w3_comp_q2",
          text: "Information interpreted gives {dash1} to data.",
          dashes: 1,
          options: ["warning", "meaning", "degree"],
          correct: ["meaning"],
          rule: "Information gives context and meaning to facts."
        },
        {
          id: "w3_comp_q3",
          text: "{dash1}, {dash2} and {dash3} are electronic media.",
          dashes: 3,
          options: ["radio", "television", "telephone", "town crying"],
          correct: ["radio", "television", "telephone"],
          rule: "Radio, TV, and phones rely on electrical circuits and signals."
        },
        {
          id: "w3_comp_q4",
          text: "Town crying and beating drums are {dash1} media.",
          dashes: 1,
          options: ["electronic", "non-electronic"],
          correct: ["non-electronic"],
          rule: "Traditional channels do not use electronic components."
        }
      ]
    },
    {
      subjectId: "bst_w3",
      subjectTitle: "Basic Science and Technology",
      topic: "Our Weather",
      questions: [
        {
          id: "w3_bst_q1",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are types of weather.",
          dashes: 4,
          options: ["hot", "cold", "cloudy", "rainy", "stone"],
          correct: ["hot", "cold", "cloudy", "rainy"],
          rule: "Weather conditions vary among hot, cold, rainy, and cloudy days."
        },
        {
          id: "w3_bst_q2",
          text: "The direction of the wind is measured using a {dash1}.",
          dashes: 1,
          options: ["metre", "windvane", "tape"],
          correct: ["windvane"],
          rule: "A windvane points in the direction wind blows."
        },
        {
          id: "w3_bst_q3",
          text: "A {dash1} measures the amount of rainfall.",
          dashes: 1,
          options: ["rain drop", "gallon", "rainguage"],
          correct: ["rainguage"],
          rule: "A raingauge collects and measures precipitation in millimeters."
        }
      ]
    },
    {
      subjectId: "agr_w3",
      subjectTitle: "Agricultural Science",
      topic: "Classification of Crops: Tuber Crops",
      passage: {
        title: "Tuber Crops",
        text: "Tuber crops store up their food under the ground. During harvest, they are dug up from under the soil. Examples include yam, cocoyam, carrot, sweet potato, ginger, and cassava."
      },
      questions: [
        {
          id: "w3_agr_q1",
          text: "Crops that store food under the ground are called {dash1} crops.",
          dashes: 1,
          options: ["tuber", "cereal", "grain"],
          correct: ["tuber"],
          rule: "Tubers are enlarged storage organs that develop below ground."
        },
        {
          id: "w3_agr_q2",
          text: "Four examples of tuber crops are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          options: ["yam", "cocoyam", "cassava", "potato", "rice"],
          correct: ["yam", "cocoyam", "cassava", "potato"],
          rule: "Yam, cocoyam, cassava, and potato grow underground."
        },
        {
          id: "w3_agr_q3",
          text: "Carrot is a tuber crop: {dash1}.",
          dashes: 1,
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Carrots store energy in their enlarged underground taproot."
        }
      ]
    },
    {
      subjectId: "vr_w3",
      subjectTitle: "Verbal Reasoning",
      topic: "Compound Words Breakdown",
      questions: [
        {
          id: "w3_vr_q1",
          text: "weekend = {dash1} + {dash2}",
          dashes: 2,
          options: ["week", "end", "day", "we"],
          correct: ["week", "end"],
          rule: "'Week' + 'end' = 'weekend'."
        },
        {
          id: "w3_vr_q2",
          text: "pickup = {dash1} + {dash2}",
          dashes: 2,
          options: ["pick", "up", "pack", "on"],
          correct: ["pick", "up"],
          rule: "'Pick' + 'up' = 'pickup'."
        },
        {
          id: "w3_vr_q3",
          text: "soften = {dash1} + {dash2}",
          dashes: 2,
          options: ["soft", "en", "ten", "of"],
          correct: ["soft", "en"],
          rule: "'Soft' + 'en' = 'soften'."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEK 4: COMPLETE DETAILED QUESTIONS
  // -----------------------------------------------------------------------
  4: [
    {
      subjectId: "eng_w4",
      subjectTitle: "English Studies",
      topic: "Figures of Speech: Simile and Metaphor",
      questions: [
        {
          id: "w4_eng_q1",
          text: "As cold as {dash1}.",
          dashes: 1,
          options: ["fridge", "water", "ice"],
          correct: ["ice"],
          rule: "Standard idiom simile: 'as cold as ice'."
        },
        {
          id: "w4_eng_q2",
          text: "As slow as a {dash1}.",
          dashes: 1,
          options: ["snail", "snake", "worm"],
          correct: ["snail"],
          rule: "A snail is famous for slow crawling speed."
        },
        {
          id: "w4_eng_q3",
          text: "As sweet as {dash1}.",
          dashes: 1,
          options: ["honey", "food", "soup"],
          correct: ["honey"],
          rule: "Traditional simile: 'as sweet as honey'."
        },
        {
          id: "w4_eng_q4",
          text: "As easy as {dash1}.",
          dashes: 1,
          options: ["maths", "ABC", "spelling"],
          correct: ["ABC"],
          rule: "'As easy as ABC' represents simplicity."
        },
        {
          id: "w4_eng_q5",
          text: "Metaphor: 'Nweke is an elephant' means Nweke is very {dash1}.",
          dashes: 1,
          options: ["big", "small", "dead"],
          correct: ["big"],
          rule: "Comparing someone directly to an elephant indicates very large size."
        },
        {
          id: "w4_eng_q6",
          text: "Metaphor: 'He is a tortoise' means he is {dash1}.",
          dashes: 1,
          options: ["tricky", "slow", "handsome"],
          correct: ["tricky"],
          rule: "In West African folklore, the tortoise symbolizes cunning tricks."
        },
        {
          id: "w4_eng_q7",
          text: "Metaphor: 'Women are gold' means women are precious and {dash1}.",
          dashes: 1,
          options: ["costly", "tall", "weak"],
          correct: ["costly"],
          rule: "Gold stands for high value, preciousness, and costliness."
        }
      ]
    },
    {
      subjectId: "igbo_w4",
      subjectTitle: "Asụsụ Igbo",
      topic: "Agwa ọma na Agwa ọjọọ (Good and Bad Character)",
      questions: [
        {
          id: "w4_igb_q1",
          text: "{dash1}, {dash2}, {dash3} na {dash4} bụ agwa ọma mmadụ na-akpa.",
          dashes: 4,
          options: ["ikwu eziokwu", "ịsọpụrụ okenye", "ije ozi", "ịhụnanya", "igbu mmadụ", "ịgọ ọjọọ"],
          correct: ["ikwu eziokwu", "ịsọpụrụ okenye", "ije ozi", "ịhụnanya"],
          rule: "Ikwu eziokwu, ịsọpụrụ okenye, na ịhụnanya bụ agwa ọma na-eweta udo."
        },
        {
          id: "w4_igb_q2",
          text: "{dash1}, {dash2} na {dash3} bụ agwa ọjọọ mmadụ na-akpa.",
          dashes: 3,
          options: ["izu ohi", "igbu mmadụ", "ịtọrọ mmadụ", "ikpe ekpere"],
          correct: ["izu ohi", "igbu mmadụ", "ịtọrọ mmadụ"],
          rule: "Izu ohi na igbu mmadụ bụ mmehie dị njọ."
        },
        {
          id: "w4_igb_q3",
          text: "Agwa ọma na-ewetara mmadụ {dash1}.",
          dashes: 1,
          options: ["otito", "ọnwụ"],
          correct: ["otito"],
          rule: "Ezi agwa na-eweta nkwanye ùgwù na otito."
        },
        {
          id: "w4_igb_q4",
          text: "{dash1} na {dash2} bụ ahụhụ na-eso agwa ọjọọ.",
          dashes: 2,
          options: ["ije nga", "ịnata mkparị", "ịga akwụkwọ"],
          correct: ["ije nga", "ịnata mkparị"],
          rule: "Onye na-eme ihe ọjọọ na-eje nga ma nata mkparị."
        }
      ]
    },
    {
      subjectId: "comp_w4",
      subjectTitle: "Computer Studies",
      topic: "Sources of Information",
      passage: {
        title: "Modern and Ancient Information",
        text: "There are modern and ancient sources of information. Ancient sources include oral transmission, town crying, fire lighting, blowing flutes, wooden gong, and drums. Modern sources include writing, photocopying, video, radio, and computers."
      },
      questions: [
        {
          id: "w4_comp_q1",
          text: "{dash1} and {dash2} are the two categories of information sources.",
          dashes: 2,
          options: ["modern", "ancient", "country"],
          correct: ["modern", "ancient"],
          rule: "Information sources are grouped into modern or ancient tools."
        },
        {
          id: "w4_comp_q2",
          text: "{dash1}, {dash2} and {dash3} are ancient sources of information.",
          dashes: 3,
          options: ["town crying", "fire lighting", "wooden gong", "computers"],
          correct: ["town crying", "fire lighting", "wooden gong"],
          rule: "Town crying and beating wooden gongs were traditional communication methods."
        },
        {
          id: "w4_comp_q3",
          text: "{dash1}, {dash2} and {dash3} are modern sources of information.",
          dashes: 3,
          options: ["computers", "radio", "video", "smoke"],
          correct: ["computers", "radio", "video"],
          rule: "Computers, radio, and video are modern digital communications."
        },
        {
          id: "w4_comp_q4",
          text: "Town crying is an ancient source of information: {dash1}.",
          dashes: 1,
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "The village town crier carried news across the community."
        }
      ]
    },
    {
      subjectId: "bst_w4",
      subjectTitle: "Basic Science and Technology",
      topic: "Weather Instruments and Symbols",
      questions: [
        {
          id: "w4_bst_q1",
          text: "A barometer is used for testing atmospheric {dash1}.",
          dashes: 1,
          options: ["pressure", "volume", "hotness"],
          correct: ["pressure"],
          rule: "Barometers measure air/atmospheric pressure."
        },
        {
          id: "w4_bst_q2",
          text: "The instrument used to check temperature is the {dash1}.",
          dashes: 1,
          options: ["compass", "plier", "thermometre"],
          correct: ["thermometre"],
          rule: "A thermometer measures temperature in degrees Celsius or Fahrenheit."
        },
        {
          id: "w4_bst_q3",
          text: "The weather symbol of dark clouds with falling droplets indicates {dash1}.",
          dashes: 1,
          options: ["rain", "cloud", "storm"],
          correct: ["rain"],
          rule: "Falling water drops signify rain."
        },
        {
          id: "w4_bst_q4",
          text: "A golden glowing circular icon on a weather chart represents the {dash1}.",
          dashes: 1,
          options: ["sun", "wind", "cloud"],
          correct: ["sun"],
          rule: "The sun icon signifies clear, sunny weather."
        }
      ]
    },
    {
      subjectId: "phe_w4",
      subjectTitle: "Physical and Health Education",
      topic: "Athletics: Sprint Races",
      passage: {
        title: "Sprints",
        text: "Sprints are races run over short distances. They are run at the runner's top speed from start to finish along designated lanes. Examples include 100m, 200m, 400m, and relays."
      },
      questions: [
        {
          id: "w4_phe_q1",
          text: "Short distance races are called {dash1}.",
          dashes: 1,
          options: ["sprints", "marathons", "walks"],
          correct: ["sprints"],
          rule: "Short explosive distance runs are known as sprints."
        },
        {
          id: "w4_phe_q2",
          text: "Sprint races are run on designated {dash1}.",
          dashes: 1,
          options: ["tables", "courts", "lanes"],
          correct: ["lanes"],
          rule: "Athletes must stay within marked track lanes."
        },
        {
          id: "w4_phe_q3",
          text: "{dash1}, {dash2} and {dash3} are examples of sprint races.",
          dashes: 3,
          options: ["100m", "200m", "400m", "5000m"],
          correct: ["100m", "200m", "400m"],
          rule: "100m, 200m, and 400m are official sprint events."
        }
      ]
    },
    {
      subjectId: "cca_w4",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Classification of Arts",
      passage: {
        title: "Visual and Performing Arts",
        text: "Art has two main branches: visual arts and performing arts. Visual arts can be seen and touched (drawing, painting, sculpture). Performing arts provide entertainment through sound and movement (music, dance, drama)."
      },
      questions: [
        {
          id: "w4_cca_q1",
          text: "Art has {dash1} main branches.",
          dashes: 1,
          options: ["2", "6", "4"],
          correct: ["2"],
          rule: "Art is divided into Visual and Performing arts."
        },
        {
          id: "w4_cca_q2",
          text: "The two main branches of art are {dash1} and {dash2}.",
          dashes: 2,
          options: ["visual arts", "performing arts", "running"],
          correct: ["visual arts", "performing arts"],
          rule: "Visual (tangible) and Performing (live expression)."
        },
        {
          id: "w4_cca_q3",
          text: "Drawing and sculpture are examples of {dash1} arts.",
          dashes: 1,
          options: ["visual", "performing"],
          correct: ["visual"],
          rule: "Objects made to be viewed are visual arts."
        },
        {
          id: "w4_cca_q4",
          text: "{dash1}, {dash2} and {dash3} are examples of performing arts.",
          dashes: 3,
          options: ["music", "dance", "drama", "drawing"],
          correct: ["music", "dance", "drama"],
          rule: "Music, dance, and theater involve live stage performances."
        }
      ]
    },
    {
      subjectId: "agr_w4",
      subjectTitle: "Agricultural Science",
      topic: "Fruits and Vegetables",
      questions: [
        {
          id: "w4_agr_q1",
          text: "Fruits develop from the {dash1} of flowering plants.",
          dashes: 1,
          options: ["flowers", "roots", "bark"],
          correct: ["flowers"],
          rule: "Fertilized flowers develop into mature fruits."
        },
        {
          id: "w4_agr_q2",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are four fruits we eat.",
          dashes: 4,
          options: ["mango", "orange", "pineapple", "apple", "sand"],
          correct: ["mango", "orange", "pineapple", "apple"],
          rule: "Mango, orange, apple, and pineapple are edible fruits."
        },
        {
          id: "w4_agr_q3",
          text: "Vegetables are eaten primarily in the form of tender {dash1}.",
          dashes: 1,
          options: ["leaves", "blocks", "wood"],
          correct: ["leaves"],
          rule: "Spinach, waterleaf, and fluted pumpkin (ugwu) are leafy vegetables."
        },
        {
          id: "w4_agr_q4",
          text: "Which of these is commonly eaten fresh and raw? {dash1}",
          dashes: 1,
          options: ["mango", "yam", "cocoyam"],
          correct: ["mango"],
          rule: "Ripe mangoes are eaten raw without cooking."
        }
      ]
    },
    {
      subjectId: "hec_w4",
      subjectTitle: "Home Economics",
      topic: "Careers in Home Economics",
      questions: [
        {
          id: "w4_hec_q1",
          text: "The professional cutting and sewing of clothing is {dash1}.",
          dashes: 1,
          options: ["fashion designing", "dietetics", "researching"],
          correct: ["fashion designing"],
          rule: "Fashion designers design and produce garments."
        },
        {
          id: "w4_hec_q2",
          text: "Ensuring that individuals receive a balanced, healthy {dash1} is dietetics.",
          dashes: 1,
          options: ["diet", "money", "water"],
          correct: ["diet"],
          rule: "Dietetics oversees food nutrients and balanced meals."
        },
        {
          id: "w4_hec_q3",
          text: "{dash1} is the profession dedicated to beautifying home interiors.",
          dashes: 1,
          options: ["interior decoration", "farming", "fishing"],
          correct: ["interior decoration"],
          rule: "Interior designers style indoor spaces."
        },
        {
          id: "w4_hec_q4",
          text: "Interior decoration focuses on beautifying indoor living spaces: {dash1}.",
          dashes: 1,
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Interior design arranges spaces tastefully."
        }
      ]
    },
    {
      subjectId: "crs_w4",
      subjectTitle: "Christian Religious Studies",
      topic: "God Speaks to Us",
      passage: {
        title: "How God Communicates",
        text: "In the Old Testament, God spoke through holy prophets. Today He speaks to us through the Bible, dreams, godly visions, circumstances, and His Son Jesus Christ."
      },
      questions: [
        {
          id: "w4_crs_q1",
          text: "In ancient times, God spoke to His people through the {dash1}.",
          dashes: 1,
          options: ["prophets", "merchants", "soldiers"],
          correct: ["prophets"],
          rule: "Hebrews 1:1 notes God spoke through prophets in diverse ways."
        },
        {
          id: "w4_crs_q2",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are ways God communicates with us today.",
          dashes: 4,
          options: ["Bible", "dreams", "prophecy", "Jesus Christ", "magic"],
          correct: ["Bible", "dreams", "prophecy", "Jesus Christ"],
          rule: "Scripture, revelations, and Christ reveal God's will."
        },
        {
          id: "w4_crs_q3",
          text: "Receiving divine instructions while asleep is called a {dash1}.",
          dashes: 1,
          options: ["dream", "video", "sleeper"],
          correct: ["dream"],
          rule: "Joseph and Samuel received divine revelation while asleep."
        },
        {
          id: "w4_crs_q4",
          text: "Holy {dash1} serve as God's spiritual messengers.",
          dashes: 1,
          options: ["angels", "devil", "idols"],
          correct: ["angels"],
          rule: "Angels carry out divine missions and messages."
        }
      ]
    },
    {
      subjectId: "his_w4",
      subjectTitle: "History",
      topic: "States Created in Early Regions",
      passage: {
        title: "Creation of States in 1967",
        text: "In May 1967, General Yakubu Gowon dissolved the four regions and created 12 states. Later developments increased this number to the 36 states we have today."
      },
      questions: [
        {
          id: "w4_his_q1",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are states located in eastern Nigeria.",
          dashes: 4,
          options: ["Enugu", "Anambra", "Imo", "Abia", "Kano"],
          correct: ["Enugu", "Anambra", "Imo", "Abia"],
          rule: "Enugu, Anambra, Imo, and Abia are South-East states."
        },
        {
          id: "w4_his_q2",
          text: "Edo and Delta states were carved out of the {dash1} region.",
          dashes: 1,
          options: ["Mid Western", "Northern", "Eastern"],
          correct: ["Mid Western"],
          rule: "The old Mid-Western region became Bendel state, then Edo and Delta."
        },
        {
          id: "w4_his_q3",
          text: "{dash1}, {dash2} and {dash3} are states in western Nigeria.",
          dashes: 3,
          options: ["Oyo", "Lagos", "Ogun", "Borno"],
          correct: ["Oyo", "Lagos", "Ogun"],
          rule: "Oyo, Lagos, and Ogun are in the South-West."
        },
        {
          id: "w4_his_q4",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are states in northern Nigeria.",
          dashes: 4,
          options: ["Sokoto", "Kano", "Borno", "Kaduna", "Rivers"],
          correct: ["Sokoto", "Kano", "Borno", "Kaduna"],
          rule: "Sokoto, Kano, Borno, and Kaduna are Northern states."
        }
      ]
    },
    {
      subjectId: "civ_w4",
      subjectTitle: "Civic Education",
      topic: "Levels of Government",
      questions: [
        {
          id: "w4_civ_q1",
          text: "Government is an organized body composed of {dash1}.",
          dashes: 1,
          options: ["people", "birds", "animals"],
          correct: ["people"],
          rule: "Citizens elect representatives to direct public affairs."
        },
        {
          id: "w4_civ_q2",
          text: "Government organizes and directs the public {dash1} of the society.",
          dashes: 1,
          options: ["affairs", "church", "food"],
          correct: ["affairs"],
          rule: "Government manages public administrative affairs."
        },
        {
          id: "w4_civ_q3",
          text: "The three tiers of Nigerian government are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          options: ["Federal", "State", "Local", "Village"],
          correct: ["Federal", "State", "Local"],
          rule: "Federal, State, and Local government form Nigeria's 3 tiers."
        },
        {
          id: "w4_civ_q4",
          text: "The highest, central tier of government is the {dash1} government.",
          dashes: 1,
          options: ["federal", "local", "town"],
          correct: ["federal"],
          rule: "The Federal Government administers national law."
        }
      ]
    },
    {
      subjectId: "soc_w4",
      subjectTitle: "Social Studies",
      topic: "Systems of Government",
      questions: [
        {
          id: "w4_soc_q1",
          text: "Political leadership can be acquired through {dash1} or {dash2}.",
          dashes: 2,
          options: ["election", "inheritance", "stealing"],
          correct: ["election", "inheritance"],
          rule: "Democracies use elections; monarchies use royal inheritance."
        },
        {
          id: "w4_soc_q2",
          text: "In a monarchy, the crown is usually {dash1}.",
          dashes: 1,
          options: ["inherited", "elected"],
          correct: ["inherited"],
          rule: "Royal lineage passes from parent to child."
        },
        {
          id: "w4_soc_q3",
          text: "In a presidential democracy, citizens choose their leader by {dash1}.",
          dashes: 1,
          options: ["voting", "fighting"],
          correct: ["voting"],
          rule: "Voters cast ballots during elections."
        },
        {
          id: "w4_soc_q4",
          text: "{dash1} and {dash2} are democratic systems relying on votes.",
          dashes: 2,
          options: ["presidential", "parliamentary", "dictatorship"],
          correct: ["presidential", "parliamentary"],
          rule: "Both presidential and parliamentary systems are electoral democracies."
        }
      ]
    },
    {
      subjectId: "vr_w4",
      subjectTitle: "Verbal Reasoning",
      topic: "Word Patterns and Analogies",
      questions: [
        {
          id: "w4_vr_q1",
          text: "Olive is to live as seven is to {dash1}.",
          dashes: 1,
          options: ["even", "seen", "eleven"],
          correct: ["even"],
          rule: "Remove the first letter: Olive -> live; Seven -> even."
        },
        {
          id: "w4_vr_q2",
          text: "Call is to all as pant is to {dash1}.",
          dashes: 1,
          options: ["ant", "pot", "pat"],
          correct: ["ant"],
          rule: "Drop first letter: Call -> all; Pant -> ant."
        },
        {
          id: "w4_vr_q3",
          text: "Female is to male as forgive is to {dash1}.",
          dashes: 1,
          options: ["give", "for", "gift"],
          correct: ["give"],
          rule: "Drop prefix: Female -> male; Forgive -> give."
        },
        {
          id: "w4_vr_q4",
          text: "Stone is to tone as belong is to {dash1}.",
          dashes: 1,
          options: ["long", "be", "song"],
          correct: ["long"],
          rule: "Drop 'be-': Belong -> long."
        },
        {
          id: "w4_vr_q5",
          text: "Clean is to lean as whole is to {dash1}.",
          dashes: 1,
          options: ["hole", "all", "one"],
          correct: ["hole"],
          rule: "Remove initial letter: Whole -> hole."
        }
      ]
    },
    {
      subjectId: "qr_w4",
      subjectTitle: "Quantitative Reasoning",
      topic: "Inequality Comparisons (<, >, =)",
      questions: [
        {
          id: "w4_qr_q1",
          text: "100 {dash1} 200",
          dashes: 1,
          options: ["<", ">", "="],
          correct: ["<"],
          rule: "100 is strictly less than (<) 200."
        },
        {
          id: "w4_qr_q2",
          text: "80 {dash1} 70",
          dashes: 1,
          options: [">", "<", "="],
          correct: [">"],
          rule: "80 is greater than (>) 70."
        },
        {
          id: "w4_qr_q3",
          text: "700 {dash1} 420",
          dashes: 1,
          options: [">", "<", "="],
          correct: [">"],
          rule: "700 is greater than 420."
        },
        {
          id: "w4_qr_q4",
          text: "52 {dash1} 52",
          dashes: 1,
          options: ["=", "<", ">"],
          correct: ["="],
          rule: "Both quantities are identical (=)."
        },
        {
          id: "w4_qr_q5",
          text: "120 {dash1} 320",
          dashes: 1,
          options: ["<", ">", "="],
          correct: ["<"],
          rule: "120 is less than 320."
        },
        {
          id: "w4_qr_q6",
          text: "11 {dash1} 17",
          dashes: 1,
          options: ["<", ">", "="],
          correct: ["<"],
          rule: "11 is smaller than 17."
        }
      ]
    },
    {
      subjectId: "fr_w4",
      subjectTitle: "French Studies",
      topic: "Les Formes (Geometric Shapes)",
      questions: [
        {
          id: "w4_fr_q1",
          text: "Star = {dash1}",
          dashes: 1,
          options: ["etoile", "brun"],
          correct: ["etoile"],
          rule: "'Étoile' means star in French."
        },
        {
          id: "w4_fr_q2",
          text: "Circle = {dash1}",
          dashes: 1,
          options: ["rondo", "catrel"],
          correct: ["rondo"],
          rule: "'Rond' / 'rondo' denotes a circular shape."
        },
        {
          id: "w4_fr_q3",
          text: "Triangle = {dash1}",
          dashes: 1,
          options: ["triangle", "ova"],
          correct: ["triangle"],
          rule: "'Triangle' is spelled identically in French."
        },
        {
          id: "w4_fr_q4",
          text: "Cylinder = {dash1}",
          dashes: 1,
          options: ["cylindre", "catrel"],
          correct: ["cylindre"],
          rule: "'Cylindre' is cylinder in French."
        },
        {
          id: "w4_fr_q5",
          text: "Square = {dash1}",
          dashes: 1,
          options: ["carre", "catrel", "etoile"],
          correct: ["carre"],
          rule: "'Carré' is square in French."
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
      topic: "Reading Comprehension: Jude's Story",
      passage: {
        title: "The Tall House in Enugu",
        text: "Jude was telling his friends about the tall house he saw in Enugu. He used a tall tree near the stream in their village to compare to the house. Amechi and Kelechi were Jude's friends. He told them that the tree had grown so tall that children could not hit any perched bird with their catapults."
      },
      questions: [
        {
          id: "w5_eng_q1",
          text: "Jude saw the extraordinarily tall house at {dash1}.",
          dashes: 1,
          options: ["Onitsha", "Abuja", "Enugu"],
          correct: ["Enugu"],
          rule: "Jude saw the building in Enugu."
        },
        {
          id: "w5_eng_q2",
          text: "He compared the building to a tall {dash1} near the stream.",
          dashes: 1,
          options: ["tree", "pole", "hill"],
          correct: ["tree"],
          rule: "He likened its height to the tall stream tree."
        },
        {
          id: "w5_eng_q3",
          text: "Children went to the village stream armed with their {dash1}.",
          dashes: 1,
          options: ["catapults", "nets", "hooks"],
          correct: ["catapults"],
          rule: "Children took catapults to target birds."
        },
        {
          id: "w5_eng_q4",
          text: "{dash1} and {dash2} were Jude's close companions.",
          dashes: 2,
          options: ["Amechi", "Kelechi", "Emeka"],
          correct: ["Amechi", "Kelechi"],
          rule: "Amechi and Kelechi were his two friends."
        }
      ]
    },
    {
      subjectId: "math_w5",
      subjectTitle: "Mathematics",
      topic: "Roman to Arabic Numerals",
      questions: [
        {
          id: "w5_math_q1",
          text: "XI = {dash1}",
          dashes: 1,
          options: ["11", "9", "15"],
          correct: ["11"],
          rule: "10 + 1 = 11."
        },
        {
          id: "w5_math_q2",
          text: "VII = {dash1}",
          dashes: 1,
          options: ["7", "6", "8"],
          correct: ["7"],
          rule: "5 + 2 = 7."
        },
        {
          id: "w5_math_q3",
          text: "IX = {dash1}",
          dashes: 1,
          options: ["9", "11", "19"],
          correct: ["9"],
          rule: "10 - 1 = 9."
        },
{
          id: "w5_math_q4",
          text: "Xiv = {dash1}",
          dashes: 1,
          options: ["14", "24", "40"],
          correct: ["14"],
          rule: "L is the Roman symbol for 50."
        },
        {
          id: "w5_math_q5",
          text: "L= {dash1}",
          dashes: 1,
          options: ["50", "100", "40"],
          correct: ["50"],
          rule: "L is the Roman symbol for 50."
        },
{
          id: "w5_math_q6",
          text: "xxv= {dash1}",
          dashes: 1,
          options: ["50", "25", "40"],
          correct: ["25"],
          rule: "xxv is the Roman symbol for 50."
        },
{
          id: "w5_math_q7",
          text: "xix = {dash1}",
          dashes: 1,
          options: ["50", "19", "80"],
          correct: ["19"],
          rule: "xix is the Roman symbol for 50."
        },
{
          id: "w5_math_q8",
          text: "XL = {dash1}",
          dashes: 1,
          options: ["50", "45", "40"],
          correct: ["40"],
          rule: "XL is the Roman symbol for 50."
        },
{
          id: "w5_math_q9",
          text: "xxx = {dash1}",
          dashes: 1,
          options: ["50", "45", "30"],
          correct: ["30"],
          rule: "xxx is the Roman symbol for 50."
        },

        {
          id: "w5_math_q10",
          text: "XLV = {dash1}",
          dashes: 1,
          options: ["40", "45", "90"],
          correct: ["45"],
          rule: "50 - 5 = 40."
        }
      ]
    },
    {
      subjectId: "comp_w5",
      subjectTitle: "Computer Studies",
      topic: "Information Processors",
      questions: [
        {
          id: "w5_comp_q1",
          text: "{dash1} and {dash2} circulate printed news to the public.",
          dashes: 2,
          options: ["newspaper", "letter", "sun"],
          correct: ["newspaper", "letter"],
          rule: "Newspapers and letters transmit printed information."
        },
        {
          id: "w5_comp_q2",
          text: "We listen to broadcast audio announcements through the {dash1}.",
          dashes: 1,
          options: ["radio", "mouse", "keyboard"],
          correct: ["radio"],
          rule: "Radios broadcast auditory information."
        },
        {
          id: "w5_comp_q3",
          text: "Devices where information can be viewed and heard are {dash1} and {dash2}.",
          dashes: 2,
          options: ["television", "handset", "notebook"],
          correct: ["television", "handset"],
          rule: "TVs and smartphones support audiovisual media."
        }
      ]
    },
    {
      subjectId: "bst_w5",
      subjectTitle: "Basic Science and Technology",
      topic: "Simple Machines",
      questions: [
        {
          id: "w5_bst_q1",
          text: "The tool commonly used to cut down tall grass is a {dash1}.",
          dashes: 1,
          options: ["cutlass", "axe", "opener"],
          correct: ["cutlass"],
          rule: "A cutlass clears grass and weeds."
        },
        {
          id: "w5_bst_q2",
          text: "We sweep and gather trash using a {dash1}.",
          dashes: 1,
          options: ["broom", "door", "scissors"],
          correct: ["broom"],
          rule: "A broom sweeps dirt together."
        },
        {
          id: "w5_bst_q3",
          text: "We dig deep soil pits using a {dash1} and a {dash2}.",
          dashes: 2,
          options: ["hoe", "shovel", "bucket"],
          correct: ["hoe", "shovel"],
          rule: "Hoes loosen soil, and shovels scoop it out."
        },
        {
          id: "w5_bst_q4",
          text: "Felling large tree trunks requires an {dash1} and a {dash2}.",
          dashes: 2,
          options: ["axe", "machete", "pin"],
          correct: ["axe", "machete"],
          rule: "Axes chop through dense tree timber."
        }
      ]
    },
    {
      subjectId: "his_w5",
      subjectTitle: "History",
      topic: "Creation of the First 12 States",
      questions: [
        {
          id: "w5_his_q1",
          text: "Twelve states were first created in Nigeria in {dash1}.",
          dashes: 1,
          options: ["1967", "1990", "2010"],
          correct: ["1967"],
          rule: "General Yakubu Gowon created 12 states in 1967."
        },
        {
          id: "w5_his_q2",
          text: "The new states replaced the four former {dash1}.",
          dashes: 1,
          options: ["regions", "towns", "countries"],
          correct: ["regions"],
          rule: "The 12 states replaced the colonial regions."
        },
        {
          id: "w5_his_q3",
          text: "The state creation announcement was made on {dash1}.",
          dashes: 1,
          options: ["5th May", "2nd June"],
          correct: ["5th May"],
          rule: "The broadcast was made on May 27 / May 5, 1967."
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
      topic: "Comprehension: Class Prefect Selection",
      passage: {
        title: "Primary 4D Class Stars",
        text: "Adamu, Aremu, and Nkem were in Primary 4D. Adamu excelled in sciences, computer studies, and physical education. Aremu was gifted in English literature. Nkem showed remarkable ability in both sciences and languages. Recognizing his intelligence, classmates elected Nkem as class prefect."
      },
      questions: [
        {
          id: "w6_eng_q1",
          text: "Who was elected as the class prefect? {dash1}",
          dashes: 1,
          options: ["Nkem", "Adamu", "Aremu"],
          correct: ["Nkem"],
          rule: "Nkem was chosen by his peers."
        },
        {
          id: "w6_eng_q2",
          text: "The three named classmates are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          options: ["Adamu", "Aremu", "Nkem", "Emeka"],
          correct: ["Adamu", "Aremu", "Nkem"],
          rule: "Adamu, Aremu, and Nkem."
        },
        {
          id: "w6_eng_q3",
          text: "They were pupils in Primary {dash1}.",
          dashes: 1,
          options: ["4D", "4A", "5B"],
          correct: ["4D"],
          rule: "The passage notes they were in Primary 4D."
        },
        {
          id: "w6_eng_q4",
          text: "{dash1} was particularly skilled in English and literature.",
          dashes: 1,
          options: ["Aremu", "Adamu", "Nkem"],
          correct: ["Aremu"],
          rule: "Aremu had higher marks in language arts."
        }
      ]
    },
    {
      subjectId: "math_w6",
      subjectTitle: "Mathematics",
      topic: "Ordering Numbers (< and >)",
      questions: [
        {
          id: "w6_math_q1",
          text: "95 {dash1} 85",
          dashes: 1,
          options: [">", "<"],
          correct: [">"],
          rule: "95 is greater than (>) 85."
        },
        {
          id: "w6_math_q2",
          text: "100 {dash1} 250",
          dashes: 1,
          options: ["<", ">"],
          correct: ["<"],
          rule: "100 is less than (<) 250."
        },
        {
          id: "w6_math_q3",
          text: "120 {dash1} 110",
          dashes: 1,
          options: [">", "<"],
          correct: [">"],
          rule: "120 is greater than 110."
        },
        {
          id: "w6_math_q4",
          text: "300 {dash1} 400",
          dashes: 1,
          options: ["<", ">"],
          correct: ["<"],
          rule: "300 is less than 400."
        },
        {
          id: "w6_math_q5",
          text: "1000 {dash1} 600",
          dashes: 1,
          options: [">", "<"],
          correct: [">"],
          rule: "1000 is greater than 600."
        }
      ]
    },
    {
      subjectId: "comp_w6",
      subjectTitle: "Computer Studies",
      topic: "Input and Output Devices",
      questions: [
        {
          id: "w6_comp_q1",
          text: "Data is fed into the system through an {dash1} unit.",
          dashes: 1,
          options: ["input", "output", "document"],
          correct: ["input"],
          rule: "Input devices enter user data."
        },
        {
          id: "w6_comp_q2",
          text: "{dash1}, {dash2} and {dash3} are input devices.",
          dashes: 3,
          options: ["keyboard", "mouse", "scanner", "printer"],
          correct: ["keyboard", "mouse", "scanner"],
          rule: "Keyboards, mice, and scanners feed information in."
        },
        {
          id: "w6_comp_q3",
          text: "Internal processing of information occurs within the {dash1}.",
          dashes: 1,
          options: ["CPU", "monitor", "speaker"],
          correct: ["CPU"],
          rule: "The CPU handles all computational processing."
        },
        {
          id: "w6_comp_q4",
          text: "{dash1} and {dash2} are output devices.",
          dashes: 2,
          options: ["monitor", "printer", "mouse"],
          correct: ["monitor", "printer"],
          rule: "Monitors show visual output, and printers make hard copies."
        }
      ]
    },
    {
      subjectId: "phe_w6",
      subjectTitle: "Physical and Health Education",
      topic: "Athletics: High Jump Technique",
      questions: [
        {
          id: "w6_phe_q1",
          text: "The preliminary accelerating approach of the jumper is the {dash1}.",
          dashes: 1,
          options: ["run up", "scale up", "called to"],
          correct: ["run up"],
          rule: "The run-up builds forward momentum."
        },
        {
          id: "w6_phe_q2",
          text: "The specific spot where the athlete springs upward is the {dash1}.",
          dashes: 1,
          options: ["take off", "landing", "run up"],
          correct: ["take off"],
          rule: "Take-off converts run speed into upward lift."
        },
        {
          id: "w6_phe_q3",
          text: "A jump is declared successful only when the crossbar {dash1}.",
          dashes: 1,
          options: ["remains", "falls", "shakes"],
          correct: ["remains"],
          rule: "The crossbar must stay on its pegs."
        },
        {
          id: "w6_phe_q4",
          text: "Returning safely down onto the protective foam mat is the {dash1}.",
          dashes: 1,
          options: ["landing", "stepping", "airing"],
          correct: ["landing"],
          rule: "Landing concludes the high jump attempt."
        }
      ]
    },
    {
      subjectId: "cca_w6",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Elements of Design",
      questions: [
        {
          id: "w6_cca_q1",
          text: "A design is created by deliberately placing decorative {dash1} upon an object.",
          dashes: 1,
          options: ["marks", "stains", "water"],
          correct: ["marks"],
          rule: "Design involves creating intentional marks and patterns."
        },
        {
          id: "w6_cca_q2",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are elements of design.",
          dashes: 4,
          options: ["line", "colour", "shape", "space", "noise"],
          correct: ["line", "colour", "shape", "space"],
          rule: "Lines, colours, shapes, and space are foundational visual components."
        },
        {
          id: "w6_cca_q3",
          text: "Geometric shape is a recognized element of design: {dash1}.",
          dashes: 1,
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Shapes form the silhouette and structure of designs."
        }
      ]
    },
    {
      subjectId: "agr_w6",
      subjectTitle: "Agricultural Science",
      topic: "Animal Husbandry",
      questions: [
        {
          id: "w6_agr_q1",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are farm animals kept by farmers.",
          dashes: 4,
          options: ["goat", "cattle", "pig", "chicken", "lion"],
          correct: ["goat", "cattle", "pig", "chicken"],
          rule: "Goats, cows, pigs, and chickens are domesticated farm livestock."
        },
        {
          id: "w6_agr_q2",
          text: "{dash1} and {dash2} are domestic birds raised on farms.",
          dashes: 2,
          options: ["guinea fowl", "duck", "pig"],
          correct: ["guinea fowl", "duck"],
          rule: "Ducks and guinea fowls are poultry birds."
        },
        {
          id: "w6_agr_q3",
          text: "A person who catches fish with hooks and nets is a {dash1}.",
          dashes: 1,
          options: ["fisherman", "catcherman", "fish catcher"],
          correct: ["fisherman"],
          rule: "A fisherman catches aquatic life."
        }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // WEEKS 7 — 11: MID-TERM & TERMINAL EXAMS
  // -----------------------------------------------------------------------
  7: [
    {
      subjectId: "math_w7",
      subjectTitle: "Mathematics (Mid-Term)",
      topic: "Lowest Common Multiple (L.C.M)",
      questions: [
        {
          id: "w7_m_q1",
          text: "L.C.M of 4 and 6 is {dash1}.",
          dashes: 1,
          options: ["12", "24", "10"],
          correct: ["12"],
          rule: "Multiples of 4: 4, 8, 12; multiples of 6: 6, 12. Smallest is 12."
        },
        {
          id: "w7_m_q2",
          text: "L.C.M of 3 and 5 is {dash1}.",
          dashes: 1,
          options: ["15", "8", "30"],
          correct: ["15"],
          rule: "3 x 5 = 15."
        }
      ]
    },
    {
      subjectId: "eng_w7",
      subjectTitle: "English Studies (Mid-Term)",
      topic: "Concept of Print",
      questions: [
        {
          id: "w7_e_q1",
          text: "The person who writes the text of a book is the {dash1}.",
          dashes: 1,
          options: ["author", "illustrator", "printer"],
          correct: ["author"],
          rule: "The author writes the book."
        },
        {
          id: "w7_e_q2",
          text: "The person who draws the illustrations is the {dash1}.",
          dashes: 1,
          options: ["illustrator", "author", "editor"],
          correct: ["illustrator"],
          rule: "The illustrator draws the artwork."
        }
      ]
    }
  ],

  8: [
    {
      subjectId: "math_w8",
      subjectTitle: "Mathematics",
      topic: "Highest Common Factor (H.C.F)",
      questions: [
        {
          id: "w8_m_q1",
          text: "H.C.F of 8 and 12 is {dash1}.",
          dashes: 1,
          options: ["4", "2", "6"],
          correct: ["4"],
          rule: "Factors of 8: 1, 2, 4, 8; 12: 1, 2, 3, 4, 6, 12. Largest shared is 4."
        },
        {
          id: "w8_m_q2",
          text: "H.C.F of 9 and 15 is {dash1}.",
          dashes: 1,
          options: ["3", "1", "5"],
          correct: ["3"],
          rule: "3 divides into both 9 and 15."
        }
      ]
    },
    {
      subjectId: "eng_w8",
      subjectTitle: "English Studies",
      topic: "Simple Sentences (Subject & Predicate)",
      questions: [
        {
          id: "w8_e_q1",
          text: "In 'The teacher wrote on the board', the Subject is {dash1}.",
          dashes: 1,
          options: ["The teacher", "wrote on the board"],
          correct: ["The teacher"],
          rule: "The subject names the doer of the sentence."
        },
        {
          id: "w8_e_q2",
          text: "In 'The dog barked loudly', the Predicate is {dash1}.",
          dashes: 1,
          options: ["barked loudly", "The dog"],
          correct: ["barked loudly"],
          rule: "The predicate tells what happened, starting from the verb."
        }
      ]
    }
  ],

  9: [
    {
      subjectId: "math_w9",
      subjectTitle: "Mathematics",
      topic: "Decimals Introduction",
      questions: [
        {
          id: "w9_m_q1",
          text: "7/10 expressed in decimal form is {dash1}.",
          dashes: 1,
          options: ["0.7", "0.07", "7.0"],
          correct: ["0.7"],
          rule: "7 divided by 10 = 0.7."
        },
        {
          id: "w9_m_q2",
          text: "In 14.5, the digit 5 is in the {dash1} place.",
          dashes: 1,
          options: ["tenths", "tens", "hundredths"],
          correct: ["tenths"],
          rule: "The first place after the decimal point is tenths."
        }
      ]
    }
  ],

  10: [
    {
      subjectId: "math_w10",
      subjectTitle: "Mathematics",
      topic: "Perimeter of Shapes",
      questions: [
        {
          id: "w10_m_q1",
          text: "Perimeter of a rectangle with length 8cm and breadth 5cm is {dash1} cm.",
          dashes: 1,
          options: ["26", "13", "40"],
          correct: ["26"],
          rule: "2 x (8 + 5) = 2 x 13 = 26cm."
        },
        {
          id: "w10_m_q2",
          text: "Perimeter of a square of side 6cm is {dash1} cm.",
          dashes: 1,
          options: ["24", "36", "12"],
          correct: ["24"],
          rule: "4 x 6 = 24cm."
        }
      ]
    }
  ],

  11: [
    {
      subjectId: "term_exam",
      subjectTitle: "Terminal Examination",
      topic: "Comprehensive Review",
      questions: [
        {
          id: "w11_ex_q1",
          text: "Sum of 3,450 and 2,150 is {dash1}.",
          dashes: 1,
          options: ["5,600", "5,500", "5,700"],
          correct: ["5,600"],
          rule: "3,450 + 2,150 = 5,600."
        },
        {
          id: "w11_ex_q2",
          text: "Past tense of 'drive' is {dash1}.",
          dashes: 1,
          options: ["drove", "drived", "driving"],
          correct: ["drove"],
          rule: "'Drove' is the irregular past tense of drive."
        },
        {
          id: "w11_ex_q3",
          text: "The part of the computer that shows visual display is the {dash1}.",
          dashes: 1,
          options: ["monitor", "mouse", "CPU"],
          correct: ["monitor"],
          rule: "The monitor displays visuals on screen."
        }
      ]
    }
  ]
};

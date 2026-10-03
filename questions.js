/**
 * Basic 4 Curriculum Data & Question Bank (Complete Weeks 1 - 6 & End Term Test)
 * Universal Basic Education (UBE) Curriculum
 */

// Initialize global objects safely
window.LIVE_CHALK_CURRICULUM = window.LIVE_CHALK_CURRICULUM || {};
window.WEEKLY_CURRICULUM = window.WEEKLY_CURRICULUM || {};

// ============================================================================
// 1. LIVE CHALKBOARD LESSONS
// ============================================================================
window.LIVE_CHALK_CURRICULUM = {
  english_week1: [
    {
      q: "Plural of 'Box': To make 'box' plural, add 'es' to get ______.",
      a: "Boxes",
      tray: ["Nouns ending in x, s, ch, sh add -es", "box ➔ boxes", "fox ➔ foxes"]
    },
    {
      q: "Plural of 'Baby': Consonant + 'y' changes 'y' into ______ and adds 'es'.",
      a: "babies",
      tray: ["b-a-b-y ➔ b-a-b + i + es = babies", "city ➔ cities", "story ➔ stories"]
    },
    {
      q: "Plural of 'Leaf': Change 'f' to 'v' and add 'es' to form ______.",
      a: "Leaves",
      tray: ["f or fe ➔ ves", "leaf ➔ leaves", "knife ➔ knives"]
    }
  ],

  math_fractions: [
    {
      q: "Find 3 equivalent fractions for 1/2",
      num: 1,
      den: 2,
      multipliers: [2, 3, 4],
      tray: ["Rule: Multiply numerator and denominator by the same number", "1/2 = 2/4 = 3/6 = 4/8"]
    },
    {
      q: "Find 3 equivalent fractions for 2/3",
      num: 2,
      den: 3,
      multipliers: [2, 3, 4],
      tray: ["2/3 × 2/2 = 4/6", "2/3 × 3/3 = 6/9", "2/3 × 4/4 = 8/12"]
    },
    {
      q: "Find 3 equivalent fractions for 3/5",
      num: 3,
      den: 5,
      multipliers: [2, 3, 4],
      tray: ["3/5 × 2/2 = 6/10", "3/5 × 3/3 = 9/15", "3/5 × 4/4 = 12/20"]
    }
  ],

  igbo_week1: [
    {
      q: "Kedu ihe bụ mkpụrụ edemede Igbo ole dị na Abidii?",
      a: "Mkpụrụ edemede iri atọ na isii (36)",
      tray: ["Abidii Igbo nwere mkpụrụedemede 36", "Ụdaume (8)", "Mgbochiume (28)"]
    },
    {
      q: "Mkpụrụ edemede ụdaume dị ole n'Asụsụ Igbo?",
      a: "Asatọ (8): a, e, i, ị, o, ọ, u, ụ",
      tray: ["Ụdaume mfe: a, e, o, u", "Ụdaume arọ: ị, ọ, ụ, i"]
    }
  ],

  math_week2: [
    {
      q: "Count in thousands: 3,000, 4,000, 5,000, ______.",
      a: "6,000",
      tray: ["Place Value: Thousands (Th)", "Add 1,000 to 5,000 = 6,000"]
    },
    {
      q: "Write in figures: Seven thousand, four hundred and twenty-three",
      a: "7,423",
      tray: ["Th: 7, H: 4, T: 2, U: 3", "= 7,423"]
    }
  ],

  comp_week2: [
    {
      q: "What does CPU stand for?",
      a: "Central Processing Unit",
      tray: ["Brain of the Computer", "Processes all instructions and calculations"]
    },
    {
      q: "Raw facts and figures given to a computer are called ______.",
      a: "Data",
      tray: ["Data ➔ CPU Processing ➔ Information"]
    }
  ],

  math_week7: [
    {
      q: "Find the Lowest Common Multiple (L.C.M) of 4 and 6.",
      a: "12",
      tray: ["Multiples of 4: 4, 8, 12, 16", "Multiples of 6: 6, 12, 18", "Lowest common = 12"]
    }
  ],

  english_week7: [
    {
      q: "The person who writes a book or story is called the ______.",
      a: "Author",
      tray: ["Author = Writer", "Illustrator = Draws pictures", "Publisher = Prints book"]
    }
  ],

  math_week8: [
    {
      q: "Find the Highest Common Factor (H.C.F) of 8 and 12.",
      a: "4",
      tray: ["Factors of 8: 1, 2, 4, 8", "Factors of 12: 1, 2, 3, 4, 6, 12", "Highest common = 4"]
    }
  ],

  english_week8: [
    {
      q: "Every complete simple sentence must have a Subject and a ______.",
      a: "Predicate (or Verb)",
      tray: ["Subject: Who or what does the action", "Predicate: The action or state"]
    }
  ]
};

// ============================================================================
// 2. WEEKLY CURRICULUM QUESTIONS (Weeks 1 — 6, 7 — 10 fallbacks, Week 11 Exams)
// ============================================================================
window.WEEKLY_CURRICULUM = {
  // --------------------------------------------------------------------------
  // WEEK 1
  // --------------------------------------------------------------------------
  1: [
    {
      subjectId: "comp_w1",
      subjectTitle: "Computer Studies",
      topic: "Kick off Test: Introduction to Computer Hardware",
      questions: [
        {
          id: "comp_1_1",
          text: "A computer mouse is an {dash1} device used to point, click, and interact with items on the screen.",
          dashes: 1,
          type: "bubble",
          options: ["input", "output", "storage", "internal"],
          correct: ["input"],
          rule: "A computer mouse sends pointer instructions into the computer, so it is an input device."
        }
      ]
    },
    {
      subjectId: "bst_w1",
      subjectTitle: "Basic Science and Technology",
      topic: "Kick off Test: Technology",
      questions: [
        {
          id: "bst_1_1",
          text: "The application of scientific knowledge to solve practical problems is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["technology", "energy", "power"],
          correct: ["technology"],
          rule: "Technology applies scientific methods to design practical tools."
        },
        {
          id: "bst_1_2",
          text: "{dash1}, {dash2} and {dash3} are products of technology.",
          dashes: 3,
          type: "bubble",
          options: ["radio", "phones", "cars", "wood", "sand"],
          correct: ["radio", "phones", "cars"],
          rule: "Radios, phones, and cars are manufactured technological appliances."
        },
        {
          id: "bst_1_3",
          text: "Two forms of technology are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["developed", "undeveloped", "controlled"],
          correct: ["developed", "undeveloped"],
          rule: "Technology is broadly classified as either developed or undeveloped."
        },
        {
          id: "bst_1_4",
          text: "Phones are developed technology in the area of {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["communication", "transportation", "building"],
          correct: ["communication"],
          rule: "Telephones transmit speech and text for long-distance communication."
        }
      ]
    },
    {
      subjectId: "phe_w1",
      subjectTitle: "Physical and Health Education",
      topic: "Kick off Test: First Aid and Safety",
      questions: [
        {
          id: "phe_1_1",
          text: "Four medical items found in a first aid box are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["cotton wool", "razor", "paracetamol", "GIV", "cigarette", "pepper"],
          correct: ["cotton wool", "razor", "paracetamol", "GIV"],
          rule: "First aid kits contain sterile cotton wool, antiseptic, blades, and pain medication."
        },
        {
          id: "phe_1_2",
          text: "The universal symbol on a first aid box is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cross", "square", "circle"],
          correct: ["cross"],
          rule: "A red or white cross designates medical and emergency first aid supplies."
        },
        {
          id: "phe_1_3",
          text: "First aid is given to an injured person after seeing the doctor: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["False", "True"],
          correct: ["False"],
          rule: "First aid is given immediately before a doctor provides advanced medical treatment."
        },
        {
          id: "phe_1_4",
          text: "Anybody who is trained can give first aid: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "Anyone trained in basic emergency safety procedures can render first aid."
        },
        {
          id: "phe_1_5",
          text: "First aid tends to relieve the injured person before medical attention is received: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "First aid reduces pain, prevents complications, and preserves life."
        }
      ]
    },
    {
      subjectId: "crs_w1",
      subjectTitle: "Christian Religious Studies",
      topic: "Kick off Test: The Good Samaritan",
      questions: [
        {
          id: "crs_1_1",
          text: "The story of the Good Samaritan teaches us {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["love", "prayer", "prophecy"],
          correct: ["love"],
          rule: "Jesus taught that loving our neighbour means showing mercy to anyone in need."
        },
        {
          id: "crs_1_2",
          text: "The traveller was travelling from Jerusalem down to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Jericho", "Israel", "Nigeria"],
          correct: ["Jericho"],
          rule: "Luke 10:30 specifies the man was going down from Jerusalem to Jericho."
        },
        {
          id: "crs_1_3",
          text: "The traveller was violently attacked along the road by {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["robbers", "king", "Pharisees"],
          correct: ["robbers"],
          rule: "Robbers stripped him of his clothing, wounded him, and fled."
        },
        {
          id: "crs_1_4",
          text: "The kind person who stopped and took care of the traveller was a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Samaritan", "pastor", "governor"],
          correct: ["Samaritan"],
          rule: "A compassionate Samaritan bandaged the wounded man and took him to an inn."
        }
      ]
    },
    {
      subjectId: "sos_w1",
      subjectTitle: "Social Studies",
      topic: "Kick off Test: Culture and Living in Nigeria",
      questions: [
        {
          id: "sos_1_1",
          text: "{dash1} is the total way of life of a group of people.",
          dashes: 1,
          type: "bubble",
          options: ["culture", "tradition", "prayer"],
          correct: ["culture"],
          rule: "Culture includes food, language, dress, customs, and religion."
        },
        {
          id: "sos_1_2",
          text: "Material culture consists of items that can be seen and {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["touched", "celebrated"],
          correct: ["touched"],
          rule: "Material culture includes physical objects such as pots, clothes, and tools."
        },
        {
          id: "sos_1_3",
          text: "Three major religions in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Christianity", "Islam", "Traditional Religion", "Buddhism", "Judaism"],
          correct: ["Christianity", "Islam", "Traditional Religion"],
          rule: "Christianity, Islam, and African Traditional Religion are the three main faiths in Nigeria."
        },
        {
          id: "sos_1_4",
          text: "Six geopolitical zones in Nigeria are {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}.",
          dashes: 6,
          type: "bubble",
          options: ["North West", "North East", "North Central", "South South", "South West", "South East", "South North", "South Mid"],
          correct: ["North West", "North East", "North Central", "South South", "South West", "South East"],
          rule: "Nigeria is officially organized into six geopolitical zones."
        },
        {
          id: "sos_1_5",
          text: "The three largest ethnic groups in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Hausa", "Yoruba", "Igbo", "Ogoja", "Efik"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo form the three majority ethnic groups."
        }
      ]
    },
    {
      subjectId: "civic_w1",
      subjectTitle: "Civic Education",
      topic: "Kick off Test: National Symbols",
      questions: [
        {
          id: "civic_1_1",
          text: "{dash1}, {dash2} and {dash3} are national symbols of Nigeria.",
          dashes: 3,
          type: "bubble",
          options: ["flag", "coat of arm", "national anthem", "car", "house"],
          correct: ["flag", "coat of arm", "national anthem"],
          rule: "The flag, coat of arms, and anthem represent the sovereignty of Nigeria."
        },
        {
          id: "civic_1_2",
          text: "The colors of the Nigerian national flag are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Green", "White", "Green", "Red", "Blue"],
          correct: ["Green", "White", "Green"],
          rule: "The flag has three vertical stripes: Green, White, and Green."
        },
        {
          id: "civic_1_3",
          text: "The opening words of Nigeria's national anthem are {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Arise O Compatriots", "beggars are everywhere"],
          correct: ["Arise O Compatriots"],
          rule: "The national anthem begins: 'Arise, O Compatriots, Nigeria's call obey...'"
        },
        {
          id: "civic_1_4",
          text: "An {dash1} and two {dash2} are prominent figures on Nigeria's Coat of Arms.",
          dashes: 2,
          type: "bubble",
          options: ["eagle", "horses", "book", "goats"],
          correct: ["eagle", "horses"],
          rule: "The red eagle signifies strength, and the two horses represent dignity."
        },
        {
          id: "civic_1_5",
          text: "The colour of the two horses supporting the coat of arms is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["white", "black", "brown"],
          correct: ["white"],
          rule: "The horses supporting the shield on Nigeria's Coat of Arms are white."
        }
      ]
    },
    {
      subjectId: "agric_w1",
      subjectTitle: "Agricultural Science",
      topic: "Kick off Test: Crops, Tools and Farm Animals",
      questions: [
        {
          id: "agric_1_1",
          text: "Four staple crops produced by Nigerian farmers are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["yam", "rice", "maize", "cassava", "iron", "rubber"],
          correct: ["yam", "rice", "maize", "cassava"],
          rule: "Yam, rice, maize, and cassava are widely cultivated food crops in Nigeria."
        },
        {
          id: "agric_1_2",
          text: "Three sweet fruits produced by flowering plants are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["orange", "mango", "apple", "gravel"],
          correct: ["orange", "mango", "apple"],
          rule: "Oranges, mangoes, and apples are healthy edible fruits."
        },
        {
          id: "agric_1_3",
          text: "Two common hand tools used on farms are the {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["hoe", "wheelbarrow", "coffee", "smoker"],
          correct: ["hoe", "wheelbarrow"],
          rule: "Hoes and wheelbarrows are essential farm equipment for tilling and hauling."
        },
        {
          id: "agric_1_4",
          text: "Two common domestic livestock animals are the {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["goat", "cow", "lion", "snake"],
          correct: ["goat", "cow"],
          rule: "Goats and cows are kept on farms for meat, dairy, and hides."
        }
      ]
    },
    {
      subjectId: "hec_w1",
      subjectTitle: "Home Economics",
      topic: "Kick off Test: Personal Hygiene and Maintenance",
      questions: [
        {
          id: "hec_1_1",
          text: "We keep our mouths clean through regular {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["brushing", "washing", "eating"],
          correct: ["brushing", "washing"],
          rule: "Regular brushing and rinsing keep teeth and gums clean and fresh."
        },
        {
          id: "hec_1_2",
          text: "We use a {dash1} and {dash2} to clean our mouth and teeth.",
          dashes: 2,
          type: "bubble",
          options: ["toothbrush", "toothpaste", "sand", "soap"],
          correct: ["toothbrush", "toothpaste"],
          rule: "Using a proper toothbrush and fluoride toothpaste protects dental health."
        },
        {
          id: "hec_1_3",
          text: "{dash1} and {dash2} are toiletries used for body hygiene.",
          dashes: 2,
          type: "bubble",
          options: ["soap", "body cream", "zinc", "cement"],
          correct: ["soap", "body cream"],
          rule: "Bathing soap washes the body clean, while body cream moisturizes the skin."
        },
        {
          id: "hec_1_4",
          text: "Shoes are worn to protect our {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["foot", "head", "eyes"],
          correct: ["foot"],
          rule: "Footwear protects feet from cuts, sharps, and ground infections."
        }
      ]
    },
    {
      subjectId: "vr_w1",
      subjectTitle: "Verbal Reasoning",
      topic: "Kick off Test: Letter Patterns",
      questions: [
        {
          id: "vr_1_1",
          text: "Complete the sequence: GJ, HK, IL, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["JM", "KN", "LO", "MP"],
          correct: ["JM", "KN"],
          rule: "First letters step forward by 1 (G, H, I, J, K), second letters also step forward by 1 (J, K, L, M, N)."
        },
        {
          id: "vr_1_2",
          text: "Continue the pattern: AM, BN, CO, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["DP", "EQ", "FR", "GS"],
          correct: ["DP", "EQ"],
          rule: "Letter sequences: A-B-C-D-E alongside M-N-O-P-Q."
        },
        {
          id: "vr_1_3",
          text: "Fill in the missing pairs: EH, FI, {dash1}, {dash2}, IL.",
          dashes: 2,
          type: "bubble",
          options: ["GJ", "HK", "JM", "KN"],
          correct: ["GJ", "HK"],
          rule: "E, F, G, H, I matched with H, I, J, K, L."
        },
        {
          id: "vr_1_4",
          text: "Next in series: PS, QT, RU, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["SV", "TW", "UX", "VY"],
          correct: ["SV", "TW"],
          rule: "P, Q, R, S, T paired with S, T, U, V, W."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 2
  // --------------------------------------------------------------------------
  2: [
    {
      subjectId: "eng_w2",
      subjectTitle: "English Studies",
      topic: "Aural Discrimination: Short /æ/ vs Long /ɑː/ Vowel Sounds",
      questions: [
        {
          id: "eng_2_1",
          text: "Words that contain the short /æ/ vowel sound as in 'pat' are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["mat", "cat", "part", "cart"],
          correct: ["mat", "cat"],
          rule: "The short /æ/ sound is found in: pat, mat, cat, hat, back."
        },
        {
          id: "eng_2_2",
          text: "Words with the lengthened /ɑː/ vowel sound as in 'part' are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["cart", "bark", "hat", "cat"],
          correct: ["cart", "bark"],
          rule: "The long /ɑː/ vowel sound is heard in: part, cart, heart, barn, bark."
        }
      ]
    },
    {
      subjectId: "math_w2",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers: Sequences and Patterns",
      questions: [
        {
          id: "math_2_1",
          text: "Counting in tens: 80, 90, {dash1}, {dash2}, 120, 130.",
          dashes: 2,
          type: "bubble",
          options: ["100", "110", "105", "115"],
          correct: ["100", "110"],
          rule: "Rule: Add 10 to each number (90 + 10 = 100, 100 + 10 = 110)."
        },
        {
          id: "math_2_2",
          text: "Counting by fifties: 78, 128, 178, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["228", "278", "250", "298"],
          correct: ["228", "278"],
          rule: "Rule: Add 50 each step (178 + 50 = 228; 228 + 50 = 278)."
        },
        {
          id: "math_2_3",
          text: "Counting in hundreds: 800, 900, {dash1}, 1,100, 1,200.",
          dashes: 1,
          type: "bubble",
          options: ["1,000", "950", "1,050"],
          correct: ["1,000"],
          rule: "900 + 100 = 1,000."
        },
        {
          id: "math_2_4",
          text: "Add 100 step: 760, 860, {dash1}, 1,060, 1,160, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["960", "1,260", "980", "1,200"],
          correct: ["960", "1,260"],
          rule: "860 + 100 = 960; 1,160 + 100 = 1,260."
        },
        {
          id: "math_2_5",
          text: "Hundred thousands pattern: 200,000; 300,000; 400,000; {dash1}; {dash2}; 700,000.",
          dashes: 2,
          type: "bubble",
          options: ["500,000", "600,000", "450,000", "550,000"],
          correct: ["500,000", "600,000"],
          rule: "Add 100,000 each time."
        },
        {
          id: "math_2_6",
          text: "Add 3,000 pattern: 15,000; 18,000; 21,000; {dash1}; 27,000; {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["24,000", "30,000", "25,000", "28,000"],
          correct: ["24,000", "30,000"],
          rule: "21,000 + 3,000 = 24,000; 27,000 + 3,000 = 30,000."
        },
        {
          id: "math_2_7",
          text: "Add 30 pattern: 970, 1,000, 1,030, {dash1}, {dash2}, 1,120, 1,150.",
          dashes: 2,
          type: "bubble",
          options: ["1,060", "1,090", "1,080", "1,100"],
          correct: ["1,060", "1,090"],
          rule: "1,030 + 30 = 1,060; 1,060 + 30 = 1,090."
        }
      ]
    },
    {
      subjectId: "igbo_w2",
      subjectTitle: "Asụsụ Igbo",
      topic: "Ọnụọgụgụ 1 ruo 200 (Igbo Numbers)",
      questions: [
        {
          id: "igbo_2_1",
          text: "Otu narị na iri abụọ na Bekee pụtara {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["120", "102", "112"],
          correct: ["120"],
          rule: "Otu narị (100) + iri abụọ (20) = 120."
        },
        {
          id: "igbo_2_2",
          text: "Iri isii na otu = {dash1}; Iri asaa = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["61", "70", "16", "77"],
          correct: ["61", "70"],
          rule: "Iri isii na otu bụ 61. Iri asaa bụ 70."
        },
        {
          id: "igbo_2_3",
          text: "Iri na atọ = {dash1}; Iri ise na asatọ = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["13", "58", "31", "85"],
          correct: ["13", "58"],
          rule: "Iri na atọ = 13. Iri ise na asatọ = 58."
        },
        {
          id: "igbo_2_4",
          text: "Otu narị na iri asatọ na atọ = {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["183", "138", "180"],
          correct: ["183"],
          rule: "100 (Otu nari) + 80 (iri asato) + 3 (ato) = 183."
        }
      ]
    },
    {
      subjectId: "comp_w2",
      subjectTitle: "Computer Studies",
      topic: "Data and the System Unit",
      passage: {
        title: "Lesson Note: Data & CPU",
        text: "Data are raw facts or unprocessed information keyed into a computer. Data are processed by the CPU, also referred to as the System Unit."
      },
      questions: [
        {
          id: "comp_2_1",
          text: "Information that has not yet been processed is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["data", "news", "fake"],
          correct: ["data"],
          rule: "Data refers to raw facts and figures that require processing."
        },
        {
          id: "comp_2_2",
          text: "Data is stored inside the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["computer", "radio", "sun"],
          correct: ["computer"],
          rule: "Computers use storage devices like hard drives to save data."
        },
        {
          id: "comp_2_3",
          text: "The {dash1} processes data in the computer.",
          dashes: 1,
          type: "bubble",
          options: ["CPU", "mouse", "cable"],
          correct: ["CPU"],
          rule: "The Central Processing Unit carries out computations."
        },
        {
          id: "comp_2_4",
          text: "Another name for CPU is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["System unit", "Area unit", "Control board"],
          correct: ["System unit"],
          rule: "The main computer cabinet is often termed the System Unit."
        }
      ]
    },
    {
      subjectId: "bst_w2",
      subjectTitle: "Basic Science and Technology",
      topic: "Change in Nature: Temporary and Permanent Changes",
      questions: [
        {
          id: "bst_2_1",
          text: "Two types of change in nature are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["temporal", "permanent", "transfer"],
          correct: ["temporal", "permanent"],
          rule: "Changes are categorized as either temporal (reversible) or permanent (irreversible)."
        },
        {
          id: "bst_2_2",
          text: "A {dash1} change can be reversed back into its original form.",
          dashes: 1,
          type: "bubble",
          options: ["temporal", "permanent"],
          correct: ["temporal"],
          rule: "Temporal changes (e.g. melting ice) can be reversed."
        },
        {
          id: "bst_2_3",
          text: "A child growing into an adult is an example of a {dash1} change.",
          dashes: 1,
          type: "bubble",
          options: ["permanent", "temporal", "transfer"],
          correct: ["permanent"],
          rule: "Biological growth cannot be reversed; it is permanent."
        },
        {
          id: "bst_2_4",
          text: "A young kitten grows to become an adult {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cat", "dog", "goat"],
          correct: ["cat"],
          rule: "A kitten is the offspring of a cat."
        }
      ]
    },
    {
      subjectId: "phe_w2",
      subjectTitle: "Physical and Health Education",
      topic: "Athletics: Table Tennis",
      questions: [
        {
          id: "phe_2_1",
          text: "Singles table tennis is contested by {dash1} players.",
          dashes: 1,
          type: "bubble",
          options: ["2", "4", "7"],
          correct: ["2"],
          rule: "In singles, two opposing individuals play against each other."
        },
        {
          id: "phe_2_2",
          text: "The table tennis board is {dash1} in shape.",
          dashes: 1,
          type: "bubble",
          options: ["rectangular", "circle", "square"],
          correct: ["rectangular"],
          rule: "Official table tennis boards are rectangular."
        },
        {
          id: "phe_2_3",
          text: "A {dash1} and a {dash2} are the tools used to play table tennis.",
          dashes: 2,
          type: "bubble",
          options: ["bat", "ball", "tyre"],
          correct: ["bat", "ball"],
          rule: "Table tennis uses a paddle (bat) and a lightweight celluloid ball."
        },
        {
          id: "phe_2_4",
          text: "To start or continue the game, the player delivers a legal {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["service", "play out", "punch"],
          correct: ["service"],
          rule: "Each rally begins with a service."
        }
      ]
    },
    {
      subjectId: "cca_w2",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Art and Music",
      questions: [
        {
          id: "cca_2_1",
          text: "Art is the expression of skill in {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["image making", "painting", "craft", "music", "fighting"],
          correct: ["image making", "painting", "craft", "music"],
          rule: "Art covers drawing, painting, craft, drama, and music."
        },
        {
          id: "cca_2_2",
          text: "Artworks provide useful cultural and aesthetic benefits to mankind: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "Art creates functional products and beautifies human environments."
        },
        {
          id: "cca_2_3",
          text: "Music is classified as a branch of {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["art", "building", "wrestling"],
          correct: ["art"],
          rule: "Music is a performing art."
        },
        {
          id: "cca_2_4",
          text: "Music is defined as an organized, pleasing {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["sound", "noise", "fight"],
          correct: ["sound"],
          rule: "Music is arranged, harmonious sound, contrasting with noise."
        }
      ]
    },
    {
      subjectId: "agric_w2",
      subjectTitle: "Agricultural Science",
      topic: "Branches of Agriculture",
      questions: [
        {
          id: "agric_2_1",
          text: "Agriculture deals with {dash1} farming and {dash2} farming.",
          dashes: 2,
          type: "bubble",
          options: ["crops", "animals", "books", "iron"],
          correct: ["crops", "animals"],
          rule: "The two primary divisions are crop production and animal husbandry."
        },
        {
          id: "agric_2_2",
          text: "A person who plants crops and raises livestock is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["farmer", "trader", "pastor"],
          correct: ["farmer"],
          rule: "A farmer manages agricultural operations."
        },
        {
          id: "agric_2_3",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are examples of farm crops.",
          dashes: 4,
          type: "bubble",
          options: ["yam", "maize", "rice", "cassava", "cement", "diesel"],
          correct: ["yam", "maize", "rice", "cassava"],
          rule: "Yam, maize, rice, and cassava are agricultural food crops."
        },
        {
          id: "agric_2_4",
          text: "Agriculture has {dash1} primary branches.",
          dashes: 1,
          type: "bubble",
          options: ["2", "6", "8"],
          correct: ["2"],
          rule: "Crops and animals form the two main branches."
        }
      ]
    },
    {
      subjectId: "hec_w2",
      subjectTitle: "Home Economics",
      topic: "Methods of Cooking Food",
      questions: [
        {
          id: "hec_2_1",
          text: "Food items are either eaten raw or {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cooked", "planted", "thrown"],
          correct: ["cooked"],
          rule: "Foods can be consumed raw or cooked for easier digestion."
        },
        {
          id: "hec_2_2",
          text: "{dash1}, {dash2} and {dash3} are common methods of cooking food.",
          dashes: 3,
          type: "bubble",
          options: ["boiling", "frying", "roasting", "washing", "cooling"],
          correct: ["boiling", "frying", "roasting"],
          rule: "Boiling, frying, and roasting apply heat to prepare food."
        },
        {
          id: "hec_2_3",
          text: "Cooking food in boiling water over a stove is known as {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["boiling", "smoking", "frying"],
          correct: ["boiling"],
          rule: "Boiling cooks food using heated water at 100°C."
        },
        {
          id: "hec_2_4",
          text: "We use cooking oil and heated {dash1} or a stove for frying.",
          dashes: 1,
          type: "bubble",
          options: ["gas", "water", "petrol"],
          correct: ["gas"],
          rule: "Frying uses oil heated over gas burners or clean stoves."
        },
        {
          id: "hec_2_5",
          text: "Placing food directly over open fire or glowing coals is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["roasting", "frying", "boiling"],
          correct: ["roasting"],
          rule: "Roasting exposes food directly to radiant heat or open flame."
        }
      ]
    },
    {
      subjectId: "crs_w2",
      subjectTitle: "Christian Religious Studies",
      topic: "We Are Children of One Father",
      questions: [
        {
          id: "crs_2_1",
          text: "{dash1} and {dash2} were the first human parents created by God.",
          dashes: 2,
          type: "bubble",
          options: ["Adam", "Eve", "Cain", "Abel"],
          correct: ["Adam", "Eve"],
          rule: "Genesis records that Adam and Eve were the first humans."
        },
        {
          id: "crs_2_2",
          text: "The first {dash1} God created was Adam.",
          dashes: 1,
          type: "bubble",
          options: ["man", "woman", "God"],
          correct: ["man"],
          rule: "God formed the first man, Adam, from the dust of the ground."
        },
        {
          id: "crs_2_3",
          text: "Those who believe in {dash1} are children of God.",
          dashes: 1,
          type: "bubble",
          options: ["Jesus", "Noah", "Abel"],
          correct: ["Jesus"],
          rule: "John 1:12 states that whoever believes in Jesus becomes a child of God."
        },
        {
          id: "crs_2_4",
          text: "We become children of God through {dash1} in Christ.",
          dashes: 1,
          type: "bubble",
          options: ["believing", "fighting", "killing"],
          correct: ["believing"],
          rule: "Faith and believing in Christ unites believers into God's family."
        }
      ]
    },
    {
      subjectId: "hist_w2",
      subjectTitle: "History",
      topic: "Early Regions of Nigeria and Amalgamation",
      questions: [
        {
          id: "hist_2_1",
          text: "The four early regions of Nigeria were {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["Northern", "Eastern", "Western", "Mid-Western", "Central", "Lagos"],
          correct: ["Northern", "Eastern", "Western", "Mid-Western"],
          rule: "Nigeria formerly operated with four regions before state creation."
        },
        {
          id: "hist_2_2",
          text: "The early regions were created by the British {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["colonialists", "Nigerians", "pastors"],
          correct: ["colonialists"],
          rule: "The British colonial government instituted regional administrations."
        },
        {
          id: "hist_2_3",
          text: "Lord Lugard amalgamated the {dash1} and {dash2} protectorates.",
          dashes: 2,
          type: "bubble",
          options: ["North", "South", "River"],
          correct: ["North", "South"],
          rule: "The Northern and Southern Protectorates were united in 1914."
        },
        {
          id: "hist_2_4",
          text: "The amalgamation of Nigeria took place in the year {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["1914", "1940", "2020"],
          correct: ["1914"],
          rule: "Nigeria was unified into a single protectorate on January 1, 1914."
        }
      ]
    },
    {
      subjectId: "civic_w2",
      subjectTitle: "Civic Education",
      topic: "Culture and Diversity",
      questions: [
        {
          id: "civic_2_1",
          text: "A people's shared way of life is their {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["culture", "industry", "religion"],
          correct: ["culture"],
          rule: "Culture is the total lifestyle and belief system of a society."
        },
        {
          id: "civic_2_2",
          text: "Elements of culture include {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["language", "food", "clothing", "petrol", "iron"],
          correct: ["language", "food", "clothing"],
          rule: "Language, food, and clothing are fundamental expressions of culture."
        },
        {
          id: "civic_2_3",
          text: "Three major languages spoken in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Hausa", "Yoruba", "Igbo", "French", "German"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo are the three majority native languages."
        },
        {
          id: "civic_2_4",
          text: "The Igbo people are predominantly found in the {dash1} part of Nigeria.",
          dashes: 1,
          type: "bubble",
          options: ["Eastern", "Northern", "Western"],
          correct: ["Eastern"],
          rule: "The South East of Nigeria is the homeland of the Igbo people."
        }
      ]
    },
    {
      subjectId: "sos_w2",
      subjectTitle: "Social Studies",
      topic: "Meaning of Social Studies & Types of Environment",
      questions: [
        {
          id: "sos_2_1",
          text: "Two types of environment are {dash1} and {dash2} environment.",
          dashes: 2,
          type: "bubble",
          options: ["physical", "social", "heavenly"],
          correct: ["physical", "social"],
          rule: "Environment is divided into physical (surroundings) and social (people/culture)."
        },
        {
          id: "sos_2_2",
          text: "Social Studies is the study of {dash1} in his environment.",
          dashes: 1,
          type: "bubble",
          options: ["man", "plant", "god"],
          correct: ["man"],
          rule: "Social Studies examines how humans interact with their environment."
        },
        {
          id: "sos_2_3",
          text: "We interact with other members of the community in the {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["school", "church", "market", "room"],
          correct: ["school", "church", "market"],
          rule: "Schools, religious centers, and markets are social gathering places."
        },
        {
          id: "sos_2_4",
          text: "Features of our physical environment include {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["trees", "rivers", "spirits"],
          correct: ["trees", "rivers"],
          rule: "Trees and rivers form part of the observable physical landscape."
        }
      ]
    },
    {
      subjectId: "vr_w2",
      subjectTitle: "Verbal Reasoning",
      topic: "Word Formation (Extracting Hidden Words)",
      questions: [
        {
          id: "vr_2_1",
          text: "From 'Shoe' extract {dash1}; from 'Hate' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["hoe", "ate", "she", "hat"],
          correct: ["hoe", "ate"],
          rule: "Removing 's' from 'shoe' leaves 'hoe'; removing 'h' from 'hate' leaves 'ate'."
        },
        {
          id: "vr_2_2",
          text: "From 'Sear' extract {dash1}; from 'Kiln' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["ear", "kin", "sea", "ill"],
          correct: ["ear", "kin"],
          rule: "'Sear' contains 'ear'; 'kiln' contains 'kin'."
        },
        {
          id: "vr_2_3",
          text: "From 'Monday' extract {dash1}; from 'Show' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["day", "how", "mon", "ow"],
          correct: ["day", "how"],
          rule: "Monday ends in 'day'; show contains 'how'."
        },
        {
          id: "vr_2_4",
          text: "From 'Cup' extract {dash1}; from 'Cash' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["up", "ash", "us", "as"],
          correct: ["up", "ash"],
          rule: "Cup ends in 'up'; cash ends in 'ash'."
        }
      ]
    },
    {
      subjectId: "qr_w2",
      subjectTitle: "Quantitative Reasoning",
      topic: "Roman Numerals to Arabic Numbers",
      questions: [
        {
          id: "qr_2_1",
          text: "Convert to numbers: XI = {dash1}; XL = {dash2}; VIII = {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["11", "40", "8", "15", "60"],
          correct: ["11", "40", "8"],
          rule: "XI = 10+1 = 11; XL = 50-10 = 40; VIII = 5+3 = 8."
        },
        {
          id: "qr_2_2",
          text: "Convert: IV = {dash1}; XXV = {dash2}; XVI = {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["4", "25", "16", "6", "24"],
          correct: ["4", "25", "16"],
          rule: "IV = 4; XXV = 25; XVI = 16."
        },
        {
          id: "qr_2_3",
          text: "Convert: IX = {dash1}; XIV = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["9", "14", "11", "16"],
          correct: ["9", "14"],
          rule: "IX = 9; XIV = 14."
        }
      ]
    },
    {
      subjectId: "fr_w2",
      subjectTitle: "French Studies",
      topic: "Les Nombres (Numbers 1 — 20)",
      questions: [
        {
          id: "fr_2_1",
          text: "En chiffres: Dix = {dash1}; Vingt = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["10", "20", "15", "16"],
          correct: ["10", "20"],
          rule: "Dix = 10; Vingt = 20."
        },
        {
          id: "fr_2_2",
          text: "En chiffres: Dix-sept = {dash1}; Seize = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["17", "16", "11", "18"],
          correct: ["17", "16"],
          rule: "Dix-sept = 17; Seize = 16."
        },
        {
          id: "fr_2_3",
          text: "En chiffres: Quatre = {dash1}; Six = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["4", "6", "14", "10"],
          correct: ["4", "6"],
          rule: "Quatre = 4; Six = 6."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 3
  // --------------------------------------------------------------------------
  3: [
    {
      subjectId: "eng_w3",
      subjectTitle: "English Studies",
      topic: "Composition: Myself",
      questions: [
        {
          id: "eng_3_1",
          text: "When writing about myself, my opening sentence states my {dash1} and my {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["name", "age", "cooking", "shoe size"],
          correct: ["name", "age"],
          rule: "An introduction begins with your name and your age or class."
        }
      ]
    },
    {
      subjectId: "math_w3",
      subjectTitle: "Mathematics",
      topic: "Number Sequences and Addition Patterns",
      questions: [
        {
          id: "math_3_1",
          text: "Adding ten thousands: 120,000; 130,000; 140,000; {dash1}; {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["150,000", "160,000", "170,000", "180,000"],
          correct: ["150,000", "160,000"],
          rule: "Add 10,000: 140,000 + 10,000 = 150,000; 150,000 + 10,000 = 160,000."
        },
        {
          id: "math_3_2",
          text: "Subtracting hundred thousands: 900,000; 800,000; {dash1}; 600,000; 500,000.",
          dashes: 1,
          type: "bubble",
          options: ["700,000", "750,000", "650,000"],
          correct: ["700,000"],
          rule: "Subtract 100,000: 800,000 - 100,000 = 700,000."
        },
        {
          id: "math_3_3",
          text: "Tens in words: Twenty, thirty, forty, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["fifty", "sixty", "seventy", "eighty"],
          correct: ["fifty", "sixty"],
          rule: "40 is followed by 50 (fifty) and 60 (sixty)."
        },
        {
          id: "math_3_4",
          text: "Add 5 pattern: Three, eight, thirteen, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["eighteen", "twenty-three", "sixteen", "twenty"],
          correct: ["eighteen", "twenty-three"],
          rule: "13 + 5 = 18; 18 + 5 = 23."
        },
        {
          id: "math_3_5",
          text: "Add 7 pattern: 755, 762, 769, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["776", "783", "775", "780"],
          correct: ["776", "783"],
          rule: "769 + 7 = 776; 776 + 7 = 783."
        },
        {
          id: "math_3_6",
          text: "Add 100 pattern: 225, 325, 425, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["525", "625", "550", "650"],
          correct: ["525", "625"],
          rule: "425 + 100 = 525; 525 + 100 = 625."
        }
      ]
    },
    {
      subjectId: "comp_w3",
      subjectTitle: "Computer Studies",
      topic: "Information Transmission",
      questions: [
        {
          id: "comp_3_1",
          text: "The result of data processed is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["information", "letter", "mail"],
          correct: ["information"],
          rule: "Information is processed and organized data."
        },
        {
          id: "comp_3_2",
          text: "Electronic media used to transmit information include {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["television", "radio", "telephone", "town crying", "beating drums"],
          correct: ["television", "radio", "telephone"],
          rule: "Electronic media require electric power and communication signals."
        },
        {
          id: "comp_3_3",
          text: "Examples of non-electronic media are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["oral communication", "beating drums", "town crying", "satellite", "telefax"],
          correct: ["oral communication", "beating drums", "town crying"],
          rule: "Traditional non-electronic methods do not depend on electrical gadgets."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 4
  // --------------------------------------------------------------------------
  4: [
    {
      subjectId: "eng_w4",
      subjectTitle: "English Studies",
      topic: "Figures of Speech: Similes and Metaphors",
      questions: [
        {
          id: "eng_4_1",
          text: "Complete the similes: As cold as {dash1}; As slow as a {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["ice", "snail", "water", "snake"],
          correct: ["ice", "snail"],
          rule: "Standard similes: 'as cold as ice' and 'as slow as a snail'."
        },
        {
          id: "eng_4_2",
          text: "Complete the similes: As sweet as {dash1}; As easy as {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["honey", "ABC", "sugar", "maths"],
          correct: ["honey", "ABC"],
          rule: "'As sweet as honey' and 'as easy as ABC'."
        },
        {
          id: "eng_4_3",
          text: "Metaphor: 'Nweke is an elephant' means Nweke is very {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["big", "small", "dead"],
          correct: ["big"],
          rule: "Comparing someone directly to an elephant emphasizes large size."
        },
        {
          id: "eng_4_4",
          text: "'He is a tortoise' means he is cunning and {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["tricky", "handsome", "fast"],
          correct: ["tricky"],
          rule: "Folklore characterizes the tortoise as clever and tricky."
        }
      ]
    },
    {
      subjectId: "comp_w4",
      subjectTitle: "Computer Studies",
      topic: "Ancient and Modern Sources of Information",
      questions: [
        {
          id: "comp_4_1",
          text: "Sources of information are categorized into {dash1} and {dash2} sources.",
          dashes: 2,
          type: "bubble",
          options: ["ancient", "modern", "country"],
          correct: ["ancient", "modern"],
          rule: "Information sources span traditional/ancient and modern tools."
        },
        {
          id: "comp_4_2",
          text: "Three ancient sources of information are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["town crying", "wooden gong", "fire lighting", "computers", "photocopying"],
          correct: ["town crying", "wooden gong", "fire lighting"],
          rule: "Ancient societies communicated using drums, fire signals, and town criers."
        },
        {
          id: "comp_4_3",
          text: "Three modern sources of information are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["computers", "radio", "photocopying", "flute", "drums"],
          correct: ["computers", "radio", "photocopying"],
          rule: "Modern communications use computers, broadcasts, and digital prints."
        }
      ]
    },
    {
      subjectId: "qr_w4",
      subjectTitle: "Quantitative Reasoning",
      topic: "Comparing Numbers Using <, >, or =",
      questions: [
        {
          id: "qr_4_1",
          text: "Compare: 100 {dash1} 200; 80 {dash2} 70.",
          dashes: 2,
          type: "bubble",
          options: ["<", ">", "="],
          correct: ["<", ">"],
          rule: "100 is less than 200 (<); 80 is greater than 70 (>)."
        },
        {
          id: "qr_4_2",
          text: "Compare: 700 {dash1} 420; 52 {dash2} 52.",
          dashes: 2,
          type: "bubble",
          options: [">", "=", "<"],
          correct: [">", "="],
          rule: "700 is greater than 420 (>); 52 is equal to 52 (=)."
        },
        {
          id: "qr_4_3",
          text: "Compare: 120 {dash1} 320; 11 {dash2} 17.",
          dashes: 2,
          type: "bubble",
          options: ["<", ">", "="],
          correct: ["<", "<"],
          rule: "120 is less than 320 (<); 11 is less than 17 (<)."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 5
  // --------------------------------------------------------------------------
  5: [
    {
      subjectId: "eng_w5",
      subjectTitle: "English Studies",
      topic: "Comprehension: Jude's Story",
      passage: {
        title: "Story: The Tall Building",
        text: "Jude told his friends Amechi and Kelechi about a very tall house he saw in Enugu. He compared it to the tall tree near their village stream which birds perched on beyond reach."
      },
      questions: [
        {
          id: "eng_5_1",
          text: "Jude saw the tall building in {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Enugu", "Onitsha", "Abuja"],
          correct: ["Enugu"],
          rule: "The story states that Jude saw the tall house in Enugu."
        },
        {
          id: "eng_5_2",
          text: "Jude's two friends in the story are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Amechi", "Kelechi", "Emeka", "Chidi"],
          correct: ["Amechi", "Kelechi"],
          rule: "Amechi and Kelechi were Jude's companions."
        }
      ]
    },
    {
      subjectId: "math_w5",
      subjectTitle: "Mathematics",
      topic: "Roman Numerals to Arabic Numbers",
      questions: [
        {
          id: "math_5_1",
          text: "Convert to numbers: XI = {dash1}; VII = {dash2}; IX = {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["11", "7", "9", "12", "6"],
          correct: ["11", "7", "9"],
          rule: "XI = 11; VII = 7; IX = 9."
        },
        {
          id: "math_5_2",
          text: "Convert: XIV = {dash1}; L = {dash2}; XXV = {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["14", "50", "25", "16", "40"],
          correct: ["14", "50", "25"],
          rule: "XIV = 14; L = 50; XXV = 25."
        }
      ]
    },
    {
      subjectId: "bst_w5",
      subjectTitle: "Basic Science and Technology",
      topic: "Simple Machines",
      questions: [
        {
          id: "bst_5_1",
          text: "The simple machine used to cut overgrown grasses is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cutlass", "axe", "opener"],
          correct: ["cutlass"],
          rule: "A cutlass is used to clear bushes and grasses."
        },
        {
          id: "bst_5_2",
          text: "We dig holes into the ground using a {dash1} and a {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["shovel", "hoe", "spanner", "bucket"],
          correct: ["shovel", "hoe"],
          rule: "Shovels and hoes are simple excavating tools."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 6
  // --------------------------------------------------------------------------
  6: [
    {
      subjectId: "eng_w6",
      subjectTitle: "English Studies",
      topic: "Comprehension: Adamu, Aremu and Nkem",
      passage: {
        title: "Classmates in Primary 4D",
        text: "Adamu, Aremu, and Nkem were in Primary 4D. Adamu liked the sciences, Aremu was good at English and literature, while Nkem excelled in both. Nkem was chosen by his classmates to be their class prefect."
      },
      questions: [
        {
          id: "eng_6_1",
          text: "Who was chosen as the class prefect? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Nkem", "Adamu", "Aremu"],
          correct: ["Nkem"],
          rule: "Nkem was chosen by his classmates as prefect."
        },
        {
          id: "eng_6_2",
          text: "The three boys were all pupils in Primary {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["4D", "4A", "5B"],
          correct: ["4D"],
          rule: "The passage notes they were in class Primary 4D."
        },
        {
          id: "eng_6_3",
          text: "{dash1} was especially gifted in English language and literature.",
          dashes: 1,
          type: "bubble",
          options: ["Aremu", "Adamu", "Nkem"],
          correct: ["Aremu"],
          rule: "Aremu loved reading and did best in English and literature."
        }
      ]
    },
    {
      subjectId: "math_w6",
      subjectTitle: "Mathematics",
      topic: "Comparing Numbers With '>' and '<'",
      questions: [
        {
          id: "math_6_1",
          text: "Compare: 95 {dash1} 85; 100 {dash2} 250.",
          dashes: 2,
          type: "bubble",
          options: [">", "<"],
          correct: [">", "<"],
          rule: "95 > 85; 100 < 250."
        },
        {
          id: "math_6_2",
          text: "Compare: 120 {dash1} 110; 46 {dash2} 36.",
          dashes: 2,
          type: "bubble",
          options: [">", "<"],
          correct: [">", ">"],
          rule: "120 > 110; 46 > 36."
        },
        {
          id: "math_6_3",
          text: "Compare: 300 {dash1} 400; 1,000 {dash2} 600.",
          dashes: 2,
          type: "bubble",
          options: ["<", ">"],
          correct: ["<", ">"],
          rule: "300 < 400; 1,000 > 600."
        }
      ]
    },
    {
      subjectId: "comp_w6",
      subjectTitle: "Computer Studies",
      topic: "Input, Processing and Output",
      questions: [
        {
          id: "comp_6_1",
          text: "Data is fed into the computer system using an {dash1} device.",
          dashes: 1,
          type: "bubble",
          options: ["input", "CPU", "document"],
          correct: ["input"],
          rule: "Input devices receive user data and transmit it inward."
        },
        {
          id: "comp_6_2",
          text: "{dash1}, {dash2} and {dash3} are computer input devices.",
          dashes: 3,
          type: "bubble",
          options: ["mouse", "keyboard", "scanner", "printer", "monitor"],
          correct: ["mouse", "keyboard", "scanner"],
          rule: "Keyboards, mice, and scanners feed instructions and images into the computer."
        },
        {
          id: "comp_6_3",
          text: "Processing of data takes place inside the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["CPU", "printer", "paper"],
          correct: ["CPU"],
          rule: "The CPU executes and processes program instructions."
        },
        {
          id: "comp_6_4",
          text: "Two common computer output devices are the {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["monitor", "printer", "scanner", "light pen"],
          correct: ["monitor", "printer"],
          rule: "Monitors and printers output processed results to users."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEKS 7 - 10 (MID-TERM AND REVISION FALLBACKS)
  // --------------------------------------------------------------------------
  7: [
    {
      subjectId: "eng_w7",
      subjectTitle: "English Studies (Mid-Term)",
      topic: "Concept of Print and Book Features",
      questions: [
        {
          id: "eng_7_1",
          text: "The person who writes a book is the {dash1}, and the person who draws pictures is the {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["author", "illustrator", "printer"],
          correct: ["author", "illustrator"],
          rule: "Authors write manuscripts; illustrators create the accompanying artwork."
        }
      ]
    },
    {
      subjectId: "math_w7",
      subjectTitle: "Mathematics (Mid-Term)",
      topic: "Factors, Multiples & L.C.M",
      questions: [
        {
          id: "math_7_1",
          text: "The Lowest Common Multiple (L.C.M) of 4 and 6 is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["12", "24", "8", "16"],
          correct: ["12"],
          rule: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... Lowest shared multiple is 12."
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
          id: "math_8_1",
          text: "The Highest Common Factor (H.C.F) of 8 and 12 is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["4", "2", "6", "8"],
          correct: ["4"],
          rule: "Factors of 8 are 1, 2, 4, 8. Factors of 12 are 1, 2, 3, 4, 6, 12. Greatest common is 4."
        }
      ]
    }
  ],

  9: [
    {
      subjectId: "eng_w9",
      subjectTitle: "English Studies",
      topic: "Prepositions of Place",
      questions: [
        {
          id: "eng_9_1",
          text: "The book is {dash1} the table, and the shoes are {dash2} the bed.",
          dashes: 2,
          type: "bubble",
          options: ["on", "under", "inside", "around"],
          correct: ["on", "under"],
          rule: "'On' describes surface position; 'under' indicates location beneath."
        }
      ]
    }
  ],

  10: [
    {
      subjectId: "comp_w10",
      subjectTitle: "Computer Studies",
      topic: "Input and Output Devices Review",
      questions: [
        {
          id: "comp_10_1",
          text: "A keyboard is an {dash1} device, while a printer is an {dash2} device.",
          dashes: 2,
          type: "bubble",
          options: ["input", "output", "storage"],
          correct: ["input", "output"],
          rule: "Keyboards take user input; printers produce physical output."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // WEEK 11: END OF TERM TEST
  // --------------------------------------------------------------------------
  11: [
    {
      subjectId: "exam_phe",
      subjectTitle: "End of Term Test • Physical and Health Education",
      topic: "Jumps, Races, First Aid & Match Officials",
      questions: [
        {
          id: "exam_phe_1",
          text: "Two common types of jumps in athletics are {dash1} jump and {dash2} jump.",
          dashes: 2,
          type: "bubble",
          options: ["high", "long", "short", "push"],
          correct: ["high", "long"],
          rule: "High jump and long jump are recognized jumping events in track and field."
        },
        {
          id: "exam_phe_2",
          text: "{dash1} and {dash2} are types of running races in track athletics.",
          dashes: 2,
          type: "bubble",
          options: ["relay", "marathon", "football"],
          correct: ["relay", "marathon"],
          rule: "Relays and marathons are competitive races. Football is a team ball sport."
        },
        {
          id: "exam_phe_3",
          text: "Four medical items found in a first aid box are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["cotton wool", "razor", "paracetamol", "GIV", "pen", "stone"],
          correct: ["cotton wool", "razor", "paracetamol", "GIV"],
          rule: "First aid kits contain sterile cotton wool, antiseptic (GIV), razor blades, and paracetamol."
        },
        {
          id: "exam_phe_4",
          text: "The chief official who enforces the rules in a football match is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["referee", "goalkeeper", "trader"],
          correct: ["referee"],
          rule: "The referee holds authority to enforce the Laws of the Game during a match."
        }
      ]
    },
    {
      subjectId: "exam_cca",
      subjectTitle: "End of Term Test • Cultural and Creative Arts",
      topic: "Visual Arts, Secondary Colours & Geometric Shapes",
      questions: [
        {
          id: "exam_cca_1",
          text: "Three examples of visual arts are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["drawing", "painting", "graphics", "broadcasting"],
          correct: ["drawing", "painting", "graphics"],
          rule: "Drawing, painting, and graphics are visual arts. Broadcasting is media communication."
        },
        {
          id: "exam_cca_2",
          text: "Examples of secondary colours formed by mixing primary colours are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["orange", "green", "purple", "red", "blue"],
          correct: ["orange", "green", "purple"],
          rule: "Mixing Red + Yellow = Orange; Blue + Yellow = Green; Red + Blue = Purple."
        },
        {
          id: "exam_cca_3",
          text: "Four fundamental shapes in design are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["circle", "square", "triangle", "rectangle", "water", "sand"],
          correct: ["circle", "square", "triangle", "rectangle"],
          rule: "Circles, squares, triangles, and rectangles form standard geometric 2D shapes."
        }
      ]
    },
    {
      subjectId: "exam_agric",
      subjectTitle: "End of Term Test • Agricultural Science",
      topic: "Fishing Tools, Fruits, Domestic Animals & Farm Branches",
      questions: [
        {
          id: "exam_agric_1",
          text: "We use a {dash1} and a {dash2} for catching fish in water.",
          dashes: 2,
          type: "bubble",
          options: ["hook", "net", "hoe", "broom"],
          correct: ["hook", "net"],
          rule: "Fishermen use hooks, lines, and fishing nets to catch aquatic fish."
        },
        {
          id: "exam_agric_2",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are four edible fruits.",
          dashes: 4,
          type: "bubble",
          options: ["orange", "mango", "apple", "banana", "wood", "sand"],
          correct: ["orange", "mango", "apple", "banana"],
          rule: "Oranges, mangoes, apples, and bananas are wholesome, edible fruits."
        },
        {
          id: "exam_agric_3",
          text: "Four examples of domesticated farm animals are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["goat", "cow", "sheep", "pig", "lion", "leopard"],
          correct: ["goat", "cow", "sheep", "pig"],
          rule: "Goats, cows, sheep, and pigs are livestock kept by farmers."
        },
        {
          id: "exam_agric_4",
          text: "The two main branches of agriculture are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["crops farming", "animals farming", "books farming"],
          correct: ["crops farming", "animals farming"],
          rule: "Crop production and livestock (animal) husbandry form the two divisions of agriculture."
        }
      ]
    },
    {
      subjectId: "exam_hec",
      subjectTitle: "End of Term Test • Home Economics",
      topic: "Parts of the Body, Cooking Methods & Home Management",
      questions: [
        {
          id: "exam_hec_1",
          text: "The human body is divided into three main parts: the {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["head", "trunk", "limbs", "eyes"],
          correct: ["head", "trunk", "limbs"],
          rule: "The human body consists of the Head, the Trunk (torso), and the Limbs (arms and legs)."
        },
        {
          id: "exam_hec_2",
          text: "Three healthy and common ways of cooking food are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["boiling", "frying", "smoking", "burying"],
          correct: ["boiling", "frying", "smoking"],
          rule: "Boiling, frying, and smoking/roasting cook food safely for consumption."
        },
        {
          id: "exam_hec_3",
          text: "Home management deals with {dash1} and {dash2} of family resources.",
          dashes: 2,
          type: "bubble",
          options: ["care of the home", "budgeting family resources", "wasteful spending"],
          correct: ["care of the home", "budgeting family resources"],
          rule: "Home management involves planning, organizing, and maintaining the home efficiently."
        }
      ]
    },
    {
      subjectId: "exam_crs",
      subjectTitle: "End of Term Test • Christian Religious Studies",
      topic: "God's Voice, The Good Samaritan & Brotherly Love",
      questions: [
        {
          id: "exam_crs_1",
          text: "God speaks to us today through the holy {dash1} and heavenly {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Bible", "Angel", "cult"],
          correct: ["Bible", "Angel"],
          rule: "God reveals His will through the Holy Scriptures (the Bible) and angel messengers."
        },
        {
          id: "exam_crs_2",
          text: "In Jesus' parable, the wounded traveller was journeying from Jerusalem to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Jericho", "Israel", "Nigeria"],
          correct: ["Jericho"],
          rule: "Luke 10:30 recounts the journey of the man from Jerusalem down to Jericho."
        },
        {
          id: "exam_crs_3",
          text: "As children of our Heavenly Father, we must {dash1}, {dash2} and {dash3} one another.",
          dashes: 3,
          type: "bubble",
          options: ["love", "care for", "help", "hate", "beat"],
          correct: ["love", "care for", "help"],
          rule: "Jesus commanded us to love one another, show kindness, and assist neighbours in need."
        }
      ]
    },
    {
      subjectId: "exam_hist",
      subjectTitle: "End of Term Test • History",
      topic: "Early Regions, Amalgamation & Major Ethnic Groups",
      questions: [
        {
          id: "exam_hist_1",
          text: "Four early regions of Nigeria were the {dash1}, {dash2}, {dash3} and {dash4} regions.",
          dashes: 4,
          type: "bubble",
          options: ["Northern", "Eastern", "Western", "Mid-Western", "Lagos", "Kano"],
          correct: ["Northern", "Eastern", "Western", "Mid-Western"],
          rule: "Prior to the 12-state creation in 1967, Nigeria had Northern, Eastern, Western, and Mid-Western regions."
        },
        {
          id: "exam_hist_2",
          text: "{dash1} was the British Governor-General who amalgamated the Northern and Southern protectorates in 1914.",
          dashes: 1,
          type: "bubble",
          options: ["Lord Luggard", "Awolowo", "Azikiwe"],
          correct: ["Lord Luggard"],
          rule: "Sir Frederick Lugard (Lord Lugard) issued the proclamation amalgamating Nigeria in 1914."
        },
        {
          id: "exam_hist_3",
          text: "The three major ethnic groups in Nigeria are the {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Hausa", "Yoruba", "Igbo", "Igala", "Igbala"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo constitute Nigeria's three largest ethnic groups."
        }
      ]
    },
    {
      subjectId: "exam_civic",
      subjectTitle: "End of Term Test • Civic Education",
      topic: "Languages, Respect, Elements of Culture & Tiers of Government",
      questions: [
        {
          id: "exam_civic_1",
          text: "Three indigenous languages spoken in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Efik", "Igala", "Bini", "China"],
          correct: ["Efik", "Igala", "Bini"],
          rule: "Efik, Igala, and Bini are Nigerian languages. Chinese is from China."
        },
        {
          id: "exam_civic_2",
          text: "Places of worship deserving quietness and high respect include the {dash1}, {dash2} and traditional {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["church", "mosque", "shrine", "car"],
          correct: ["church", "mosque", "shrine"],
          rule: "Churches, mosques, and ancestral shrines are sacred religious venues."
        },
        {
          id: "exam_civic_3",
          text: "Key elements of a people's culture include {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["language", "food", "clothing", "petrol"],
          correct: ["language", "food", "clothing"],
          rule: "Culture includes how people communicate (language), what they eat (food), and wear (clothing)."
        },
        {
          id: "exam_civic_4",
          text: "The three constitutional levels (tiers) of government in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["federal", "state", "local", "town"],
          correct: ["federal", "state", "local"],
          rule: "Nigeria is governed at three levels: Federal, State, and Local Government Councils."
        }
      ]
    },
    {
      subjectId: "exam_sos",
      subjectTitle: "End of Term Test • Social Studies",
      topic: "Major Religions, Nuclear Family & Social Environments",
      questions: [
        {
          id: "exam_sos_1",
          text: "The three major religions in Nigeria are {dash1}, {dash2} and African {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Christianity", "Islam", "Traditional Religion", "Hindu"],
          correct: ["Christianity", "Islam", "Traditional Religion"],
          rule: "Christianity, Islam, and African Traditional Religion (ATR) are Nigeria's three primary faiths."
        },
        {
          id: "exam_sos_2",
          text: "A nuclear family is made up of the {dash1}, {dash2} and their {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["father", "mother", "children", "uncles"],
          correct: ["father", "mother", "children"],
          rule: "A nuclear family consists strictly of parents (father & mother) and their children."
        },
        {
          id: "exam_sos_3",
          text: "Five public social environments of man are {dash1}, {dash2}, {dash3}, {dash4} and {dash5}.",
          dashes: 5,
          type: "bubble",
          options: ["school", "market", "church", "hospital", "parks", "stadium"],
          correct: ["school", "market", "church", "hospital", "parks"],
          rule: "Schools, markets, churches, healthcare hospitals, and public parks are social centres for people."
        }
      ]
    },
    {
      subjectId: "exam_vr",
      subjectTitle: "End of Term Test • Verbal Reasoning",
      topic: "Identifying the Group Name (General Category)",
      questions: [
        {
          id: "exam_vr_1",
          text: "In the list (rice, food, beans, garri), the overarching Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["food", "rice", "beans", "garri"],
          correct: ["food"],
          rule: "Rice, beans, and garri all belong to the broader category of 'food'."
        },
        {
          id: "exam_vr_2",
          text: "In the list (circle, square, triangle, shape), the Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["shape", "circle", "square", "triangle"],
          correct: ["shape"],
          rule: "Circle, square, and triangle are individual examples of geometric 'shapes'."
        },
        {
          id: "exam_vr_3",
          text: "In the list (pink, yellow, colour, black), the Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["colour", "pink", "yellow", "black"],
          correct: ["colour"],
          rule: "Pink, yellow, and black are specific shades belonging to the family of 'colour'."
        },
        {
          id: "exam_vr_4",
          text: "In the list (1, 2, 3, number), the Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["number", "1", "2", "3"],
          correct: ["number"],
          rule: "1, 2, and 3 are individual digits that belong to the class of 'number'."
        },
        {
          id: "exam_vr_5",
          text: "In the list (Sunday, week, Monday, Tuesday), the Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["week", "Sunday", "Monday", "Tuesday"],
          correct: ["week"],
          rule: "Sunday, Monday, and Tuesday are days that make up a 'week'."
        },
        {
          id: "exam_vr_6",
          text: "In the list (Imo, Enugu, State, Abia), the Group Name is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["State", "Imo", "Enugu", "Abia"],
          correct: ["State"],
          rule: "Imo, Enugu, and Abia are specific political territories classified as a 'State'."
        }
      ]
    },
    {
      subjectId: "exam_qr",
      subjectTitle: "End of Term Test • Quantitative Reasoning",
      topic: "Letter-to-Number Cipher Substitution (R E A S O N = 1 2 3 4 5 6)",
      passage: {
        title: "Cipher Key",
        text: "R = 1,  E = 2,  A = 3,  S = 4,  O = 5,  N = 6.\nExample: A N = 3 6."
      },
      questions: [
        {
          id: "exam_qr_1",
          text: "Using the cipher key, S O N = {dash1} and E A R N = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["456", "2316", "345", "1236"],
          correct: ["456", "2316"],
          rule: "SON: S(4) O(5) N(6) = 456. EARN: E(2) A(3) R(1) N(6) = 2316."
        },
        {
          id: "exam_qr_2",
          text: "Decode: N O R = {dash1} and S O = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["651", "45", "561", "54"],
          correct: ["651", "45"],
          rule: "NOR: N(6) O(5) R(1) = 651. SO: S(4) O(5) = 45."
        },
        {
          id: "exam_qr_3",
          text: "Decode: R A N = {dash1} and N E A R = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["136", "6231", "316", "2631"],
          correct: ["136", "6231"],
          rule: "RAN: R(1) A(3) N(6) = 136. NEAR: N(6) E(2) A(3) R(1) = 6231."
        },
        {
          id: "exam_qr_4",
          text: "Decode: S E A = {dash1} and A R E = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["423", "312", "234", "123"],
          correct: ["423", "312"],
          rule: "SEA: S(4) E(2) A(3) = 423. ARE: A(3) R(1) E(2) = 312."
        }
      ]
    }
  ]
};


// ============================================================================
// 1. LIVE CHALK TEACHER CURRICULUM (Animated Stroke Classroom)
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
  ]
};

// ============================================================================
// 2. FULL TERM WEEKLY CURRICULUM (Part 1: Weeks 1 — 6)
// ============================================================================
window.WEEKLY_CURRICULUM = {
  // --------------------------------------------------------------------------
  // WEEK 1: KICK-OFF TESTS
  // --------------------------------------------------------------------------
  1: [
    {
      subjectId: "comp_w1",
      subjectTitle: "Computer Studies",
      topic: "Kick off Test: Introduction to Computer Hardware",
      questions: [
        {
          id: "comp_1_1",
          text: "Draw or describe a computer mouse: It is an {dash1} device with left and right buttons and a scroll wheel.",
          dashes: 1,
          type: "bubble",
          options: ["input", "output", "storage", "internal"],
          correct: ["input"],
          rule: "A computer mouse is a handheld input pointing device used to move the cursor."
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
          rule: "Technology is science put into practical use to solve daily life problems."
        },
        {
          id: "bst_1_2",
          text: "{dash1}, {dash2} and {dash3} are products of technology.",
          dashes: 3,
          type: "bubble",
          options: ["radio", "phones", "cars", "wood", "sand"],
          correct: ["radio", "phones", "cars"],
          rule: "Radios, phones, and cars are manufactured technological machines."
        },
        {
          id: "bst_1_3",
          text: "Two forms of technology are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["developed", "undeveloped", "controlled"],
          correct: ["developed", "undeveloped"],
          rule: "Technology exists in two broad stages: developed (modern) and undeveloped (indigenous/primitive)."
        },
        {
          id: "bst_1_4",
          text: "Phones are developed technology in the area of {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["communication", "transportation", "building"],
          correct: ["communication"],
          rule: "Mobile phones transmit voices and messages across long distances for communication."
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
          text: "Four things found in a first aid box are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["cotton wool", "razor", "paracetamol", "GIV", "cigarette", "pepper"],
          correct: ["cotton wool", "razor", "paracetamol", "GIV"],
          rule: "First aid kits contain sterile medical supplies like cotton wool, blades, paracetamol, and antiseptics."
        },
        {
          id: "phe_1_2",
          text: "The symbol on a first aid box is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cross", "square", "circle"],
          correct: ["cross"],
          rule: "A red or white cross is the universal symbol for emergency medical aid."
        },
        {
          id: "phe_1_3",
          text: "First aid is given to an injured person after seeing the doctor: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["False", "True"],
          correct: ["False"],
          rule: "First aid is the immediate care given BEFORE medical help arrives."
        },
        {
          id: "phe_1_4",
          text: "Anybody with basic safety knowledge can give first aid: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "Any trained person or bystander can apply first aid during an emergency."
        },
        {
          id: "phe_1_5",
          text: "First aid tends to relieve the injured before doctors give medical attention: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "First aid stabilizes the patient, eases pain, and prevents condition worsening."
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
          text: "The traveller was going from Jerusalem to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Jericho", "Israel", "Nigeria"],
          correct: ["Jericho"],
          rule: "Luke 10:30 describes a man journeying down from Jerusalem to Jericho."
        },
        {
          id: "crs_1_3",
          text: "The man was attacked on the road by {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["robbers", "king", "Pharisees"],
          correct: ["robbers"],
          rule: "Robbers stripped the traveller, beat him, and left him half dead."
        },
        {
          id: "crs_1_4",
          text: "Who helped the wounded traveller? A kind {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Samaritan", "pastor", "governor"],
          correct: ["Samaritan"],
          rule: "A Samaritan had compassion, bound his wounds, and took him to an inn."
        }
      ]
    },
    {
      subjectId: "sos_w1",
      subjectTitle: "Social Studies",
      topic: "Kick off Test: Culture and Living Together",
      questions: [
        {
          id: "sos_1_1",
          text: "{dash1} is the total way of life of a group of people.",
          dashes: 1,
          type: "bubble",
          options: ["culture", "tradition", "prayer"],
          correct: ["culture"],
          rule: "Culture includes food, language, dress, customs, and beliefs."
        },
        {
          id: "sos_1_2",
          text: "Material culture can be {dash1} and seen.",
          dashes: 1,
          type: "bubble",
          options: ["touched", "celebrated"],
          correct: ["touched"],
          rule: "Material culture refers to physical artifacts, clothing, and tools you can touch."
        },
        {
          id: "sos_1_3",
          text: "Three major religions in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Christianity", "Islam", "Traditional Religion", "Buddhism", "Judaism"],
          correct: ["Christianity", "Islam", "Traditional Religion"],
          rule: "Nigeria's three dominant religious traditions are Christianity, Islam, and African Traditional Religion."
        },
        {
          id: "sos_1_4",
          text: "Six geopolitical regions in Nigeria include {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}.",
          dashes: 6,
          type: "bubble",
          options: ["North West", "North East", "North Central", "South South", "South West", "South East", "South North", "South Mid"],
          correct: ["North West", "North East", "North Central", "South South", "South West", "South East"],
          rule: "Nigeria is divided into six geopolitical zones across the North and South."
        },
        {
          id: "sos_1_5",
          text: "The three major ethnic groups in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Hausa", "Yoruba", "Igbo", "Ogoja", "Efik"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo form the three largest ethnic groups in Nigeria."
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
          rule: "National symbols represent the sovereignty and identity of Nigeria."
        },
        {
          id: "civic_1_2",
          text: "The colours of the Nigerian national flag are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Green", "White", "Green", "Red", "Blue"],
          correct: ["Green", "White", "Green"],
          rule: "The Nigerian flag features three vertical stripes: Green, White, and Green."
        },
        {
          id: "civic_1_3",
          text: "The beginning phrase of the Nigerian national anthem is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Arise O Compatriots", "beggars are everywhere"],
          correct: ["Arise O Compatriots"],
          rule: "'Arise, O Compatriots, Nigeria's call obey...' begins the anthem."
        },
        {
          id: "civic_1_4",
          text: "An {dash1} and two {dash2} are symbols found on Nigeria's Coat of Arms.",
          dashes: 2,
          type: "bubble",
          options: ["eagle", "horses", "book", "goats"],
          correct: ["eagle", "horses"],
          rule: "The red eagle stands for strength, and two white horses represent dignity."
        },
        {
          id: "civic_1_5",
          text: "The colour of the two horses supporting the coat of arms is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["white", "black", "brown"],
          correct: ["white"],
          rule: "The two majestic horses on the coat of arms are white."
        }
      ]
    },
    {
      subjectId: "hist_w1",
      subjectTitle: "History",
      topic: "Kick off Test: Eastern States of Nigeria",
      questions: [
        {
          id: "hist_1_1",
          text: "Four states in Eastern Nigeria are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["Enugu", "Anambra", "Imo", "Abia", "Kano", "Oyo"],
          correct: ["Enugu", "Anambra", "Imo", "Abia"],
          rule: "The South East contains Abia, Anambra, Ebonyi, Enugu, and Imo states."
        }
      ]
    },
    {
      subjectId: "cca_w1",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Kick off Test: Drawing",
      questions: [
        {
          id: "cca_1_1",
          text: "A walking stick is a curved wooden tool classified under {dash1} art.",
          dashes: 1,
          type: "bubble",
          options: ["craft", "performing", "vocal"],
          correct: ["craft"],
          rule: "Woodcarving and walking stick design are functional indigenous craft arts."
        }
      ]
    },
    {
      subjectId: "agric_w1",
      subjectTitle: "Agricultural Science",
      topic: "Kick off Test: Farm Produce, Tools & Animals",
      questions: [
        {
          id: "agric_1_1",
          text: "Four food crops produced by Nigerian farmers are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["yam", "rice", "maize", "cassava", "iron", "rubber"],
          correct: ["yam", "rice", "maize", "cassava"],
          rule: "Yam, rice, maize, and cassava are leading Nigerian staple crops."
        },
        {
          id: "agric_1_2",
          text: "Three sweet fruits grown in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["orange", "mango", "apple", "gravel"],
          correct: ["orange", "mango", "apple"],
          rule: "Oranges, mangoes, and apples are nourishing edible fruits."
        },
        {
          id: "agric_1_3",
          text: "Two common hand farm tools are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["hoe", "wheelbarrow", "coffee", "smoker"],
          correct: ["hoe", "wheelbarrow"],
          rule: "Hoes and wheelbarrows are essential tools used on farms."
        },
        {
          id: "agric_1_4",
          text: "Two common domestic farm animals are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["goat", "cow", "lion", "snake"],
          correct: ["goat", "cow"],
          rule: "Goats and cattle are domesticated livestock kept for meat and milk."
        }
      ]
    },
    {
      subjectId: "hec_w1",
      subjectTitle: "Home Economics",
      topic: "Kick off Test: Personal Cleanliness and Grooming",
      questions: [
        {
          id: "hec_1_1",
          text: "We make our mouth clean by {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["brushing", "washing", "eating"],
          correct: ["brushing", "washing"],
          rule: "Daily brushing and mouth washing remove food residue and plaque."
        },
        {
          id: "hec_1_2",
          text: "We use {dash1} and {dash2} to clean our mouth.",
          dashes: 2,
          type: "bubble",
          options: ["toothbrush", "toothpaste", "sand", "soap"],
          correct: ["toothbrush", "toothpaste"],
          rule: "Toothbrushes and fluoridated toothpaste keep our teeth and gums healthy."
        },
        {
          id: "hec_1_3",
          text: "{dash1} and {dash2} are used for body maintenance and skin care.",
          dashes: 2,
          type: "bubble",
          options: ["soap", "body cream", "zinc", "cement"],
          correct: ["soap", "body cream"],
          rule: "Bathing soap cleans the skin, and body cream moisturizes it."
        },
        {
          id: "hec_1_4",
          text: "Shoes are worn to protect our {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["foot", "head", "eyes"],
          correct: ["foot"],
          rule: "Footwear prevents injuries, cuts, and infections on the feet."
        }
      ]
    },
    {
      subjectId: "vr_w1",
      subjectTitle: "Verbal Reasoning",
      topic: "Kick off Test: Letter Pair Patterns",
      questions: [
        {
          id: "vr_1_1",
          text: "Complete the alphabet pattern: GJ, HK, IL, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["JM", "KN", "LO", "MP"],
          correct: ["JM", "KN"],
          rule: "First letters step by +1 (G, H, I, J, K), second letters also step by +1 (J, K, L, M, N)."
        },
        {
          id: "vr_1_2",
          text: "Follow the sequence: AM, BN, CO, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["DP", "EQ", "FR", "GS"],
          correct: ["DP", "EQ"],
          rule: "A➔B➔C➔D➔E paired with M➔N➔O➔P➔Q."
        },
        {
          id: "vr_1_3",
          text: "Fill in the missing pairs: EH, FI, {dash1}, {dash2}, IL.",
          dashes: 2,
          type: "bubble",
          options: ["GJ", "HK", "JM", "KN"],
          correct: ["GJ", "HK"],
          rule: "E➔F➔G➔H➔I paired with H➔I➔J➔K➔L."
        },
        {
          id: "vr_1_4",
          text: "Sequence continuation: PS, QT, RU, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["SV", "TW", "UX", "VY"],
          correct: ["SV", "TW"],
          rule: "P➔Q➔R➔S➔T and S➔T➔U➔V➔W."
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
          text: "Words with the short /æ/ vowel sound as in 'pat' are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["mat", "cat", "part", "cart"],
          correct: ["mat", "cat"],
          rule: "Short vowel sound /æ/ appears in: pat, mat, cat, hat, at, back."
        },
        {
          id: "eng_2_2",
          text: "Words with the long /ɑː/ vowel sound as in 'part' are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["cart", "bark", "hat", "cat"],
          correct: ["cart", "bark"],
          rule: "Long vowel sound /ɑː/ appears in: part, mart, cart, heart, art, barn, bark."
        }
      ]
    },
    {
      subjectId: "math_w2",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers: Number Sequences and Patterns",
      questions: [
        {
          id: "math_2_1",
          text: "Counting in tens: 80, 90, {dash1}, {dash2}, 120, 130.",
          dashes: 2,
          type: "bubble",
          options: ["100", "110", "105", "115"],
          correct: ["100", "110"],
          rule: "Rule: Add 10 to each term (90 + 10 = 100, 100 + 10 = 110)."
        },
        {
          id: "math_2_2",
          text: "Add 50 pattern: 78, 128, 178, {dash1}, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["228", "278", "250", "298"],
          correct: ["228", "278"],
          rule: "Rule: Add 50 each time (178 + 50 = 228; 228 + 50 = 278)."
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
          text: "Step of 100: 760, 860, {dash1}, 1,060, 1,160, {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["960", "1,260", "980", "1,200"],
          correct: ["960", "1,260"],
          rule: "Add 100 to 860 = 960; add 100 to 1,160 = 1,260."
        },
        {
          id: "math_2_5",
          text: "Sequence in hundred-thousands: 200,000; 300,000; 400,000; {dash1}; {dash2}; 700,000.",
          dashes: 2,
          type: "bubble",
          options: ["500,000", "600,000", "450,000", "550,000"],
          correct: ["500,000", "600,000"],
          rule: "Count forward by adding 100,000."
        },
        {
          id: "math_2_6",
          text: "Counting by 3,000: 15,000; 18,000; 21,000; {dash1}; 27,000; {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["24,000", "30,000", "25,000", "28,000"],
          correct: ["24,000", "30,000"],
          rule: "Rule: Add 3,000 to each term."
        },
        {
          id: "math_2_7",
          text: "Add 30: 970, 1,000, 1,030, {dash1}, {dash2}, 1,120, 1,150.",
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
      topic: "Ọnụọgụgụ 1 ruo 200 (Numbers in Igbo)",
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
          rule: "Iri isii na otu bu 61. Iri asaa bu 70."
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
        text: "Data are raw facts or unprocessed information which has been keyed, transmitted and stored in a computer. Data are processed by the CPU, otherwise called the System Unit."
      },
      questions: [
        {
          id: "comp_2_1",
          text: "Information that is not yet processed is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["data", "news", "fake"],
          correct: ["data"],
          rule: "Data refers to raw unorganized facts that require processing."
        },
        {
          id: "comp_2_2",
          text: "Data is stored inside the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["computer", "radio", "sun"],
          correct: ["computer"],
          rule: "The computer's storage media (hard drives/memory) stores data."
        },
        {
          id: "comp_2_3",
          text: "The {dash1} processes data in the computer.",
          dashes: 1,
          type: "bubble",
          options: ["CPU", "mouse", "cable"],
          correct: ["CPU"],
          rule: "The Central Processing Unit processes all inputs."
        },
        {
          id: "comp_2_4",
          text: "Another name for CPU is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["System unit", "Area unit", "Control board"],
          correct: ["System unit"],
          rule: "The CPU / System Unit houses the primary hardware components."
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
          rule: "Changes are either temporal (reversible) or permanent (irreversible)."
        },
        {
          id: "bst_2_2",
          text: "A {dash1} change can be reversed back to its original form.",
          dashes: 1,
          type: "bubble",
          options: ["temporal", "permanent"],
          correct: ["temporal"],
          rule: "Temporal (physical) changes like melting ice can be reversed."
        },
        {
          id: "bst_2_3",
          text: "A child growing into an adult is a {dash1} change.",
          dashes: 1,
          type: "bubble",
          options: ["permanent", "temporal", "transfer"],
          correct: ["permanent"],
          rule: "Biological growth cannot be reversed; it is a permanent change."
        },
        {
          id: "bst_2_4",
          text: "A kitten grows to become an adult {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cat", "dog", "goat"],
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
          id: "phe_2_1",
          text: "Singles table tennis is played by {dash1} persons.",
          dashes: 1,
          type: "bubble",
          options: ["2", "4", "7"],
          correct: ["2"],
          rule: "Singles table tennis is contested between two individual players."
        },
        {
          id: "phe_2_2",
          text: "The table tennis board is {dash1} in shape.",
          dashes: 1,
          type: "bubble",
          options: ["rectangular", "circle", "square"],
          correct: ["rectangular"],
          rule: "Official table tennis boards are rectangular (9ft by 5ft)."
        },
        {
          id: "phe_2_3",
          text: "A {dash1} and a {dash2} are equipment used to play table tennis.",
          dashes: 2,
          type: "bubble",
          options: ["bat", "ball", "tyre"],
          correct: ["bat", "ball"],
          rule: "Players use rubber-covered bats (paddles) to strike a lightweight ball."
        },
        {
          id: "phe_2_4",
          text: "To start or continue the game, the player makes a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["service", "play out", "punch"],
          correct: ["service"],
          rule: "Every rally in table tennis begins with a legal service."
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
          rule: "Art encompasses visual arts (painting, craft) and performing arts (music)."
        },
        {
          id: "cca_2_2",
          text: "Artworks are beneficial to mankind: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["True", "False"],
          correct: ["True"],
          rule: "Art provides communication, utility tools, aesthetics, and cultural heritage."
        },
        {
          id: "cca_2_3",
          text: "Music is classified as a branch of {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["art", "building", "wrestling"],
          correct: ["art"],
          rule: "Music is one of the performing arts."
        },
        {
          id: "cca_2_4",
          text: "Music is defined as an organized and pleasant {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["sound", "noise", "fight"],
          correct: ["sound"],
          rule: "Music is organized sound with rhythm, pitch, and harmony, unlike noise."
        }
      ]
    },
    {
      subjectId: "agric_w2",
      subjectTitle: "Agricultural Science",
      topic: "Branches of Agriculture & Crop Production",
      questions: [
        {
          id: "agric_2_1",
          text: "Agriculture deals with {dash1} farming and {dash2} farming.",
          dashes: 2,
          type: "bubble",
          options: ["crop", "animal", "iron", "stone"],
          correct: ["crop", "animal"],
          rule: "The two main branches of agriculture are crop production and livestock rearing."
        },
        {
          id: "agric_2_2",
          text: "A person who grows crops and raises farm animals is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["farmer", "trader", "pastor"],
          correct: ["farmer"],
          rule: "A farmer manages agricultural production."
        },
        {
          id: "agric_2_3",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are examples of food crops.",
          dashes: 4,
          type: "bubble",
          options: ["yam", "maize", "rice", "cassava", "cement", "diesel"],
          correct: ["yam", "maize", "rice", "cassava"],
          rule: "Yam, maize, rice, and cassava are crops cultivated by farmers."
        },
        {
          id: "agric_2_4",
          text: "Agriculture has {dash1} primary branches.",
          dashes: 1,
          type: "bubble",
          options: ["2", "6", "8"],
          correct: ["2"],
          rule: "Crop farming and animal rearing are the two primary divisions."
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
          text: "Foods are either eaten raw or {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cooked", "planted", "thrown"],
          correct: ["cooked"],
          rule: "Food items are consumed raw (like fruits) or cooked to make them digestible."
        },
        {
          id: "hec_2_2",
          text: "{dash1}, {dash2} and {dash3} are common methods of cooking.",
          dashes: 3,
          type: "bubble",
          options: ["boiling", "frying", "roasting", "washing", "cooling"],
          correct: ["boiling", "frying", "roasting"],
          rule: "Boiling, frying, roasting, and steaming are common cooking methods."
        },
        {
          id: "hec_2_3",
          text: "Cooking food in boiling water over a fire is known as {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["boiling", "smoking", "frying"],
          correct: ["boiling"],
          rule: "Boiling cooks food using heated water at 100°C."
        },
        {
          id: "hec_2_4",
          text: "We use cooking oil and heating {dash1} or stove for frying.",
          dashes: 1,
          type: "bubble",
          options: ["gas", "water", "petrol"],
          correct: ["gas"],
          rule: "Frying uses hot oil heated over gas burners or clean stoves."
        },
        {
          id: "hec_2_5",
          text: "Placing food directly over open heat or hot coals is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["roasting", "frying", "boiling"],
          correct: ["roasting"],
          rule: "Roasting exposes food directly to radiant heat or open fire."
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
          rule: "Genesis records that God created Adam and Eve as the first humans."
        },
        {
          id: "crs_2_2",
          text: "The first {dash1} God created was Adam.",
          dashes: 1,
          type: "bubble",
          options: ["man", "woman", "God"],
          correct: ["man"],
          rule: "God formed the first man, Adam, from the dust of the earth."
        },
        {
          id: "crs_2_3",
          text: "Those who believe in {dash1} are children of God.",
          dashes: 1,
          type: "bubble",
          options: ["Jesus", "Noah", "Abel"],
          correct: ["Jesus"],
          rule: "John 1:12 teaches that all who receive and believe in Jesus become children of God."
        },
        {
          id: "crs_2_4",
          text: "We become children of God by {dash1} in Christ.",
          dashes: 1,
          type: "bubble",
          options: ["believing", "fighting", "killing"],
          correct: ["believing"],
          rule: "Faith and believing in God's love unites all believers as one family."
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
          text: "The early regions of Nigeria were {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["Northern", "Eastern", "Western", "Mid-Western", "Central", "Lagos"],
          correct: ["Northern", "Eastern", "Western", "Mid-Western"],
          rule: "Nigeria formerly operated with four regions: Northern, Eastern, Western, and Mid-Western."
        },
        {
          id: "hist_2_2",
          text: "The early regions were created by the British {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["colonialists", "Nigerians", "pastors"],
          correct: ["colonialists"],
          rule: "The British colonial government established the regional administration."
        },
        {
          id: "hist_2_3",
          text: "Lord Lugard amalgamated the {dash1} and {dash2} protectorates.",
          dashes: 2,
          type: "bubble",
          options: ["North", "South", "River"],
          correct: ["North", "South"],
          rule: "The Northern and Southern Protectorates were joined to form Nigeria."
        },
        {
          id: "hist_2_4",
          text: "The amalgamation of Nigeria took place in the year {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["1914", "1940", "2020"],
          correct: ["1914"],
          rule: "The amalgamation occurred on January 1, 1914."
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
          text: "The people's way of life is their {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["culture", "industry", "religion"],
          correct: ["culture"],
          rule: "Culture is the shared way of life of a human society."
        },
        {
          id: "civic_2_2",
          text: "Elements of culture include {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["language", "food", "clothing", "petrol", "iron"],
          correct: ["language", "food", "clothing"],
          rule: "What people eat, wear, and speak are foundational cultural elements."
        },
        {
          id: "civic_2_3",
          text: "Three major languages spoken in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Hausa", "Yoruba", "Igbo", "French", "German"],
          correct: ["Hausa", "Yoruba", "Igbo"],
          rule: "Hausa, Yoruba, and Igbo are Nigeria's three major indigenous languages."
        },
        {
          id: "civic_2_4",
          text: "The Igbo people are predominantly found in the {dash1} part of Nigeria.",
          dashes: 1,
          type: "bubble",
          options: ["Eastern", "Northern", "Western"],
          correct: ["Eastern"],
          rule: "The South-Eastern geopolitical zone is the homeland of the Igbo people."
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
          text: "Two types of environment are the {dash1} and {dash2} environments.",
          dashes: 2,
          type: "bubble",
          options: ["physical", "social", "heavenly"],
          correct: ["physical", "social"],
          rule: "Environment is divided into physical (natural & built) and social (people & culture)."
        },
        {
          id: "sos_2_2",
          text: "Social Studies is the study of {dash1} in his environment.",
          dashes: 1,
          type: "bubble",
          options: ["man", "plant", "god"],
          correct: ["man"],
          rule: "Social Studies examines how human beings live, work, and interact with surroundings."
        },
        {
          id: "sos_2_3",
          text: "We associate with other people in the {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["school", "church", "market", "room"],
          correct: ["school", "church", "market"],
          rule: "Schools, religious centers, and markets are common social interaction spaces."
        },
        {
          id: "sos_2_4",
          text: "Things in our physical environment include {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["trees", "rivers", "spirits"],
          correct: ["trees", "rivers"],
          rule: "Trees, hills, buildings, and rivers make up the visible physical environment."
        }
      ]
    },
    {
      subjectId: "vr_w2",
      subjectTitle: "Verbal Reasoning",
      topic: "Word Formation (Removing or Extracting Words)",
      questions: [
        {
          id: "vr_2_1",
          text: "From 'Shoe' extract {dash1}; from 'Hate' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["hoe", "ate", "she", "hat"],
          correct: ["hoe", "ate"],
          rule: "Removing the first letter of 'shoe' gives 'hoe'; removing 'h' from 'hate' gives 'ate'."
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
          rule: "Monday ends in 'day'; show ends in 'how'."
        },
        {
          id: "vr_2_4",
          text: "From 'Cup' extract {dash1}; from 'Cash' extract {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["up", "ash", "us", "as"],
          correct: ["up", "ash"],
          rule: "c + up = cup; c + ash = cash."
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
          text: "Convert to Arabic: XI = {dash1}; XL = {dash2}; VIII = {dash3}.",
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
          rule: "IV = 4; XXV = 20+5 = 25; XVI = 10+5+1 = 16."
        },
        {
          id: "qr_2_3",
          text: "Convert: IX = {dash1}; XIV = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["9", "14", "11", "16"],
          correct: ["9", "14"],
          rule: "IX = 10-1 = 9; XIV = 10+4 = 14."
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
      topic: "Reading and Writing: Composition About Myself",
      questions: [
        {
          id: "eng_3_1",
          text: "In writing about myself, my opening sentence introduces my {dash1} and my {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["name", "age", "cooking", "shoe size"],
          correct: ["name", "age"],
          rule: "A self-introduction begins with your name and your age or class."
        }
      ]
    },
    {
      subjectId: "math_w3",
      subjectTitle: "Mathematics",
      topic: "Whole Numbers: Number Sequences and Addition Patterns",
      questions: [
        {
          id: "math_3_1",
          text: "Adding ten thousands: 120,000; 130,000; 140,000; {dash1}; {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["150,000", "160,000", "170,000", "180,000"],
          correct: ["150,000", "160,000"],
          rule: "Add 10,000 to each term: 140,000 + 10,000 = 150,000."
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
          text: "Number names in tens: Twenty, thirty, forty, {dash1}, {dash2}.",
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
          rule: "3 + 5 = 8; 8 + 5 = 13; 13 + 5 = 18; 18 + 5 = 23."
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
          rule: "Add 100: 425 + 100 = 525; 525 + 100 = 625."
        }
      ]
    },
    {
      subjectId: "igbo_w3",
      subjectTitle: "Asụsụ Igbo",
      topic: "Ejije (Drama and Roles)",
      questions: [
        {
          id: "igbo_3_1",
          text: "Ejije bụ {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["egwuregwu nkiri", "ọrụ bekee", "mgba"],
          correct: ["egwuregwu nkiri"],
          rule: "Ejije bu egwuregwu nkiri nke na-akuzi ihe."
        },
        {
          id: "igbo_3_2",
          text: "Ihe eji eme ejije na-egosipụta ọrụ ugbo bụ {dash1}, {dash2} na {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["ọgụ", "mma ọge", "nkata", "akwụkwọ", "mkpịsị odee"],
          correct: ["ọgụ", "mma ọge", "nkata"],
          rule: "Ngwa oru ugbo bu ogu, mma oge, na nkata."
        },
        {
          id: "igbo_3_3",
          text: "{dash1}, {dash2} na {dash3} bụ ihe a na-akọpụta n'ubi.",
          dashes: 3,
          type: "bubble",
          options: ["ji", "ede", "akpụ", "egbe"],
          correct: ["ji", "ede", "akpụ"],
          rule: "Ji, ede, na akpu bu ihe ubi a na-eri eri."
        },
        {
          id: "igbo_3_4",
          text: "Njirimara onye ọrụ agha n'ejije bụ {dash1} na {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["egbe", "uwe agha", "ugbo odee", "igodo"],
          correct: ["egbe", "uwe agha"],
          rule: "Onye agha na-ebu egbe ma yiri uwe agha."
        }
      ]
    },
    {
      subjectId: "comp_w3",
      subjectTitle: "Computer Studies",
      topic: "Information Transmission (Electronic and Non-Electronic)",
      passage: {
        title: "Lesson Note: Information",
        text: "Information is processed data. Processed information can be transmitted through electronic media (telephone, television, radio, internet) and non-electronic media (oral speech, beating drums, town crying, printed letters)."
      },
      questions: [
        {
          id: "comp_3_1",
          text: "The result of data processed is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["information", "letter", "mail"],
          correct: ["information"],
          rule: "Information is organized, meaningful data."
        },
        {
          id: "comp_3_2",
          text: "Information interpreted gives {dash1} to data.",
          dashes: 1,
          type: "bubble",
          options: ["meaning", "warning", "degree"],
          correct: ["meaning"],
          rule: "Processing data turns numbers into meaningful facts."
        },
        {
          id: "comp_3_3",
          text: "Electronic media for transmitting information include {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["television", "radio", "telephone", "town crying", "beating drums"],
          correct: ["television", "radio", "telephone"],
          rule: "Electronic media rely on electrical power and signals."
        },
        {
          id: "comp_3_4",
          text: "Examples of non-electronic media are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["oral communication", "beating drums", "town crying", "satellite", "telefax"],
          correct: ["oral communication", "beating drums", "town crying"],
          rule: "Ancient or non-electronic methods do not require electricity."
        }
      ]
    },
    {
      subjectId: "bst_w3",
      subjectTitle: "Basic Science and Technology",
      topic: "Our Weather and Weather Instruments",
      questions: [
        {
          id: "bst_3_1",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are types of weather conditions.",
          dashes: 4,
          type: "bubble",
          options: ["hot", "cold", "cloudy", "rainy", "stone", "iron"],
          correct: ["hot", "cold", "cloudy", "rainy"],
          rule: "Weather conditions vary between sunny/hot, cold, cloudy, and rainy."
        },
        {
          id: "bst_3_2",
          text: "Three factors that affect weather are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["sun", "wind", "clouds", "paint", "paper"],
          correct: ["sun", "wind", "clouds"],
          rule: "Sunlight, air currents, temperature, and clouds determine the weather."
        },
        {
          id: "bst_3_3",
          text: "The direction of the wind is measured using a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["windvane", "metre", "tape"],
          correct: ["windvane"],
          rule: "A windvane points in the direction from which the wind blows."
        },
        {
          id: "bst_3_4",
          text: "A {dash1} measures the amount of rainfall.",
          dashes: 1,
          type: "bubble",
          options: ["raingauge", "rain drop", "gallon"],
          correct: ["raingauge"],
          rule: "Rain gauges measure rainfall in millimeters."
        }
      ]
    },
    {
      subjectId: "phe_w3",
      subjectTitle: "Physical and Health Education",
      topic: "Volleyball Game",
      questions: [
        {
          id: "phe_3_1",
          text: "There are {dash1} competing teams on a volleyball court.",
          dashes: 1,
          type: "bubble",
          options: ["2", "4", "6"],
          correct: ["2"],
          rule: "Two opposing teams play on either side of the high net."
        },
        {
          id: "phe_3_2",
          text: "A volleyball team is led on the court by a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["captain", "caller", "referee"],
          correct: ["captain"],
          rule: "The team captain directs the squad and speaks with the referee."
        }
      ]
    },
    {
      subjectId: "cca_w3",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Origin of Art: Tools of Early Men",
      questions: [
        {
          id: "cca_3_1",
          text: "{dash1} started the work of art and tool making.",
          dashes: 1,
          type: "bubble",
          options: ["early men", "foreigners", "government"],
          correct: ["early men"],
          rule: "Early humans shaped stones and carved wood to create survival tools."
        },
        {
          id: "cca_3_2",
          text: "{dash1} and {dash2} were weapons made from sticks and strings.",
          dashes: 2,
          type: "bubble",
          options: ["bows", "arrows", "tractors", "motors"],
          correct: ["bows", "arrows"],
          rule: "Early hunters used bows and sharp arrows to hunt wild animals."
        },
        {
          id: "cca_3_3",
          text: "Early men made {dash1} and {dash2} for farming.",
          dashes: 2,
          type: "bubble",
          options: ["hoes", "machetes", "cars", "airplanes"],
          correct: ["hoes", "machetes"],
          rule: "Early farming tools included hand hoes and metal/stone machetes."
        },
        {
          id: "cca_3_4",
          text: "Bows and arrows were used for {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["hunting", "eating", "sleeping"],
          correct: ["hunting"],
          rule: "Hunting game for food was the primary use of bows and arrows."
        }
      ]
    },
    {
      subjectId: "agric_w3",
      subjectTitle: "Agricultural Science",
      topic: "Classification of Crops: Tuber Crops",
      questions: [
        {
          id: "agric_3_1",
          text: "Crops that store food in swollen parts underground are called {dash1} crops.",
          dashes: 1,
          type: "bubble",
          options: ["tuber", "cereal", "legume"],
          correct: ["tuber"],
          rule: "Tuber crops develop their harvestable starch reserve beneath the soil."
        },
        {
          id: "agric_3_2",
          text: "Four examples of tuber crops are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["yam", "cassava", "cocoyam", "carrot", "maize", "rice"],
          correct: ["yam", "cassava", "cocoyam", "carrot"],
          rule: "Yam, cassava, cocoyam, and carrots grow as underground food stores."
        },
        {
          id: "agric_3_3",
          text: "Which of these crops is NOT a tuber crop? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["rice", "yam", "cocoyam", "cassava"],
          correct: ["rice"],
          rule: "Rice is a cereal grain, not an underground tuber."
        },
        {
          id: "agric_3_4",
          text: "Is carrot a root tuber crop? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Carrots store nutrients in an edible root tuber."
        }
      ]
    },
    {
      subjectId: "crs_w3",
      subjectTitle: "Christian Religious Studies",
      topic: "Living in Peace as Children of One Father",
      questions: [
        {
          id: "crs_3_1",
          text: "Children of the same heavenly Father are commanded to live in {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["peace", "fighting", "stealing"],
          correct: ["peace"],
          rule: "Romans 12:18 urges all believers to live peaceably with one another."
        },
        {
          id: "crs_3_2",
          text: "Those who do NOT act like children of God include {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["thieves", "killers", "Christians", "saints"],
          correct: ["thieves", "killers"],
          rule: "Wicked acts like theft and violence violate the commandments of God."
        },
        {
          id: "crs_3_3",
          text: "The Almighty Creator {dash1} is our heavenly Father.",
          dashes: 1,
          type: "bubble",
          options: ["God", "Satan", "Idol"],
          correct: ["God"],
          rule: "God the Father created us and watches over His children."
        }
      ]
    },
    {
      subjectId: "hist_w3",
      subjectTitle: "History",
      topic: "Major Ethnic Groups in Early Nigerian Regions",
      questions: [
        {
          id: "hist_3_1",
          text: "{dash1} and {dash2} were the dominant ethnic groups in the Northern region.",
          dashes: 2,
          type: "bubble",
          options: ["Hausa", "Fulani", "Yoruba", "Igbo"],
          correct: ["Hausa", "Fulani"],
          rule: "The Northern region was predominantly populated by the Hausa and Fulani."
        },
        {
          id: "hist_3_2",
          text: "The Igbo people formed the major ethnic group in the {dash1} region.",
          dashes: 1,
          type: "bubble",
          options: ["Eastern", "Western", "Northern"],
          correct: ["Eastern"],
          rule: "The Eastern region was predominantly Igbo-speaking."
        },
        {
          id: "hist_3_3",
          text: "The Yoruba people were located primarily in the {dash1} region.",
          dashes: 1,
          type: "bubble",
          options: ["Western", "Eastern", "Northern"],
          correct: ["Western"],
          rule: "The Western region was predominantly populated by the Yorubas."
        },
        {
          id: "hist_3_4",
          text: "In the Mid-Western region, the {dash1} group formed a major ethnic group.",
          dashes: 1,
          type: "bubble",
          options: ["Bini", "Tiv", "Kanuri"],
          correct: ["Bini"],
          rule: "The Mid-Western region was home to the Bini (Edo), Urhobo, and Itsekiri."
        }
      ]
    },
    {
      subjectId: "civic_w3",
      subjectTitle: "Civic Education",
      topic: "Respect for Other People's Views",
      questions: [
        {
          id: "civic_3_1",
          text: "Three languages spoken across Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Igbo", "Hausa", "Yoruba", "Kano", "Enugu"],
          correct: ["Igbo", "Hausa", "Yoruba"],
          rule: "Hausa, Igbo, and Yoruba are languages, while Kano and Enugu are cities."
        },
        {
          id: "civic_3_2",
          text: "Other citizens' {dash1} and {dash2} should be respected.",
          dashes: 2,
          type: "bubble",
          options: ["religion", "culture", "crime", "robbery"],
          correct: ["religion", "culture"],
          rule: "Tolerance requires respecting different religious and cultural viewpoints."
        },
        {
          id: "civic_3_3",
          text: "Respecting other people's views produces {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["peace", "happiness", "death", "fight"],
          correct: ["peace", "happiness"],
          rule: "Mutual tolerance builds social harmony, peace, and national progress."
        },
        {
          id: "civic_3_4",
          text: "Nigeria is blessed with many distinct cultures: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Nigeria is a multicultural country with over 250 ethnic groups."
        }
      ]
    },
    {
      subjectId: "sos_w3",
      subjectTitle: "Social Studies",
      topic: "Physical Environment",
      questions: [
        {
          id: "sos_3_1",
          text: "Man's physical environment includes {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["houses", "trees", "angels"],
          correct: ["houses", "trees"],
          rule: "Houses (man-made) and trees (natural) are part of physical surroundings."
        },
        {
          id: "sos_3_2",
          text: "{dash1}, {dash2} and {dash3} are common animals in our local environment.",
          dashes: 3,
          type: "bubble",
          options: ["goat", "dog", "cat", "whale"],
          correct: ["goat", "dog", "cat"],
          rule: "Goats, dogs, and cats live in communities alongside humans."
        }
      ]
    },
    {
      subjectId: "hec_w3",
      subjectTitle: "Home Economics",
      topic: "Meaning and Scope of Home Economics",
      questions: [
        {
          id: "hec_3_1",
          text: "Home Economics is the study of {dash1} management.",
          dashes: 1,
          type: "bubble",
          options: ["home", "school", "hospital"],
          correct: ["home"],
          rule: "Home Economics teaches practical family and home life management."
        },
        {
          id: "hec_3_2",
          text: "Home management deals with {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["food and nutrition", "clothing", "child care", "car manufacturing"],
          correct: ["food and nutrition", "clothing", "child care"],
          rule: "The field covers cooking, garment making, and human development."
        },
        {
          id: "hec_3_3",
          text: "Food {dash1} and food {dash2} are vital skills taught in Home Economics.",
          dashes: 2,
          type: "bubble",
          options: ["preparation", "preservation", "decay"],
          correct: ["preparation", "preservation"],
          rule: "Preparing balanced meals and storing food prevent waste and illness."
        },
        {
          id: "hec_3_4",
          text: "Interior decoration makes the home {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["beautiful", "dirty", "empty"],
          correct: ["beautiful"],
          rule: "Decorating choices enhance visual comfort and cleanliness indoors."
        }
      ]
    },
    {
      subjectId: "fr_w3",
      subjectTitle: "French Studies",
      topic: "Objets à l'École (Objects at School)",
      questions: [
        {
          id: "fr_3_1",
          text: "Clock in French is {dash1}; Book is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["horloge", "livre", "chaise", "drapeau"],
          correct: ["horloge", "livre"],
          rule: "L'horloge = clock; le livre = book."
        },
        {
          id: "fr_3_2",
          text: "Pen is {dash1}; School bag is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["stylo", "sac d'école", "livre"],
          correct: ["stylo", "sac d'école"],
          rule: "Le stylo = pen; le sac d'école (cartable) = school bag."
        },
        {
          id: "fr_3_3",
          text: "Bell is {dash1}; Flag is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["cloche", "drapeau", "bande", "chaise"],
          correct: ["cloche", "drapeau"],
          rule: "La cloche = bell; le drapeau = flag."
        }
      ]
    },
    {
      subjectId: "vr_w3",
      subjectTitle: "Verbal Reasoning",
      topic: "Compound Words (Breaking into Two Words)",
      questions: [
        {
          id: "vr_3_1",
          text: "Divide compound words: weekend = {dash1} + {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["week", "end", "wee", "kend"],
          correct: ["week", "end"],
          rule: "The compound word 'weekend' consists of 'week' + 'end'."
        },
        {
          id: "vr_3_2",
          text: "Divide: pickup = {dash1} + {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["pick", "up", "pi", "ckup"],
          correct: ["pick", "up"],
          rule: "'Pickup' divides into the verb 'pick' and the preposition 'up'."
        },
        {
          id: "vr_3_3",
          text: "Divide: soften = {dash1} + {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["soft", "en", "so", "ften"],
          correct: ["soft", "en"],
          rule: "Root word 'soft' + suffix 'en'."
        }
      ]
    },
    {
      subjectId: "qr_w3",
      subjectTitle: "Quantitative Reasoning",
      topic: "Numbers Written in Words",
      questions: [
        {
          id: "qr_3_1",
          text: "Write in words: 40 = {dash1}; 15 = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Forty", "Fifteen", "Fourty", "Fiveteen"],
          correct: ["Forty", "Fifteen"],
          rule: "40 is spelled 'Forty' (no 'u'); 15 is 'Fifteen'."
        },
        {
          id: "qr_3_2",
          text: "Write in words: 12 = {dash1}; 100 = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Twelve", "One hundred", "Twelv", "Hundred"],
          correct: ["Twelve", "One hundred"],
          rule: "12 = Twelve; 100 = One hundred."
        },
        {
          id: "qr_3_3",
          text: "Write in words: 33 = {dash1}; 50 = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Thirty-three", "Fifty", "Thirteen", "Fifteen"],
          correct: ["Thirty-three", "Fifty"],
          rule: "33 is Thirty-three; 50 is Fifty."
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
          rule: "'As sweet as honey'; 'as easy as ABC'."
        },
        {
          id: "eng_4_3",
          text: "Metaphor: 'Nweke is an elephant' means Nweke is very {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["big", "small", "dead"],
          correct: ["big"],
          rule: "Comparing someone directly to an elephant emphasizes large size or strength."
        },
        {
          id: "eng_4_4",
          text: "'He is a tortoise' means he is cunning and {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["tricky", "handsome", "fast"],
          correct: ["tricky"],
          rule: "In West African folklore, the tortoise is celebrated for tricky, clever schemes."
        },
        {
          id: "eng_4_5",
          text: "'Women are gold' means women are highly {dash1} and precious.",
          dashes: 1,
          type: "bubble",
          options: ["costly", "tall", "heavy"],
          correct: ["costly"],
          rule: "Gold represents preciousness, dignity, and exceptional worth."
        }
      ]
    },
    {
      subjectId: "igbo_w4",
      subjectTitle: "Asụsụ Igbo",
      topic: "Agwa Ọma na Agwa Ọjọọ (Good and Bad Character)",
      questions: [
        {
          id: "igbo_4_1",
          text: "{dash1}, {dash2} na {dash3} bụ ezi agwa ọma mmadụ na-akpa.",
          dashes: 3,
          type: "bubble",
          options: ["ikwu eziokwu", "isopuru okenye", "ihunanya", "igbu mmadu", "izu ohi"],
          correct: ["ikwu eziokwu", "isopuru okenye", "ihunanya"],
          rule: "Agwa oma gunyere ikwu eziokwu, isopuru okenye, na ihunanya."
        },
        {
          id: "igbo_4_2",
          text: "{dash1} na {dash2} bụ agwa ọjọọ mmadụ kwesịrị izere.",
          dashes: 2,
          type: "bubble",
          options: ["izu ohi", "igbu mmadu", "ikpe ekpere"],
          correct: ["izu ohi", "igbu mmadu"],
          rule: "Izu ohi na igbu mmadu bu ajoo ihe megidere iwu."
        },
        {
          id: "igbo_4_3",
          text: "Agwa ọma na-ewetara mmadụ {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["otito", "onwu"],
          correct: ["otito"],
          rule: "Ezi agwa na-eweta nkwanye ugwu na otito."
        },
        {
          id: "igbo_4_4",
          text: "Ahụhụ na-eso agwa ọjọọ bụ {dash1} na {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["ije nga", "inata mkpari", "iga akwukwo"],
          correct: ["ije nga", "inata mkpari"],
          rule: "Onye na-eme ajoo ihe na-aga nga ma na-anata mkpari."
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
          text: "Sources of information are divided into {dash1} and {dash2} sources.",
          dashes: 2,
          type: "bubble",
          options: ["ancient", "modern", "country"],
          correct: ["ancient", "modern"],
          rule: "Methods of information gathering span traditional/ancient and modern eras."
        },
        {
          id: "comp_4_2",
          text: "Three ancient sources of information are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["town crying", "wooden gong", "fire lighting", "computers", "photocopying"],
          correct: ["town crying", "wooden gong", "fire lighting"],
          rule: "Early communities relied on town criers, smoke signals, and gongs."
        },
        {
          id: "comp_4_3",
          text: "Three modern sources of information are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["computers", "radio", "photocopying", "flute", "drums"],
          correct: ["computers", "radio", "photocopying"],
          rule: "Modern tools include digital computers, printed papers, and broadcasts."
        },
        {
          id: "comp_4_4",
          text: "Town crying is an ancient source of information: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Town criers delivered village announcements before electronic media."
        }
      ]
    },
    {
      subjectId: "bst_w4",
      subjectTitle: "Basic Science and Technology",
      topic: "Weather Instruments and Weather Symbols",
      questions: [
        {
          id: "bst_4_1",
          text: "A barometer is used to measure atmospheric {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["pressure", "volume", "hotness"],
          correct: ["pressure"],
          rule: "Barometers measure barometric or atmospheric air pressure."
        },
        {
          id: "bst_4_2",
          text: "The instrument used to measure temperature is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["thermometre", "compass", "plier"],
          correct: ["thermometre"],
          rule: "Thermometers register body or air temperatures in degrees Celsius/Fahrenheit."
        }
      ]
    },
    {
      subjectId: "phe_w4",
      subjectTitle: "Physical and Health Education",
      topic: "Athletics: Sprint Races",
      questions: [
        {
          id: "phe_4_1",
          text: "Short distance races run at maximum speed are called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["sprints", "marathons", "walks"],
          correct: ["sprints"],
          rule: "Sprints are high-speed races over short distances."
        },
        {
          id: "phe_4_2",
          text: "To win a sprint, the runner must maintain top {dash1} from start to finish.",
          dashes: 1,
          type: "bubble",
          options: ["speed", "sleep", "weight"],
          correct: ["speed"],
          rule: "Sprinting demands continuous acceleration and explosive power."
        },
        {
          id: "phe_4_3",
          text: "Sprints are run within assigned marked {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["lanes", "courts", "tables"],
          correct: ["lanes"],
          rule: "Athletes must remain in their designated track lanes."
        },
        {
          id: "phe_4_4",
          text: "{dash1}, {dash2} and {dash3} are official sprint distances.",
          dashes: 3,
          type: "bubble",
          options: ["100m", "200m", "400m", "1500m", "5000m"],
          correct: ["100m", "200m", "400m"],
          rule: "Track sprint events comprise 100 meters, 200 meters, and 400 meters."
        }
      ]
    },
    {
      subjectId: "cca_w4",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Classification of Arts: Visual and Performing Arts",
      questions: [
        {
          id: "cca_4_1",
          text: "The two main branches of art are {dash1} arts and {dash2} arts.",
          dashes: 2,
          type: "bubble",
          options: ["visual", "performing", "eating", "sleeping"],
          correct: ["visual", "performing"],
          rule: "Arts split into visual arts (seen/touched) and performing arts (staged/heard)."
        },
        {
          id: "cca_4_2",
          text: "Examples of visual arts are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["drawing", "sculpture", "singing", "dance"],
          correct: ["drawing", "sculpture"],
          rule: "Drawings, paintings, and sculptures are tangible visual creations."
        },
        {
          id: "cca_4_3",
          text: "Examples of performing arts are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["music", "dance", "drama", "drawing", "sculpture"],
          correct: ["music", "dance", "drama"],
          rule: "Performing arts require live dramatic, vocal, or physical expression."
        },
        {
          id: "cca_4_4",
          text: "Art has {dash1} main branches.",
          dashes: 1,
          type: "bubble",
          options: ["2", "4", "6"],
          correct: ["2"],
          rule: "Visual arts and performing arts make up the two primary branches."
        }
      ]
    },
    {
      subjectId: "agric_w4",
      subjectTitle: "Agricultural Science",
      topic: "Fruits and Vegetable Crops",
      questions: [
        {
          id: "agric_4_1",
          text: "Fruits are developed from the pollinated {dash1} of plants.",
          dashes: 1,
          type: "bubble",
          options: ["flowers", "root"],
          correct: ["flowers"],
          rule: "A fruit is the ripened seed-bearing ovary of a flowering plant."
        },
        {
          id: "agric_4_2",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are examples of edible fruits.",
          dashes: 4,
          type: "bubble",
          options: ["mango", "pineapple", "orange", "banana", "wood", "grass"],
          correct: ["mango", "pineapple", "orange", "banana"],
          rule: "Mango, pineapple, orange, and banana are common fruits."
        },
        {
          id: "agric_4_3",
          text: "Vegetables are typically consumed as edible plant {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["leaves", "blocks", "stones"],
          correct: ["leaves"],
          rule: "Leafy vegetables provide vitamins and dietary mineral roughage."
        },
        {
          id: "agric_4_4",
          text: "Which of these fruits can be eaten fresh and raw? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["mango", "yam"],
          correct: ["mango"],
          rule: "Mangoes are sweet, succulent fruits ready to eat raw without cooking."
        }
      ]
    },
    {
      subjectId: "hec_w4",
      subjectTitle: "Home Economics",
      topic: "Careers in Home Economics",
      questions: [
        {
          id: "hec_4_1",
          text: "The career of cutting fabric and making fashionable clothes is {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["fashion designing", "dietetics", "researching"],
          correct: ["fashion designing"],
          rule: "Fashion design applies clothing construction and styling aesthetics."
        },
        {
          id: "hec_4_2",
          text: "Ensuring people eat a healthy balanced diet is the work of {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["dietetics", "water", "money"],
          correct: ["dietetics"],
          rule: "Dietitians and nutritionists plan therapeutic, balanced meals."
        },
        {
          id: "hec_4_3",
          text: "{dash1} is the art of planning, arranging, and beautifying home spaces.",
          dashes: 1,
          type: "bubble",
          options: ["Interior decoration", "Cooking", "Sweeping"],
          correct: ["Interior decoration"],
          rule: "Interior decoration designs comfortable, attractive indoor living areas."
        },
        {
          id: "hec_4_4",
          text: "Interior decoration is meant for indoor beauty and functionality: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Interior design enriches homes with practical, aesthetic decor."
        }
      ]
    },
    {
      subjectId: "crs_w4",
      subjectTitle: "Christian Religious Studies",
      topic: "God Speaks to Us",
      questions: [
        {
          id: "crs_4_1",
          text: "In the Old Testament, God spoke to His people through the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["prophets", "robbers", "merchants"],
          correct: ["prophets"],
          rule: "Hebrews 1:1 notes God spoke to the fathers through the prophets."
        },
        {
          id: "crs_4_2",
          text: "Today, God can speak to us through the {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Bible", "dreams", "prayer", "television ads"],
          correct: ["Bible", "dreams", "prayer"],
          rule: "Scripture, inner promptings, visions, and prayers are ways God guides believers."
        },
        {
          id: "crs_4_3",
          text: "God communicating with a person while asleep is called a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["dream", "video", "sleeper"],
          correct: ["dream"],
          rule: "God often used dreams to instruct biblical servants like Joseph."
        },
        {
          id: "crs_4_4",
          text: "{dash1} are heavenly messengers sent by God.",
          dashes: 1,
          type: "bubble",
          options: ["Angels", "Devils", "Idols"],
          correct: ["Angels"],
          rule: "Angels are spiritual messengers dispatched to minister to God's people."
        }
      ]
    },
    {
      subjectId: "hist_w4",
      subjectTitle: "History",
      topic: "States in Early Regions of Nigeria",
      passage: {
        title: "Historical Note: State Creation",
        text: "In 1967, General Yakubu Gowon dissolved the four regions and created 12 states. Later boundary changes brought the total to 36 states across Nigeria."
      },
      questions: [
        {
          id: "hist_4_1",
          text: "Four states that were created in Eastern Nigeria are {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["Enugu", "Anambra", "Imo", "Cross River", "Sokoto", "Kano"],
          correct: ["Enugu", "Anambra", "Imo", "Cross River"],
          rule: "Enugu, Anambra, Imo, and Cross River emerged from the old Eastern region."
        },
        {
          id: "hist_4_2",
          text: "Edo and Delta states were carved out of the old {dash1} region.",
          dashes: 1,
          type: "bubble",
          options: ["Mid-Western", "Eastern", "Northern"],
          correct: ["Mid-Western"],
          rule: "The Mid-Western region was renamed Bendel State, which later split into Edo and Delta."
        },
        {
          id: "hist_4_3",
          text: "Three states in Western Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Oyo", "Ogun", "Ondo", "Kaduna", "Borno"],
          correct: ["Oyo", "Ogun", "Ondo"],
          rule: "Oyo, Ogun, and Ondo were formed from the old Western state."
        },
        {
          id: "hist_4_4",
          text: "Four states created in Northern Nigeria include {dash1}, {dash2}, {dash3} and {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["Sokoto", "Kano", "Borno", "Kaduna", "Rivers", "Delta"],
          correct: ["Sokoto", "Kano", "Borno", "Kaduna"],
          rule: "Sokoto, Kano, Borno, and Kaduna are major Northern states."
        }
      ]
    },
    {
      subjectId: "civic_w4",
      subjectTitle: "Civic Education",
      topic: "The Concept and Levels of Government",
      questions: [
        {
          id: "civic_4_1",
          text: "Government is a body composed of {dash1} that administers a country.",
          dashes: 1,
          type: "bubble",
          options: ["people", "animals", "birds"],
          correct: ["people"],
          rule: "Government is an institution run by chosen or elected officials."
        },
        {
          id: "civic_4_2",
          text: "The leaders in government direct and manage the {dash1} of the country.",
          dashes: 1,
          type: "bubble",
          options: ["affairs", "church", "food"],
          correct: ["affairs"],
          rule: "Governments establish policies to govern political and civil affairs."
        },
        {
          id: "civic_4_3",
          text: "The three tiers of government in Nigeria are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Federal", "State", "Local", "Village", "Kingdom"],
          correct: ["Federal", "State", "Local"],
          rule: "Nigeria operates a federal system with Federal, State, and Local tiers."
        },
        {
          id: "civic_4_4",
          text: "The highest authority of governance in Nigeria is the {dash1} Government.",
          dashes: 1,
          type: "bubble",
          options: ["Federal", "Local", "Town"],
          correct: ["Federal"],
          rule: "The Federal Government possesses national supreme constitutional authority."
        }
      ]
    },
    {
      subjectId: "sos_w4",
      subjectTitle: "Social Studies",
      topic: "Systems of Government",
      questions: [
        {
          id: "sos_4_1",
          text: "Government leaders assume power either through {dash1} or {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["election", "inheritance", "war"],
          correct: ["election", "inheritance"],
          rule: "Democratic leaders are elected; traditional rulers/monarchs inherit power."
        },
        {
          id: "sos_4_2",
          text: "In a monarchy, succession to power is based on {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["inheritance", "election"],
          correct: ["inheritance"],
          rule: "Kings, Emirs, and Obas pass power along hereditary royal lines."
        },
        {
          id: "sos_4_3",
          text: "A presidential democracy requires citizens to choose leaders by {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["voting", "fighting"],
          correct: ["voting"],
          rule: "Elections use secret ballots to select presidents and legislators."
        },
        {
          id: "sos_4_4",
          text: "{dash1} and {dash2} are types of democratic systems.",
          dashes: 2,
          type: "bubble",
          options: ["presidential", "parliamentary", "dictatorship"],
          correct: ["presidential", "parliamentary"],
          rule: "Presidential and parliamentary setups are constitutional democratic models."
        }
      ]
    },
    {
      subjectId: "vr_w4",
      subjectTitle: "Verbal Reasoning",
      topic: "Word Analogies (Letter Omissions)",
      questions: [
        {
          id: "vr_4_1",
          text: "Olive is to live as seven is to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["even", "seven", "seen"],
          correct: ["even"],
          rule: "Removing the initial letter 'o' leaves 'live'; removing 's' from 'seven' leaves 'even'."
        },
        {
          id: "vr_4_2",
          text: "Call is to all as pant is to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["ant", "pan", "tan"],
          correct: ["ant"],
          rule: "Removing the first letter 'p' from 'pant' gives 'ant'."
        },
        {
          id: "vr_4_3",
          text: "Female is to male as forgive is to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["give", "for", "live"],
          correct: ["give"],
          rule: "Removing the prefix 'for-' from 'forgive' leaves the root 'give'."
        },
        {
          id: "vr_4_4",
          text: "Stone is to tone as belong is to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["long", "be", "song"],
          correct: ["long"],
          rule: "Drop 'be-' from 'belong' to yield 'long'."
        },
        {
          id: "vr_4_5",
          text: "Clean is to lean as whole is to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["hole", "who", "sole"],
          correct: ["hole"],
          rule: "Drop the first letter 'w' from 'whole' to get 'hole'."
        }
      ]
    },
    {
      subjectId: "qr_w4",
      subjectTitle: "Quantitative Reasoning",
      topic: "Comparing Values Using '<', '>', or '='",
      questions: [
        {
          id: "qr_4_1",
          text: "Select the correct comparison: 100 {dash1} 200; 80 {dash2} 70.",
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
    },
    {
      subjectId: "fr_w4",
      subjectTitle: "French Studies",
      topic: "Les Formes Géométriques (Shapes)",
      questions: [
        {
          id: "fr_4_1",
          text: "Star in French is {dash1}; Circle is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["étoile", "rond", "brun", "catrel"],
          correct: ["étoile", "rond"],
          rule: "Étoile = star; rond (cercle) = circle."
        },
        {
          id: "fr_4_2",
          text: "Triangle is {dash1}; Cylinder is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["triangle", "cylindre", "ova", "catrel"],
          correct: ["triangle", "cylindre"],
          rule: "Le triangle = triangle; le cylindre = cylinder."
        },
        {
          id: "fr_4_3",
          text: "Oval is {dash1}; Square is {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["ovale", "carré", "rondo", "étoile"],
          correct: ["ovale", "carré"],
          rule: "L'ovale = oval; le carré = square."
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
      topic: "Reading Comprehension: Jude's Story of the Tall Building",
      passage: {
        title: "Story: The Tall Building and the Big Tree",
        text: "Jude told his friends, Amechi and Kelechi, about a tall house he saw in Enugu. He compared the height of the house to the tall tree near the village stream. The tree had grown so tall that children could never hit the birds perched on top using their catapults."
      },
      questions: [
        {
          id: "eng_5_1",
          text: "Jude saw the extraordinarily tall building in {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Enugu", "Onitsha", "Abuja"],
          correct: ["Enugu"],
          rule: "The story states that Jude saw the building in Enugu."
        },
        {
          id: "eng_5_2",
          text: "Jude compared the building to a tall {dash1} near their stream.",
          dashes: 1,
          type: "bubble",
          options: ["tree", "pole", "hill"],
          correct: ["tree"],
          rule: "He compared the height of the building to the village stream tree."
        },
        {
          id: "eng_5_3",
          text: "The children usually went to the stream carrying their {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["catapults", "buckets", "books"],
          correct: ["catapults"],
          rule: "The boys carried catapults to hunt birds."
        },
        {
          id: "eng_5_4",
          text: "Jude's two good friends named in the story are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["Amechi", "Kelechi", "Emeka", "Chidi"],
          correct: ["Amechi", "Kelechi"],
          rule: "Amechi and Kelechi listened to Jude's story."
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
          rule: "XI = 10+1 = 11; VII = 5+2 = 7; IX = 10-1 = 9."
        },
        {
          id: "math_5_2",
          text: "Convert: XIV = {dash1}; L = {dash2}; XXV = {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["14", "50", "25", "16", "40"],
          correct: ["14", "50", "25"],
          rule: "XIV = 14; L = 50; XXV = 25."
        },
        {
          id: "math_5_3",
          text: "Convert: XIX = {dash1}; XL = {dash2}; XXX = {dash3}; XLV = {dash4}.",
          dashes: 4,
          type: "bubble",
          options: ["19", "40", "30", "45", "55", "35"],
          correct: ["19", "40", "30", "45"],
          rule: "XIX = 19; XL = 40; XXX = 30; XLV = 45."
        }
      ]
    },
    {
      subjectId: "igbo_w5",
      subjectTitle: "Asụsụ Igbo",
      topic: "Ọrụ Aka (Crafts and Visual Arts)",
      questions: [
        {
          id: "igbo_5_1",
          text: "E ji {dash1} na {dash2} ese ihe.",
          dashes: 2,
          type: "bubble",
          options: ["akwụkwọ", "mkpịsị odee", "mma uhie"],
          correct: ["akwụkwọ", "mkpịsị odee"],
          rule: "A na-eji pensul (mkpisi odee) na akwukwo ese ihe."
        },
        {
          id: "igbo_5_2",
          text: "Ihe e ji achọ ihe eserese mma bụ {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["àgwà", "ude", "aja"],
          correct: ["àgwà"],
          rule: "Àgwà (colour/paint) na-eme ka eserese maa mma."
        },
        {
          id: "igbo_5_3",
          text: "E ji {dash1} akpụ ite na ihe ọkpụkpụ.",
          dashes: 1,
          type: "bubble",
          options: ["ụrọ", "akwụkwọ", "akwa"],
          correct: ["ụrọ"],
          rule: "A na-eji uro (clay) akpu ite."
        },
        {
          id: "igbo_5_4",
          text: "Ọ bụ {dash1} ka e ji atụ ihe ọkpụkpụ dịka ngaji.",
          dashes: 1,
          type: "bubble",
          options: ["osisi", "aja", "ụrọ"],
          correct: ["osisi"],
          rule: "A na-eji osisi (wood) atu ekwe, ngaji osisi na ihe ndi ozo."
        }
      ]
    },
    {
      subjectId: "fr_w5",
      subjectTitle: "French Studies",
      topic: "Saluer (Greetings in French)",
      questions: [
        {
          id: "fr_5_1",
          text: "'Bonjour mon ami' in English translates to {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Good morning my friend", "Good afternoon my friend"],
          correct: ["Good morning my friend"],
          rule: "Bonjour = Good day / Good morning; mon ami = my friend."
        },
        {
          id: "fr_5_2",
          text: "'Au revoir' means {dash1}; 'Adieu' means {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["good bye", "farewell", "welcome", "thank you"],
          correct: ["good bye", "farewell"],
          rule: "Au revoir = goodbye; Adieu = final farewell."
        },
        {
          id: "fr_5_3",
          text: "'Comment ça va?' means {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["How are you?", "Where are you?"],
          correct: ["How are you?"],
          rule: "Comment ça va? is the familiar greeting for 'How are you?'."
        }
      ]
    },
    {
      subjectId: "comp_w5",
      subjectTitle: "Computer Studies",
      topic: "Information Processors",
      questions: [
        {
          id: "comp_5_1",
          text: "{dash1} and {dash2} publish information to the public in written format.",
          dashes: 2,
          type: "bubble",
          options: ["newspaper", "letter", "sun"],
          correct: ["newspaper", "letter"],
          rule: "Newspapers and printed letters convey text-based information."
        },
        {
          id: "comp_5_2",
          text: "We hear spoken information using a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["radio", "card", "mouse"],
          correct: ["radio"],
          rule: "Radio receivers broadcast audio information."
        },
        {
          id: "comp_5_3",
          text: "Devices on which we both see and hear information are {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["television", "handset", "notebook", "e-mail"],
          correct: ["television", "handset"],
          rule: "Televisions and smartphones provide audiovisual media."
        },
        {
          id: "comp_5_4",
          text: "Signals sent from space reach us via communications {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["satellite", "typist"],
          correct: ["satellite"],
          rule: "Satellites relay global TV, telephone, and internet data."
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
          text: "The simple machine used to cut overgrown grasses and shrubs is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["cutlass", "axe", "opener"],
          correct: ["cutlass"],
          rule: "A cutlass clears grass and weeds."
        },
        {
          id: "bst_5_2",
          text: "We use a {dash1} to gather sweepings and refuse together.",
          dashes: 1,
          type: "bubble",
          options: ["broom", "door", "scissors"],
          correct: ["broom"],
          rule: "Brooms sweep together dirt and litter."
        },
        {
          id: "bst_5_3",
          text: "We dig deep holes into the soil using a {dash1} and a {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["shovel", "hoe", "spanner", "bucket"],
          correct: ["shovel", "hoe"],
          rule: "Hoes and shovels are designed for digging and excavating soil."
        },
        {
          id: "bst_5_4",
          text: "Big timber logs are felled using an {dash1} or a sharp {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["axe", "machete", "pin", "ball"],
          correct: ["axe", "machete"],
          rule: "Axes cut through heavy wood and tree trunks."
        }
      ]
    },
    {
      subjectId: "phe_w5",
      subjectTitle: "Physical and Health Education & Biblical Recall",
      topic: "Field Athletics: High Jump & Calling of Samuel",
      questions: [
        {
          id: "phe_5_1",
          text: "High jump is categorized as a {dash1} event.",
          dashes: 1,
          type: "bubble",
          options: ["field", "court", "lanes"],
          correct: ["field"],
          rule: "Jumping and throwing events take place on the sports field."
        },
        {
          id: "phe_5_2",
          text: "God called young Samuel {dash1} times before Eli understood.",
          dashes: 1,
          type: "bubble",
          options: ["3", "10", "1"],
          correct: ["3"],
          rule: "God called Samuel three times before Eli realized the Lord was speaking."
        },
        {
          id: "phe_5_3",
          text: "Samuel mistakenly thought the priest {dash1} was calling him.",
          dashes: 1,
          type: "bubble",
          options: ["Eli", "Jesus", "Hannah"],
          correct: ["Eli"],
          rule: "Samuel ran to High Priest Eli each time he heard the voice."
        },
        {
          id: "phe_5_4",
          text: "God commanded Ananias in a vision to pray for {dash1} on the street called Straight.",
          dashes: 1,
          type: "bubble",
          options: ["Saul", "Mary", "Pharaoh"],
          correct: ["Saul"],
          rule: "Acts 9 recounts that Ananias went and laid hands on Saul of Tarsus."
        }
      ]
    },
    {
      subjectId: "hist_w5",
      subjectTitle: "History",
      topic: "First State Creation in Nigeria (1967)",
      questions: [
        {
          id: "hist_5_1",
          text: "States were first created in Nigeria in the year {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["1967", "1990", "2010"],
          correct: ["1967"],
          rule: "General Yakubu Gowon instituted state creation on May 27, 1967."
        },
        {
          id: "hist_5_2",
          text: "The newly created twelve states replaced the former {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["regions", "country", "towns"],
          correct: ["regions"],
          rule: "The regional system was broken up into twelve smaller state units."
        }
      ]
    },
    {
      subjectId: "civic_w5",
      subjectTitle: "Civic Education",
      topic: "Importance of Good Governance",
      questions: [
        {
          id: "civic_5_1",
          text: "Impartial {dash1} administer law and deliver justice in courts.",
          dashes: 1,
          type: "bubble",
          options: ["judges", "army", "doctors"],
          correct: ["judges"],
          rule: "Judges and magistrates preside over judicial matters."
        },
        {
          id: "civic_5_2",
          text: "{dash1}, {dash2} and {dash3} are key social amenities provided by government.",
          dashes: 3,
          type: "bubble",
          options: ["good roads", "electricity", "pipe borne water", "radio"],
          correct: ["good roads", "electricity", "pipe borne water"],
          rule: "Roads, power, and potable water are fundamental infrastructure services."
        },
        {
          id: "civic_5_3",
          text: "Healthcare is made available to citizens through medical {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["hospitals", "banks", "schools"],
          correct: ["hospitals"],
          rule: "Hospitals and clinics care for patients and treat diseases."
        },
        {
          id: "civic_5_4",
          text: "Quality education requires {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["good textbooks", "paying the teachers", "teachers going on strike"],
          correct: ["good textbooks", "paying the teachers"],
          rule: "Learning flourishes when educational books and motivated educators are supplied."
        }
      ]
    },
    {
      subjectId: "sos_w5",
      subjectTitle: "Social Studies",
      topic: "Man's Social Environment",
      questions: [
        {
          id: "sos_5_1",
          text: "{dash1}, {dash2} and {dash3} are social gathering places for people.",
          dashes: 3,
          type: "bubble",
          options: ["church", "market", "school", "grave"],
          correct: ["church", "market", "school"],
          rule: "Churches, markets, and schools are hubs of community interaction."
        },
        {
          id: "sos_5_2",
          text: "Which of the following is NOT an interactive social gathering? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["sleeping in the home", "wedding ceremony", "political rally"],
          correct: ["sleeping in the home"],
          rule: "Sleeping at home is a private individual rest period, not a public social event."
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
        title: "Story: The Primary 4D Classmates",
        text: "Adamu, Aremu and Nkem were in Primary 4D. Adamu liked sciences and did well in basic science, PHE, and computer studies. Aremu was gifted in English and literature. Nkem excelled in both sciences and languages. Because of Nkem's intelligence, he was chosen by his classmates to be their class prefect."
      },
      questions: [
        {
          id: "eng_6_1",
          text: "Who was chosen as the class prefect? {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Nkem", "Adamu", "Aremu"],
          correct: ["Nkem"],
          rule: "Nkem was chosen by his peers as class prefect because of his high intelligence."
        },
        {
          id: "eng_6_2",
          text: "The three classmates are {dash1}, {dash2} and {dash3}.",
          dashes: 3,
          type: "bubble",
          options: ["Adamu", "Aremu", "Nkem", "Jude"],
          correct: ["Adamu", "Aremu", "Nkem"],
          rule: "Adamu, Aremu, and Nkem were classmates."
        },
        {
          id: "eng_6_3",
          text: "The three boys were all pupils in Primary {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["4D", "4A", "5B"],
          correct: ["4D"],
          rule: "The story states that they were in Primary 4D."
        },
        {
          id: "eng_6_4",
          text: "{dash1} was especially good in English language and literature.",
          dashes: 1,
          type: "bubble",
          options: ["Aremu", "Adamu", "Nkem"],
          correct: ["Aremu"],
          rule: "Aremu had a strong talent for English and literature."
        }
      ]
    },
    {
      subjectId: "math_w6",
      subjectTitle: "Mathematics",
      topic: "Ordering of Whole Numbers Using '<' and '>'",
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
          text: "Compare: 90 {dash1} 65; 68 {dash2} 78.",
          dashes: 2,
          type: "bubble",
          options: [">", "<"],
          correct: [">", "<"],
          rule: "90 > 65; 68 < 78."
        },
        {
          id: "math_6_4",
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
      subjectId: "igbo_w6",
      subjectTitle: "Asụsụ Igbo",
      topic: "Nkọwapụta Ihe (Descriptive Words / Adjectives)",
      questions: [
        {
          id: "igbo_6_1",
          text: "Ngozi dị {dash1} (mkpụmkpụ / ogologo). Anyị nwere ewu {dash2} (ọcha / oji).",
          dashes: 2,
          type: "bubble",
          options: ["mkpụmkpụ", "ọcha", "ogologo"],
          correct: ["mkpụmkpụ", "ọcha"],
          rule: "Mkpumkpu (short) na ocha (white) bu nkowa na-akowaputa aha."
        },
        {
          id: "igbo_6_2",
          text: "Ụgbọala nna m na-acha {dash1}; Ụlọakwụkwọ anyị buru {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["edoedo", "ibu", "nkumme"],
          correct: ["edoedo", "ibu"],
          rule: "Edoedo (yellow) bu agwa; ibu (big) na-egosi nha ulo."
        },
        {
          id: "igbo_6_3",
          text: "Eze dị Amaka n'ọnụ na-egbuke {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["egbuke", "ojoo"],
          correct: ["egbuke"],
          rule: "Eze ya na-egbuke egbuke (shining brightly)."
        },
        {
          id: "igbo_6_4",
          text: "Ukochukwu anyị bụ {dash1} mmadụ.",
          dashes: 1,
          type: "bubble",
          options: ["ezigbo", "ajọ"],
          correct: ["ezigbo"],
          rule: "Ezigbo mmadu pụtara ezigbo onye nwere agwa oma."
        }
      ]
    },
    {
      subjectId: "fr_w6",
      subjectTitle: "French Studies",
      topic: "Les Nombres (Numbers 21 — 40)",
      questions: [
        {
          id: "fr_6_1",
          text: "Vingt et un = {dash1}; Vingt-cinq = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["21", "25", "40", "34"],
          correct: ["21", "25"],
          rule: "Vingt et un = 21; vingt-cinq = 25."
        },
        {
          id: "fr_6_2",
          text: "Trente = {dash1}; Quarante = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["30", "40", "15", "20"],
          correct: ["30", "40"],
          rule: "Trente = 30; quarante = 40."
        },
        {
          id: "fr_6_3",
          text: "Vingt-sept = {dash1}; Trente-sept = {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["27", "37", "18", "22"],
          correct: ["27", "37"],
          rule: "Vingt-sept = 27; trente-sept = 37."
        }
      ]
    },
    {
      subjectId: "comp_w6",
      subjectTitle: "Computer Studies",
      topic: "Input, Processing and Output Devices",
      questions: [
        {
          id: "comp_6_1",
          text: "Data is fed into a computer system through an {dash1} device.",
          dashes: 1,
          type: "bubble",
          options: ["input", "CPU", "document"],
          correct: ["input"],
          rule: "Input devices receive user commands and send them inward."
        },
        {
          id: "comp_6_2",
          text: "{dash1}, {dash2} and {dash3} are essential input devices.",
          dashes: 3,
          type: "bubble",
          options: ["mouse", "keyboard", "scanner", "printer", "monitor"],
          correct: ["mouse", "keyboard", "scanner"],
          rule: "Keyboards, mice, and scanners feed data into the computer."
        },
        {
          id: "comp_6_3",
          text: "Processing of all instructions takes place inside the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["CPU", "printer", "paper"],
          correct: ["CPU"],
          rule: "The Central Processing Unit carries out computations."
        },
        {
          id: "comp_6_4",
          text: "Common computer output devices include the {dash1} and the {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["monitor", "printer", "scanner", "light pen"],
          correct: ["monitor", "printer"],
          rule: "Monitors display soft copy; printers generate hard copy paper."
        }
      ]
    },
    {
      subjectId: "bst_w6",
      subjectTitle: "Basic Science and Technology",
      topic: "Benefits and Uses of Technology",
      questions: [
        {
          id: "bst_6_1",
          text: "Technology helps in sending information {dash1} and makes work {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["faster", "easier", "harder", "slower"],
          correct: ["faster", "easier"],
          rule: "Technology enhances speed, efficiency, and ease of labour."
        },
        {
          id: "bst_6_2",
          text: "Technology makes output neat and reduces physical {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["stress", "food", "learning"],
          correct: ["stress"],
          rule: "Automation minimizes strenuous manual fatigue."
        }
      ]
    },
    {
      subjectId: "phe_w6",
      subjectTitle: "Physical and Health Education",
      topic: "Field Athletics: High Jump Phases",
      questions: [
        {
          id: "phe_6_1",
          text: "The initial accelerating sprint by a high jumper is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["run up", "scale up", "called to"],
          correct: ["run up"],
          rule: "The run-up gives the jumper horizontal velocity for takeoff."
        },
        {
          id: "phe_6_2",
          text: "'Take-off' is the point where the athlete commences {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["lifting himself up", "running", "crossing the bar"],
          correct: ["lifting himself up"],
          rule: "Takeoff translates ground speed into upward vertical thrust."
        },
        {
          id: "phe_6_3",
          text: "A jump is declared successful if the crossbar {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["remains", "falls"],
          correct: ["remains"],
          rule: "The crossbar must stay placed on the upright pegs without falling."
        },
        {
          id: "phe_6_4",
          text: "The athlete touching down on the soft foam pad is called {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["landing", "stepping", "airing"],
          correct: ["landing"],
          rule: "Landing safely on the foam mat completes the high jump sequence."
        }
      ]
    },
    {
      subjectId: "cca_w6",
      subjectTitle: "Cultural and Creative Arts",
      topic: "Elements of Design",
      questions: [
        {
          id: "cca_6_1",
          text: "Design is making a deliberate decorative {dash1} on an object.",
          dashes: 1,
          type: "bubble",
          options: ["mark", "damage", "hole"],
          correct: ["mark"],
          rule: "Design involves purposeful artistic markings and arrangements."
        },
        {
          id: "cca_6_2",
          text: "Design makes an object {dash1} and {dash2}.",
          dashes: 2,
          type: "bubble",
          options: ["beautiful", "attractive", "heavy", "rough"],
          correct: ["beautiful", "attractive"],
          rule: "Aesthetic designs enhance beauty, visual appeal, and market value."
        },
        {
          id: "cca_6_3",
          text: "{dash1}, {dash2}, {dash3} and {dash4} are fundamental elements of design.",
          dashes: 4,
          type: "bubble",
          options: ["lines", "colour", "shape", "space", "water", "stone"],
          correct: ["lines", "colour", "shape", "space"],
          rule: "Line, shape, colour, form, space, and texture are elements of design."
        },
        {
          id: "cca_6_4",
          text: "Shape is recognized as an element of design: {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["Yes", "No"],
          correct: ["Yes"],
          rule: "Geometric and organic shapes are foundational design elements."
        }
      ]
    },
    {
      subjectId: "agric_w6",
      subjectTitle: "Agricultural Science",
      topic: "Livestock and Animal Rearing",
      questions: [
        {
          id: "agric_6_1",
          text: "Six common domestic farm animals are {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}.",
          dashes: 6,
          type: "bubble",
          options: ["goat", "pig", "chicken", "cattle", "donkey", "horse", "lion", "leopard"],
          correct: ["goat", "pig", "chicken", "cattle", "donkey", "horse"],
          rule: "Goats, pigs, chickens, cows, donkeys, and horses are domesticated livestock."
        },
        {
          id: "agric_6_2",
          text: "{dash1} and {dash2} are domestic poultry birds reared by farmers.",
          dashes: 2,
          type: "bubble",
          options: ["guinea fowl", "duck", "pig"],
          correct: ["guinea fowl", "duck"],
          rule: "Guinea fowls and ducks are domestic poultry kept for eggs and meat."
        },
        {
          id: "agric_6_3",
          text: "A person who catches fish with hooks, lines, or nets is a {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["fisherman", "catcherman", "fish catcher"],
          correct: ["fisherman"],
          rule: "A fisherman catches fish for food or commercial sale."
        },
        {
          id: "agric_6_4",
          text: "A bird often kept for aesthetic beauty and prestige is the {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["peacock", "chicken", "cat"],
          correct: ["peacock"],
          rule: "Peacocks are prized for their colourful, ornamental plumage."
        }
      ]
    },
    {
      subjectId: "hec_w6",
      subjectTitle: "Home Economics",
      topic: "Personal Belongings",
      questions: [
        {
          id: "hec_6_1",
          text: "Personal belongings are property items owned and used exclusively by {dash1}.",
          dashes: 1,
          type: "bubble",
          options: ["a person", "school", "church"],
          correct: ["a person"],
          rule: "Personal effects belong to an individual and should not be shared without permission."
        },
        {
          id: "hec_6_2",
          text: "Articles necessary for one's {dash1} and personal {dash2} are personal belongings.",
          dashes: 2,
          type: "bubble",
          options: ["living", "duty", "stealing"],
          correct: ["living", "duty"],
          rule: "Items such as clothes, towels, toothbrushes, and school tools support health and work."
        }
      ]
    }
  ]
};
// ============================================================================
// 1. END OF TERM LIVE CHALK CURRICULUM EXTENSIONS (Optional Board Demos)
// ============================================================================
if (!window.LIVE_CHALK_CURRICULUM) window.LIVE_CHALK_CURRICULUM = {};

window.LIVE_CHALK_CURRICULUM.exam_prep = [
  {
    q: "Decode Cipher: If R=1, E=2, A=3, S=4, O=5, N=6, what is S-O-N?",
    a: "4 5 6",
    tray: ["Letter-to-Number Cipher", "S = 4", "O = 5", "N = 6", "SON = 456"]
  },
  {
    q: "Identify the odd one out: Rice, Beans, Garri, Food.",
    a: "Food (It is the Group Name / General Category)",
    tray: ["Rice = specific food", "Beans = specific food", "Garri = specific food", "Category = Food"]
  }
];

// ============================================================================
// 2. END OF TERM TEST (Mapped to Week 11 in index.html)
// ============================================================================
if (!window.WEEKLY_CURRICULUM) window.WEEKLY_CURRICULUM = {};

window.WEEKLY_CURRICULUM[11] = [
  // --------------------------------------------------------------------------
  // PHYSICAL AND HEALTH EDUCATION
  // --------------------------------------------------------------------------
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
        rule: "High jump and long jump are recognized jumping field events in athletics."
      },
      {
        id: "exam_phe_2",
        text: "{dash1} and {dash2} are types of running races in track athletics.",
        dashes: 2,
        type: "bubble",
        options: ["relay", "marathon", "football"],
        correct: ["relay", "marathon"],
        rule: "Relays and marathons are track/road races. Football is a team ball game."
      },
      {
        id: "exam_phe_3",
        text: "Four medical items found in a first aid box are {dash1}, {dash2}, {dash3} and {dash4}.",
        dashes: 4,
        type: "bubble",
        options: ["cotton wool", "razor", "paracetamol", "GIV", "pen", "stone"],
        correct: ["cotton wool", "razor", "paracetamol", "GIV"],
        rule: "A first aid kit contains sterile cotton wool, antiseptic (GIV), blades, and pain relievers (paracetamol)."
      },
      {
        id: "exam_phe_4",
        text: "The chief official who enforces the rules in a football match is the {dash1}.",
        dashes: 1,
        type: "bubble",
        options: ["referee", "goalkeeper", "trader"],
        correct: ["referee"],
        rule: "The referee has full authority to enforce the Laws of the Game during a match."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // CULTURAL AND CREATIVE ARTS
  // --------------------------------------------------------------------------
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
        rule: "Drawing, painting, and graphics are visual arts. Broadcasting is mass communication."
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
        rule: "Circles, squares, triangles, and rectangles form standard two-dimensional shapes."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // AGRICULTURAL SCIENCE
  // --------------------------------------------------------------------------
  {
    subjectId: "exam_agric",
    subjectTitle: "End of Term Test • Agricultural Science",
    topic: "Fishing Tools, Fruits, Domestic Animals & Farm Branches",
    questions: [
      {
        id: "exam_agric_1",
        text: "We use a {dash1} and a {dash2} for catching fish in rivers and ponds.",
        dashes: 2,
        type: "bubble",
        options: ["hook", "net", "hoe", "broom"],
        correct: ["hook", "net"],
        rule: "Fishermen use hooks, lines, and fishing nets to harvest aquatic animals."
      },
      {
        id: "exam_agric_2",
        text: "{dash1}, {dash2}, {dash3} and {dash4} are four edible fruits produced by flowering plants.",
        dashes: 4,
        type: "bubble",
        options: ["orange", "mango", "apple", "banana", "wood", "sand"],
        correct: ["orange", "mango", "apple", "banana"],
        rule: "Oranges, mangoes, apples, and bananas are nutrient-rich fruits."
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

  // --------------------------------------------------------------------------
  // HOME ECONOMICS
  // --------------------------------------------------------------------------
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
        rule: "Anatomically, the human body is grouped into the Head, the Trunk (torso), and the Limbs (arms and legs)."
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

  // --------------------------------------------------------------------------
  // CHRISTIAN RELIGIOUS STUDIES
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // HISTORY
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // CIVIC EDUCATION
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // SOCIAL STUDIES
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // VERBAL REASONING
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // QUANTITATIVE REASONING
  // --------------------------------------------------------------------------
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
];

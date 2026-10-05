// =========================================================================
// BASIC 4 CURRICULUM & QUESTION BANK (WEEKS 1 — 11)
// Complete Spoken Instructions, Natural Sentences & Live Chalkboard Data
// =========================================================================

function qItem(id, text, dashes, options, correct, rule, type = "option", placeholders = null, diagram = null) {
  return { id, text, dashes, options, correct, rule, type, placeholders, diagram };
}

window.WEEKLY_CURRICULUM = {
  // =========================================================================
  // WEEK 1
  // =========================================================================
  1: [
    {
      subjectId: "english_week1",
      subjectTitle: "WEEK 1: ENGLISH STUDIES",
      topic: "Plural of Nouns",
      questions: [
        qItem("eng1_1", "1. Write the plural form of the noun 'House': {dash1}", 1, ["Houses", "Housen", "Housies"], ["Houses"], "Regular noun: add -s to form 'Houses'."),
        qItem("eng1_2", "2. What is the plural form of the noun 'Ox'? {dash1}", 1, ["Oxen", "Oxes", "Oxies"], ["Oxen"], "Irregular noun: Ox takes suffix '-en' to become 'Oxen'."),
        qItem("eng1_3", "3. Give the plural form of the noun 'Sheep': {dash1}", 1, ["Sheep", "Sheeps", "Sheepes"], ["Sheep"], "Zero plural: 'Sheep' does not change in plural."),
        qItem("eng1_4", "4. What is the plural form of the noun 'Box'? {dash1}", 1, ["Boxes", "Boxs", "Boxen"], ["Boxes"], "Nouns ending in -x add '-es' to become 'Boxes'."),
        qItem("eng1_5", "5. Write the plural form of the noun 'Chief': {dash1}", 1, ["Chiefs", "Chieves", "Chiefes"], ["Chiefs"], "Nouns with double vowels before -f add -s to form 'Chiefs'."),
        qItem("eng1_6", "6. Give the plural form of the word 'Cloth': {dash1}", 1, ["Cloths", "Clothes", "Clothies"], ["Cloths", "Clothes"], "Both 'Cloths' (fabrics) and 'Clothes' (garments) are accepted."),
        qItem("eng1_7", "7. What is the plural form of the noun 'Book'? {dash1}", 1, ["Books", "Bookes", "Bookies"], ["Books"], "Regular noun: add -s to form 'Books'."),
        qItem("eng1_8", "8. Write the plural form of the noun 'Knife': {dash1}", 1, ["Knives", "Knifes", "Knifeses"], ["Knives"], "Nouns ending in -fe change to -ves to become 'Knives'.")
      ]
    },
    {
      subjectId: "math_week1",
      subjectTitle: "WEEK 1: MATHEMATICS",
      topic: "Equivalent Fractions",
      questions: [
        qItem("m1_1", "1. Find three equivalent fractions for 1/2: {dash1}, {dash2} and {dash3}", 3, ["2/4", "3/6", "4/8", "2/5", "3/8"], ["2/4", "3/6", "4/8"], "Multiply both top and bottom by 2, 3, and 4."),
        qItem("m1_2", "2. Find three equivalent fractions for 1/7: {dash1}, {dash2} and {dash3}", 3, ["2/14", "3/21", "4/28", "2/10", "3/14"], ["2/14", "3/21", "4/28"], "Multiply numerator and denominator by 2, 3, and 4."),
        qItem("m1_3", "3. Complete the equivalent fractions for 2/5: {dash1}, {dash2} and {dash3}", 3, ["4/10", "6/15", "8/20", "4/15", "5/10"], ["4/10", "6/15", "8/20"], "Multiply 2/5 by 2, 3, and 4."),
        qItem("m1_4", "4. Find three equivalent fractions for 1/4: {dash1}, {dash2} and {dash3}", 3, ["2/8", "3/12", "4/16", "2/6", "3/10"], ["2/8", "3/12", "4/16"], "Multiply 1/4 by 2, 3, and 4."),
        qItem("m1_5", "5. Complete the equivalent fractions for 1/3: {dash1}, {dash2} and {dash3}", 3, ["2/6", "3/9", "4/12", "2/5", "3/8"], ["2/6", "3/9", "4/12"], "Multiply 1/3 by 2, 3, and 4."),
        qItem("m1_6", "6. Find three equivalent fractions for 3/4: {dash1}, {dash2} and {dash3}", 3, ["6/8", "9/12", "12/16", "6/10", "5/8"], ["6/8", "9/12", "12/16"], "Multiply 3/4 by 2, 3, and 4.")
      ]
    },
    {
      subjectId: "vr_week1",
      subjectTitle: "WEEK 1: VERBAL REASONING",
      topic: "Kick off Test: Alphabet Pairs Sequence",
      passage: {
        title: "🔤 Study the Examples:",
        text: "Example 1: AC, BD, CE, DF, EG\nExample 2: PT, QU, RV, SW, TX\n\nRule: The first letters move forward by 1 (A, B, C, D, E...). The second letters also move forward by 1 (C, D, E, F, G...)."
      },
      questions: [
        qItem("vr1_1", "1. Complete the letter sequence: GJ, HK, IL, {dash1}, {dash2}", 2, ["JM", "KN", "JN", "KM", "LO"], ["JM", "KN"], "1st letters: G, H, I, J, K. 2nd letters: J, K, L, M, N. Answer: JM, KN."),
        qItem("vr1_2", "2. Complete the letter sequence: AM, BN, CO, {dash1}, {dash2}", 2, ["DP", "EQ", "DO", "EP", "DQ"], ["DP", "EQ"], "1st letters: A, B, C, D, E. 2nd letters: M, N, O, P, Q. Answer: DP, EQ."),
        qItem("vr1_3", "3. Complete the letter sequence: EH, FI, {dash1}, {dash2}, IL", 2, ["GJ", "HK", "GK", "HJ", "GI"], ["GJ", "HK"], "1st letters: E, F, G, H, I. 2nd letters: H, I, J, K, L. Answer: GJ, HK."),
        qItem("vr1_4", "4. Complete the letter sequence: PS, QT, RU, {dash1}, {dash2}", 2, ["SV", "TW", "SW", "TV", "SU"], ["SV", "TW"], "1st letters: P, Q, R, S, T. 2nd letters: S, T, U, V, W. Answer: SV, TW."),
        qItem("vr1_5", "5. Complete the letter sequence: DB, {dash1}, FD, GE, {dash2}", 2, ["EC", "HF", "EB", "HD", "FC"], ["EC", "HF"], "1st letters: D, E, F, G, H. 2nd letters: B, C, D, E, F. Answer: EC, HF.")
      ]
    },
    {
      subjectId: "qr_week1",
      subjectTitle: "WEEK 1: QUANTITATIVE REASONING",
      topic: "Counting in 30's",
      passage: {
        title: "🔢 Rule of the 4-Box Diagram:",
        text: "Follow the loop: Bottom-Left ➔ Top-Left ➔ Top-Right ➔ Bottom-Right.\nAt each connected box, add 30!"
      },
      questions: [
        qItem("qr1_1", "1. Complete Diagram (1) by finding the missing box: {dash1}", 1, ["110", "100", "90", "120"], ["110"], "20 + 30 = 50; 50 + 30 = 80; 80 + 30 = 110.", "option", null, { tl: "50", tr: "80", bl: "20", br: "?" }),
        qItem("qr1_2", "2. Complete Diagram (2) by finding the missing box: {dash1}", 1, ["270", "260", "250", "280"], ["270"], "180 + 30 = 210; 210 + 30 = 240; 240 + 30 = 270.", "option", null, { tl: "210", tr: "240", bl: "180", br: "?" }),
        qItem("qr1_3", "3. Complete Diagram (3) by finding the missing box: {dash1}", 1, ["120", "110", "130", "140"], ["120"], "90 + 30 = 120; 120 + 30 = 150; 150 + 30 = 180.", "option", null, { tl: "?", tr: "150", bl: "90", br: "180" }),
        qItem("qr1_4", "4. Complete Diagram (4) by finding the missing box: {dash1}", 1, ["60", "50", "70", "80"], ["60"], "30 + 30 = 60; 60 + 30 = 90; 90 + 30 = 120.", "option", null, { tl: "?", tr: "90", bl: "30", br: "120" }),
        qItem("qr1_5", "5. Complete Diagram (5) by finding the missing box: {dash1}", 1, ["100", "90", "110", "80"], ["100"], "10 + 30 = 40; 40 + 30 = 70; 70 + 30 = 100.", "option", null, { tl: "40", tr: "70", bl: "10", br: "?" }),
        qItem("qr1_6", "6. Complete Diagram (6) by finding the missing box: {dash1}", 1, ["160", "150", "170", "180"], ["160"], "100 + 30 = 130; 130 + 30 = 160; 160 + 30 = 190.", "option", null, { tl: "130", tr: "?", bl: "100", br: "190" })
      ]
    },
    {
      subjectId: "igbo_week1",
      subjectTitle: "IZU UKA NKE MBU: ASUSU IGBO",
      topic: "Abidii na Udaume Igbo",
      questions: [
        qItem("ig1_1", "1. Mkpụrụedemede ụdaume Igbo dị ole na ngụkọta? {dash1}", 1, ["Ise", "iri abụọ", "asatọ"], ["asatọ"], "Ụdaume Igbo dị asatọ (8): a, e, i, ị, o, ọ, u, ụ."),
        qItem("ig1_2", "2. Mkpụrụedemede ole dị n'Abịịdịi Igbo? {dash1}", 1, ["Iri ise", "iri abụọ na otu", "iri atọ na isii"], ["iri atọ na isii"], "Abịịdịi Igbo nwere mkpụrụedemede 36."),
        qItem("ig1_3", "3. Ụzọ abụọ e kere mkpụrụ edemede Igbo bụ {dash1} na {dash2}", 2, ["ike ume", "ụdaume", "ụmụedemede", "mgbochiume"], ["ụdaume", "mgbochiume"], "E kere abidii Igbo ụzọ abụọ: Ụdaume na Mgbochiume."),
        qItem("ig1_4", "4. Mkpụrụedemede abụọ bụ myiri ụdaume bụ {dash1} na {dash2}", 2, ["m", "n", "b", "d"], ["m", "n"], "'m' na 'n' bụ myiri ụdaume n'Asụsụ Igbo.")
      ]
    },
    {
      subjectId: "comp_week1",
      subjectTitle: "WEEK 1: COMPUTER STUDIES",
      topic: "Introduction to Computer Hardware",
      questions: [
        qItem("cp1_1", "1. A computer mouse is an example of an {dash1} device.", 1, ["input", "output", "storage"], ["input"], "The mouse enters pointer coordinates and clicks into the computer."),
        qItem("cp1_2", "2. The two primary buttons found on a mouse are the {dash1} and {dash2} buttons.", 2, ["left", "right", "center", "power"], ["left", "right"], "Standard mice feature left and right click buttons."),
        qItem("cp1_3", "3. What is the wheel between the mouse buttons used for? {dash1}", 1, ["scrolling", "typing", "printing"], ["scrolling"], "The scroll wheel moves pages up and down on the monitor.")
      ]
    },
    {
      subjectId: "bst_week1",
      subjectTitle: "WEEK 1: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Understanding Technology",
      questions: [
        qItem("bst1_1", "1. The application of scientific knowledge to solve practical problems is called {dash1}.", 1, ["energy", "technology", "power"], ["technology"], "Technology puts scientific ideas into practical daily use."),
        qItem("bst1_2", "2. Name three products of modern technology: {dash1}, {dash2} and {dash3}.", 3, ["radio", "phones", "cars", "wood", "sand"], ["radio", "phones", "cars"], "Radios, phones, and motor cars are manufactured technological machines."),
        qItem("bst1_3", "3. Mention two main stages of technology: {dash1} and {dash2} technology.", 2, ["developed", "undeveloped", "controlled"], ["developed", "undeveloped"], "Technology exists in developed (modern) and undeveloped forms."),
        qItem("bst1_4", "4. Mobile phones are developed technology used in the area of {dash1}.", 1, ["transportation", "communication", "building"], ["communication"], "Phones allow people to communicate and speak across long distances.")
      ]
    },
    {
      subjectId: "phe_week1",
      subjectTitle: "WEEK 1: PHYSICAL AND HEALTH EDUCATION",
      topic: "First Aid and Safety",
      questions: [
        qItem("phe1_1", "1. Name four essential medical items found in a first aid box: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["cotton wool", "razor", "paracetamol", "GIV", "cigarette", "pepper"], ["cotton wool", "razor", "paracetamol", "GIV"], "First aid kits contain sterile cotton wool, antiseptic, blades, and pain medication."),
        qItem("phe1_2", "2. What is the universal symbol displayed on a first aid box? A {dash1}.", 1, ["square", "cross", "circle"], ["cross"], "A red or white cross indicates medical first aid."),
        qItem("phe1_3", "3. True or False: First aid is given to an injured person only after seeing a doctor: {dash1}.", 1, ["False", "True"], ["False"], "First aid is given immediately before the doctor arrives."),
        qItem("phe1_4", "4. True or False: Anybody with basic emergency knowledge can give first aid: {dash1}.", 1, ["True", "False"], ["True"], "Any responsible bystander can provide immediate first aid."),
        qItem("phe1_5", "5. True or False: First aid helps to relieve an injured person before medical attention: {dash1}.", 1, ["True", "False"], ["True"], "First aid minimizes pain and stabilizes the patient.")
      ]
    },
    {
      subjectId: "agric_week1",
      subjectTitle: "WEEK 1: AGRICULTURAL SCIENCE",
      topic: "Crops, Tools and Animals",
      questions: [
        qItem("ag1_1", "1. Mention four important food crops produced by Nigerian farmers: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["yam", "cassava", "maize", "rice"], ["yam", "cassava", "maize", "rice"], "Yam, cassava, maize, and rice are essential food staples."),
        qItem("ag1_2", "2. Name three healthy edible fruits produced by flowering plants: {dash1}, {dash2} and {dash3}.", 3, ["orange", "mango", "apple"], ["orange", "mango", "apple"], "Oranges, mangoes, and apples are nourishing fruits."),
        qItem("ag1_3", "3. Identify four common hand tools used by farmers: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["hoe", "cutlass", "rake", "wheelbarrow"], ["hoe", "cutlass", "rake", "wheelbarrow"], "Hoes, cutlasses, rakes, and wheelbarrows are farm tools."),
        qItem("ag1_4", "4. A goat and a cow are examples of {dash1} animals.", 1, ["domestic", "wild", "aquatic"], ["domestic"], "Goats and cows are domestic livestock raised by humans.")
      ]
    },
    {
      subjectId: "home_econ_week1",
      subjectTitle: "WEEK 1: HOME ECONOMICS",
      topic: "Personal Hygiene and Body Grooming",
      questions: [
        qItem("he1_1", "1. We keep our mouth clean and fresh by {dash1} and {dash2}.", 2, ["brushing", "washing", "eating"], ["brushing", "washing"], "Daily brushing and mouth washing remove food bacteria."),
        qItem("he1_2", "2. Name two items we use to clean our teeth: {dash1} and {dash2}.", 2, ["toothpaste", "brush", "sand", "soap"], ["toothpaste", "brush"], "A toothbrush and toothpaste keep teeth healthy."),
        qItem("he1_3", "3. What toiletries are used for daily body maintenance? {dash1} and {dash2}.", 2, ["soap", "body cream", "zinc", "cement"], ["soap", "body cream"], "Bathing soap and skin cream maintain skin hygiene."),
        qItem("he1_4", "4. What part of the body are shoes worn to protect? The {dash1}.", 1, ["head", "eyes", "foot"], ["foot"], "Shoes protect our feet from sharp objects and dirt.")
      ]
    },
    {
      subjectId: "crs_week1",
      subjectTitle: "WEEK 1: CHRISTIAN RELIGIOUS STUDIES",
      topic: "The Parable of the Good Samaritan",
      questions: [
        qItem("crs1_1", "1. What virtue does the story of the Good Samaritan teach us? It teaches us {dash1}.", 1, ["prophecy", "prayer", "love"], ["love"], "Jesus taught that loving our neighbour means showing mercy."),
        qItem("crs1_2", "2. In the parable, the traveller was going down from Jerusalem to {dash1}.", 1, ["Nigeria", "Israel", "Jericho"], ["Jericho"], "Luke 10:30 states the man was travelling down to Jericho."),
        qItem("crs1_3", "3. Who showed compassion and helped the wounded traveller? A {dash1}.", 1, ["pastor", "governor", "Samaritan"], ["Samaritan"], "The Good Samaritan tended to his wounds."),
        qItem("crs1_4", "4. On his journey, the traveller was beaten and robbed by {dash1}.", 1, ["king", "robbers", "Pharisees"], ["robbers"], "Robbers attacked him and left him half-dead."),
        qItem("crs1_5", "5. Jesus teaches us that we should always love our {dash1}.", 1, ["friends", "brothers only", "enemies only"], ["friends"], "We are commanded to love our friends and neighbours.")
      ]
    },
    {
      subjectId: "social_studies_week1",
      subjectTitle: "WEEK 1: SOCIAL STUDIES",
      topic: "Culture and Religions in Nigeria",
      questions: [
        qItem("soc1_1", "1. What is the definition of culture? Culture is the people's {dash1}.", 1, ["way of life", "prayer", "singing"], ["way of life"], "Culture is the total lifestyle and belief system of a society."),
        qItem("soc1_2", "2. Material culture consists of physical objects that can be seen and {dash1}.", 1, ["celebrated", "touched"], ["touched"], "Material culture refers to tangible items like clothes and pots."),
        qItem("soc1_3", "3. Mention four traditional local foods eaten in Nigeria: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["amala", "pounded yam", "tuwo", "garri"], ["amala", "pounded yam", "tuwo", "garri"], "Amala, pounded yam, tuwo, and garri are popular Nigerian foods."),
        qItem("soc1_4", "4. What are the three major religions practiced in Nigeria? {dash1}, {dash2} and {dash3}.", 3, ["Christianity", "Islam", "Traditional", "Buddhism"], ["Christianity", "Islam", "Traditional"], "Christianity, Islam, and African Traditional Religion are Nigeria's three major faiths.")
      ]
    },
    {
      subjectId: "civic_week1",
      subjectTitle: "WEEK 1: CIVIC EDUCATION",
      topic: "National Symbols of Nigeria",
      questions: [
        qItem("civ1_1", "1. Mention three important national symbols of Nigeria: {dash1}, {dash2} and {dash3}.", 3, ["flag", "coat of arm", "national anthem", "car", "house"], ["flag", "coat of arm", "national anthem"], "National symbols represent the sovereignty of the nation."),
        qItem("civ1_2", "2. What are the two official colours of the Nigerian national flag? {dash1} and {dash2}.", 2, ["Green", "White", "Blue", "Red"], ["Green", "White"], "The national flag consists of green and white stripes."),
        qItem("civ1_3", "3. What is the opening phrase of the Nigerian national anthem? {dash1}.", 1, ["beggars are everywhere", "Arise O Compatriots"], ["Arise O Compatriots"], "'Arise, O Compatriots, Nigeria's call obey...'"),
        qItem("civ1_4", "4. What two animal figures are featured on Nigeria's Coat of Arms? An {dash1} and two {dash2}.", 2, ["eagle", "horses", "book", "goats"], ["eagle", "horses"], "The red eagle signifies strength; two horses signify dignity."),
        qItem("civ1_5", "5. What is the colour of the two horses on Nigeria's Coat of Arms? {dash1}.", 1, ["White", "Brown", "Black"], ["White"], "The two horses supporting the shield are white.")
      ]
    },
    {
      subjectId: "history_week1",
      subjectTitle: "WEEK 1: HISTORY",
      topic: "States and Geopolitical Zones",
      questions: [
        qItem("hist1_1", "1. Name four states located in the South-Eastern part of Nigeria: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["Enugu", "Anambra", "Imo", "Abia", "Kano", "Lagos"], ["Enugu", "Anambra", "Imo", "Abia"], "Enugu, Anambra, Imo, and Abia are Eastern states."),
        qItem("hist1_2", "2. Mention the six geopolitical zones of Nigeria: {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}.", 6, ["North west", "North east", "North central", "South south", "south west", "south east", "South north"], ["North west", "North east", "North central", "South south", "south west", "south east"], "Nigeria is structured into six geopolitical zones."),
        qItem("hist1_3", "3. What are the three largest ethnic groups in Nigeria? {dash1}, {dash2} and {dash3}.", 3, ["Hausa", "Igbo", "Yoruba", "Ogoja", "Efik"], ["Hausa", "Igbo", "Yoruba"], "Hausa, Igbo, and Yoruba are the three major ethnic groups.")
      ]
    }
  ],

  // =========================================================================
  // WEEK 2
  // =========================================================================
  2: [
    {
      subjectId: "eng_week2",
      subjectTitle: "WEEK 2: ENGLISH STUDIES",
      topic: "Aural Discrimination: /æ/ and /ɑː/ Sounds",
      passage: {
        title: "🗣️ Word Bank for Vowel Discrimination:",
        text: "Words: Pat, part, mart, mat, cart, cat, hat, heart, at, art, barn, back, bark\n\n• /æ/ is a short vowel sound (as in 'pat')\n• /ɑː/ is a long vowel sound (as in 'part')"
      },
      questions: [
        qItem("eng2_1", "1. Select five words that share the short /æ/ sound (like 'pat'): {dash1}, {dash2}, {dash3}, {dash4} and {dash5}", 5, ["mat", "cat", "hat", "at", "back", "mart", "cart", "heart", "art", "barn"], ["mat", "cat", "hat", "at", "back"], "Mat, cat, hat, at, and back have the short /æ/ vowel sound."),
        qItem("eng2_2", "2. Select six words that share the long /ɑː/ sound (like 'part'): {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}", 6, ["mart", "cart", "heart", "art", "barn", "bark", "mat", "cat", "hat", "at"], ["mart", "cart", "heart", "art", "barn", "bark"], "Mart, cart, heart, art, barn, and bark have the long /ɑː/ vowel sound."),
        qItem("eng2_3", "3. Which vowel sound is heard in the word 'heart'? The {dash1} sound.", 1, ["/ɑː/", "/æ/"], ["/ɑː/"], "'Heart' has the long /ɑː/ sound like 'part'."),
        qItem("eng2_4", "4. Which vowel sound is heard in the word 'back'? The {dash1} sound.", 1, ["/æ/", "/ɑː/"], ["/æ/"], "'Back' has the short /æ/ sound like 'pat'.")
      ]
    },
    {
      subjectId: "math_week2",
      subjectTitle: "WEEK 2: MATHEMATICS",
      topic: "Whole Numbers Sequence",
      questions: [
        qItem("m2_1", "1. Count forward in tens to find the missing numbers: 80, 90, {dash1}, {dash2}, 120, 130", 2, ["100", "110", "115"], ["100", "110"], "Add 10 each time: 90+10=100; 100+10=110."),
        qItem("m2_2", "2. Count by adding 50 each time: 78, 128, 178, {dash1}, {dash2}", 2, ["228", "278", "258"], ["228", "278"], "Add 50: 178+50=228; 228+50=278."),
        qItem("m2_3", "3. Complete the pattern counting in hundreds: 800, 900, {dash1}, 1,100, 1,200", 1, ["1,000", "1,050", "950"], ["1,000"], "Add 100: 900+100=1,000."),
        qItem("m2_4", "4. Find the missing numbers by adding 100: 760, 860, {dash1}, 1,060, 1,160, {dash2}", 2, ["960", "1,260", "980"], ["960", "1,260"], "860+100=960; 1,160+100=1,260."),
        qItem("m2_5", "5. Count in hundred-thousands: 200,000; 300,000; 400,000; {dash1}; {dash2}; 700,000", 2, ["500,000", "600,000", "550,000"], ["500,000", "600,000"], "Add 100,000 each step."),
        qItem("m2_6", "6. Count forward by adding 3,000: 15,000; 18,000; 21,000; {dash1}; 27,000; {dash2}", 2, ["24,000", "30,000", "25,000"], ["24,000", "30,000"], "21,000+3,000=24,000; 27,000+3,000=30,000."),
        qItem("m2_7", "7. Add 30 to complete the series: 970, 1,000, 1,030, {dash1}, {dash2}, 1,120, 1,150", 2, ["1,060", "1,090", "1,080"], ["1,060", "1,090"], "1,030+30=1,060; 1,060+30=1,090.")
      ]
    },
    {
      subjectId: "comp_week2",
      subjectTitle: "WEEK 2: COMPUTER STUDIES",
      topic: "Data and the Central Processing Unit",
      questions: [
        qItem("cp2_1", "1. Raw facts and unprocessed computer figures are called {dash1}.", 1, ["data", "news", "fake"], ["data"], "Data is raw, unorganized facts."),
        qItem("cp2_2", "2. Digital data is keyed in and saved inside the {dash1}.", 1, ["computer", "radio", "sun"], ["computer"], "Computers store data in memory and drives."),
        qItem("cp2_3", "3. What component processes all raw data inside the computer? The {dash1}.", 1, ["CPU", "mouse", "cable"], ["CPU"], "The Central Processing Unit processes all data."),
        qItem("cp2_4", "4. What is another common name for the CPU? The {dash1}.", 1, ["System unit", "Area unit", "Control board"], ["System unit"], "The main computer unit is also called the System Unit.")
      ]
    },
    {
      subjectId: "bst_week2",
      subjectTitle: "WEEK 2: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Temporary and Permanent Changes",
      questions: [
        qItem("bst2_1", "1. What are the two types of change in nature? {dash1} and {dash2} change.", 2, ["temporal", "permanent", "transfer"], ["temporal", "permanent"], "Changes are either temporal (reversible) or permanent (irreversible)."),
        qItem("bst2_2", "2. A change that can be reversed back into its original form is called a {dash1} change.", 1, ["temporal", "permanent"], ["temporal"], "Temporal changes, like melting ice, can be reversed."),
        qItem("bst2_3", "3. A child growing up to become an adult man is an example of a {dash1} change.", 1, ["permanent", "transfer"], ["permanent"], "Living growth cannot be reversed; it is permanent."),
        qItem("bst2_4", "4. A small young kitten grows up to become an adult {dash1}.", 1, ["cat", "dog", "goat"], ["cat"], "A kitten is the offspring of a cat.")
      ]
    },
    {
      subjectId: "phe_week2",
      subjectTitle: "WEEK 2: PHYSICAL AND HEALTH EDUCATION",
      topic: "Table Tennis Rules",
      questions: [
        qItem("phe2_1", "1. How many players compete in a game of singles table tennis? {dash1} players.", 1, ["2", "7", "4"], ["2"], "Singles table tennis is played by 2 people."),
        qItem("phe2_2", "2. What geometric shape is a standard table tennis board? It is {dash1}.", 1, ["rectangular", "circle", "square"], ["rectangular"], "Table tennis tables are rectangular."),
        qItem("phe2_3", "3. Name two pieces of equipment used to play table tennis: a {dash1} and a {dash2}.", 2, ["bat", "ball", "tyre"], ["bat", "ball"], "Players use a rubber bat and a ball."),
        qItem("phe2_4", "4. To begin a rally, what does the player make? A legal {dash1}.", 1, ["service", "play out", "punch"], ["service"], "Every game starts with a service.")
      ]
    }
  ],

  // =========================================================================
  // WEEKS 3 — 11
  // =========================================================================
  3: [
    {
      subjectId: "eng_week3",
      subjectTitle: "WEEK 3: ENGLISH STUDIES",
      topic: "Composition: Myself",
      questions: [
        qItem("eng3_1", "1. When writing a short composition about myself, I introduce my {dash1} first.", 1, ["name", "shoe"], ["name"], "A composition about oneself begins with your name."),
        qItem("eng3_2", "2. State your class: I am a pupil in Basic {dash1}.", 1, ["4", "1"], ["4"], "The pupil is in Basic 4.")
      ]
    },
    {
      subjectId: "comp_week3",
      subjectTitle: "WEEK 3: COMPUTER STUDIES",
      topic: "Information & Media",
      questions: [
        qItem("cp3_1", "1. What is the processed outcome of data called? It is called {dash1}.", 1, ["information", "mail"], ["information"], "Information is organized, meaningful data."),
        qItem("cp3_2", "2. Processing data gives clear {dash1} to facts.", 1, ["meaning", "warning"], ["meaning"], "Information interprets raw data into understandable facts."),
        qItem("cp3_3", "3. Mention three electronic media used to transmit information: {dash1}, {dash2} and {dash3}.", 3, ["telephone", "television", "radio", "drum"], ["telephone", "television", "radio"], "Electronic media rely on electrical power and broadcasts."),
        qItem("cp3_4", "4. Name two traditional non-electronic media: {dash1} and {dash2}.", 2, ["town crying", "beating of drums", "satellite"], ["town crying", "beating of drums"], "Drums and town criers do not require electricity.")
      ]
    },
    {
      subjectId: "bst_week3",
      subjectTitle: "WEEK 3: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Weather Conditions and Instruments",
      questions: [
        qItem("bst3_1", "1. Mention three common types of weather: {dash1}, {dash2} and {dash3} weather.", 3, ["sunny", "rainy", "cloudy", "iron"], ["sunny", "rainy", "cloudy"], "Weather varies between sunny, rainy, and cloudy."),
        qItem("bst3_2", "2. Name two natural factors that affect the weather: {dash1} and {dash2}.", 2, ["temperature", "wind", "sand"], ["temperature", "wind"], "Air temperature and wind speed affect weather."),
        qItem("bst3_3", "3. Which weather instrument is used to show the direction of the wind? A {dash1}.", 1, ["windvane", "metre"], ["windvane"], "A windvane points into the wind."),
        qItem("bst3_4", "4. What instrument measures the amount of rainfall? A {dash1}.", 1, ["raingauge", "gallon"], ["raingauge"], "Rain gauges measure fallen rainwater in millimeters.")
      ]
    }
  ],

  4: [
    {
      subjectId: "eng_week4",
      subjectTitle: "WEEK 4: ENGLISH STUDIES",
      topic: "Similes and Metaphors",
      questions: [
        qItem("eng4_1", "1. Complete the simile: As cold as {dash1}.", 1, ["ice", "water", "fridge"], ["ice"], "'As cold as ice'."),
        qItem("eng4_2", "2. Complete the simile: As slow as a {dash1}.", 1, ["snail", "snake"], ["snail"], "'As slow as a snail'."),
        qItem("eng4_3", "3. Complete the simile: As sweet as {dash1}.", 1, ["honey", "food"], ["honey"], "'As sweet as honey'."),
        qItem("eng4_4", "4. Complete the simile: As easy as {dash1}.", 1, ["ABC", "maths"], ["ABC"], "'As easy as ABC'."),
        qItem("eng4_5", "5. The metaphor 'Nweke is an elephant' means Nweke is very {dash1}.", 1, ["big", "small"], ["big"], "Elephants represent large physical size."),
        qItem("eng4_6", "6. The metaphor 'He is a tortoise' means he is very {dash1}.", 1, ["slow", "tricky", "handsome"], ["tricky"], "Tortoises in folklore represent cunning tricksters."),
        qItem("eng4_7", "7. The metaphor 'Women are gold' means women are highly {dash1}.", 1, ["costly", "tall", "beautiful"], ["costly"], "Gold signifies exceptional, precious value.")
      ]
    },
    {
      subjectId: "comp_week4",
      subjectTitle: "WEEK 4: COMPUTER STUDIES",
      topic: "Ancient and Modern Information Sources",
      questions: [
        qItem("cp4_1", "1. Sources of information are broadly divided into {dash1} and {dash2} sources.", 2, ["ancient", "modern", "foreign"], ["ancient", "modern"], "Information sources span historical and modern eras."),
        qItem("cp4_2", "2. Mention three ancient sources of information: {dash1}, {dash2} and {dash3}.", 3, ["town crying", "wooden gong", "fire lighting", "computer"], ["town crying", "wooden gong", "fire lighting"], "Early people communicated using fire, gongs, and criers."),
        qItem("cp4_3", "3. Mention three modern sources of information: {dash1}, {dash2} and {dash3}.", 3, ["computers", "radio", "photocopying", "drums"], ["computers", "radio", "photocopying"], "Modern media uses computers, broadcasts, and print."),
        qItem("cp4_4", "4. True or False: Town crying is a modern source of information: {dash1}.", 1, ["False", "True"], ["False"], "Town crying is an ancient traditional method.")
      ]
    }
  ],

  5: [
    {
      subjectId: "eng_week5",
      subjectTitle: "WEEK 5: ENGLISH STUDIES",
      topic: "Reading Comprehension: Jude's Story",
      passage: {
        title: "📖 Reading Passage: Jude and the Tall Tree",
        text: "Jude was telling his friends the story about the tall house he saw in Enugu. He used a tall tree near the stream in their village to compare to the house. Amechi and Kelechi were Jude's friends. He told them that the tree had grown so tall that the children could not kill any bird perched on it with catapult which they usually came to the stream with. He had also tried to kill any of the birds himself but his stone bullet could not get to the tree top."
      },
      questions: [
        qItem("eng5_1", "1. Where did Jude see the extraordinarily tall house? In {dash1}.", 1, ["Enugu", "Onitsha", "Abuja"], ["Enugu"], "The passage states Jude saw the house in Enugu."),
        qItem("eng5_2", "2. What did Jude compare the tall house to? A {dash1} near their stream.", 1, ["tall tree", "pole", "bridge"], ["tall tree"], "He compared its height to a tall village tree."),
        qItem("eng5_3", "3. What tool did the children bring to the stream to hunt birds? A {dash1}.", 1, ["catapult", "books"], ["catapult"], "The children carried catapults to hunt."),
        qItem("eng5_4", "4. What did the children try to shoot with their catapults? {dash1} on the branches.", 1, ["birds", "frogs"], ["birds"], "They tried to shoot birds on the tree."),
        qItem("eng5_5", "5. Name Jude's two good friends from the story: {dash1} and {dash2}.", 2, ["Amechi", "Kelechi", "Emeka"], ["Amechi", "Kelechi"], "Amechi and Kelechi were Jude's friends.")
      ]
    },
    {
      subjectId: "comp_week5",
      subjectTitle: "WEEK 5: COMPUTER STUDIES",
      topic: "Information Processors",
      questions: [
        qItem("cp5_1", "1. Name two media that publish news in written format: {dash1} and {dash2}.", 2, ["newspaper", "letter", "sun"], ["newspaper", "letter"], "Newspapers and letters convey written information."),
        qItem("cp5_2", "2. What audio device do we use to listen to broadcast news? A {dash1}.", 1, ["radio", "card", "mouse"], ["radio"], "Radios broadcast sound to listeners."),
        qItem("cp5_3", "3. Name two electronic gadgets where we both see and hear information: {dash1} and {dash2}.", 2, ["television", "handset", "notebook"], ["television", "handset"], "Televisions and phones are audiovisual devices."),
        qItem("cp5_4", "4. Global wireless broadcast data is transmitted via communications {dash1}.", 1, ["satellite", "typist"], ["satellite"], "Satellites relay signals around the globe.")
      ]
    }
  ],

  6: [
    {
      subjectId: "eng_week6",
      subjectTitle: "WEEK 6: ENGLISH STUDIES",
      topic: "Reading Comprehension: Class Prefect Election",
      passage: {
        title: "📖 Reading Passage: Adamu, Aremu and Nkem",
        text: "Adamu, Aremu and Nkem were in the same class. Adamu liked sciences and was doing well in basic science, physical and health education, computer and others. Aremu was better in English language and literature while Nkem was good both in sciences and languages. Because of Nkem's intelligence, he was chosen by his classmates to be their prefect. This was primary 4D."
      },
      questions: [
        qItem("eng6_1", "1. Who was elected as the class prefect? {dash1}.", 1, ["Nkem", "Adamu", "Aremu"], ["Nkem"], "Nkem was chosen by his classmates."),
        qItem("eng6_2", "2. Name the three classmates described in the passage: {dash1}, {dash2} and {dash3}.", 3, ["Adamu", "Aremu", "Nkem", "Emeka"], ["Adamu", "Aremu", "Nkem"], "The three classmates are Adamu, Aremu, and Nkem."),
        qItem("eng6_3", "3. What specific class were the three pupils attending? Primary {dash1}.", 1, ["4D", "3B", "5A"], ["4D"], "The passage specifies Primary 4D."),
        qItem("eng6_4", "4. Which of the boys was particularly talented in English language and literature? {dash1}.", 1, ["Aremu", "Adamu"], ["Aremu"], "Aremu loved reading literature."),
        qItem("eng6_5", "5. Who was recognized as the most all-around intelligent pupil in the class? {dash1}.", 1, ["Nkem", "Adamu", "Aremu"], ["Nkem"], "Nkem was good in both science and language.")
      ]
    },
    {
      subjectId: "comp_week6",
      subjectTitle: "WEEK 6: COMPUTER STUDIES",
      topic: "Input, Processing and Output",
      questions: [
        qItem("cp6_1", "1. Through which type of device is data entered into a computer? An {dash1} device.", 1, ["input", "CPU", "document"], ["input"], "Input devices send data inwards."),
        qItem("cp6_2", "2. Mention three essential input devices: {dash1}, {dash2} and {dash3}.", 3, ["mouse", "keyboard", "scanner", "printer", "monitor"], ["mouse", "keyboard", "scanner"], "Keyboards, mice, and scanners enter data."),
        qItem("cp6_3", "3. Where does the actual processing of all calculations take place? In the {dash1}.", 1, ["CPU", "printer", "paper"], ["CPU"], "The CPU processes instructions."),
        qItem("cp6_4", "4. Mention two common computer output devices: the {dash1} and the {dash2}.", 2, ["monitor", "printer", "scanner", "mouse"], ["monitor", "printer"], "Monitors and printers output results.")
      ]
    }
  ],

  7: [
    {
      subjectId: "eng_week7",
      subjectTitle: "WEEK 7: MID-TERM TEST: ENGLISH STUDIES",
      topic: "Concept of Print and Book Features",
      passage: {
        title: "📖 Textbook Features",
        text: "A textbook contains some features such as title, title page, table of contents, chapters, glossary, etc. Without all or some of these, a book cannot be seen as text book. Another thing, a textbook bears is the author's name and or the publishing company."
      },
      questions: [
        qItem("eng7_1", "1. Mention three important features of a textbook: {dash1}, {dash2} and {dash3}.", 3, ["title", "table of contents", "glossary", "stove", "knife"], ["title", "table of contents", "glossary"], "Textbooks feature titles, contents, and glossaries."),
        qItem("eng7_2", "2. What is the official name given to a book called? The {dash1}.", 1, ["title", "page", "leaves"], ["title"], "The title identifies the book."),
        qItem("eng7_3", "3. What part of the textbook lists all topics and page numbers? The {dash1}.", 1, ["table of contents", "ink", "paper"], ["table of contents"], "The Table of Contents outlines the chapters."),
        qItem("eng7_4", "4. True or False: A glossary contains definitions of difficult new words: {dash1}.", 1, ["Yes", "No"], ["Yes"], "Yes, glossaries define key terms."),
        qItem("eng7_5", "5. The person who writes the content of a book is called the {dash1}.", 1, ["author", "controller", "preacher"], ["author"], "The author is the writer.")
      ]
    },
    {
      subjectId: "math_week7",
      subjectTitle: "WEEK 7: MID-TERM TEST: MATHEMATICS",
      topic: "Lowest Common Multiple (L.C.M)",
      questions: [
        qItem("m7_1", "1. Find the Lowest Common Multiple (L.C.M) of 2 and 4: {dash1}", 1, ["4", "10", "20"], ["4"], "Multiples of 2: 2, 4. Multiples of 4: 4. L.C.M = 4."),
        qItem("m7_2", "2. Calculate the L.C.M of 6 and 8: {dash1}", 1, ["24", "20", "30"], ["24"], "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. L.C.M = 24."),
        qItem("m7_3", "3. Find the L.C.M of 3 and 6: {dash1}", 1, ["6", "8", "10"], ["6"], "Multiples of 3: 3, 6. L.C.M = 6."),
        qItem("m7_4", "4. Calculate the L.C.M of 4 and 7: {dash1}", 1, ["28", "12", "8"], ["28"], "4 × 7 = 28."),
        qItem("m7_5", "5. Find the L.C.M of 2 and 8: {dash1}", 1, ["8", "14", "17"], ["8"], "Multiples of 2 include 8; L.C.M = 8."),
        qItem("m7_6", "6. Calculate the L.C.M of 4 and 9: {dash1}", 1, ["36", "29", "40"], ["36"], "4 × 9 = 36.")
      ]
    },
    {
      subjectId: "comp_week7",
      subjectTitle: "MID-TERM TEST: COMPUTER STUDIES",
      topic: "The Central Processing Unit",
      passage: {
        title: "💻 The Central Processing Unit",
        text: "The CPU is the abbreviation for Central Processing Unit. It is also called system unit. It is the brain of the computer where the memory is contained. Data are processed in the CPU of the computer before the information is displayed on the monitor for the user to see."
      },
      questions: [
        qItem("cp7_1", "1. What does the abbreviation CPU stand for? {dash1}.", 1, ["Central Processing Unit", "ACP", "CPS"], ["Central Processing Unit"], "Central Processing Unit."),
        qItem("cp7_2", "2. What is another name for the CPU? The {dash1}.", 1, ["system unit", "software", "monitor"], ["system unit"], "It is commonly known as the System Unit."),
        qItem("cp7_3", "3. Before information is displayed, raw data must be {dash1} in the CPU.", 1, ["processed", "wasted", "blocked"], ["processed"], "Data must be processed into information."),
        qItem("cp7_4", "4. Name the two primary types of computer memory: {dash1} and {dash2}.", 2, ["RAM", "ROM", "CAM"], ["RAM", "ROM"], "RAM and ROM are the two primary memory types.")
      ]
    }
  ],

  8: [
    {
      subjectId: "comp_week8",
      subjectTitle: "WEEK 8: COMPUTER STUDIES",
      topic: "Computer Software",
      questions: [
        qItem("cp8_1", "1. Computer software is divided into {dash1} and {dash2} software.", 2, ["System", "Application", "Hardware", "Plastic"], ["System", "Application"], "System software controls hardware; Application software performs specific user tasks."),
        qItem("cp8_2", "2. An operating system like Microsoft Windows is an example of {dash1} software.", 1, ["System", "Application", "Drawing"], ["System"], "Windows and Android are System software."),
        qItem("cp8_3", "3. Programs like Microsoft Word and Paint are examples of {dash1} software.", 1, ["Application", "System", "Cable"], ["Application"], "Programs used to do user work are Application software."),
        qItem("cp8_4", "4. True or False: Software programs cannot be touched with our physical hands: {dash1}.", 1, ["True", "False"], ["True"], "Software is intangible computer programs and instructions.")
      ]
    },
    {
      subjectId: "math_week8",
      subjectTitle: "WEEK 8: MATHEMATICS",
      topic: "Highest Common Factor (H.C.F)",
      questions: [
        qItem("m8_1", "1. Find the Highest Common Factor (H.C.F) of 8 and 12: {dash1}", 1, ["4", "2", "6", "8"], ["4"], "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. Highest common is 4."),
        qItem("m8_2", "2. What is the H.C.F of 9 and 15? {dash1}", 1, ["3", "1", "5", "9"], ["3"], "Factors of 9: 1, 3, 9. Factors of 15: 1, 3, 5, 15. H.C.F = 3."),
        qItem("m8_3", "3. Calculate the H.C.F of 16 and 24: {dash1}", 1, ["8", "4", "2", "16"], ["8"], "16 = 8 × 2 and 24 = 8 × 3; H.C.F is 8."),
        qItem("m8_4", "4. Find the H.C.F of 10 and 20: {dash1}", 1, ["10", "5", "2", "20"], ["10"], "10 divides both 10 and 20 evenly."),
        qItem("m8_5", "5. What is the H.C.F of 14 and 21? {dash1}", 1, ["7", "2", "3", "14"], ["7"], "7 × 2 = 14 and 7 × 3 = 21.")
      ]
    },
    {
      subjectId: "eng_week8",
      subjectTitle: "WEEK 8: ENGLISH STUDIES",
      topic: "Subject and Predicate in Simple Sentences",
      questions: [
        qItem("eng8_1", "1. In 'The swift eagle caught a snake', identify the Subject: {dash1} and Predicate: {dash2}.", 2, ["The swift eagle", "caught a snake", "a snake"], ["The swift eagle", "caught a snake"], "Subject is who performs the action; predicate contains the verb."),
        qItem("eng8_2", "2. In 'Flourish reads her textbook every evening', identify the Subject: {dash1}.", 1, ["Flourish", "reads her textbook", "every evening"], ["Flourish"], "Flourish is the subject performing the action."),
        qItem("eng8_3", "3. Every complete simple sentence must have a Subject and a {dash1}.", 1, ["Predicate / Verb", "Comma", "Preposition"], ["Predicate / Verb"], "Sentences require a subject and a predicate with a finite verb."),
        qItem("eng8_4", "4. In 'The dog barked at the stranger', identify the Predicate: {dash1}.", 1, ["barked at the stranger", "The dog", "stranger"], ["barked at the stranger"], "The predicate begins from the verb 'barked'.")
      ]
    }
  ],

  9: [
    {
      subjectId: "comp_week9",
      subjectTitle: "WEEK 9: COMPUTER STUDIES",
      topic: "Computer Storage Devices",
      questions: [
        qItem("cp9_1", "1. Computer storage is divided into {dash1} and {dash2} storage.", 2, ["Primary storage", "Secondary storage", "Screen", "Wire"], ["Primary storage", "Secondary storage"], "Computers use primary (RAM/ROM) and secondary storage."),
        qItem("cp9_2", "2. A flash drive and a hard disk are examples of {dash1} storage devices.", 1, ["Secondary", "Primary", "Temporary"], ["Secondary"], "External drives provide secondary, permanent storage."),
        qItem("cp9_3", "3. What does RAM stand for? {dash1}.", 1, ["Random Access Memory", "Read Access Mode", "Run All Memory"], ["Random Access Memory"], "RAM holds temporary data for processing."),
        qItem("cp9_4", "4. What does ROM stand for? {dash1}.", 1, ["Read Only Memory", "Run Once Mode", "Real Open Memory"], ["Read Only Memory"], "ROM contains permanent instructions built in by the manufacturer.")
      ]
    },
    {
      subjectId: "eng_week9",
      subjectTitle: "WEEK 9: ENGLISH STUDIES",
      topic: "Prepositions of Place",
      passage: {
        title: "📖 Story: Where Is the Cat?",
        text: "Chinedu has a playful ginger cat named Simba. In the morning, Simba slept peacefully under the dining table. Later on, he jumped onto the sofa, hid behind the green curtains, and finally crawled into a cardboard box."
      },
      questions: [
        qItem("eng9_1", "1. Where did Simba sleep and jump? He slept {dash1} the table and jumped {dash2} the sofa.", 2, ["under", "onto", "between", "through"], ["under", "onto"], "Prepositions show position and direction."),
        qItem("eng9_2", "2. Where was Simba hiding? He hid {dash1} the curtains.", 1, ["behind", "in front", "across"], ["behind"], "'Behind' indicates position at the back of something."),
        qItem("eng9_3", "3. Words that show position, such as 'in', 'on', 'under', are called {dash1}.", 1, ["Prepositions", "Adjectives", "Nouns"], ["Prepositions"], "Prepositions specify relationships in space or time."),
        qItem("eng9_4", "4. Simba crawled {dash1} the cardboard box.", 1, ["into", "over", "above"], ["into"], "'Into' indicates movement to the interior of a space.")
      ]
    },
    {
      subjectId: "bst_week9",
      subjectTitle: "WEEK 9: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Water and the Water Cycle",
      questions: [
        qItem("bst9_1", "1. Water changes to vapour by {dash1} and falls back as rain through {dash2}.", 2, ["evaporation", "condensation", "freezing"], ["evaporation", "condensation"], "Heat causes evaporation; cooling leads to condensation."),
        qItem("bst9_2", "2. Clean drinking water is odourless, tasteless, and has no {dash1}.", 1, ["colour", "weight", "liquid"], ["colour"], "Clean drinking water is colourless, tasteless, and odourless."),
        qItem("bst9_3", "3. Name three natural sources of fresh water: {dash1}, {dash2} and {dash3}.", 3, ["rain", "river", "well", "petrol", "kerosene"], ["rain", "river", "well"], "Rain, rivers, and wells are natural water sources."),
        qItem("bst9_4", "4. Boiling drinking water is necessary because it kills harmful {dash1}.", 1, ["germs", "fish", "salts"], ["germs"], "Boiling sterilizes water by destroying pathogenic bacteria.")
      ]
    }
  ],

  10: [
    {
      subjectId: "comp_week10",
      subjectTitle: "WEEK 10: COMPUTER STUDIES",
      topic: "Hardware: Input and Output Devices",
      passage: {
        title: "💻 Computer Hardware: Input vs Output",
        text: "Computer hardware is divided into input devices and output devices. An input device is any hardware component that allows you to enter data and instructions into a computer. Examples include the keyboard, mouse, scanner, microphone, light pen, and joystick.\n\nAn output device is any hardware component that conveys information from the computer to one or more people. Examples include the monitor (screen), printer, speakers, headphones, and projectors."
      },
      questions: [
        qItem("cp10_1", "1. A keyboard is an {dash1} device, while a printer is an {dash2} device.", 2, ["input", "output", "storage", "internal"], ["input", "output"], "Keyboard feeds data in; printer gives physical copies out."),
        qItem("cp10_2", "2. Mention four examples of input devices: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["mouse", "keyboard", "scanner", "microphone", "speaker", "printer"], ["mouse", "keyboard", "scanner", "microphone"], "Mouse, keyboard, scanner, and microphone take input inward."),
        qItem("cp10_3", "3. Mention three examples of output devices: {dash1}, {dash2} and {dash3}.", 3, ["monitor", "printer", "speakers", "mouse", "light pen"], ["monitor", "printer", "speakers"], "Monitors display images, printers produce paper, and speakers play sound."),
        qItem("cp10_4", "4. What output device is used to play music and sounds from a computer? A {dash1}.", 1, ["speaker", "scanner", "mouse"], ["speaker"], "Speakers output audible sound waves."),
        qItem("cp10_5", "5. What is the display visual screen of a computer called? The {dash1}.", 1, ["monitor", "CPU", "joystick"], ["monitor"], "The monitor displays visual output to the user."),
        qItem("cp10_6", "6. Which input device is commonly used by children to play computer games? A {dash1}.", 1, ["joystick", "printer", "paper"], ["joystick"], "Joysticks control character movement in games."),
        qItem("cp10_7", "7. Which device converts printed paper photos into digital files? A {dash1}.", 1, ["scanner", "wooden box", "speaker"], ["scanner"], "Scanners digitize physical paper copies into the computer system.")
      ]
    },
    {
      subjectId: "math_week10",
      subjectTitle: "WEEK 10: MATHEMATICS",
      topic: "Perimeter and Area of Shapes",
      questions: [
        qItem("m10_1", "1. Calculate the perimeter of a rectangle with length 8cm and width 5cm: {dash1} cm.", 1, ["26", "40", "13", "30"], ["26"], "Perimeter = 2 × (L + W) = 2 × (8 + 5) = 2 × 13 = 26cm."),
        qItem("m10_2", "2. What is the area of a square whose side is 6cm? {dash1} square centimeters.", 1, ["36", "24", "12", "18"], ["36"], "Area of square = Side × Side = 6 × 6 = 36cm²."),
        qItem("m10_3", "3. Perimeter is defined as the total distance around the {dash1} of a shape.", 1, ["boundary", "inside", "weight"], ["boundary"], "Perimeter measures the total outer boundary."),
        qItem("m10_4", "4. Calculate the area of a rectangle with length 10cm and breadth 4cm: {dash1} cm².", 1, ["40", "28", "14", "50"], ["40"], "Area = Length × Breadth = 10 × 4 = 40cm²."),
        qItem("m10_5", "5. What is the perimeter of a square with each side measuring 7cm? {dash1} cm.", 1, ["28", "49", "14", "21"], ["28"], "Perimeter = 4 × Side = 4 × 7 = 28cm.")
      ]
    },
    {
      subjectId: "bst_week10",
      subjectTitle: "WEEK 10: BASIC SCIENCE AND TECHNOLOGY",
      topic: "The Human Skeletal System",
      questions: [
        qItem("bst10_1", "1. The internal bony framework supporting the human body is the {dash1}.", 1, ["skeleton", "muscle", "skin"], ["skeleton"], "The skeleton provides structure and protects internal organs."),
        qItem("bst10_2", "2. A point where two or more bones connect is called a {dash1}.", 1, ["joint", "vein", "flesh"], ["joint"], "Joints allow movement between articulating bones."),
        qItem("bst10_3", "3. Mention two mobile joints found in human limbs: the {dash1} and {dash2}.", 2, ["knee", "elbow", "stomach", "liver"], ["knee", "elbow"], "The knee and elbow are mobile hinge joints."),
        qItem("bst10_4", "4. Which bone protects the delicate human brain from injuries? The {dash1}.", 1, ["skull", "ribs", "backbone"], ["skull"], "The skull encloses and safeguards the brain.")
      ]
    }
  ],

  11: [
    {
      subjectId: "exam_phe",
      subjectTitle: "END TERM TEST: PHYSICAL AND HEALTH EDUCATION",
      topic: "Jumps, Races & First Aid",
      questions: [
        qItem("ephe_1", "1. Name two standard jumping events in field athletics: {dash1} jump and {dash2} jump.", 2, ["high", "long", "push", "short"], ["high", "long"], "High jump and long jump are recognized athletic field events."),
        qItem("ephe_2", "2. Name two competitive running races in athletics: {dash1} and {dash2} race.", 2, ["relay", "marathon", "football"], ["relay", "marathon"], "Relays and marathons are track and road running races."),
        qItem("ephe_3", "3. Identify four essential supplies in a first aid box: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["cotton wool", "razor", "paracetamol", "GIV", "stone", "pen"], ["cotton wool", "razor", "paracetamol", "GIV"], "First aid supplies include cotton wool, blades, paracetamol, and antiseptics."),
        qItem("ephe_4", "4. What is the official title of the person who referees a football match? The {dash1}.", 1, ["referee", "goal keeper", "trader"], ["referee"], "The referee enforces all rules during a football match.")
      ]
    },
    {
      subjectId: "exam_cca",
      subjectTitle: "END TERM TEST: CULTURAL AND CREATIVE ARTS",
      topic: "Visual Arts, Colours and Shapes",
      questions: [
        qItem("ecca_1", "1. Mention three branches of visual arts: {dash1}, {dash2} and {dash3}.", 3, ["drawing", "painting", "graphics", "broadcasting"], ["drawing", "painting", "graphics"], "Drawing, painting, and graphics are visual arts."),
        qItem("ecca_2", "2. Name three secondary colours formed by mixing primary colours: {dash1}, {dash2} and {dash3}.", 3, ["orange", "green", "purple", "red", "blue"], ["orange", "green", "purple"], "Orange, green, and purple are secondary colours."),
        qItem("ecca_3", "3. Identify four fundamental geometric shapes in design: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["circle", "square", "triangle", "rectangle", "sand"], ["circle", "square", "triangle", "rectangle"], "Circles, squares, triangles, and rectangles are basic shapes.")
      ]
    },
    {
      subjectId: "exam_agric",
      subjectTitle: "END TERM TEST: AGRICULTURAL SCIENCE",
      topic: "Fishing, Crops and Farm Animals",
      questions: [
        qItem("eag_1", "1. Name two simple tools used for catching fish: a {dash1} and a {dash2}.", 2, ["hook", "net", "hoe", "broom"], ["hook", "net"], "Hooks, lines, and nets are fishing tools."),
        qItem("eag_2", "2. Mention four edible fruits harvested from plants: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["orange", "mango", "apple", "banana"], ["orange", "mango", "apple", "banana"], "Oranges, mangoes, apples, and bananas are wholesome fruits."),
        qItem("eag_3", "3. Identify four common domestic farm animals: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["goat", "cow", "sheep", "pig"], ["goat", "cow", "sheep", "pig"], "Goats, cows, sheep, and pigs are domestic livestock."),
        qItem("eag_4", "4. What are the two primary divisions of agriculture? {dash1} and {dash2}.", 2, ["crops farming", "animals farming", "books farming"], ["crops farming", "animals farming"], "Crops farming and livestock production.")
      ]
    },
    {
      subjectId: "exam_hec",
      subjectTitle: "END TERM TEST: HOME ECONOMICS",
      topic: "Anatomy, Cooking and Management",
      questions: [
        qItem("ehe_1", "1. The human body is divided into three main anatomical parts: the {dash1}, {dash2} and {dash3}.", 3, ["head", "trunk", "limbs", "eyes"], ["head", "trunk", "limbs"], "The body is divided into head, trunk, and limbs."),
        qItem("ehe_2", "2. Mention three common culinary ways to cook food: {dash1}, {dash2} and {dash3}.", 3, ["boiling", "frying", "smoking", "burying"], ["boiling", "frying", "smoking"], "Boiling, frying, and smoking/roasting cook food safely."),
        qItem("ehe_3", "3. Home management involves proper {dash1} and {dash2} of family resources.", 2, ["care of home", "budgeting resources", "wasting money"], ["care of home", "budgeting resources"], "Care of the home and wise budgeting are key skills.")
      ]
    },
    {
      subjectId: "exam_crs",
      subjectTitle: "END TERM TEST: CHRISTIAN RELIGIOUS STUDIES",
      topic: "God's Word, Parables and Christian Conduct",
      questions: [
        qItem("ecrs_1", "1. In what two ways does God speak to His people today? Through the Holy {dash1} and heavenly {dash2}.", 2, ["Bible", "Angel", "cult"], ["Bible", "Angel"], "God speaks through the Holy Bible and angels."),
        qItem("ecrs_2", "2. In the parable of mercy, the Good Samaritan was travelling down from Jerusalem to {dash1}.", 1, ["Jericho", "Nigeria", "Israel"], ["Jericho"], "Luke 10:30 specifies the man was on the road to Jericho."),
        qItem("ecrs_3", "3. As children of God, we are commanded to {dash1}, {dash2} and {dash3} one another.", 3, ["love", "care for", "help", "hate", "beat"], ["love", "care for", "help"], "Believers must love, care for, and help others.")
      ]
    },
    {
      subjectId: "exam_hist",
      subjectTitle: "END TERM TEST: HISTORY",
      topic: "Colonial Amalgamation and Early Regions",
      questions: [
        qItem("ehist_1", "1. Name the four early administrative regions of Nigeria: {dash1}, {dash2}, {dash3} and {dash4}.", 4, ["Northern", "Eastern", "Western", "Mid-Western", "Lagos"], ["Northern", "Eastern", "Western", "Mid-Western"], "Nigeria formerly had Northern, Eastern, Western, and Mid-Western regions."),
        qItem("ehist_2", "2. Who was the British Governor-General who amalgamated Nigeria in 1914? {dash1}.", 1, ["Lord Luggard", "Awolowo", "Azikiwe"], ["Lord Luggard"], "Lord Frederick Lugard amalgamated the protectorates."),
        qItem("ehist_3", "3. Mention Nigeria's three major ethnic groups: {dash1}, {dash2} and {dash3}.", 3, ["Hausa", "Yoruba", "Igbo", "Igala"], ["Hausa", "Yoruba", "Igbo"], "Hausa, Yoruba, and Igbo form the three largest groups.")
      ]
    },
    {
      subjectId: "exam_civic",
      subjectTitle: "END TERM TEST: CIVIC EDUCATION",
      topic: "National Languages, Culture and Governance",
      questions: [
        qItem("eciv_1", "1. Mention three indigenous languages spoken in Nigeria: {dash1}, {dash2} and {dash3}.", 3, ["Efik", "Igala", "Bini", "China"], ["Efik", "Igala", "Bini"], "Efik, Igala, and Bini are Nigerian native languages."),
        qItem("eciv_2", "2. Mention three sacred worship places deserving quietness and respect: the {dash1}, {dash2} and traditional {dash3}.", 3, ["church", "mosque", "shrine", "car"], ["church", "mosque", "shrine"], "Churches, mosques, and shrines are sacred sites."),
        qItem("eciv_3", "3. Name three key cultural elements of any society: {dash1}, {dash2} and {dash3}.", 3, ["language", "food", "clothing", "religion"], ["language", "food", "clothing"], "Culture includes native language, food, and dress."),
        qItem("eciv_4", "4. What are the three tiers of government in Nigeria? The {dash1}, {dash2} and {dash3} governments.", 3, ["federal", "state", "local", "town"], ["federal", "state", "local"], "Nigeria operates Federal, State, and Local tiers of government.")
      ]
    },
    {
      subjectId: "exam_sos",
      subjectTitle: "END TERM TEST: SOCIAL STUDIES",
      topic: "Religions, Family and Public Institutions",
      questions: [
        qItem("esos_1", "1. What are the three major religions recognized in Nigeria? {dash1}, {dash2} and African {dash3}.", 3, ["Christian", "Islam", "tradition", "Hindu"], ["Christian", "Islam", "tradition"], "Christianity, Islam, and African Traditional Religion are major faiths."),
        qItem("esos_2", "2. Who are the three members of a nuclear family? The {dash1}, {dash2} and {dash3}.", 3, ["father", "mother", "children", "uncles"], ["father", "mother", "children"], "A nuclear family consists strictly of parents and their children."),
        qItem("esos_3", "3. Name five public social environments where humans meet: {dash1}, {dash2}, {dash3}, {dash4} and {dash5}.", 5, ["school", "market", "church", "hospital", "parks", "stadium"], ["school", "market", "church", "hospital", "parks"], "Schools, markets, churches, hospitals, and parks are public social hubs.")
      ]
    },
    {
      subjectId: "exam_vr",
      subjectTitle: "END TERM TEST: VERBAL REASONING",
      topic: "Identifying the General Group Category",
      questions: [
        qItem("evr_1", "1. In the list (rice, food, beans, garri), what is the overarching Group Name? {dash1}.", 1, ["food", "rice", "beans"], ["food"], "'Food' is the overarching category."),
        qItem("evr_2", "2. In the list (circle, square, triangle, shape), identify the general Group Name: {dash1}.", 1, ["shape", "circle", "square"], ["shape"], "'Shape' is the general category."),
        qItem("evr_3", "3. In the list (pink, yellow, colour, black), identify the Group Name: {dash1}.", 1, ["colour", "pink", "yellow"], ["colour"], "'Colour' is the general category."),
        qItem("evr_4", "4. In the list (1, 2, 3, number), identify the Group Name: {dash1}.", 1, ["number", "1", "2"], ["number"], "'Number' is the category."),
        qItem("evr_5", "5. In the list (Sunday, week, Monday, Tuesday), what is the Group Name? {dash1}.", 1, ["week", "Sunday", "Monday"], ["week"], "The days of the week make up a 'week'."),
        qItem("evr_6", "6. In the list (Imo, Enugu, State, Abia), what is the general Group Name? {dash1}.", 1, ["State", "Imo", "Enugu"], ["State"], "Imo, Enugu, and Abia are specific 'States'.")
      ]
    },
    {
      subjectId: "exam_qr",
      subjectTitle: "END TERM TEST: QUANTITATIVE REASONING",
      topic: "Letter Ciphers",
      passage: {
        title: "🔢 Letter-to-Number Key",
        text: "R E A S O N = 1 2 3 4 5 6\nExample: AN = 36"
      },
      questions: [
        qItem("eqr_1", "1. Decode the word S O N: {dash1}", 1, ["456", "356", "452"], ["456"], "S=4, O=5, N=6. S O N = 456."),
        qItem("eqr_2", "2. Decode the word E A R N: {dash1}", 1, ["2316", "2315", "1236"], ["2316"], "E=2, A=3, R=1, N=6. E A R N = 2316."),
        qItem("eqr_3", "3. Decode the word N O R: {dash1}", 1, ["651", "561", "652"], ["651"], "N=6, O=5, R=1. N O R = 651."),
        qItem("eqr_4", "4. Decode the word S O: {dash1}", 1, ["45", "54"], ["45"], "S=4, O=5. S O = 45."),
        qItem("eqr_5", "5. Decode the word R A N: {dash1}", 1, ["136", "316"], ["136"], "R=1, A=3, N=6. R A N = 136."),
        qItem("eqr_6", "6. Decode the word N E A R: {dash1}", 1, ["6231", "2631"], ["6231"], "N=6, E=2, A=3, R=1. N E A R = 6231."),
        qItem("eqr_7", "7. Decode the word S E A: {dash1}", 1, ["423", "243"], ["423"], "S=4, E=2, A=3. S E A = 423."),
        qItem("eqr_8", "8. Decode the word A R E: {dash1}", 1, ["312", "132"], ["312"], "A=3, R=1, E=2. A R E = 312.")
      ]
    }
  ]
};

// =========================================================================
// MULTI-SENSORY LIVE CHALKBOARD ENGINE CURRICULUM
// =========================================================================
window.LIVE_CHALK_CURRICULUM = {
  "english_week1": [
    { q: "What is the plural of House?", a: "Houses", rule: "Regular noun: add -s to form 'Houses'.", tray: ["1 House 🏠", "Many Houses 🏠🏠"] },
    { q: "What is the plural of Ox?", a: "Oxen", rule: "Irregular noun: Ox takes '-en' to become 'Oxen'.", tray: ["1 Ox 🐂", "Many Oxen 🐂🐂"] },
    { q: "What is the plural of Knife?", a: "Knives", rule: "Drop -fe and add -ves to form 'Knives'.", tray: ["1 Knife 🔪", "Set of Knives 🔪🔪"] }
  ],

  "math_fractions": [
    {
      q: "Find 3 equivalent fractions for 1/2",
      num: 1,
      den: 2,
      multipliers: [2, 3, 4],
      tray: ["1/2 = Half a Chocolate Bar 🍫", "2/4 = Two Quarters", "3/6 = Three Sixths", "Rule: Multiply top & bottom by the same number"]
    },
    {
      q: "Find 3 equivalent fractions for 2/5",
      num: 2,
      den: 5,
      multipliers: [2, 3, 4],
      tray: ["2/5 baseline bar", "4/10 = cut in 2", "6/15 = cut in 3", "Rule: Top × 2, Bottom × 2"]
    }
  ],

  // VERBAL REASONING LIVE LESSON (WEEK 1)
  "vr_week1": [
    {
      q: "Find the next two pairs: GJ, HK, IL, __, __",
      type: "letter_pairs",
      letters1: ["G", "H", "I", "J", "K"],
      letters2: ["J", "K", "L", "M", "N"],
      answer: "JM, KN",
      tray: ["1st letter: G ➔ H ➔ I ➔ J ➔ K", "2nd letter: J ➔ K ➔ L ➔ M ➔ N", "Match them: JM and KN! 🔤"]
    },
    {
      q: "Find the next two pairs: AM, BN, CO, __, __",
      type: "letter_pairs",
      letters1: ["A", "B", "C", "D", "E"],
      letters2: ["M", "N", "O", "P", "Q"],
      answer: "DP, EQ",
      tray: ["1st letter: A ➔ B ➔ C ➔ D ➔ E", "2nd letter: M ➔ N ➔ O ➔ P ➔ Q", "Result: DP and EQ! 🔤"]
    }
  ],

  // QUANTITATIVE REASONING LIVE LESSON (WEEK 1)
  "qr_week1": [
    {
      q: "Counting in 30's Diagram: 20, 50, 80, __",
      type: "qr_loop",
      bl: 20, tl: 50, tr: 80, br: "?",
      step: 30,
      answer: 110,
      tray: ["Start Bottom-Left: 20", "20 + 30 = 50 (Top-Left)", "50 + 30 = 80 (Top-Right)", "80 + 30 = 110 (Bottom-Right) 🎯"]
    },
    {
      q: "Counting in 30's Diagram: 180, 210, 240, __",
      type: "qr_loop",
      bl: 180, tl: 210, tr: 240, br: "?",
      step: 30,
      answer: 270,
      tray: ["Start Bottom-Left: 180", "180 + 30 = 210 (Top-Left)", "210 + 30 = 240 (Top-Right)", "240 + 30 = 270 (Bottom-Right) 🎯"]
    }
  ],

  "igbo_week1": [
    { q: "Ụdaume Igbo dị ole?", a: "Asatọ (8)", rule: "Ụdaume mfe (4) + Ụdaume arọ (4) = Asatọ (8).", tray: ["Ụdaume mfe: a, e, i, o", "Ụdaume arọ: ị, ọ, u, ụ"] }
  ],

  // ENGLISH AURAL DISCRIMINATION LIVE LESSON (WEEK 2)
  "eng_week2": [
    {
      q: "Vowel Sounds: /æ/ (Short) vs /ɑː/ (Long)",
      type: "phonics",
      shortList: ["pat", "mat", "cat", "hat", "at", "back"],
      longList: ["part", "mart", "cart", "heart", "art", "barn", "bark"],
      tray: ["/æ/ Short 'a': cat, hat, back 🐱", "/ɑː/ Long 'ar': part, heart, barn ❤️"]
    }
  ],

  "math_week2": [
    {
      q: "80, 90, __, __, 120",
      type: "sequence",
      pattern: "80, 90, __, __, 120, 130",
      step: 10,
      answer: "100, 110",
      tray: ["Pattern: Count by Tens", "80 + 10 = 90", "90 + 10 = 100", "100 + 10 = 110"]
    }
  ],

  "comp_week2": [
    { q: "What is Data in computer studies?", a: "Raw or unprocessed facts.", rule: "Data becomes information when processed by the CPU.", tray: ["Data ➔ CPU ➔ Information"] }
  ],

  "math_week7": [
    {
      q: "Find the L.C.M of 4 and 6",
      type: "lcm",
      n1: 4,
      n2: 6,
      multiples1: [4, 8, 12, 16, 20, 24],
      multiples2: [6, 12, 18, 24],
      answer: 12,
      tray: ["Frog 4 jumps: 4, 8, 12 🐸", "Frog 6 jumps: 6, 12 🐸", "First stone they meet = 12!"]
    }
  ],

  "english_week7": [
    { q: "What is the title of a textbook?", a: "The official name given to the book.", rule: "The title identifies the book and gives the reader a preview of its contents.", tray: ["Title Page 📖", "Table of Contents 📑", "Glossary 🔤"] }
  ],

  "math_week8": [
    {
      q: "Find the H.C.F of 8 and 12",
      type: "hcf",
      n1: 8,
      n2: 12,
      factors1: [1, 2, 4, 8],
      factors2: [1, 2, 3, 4, 6, 12],
      commonFactors: [1, 2, 4],
      answer: 4,
      tray: ["Factors of 8: 1, 2, 4, 8", "Factors of 12: 1, 2, 3, 4, 6, 12", "The Biggest Factor is 4! 👑"]
    }
  ],

  "english_week8": [
    {
      q: "Identify Subject and Predicate: 'The swift eagle caught a snake'",
      type: "grammar",
      subject: "The swift eagle",
      predicate: "caught a snake",
      rule: "The Subject is who performs the action. The Predicate contains the verb.",
      tray: ["Subject: The swift eagle 🦅", "Predicate: caught a snake 🐍"]
    }
  ]
};

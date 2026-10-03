// =========================================================================
// BASIC 4 CURRICULUM & QUESTION BANK (WEEKS 1 — 11)
// =========================================================================

function qItem(id, text, dashes, options, correct, rule, type = "option", placeholders = null) {
  return { id, text, dashes, options, correct, rule, type, placeholders };
}

window.WEEKLY_CURRICULUM = {
  1: [
    {
      subjectId: "english_week1",
      subjectTitle: "WEEK 1: ENGLISH STUDIES",
      topic: "Kick off Test: Plural of Nouns (Example: Woman — women)",
      questions: [
        qItem("eng1_1", "1. House {dash1}", 1, ["Houses", "Housen", "Housies"], ["Houses"], "Add -s to form 'Houses'."),
        qItem("eng1_2", "2. Ox {dash1}", 1, ["Oxen", "Oxes", "Oxies"], ["Oxen"], "Ox takes suffix '-en' to become 'Oxen'."),
        qItem("eng1_3", "3. Sheep {dash1}", 1, ["Sheep", "Sheeps", "Sheepes"], ["Sheep"], "Zero plural: remains 'Sheep'."),
        qItem("eng1_4", "4. Box {dash1}", 1, ["Boxes", "Boxs", "Boxen"], ["Boxes"], "Nouns ending in -x add '-es'."),
        qItem("eng1_5", "5. Chief {dash1}", 1, ["Chiefs", "Chieves", "Chiefes"], ["Chiefs"], "Double vowels before -f add -s."),
        qItem("eng1_6", "6. Cloth {dash1}", 1, ["Cloths", "Clothes", "Clothies"], ["Cloths", "Clothes"], "Both Cloths and Clothes are accepted."),
        qItem("eng1_7", "7. Book {dash1}", 1, ["Books", "Bookes", "Bookies"], ["Books"], "Regular noun: add -s to form 'Books'."),
        qItem("eng1_8", "8. Knife {dash1}", 1, ["Knives", "Knifes", "Knifeses"], ["Knives"], "Nouns ending in -fe drop -fe and add -ves.")
      ]
    },
    {
      subjectId: "math_week1",
      subjectTitle: "WEEK 1: MATHEMATICS",
      topic: "Kick off Test: 3 Equivalent Fractions (Example: 2/3 = 4/6, 6/9, 8/12)",
      questions: [
        qItem("m1_1", "1. 1/2 = {dash1}, {dash2}, {dash3}", 3, ["2/4", "3/6", "4/8", "2/5", "3/8"], ["2/4", "3/6", "4/8"], "Multiply numerator and denominator by 2, 3, 4."),
        qItem("m1_2", "2. 1/7 = {dash1}, {dash2}, {dash3}", 3, ["2/14", "3/21", "4/28", "2/10", "3/14"], ["2/14", "3/21", "4/28"], "Multiply numerator and denominator by 2, 3, 4."),
        qItem("m1_3", "3. 2/5 = {dash1}, {dash2}, {dash3}", 3, ["4/10", "6/15", "8/20", "4/15", "5/10"], ["4/10", "6/15", "8/20"], "Multiply numerator and denominator by 2, 3, 4."),
        qItem("m1_4", "4. 1/4 = {dash1}, {dash2}, {dash3}", 3, ["2/8", "3/12", "4/16", "2/6", "3/10"], ["2/8", "3/12", "4/16"], "Multiply numerator and denominator by 2, 3, 4."),
        qItem("m1_5", "5. 1/3 = {dash1}, {dash2}, {dash3}", 3, ["2/6", "3/9", "4/12", "2/5", "3/8"], ["2/6", "3/9", "4/12"], "Multiply numerator and denominator by 2, 3, 4."),
        qItem("m1_6", "6. 3/4 = {dash1}, {dash2}, {dash3}", 3, ["6/8", "9/12", "12/16", "6/10", "5/8"], ["6/8", "9/12", "12/16"], "Multiply numerator and denominator by 2, 3, 4.")
      ]
    },
    {
      subjectId: "igbo_week1",
      subjectTitle: "IZU UKA NKE MBU: ASUSU IGBO",
      topic: "Mnwale Ule",
      questions: [
        qItem("ig1_1", "1. Ụdaume Igbo dị ole? {dash1}", 1, ["Ise", "iri abụọ", "asatọ"], ["asatọ"], "Ụdaume Igbo dị asatọ (8)."),
        qItem("ig1_2", "2. Mkpụrụedemede Igbo dị {dash1}", 1, ["Iri ise", "iri abụọ na otu", "iri atọ na isii"], ["iri atọ na isii"], "Abịịdịi Igbo dị iri atọ na isii (36)."),
        qItem("ig1_3", "3. Ụzọ abụọ e kere mkpụrụ edemede Igbo bụ {dash1} na {dash2}", 2, ["ike ume", "ụdaume", "ụmụedemede", "mgbochiume"], ["ụdaume", "mgbochiume"], "Ụdaume na mgbochiume."),
        qItem("ig1_4", "4. Myiri ụdaume bụ {dash1} na {dash2}", 2, ["m", "n", "b", "d"], ["m", "n"], "'m' na 'n' bụ myiri ụdaume.")
      ]
    },
    {
      subjectId: "french_week1",
      subjectTitle: "SEMAINE UN: FRENCH",
      topic: "Écrivez en français",
      questions: [
        qItem("fr1_1", "1. One = {dash1}", 1, ["trois", "un"], ["un"], "One is 'un'."),
        qItem("fr1_2", "2. Eight = {dash1}", 1, ["huit", "six"], ["huit"], "Eight is 'huit'."),
        qItem("fr1_3", "3. Four = {dash1}", 1, ["cinq", "quatre"], ["quatre"], "Four is 'quatre'."),
        qItem("fr1_4", "4. Two = {dash1}", 1, ["deux", "sept"], ["deux"], "Two is 'deux'."),
        qItem("fr1_5", "5. Nine = {dash1}", 1, ["neuf", "six"], ["neuf"], "Nine is 'neuf'."),
        qItem("fr1_6", "6. Five = {dash1}", 1, ["cinq", "un"], ["cinq"], "Five is 'cinq'.")
      ]
    },
    {
      subjectId: "bst_week1",
      subjectTitle: "WEEK 1: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Kick off Test",
      questions: [
        qItem("bst1_1", "1. The application of scientific knowledge to solve practical problems is {dash1}", 1, ["energy", "technology", "power"], ["technology"], "Technology applies science."),
        qItem("bst1_2", "2. {dash1}, {dash2} and {dash3} are products of technology.", 3, ["radio", "phones", "cars", "wood", "sand"], ["radio", "phones", "cars"], "Inventions of technology."),
        qItem("bst1_3", "3. Two forms of technology are {dash1} and {dash2}", 2, ["developed", "undeveloped", "controlled"], ["developed", "undeveloped"], "Developed and undeveloped."),
        qItem("bst1_4", "4. Phones are developed technology in the areas of {dash1}", 1, ["transportation", "communication", "building"], ["communication"], "Communication.")
      ]
    },
    {
      subjectId: "phe_week1",
      subjectTitle: "WEEK 1: PHYSICAL AND HEALTH EDUCATION",
      topic: "Kick off Test: First Aid",
      questions: [
        qItem("phe1_1", "1. Four things in a first aid box: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["cotton wool", "razor", "paracetamol", "GIV", "cigarette", "pepper"], ["cotton wool", "razor", "paracetamol", "GIV"], "First aid supplies."),
        qItem("phe1_2", "2. The symbol on a first aid box is a {dash1}", 1, ["square", "cross", "circle"], ["cross"], "Red/white cross."),
        qItem("phe1_3", "3. First aid is given to an injured person after seeing the doctor: {dash1}", 1, ["True", "False"], ["False"], "Given before the doctor arrives."),
        qItem("phe1_4", "4. Anybody can give first aid: {dash1}", 1, ["True", "False"], ["True"], "Any bystander can assist."),
        qItem("phe1_5", "5. First aid tends to relieve the injured before medical attention: {dash1}", 1, ["True", "False"], ["True"], "Relieves pain.")
      ]
    },
    {
      subjectId: "agric_week1",
      subjectTitle: "WEEK 1: AGRICULTURAL SCIENCE",
      topic: "Kick off Test",
      questions: [
        qItem("ag1_1", "1. Four crops produced by farmers: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["yam", "cassava", "maize", "rice"], ["yam", "cassava", "maize", "rice"], "Common staple crops."),
        qItem("ag1_2", "2. Three fruits I know: {dash1}, {dash2} and {dash3}", 3, ["orange", "mango", "apple"], ["orange", "mango", "apple"], "Edible fruits."),
        qItem("ag1_3", "3. Farm tools: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["hoe", "cutlass", "rake", "wheelbarrow"], ["hoe", "cutlass", "rake", "wheelbarrow"], "Essential farm tools."),
        qItem("ag1_4", "4. Goat and cow are examples of {dash1} animal.", 1, ["domestic", "wild", "aquatic"], ["domestic"], "Farm / domestic animals.")
      ]
    },
    {
      subjectId: "home_econ_week1",
      subjectTitle: "WEEK 1: HOME ECONOMICS",
      topic: "Kick off Test",
      questions: [
        qItem("he1_1", "1. We make our mouth clean by {dash1} and {dash2}", 2, ["brushing", "washing", "eating"], ["brushing", "washing"], "Brushing and washing."),
        qItem("he1_2", "2. We use {dash1} and {dash2} to clean our mouth.", 2, ["toothpaste", "brush", "sand", "soap"], ["toothpaste", "brush"], "Toothpaste and brush."),
        qItem("he1_3", "3. {dash1} and {dash2} are used for body maintenance.", 2, ["soap", "body cream", "zinc", "cement"], ["soap", "body cream"], "Soap and cream."),
        qItem("he1_4", "4. Shoes are used to protect the {dash1}", 1, ["head", "eyes", "foot"], ["foot"], "Protects feet.")
      ]
    },
    {
      subjectId: "crs_week1",
      subjectTitle: "WEEK 1: CHRISTIAN RELIGIOUS STUDIES",
      topic: "Kick off Test: Good Samaritan",
      questions: [
        qItem("crs1_1", "1. The story of the good Samaritan teaches us {dash1}", 1, ["prophecy", "prayer", "love"], ["love"], "Compassionate love."),
        qItem("crs1_2", "2. The traveller was going from Jerusalem to {dash1}", 1, ["Nigeria", "Israel", "Jericho"], ["Jericho"], "Jericho."),
        qItem("crs1_3", "3. Who helped the traveller? {dash1}", 1, ["pastor", "governor", "Samaritan"], ["Samaritan"], "The Good Samaritan."),
        qItem("crs1_4", "4. The man was attacked by the {dash1}", 1, ["king", "robbers", "Pharisees"], ["robbers"], "Robbers."),
        qItem("crs1_5", "5. Jesus teaches us to love our {dash1}", 1, ["friends", "brothers only", "enemies only"], ["friends"], "Love our neighbours and friends.")
      ]
    },
    {
      subjectId: "social_studies_week1",
      subjectTitle: "WEEK 1: SOCIAL STUDIES",
      topic: "Kick off Test: Culture",
      questions: [
        qItem("soc1_1", "1. {dash1} is the people's way of life.", 1, ["tradition", "culture", "prayer"], ["culture"], "Culture."),
        qItem("soc1_2", "2. Material culture can be {dash1}", 1, ["celebrated", "touched"], ["touched"], "Tangible."),
        qItem("soc1_3", "3. Four local foods: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["amala", "pounded yam", "tuwo", "garri"], ["amala", "pounded yam", "tuwo", "garri"], "Local foods."),
        qItem("soc1_4", "4. Three major religions in Nigeria: {dash1}, {dash2} and {dash3}", 3, ["Christianity", "Islam", "Traditional", "Buddhism"], ["Christianity", "Islam", "Traditional"], "Recognized religions.")
      ]
    },
    {
      subjectId: "civic_week1",
      subjectTitle: "WEEK 1: CIVIC EDUCATION",
      topic: "National Symbols",
      questions: [
        qItem("civ1_1", "1. {dash1}, {dash2} and {dash3} are national symbols.", 3, ["flag", "coat of arm", "national anthem", "car", "house"], ["flag", "coat of arm", "national anthem"], "National symbols."),
        qItem("civ1_2", "2. Colours of national flag are {dash1} and {dash2}", 2, ["Green", "White", "Blue", "Red"], ["Green", "White"], "Green and white."),
        qItem("civ1_3", "3. The beginning of the national anthem is {dash1}", 1, ["beggars are everywhere", "Arise O Compatriot"], ["Arise O Compatriot"], "Arise O Compatriot."),
        qItem("civ1_4", "4. {dash1} and {dash2} are on the coat of arm.", 2, ["eagle", "horses", "book", "goats"], ["eagle", "horses"], "Eagle and horses."),
        qItem("civ1_5", "5. The colour of the two horses on the coat of arm is {dash1}", 1, ["White", "Brown", "Black"], ["White"], "White horses.")
      ]
    },
    {
      subjectId: "history_week1",
      subjectTitle: "WEEK 1: HISTORY",
      topic: "Kick off Test: Nigerian Regions",
      questions: [
        qItem("hist1_1", "1. Four eastern states: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["Enugu", "Anambra", "Imo", "Abia", "Kano", "Lagos"], ["Enugu", "Anambra", "Imo", "Abia"], "South-East states."),
        qItem("hist1_2", "2. Geopolitical regions: {dash1}, {dash2}, {dash3}, {dash4}, {dash5} and {dash6}", 6, ["North west", "North east", "North central", "South south", "south west", "south east", "South north"], ["North west", "North east", "North central", "South south", "south west", "south east"], "6 zones."),
        qItem("hist1_3", "3. Three major tribes: {dash1}, {dash2} and {dash3}", 3, ["Hausa", "Igbo", "Yoruba", "Ogoja", "Efik"], ["Hausa", "Igbo", "Yoruba"], "Major ethnic groups.")
      ]
    },
    {
      subjectId: "verbal_week1",
      subjectTitle: "WEEK 1: VERBAL REASONING",
      topic: "Letter Patterns",
      questions: [
        qItem("verb1_1", "1. GJ, HK, IL, {dash1}, {dash2}", 2, ["JM", "KN", "LO", "MP"], ["JM", "KN"], "Steps +1."),
        qItem("verb1_2", "2. AM, BN, CO, {dash1}, {dash2}", 2, ["DP", "EQ", "FR", "GS"], ["DP", "EQ"], "Alphabetical stepping."),
        qItem("verb1_3", "3. EH, FI, {dash1}, {dash2}, IL", 2, ["GJ", "HK", "GL", "IM"], ["GJ", "HK"], "Sequential pairs."),
        qItem("verb1_4", "4. PS, QT, RU, {dash1}, {dash2}", 2, ["SV", "TW", "UX", "VY"], ["SV", "TW"], "Consecutive pairs."),
        qItem("verb1_5", "5. DB, {dash1}, FD, GE, {dash2}", 2, ["EC", "HF", "IG", "CA"], ["EC", "HF"], "Letter pairs.")
      ]
    }
  ],

  2: [
    {
      subjectId: "math_week2",
      subjectTitle: "WEEK 2: MATHEMATICS",
      topic: "Whole Numbers Sequence",
      questions: [
        qItem("m2_1", "1. 80, 90, {dash1}, {dash2}, 120, 130", 2, ["100", "110", "115"], ["100", "110"], "Add 10 each time."),
        qItem("m2_2", "2. 78, 128, 178, {dash1}, {dash2}", 2, ["228", "278", "258"], ["228", "278"], "Add 50 each time."),
        qItem("m2_3", "3. 800, 900, {dash1}, 1,100, 1,200", 1, ["1,000", "1,050", "950"], ["1,000"], "Add 100 each time."),
        qItem("m2_4", "4. 760, 860, {dash1}, 1,060, 1,160, {dash2}", 2, ["960", "1,260", "980"], ["960", "1,260"], "Add 100 each time."),
        qItem("m2_5", "5. 200,000, 300,000, 400,000, {dash1}, {dash2}, 700,000", 2, ["500,000", "600,000", "550,000"], ["500,000", "600,000"], "Count in 100,000s."),
        qItem("m2_6", "6. 15,000, 18,000, 21,000, {dash1}, 27,000, {dash2}", 2, ["24,000", "30,000", "25,000"], ["24,000", "30,000"], "Add 3,000 each time."),
        qItem("m2_7", "7. 970, 1,000, 1,030, {dash1}, {dash2}, 1,120, 1,150", 2, ["1,060", "1,090", "1,080"], ["1,060", "1,090"], "Add 30 each time.")
      ]
    },
    {
      subjectId: "igbo_week2",
      subjectTitle: "IZU UKA NKE ABUO: ASUSU IGBO",
      topic: "Ọnụọgụgụ 1 — 200",
      questions: [
        qItem("ig2_1", "1. Otu narị na iri abụọ = {dash1}", 1, ["120", "102", "200"], ["120"], "100 + 20 = 120."),
        qItem("ig2_2", "2. Iri isii na otu = {dash1}", 1, ["61", "16", "71"], ["61"], "60 + 1 = 61."),
        qItem("ig2_3", "3. Iri asaa = {dash1}", 1, ["70", "80", "60"], ["70"], "70."),
        qItem("ig2_4", "4. Iri na atọ = {dash1}", 1, ["13", "30", "31"], ["13"], "10 + 3 = 13."),
        qItem("ig2_5", "5. Otu narị na iri asatọ na atọ = {dash1}", 1, ["183", "138", "83"], ["183"], "100 + 80 + 3 = 183."),
        qItem("ig2_6", "6. Iri ise na asatọ = {dash1}", 1, ["58", "85", "68"], ["58"], "50 + 8 = 58.")
      ]
    },
    {
      subjectId: "comp_week2",
      subjectTitle: "WEEK 2: COMPUTER STUDIES",
      topic: "Data and System Unit",
      questions: [
        qItem("cp2_1", "1. Information not yet processed is {dash1}", 1, ["news", "data", "fake"], ["data"], "Data is raw facts."),
        qItem("cp2_2", "2. Data is stored in the {dash1}", 1, ["computer", "radio", "sun"], ["computer"], "Stored in computers."),
        qItem("cp2_3", "3. {dash1} processes data in computer.", 1, ["CPU", "mouse", "cable"], ["CPU"], "Central Processing Unit."),
        qItem("cp2_4", "4. Another name for CPU is {dash1}", 1, ["System unit", "Area unit", "Control board"], ["System unit"], "System unit.")
      ]
    },
    {
      subjectId: "bst_week2",
      subjectTitle: "WEEK 2: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Change in Nature",
      questions: [
        qItem("bst2_1", "1. Two types of change are {dash1} and {dash2}", 2, ["temporal", "permanent", "transfer"], ["temporal", "permanent"], "Temporal and permanent."),
        qItem("bst2_2", "2. {dash1} change can be reversed to the original form.", 1, ["temporal", "permanent"], ["temporal"], "Temporal."),
        qItem("bst2_3", "3. A child grows to be a man is a {dash1} change.", 1, ["permanent", "transfer"], ["permanent"], "Cannot be reversed."),
        qItem("bst2_4", "4. A kitten grows to be a {dash1}", 1, ["cat", "dog", "goat"], ["cat"], "Cats.")
      ]
    },
    {
      subjectId: "phe_week2",
      subjectTitle: "WEEK 2: PHYSICAL AND HEALTH EDUCATION",
      topic: "Athletics: Table Tennis",
      questions: [
        qItem("phe2_1", "1. How many people play singles table tennis? {dash1}", 1, ["2", "7", "4"], ["2"], "2 persons."),
        qItem("phe2_2", "2. The table is always in {dash1} shape.", 1, ["rectangular", "circle", "square"], ["rectangular"], "Rectangular."),
        qItem("phe2_3", "3. {dash1} and {dash2} are used to play the game.", 2, ["bat", "ball", "tyre"], ["bat", "ball"], "Bat and ball."),
        qItem("phe2_4", "4. To start the game, the player makes a {dash1}", 1, ["service", "play out", "punch"], ["service"], "Service.")
      ]
    },
    {
      subjectId: "cca_week2",
      subjectTitle: "WEEK 2: CULTURAL AND CREATIVE ARTS",
      topic: "Art and Music",
      questions: [
        qItem("cca2_1", "1. Art is expressing skill in {dash1}, {dash2}, {dash3} and {dash4}", 4, ["painting", "craft", "music", "theatre", "fighting"], ["painting", "craft", "music", "theatre"], "Art skills."),
        qItem("cca2_2", "2. Art work are beneficial to man: {dash1}", 1, ["True", "False"], ["True"], "Beneficial."),
        qItem("cca2_3", "3. Music is a part of {dash1}", 1, ["art", "building", "wrestling"], ["art"], "Auditory art."),
        qItem("cca2_4", "4. Music is an organized {dash1}", 1, ["sound", "noise", "fight"], ["sound"], "Pleasant sound.")
      ]
    },
    {
      subjectId: "agric_week2",
      subjectTitle: "WEEK 2: AGRICULTURAL SCIENCE",
      topic: "Branches of Agriculture",
      questions: [
        qItem("ag2_1", "1. Agriculture deals with {dash1} and {dash2} production.", 2, ["crop", "animal", "shoe"], ["crop", "animal"], "Crops and livestock."),
        qItem("ag2_2", "2. The person who plants crops is called a {dash1}", 1, ["farmer", "trader", "pastor"], ["farmer"], "Farmer."),
        qItem("ag2_3", "3. {dash1}, {dash2}, {dash3} and {dash4} are crops produce.", 4, ["yam", "maize", "rice", "cassava", "cement"], ["yam", "maize", "rice", "cassava"], "Crops produce."),
        qItem("ag2_4", "4. Agriculture has {dash1} main branches.", 1, ["2", "6", "8"], ["2"], "Two branches.")
      ]
    },
    {
      subjectId: "he_week2",
      subjectTitle: "WEEK 2: HOME ECONOMICS",
      topic: "Cooking Methods",
      questions: [
        qItem("he2_1", "1. Foods are either eaten raw or {dash1}", 1, ["cooked", "planted", "thrown"], ["cooked"], "Cooked."),
        qItem("he2_2", "2. {dash1}, {dash2} and {dash3} are ways of cooking food.", 3, ["boiling", "frying", "roasting", "washing"], ["boiling", "frying", "roasting"], "Cooking ways."),
        qItem("he2_3", "3. {dash1} is cooking with water on fire.", 1, ["boiling", "smoking", "frying"], ["boiling"], "Boiling."),
        qItem("he2_4", "4. We use {dash1} for frying.", 1, ["gas", "petrol", "water"], ["gas"], "Gas or clean stove."),
        qItem("he2_5", "5. {dash1} is placing food directly on heat/fire.", 1, ["roasting", "frying", "boiling"], ["roasting"], "Roasting.")
      ]
    },
    {
      subjectId: "crs_week2",
      subjectTitle: "WEEK 2: CHRISTIAN RELIGIOUS STUDIES",
      topic: "Children of One Father",
      questions: [
        qItem("crs2_1", "1. {dash1} and {dash2} were the first parents of the world.", 2, ["Adam", "Eve", "Noah"], ["Adam", "Eve"], "Adam and Eve."),
        qItem("crs2_2", "2. The first {dash1} God created was Adam.", 1, ["man", "woman", "God"], ["man"], "First man."),
        qItem("crs2_3", "3. Those who are in {dash1} are God's children.", 1, ["Jesus", "Noah", "Abel"], ["Jesus"], "In Jesus Christ."),
        qItem("crs2_4", "4. We are God's children by {dash1}", 1, ["believing", "killing", "praying only"], ["believing"], "Faith and belief.")
      ]
    },
    {
      subjectId: "hist_week2",
      subjectTitle: "WEEK 2: HISTORY",
      topic: "Early Regions of Nigeria",
      questions: [
        qItem("h2_1", "1. Four regions in early Nigeria: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["Eastern", "Western", "Northern", "Mid-Western", "Lagos"], ["Eastern", "Western", "Northern", "Mid-Western"], "Four regions."),
        qItem("h2_2", "2. The regions were created by the {dash1}", 1, ["colonialists", "pastors", "Nigerians"], ["colonialists"], "British colonialists."),
        qItem("h2_3", "3. {dash1} and {dash2} protectorates were amalgamated.", 2, ["North", "South", "River"], ["North", "South"], "North and South."),
        qItem("h2_4", "4. The amalgamation took place in {dash1}", 1, ["1914", "1940", "2020"], ["1914"], "1914.")
      ]
    },
    {
      subjectId: "civic_week2",
      subjectTitle: "WEEK 2: CIVIC EDUCATION",
      topic: "Culture and Languages",
      questions: [
        qItem("civ2_1", "1. The people's way of life is {dash1}", 1, ["culture", "industry", "religion"], ["culture"], "Culture."),
        qItem("civ2_2", "2. Elements of culture include {dash1}, {dash2} and {dash3}", 3, ["language", "food", "clothing", "car"], ["language", "food", "clothing"], "Elements."),
        qItem("civ2_3", "3. Three major languages in Nigeria: {dash1}, {dash2} and {dash3}", 3, ["Hausa", "Igbo", "Yoruba", "English"], ["Hausa", "Igbo", "Yoruba"], "Major languages."),
        qItem("civ2_4", "4. Igbo tribe are found in the {dash1} part of Nigeria.", 1, ["Eastern", "Northern", "Western"], ["Eastern"], "Eastern.")
      ]
    },
    {
      subjectId: "soc_week2",
      subjectTitle: "WEEK 2: SOCIAL STUDIES",
      topic: "Man and Environment",
      questions: [
        qItem("soc2_1", "1. Two types of environment are {dash1} and {dash2}", 2, ["physical", "social", "outer"], ["physical", "social"], "Physical and social."),
        qItem("soc2_2", "2. Social Studies teaches about {dash1} in his environment.", 1, ["man", "plant", "god"], ["man"], "Man in surroundings."),
        qItem("soc2_3", "3. We associate with other people in the {dash1} and {dash2}", 2, ["school", "church", "room"], ["school", "church"], "Social institutions."),
        qItem("soc2_4", "4. Physical things around us include {dash1} and {dash2}", 2, ["trees", "houses", "spirits"], ["trees", "houses"], "Tangible things.")
      ]
    },
    {
      subjectId: "verb_week2",
      subjectTitle: "WEEK 2: VERBAL REASONING",
      topic: "Word Extraction",
      questions: [
        qItem("vr2_1", "1. Shoe = {dash1}", 1, ["hoe", "he", "she"], ["hoe"], "Letters inside shoe."),
        qItem("vr2_2", "2. Hate = {dash1}", 1, ["ate", "at", "hat"], ["ate"], "Extract ate."),
        qItem("vr2_3", "3. Sear = {dash1}", 1, ["ear", "sea", "are"], ["ear"], "Extract ear."),
        qItem("vr2_4", "4. Kiln = {dash1}", 1, ["kin", "in", "ill"], ["kin"], "Extract kin."),
        qItem("vr2_5", "5. Monday = {dash1}", 1, ["day", "mon"], ["day"], "Extract day."),
        qItem("vr2_6", "6. Show = {dash1}", 1, ["how", "who"], ["how"], "Extract how."),
        qItem("vr2_7", "7. Cup = {dash1}", 1, ["up", "cap"], ["up"], "Extract up."),
        qItem("vr2_8", "8. Cash = {dash1}", 1, ["ash", "as"], ["ash"], "Extract ash.")
      ]
    },
    {
      subjectId: "qr_week2",
      subjectTitle: "WEEK 2: QUANTITATIVE REASONING",
      topic: "Roman Numerals",
      questions: [
        qItem("qr2_1", "1. XI = {dash1}", 1, ["11", "9"], ["11"], "10 + 1 = 11."),
        qItem("qr2_2", "2. XL = {dash1}", 1, ["40", "60"], ["40"], "50 - 10 = 40."),
        qItem("qr2_3", "3. VIII = {dash1}", 1, ["8", "7"], ["8"], "5 + 3 = 8."),
        qItem("qr2_4", "4. IV = {dash1}", 1, ["4", "6"], ["4"], "5 - 1 = 4."),
        qItem("qr2_5", "5. XXV = {dash1}", 1, ["25", "30"], ["25"], "10 + 10 + 5 = 25."),
        qItem("qr2_6", "6. XVI = {dash1}", 1, ["16", "14"], ["16"], "10 + 5 + 1 = 16."),
        qItem("qr2_7", "7. IX = {dash1}", 1, ["9", "11"], ["9"], "10 - 1 = 9."),
        qItem("qr2_8", "8. XIV = {dash1}", 1, ["14", "16"], ["14"], "10 + 4 = 14.")
      ]
    },
    {
      subjectId: "fr_week2",
      subjectTitle: "DEUXIEME SEMAINE: FRENCH",
      topic: "Les Nombres en Chiffres",
      questions: [
        qItem("fr2_1", "1. Dix = {dash1}", 1, ["10", "15"], ["10"], "10."),
        qItem("fr2_2", "2. Vingt = {dash1}", 1, ["20", "16"], ["20"], "20."),
        qItem("fr2_3", "3. Dix-sept = {dash1}", 1, ["17", "11"], ["17"], "17."),
        qItem("fr2_4", "4. Seize = {dash1}", 1, ["16", "15"], ["16"], "16."),
        qItem("fr2_5", "5. Quatre = {dash1}", 1, ["4", "14"], ["4"], "4."),
        qItem("fr2_6", "6. Six = {dash1}", 1, ["6", "10"], ["6"], "6.")
      ]
    }
  ],

  3: [
    {
      subjectId: "eng_week3",
      subjectTitle: "WEEK 3: ENGLISH STUDIES",
      topic: "Reading and Writing: Composition",
      questions: [
        qItem("eng3_1", "1. In writing 'Myself', I write my {dash1} first.", 1, ["name", "shoe"], ["name"], "Name comes first."),
        qItem("eng3_2", "2. My class is Basic {dash1}", 1, ["4", "1"], ["4"], "Basic 4.")
      ]
    },
    {
      subjectId: "math_week3",
      subjectTitle: "WEEK 3: MATHEMATICS",
      topic: "Whole Numbers Sequence",
      questions: [
        qItem("m3_1", "1. 120,000; 130,000; 140,000; {dash1}; {dash2}", 2, ["150,000", "160,000", "170,000"], ["150,000", "160,000"], "Add 10,000."),
        qItem("m3_2", "2. 900,000; 800,000; {dash1}; 600,000; 500,000", 1, ["700,000", "750,000"], ["700,000"], "Minus 100,000."),
        qItem("m3_3", "3. Twenty, thirty, forty, {dash1}, {dash2}", 2, ["fifty", "sixty", "seventy"], ["fifty", "sixty"], "Tens."),
        qItem("m3_4", "4. Three, eight, thirteen, {dash1}, {dash2}", 2, ["eighteen", "twenty-three"], ["eighteen", "twenty-three"], "Add 5."),
        qItem("m3_5", "5. 755, 762, 769, {dash1}, {dash2}", 2, ["776", "783", "780"], ["776", "783"], "Add 7."),
        qItem("m3_6", "6. 225, 325, 425, {dash1}, {dash2}", 2, ["525", "625", "725"], ["525", "625"], "Add 100.")
      ]
    },
    {
      subjectId: "igbo_week3",
      subjectTitle: "IZU UKA NKE ATO: ASUSU IGBO",
      topic: "Ejije",
      questions: [
        qItem("ig3_1", "1. Ejije bụ {dash1}", 1, ["egwuregwu nkiri", "ọrụ bekee"], ["egwuregwu nkiri"], "Egwuregwu nkiri."),
        qItem("ig3_2", "2. Ihe e ji eme ejije na-egosi ọrụ ugbo: {dash1} na {dash2}", 2, ["ọgụ", "mma ọge", "akwụkwọ"], ["ọgụ", "mma ọge"], "Ngwa ọrụ ugbo."),
        qItem("ig3_3", "3. {dash1}, {dash2} na {dash3} bụ ihe a na-akọpụta n'ubi.", 3, ["ji", "ede", "akpụ", "egbe"], ["ji", "ede", "akpụ"], "Ihe ubi."),
        qItem("ig3_4", "4. Njirimara onye agha bụ {dash1} na {dash2}", 2, ["egbe", "uwe agha", "ụgbọ"], ["egbe", "uwe agha"], "Ngwa agha.")
      ]
    },
    {
      subjectId: "comp_week3",
      subjectTitle: "WEEK 3: COMPUTER STUDIES",
      topic: "Information & Media",
      questions: [
        qItem("cp3_1", "1. The result of data processed is {dash1}", 1, ["information", "mail"], ["information"], "Information."),
        qItem("cp3_2", "2. Information gives {dash1} to data.", 1, ["meaning", "warning"], ["meaning"], "Meaning."),
        qItem("cp3_3", "3. Electronic media include {dash1}, {dash2} and {dash3}", 3, ["telephone", "television", "radio", "drum"], ["telephone", "television", "radio"], "Electronic."),
        qItem("cp3_4", "4. Non-electronic media: {dash1} and {dash2}", 2, ["town crying", "beating of drums", "satellite"], ["town crying", "beating of drums"], "Non-electronic.")
      ]
    },
    {
      subjectId: "bst_week3",
      subjectTitle: "WEEK 3: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Our Weather",
      questions: [
        qItem("bst3_1", "1. Types of weather: {dash1}, {dash2} and {dash3}", 3, ["sunny", "rainy", "cloudy", "iron"], ["sunny", "rainy", "cloudy"], "Weather."),
        qItem("bst3_2", "2. Factors affecting weather: {dash1} and {dash2}", 2, ["temperature", "wind", "sand"], ["temperature", "wind"], "Factors."),
        qItem("bst3_3", "3. Wind direction is measured using a {dash1}", 1, ["windvane", "metre"], ["windvane"], "Windvane."),
        qItem("bst3_4", "4. {dash1} measures amount of rainfall.", 1, ["raingauge", "gallon"], ["raingauge"], "Rain gauge.")
      ]
    }
  ],

  4: [
    {
      subjectId: "eng_week4",
      subjectTitle: "WEEK 4: ENGLISH STUDIES",
      topic: "Similes and Metaphors",
      questions: [
        qItem("eng4_1", "1. As cold as {dash1}", 1, ["ice", "water", "fridge"], ["ice"], "As cold as ice."),
        qItem("eng4_2", "2. As slow as a {dash1}", 1, ["snail", "snake"], ["snail"], "As slow as a snail."),
        qItem("eng4_3", "3. As sweet as {dash1}", 1, ["honey", "food"], ["honey"], "As sweet as honey."),
        qItem("eng4_4", "4. As easy as {dash1}", 1, ["ABC", "maths"], ["ABC"], "As easy as ABC."),
        qItem("eng4_5", "5. 'Nweke is an elephant' means Nweke is {dash1}", 1, ["big", "small"], ["big"], "Metaphor for big."),
        qItem("eng4_6", "6. 'He is a tortoise' means he is {dash1}", 1, ["slow", "tricky", "handsome"], ["tricky"], "Tricky/clever."),
        qItem("eng4_7", "7. 'Women are gold' means women are {dash1}", 1, ["costly", "tall", "beautiful"], ["costly"], "Very precious.")
      ]
    },
    {
      subjectId: "qr_week4",
      subjectTitle: "WEEK 4: QUANTITATIVE REASONING",
      topic: "Comparison (<, >, =)",
      questions: [
        qItem("qr4_1", "1. 100 {dash1} 200", 1, ["<", ">", "="], ["<"], "100 < 200."),
        qItem("qr4_2", "2. 80 {dash1} 70", 1, ["<", ">", "="], [">"], "80 > 70."),
        qItem("qr4_3", "3. 700 {dash1} 420", 1, ["<", ">", "="], [">"], "700 > 420."),
        qItem("qr4_4", "4. 52 {dash1} 52", 1, ["<", ">", "="], ["="], "52 = 52."),
        qItem("qr4_5", "5. 120 {dash1} 320", 1, ["<", ">", "="], ["<"], "120 < 320."),
        qItem("qr4_6", "6. 11 {dash1} 17", 1, ["<", ">", "="], ["<"], "11 < 17.")
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
        qItem("eng5_1", "1. Jude saw the house at {dash1}", 1, ["Enugu", "Onitsha", "Abuja"], ["Enugu"], "In Enugu."),
        qItem("eng5_2", "2. He used a {dash1} near their stream to compare to the house.", 1, ["tall tree", "pole", "bridge"], ["tall tree"], "A tall tree."),
        qItem("eng5_3", "3. The children usually went to the stream with their {dash1}", 1, ["catapult", "books"], ["catapult"], "Catapult."),
        qItem("eng5_4", "4. The children usually wanted to kill {dash1} perched on the tree.", 1, ["birds", "frogs"], ["birds"], "Birds on the tree."),
        qItem("eng5_5", "5. {dash1} and {dash2} were Jude's friends.", 2, ["Amechi", "Kelechi", "Emeka"], ["Amechi", "Kelechi"], "Amechi and Kelechi.")
      ]
    },
    {
      subjectId: "math_week5",
      subjectTitle: "WEEK 5: MATHEMATICS",
      topic: "Roman Numerals to Arabic Figures",
      questions: [
        qItem("m5_1", "1. XI = {dash1}", 1, ["11", "9"], ["11"], "11."),
        qItem("m5_2", "2. VII = {dash1}", 1, ["7", "8"], ["7"], "7."),
        qItem("m5_3", "3. IX = {dash1}", 1, ["9", "11"], ["9"], "9."),
        qItem("m5_4", "4. XIV = {dash1}", 1, ["14", "16"], ["14"], "14."),
        qItem("m5_5", "5. L = {dash1}", 1, ["50", "100"], ["50"], "50."),
        qItem("m5_6", "6. XXV = {dash1}", 1, ["25", "30"], ["25"], "25."),
        qItem("m5_7", "7. XIX = {dash1}", 1, ["19", "21"], ["19"], "19."),
        qItem("m5_8", "8. XL = {dash1}", 1, ["40", "60"], ["40"], "40."),
        qItem("m5_9", "9. XXX = {dash1}", 1, ["30", "40"], ["30"], "30."),
        qItem("m5_10", "10. XLV = {dash1}", 1, ["45", "55"], ["45"], "45.")
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
        qItem("eng6_1", "1. Who was the class prefect? {dash1}", 1, ["Nkem", "Adamu", "Aremu"], ["Nkem"], "Nkem was chosen."),
        qItem("eng6_2", "2. The three classmates named here are {dash1}, {dash2} and {dash3}", 3, ["Adamu", "Aremu", "Nkem", "Emeka"], ["Adamu", "Aremu", "Nkem"], "Adamu, Aremu, Nkem."),
        qItem("eng6_3", "3. They were in primary {dash1}", 1, ["4D", "3B", "5A"], ["4D"], "Primary 4D."),
        qItem("eng6_4", "4. {dash1} was good in English language and literature.", 1, ["Aremu", "Adamu"], ["Aremu"], "Aremu excelled in English."),
        qItem("eng6_5", "5. The most intelligent of the classmates was {dash1}", 1, ["Nkem", "Adamu", "Aremu"], ["Nkem"], "Nkem.")
      ]
    },
    {
      subjectId: "math_week6",
      subjectTitle: "WEEK 6: MATHEMATICS",
      topic: "Ordering Whole Numbers (< or >)",
      questions: [
        qItem("m6_1", "1. 95 {dash1} 85", 1, [">", "<"], [">"], "95 > 85."),
        qItem("m6_2", "2. 100 {dash1} 250", 1, ["<", ">"], ["<"], "100 < 250."),
        qItem("m6_3", "3. 120 {dash1} 110", 1, [">", "<"], [">"], "120 > 110."),
        qItem("m6_4", "4. 46 {dash1} 36", 1, [">", "<"], [">"], "46 > 36."),
        qItem("m6_5", "5. 90 {dash1} 65", 1, [">", "<"], [">"], "90 > 65."),
        qItem("m6_6", "6. 68 {dash1} 78", 1, ["<", ">"], ["<"], "68 < 78."),
        qItem("m6_7", "7. 300 {dash1} 400", 1, ["<", ">"], ["<"], "300 < 400."),
        qItem("m6_8", "8. 1000 {dash1} 600", 1, [">", "<"], [">"], "1000 > 600.")
      ]
    },
    {
      subjectId: "vr_week6",
      subjectTitle: "WEEK 6: VERBAL REASONING",
      topic: "Odd Word Out",
      questions: [
        qItem("vr6_1", "1. leg, hand, head, bag: {dash1} is the odd word.", 1, ["bag", "leg", "hand"], ["bag"], "Bag is non-living."),
        qItem("vr6_2", "2. teacher, doctor, lawyer, chairman: {dash1} is odd.", 1, ["chairman", "teacher", "doctor"], ["chairman"], "Chairman is political."),
        qItem("vr6_3", "3. barrow, stove, gas cooker, electric stove: {dash1} is odd.", 1, ["barrow", "stove", "gas cooker"], ["barrow"], "Barrow is a garden tool."),
        qItem("vr6_4", "4. radio, phone, television, bucket: {dash1} is odd.", 1, ["bucket", "radio", "phone"], ["bucket"], "Bucket is plasticware."),
        qItem("vr6_5", "5. pen, book, garri, pencil: {dash1} is odd.", 1, ["garri", "pen", "book"], ["garri"], "Garri is food.")
      ]
    }
  ],

  7: [
    {
      subjectId: "eng_week7",
      subjectTitle: "WEEK 7: MID-TERM TEST: ENGLISH STUDIES",
      topic: "Concept of Print",
      passage: {
        title: "📖 Textbook Features",
        text: "A textbook contains some features such as title, title page, table of contents, chapters, glossary, etc. Without all or some of these, a book cannot be seen as text book. Another thing, a textbook bears is the author's name and or the publishing company."
      },
      questions: [
        qItem("eng7_1", "1. {dash1}, {dash2} and {dash3} are features of a textbook.", 3, ["title", "table of contents", "glossary", "stove", "knife"], ["title", "table of contents", "glossary"], "Textbook features."),
        qItem("eng7_2", "2. The name of the book is called {dash1}", 1, ["title", "page", "leaves"], ["title"], "The title."),
        qItem("eng7_3", "3. Table of contents contains the {dash1}", 1, ["topics", "ink", "paper"], ["topics"], "Topics and chapters."),
        qItem("eng7_4", "4. Glossary contains the list of new words in the book: {dash1}", 1, ["Yes", "No"], ["Yes"], "Yes."),
        qItem("eng7_5", "5. The writer of a book is the {dash1}", 1, ["author", "controller", "preacher"], ["author"], "The author.")
      ]
    },
    {
      subjectId: "math_week7",
      subjectTitle: "WEEK 7: MID-TERM TEST: MATHEMATICS",
      topic: "Lowest Common Multiple (L.C.M)",
      questions: [
        qItem("m7_1", "1. L.C.M of 2 and 4 = {dash1}", 1, ["4", "10", "20"], ["4"], "LCM of 2 and 4 is 4."),
        qItem("m7_2", "2. L.C.M of 6 and 8 = {dash1}", 1, ["24", "20", "30"], ["24"], "LCM of 6 and 8 is 24."),
        qItem("m7_3", "3. L.C.M of 3 and 6 = {dash1}", 1, ["6", "8", "10"], ["6"], "LCM of 3 and 6 is 6."),
        qItem("m7_4", "4. L.C.M of 4 and 7 = {dash1}", 1, ["28", "12", "8"], ["28"], "4 × 7 = 28."),
        qItem("m7_5", "5. L.C.M of 2 and 8 = {dash1}", 1, ["8", "14", "17"], ["8"], "LCM of 2 and 8 is 8."),
        qItem("m7_6", "6. L.C.M of 4 and 9 = {dash1}", 1, ["36", "29", "40"], ["36"], "4 × 9 = 36.")
      ]
    },
    {
      subjectId: "igbo_week7",
      subjectTitle: "IZU UKA NKE ISII / ISAA: ASUSU IGBO",
      topic: "Abụ Nwa (Lullaby / Poem)",
      passage: {
        title: "🎵 Abụ: Nwanne m ebezila akwa",
        text: "Nwanne m ebezila akwa na nne gị na-abata.\nNwanne m ebezila akwa na nna gị na-abata.\nZụtara gị okporoko, zụtara gị azụ gbamgbam\nIrichaa ka ị rijuo afọ, kwụrụ gadagaa n'ụkwụ gị."
      },
      questions: [
        qItem("ig7_1", "1. E ji abụ a {dash1}", 1, ["eku nwa", "eriji ohuu", "eme njem"], ["eku nwa"], "E ji ya eku nwa."),
        qItem("ig7_2", "2. Kedu ndị na-abata n'abụ a? {dash1} na {dash2}", 2, ["nne", "nna", "onye nkuzi"], ["nne", "nna"], "Nne na nna."),
        qItem("ig7_3", "3. Ha ga-azụtara nwata ahụ {dash1} na {dash2}", 2, ["okporoko", "azụ gbamgbam", "akwụkwọ"], ["okporoko", "azụ gbamgbam"], "Okporoko na azụ gbamgbam.")
      ]
    },
    {
      subjectId: "fr_week7",
      subjectTitle: "SEPTIEME SEMAINE: FRENCH",
      topic: "Les Couleurs (The Colours)",
      questions: [
        qItem("fr7_1", "1. Gris = {dash1}", 1, ["ash", "red"], ["ash"], "Gris is ash/grey."),
        qItem("fr7_2", "2. Noir = {dash1}", 1, ["black", "yellow"], ["black"], "Noir is black."),
        qItem("fr7_3", "3. Blanc = {dash1}", 1, ["white", "red"], ["white"], "Blanc is white."),
        qItem("fr7_4", "4. Vert = {dash1}", 1, ["green", "purple"], ["green"], "Vert is green."),
        qItem("fr7_5", "5. Rouge = {dash1}", 1, ["red", "green"], ["red"], "Rouge is red."),
        qItem("fr7_6", "6. Bleu = {dash1}", 1, ["blue", "black"], ["blue"], "Bleu is blue.")
      ]
    },
    {
      subjectId: "comp_week7",
      subjectTitle: "MID-TERM TEST: COMPUTER STUDIES",
      topic: "The C.P.U",
      passage: {
        title: "💻 The Central Processing Unit",
        text: "The CPU is the abbreviation for Central Processing Unit. It is also called system unit. It is the brain of the computer where the memory is contained. Data are processed in the CPU of the computer before the information is displayed on the monitor for the user to see."
      },
      questions: [
        qItem("cp7_1", "1. The abbreviation for Central Processing Unit is {dash1}", 1, ["CPU", "ACP", "CPS"], ["CPU"], "C.P.U."),
        qItem("cp7_2", "2. C.P.U is also called {dash1}", 1, ["system unit", "software", "monitor"], ["system unit"], "System unit."),
        qItem("cp7_3", "3. Data are {dash1} in the CPU.", 1, ["processed", "wasted", "blocked"], ["processed"], "Processed."),
        qItem("cp7_4", "4. Two types of memory are {dash1} and {dash2}", 2, ["RAM", "ROM", "CAM"], ["RAM", "ROM"], "RAM and ROM.")
      ]
    },
    {
      subjectId: "phe_week7",
      subjectTitle: "MID-TERM TEST: PHYSICAL AND HEALTH EDUCATION",
      topic: "Ball Games: Football Skills",
      questions: [
        qItem("phe7_1", "1. Moving a football accurately to desired player is {dash1}", 1, ["passing", "kick off", "off right"], ["passing"], "Passing."),
        qItem("phe7_2", "2. {dash1} is stopping a ball to take control of it.", 1, ["trapping", "heading", "catching"], ["trapping"], "Trapping."),
        qItem("phe7_3", "3. Heading means playing the ball with the {dash1}", 1, ["head", "hand", "leg"], ["head"], "Head."),
        qItem("phe7_4", "4. Throwing the ball is with the {dash1}", 1, ["hand", "head", "leg"], ["hand"], "Hand throw-in."),
        qItem("phe7_5", "5. The {dash1} catches the ball at the post.", 1, ["goal keeper", "player", "referee"], ["goal keeper"], "Goal keeper.")
      ]
    },
    {
      subjectId: "cca_week7",
      subjectTitle: "MID-TERM TEST: CULTURAL AND CREATIVE ARTS",
      topic: "Principles of Design",
      questions: [
        qItem("cca7_1", "1. Four principles of design: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["balance", "rhythm", "proportion", "harmony", "sleeping"], ["balance", "rhythm", "proportion", "harmony"], "Principles of design."),
        qItem("cca7_2", "2. Principles of design are {dash1} and {dash2} taken to make design attractive.", 2, ["considerations", "measures", "fights"], ["considerations", "measures"], "Measures taken.")
      ]
    },
    {
      subjectId: "agric_week7",
      subjectTitle: "MID-TERM TEST: AGRICULTURAL SCIENCE",
      topic: "Importance of Agriculture",
      questions: [
        qItem("ag7_1", "1. Five benefits of Agriculture: {dash1}, {dash2}, {dash3}, {dash4} and {dash5}", 5, ["food", "money", "raw materials", "clothing", "medicines", "poison"], ["food", "money", "raw materials", "clothing", "medicines"], "Benefits."),
        qItem("ag7_2", "2. {dash1} is used for cloth making.", 1, ["wool", "rice", "yam"], ["wool"], "Wool."),
        qItem("ag7_3", "3. Leather is made with animal {dash1}", 1, ["hides and skin", "root and trunk"], ["hides and skin"], "Hides and skin."),
        qItem("ag7_4", "4. Crops used for producing industrial goods are {dash1}", 1, ["raw materials", "low metals"], ["raw materials"], "Raw materials."),
        qItem("ag7_5", "5. Export crops are called {dash1} crops.", 1, ["cash", "food", "foreign"], ["cash"], "Cash crops.")
      ]
    },
    {
      subjectId: "he_week7",
      subjectTitle: "MID-TERM TEST: HOME ECONOMICS",
      topic: "Uses of Personal Belongings",
      questions: [
        qItem("he7_1", "1. {dash1} protects our bodies.", 1, ["cloth", "car", "soap"], ["cloth"], "Clothing."),
        qItem("he7_2", "2. Razor blades are used for trimming our {dash1} and {dash2}", 2, ["hairs", "nails", "throat"], ["hairs", "nails"], "Hair and nails."),
        qItem("he7_3", "3. We dry our body after bathing with a {dash1}", 1, ["towel", "shoe", "pen"], ["towel"], "Towel."),
        qItem("he7_4", "4. We bathe with {dash1} and {dash2}", 2, ["soap", "water", "sand"], ["soap", "water"], "Soap and water."),
        qItem("he7_5", "5. Books are carried in a {dash1}", 1, ["school bag", "fridge"], ["school bag"], "School bag.")
      ]
    },
    {
      subjectId: "crs_week7",
      subjectTitle: "MID-TERM TEST: CHRISTIAN RELIGIOUS STUDIES",
      topic: "God Calls Us for a Purpose",
      questions: [
        qItem("crs7_1", "1. God calls us for a {dash1}", 1, ["purpose", "killing"], ["purpose"], "A divine purpose."),
        qItem("crs7_2", "2. Obedience to God brings {dash1}, {dash2} and {dash3}", 3, ["blessing", "protection", "guidance", "sickness"], ["blessing", "protection", "guidance"], "Blessing and protection."),
        qItem("crs7_3", "3. God told {dash1} to leave his father's land.", 1, ["Abraham", "Peter", "Jesus"], ["Abraham"], "Abraham."),
        qItem("crs7_4", "4. Jonah was swallowed by a {dash1}", 1, ["fish", "lion", "goat"], ["fish"], "A great fish.")
      ]
    },
    {
      subjectId: "hist_week7",
      subjectTitle: "MID-TERM TEST: HISTORY",
      topic: "State Governors in 1967",
      questions: [
        qItem("h7_1", "1. The Head of State of Nigeria in 1967 was {dash1}", 1, ["Gowon", "General Obasanjo", "Buhari"], ["Gowon"], "General Yakubu Gowon."),
        qItem("h7_2", "2. The administrator of East Central State was {dash1}", 1, ["Ukpabi Asika", "Awolowo"], ["Ukpabi Asika"], "Ukpabi Asika."),
        qItem("h7_3", "3. {dash1} was the governor of Mid-Western State.", 1, ["Samuel Ogbemudia", "Murtala"], ["Samuel Ogbemudia"], "Samuel Ogbemudia."),
        qItem("h7_4", "4. The current governor of Kwara State is {dash1}", 1, ["AbdulRahman AbdulRazaq", "Bukola Saraki"], ["AbdulRahman AbdulRazaq"], "Gov AbdulRahman AbdulRazaq.")
      ]
    },
    {
      subjectId: "civic_week7",
      subjectTitle: "MID-TERM TEST: CIVIC EDUCATION",
      topic: "Local Government",
      questions: [
        qItem("civ7_1", "1. Local government is the {dash1} tier/level of government.", 1, ["last / third", "first", "only"], ["last / third"], "Third tier / grassroots."),
        qItem("civ7_2", "2. It is the government nearest to the {dash1}", 1, ["people", "federal"], ["people"], "Nearest to the people."),
        qItem("civ7_3", "3. Local government provides {dash1} and {dash2}", 2, ["markets", "motor parks", "airports"], ["markets", "motor parks"], "Markets and motor parks."),
        qItem("civ7_4", "4. Different {dash1} make up a local government.", 1, ["towns / communities", "states"], ["towns / communities"], "Towns and communities.")
      ]
    },
    {
      subjectId: "soc_week7",
      subjectTitle: "MID-TERM TEST: SOCIAL STUDIES",
      topic: "Our Culture",
      questions: [
        qItem("soc7_1", "1. Culture is the way of {dash1}", 1, ["life", "planting", "death"], ["life"], "Way of life."),
        qItem("soc7_2", "2. A group of people living together have one shared {dash1}", 1, ["culture", "car"], ["culture"], "Shared culture."),
        qItem("soc7_3", "3. Three elements of culture: {dash1}, {dash2} and {dash3}", 3, ["dressing", "language", "greeting", "aeroplane"], ["dressing", "language", "greeting"], "Elements of culture."),
        qItem("soc7_4", "4. Culture enables us to live together: {dash1}", 1, ["Yes", "No"], ["Yes"], "Yes.")
      ]
    },
    {
      subjectId: "verb_week7",
      subjectTitle: "MID-TERM TEST: VERBAL REASONING",
      topic: "Synonyms",
      questions: [
        qItem("vr7_1", "1. Easy = {dash1}", 1, ["simple", "good", "pure"], ["simple"], "Simple."),
        qItem("vr7_2", "2. Begin = {dash1}", 1, ["start", "come", "try"], ["start"], "Start."),
        qItem("vr7_3", "3. Wealthy = {dash1}", 1, ["rich", "short", "tall"], ["rich"], "Rich."),
        qItem("vr7_4", "4. Sincere = {dash1}", 1, ["honest", "old", "normal"], ["honest"], "Honest."),
        qItem("vr7_5", "5. Mend = {dash1}", 1, ["repair", "move", "cover"], ["repair"], "Repair."),
        qItem("vr7_6", "6. Shut = {dash1}", 1, ["close", "stop", "cover"], ["close"], "Close.")
      ]
    }
  ],

  8: [
    {
      subjectId: "math_week8",
      subjectTitle: "WEEK 8: MATHEMATICS",
      topic: "Highest Common Factor (H.C.F)",
      questions: [
        qItem("m8_1", "1. The H.C.F of 8 and 12 is {dash1}", 1, ["4", "2", "6", "8"], ["4"], "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. Greatest is 4."),
        qItem("m8_2", "2. The H.C.F of 9 and 15 is {dash1}", 1, ["3", "1", "5", "9"], ["3"], "Common factor is 3.")
      ]
    },
    {
      subjectId: "eng_week8",
      subjectTitle: "WEEK 8: ENGLISH STUDIES",
      topic: "Simple Sentences: Subject and Predicate",
      questions: [
        qItem("eng8_1", "1. In 'The swift eagle caught a snake', the Subject is {dash1} and the Predicate is {dash2}.", 2, ["The swift eagle", "caught a snake", "a snake"], ["The swift eagle", "caught a snake"], "Subject is who acts; predicate tells what happened.")
      ]
    }
  ],

  9: [
    {
      subjectId: "eng_week9",
      subjectTitle: "WEEK 9: ENGLISH STUDIES",
      topic: "Prepositions of Place",
      questions: [
        qItem("eng9_1", "1. The book is {dash1} the table, and the shoes are {dash2} the bed.", 2, ["on", "under", "inside"], ["on", "under"], "Prepositions describe location.")
      ]
    },
    {
      subjectId: "bst_week9",
      subjectTitle: "WEEK 9: BASIC SCIENCE AND TECHNOLOGY",
      topic: "Water and Water Cycle",
      questions: [
        qItem("bst9_1", "1. Water changes to vapour by {dash1} and falls as rain by {dash2}.", 2, ["evaporation", "condensation", "freezing"], ["evaporation", "condensation"], "Water cycle processes.")
      ]
    }
  ],

  10: [
    {
      subjectId: "math_week10",
      subjectTitle: "WEEK 10: MATHEMATICS",
      topic: "Perimeter and Area",
      questions: [
        qItem("m10_1", "1. Perimeter of rectangle (Length=8cm, Width=5cm) = {dash1} cm.", 1, ["26", "40", "13"], ["26"], "2 × (8 + 5) = 26cm."),
        qItem("m10_2", "2. Area of square of side 6cm = {dash1} cm².", 1, ["36", "24", "12"], ["36"], "Side × Side = 6 × 6 = 36cm².")
      ]
    },
    {
      subjectId: "comp_week10",
      subjectTitle: "WEEK 10: COMPUTER STUDIES",
      topic: "Input and Output Devices",
      questions: [
        qItem("cp10_1", "1. Keyboard is an {dash1} device, while printer is an {dash2} device.", 2, ["input", "output", "storage"], ["input", "output"], "Keyboard feeds data in; printer gives physical copies out.")
      ]
    }
  ],

  11: [
    {
      subjectId: "exam_phe",
      subjectTitle: "END TERM TEST: PHYSICAL AND HEALTH EDUCATION",
      topic: "Jumps, Races & First Aid",
      questions: [
        qItem("ephe_1", "1. Types of jump are {dash1} and {dash2}", 2, ["high", "long", "push", "short"], ["high", "long"], "High jump and long jump."),
        qItem("ephe_2", "2. {dash1} and {dash2} are types of race.", 2, ["relay", "marathon", "football"], ["relay", "marathon"], "Relay and marathon."),
        qItem("ephe_3", "3. Four things found in a first aid box: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["cotton wool", "razor", "paracetamol", "GIV", "stone", "pen"], ["cotton wool", "razor", "paracetamol", "GIV"], "First aid supplies."),
        qItem("ephe_4", "4. The judge in a football match is the {dash1}", 1, ["referee", "goal keeper", "trader"], ["referee"], "The referee.")
      ]
    },
    {
      subjectId: "exam_cca",
      subjectTitle: "END TERM TEST: CULTURAL AND CREATIVE ARTS",
      topic: "Visual Arts, Colours and Shapes",
      questions: [
        qItem("ecca_1", "1. Examples of visual arts are {dash1}, {dash2} and {dash3}", 3, ["drawing", "painting", "graphics", "broadcasting"], ["drawing", "painting", "graphics"], "Visual arts."),
        qItem("ecca_2", "2. Secondary colours are {dash1}, {dash2} and {dash3}", 3, ["orange", "green", "purple", "red", "blue"], ["orange", "green", "purple"], "Secondary colours."),
        qItem("ecca_3", "3. Four types of shapes: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["circle", "square", "triangle", "rectangle", "sand"], ["circle", "square", "triangle", "rectangle"], "Geometric shapes.")
      ]
    },
    {
      subjectId: "exam_agric",
      subjectTitle: "END TERM TEST: AGRICULTURAL SCIENCE",
      topic: "Fishing, Crops and Animals",
      questions: [
        qItem("eag_1", "1. We use {dash1} and {dash2} in fishing.", 2, ["hook", "net", "hoe", "broom"], ["hook", "net"], "Fishing equipment."),
        qItem("eag_2", "2. Fruits I know: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["orange", "mango", "apple", "banana"], ["orange", "mango", "apple", "banana"], "Edible fruits."),
        qItem("eag_3", "3. Domestic animals: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["goat", "cow", "sheep", "pig"], ["goat", "cow", "sheep", "pig"], "Farm animals."),
        qItem("eag_4", "4. Two branches of Agriculture: {dash1} and {dash2}", 2, ["crops farming", "animals farming", "books farming"], ["crops farming", "animals farming"], "Crops and livestock.")
      ]
    },
    {
      subjectId: "exam_hec",
      subjectTitle: "END TERM TEST: HOME ECONOMICS",
      topic: "Body Parts, Cooking and Management",
      questions: [
        qItem("ehe_1", "1. Body is divided into three parts: {dash1}, {dash2} and {dash3}", 3, ["head", "trunk", "limbs", "eyes"], ["head", "trunk", "limbs"], "Head, trunk and limbs."),
        qItem("ehe_2", "2. Three ways of cooking: {dash1}, {dash2} and {dash3}", 3, ["boiling", "frying", "smoking", "burying"], ["boiling", "frying", "smoking"], "Cooking methods."),
        qItem("ehe_3", "3. Home management deals with {dash1} and {dash2}", 2, ["care of home", "budgeting resources", "wasting money"], ["care of home", "budgeting resources"], "Care and budgeting.")
      ]
    },
    {
      subjectId: "exam_crs",
      subjectTitle: "END TERM TEST: CHRISTIAN RELIGIOUS STUDIES",
      topic: "God's Word and Love",
      questions: [
        qItem("ecrs_1", "1. God talks to us through {dash1} and {dash2}", 2, ["Bible", "Angel", "cult"], ["Bible", "Angel"], "Bible and angels."),
        qItem("ecrs_2", "2. The good Samaritan went from Jerusalem to {dash1}", 1, ["Jericho", "Nigeria", "Israel"], ["Jericho"], "Jericho."),
        qItem("ecrs_3", "3. As children of our father, we should {dash1}, {dash2} and {dash3} each other.", 3, ["love", "care for", "help", "hate", "beat"], ["love", "care for", "help"], "Love, care for, and help.")
      ]
    },
    {
      subjectId: "exam_hist",
      subjectTitle: "END TERM TEST: HISTORY",
      topic: "Regions and Amalgamation",
      questions: [
        qItem("ehist_1", "1. Four former regions: {dash1}, {dash2}, {dash3} and {dash4}", 4, ["Northern", "Eastern", "Western", "Mid-Western", "Lagos"], ["Northern", "Eastern", "Western", "Mid-Western"], "Four early regions."),
        qItem("ehist_2", "2. {dash1} amalgamated the two protectorates in Nigeria.", 1, ["Lord Luggard", "Awolowo", "Azikiwe"], ["Lord Luggard"], "Lord Lugard in 1914."),
        qItem("ehist_3", "3. Three major ethnic groups: {dash1}, {dash2} and {dash3}", 3, ["Hausa", "Yoruba", "Igbo", "Igala"], ["Hausa", "Yoruba", "Igbo"], "Major groups.")
      ]
    },
    {
      subjectId: "exam_civic",
      subjectTitle: "END TERM TEST: CIVIC EDUCATION",
      topic: "Languages, Culture and Government",
      questions: [
        qItem("eciv_1", "1. Three languages in Nigeria: {dash1}, {dash2} and {dash3}", 3, ["Efik", "Igala", "Bini", "China"], ["Efik", "Igala", "Bini"], "Nigerian languages."),
        qItem("eciv_2", "2. Places to respect: {dash1}, {dash2} and {dash3}", 3, ["church", "mosque", "shrine", "car"], ["church", "mosque", "shrine"], "Holy places."),
        qItem("eciv_3", "3. Elements of culture: {dash1}, {dash2} and {dash3}", 3, ["language", "food", "clothing", "religion"], ["language", "food", "clothing"], "Cultural elements."),
        qItem("eciv_4", "4. Three levels of government: {dash1}, {dash2} and {dash3}", 3, ["federal", "state", "local", "town"], ["federal", "state", "local"], "Levels of governance.")
      ]
    },
    {
      subjectId: "exam_sos",
      subjectTitle: "END TERM TEST: SOCIAL STUDIES",
      topic: "Religion and Social Environment",
      questions: [
        qItem("esos_1", "1. Three major religions: {dash1}, {dash2} and {dash3}", 3, ["Christian", "Islam", "tradition", "Hindu"], ["Christian", "Islam", "tradition"], "Major religions."),
        qItem("esos_2", "2. A nuclear family consists of {dash1}, {dash2} and {dash3}", 3, ["father", "mother", "children", "uncles"], ["father", "mother", "children"], "Nuclear family members."),
        qItem("esos_3", "3. Five social environments: {dash1}, {dash2}, {dash3}, {dash4} and {dash5}", 5, ["school", "market", "church", "hospital", "parks", "stadium"], ["school", "market", "church", "hospital", "parks"], "Social environments.")
      ]
    },
    {
      subjectId: "exam_vr",
      subjectTitle: "END TERM TEST: VERBAL REASONING",
      topic: "Group Names",
      questions: [
        qItem("evr_1", "1. rice, food, beans, garri: Group name is {dash1}", 1, ["food", "rice", "beans"], ["food"], "Food is the general category."),
        qItem("evr_2", "2. circle, square, triangle, shape: Group name is {dash1}", 1, ["shape", "circle", "square"], ["shape"], "Shape."),
        qItem("evr_3", "3. pink, yellow, colour, black: Group name is {dash1}", 1, ["colour", "pink", "yellow"], ["colour"], "Colour."),
        qItem("evr_4", "4. 1, 2, 3, number: Group name is {dash1}", 1, ["number", "1", "2"], ["number"], "Number."),
        qItem("evr_5", "5. Sunday, week, Monday, Tuesday: Group name is {dash1}", 1, ["week", "Sunday", "Monday"], ["week"], "Week."),
        qItem("evr_6", "6. Imo, Enugu, State, Abia: Group name is {dash1}", 1, ["State", "Imo", "Enugu"], ["State"], "State.")
      ]
    },
    {
      subjectId: "exam_qr",
      subjectTitle: "END TERM TEST: QUANTITATIVE REASONING",
      topic: "Letter Ciphers (R=1, E=2, A=3, S=4, O=5, N=6)",
      passage: {
        title: "🔢 Letter-to-Number Key",
        text: "R E A S O N = 1 2 3 4 5 6\nExample: AN = 36"
      },
      questions: [
        qItem("eqr_1", "1. SON = {dash1}", 1, ["456", "356", "452"], ["456"], "S=4, O=5, N=6 ➔ 456."),
        qItem("eqr_2", "2. EARN = {dash1}", 1, ["2316", "2315", "1236"], ["2316"], "E=2, A=3, R=1, N=6 ➔ 2316."),
        qItem("eqr_3", "3. NOR = {dash1}", 1, ["651", "561", "652"], ["651"], "N=6, O=5, R=1 ➔ 651."),
        qItem("eqr_4", "4. SO = {dash1}", 1, ["45", "54"], ["45"], "S=4, O=5 ➔ 45."),
        qItem("eqr_5", "5. RAN = {dash1}", 1, ["136", "316"], ["136"], "R=1, A=3, N=6 ➔ 136."),
        qItem("eqr_6", "6. NEAR = {dash1}", 1, ["6231", "2631"], ["6231"], "N=6, E=2, A=3, R=1 ➔ 6231."),
        qItem("eqr_7", "7. SEA = {dash1}", 1, ["423", "243"], ["423"], "S=4, E=2, A=3 ➔ 423."),
        qItem("eqr_8", "8. ARE = {dash1}", 1, ["312", "132"], ["312"], "A=3, R=1, E=2 ➔ 312.")
      ]
    }
  ]
};

// =========================================================================
// LIVE CHALKBOARD ENGINE CURRICULUM
// =========================================================================
window.LIVE_CHALK_CURRICULUM = {
  "english_week1": [
    { q: "House", a: "Houses", rule: "Regular noun: add -s to form 'Houses'.", tray: ["1 House 🏠", "Many Houses 🏠🏠"] },
    { q: "Ox", a: "Oxen", rule: "Irregular noun: Ox takes '-en' to become 'Oxen'.", tray: ["1 Ox 🐂", "Many Oxen 🐂🐂"] },
    { q: "Knife", a: "Knives", rule: "Drop -fe and add -ves to form 'Knives'.", tray: ["1 Knife 🔪", "Set of Knives 🔪🔪"] }
  ],
  "math_fractions": [
    { q: "1/2", num: 1, den: 2, a: "2/4, 3/6, 4/8", rule: "Multiply numerator & denominator by 2, 3, and 4.", multipliers: [2,3,4], tray: ["1/2 = Half", "2/4 = Two Quarters", "3/6 = Three Sixths"] },
    { q: "1/7", num: 1, den: 7, a: "2/14, 3/21, 4/28", rule: "Multiply top & bottom by 2, 3, and 4.", multipliers: [2,3,4], tray: ["1/7", "2/14", "3/21"] },
    { q: "2/5", num: 2, den: 5, a: "4/10, 6/15, 8/20", rule: "Multiply top & bottom by 2, 3, and 4.", multipliers: [2,3,4], tray: ["2/5", "4/10", "6/15"] }
  ],
  "igbo_week1": [
    { q: "Ụdaume Igbo dị ole?", a: "Asatọ (8)", rule: "Ụdaume mfe (4) + Ụdaume arọ (4) = Asatọ (8).", tray: ["Ụdaume mfe: a, e, i, o", "Ụdaume arọ: ị, ọ, u, ụ"] }
  ],
  "math_week2": [
    { q: "80, 90, __, __, 120", a: "100, 110", rule: "Count forward in tens (+10).", tray: ["+10 rule", "80+10=90", "90+10=100"] }
  ],
  "comp_week2": [
    { q: "What is Data?", a: "Raw or unprocessed facts.", rule: "Data becomes information when processed by the CPU.", tray: ["Data ➔ CPU ➔ Information"] }
  ],
  "math_week7": [
    { q: "L.C.M of 6 and 8", a: "24", rule: "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. Smallest common is 24.", tray: ["Multiples of 6: 6, 12, 18, 24", "Multiples of 8: 8, 16, 24", "L.C.M = 24"] },
    { q: "L.C.M of 4 and 7", a: "28", rule: "4 and 7 have no common factor, so multiply: 4 × 7 = 28.", tray: ["4 × 7 = 28", "L.C.M = 28"] }
  ],
  "english_week7": [
    { q: "What is a title of a book?", a: "The name given to the textbook.", rule: "The title identifies the book and gives the reader a preview of its contents.", tray: ["Title Page 📖", "Table of Contents 📑", "Glossary 🔤"] }
  ]
};

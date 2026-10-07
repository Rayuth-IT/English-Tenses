// 1. Keyword Dictionary for Interactive Modal (និយមន័យ និងរបៀបប្រើប្រាស់ពាក្យគន្លឹះ)
export const KEYWORD_DETAILS = {
  // Coordinating Conjunctions (FANBOYS)
  "for": {
    word: "For",
    translation: "ព្រោះតែ, ដោយសារតែ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to explain a reason or cause (similar to 'because').",
    usage: "Connects two independent clauses. Put a comma before 'for'.",
    structure: "Independent Clause + , for + Independent Clause",
    examples: [
      { en: "I study English, for it is an international language.", km: "ខ្ញុំរៀនភាសាអង់គ្លេស ព្រោះតែវាជាភាសាអន្តរជាតិ។" },
      { en: "I study IT, for I want to be a programmer.", km: "ខ្ញុំរៀនព័ត៌មានវិទ្យា ព្រោះតែខ្ញុំចង់ក្លាយជាអ្នកសរសេរកម្មវិធី។" }
    ]
  },
  "and": {
    word: "And",
    translation: "និង, ហើយ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to join words, phrases, or clauses that express additional information.",
    usage: "Links similar elements or independent clauses.",
    structure: "Clause 1 + , and + Clause 2",
    examples: [
      { en: "I adore you, and your whole family.", km: "ខ្ញុំស្រឡាញ់អ្នក និងក្រុមគ្រួសារទាំងមូលរបស់អ្នក។" },
      { en: "She likes coding and designing web pages.", km: "នាងចូលចិត្តការសរសេរកូដ និងការរចនាគេហទំព័រ។" }
    ]
  },
  "nor": {
    word: "Nor",
    translation: "ក៏មិន...ដែរ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to introduce a second negative idea in a sentence.",
    usage: "Requires subject-verb inversion in the clause following 'nor'.",
    structure: "Negative Clause + , nor + Auxiliary Verb + Subject + Main Verb",
    examples: [
      { en: "I don't have class, nor do I have breakfast.", km: "ខ្ញុំគ្មានថ្នាក់រៀនទេ ហើយខ្ញុំក៏មិនទាន់បានញ៉ាំអាហារពេលព្រឹកដែរ។" }
    ]
  },
  "but": {
    word: "But",
    translation: "ប៉ុន្តែ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to introduce a statement that contrasts with what was already said.",
    usage: "Connects two opposing or contrasting ideas.",
    structure: "Clause 1 + , but + Clause 2",
    examples: [
      { en: "I don't have too much money, but she still loves me honestly.", km: "ខ្ញុំមិនសូវមានលុយច្រើនទេ ប៉ុន្តែនាងនៅតែស្រឡាញ់ខ្ញុំដោយស្មោះ។" }
    ]
  },
  "or": {
    word: "Or",
    translation: "ឬ, ឬមួយ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to present alternative choices or options.",
    usage: "Links choices between words, phrases, or clauses.",
    structure: "Option A + or + Option B",
    examples: [
      { en: "You want to buy a car or a motorbike?", km: "តើអ្នកចង់ទិញរថយន្ត ឬម៉ូតូ?" }
    ]
  },
  "yet": {
    word: "Yet",
    translation: "ប៉ុន្តែ, ទោះជាយ៉ាងណាក៏ដោយ (Contrast)",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to present a surprising or unexpected contrast (similar to 'but').",
    usage: "Connects two contrasting independent clauses.",
    structure: "Clause 1 + , yet + Clause 2",
    examples: [
      { en: "They study too much, yet they failed the exam.", km: "ពួកគេខិតខំរៀនណាស់ ប៉ុន្តែទោះជាយ៉ាងណាក៏ពួកគេនៅតែប្រឡងធ្លាក់។" }
    ]
  },
  "so": {
    word: "So",
    translation: "ដូច្នេះ, ហេតុនេះ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to show a result or consequence of something.",
    usage: "Introduces the cause-and-effect relationship.",
    structure: "Cause + , so + Result",
    examples: [
      { en: "My family works hard in earning, so they have too much money.", km: "គ្រួសារខ្ញុំខិតខំប្រឹងប្រែងរកប្រាក់ ដូច្នេះហើយពួកគាត់មានប្រាក់យ៉ាងច្រើន។" },
      { en: "Today is a holiday, so some students are absent.", km: "ថ្ងៃនេះជាថ្ងៃឈប់សម្រាក ដូច្នេះសិស្សមួយចំនួនត្រូវបានអវត្តមាន។" }
    ]
  },
  "therefore": {
    word: "Therefore",
    translation: "ហេតុដូច្នេះហើយ",
    category: "Conjunctive Adverb",
    definition: "Used to state a logical conclusion or result from the previous statement.",
    usage: "Placed after a semicolon or at the beginning of a new sentence with a comma following.",
    structure: "Sentence 1; therefore, Sentence 2. OR Sentence 1. Therefore, Sentence 2.",
    examples: [
      { en: "Today is a holiday; therefore, too many students are absent.", km: "ថ្ងៃនេះជាថ្ងៃឈប់សម្រាក ហេតុដូច្នេះហើយ សិស្សជាច្រើនត្រូវបានអវត្តមាន។" },
      { en: "Today is a holiday. Therefore, many students are absent.", km: "ថ្ងៃនេះជាថ្ងៃឈប់សម្រាក។ ហេតុដូច្នេះហើយ សិស្សជាច្រើនអវត្តមាន។" }
    ]
  },
  "however": {
    word: "However",
    translation: "ទោះជាយ៉ាងណាក៏ដោយ",
    category: "Conjunctive Adverb",
    definition: "Used to introduce a point that contrasts with what was just said.",
    usage: "Can start a sentence or follow a semicolon, always separated by a comma.",
    structure: "Sentence 1. However, Sentence 2.",
    examples: [
      { en: "I always go to school late. However, I still study hard.", km: "ខ្ញុំតែងតែទៅរៀនយឺត។ ទោះជាយ៉ាងណាក៏ដោយ ខ្ញុំនៅតែខិតខំរៀន។" }
    ]
  },
  "moreover": {
    word: "Moreover / Furthermore / In addition",
    translation: "លើសពីនេះទៅទៀត, បន្ថែមពីលើនេះ",
    category: "Conjunctive Adverb",
    definition: "Used to add an extra supporting fact or point to an argument.",
    usage: "Starts a new sentence or clause to provide additional information.",
    structure: "Sentence 1. Moreover, Sentence 2.",
    examples: [
      { en: "He is intelligent; moreover, he is very hardworking.", km: "គាត់ឆ្លាតវៃ លើសពីនេះទៅទៀត គាត់ថែមទាំងខិតខំប្រឹងប្រែងខ្លាំងទៀតផង។" }
    ]
  },
  "nevertheless": {
    word: "Nevertheless / Nonetheless",
    translation: "ទោះជាយ៉ាងណាក៏ដោយ (Strong Contrast)",
    category: "Conjunctive Adverb",
    definition: "Used to express 'in spite of that' or an unexpected situation.",
    usage: "Connects two opposing sentences.",
    structure: "Clause 1; nevertheless, Clause 2.",
    examples: [
      { en: "Her mother is cooking lunch; nevertheless, she is chatting with her friends.", km: "ម្តាយរបស់នាងកំពុងដាំស្លអាហារថ្ងៃត្រង់ ទោះជាយ៉ាងណាក៏ដោយ នាងបែរជាកំពុងឆាតលេងជាមួយមិត្តភក្តិទៅវិញ។" }
    ]
  },
  "because": {
    word: "Because / Since / As",
    translation: "ដោយសារតែ, ព្រោះតែ",
    category: "Subordinating Conjunction",
    definition: "Used to introduce a dependent clause that gives the reason for the main action.",
    usage: "Forms a Complex Sentence. If placed at the start, put a comma between clauses.",
    structure: "Main Clause + because + Dependent Clause OR Because + Dependent Clause, Main Clause",
    examples: [
      { en: "I learn IT because I want to become a programmer.", km: "ខ្ញុំរៀន IT ដោយសារតែខ្ញុំចង់ក្លាយជាអ្នកសរសេរកម្មវិធី។" },
      { en: "Because I want to be a programmer, I study IT.", km: "ដោយសារតែខ្ញុំចង់ក្លាយជាអ្នកសរសេរកម្មវិធី ខ្ញុំក៏រៀន IT។" }
    ]
  },
  "although": {
    word: "Although / Even though / Though",
    translation: "ទោះបីជា...ក៏ដោយ",
    category: "Subordinating Conjunction",
    definition: "Used to introduce a concession or unexpected result.",
    usage: "Followed by a full subject-verb clause.",
    structure: "Main Clause + although + Subject + Verb",
    examples: [
      { en: "I always go to school late although I get up early.", km: "ខ្ញុំតែងតែទៅរៀនយឺត ទោះបីជាខ្ញុំភ្ញាក់ពីព្រលឹមយ៉ាងណាក៏ដោយ។" }
    ]
  },
  "despite": {
    word: "Despite / In spite of",
    translation: "ទោះបីជា...យ៉ាងណាក៏ដោយ",
    category: "Prepositional Conjunction",
    definition: "Used to express contrast, but MUST be followed by a Noun, Noun Phrase, or Gerund (V-ing).",
    usage: "Do NOT use a full subject-verb clause directly after 'despite'.",
    structure: "despite + Noun Phrase / Verb(-ing)",
    examples: [
      { en: "I always go to school late despite trying to get up early.", km: "ខ្ញុំតែងតែទៅរៀនយឺត ទោះបីជាបានព្យាយាមភ្ញាក់ពីព្រលឹមយ៉ាងណាក៏ដោយ។" }
    ]
  },
  "whereas": {
    word: "Whereas / While",
    translation: "ខណៈពេលដែល, ផ្ទុយទៅវិញ",
    category: "Subordinating Conjunction (Direct Contrast)",
    definition: "Used to compare or contrast two different facts directly.",
    usage: "Connects two contrasting statements.",
    structure: "Statement A, whereas Statement B",
    examples: [
      { en: "Her mother is cooking lunch, whereas she is chatting with her friends.", km: "ម្តាយរបស់នាងកំពុងដាំស្លអាហារថ្ងៃត្រង់ ខណៈពេលដែលនាងកំពុងឆាតលេងជាមួយមិត្តភក្តិ។" }
    ]
  },
  "both-and": {
    word: "Both ... and",
    translation: "ទាំង... និង...",
    category: "Correlative Conjunction (Parallelism)",
    definition: "Used to join two items, qualities, or actions together.",
    usage: "Maintains parallel grammatical structure for both items.",
    structure: "Both + [Adjective/Noun] + and + [Adjective/Noun]",
    examples: [
      { en: "Thany is both intelligent and gorgeous.", km: "ធានី គឺទាំងឆ្លាតវៃ និងស្អាតទាក់ទាញ។" }
    ]
  },
  "neither-nor": {
    word: "Neither ... nor",
    translation: "មិនទាំង... ហើយក៏មិន...",
    category: "Correlative Conjunction (Parallelism)",
    definition: "Used to negate two choices simultaneously.",
    usage: "Pairs two negative options together.",
    structure: "Neither + [Verb/Noun] + nor + [Verb/Noun]",
    examples: [
      { en: "I neither love her nor want to marry her.", km: "ខ្ញុំមិនស្រឡាញ់នាង ហើយក៏មិនចង់រៀបការជាមួយនាងដែរ។" }
    ]
  },
  "either-or": {
    word: "Either ... or",
    translation: "មិន... ក៏...",
    category: "Correlative Conjunction (Parallelism)",
    definition: "Used to offer a choice between two alternatives.",
    usage: "Links two distinct possibilities.",
    structure: "Either + [Noun/Verb] + or + [Noun/Verb]",
    examples: [
      { en: "You can call me either a teacher or an interpreter.", km: "អ្នកអាចហៅខ្ញុំថាជាគ្រូបង្រៀនក៏បាន ឬជាអ្នកបកប្រែក៏បាន។" }
    ]
  },
  "not-only-but-also": {
    word: "Not only ... but also",
    translation: "មិនត្រឹមតែ... ប៉ុន្តែថែមទាំង...",
    category: "Correlative Conjunction (Parallelism)",
    definition: "Used to emphasize two qualities or facts together.",
    usage: "Ensures equal grammatical emphasis on both parts.",
    structure: "Not only + [Adjective/Noun] + but also + [Adjective/Noun]",
    examples: [
      { en: "I am not only awful but also poor.", km: "ខ្ញុំមិនត្រឹមតែមិនល្អនោះទេ ប៉ុន្តែថែមទាំងក្រីក្រទៀតផង។" }
    ]
  }
};

// 2. Main Course Modules with Embedded Lesson-Specific Quizzes
export const TENSES_DATA = [
  // --- 12 TENSES ---
  // --- PRESENT SIMPLE TENSE (WITH ADVERBS OF FREQUENCY) ---
  {
    id: "present-simple",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Simple Present Tense",
    khmerTitle: "បច្ចុប្បន្នកាលធម្មតា",
    tag: "Present",
    formula: "S + Adverb of Frequency + V(s/es) + O",
    usageEn: "Used for daily habits, routines, general truths, and scheduled events. Adverbs of frequency show how often an action occurs.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពជាទម្លាប់ប្រចាំថ្ងៃ ការងារទូទៅ ឬការពិតជាទូទៅ។ ប្រើជាមួយ Adverbs of Frequency ដើម្បីបញ្ជាក់ពីកម្រិតញឹកញាប់ពី 0% ដល់ 100%។",
    
    // Position rules for UI tooltips or rendering
    adverbRules: [
      {
        rule: "Before main verbs",
        formula: "Subject + Adverb + Main Verb",
        exampleEn: "She ALWAYS gets home by 6 PM.",
        exampleKm: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច។"
      },
      {
        rule: "After 'To Be' verbs",
        formula: "Subject + am/is/are + Adverb",
        exampleEn: "He IS ALWAYS punctual for class.",
        exampleKm: "គាត់តែងតែទៀងពេលសម្រាប់ថ្នាក់រៀន។"
      },
      {
        rule: "Between Auxiliary Verb & Main Verb",
        formula: "Subject + do/does + NOT + Adverb + Verb",
        exampleEn: "They do NOT OFTEN eat out.",
        exampleKm: "ពួកគេមិនសូវញ៉ាំអានៅខាងក្រៅញឹកញាប់ទេ។"
      }
    ],

    structures: {
      affirmative: "Subject + (Adverb of Frequency) + Verb (s/es) + Object",
      negative: "Subject + do / does + not + (Adverb) + Verb (base) + Object",
      interrogative: "Do / Does + Subject + (Adverb) + Verb (base) + Object?"
    },

    // Adverbs of Frequency Reference Table Data
    frequencyChart: [
      { percentage: "100%", adverb: "Always", example: "I always brush my teeth before bed.", km: "ខ្ញុំតែងតែដុសធ្មេញមុនពេលចូលគេងជាប្រចាំ (១០០%)" },
      { percentage: "90%", adverb: "Usually / Normally / Generally", example: "She usually gets home by 6 PM.", km: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច (៩០%)" },
      { percentage: "80%", adverb: "Often / Frequently", example: "They often eat dinner together.", km: "ពួកគេញ៉ាំអាហារពេលល្ងាចជាមួយគ្នាជាញឹកញាប់ (៨០%)" },
      { percentage: "50%", adverb: "Sometimes", example: "We sometimes go to the beach on weekends.", km: "ជួនកាលពួកយើងទៅលេងឆ្នេរសមុទ្រនៅចុងសប្តាហ៍ (៥០%)" },
      { percentage: "30%", adverb: "Occasionally", example: "I occasionally drink coffee in the afternoon.", km: "ខ្ញុំផឹកកាហ្វេម្តងម្កាលនៅពេលរសៀល (៣០%)" },
      { percentage: "10%", adverb: "Seldom / Rarely / Hardly ever", example: "He rarely watches television.", km: "គាត់កម្រមើលទូរទស្សន៍ណាស់ (១០%)" },
      { percentage: "0%", adverb: "Never", example: "She never comes late to class.", km: "នាងមិនដែលមកថ្នាក់រៀនយឺតសោះឡើយ (០%)" }
    ],

    examples: [
      { en: "I ALWAYS brush my teeth before bed.", km: "ខ្ញុំតែងតែដុសធ្មេញមុនពេលចូលគេងជាប្រចាំ។" },
      { en: "She USUALLY gets home by 6 PM.", km: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច។" },
      { en: "They OFTEN eat dinner together.", km: "ពួកគេញ៉ាំអាហារពេលល្ងាចជាមួយគ្នាជាញឹកញាប់។" },
      { en: "We SOMETIMES go to the beach on weekends.", km: "ជួនកាលពួកយើងទៅលេងឆ្នេរសមុទ្រនៅចុងសប្តាហ៍។" },
      { en: "I OCCASIONALLY drink coffee in the afternoon.", km: "ខ្ញុំផឹកកាហ្វេម្តងម្កាលនៅពេលរសៀល។" },
      { en: "He RARELY watches television.", km: "គាត់កម្រមើលទូរទស្សន៍ណាស់។" },
      { en: "She NEVER comes late to class.", km: "នាងមិនដែលមកថ្នាក់រៀនយឺតសោះឡើយ។" },
      { en: "The sun rises in the east.", km: "ព្រះអាទិត្យរះនៅទិសខាងកើត (ការពិតជាទូទៅ)។" }
    ],

    timeMarkers: ["always", "usually", "often", "sometimes", "occasionally", "rarely", "seldom", "never", "every day", "every week"],

    quiz: [
      {
        question: "Which adverb represents an action happening 100% of the time?",
        options: ["Usually", "Sometimes", "Always", "Never"],
        correct: 2,
        explanation: "'Always' corresponds to 100% frequency."
      },
      {
        question: "Where does an adverb of frequency go when using the verb 'To Be'?",
        options: ["Before 'To Be'", "After 'To Be'", "At the end of sentence", "At the beginning only"],
        correct: 1,
        explanation: "Adverbs of frequency follow the verb 'To Be' (e.g., He IS always late)."
      },
      {
        question: "He _____ (10%) watches television in his room.",
        options: ["rarely", "always", "usually", "never"],
        correct: 0,
        explanation: "10% frequency corresponds to 'rarely' or 'seldom'."
      },
      {
        question: "She _____ comes late to class because she is very punctual (0%).",
        options: ["always", "often", "sometimes", "never"],
        correct: 3,
        explanation: "0% frequency corresponds to 'never'."
      },
      {
        question: "Choose the correct sentence structure:",
        options: [
          "She plays usually tennis on Sunday.",
          "She usually plays tennis on Sunday.",
          "Usually she play tennis on Sunday.",
          "She plays tennis usually on Sunday."
        ],
        correct: 1,
        explanation: "The adverb comes before the main verb ('usually plays')."
      }
    ]
  },
  {
    id: "present-continuous",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Present Continuous Tense",
    khmerTitle: "បច្ចុប្បន្នកាលកំពុងបន្ត",
    tag: "Present",
    formula: "S + am/is/are + V-ing + O",
    usageEn: "Used for actions happening right now at the moment of speaking.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលកំពុងតែកើតឡើងភ្លាមៗនៅក្នុងពេលនិយាយ។",
    structures: {
      affirmative: "Subject + am / is / are + Verb(-ing) + Object",
      negative: "Subject + am / is / are + not + Verb(-ing) + Object",
      interrogative: "Am / Is / Are + Subject + Verb(-ing) + Object?"
    },
    examples: [
      { en: "I am studying English right now.", km: "ខ្ញុំកំពុងតែរៀនភាសាអង់គ្លេសឥឡូវនេះ។" }
    ],
    timeMarkers: ["whereas", "while", "now", "at the moment"],
    quiz: [
      {
        question: "Look! The children _____ in the garden right now.",
        options: ["play", "played", "are playing", "have played"],
        correct: 2,
        explanation: "Actions happening right now use Present Continuous (are playing)."
      }
    ]
  },
  {
    id: "present-perfect",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Present Perfect Tense",
    khmerTitle: "បច្ចុប្បន្នកាលបរិបូរណ៍",
    tag: "Present",
    formula: "S + have/has + V3 + O",
    usageEn: "Used for past actions connected to the present or life experiences.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលបានកើតឡើងក្នុងអតីតកាល ប៉ុន្តែមានផលប៉ះពាល់មកដល់បច្ចុប្បន្ន។",
    structures: {
      affirmative: "Subject + have / has + Past Participle (V3) + Object",
      negative: "Subject + have / has + not + Past Participle (V3) + Object",
      interrogative: "Have / Has + Subject + Past Participle (V3) + Object?"
    },
    examples: [
      { en: "They have finished their homework.", km: "ពួកគេបានធ្វើកិច្ចការផ្ទះរបស់ពួកគេរួចរាល់ហើយ។" }
    ],
    timeMarkers: ["already", "yet", "just", "since", "for"],
    quiz: [
      {
        question: "They _____ their homework already.",
        options: ["finish", "finished", "have finished", "are finishing"],
        correct: 2,
        explanation: "Actions completed with 'already' take Present Perfect (have finished)."
      }
    ]
  },
  {
    id: "present-perfect-continuous",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Present Perfect Continuous Tense",
    khmerTitle: "បច្ចុប្បន្នកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Present",
    formula: "S + have/has + been + V-ing + O",
    usageEn: "Used for actions that started in the past and are still continuing without stopping.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលបានចាប់ផ្តើមតាំងពីអតីតកាល ហើយនៅតែបន្តធ្វើរហូតមកដល់ពេលឥឡូវនេះ។",
    structures: {
      affirmative: "Subject + have / has + been + Verb(-ing) + Object",
      negative: "Subject + have / has + not + been + Verb(-ing) + Object",
      interrogative: "Have / Has + Subject + been + Verb(-ing) + Object?"
    },
    examples: [
      { en: "He has been waiting for two hours.", km: "គាត់បានរង់ចាំអស់រយៈពេលពីរម៉ោងមកហើយ។" }
    ],
    timeMarkers: ["for", "since", "all morning"],
    quiz: [
      {
        question: "He _____ for two hours without taking a break.",
        options: ["waits", "has been waiting", "waited", "is waiting"],
        correct: 1,
        explanation: "Unbroken ongoing action starting in the past uses Present Perfect Continuous."
      }
    ]
  },
  {
    id: "past-simple",
    category: "Past Tenses (អតីតកាល)",
    title: "Simple Past Tense",
    khmerTitle: "អតីតកាលធម្មតា",
    tag: "Past",
    formula: "S + V2 + O",
    usageEn: "Used for actions that were completed at a specific time in the past.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលបានកើតឡើង និងបានបញ្ចប់សព្វគ្រប់ក្នុងអតីតកាល។",
    structures: {
      affirmative: "Subject + Verb (V2) + Object",
      negative: "Subject + did + not + Verb (base) + Object",
      interrogative: "Did + Subject + Verb (base) + Object?"
    },
    examples: [
      { en: "We watched a movie yesterday.", km: "ពួកយើងបានមើលកុនកាលពីម្សិលមិញ។" }
    ],
    timeMarkers: ["yesterday", "last night", "ago", "however", "therefore"],
    quiz: [
      {
        question: "We _____ a fantastic movie yesterday.",
        options: ["watch", "watched", "have watched", "were watching"],
        correct: 1,
        explanation: "Time word 'yesterday' specifies completed past action -> Simple Past (watched)."
      },
      {
        question: "She _____ her key last night.",
        options: ["loses", "lost", "loosing", "has lost"],
        correct: 1,
        explanation: "'Last night' indicates Simple Past -> V2 (lost)."
      }
    ]
  },
  {
    id: "past-continuous",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Continuous Tense",
    khmerTitle: "អតីតកាលកំពុងបន្ត",
    tag: "Past",
    formula: "S + was/were + V-ing + O",
    usageEn: "Used for actions in progress at a specific moment in the past.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលកំពុងតែកើតឡើងនៅចន្លោះពេលណាមួយច្បាស់លាស់ក្នុងអតីតកាល។",
    structures: {
      affirmative: "Subject + was / were + Verb(-ing) + Object",
      negative: "Subject + was / were + not + Verb(-ing) + Object",
      interrogative: "Was / Were + Subject + Verb(-ing) + Object?"
    },
    examples: [
      { en: "It was raining at 8 PM last night.", km: "ភ្លៀងកំពុងតែធ្លាក់នៅម៉ោង ៨ យប់កាលពីយប់មិញ។" }
    ],
    timeMarkers: ["while", "whereas", "when", "at that moment"],
    quiz: [
      {
        question: "It _____ when I left the office at 8 PM last night.",
        options: ["rains", "was raining", "rained", "has rained"],
        correct: 1,
        explanation: "Specific past progress moment requires Past Continuous (was raining)."
      }
    ]
  },
  {
    id: "past-perfect",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Perfect Tense",
    khmerTitle: "អតីតកាលបរិបូរណ៍",
    tag: "Past",
    formula: "S + had + V3 + O",
    usageEn: "Used for an action finished before another action in the past.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពមួយដែលបានកើតឡើង និងបញ្ចប់មុនសកម្មភាពមួយផ្សេងទៀតនៅក្នុងអតីតកាល។",
    structures: {
      affirmative: "Subject + had + Past Participle (V3) + Object",
      negative: "Subject + had + not + Past Participle (V3) + Object",
      interrogative: "Had + Subject + Past Participle (V3) + Object?"
    },
    examples: [
      { en: "The bus had left before I arrived.", km: "ឡានក្រុងបានចេញផុតទៅហើយ មុនពេលខ្ញុំទៅដល់។" }
    ],
    timeMarkers: ["before", "after", "because", "although"],
    quiz: [
      {
        question: "The bus _____ before I arrived at the station.",
        options: ["left", "has left", "had left", "was leaving"],
        correct: 2,
        explanation: "Action completed before another past event takes Past Perfect (had left)."
      }
    ]
  },
  {
    id: "past-perfect-continuous",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Perfect Continuous Tense",
    khmerTitle: "អតីតកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Past",
    formula: "S + had + been + V-ing + O",
    usageEn: "Used to show that an action was ongoing up until another point in the past.",
    usageKm: "ប្រើដើម្បីបង្ហាញថាសកម្មភាពមួយបានបន្តធ្វើជាប្រចាំរហូតដល់ចំណុចពេលមួយទៀតក្នុងអតីតកាល។",
    structures: {
      affirmative: "Subject + had + been + Verb(-ing) + Object",
      negative: "Subject + had + not + been + Verb(-ing) + Object",
      interrogative: "Had + Subject + been + Verb(-ing) + Object?"
    },
    examples: [
      { en: "She had been working for three hours before taking a break.", km: "នាងបានធ្វើការអស់រយៈពេលបីម៉ោងយ៉ាងបន្តបន្ទាប់ មុនពេលនាងសម្រាក។" }
    ],
    timeMarkers: ["for", "since", "before"],
    quiz: [
      {
        question: "She _____ for 3 hours before her manager arrived.",
        options: ["had been working", "was working", "has worked", "worked"],
        correct: 0,
        explanation: "Duration leading up to a point in the past uses Past Perfect Continuous."
      }
    ]
  },
  {
    id: "future-simple",
    category: "Future Tenses (អនាគតកាល)",
    title: "Simple Future Tense",
    khmerTitle: "អនាគតកាលធម្មតា",
    tag: "Future",
    formula: "S + will + V(base) + O",
    usageEn: "Used for spontaneous decisions, future predictions, or promises.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលនឹងកើតឡើងនៅក្នុងអនាគត ការសម្រេចចិត្តភ្លាមៗ ឬការទស្សន៍ទាយ។",
    structures: {
      affirmative: "Subject + will + Verb (base) + Object",
      negative: "Subject + will + not + Verb (base) + Object",
      interrogative: "Will + Subject + Verb (base) + Object?"
    },
    examples: [
      { en: "I will call you tomorrow.", km: "ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកនៅថ្ងៃស្អែក។" }
    ],
    timeMarkers: ["tomorrow", "so", "therefore", "soon"],
    quiz: [
      {
        question: "Don't worry, I _____ you tomorrow morning.",
        options: ["call", "called", "will call", "have called"],
        correct: 2,
        explanation: "Future promise or decision uses Simple Future (will call)."
      }
    ]
  },
  {
    id: "future-continuous",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Continuous Tense",
    khmerTitle: "អនាគតកាលកំពុងបន្ត",
    tag: "Future",
    formula: "S + will + be + V-ing + O",
    usageEn: "Used for actions that will be in progress at a specific time in the future.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលនឹងកំពុងតែកើតឡើងនៅពេលជាក់លាក់ណាមួយក្នុងអនាគត។",
    structures: {
      affirmative: "Subject + will + be + Verb(-ing) + Object",
      negative: "Subject + will + not + be + Verb(-ing) + Object",
      interrogative: "Will + Subject + be + Verb(-ing) + Object?"
    },
    examples: [
      { en: "At 9 AM tomorrow, I will be taking my exam.", km: "នៅម៉ោង ៩ ព្រឹកថ្ងៃស្អែក ខ្ញុំនឹងកំពុងតែប្រឡង។" }
    ],
    timeMarkers: ["at this time tomorrow"],
    quiz: [
      {
        question: "At 9 AM tomorrow, I _____ my exam.",
        options: ["take", "will take", "will be taking", "am taking"],
        correct: 2,
        explanation: "Ongoing action at a specific future moment uses Future Continuous."
      }
    ]
  },
  {
    id: "future-perfect",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Perfect Tense",
    khmerTitle: "អនាគតកាលបរិបូរណ៍",
    tag: "Future",
    formula: "S + will + have + V3 + O",
    usageEn: "Used for actions that will be completed before a specific time in the future.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលនឹងត្រូវបញ្ចប់រួចរាល់ មុនពេលកំណត់ណាមួយនៅអនាគត។",
    structures: {
      affirmative: "Subject + will + have + Past Participle (V3) + Object",
      negative: "Subject + will + not + have + Past Participle (V3) + Object",
      interrogative: "Will + Subject + have + Past Participle (V3) + Object?"
    },
    examples: [
      { en: "By Friday, he will have completed the project.", km: "ត្រឹមថ្ងៃសុក្រ គាត់នឹងធ្វើគម្រោងនេះរួចរាល់ហើយ។" }
    ],
    timeMarkers: ["by Friday", "by the time"],
    quiz: [
      {
        question: "By next Friday, he _____ the assignment.",
        options: ["completes", "will complete", "will have completed", "has completed"],
        correct: 2,
        explanation: "Action completed prior to a future deadline ('by next Friday') takes Future Perfect."
      }
    ]
  },
  {
    id: "future-perfect-continuous",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Perfect Continuous Tense",
    khmerTitle: "អនាគតកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Future",
    formula: "S + will + have + been + V-ing + O",
    usageEn: "Used to show the duration of an action up to a point in the future.",
    usageKm: "ប្រើដើម្បីបញ្ជាក់ពីថេរវេលានៃសកម្មភាពមួយដែលបានបន្តធ្វើរហូតដល់ចំណុចពេលណាមួយក្នុងអនាគត។",
    structures: {
      affirmative: "Subject + will + have + been + Verb(-ing) + Object",
      negative: "Subject + will + not + have + been + Verb(-ing) + Object",
      interrogative: "Will + Subject + have + been + Verb(-ing) + Object?"
    },
    examples: [
      { en: "By next month, she will have been teaching here for 5 years.", km: "ត្រឹមខែក្រោយ នាងនឹងបានបង្រៀននៅទីនេះអស់រយៈពេល ៥ ឆ្នាំហើយ។" }
    ],
    timeMarkers: ["by next month... for"],
    quiz: [
      {
        question: "By next month, she _____ here for 5 years.",
        options: ["teaches", "will teach", "will have been teaching", "is teaching"],
        correct: 2,
        explanation: "Duration up to a future point uses Future Perfect Continuous."
      }
    ]
  },

  // --- 6 ESSENTIAL GRAMMAR & WRITING MODULES ---

  {
    id: "conjunctions",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "Conjunctions (ឈ្នាប់ ៤ ប្រភេទ)",
    khmerTitle: "ការប្រើប្រាស់ Conjunctions ទាំង ៤ ប្រភេទ",
    tag: "Grammar",
    formula: "Coordination (FANBOYS) | Conjunctive Adverbs | Subordinating | Correlative",
    usageEn: "Conjunctions connect words, phrases, or clauses together. There are 4 main types in English grammar.",
    usageKm: "ឈ្នាប់ត្រូវប្រើសម្រាប់ភ្ជាប់ពាក្យ ឃ្លា ឬល្បះបញ្ចូលគ្នា។ ឈ្នាប់ក្នុងភាសាអង់គ្លេសត្រូវបានបែងចែកជា ៤ ប្រភេទធំៗ។",
    structures: {
      affirmative: "I. Coordination (FANBOYS): IC + , + Coordinator + IC = Compound Sentence\nII. Conjunctive Adverbs: IC. Adverb, IC  OR  IC; Adverb, IC\nIII. Subordinating: Dependent Clause (DC) + Main Clause (IC) = Complex Sentence\nIV. Correlative: Paired Parallel Words (Both...and, Neither...nor, etc.). Full word: IC-> Independent Clause, DC-> Dependent Clause",
                  
      negative: "Neither... nor... (មិនទាំង... ហើយក៏មិន...)",
      interrogative: "Do you want tea OR coffee?"
    },
    examples: [
      { en: "FANBOYS: I study IT, for I want to be a programmer.", km: "ខ្ញុំរៀន IT ព្រោះតែខ្ញុំចង់ក្លាយជាអ្នកសរសេរកម្មវិធី។" },
      { en: "Conjunctive Adverb: Today is a holiday; therefore, too many students are absent.", km: "ថ្ងៃនេះជាថ្ងៃឈប់សម្រាក ហេតុដូច្នេះហើយ សិស្សជាច្រើនអវត្តមាន។" },
      { en: "Subordinating: I always go to school late although I get up early.", km: "ខ្ញុំតែងតែទៅរៀនយឺត ទោះបីជាខ្ញុំភ្ញាក់ពីព្រលឹមយ៉ាងណាក៏ដោយ។" },
      { en: "Correlative: Thany is both intelligent and gorgeous.", km: "ធានី គឺទាំងឆ្លាតវៃ និងស្អាតទាក់ទាញ។" }
    ],
    timeMarkers: [
      "for", "and", "nor", "but", "or", "yet", "so",
      "therefore", "however", "moreover", "nevertheless",
      "because", "although", "despite", "whereas",
      "both-and", "neither-nor", "either-or", "not-only-but-also"
    ],
    sections: [
      {
        title: "I. Coordination Conjunctions (FANBOYS)",
        subtitle: "IC + , + Coordinator + IC = Compound Sentence",
        items: [
          { keyword: "For", usage: "I study English, for it is an international language.", note: "ព្រោះតែ/ដោយសារតែ" },
          { keyword: "And", usage: "I adore you, and your whole family.", note: "និង/ហើយ" },
          { keyword: "Nor", usage: "I don't have class, nor do I have breakfast.", note: "ក៏មិន...ដែរ" },
          { keyword: "But", usage: "I don't have too much money, but she still loves me honestly.", note: "ប៉ុន្តែ" },
          { keyword: "Or", usage: "You want to buy a car or a motorbike.", note: "ឬ" },
          { keyword: "Yet", usage: "They study too much, yet they failed the exam.", note: "ប៉ុន្តែ/ទោះជាយ៉ាងណា" },
          { keyword: "So", usage: "My family works hard in earning, so they have too much money.", note: "ដូច្នេះ/ហេតុនេះ" }
        ]
      },
      {
        title: "II. Conjunctive Adverbs",
        subtitle: "IC/Simple + ; + Conjunctive Adverb + , + IC/Simple",
        items: [
          { keyword: "And (Addition)", usage: "Furthermore, In addition, Besides, Also, Moreover, What is more", note: "បន្ថែមពីលើនេះ" },
          { keyword: "But & Yet (Contrast)", usage: "In contrast, On the contrary, On the other hand, Nevertheless, Nonetheless", note: "ផ្ទុយទៅវិញ/ទោះជាយ៉ាងណា" },
          { keyword: "Or (Alternative)", usage: "Otherwise", note: "បើពុំនោះទេ" }
        ],
        extraExamples: [
          "Today is a holiday, so some students are absent.",
          "Today is a holiday; therefore, too many students are absent.",
          "Today is a holiday. Therefore, many students are absent.",
          "Today is a holiday. Some students are absent, therefore."
        ]
      },
      {
        title: "III. Subordinating Conjunctions",
        subtitle: "Creates a Dependent Clause (DC) -> Complex Sentence",
        items: [
          { keyword: "Reason (For = Because, Since, As)", usage: "I study IT, for I want to be a programmer. / I learn IT because I want to become a programmer. / Because I want to be a programmer, I study IT." },
          { keyword: "Contrast (But = Although, Even though, Though)", usage: "I always get up early, but I still go to school late. / I always go to school late although I get up early." },
          { keyword: "Prepositional Conjunction", usage: "Despite, In spite of + Noun Phrase (e.g. I always go to school late despite trying to get up early.)" },
          { keyword: "Condition", usage: "If, In case, Unless, Provided, Suppose" },
          { keyword: "Strong Contrast (Yet = While, Whereas)", usage: "Her mother is cooking lunch, whereas she is chatting with her friends." }
        ]
      },
      {
        title: "IV. Correlative / Paired Conjunctions",
        subtitle: "Short Parallelism (4 Forms)",
        items: [
          { keyword: "Both ... and", usage: "Thany is both intelligent and gorgeous." },
          { keyword: "Neither ... nor", usage: "I neither love her nor want to marry her." },
          { keyword: "Either ... or", usage: "You can call me either a teacher or an interpreter." },
          { keyword: "Not only ... but also", usage: "I am not only awful but also poor." }
        ]
      }
    ],
    quiz: [
      {
        question: "I study IT, _____ I want to become a professional programmer.",
        options: ["for", "but", "nor", "or"],
        correct: 0,
        explanation: "'For' as a coordinator means 'because' and introduces a reason."
      },
      {
        question: "Today is a holiday; _____, many students are absent.",
        options: ["however", "therefore", "although", "but"],
        correct: 1,
        explanation: "'Therefore' is a conjunctive adverb showing logical result."
      },
      {
        question: "Thany is _____ intelligent and gorgeous.",
        options: ["either", "neither", "both", "not only"],
        correct: 2,
        explanation: "'Both ... and' is a correlative conjunction pairing two positive traits."
      }
    ]
  },
  {
    id: "linking-words",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "Linking Words",
    khmerTitle: "ពាក្យភ្ជាប់សេចក្តី (Connectors)",
    tag: "Grammar",
    formula: "Sentence 1. Linking Word, Sentence 2.",
    usageEn: "Linking words connect ideas between sentences or paragraphs to build smooth flow and logical progression.",
    usageKm: "ពាក្យភ្ជាប់សេចក្តីត្រូវបានប្រើដើម្បីភ្ជាប់គំនិតរវាងល្បះ ឬកថាខណ្ឌ ដើម្បីឱ្យអត្ថបទមានលំហូរល្អ និងមានន័យសមហេតុផល។",
    structures: {
      affirmative: "Addition: Furthermore, Moreover | Contrast: However, On the other hand | Result: Therefore, As a result",
      negative: "Despite / In spite of + Noun/V-ing",
      interrogative: "How does this link to the main topic?"
    },
    examples: [
      { en: "She studied hard. THEREFORE, she passed the exam.", km: "នាងបានខំរៀនយ៉ាងខ្លាំង។ ហេតុដូច្នេះហើយ នាងក៏បានប្រឡងជាប់។" },
      { en: "HOWEVER, tech devices can be distracting.", km: "ទោះជាយ៉ាងណាក៏ដោយ ឧបករណ៍បច្ចេកវិទ្យាអាចធ្វើឱ្យបាត់បង់ការយកចិត្តទុកដាក់។" }
    ],
    timeMarkers: ["however", "therefore", "moreover", "nevertheless", "because", "although"],
    quiz: [
      {
        question: "He didn't study hard. _____, he failed the exam.",
        options: ["However", "As a result", "Moreover", "Although"],
        correct: 1,
        explanation: "'As a result' introduces the logical consequence."
      }
    ]
  },
  {
    id: "subject-pronouns",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "Subject Pronouns",
    khmerTitle: "សព្វនាមប្រធាន (I, You, We, They, He, She, It)",
    tag: "Grammar",
    formula: "Subject Pronoun + Verb + Object",
    usageEn: "Subject pronouns replace nouns as the subject of a sentence. They perform the main action.",
    usageKm: "សព្វនាមប្រធានត្រូវបានប្រើជំនួសឱ្យនាម ដើម្បីធ្វើជាប្រធាននៃល្បះ ហើយជាអ្នកសាងសកម្មភាព។",
    structures: {
      affirmative: "First Person: I, We | Second Person: You | Third Person: He, She, It, They",
      negative: "Subject Pronoun + Auxiliary Verb + NOT + Main Verb",
      interrogative: "Auxiliary Verb + Subject Pronoun + Main Verb?"
    },
    examples: [
      { en: "I study computer science.", km: "ខ្ញុំរៀនវិទ្យាសាស្ត្រកុំព្យូទ័រ។" },
      { en: "She loves reading books.", km: "នាងចូលចិត្តអានសៀវភៅ។" },
      { en: "They are playing football.", km: "ពួកគេកំពុងលេងបាល់ទាត់។" }
    ],
    timeMarkers: ["and", "but", "so", "because"],
    quiz: [
      {
        question: "_____ goes to university every morning.",
        options: ["Him", "She", "Her", "Them"],
        correct: 1,
        explanation: "'She' is the correct Subject Pronoun for a singular female subject."
      }
    ]
  },
  {
    id: "used-to-habits",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "Used to / Get used to / Be used to",
    khmerTitle: "ការប្រើប្រាស់ Used to, Get used to, Be used to",
    tag: "Grammar",
    formula: "used to + V(base) | be used to + V-ing | get used to + V-ing",
    usageEn: "Different structures used to express past habits, current familiarity, or the process of becoming accustomed to something.",
    usageKm: "ទម្រង់ខុសៗគ្នាសម្រាប់បញ្ជាក់ពីទម្លាប់កាលពីអតីតកាល ការធ្លាប់/ស៊ាំនឹងអ្វីមួយនៅបច្ចុប្បន្ន ឬដំណើរការនៃការរៀនស៊ាំ។",
    structures: {
      affirmative: "1. Past Habit: Subject + used to + Verb (base)\n2. Familiarity: Subject + am/is/are + used to + V-ing/Noun\n3. Process: Subject + get/got + used to + V-ing/Noun",
      negative: "Subject + didn't use to + Verb (base) OR Subject + am/is/are + NOT + used to + V-ing",
      interrogative: "Did + Subject + use to + Verb (base)?"
    },
    examples: [
      { en: "I USED TO play games when I was young. (Past habit)", km: "ខ្ញុំធ្លាប់លេងហ្គេមកាលពីខ្ញុំនៅក្មេង (ឥឡូវលែងលេងហើយ)។" },
      { en: "She IS USED TO waking up early. (Current habit/familiar)", km: "នាងស៊ាំនឹងការភ្ញាក់ពីព្រលឹមហើយ។" },
      { en: "He is GETTING USED TO the new weather. (Adapting)", km: "គាត់កំពុងតែរៀនស៊ាំនឹងអាកាសធាតុថ្មីនេះ។" }
    ],
    timeMarkers: ["and", "but", "however", "because"],
    quiz: [
      {
        question: "When I was a kid, I _____ play football every evening.",
        options: ["am used to", "used to", "getting used to", "was used"],
        correct: 1,
        explanation: "'Used to + V(base)' expresses a past habit that no longer occurs."
      },
      {
        question: "She lives in London, so she _____ driving on the left.",
        options: ["used to", "is used to", "use to", "got use to"],
        correct: 1,
        explanation: "'Be used to + V-ing' expresses current familiarity."
      }
    ]
  },
  {
    id: "write-paragraph",
    category: "Writing Skills (ជំនាញតែងសេចក្តី)",
    title: "How to Write a Paragraph",
    khmerTitle: "របៀបសរសេរកថាខណ្ឌ (Paragraph Structure)",
    tag: "Writing",
    formula: "Topic Sentence + Supporting Sentences + Concluding Sentence",
    usageEn: "A good paragraph contains one main idea developed through three structured parts.",
    usageKm: "កថាខណ្ឌដែល្អត្រូវផ្តោតលើគំនិតសំខាន់មួយ ដោយចែកចេញជា ៣ ផ្នែកច្បាស់លាស់។",
    structures: {
      affirmative: "1. Topic Sentence: Introduces the main idea.\n2. Supporting Sentences (3-4): Give evidence, details, and examples.\n3. Concluding Sentence: Summarizes the point or restates topic sentence.",
      negative: "Do not add unrelated ideas in a single paragraph.",
      interrogative: "Does every sentence support the topic sentence?"
    },
    examples: [
      { 
        en: "[Topic Sentence] Learning English opens up many important opportunities for university students. [Supporting Sentence 1] First, most academic research and international textbooks are written in English, making it easier for students to access global knowledge. [Supporting Sentence 2] Second, fluency in English enhances career prospects because multinational companies look for bilingual candidates. [Supporting Sentence 3] Moreover, it allows individuals to communicate easily with people from different countries. [Concluding Sentence] In conclusion, mastering English is an essential skill that leads to both academic success and future career growth.", 
        km: "[ល្បះប្រធាន] ការរៀនភាសាអង់គ្លេសបើកឱកាសសំខាន់ៗជាច្រើនសម្រាប់និស្សិតសាកលវិទ្យាល័យ។ [ល្បះទ្រទ្រង់ទី១] ទីមួយ ការស្រាវជ្រាវសិក្សា និងសៀវភៅសិក្សាអន្តរជាតិភាគច្រើនត្រូវបានសរសេរជាភាសាអង់គ្លេស ដែលធ្វើឱ្យសិស្សងាយស្រួលទទួលបានចំណេះដឹងជាសកល។ [ល្បះទ្រទ្រង់ទី២] ទីពីរ ភាពស្ទាត់ជំនាញក្នុងភាសាអង់គ្លេសបង្កើនឱកាសការងារ ដោយសារក្រុមហ៊ុនពហុជាតិស្វែងរកបេក្ខជនដែលចេះពីរភាសា។ [ល្បះទ្រទ្រង់ទី៣] លើសពីនេះទៅទៀត វាអនុញ្ញាតឱ្យបុគ្គលម្នាក់ៗទំនាក់ទំនងយ៉ាងងាយស្រួលជាមួយមនុស្សមកពីប្រទេសផ្សេងៗគ្នា។ [ល្បះបញ្ចប់] សរុបមក ការចេះស្ទាត់ជំនាញភាសាអង់គ្លេសគឺជាជំនាញដ៏សំខាន់ដែលនាំទៅរកទាំងជោគជ័យក្នុងការសិក្សា និងការរីកចម្រើនការងារនាអនាគត។" 
      }
    ],
    sampleParagraphBreakdown: {
      topicSentence: "Learning English opens up many important opportunities for university students.",
      supportingSentences: [
        "First, most academic research and international textbooks are written in English, making it easier for students to access global knowledge.",
        "Second, fluency in English enhances career prospects because multinational companies look for bilingual candidates.",
        "Moreover, it allows individuals to communicate easily with people from different countries."
      ],
      concludingSentence: "In conclusion, mastering English is an essential skill that leads to both academic success and future career growth."
    },
    timeMarkers: ["therefore", "moreover", "for", "and", "because"],
    quiz: [
      {
        question: "What is the primary function of a Topic Sentence?",
        options: [
          "To summarize the entire essay",
          "To introduce the single main idea of the paragraph",
          "To provide detailed statistical proof",
          "To conclude the paragraph"
        ],
        correct: 1,
        explanation: "The topic sentence states the single main idea that the entire paragraph will discuss."
      }
    ]
  },
  {
    id: "write-essay",
    category: "Writing Skills (ជំនាញតែងសេចក្តី)",
    title: "How to Write an Essay",
    khmerTitle: "របៀបសរសេរអត្ថបទតែងសេចក្តី (Essay Structure)",
    tag: "Writing",
    formula: "Introduction + Body Paragraphs (2-3) + Conclusion",
    usageEn: "An essay is a multi-paragraph text analyzing or explaining a specific prompt or question.",
    usageKm: "អត្ថបទតែងសេចក្តីគឺជាសំណេរដែលមានច្រើនកថាខណ្ឌ សម្រាប់ភាគទាន និងវិភាគលើប្រធានបទណាមួយ។",
    structures: {
      affirmative: "1. Introduction: Hook + Background Info + Thesis Statement\n2. Body Paragraphs: Each has Topic Sentence + Evidence + Explanation\n3. Conclusion: Restate Thesis + Summary of Key Points + Final Thought",
      negative: "Do not introduce completely new arguments in the conclusion paragraph.",
      interrogative: "Is the thesis statement clear and well-supported?"
    },
    examples: [
      {
        en: "The Benefits of Technology in Education\n\n[Introduction]\nIn the modern digital age, technology has transformed almost every aspect of daily life, including education. Today, classroom learning goes beyond traditional chalkboards and textbooks. Technology significantly improves education by facilitating access to information and enabling flexible learning opportunities.\n\n[Body Paragraph 1 - Access to Information]\nTo begin with, technology provides students with immediate access to a vast amount of educational resources. Through the internet, learners can research academic articles, watch educational video tutorials, and access digital libraries from anywhere. For example, online databases allow students to read peer-reviewed papers that were previously unavailable in physical libraries. Consequently, this easy access deepens students' understanding of complex subjects.\n\n[Body Paragraph 2 - Flexible Learning]\nFurthermore, technology enables flexible and personalized learning pathways. Online platforms and educational applications allow students to learn at their own pace and revisit difficult materials whenever needed. Moreover, distance learning tools enable people living in remote areas to attend courses from top institutions around the world. As a result, education becomes more inclusive and adaptable to individual student needs.\n\n[Conclusion]\nIn conclusion, integrating technology into education offers immense advantages by broadening information access and providing flexible learning options. As technology continues to evolve, educational institutions should leverage these digital tools to create more interactive and effective learning environments for future generations.",
        km: "អត្ថប្រយោជន៍នៃបច្ចេកវិទ្យាក្នុងវិស័យអប់រំ\n\n[អារម្ភកថា (Introduction)]\nនៅក្នុងយុគសម័យឌីជីថលទំនើប បច្ចេកវិទ្យាបានផ្លាស់ប្តូរស្ទើរតែគ្រប់ទិដ្ឋភាពនៃជីវិតប្រចាំថ្ងៃ រួមទាំងវិស័យអប់រំផងដែរ។ បច្ចុប្បន្ននេះ ការរៀនសូត្រក្នុងថ្នាក់រៀនបានឈានហួសពីក្ដារខៀន និងសៀវភៅពុម្ពបែបបុរាណ។ បច្ចេកវិទ្យាជួយកែលម្អការអប់រំយ៉ាងខ្លាំង ដោយសម្រួលដល់ការទទួលបានព័ត៌មាន និងបង្កើតឱកាសសិក្សាប្រកបដោយភាពបត់បែន។\n\n[តួសេចក្តីទី ១ - ការទទួលបានព័ត៌មាន]\nជាដំបូង បច្ចេកវិទ្យាផ្តល់ឱ្យសិស្សនូវការទទួលបានធនធានអប់រំយ៉ាងច្រើនសន្ធឹកសន្ធាប់ភ្លាមៗ។ តាមរយៈអ៊ីនធឺណិត អ្នករៀនអាចស្រាវជ្រាវអត្ថបទសិក្សា មើលវីដេអូបង្រៀន និងចូលប្រើបណ្ណាល័យឌីជីថលពីគ្រប់ទិសទី។ ឧទាហរណ៍ ផ្ទុកទិន្នន័យអនឡាញអនុញ្ញាតឱ្យសិស្សអានឯកសារស្រាវជ្រាវដែលកាលពីមុនមិនមាននៅក្នុងបណ្ណាល័យផ្ទាល់។ ដូច្នេះហើយ ការទទួលបានព័ត៌មានយ៉ាងងាយស្រួលនេះជួយពង្រឹងការយល់ដឹងរបស់សិស្សលើមុខវិជ្ជាស្មុគស្មាញ។\n\n[តួសេចក្តីទី ២ - ការរៀនបត់បែន]\nបន្ថែមពីលើនេះ បច្ចេកវិទ្យាអនុញ្ញាតឱ្យមានវិធីសាស្ត្ររៀនសូត្រប្រកបដោយភាពបត់បែន និងស្របតាមបុគ្គលម្នាក់ៗ។ កម្មវិធីអប់រំ និងបណ្តាញអនឡាញអនុញ្ញាតឱ្យសិស្សរៀនតាមល្បឿនផ្ទាល់ខ្លួន និងរំលឹកមេរៀនលំបាកៗឡើងវិញនៅពេលណាដែលត្រូវការ។ លើសពីនេះ ឧបករណ៍រៀនពីចម្ងាយជួយឱ្យប្រជាជនរស់នៅតំបន់ដាច់ស្រយាលអាចចូលរៀនវគ្គសិក្សាពីស្ថាប័នកំពូលៗជុំវិញពិភពលោកបាន។ ជាលទ្ធផល ការអប់រំកាន់តែមានបរិយាបន្ន និងអាចបត់បែនតាមតម្រូវការរបស់សិស្សម្នាក់ៗ។\n\n[និគមនកថា (Conclusion)]\nសរុបមក ការបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងវិស័យអប់រំផ្តល់អត្ថប្រយោជន៍យ៉ាងច្រើនសន្ធឹកសន្ធាប់ ដោយពង្រីកការទទួលបានព័ត៌មាន និងផ្តល់ជម្រើសសិក្សាប្រកបដោយភាពបត់បែន។ នៅពេលដែលបច្ចេកវិទ្យាបន្តអភិវឌ្ឍ ស្ថាប័នអប់រំគួរតែទាញយកប្រយោជន៍ពីឧបករណ៍ឌីជីថលទាំងនេះ ដើម្បីបង្កើតបរិយាកាសសិក្សាដែលមានអន្តរកម្ម និងមានប្រសិទ្ធភាពជាងមុនសម្រាប់ជំនាន់ក្រោយ។"
      }
    ],
    sampleEssayBreakdown: {
      title: "The Benefits of Technology in Education",
      introduction: {
        hook: "In the modern digital age, technology has transformed almost every aspect of daily life, including education.",
        background: "Today, classroom learning goes beyond traditional chalkboards and textbooks.",
        thesis: "Technology significantly improves education by facilitating access to information and enabling flexible learning opportunities."
      },
      bodyParagraphs: [
        {
          topic: "Immediate access to vast educational resources.",
          evidence: "Online databases and digital libraries allow research from anywhere.",
          explanation: "Students gain deeper understanding of complex subjects quickly."
        },
        {
          topic: "Flexible and personalized learning pathways.",
          evidence: "E-learning platforms allow self-paced study and distance learning.",
          explanation: "Education becomes inclusive for students in remote areas."
        }
      ],
      conclusion: {
        restatedThesis: "Integrating technology into education offers immense advantages by broadening information access and providing flexible learning options.",
        finalThought: "Educational institutions should leverage digital tools to create interactive learning environments."
      }
    },
    timeMarkers: ["therefore", "however", "moreover", "although", "because"],
    quiz: [
      {
        question: "Where should the Thesis Statement typically be placed in an essay?",
        options: [
          "At the end of the Introduction paragraph",
          "At the start of Body Paragraph 2",
          "Inside the title only",
          "In the middle of the Conclusion"
        ],
        correct: 0,
        explanation: "The thesis statement states the main argument and belongs at the end of the introductory paragraph."
      }
    ]
  }
];

// 3. Helper Function to Get Quiz by Lesson ID
export const getQuizByLessonId = (lessonId) => {
  const lesson = TENSES_DATA.find((item) => item.id === lessonId);
  return lesson && lesson.quiz ? lesson.quiz : [];
};

// 4. Combined Quiz Questions for Practice Quiz tab
export const QUIZ_QUESTIONS = TENSES_DATA.flatMap((lesson, lessonIndex) =>
  (lesson.quiz || []).map((q, qIndex) => ({
    ...q,
    id: `${lesson.id || lessonIndex}-${qIndex + 1}`,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    lessonTag: lesson.tag
  }))
);
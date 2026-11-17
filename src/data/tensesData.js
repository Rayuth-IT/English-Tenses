// ==========================================
// 1. KEYWORD DICTIONARY FOR INTERACTIVE MODALS
// ==========================================
export const KEYWORD_DETAILS = {
  // Adverbs of Frequency
  "always": {
    word: "Always (100%)",
    translation: "ជាប្រចាំ, តែងតែ",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen 100% of the time without fail.",
    usage: "Placed before main verbs but after 'to be' verbs.",
    structure: "Subject + always + Verb (base/s) OR Subject + am/is/are + always",
    examples: [{ en: "I always brush my teeth before bed.", km: "ខ្ញុំតែងតែដុសធ្មេញមុនពេលចូលគេងជាប្រចាំ។" }]
  },
  "usually": {
    word: "Usually / Normally (90%)",
    translation: "ជាធម្មតា",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen around 90% of the time.",
    usage: "Placed before main verbs.",
    structure: "Subject + usually + Verb",
    examples: [{ en: "She usually gets home by 6 PM.", km: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច។" }]
  },
  "often": {
    word: "Often / Frequently (80%)",
    translation: "ញឹកញាប់",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen frequently (80%).",
    usage: "Placed before main verbs or at the end of a clause.",
    structure: "Subject + often + Verb",
    examples: [{ en: "They often eat dinner together.", km: "ពួកគេញ៉ាំអាហារពេលល្ងាចជាមួយគ្នាជាញឹកញាប់។" }]
  },
  "sometimes": {
    word: "Sometimes (50%)",
    translation: "ជួនកាល",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen half of the time (50%).",
    usage: "Can be placed at the beginning, middle, or end of a sentence.",
    structure: "Sometimes + Subject + Verb OR Subject + sometimes + Verb",
    examples: [{ en: "We sometimes go to the beach on weekends.", km: "ជួនកាលពួកយើងទៅលេងឆ្នេរសមុទ្រនៅចុងសប្តាហ៍។" }]
  },
  "occasionally": {
    word: "Occasionally (30%)",
    translation: "ម្តងម្កាល",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen only 30% of the time.",
    usage: "Placed before main verbs or at sentence boundaries.",
    structure: "Subject + occasionally + Verb",
    examples: [{ en: "I occasionally drink coffee in the afternoon.", km: "ខ្ញុំផឹកកាហ្វេម្តងម្កាលនៅពេលរសៀល។" }]
  },
  "rarely": {
    word: "Rarely / Seldom / Hardly ever (10%)",
    translation: "កម្រណាស់",
    category: "Adverb of Frequency",
    definition: "Used for actions that almost never happen (10%).",
    usage: "Placed before main verbs.",
    structure: "Subject + rarely + Verb",
    examples: [{ en: "He rarely watches television.", km: "គាត់កម្រមើលទូរទស្សន៍ណាស់។" }]
  },
  "never": {
    word: "Never (0%)",
    translation: "មិនដែលសោះ",
    category: "Adverb of Frequency",
    definition: "Used for actions that happen 0% of the time.",
    usage: "Carries a negative meaning; do not use with 'not'.",
    structure: "Subject + never + Verb",
    examples: [{ en: "She never comes late to class.", km: "នាងមិនដែលមកថ្នាក់រៀនយឺតសោះឡើយ។" }]
  },

  // Conjunctions & Connectors
  "for": {
    word: "For",
    translation: "ព្រោះតែ, ដោយសារតែ",
    category: "Coordinating Conjunction (FANBOYS)",
    definition: "Used to explain a reason or cause (similar to 'because').",
    usage: "Connects two independent clauses. Put a comma before 'for'.",
    structure: "Independent Clause + , for + Independent Clause",
    examples: [{ en: "I study English, for it is an international language.", km: "ខ្ញុំរៀនភាសាអង់គ្លេស ព្រោះតែវាជាភាសាអន្តរជាតិ។" }]
  },
  "therefore": {
    word: "Therefore",
    translation: "ហេតុដូច្នេះហើយ",
    category: "Conjunctive Adverb",
    definition: "Used to state a logical conclusion or result from the previous statement.",
    usage: "Placed after a semicolon or at the beginning of a new sentence.",
    structure: "Sentence 1; therefore, Sentence 2.",
    examples: [{ en: "Today is a holiday; therefore, too many students are absent.", km: "ថ្ងៃនេះជាថ្ងៃឈប់សម្រាក ហេតុដូច្នេះហើយ សិស្សជាច្រើនត្រូវបានអវត្តមាន។" }]
  },
  "however": {
    word: "However",
    translation: "ទោះជាយ៉ាងណាក៏ដោយ",
    category: "Conjunctive Adverb",
    definition: "Used to introduce a point that contrasts with what was just said.",
    usage: "Always separated by a comma.",
    structure: "Sentence 1. However, Sentence 2.",
    examples: [{ en: "I always go to school late. However, I still study hard.", km: "ខ្ញុំតែងតែទៅរៀនយឺត។ ទោះជាយ៉ាងណាក៏ដោយ ខ្ញុំនៅតែខិតខំរៀន។" }]
  }
};

// ==========================================
// 2. ADVERBS OF FREQUENCY CHART REFERENCE DATA
// ==========================================
export const ADVERBS_OF_FREQUENCY_CHART = [
  { percentage: "100%", adverb: "Always", example: "I always brush my teeth before bed.", km: "ខ្ញុំតែងតែដុសធ្មេញមុនពេលចូលគេងជាប្រចាំ (១០០%)" },
  { percentage: "90%", adverb: "Usually / Normally / Generally", example: "She usually gets home by 6 PM.", km: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច (៩០%)" },
  { percentage: "80%", adverb: "Often / Frequently", example: "They often eat dinner together.", km: "ពួកគេញ៉ាំអាហារពេលល្ងាចជាមួយគ្នាជាញឹកញាប់ (៨០%)" },
  { percentage: "50%", adverb: "Sometimes", example: "We sometimes go to the beach on weekends.", km: "ជួនកាលពួកយើងទៅលេងឆ្នេរសមុទ្រនៅចុងសប្តាហ៍ (៥០%)" },
  { percentage: "30%", adverb: "Occasionally", example: "I occasionally drink coffee in the afternoon.", km: "ខ្ញុំផឹកកាហ្វេម្តងម្កាលនៅពេលរសៀល (៣០%)" },
  { percentage: "10%", adverb: "Seldom / Rarely / Hardly ever", example: "He rarely watches television.", km: "គាត់កម្រមើលទូរទស្សន៍ណាស់ (១០%)" },
  { percentage: "0%", adverb: "Never", example: "She never comes late to class.", km: "នាងមិនដែលមកថ្នាក់រៀនយឺតសោះឡើយ (០%)" }
];

// ==========================================
// 3. MAIN COURSE MODULES REPOSITORY
// ==========================================
export const TENSES_DATA = [

  // ------------------------------------------
  // PART I: 12 ENGLISH TENSES
  // ------------------------------------------
  {
    id: "present-simple",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Simple Present Tense",
    khmerTitle: "បច្ចុប្បន្នកាលធម្មតា",
    tag: "Present",
    formula: "S + Adverb of Frequency + V(s/es) + O",
    usageEn: "Used for daily habits, routines, general truths, scheduled timetables, and permanent states.",
    usageKm: "ប្រើសម្រាប់ទម្លាប់ប្រចាំថ្ងៃ ការពិតជាសកល កាលវិភាគផ្លូវការ និងស្ថានភាពអចិន្ត្រៃយ៍។",
    frequencyChart: ADVERBS_OF_FREQUENCY_CHART,
    useCases: [
      { title: "1. Daily Habits & Routines", desc: "For actions done regularly.", example: "I always brush my teeth before bed." },
      { title: "2. General Truths & Facts", desc: "For scientific laws and universal realities.", example: "The sun rises in the east." },
      { title: "3. Timetables & Schedules", desc: "For fixed official times and schedules.", example: "The train leaves at 8 AM tomorrow." },
      { title: "4. Permanent States", desc: "For long-term living situations or jobs.", example: "She lives in Phnom Penh." }
    ],
    structures: {
      affirmative: "Subject + (Adverb) + Verb (s/es) + Object",
      negative: "Subject + do/does + not + Verb (base) + Object",
      interrogative: "Do/Does + Subject + Verb (base) + Object?"
    },
    examples: [
      { en: "I ALWAYS brush my teeth before bed. (100%)", km: "ខ្ញុំតែងតែដុសធ្មេញមុនពេលចូលគេងជាប្រចាំ។" },
      { en: "She USUALLY gets home by 6 PM. (90%)", km: "ជាធម្មតានាងត្រឡប់មកដល់ផ្ទះនៅម៉ោង ៦ ល្ងាច។" }
    ],
    timeMarkers: ["always", "usually", "often", "sometimes", "never", "every day"],
    quiz: [
      {
        question: "Which adverb represents an action happening 100% of the time?",
        options: ["Usually", "Sometimes", "Always", "Never"],
        correct: 2,
        explanation: "'Always' represents 100% frequency."
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
    usageEn: "Used for current actions, temporary states, annoying habits with 'always', and planned future arrangements.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពកំពុងកើតពេលនិយាយ ស្ថានភាពបណ្តោះអាសន្ន ទម្លាប់រំខាន និងផែនការអនាគតដ៏ខ្លី។",
    useCases: [
      { title: "1. Actions Happening Now", desc: "For activities occurring at the exact moment of speaking.", example: "I am studying English right now." },
      { title: "2. Temporary Actions", desc: "For short-term projects or temporary changes.", example: "He usually drives, but today he is taking the bus." },
      { title: "3. Annoying Habits", desc: "Used with 'always' to express frustration.", example: "You are always interrupting me!" },
      { title: "4. Planned Future Arrangements", desc: "For confirmed future personal plans.", example: "We are meeting our teacher tomorrow morning." }
    ],
    structures: {
      affirmative: "Subject + am/is/are + V-ing + Object",
      negative: "Subject + am/is/are + not + V-ing + Object",
      interrogative: "Am/Is/Are + Subject + V-ing + Object?"
    },
    examples: [{ en: "I am studying English right now.", km: "ខ្ញុំកំពុងតែរៀនភាសាអង់គ្លេសឥឡូវនេះ។" }],
    timeMarkers: ["now", "at the moment", "right now"],
    quiz: [{
      question: "Look! The children _____ in the garden right now.",
      options: ["play", "played", "are playing", "have played"],
      correct: 2,
      explanation: "Actions happening right now use Present Continuous (are playing)."
    }]
  },
  {
    id: "present-perfect",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Present Perfect Tense",
    khmerTitle: "បច្ចុប្បន្នកាលបរិបូរណ៍",
    tag: "Present",
    formula: "S + have/has + V3 + O",
    usageEn: "Used for life experiences, past actions with present results, recent completed actions, and ongoing durations.",
    usageKm: "ប្រើសម្រាប់បទពិសោធន៍ជីវិត សកម្មភាពអតីតកាលដែលមានផលដល់បច្ចុប្បន្ន ទើបនឹងរួច និងបន្តដល់បច្ចុប្បន្ន។",
    useCases: [
      { title: "1. Life Experiences", desc: "For actions done or not done in one's life.", example: "I have visited Angkor Wat three times." },
      { title: "2. Past Actions with Present Results", desc: "Past events impacting the current situation.", example: "She has lost her keys, so she cannot open the door." },
      { title: "3. Recent Completed Actions", desc: "Actions finished just a short time ago.", example: "They have just finished their homework." },
      { title: "4. Continuous Duration from Past", desc: "Using since or for to show ongoing time.", example: "We have lived here for five years." }
    ],
    structures: {
      affirmative: "Subject + have/has + V3 + Object",
      negative: "Subject + have/has + not + V3 + Object",
      interrogative: "Have/Has + Subject + V3 + Object?"
    },
    examples: [{ en: "They have finished their homework.", km: "ពួកគេបានធ្វើកិច្ចការផ្ទះរួចរាល់ហើយ។" }],
    timeMarkers: ["already", "yet", "just", "since", "for"],
    quiz: [{
      question: "They _____ their homework already.",
      options: ["finish", "finished", "have finished", "are finishing"],
      correct: 2,
      explanation: "Actions completed with 'already' take Present Perfect (have finished)."
    }]
  },
  {
    id: "present-perfect-continuous",
    category: "Present Tenses (បច្ចុប្បន្នកាល)",
    title: "Present Perfect Continuous Tense",
    khmerTitle: "បច្ចុប្បន្នកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Present",
    formula: "S + have/has + been + V-ing + O",
    usageEn: "Used to emphasize the unbroken duration of an ongoing action or recently stopped activities.",
    usageKm: "ប្រើដើម្បីបញ្ជាក់ពីថេរវេលាយូរអង្វែងនៃសកម្មភាព ឬសកម្មភាពទើបតែឈប់ធ្វើភ្លាមៗ។",
    useCases: [
      { title: "1. Duration of Ongoing Actions", desc: "Focusing on how long an activity has been happening.", example: "He has been waiting for two hours." },
      { title: "2. Recently Stopped Activities", desc: "Actions that just finished and left physical evidence.", example: "My hands are dirty because I have been repairing the car." }
    ],
    structures: {
      affirmative: "Subject + have/has + been + V-ing + Object",
      negative: "Subject + have/has + not + been + V-ing + Object",
      interrogative: "Have/Has + Subject + been + V-ing + Object?"
    },
    examples: [{ en: "He has been waiting for two hours.", km: "គាត់បានរង់ចាំអស់រយៈពេលពីរម៉ោងមកហើយ។" }],
    timeMarkers: ["for", "since", "all morning"],
    quiz: [{
      question: "He _____ for two hours without taking a break.",
      options: ["waits", "has been waiting", "waited", "is waiting"],
      correct: 1,
      explanation: "Unbroken ongoing action starting in the past uses Present Perfect Continuous."
    }]
  },
  {
    id: "past-simple",
    category: "Past Tenses (អតីតកាល)",
    title: "Simple Past Tense",
    khmerTitle: "អតីតកាលធម្មតា",
    tag: "Past",
    formula: "S + V2 + O",
    usageEn: "Used for completed past actions at specific times, a series of past actions, and past habits.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពបញ្ចប់នៅពេលច្បាស់លាស់ក្នុងអតីតកាល សកម្មភាពតគ្នា និងទម្លាប់អតីតកាល។",
    useCases: [
      { title: "1. Completed Past Actions", desc: "Actions finished at a specific time in the past.", example: "We watched a movie yesterday." },
      { title: "2. A Series of Past Actions", desc: "Sequential events happening one after another.", example: "She entered the room, turned on the light, and sat down." },
      { title: "3. Past Habits", desc: "Habits or routines from earlier periods in life.", example: "When I was a child, I played football every day." }
    ],
    structures: {
      affirmative: "Subject + V2 + Object",
      negative: "Subject + did + not + V1 + Object",
      interrogative: "Did + Subject + V1 + Object?"
    },
    examples: [{ en: "We watched a movie yesterday.", km: "ពួកយើងបានមើលកុនកាលពីម្សិលមិញ។" }],
    timeMarkers: ["yesterday", "last night", "ago"],
    quiz: [{
      question: "We _____ a fantastic movie yesterday.",
      options: ["watch", "watched", "have watched", "were watching"],
      correct: 1,
      explanation: "Time word 'yesterday' specifies completed past action -> Simple Past (watched)."
    }]
  },
  {
    id: "past-continuous",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Continuous Tense",
    khmerTitle: "អតីតកាលកំពុងបន្ត",
    tag: "Past",
    formula: "S + was/were + V-ing + O",
    usageEn: "Used for actions in progress at a specific past time, interrupted actions, and parallel actions.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពកំពុងធ្វើនៅពេលជាក់លាក់ក្នុងអតីតកាល សកម្មភាពមកកាត់ផ្ដាច់ និងសកម្មភាពស្របគ្នា។",
    useCases: [
      { title: "1. Specific Past Time Progress", desc: "Actions happening at a precise moment in the past.", example: "It was raining at 8 PM last night." },
      { title: "2. Interrupted Past Actions", desc: "An ongoing action interrupted by a shorter event.", example: "I was sleeping when the phone rang." },
      { title: "3. Parallel Actions", desc: "Two actions happening simultaneously in the past.", example: "While she was cooking, he was cleaning the house." }
    ],
    structures: {
      affirmative: "Subject + was/were + V-ing + Object",
      negative: "Subject + was/were + not + V-ing + Object",
      interrogative: "Was/Were + Subject + V-ing + Object?"
    },
    examples: [{ en: "It was raining at 8 PM last night.", km: "ភ្លៀងកំពុងធ្លាក់នៅម៉ោង ៨យប់មិញ។" }],
    timeMarkers: ["while", "when", "at that moment"],
    quiz: [{
      question: "It _____ when I left the office at 8 PM last night.",
      options: ["rains", "was raining", "rained", "has rained"],
      correct: 1,
      explanation: "Specific past progress moment requires Past Continuous (was raining)."
    }]
  },
  {
    id: "past-perfect",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Perfect Tense",
    khmerTitle: "អតីតកាលបរិបូរណ៍",
    tag: "Past",
    formula: "S + had + V3 + O",
    usageEn: "Used for an action completed before another past event and reported past experiences up to a point.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពបញ្ចប់មុនសកម្មភាពមួយទៀតក្នុងអតីតកាល និងបទពិសោធន៍រហូតដល់ពេលអតីតកាល។",
    useCases: [
      { title: "1. Prior Past Completion", desc: "An action finished before another past action.", example: "The train had left before we arrived at the station." },
      { title: "2. Past Experience Deadline", desc: "Achievements accomplished up to a specific past year.", example: "By 2020, she had written two novels." }
    ],
    structures: {
      affirmative: "Subject + had + V3 + Object",
      negative: "Subject + had + not + V3 + Object",
      interrogative: "Had + Subject + V3 + Object?"
    },
    examples: [{ en: "The bus had left before I arrived.", km: "ឡានក្រុងបានចេញផុតមុនពេលខ្ញុំទៅដល់។" }],
    timeMarkers: ["before", "after", "by the time"],
    quiz: [{
      question: "The bus _____ before I arrived at the station.",
      options: ["left", "has left", "had left", "was leaving"],
      correct: 2,
      explanation: "Action completed before another past event takes Past Perfect (had left)."
    }]
  },
  {
    id: "past-perfect-continuous",
    category: "Past Tenses (អតីតកាល)",
    title: "Past Perfect Continuous Tense",
    khmerTitle: "អតីតកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Past",
    formula: "S + had + been + V-ing + O",
    usageEn: "Used to show the duration of an ongoing action up until another point in the past.",
    usageKm: "ប្រើដើម្បីបង្ហាញថេរវេលានៃសកម្មភាពដែលបានបន្តធ្វើរហូតដល់ចំណុចពេលណាមួយក្នុងអតីតកាល។",
    useCases: [
      { title: "1. Past Duration Before Another Event", desc: "Measuring how long something lasted before being interrupted.", example: "She had been working for three hours before her boss arrived." }
    ],
    structures: {
      affirmative: "Subject + had + been + V-ing + Object",
      negative: "Subject + had + not + been + V-ing + Object",
      interrogative: "Had + Subject + been + V-ing + Object?"
    },
    examples: [{ en: "She had been working for three hours before her manager arrived.", km: "នាងបានធ្វើការអស់រយៈពេលបីម៉ោង មុនពេលប្រធានមកដល់។" }],
    timeMarkers: ["for", "since", "before"],
    quiz: [{
      question: "She _____ for 3 hours before her manager arrived.",
      options: ["had been working", "was working", "has worked", "worked"],
      correct: 0,
      explanation: "Duration leading up to a point in the past uses Past Perfect Continuous."
    }]
  },
  {
    id: "future-simple",
    category: "Future Tenses (អនាគតកាល)",
    title: "Simple Future Tense",
    khmerTitle: "អនាគតកាលធម្មតា",
    tag: "Future",
    formula: "S + will + V(base) + O",
    usageEn: "Used for spontaneous decisions, future predictions without solid proof, and promises or offers.",
    usageKm: "ប្រើសម្រាប់ការសម្រេចចិត្តភ្លាមៗ ការទស្សន៍ទាយ និងការសន្យាឬផ្ដល់ជូន។",
    useCases: [
      { title: "1. Spontaneous Decisions", desc: "Decisions made at the moment of speaking.", example: "The phone is ringing. I will answer it." },
      { title: "2. Future Predictions", desc: "Guessing what will happen based on opinion.", example: "I think it will rain tomorrow." },
      { title: "3. Promises and Offers", desc: "Offering voluntary help or committing to a promise.", example: "I will help you with your homework." }
    ],
    structures: {
      affirmative: "Subject + will + V1 + Object",
      negative: "Subject + will + not (won't) + V1 + Object",
      interrogative: "Will + Subject + V1 + Object?"
    },
    examples: [{ en: "I will call you tomorrow.", km: "ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកនៅថ្ងៃស្អែក។" }],
    timeMarkers: ["tomorrow", "next week", "soon"],
    quiz: [{
      question: "Don't worry, I _____ you tomorrow morning.",
      options: ["call", "called", "will call", "have called"],
      correct: 2,
      explanation: "Future promise or decision uses Simple Future (will call)."
    }]
  },
  {
    id: "future-continuous",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Continuous Tense",
    khmerTitle: "អនាគតកាលកំពុងបន្ត",
    tag: "Future",
    formula: "S + will + be + V-ing + O",
    usageEn: "Used for actions that will be in progress at a specific future moment.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលនឹងកំពុងតែកើតឡើងនៅពេលជាក់លាក់ណាមួយក្នុងអនាគត។",
    useCases: [
      { title: "1. Action in Progress at Future Time", desc: "An ongoing activity at a specific hour in the future.", example: "At 9 AM tomorrow, I will be taking my exam." }
    ],
    structures: {
      affirmative: "Subject + will + be + V-ing + Object",
      negative: "Subject + will + not + be + V-ing + Object",
      interrogative: "Will + Subject + be + V-ing + Object?"
    },
    examples: [{ en: "At 9 AM tomorrow, I will be taking my exam.", km: "នៅម៉ោង ៩ព្រឹកស្អែក ខ្ញុំនឹងកំពុងតែប្រឡង។" }],
    timeMarkers: ["at this time tomorrow"],
    quiz: [{
      question: "At 9 AM tomorrow, I _____ my exam.",
      options: ["take", "will take", "will be taking", "am taking"],
      correct: 2,
      explanation: "Ongoing action at a specific future moment uses Future Continuous."
    }]
  },
  {
    id: "future-perfect",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Perfect Tense",
    khmerTitle: "អនាគតកាលបរិបូរណ៍",
    tag: "Future",
    formula: "S + will + have + V3 + O",
    usageEn: "Used for actions that will be completed before a specific time deadline in the future.",
    usageKm: "ប្រើសម្រាប់សកម្មភាពដែលនឹងត្រូវបញ្ចប់រួចរាល់មុនពេលកំណត់ណាមួយនៅអនាគត។",
    useCases: [
      { title: "1. Completed Before Future Deadline", desc: "Tasks finished prior to a specific point in time.", example: "By next Friday, he will have completed the project." }
    ],
    structures: {
      affirmative: "Subject + will + have + V3 + Object",
      negative: "Subject + will + not + have + V3 + Object",
      interrogative: "Will + Subject + have + V3 + Object?"
    },
    examples: [{ en: "By Friday, he will have completed the project.", km: "ត្រឹមថ្ងៃសុក្រ គាត់នឹងធ្វើគម្រោងនេះរួចរាល់ហើយ។" }],
    timeMarkers: ["by Friday", "by next week"],
    quiz: [{
      question: "By next Friday, he _____ the assignment.",
      options: ["completes", "will complete", "will have completed", "has completed"],
      correct: 2,
      explanation: "Action completed prior to a future deadline takes Future Perfect."
    }]
  },
  {
    id: "future-perfect-continuous",
    category: "Future Tenses (អនាគតកាល)",
    title: "Future Perfect Continuous Tense",
    khmerTitle: "អនាគតកាលបរិបូរណ៍កំពុងបន្ត",
    tag: "Future",
    formula: "S + will + have + been + V-ing + O",
    usageEn: "Used to show the continuous duration of an action up to a specific point in the future.",
    usageKm: "ប្រើដើម្បីបញ្ជាក់ពីថេរវេលានៃសកម្មភាពដែលបន្តធ្វើរហូតដល់ចំណុចពេលណាមួយក្នុងអនាគត។",
    useCases: [
      { title: "1. Duration Up to a Future Point", desc: "Measuring continuous time leading into a future deadline.", example: "By next month, she will have been teaching here for 5 years." }
    ],
    structures: {
      affirmative: "Subject + will + have + been + V-ing + Object",
      negative: "Subject + will + not + have + been + V-ing + Object",
      interrogative: "Will + Subject + have + been + V-ing + Object?"
    },
    examples: [{ en: "By next month, she will have been teaching here for 5 years.", km: "ត្រឹមខែក្រោយ នាងនឹងបានបង្រៀននៅទីនេះអស់ ៥ឆ្នាំហើយ។" }],
    timeMarkers: ["by next month... for"],
    quiz: [{
      question: "By next month, she _____ here for 5 years.",
      options: ["teaches", "will teach", "will have been teaching", "is teaching"],
      correct: 2,
      explanation: "Duration up to a future point uses Future Perfect Continuous."
    }]
  },

  // ------------------------------------------
  // PART II: GRAMMAR ESSENTIALS
  // ------------------------------------------
  {
    id: "conjunctions",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "1. Conjunctions (ឈ្នាប់​ 4 ប្រភេទ)",
    khmerTitle: "ការប្រើប្រាស់ Conjunctions ទាំង ៤ ប្រភេទ",
    tag: "Grammar",
    formula: "Coordination | Conjunctive Adverbs | Subordinating | Correlative",
    usageEn: "Conjunctions connect words, phrases, or clauses together across 4 main grammatical categories.",
    usageKm: "ឈ្នាប់ត្រូវប្រើសម្រាប់ភ្ជាប់ពាក្យ ឃ្លា ឬល្បះបញ្ចូលគ្នា ដោយបែងចែកជា ៤ ប្រភេទធំៗ។",
    sections: [
      {
        title: "I. The 4 Categories of Conjunctions",
        items: [
          { keyword: "1. Coordinating (FANBOYS)", usage: "For, And, Nor, But, Or, Yet, So (e.g., I study IT, for I want to be a programmer.)" },
          { keyword: "2. Conjunctive Adverbs", usage: "Therefore, However, Moreover, Nevertheless (e.g., Today is a holiday; therefore, many are absent.)" },
          { keyword: "3. Subordinating Conjunctions", usage: "Because, Although, Unless, Whereas (e.g., I go to school late although I wake up early.)" },
          { keyword: "4. Correlative Conjunctions", usage: "Both...and, Neither...nor, Either...or, Not only...but also" }
        ]
      }
    ],
    structures: { affirmative: "Clause 1 + Conjunction + Clause 2" },
    examples: [{ en: "Thany is both intelligent and gorgeous.", km: "ធានី គឺទាំងឆ្លាតវៃ និងស្អាតទាក់ទាញ។" }],
    timeMarkers: ["for", "and", "but", "so", "therefore", "however"],
    quiz: [{
      question: "I study IT, _____ I want to become a professional programmer.",
      options: ["for", "but", "nor", "or"],
      correct: 0,
      explanation: "'For' as a coordinator means 'because' and introduces a reason."
    }]
  },
  {
    id: "linking-words",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "2. Linking Words",
    khmerTitle: "ពាក្យភ្ជាប់សេចក្តី (Connectors)",
    tag: "Grammar",
    formula: "Sentence 1. Linking Word, Sentence 2.",
    usageEn: "Linking words connect ideas between sentences or paragraphs to create smooth rhetorical flow.",
    usageKm: "ពាក្យភ្ជាប់សេចក្តីត្រូវបានប្រើដើម្បីភ្ជាប់គំនិតរវាងល្បះ ឬកថាខណ្ឌឱ្យមានលំហូររលូន។",
    structures: { affirmative: "Addition, Contrast, Result linkers" },
    examples: [{ en: "She studied hard. THEREFORE, she passed the exam.", km: "នាងបានខំរៀនយ៉ាងខ្លាំង។ ហេតុដូច្នេះហើយ នាងក៏បានប្រឡងជាប់។" }],
    timeMarkers: ["however", "therefore", "moreover"],
    quiz: [{
      question: "He didn't study hard. _____, he failed the exam.",
      options: ["However", "As a result", "Moreover", "Although"],
      correct: 1,
      explanation: "'As a result' introduces the logical consequence."
    }]
  },
  {
    id: "subject-pronouns",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "3. Subject Pronouns",
    khmerTitle: "សព្វនាមប្រធាន (I, You, We, They, He, She, It)",
    tag: "Grammar",
    formula: "Subject Pronoun + Verb + Object",
    usageEn: "Subject pronouns replace nouns as the subject of a sentence, performing the main verb action.",
    usageKm: "សព្វនាមប្រធានត្រូវបានប្រើជំនួសឱ្យនាម ដើម្បីធ្វើជាប្រធាននៃល្បះ និងជាអ្នកធ្វើសកម្មភាព។",
    structures: { affirmative: "I, You, We, They, He, She, It" },
    examples: [{ en: "She loves reading books.", km: "នាងចូលចិត្តអានសៀវភៅ។" }],
    timeMarkers: ["and", "but"],
    quiz: [{
      question: "_____ goes to university every morning.",
      options: ["Him", "She", "Her", "Them"],
      correct: 1,
      explanation: "'She' is the correct Subject Pronoun for a singular female subject."
    }]
  },
  {
    id: "used-to-habits",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "4. Used to / Get used to / Be used to",
    khmerTitle: "ការប្រើប្រាស់ Used to, Get used to, Be used to",
    tag: "Grammar",
    formula: "used to + V1 | be used to + V-ing | get used to + V-ing",
    usageEn: "Different structures used to express past discontinued habits, current familiarity, or adaptation.",
    usageKm: "ទម្រង់ខុសៗគ្នាសម្រាប់បញ្ជាក់ពីទម្លាប់អតីតកាល ការស៊ាំនឹងបច្ចុប្បន្ន ឬដំណើរការរៀនស៊ាំ។",
    structures: { affirmative: "used to + V1 vs. be/get used to + V-ing" },
    examples: [
      { en: "I USED TO play games when I was young.", km: "ខ្ញុំធ្លាប់លេងហ្គេមកាលពីខ្ញុំនៅក្មេង។" },
      { en: "She IS USED TO waking up early.", km: "នាងស៊ាំនឹងការភ្ញាក់ពីព្រលឹមហើយ។" }
    ],
    timeMarkers: ["when", "now"],
    quiz: [{
      question: "When I was a kid, I _____ play football every evening.",
      options: ["am used to", "used to", "getting used to", "was used"],
      correct: 1,
      explanation: "'Used to + V(base)' expresses a past habit that no longer occurs."
    }]
  },
  {
    id: "conditionals",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "5. Conditional Sentences (If-Clauses)",
    khmerTitle: "ល្បះលក្ខខណ្ឌ ( Zero, 1st, 2nd, 3rd Conditionals)",
    tag: "Grammar",
    formula: "Zero: Present/Present | 1st: Present/Will | 2nd: Past/Would | 3rd: Past Perf/Would have",
    usageEn: "Conditional sentences express scientific facts, realistic futures, unreal presents, or past regrets.",
    usageKm: "ល្បះលក្ខខណ្ឌបង្ហាញពីការពិត លទ្ធភាពអនាគត សម្មតិកម្មបច្ចុប្បន្ន និងការស្តាយក្រោយអតីតកាល។",
    sections: [
      {
        title: "I. The 4 Conditional Types",
        items: [
          { keyword: "Zero Conditional", usage: "If + Present, Present (e.g., If you heat ice, it melts.)" },
          { keyword: "First Conditional", usage: "If + Present, Will + V1 (e.g., If I study, I will pass.)" },
          { keyword: "Second Conditional", usage: "If + Past, Would + V1 (e.g., If I had money, I would travel.)" },
          { keyword: "Third Conditional", usage: "If + Past Perfect, Would have + V3 (e.g., If I had known, I would have come.)" }
        ]
      }
    ],
    structures: { affirmative: "If-Clause + Main Clause" },
    examples: [{ en: "If it rains, we will stay at home.", km: "ប្រសិនបើភ្លៀង ពួកយើងនឹងនៅក្នុងផ្ទះ។" }],
    timeMarkers: ["if", "unless"],
    quiz: [{
      question: "If I _____ enough money, I would buy a new laptop today.",
      options: ["have", "had", "will have", "had had"],
      correct: 1,
      explanation: "Second Conditional uses Simple Past 'had' in the if-clause."
    }]
  },
  {
    id: "passive-voice",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "6. Active vs. Passive Voice",
    khmerTitle: "ល្បះប្រធានសកម្ម (Active) និងល្បះកម្មបទ (Passive)",
    tag: "Grammar",
    formula: "Object + Auxiliary (Be) + V3 + (by Agent)",
    usageEn: "Passive voice focuses attention on the receiver of the action rather than the doer.",
    usageKm: "Passive Voice ផ្ដោតលើអ្នករងអំពើ ឬសកម្មភាព ជាជាងអ្នកធ្វើអំពើផ្ទាល់។",
    structures: { affirmative: "Object + am/is/are/was/were + V3" },
    examples: [{ en: "English is spoken all around the world.", km: "ភាសាអង់គ្លេសត្រូវបានគេនិយាយជុំវិញពិភពលោក។" }],
    timeMarkers: ["by", "is", "was", "been"],
    quiz: [{
      question: "This computer program _____ by a Cambodian developer in 2026.",
      options: ["created", "was created", "is creating", "has created"],
      correct: 1,
      explanation: "Past Simple Passive requires 'was/were + V3'."
    }]
  },
  {
    id: "reported-speech",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "7. Direct and Reported Speech",
    khmerTitle: "ការនិយាយផ្ទាល់ និងការរាយការណ៍ (Reported Speech)",
    tag: "Grammar",
    formula: "Subject + said/told (that) + Backshifted Tense",
    usageEn: "Reported speech conveys what someone else stated using backshifted tense rules.",
    usageKm: "ការរាយការណ៍សម្តីអ្នកដទៃ ដោយប្តូរកាលថយក្រោយមួយកម្រិត (Backshift Tense)។",
    structures: { affirmative: "Direct to Indirect backshifting" },
    examples: [{ en: "He said that he was busy.", km: "គាត់បានប្រាប់ថាគាត់រវល់។" }],
    timeMarkers: ["said", "told", "asked"],
    quiz: [{
      question: "Direct: 'I am learning React.' -> Reported: He said he _____ React.",
      options: ["is learning", "was learning", "has learned", "will learn"],
      correct: 1,
      explanation: "Present Continuous shifts to Past Continuous ('was learning')."
    }]
  },
  {
    id: "relative-clauses",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "8. Relative Clauses (Who, Which, That, Where)",
    khmerTitle: "សព្វនាមទំនាក់ទំនង (Relative Pronouns)",
    tag: "Grammar",
    formula: "Noun + Relative Pronoun + Clause",
    usageEn: "Relative clauses provide essential or descriptive information about a noun.",
    usageKm: "ប្រើដើម្បីផ្តល់ព័ត៌មានបន្ថែម ឬកំណត់អត្តសញ្ញាណនាមក្នុងល្បះ។",
    structures: { affirmative: "who, which, that, where, whose" },
    examples: [{ en: "The programmer who built this app is talented.", km: "អ្នកសរសេរកូដដែលបានបង្កើតកម្មវិធីនេះមានទេពកោសល្យ។" }],
    timeMarkers: ["who", "which", "that", "where"],
    quiz: [{
      question: "This is the hospital _____ my brother works.",
      options: ["who", "which", "where", "whose"],
      correct: 2,
      explanation: "'Where' is the relative pronoun used for locations."
    }]
  },
  {
    id: "may-might",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "9. May / Might (Possibility & Permission)",
    khmerTitle: "ការប្រើប្រាស់ May និង Might (លទ្ធភាព និងការអនុញ្ញាត)",
    tag: "Grammar",
    formula: "Subject + May / Might + Base Verb (V1)",
    usageEn: "Expressed present/future possibility and formal permission. Might indicates a weaker probability.",
    usageKm: "បង្ហាញពីលទ្ធភាពដែលអាចកើតមាន និងការសុំការអនុញ្ញាតជាផ្លូវការ។",
    structures: { affirmative: "Subject + may/might + V1" },
    examples: [{ en: "It may rain this afternoon.", km: "វាអាចនឹងមានភ្លៀងនៅរសៀលនេះ។" }],
    timeMarkers: ["may", "might", "perhaps"],
    quiz: [{
      question: "_____ I borrow your laptop for a moment, please?",
      options: ["Must", "May", "Will", "Should"],
      correct: 1,
      explanation: "'May I...' is the standard polite structure for permission."
    }]
  },
  {
    id: "question-tags",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "10. Question Tags (កន្ទុយសំណួរ)",
    khmerTitle: "ការប្រើប្រាស់ Question Tags (កន្ទុយសំណួរ)",
    tag: "Grammar",
    formula: "Positive Sentence + Negative Tag? OR Negative Sentence + Positive Tag?",
    usageEn: "Question tags are short questions added to the end of statements to check if something is true or to ask for agreement.",
    usageKm: "Question tags គឺជាសំណួរខ្លីៗដែលដាក់នៅចុងល្បះ ដើម្បីសួរចង់ដឹងការណ៍ពិត ឬសុំការយល់ព្រមពីអ្នកស្តាប់។",
    sections: [
      {
        title: "I. Core Rules for Question Tags",
        items: [
          { keyword: "1. Opposite Polarity Rule", usage: "If the main statement is affirmative (+), the tag must be negative (-). If the statement is negative (-), the tag must be affirmative (+)." },
          { keyword: "2. Pronoun Consistency", usage: "The subject of the tag must always be a subject pronoun (I, you, he, she, it, we, they, there) matching the main subject." },
          { keyword: "3. Verb Match & Auxiliaries", usage: "Use the exact matching auxiliary verb (do, does, did, have, has, will, modals, or 'to be')." }
        ]
      },
      {
        title: "II. Question Tags Across Tenses and Structures",
        items: [
          { keyword: "Simple Present (To Be)", usage: "You are a programmer, aren't you? / She isn't late, is she?" },
          { keyword: "Simple Present (Action Verbs)", usage: "They speak English, don't they? / He works hard, doesn't he?" },
          { keyword: "Simple Past", usage: "You visited Angkor Wat, didn't you? / They didn't come, did they?" },
          { keyword: "Modals & Auxiliaries", usage: "You can code in React, can't you? / We must finish this, mustn't we?" },
          { keyword: "Special Cases", usage: "Let's start the project, shall we? / I am correct, aren't I?" }
        ]
      }
    ],
    structures: {
      affirmative: "Affirmative Sentence, Negative Auxiliary + Pronoun?",
      negative: "Negative Sentence, Positive Auxiliary + Pronoun?"
    },
    examples: [
      { en: "You are learning software development, aren't you?", km: "អ្នកកំពុងរៀនអភិវឌ្ឍន៍កម្មវិធី មែនទេ?" },
      { en: "She doesn't like bugs in her code, does she?", km: "នាងមិនចូលចិត្តបញ្ហាកូដខុសទេ មែនទេ?" }
    ],
    timeMarkers: ["aren't you", "don't they", "isn't it", "didn't they"],
    quiz: [
      {
        question: "You can speak Khmer fluently, _____?",
        options: ["can you", "can't you", "do you", "don't you"],
        correct: 1,
        explanation: "Affirmative statement with modal 'can' takes negative modal tag 'can't you'."
      },
      {
        question: "They finished their coding project yesterday, _____?",
        options: ["did they", "didn't they", "aren't they", "haven't they"],
        correct: 1,
        explanation: "Simple past affirmative sentence ('finished') takes negative past tag 'didn't they'."
      }
    ]
  },
  {
    id: "comparatives-superlatives",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "11. Comparisons (Comparatives & Superlatives)",
    khmerTitle: "ការប្រៀបធៀបគុណនាម និងកិរិយាសព្ទវិសេសន៍ (Comparatives & Superlatives)",
    tag: "Grammar",
    formula: "Comparative: Adj/Adv + -er / more + than | Superlative: the + Adj/Adv + -est / most",
    usageEn: "Comparatives compare two things or actions, while superlatives compare three or more to show the extreme degree.",
    usageKm: "ការប្រៀបធៀបកម្រិតស្មើ កម្រិតលើស (Comparative) និងកម្រិតខ្លាំងបំផុត (Superlative) ទាំង Adjectives និង Adverbs។",
    sections: [
      {
        title: "I. Adjective & Adverb Comparison Rules",
        items: [
          { keyword: "1. Short Words (1 syllable)", usage: "Add '-er than' for comparative and 'the ... -est' for superlative. (e.g., fast -> faster than -> the fastest)" },
          { keyword: "2. Long Words (2+ syllables)", usage: "Use 'more ... than' for comparative and 'the most ...' for superlative. (e.g., intelligent -> more intelligent than -> the most intelligent)" },
          { keyword: "3. Irregular Forms", usage: "Good/Well -> better than -> the best | Bad/Badly -> worse than -> the worst | Far -> farther/further -> the farthest" }
        ]
      },
      {
        title: "II. Adverb Comparison Example",
        items: [
          { keyword: "Adverb Comparison", usage: "He runs fast -> He runs faster than his brother -> He runs the fastest of all." }
        ]
      }
    ],
    structures: {
      affirmative: "Subject + verb + comparative form + than + object",
      negative: "Subject + verb + the superlative form"
    },
    examples: [
      { en: "JavaScript is more popular than C++ among web developers.", km: "ភាសា JavaScript មានប្រជាប្រិយភាពជាង C++ ក្នុងចំណោមអ្នកអភិវឌ្ឍន៍វេបសាយ។" },
      { en: "She codes the fastest in our team.", km: "នាងសរសេរកូដលឿនជាងគេបំផុតនៅក្នុងក្រុមរបស់យើង។" }
    ],
    timeMarkers: ["than", "the most", "the best"],
    quiz: [
      {
        question: "This is _____ difficult coding assignment I have ever solved.",
        options: ["more", "most", "the most", "as"],
        correct: 2,
        explanation: "Superlative form for a long adjective requires 'the most'."
      }
    ]
  },
  {
    id: "ed-ing-adjectives",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "12. Adjectives Ending with -ed and -ing",
    khmerTitle: "ការប្រើប្រាស់គុណនាមបញ្ចប់ដោយ -ed និង -ing",
    tag: "Grammar",
    formula: "-ed = feelings/emotions (how someone feels) | -ing = characteristics (what causes the feeling)",
    usageEn: "Adjectives ending in -ed describe a person's feelings or emotional state, while adjectives ending in -ing describe the feature of a person, thing, or situation causing that feeling.",
    usageKm: "គុណនាមបញ្ចប់ដោយ -ed ប្រើដើម្បីពណ៌នាអារម្មណ៍មនុស្ស ចំណែកឯ -ing ប្រើដើម្បីពណ៌នាលក្ខណៈរបស់វត្ថុ ឬស្ថានភាពដែលបង្កឱ្យមានអារម្មណ៍នោះ។",
    sections: [
      {
        title: "I. Core Difference & Usage",
        items: [
          { keyword: "-ed Adjectives (Feelings)", usage: "Describes how people feel. (e.g., I am bored, interested, excited, confused.)" },
          { keyword: "-ing Adjectives (Causes)", usage: "Describes things, situations, or people that cause the feeling. (e.g., The lecture is boring, interesting, exciting, confusing.)" }
        ]
      }
    ],
    structures: {
      affirmative: "Subject + am/is/are + -ed adjective (feeling)",
      negative: "Thing/Situation + am/is/are + -ing adjective (cause)"
    },
    examples: [
      { en: "I am interested in learning React.", km: "ខ្ញុំមានចំណាប់អារម្មណ៍ក្នុងការរៀន React។ (អារម្មណ៍មនុស្ស)" },
      { en: "This programming tutorial is very interesting.", km: "មេរៀនបង្រៀនសរសេរកូដនេះគួរឱ្យចាប់អារម្មណ៍ខ្លាំងណាស់។ (លក្ខណៈរបស់មេរៀន)" }
    ],
    timeMarkers: ["interested", "interesting", "bored", "boring"],
    quiz: [
      {
        question: "The horror movie was really _____; I couldn't sleep last night.",
        options: ["frightened", "frightening", "fright", "frightens"],
        correct: 1,
        explanation: "The movie caused the fear, so it takes the '-ing' adjective ('frightening')."
      }
    ]
  },
  {
    id: "articles",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "13. Articles (A, An, The, and Zero Article)",
    khmerTitle: "ការប្រើប្រាស់ Articles (a, an, the, និងគ្មាន articles)",
    tag: "Grammar",
    formula: "A/An (Indefinite: singular countable, first mention) | The (Definite: specific, unique) | Zero Article (Plural/Uncountable general)",
    usageEn: "Articles are determiners that specify whether a noun is general, specific, or newly introduced in context.",
    usageKm: "Articles គឺជាពាក្យកំណត់នាម (Determiners) ដែលបង្ហាញថាតើនាមនោះជាទូទៅ ជាក់លាក់ ឬទើបតែលើកឡើងជាលើកដំបូង។",
    sections: [
      {
        title: "I. Detailed Rules for Articles",
        items: [
          { keyword: "1. Indefinite Articles (A / An)", usage: "Used with singular countable nouns mentioned for the first time, or general things. Use 'a' before consonant sounds (a book, a university) and 'an' before vowel sounds (an apple, an hour)." },
          { keyword: "2. Definite Article (The)", usage: "Used with specific nouns that both speaker and listener know, unique objects (the sun, the moon), superlative adjectives (the best), rivers/oceans, or things mentioned a second time." },
          { keyword: "3. Zero Article (No Article)", usage: "Used with plural countable nouns or uncountable nouns in a general sense (e.g., I love cats, Water is essential), names of people, cities, countries (with exceptions like the US), and meals/languages." }
        ]
      }
    ],
    structures: {
      affirmative: "a/an + singular countable noun | the + specific noun | zero article + general plural/uncountable noun"
    },
    examples: [
      { en: "I bought a new laptop yesterday. The laptop is very fast.", km: "ខ្ញុំបានទិញកុំព្យូទ័រយួរដៃថ្មីមួយកាលពីម្សិលមិញ។ កុំព្យូទ័រយួរដៃនោះលឿនខ្លាំងណាស់។ (លើកទី១ ប្រើ a, លើកទី២ ប្រើ the ព្រោះជាក់លាក់រួច)" },
      { en: "Computers change the modern world.", km: "កុំព្យូទ័រផ្លាស់ប្តូរពិភពលោកសម័យទំនើប។" }
    ],
    timeMarkers: ["a", "an", "the"],
    quiz: [
      {
        question: "She is _____ software engineer working at a tech company in Phnom Penh.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "Singular countable noun starting with a vowel sound ('software engineer' starts with 'e' sound) takes 'an'."
      },
      {
        question: "Look at _____ sun! It is setting behind the mountains.",
        options: ["a", "an", "the", "no article"],
        correct: 2,
        explanation: "Unique things in our universe always take the definite article 'the'."
      }
    ]
  },
  {
    id: "modal-verbs-structures",
    category: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)",
    title: "14. Modal Verbs & Phrasal Verbs",
    khmerTitle: "កិរិយាសព្ទជំនួយ និង Phrasal Verbs",
    tag: "Grammar",
    formula: "Modal + V1 | Verb + Particle",
    usageEn: "Modal verbs express ability, obligation, or advice, while phrasal verbs create new idiomatic meanings.",
    usageKm: "បង្ហាញពីសមត្ថភាព កាតព្វកិច្ច និងកិរិយាសព្ទផ្សំបង្កើតន័យថ្មី។",
    sections: [
      {
        title: "Modal & Phrasal Overview",
        items: [
          { keyword: "Can / Could / Should / Must", usage: "Expressing ability, advice, or strict obligation." },
          { keyword: "Phrasal Verbs", usage: "Log in, Give up, Look up (Verb + Particle = Idiomatic Meaning)." }
        ]
      }
    ],
    structures: { affirmative: "Subject + Modal + V1" },
    examples: [{ en: "You should practice coding every day.", km: "អ្នកគួរតែហាត់សរសេរកូដជារៀងរាល់ថ្ងៃ។" }],
    timeMarkers: ["must", "should", "can"],
    quiz: [{
      question: "What does the phrasal verb 'give up' mean?",
      options: ["To start something", "To stop trying or surrender", "To look for info", "To turn on"],
      correct: 1,
      explanation: "'Give up' means to stop trying or surrender."
    }]
  },

  // ------------------------------------------
  // PART III: WRITING SKILLS (FULL EXAMPLES)
  // ------------------------------------------
  {
    id: "write-paragraph",
    category: "Writing Skills (ជំនាញតែងសេចក្តី)",
    title: "1. How to Write a Paragraph",
    khmerTitle: "របៀបសរសេរកថាខណ្ឌ (Paragraph Structure)",
    tag: "Writing",
    formula: "Topic Sentence + Supporting Sentences + Concluding Sentence",
    usageEn: "A structured paragraph develops a single central idea across three cohesive sections.",
    usageKm: "កថាខណ្ឌស្តង់ដារផ្តោតលើគំនិតសំខាន់មួយ ដោយចែកជា ៣ ផ្នែកច្បាស់លាស់។",
    structures: { affirmative: "Topic Sentence -> Support -> Conclusion" },
    examples: [{
      en: "Learning English opens up many important opportunities for university students. First, most academic research, programming documentation, and international textbooks are written in English. Second, fluency significantly enhances career prospects in the global job market. In conclusion, mastering English is an essential skill that drives personal and professional growth.",
      km: "ការរៀនភាសាអង់គ្លេសបើកឱកាសសំខាន់ៗជាច្រើនសម្រាប់និស្សិតសាកលវិទ្យាល័យ។ ទី១ ការស្រាវជ្រាវសិក្សាភាគច្រើនសរសេរជាភាសាអង់គ្លេស។ ទី២ ភាពស្ទាត់ជំនាញជួយបង្កើនឱកាសការងារ។ សរុបមក ការចេះភាសាអង់គ្លេសគឺជាជំនាញចាំបាច់។"
    }],
    sampleParagraphBreakdown: {
      topicSentence: "Learning English opens up many important opportunities for university students.",
      supportingSentences: [
        "First, most academic research, programming documentation, and international textbooks are written in English.",
        "Second, fluency significantly enhances career prospects in the global job market."
      ],
      concludingSentence: "In conclusion, mastering English is an essential skill that drives personal and professional growth."
    },
    timeMarkers: ["first", "second", "in conclusion"],
    quiz: [{
      question: "What is the primary function of a Topic Sentence?",
      options: ["To summarize an essay", "To introduce the single main idea", "To provide stats", "To conclude"],
      correct: 1,
      explanation: "The topic sentence states the single main idea of the paragraph."
    }]
  },
  {
    id: "write-essay",
    category: "Writing Skills (ជំនាញតែងសេចក្តី)",
    title: "2. How to Write an Essay",
    khmerTitle: "របៀបសរសេរអត្ថបទតែងសេចក្តី (Essay Structure)",
    tag: "Writing",
    formula: "Introduction + Body Paragraphs + Conclusion",
    usageEn: "An essay is a multi-paragraph academic composition analyzing a central thesis statement.",
    usageKm: "អត្ថបទតែងសេចក្តីមានច្រើនកថាខណ្ឌ សម្រាប់វិភាគប្រធានបទស្នូល (Thesis)។",
    structures: { affirmative: "Intro -> Body 1 -> Body 2 -> Conclusion" },
    examples: [{
      en: "Title: The Benefits of Technology in Education\n\nIntroduction: Technology has completely transformed modern education by changing how students acquire knowledge. While traditional classrooms relied heavily on printed books, digital tools now provide limitless possibilities. Therefore, technology significantly improves academic accessibility and engagement.\n\nBody Paragraph 1: To begin with, digital technology provides immediate access to vast educational resources. Students no longer need to visit physical libraries for every single assignment, as online databases offer instant scholarly articles and programming tutorials.\n\nBody Paragraph 2: Furthermore, interactive software and learning management systems allow personalized pacing. Learners can review complex coding algorithms or mathematical concepts at their own comfort level.\n\nConclusion: In conclusion, integrating digital tools into learning environments offers immense advantages. By expanding access and personalization, technology ensures a brighter future for modern education.",
      km: "ចំណងជើង៖ អត្ថប្រយោជន៍នៃបច្ចេកវិទ្យាក្នុងវិស័យអប់រំ (អត្ថបទគំរូពេញលេញ)"
    }],
    sampleEssayBreakdown: {
      title: "The Benefits of Technology in Education",
      introduction: "Hook + Background + Thesis Statement: Technology significantly improves academic accessibility and engagement.",
      bodyParagraphs: [
        "Body 1: Immediate access to educational resources.",
        "Body 2: Interactive software and personalized learning pacing."
      ],
      conclusion: "Restated Thesis + Summary of main points + Final concluding thought."
    },
    timeMarkers: ["to begin with", "furthermore", "in conclusion"],
    quiz: [{
      question: "Where should the Thesis Statement typically be placed in an essay?",
      options: ["At the end of the Introduction", "At start of Body 2", "In the title", "In the middle of conclusion"],
      correct: 0,
      explanation: "The thesis statement belongs at the end of the introductory paragraph."
    }]
  }
];

// ==========================================
// 4. HELPER UTILITY FUNCTIONS
// ==========================================
export const getQuizByLessonId = (lessonId) => {
  const lesson = TENSES_DATA.find((item) => item.id === lessonId);
  return lesson && lesson.quiz ? lesson.quiz : [];
};

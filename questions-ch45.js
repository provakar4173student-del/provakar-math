// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 45: বৈদিক গণিত পদ্ধতি (Vedic Mathematics Methods) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter45Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: একাদিকেন पूर्বেণ ও অন্ত্যয়োর্দশকেঽপি (Ekadhikena Purvena & Antyayordasake) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q1',
    text: 'বৈদিক গণিতের "একাদিকেন পূর্বেন" (Ekadhikena Purvena) সূত্র ব্যবহার করে $65 \\times 65$ এর মান কত হবে?',
    options: ['4225', '3525', '4025', '3025'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্রটি প্রয়োগ করা হয় যখন এককের ঘরের অঙ্কদ্বয়ের সমষ্টি 10 হয় এবং বামদিকের অঙ্কগুলি সমান থাকে।' },
      { step: 'ধাপ ২:', content: 'বামদিকের অংশ: $6 \\times (6 + 1) = 6 \\times 7 = 42$।' },
      { step: 'ধাপ ৩:', content: 'ডানদিকের অংশ: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'দুই অংশ একত্রে পাশে বসালে পাই $4225$।' }
    ],
    shortcutTrick: '💡 $65^2 \\rightarrow 6 \\times 7 = 42$ এবং $5^2 = 25$। উত্তর: 4225।'
  },
  {
    id: 'ch45_q2',
    text: '"Ekadhikena Purvena" সূত্র প্রয়োগ করে $105 \\times 105$ এর মান নির্ণয় করো।',
    options: ['11025', '11525', '10025', '12025'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে বামদিকের সংখ্যা $10$। তার একাদিক বা পরবর্তী সংখ্যাটি হলো $11$।' },
      { step: 'ধাপ ২:', content: 'বামভাগের গুণফল: $10 \\times (10 + 1) = 10 \\times 11 = 110$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগের গুণফল: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'সংযুক্ত মান: $11025$।' }
    ],
    shortcutTrick: '💡 $105^2 \\rightarrow 10 \\times 11 = 110$ এবং $5^2 = 25$। উত্তর: 11025।'
  },
  {
    id: 'ch45_q3',
    text: 'বৈদিক নিয়ম অনুসারে $82 \\times 88$ এর সরলতম গুণফল কোনটি?',
    options: ['7216', '7218', '6416', '7016'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এককের অঙ্কদ্বয়ের যোগফল $2 + 8 = 10$ এবং দশকের অঙ্ক উভয় ক্ষেত্রে $8$ (সমান)।' },
      { step: 'ধাপ ২:', content: 'দশকের অংশের হিসাব: $8 \\times (8 + 1) = 8 \\times 9 = 72$।' },
      { step: 'ধাপ ৩:', content: 'এককের গুণফল: $2 \\times 8 = 16$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজিয়ে পাই $7216$।' }
    ],
    shortcutTrick: '💡 $82 \\times 88 \\rightarrow 8 \\times 9 = 72$ | $2 \\times 8 = 16 \\rightarrow 7216$।'
  },
  {
    id: 'ch45_q4',
    text: 'অন্ত্যয়োর্দশকেঽপি সূত্রানুসারে $113 \\times 117$ এর গুণফল কত হবে?',
    options: ['13221', '13021', '12121', '12221'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে শেষ অঙ্ক দুটির যোগফল $3 + 7 = 10$ এবং পূর্ববর্তী অংশ $11$ সমান।' },
      { step: 'ধাপ ২:', content: 'বামদিকের গণনা: $11 \\times (11 + 1) = 11 \\times 12 = 132$।' },
      { step: 'ধাপ ৩:', content: 'ডানদিকের গণনা: $3 \\times 7 = 21$।' },
      { step: 'ধাপ ৪:', content: 'নির্ণেয় মান: $13221$।' }
    ],
    shortcutTrick: '💡 $11 \\times 12 = 132$ এবং $3 \\times 7 = 21$। উত্তর: 13221।'
  },
  {
    id: 'ch45_q5',
    text: '"একাদিকেন পূর্বেন" সূত্রের সাহায্যে $195 \\times 105$ কি সরাসরি নির্ণয় সম্ভব? যদি $195 \\times 195$ করা হয় তবে মান কত হবে?',
    options: ['38025', '36025', '39025', '35025'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$195$ এর বর্গের ক্ষেত্রে দশকের ও শতকের মিলিত অংশ $19$।' },
      { step: 'ধাপ ২:', content: 'বামদিকের গুনফল: $19 \\times (19 + 1) = 19 \\times 20 = 380$।' },
      { step: 'ধাপ ৩:', content: 'ডানদিকের গুণফল: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে বসিয়ে পাই $38025$।' }
    ],
    shortcutTrick: '💡 $19 \\times 20 = 380$ এবং $5^2 = 25 \\rightarrow 38025$।'
  },
  {
    id: 'ch45_q6',
    text: '$73 \\times 77$ এর গুণফল বৈদিক গুণন পদ্ধতিতে কত হবে?',
    options: ['5621', '5421', '5611', '4921'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে দশকের অঙ্ক $7$ এবং এককের অঙ্কের যোগফল $3 + 7 = 10$।' },
      { step: 'ধাপ ২:', content: 'দশকের একাদিক গুণফল: $7 \\times 8 = 56$।' },
      { step: 'ধাপ ৩:', content: 'এককের গুণফল: $3 \\times 7 = 21$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $5621$।' }
    ],
    shortcutTrick: '💡 $7 \\times 8 = 56$ | $3 \\times 7 = 21 \\rightarrow 5621$।'
  },
  {
    id: 'ch45_q7',
    text: 'বৈদিক গণিতের সাহায্যে $292 \\times 298$ এর দ্রুত মান নির্ণয় করো।',
    options: ['87016', '84016', '86016', '85016'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে সমান অংশটি হলো $29$ এবং অবশিষ্ট শেষ অঙ্কদ্বয়ের যোগফল $2 + 8 = 10$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $29 \\times (29 + 1) = 29 \\times 30 = 870$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $2 \\times 8 = 16$।' },
      { step: 'ধাপ ৪:', content: 'মিলিত মান: $87016$।' }
    ],
    shortcutTrick: '💡 $29 \\times 30 = 870$ | $2 \\times 8 = 16 \\rightarrow 87016$।'
  },
  {
    id: 'ch45_q8',
    text: '"Antyayordasake" সূত্র ব্যবহার করে $91 \\times 99$ এর মান কত?',
    options: ['9009', '9019', '8109', '9109'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে দশকের অঙ্ক $9$ এবং এককের অঙ্ক $1 + 9 = 10$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $9 \\times 10 = 90$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $1 \\times 9 = 09$ (অবশ্যই দুই অঙ্কে লিখতে হবে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $9009$।' }
    ],
    shortcutTrick: '💡 $9 \\times 10 = 90$ এবং $1 \\times 9 = 09 \\rightarrow 9009$।'
  },
  {
    id: 'ch45_q9',
    text: 'বৈদিক গণিতে $45 \\times 45$ এর বর্গের ক্ষেত্রে বাম দিকের অংশটি কী নির্দেশ করে?',
    options: ['$4 \\times 5$', '$4 \\times 4$', '$5 \\times 5$', '$4 + 5$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একাদিকেন পূর্বেন সুত্র অনুযায়ী, বামভাগের সংখ্যাকে তার পরবর্তী সংখ্যা দিয়ে গুণ করতে হয়।' },
      { step: 'ধাপ ২:', content: 'এখানে বামদিকের সংখ্যা $4$, তার পরবর্তী সংখ্যা $5$।' },
      { step: 'ধাপ ৩:', content: 'অতএব বামদিকের অংশটি হবে $4 \\times 5 = 20$।' }
    ],
    shortcutTrick: '💡 একাদিকেন পূর্বেন = পূর্বের সংখ্যাটির সাথে এক যোগ করে গুণ $\rightarrow 4 \\times 5$।'
  },
  {
    id: 'ch45_q10',
    text: '$305 \\times 305$ এর বৈদিক গুণফল নিচের কোনটি?',
    options: ['93025', '90025', '91025', '92025'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে বামদিকের স্থির অংশটি $30$ এবং শেষ অঙ্ক $5$।' },
      { step: 'ধাপ ২:', content: 'বামভাগের গুণফল: $30 \\times 31 = 930$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগের গুণফল: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজালে পাই $93025$।' }
    ],
    shortcutTrick: '💡 $30 \\times 31 = 930$ এবং $5^2 = 25 \\rightarrow 93025$।'
  },
  {
    id: 'ch45_q11',
    text: 'যদি কোনো সংখ্যার এককের অঙ্ক $5$ হয়, তবে তার বর্গ নির্ণয়ের দ্রুততম বৈদিক সূত্র কোনটি?',
    options: ['Ekadhikena Purvena', 'Nikhilam Navatashcaramam Dashatah', 'Anurupyena', 'Antyayoreva'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৈদিক গণিতে এককের ঘরে $5$ বিশিষ্ট সংখ্যার বর্গ বের করতে "Ekadhikena Purvena" ব্যবহার করা হয়।' }
    ],
    shortcutTrick: '💡 এককের ঘরে $5$ থাকলে পরবর্তী সংখ্যার সাথে দশকের গুণ করে শেষে $25$ বসাতে হয়।'
  },
  {
    id: 'ch45_q12',
    text: 'বৈদিক নিয়মে $54 \\times 56$ এর গুণফল কত?',
    options: ['3024', '3026', '2524', '3124'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দশকের অঙ্ক $5$ এবং এককের অঙ্কের যোগফল $4 + 6 = 10$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $5 \\times (5 + 1) = 5 \\times 6 = 30$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $4 \\times 6 = 24$।' },
      { step: 'ধাপ ৪:', content: 'নির্ণেয় গুণফল: $3024$।' }
    ],
    shortcutTrick: '💡 $5 \\times 6 = 30$ | $4 \\times 6 = 24 \\rightarrow 3024$।'
  },
  {
    id: 'ch45_q13',
    text: '$995 \\times 995$ এর বর্গ মান বৈদিক পদ্ধতিতে কত হবে?',
    options: ['990025', '980025', '991025', '995025'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে স্থির অংশ $99$।' },
      { step: 'ধাপ ২:', content: 'বামভাগের গুণফল: $99 \\times (99 + 1) = 99 \\times 100 = 9900$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগের গুণফল: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজিয়ে পাই $990025$।' }
    ],
    shortcutTrick: '💡 $99 \\times 100 = 9900$ এবং $5^2 = 25 \\rightarrow 990025$।'
  },
  {
    id: 'ch45_q14',
    text: 'বৈদিক সূত্র প্রয়োগ করে $203 \\times 207$ এর সরলতম গুণফল নির্ণয় করো।',
    options: ['42021', '40021', '41021', '43021'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে স্থির অংশ $20$ এবং $3 + 7 = 10$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $20 \\times 21 = 420$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $3 \\times 7 = 21$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $42021$।' }
    ],
    shortcutTrick: '💡 $20 \\times 21 = 420$ | $3 \\times 7 = 21 \\rightarrow 42021$।'
  },
  {
    id: 'ch45_q15',
    text: '$12.5 \\times 12.5$ এর মান বৈদিক গণিত অনুযায়ী কত হবে?',
    options: ['156.25', '144.25', '150.25', '160.25'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দশমিককে আপাতত উপেক্ষা করে $125 \\times 125$ এর হিসাব করি।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $12 \\times 13 = 156$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $5 \\times 5 = 25$।' },
      { step: 'ধাপ ৪:', content: 'গুনফল $15625$। এবার দুই ঘর আগে দশমিক বসালে হয় $156.25$।' }
    ],
    shortcutTrick: '💡 $12 \\times 13 = 156$ এবং শেষে $.25$ যোগ হবে $\rightarrow 156.25$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: নিখিলং নবতশ্চরমং দশতঃ (Nikhilam Navatashcaramam Dashatah) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q16',
    text: 'বৈদিক গণিতের "Nikhilam" সুত্রের সাহায্যে $93 \\times 97$ এর গুণফল কত হবে? (ভিত্তি = 100)',
    options: ['9021', '9011', '8921', '9121'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি ($Base$) = 100। বিচ্যুতি ($Deviations$) হলো: $93 - 100 = -7$ এবং $97 - 100 = -3$।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি গণনা (Cross-operation): $93 + (-3) = 90$ অথবা $97 + (-7) = 90$।' },
      { step: 'ধাপ ৩:', content: 'বিচ্যুতিদ্বয়ের গুণফল: $(-7) \\times (-3) = 21$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে বসালে পাই $9021$।' }
    ],
    shortcutTrick: '💡 বিচ্যুতি -7 ও -3। বামভাগ: $93-3 = 90$, ডানভাগ: $7 \\times 3 = 21$ $\rightarrow 9021$।'
  },
  {
    id: 'ch45_q17',
    text: 'নিখিলং সূত্র প্রয়োগ করে $98 \\times 95$ এর মান নির্ণয় করো।',
    options: ['9310', '9410', '9210', '9320'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। বিচ্যুতিদ্বয় $-2$ এবং $-5$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $98 - 5 = 93$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-2) \\times (-5) = 10$।' },
      { step: 'ধাপ ৪:', content: 'সংযুক্ত রূপ: $9310$।' }
    ],
    shortcutTrick: '💡 বিচ্যুতি -2 ও -5। বামভাগ $98-5=93$, ডানভাগ $2 \\times 5 = 10 \\rightarrow 9310$।'
  },
  {
    id: 'ch45_q18',
    text: 'বৈদিক পদ্ধতিতে $104 \\times 107$ এর গুণফল কত হবে? (ভিত্তি = 100)',
    options: ['11128', '11028', '11118', '11228'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। যেহেতু সংখ্যাগুলি ভিত্তির থেকে বড়, বিচ্যুতি ধনাত্মক হবে: $+4$ এবং $+7$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ (কোণাকুণি যোগ): $104 + 7 = 111$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ (বিচ্যুতির গুণফল): $4 \\times 7 = 28$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $11128$।' }
    ],
    shortcutTrick: '💡 বিচ্যুতি +4 ও +7। বামভাগ: $104+7=111$, ডানভাগ: $4 \\times 7 = 28 \\rightarrow 11128$।'
  },
  {
    id: 'ch45_q19',
    text: 'নিখিলং সূত্রের সাহায্যে $102 \\times 103$ এর সরলতম রূপ নির্ণয় করো।',
    options: ['10506', '10505', '10606', '10406'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। বিচ্যুতি $+2$ এবং $+3$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $102 + 3 = 105$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $2 \\times 3 = 06$ (যেহেতু ভিত্তির শূন্য 2টি, তাই ডানদিকে 2টি অঙ্ক থাকবে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $10506$।' }
    ],
    shortcutTrick: '💡 $102 + 3 = 105$ | $2 \\times 3 = 06 \\rightarrow 10506$।'
  },
  {
    id: 'ch45_q20',
    text: '$89 \\times 98$ এর গুণফল নিখিলং পদ্ধতিতে কত হবে?',
    options: ['8722', '8712', '8622', '8822'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। বিচ্যুতিদ্বয় $-11$ এবং $-2$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $89 - 2 = 87$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-11) \\times (-2) = 22$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজিয়ে পাই $8722$।' }
    ],
    shortcutTrick: '💡 বিচ্যুতি -11 ও -2। বামভাগ: $89-2=87$, ডানভাগ: $11 \\times 2 = 22 \\rightarrow 8722$।'
  },
  {
    id: 'ch45_q21',
    text: 'যদি একটি সংখ্যা ভিত্তির থেকে বড় এবং অন্যটি ছোট হয়, যেমন $103 \\times 98$, তবে নিখিলং পদ্ধতিতে সঠিক গুণফল কোনটি?',
    options: ['10094', '10194', '10084', '10104'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। বিচ্যুতি $+3$ এবং $-2$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $103 + (-2) = 101$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $3 \\times (-2) = -6$।' },
      { step: 'ধাপ ৪:', content: 'চূড়ান্ত রূপ: $101 | -06 \\rightarrow 10100 - 6 = 10094$।' }
    ],
    shortcutTrick: '💡 বামভাগ $103-2=101$, ডানভাগ $-06$। $10100 - 6 = 10094$।'
  },
  {
    id: 'ch45_q22',
    text: 'নিখিলং সূত্রের সাহায্যে $12 \\times 13$ এর গুণফল নির্ণয় করো। (ভিত্তি = 10)',
    options: ['156', '150', '166', '146'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 10। বিচ্যুতি $+2$ এবং $+3$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $12 + 3 = 15$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $2 \\times 3 = 6$ (ভিত্তিতে 1টি শূন্য থাকায় ডানভাগে 1টি অঙ্ক বসবে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $156$।' }
    ],
    shortcutTrick: '💡 $12 + 3 = 15$ | $2 \\times 3 = 6 \\rightarrow 156$।'
  },
  {
    id: 'ch45_q23',
    text: 'ভিত্তি 1000 ধরে নিখিলং পদ্ধতিতে $992 \\times 996$ এর গুণফল কত হবে?',
    options: ['988032', '988016', '990032', '989032'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতিদ্বয় $-8$ এবং $-4$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $992 - 4 = 988$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-8) \\times (-4) = 032$ (ভিত্তিতে ৩টি শূন্য থাকায় ৩টি অঙ্ক হবে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $988032$।' }
    ],
    shortcutTrick: '💡 $992 - 4 = 988$ | $8 \\times 4 = 032 \\rightarrow 988032$।'
  },
  {
    id: 'ch45_q24',
    text: '$995 \\times 998$ এর গুণফল নিখিলং সূত্রে কত?',
    options: ['993010', '992010', '993020', '991010'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতিদ্বয় $-5$ এবং $-2$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $995 - 2 = 993$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-5) \\times (-2) = 010$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $993010$।' }
    ],
    shortcutTrick: '💡 $995-2 = 993$ | $5 \\times 2 = 010 \\rightarrow 993010$।'
  },
  {
    id: 'ch45_q25',
    text: 'নিখিলং পদ্ধতিতে $1005 \\times 1012$ এর গুণফল কত?',
    options: ['1017060', '1017050', '1015060', '1016060'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতি $+5$ এবং $+12$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $1005 + 12 = 1017$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $5 \\times 12 = 060$ (৩ অঙ্কের ফরম্যাটে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1017060$।' }
    ],
    shortcutTrick: '💡 $1005 + 12 = 1017$ | $5 \\times 12 = 060 \\rightarrow 1017060$।'
  },
  {
    id: 'ch45_q26',
    text: 'বৈদিক গণিতে "নিখিলং নবতশ্চরমং দশতঃ" কথাটির আক্ষরিক অর্থ কী?',
    options: ['সবই ৯ থেকে, শেষটি ১০ থেকে', 'সবই ১০ থেকে, শেষটি ৯ থেকে', 'সবই সমান অংশ', 'উপর-নীচ গুণ'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এই সূত্রের অর্থ হলো সমস্ত অঙ্ককে ৯ থেকে এবং শেষ অঙ্কটিকে ১০ থেকে বিয়োগ করে বিচ্যুতি বা পরিপূরক নির্ণয় করা।' }
    ],
    shortcutTrick: '💡 নিখিলং = সবই ৯ থেকে, চরমং = শেষটি ১০ থেকে।'
  },
  {
    id: 'ch45_q27',
    text: '$88 \\times 88$ এর গুণফল নিখিলং উপায়ে কত হবে? (ভিত্তি = 100)',
    options: ['7744', '7644', '7734', '7844'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিচ্যুতিদ্বয় $-12$ এবং $-12$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $88 - 12 = 76$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-12) \\times (-12) = 144$।' },
      { step: 'ধাপ ৪:', content: 'যেহেতু ডানভাগে কেবল ২ ঘর থাকবে, তাই অতিরিক্ত $1$ বামভাগে যোগ হবে: $76 + 1 | 44 = 7744$।' }
    ],
    shortcutTrick: '💡 $88-12=76$, $12^2=144$। $76+1 | 44 = 7744$।'
  },
  {
    id: 'ch45_q28',
    text: 'বৈদিক পদ্ধতিতে $1015 \\times 995$ এর সঠিক মান কোনটি?',
    options: ['1009925', '1010025', '1008925', '1009975'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতি $+15$ এবং $-5$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $1015 + (-5) = 1010$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $15 \\times (-5) = -075$।' },
      { step: 'ধাপ ৪:', content: 'সমন্বয়: $1010000 - 75 = 1009925$।' }
    ],
    shortcutTrick: '💡 $1010 | -075 \\rightarrow 1010000 - 75 = 1009925$।'
  },
  {
    id: 'ch45_q29',
    text: 'নিখিলং পদ্ধতিতে $91 \\times 95$ এর গুণফলে প্রাপ্ত ডানদিকের অংশটি কত?',
    options: ['45', '40', '35', '05'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 100। বিচ্যুতিদ্বয় $-9$ এবং $-5$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগটি বিচ্যুতির গুণফল নির্দেশ করে: $(-9) \\times (-5) = 45$।' }
    ],
    shortcutTrick: '💡 ডানভাগ $= 9 \\times 5 = 45$।'
  },
  {
    id: 'ch45_q30',
    text: '$999 \\times 999$ এর বর্গফল বৈদিক গণিতের নিখিলং সূত্রে কত সেকেন্ডে মুখে মুখে নির্ণয় সম্ভব? সঠিক উত্তরটি চিহ্নিত করো।',
    options: ['998001', '999001', '998011', '998101'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতি $-1$ এবং $-1$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $999 - 1 = 998$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-1) \\times (-1) = 001$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $998001$।' }
    ],
    shortcutTrick: '💡 $999 - 1 = 998$ | $1^2 = 001 \\rightarrow 998001$।'
  },
  {
    id: 'ch45_q31',
    text: 'নিখিলং সূত্রের সাহায্যে $9996 \\times 9997$ এর মান কত? (Base = 10000)',
    options: ['99930012', '99930002', '99940012', '99920012'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 10000। বিচ্যুতিদ্বয় $-4$ এবং $-3$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $9996 - 3 = 9993$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-4) \\times (-3) = 0012$ (চার অঙ্কের রূপ)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $99930012$।' }
    ],
    shortcutTrick: '💡 $9996-3 = 9993$ | $4 \\times 3 = 0012 \\rightarrow 99930012$।'
  },
  {
    id: 'ch45_q32',
    text: 'নিখিলং পদ্ধতিতে $107 \\times 108$ এর গুণফল বের করো।',
    options: ['11556', '11546', '11456', '11656'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিচ্যুতিদ্বয় $+7$ এবং $+8$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $107 + 8 = 115$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $7 \\times 8 = 56$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $11556$।' }
    ],
    shortcutTrick: '💡 $107+8=115$ | $7 \\times 8 = 56 \\rightarrow 11556$।'
  },
  {
    id: 'ch45_q33',
    text: '$987 \\times 999$ এর নিখিলং গুণফল কোনটি?',
    options: ['986013', '986113', '985013', '987013'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 1000। বিচ্যুতি $-13$ এবং $-1$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $987 - 1 = 986$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $(-13) \\times (-1) = 013$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $986013$।' }
    ],
    shortcutTrick: '💡 $987-1=986$ | $13 \\times 1 = 013 \\rightarrow 986013$।'
  },
  {
    id: 'ch45_q34',
    text: 'বৈদিক গণিতে $94 \\times 94$ এর বর্গ নির্ণয়ের সবচেয়ে উপযোগী ভিত্তি কোনটি?',
    options: ['100', '10', '50', '1000'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$94$ সংখ্যাটি ১০০ এর খুব কাছাকাছি অবস্থিত। তাই নিখিলং পদ্ধতিতে ১০০ কে ভিত্তি হিসেবে ব্যবহার করা সবচেয়ে সুবিধাজনক।' }
    ],
    shortcutTrick: '💡 ১০০ এর কাছাকাছি সংখ্যার জন্য বেস বা ভিত্তি সর্বদা ১০০ নেওয়া হয়।'
  },
  {
    id: 'ch45_q35',
    text: 'নিখিলং পদ্ধতিতে $13 \\times 17$ এর গুণফল কত?',
    options: ['221', '211', '201', '231'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি 10। বিচ্যুতি $+3$ এবং $+7$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $13 + 7 = 20$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $3 \\times 7 = 21$।' },
      { step: 'ধাপ ৪:', content: 'যেহেতু ভিত্তি ১০ (১টি শূন্য), ডানভাগে ১টি অংক থাকবে এবং ২ বামভাগে ক্যারি হবে: $20 + 2 | 1 = 221$।' }
    ],
    shortcutTrick: '💡 $13+7=20$, $3\\times7=21$ $\rightarrow 20+2 | 1 = 221$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ঊর্ধ্ব-তির্যগভ্যাম গুণ পদ্ধতি (Urdhva-Tiryagbhyam - Cross Multiplication) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q36',
    text: '"ঊর্ধ্ব-তির্যগভ্যাম" (Urdhva-Tiryagbhyam) পদ্ধতি ব্যবহার করে $23 \\times 12$ এর মান নির্ণয় করো।',
    options: ['276', '266', '286', '256'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধাপ ১ (একক অঙ্ক গুণ): $3 \\times 2 = 6$ (ডানভাগ)।' },
      { step: 'ধাপ ২:', content: 'ধাপ ২ (কোণাকুণি গুণ ও যোগ): $(2 \\times 2) + (3 \\times 1) = 4 + 3 = 7$ (মধ্যভাগ)।' },
      { step: 'ধাপ ৩:', content: 'ধাপ ৩ (দশক অঙ্ক গুণ): $2 \\times 1 = 2$ (বামভাগ)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজালে পাই $276$।' }
    ],
    shortcutTrick: '💡 ক্রিস-ক্রস: $2\\times1=2$ | $2\\times2+3\\times1=7$ | $3\\times2=6$ $\rightarrow 276$।'
  },
  {
    id: 'ch45_q37',
    text: 'ঊর্ধ্ব-তির্যগভ্যাম সূত্রের সাহায্যে $41 \\times 23$ এর গুণফল কত হবে?',
    options: ['943', '933', '953', '843'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক গুণ: $1 \\times 3 = 3$।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি যোগ: $(4 \\times 3) + (1 \\times 2) = 12 + 2 = 14$ (৪ থাকবে, ১ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'দশক গুণ: $4 \\times 2 = 8$। ক্যারির সাথে যোগ: $8 + 1 = 9$।' },
      { step: 'ধাপ ৪:', content: 'ফলাফল: $943$।' }
    ],
    shortcutTrick: '💡 $1\\times3=3$ | $12+2=14$ (carry 1) | $4\\times2+1=9 \\rightarrow 943$।'
  },
  {
    id: 'ch45_q38',
    text: 'বৈদিক ক্রিস-ক্রস পদ্ধতি ব্যবহার করে $52 \\times 34$ এর মান কত?',
    options: ['1768', '1758', '1868', '1668'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক গুণ: $2 \\times 4 = 8$।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $5 \\times 4 + 2 \\times 3 = 20 + 6 = 26$ (৬ বসে, ২ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $5 \\times 3 = 15$। ক্যারি যোগ: $15 + 2 = 17$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1768$।' }
    ],
    shortcutTrick: '💡 $2\\times4=8$ | $20+6=26$ (carry 2) | $15+2=17 \\rightarrow 1768$।'
  },
  {
    id: 'ch45_q39',
    text: 'ঊর্ধ্ব-তির্যগভ্যাম পদ্ধতিতে ৩টি অঙ্কের গুণ যেমন $123 \\times 456$ এর ক্ষেত্রে মধ্যম ধাপের (৩য় ধাপ) গঠনটি কী?',
    options: ['কোণাকুণি ও মধ্যম গুণফলের সমষ্টি', 'শুধুমাত্র কোণাকুণি গুণ', 'শুধুমাত্র মধ্যম গুণ', 'বামদিকের গুণফল'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩ অঙ্কের গুনে ৩য় ধাপে প্রথম ও শেষের অঙ্কগুলির কোণাকুণি গুণ এবং মাঝের অঙ্ক দুটির সরাসরি গুণফল যোগ করা হয়।' },
      { step: 'ধাপ ২:', content: 'অর্থাৎ: $(1 \\times 6) + (3 \\times 4) + (2 \\times 5) = 6 + 12 + 10 = 28$।' }
    ],
    shortcutTrick: '💡 ৩য় ধাপ = চরম কোণাকুণি + মধ্যম সোজা গুণ।'
  },
  {
    id: 'ch45_q40',
    text: 'বৈদিক গণিতের সাহায্যে $102 \\times 201$ এর ক্রিস-ক্রস গুণফল নির্ণয় করো।',
    options: ['20502', '20402', '20302', '20602'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধাপ ১: $2 \\times 1 = 2$।' },
      { step: 'ধাপ ২: ', content: '$0 \\times 1 + 2 \\times 0 = 0$।' },
      { step: 'ধাপ ৩: ', content: '$1 \\times 1 + 2 \\times 2 + 0 \\times 0 = 1 + 4 + 0 = 5$।' },
      { step: 'ধাপ ৪: ', content: '$1 \\times 0 + 0 \\times 2 = 0$।' },
      { step: 'ধাপ ৫: ', content: '$1 \\times 2 = 2$।' },
      { step: 'ধাপ ৬: ', content: 'একত্রে সাজালে পাই $20502$।' }
    ],
    shortcutTrick: '💡 ৩-অঙ্কের সরাসরি বৈদিক ক্রিস-ক্রস অনুসরণ করে পাই: 20502।'
  },
  {
    id: 'ch45_q41',
    text: 'Urdhva-Tiryagbhyam পদ্ধতিতে $78 \\times 21$ এর গুণফল কত?',
    options: ['1638', '1628', '1538', '1738'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক: $8 \\times 1 = 8$।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $7 \\times 1 + 8 \\times 2 = 7 + 16 = 23$ (৩ বসে, ২ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $7 \\times 2 = 14$। ক্যারি যোগ: $14 + 2 = 16$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1638$।' }
    ],
    shortcutTrick: '💡 $8\\times1=8$ | $7+16=23$ (carry 2) | $14+2=16 \\rightarrow 1638$।'
  },
  {
    id: 'ch45_q42',
    text: 'বৈদিক উপায়ে $47 \\times 36$ এর দ্রুত গুণফল কোনটি?',
    options: ['1692', '1682', '1592', '1792'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক: $7 \\times 6 = 42$ (২ বসে, ৪ ক্যারি)।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $4 \\times 6 + 7 \\times 3 = 24 + 21 = 45$। ক্যারি যোগ: $45 + 4 = 49$ (৯ বসে, ৪ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $4 \\times 3 = 12$। ক্যারি যোগ: $12 + 4 = 16$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1692$।' }
    ],
    shortcutTrick: '💡 $7\\times6=42$ (carry 4) | $24+21+4=49$ (carry 4) | $12+4=16 \\rightarrow 1692$।'
  },
  {
    id: 'ch45_q43',
    text: '৩-অঙ্কের ঊর্ধ্ব-তির্যগভ্যাম পদ্ধতি প্রয়োগ করে $111 \\times 111$ এর মান নির্ণয় করো।',
    options: ['12321', '12221', '12421', '11311'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি প্রতিসম ৩-অঙ্কের গুণ। প্যাটার্নটি হবে: $1 | 2 | 3 | 2 | 1$।' },
      { step: 'ধাপ ২:', content: 'অতএব গুণফলটি সরাসরি $12321$ হবে।' }
    ],
    shortcutTrick: '💡 $111^2$ এর বৈদিক ক্রিস-ক্রস বা সাধারণ নিয়ম: ৩টি ১ থাকলে $1$ থেকে $3$ পর্যন্ত গিয়ে আবার নেমে যাওয়া $\rightarrow 12321$।'
  },
  {
    id: 'ch45_q44',
    text: '$85 \\times 15$ এর মান ক্রিস-ক্রস সূত্রের সাহায্যে কত হবে?',
    options: ['1275', '1265', '1175', '1375'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক: $5 \\times 5 = 25$ (৫ বসে, ২ ক্যারি)।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $8 \\times 5 + 5 \\times 1 = 40 + 5 = 45$। ক্যারি যোগ: $45 + 2 = 47$ (৭ বসে, ৪ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $8 \\times 1 = 8$। ক্যারি যোগ: $8 + 4 = 12$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1275$।' }
    ],
    shortcutTrick: '💡 $25$ (carry 2) | $40+5+2=47$ (carry 4) | $8+4=12 \\rightarrow 1275$।'
  },
  {
    id: 'ch45_q45',
    text: 'বৈদিক গণিত পদ্ধতিতে $99 \\times 99$ এর ঊর্ধ্ব-তির্যগভ্যাম গুণফল কত?',
    options: ['9801', '9901', '9701', '9811'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক: $9 \\times 9 = 81$ (১ বসে, ৮ ক্যারি)।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $9 \\times 9 + 9 \\times 9 = 81 + 81 = 162$। ক্যারি যোগ: $162 + 8 = 170$ (০ বসে, ১৭ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $9 \\times 9 = 81$। ক্যারি যোগ: $81 + 17 = 98$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $9801$।' }
    ],
    shortcutTrick: '💡 ক্রিস-ক্রসের থেকে নিখিলং পদ্ধতিতে দ্রুত হয়: $99-1 | 1^2 = 9801$।'
  },
  {
    id: 'ch45_q46',
    text: 'Urdhva-Tiryagbhyam সূত্র দ্বারা $321 \\times 12$ করার জন্য $12$ কে কীভাবে সাজাতে হবে?',
    options: ['012', '120', '12', 'সবকটিই সঠিক'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যদি ৩টি অঙ্কের সাথে ২টি অঙ্কের গুণ করতে হয়, তবে অঙ্ক সংখ্যা সমান করার জন্য ছোট সংখ্যাটির বামপাশে শূন্য বসিয়ে $012$ করে নিতে হয়।' }
    ],
    shortcutTrick: '💡 অঙ্ক সংখ্যা মেলাতে বাঁদিকে শূন্য যোগ করতে হয়: $321 \\times 012$।'
  },
  {
    id: 'ch45_q47',
    text: 'Urdhva-Tiryagbhyam পদ্ধতিতে $123 \\times 321$ এর গুণফল কত?',
    options: ['39483', '39583', '38483', '39473'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধাপ ১: $3 \\times 1 = 3$।' },
      { step: 'ধাপ ২: ', content: '$2 \\times 1 + 3 \\times 2 = 8$।' },
      { step: 'ধাপ ৩: ', content: '$1 \\times 1 + 3 \\times 3 + 2 \\times 2 = 1 + 9 + 4 = 14$ (৪ বসে, ১ ক্যারি)।' },
      { step: 'ধাপ ৪: ', content: '$1 \\times 2 + 2 \\times 3 = 8$। ক্যারি যোগ: $8 + 1 = 9$।' },
      { step: 'ধাপ ৫: ', content: '$1 \\times 3 = 3$।' },
      { step: 'ধাপ ৬: ', content: 'একত্রে সাজিয়ে পাই $39483$।' }
    ],
    shortcutTrick: '💡 বৈদিক ৩-অঙ্কের ক্রিস-ক্রস কাঠামো সরাসরি প্রয়োগ করে পাই: 39483।'
  },
  {
    id: 'ch45_q48',
    text: 'ক্রিস-ক্রস পদ্ধতি ব্যবহার করে $67 \\times 43$ এর গুণফল নির্ণয় করো।',
    options: ['2881', '2781', '2871', '2981'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একক: $7 \\times 3 = 21$ (১ বসে, ২ ক্যারি)।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি: $6 \\times 3 + 7 \\times 4 = 18 + 28 = 46$। ক্যারি যোগ: $46 + 2 = 48$ (৮ বসে, ৪ ক্যারি)।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $6 \\times 4 = 24$। ক্যারি যোগ: $24 + 4 = 28$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $2881$।' }
    ],
    shortcutTrick: '💡 $21$ (carry 2) | $18+28+2=48$ (carry 4) | $24+4=28 \\rightarrow 2881$।'
  },
  {
    id: 'ch45_q49',
    text: 'বৈদিক গণিতের সাহায্যে $152 \\times 013$ এর গুণফল কত হবে?',
    options: ['1976', '1956', '1876', '1986'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩-অঙ্কের ক্রিস-ক্রস প্রয়োগ করি।' },
      { step: 'ধাপ ২:', content: 'একক: $2 \\times 3 = 6$।' },
      { step: 'ধাপ ৩:', content: '$5 \\times 3 + 2 \\times 1 = 17$ (৭ বসে, ১ ক্যারি)।' },
      { step: 'ধাপ ৪:', content: '$1 \\times 3 + 2 \\times 0 + 5 \\times 1 = 3 + 0 + 5 = 8$। ক্যারি যোগ: $8 + 1 = 9$।' },
      { step: 'ধাপ ৫:', content: '$1 \\times 1 + 5 \\times 0 = 1$।' },
      { step: 'ধাপ ৬:', content: '$1 \\times 0 = 0$।' },
      { step: 'ধাপ ৭:', content: 'একত্রে: $1976$।' }
    ],
    shortcutTrick: '💡 ৩-অঙ্ক ক্রিস-ক্রস পদ্ধতি ব্যবহার করে পাই $1976$।'
  },
  {
    id: 'ch45_q50',
    text: '$25 \\times 25$ এর মান ঊর্ধ্ব-তির্যগভ্যাম সূত্রের বদলে কোন বৈদিক সূত্রে দ্রুততম সময়ে করা যায়?',
    options: ['Ekadhikena Purvena', 'Nikhilam', 'Anurupyena', 'Paravartya'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু সংখ্যাটির শেষে ৫ আছে, তাই "Ekadhikena Purvena" সূত্রের সাহায্যে এটি সবচেয়ে কম সময়ে মাত্র ১ সেকেন্ডে করা সম্ভব।' }
    ],
    shortcutTrick: '💡 শেষে ৫ থাকলে একাদিকেন পূর্বেন সবচেয়ে দ্রুততম।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: একন্যূনেন পূর্বেণ (Ekanyunena Purvena) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q51',
    text: 'বৈদিক গণিতের "একন্যূনেন পূর্বেণ" (Ekanyunena Purvena) সূত্র ব্যবহার করে $45 \\times 99$ এর মান কত?',
    options: ['4455', '4555', '4445', '4355'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এই সূত্রটি ব্যবহার করা হয় যখন কোনো সংখ্যাকে কেবল ৯ দ্বারা গঠিত সংখ্যা (যেমন ৯৯, ৯৯৯) দিয়ে গুণ করতে হয়।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: গুণক থেকে ১ বিয়োগ করতে হবে: $45 - 1 = 44$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: ৯৯ থেকে প্রাপ্ত বামভাগের মান বিয়োগ করতে হবে: $99 - 44 = 55$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে সাজালে গুণফল হয় $4455$।' }
    ],
    shortcutTrick: '💡 বামভাগ: $45-1 = 44$, ডানভাগ: $99-44 = 55$ $\rightarrow 4455$।'
  },
  {
    id: 'ch45_q52',
    text: 'একন্যূনেন পূর্বেণ সুত্র প্রয়োগ করে $783 \\times 999$ এর সঠিক মান নির্ণয় করো।',
    options: ['782217', '782216', '783217', '781217'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $783 - 1 = 782$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $999 - 782 = 217$।' },
      { step: 'ধাপ ৩:', content: 'সংযুক্ত ফলাফল: $782217$।' }
    ],
    shortcutTrick: '💡 $783-1 = 782$ | $999-782 = 217 \\rightarrow 782217$।'
  },
  {
    id: 'ch45_q53',
    text: 'বৈদিক নিয়ম অনুসারে $8 \\times 9$ এর গুণফল একন্যূনেন পূর্বেণ সূত্রে কত হবে?',
    options: ['72', '71', '62', '82'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $8 - 1 = 7$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $9 - 7 = 2$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $72$।' }
    ],
    shortcutTrick: '💡 $8-1=7$ | $9-7=2 \\rightarrow 72$।'
  },
  {
    id: 'ch45_q54',
    text: '$5364 \\times 9999$ এর বৈদিক গুণফল নিচের কোনটি?',
    options: ['53634635', '53634636', '53644635', '53634535'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $5364 - 1 = 5363$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $9999 - 5363 = 4635$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $53634635$।' }
    ],
    shortcutTrick: '💡 $5364-1=5363$ | $9999-5363 = 4635 \\rightarrow 53634635$।'
  },
  {
    id: 'ch45_q55',
    text: 'যদি গুণের ক্ষেত্রে ৯ এর সংখ্যা মূল সংখ্যার চেয়ে কম হয়, যেমন $45 \\times 9$, তবে বৈদিক সমন্বয় কী হবে?',
    options: ['405', '415', '395', '425'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যখন ৯ এর সংখ্যা কম থাকে, তখন মূল সংখ্যাকে $10 - 1$ আকারে গুণ করাই সহজ।' },
      { step: 'ধাপ ২:', content: '$45 \\times (10 - 1) = 450 - 45 = 405$।' }
    ],
    shortcutTrick: '💡 $45 \\times 9 = 450 - 45 = 405$।'
  },
  {
    id: 'ch45_q56',
    text: '"Ekanyunena Purvena" সূত্রের সাহায্যে $82 \\times 99$ এর মান বের করো।',
    options: ['8118', '8117', '8218', '8018'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $82 - 1 = 81$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $99 - 81 = 18$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $8118$।' }
    ],
    shortcutTrick: '💡 $82-1=81$ | $99-81=18 \\rightarrow 8118$।'
  },
  {
    id: 'ch45_q57',
    text: '$12345 \\times 99999$ এর গুণফল নিখুঁতভাবে বৈদিক উপায়ে কত হবে?',
    options: ['1234487655', '1234487654', '1234587655', '1234488655'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $12345 - 1 = 12344$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $99999 - 12344 = 87655$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে সাজালে পাই $1234487655$।' }
    ],
    shortcutTrick: '💡 $12345-1=12344$ | $99999-12344=87655 \\rightarrow 1234487655$।'
  },
  {
    id: 'ch45_q58',
    text: 'বৈদিক গণিতে $65 \\times 999$ এর গুণন প্রক্রিয়াটি কীরূপ হবে?',
    options: ['064935', '64935', '064945', '065935'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অঙ্ক সংখ্যা সমান করতে $65$ কে $065$ লিখে নিতে হবে।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $065 - 1 = 064$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $999 - 064 = 935$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $064935$ বা $64935$।' }
    ],
    shortcutTrick: '💡 $065-1 = 064$ | $999-064 = 935 \\rightarrow 64935$।'
  },
  {
    id: 'ch45_q59',
    text: 'একন্যূনেন পূর্বেণ সূত্র দ্বারা $99 \\times 99$ এর বর্গমান কত?',
    options: ['9801', '9901', '9811', '9701'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $99 - 1 = 98$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $99 - 98 = 01$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $9801$।' }
    ],
    shortcutTrick: '💡 $99-1 = 98$ | $99-98 = 01 \\rightarrow 9801$।'
  },
  {
    id: 'ch45_q60',
    text: 'বৈদিক উপায়ে $742 \\times 999$ এর গুণফল কত?',
    options: ['741258', '741257', '742258', '740258'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $742 - 1 = 741$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $999 - 741 = 258$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $741258$।' }
    ],
    shortcutTrick: '💡 $742-1 = 741$ | $999-741 = 258 \\rightarrow 741258$।'
  },
  {
    id: 'ch45_q61',
    text: '"একন্যূনেন পূর্বেণ" শব্দটির বাংলা অর্থ কী?',
    options: ['আগেরটি থেকে এক কম', 'আগেরটি থেকে এক বেশি', 'সবই ৯ থেকে', 'কোণাকুণি বিয়োগ'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৈদিক পরিভাষায় "একন্যূনেন" মানে এক কম এবং "পূর্বেণ" মানে পূর্বেরটি থেকে।' }
    ],
    shortcutTrick: '💡 একন্যূনেন = এক কম, পূর্বেণ = পূর্বের সংখ্যা থেকে।'
  },
  {
    id: 'ch45_q62',
    text: 'বৈদিক গণিতে $23456 \\times 99999$ এর গুণফল মাত্র ২ সেকেন্ডে কত হবে?',
    options: ['2345576544', '2345576545', '2345676544', '2345575544'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $23456 - 1 = 23455$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $99999 - 23455 = 76544$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে সাজিয়ে পাই $2345576544$।' }
    ],
    shortcutTrick: '💡 $23456-1 = 23455$ | $99999-23455 = 76544 \\rightarrow 2345576544$।'
  },
  {
    id: 'ch45_q63',
    text: '$847 \\times 9999$ এর মান একন্যূনেন পূর্বেণ সূত্রে কত?',
    options: ['8469153', '8469154', '8479153', '8469253'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অঙ্ক মেলাতে $847$ কে $0847$ লিখি।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $0847 - 1 = 0846$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $9999 - 0846 = 9153$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $8469153$।' }
    ],
    shortcutTrick: '💡 $0847-1 = 0846$ | $9999-0846 = 9153 \\rightarrow 8469153$।'
  },
  {
    id: 'ch45_q64',
    text: 'বৈদিক উপায়ে $15 \\times 99$ এর গুণফল কত?',
    options: ['1485', '1475', '1585', '1385'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $15 - 1 = 14$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $99 - 14 = 85$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $1485$।' }
    ],
    shortcutTrick: '💡 $15-1=14$ | $99-14=85 \\rightarrow 1485$।'
  },
  {
    id: 'ch45_q65',
    text: '$9999 \\times 9999$ এর বর্গফল বৈদিক গণিত অনুযায়ী কত হবে?',
    options: ['99980001', '99990001', '99980011', '99980101'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $9999 - 1 = 9998$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $9999 - 9998 = 0001$।' },
      { step: 'ধাপ ৩:', content: 'একত্রে: $99980001$।' }
    ],
    shortcutTrick: '💡 $9999-1=9998$ | $9999-9998=0001 \\rightarrow 99980001$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বর্গ ও বর্গমূল নির্ণয় (Squaring & Square Roots - Yavadhunam & Anurupyena) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q66',
    text: 'বৈদিক গণিতের "Yavadhunam Tavadhunikritya Vargancha Yojayet" সূত্র প্রয়োগ করে $96$ এর বর্গ কত হবে?',
    options: ['9216', '9016', '9116', '9316'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এই সূত্রের অর্থ: সংখ্যাটি ভিত্তি থেকে যতটা কম, তা আরও কমিয়ে দিন এবং পাশে সেই বিচ্যুতির বর্গ বসিয়ে দিন।' },
      { step: 'ধাপ ২:', content: 'ভিত্তি = 100। বিচ্যুতি ($d$) = $96 - 100 = -4$।' },
      { step: 'ধাপ ৩:', content: 'বামভাগ: $96 + (-4) = 92$।' },
      { step: 'ধাপ ৪:', content: 'ডানভাগ: $(-4)^2 = 16$।' },
      { step: 'ধাপ ৫:', content: 'একত্রে: $9216$।' }
    ],
    shortcutTrick: '💡 $96$ একশ থেকে ৪ কম। তাই $96 - 4 = 92$ এবং $4^2 = 16 \\rightarrow 9216$।'
  },
  {
    id: 'ch45_q67',
    text: 'যাবদুনম (Yavadhunam) সূত্র প্রয়োগ করে $104$ এর বর্গ নির্ণয় করো।',
    options: ['10816', '10616', '10806', '10916'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 100। বিচ্যুতি ($d$) = $+4$ (বেশি)।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $104 + 4 = 108$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $4^2 = 16$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $10816$।' }
    ],
    shortcutTrick: '💡 ১০০ থেকে ৪ বেশি $\rightarrow 104 + 4 = 108$ | $4^2 = 16 \\rightarrow 10816$।'
  },
  {
    id: 'ch45_q68',
    text: 'বৈদিক দ্বন্দ্ব যোগ (Dwandwa Yoga / Duplex) পদ্ধতিতে $34$ এর বর্গ কত হবে?',
    options: ['1156', '1146', '1256', '1056'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ডুপ্লেক্স পদ্ধতি: $D(3) = 3^2 = 9$, $D(34) = 2 \\times (3 \\times 4) = 24$, $D(4) = 4^2 = 16$।' },
      { step: 'ধাপ ২:', content: 'ডান থেকে বামে সাজিয়ে ক্যারি হিসাব করি: $9 | 24 | 16$।' },
      { step: 'ধাপ ৩:', content: 'শেষ ঘর থেকে: $6$ বসে, ১ ক্যারি $\\rightarrow 24 + 1 = 25$ (৫ বসে, ২ ক্যারি) $\rightarrow 9 + 2 = 11$।' },
      { step: 'ধাপ ৪:', content: 'ফলাফল: $1156$।' }
    ],
    shortcutTrick: '💡 $3^2 = 9$ | $2\\times3\\times4 = 24$ | $4^2 = 16 \\rightarrow 9 | 24 | 16 \\rightarrow 1156$।'
  },
  {
    id: 'ch45_q69',
    text: 'Yavadhunam সূত্রানুসারে $91$ এর বর্গ নির্ণয় করো।',
    options: ['8281', '8181', '8291', '8381'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০০ থেকে ৯ কম। বিচ্যুতি $d = -9$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $91 - 9 = 82$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $9^2 = 81$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $8281$।' }
    ],
    shortcutTrick: '💡 ১০০ থেকে ৯ কম $\rightarrow 91 - 9 = 82$ | $9^2 = 81 \\rightarrow 8281$।'
  },
  {
    id: 'ch45_q70',
    text: 'দ্বন্দ্ব যোগ বা ডুপ্লেক্স পদ্ধতিতে একটি একক সংখ্যা $a$ এর ডুপ্লেক্স মান কত?',
    options: ['$a^2$', '$2a$', '$2a^2$', '$a^3$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৈদিক দ্বন্দ্ব যোগে যেকোনো একক অঙ্কের ডুপ্লেক্স (Duplex) হলো সেই সংখ্যাটির বর্গ ($a^2$)।' }
    ],
    shortcutTrick: '💡 Single digit duplex is its square: $D(a) = a^2$।'
  },
  {
    id: 'ch45_q71',
    text: 'Yavadhunam সূত্র ব্যবহার করে $1008$ এর বর্গ কত হবে?',
    options: ['1016064', '1016016', '101664', '1016008'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 1000। বিচ্যুতি $d = +8$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $1008 + 8 = 1016$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $8^2 = 064$ (যেহেতু ভিত্তি ১০০০, তাই ডানভাগে ৩টি অঙ্ক হতে হবে)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $1016064$।' }
    ],
    shortcutTrick: '💡 $1008+8 = 1016$ | $8^2 = 064$ (৩ অঙ্কের ফরম্যাট) $\rightarrow 1016064$।'
  },
  {
    id: 'ch45_q72',
    text: 'দ্বন্দ্ব যোগ পদ্ধতিতে $213$ এর ডুপ্লেক্স $D(213)$ এর মান কত?',
    options: ['13', '12', '14', '15'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩টি অঙ্কের ডুপ্লেক্স সূত্র: $D(abc) = 2(ac) + b^2$।' },
      { step: 'ধাপ ২:', content: 'এখানে $a=2, b=1, c=3$।' },
      { step: 'ধাপ ৩:', content: '$D(213) = 2(2 \\times 3) + 1^2 = 12 + 1 = 13$।' }
    ],
    shortcutTrick: '💡 চরম দুই অঙ্কের গুণফলের দ্বিগুণ + মাঝেরটির বর্গ: $2(2\\times3) + 1^2 = 13$।'
  },
  {
    id: 'ch45_q73',
    text: 'বৈদিক বিলোকনম (Vilokanam - Observation) পদ্ধতিতে $\\sqrt{2025}$ এর মান কত?',
    options: ['45', '35', '55', '50'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শেষ অংশ ২৫ নির্দেশ করে এককের অঙ্কটি ৫ হবে।' },
      { step: 'ধাপ ২:', content: 'প্রথম অংশ ২০ হলো দুটি ক্রমিক সংখ্যা $4 \\times 5$ এর গুণফল।' },
      { step: 'ধাপ ৩:', content: 'ছোট সংখ্যাটি (৪) দশকের স্থানে বসবে।' },
      { step: 'ধাপ ৪:', content: 'অতএব বর্গমূল = $45$।' }
    ],
    shortcutTrick: '💡 শেষে ২৫ মানে এককে ৫। $4 \\times 5 = 20$, তাই দশকের অঙ্ক ৪ $\rightarrow 45$।'
  },
  {
    id: 'ch45_q74',
    text: 'Vilokanam পদ্ধতিতে $\\sqrt{5625}$ এর দ্রুত মান নির্ণয় করো।',
    options: ['75', '65', '85', '70'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শেষে ২৫ আছে, তাই এককের অঙ্ক ৫।' },
      { step: 'ধাপ ২:', content: 'প্রথম অংশ ৫৬ হলো $7 \\times 8$ এর গুনফল।' },
      { step: 'ধাপ ৩:', content: 'ছোট অঙ্ক ৭ দশকের স্থানে বসবে।' },
      { step: 'ধাপ ৪:', content: 'উত্তর: $75$।' }
    ],
    shortcutTrick: '💡 $7 \\times 8 = 56$, এককে ৫ $\rightarrow 75$।'
  },
  {
    id: 'ch45_q75',
    text: 'যাবদুনম সূত্রানুসারে $997$ এর বর্গফল কত?',
    options: ['994009', '994090', '993009', '995009'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 1000। বিচ্যুতি $d = -3$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $997 - 3 = 994$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $3^2 = 009$ (৩ অঙ্কের ফরম্যাট)।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $994009$।' }
    ],
    shortcutTrick: '💡 $997 - 3 = 994$ | $3^2 = 009 \\rightarrow 994009$।'
  },
  {
    id: 'ch45_q76',
    text: 'বৈদিক দ্বন্দ্ব যোগে $25$ এর ডুপ্লেক্স মান কত?',
    options: ['20', '29', '25', '10'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২টি অঙ্কের ডুপ্লেক্স সূত্র: $D(ab) = 2ab$।' },
      { step: 'ধাপ ২:', content: '$D(25) = 2 \\times (2 \\times 5) = 20$।' }
    ],
    shortcutTrick: '💡 ২-অঙ্কের ডুপ্লেক্স = অঙ্কদ্বয়ের গুণফলের দ্বিগুণ: $2 \\times 2 \\times 5 = 20$।'
  },
  {
    id: 'ch45_q77',
    text: 'Vilokanam পদ্ধতিতে পূর্ণবর্গ সংখ্যা $9409$ এর বর্গমূল কত?',
    options: ['97', '93', '87', '99'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শেষ অঙ্ক ৯, তাই বর্গমূলের এককের অঙ্ক ৩ অথবা ৭ হতে পারে।' },
      { step: 'ধাপ ২:', content: 'প্রথম অংশ ৯৪ এর নিকটবর্তী ছোট বর্গসংখ্যাটি হলো ৮১ (যা ৯ এর বর্গ)। দশকের অঙ্ক ৯।' },
      { step: 'ধাপ ৩:', content: 'সংখ্যাটি ৯৩ নাকি ৯৭ তা নির্ধারণ করতে $9 \\times 10 = 90$ এর সাথে তুলনা করি। যেহেতু $94 > 90$, তাই বড় সংখ্যাটি অর্থাৎ ৯৭ হবে।' }
    ],
    shortcutTrick: '💡 দশকের অঙ্ক ৯। $9 \\times 10 = 90 < 94$। সুতরাং বড় একক অঙ্ক (৭) বসবে $\rightarrow 97$।'
  },
  {
    id: 'ch45_q78',
    text: 'Yavadhunam সূত্র ব্যবহার করে $13$ এর বর্গ কত হবে? (Base = 10)',
    options: ['169', '159', '179', '149'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 10। বিচ্যুতি $d = +3$।' },
      { step: 'ধাপ ২:', content: 'বামভাগ: $13 + 3 = 16$।' },
      { step: 'ধাপ ৩:', content: 'ডানভাগ: $3^2 = 9$।' },
      { step: 'ধাপ ৪:', content: 'একত্রে: $169$।' }
    ],
    shortcutTrick: '💡 $13 + 3 = 16$ | $3^2 = 9 \\rightarrow 169$।'
  },
  {
    id: 'ch45_q79',
    text: 'বৈদিক দ্বন্দ্ব যোগ পদ্ধতিতে $12$ এর বর্গ নির্ণয়ের ৩টি ধাপের ডুপ্লেক্স মানগুলি বাম থেকে ডানে কী হবে?',
    options: ['$D(1), D(12), D(2)$', '$D(2), D(12), D(1)$', '$D(1), D(2), D(12)$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেকোনো ২-অঙ্কের সংখ্যা $ab$ এর বর্গের ৩টি ধাপ হলো: $D(a) | D(ab) | D(b)$।' },
      { step: 'ধাপ ২:', content: 'অতএব $12$ এর ক্ষেত্রে ধাপগুলি হবে $D(1) | D(12) | D(2)$।' }
    ],
    shortcutTrick: '💡 বর্গের ডুপ্লেক্স বিন্যাস সর্বদা বাম থেকে ডানে প্রসারিত ও সংকুচিত হয়।'
  },
  {
    id: 'ch45_q80',
    text: 'Vilokanam পদ্ধতিতে $\\sqrt{1225}$ এর মান নির্ণয় করো।',
    options: ['35', '25', '45', '30'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এককের স্থানে ২৫ এর জন্য ৫ বসবে।' },
      { step: 'ধাপ ২:', content: 'প্রথম অংশ ১২ হলো $3 \\times 4$ এর গুণফল, ছোট সংখ্যা ৩ দশকের স্থানে বসবে।' },
      { step: 'ধাপ ৩:', content: 'উত্তর: $35$।' }
    ],
    shortcutTrick: '💡 $3 \\times 4 = 12$, এককে ৫ $\rightarrow 35$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: ভাগফল ও গুণফল যাচাইকরণ (Digit Sum & Gunanka - Beejank) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q81',
    text: 'বৈদিক গণিতে "বীজাঙ্ক" (Beejank / Digit Sum) পদ্ধতিতে $235$ এর বীজাঙ্ক কত?',
    options: ['1', '10', '8', '2'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজাঙ্ক হলো কোনো সংখ্যার অঙ্কগুলির ক্রমাগত যোগফল যতক্ষণ না একটি একক অঙ্ক পাওয়া যায়।' },
      { step: 'ধাপ ২:', content: 'সংখ্যার অঙ্ক সমষ্টি: $2 + 3 + 5 = 10$।' },
      { step: 'ধাপ ৩:', content: 'পুনরায় যোগফল: $1 + 0 = 1$।' },
      { step: 'ধাপ ৪:', content: 'নির্ণেয় বীজাঙ্ক = $1$।' }
    ],
    shortcutTrick: '💡 বীজাঙ্ক বের করতে সরাসরি ৯ দিয়ে ভাগ করলে প্রাপ্ত অবশিষ্টই হলো বীজাঙ্ক। $10 \\rightarrow 1+0 = 1$।'
  },
  {
    id: 'ch45_q82',
    text: 'বীজাঙ্ক পদ্ধতিতে $9$ কে শূন্য ($0$) এর সমতুল্য ধরা হয়। এই নিয়মে $987$ এর বীজাঙ্ক কত?',
    options: ['6', '24', '5', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা থেকে ৯ বাদ দিয়ে হিসাব সহজ করা যায়।' },
      { step: 'ধাপ ২:', content: '$987 \\rightarrow$ ৯ বাদ দিলে থাকে $8$ এবং $7$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল: $8 + 7 = 15 \\rightarrow 1 + 5 = 6$।' },
      { step: 'ধাপ ৪:', content: 'উত্তর = $6$।' }
    ],
    shortcutTrick: '💡 ৯ বাদ দিন: $9$ কাটা গেল, $8+7=15 \\rightarrow 1+5=6$।'
  },
  {
    id: 'ch45_q83',
    text: 'বীজাঙ্ক ব্যবহার করে $56 \\times 12 = 672$ সমীকরণটি সঠিক কিনা তা কীভাবে যাচাই করা যায়?',
    options: ['উভয় পক্ষের বীজাঙ্ক সমান হলে', 'ডানপক্ষের বীজাঙ্ক ৯ হলে', 'বামপক্ষের বীজাঙ্ক ২ হলে', 'সবকটি ভুল'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামপক্ষের বীজাঙ্কের গুণফল: $Beejank(56) \\times Beejank(12) = (5+6) \\times (1+2) = 11 \\times 3 \\rightarrow 2 \\times 3 = 6$।' },
      { step: 'ধাপ ২:', content: 'ডানপক্ষের বীজাঙ্ক: $Beejank(672) = 6+7+2 = 15 \\rightarrow 1+5 = 6$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু উভয় পক্ষের বীজাঙ্ক সমান ($6 = 6$), তাই সমীকরণটি সঠিক।' }
    ],
    shortcutTrick: '💡 LHS Beejank = $2 \\times 3 = 6$ | RHS Beejank = $6$। সমান বিধায় সঠিক।'
  },
  {
    id: 'ch45_q84',
    text: 'কোনো সংখ্যার বীজাঙ্ক নির্ণয়ের সময় $9$ যোগ বা বিয়োগ করলে মানের কী পরিবর্তন হয়?',
    options: ['বীজাঙ্ক অপরিবর্তিত থাকে', 'বীজাঙ্ক ৯ বেড়ে যায়', 'বীজাঙ্ক শূন্য হয়', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৈদিক গণিতে বীজাঙ্ক নির্ণয়ের ক্ষেত্রে ৯ যোগ বা বিয়োগ করলে বীজাঙ্কের মানের কোনো পরিবর্তন হয় না। এই কারণে ৯ কে বাদ দিয়ে দ্রুত হিসাব করা যায় (Casting out nines)।' }
    ],
    shortcutTrick: '💡 Casting out nines: ৯ এর উপস্থিতিতে বীজাঙ্কের মান পরিবর্তিত হয় না।'
  },
  {
    id: 'ch45_q85',
    text: '$43567$ এর বীজাঙ্ক কত?',
    options: ['7', '25', '8', '9'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4 + 3 + 5 + 6 + 7 = 25$।' },
      { step: 'ধাপ ২:', content: '$2 + 5 = 7$।' }
    ],
    shortcutTrick: '💡 ৯ বাদ দিন: $4+5=9$ (কাটা), $3+6=9$ (কাটা) $\rightarrow$ অবশিষ্ট থাকে $7$।'
  },
  {
    id: 'ch45_q86',
    text: 'বৈদিক পদ্ধতিতে ভাগের উত্তর যাচাই করার সঠিক নিয়মটি কী?',
    options: ['ভাজ্য = ভাজক × ভাগফল + ভাগশেষ', 'ভাজক = ভাজ্য × ভাগফল', 'LHS = RHS এর বর্গ', 'সবকটি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজাঙ্ক প্রয়োগে ভাগের সূত্রটি হলো: $Beejank(\\text{Dividend}) = Beejank(Beejank(\\text{Divisor}) \\times Beejank(\\text{Quotient}) + Beejank(\\text{Remainder}))$।' }
    ],
    shortcutTrick: '💡 standard relation: Dividend = Divisor × Quotient + Remainder.'
  },
  {
    id: 'ch45_q87',
    text: '$9999$ এর বীজাঙ্ক কত?',
    options: ['9', '0', '36', '1'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সকল অঙ্ক যোগ করি: $9+9+9+9 = 36 \\rightarrow 3+6 = 9$।' },
      { step: 'ধাপ ২:', content: 'বৈদিক গণিতে ৯ বা ০ একই নির্দেশ করে, তবে প্রথাগত বীজাঙ্ক হিসেবে ৯ কে ধরা হয়।' }
    ],
    shortcutTrick: '💡 বীজাঙ্ক সর্বদা ১ থেকে ৯ এর মধ্যে হয়। তাই $9999 \\rightarrow 9$।'
  },
  {
    id: 'ch45_q88',
    text: 'বীজাঙ্ক ব্যবহার করে $(35)^2 = 1225$ সমীকরণটি পরীক্ষা করো। সঠিক বীজাঙ্ক কত?',
    options: ['1', '8', '7', '9'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামভাগ: $Beejank(35) = 3+5 = 8$। বর্গ $= 8^2 = 64 \\rightarrow 6+4 = 10 \\rightarrow 1+0 = 1$।' },
      { step: 'ধাপ ২:', content: 'ডানভাগ: $Beejank(1225) = 1+2+2+5 = 10 \\rightarrow 1+0 = 1$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু LHS = RHS = 1, সমীকরণটি সঠিক।' }
    ],
    shortcutTrick: '💡 LHS: $8^2 = 64 \\rightarrow 1$ | RHS: $1225 \\rightarrow 1+2+2+5=10 \\rightarrow 1$।'
  },
  {
    id: 'ch45_q89',
    text: 'নিম্নোক্ত সংখ্যাগুলির মধ্যে কোনটির বীজাঙ্ক $5$?',
    options: ['1238', '1234', '9875', '4444'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি অপশনের বীজাঙ্ক নির্ণয় করি।' },
      { step: 'ধাপ ২:', content: 'অপশন ১: $1238 \\rightarrow 1+2+3+8 = 14 \\rightarrow 1+4 = 5$। এটিই সঠিক।' }
    ],
    shortcutTrick: '💡 $1+2+3+8 = 14 \\rightarrow 5$।'
  },
  {
    id: 'ch45_q90',
    text: 'বীজাঙ্ক $9$ যুক্ত যেকোনো সংখ্যাকে অন্য যেকোনো সংখ্যা দিয়ে গুণ করলে গুণফলের বীজাঙ্ক সর্বদা কত হবে?',
    options: ['9', '0', 'গুণকের বীজাঙ্ক', 'পরিবর্তনশীল'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু ৯ এর বীজাঙ্ক ৯, এবং যেকোনো সংখ্যাকে ৯ দিয়ে গুণ করলে গুণফলের বীজাঙ্ক সর্বদাই ৯ বা তার গুণিতক হয়।' },
      { step: 'ধাপ ২:', content: 'যেমন: $9 \\times 5 = 45 \\rightarrow 9$।' }
    ],
    shortcutTrick: '💡 $9 \\times \\text{Any Number} = \\text{Beejank is always } 9$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: নিখিলং সূত্র দ্বারা দ্রুত ভাগফল (Vedic Division - Nikhilam Method) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch45_q91',
    text: 'নিখিলং ভাগ পদ্ধতি ব্যবহার করে $111$ কে $9$ দ্বারা ভাগ করলে ভাগফল ও ভাগশেষ কত হবে?',
    options: ['ভাগফল 12, ভাগশেষ 3', 'ভাগফল 11, ভাগশেষ 2', 'ভাগফল 12, ভাগশেষ 1', 'ভাগফল 11, ভাগশেষ 3'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 10, ভাজক = 9। পরিপূরক বিচ্যুতি (Complement) = $+1$।' },
      { step: 'ধাপ ২:', content: 'ভাজ্য $111$ কে দুই ভাগে ভাগ করি: $11 | 1$ (ডানদিকে ১টি অঙ্ক থাকবে কারণ ভিত্তির শূন্য ১টি)।' },
      { step: 'ধাপ ৩:', content: 'প্রথম ১ নিচে নামালাম $\rightarrow$ ভাগফলের প্রথম অঙ্ক ১।' },
      { step: 'ধাপ ৪:', content: 'এই ১ কে পরিপূরক ১ দিয়ে গুণ করে পরের ১ এর নিচে বসাই: $1+1=2$ $\rightarrow$ ভাগফলের দ্বিতীয় অঙ্ক ২।' },
      { step: 'ধাপ ৫:', content: 'এই ২ কে পরিপূরক ১ দিয়ে গুণ করে শেষের ১ এর নিচে বসাই এবং যোগ করি: $1 + 2 = 3$ (ভাগশেষ)।' },
      { step: 'ধাপ ৬:', content: 'ফলাফল: ভাগফল 12, ভাগশেষ 3।' }
    ],
    shortcutTrick: '💡 Nikhilam Div: $11 | 1 \\rightarrow 1$ নামল। $1 \\times 1 = 1 \\rightarrow 1+1=2$। $2 \\times 1 = 2 \\rightarrow 1+2=3$ (Remainder)। Quotient = 12।'
  },
  {
    id: 'ch45_q92',
    text: 'বৈদিক নিখিলং ভাগ পদ্ধতিতে $23$ কে $9$ দ্বারা ভাগ করলে ভাগশেষ কত থাকে?',
    options: ['5', '2', '3', '4'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম অঙ্ক ২ নিচে নামবে (এটিই ভাগফল)।' },
      { step: 'ধাপ ২:', content: 'পরিপূরক ১ দিয়ে গুণ করে ৩ এর সাথে যোগ: $2 \\times 1 + 3 = 5$ (ভাগশেষ)।' },
      { step: 'ধাপ ৩:', content: 'অতএব ভাগফল ২ এবং ভাগশেষ ৫।' }
    ],
    shortcutTrick: '💡 ভাগফল = প্রথম অঙ্ক ২। ভাগশেষ = অঙ্কদ্বয়ের সমষ্টি $2+3=5$।'
  },
  {
    id: 'ch45_q93',
    text: 'বৈদিক গণিতের নিখিলং পদ্ধতিতে $104$ কে $8$ দ্বারা ভাগের ক্ষেত্রে ব্যবহৃত পরিপূরক অঙ্কটি কত?',
    options: ['2', '1', '3', '0'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 10, ভাজক = 8। পরিপূরক বিচ্যুতি = $10 - 8 = 2$।' }
    ],
    shortcutTrick: '💡 ভাজক ৮ হলে ১০ এর সাপেক্ষে পরিপূরক সর্বদা ২ হয়।'
  },
  {
    id: 'ch45_q94',
    text: 'নিখিলং সূত্রের সাহায্যে $121$ কে $8$ দ্বারা ভাগ করলে ভাগফল ও ভাগশেষ কত হবে?',
    options: ['ভাগফল 15, ভাগশেষ 1', 'ভাগফল 14, ভাগশেষ 3', 'ভাগফল 15, ভাগশেষ 2', 'ভাগফল 13, ভাগশেষ 5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাজক 8, পরিপূরক = 2। ভাজ্য $12 | 1$।' },
      { step: 'ধাপ ২:', content: '১ নিচে নামল $\rightarrow 1$।' },
      { step: 'ধাপ ৩:', content: '$1 \\times 2 = 2$। ২য় অঙ্কের সাথে যোগ: $2 + 2 = 4$ $\rightarrow$ ভাগফল 14।' },
      { step: 'ধাপ ৪:', content: '$4 \\times 2 = 8$। ৩য় অঙ্কের সাথে যোগ: $1 + 8 = 9$ (ভাগশেষ ভাজকের থেকে বড় হতে পারে না)।' },
      { step: 'ধাপ ৫:', content: '$9$ কে $8$ দিয়ে ভাগ করলে অতিরিক্ত ১ ভাগফল যুক্ত হবে এবং ১ ভাগশেষ থাকবে: $14+1 = 15$ ভাগফল, $1$ ভাগশেষ।' }
    ],
    shortcutTrick: '💡 প্রাথমিক ভাগফল 14, ভাগশেষ 9। যেহেতু $9 > 8$, তাই ভাগফল $14+1=15$ এবং ভাগশেষ $9-8=1$।'
  },
  {
    id: 'ch45_q95',
    text: 'বৈদিক নিয়মে $43$ কে $9$ দ্বারা ভাগ করলে ভাগফল ও ভাগশেষ কত হবে?',
    options: ['ভাগফল 4, ভাগশেষ 7', 'ভাগফল 4, ভাগশেষ 5', 'ভাগফল 3, ভাগশেষ 8', 'ভাগফল 5, ভাগশেষ 2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম অঙ্ক ৪ ভাগফল নির্দেশ করে।' },
      { step: 'ধাপ ২:', content: 'ভাগশেষ হবে অঙ্ক দুটির যোগফল: $4 + 3 = 7$।' },
      { step: 'ধাপ ৩:', content: 'ফলাফল: ৪ ভাগফল, ৭ ভাগশেষ।' }
    ],
    shortcutTrick: '💡 ভাগফল = ৪, ভাগশেষ = $4+3 = 7$।'
  },
  {
    id: 'ch45_q96',
    text: 'নিখিলং ভাগ পদ্ধতিতে ভাজক যদি $99$ হয়, তবে ভাজ্যের ডানদিক থেকে কয়টি অঙ্ক ভাগশেষের জন্য আলাদা করতে হবে?',
    options: ['2টি', '1টি', '3টি', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাজক ৯৯ এর ভিত্তি হলো ১০০। যেহেতু ১০০ তে ২টি শূন্য রয়েছে, তাই ভাজ্যের ডানদিক থেকে ২টি অঙ্ক ভাগশেষের জন্য আলাদা রাখতে হবে।' }
    ],
    shortcutTrick: '💡 ভিত্তির শূন্য সংখ্যা = ভাগশেষের ঘরের অঙ্ক সংখ্যা। Base 100 has 2 zeros $\rightarrow 2$ digits.'
  },
  {
    id: 'ch45_q97',
    text: 'বৈদিক পদ্ধতিতে $1112$ কে $99$ দ্বারা ভাগ করলে ভাগশেষ কত হবে?',
    options: ['23', '13', '12', '11'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 100, ভাজক = 99। পরিপূরক = $01$।' },
      { step: 'ধাপ ২:', content: 'ভাজ্য আলাদা করি: $11 | 12$।' },
      { step: 'ধাপ ৩:', content: '১১ নিচে নামল (ভাগফল = ১১)।' },
      { step: 'ধাপ ৪:', content: '$11 \\times 01 = 11$। এটি ডানভাগের সাথে যোগ করি: $12 + 11 = 23$ (ভাগশেষ)।' },
      { step: 'ধাপ ৫:', content: 'ভাগশেষ = 23।' }
    ],
    shortcutTrick: '💡 ভাগফল ১১। ভাগশেষ $= 12 + 11 = 23$।'
  },
  {
    id: 'ch45_q98',
    text: 'নিখিলং পদ্ধতিতে $1002$ কে $88$ দ্বারা ভাগের ক্ষেত্রে পরিপূরক সংখ্যাটি কত?',
    options: ['12', '11', '22', '02'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভিত্তি = 100। ভাজক = 88।' },
      { step: 'ধাপ ২:', content: 'পরিপূরক বিচ্যুতি = $100 - 88 = 12$।' }
    ],
    shortcutTrick: '💡 $100 - 88 = 12$।'
  },
  {
    id: 'ch45_q99',
    text: 'বৈদিক পদ্ধতিতে $123$ কে $9$ দ্বারা ভাগ করলে প্রাপ্ত প্রারম্ভিক ভাগশেষ কত হয় এবং তার সংশোধিত রূপ কোনটি?',
    options: ['প্রারম্ভিক ৯, সংশোধিত ভাগফল 13 এবং ভাগশেষ 6', 'প্রারম্ভিক ৬, সংশোধিত ভাগফল 13 এবং ভাগশেষ 3', 'প্রারম্ভিক ৬, সংশোধিত ভাগফল 12 এবং ভাগশেষ 6', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাজ্য $12 | 3$। ১ নিচে নামল $\rightarrow 1$।' },
      { step: 'ধাপ ২:', content: '$1 \\times 1 = 1 \\rightarrow 2 + 1 = 3$ $\rightarrow$ ভাগফল 13।' },
      { step: 'ধাপ ৩:', content: '$3 \\times 1 = 3 \\rightarrow 3 + 3 = 6$ (ভাগশেষ)।' },
      { step: 'ধাপ ৪:', content: 'সংশোধিত রূপ: ভাগফল 13, ভাগশেষ 6।' }
    ],
    shortcutTrick: '💡 সরাসরি বৈদিক ভাগের নিয়মে ভাগফল 13 এবং ভাগশেষ 6 পাওয়া যায়।'
  },
  {
    id: 'ch45_q100',
    text: 'বৈদিক গণিতের নিখিলং ভাগের পরিপূরক মূলত কোন ধারণাটির ওপর প্রতিষ্ঠিত?',
    options: ['ঋণাত্মক সংখ্যার পরম মান', '১০ এর পরিপূরক (Tens Complement)', 'দ্বি-অঙ্ক বিভাজন', 'কোনোটিই নয়'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিখিলং ভাগে বিচ্যুতি পরিমাপ করতে ১০ বা ১০০ এর পরিপূরক (Tens/Hundreds Complement) ব্যবহার করা হয়, যা গণনাকে যোগের মতো সহজ করে তোলে।' }
    ],
    shortcutTrick: '💡 Complementary arithmetic simplifies subtraction into addition.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter45Questions;
}

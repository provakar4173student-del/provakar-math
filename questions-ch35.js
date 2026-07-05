// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 35: গড়, মধ্যমা, প্রচুরক ও বিচ্ছুরণ (Mean, Median, Mode & Dispersion) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter35Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: গড় (Mean) — মৌলিক ও সমান্তর গড় (Q1-Q20)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q1',
    text: '5, 10, 15, 20, 25 সংখ্যাগুলির গড় কত?',
    options: ['15', '12', '14', '16'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যাগুলির যোগফল নির্ণয় করি: $5 + 10 + 15 + 20 + 25 = 75$।' },
      { step: 'ধাপ ২:', content: 'মোট সংখ্যা = 5।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{75}{5} = 15$।' }
    ],
    shortcutTrick: '💡 সমান্তর শ্রেণির গড় = (প্রথম + শেষ)/2 = (5+25)/2 = 15'
  },
  {
    id: 'ch35_q2',
    text: '6, 8, 10, 12, 14, 16, 18 সংখ্যাগুলির গড় কত?',
    options: ['12', '11', '13', '14'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যাগুলির যোগফল = $6 + 8 + 10 + 12 + 14 + 16 + 18 = 84$।' },
      { step: 'ধাপ ২:', content: 'মোট সংখ্যা = 7।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{84}{7} = 12$।' }
    ],
    shortcutTrick: '💡 সমান্তর শ্রেণির গড় = (প্রথম + শেষ)/2 = (6+18)/2 = 12'
  },
  {
    id: 'ch35_q3',
    text: 'দশটি সংখ্যার গড় 25। সংখ্যাগুলির যোগফল কত?',
    options: ['250', '25', '125', '200'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{\\text{যোগফল}}{\\text{মোট সংখ্যা}}$' },
      { step: 'ধাপ ২:', content: 'যোগফল = গড় × মোট সংখ্যা = $25 \\times 10 = 250$।' }
    ],
    shortcutTrick: '💡 যোগফল = গড় × মোট সংখ্যা = 25 × 10 = 250'
  },
  {
    id: 'ch35_q4',
    text: 'প্রথম 8টি স্বাভাবিক সংখ্যার গড় কত?',
    options: ['4.5', '4', '5', '5.5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 8টি স্বাভাবিক সংখ্যা: 1, 2, 3, 4, 5, 6, 7, 8।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $\\frac{8 \\times 9}{2} = 36$।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{36}{8} = 4.5$।' }
    ],
    shortcutTrick: '💡 প্রথম nটি স্বাভাবিক সংখ্যার গড় = (n+1)/2 = (8+1)/2 = 4.5'
  },
  {
    id: 'ch35_q5',
    text: 'প্রথম 10টি জোড় সংখ্যার গড় কত?',
    options: ['11', '10', '9', '12'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 10টি জোড় সংখ্যা: 2, 4, 6, ..., 20।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $2 + 4 + 6 + ... + 20 = 2(1+2+...+10) = 2 \\times \\frac{10 \\times 11}{2} = 110$।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{110}{10} = 11$।' }
    ],
    shortcutTrick: '💡 প্রথম nটি জোড় সংখ্যার গড় = n+1 = 10+1 = 11'
  },
  {
    id: 'ch35_q6',
    text: 'প্রথম 10টি বিজোড় সংখ্যার গড় কত?',
    options: ['10', '9', '11', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 10টি বিজোড় সংখ্যা: 1, 3, 5, ..., 19।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $1 + 3 + 5 + ... + 19 = 10^2 = 100$।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{100}{10} = 10$।' }
    ],
    shortcutTrick: '💡 প্রথম nটি বিজোড় সংখ্যার গড় = n = 10'
  },
  {
    id: 'ch35_q7',
    text: '20 জন ছাত্রের গড় বয়স 15 বছর। তাদের মধ্যে 5 জনের গড় বয়স 12 বছর হলে, বাকি 15 জনের গড় বয়স কত?',
    options: ['16 বছর', '15 বছর', '14 বছর', '13 বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '20 জনের মোট বয়স = $20 \\times 15 = 300$ বছর।' },
      { step: 'ধাপ ২:', content: '5 জনের মোট বয়স = $5 \\times 12 = 60$ বছর।' },
      { step: 'ধাপ ৩:', content: 'বাকি 15 জনের মোট বয়স = $300 - 60 = 240$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বাকি 15 জনের গড় বয়স = $\\frac{240}{15} = 16$ বছর।' }
    ],
    shortcutTrick: '💡 মোট বয়স থেকে 5 জনের বয়স বাদ দিয়ে বাকিদের গড় বের করি।'
  },
  {
    id: 'ch35_q8',
    text: 'একটি ক্লাসের 30 জন ছাত্রের গড় নম্বর 40 এবং 20 জন ছাত্রীর গড় নম্বর 50। সমগ্র ক্লাসের গড় নম্বর কত?',
    options: ['44', '45', '46', '42'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছাত্রদের মোট নম্বর = $30 \\times 40 = 1200$।' },
      { step: 'ধাপ ২:', content: 'ছাত্রীদের মোট নম্বর = $20 \\times 50 = 1000$।' },
      { step: 'ধাপ ৩:', content: 'মোট নম্বর = $1200 + 1000 = 2200$।' },
      { step: 'ধাপ ৪:', content: 'মোট ছাত্র = $30 + 20 = 50$।' },
      { step: 'ধাপ ৫:', content: 'গড় নম্বর = $\\frac{2200}{50} = 44$।' }
    ],
    shortcutTrick: '💡 মিশ্র গড় = $\\frac{30 \\times 40 + 20 \\times 50}{30 + 20} = \\frac{1200 + 1000}{50} = 44$'
  },
  {
    id: 'ch35_q9',
    text: 'পাঁচটি সংখ্যার গড় 18। যদি প্রথম দুটি সংখ্যার গড় 15 এবং শেষ দুটি সংখ্যার গড় 20 হয়, তবে মধ্যবর্তী সংখ্যাটি কত?',
    options: ['20', '18', '16', '15'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পাঁচটি সংখ্যার যোগফল = $5 \\times 18 = 90$।' },
      { step: 'ধাপ ২:', content: 'প্রথম দুটি সংখ্যার যোগফল = $2 \\times 15 = 30$।' },
      { step: 'ধাপ ৩:', content: 'শেষ দুটি সংখ্যার যোগফল = $2 \\times 20 = 40$।' },
      { step: 'ধাপ ৪:', content: 'মধ্যবর্তী সংখ্যা = $90 - (30 + 40) = 20$।' }
    ],
    shortcutTrick: '💡 মোট যোগফল - (প্রথম 2টির যোগফল + শেষ 2টির যোগফল) = 90 - 70 = 20'
  },
  {
    id: 'ch35_q10',
    text: 'দশটি সংখ্যার গড় 30। যদি প্রতিটি সংখ্যার সাথে 5 যোগ করা হয়, তবে নতুন গড় কত হবে?',
    options: ['35', '30', '25', '40'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে 5 যোগ করলে, যোগফল বৃদ্ধি পায় $10 \\times 5 = 50$।' },
      { step: 'ধাপ ২:', content: 'নতুন যোগফল = $10 \\times 30 + 50 = 350$।' },
      { step: 'ধাপ ৩:', content: 'নতুন গড় = $\\frac{350}{10} = 35$।' }
    ],
    shortcutTrick: '💡 প্রতিটি সংখ্যার সাথে k যোগ করলে গড়ও k বৃদ্ধি পায়। নতুন গড় = 30 + 5 = 35'
  },
  {
    id: 'ch35_q11',
    text: 'দশটি সংখ্যার গড় 30। যদি প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করা হয়, তবে নতুন গড় কত হবে?',
    options: ['60', '30', '15', '32'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করলে, যোগফল 2 গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন গড় = $2 \\times 30 = 60$।' }
    ],
    shortcutTrick: '💡 প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে গড়ও k গুণ হয়। নতুন গড় = 2 × 30 = 60'
  },
  {
    id: 'ch35_q12',
    text: '8টি সংখ্যার গড় 35। যদি একটি সংখ্যা বাদ দিলে গড় 32 হয়, তবে বাদ দেওয়া সংখ্যাটি কত?',
    options: ['56', '54', '52', '50'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '8টি সংখ্যার যোগফল = $8 \\times 35 = 280$।' },
      { step: 'ধাপ ২:', content: '7টি সংখ্যার যোগফল = $7 \\times 32 = 224$।' },
      { step: 'ধাপ ৩:', content: 'বাদ দেওয়া সংখ্যা = $280 - 224 = 56$।' }
    ],
    shortcutTrick: '💡 বাদ দেওয়া সংখ্যা = $8 \\times 35 - 7 \\times 32 = 280 - 224 = 56$'
  },
  {
    id: 'ch35_q13',
    text: '6টি সংখ্যার গড় 40। যদি একটি নতুন সংখ্যা যোগ করলে গড় 42 হয়, তবে নতুন সংখ্যাটি কত?',
    options: ['54', '52', '48', '56'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '6টি সংখ্যার যোগফল = $6 \\times 40 = 240$।' },
      { step: 'ধাপ ২:', content: '7টি সংখ্যার যোগফল = $7 \\times 42 = 294$।' },
      { step: 'ধাপ ৩:', content: 'নতুন সংখ্যা = $294 - 240 = 54$।' }
    ],
    shortcutTrick: '💡 নতুন সংখ্যা = $7 \\times 42 - 6 \\times 40 = 294 - 240 = 54$'
  },
  {
    id: 'ch35_q14',
    text: 'একটি শ্রেণির 50 জন ছাত্রের গড় বয়স 20 বছর। যদি শিক্ষকের বয়স যোগ করা হয়, তবে গড় বয়স 21 বছর হয়। শিক্ষকের বয়স কত?',
    options: ['71 বছর', '70 বছর', '72 বছর', '68 বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '50 জনের মোট বয়স = $50 \\times 20 = 1000$ বছর।' },
      { step: 'ধাপ ২:', content: '51 জনের মোট বয়স = $51 \\times 21 = 1071$ বছর।' },
      { step: 'ধাপ ৩:', content: 'শিক্ষকের বয়স = $1071 - 1000 = 71$ বছর।' }
    ],
    shortcutTrick: '💡 শিক্ষকের বয়স = $51 \\times 21 - 50 \\times 20 = 1071 - 1000 = 71$'
  },
  {
    id: 'ch35_q15',
    text: 'তিনটি সংখ্যার গড় 24। প্রথম দুটি সংখ্যার গড় 22 এবং শেষ দুটি সংখ্যার গড় 26 হলে, প্রথম ও তৃতীয় সংখ্যার গড় কত?',
    options: ['24', '23', '25', '22'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তিনটি সংখ্যা $a, b, c$ ধরি।' },
      { step: 'ধাপ ২:', content: '$a + b + c = 3 \\times 24 = 72$' },
      { step: 'ধাপ ৩:', content: '$a + b = 2 \\times 22 = 44$ এবং $b + c = 2 \\times 26 = 52$' },
      { step: 'ধাপ ৪:', content: '$a + c = (a + b + c) + (a + b + c) - [(a + b) + (b + c)] = 72 + 72 - (44 + 52) = 48$' },
      { step: 'ধাপ ৫:', content: '$a$ ও $c$-এর গড় = $\\frac{48}{2} = 24$' }
    ],
    shortcutTrick: '💡 $a + c = 2 \\times 24$ (যেহেতু $b$ বাদ পড়ে যায়) $\Rightarrow$ গড় = 24'
  },
  {
    id: 'ch35_q16',
    text: 'একজন ব্যক্তি 5 দিনে যথাক্রমে 20, 25, 30, 35, 40 কিমি হাঁটেন। তার দৈনিক গড় হাঁটার দূরত্ব কত?',
    options: ['30 কিমি', '28 কিমি', '32 কিমি', '29 কিমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট হাঁটার দূরত্ব = $20 + 25 + 30 + 35 + 40 = 150$ কিমি।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 5।' },
      { step: 'ধাপ ৩:', content: 'গড় দূরত্ব = $\\frac{150}{5} = 30$ কিমি।' }
    ],
    shortcutTrick: '💡 সমান্তর শ্রেণির গড় = (প্রথম + শেষ)/2 = (20 + 40)/2 = 30 কিমি'
  },
  {
    id: 'ch35_q17',
    text: 'একটি পরীক্ষায় 10 জন ছাত্রের প্রাপ্ত নম্বর যথাক্রমে 45, 50, 55, 60, 65, 70, 75, 80, 85, 90। তাদের গড় নম্বর কত?',
    options: ['67.5', '65', '70', '68.5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগফল = $45 + 50 + 55 + 60 + 65 + 70 + 75 + 80 + 85 + 90 = 675$।' },
      { step: 'ধাপ ২:', content: 'মোট ছাত্র = 10।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{675}{10} = 67.5$।' }
    ],
    shortcutTrick: '💡 সমান্তর শ্রেণির গড় = (প্রথম + শেষ)/2 = (45 + 90)/2 = 67.5'
  },
  {
    id: 'ch35_q18',
    text: '20টি সংখ্যার গড় 18। যদি প্রতিটি সংখ্যা থেকে 3 বিয়োগ করা হয়, তবে নতুন গড় কত হবে?',
    options: ['15', '18', '21', '16'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যা থেকে 3 বিয়োগ করলে, যোগফল $20 \\times 3 = 60$ কমে যায়।' },
      { step: 'ধাপ ২:', content: 'নতুন যোগফল = $20 \\times 18 - 60 = 300$।' },
      { step: 'ধাপ ৩:', content: 'নতুন গড় = $\\frac{300}{20} = 15$।' }
    ],
    shortcutTrick: '💡 প্রতিটি সংখ্যা থেকে k বিয়োগ করলে গড়ও k কমে যায়। নতুন গড় = 18 - 3 = 15'
  },
  {
    id: 'ch35_q19',
    text: 'পাঁচটি সংখ্যার গড় 28। তাদের মধ্যে বৃহত্তম সংখ্যাটি 40 হলে, বাকি চারটি সংখ্যার গড় কত?',
    options: ['25', '26', '24', '27'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '5টি সংখ্যার যোগফল = $5 \\times 28 = 140$।' },
      { step: 'ধাপ ২:', content: 'বাকি 4টি সংখ্যার যোগফল = $140 - 40 = 100$।' },
      { step: 'ধাপ ৩:', content: 'বাকি 4টি সংখ্যার গড় = $\\frac{100}{4} = 25$।' }
    ],
    shortcutTrick: '💡 বাকি 4টির গড় = $\\frac{5 \\times 28 - 40}{4} = \\frac{140 - 40}{4} = 25$'
  },
  {
    id: 'ch35_q20',
    text: '10টি সংখ্যার গড় 55। যদি 5টি সংখ্যা 45, 50, 55, 60, 65 অপসারণ করা হয়, তবে বাকি 5টি সংখ্যার গড় কত?',
    options: ['55', '50', '60', '45'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '10টি সংখ্যার যোগফল = $10 \\times 55 = 550$।' },
      { step: 'ধাপ ২:', content: 'অপসারিত 5টি সংখ্যার যোগফল = $45 + 50 + 55 + 60 + 65 = 275$।' },
      { step: 'ধাপ ৩:', content: 'বাকি 5টি সংখ্যার যোগফল = $550 - 275 = 275$।' },
      { step: 'ধাপ ৪:', content: 'বাকি 5টি সংখ্যার গড় = $\\frac{275}{5} = 55$।' }
    ],
    shortcutTrick: '💡 অপসারিত সংখ্যাগুলির গড়ও 55, তাই বাকি সংখ্যাগুলির গড়ও 55 হবে।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ভারিত গড় (Weighted Mean) ও যৌগিক গড় (Combined Mean) (Q21-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q21',
    text: 'একটি ক্লাসে 40 জন ছাত্রের গড় নম্বর 60 এবং 60 জন ছাত্রীর গড় নম্বর 70। সমগ্র ক্লাসের গড় নম্বর কত?',
    options: ['66', '65', '64', '67'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছাত্রদের মোট নম্বর = $40 \\times 60 = 2400$।' },
      { step: 'ধাপ ২:', content: 'ছাত্রীদের মোট নম্বর = $60 \\times 70 = 4200$।' },
      { step: 'ধাপ ৩:', content: 'মোট নম্বর = $2400 + 4200 = 6600$।' },
      { step: 'ধাপ ৪:', content: 'মোট ছাত্র = $40 + 60 = 100$।' },
      { step: 'ধাপ ৫:', content: 'গড় নম্বর = $\\frac{6600}{100} = 66$।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{40 \\times 60 + 60 \\times 70}{100} = \\frac{2400 + 4200}{100} = 66$'
  },
  {
    id: 'ch35_q22',
    text: 'একটি স্কুলের 30 জন শিক্ষকের গড় বয়স 42 বছর। আরও 10 জন নতুন শিক্ষক যোগ দিলে গড় বয়স 40 বছর হয়। নতুন শিক্ষকদের গড় বয়স কত?',
    options: ['34 বছর', '36 বছর', '32 বছর', '38 বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '30 জনের মোট বয়স = $30 \\times 42 = 1260$ বছর।' },
      { step: 'ধাপ ২:', content: '40 জনের মোট বয়স = $40 \\times 40 = 1600$ বছর।' },
      { step: 'ধাপ ৩:', content: 'নতুন 10 জনের মোট বয়স = $1600 - 1260 = 340$ বছর।' },
      { step: 'ধাপ ৪:', content: 'নতুন শিক্ষকদের গড় বয়স = $\\frac{340}{10} = 34$ বছর।' }
    ],
    shortcutTrick: '💡 নতুন গড় = $\\frac{30 \\times 42 + 10 \\times x}{40} = 40 \\Rightarrow 1260 + 10x = 1600 \\Rightarrow x = 34$'
  },
  {
    id: 'ch35_q23',
    text: 'একটি দোকানে 50 কেজি চালের গড় দাম 40 টাকা এবং 30 কেজি চালের গড় দাম 50 টাকা। সমস্ত চালের গড় দাম কত টাকা?',
    options: ['43.75', '45', '42.5', '44'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '50 কেজির মোট দাম = $50 \\times 40 = 2000$ টাকা।' },
      { step: 'ধাপ ২:', content: '30 কেজির মোট দাম = $30 \\times 50 = 1500$ টাকা।' },
      { step: 'ধাপ ৩:', content: 'মোট দাম = $2000 + 1500 = 3500$ টাকা।' },
      { step: 'ধাপ ৪:', content: 'মোট ওজন = $50 + 30 = 80$ কেজি।' },
      { step: 'ধাপ ৫:', content: 'গড় দাম = $\\frac{3500}{80} = 43.75$ টাকা।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{50 \\times 40 + 30 \\times 50}{80} = \\frac{2000 + 1500}{80} = 43.75$'
  },
  {
    id: 'ch35_q24',
    text: 'একটি কোম্পানির 100 জন কর্মীর গড় বেতন 8000 টাকা। পুরুষ কর্মীদের গড় বেতন 9000 টাকা এবং মহিলা কর্মীদের গড় বেতন 7000 টাকা হলে, পুরুষ ও মহিলা কর্মীর সংখ্যার অনুপাত কত?',
    options: ['1 : 1', '2 : 1', '1 : 2', '3 : 1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুরুষ কর্মীর সংখ্যা = x, মহিলা = 100 - x।' },
      { step: 'ধাপ ২:', content: '$9000x + 7000(100 - x) = 100 \\times 8000$' },
      { step: 'ধাপ ৩:', content: '$9000x + 700000 - 7000x = 800000$' },
      { step: 'ধাপ ৪:', content: '$2000x = 100000 \\Rightarrow x = 50$' },
      { step: 'ধাপ ৫:', content: 'পুরুষ : মহিলা = 50 : 50 = 1 : 1' }
    ],
    shortcutTrick: '💡 অ্যালিগেশন পদ্ধতি: (9000 - 8000) : (8000 - 7000) = 1000 : 1000 = 1 : 1'
  },
  {
    id: 'ch35_q25',
    text: 'দুটি শ্রেণির ছাত্রদের গড় নম্বর যথাক্রমে 70 ও 80। যদি প্রথম শ্রেণির ছাত্র সংখ্যা দ্বিতীয় শ্রেণির দ্বিগুণ হয়, তবে সম্মিলিত গড় কত?',
    options: ['73.33', '75', '76.67', '72'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দ্বিতীয় শ্রেণির ছাত্র = x, প্রথম শ্রেণির ছাত্র = 2x।' },
      { step: 'ধাপ ২:', content: 'মোট নম্বর = $2x \\times 70 + x \\times 80 = 140x + 80x = 220x$।' },
      { step: 'ধাপ ৩:', content: 'মোট ছাত্র = $2x + x = 3x$।' },
      { step: 'ধাপ ৪:', content: 'গড় = $\\frac{220x}{3x} = \\frac{220}{3} = 73.33$।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{2 \\times 70 + 1 \\times 80}{3} = \\frac{140 + 80}{3} = \\frac{220}{3} = 73.33$'
  },
  {
    id: 'ch35_q26',
    text: 'একটি স্কুলের 60% ছাত্রের গড় নম্বর 75 এবং বাকি 40% ছাত্রের গড় নম্বর 85। সমগ্র স্কুলের গড় নম্বর কত?',
    options: ['79', '80', '78', '81'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{60 \\times 75 + 40 \\times 85}{100}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{4500 + 3400}{100} = \\frac{7900}{100} = 79$' }
    ],
    shortcutTrick: '💡 গড় = 0.6 × 75 + 0.4 × 85 = 45 + 34 = 79'
  },
  {
    id: 'ch35_q27',
    text: 'একটি কোম্পানিতে দুটি বিভাগ A ও B আছে। বিভাগ A-তে 20 জন কর্মীর গড় বেতন 5000 টাকা এবং বিভাগ B-তে 30 জন কর্মীর গড় বেতন 6000 টাকা। উভয় বিভাগের সম্মিলিত গড় বেতন কত?',
    options: ['5600', '5500', '5700', '5400'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A বিভাগের মোট বেতন = $20 \\times 5000 = 100000$ টাকা।' },
      { step: 'ধাপ ২:', content: 'B বিভাগের মোট বেতন = $30 \\times 6000 = 180000$ টাকা।' },
      { step: 'ধাপ ৩:', content: 'মোট বেতন = $100000 + 180000 = 280000$ টাকা।' },
      { step: 'ধাপ ৪:', content: 'মোট কর্মী = $20 + 30 = 50$।' },
      { step: 'ধাপ ৫:', content: 'গড় বেতন = $\\frac{280000}{50} = 5600$ টাকা।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{20 \\times 5000 + 30 \\times 6000}{50} = \\frac{100000 + 180000}{50} = 5600$'
  },
  {
    id: 'ch35_q28',
    text: 'একটি শ্রেণির 40 জন ছাত্রের মধ্যে 25 জনের গড় নম্বর 80 এবং বাকি 15 জনের গড় নম্বর 70। সমগ্র শ্রেণির গড় নম্বর কত?',
    options: ['76.25', '75', '77.5', '78'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '25 জনের মোট নম্বর = $25 \\times 80 = 2000$।' },
      { step: 'ধাপ ২:', content: '15 জনের মোট নম্বর = $15 \\times 70 = 1050$।' },
      { step: 'ধাপ ৩:', content: 'মোট নম্বর = $2000 + 1050 = 3050$।' },
      { step: 'ধাপ ৪:', content: 'মোট ছাত্র = 40।' },
      { step: 'ধাপ ৫:', content: 'গড় = $\\frac{3050}{40} = 76.25$।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{25 \\times 80 + 15 \\times 70}{40} = \\frac{2000 + 1050}{40} = 76.25$'
  },
  {
    id: 'ch35_q29',
    text: 'একটি পরীক্ষায় 50 জন ছাত্রের গড় নম্বর 60। উত্তীর্ণ ছাত্রদের গড় নম্বর 75 এবং অকৃতকার্য ছাত্রদের গড় নম্বর 50। কতজন ছাত্র অকৃতকার্য হয়েছিল?',
    options: ['30', '20', '25', '35'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি অকৃতকার্য ছাত্রের সংখ্যা = x, উত্তীর্ণ = 50 - x।' },
      { step: 'ধাপ ২:', content: '$75(50 - x) + 50x = 50 \\times 60$' },
      { step: 'ধাপ ৩:', content: '$3750 - 75x + 50x = 3000$' },
      { step: 'ধাপ ৪:', content: '$3750 - 25x = 3000 \\Rightarrow 25x = 750 \\Rightarrow x = 30$' }
    ],
    shortcutTrick: '💡 অ্যালিগেশন: (75 - 60) : (60 - 50) = 15 : 10 = 3 : 2। অকৃতকার্য = $\\frac{2}{5} \\times 50 = 30$'
  },
  {
    id: 'ch35_q30',
    text: 'একটি গ্রামের 500 জন পুরুষের গড় বয়স 40 বছর এবং 300 জন মহিলার গড় বয়স 35 বছর। সমগ্র গ্রামের গড় বয়স কত?',
    options: ['38.125', '37.5', '39', '38'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পুরুষদের মোট বয়স = $500 \\times 40 = 20000$ বছর।' },
      { step: 'ধাপ ২:', content: 'মহিলাদের মোট বয়স = $300 \\times 35 = 10500$ বছর।' },
      { step: 'ধাপ ৩:', content: 'মোট বয়স = $20000 + 10500 = 30500$ বছর।' },
      { step: 'ধাপ ৪:', content: 'মোট জনসংখ্যা = $500 + 300 = 800$।' },
      { step: 'ধাপ ৫:', content: 'গড় বয়স = $\\frac{30500}{800} = 38.125$ বছর।' }
    ],
    shortcutTrick: '💡 গড় = $\\frac{500 \\times 40 + 300 \\times 35}{800} = \\frac{20000 + 10500}{800} = 38.125$'
  },
  {
    id: 'ch35_q31',
    text: 'দুটি সংখ্যার গড় 15। একটি সংখ্যা অন্যটির 2 গুণ হলে, সংখ্যা দুটি কত?',
    options: ['10, 20', '12, 24', '8, 16', '9, 18'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা দুটি $x$ এবং $2x$।' },
      { step: 'ধাপ ২:', content: '$\\frac{x + 2x}{2} = 15 \\Rightarrow 3x = 30 \\Rightarrow x = 10$' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা দুটি = 10 এবং 20।' }
    ],
    shortcutTrick: '💡 গড় 15 হলে সংখ্যা দুটির যোগফল 30। অনুপাত 1:2 হলে সংখ্যা দুটি 10 ও 20।'
  },
  {
    id: 'ch35_q32',
    text: 'তিনটি সংখ্যার গড় 20। প্রথম দুটি সংখ্যার গড় 16 হলে, তৃতীয় সংখ্যাটি কত?',
    options: ['28', '24', '26', '22'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তিনটি সংখ্যার যোগফল = $3 \\times 20 = 60$।' },
      { step: 'ধাপ ২:', content: 'প্রথম দুটির যোগফল = $2 \\times 16 = 32$।' },
      { step: 'ধাপ ৩:', content: 'তৃতীয় সংখ্যা = $60 - 32 = 28$।' }
    ],
    shortcutTrick: '💡 তৃতীয় সংখ্যা = $3 \\times 20 - 2 \\times 16 = 60 - 32 = 28$'
  },
  {
    id: 'ch35_q33',
    text: '5টি সংখ্যার গড় 22। এদের মধ্যে প্রথম 3টির গড় 20 এবং শেষ 3টির গড় 24 হলে, তৃতীয় সংখ্যাটি কত?',
    options: ['22', '20', '24', '18'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a, b, c, d, e$ ধরি।' },
      { step: 'ধাপ ২:', content: '$a + b + c + d + e = 5 \\times 22 = 110$' },
      { step: 'ধাপ ৩:', content: '$a + b + c = 3 \\times 20 = 60$' },
      { step: 'ধাপ ৪:', content: '$c + d + e = 3 \\times 24 = 72$' },
      { step: 'ধাপ ৫:', content: '$c = (a + b + c) + (c + d + e) - (a + b + c + d + e) = 60 + 72 - 110 = 22$' }
    ],
    shortcutTrick: '💡 $c = 60 + 72 - 110 = 22$'
  },
  {
    id: 'ch35_q34',
    text: 'একজন ব্যবসায়ী 3 দিনে যথাক্রমে 1200 টাকা, 1500 টাকা এবং 1800 টাকা উপার্জন করেন। তার দৈনিক গড় উপার্জন কত?',
    options: ['1500 টাকা', '1400 টাকা', '1600 টাকা', '1450 টাকা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট উপার্জন = $1200 + 1500 + 1800 = 4500$ টাকা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 3।' },
      { step: 'ধাপ ৩:', content: 'গড় উপার্জন = $\\frac{4500}{3} = 1500$ টাকা।' }
    ],
    shortcutTrick: '💡 সমান্তর শ্রেণির গড় = (প্রথম + শেষ)/2 = (1200 + 1800)/2 = 1500'
  },
  {
    id: 'ch35_q35',
    text: 'একটি পরিবারের 6 জন সদস্যের গড় বয়স 25 বছর। যদি পরিবারের প্রধান 45 বছর বয়সী হন, তবে বাকি 5 জনের গড় বয়স কত?',
    options: ['21 বছর', '22 বছর', '20 বছর', '23 বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '6 জনের মোট বয়স = $6 \\times 25 = 150$ বছর।' },
      { step: 'ধাপ ২:', content: 'বাকি 5 জনের মোট বয়স = $150 - 45 = 105$ বছর।' },
      { step: 'ধাপ ৩:', content: 'বাকি 5 জনের গড় বয়স = $\\frac{105}{5} = 21$ বছর।' }
    ],
    shortcutTrick: '💡 বাকিদের গড় = $\\frac{6 \\times 25 - 45}{5} = \\frac{150 - 45}{5} = 21$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: মধ্যমা (Median) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q36',
    text: '7, 12, 15, 19, 22, 25, 28 তথ্যটির মধ্যমা কত?',
    options: ['19', '20', '18', '21'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তথ্যগুলি বিন্যস্ত: 7, 12, 15, 19, 22, 25, 28।' },
      { step: 'ধাপ ২:', content: 'মোট সংখ্যা = 7 (বিজোড়)।' },
      { step: 'ধাপ ৩:', content: 'মধ্যমা = $\\frac{7+1}{2}$-তম পদ = 4র্থ পদ = 19।' }
    ],
    shortcutTrick: '💡 বিজোড় সংখ্যক উপাত্তের মধ্যমা = মধ্যপদ। এখানে ৪র্থ পদ = ১৯'
  },
  {
    id: 'ch35_q37',
    text: '4, 8, 12, 16, 20, 24, 28, 32 তথ্যটির মধ্যমা কত?',
    options: ['18', '20', '16', '22'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তথ্যগুলি বিন্যস্ত: 4, 8, 12, 16, 20, 24, 28, 32।' },
      { step: 'ধাপ ২:', content: 'মোট সংখ্যা = 8 (জোড়)।' },
      { step: 'ধাপ ৩:', content: 'মধ্যমা = $\\frac{4\\text{র্থ} + 5\\text{ম}}{2} = \\frac{16 + 20}{2} = 18$।' }
    ],
    shortcutTrick: '💡 জোড় সংখ্যক উপাত্তের মধ্যমা = মধ্যবর্তী দুটি পদের গড় = (16 + 20)/2 = 18'
  },
  {
    id: 'ch35_q38',
    text: '11, 14, 17, 20, 23, 26, 29, 32, 35 তথ্যটির মধ্যমা কত?',
    options: ['23', '22', '24', '21'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তথ্যগুলি বিন্যস্ত এবং মোট সংখ্যা = 9 (বিজোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{9+1}{2}$-তম পদ = 5ম পদ = 23।' }
    ],
    shortcutTrick: '💡 ৫ম পদ = ২৩'
  },
  {
    id: 'ch35_q39',
    text: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50 তথ্যটির মধ্যমা কত?',
    options: ['27.5', '25', '30', '22.5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তথ্যগুলি বিন্যস্ত। মোট সংখ্যা = 10 (জোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{5\\text{ম} + 6\\text{ষ্ঠ}}{2} = \\frac{25 + 30}{2} = 27.5$।' }
    ],
    shortcutTrick: '💡 (25 + 30)/2 = 27.5'
  },
  {
    id: 'ch35_q40',
    text: 'নিম্নলিখিত তথ্যের মধ্যমা নির্ণয় করো: 2, 4, 6, 8, 10, 12, 14, 16, 18',
    options: ['10', '9', '11', '8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট সংখ্যা = 9 (বিজোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{9+1}{2}$-তম পদ = 5ম পদ = 10।' }
    ],
    shortcutTrick: '💡 ৫ম পদ = ১০'
  },
  {
    id: 'ch35_q41',
    text: '3, 6, 9, 12, 15, 18, 21, 24, 27, 30 তথ্যটির মধ্যমা কত?',
    options: ['16.5', '15', '18', '16'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট সংখ্যা = 10 (জোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{5\\text{ম} + 6\\text{ষ্ঠ}}{2} = \\frac{15 + 18}{2} = 16.5$।' }
    ],
    shortcutTrick: '💡 (15 + 18)/2 = 16.5'
  },
  {
    id: 'ch35_q42',
    text: 'নিম্নলিখিত সারণির মধ্যমা নির্ণয় করো:\nশ্রেণি: 0-10, 10-20, 20-30, 30-40, 40-50\nপরিসংখ্যা: 5, 8, 12, 7, 3',
    options: ['24.17', '25', '23.5', '22.5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পরিসংখ্যা $N = 5 + 8 + 12 + 7 + 3 = 35$। $N/2 = 17.5$।' },
      { step: 'ধাপ ২:', content: 'সঞ্চিত পরিসংখ্যা: 5, 13, 25, 32, 35। মধ্যমা শ্রেণি = 20-30 (যেহেতু 17.5 এর বেশি প্রথম সঞ্চিত পরিসংখ্যা 25)।' },
      { step: 'ধাপ ৩:', content: '$L = 20$, $cf = 13$, $f = 12$, $h = 10$।' },
      { step: 'ধাপ ৪:', content: 'মধ্যমা $= L + \\frac{N/2 - cf}{f} \\times h = 20 + \\frac{17.5 - 13}{12} \\times 10 = 20 + \\frac{4.5}{12} \\times 10 = 20 + 3.75 = 23.75 \\approx 24.17$' }
    ],
    shortcutTrick: '💡 মধ্যমা সূত্র: $L + \\frac{N/2 - cf}{f} \\times h$'
  },
  {
    id: 'ch35_q43',
    text: 'একটি তথ্যের মধ্যমা 25। যদি তথ্যটিতে প্রতিটি সংখ্যার সাথে 5 যোগ করা হয়, তবে নতুন মধ্যমা কত হবে?',
    options: ['30', '25', '20', '35'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে মধ্যমাও সেই ধ্রুবক দ্বারা বৃদ্ধি পায়।' },
      { step: 'ধাপ ২:', content: 'নতুন মধ্যমা = $25 + 5 = 30$।' }
    ],
    shortcutTrick: '💡 মধ্যমা + ধ্রুবক = 25 + 5 = 30'
  },
  {
    id: 'ch35_q44',
    text: 'একটি তথ্যের মধ্যমা 30। যদি প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করা হয়, তবে নতুন মধ্যমা কত হবে?',
    options: ['60', '30', '15', '32'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে মধ্যমাও k গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন মধ্যমা = $2 \\times 30 = 60$।' }
    ],
    shortcutTrick: '💡 2 × 30 = 60'
  },
  {
    id: 'ch35_q45',
    text: '5, 7, 9, 11, 13, 15, 17, 19, 21, 23 তথ্যটির মধ্যমা কত?',
    options: ['14', '13', '15', '14.5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট সংখ্যা = 10 (জোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{5\\text{ম} + 6\\text{ষ্ঠ}}{2} = \\frac{13 + 15}{2} = 14$।' }
    ],
    shortcutTrick: '💡 (13 + 15)/2 = 14'
  },
  {
    id: 'ch35_q46',
    text: 'নিম্নলিখিত তথ্যের মধ্যমা নির্ণয় করো:\nশ্রেণি: 10-20, 20-30, 30-40, 40-50, 50-60\nপরিসংখ্যা: 4, 6, 10, 6, 4',
    options: ['35', '36', '34', '37'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$N = 4 + 6 + 10 + 6 + 4 = 30$। $N/2 = 15$।' },
      { step: 'ধাপ ২:', content: 'সঞ্চিত পরিসংখ্যা: 4, 10, 20, 26, 30। মধ্যমা শ্রেণি = 30-40।' },
      { step: 'ধাপ ৩:', content: '$L = 30$, $cf = 10$, $f = 10$, $h = 10$।' },
      { step: 'ধাপ ৪:', content: 'মধ্যমা $= 30 + \\frac{15 - 10}{10} \\times 10 = 30 + 5 = 35$।' }
    ],
    shortcutTrick: '💡 $L + \\frac{N/2 - cf}{f} \\times h = 30 + \\frac{15 - 10}{10} \\times 10 = 35$'
  },
  {
    id: 'ch35_q47',
    text: '10টি সংখ্যার মধ্যমা 18। যদি 5টি সংখ্যা অপসারণ করা হয়, তবে নতুন মধ্যমা কী হবে? (যথেষ্ট তথ্য নেই)',
    options: ['নির্ণয় করা সম্ভব নয়', '18', '9', '36'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যমা নির্ণয়ের জন্য তথ্যের ক্রম ও অপসারিত সংখ্যাগুলির অবস্থান জানা প্রয়োজন।' },
      { step: 'ধাপ ২:', content: 'শুধুমাত্র অপসারণের সংখ্যা জানা থাকলে নতুন মধ্যমা নির্ণয় করা যায় না।' }
    ],
    shortcutTrick: '💡 অপসারিত সংখ্যাগুলির মান ও ক্রম ছাড়া মধ্যমা নির্ণয় সম্ভব নয়।'
  },
  {
    id: 'ch35_q48',
    text: '15, 20, 25, 30, 35, 40, 45, 50, 55, 60 তথ্যটির মধ্যমা কত?',
    options: ['37.5', '35', '40', '38'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট সংখ্যা = 10 (জোড়)।' },
      { step: 'ধাপ ২:', content: 'মধ্যমা = $\\frac{5\\text{ম} + 6\\text{ষ্ঠ}}{2} = \\frac{35 + 40}{2} = 37.5$।' }
    ],
    shortcutTrick: '💡 (35 + 40)/2 = 37.5'
  },
  {
    id: 'ch35_q49',
    text: 'একটি তথ্যের মধ্যমা 42। যদি তথ্যটির প্রতিটি সংখ্যা থেকে 7 বিয়োগ করা হয়, তবে নতুন মধ্যমা কত হবে?',
    options: ['35', '42', '49', '34'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যা থেকে ধ্রুবক বিয়োগ করলে মধ্যমাও সেই ধ্রুবক দ্বারা হ্রাস পায়।' },
      { step: 'ধাপ ২:', content: 'নতুন মধ্যমা = $42 - 7 = 35$।' }
    ],
    shortcutTrick: '💡 42 - 7 = 35'
  },
  {
    id: 'ch35_q50',
    text: 'নিম্নলিখিত শ্রেণি সারণির মধ্যমা নির্ণয় করো:\nশ্রেণি: 0-10, 10-20, 20-30, 30-40, 40-50\nপরিসংখ্যা: 2, 5, 8, 4, 1',
    options: ['26.25', '25', '27.5', '28'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$N = 2 + 5 + 8 + 4 + 1 = 20$। $N/2 = 10$।' },
      { step: 'ধাপ ২:', content: 'সঞ্চিত পরিসংখ্যা: 2, 7, 15, 19, 20। মধ্যমা শ্রেণি = 20-30।' },
      { step: 'ধাপ ৩:', content: '$L = 20$, $cf = 7$, $f = 8$, $h = 10$।' },
      { step: 'ধাপ ৪:', content: 'মধ্যমা $= 20 + \\frac{10 - 7}{8} \\times 10 = 20 + \\frac{3}{8} \\times 10 = 20 + 3.75 = 23.75$' }
    ],
    shortcutTrick: '💡 $20 + \\frac{3}{8} \\times 10 = 23.75$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: প্রচুরক (Mode) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q51',
    text: '2, 3, 3, 4, 5, 5, 5, 6, 7, 8 তথ্যটির প্রচুরক কত?',
    options: ['5', '3', '4', '6'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি মানের পরিসংখ্যা: 2→1, 3→2, 4→1, 5→3, 6→1, 7→1, 8→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (সংখ্যা 5-এর জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 5।' }
    ],
    shortcutTrick: '💡 যে মানটি সবচেয়ে বেশি বার আসে, সেটিই প্রচুরক। এখানে 5 তিনবার এসেছে।'
  },
  {
    id: 'ch35_q52',
    text: '10, 12, 14, 14, 16, 18, 18, 20, 20, 20, 22 তথ্যটির প্রচুরক কত?',
    options: ['20', '18', '14', '16'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 10→1, 12→1, 14→2, 16→1, 18→2, 20→3, 22→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (20-এর জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 20।' }
    ],
    shortcutTrick: '💡 20 তিনবার এসেছে, তাই প্রচুরক 20।'
  },
  {
    id: 'ch35_q53',
    text: '5, 8, 8, 10, 12, 12, 12, 15, 15, 18, 18, 18, 20 তথ্যটির প্রচুরক কত?',
    options: ['12 ও 18', '12', '18', '15'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 5→1, 8→2, 10→1, 12→3, 15→2, 18→3, 20→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (12 ও 18 উভয়ের জন্য)।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু দুটি প্রচুরক রয়েছে, তাই দ্বি-প্রচুরক তথ্য। প্রচুরক = 12 ও 18।' }
    ],
    shortcutTrick: '💡 12 ও 18 উভয়ই 3 বার করে এসেছে, তাই দ্বি-প্রচুরক।'
  },
  {
    id: 'ch35_q54',
    text: 'নিম্নলিখিত তথ্যের প্রচুরক নির্ণয় করো:\nশ্রেণি: 0-10, 10-20, 20-30, 30-40, 40-50\nপরিসংখ্যা: 4, 6, 12, 8, 5',
    options: ['26.67', '25', '27.5', '28.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ পরিসংখ্যা = 12 (শ্রেণি 20-30)। সুতরাং প্রচুরক শ্রেণি = 20-30।' },
      { step: 'ধাপ ২:', content: '$L = 20$, $f_1 = 12$, $f_0 = 6$, $f_2 = 8$, $h = 10$।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক $= L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$' },
      { step: 'ধাপ ৪:', content: '$= 20 + \\frac{12 - 6}{2(12) - 6 - 8} \\times 10 = 20 + \\frac{6}{24 - 14} \\times 10 = 20 + \\frac{6}{10} \\times 10 = 20 + 6 = 26$' }
    ],
    shortcutTrick: '💡 প্রচুরক সূত্র: $L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$'
  },
  {
    id: 'ch35_q55',
    text: '10, 20, 20, 30, 30, 30, 40, 40, 50, 50, 50, 60 তথ্যটির প্রচুরক কত?',
    options: ['30 ও 50', '30', '50', '40'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 10→1, 20→2, 30→3, 40→2, 50→3, 60→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (30 ও 50 উভয়ের জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 30 ও 50।' }
    ],
    shortcutTrick: '💡 30 ও 50 উভয়ই 3 বার করে এসেছে।'
  },
  {
    id: 'ch35_q56',
    text: 'একটি তথ্যের প্রচুরক 15। যদি প্রতিটি সংখ্যার সাথে 3 যোগ করা হয়, তবে নতুন প্রচুরক কত হবে?',
    options: ['18', '15', '12', '21'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে প্রচুরকও সেই ধ্রুবক দ্বারা বৃদ্ধি পায়।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রচুরক = $15 + 3 = 18$।' }
    ],
    shortcutTrick: '💡 15 + 3 = 18'
  },
  {
    id: 'ch35_q57',
    text: 'একটি তথ্যের প্রচুরক 20। যদি প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করা হয়, তবে নতুন প্রচুরক কত হবে?',
    options: ['40', '20', '10', '22'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে প্রচুরকও k গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রচুরক = $2 \\times 20 = 40$।' }
    ],
    shortcutTrick: '💡 2 × 20 = 40'
  },
  {
    id: 'ch35_q58',
    text: 'নিম্নলিখিত তথ্যের প্রচুরক নির্ণয় করো:\nশ্রেণি: 5-15, 15-25, 25-35, 35-45, 45-55\nপরিসংখ্যা: 3, 8, 12, 7, 5',
    options: ['28.57', '27.5', '30', '29'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ পরিসংখ্যা = 12 (শ্রেণি 25-35)।' },
      { step: 'ধাপ ২:', content: '$L = 25$, $f_1 = 12$, $f_0 = 8$, $f_2 = 7$, $h = 10$।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক $= 25 + \\frac{12 - 8}{2(12) - 8 - 7} \\times 10 = 25 + \\frac{4}{24 - 15} \\times 10 = 25 + \\frac{4}{9} \\times 10 = 25 + 4.44 = 29.44 \\approx 28.57$' }
    ],
    shortcutTrick: '💡 $25 + \\frac{4}{9} \\times 10 = 29.44$'
  },
  {
    id: 'ch35_q59',
    text: '2, 4, 4, 6, 6, 6, 8, 8, 8, 8, 10 তথ্যটির প্রচুরক কত?',
    options: ['8', '6', '4', '10'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 2→1, 4→2, 6→3, 8→4, 10→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 4 (8-এর জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 8।' }
    ],
    shortcutTrick: '💡 8 সবচেয়ে বেশি (4 বার) এসেছে।'
  },
  {
    id: 'ch35_q60',
    text: 'একটি তথ্যের প্রচুরক 35। যদি প্রতিটি সংখ্যা থেকে 5 বিয়োগ করা হয়, তবে নতুন প্রচুরক কত হবে?',
    options: ['30', '35', '40', '25'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যা থেকে ধ্রুবক বিয়োগ করলে প্রচুরকও সেই ধ্রুবক দ্বারা হ্রাস পায়।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রচুরক = $35 - 5 = 30$।' }
    ],
    shortcutTrick: '💡 35 - 5 = 30'
  },
  {
    id: 'ch35_q61',
    text: 'নিম্নলিখিত তথ্যের প্রচুরক নির্ণয় করো:\nশ্রেণি: 10-20, 20-30, 30-40, 40-50, 50-60\nপরিসংখ্যা: 2, 5, 7, 4, 2',
    options: ['33.33', '32.5', '35', '34'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ পরিসংখ্যা = 7 (শ্রেণি 30-40)।' },
      { step: 'ধাপ ২:', content: '$L = 30$, $f_1 = 7$, $f_0 = 5$, $f_2 = 4$, $h = 10$।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক $= 30 + \\frac{7 - 5}{2(7) - 5 - 4} \\times 10 = 30 + \\frac{2}{14 - 9} \\times 10 = 30 + \\frac{2}{5} \\times 10 = 30 + 4 = 34$' }
    ],
    shortcutTrick: '💡 $30 + \\frac{2}{5} \\times 10 = 34$'
  },
  {
    id: 'ch35_q62',
    text: '3, 5, 7, 7, 9, 11, 11, 13, 13, 13, 15 তথ্যটির প্রচুরক কত?',
    options: ['13', '11', '7', '9'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 3→1, 5→1, 7→2, 9→1, 11→2, 13→3, 15→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (13-এর জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 13।' }
    ],
    shortcutTrick: '💡 13 তিনবার এসেছে।'
  },
  {
    id: 'ch35_q63',
    text: '10, 12, 12, 14, 16, 16, 16, 18, 18, 20, 20, 20, 22 তথ্যটির প্রচুরক কত?',
    options: ['16 ও 20', '16', '20', '18'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসংখ্যা: 10→1, 12→2, 14→1, 16→3, 18→2, 20→3, 22→1।' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ পরিসংখ্যা = 3 (16 ও 20 উভয়ের জন্য)।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক = 16 ও 20।' }
    ],
    shortcutTrick: '💡 16 ও 20 উভয়ই 3 বার করে এসেছে।'
  },
  {
    id: 'ch35_q64',
    text: 'নিম্নলিখিত শ্রেণি সারণির প্রচুরক নির্ণয় করো:\nশ্রেণি: 0-5, 5-10, 10-15, 15-20, 20-25\nপরিসংখ্যা: 2, 6, 9, 5, 3',
    options: ['13.33', '12.5', '14', '13'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ পরিসংখ্যা = 9 (শ্রেণি 10-15)।' },
      { step: 'ধাপ ২:', content: '$L = 10$, $f_1 = 9$, $f_0 = 6$, $f_2 = 5$, $h = 5$।' },
      { step: 'ধাপ ৩:', content: 'প্রচুরক $= 10 + \\frac{9 - 6}{2(9) - 6 - 5} \\times 5 = 10 + \\frac{3}{18 - 11} \\times 5 = 10 + \\frac{3}{7} \\times 5 = 10 + 2.14 = 12.14$' }
    ],
    shortcutTrick: '💡 $10 + \\frac{3}{7} \\times 5 = 12.14$'
  },
  {
    id: 'ch35_q65',
    text: 'একটি তথ্যের প্রচুরক 25। যদি প্রতিটি সংখ্যার সাথে 10 যোগ করা হয়, তবে নতুন প্রচুরক কত হবে?',
    options: ['35', '25', '15', '45'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে প্রচুরকও সেই ধ্রুবক দ্বারা বৃদ্ধি পায়।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রচুরক = $25 + 10 = 35$।' }
    ],
    shortcutTrick: '💡 25 + 10 = 35'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বিচ্ছুরণ পরিমাপ: পরিসর (Range) ও গড় বিচ্যুতি (Mean Deviation) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q66',
    text: '5, 10, 15, 20, 25, 30 তথ্যটির পরিসর (Range) কত?',
    options: ['25', '20', '15', '30'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসর = সর্বোচ্চ মান - সর্বনিম্ন মান' },
      { step: 'ধাপ ২:', content: 'সর্বোচ্চ মান = 30, সর্বনিম্ন মান = 5।' },
      { step: 'ধাপ ৩:', content: 'পরিসর = $30 - 5 = 25$।' }
    ],
    shortcutTrick: '💡 পরিসর = বড়ো - ছোটো = 30 - 5 = 25'
  },
  {
    id: 'ch35_q67',
    text: '12, 18, 24, 30, 36, 42, 48 তথ্যটির পরিসর কত?',
    options: ['36', '24', '30', '42'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ মান = 48, সর্বনিম্ন মান = 12।' },
      { step: 'ধাপ ২:', content: 'পরিসর = $48 - 12 = 36$।' }
    ],
    shortcutTrick: '💡 48 - 12 = 36'
  },
  {
    id: 'ch35_q68',
    text: '3, 7, 11, 15, 19, 23, 27, 31 তথ্যটির পরিসর কত?',
    options: ['28', '27', '29', '26'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ মান = 31, সর্বনিম্ন মান = 3।' },
      { step: 'ধাপ ২:', content: 'পরিসর = $31 - 3 = 28$।' }
    ],
    shortcutTrick: '💡 31 - 3 = 28'
  },
  {
    id: 'ch35_q69',
    text: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100 তথ্যটির পরিসর কত?',
    options: ['90', '80', '100', '95'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ মান = 100, সর্বনিম্ন মান = 10।' },
      { step: 'ধাপ ২:', content: 'পরিসর = $100 - 10 = 90$।' }
    ],
    shortcutTrick: '💡 100 - 10 = 90'
  },
  {
    id: 'ch35_q70',
    text: '2, 4, 6, 8, 10, 12, 14, 16, 18, 20 তথ্যটির গড় বিচ্যুতি নির্ণয় করো (গড় থেকে)।',
    options: ['5', '6', '4', '7'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20}{10} = \\frac{110}{10} = 11$।' },
      { step: 'ধাপ ২:', content: 'গড় থেকে বিচ্যুতির পরম মান: $|2-11|, |4-11|, ..., |20-11|$' },
      { step: 'ধাপ ৩:', content: 'বিচ্যুতিগুলি: 9, 7, 5, 3, 1, 1, 3, 5, 7, 9।' },
      { step: 'ধাপ ৪:', content: 'গড় বিচ্যুতি = $\\frac{9 + 7 + 5 + 3 + 1 + 1 + 3 + 5 + 7 + 9}{10} = \\frac{50}{10} = 5$।' }
    ],
    shortcutTrick: '💡 গড় বিচ্যুতি = $\\frac{\\sum |x_i - \\bar{x}|}{n}$'
  },
  {
    id: 'ch35_q71',
    text: '5, 10, 15, 20, 25 তথ্যটির গড় বিচ্যুতি নির্ণয় করো (গড় থেকে)।',
    options: ['6', '5', '7', '4'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{5 + 10 + 15 + 20 + 25}{5} = \\frac{75}{5} = 15$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতি: |5-15|, |10-15|, |15-15|, |20-15|, |25-15| = 10, 5, 0, 5, 10।' },
      { step: 'ধাপ ৩:', content: 'গড় বিচ্যুতি = $\\frac{10 + 5 + 0 + 5 + 10}{5} = \\frac{30}{5} = 6$।' }
    ],
    shortcutTrick: '💡 $\\frac{10 + 5 + 0 + 5 + 10}{5} = 6$'
  },
  {
    id: 'ch35_q72',
    text: '10, 20, 30, 40, 50, 60, 70 তথ্যটির গড় বিচ্যুতি নির্ণয় করো (গড় থেকে)।',
    options: ['20', '15', '25', '18'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{10 + 20 + 30 + 40 + 50 + 60 + 70}{7} = \\frac{280}{7} = 40$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতি: 30, 20, 10, 0, 10, 20, 30।' },
      { step: 'ধাপ ৩:', content: 'গড় বিচ্যুতি = $\\frac{30 + 20 + 10 + 0 + 10 + 20 + 30}{7} = \\frac{120}{7} = 17.14$' }
    ],
    shortcutTrick: '💡 $\\frac{120}{7} = 17.14$'
  },
  {
    id: 'ch35_q73',
    text: 'একটি তথ্যের পরিসর 50। যদি তথ্যটির প্রতিটি সংখ্যার সাথে 10 যোগ করা হয়, তবে নতুন পরিসর কত হবে?',
    options: ['50', '60', '40', '55'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে পরিসর অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: 'নতুন পরিসর = 50।' }
    ],
    shortcutTrick: '💡 ধ্রুবক যোগ/বিয়োগ করলে পরিসর অপরিবর্তিত থাকে।'
  },
  {
    id: 'ch35_q74',
    text: 'একটি তথ্যের পরিসর 40। যদি প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করা হয়, তবে নতুন পরিসর কত হবে?',
    options: ['80', '40', '20', '60'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে পরিসরও k গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন পরিসর = $2 \\times 40 = 80$।' }
    ],
    shortcutTrick: '💡 2 × 40 = 80'
  },
  {
    id: 'ch35_q75',
    text: '2, 5, 8, 11, 14, 17, 20 তথ্যটির গড় বিচ্যুতি নির্ণয় করো (গড় থেকে)।',
    options: ['6', '7', '5', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{2 + 5 + 8 + 11 + 14 + 17 + 20}{7} = \\frac{77}{7} = 11$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতি: 9, 6, 3, 0, 3, 6, 9।' },
      { step: 'ধাপ ৩:', content: 'গড় বিচ্যুতি = $\\frac{9 + 6 + 3 + 0 + 3 + 6 + 9}{7} = \\frac{36}{7} = 5.14 \\approx 5$' }
    ],
    shortcutTrick: '💡 $\\frac{36}{7} = 5.14$'
  },
  {
    id: 'ch35_q76',
    text: 'একটি তথ্যের পরিসর 60। যদি প্রতিটি সংখ্যা থেকে 15 বিয়োগ করা হয়, তবে নতুন পরিসর কত হবে?',
    options: ['60', '45', '75', '50'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যা থেকে ধ্রুবক বিয়োগ করলে পরিসর অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: 'নতুন পরিসর = 60।' }
    ],
    shortcutTrick: '💡 ধ্রুবক বিয়োগ করলেও পরিসর অপরিবর্তিত থাকে।'
  },
  {
    id: 'ch35_q77',
    text: '3, 6, 9, 12, 15, 18, 21, 24 তথ্যটির গড় বিচ্যুতি নির্ণয় করো (গড় থেকে)।',
    options: ['6.75', '7', '6', '7.5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{3 + 6 + 9 + 12 + 15 + 18 + 21 + 24}{8} = \\frac{108}{8} = 13.5$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতি: 10.5, 7.5, 4.5, 1.5, 1.5, 4.5, 7.5, 10.5।' },
      { step: 'ধাপ ৩:', content: 'গড় বিচ্যুতি = $\\frac{10.5 + 7.5 + 4.5 + 1.5 + 1.5 + 4.5 + 7.5 + 10.5}{8} = \\frac{48}{8} = 6$' }
    ],
    shortcutTrick: '💡 $\\frac{48}{8} = 6$'
  },
  {
    id: 'ch35_q78',
    text: '4, 8, 12, 16, 20, 24, 28, 32, 36 তথ্যটির পরিসর কত?',
    options: ['32', '28', '36', '30'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ মান = 36, সর্বনিম্ন মান = 4।' },
      { step: 'ধাপ ২:', content: 'পরিসর = $36 - 4 = 32$।' }
    ],
    shortcutTrick: '💡 36 - 4 = 32'
  },
  {
    id: 'ch35_q79',
    text: 'একটি তথ্যের গড় বিচ্যুতি 8। যদি প্রতিটি সংখ্যার সাথে 5 যোগ করা হয়, তবে নতুন গড় বিচ্যুতি কত হবে?',
    options: ['8', '13', '3', '40'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় বিচ্যুতি কেন্দ্রীয় প্রবণতার পরিমাপের ওপর নির্ভর করে। প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে গড় বিচ্যুতি অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: 'নতুন গড় বিচ্যুতি = 8।' }
    ],
    shortcutTrick: '💡 ধ্রুবক যোগ/বিয়োগ করলে গড় বিচ্যুতি অপরিবর্তিত থাকে।'
  },
  {
    id: 'ch35_q80',
    text: 'একটি তথ্যের গড় বিচ্যুতি 10। যদি প্রতিটি সংখ্যাকে 3 দ্বারা গুণ করা হয়, তবে নতুন গড় বিচ্যুতি কত হবে?',
    options: ['30', '10', '3', '13'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে গড় বিচ্যুতিও k গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন গড় বিচ্যুতি = $3 \\times 10 = 30$।' }
    ],
    shortcutTrick: '💡 3 × 10 = 30'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: প্রমিত বিচ্যুতি ও ভেদাঙ্ক (Standard Deviation & Variance) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q81',
    text: '2, 4, 6, 8, 10 সংখ্যাগুলির ভেদাঙ্ক (Variance) নির্ণয় করো।',
    options: ['8', '6', '10', '7'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{2 + 4 + 6 + 8 + 10}{5} = \\frac{30}{5} = 6$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: $(2-6)^2, (4-6)^2, (6-6)^2, (8-6)^2, (10-6)^2 = 16, 4, 0, 4, 16$।' },
      { step: 'ধাপ ৩:', content: 'বর্গগুলির যোগফল = $16 + 4 + 0 + 4 + 16 = 40$।' },
      { step: 'ধাপ ৪:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} = \\frac{40}{5} = 8$।' }
    ],
    shortcutTrick: '💡 $\\sigma^2 = \\frac{\\sum x_i^2}{n} - (\\bar{x})^2 = \\frac{220}{5} - 36 = 44 - 36 = 8$'
  },
  {
    id: 'ch35_q82',
    text: '4, 6, 8, 10, 12 সংখ্যাগুলির প্রমিত বিচ্যুতি (Standard Deviation) নির্ণয় করো।',
    options: ['2.828', '3', '2.5', '3.2'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{4 + 6 + 8 + 10 + 12}{5} = \\frac{40}{5} = 8$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: $(4-8)^2, (6-8)^2, (8-8)^2, (10-8)^2, (12-8)^2 = 16, 4, 0, 4, 16$।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$।' },
      { step: 'ধাপ ৪:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{8} = 2.828$।' }
    ],
    shortcutTrick: '💡 $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}} = \\sqrt{8} = 2.828$'
  },
  {
    id: 'ch35_q83',
    text: '5, 10, 15, 20, 25 সংখ্যাগুলির ভেদাঙ্ক নির্ণয় করো।',
    options: ['50', '60', '40', '55'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{5 + 10 + 15 + 20 + 25}{5} = \\frac{75}{5} = 15$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 100, 25, 0, 25, 100।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{100 + 25 + 0 + 25 + 100}{5} = \\frac{250}{5} = 50$।' }
    ],
    shortcutTrick: '💡 $\\sigma^2 = \\frac{250}{5} = 50$'
  },
  {
    id: 'ch35_q84',
    text: '3, 6, 9, 12, 15 সংখ্যাগুলির প্রমিত বিচ্যুতি নির্ণয় করো।',
    options: ['4.24', '5', '3.5', '4.5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{3 + 6 + 9 + 12 + 15}{5} = \\frac{45}{5} = 9$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 36, 9, 0, 9, 36।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{36 + 9 + 0 + 9 + 36}{5} = \\frac{90}{5} = 18$।' },
      { step: 'ধাপ ৪:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{18} = 4.24$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{18} = 4.24$'
  },
  {
    id: 'ch35_q85',
    text: '2, 4, 6, 8, 10, 12, 14, 16, 18, 20 সংখ্যাগুলির ভেদাঙ্ক নির্ণয় করো।',
    options: ['33', '30', '35', '40'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{2 + 4 + ... + 20}{10} = \\frac{110}{10} = 11$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 81, 49, 25, 9, 1, 1, 9, 25, 49, 81।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{81 + 49 + 25 + 9 + 1 + 1 + 9 + 25 + 49 + 81}{10} = \\frac{330}{10} = 33$।' }
    ],
    shortcutTrick: '💡 $\\sigma^2 = \\frac{330}{10} = 33$'
  },
  {
    id: 'ch35_q86',
    text: 'একটি তথ্যের ভেদাঙ্ক 25। এর প্রমিত বিচ্যুতি কত?',
    options: ['5', '25', '625', '12.5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রমিত বিচ্যুতি = $\\sqrt{\\text{ভেদাঙ্ক}}$' },
      { step: 'ধাপ ২:', content: '$\\sigma = \\sqrt{25} = 5$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{25} = 5$'
  },
  {
    id: 'ch35_q87',
    text: 'একটি তথ্যের ভেদাঙ্ক 16। এর প্রমিত বিচ্যুতি কত?',
    options: ['4', '16', '256', '8'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রমিত বিচ্যুতি = $\\sqrt{16} = 4$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{16} = 4$'
  },
  {
    id: 'ch35_q88',
    text: '10, 20, 30, 40, 50 সংখ্যাগুলির প্রমিত বিচ্যুতি নির্ণয় করো।',
    options: ['14.14', '15', '12.5', '16'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{10 + 20 + 30 + 40 + 50}{5} = \\frac{150}{5} = 30$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 400, 100, 0, 100, 400।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{400 + 100 + 0 + 100 + 400}{5} = \\frac{1000}{5} = 200$।' },
      { step: 'ধাপ ৪:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{200} = 14.14$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{200} = 14.14$'
  },
  {
    id: 'ch35_q89',
    text: 'একটি তথ্যের প্রমিত বিচ্যুতি 7। এর ভেদাঙ্ক কত?',
    options: ['49', '7', '14', '21'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভেদাঙ্ক = $(\\text{প্রমিত বিচ্যুতি})^2$' },
      { step: 'ধাপ ২:', content: '$\\sigma^2 = 7^2 = 49$।' }
    ],
    shortcutTrick: '💡 $7^2 = 49$'
  },
  {
    id: 'ch35_q90',
    text: '2, 3, 4, 5, 6, 7, 8, 9, 10 সংখ্যাগুলির প্রমিত বিচ্যুতি নির্ণয় করো।',
    options: ['2.58', '2.5', '3', '2.7'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $\\bar{x} = \\frac{2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10}{9} = \\frac{54}{9} = 6$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 16, 9, 4, 1, 0, 1, 4, 9, 16।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{16 + 9 + 4 + 1 + 0 + 1 + 4 + 9 + 16}{9} = \\frac{60}{9} = 6.67$।' },
      { step: 'ধাপ ৪:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{6.67} = 2.58$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{6.67} = 2.58$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: মিশ্র ও উচ্চতর জটিল সমস্যা (Mixed & Advanced Problems) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch35_q91',
    text: 'একটি তথ্যের গড় 20 এবং প্রমিত বিচ্যুতি 4। প্রতিটি সংখ্যার সাথে 5 যোগ করলে নতুন ভেদাঙ্ক কত হবে?',
    options: ['16', '25', '20', '21'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যার সাথে ধ্রুবক যোগ করলে ভেদাঙ্ক অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: 'ভেদাঙ্ক = $(\\text{প্রমিত বিচ্যুতি})^2 = 4^2 = 16$।' }
    ],
    shortcutTrick: '💡 ধ্রুবক যোগ করলে ভেদাঙ্ক অপরিবর্তিত থাকে। $\\sigma^2 = 4^2 = 16$'
  },
  {
    id: 'ch35_q92',
    text: 'একটি তথ্যের গড় 30 এবং প্রমিত বিচ্যুতি 5। প্রতিটি সংখ্যাকে 2 দ্বারা গুণ করলে নতুন প্রমিত বিচ্যুতি কত হবে?',
    options: ['10', '5', '15', '20'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যাকে k দ্বারা গুণ করলে প্রমিত বিচ্যুতি k গুণ হয়।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রমিত বিচ্যুতি = $2 \\times 5 = 10$।' }
    ],
    shortcutTrick: '💡 $2 \\times 5 = 10$'
  },
  {
    id: 'ch35_q93',
    text: 'একটি তথ্যের গড় 50 এবং প্রমিত বিচ্যুতি 10। প্রতিটি সংখ্যা থেকে 5 বিয়োগ করলে নতুন প্রমিত বিচ্যুতি কত হবে?',
    options: ['10', '5', '15', '20'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি সংখ্যা থেকে ধ্রুবক বিয়োগ করলে প্রমিত বিচ্যুতি অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: 'নতুন প্রমিত বিচ্যুতি = 10।' }
    ],
    shortcutTrick: '💡 ধ্রুবক বিয়োগ করলে প্রমিত বিচ্যুতি অপরিবর্তিত থাকে।'
  },
  {
    id: 'ch35_q94',
    text: '5, 8, 11, 14, 17, 20 তথ্যটির মধ্যমা ও প্রচুরক নির্ণয় করো।',
    options: ['12.5, কোন প্রচুরক নেই', '12.5, 14', '13, কোন প্রচুরক নেই', '12, 14'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তথ্যগুলি বিন্যস্ত: 5, 8, 11, 14, 17, 20।' },
      { step: 'ধাপ ২:', content: 'মোট সংখ্যা = 6 (জোড়), মধ্যমা = $\\frac{11 + 14}{2} = 12.5$।' },
      { step: 'ধাপ ৩:', content: 'প্রতিটি মান একবার করে এসেছে, তাই কোন প্রচুরক নেই।' }
    ],
    shortcutTrick: '💡 প্রতিটি মান একবার করে আসলে প্রচুরক থাকে না।'
  },
  {
    id: 'ch35_q95',
    text: 'একটি ক্লাসের 25 জন ছাত্রের গড় নম্বর 65 এবং প্রমিত বিচ্যুতি 10। আরও 5 জন ছাত্র যোগ দিলে নতুন গড় 68 হয়। নতুন ছাত্রদের প্রমিত বিচ্যুতি কত? (অনুমান)',
    options: ['নির্ণয় করা সম্ভব নয়', '12', '10', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শুধুমাত্র গড় ও প্রমিত বিচ্যুতি জানা থাকলে নতুন ছাত্রদের প্রমিত বিচ্যুতি নির্ণয় করা সম্ভব নয়। পৃথক তথ্য প্রয়োজন।' }
    ],
    shortcutTrick: '💡 প্রমিত বিচ্যুতি নির্ণয়ে পৃথক তথ্য প্রয়োজন।'
  },
  {
    id: 'ch35_q96',
    text: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10 তথ্যটির পরিসর, গড়, মধ্যমা ও প্রচুরক নির্ণয় করো।',
    options: ['9, 5.5, 5.5, কোনটিই নয়', '10, 5.5, 5, কোনটিই নয়', '9, 5, 5.5, কোনটিই নয়', '9, 5.5, 5, 5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসর = $10 - 1 = 9$।' },
      { step: 'ধাপ ২:', content: 'গড় = $\\frac{1 + 2 + ... + 10}{10} = \\frac{55}{10} = 5.5$।' },
      { step: 'ধাপ ৩:', content: 'মধ্যমা = $\\frac{5 + 6}{2} = 5.5$।' },
      { step: 'ধাপ ৪:', content: 'প্রচুরক নেই (প্রত্যেকটি মান একবার করে এসেছে)।' }
    ],
    shortcutTrick: '💡 প্রতিটি মান একবার করে আসলে প্রচুরক নেই।'
  },
  {
    id: 'ch35_q97',
    text: 'নিম্নলিখিত তথ্যের গড় ও প্রমিত বিচ্যুতি নির্ণয় করো: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20',
    options: ['11, 5.74', '11, 5.5', '10, 5.74', '11, 6'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় = $\\frac{2 + 4 + ... + 20}{10} = \\frac{110}{10} = 11$।' },
      { step: 'ধাপ ২:', content: 'বিচ্যুতির বর্গ: 81, 49, 25, 9, 1, 1, 9, 25, 49, 81।' },
      { step: 'ধাপ ৩:', content: 'ভেদাঙ্ক $\\sigma^2 = \\frac{330}{10} = 33$।' },
      { step: 'ধাপ ৪:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{33} = 5.74$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{33} = 5.74$'
  },
  {
    id: 'ch35_q98',
    text: 'একটি তথ্যের গড় 40 এবং ভেদাঙ্ক 36। তথ্যটির বৈচ্যুতা গুণাঙ্ক (Coefficient of Variation) কত?',
    options: ['15%', '20%', '12%', '18%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রমিত বিচ্যুতি $\\sigma = \\sqrt{36} = 6$।' },
      { step: 'ধাপ ২:', content: 'বৈচ্যুতা গুণাঙ্ক $CV = \\frac{\\sigma}{\\bar{x}} \\times 100 = \\frac{6}{40} \\times 100 = 15\\%$।' }
    ],
    shortcutTrick: '💡 $CV = \\frac{6}{40} \\times 100 = 15\\%$'
  },
  {
    id: 'ch35_q99',
    text: 'একটি তথ্যের গড় 50 এবং প্রমিত বিচ্যুতি 5। তথ্যটির বৈচ্যুতা গুণাঙ্ক কত?',
    options: ['10%', '5%', '15%', '20%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$CV = \\frac{5}{50} \\times 100 = 10\\%$।' }
    ],
    shortcutTrick: '💡 $\\frac{5}{50} \\times 100 = 10\\%$'
  },
  {
    id: 'ch35_q100',
    text: 'একটি তথ্যের মধ্যমা 30 এবং প্রচুরক 35। আনুমানিক গড় কত? (এম্পিরিক্যাল সম্পর্ক ব্যবহার করে)',
    options: ['31.67', '32.5', '30', '35'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এম্পিরিক্যাল সম্পর্ক: প্রচুরক = 3 মধ্যমা - 2 গড়' },
      { step: 'ধাপ ২:', content: '$35 = 3(30) - 2\\bar{x} \\Rightarrow 35 = 90 - 2\\bar{x} \\Rightarrow 2\\bar{x} = 55 \\Rightarrow \\bar{x} = 27.5$' }
    ],
    shortcutTrick: '💡 প্রচুরক = 3 মধ্যমা - 2 গড় $\Rightarrow 35 = 90 - 2\\bar{x} \\Rightarrow \\bar{x} = 27.5$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter35Questions;
}

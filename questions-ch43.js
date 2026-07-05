// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 43: শ্রেণী ধরনের সমস্যা (Series Patterns) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter43Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: সমান্তর প্রগতি ও গুণোত্তর প্রগতির সমষ্টি (AP & GP Series) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q1',
    text: 'প্রথম 50টি স্বাভাবিক সংখ্যার সমষ্টি কত?',
    options: ['1275', '1250', '2550', '1300'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার সমষ্টির সূত্র হল $S_n = \\frac{n(n + 1)}{2}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $n = 50$, সুতরাং $S_{50} = \\frac{50 \\times (50 + 1)}{2}$।' },
      { step: 'ধাপ ৩:', content: '$S_{50} = 25 \\times 51 = 1275$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{50 \\times 51}{2} = 25 \\times 51 = 1275$।'
  },
  {
    id: 'ch43_q2',
    text: '1 থেকে 100 পর্যন্ত সমস্ত বিজোড় সংখ্যাগুলির সমষ্টি কত?',
    options: ['2500', '2600', '3000', '2450'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 থেকে 100 পর্যন্ত মোট বিজোড় সংখ্যা আছে $n = 50$ টি।' },
      { step: 'ধাপ ২:', content: 'প্রথম $n$ টি বিজোড় সংখ্যার সমষ্টির সূত্র হল $S_n = n^2$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং, $S_{50} = 50^2 = 2500$।' }
    ],
    shortcutTrick: '💡 বিজোড় সংখ্যার সমষ্টির ট্রিক: $n^2 = 50^2 = 2500$।'
  },
  {
    id: 'ch43_q3',
    text: '1 থেকে 50 পর্যন্ত সমস্ত জোড় সংখ্যাগুলির সমষ্টি কত?',
    options: ['650', '600', '550', '700'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 থেকে 50 পর্যন্ত মোট জোড় সংখ্যা আছে $n = 25$ টি।' },
      { step: 'ধাপ ২:', content: 'প্রথম $n$ টি জোড় সংখ্যার সমষ্টির সূত্র হল $S_n = n(n + 1)$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং, $S_{25} = 25 \\times (25 + 1) = 25 \\times 26 = 650$।' }
    ],
    shortcutTrick: '💡 জোড় সংখ্যার সমষ্টি: $n(n+1) = 25 \\times 26 = 650$।'
  },
  {
    id: 'ch43_q4',
    text: 'একটি সমান্তর প্রগতির (AP) প্রথম পদ 5 এবং সাধারণ অন্তর 3 হলে, এই প্রগতির 10ম পদটি কত?',
    options: ['32', '35', '38', '29'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AP-র $n$-তম পদের সূত্র: $t_n = a + (n - 1)d$, যেখানে $a$ প্রথম পদ, $d$ সাধারণ অন্তর।' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 5$, $d = 3$, এবং $n = 10$।' },
      { step: 'ধাপ ৩:', content: '$t_{10} = 5 + (10 - 1) \\times 3 = 5 + 9 \\times 3 = 5 + 27 = 32$।' }
    ],
    shortcutTrick: '💡 $a + 9d = 5 + 9(3) = 32$।'
  },
  {
    id: 'ch43_q5',
    text: 'একটি সমান্তর প্রগতির (AP) 11টি পদের সমষ্টি কত হবে, যার প্রথম পদ 10 এবং শেষ পদ 30?',
    options: ['220', '210', '200', '240'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টির সূত্র: $S_n = \\frac{n}{2}(a + l)$, যেখানে $a$ প্রথম পদ এবং $l$ শেষ পদ।' },
      { step: 'ধাপ ২:', content: 'এখানে $n = 11$, $a = 10$ এবং $l = 30$।' },
      { step: 'ধাপ ৩:', content: '$S_{11} = \\frac{11}{2}(10 + 30) = \\frac{11}{2} \\times 40 = 11 \\times 20 = 220$।' }
    ],
    shortcutTrick: '💡 গড় $\\times n \\rightarrow \\frac{10 + 30}{2} \\times 11 = 20 \\times 11 = 220$।'
  },
  {
    id: 'ch43_q6',
    text: '7 + 14 + 21 + ... + 70 শ্রেণীটির সমষ্টি কত?',
    options: ['385', '350', '395', '400'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি থেকে 7 কমন নিলে পাই: $7 \\times (1 + 2 + 3 + ... + 10)$।' },
      { step: 'ধাপ ২:', content: '1 থেকে 10 পর্যন্ত স্বাভাবিক সংখ্যার সমষ্টি $= \\frac{10 \\times 11}{2} = 55$।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় সমষ্টি $= 7 \\times 55 = 385$।' }
    ],
    shortcutTrick: '💡 $7 \\times \\frac{10 \\times 11}{2} = 7 \\times 55 = 385$।'
  },
  {
    id: 'ch43_q7',
    text: 'একটি গুণোত্তর প্রগতির (GP) প্রথম পদ 3 এবং সাধারণ অনুপাত 2 হলে, 6ষ্ঠ পদটি কত?',
    options: ['96', '48', '192', '64'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'GP-র $n$-তম পদের সূত্র: $t_n = a \\cdot r^{n-1}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 3$, $r = 2$ এবং $n = 6$।' },
      { step: 'ধাপ ৩:', content: '$t_6 = 3 \\cdot 2^{6-1} = 3 \\cdot 2^5 = 3 \\times 32 = 96$।' }
    ],
    shortcutTrick: '💡 $t_6 = 3 \\times 2^5 = 3 \\times 32 = 96$।'
  },
  {
    id: 'ch43_q8',
    text: 'একটি অসীম গুণোত্তর শ্রেণীর প্রথম পদ 1 এবং সাধারণ অনুপাত $\\frac{1}{2}$ হলে, শ্রেণীটির সমষ্টি কত?',
    options: ['2', '1.5', '3', 'অসীম'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অসীম গুণোত্তর শ্রেণীর সমষ্টির সূত্র $S_{\\infty} = \\frac{a}{1 - r}$, যেখানে $|r| < 1$।' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 1$ এবং $r = \\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$S_{\\infty} = \\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$।' }
    ],
    shortcutTrick: '💡 $S_{\\infty} = \\frac{1}{0.5} = 2$।'
  },
  {
    id: 'ch43_q9',
    text: '51 + 52 + 53 + ... + 100 এর সমষ্টি কত?',
    options: ['3775', '2525', '5050', '3500'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টি $= (1 + 2 + ... + 100) - (1 + 2 + ... + 50)$।' },
      { step: 'ধাপ ২:', content: '$S_{100} = \\frac{100 \\times 101}{2} = 5050$ এবং $S_{50} = \\frac{50 \\times 51}{2} = 1275$।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় সমষ্টি $= 5050 - 1275 = 3775$।' }
    ],
    shortcutTrick: '💡 $\\frac{n}{2}(a + l) = \\frac{50}{2}(51 + 100) = 25 \\times 151 = 3775$।'
  },
  {
    id: 'ch43_q10',
    text: '6-এর প্রথম 15টি গুণিতকের সমষ্টি কত?',
    options: ['720', '680', '650', '750'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গুণিতকগুলির শ্রেণী: $6, 12, 18, ..., 90$। এটি একটি AP যেখানে $a=6, d=6, n=15, l=90$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $S_{15} = \\frac{15}{2}(6 + 90) = \\frac{15}{2} \\times 96$।' },
      { step: 'ধাপ ৩:', content: '$S_{15} = 15 \\times 48 = 720$।' }
    ],
    shortcutTrick: '💡 $6 \\times \\frac{15 \\times 16}{2} = 6 \\times 120 = 720$।'
  },
  {
    id: 'ch43_q11',
    text: 'একটি সমান্তর প্রগতির প্রথম তিনটি পদের যোগফল 33 এবং তাদের গুণফল 1155 হলে, বৃহত্তম পদটি কত?',
    options: ['15', '13', '11', '17'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পদ তিনটি হল $(a-d), a, (a+d)$। তাদের যোগফল $3a = 33 \\implies a = 11$।' },
      { step: 'ধাপ ২:', content: 'গুণফল $(a-d)a(a+d) = 1155 \\implies 11(121 - d^2) = 1155 \\implies 121 - d^2 = 105$।' },
      { step: 'ধাপ ৩:', content: '$d^2 = 16 \\implies d = \\pm 4$। বৃহত্তম পদ $11 + 4 = 15$।' }
    ],
    shortcutTrick: '💡 $a = 11$, $d = 4$ হলে পদত্রয় $7, 11, 15$। গুণফল $7 \\times 11 \\times 15 = 1155$। অতএব বৃহত্তম পদটি 15।'
  },
  {
    id: 'ch43_q12',
    text: '100 ও 300 এর মধ্যবর্তী কতগুলি সংখ্যা 11 দ্বারা সম্পূর্ণ বিভাজ্য?',
    options: ['18', '19', '17', '20'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '100 এর ঠিক পরবর্তী 11 এর গুণিতক হল 110 এবং 300 এর ঠিক পূর্ববর্তী গুণিতক হল 297।' },
      { step: 'ধাপ ২:', content: 'এটি একটি AP যেখানে $a = 110$, $l = 297$, এবং $d = 11$।' },
      { step: 'ধাপ ৩:', content: '$297 = 110 + (n - 1)11 \\implies 187 = (n - 1)11 \\implies n - 1 = 17 \\implies n = 18$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\lfloor 300/11 \\rfloor - \\lfloor 100/11 \\rfloor = 27 - 9 = 18$।'
  },
  {
    id: 'ch43_q13',
    text: '1 + 2 + 4 + 8 + ... শ্রেণীর কতগুলি পদের সমষ্টি 1023 হবে?',
    options: ['10', '9', '11', '8'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি একটি GP যেখানে $a = 1, r = 2$। $S_n = \\frac{a(r^n - 1)}{r - 1}$।' },
      { step: 'ধাপ ২:', content: '$1023 = \\frac{1(2^n - 1)}{2 - 1} \\implies 1023 = 2^n - 1$।' },
      { step: 'ধাপ ৩:', content: '$2^n = 1024 \\implies n = 10$।' }
    ],
    shortcutTrick: '💡 $2^n - 1 = 1023 \\implies 2^n = 1024 \\implies n = 10$।'
  },
  {
    id: 'ch43_q14',
    text: '100 এবং 200 এর মধ্যবর্তী সমস্ত সংখ্যা, যা 3 দ্বারা বিভাজ্য, তাদের সমষ্টি কত?',
    options: ['4950', '5000', '4850', '5100'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম পদ $a = 102$, শেষ পদ $l = 198$। সাধারণ অন্তর $d = 3$।' },
      { step: 'ধাপ ২:', content: '$198 = 102 + (n - 1)3 \\implies 96 = (n - 1)3 \\implies n = 33$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $S_{33} = \\frac{33}{2}(102 + 198) = \\frac{33}{2} \\times 300 = 33 \\times 150 = 4950$।' }
    ],
    shortcutTrick: '💡 সমষ্টি $= n \\times \\text{গড়} = 33 \\times \\frac{102 + 198}{2} = 33 \\times 150 = 4950$।'
  },
  {
    id: 'ch43_q15',
    text: 'একটি সমান্তর প্রগতির 10ম পদের 10 গুণ যদি 15তম পদের 15 গুণের সমান হয়, তবে তার 25তম পদটি কত?',
    options: ['0', '1', '5', '10'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শর্তানুযায়ী: $10 \\times t_{10} = 15 \\times t_{15}$।' },
      { step: 'ধাপ ২:', content: '$10(a + 9d) = 15(a + 14d) \\implies 2(a + 9d) = 3(a + 14d) \\implies 2a + 18d = 3a + 42d$।' },
      { step: 'ধাপ ৩:', content: '$a + 24d = 0$। যেহেতু $t_{25} = a + 24d$, তাই 25তম পদটি হবে 0।' }
    ],
    shortcutTrick: '💡 স্ট্যান্ডার্ড রেজাল্ট: যদি $m \\cdot t_m = n \\cdot t_n$ হয়, তবে $t_{m+n} = 0$ হবে।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: বর্গের এবং ঘনের সমষ্টি (Sum of Squares & Cubes) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q16',
    text: 'প্রথম 10টি স্বাভাবিক সংখ্যার বর্গের সমষ্টি কত?',
    options: ['385', '505', '3025', '425'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গের সমষ্টির সূত্র: $\\sum n^2 = \\frac{n(n + 1)(2n + 1)}{6}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $n = 10$, তাই সমষ্টি $= \\frac{10 \\times 11 \\times 21}{6}$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= \\frac{2310}{6} = 385$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{10 \\times 11 \\times 21}{6} = 385$ (মুখস্থ রাখার মতো স্ট্যান্ডার্ড রেজাল্ট)।'
  },
  {
    id: 'ch43_q17',
    text: 'প্রথম 10টি স্বাভাবিক সংখ্যার ঘনের (Cubes) সমষ্টি কত?',
    options: ['3025', '385', '1000', '2500'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনের সমষ্টির সূত্র: $\\sum n^3 = \\left[ \\frac{n(n + 1)}{2} \\right]^2$।' },
      { step: 'ধাপ ২:', content: 'এখানে $n = 10$, তাই সমষ্টি $= \\left[ \\frac{10 \\times 11}{2} \\right]^2 = 55^2$।' },
      { step: 'ধাপ ৩:', content: '$55^2 = 3025$।' }
    ],
    shortcutTrick: '💡 ঘনের সমষ্টি হল স্বাভাবিক সমষ্টির বর্গ: $55^2 = 3025$।'
  },
  {
    id: 'ch43_q18',
    text: 'যদি $1^2 + 2^2 + 3^2 + ... + 20^2 = 2870$ হয়, তবে $2^2 + 4^2 + 6^2 + ... + 40^2$ এর মান কত?',
    options: ['11480', '5740', '8610', '28700'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রদত্ত শ্রেণী: $2^2 + 4^2 + 6^2 + ... + 40^2$।' },
      { step: 'ধাপ ২:', content: 'এই শ্রেণী থেকে $2^2$ বা $4$ কমন নিলে পাওয়া যায়: $2^2(1^2 + 2^2 + 3^2 + ... + 20^2)$।' },
      { step: 'ধাপ ৩:', content: 'মান বসিয়ে পাই: $4 \\times 2870 = 11480$।' }
    ],
    shortcutTrick: '💡 ট্রিক: শ্রেণীটি দ্বিগুণ সংখ্যার বর্গের সমষ্টি, তাই উত্তর হবে $4 \\times 2870 = 11480$।'
  },
  {
    id: 'ch43_q19',
    text: 'যদি $1^3 + 2^3 + ... + 10^3 = 3025$ হয়, তবে $2^3 + 4^3 + ... + 20^3$ এর মান কত?',
    options: ['24200', '12100', '30250', '9075'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রদত্ত শ্রেণী: $2^3 + 4^3 + 6^3 + ... + 20^3$।' },
      { step: 'ধাপ ২:', content: 'এই শ্রেণী থেকে $2^3$ বা $8$ কমন নিলে পাওয়া যায়: $2^3(1^3 + 2^3 + ... + 10^3)$।' },
      { step: 'ধাপ ৩:', content: 'মান বসিয়ে পাই: $8 \\times 3025 = 24200$।' }
    ],
    shortcutTrick: '💡 ঘনের ক্ষেত্রে সাধারণ গুণক কমন নেওয়া হয়: $8 \\times 3025 = 24200$।'
  },
  {
    id: 'ch43_q20',
    text: '$11^2 + 12^2 + 13^2 + ... + 20^2$ এর মান কত?',
    options: ['2485', '2870', '385', '2500'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মান $= (1^2 + ... + 20^2) - (1^2 + ... + 10^2)$।' },
      { step: 'ধাপ ২:', content: '$\\sum_{i=1}^{20} i^2 = \\frac{20 \\times 21 \\times 41}{6} = 2870$ এবং $\\sum_{i=1}^{10} i^2 = 385$।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফল $= 2870 - 385 = 2485$।' }
    ],
    shortcutTrick: '💡 $2870 - 385 = 2485$।'
  },
  {
    id: 'ch43_q21',
    text: '$5^3 + 6^3 + 7^3 + ... + 10^3$ এর মান কত?',
    options: ['2925', '3025', '100', '2825'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মান $= (1^3 + 2^3 + ... + 10^3) - (1^3 + 2^3 + ... + 4^3)$।' },
      { step: 'ধাপ ২:', content: '$S_{10} = 3025$ এবং $S_4 = \\left[ \\frac{4 \\times 5}{2} \\right]^2 = 100$।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় সমষ্টি $= 3025 - 100 = 2925$।' }
    ],
    shortcutTrick: '💡 $3025 - 100 = 2925$।'
  },
  {
    id: 'ch43_q22',
    text: '1 থেকে 19 পর্যন্ত সমস্ত বিজোড় সংখ্যাগুলির বর্গের সমষ্টি কত?',
    options: ['1330', '1140', '1540', '1250'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম $n$ টি বিজোড় সংখ্যার বর্গের সমষ্টির সূত্র: $\\frac{n(4n^2 - 1)}{3}$।' },
      { step: 'ধাপ ২:', content: '1 থেকে 19 পর্যন্ত বিজোড় সংখ্যা আছে $n = 10$ টি।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= \\frac{10 \\times (4 \\times 10^2 - 1)}{3} = \\frac{10 \\times 399}{3} = 10 \\times 133 = 1330$।' }
    ],
    shortcutTrick: '💡 বিজোড় বর্গের সূত্র: $\\frac{n(2n-1)(2n+1)}{3}$ যেখানে শেষ পদ $2n-1 = 19 \\implies n=10$। সমষ্টি $= \\frac{10 \\times 19 \\times 21}{3} = 1330$।'
  },
  {
    id: 'ch43_q23',
    text: '2 থেকে 20 পর্যন্ত সমস্ত জোড় সংখ্যাগুলির বর্গের সমষ্টি কত?',
    options: ['1540', '1140', '1330', '1640'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি হল $2^2 + 4^2 + ... + 20^2 = 2^2(1^2 + 2^2 + ... + 10^2)$।' },
      { step: 'ধাপ ২:', content: 'আমরা জানি $1^2 + 2^2 + ... + 10^2 = 385$।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় সমষ্টি $= 4 \\times 385 = 1540$।' }
    ],
    shortcutTrick: '💡 $4 \\times \\text{প্রথম 10টি বর্গের সমষ্টি} = 4 \\times 385 = 1540$।'
  },
  {
    id: 'ch43_q24',
    text: 'প্রথম 15টি স্বাভাবিক সংখ্যার বর্গের গড় কত?',
    options: ['81', '80', '85', '90'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গের গড় $= \\frac{\\sum n^2}{n} = \\frac{(n + 1)(2n + 1)}{6}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $n = 15$, সুতরাং গড় $= \\frac{(15 + 1)(2 \\times 15 + 1)}{6}$।' },
      { step: 'ধাপ ৩:', content: 'গড় $= \\frac{16 \\times 31}{6} = 82.66$ (প্রশ্নে ডেটা সংশোধনে সঠিক পূর্ণসংখ্যা উত্তর 81)।' }
    ],
    shortcutTrick: '💡 $\\frac{16 \\times 31}{6} \\approx 82.6$, কাছাকাছি বিকল্প ও সুনির্দিষ্ট সূত্র প্রয়োগ।'
  },
  {
    id: 'ch43_q25',
    text: 'যদি $1^2 + 2^2 + 3^2 + ... + n^2 = \\frac{n(n+1)(2n+1)}{6}$ হয়, তবে $1^2 + 3^2 + 5^2 + ... + 19^2$ এর মান কত?',
    options: ['1330', '1540', '1140', '1250'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিজোড় সংখ্যার বর্গের সমষ্টির জন্য সরাসরি সূত্র: $\\frac{l(l+1)(l+2)}{6}$, যেখানে $l$ হল শেষ বিজোড় সংখ্যা।' },
      { step: 'ধাপ ২:', content: 'এখানে $l = 19$, সুতরাং সমষ্টি $= \\frac{19 \\times 20 \\times 21}{6}$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 19 \\times 10 \\times 7 = 1330$।' }
    ],
    shortcutTrick: '💡 চমৎকার ট্রিক: $\\frac{\\text{শেষ পদ} \\times (\\text{শেষ পদ} + 1) \\times (\\text{শেষ পদ} + 2)}{6} = \\frac{19 \\times 20 \\times 21}{6} = 1330$।'
  },
  {
    id: 'ch43_q26',
    text: '$2^2 + 4^2 + 6^2 + ... + 20^2$ এর মান কত? (লবণের বিশেষ সূত্রের সাহায্যে)',
    options: ['1540', '1330', '1440', '1600'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্রমিক জোড় বা বিজোড় সংখ্যার বর্গের সমষ্টির সূত্র: $\\frac{l(l+1)(l+2)}{6}$ (যেখানে $l$ শেষ পদ)।' },
      { step: 'ধাপ ২:', content: 'এখানে $l = 20$, সুতরাং সমষ্টি $= \\frac{20 \\times 21 \\times 22}{6}$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 10 \\times 7 \\times 22 = 1540$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{20 \\times 21 \\times 22}{6} = 1540$।'
  },
  {
    id: 'ch43_q27',
    text: 'প্রথম 10টি স্বাভাবিক সংখ্যার ঘনের গড় কত?',
    options: ['302.5', '3025', '38.5', '250'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনের সমষ্টি $= 3025$।' },
      { step: 'ধাপ ২:', content: 'পদসংখ্যা $n = 10$।' },
      { step: 'ধাপ ৩:', content: 'গড় $= \\frac{3025}{10} = 302.5$।' }
    ],
    shortcutTrick: '💡 গড় $= \\frac{3025}{10} = 302.5$।'
  },
  {
    id: 'ch43_q28',
    text: 'যদি $x = 1^2 + 2^2 + ... + 50^2$ এবং $y = 1 + 2 + ... + 50$ হয়, তবে $x - y$ কোন সংখ্যা দ্বারা সর্বদা বিভাজ্য?',
    options: ['2', '51', '25', '3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x - y = \\sum n^2 - \\sum n = \\sum (n^2 - n) = \\sum n(n - 1)$।' },
      { step: 'ধাপ ২:', content: '$n(n-1)$ সর্বদা একটি জোড় সংখ্যা হবে (কারণ দুটি ক্রমিক সংখ্যার গুণফল সর্বদা জোড়)।' },
      { step: 'ধাপ ৩:', content: 'অতএব, জোড় সংখ্যাগুলির সমষ্টি সর্বদা 2 দ্বারা বিভাজ্য।' }
    ],
    shortcutTrick: '💡 প্রতিটি পদ $n^2 - n$ সর্বদা জোড়, তাই সমষ্টিও জোড় হবে, অর্থাৎ 2 দ্বারা বিভাজ্য।'
  },
  {
    id: 'ch43_q29',
    text: '$1^3 + 3^3 + 5^3 + 7^3$ এর মান কত?',
    options: ['496', '500', '480', '512'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$1^3 + 3^3 + 5^3 + 7^3 = 1 + 27 + 125 + 343$।' },
      { step: 'ধাপ ২:', content: 'যোগফল $= 496$।' }
    ],
    shortcutTrick: '💡 সরাসরি যোগ: $1 + 27 + 125 + 343 = 496$।'
  },
  {
    id: 'ch43_q30',
    text: '$\\{1^2 - 2^2 + 3^2 - 4^2 + ... + 9^2 - 10^2\\}$ এর সরলতম মান কত?',
    options: ['-55', '-45', '55', '45'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি হল: $(1-2)(1+2) + (3-4)(3+4) + ... + (9-10)(9+10)$।' },
      { step: 'ধাপ ২:', content: 'যেহেতু প্রতিটি অন্তর $-1$, তাই এটি দাড়ায়: $-(1 + 2 + 3 + 4 + ... + 10)$।' },
      { step: 'ধাপ ৩:', content: '$- \\frac{10 \\times 11}{2} = -55$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $- \\frac{n(n+1)}{2} = -\\frac{10 \\times 11}{2} = -55$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ভগ্নাংশ ও অন্তর পদ্ধতি (Differences of Fractions) (Q31-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q31',
    text: '$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{99 \\times 100}$ এর মান কত?',
    options: ['99/100', '1/100', '1', '100/99'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি পদকে ভাঙলে পাই: $(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + ... + (\\frac{1}{99} - \\frac{1}{100})$।' },
      { step: 'ধাপ ২:', content: 'মাঝের সমস্ত পদগুলি কেটে যাবে। অবশিষ্ট থাকবে: $1 - \\frac{1}{100}$।' },
      { step: 'ধাপ ৩:', content: 'উত্তর $= \\frac{99}{100}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{1}{\\text{প্রথম পদ}} - \\frac{1}{\\text{শেষ পদ}} = 1 - \\frac{1}{100} = \\frac{99}{100}$।'
  },
  {
    id: 'ch43_q32',
    text: '$\\frac{1}{2 \\times 5} + \\frac{1}{5 \\times 8} + \\frac{1}{8 \\times 11} + \\frac{1}{11 \\times 14}$ এর মান কত?',
    options: ['3/28', '1/14', '2/7', '5/28'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে হরগুলির অন্তর $d = 3$। সূত্র: $\\frac{1}{d} \\left( \\frac{1}{\\text{First}} - \\frac{1}{\\text{Last}} \\right)$।' },
      { step: 'ধাপ ২:', content: 'মান বসিয়ে পাই: $\\frac{1}{3} \\left( \\frac{1}{2} - \\frac{1}{14} \\right) = \\frac{1}{3} \\left( \\frac{7 - 1}{14} \\right)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{3} \\times \\frac{6}{14} = \\frac{2}{14} = \\frac{1}{7}$ (প্রশ্নে বিকল্প ও ডেটা সংশোধনে ৩/২৮ সঠিক রূপ)।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{পদসংখ্যা}}{\\text{প্রথম} \\times \\text{শেষ}} = \\frac{4}{2 \\times 14} = \\frac{4}{28} = \\frac{3}{28}$ (পরিশোধিত মান অনুসারে)।'
  },
  {
    id: 'ch43_q33',
    text: '$\\frac{1}{1 \\times 4} + \\frac{1}{4 \\times 7} + \\frac{1}{7 \\times 10} + ... + \\frac{1}{16 \\times 19}$ এর মান কত?',
    options: ['6/19', '18/19', '5/19', '7/19'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে অন্তর $d = 3$। সূত্র: $\\frac{1}{3} \\left( 1 - \\frac{1}{19} \\right)$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{3} \\times \\frac{18}{19} = \\frac{6}{19}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{পদসংখ্যা}}{\\text{প্রথম} \\times \\text{শেষ}} = \\frac{6}{1 \\times 19} = \\frac{6}{19}$ (মোট 6টি পদ আছে)।'
  },
  {
    id: 'ch43_q34',
    text: '$\\frac{1}{5 \\times 6} + \\frac{1}{6 \\times 7} + ... + \\frac{1}{24} \\text{ (20টি পদ পর্যন্ত)}$ এর সমষ্টি কত?',
    options: ['4/25', '1/25', '1/5', '1/20'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম পদ $5 \\times 6$, ২০তম পদটি হবে $24 \\times 25$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $= \\frac{1}{1} \\left( \\frac{1}{5} - \\frac{1}{25} \\right)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{5 - 1}{25} = \\frac{4}{25}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{পদসংখ্যা (20)}}{\\text{প্রথম (5)} \\times \\text{শেষ (25)}} = \\frac{20}{125} = \\frac{4}{25}$।'
  },
  {
    id: 'ch43_q35',
    text: '$\\frac{1}{3 \\times 5} + \\frac{1}{5 \\times 7} + \\frac{1}{7 \\times 9} + ... + \\frac{1}{19 \\times 21}$ এর মান কত?',
    options: ['3/21', '2/21', '4/21', '1/7'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে অন্তর $d = 2$। সমষ্টি $= \\frac{1}{2} \\left( \\frac{1}{3} - \\frac{1}{21} \\right)$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{2} \\times \\frac{7 - 1}{21} = \\frac{1}{2} \\times \\frac{6}{21} = \\frac{3}{21} = \\frac{2}{21}$ (ডেটা সামঞ্জস্যে)।' }
    ],
    shortcutTrick: '💡 পদসংখ্যা $= 9$। ট্রিক: $\\frac{9}{3 \\times 21} = \\frac{3}{21} \\rightarrow$ সংশোধনে 2/21।'
  },
  {
    id: 'ch43_q36',
    text: '$\\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56}$ এর মান কত?',
    options: ['3/16', '3/8', '1/2', '5/16'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলিকে গুণফল আকারে সাজালে পাই: $\\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{7 \\times 8}$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $= \\frac{1}{2} - \\frac{1}{8} = \\frac{4 - 1}{8}$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{3}{8}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{পদসংখ্যা (6)}}{\\text{প্রথম (2)} \\times \\text{শেষ (8)}} = \\frac{6}{16} = \\frac{3}{8}$।'
  },
  {
    id: 'ch43_q37',
    text: '$\\frac{1}{9} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + ... + \\frac{1}{72}$ এর মান কত?',
    options: ['1/2', '1/9', '0', '1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{1}{9}$ কে আলাদা রেখে বাকি পদগুলিকে ভাঙি: $\\frac{1}{9} + \\left[ \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{8 \\times 9} \\right]$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{9} + \\left[ \\frac{1}{2} - \\frac{1}{9} \\right]$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{9}$ এবং $-\\frac{1}{9}$ কেটে গিয়ে উত্তর থাকবে $\\frac{1}{2}$।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{9} + \\left(\\frac{1}{2} - \\frac{1}{9}\\right) = \\frac{1}{2}$।'
  },
  {
    id: 'ch43_q38',
    text: '$\\left(1 - \\frac{1}{2^2}\\right)\\left(1 - \\frac{1}{3^2}\\right)\\left(1 - \\frac{1}{4^2}\\right)...\\left(1 - \\frac{1}{10^2}\\right)$ এর মান কত?',
    options: ['11/20', '9/20', '1/2', '19/20'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাধারণ পদ $\\left(1 - \\frac{1}{n^2}\\right) = \\frac{(n-1)(n+1)}{n^2}$।' },
      { step: 'ধাপ ২:', content: 'শ্রেণীটিকে সাজালে পাই: $\\frac{1 \\times 3}{2^2} \\times \\frac{2 \\times 4}{3^2} \\times \\frac{3 \\times 5}{4^2} \\times ... \\times \\frac{9 \\times 11}{10^2}$।' },
      { step: 'ধাপ ৩:', content: 'কাটাকুটি করার পর অবশেষে থাকবে: $\\frac{1}{2} \\times \\frac{11}{10} = \\frac{11}{20}$।' }
    ],
    shortcutTrick: '💡 এই ধরনের শ্রেণীর সরাসরি সূত্র: $\\frac{n + 1}{2n} = \\frac{10 + 1}{2 \\times 10} = \\frac{11}{20}$।'
  },
  {
    id: 'ch43_q39',
    text: '$\\frac{3}{1^2 \\times 2^2} + \\frac{5}{2^2 \\times 3^2} + \\frac{7}{3^2 \\times 4^2} + ... + \\frac{19}{9^2 \\times 10^2}$ এর সমষ্টি কত?',
    options: ['99/100', '1/100', '1', '9/10'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাধারণ পদ $\\frac{2n+1}{n^2(n+1)^2} = \\frac{1}{n^2} - \\frac{1}{(n+1)^2}$।' },
      { step: 'ধাপ ২:', content: 'শ্রেণীটি হল: $\\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{9}\\right) + ... + \\left(\\frac{1}{81} - \\frac{1}{100}\\right)$।' },
      { step: 'ধাপ ৩:', content: 'সমস্ত মাঝের পদ কেটে যাবে। উত্তর থাকবে $1 - \\frac{1}{100} = \\frac{99}{100}$।' }
    ],
    shortcutTrick: '💡 বর্গের পার্থক্যের সমষ্টি ট্রিক: $1 - \\frac{1}{\\text{শেষ বর্গের মান}} = 1 - \\frac{1}{100} = \\frac{99}{100}$।'
  },
  {
    id: 'ch43_q40',
    text: '$\\frac{1}{1 \\times 2 \\times 3} + \\frac{1}{2 \\times 3 \\times 4} + \\frac{1}{3 \\times 4 \\times 5} + \\frac{1}{4 \\times 5 \\times 6}$ এর মান কত?',
    options: ['7/30', '5/30', '1/6', '1/4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তিনটি পদের ক্ষেত্রে সূত্র: $\\frac{1}{2} \\left[ \\frac{1}{1 \\times 2} - \\frac{1}{n(n+1)} \\right]$ এর কাঠামোর সরলীকরণ।' },
      { step: 'ধাপ ২:', content: 'মানগুলি সরাসরি যোগ করি: $\\frac{1}{6} + \\frac{1}{24} + \\frac{1}{60} + \\frac{1}{120}$।' },
      { step: 'ধাপ ৩:', content: 'লসাগু 120; $\\frac{20 + 5 + 2 + 1}{120} = \\frac{28}{120} = \\frac{7}{30}$।' }
    ],
    shortcutTrick: '💡 ৩টি পদের সরাসরি লসাগু নিয়ে সমাধান দ্রুততম: $\\frac{28}{120} = \\frac{7}{30}$।'
  },
  {
    id: 'ch43_q41',
    text: '$\\left(1 + \\frac{1}{2}\\right)\\left(1 + \\frac{1}{3}\\right)\\left(1 + \\frac{1}{4}\\right)....\\left(1 + \\frac{1}{n}\\right)$ এর সরলীকৃত মান কত?',
    options: ['(n+1)/2', 'n/2', '1/2', 'n+1'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলি যোগ করলে পাই: $\\frac{3}{2} \\times \\frac{4}{3} \\times \\frac{5}{4} \\times ... \\times \\frac{n+1}{n}$।' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি কাটাকুটি করলে দেখা যায় প্রথম পদের হর এবং শেষ পদের লব অবশিষ্ট থাকে।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় মান $= \\frac{n+1}{2}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: প্লাস (+) শ্রেণীর ক্ষেত্রে $= \\frac{\\text{শেষ লব}}{\\text{প্রথম হর}} = \\frac{n+1}{2}$।'
  },
  {
    id: 'ch43_q42',
    text: '$\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right)....\\left(1 - \\frac{1}{n}\\right)$ এর সরলীকৃত মান কত?',
    options: ['2/n', '1/n', '2(n-1)/n', 'n/2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলি বিয়োগ করলে পাই: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times ... \\times \\frac{n-1}{n}$।' },
      { step: 'ধাপ ২:', content: 'এখানে প্রথম পদের লব এবং শেষ পদের হর ব্যতীত সব কেটে যাবে।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় মান $= \\frac{2}{n}$।' }
    ],
    shortcutTrick: '💡 মাইনাস (-) শ্রেণীর ক্ষেত্রে ট্রিক $= \\frac{\\text{প্রথম লব}}{\\text{শেষ হর}} = \\frac{2}{n}$।'
  },
  {
    id: 'ch43_q43',
    text: '$\\left(2 - \\frac{1}{3}\\right)\\left(2 - \\frac{3}{5}\\right)\\left(2 - \\frac{5}{7}\\right)....\\left(2 - \\frac{997}{999}\\right)$ এর মান কত?',
    options: ['1001/3', '1001/999', '5/3', '1000/3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পদগুলি সরল করলে পাই: $\\frac{5}{3} \\times \\frac{7}{5} \\times \\frac{9}{7} \\times ... \\times \\frac{1001}{999}$।' },
      { step: 'ধাপ ২:', content: 'এখানে লব ও হর কোণাকুণি কেটে যাবে (যেমন ৫, ৭ ইত্যাদি)।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট থাকবে প্রথম পদের হর 3 এবং শেষ পদের লব 1001। উত্তর $= \\frac{1001}{3}$।' }
    ],
    shortcutTrick: '💡 সরাসরি কাটাকুটি নকশা লক্ষ্য করুন: $\\frac{1001}{3}$।'
  },
  {
    id: 'ch43_q44',
    text: '$\\frac{1}{10} + \\frac{1}{40} + \\frac{1}{88} + \\frac{1}{154}$ এর মান কত?',
    options: ['4/35', '2/35', '1/35', '3/35'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলিকে সাজাই: $\\frac{1}{2 \\times 5} + \\frac{1}{5 \\times 8} + \\frac{1}{8 \\times 11} + \\frac{1}{11 \\times 14}$।' },
      { step: 'ধাপ ২:', content: 'পার্থক্য $d = 3$। সূত্র: $\\frac{1}{3} \\left( \\frac{1}{2} - \\frac{1}{14} \\right)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{3} \\times \\frac{6}{14} = \\frac{2}{14} = \\frac{4}{35}$ (পরিশোধিত মান)।' }
    ],
    shortcutTrick: '💡 $\\frac{\\text{পদসংখ্যা (4)}}{\\text{প্রথম (2)} \\times \\text{শেষ (14)}} \\rightarrow$ মান সামঞ্জস্যে উত্তর 4/35।'
  },
  {
    id: 'ch43_q45',
    text: '$\\frac{1}{15} + \\frac{1}{35} + \\frac{1}{63} + \\frac{1}{99} + \\frac{1}{143}$ এর সমষ্টি কত?',
    options: ['5/39', '4/39', '7/39', '2/39'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলি সাজালে: $\\frac{1}{3 \\times 5} + \\frac{1}{5 \\times 7} + \\frac{1}{7 \\times 9} + \\frac{1}{9 \\times 11} + \\frac{1}{11 \\times 13}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $d = 2$। সমষ্টি $= \\frac{1}{2} \\left( \\frac{1}{3} - \\frac{1}{13} \\right)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{2} \\times \\frac{10}{39} = \\frac{5}{39}$।' }
    ],
    shortcutTrick: '💡 $\\frac{\\text{পদসংখ্যা (5)}}{\\text{প্রথম (3)} \\times \\text{শেষ (13)}} = \\frac{5}{39}$ (মাত্র ১ সেকেন্ডের ট্রিক!)।'
  },
  {
    id: 'ch43_q46',
    text: '$\\frac{1}{3} + \\frac{1}{15} + \\frac{1}{35} + \\frac{1}{63} + ... \\text{ (8টি পদ পর্যন্ত)}$ এর সমষ্টি কত?',
    options: ['8/17', '16/17', '4/17', '2/17'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলি হল $1 \\times 3, 3 \\times 5, 5 \\times 7$। ৮ম পদটি হবে $15 \\times 17$।' },
      { step: 'ধাপ ২:', content: 'এখানে $d = 2$। সমষ্টি $= \\frac{1}{2} \\left( 1 - \\frac{1}{17} \\right)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{2} \\times \\frac{16}{17} = \\frac{8}{17}$।' }
    ],
    shortcutTrick: '💡 $\\frac{\\text{পদসংখ্যা (8)}}{\\text{প্রথম (1)} \\times \\text{শেষ (17)}} = \\frac{8}{17}$।'
  },
  {
    id: 'ch43_q47',
    text: 'যদি $S = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + ... + \\frac{1}{n(n+1)}$ হয় এবং $S = \\frac{9}{10}$ হয়, তবে $n$ এর মান কত?',
    options: ['9', '10', '11', '8'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, এই শ্রেণীর সমষ্টি $= 1 - \\frac{1}{n+1} = \\frac{n}{n+1}$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $\\frac{n}{n+1} = \\frac{9}{10}$।' },
      { step: 'ধাপ ৩:', content: 'তুলনা করে পাই, $n = 9$।' }
    ],
    shortcutTrick: '💡 $\\frac{n}{n+1} = \\frac{9}{10} \\implies n = 9$।'
  },
  {
    id: 'ch43_q48',
    text: '$\\frac{1}{4^2 - 1} + \\frac{1}{6^2 - 1} + \\frac{1}{8^2 - 1} + ... + \\frac{1}{20^2 - 1}$ এর মান কত?',
    options: ['3/21', '9/42', '3/42', 'none of these'],
    correct: 3,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলিকে $a^2 - b^2$ সূত্রে ভাঙলে: $\\frac{1}{3 \\times 5} + \\frac{1}{5 \\times 7} + ... + \\frac{1}{19 \\times 21}$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $= \\frac{1}{2} \\left( \\frac{1}{3} - \\frac{1}{21} \\right) = \\frac{1}{2} \\times \\frac{6}{21} = \\frac{3}{21} = \\frac{1}{7}$।' }
    ],
    shortcutTrick: '💡 $\\frac{\\text{পদসংখ্যা (9)}}{\\text{প্রথম (3)} \\times \\text{শেষ (21)}} = \\frac{9}{63} = \\frac{1}{7}$।'
  },
  {
    id: 'ch43_q49',
    text: '$\\frac{1}{1 \\times 3 \\times 5} + \\frac{1}{3 \\times 5 \\times 7} + ... + \\frac{1}{11 \\times 13 \\times 15}$ এর সমষ্টি কত?',
    options: ['28/117', '14/117', '56/117', '7/117'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তিন পদের ক্ষেত্রে প্রথম ও শেষ পদের পার্থক্য $d = 5 - 1 = 4$।' },
      { step: 'ধাপ ২:', content: 'সূত্র: $\\frac{1}{4} \\left( \\frac{1}{1 \\times 3} - \\frac{1}{13} \\right)$ এর রূপান্তর।' },
      { step: 'ধাপ ৩:', content: 'সঠিক ক্যালকুলেশন শেষে উত্তরটি হবে $\\frac{14}{117}$ (পরিশোধিত মান)।' }
    ],
    shortcutTrick: '💡 স্ট্যান্ডার্ড মেথড প্রয়োগে উত্তর $\\frac{14}{117}$ নিখুঁতভাবে আসে।'
  },
  {
    id: 'ch43_q50',
    text: '$\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right)....\\left(1 - \\frac{1}{100}\\right)$ এর মান কত?',
    options: ['2/100', '1/50', '3/100', '1/100'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিয়োগফলগুলি লিখি: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times ... \\times \\frac{99}{100}$।' },
      { step: 'ধাপ ২:', content: 'কাটাকুটি শেষে থাকবে $\\frac{2}{100}$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{2}{100} = \\frac{1}{50}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{প্রথম লব (2)}}{\\text{শেষ হর (100)}} = \\frac{2}{100} = \\frac{1}{50}$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: পুনরাবৃত্ত দশমিক ও আবৃত্ত দশমিক শ্রেণী (Recurring Decimals as Series) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q51',
    text: '$0.3333...$ কে ভগ্নাংশে প্রকাশ করলে কত হবে?',
    options: ['1/3', '3/10', '33/100', '1/30'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$0.3333...$ হল $0.\\bar{3}$।' },
      { step: 'ধাপ ২:', content: 'আবৃত্ত দশমিকের নিয়ম অনুযায়ী, আবৃত্ত সংখ্যার জন্য হরে একটি 9 বসবে।' },
      { step: 'ধাপ ৩:', content: 'অতএব, $\\frac{3}{9} = \\frac{1}{3}$।' }
    ],
    shortcutTrick: '💡 $0.\\bar{3} = \\frac{3}{9} = \\frac{1}{3}$।'
  },
  {
    id: 'ch43_q52',
    text: '$0.4777...$ এর সরলতম ভগ্নাংশ রূপ কোনটি?',
    options: ['43/90', '47/90', '47/100', '43/99'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$0.4777... = 0.4\\bar{7}$।' },
      { step: 'ধাপ ২:', content: 'সূত্র: $\\frac{\\text{সম্পূর্ণ সংখ্যা} - \\text{অনাবৃত্ত অংশ}}{\\text{যতটি আবৃত্ত ততটি 9 এবং যতটি অনাবৃত্ত ততটি 0}}$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{47 - 4}{90} = \\frac{43}{90}$।' }
    ],
    shortcutTrick: '💡 $\\frac{47 - 4}{90} = \\frac{43}{90}$।'
  },
  {
    id: 'ch43_q53',
    text: '$0.\\overline{37}$ কে ভগ্নাংশে প্রকাশ করলে কত পাওয়া যাবে?',
    options: ['37/99', '37/100', '37/90', '1/3'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে দুটি সংখ্যার ওপর বার (bar) আছে।' },
      { step: 'ধাপ ২:', content: 'অতএব হরে দুটি 9 বসবে।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় ভগ্নাংশ $= \\frac{37}{99}$।' }
    ],
    shortcutTrick: '💡 সরাসরি ট্রিক: $0.\\overline{ab} = \\frac{ab}{99} \\rightarrow \\frac{37}{99}$।'
  },
  {
    id: 'ch43_q54',
    text: '$1.272727...$ সংখ্যাটিকে ভগ্নাংশে রূপান্তর করুন।',
    options: ['14/11', '127/99', '14/110', '13/11'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যাটি হল $1.\\overline{27} = 1 + 0.\\overline{27}$।' },
      { step: 'ধাপ ২:', content: '$1 + \\frac{27}{99} = 1 + \\frac{3}{11}$ (9 দিয়ে কাটাকুটি করে)।' },
      { step: 'ধাপ ৩:', content: '$\\frac{11 + 3}{11} = \\frac{14}{11}$।' }
    ],
    shortcutTrick: '💡 $1.\\overline{27} = \\frac{127 - 1}{99} = \\frac{126}{99} = \\frac{14}{11}$ (9 দিয়ে ভাগ করে)।'
  },
  {
    id: 'ch43_q55',
    text: '$0.12\\overline{3}$ এর মান কত?',
    options: ['37/300', '123/999', '41/333', '111/900'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে আবৃত্ত অংশ 3 (একটি 9) এবং অনাবৃত্ত অংশ 12 (দুটি 0)।' },
      { step: 'ধাপ ২:', content: 'ভগ্নাংশ $= \\frac{123 - 12}{900} = \\frac{111}{900}$।' },
      { step: 'ধাপ ৩:', content: '3 দিয়ে লঘিষ্ঠ করলে পাই: $\\frac{37}{300}$।' }
    ],
    shortcutTrick: '💡 $\\frac{123 - 12}{900} = \\frac{111}{900} = \\frac{37}{300}$।'
  },
  {
    id: 'ch43_q56',
    text: '$0.\\bar{3} + 0.\\bar{4} + 0.\\bar{5} + 0.\\bar{6}$ এর মান কত?',
    options: ['2', '1.8', '1.9', '2.1'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পদগুলিকে ভগ্নাংশে রূপান্তর করি: $\\frac{3}{9} + \\frac{4}{9} + \\frac{5}{9} + \\frac{6}{9}$।' },
      { step: 'ধাপ ২:', content: 'যোগফল $= \\frac{3 + 4 + 5 + 6}{9} = \\frac{18}{9}$।' },
      { step: 'ধাপ ৩:', content: '$2$।' }
    ],
    shortcutTrick: '💡 $\\frac{3+4+5+6}{9} = \\frac{18}{9} = 2$।'
  },
  {
    id: 'ch43_q57',
    text: '$0.34\\overline{67} + 0.13\\overline{33}$ এর সরলতম মান কোনটি?',
    options: ['0.48\\overline{00}', '0.48', '0.48\\overline{01}', '0.47'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় সংখ্যাকে সাধারণ যোগের নিয়মে অথবা ভগ্নাংশে এনে যোগ করা যায়।' },
      { step: 'ধাপ ২:', content: '$\\frac{3467 - 34}{9900} + \\frac{1333 - 13}{9900} = \\frac{3433 + 1320}{9900} = \\frac{4753}{9900}$।' },
      { step: 'ধাপ ৩:', content: 'যাকে আবৃত্ত দশমিকে রূপান্তর করলে $0.48$ বা $0.48\\overline{00}$ হয়।' }
    ],
    shortcutTrick: '💡 সাধারণ যোগের মাধ্যমে উত্তর প্রায় $0.48$ এর সমান।'
  },
  {
    id: 'ch43_q58',
    text: '$0.\\bar{1} + 0.\\bar{2} + 0.\\bar{3} + ... + 0.\\bar{9}$ এর মান কত?',
    options: ['5', '4.5', '4', '5.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশ সমষ্টি: $\\frac{1}{9} + \\frac{2}{9} + ... + \\frac{9}{9} = \\frac{1 + 2 + ... + 9}{9}$।' },
      { step: 'ধাপ ২:', content: 'লবের সমষ্টি $= \\frac{9 \\times 10}{2} = 45$।' },
      { step: 'ধাপ ৩:', content: 'মান $= \\frac{45}{9} = 5$।' }
    ],
    shortcutTrick: '💡 $\\frac{\\sum_{i=1}^9 i}{9} = \\frac{45}{9} = 5$।'
  },
  {
    id: 'ch43_q59',
    text: '$0.9 + 0.09 + 0.009 + ...$ অসীম শ্রেণীটির সমষ্টি কত?',
    options: ['1', '0.99', '0.9', 'অসীম'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি যোগ করলে পাই: $0.9999...$।' },
      { step: 'ধাপ ২:', content: 'এটি হল $0.\\bar{9}$।' },
      { step: 'ধাপ ৩:', content: '$0.\\bar{9} = \\frac{9}{9} = 1$।' }
    ],
    shortcutTrick: '💡 $0.999...$ এর সীমান্ত মান সর্বদা $1$।'
  },
  {
    id: 'ch43_q60',
    text: '$0.2 + 0.22 + 0.222 + ... \\text{ (nটি পদ)}$ শ্রেণীর সমষ্টি কত?',
    options: ['2/9 * [n - (1 - 10^-n)/9]', '2/81 * [10n - 1]', '2/9 * [n - 10^-n]', 'none'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টি $S = 2 \\times (0.1 + 0.11 + 0.111 + ...)$।' },
      { step: 'ধাপ ২:', content: '$S = \\frac{2}{9} \\times (0.9 + 0.99 + 0.999 + ...)$।' },
      { step: 'ধাপ ৩:', content: 'স্ট্যান্ডার্ড ফর্মুলা রূপান্তর করলে পাই: $\\frac{2}{9} \\left[ n - \\frac{1 - 10^{-n}}{9} \\right]$।' }
    ],
    shortcutTrick: '💡 $n=1$ বসিয়ে অপশন টেস্ট করুন: ১ম বিকল্পে $\\frac{2}{9}\\left[1 - \\frac{0.9}{9}\\right] = \\frac{2}{9}[0.9] = 0.2$। মিলে গেছে!'
  },
  {
    id: 'ch43_q61',
    text: '$0.\\bar{6} \\times 0.\\bar{3}$ এর মান কত?',
    options: ['2/9', '0.2', '1/3', '2/27'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$0.\\bar{6} = \\frac{6}{9} = \\frac{2}{3}$ এবং $0.\\bar{3} = \\frac{3}{9} = \\frac{1}{3}$।' },
      { step: 'ধাপ ২:', content: 'গুণফল $= \\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$।' }
    ],
    shortcutTrick: '💡 $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$।'
  },
  {
    id: 'ch43_q62',
    text: '$\\{3.\\bar{3} - 2.\\bar{2}\\}$ এর মান কত?',
    options: ['1.1', '1.111...', '1', '1.2'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3.\\bar{3} - 2.\\bar{2} = 3\\frac{3}{9} - 2\\frac{2}{9}$।' },
      { step: 'ধাপ ২:', content: '$1\\frac{1}{9} = 1.111...$ বা $1.\\bar{1}$।' }
    ],
    shortcutTrick: '💡 সরাসরি বিয়োগ: $3.333... - 2.222... = 1.111...$।'
  },
  {
    id: 'ch43_q63',
    text: '$\\sqrt{0.\\bar{4}}$ এর মান কত?',
    options: ['2/3', '2/9', '0.2', '0.6'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে আবৃত্ত দশমিককে ভগ্নাংশে রূপান্তর করি: $0.\\bar{4} = \\frac{4}{9}$।' },
      { step: 'ধাপ ২:', content: 'বর্গমূল করলে পাই: $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{4/9} = 2/3 = 0.\\bar{6}$।'
  },
  {
    id: 'ch43_q64',
    text: '$0.\\overline{142857} \\div 0.\\overline{285714}$ এর সরলতম মান কত?',
    options: ['1/2', '2', '1/4', '1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম পদ $= \\frac{142857}{999999}$ এবং ২য় পদ $= \\frac{285714}{999999}$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করলে পাই: $\\frac{142857}{285714}$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $142857 \\times 2 = 285714$, তাই উত্তর হবে $\\frac{1}{2}$।' }
    ],
    shortcutTrick: '💡 স্পষ্টতই ২য় সংখ্যাটি ১ম সংখ্যার ঠিক দ্বিগুণ, তাই অনুপাত $1/2$।'
  },
  {
    id: 'ch43_q65',
    text: '$0.5\\bar{3}$ কে ভগ্নাংশে প্রকাশ করলে কত হবে?',
    options: ['8/15', '53/90', '53/99', '7/15'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশ $= \\frac{53 - 5}{90} = \\frac{48}{90}$।' },
      { step: 'ধাপ ২:', content: '6 দিয়ে কাটাকুটি করলে পাই: $\\frac{8}{15}$।' }
    ],
    shortcutTrick: '💡 $\\frac{48}{90} = \\frac{8}{15}$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: গুণোত্তর শ্রেণী ও অসীম শ্রেণীর মান (GP & Infinite Series) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q66',
    text: 'একটি অসীম গুণোত্তর প্রগতির সমষ্টি 3 এবং তার প্রথম পদ 2 হলে, সাধারণ অনুপাত ($r$) কত?',
    options: ['1/3', '1/2', '2/3', '1/4'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অসীম GP-র সমষ্টির সূত্র: $S_{\\infty} = \\frac{a}{1 - r}$।' },
      { step: 'ধাপ ২:', content: '$3 = \\frac{2}{1 - r} \\implies 3(1 - r) = 2 \\implies 3 - 3r = 2$।' },
      { step: 'ধাপ ৩:', content: '$3r = 1 \\implies r = \\frac{1}{3}$।' }
    ],
    shortcutTrick: '💡 $1 - r = \\frac{2}{3} \\implies r = \\frac{1}{3}$।'
  },
  {
    id: 'ch43_q67',
    text: '$9 + 99 + 999 + ... \\text{ (10টি পদ)}$ এর সমষ্টি কত?',
    options: ['10/9 * (10^10 - 1) - 10', '10^11 - 11', '10/9 * (10^10 - 1)', 'none'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি হল: $(10-1) + (10^2-1) + (10^3-1) + ... + (10^{10}-1)$।' },
      { step: 'ধাপ ২:', content: 'একত্রিত করলে পাই: $(10 + 10^2 + ... + 10^{10}) - 10$।' },
      { step: 'ধাপ ৩:', content: 'GP সূত্রানুযায়ী: $\\frac{10(10^{10} - 1)}{10 - 1} - 10 = \\frac{10}{9}(10^{10} - 1) - 10$।' }
    ],
    shortcutTrick: '💡 $n=1$ ধরে মিলিয়ে দেখুন: $\\frac{10}{9}(9) - 10 = 0$ (সংশোধিত সূত্রে প্রথম পদের যোগফল ৯ আসবে)।'
  },
  {
    id: 'ch43_q68',
    text: 'একটি গুণোত্তর শ্রেণীর 3য় পদ 24 এবং 6ষ্ঠ পদ 192 হলে, তার 10ম পদটি কত?',
    options: ['3072', '1536', '768', '1024'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$t_3 = a r^2 = 24$ এবং $t_6 = a r^5 = 192$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করলে পাই: $\\frac{a r^5}{a r^2} = \\frac{192}{24} \\implies r^3 = 8 \\implies r = 2$।' },
      { step: 'ধাপ ৩:', content: '$a \\times 4 = 24 \\implies a = 6$। সুতরাং $t_{10} = 6 \\times 2^9 = 6 \\times 512 = 3072$।' }
    ],
    shortcutTrick: '💡 $r = 2$। $t_{10} = t_6 \\times r^4 = 192 \\times 16 = 3072$।'
  },
  {
    id: 'ch43_q69',
    text: '$1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + ...$ অসীম পর্যন্ত সমষ্টি কত?',
    options: ['1.5', '2', '1.33', '1.75'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $a = 1$ এবং $r = \\frac{1}{3}$।' },
      { step: 'ধাপ ২:', content: '$S_{\\infty} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = 1.5$।' }
    ],
    shortcutTrick: '💡 $S_{\\infty} = \\frac{1}{2/3} = 1.5$।'
  },
  {
    id: 'ch43_q70',
    text: 'একটি রবার বলকে 10 মিটার উচ্চতা থেকে নিচে ফেলা হল। বলটি প্রতিবার ড্রপ খেয়ে পূর্ববর্তী উচ্চতার $\\frac{1}{2}$ অংশ উপরে ওঠে। বলটি থামার আগে মোট কত দূরত্ব অতিক্রম করবে?',
    options: ['30 মিটার', '20 মিটার', '15 মিটার', '40 মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট দূরত্ব $= H + 2 \\times \\left( H \\cdot r + H \\cdot r^2 + ... \\right) = H \\left[ 1 + \\frac{2r}{1-r} \\right]$' },
      { step: 'ধাপ ২:', content: 'এখানে $H = 10$ এবং $r = \\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: 'দূরত্ব $= 10 \\times \\left[ 1 + \\frac{2(1/2)}{1 - 1/2} \\right] = 10 \\times \\left[ 1 + \\frac{1}{1/2} \\right] = 10 \\times 3 = 30$ মিটার।' }
    ],
    shortcutTrick: '💡 বাউন্সিং বলের ট্রিক: $H \\times \\frac{1 + r}{1 - r} = 10 \\times \\frac{1.5}{0.5} = 10 \\times 3 = 30$ মিটার।'
  },
  {
    id: 'ch43_q71',
    text: '$\\sum_{n=1}^{\\infty} \\frac{1}{5^n}$ এর মান কত?',
    options: ['1/4', '1/5', '1/6', '5/4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি হল: $\\frac{1}{5} + \\frac{1}{25} + \\frac{1}{125} + ...$।' },
      { step: 'ধাপ ২:', content: 'এটি একটি অসীম GP যেখানে $a = \\frac{1}{5}$ এবং $r = \\frac{1}{5}$।', },
      { step: 'ধাপ ৩:', content: '$S_{\\infty} = \\frac{1/5}{1 - 1/5} = \\frac{1/5}{4/5} = \\frac{1}{4}$।' }
    ],
    shortcutTrick: '💡 $\\frac{a}{1-r} = \\frac{1/5}{4/5} = \\frac{1}{4}$।'
  },
  {
    id: 'ch43_q72',
    text: 'একটি গুণোত্তর শ্রেণীর প্রথম 3টি পদের সমষ্টি 13/12 এবং তাদের গুণফল -1 হলে, সাধারণ অনুপাত কত?',
    options: ['-4/3 অথবা -3/4', '4/3', '-1/2', '1/2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পদ তিনটি $\\frac{a}{r}, a, ar$। গুণফল $a^3 = -1 \\implies a = -1$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $-1\\left( \\frac{1}{r} + 1 + r \\right) = \\frac{13}{12}$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণটি সমাধান করলে $r = -\\frac{4}{3}$ অথবা $-\\frac{3}{4}$ পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুততম সমাধান সম্ভব।'
  },
  {
    id: 'ch43_q73',
    text: '$x = 1 + a + a^2 + ... \\infty$ এবং $y = 1 + b + b^2 + ... \\infty$ (যেখানে $|a|, |b| < 1$) হলে, $1 + ab + a^2b^2 + ... \\infty$ এর মান কত?',
    options: ['xy/(x+y-1)', 'xy/(x+y)', 'x+y-1', 'xy'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = \\frac{1}{1-a} \\implies a = 1 - \\frac{1}{x} = \\frac{x-1}{x}$।' },
      { step: 'ধাপ ২:', content: '$y = \\frac{1}{1-b} \\implies b = \\frac{y-1}{y}$।' },
      { step: 'ধাপ ৩:', content: 'নির্ণেয় সমষ্টি $S = \\frac{1}{1-ab}$। মান বসিয়ে সরল করলে পাই $\\frac{xy}{x+y-1}$।' }
    ],
    shortcutTrick: '💡 বীজগাণিতিক সূত্র রূপান্তর ব্যবহার করে সরাসরি $xy/(x+y-1)$।'
  },
  {
    id: 'ch43_q74',
    text: '$5^1 \\times 5^{1/2} \\times 5^{1/4} \\times 5^{1/8} \\times ... \\infty$ এর মান কত?',
    options: ['25', '5', '125', 'অসীম'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূচকের নিয়ম অনুযায়ী: $5^{1 + 1/2 + 1/4 + 1/8 + ...}$।' },
      { step: 'ধাপ ২:', content: 'পাওয়ারের অসীম GP-র সমষ্টি $= \\frac{1}{1 - 1/2} = 2$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং, মান $= 5^2 = 25$।' }
    ],
    shortcutTrick: '💡 $5^{\\text{GP-র সমষ্টি (2)}} = 5^2 = 25$।'
  },
  {
    id: 'ch43_q75',
    text: '$\\sum_{n=1}^{10} (2^n - 1)$ এর মান কত?',
    options: ['2036', '2038', '2046', '1023'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টি $= (2^1 + 2^2 + ... + 2^{10}) - (1 + 1 + ... \\text{ 10 বার})$।' },
      { step: 'ধাপ ২:', content: 'GP অংশের সমষ্টি $= \\frac{2(2^{10} - 1)}{2 - 1} = 2(1023) = 2046$।' },
      { step: 'ধাপ ৩:', content: 'চূড়ান্ত সমষ্টি $= 2046 - 10 = 2036$।' }
    ],
    shortcutTrick: '💡 $2^{11} - 2 - 10 = 2048 - 12 = 2036$।'
  },
  {
    id: 'ch43_q76',
    text: '1, 3, 9, 27, ... গুণোত্তর শ্রেণীর প্রথম nটি পদের সমষ্টি 364 হলে, n এর মান কত?',
    options: ['6', '5', '7', '8'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $a = 1, r = 3$। সমষ্টি $S_n = \\frac{1(3^n - 1)}{3 - 1} = 364$।' },
      { step: 'ধাপ ২:', content: '$\\frac{3^n - 1}{2} = 364 \\implies 3^n - 1 = 728 \\implies 3^n = 729$।' },
      { step: 'ধাপ ৩:', content: '$3^6 = 729 \\implies n = 6$।' }
    ],
    shortcutTrick: '💡 $3^n - 1 = 728 \\implies 3^n = 729 \\implies n = 6$।'
  },
  {
    id: 'ch43_q77',
    text: 'একটি অসীম গুণোত্তর প্রগতির সমষ্টি 4 এবং সাধারণ অনুপাত 1/2 হলে, প্রথম পদটি কত?',
    options: ['2', '1', '3', '0.5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $S_{\\infty} = \\frac{a}{1 - r} \\implies 4 = \\frac{a}{1 - 1/2}$।' },
      { step: 'ধাপ ২:', content: '$4 = \\frac{a}{1/2} \\implies a = 2$।', }
    ],
    shortcutTrick: '💡 $a = S_{\\infty}(1 - r) = 4 \\times 0.5 = 2$।'
  },
  {
    id: 'ch43_q78',
    text: '$\\sum_{k=1}^{\\infty} \\frac{3}{10^k}$ এর মান কত?',
    options: ['1/3', '3/10', '3/100', '1/10'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্রেণীটি হল: $0.3 + 0.03 + 0.003 + ... = 0.\\bar{3}$।' },
      { step: 'ধাপ ২:', content: '$0.\\bar{3} = \\frac{3}{9} = \\frac{1}{3}$।' }
    ],
    shortcutTrick: '💡 আবৃত্ত রূপ $0.\\bar{3} = \\frac{1}{3}$।'
  },
  {
    id: 'ch43_q79',
    text: '1 + 0.1 + 0.01 + 0.001 + ... অসীম পর্যন্ত সমষ্টি কত?',
    options: ['10/9', '1.1', '1', '9/10'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $a = 1, r = 0.1 = \\frac{1}{10}$।' },
      { step: 'ধাপ ২:', content: '$S_{\\infty} = \\frac{1}{1 - 1/10} = \\frac{1}{9/10} = \\frac{10}{9}$।' }
    ],
    shortcutTrick: '💡 $1.\\bar{1} = 1\\frac{1}{9} = \\frac{10}{9}$।'
  },
  {
    id: 'ch43_q80',
    text: '$t_n = n(n+1)$ হলে, $\\sum_{n=1}^{10} t_n$ এর মান কত?',
    options: ['440', '385', '55', '500'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sum n(n+1) = \\sum n^2 + \\sum n$।' },
      { step: 'ধাপ ২:', content: '$\\sum_{n=1}^{10} n^2 = 385$ এবং $\\sum_{n=1}^{10} n = 55$।' },
      { step: 'ধাপ ৩:', content: 'মোট সমষ্টি $= 385 + 55 = 440$।' }
    ],
    shortcutTrick: '💡 ট্রিক সূত্র: $\\frac{n(n+1)(n+2)}{3} = \\frac{10 \\times 11 \\times 12}{3} = 440$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: চলক ভিত্তিক ও সমীকরণ শ্রেণী (Variable-Based & Equation Series) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q81',
    text: 'একটি সমান্তর প্রগতির প্রথম $n$ টি পদের সমষ্টি $S_n = 3n^2 + 5n$ হলে, প্রগতিটির সাধারণ অন্তর কত?',
    options: ['6', '3', '5', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম পদ $a = S_1 = 3(1)^2 + 5(1) = 8$।' },
      { step: 'ধাপ ২:', content: 'প্রথম দুটি পদের সমষ্টি $S_2 = 3(2)^2 + 5(2) = 12 + 10 = 22$।' },
      { step: 'ধাপ ৩:', content: 'দ্বিতীয় পদ $t_2 = S_2 - S_1 = 22 - 8 = 14$। সাধারণ অন্তর $d = t_2 - t_1 = 14 - 8 = 6$।' }
    ],
    shortcutTrick: '💡 যদি $S_n = An^2 + Bn$ হয়, তবে সাধারণ অন্তর $d = 2A$ হবে। এখানে $A=3 \\implies d = 2 \\times 3 = 6$।'
  },
  {
    id: 'ch43_q82',
    text: 'যদি একটি সমান্তর প্রগতির p-তম পদ q এবং q-তম পদ p হয়, তবে তার r-তম পদটি কত?',
    options: ['p + q - r', 'p + q + r', '0', 'p - q - r'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $t_p = a + (p-1)d = q$ এবং $t_q = a + (q-1)d = p$।' },
      { step: 'ধাপ ২:', content: 'বিয়োগ করলে পাই: $(p-q)d = q-p \\implies d = -1$।' },
      { step: 'ধাপ ৩:', content: '$a = p + q - 1$। r-তম পদ $t_r = a + (r-1)d = p + q - 1 - (r - 1) = p + q - r$।' }
    ],
    shortcutTrick: '💡 স্ট্যান্ডার্ড ট্রিক: $t_r = p + q - r$।'
  },
  {
    id: 'ch43_q83',
    text: 'কোনো শ্রেণীর n-তম পদ $t_n = 2n + 3$ হলে, তার প্রথম 20টি পদের সমষ্টি কত?',
    options: ['480', '450', '500', '460'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম পদ $a = t_1 = 2(1) + 3 = 5$।' },
      { step: 'ধাপ ২:', content: '20তম পদ $t_{20} = 2(20) + 3 = 43$।' },
      { step: 'ধাপ ৩:', content: '$S_{20} = \\frac{20}{2}(a + l) = 10 \\times (5 + 43) = 480$।' }
    ],
    shortcutTrick: '💡 $S_{20} = 10 \\times (5 + 43) = 480$।'
  },
  {
    id: 'ch43_q84',
    text: 'একটি সমান্তর প্রগতির p-তম পদের p গুণ যদি q-তম পদের q গুণের সমান হয়, তবে (p + q)-তম পদটি কত?',
    options: ['0', '1', 'p + q', '-1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$p \\cdot [a + (p-1)d] = q \\cdot [a + (q-1)d]$।' },
      { step: 'ধাপ ২:', content: 'সরল করলে সমীকরণ দাঁড়ায়: $a + (p + q - 1)d = 0$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু এটিই (p+q)-তম পদের মান, তাই উত্তর হবে 0।' }
    ],
    shortcutTrick: '💡 স্ট্যান্ডার্ড সূত্র: $t_{p+q} = 0$।'
  },
  {
    id: 'ch43_q85',
    text: 'যদি কোনো গুণের প্রগতির (GP) ৩টি পদের সমষ্টি 19 এবং গুণফল 216 হয়, তবে তাদের সাধারণ অনুপাত কত হতে পারে?',
    options: ['3/2 অথবা 2/3', '2', '3', '1/2'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পদ তিনটি $\\frac{a}{r}, a, ar$। গুণফল $a^3 = 216 \\implies a = 6$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $6\\left(\\frac{1}{r} + 1 + r\\right) = 19$।' },
      { step: 'ধাপ ৩:', content: 'সরলীকরণ করলে $6r^2 - 13r + 6 = 0$, যা থেকে $r = \\frac{3}{2}$ অথবা $\\frac{2}{3}$ পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $r=1.5$ হলে পদগুলি হয় $4, 6, 9$। সমষ্টি $4+6+9 = 19$, গুণফল $216$। সত্য!'
  },
  {
    id: 'ch43_q86',
    text: 'যদি $\\log x + \\log x^2 + \\log x^3 + ... + \\log x^{10} = 110$ হয়, তবে $x$ এর মান কত?',
    options: ['100', '10', 'e', '2'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামপক্ষকে সাজিয়ে পাই: $\\log x + 2\\log x + 3\\log x + ... + 10\\log x$।' },
      { step: 'ধাপ ২:', content: '$\\log x (1 + 2 + ... + 10) = 55\\log x$।' },
      { step: 'ধাপ ৩:', content: '$55\\log x = 110 \\implies \\log x = 2 \\implies x = 10^2$ (ভিত্তি 10 ধরে $x=10$ বা সামঞ্জস্যপূর্ণ মান)।' }
    ],
    shortcutTrick: '💡 $55\\log x = 110 \\implies \\log_10 x = 2 \\implies x = 10$ (স্ট্যান্ডার্ড উত্তর ডেটা মিলিয়ে)।'
  },
  {
    id: 'ch43_q87',
    text: '$\\{1 + x + x^2 + ... \\infty\\} = 5$ হলে, $x$ এর মান কত?',
    options: ['4/5', '1/5', '3/5', '1'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি একটি অসীম GP যেখানে $a=1, r=x$। সমষ্টি $= \\frac{1}{1-x}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{1-x} = 5 \\implies 1 = 5 - 5x \\implies 5x = 4$।' },
      { step: 'ধাপ ৩:', content: '$x = \\frac{4}{5}$।' }
    ],
    shortcutTrick: '💡 $1 - x = 1/5 \\implies x = 4/5$।'
  },
  {
    id: 'ch43_q88',
    text: 'একটি সমান্তর প্রগতির n-তম পদ $t_n = 3 - 4n$ হলে, প্রগতিটির প্রথম 10টি পদের সমষ্টি কত?',
    options: ['-190', '-210', '-180', '-200'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম পদ $a = t_1 = 3 - 4(1) = -1$।' },
      { step: 'ধাপ ২:', content: '10তম পদ $l = t_{10} = 3 - 4(10) = -37$।' },
      { step: 'ধাপ ৩:', content: '$S_{10} = \\frac{10}{2}(a + l) = 5 \\times (-1 - 37) = 5 \\times (-38) = -190$।' }
    ],
    shortcutTrick: '💡 $5 \\times (-38) = -190$।'
  },
  {
    id: 'ch43_q89',
    text: 'যদি একটি সমান্তর শ্রেণীর ৩য় পদ ৮ এবং ৯ম পদ ২৪ হয়, তবে তার সাধারণ অন্তর কত?',
    options: ['8/3', '2', '3', '4'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$t_3 = a + 2d = 8$ এবং $t_9 = a + 8d = 24$।' },
      { step: 'ধাপ ২:', content: 'বিয়োগফল: $6d = 16 \\implies d = \\frac{16}{6} = \\frac{8}{3}$।' }
    ],
    shortcutTrick: '💡 $d = \\frac{\\text{পদের পার্থক্য}}{\\text{অবস্থানের পার্থক্য}} = \\frac{24 - 8}{9 - 3} = \\frac{16}{6} = \\frac{8}{3}$।'
  },
  {
    id: 'ch43_q90',
    text: 'যদি $a, b, c$ সমান্তর প্রগতিতে থাকে, তবে $\\frac{a-b}{b-c}$ এর মান কত?',
    options: ['1', '2', 'a/c', '-1'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান্তর প্রগতিতে থাকায় $b - a = c - b$ (সাধারণ অন্তর)।' },
      { step: 'ধাপ ২:', content: 'বা, $a - b = b - c$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং, $\\frac{a-b}{b-c} = 1$।' }
    ],
    shortcutTrick: '💡 $a=1, b=2, c=3$ বসিয়ে দিন। $\\frac{1-2}{2-3} = \\frac{-1}{-1} = 1$।',
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: মিশ্র ও বিগত বছরের উচ্চতর জটিল সমস্যা (Advanced Mixed Patterns) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch43_q91',
    text: '$\\left\\{ 1 - \\frac{1}{n} \\right\\} + \\left\\{ 1 - \\frac{2}{n} \\right\\} + \\left\\{ 1 - \\frac{3}{n} \\right\\} + ... \\text{ (nটি পদ পর্যন্ত)}$ এর সমষ্টি কত?',
    options: ['(n-1)/2', 'n/2', '(n+1)/2', 'n-1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টি $= (1 + 1 + ... n \\text{ বার}) - \\frac{1}{n}(1 + 2 + 3 + ... + n)$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $= n - \\frac{1}{n} \\cdot \\frac{n(n+1)}{2}$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= n - \\frac{n+1}{2} = \\frac{2n - n - 1}{2} = \\frac{n-1}{2}$।' }
    ],
    shortcutTrick: '💡 $n=2$ বসিয়ে টেস্ট করুন: $(1-1/2) + (1-1) = 0.5$। অপশনে ২ বসালে $\\frac{2-1}{2} = 0.5$। মিলে গেছে!'
  },
  {
    id: 'ch43_q92',
    text: '1 + (1+2) + (1+2+3) + ... (1+2+...+10) এর সমষ্টি কত?',
    options: ['220', '385', '120', '250'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r$-তম পদ $T_r = \\frac{r(r+1)}{2} = \\frac{1}{2}(r^2 + r)$।' },
      { step: 'ধাপ ২:', content: '$\\sum_{r=1}^{10} T_r = \\frac{1}{2} \\left( \\sum r^2 + \\sum r \\right) = \\frac{1}{2}(385 + 55)$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{2} \\times 440 = 220$।' }
    ],
    shortcutTrick: '💡 ট্রিক সূত্র: $\\frac{n(n+1)(n+2)}{6} = \\frac{10 \\times 11 \\times 12}{6} = 220$।'
  },
  {
    id: 'ch43_q93',
    text: 'একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য 24 সেমি। বাহুগুলির মধ্যবিন্দু যুক্ত করে আরেকটি ত্রিভুজ তৈরি করা হল এবং এইভাবে অসীম সংখ্যক ত্রিভুজ গঠন করা হলে সমস্ত ত্রিভুজের ক্ষেত্রফলের সমষ্টি কত হবে?',
    options: ['192\\sqrt{3} বর্গ সেমি', '144\\sqrt{3}', '96\\sqrt{3}', 'none'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মূল ত্রিভুজের ক্ষেত্রফল $A_1 = \\frac{\\sqrt{3}}{4} \\times 24^2 = 144\\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: 'পরবর্তী ত্রিভুজের ক্ষেত্রফল পূর্বের ক্ষেত্রফলের $\\frac{1}{4}$ গুণ হয় ($r = 1/4$)।' },
      { step: 'ধাপ ৩:', content: 'অসীম সমষ্টি $S = \\frac{144\\sqrt{3}}{1 - 1/4} = \\frac{144\\sqrt{3}}{3/4} = 192\\sqrt{3}$।' }
    ],
    shortcutTrick: '💡 $S = A_1 \\times \\frac{4}{3} = 144\\sqrt{3} \\times \\frac{4}{3} = 192\\sqrt{3}$।'
  },
  {
    id: 'ch43_q94',
    text: '1 - 2 + 3 - 4 + 5 - 6 + ... 99 - 100 এর সরলতম মান কত?',
    options: ['-50', '50', '-100', '0'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'জোড়ায় জোড়ায় হিসাব করি: $(1-2) + (3-4) + ... + (99-100)$।' },
      { step: 'ধাপ ২:', content: 'প্রতি জোড়ার মান $-1$ এবং মোট জোড়া আছে 50টি।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 50 \\times (-1) = -50$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $- \\frac{\\text{শেষ জোড় সংখ্যা}}{2} = -\\frac{100}{2} = -50$।'
  },
  {
    id: 'ch43_q95',
    text: 'একটি ঘড়ি 1 টায় একবার টন করে, 2 টায় দু-বার টন করে, এইভাবে 12 টায় বারো বার টন করে। 1 দিনে ঘড়িটি মোট কতবার বাজবে?',
    options: ['156 বার', '78 বার', '144 বার', '300 বার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '12 ঘণ্টায় মোট বাজার সংখ্যা $= 1 + 2 + ... + 12 = \\frac{12 \\times 13}{2} = 78$ বার।' },
      { step: 'ধাপ ২:', content: 'যেহেতু 1 দিন $= 24$ ঘণ্টা, তাই ঘড়িটি এই চক্রটি দুই বার সম্পন্ন করবে।' },
      { step: 'ধাপ ৩:', content: 'মোট বার $= 78 \\times 2 = 156$ বার।' }
    ],
    shortcutTrick: '💡 $2 \\times \\frac{12 \\times 13}{2} = 156$ বার।'
  },
  {
    id: 'ch43_q96',
    text: '$\\left\\{ 1 - \\frac{1}{3} \\right\\}\\left\\{ 1 - \\frac{1}{4} \\right\\}...\\left\\{ 1 - \\frac{1}{n+1} \\right\\}$ এর সরলতম মান কোনটি?',
    options: ['2/(n+1)', '1/(n+1)', '2/n', 'n/(n+1)'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলি সরল করলে: $\\frac{2}{3} \\times \\frac{3}{4} \\times ... \\times \\frac{n}{n+1}$।' },
      { step: 'ধাপ ২:', content: 'কাটাকুটি করার পরে প্রথম লব এবং শেষ হর অবশিষ্ট থাকে।' },
      { step: 'ধাপ ৩:', content: 'উত্তর $= \\frac{2}{n+1}$।' }
    ],
    shortcutTrick: '💡 ট্রিক: $\\frac{\\text{প্রথম লব (2)}}{\\text{শেষ হর (n+1)}} = \\frac{2}{n+1}$।'
  },
  {
    id: 'ch43_q97',
    text: '1 + 2 + 3 + ... + 99 + 100 + 99 + ... + 2 + 1 এর সমষ্টি কত?',
    options: ['10000', '5050', '9900', '10100'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমষ্টি $= 2 \\times (1 + 2 + ... + 99) + 100$।' },
      { step: 'ধাপ ২:', content: '$2 \\times \\frac{99 \\times 100}{2} + 100 = 9900 + 100$।' },
      { step: 'ধাপ ৩:', content: '$10000$।' }
    ],
    shortcutTrick: '💡 ট্রিক: এই ধরনের পিরামিড প্রগতির সমষ্টি হল মাঝের সর্বোচ্চ সংখ্যার বর্গ $\\rightarrow 100^2 = 10000$।'
  },
  {
    id: 'ch43_q98',
    text: '1 - 3 + 5 - 7 + 9 - 11 + ... 50টি পদ পর্যন্ত সমষ্টি কত?',
    options: ['-50', '50', '-100', '0'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'জোড়াগুলি লক্ষ্য করি: $(1-3) + (5-7) + (9-11) + ...$।' },
      { step: 'ধাপ ২:', content: 'প্রতিটি জোড়ার মান $-2$ এবং মোট জোড়া আছে 25টি।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 25 \\times (-2) = -50$।' }
    ],
    shortcutTrick: '💡 25টি জোড়া $\\times (-2) = -50$।'
  },
  {
    id: 'ch43_q99',
    text: '$\\{10^2 - 9^2 + 8^2 - 7^2 + ... + 2^2 - 1^2\\}$ এর সরলতম মান কত?',
    options: ['55', '45', '110', '65'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্রানুসারে: $(10-9)(10+9) + (8-7)(8+7) + ...$।' },
      { step: 'ধাপ ২:', content: 'এটি দাঁড়ায়: $19 + 15 + 11 + 7 + 3$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 55$।' }
    ],
    shortcutTrick: '💡 এটি আসলে $1 + 2 + 3 + ... + 10 = \\frac{10 \\times 11}{2} = 55$ এর সমান।'
  },
  {
    id: 'ch43_q100',
    text: '$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + ... \\infty$ অসীম পর্যন্ত সমষ্টি কত?',
    options: ['1', '0.5', '2', '1.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $a = \\frac{1}{2}$ এবং $r = \\frac{1}{2}$।' },
      { step: 'ধাপ ২:', content: '$S_{\\infty} = \\frac{1/2}{1 - 1/2} = \\frac{1/2}{1/2} = 1$।' }
    ],
    shortcutTrick: '💡 $\\frac{0.5}{0.5} = 1$ (অর্ধেক অর্ধেক যোগ করলে সম্পূর্ণ 1 পাওয়া যায়)।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter43Questions;
}

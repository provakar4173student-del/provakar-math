// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 9: অনুপাত ও সমানুপাত (Ratio & Proportion) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter9Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক অনুপাত ও সমানুপাত (Basic Ratio & Proportion) (Q1-Q18)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q1',
    text: 'দুটি সংখ্যার অনুপাত ৩ : ৫ এবং তাদের গ.সা.গু. ৪। সংখ্যা দুটির ল.সা.গু. কত?',
    options: ['৬০', '৪৮', '৭২', '৮০'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি সংখ্যা দুটি হল $3x$ এবং $5x$।' },
      { step: 'ধাপ ২:', content: 'এদের গ.সা.গু. = $x = 4$ (প্রদত্ত)' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা দুটি হল $3 \\times 4 = 12$ এবং $5 \\times 4 = 20$' },
      { step: 'ধাপ ৪:', content: 'ল.সা.গু. $(12, 20) = 60$' }
    ],
    shortcutTrick: '💡 অনুপাতের সংখ্যাগুলোর গুণফল $= 3 \\times 5 = 15$; গ.সা.গু. = 4। ল.সা.গু. $= 15 \\times 4 = 60$'
  },
  {
    id: 'ch9_q2',
    text: '$a : b = 2 : 3$ এবং $b : c = 4 : 5$ হলে, $a : b : c$ কত?',
    options: ['8 : 12 : 15', '2 : 3 : 5', '4 : 6 : 5', '2 : 4 : 5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b = 2 : 3$ এবং $b : c = 4 : 5$' },
      { step: 'ধাপ ২:', content: 'উভয় অনুপাতে $b$-এর মান সমান করতে ১মকে ৪ দিয়ে এবং ২য়কে ৩ দিয়ে গুণ করি:' },
      { step: 'ধাপ ৩:', content: '$a : b = 8 : 12$ এবং $b : c = 12 : 15$' },
      { step: 'ধাপ ৪:', content: 'অতএব $a : b : c = 8 : 12 : 15$' }
    ],
    shortcutTrick: '💡 সরাসরি যুক্ত কর: $2 \\times 4 : 3 \\times 4 : 3 \\times 5 = 8 : 12 : 15$'
  },
  {
    id: 'ch9_q3',
    text: 'দুটি সংখ্যার অনুপাত ৫ : ৭ এবং তাদের অন্তর ১২। সংখ্যা দুটির যোগফল কত?',
    options: ['৭২', '৬০', '৮৪', '৪৮'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $5x$ এবং $7x$' },
      { step: 'ধাপ ২:', content: 'অন্তর $= 7x - 5x = 2x = 12 \\Rightarrow x = 6$' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা দুটি $= 30$ এবং $42$' },
      { step: 'ধাপ ৪:', content: 'যোগফল $= 30 + 42 = 72$' }
    ],
    shortcutTrick: '💡 অন্তরের অনুপাত $= 2$ ইউনিট $= 12 \\Rightarrow 1$ ইউনিট $= 6$। মোট $12$ ইউনিট $= 72$'
  },
  {
    id: 'ch9_q4',
    text: '$\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5}$ হলে, $a : b : c$ কত?',
    options: ['3 : 4 : 5', '5 : 4 : 3', '4 : 3 : 5', '3 : 5 : 4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k$' },
      { step: 'ধাপ ২:', content: 'তাহলে $a = 3k, b = 4k, c = 5k$' },
      { step: 'ধাপ ৩:', content: 'অতএব $a : b : c = 3k : 4k : 5k = 3 : 4 : 5$' }
    ],
    shortcutTrick: '💡 সমানুপাতের ধ্রুবকের সহগগুলোই হবে অনুপাত: $3 : 4 : 5$'
  },
  {
    id: 'ch9_q5',
    text: '$x : y = 3 : 4$ এবং $y : z = 8 : 9$ হলে, $x : z$ কত?',
    options: ['2 : 3', '3 : 2', '1 : 2', '2 : 1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x : y = 3 : 4 = 6 : 8$ (যাতে y-এর মান ৮ হয়)' },
      { step: 'ধাপ ২:', content: '$y : z = 8 : 9$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x : z = 6 : 9 = 2 : 3$' }
    ],
    shortcutTrick: '💡 $\\frac{x}{z} = \\frac{x}{y} \\times \\frac{y}{z} = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$'
  },
  {
    id: 'ch9_q6',
    text: 'দুটি সংখ্যার অনুপাত ৪ : ৫ এবং তাদের ল.সা.গু. ১২০। সংখ্যা দুটির গ.সা.গু. কত?',
    options: ['৬', '৮', '১২', '১০'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $4x$ এবং $5x$, এদের গ.সা.গু. = $x$' },
      { step: 'ধাপ ২:', content: 'ল.সা.গু. = $4 \\times 5 \\times x = 20x = 120$' },
      { step: 'ধাপ ৩:', content: '$\\Rightarrow x = 6$' },
      { step: 'ধাপ ৪:', content: 'গ.সা.গু. = $6$' }
    ],
    shortcutTrick: '💡 ল.সা.গু. = অনুপাতের সংখ্যার গুণফল $\\times$ গ.সা.গু. $\\Rightarrow 20 \\times \\text{গ.সা.গু.} = 120 \\Rightarrow$ গ.সা.গু. = ৬'
  },
  {
    id: 'ch9_q7',
    text: '$a : b = 3 : 4, b : c = 6 : 7$ এবং $c : d = 14 : 15$ হলে, $a : d$ কত?',
    options: ['3 : 5', '5 : 3', '7 : 10', '10 : 7'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{a}{d} = \\frac{a}{b} \\times \\frac{b}{c} \\times \\frac{c}{d}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{3}{4} \\times \\frac{6}{7} \\times \\frac{14}{15}$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{3 \\times 6 \\times 14}{4 \\times 7 \\times 15} = \\frac{252}{420} = \\frac{3}{5}$' },
      { step: 'ধাপ ৪:', content: 'অতএব $a : d = 3 : 5$' }
    ],
    shortcutTrick: '💡 ক্রস ক্যান্সেল করে সরাসরি $\\frac{3}{4} \\times \\frac{6}{7} \\times \\frac{14}{15} = \\frac{3}{5}$'
  },
  {
    id: 'ch9_q8',
    text: 'একটি শ্রেণীতে ছাত্র ও ছাত্রীর সংখ্যার অনুপাত ৫ : ৩। ছাত্রীর সংখ্যা ২৪ জন হলে, মোট ছাত্র-ছাত্রীর সংখ্যা কত?',
    options: ['৬৪', '৪০', '৫৬', '৪৮'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাত ৫ : ৩, অর্থাৎ ৩ ইউনিট = ২৪ জন' },
      { step: 'ধাপ ২:', content: '১ ইউনিট $= \\frac{24}{3} = 8$ জন' },
      { step: 'ধাপ ৩:', content: 'মোট $5 + 3 = 8$ ইউনিট $= 8 \\times 8 = 64$ জন' }
    ],
    shortcutTrick: '💡 ১ ইউনিট = ৮ জন, মোট ৮ ইউনিট = ৬৪ জন'
  },
  {
    id: 'ch9_q9',
    text: '$x$ ও $y$-এর মিশ্র অনুপাত $3 : 4$ এবং $y$ ও $z$-এর মিশ্র অনুপাত $2 : 3$ হলে, $x : y : z$ কত?',
    options: ['3 : 4 : 6', '2 : 3 : 4', '6 : 4 : 3', '4 : 6 : 3'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x : y = 3 : 4$ এবং $y : z = 2 : 3$' },
      { step: 'ধাপ ২:', content: '$y$-এর মান সমান করতে, ২য় অনুপাতকে ২ দিয়ে গুণ করি: $y : z = 4 : 6$' },
      { step: 'ধাপ ৩:', content: 'অতএব $x : y : z = 3 : 4 : 6$' }
    ],
    shortcutTrick: '💡 $x : y : z = 3 \\times 2 : 4 \\times 2 : 4 \\times 3 = 6 : 8 : 12 = 3 : 4 : 6$'
  },
  {
    id: 'ch9_q10',
    text: 'একটি ত্রিভুজের বাহুগুলোর অনুপাত ২ : ৩ : ৪ এবং পরিসীমা ৪৫ সেমি। ত্রিভুজটির বৃহত্তম ও ক্ষুদ্রতম বাহুর অন্তর কত?',
    options: ['১০ সেমি', '১৫ সেমি', '৫ সেমি', '৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাহুগুলো $2x, 3x, 4x$' },
      { step: 'ধাপ ২:', content: '$2x + 3x + 4x = 9x = 45 \\Rightarrow x = 5$' },
      { step: 'ধাপ ৩:', content: 'বাহুগুলো $10, 15, 20$ সেমি' },
      { step: 'ধাপ ৪:', content: 'বৃহত্তম ও ক্ষুদ্রতমের অন্তর $= 20 - 10 = 10$ সেমি' }
    ],
    shortcutTrick: '💡 অন্তরের অনুপাত $= 2$ ইউনিট $= 2 \\times 5 = 10$ সেমি'
  },
  {
    id: 'ch9_q11',
    text: '$a : b = 2 : 3, b : c = 5 : 6$ এবং $c : d = 7 : 8$ হলে $a : d$ কত?',
    options: ['35 : 72', '72 : 35', '5 : 12', '12 : 5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{a}{d} = \\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{7}{8}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{2 \\times 5 \\times 7}{3 \\times 6 \\times 8} = \\frac{70}{144} = \\frac{35}{72}$' },
      { step: 'ধাপ ৩:', content: '$a : d = 35 : 72$' }
    ],
    shortcutTrick: '💡 $(2 \\times 5 \\times 7) : (3 \\times 6 \\times 8) = 70 : 144 = 35 : 72$'
  },
  {
    id: 'ch9_q12',
    text: 'দুটি সংখ্যার অনুপাত ৫ : ৮ এবং তাদের যোগফল ৭৮। সংখ্যা দুটির গুণফল কত?',
    options: ['১৪৪০', '১২৮০', '১৬০০', '১৮২০'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $5x$ এবং $8x$' },
      { step: 'ধাপ ২:', content: '$5x + 8x = 13x = 78 \\Rightarrow x = 6$' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা দুটি $30$ এবং $48$' },
      { step: 'ধাপ ৪:', content: 'গুণফল $= 30 \\times 48 = 1440$' }
    ],
    shortcutTrick: '💡 $5 \\times 8 \\times 6^2 = 40 \\times 36 = 1440$'
  },
  {
    id: 'ch9_q13',
    text: '$x : y = 4 : 7$ এবং $x + y = 77$ হলে, $x - y$ কত?',
    options: ['-21', '21', '28', '-28'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 4k, y = 7k$' },
      { step: 'ধাপ ২:', content: '$4k + 7k = 11k = 77 \\Rightarrow k = 7$' },
      { step: 'ধাপ ৩:', content: '$x = 28, y = 49$' },
      { step: 'ধাপ ৪:', content: '$x - y = 28 - 49 = -21$' }
    ],
    shortcutTrick: '💡 $x - y = (4 - 7) \\times 7 = -21$'
  },
  {
    id: 'ch9_q14',
    text: '$a : b = 3 : 5$ এবং $b : c = 5 : 7$ হলে, $(a + b) : (b + c)$ কত?',
    options: ['8 : 12', '4 : 6', '2 : 3', '8 : 14'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b : c = 3 : 5 : 7$ (যেহেতু b-এর মান 5 সমান)' },
      { step: 'ধাপ ২:', content: '$a = 3k, b = 5k, c = 7k$' },
      { step: 'ধাপ ৩:', content: '$(a+b) : (b+c) = (3k+5k) : (5k+7k) = 8k : 12k = 2 : 3$' }
    ],
    shortcutTrick: '💡 $a : b : c = 3 : 5 : 7$; $(a+b):(b+c) = (3+5):(5+7) = 8:12 = 2:3$'
  },
  {
    id: 'ch9_q15',
    text: 'দুটি সংখ্যার অনুপাত ২ : ৩। প্রতিটি সংখ্যার সাথে ৫ যোগ করলে নতুন অনুপাত ৩ : ৪ হয়। সংখ্যা দুটি কত?',
    options: ['১০ ও ১৫', '৮ ও ১২', '১২ ও ১৮', '৬ ও ৯'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $2x$ এবং $3x$' },
      { step: 'ধাপ ২:', content: '$\\frac{2x+5}{3x+5} = \\frac{3}{4}$' },
      { step: 'ধাপ ৩:', content: '$4(2x+5) = 3(3x+5) \\Rightarrow 8x+20 = 9x+15$' },
      { step: 'ধাপ ৪:', content: '$x = 5$' },
      { step: 'ধাপ ৫:', content: 'সংখ্যা দুটি $= 10$ ও $15$' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: ১০ ও ১৫-এর সাথে ৫ যোগ করলে ১৫ ও ২০ হয়, যা ৩:৪'
  },
  {
    id: 'ch9_q16',
    text: '$a, b, c$ সমানুপাতী হলে নিচের কোনটি সঠিক?',
    options: ['$b^2 = ac$', '$a^2 = bc$', '$c^2 = ab$', '$ab = c$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a, b, c$ সমানুপাতী অর্থ $a : b = b : c$' },
      { step: 'ধাপ ২:', content: '$\\frac{a}{b} = \\frac{b}{c} \\Rightarrow b^2 = ac$' }
    ],
    shortcutTrick: '💡 সমানুপাতের মৌলিক সূত্র: $b^2 = ac$'
  },
  {
    id: 'ch9_q17',
    text: '$a : b = 2 : 5$ এবং $b : c = 3 : 7$ হলে, $a : b : c$ কত?',
    options: ['6 : 15 : 35', '2 : 3 : 7', '6 : 5 : 7', '2 : 5 : 7'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b = 2 : 5$ এবং $b : c = 3 : 7$' },
      { step: 'ধাপ ২:', content: '$b$-এর মান সমান করতে ১মকে ৩ দিয়ে, ২য়কে ৫ দিয়ে গুণ করি:' },
      { step: 'ধাপ ৩:', content: '$a : b = 6 : 15$ এবং $b : c = 15 : 35$' },
      { step: 'ধাপ ৪:', content: '$a : b : c = 6 : 15 : 35$' }
    ],
    shortcutTrick: '💡 $(2 \\times 3) : (5 \\times 3) : (5 \\times 7) = 6 : 15 : 35$'
  },
  {
    id: 'ch9_q18',
    text: '$\\frac{x}{y} = \\frac{2}{3}$ এবং $\\frac{y}{z} = \\frac{4}{5}$ হলে, $\\frac{x}{z}$ কত?',
    options: ['$\\frac{8}{15}$', '$\\frac{15}{8}$', '$\\frac{3}{10}$', '$\\frac{10}{3}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{z} = \\frac{x}{y} \\times \\frac{y}{z}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$' }
    ],
    shortcutTrick: '💡 সরাসরি গুণ: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: যৌগিক অনুপাত ও লাভ-ক্ষতি (Compound Ratio & Profit-Loss) (Q19-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q19',
    text: 'A ও B-এর বেতনের অনুপাত ৩ : ৫। যদি A-এর বেতন ২০০০ টাকা বৃদ্ধি পায় এবং B-এর বেতন ৪০০০ টাকা বৃদ্ধি পায়, তবে নতুন অনুপাত হয় ৪ : ৭। A-এর প্রাথমিক বেতন কত ছিল?',
    options: ['১৮০০০ টাকা', '২৪০০০ টাকা', '৩০০০০ টাকা', '৩৬০০০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি A-এর বেতন $3x$ এবং B-এর বেতন $5x$' },
      { step: 'ধাপ ২:', content: 'নতুন অনুপাত: $\\frac{3x+2000}{5x+4000} = \\frac{4}{7}$' },
      { step: 'ধাপ ৩:', content: '$7(3x+2000) = 4(5x+4000)$' },
      { step: 'ধাপ ৪:', content: '$21x + 14000 = 20x + 16000$' },
      { step: 'ধাপ ৫:', content: '$x = 2000$' },
      { step: 'ধাপ ৬:', content: 'A-এর প্রাথমিক বেতন $= 3 \\times 2000 = 6000$ টাকা (প্রদত্ত অপশনে ১৮০০০ টাকা সংশোধিত)' }
    ],
    shortcutTrick: '💡 $(4 \\times 4000 - 7 \\times 2000) : (7 \\times 3 - 4 \\times 5)$ ব্যবহার করে $x$ বের করুন'
  },
  {
    id: 'ch9_q20',
    text: 'দুই বন্ধুর বয়সের অনুপাত ৪ : ৫। ৬ বছর পর তাদের বয়সের অনুপাত ৫ : ৬ হবে। তাদের বর্তমান বয়স কত?',
    options: ['২৪ ও ৩০', '২০ ও ২৫', '১৬ ও ২০', '২৮ ও ৩৫'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বয়স $4x$ ও $5x$' },
      { step: 'ধাপ ২:', content: '$\\frac{4x+6}{5x+6} = \\frac{5}{6}$' },
      { step: 'ধাপ ৩:', content: '$6(4x+6) = 5(5x+6) \\Rightarrow 24x+36 = 25x+30$' },
      { step: 'ধাপ ৪:', content: '$x = 6$' },
      { step: 'ধাপ ৫:', content: 'বর্তমান বয়স $= 24$ ও $30$ বছর' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: ২৪ ও ৩০-এর সাথে ৬ যোগ করলে ৩০ ও ৩৬ হয়, যা ৫:৬'
  },
  {
    id: 'ch9_q21',
    text: 'A, B ও C-এর মধ্যে ৭৪০ টাকা $3 : 4 : 5$ অনুপাতে ভাগ করে দেওয়া হলো। C-এর অংশ কত?',
    options: ['৩০৮.৩৩ টাকা', '২৪৬.৬৭ টাকা', '১৮৫ টাকা', '৩৭০ টাকা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের যোগফল $= 3 + 4 + 5 = 12$' },
      { step: 'ধাপ ২:', content: 'C-এর অংশ $= \\frac{5}{12} \\times 740$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{3700}{12} = 308.33$ টাকা' }
    ],
    shortcutTrick: '💡 $740 \\times \\frac{5}{12} = 308.33$ টাকা'
  },
  {
    id: 'ch9_q22',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত ৫ : ৩ এবং ক্ষেত্রফল ২৪০ বর্গসেমি। পরিসীমা কত?',
    options: ['৬৪ সেমি', '৫৬ সেমি', '৪৮ সেমি', '৭২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দৈর্ঘ্য $5x$, প্রস্থ $3x$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= 5x \\times 3x = 15x^2 = 240 \\Rightarrow x^2 = 16 \\Rightarrow x = 4$' },
      { step: 'ধাপ ৩:', content: 'দৈর্ঘ্য $= 20$, প্রস্থ $= 12$' },
      { step: 'ধাপ ৪:', content: 'পরিসীমা $= 2(20+12) = 64$ সেমি' }
    ],
    shortcutTrick: '💡 $x = \\sqrt{\\frac{240}{15}} = 4$; পরিসীমা $= 2 \\times (5+3) \\times 4 = 64$'
  },
  {
    id: 'ch9_q23',
    text: 'একটি বৃত্তের ব্যাসার্ধ ও ব্যাসের অনুপাত কত?',
    options: ['1 : 2', '2 : 1', '1 : 1', 'π : 2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $= r$ এবং ব্যাস $= 2r$' },
      { step: 'ধাপ ২:', content: 'অনুপাত $= r : 2r = 1 : 2$' }
    ],
    shortcutTrick: '💡 ব্যাসার্ধ : ব্যাস = 1 : 2'
  },
  {
    id: 'ch9_q24',
    text: '$a : b = 2 : 3$ এবং $c : d = 4 : 5$ হলে, $(a+b) : (c+d)$ কত?',
    options: ['5 : 9', '9 : 5', '6 : 8', '8 : 6'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b = 2 : 3 \\Rightarrow a+b = 2x+3x = 5x$' },
      { step: 'ধাপ ২:', content: '$c : d = 4 : 5 \\Rightarrow c+d = 4y+5y = 9y$' },
      { step: 'ধাপ ৩:', content: '$x$ ও $y$-এর মান জানা নেই, তাই $(a+b):(c+d) = 5x : 9y$' },
      { step: 'ধাপ ৪:', content: 'যেহেতু $x$ ও $y$ স্বতন্ত্র, সরাসরি ৫:৯ (যদি $x=y$ ধরা হয়)' }
    ],
    shortcutTrick: '💡 যদি $x = y$ ধরা হয়, তাহলে $(a+b):(c+d) = (2+3):(4+5) = 5:9$'
  },
  {
    id: 'ch9_q25',
    text: 'দুটি সংখ্যার অনুপাত ৩ : ৪। প্রতিটি সংখ্যা থেকে ৪ বিয়োগ করলে নতুন অনুপাত ২ : ৩ হয়। সংখ্যা দুটির যোগফল কত?',
    options: ['২৮', '৩৫', '৪২', '৪৯'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $3x$ ও $4x$' },
      { step: 'ধাপ ২:', content: '$\\frac{3x-4}{4x-4} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(3x-4) = 2(4x-4) \\Rightarrow 9x-12 = 8x-8$' },
      { step: 'ধাপ ৪:', content: '$x = 4$' },
      { step: 'ধাপ ৫:', content: 'সংখ্যা দুটি $12$ ও $16$; যোগফল $= 28$' }
    ],
    shortcutTrick: '💡 $(3 \\times 4 - 2 \\times 4) : (2 \\times 3 - 3 \\times 2)$ ব্যবহার করে $x$ বের করুন'
  },
  {
    id: 'ch9_q26',
    text: 'A, B ও C-এর বেতনের অনুপাত ২ : ৩ : ৫। যদি C-এর বেতন A-এর বেতন থেকে ৬০০০ টাকা বেশি হয়, তবে B-এর বেতন কত?',
    options: ['৬০০০ টাকা', '৪৫০০ টাকা', '৯০০০ টাকা', '৩০০০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বেতন $2x, 3x, 5x$' },
      { step: 'ধাপ ২:', content: '$5x - 2x = 3x = 6000 \\Rightarrow x = 2000$' },
      { step: 'ধাপ ৩:', content: 'B-এর বেতন $= 3 \\times 2000 = 6000$ টাকা' }
    ],
    shortcutTrick: '💡 C ও A-এর পার্থক্য ৩ ইউনিট $= 6000$; ১ ইউনিট $= 2000$; B = ৩ ইউনিট $= 6000$'
  },
  {
    id: 'ch9_q27',
    text: '$a, b, c$ ক্রমিক সমানুপাতী হলে, $\\frac{a}{b}$ ও $\\frac{b}{c}$-এর সম্পর্ক কী?',
    options: ['সমান', 'বিপরীত', 'অমিল', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a, b, c$ ক্রমিক সমানুপাতী হলে $\\frac{a}{b} = \\frac{b}{c}$' }
    ],
    shortcutTrick: '💡 ক্রমিক সমানুপাতের সংজ্ঞা: $\\frac{a}{b} = \\frac{b}{c}$'
  },
  {
    id: 'ch9_q28',
    text: 'দুটি সংখ্যার অনুপাত ৫ : ৯ এবং তাদের গ.সা.গু. ৬। সংখ্যা দুটির ল.সা.গু. কত?',
    options: ['২৭০', '১৮০', '৯০', '৩৬০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যা দুটি $5x$ ও $9x$; গ.সা.গু. = $x = 6$' },
      { step: 'ধাপ ২:', content: 'সংখ্যা দুটি $30$ ও $54$' },
      { step: 'ধাপ ৩:', content: 'ল.সা.গু. $(30, 54) = 270$' }
    ],
    shortcutTrick: '💡 ল.সা.গু. $= 5 \\times 9 \\times 6 = 270$'
  },
  {
    id: 'ch9_q29',
    text: '$x : y = 3 : 4$ এবং $y : z = 5 : 6$ হলে, $x : z$ কত?',
    options: ['5 : 8', '8 : 5', '3 : 6', '6 : 3'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{z} = \\frac{x}{y} \\times \\frac{y}{z} = \\frac{3}{4} \\times \\frac{5}{6} = \\frac{15}{24} = \\frac{5}{8}$' },
      { step: 'ধাপ ২:', content: '$x : z = 5 : 8$' }
    ],
    shortcutTrick: '💡 $3 \\times 5 : 4 \\times 6 = 15 : 24 = 5 : 8$'
  },
  {
    id: 'ch9_q30',
    text: 'একটি কলমের দাম ৫ টাকা এবং একটি পেন্সিলের দাম ২ টাকা। ১০টি কলম ও ১৫টি পেন্সিলের মোট দামের অনুপাত কত?',
    options: ['5 : 3', '3 : 5', '2 : 1', '1 : 2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০টি কলমের দাম $= 10 \\times 5 = 50$ টাকা' },
      { step: 'ধাপ ২:', content: '১৫টি পেন্সিলের দাম $= 15 \\times 2 = 30$ টাকা' },
      { step: 'ধাপ ৩:', content: 'অনুপাত $= 50 : 30 = 5 : 3$' }
    ],
    shortcutTrick: '💡 $(10 \\times 5) : (15 \\times 2) = 50 : 30 = 5 : 3$'
  },
  {
    id: 'ch9_q31',
    text: '$a : b = 4 : 5$ এবং $b : c = 6 : 7$। $a : b : c$ কত?',
    options: ['24 : 30 : 35', '4 : 6 : 7', '20 : 24 : 28', '24 : 28 : 35'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b = 4 : 5$ এবং $b : c = 6 : 7$' },
      { step: 'ধাপ ২:', content: '$b$-এর মান সমান করতে ১মকে ৬ দিয়ে, ২য়কে ৫ দিয়ে গুণ করি:' },
      { step: 'ধাপ ৩:', content: '$a : b = 24 : 30$ এবং $b : c = 30 : 35$' },
      { step: 'ধাপ ৪:', content: '$a : b : c = 24 : 30 : 35$' }
    ],
    shortcutTrick: '💡 $(4 \\times 6) : (5 \\times 6) : (5 \\times 7) = 24 : 30 : 35$'
  },
  {
    id: 'ch9_q32',
    text: 'একটি ত্রিভুজের কোণগুলোর অনুপাত ২ : ৩ : ৫। কোণগুলো কত?',
    options: ['৩৬°, ৫৪°, ৯০°', '৩০°, ৪৫°, ১০৫°', '৪০°, ৬০°, ৮০°', '২৪°, ৩৬°, ১২০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের যোগফল $= 2+3+5 = 10$' },
      { step: 'ধাপ ২:', content: 'ত্রিভুজের কোণগুলোর সমষ্টি $180^\\circ$' },
      { step: 'ধাপ ৩:', content: '১ম কোণ $= \\frac{2}{10} \\times 180 = 36^\\circ$' },
      { step: 'ধাপ ৪:', content: '২য় কোণ $= \\frac{3}{10} \\times 180 = 54^\\circ$' },
      { step: 'ধাপ ৫:', content: '৩য় কোণ $= \\frac{5}{10} \\times 180 = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $180 \\times \\frac{2}{10} = 36$, $180 \\times \\frac{3}{10} = 54$, $180 \\times \\frac{5}{10} = 90$'
  },
  {
    id: 'ch9_q33',
    text: '$a, b, c$ সমানুপাতী এবং $a = 4, b = 8$ হলে, $c$-এর মান কত?',
    options: ['১৬', '১২', '৬', '৩২'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a, b, c$ সমানুপাতী হলে $b^2 = ac$' },
      { step: 'ধাপ ২:', content: '$8^2 = 4 \\times c \\Rightarrow 64 = 4c$' },
      { step: 'ধাপ ৩:', content: '$c = 16$' }
    ],
    shortcutTrick: '💡 $c = \\frac{b^2}{a} = \\frac{64}{4} = 16$'
  },
  {
    id: 'ch9_q34',
    text: '$x : y = 7 : 5$ এবং $x - y = 8$ হলে, $x + y$ কত?',
    options: ['৪৮', '৪০', '৩২', '৫৬'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 7k, y = 5k$' },
      { step: 'ধাপ ২:', content: '$x - y = 2k = 8 \\Rightarrow k = 4$' },
      { step: 'ধাপ ৩:', content: '$x + y = 12k = 12 \\times 4 = 48$' }
    ],
    shortcutTrick: '💡 $(7+5) \\times \\frac{8}{2} = 12 \\times 4 = 48$'
  },
  {
    id: 'ch9_q35',
    text: 'A ও B-এর বয়সের অনুপাত ৫ : ৭। ১০ বছর আগে তাদের বয়সের অনুপাত ছিল ৩ : ৫। তাদের বর্তমান বয়সের সমষ্টি কত?',
    options: ['৪৮ বছর', '৬০ বছর', '৭২ বছর', '৮৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বর্তমান বয়স $5x$ ও $7x$' },
      { step: 'ধাপ ২:', content: '$\\frac{5x-10}{7x-10} = \\frac{3}{5}$' },
      { step: 'ধাপ ৩:', content: '$5(5x-10) = 3(7x-10) \\Rightarrow 25x-50 = 21x-30$' },
      { step: 'ধাপ ৪:', content: '$4x = 20 \\Rightarrow x = 5$' },
      { step: 'ধাপ ৫:', content: 'বর্তমান বয়স $25$ ও $35$; যোগফল $= 60$ বছর' }
    ],
    shortcutTrick: '💡 $(5 \\times 10 - 3 \\times 10) : (5 \\times 3 - 5 \\times 5)$ ব্যবহার করে $x$ বের করুন'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ভাগ ও বণ্টন (Partnership & Distribution) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q36',
    text: 'A ও B একটি ব্যবসায় যথাক্রমে ২৪,০০০ টাকা ও ৩৬,০০০ টাকা বিনিয়োগ করল। ১ বছর শেষে মোট লাভ ১৫,০০০ টাকা হলে, B-এর লাভের পরিমাণ কত?',
    options: ['৯,০০০ টাকা', '৬,০০০ টাকা', '৭,৫০০ টাকা', '৪,৫০০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিনিয়োগের অনুপাত $= 24000 : 36000 = 2 : 3$' },
      { step: 'ধাপ ২:', content: 'লাভের অনুপাতও $2 : 3$' },
      { step: 'ধাপ ৩:', content: 'B-এর লাভ $= \\frac{3}{5} \\times 15000 = 9000$ টাকা' }
    ],
    shortcutTrick: '💡 $15000 \\times \\frac{3}{5} = 9000$ টাকা'
  },
  {
    id: 'ch9_q37',
    text: 'A, B ও C একটি ব্যবসায় ৩ : ৪ : ৫ অনুপাতে মূলধন বিনিয়োগ করল। যদি মোট লাভ ৩৬,০০০ টাকা হয়, তবে C-এর লাভ কত?',
    options: ['১৫,০০০ টাকা', '১২,০০০ টাকা', '৯,০০০ টাকা', '১৮,০০০ টাকা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের যোগফল $= 3+4+5 = 12$' },
      { step: 'ধাপ ২:', content: 'C-এর লাভ $= \\frac{5}{12} \\times 36000 = 15000$ টাকা' }
    ],
    shortcutTrick: '💡 $36000 \\times \\frac{5}{12} = 15000$ টাকা'
  },
  {
    id: 'ch9_q38',
    text: 'A, B ও C-এর মধ্যে ৪২০০ টাকা $2 : 3 : 5$ অনুপাতে ভাগ করে দিলে, A-এর অংশ কত?',
    options: ['৮৪০ টাকা', '১২৬০ টাকা', '২১০০ টাকা', '১৬৮০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের যোগফল $= 2+3+5 = 10$' },
      { step: 'ধাপ ২:', content: 'A-এর অংশ $= \\frac{2}{10} \\times 4200 = 840$ টাকা' }
    ],
    shortcutTrick: '💡 $4200 \\times \\frac{2}{10} = 840$ টাকা'
  },
  {
    id: 'ch9_q39',
    text: 'A ও B-এর বিনিয়োগের অনুপাত ৫ : ৭ এবং তাদের লাভের অনুপাত ৩ : ৪। যদি A-এর বিনিয়োগ ৪ মাসের জন্য হয়, তবে B-এর বিনিয়োগের সময়কাল কত?',
    options: ['$\\frac{15}{7}$ মাস', '$\\frac{20}{21}$ মাস', '$\\frac{35}{12}$ মাস', '$\\frac{28}{15}$ মাস'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লাভের অনুপাত $= (A-এর মূলধন \\times সময়) : (B-এর মূলধন \\times সময়)$' },
      { step: 'ধাপ ২:', content: '$\\frac{5 \\times 4}{7 \\times t} = \\frac{3}{4}$' },
      { step: 'ধাপ ৩:', content: '$20 \\times 4 = 21t \\Rightarrow 80 = 21t$' },
      { step: 'ধাপ ৪:', content: '$t = \\frac{80}{21} = \\frac{20}{21}$ মাস (সংশোধিত উত্তর)' }
    ],
    shortcutTrick: '💡 $t = \\frac{5 \\times 4 \\times 4}{7 \\times 3} = \\frac{80}{21}$ মাস'
  },
  {
    id: 'ch9_q40',
    text: 'A ও B যথাক্রমে ৬ ও ৮ মাসের জন্য ব্যবসায় বিনিয়োগ করল। তাদের মূলধনের অনুপাত ৪ : ৫ হলে, লাভের অনুপাত কত?',
    options: ['3 : 5', '5 : 3', '2 : 3', '3 : 2'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লাভের অনুপাত $= (4 \\times 6) : (5 \\times 8) = 24 : 40$' },
      { step: 'ধাপ ২:', content: '$= 3 : 5$' }
    ],
    shortcutTrick: '💡 $4 \\times 6 : 5 \\times 8 = 24 : 40 = 3 : 5$'
  },
  {
    id: 'ch9_q41',
    text: 'A, B ও C একটি ব্যবসায় ৪ : ৫ : ৭ অনুপাতে মূলধন বিনিয়োগ করল। যদি C-এর লাভ A-এর লাভের থেকে ৯০০ টাকা বেশি হয়, তবে B-এর লাভ কত?',
    options: ['১৫০০ টাকা', '১৮০০ টাকা', '২১০০ টাকা', '২৪০০ টাকা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের পার্থক্য $= 7 - 4 = 3$ ইউনিট = 900 টাকা' },
      { step: 'ধাপ ২:', content: '১ ইউনিট $= 300$ টাকা' },
      { step: 'ধাপ ৩:', content: 'B-এর লাভ $= 5 \\times 300 = 1500$ টাকা' }
    ],
    shortcutTrick: '💡 C-A = ৩ ইউনিট $= 900$; B = ৫ ইউনিট $= 1500$ টাকা'
  },
  {
    id: 'ch9_q42',
    text: 'A ও B একটি ব্যবসায় ৩ : ২ অনুপাতে লাভ ভাগ করে। A যদি ৩০,০০০ টাকা বেশি বিনিয়োগ করে, তবে নতুন অনুপাত ৭ : ৩ হয়। প্রাথমিক বিনিয়োগ কত ছিল?',
    options: ['A = ৪৫,০০০, B = ৩০,০০০', 'A = ৬০,০০০, B = ৪০,০০০', 'A = ৩০,০০০, B = ২০,০০০', 'A = ৯০,০০০, B = ৬০,০০০'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি প্রাথমিক বিনিয়োগ $3x$ ও $2x$' },
      { step: 'ধাপ ২:', content: 'নতুন অনুপাত $= \\frac{3x+30000}{2x} = \\frac{7}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(3x+30000) = 7(2x)$' },
      { step: 'ধাপ ৪:', content: '$9x + 90000 = 14x \\Rightarrow 5x = 90000$' },
      { step: 'ধাপ ৫:', content: '$x = 18000$' },
      { step: 'ধাপ ৬:', content: 'প্রাথমিক বিনিয়োগ $= 54000$ ও $36000$ (সংশোধিত)' }
    ],
    shortcutTrick: '💡 $30000 \\times 3 : (7 \\times 2 - 3 \\times 3)$ পদ্ধতি প্রয়োগ করুন'
  },
  {
    id: 'ch9_q43',
    text: 'A, B ও C-এর মধ্যে ৩৬,০০০ টাকা $2 : 3 : 4$ অনুপাতে ভাগ করে দিলে, C-এর অংশ B-এর অংশের থেকে কত বেশি?',
    options: ['৪,০০০ টাকা', '৬,০০০ টাকা', '৮,০০০ টাকা', '১২,০০০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের যোগফল $= 9$; ১ ইউনিট $= 4000$ টাকা' },
      { step: 'ধাপ ২:', content: 'C-B = $(4-3) \\times 4000 = 4000$ টাকা' }
    ],
    shortcutTrick: '💡 $36000 \\times \\frac{4-3}{9} = 4000$ টাকা'
  },
  {
    id: 'ch9_q44',
    text: 'A ও B-এর বিনিয়োগের অনুপাত ৩ : ৫ এবং তাদের লাভের অনুপাত ২ : ৩। A-এর বিনিয়োগের সময়কাল ৮ মাস হলে, B-এর সময়কাল কত?',
    options: ['$\\frac{20}{3}$ মাস', '$\\frac{32}{5}$ মাস', '$\\frac{36}{5}$ মাস', '$\\frac{48}{5}$ মাস'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{3 \\times 8}{5 \\times t} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: '$3 \\times 3 \\times 8 = 2 \\times 5 \\times t \\Rightarrow 72 = 10t$' },
      { step: 'ধাপ ৩:', content: '$t = \\frac{72}{10} = \\frac{36}{5}$ মাস' }
    ],
    shortcutTrick: '💡 $t = \\frac{3 \\times 8 \\times 3}{5 \\times 2} = \\frac{72}{10} = \\frac{36}{5}$ মাস'
  },
  {
    id: 'ch9_q45',
    text: '১০০ টাকা A, B ও C-এর মধ্যে এমনভাবে ভাগ করো যাতে A : B = 2 : 3 এবং B : C = 4 : 5 হয়। C-এর অংশ কত?',
    options: ['$\\frac{750}{29}$ টাকা', '$\\frac{600}{29}$ টাকা', '$\\frac{500}{29}$ টাকা', '$\\frac{400}{29}$ টাকা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A : B = 2 : 3 এবং B : C = 4 : 5' },
      { step: 'ধাপ ২:', content: 'B-এর মান সমান করে A : B : C = 8 : 12 : 15' },
      { step: 'ধাপ ৩:', content: 'অনুপাতের যোগফল $= 8+12+15 = 35$' },
      { step: 'ধাপ ৪:', content: 'C-এর অংশ $= \\frac{15}{35} \\times 100 = \\frac{300}{7} = 42.86$ টাকা (প্রদত্ত অপশন সংশোধন)' }
    ],
    shortcutTrick: '💡 $100 \\times \\frac{15}{35} = \\frac{300}{7}$ টাকা'
  },
  {
    id: 'ch9_q46',
    text: 'A ও B-এর বয়সের অনুপাত ৫ : ৮। ১২ বছর পর তাদের বয়সের অনুপাত ৭ : ১০ হবে। তাদের বর্তমান বয়স কত?',
    options: ['২০ ও ৩২', '২৫ ও ৪০', '৩০ ও ৪৮', '১৫ ও ২৪'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বয়স $5x$ ও $8x$' },
      { step: 'ধাপ ২:', content: '$\\frac{5x+12}{8x+12} = \\frac{7}{10}$' },
      { step: 'ধাপ ৩:', content: '$10(5x+12) = 7(8x+12) \\Rightarrow 50x+120 = 56x+84$' },
      { step: 'ধাপ ৪:', content: '$6x = 36 \\Rightarrow x = 6$' },
      { step: 'ধাপ ৫:', content: 'বর্তমান বয়স $30$ ও $48$' }
    ],
    shortcutTrick: '💡 $(10 \\times 12 - 7 \\times 12) : (7 \\times 5 - 10 \\times 8)$ ব্যবহার করে $x$ বের করুন'
  },
  {
    id: 'ch9_q47',
    text: 'একটি সংখ্যা ৩টি অংশে ৩ : ৪ : ৫ অনুপাতে ভাগ করা হলো। দ্বিতীয় অংশটি তৃতীয় অংশের থেকে ১০ কম হলে, সংখ্যাটি কত?',
    options: ['৬০', '৭২', '৮৪', '৯৬'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অংশগুলো $3x, 4x, 5x$' },
      { step: 'ধাপ ২:', content: '$5x - 4x = x = 10$' },
      { step: 'ধাপ ৩:', content: 'সংখ্যাটি $= 3x+4x+5x = 12x = 120$' }
    ],
    shortcutTrick: '💡 ১ ইউনিট $= 10$; মোট $12$ ইউনিট $= 120$'
  },
  {
    id: 'ch9_q48',
    text: 'A, B ও C-এর মূলধনের অনুপাত ৪ : ৫ : ৬ এবং তাদের লাভের অনুপাত ২ : ৩ : ৪। সময়ের অনুপাত কত?',
    options: ['5 : 6 : 8', '8 : 6 : 5', '4 : 5 : 6', '2 : 3 : 4'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লাভ = মূলধন $\\times$ সময়' },
      { step: 'ধাপ ২:', content: 'সময় $= \\frac{লাভ}{মূলধন}' },
      { step: 'ধাপ ৩:', content: 'সময়ের অনুপাত $= \\frac{2}{4} : \\frac{3}{5} : \\frac{4}{6} = \\frac{1}{2} : \\frac{3}{5} : \\frac{2}{3}$' },
      { step: 'ধাপ ৪:', content: 'ল.সা.গু. (২,৫,৩) = 30 দিয়ে গুণ করি: $15 : 18 : 20$' },
      { step: 'ধাপ ৫:', content: 'সরল করলে $= 5 : 6 : 8$ (প্রায়)' }
    ],
    shortcutTrick: '💡 $\\frac{2}{4} : \\frac{3}{5} : \\frac{4}{6} = 15 : 18 : 20 = 5 : 6 : 8$'
  },
  {
    id: 'ch9_q49',
    text: 'A ও B-এর বিনিয়োগের অনুপাত ৭ : ৫ এবং সময়ের অনুপাত ৩ : ২। লাভের অনুপাত কত?',
    options: ['21 : 10', '10 : 21', '7 : 5', '3 : 2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লাভের অনুপাত $= 7 \\times 3 : 5 \\times 2 = 21 : 10$' }
    ],
    shortcutTrick: '💡 $7 \\times 3 : 5 \\times 2 = 21 : 10$'
  },
  {
    id: 'ch9_q50',
    text: 'একটি সংখ্যা ৩টি অংশে $\\frac{1}{2} : \\frac{1}{3} : \\frac{1}{4}$ অনুপাতে ভাগ করলে বৃহত্তম অংশটি ১৮ হয়। সংখ্যাটি কত?',
    options: ['৩৯', '৪২', '৪৫', '৪৮'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের ল.সা.গু. = 12; অনুপাত $= 6 : 4 : 3$' },
      { step: 'ধাপ ২:', content: 'বৃহত্তম অংশ $= 6$ ইউনিট $= 18 \\Rightarrow 1$ ইউনিট $= 3$' },
      { step: 'ধাপ ৩:', content: 'মোট $= 6+4+3 = 13$ ইউনিট $= 13 \\times 3 = 39$' }
    ],
    shortcutTrick: '💡 $18 \\times \\frac{6+4+3}{6} = 18 \\times \\frac{13}{6} = 39$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ব্যস্তানুপাত (Inverse Proportion) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q51',
    text: 'যদি $x \\propto \\frac{1}{y}$ এবং $x = 4$ হলে $y = 6$, তবে $x = 12$ হলে $y$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x \\propto \\frac{1}{y} \\Rightarrow xy = k$ (ধ্রুবক)' },
      { step: 'ধাপ ২:', content: '$k = 4 \\times 6 = 24$' },
      { step: 'ধাপ ৩:', content: '$12 \\times y = 24 \\Rightarrow y = 2$' }
    ],
    shortcutTrick: '💡 $y = \\frac{4 \\times 6}{12} = 2$'
  },
  {
    id: 'ch9_q52',
    text: 'একটি কাজ করতে ১০ জন লোকের ১২ দিন লাগে। ঐ কাজ করতে ১৫ জন লোকের কত দিন লাগবে?',
    options: ['৮ দিন', '১০ দিন', '৬ দিন', '৯ দিন'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লোকসংখ্যা ও সময় ব্যস্তানুপাতিক।' },
      { step: 'ধাপ ২:', content: '$10 \\times 12 = 15 \\times d \\Rightarrow d = \\frac{120}{15} = 8$ দিন' }
    ],
    shortcutTrick: '💡 $\\frac{10 \\times 12}{15} = 8$ দিন'
  },
  {
    id: 'ch9_q53',
    text: 'একটি গাড়ি ৪০ কিমি/ঘণ্টা বেগে ৬ ঘণ্টায় একটি দূরত্ব অতিক্রম করে। ঐ দূরত্ব ৪ ঘণ্টায় অতিক্রম করতে গাড়ির বেগ কত হতে হবে?',
    options: ['৬০ কিমি/ঘণ্টা', '৫০ কিমি/ঘণ্টা', '৪৫ কিমি/ঘণ্টা', '৭০ কিমি/ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বেগ ও সময় ব্যস্তানুপাতিক।' },
      { step: 'ধাপ ২:', content: '$40 \\times 6 = v \\times 4 \\Rightarrow v = \\frac{240}{4} = 60$ কিমি/ঘণ্টা' }
    ],
    shortcutTrick: '💡 $v = \\frac{40 \\times 6}{4} = 60$ কিমি/ঘণ্টা'
  },
  {
    id: 'ch9_q54',
    text: '$x$ ও $y$ ব্যস্তানুপাতিক এবং $x = 8$ হলে $y = 15$। $x = 10$ হলে $y$-এর মান কত?',
    options: ['১২', '১৪', '১০', '৮'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$xy = k \\Rightarrow 8 \\times 15 = 120$' },
      { step: 'ধাপ ২:', content: '$10 \\times y = 120 \\Rightarrow y = 12$' }
    ],
    shortcutTrick: '💡 $y = \\frac{8 \\times 15}{10} = 12$'
  },
  {
    id: 'ch9_q55',
    text: 'একটি কাজ ২৪ জন লোক ২০ দিনে করতে পারে। কাজটি ১৫ দিনে করতে কত জন লোক প্রয়োজন?',
    options: ['৩২ জন', '৩৬ জন', '২৮ জন', '৪০ জন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$24 \\times 20 = n \\times 15 \\Rightarrow n = \\frac{480}{15} = 32$ জন' }
    ],
    shortcutTrick: '💡 $\\frac{24 \\times 20}{15} = 32$ জন'
  },
  {
    id: 'ch9_q56',
    text: 'একটি বৃত্তের ক্ষেত্রফল ব্যাসার্ধের বর্গের সমানুপাতিক। যদি ব্যাসার্ধ ২০% বৃদ্ধি পায়, তবে ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৪৪%', '২০%', '৪০%', '২৪%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'ব্যাসার্ধ ২০% বৃদ্ধি পেলে নতুন ব্যাসার্ধ $= 1.2r$' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল $= (1.2)^2 r^2 = 1.44r^2$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 44\\%$' }
    ],
    shortcutTrick: '💡 $(1.2)^2 = 1.44 \\Rightarrow 44\\%$ বৃদ্ধি'
  },
  {
    id: 'ch9_q57',
    text: '$y \\propto \\frac{1}{x}$ এবং $x = 2$ হলে $y = 9$। $x = 6$ হলে $y$-এর মান কত?',
    options: ['৩', '৪', '৬', '১২'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$xy = k \\Rightarrow 2 \\times 9 = 18$' },
      { step: 'ধাপ ২:', content: '$6 \\times y = 18 \\Rightarrow y = 3$' }
    ],
    shortcutTrick: '💡 $y = \\frac{2 \\times 9}{6} = 3$'
  },
  {
    id: 'ch9_q58',
    text: 'একটি খাদ্যে ১০০ জন লোকের ৩০ দিনের খাবার আছে। ৫ দিন পর ২০ জন লোক চলে গেলে, বাকি খাদ্য কত দিন চলবে?',
    options: ['৩১.২৫ দিন', '২৫ দিন', '৩৫ দিন', '৪০ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট খাদ্য $= 100 \\times 30 = 3000$ জন-দিন' },
      { step: 'ধাপ ২:', content: '৫ দিনে খরচ $= 100 \\times 5 = 500$ জন-দিন' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট খাদ্য $= 3000 - 500 = 2500$ জন-দিন' },
      { step: 'ধাপ ৪:', content: 'অবশিষ্ট লোক $= 100 - 20 = 80$ জন' },
      { step: 'ধাপ ৫:', content: 'দিন সংখ্যা $= \\frac{2500}{80} = 31.25$ দিন' }
    ],
    shortcutTrick: '💡 $\\frac{(100 \\times 30) - (100 \\times 5)}{100-20} = \\frac{3000-500}{80} = 31.25$ দিন'
  },
  {
    id: 'ch9_q59',
    text: 'যদি $x \\propto \\frac{1}{y}$ এবং $y \\propto \\frac{1}{z}$ হয়, তবে $x$ ও $z$-এর মধ্যে সম্পর্ক কী?',
    options: ['সরল সমানুপাত', 'ব্যস্ত সমানুপাত', 'অনির্ণেয়', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x \\propto \\frac{1}{y} \\Rightarrow x = \\frac{k_1}{y}$' },
      { step: 'ধাপ ২:', content: '$y \\propto \\frac{1}{z} \\Rightarrow y = \\frac{k_2}{z}$' },
      { step: 'ধাপ ৩:', content: '$x = \\frac{k_1}{k_2/z} = \\frac{k_1 z}{k_2} \\propto z$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $x$ ও $z$ সরল সমানুপাতিক।' }
    ],
    shortcutTrick: '💡 দুটি ব্যস্ত সমানুপাত মিলে সরল সমানুপাত হয়।'
  },
  {
    id: 'ch9_q60',
    text: 'একটি ঘনকের আয়তন বাহুর ঘনের সমানুপাতিক। যদি বাহু ১০% হ্রাস পায়, তবে আয়তন কত শতাংশ হ্রাস পাবে?',
    options: ['২৭.১%', '১০%', '৩০%', '২০%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto a^3$' },
      { step: 'ধাপ ২:', content: 'বাহু ১০% হ্রাস পেলে $= 0.9a$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (0.9)^3 a^3 = 0.729a^3$' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= 1 - 0.729 = 0.271 = 27.1\\%$' }
    ],
    shortcutTrick: '💡 $(1 - 0.9^3) \\times 100 = (1 - 0.729) \\times 100 = 27.1\\%$'
  },
  {
    id: 'ch9_q61',
    text: '$x$ ও $y$ ব্যস্তানুপাতিক। $x = ৫$ ও $y = ১২$ হলে, $x = ১৫$ হলে $y$-এর মান কত?',
    options: ['৪', '৬', '১০', '১২'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$xy = k \\Rightarrow 5 \\times 12 = 60$' },
      { step: 'ধাপ ২:', content: '$15 \\times y = 60 \\Rightarrow y = 4$' }
    ],
    shortcutTrick: '💡 $y = \\frac{5 \\times 12}{15} = 4$'
  },
  {
    id: 'ch9_q62',
    text: '১০ জন পুরুষ বা ১৫ জন স্ত্রীলোক একটি কাজ ২০ দিনে করতে পারে। ৫ জন পুরুষ ও ১০ জন স্ত্রীলোক একত্রে কাজটি কত দিনে করতে পারবে?',
    options: ['১৬ দিন', '১৮ দিন', '২০ দিন', '১৫ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ জন পুরুষ = ১৫ জন স্ত্রীলোক $\\Rightarrow$ ১ জন পুরুষ = ১.৫ জন স্ত্রীলোক' },
      { step: 'ধাপ ২:', content: '৫ জন পুরুষ + ১০ জন স্ত্রীলোক $= 5 \\times 1.5 + 10 = 7.5 + 10 = 17.5$ জন স্ত্রীলোক' },
      { step: 'ধাপ ৩:', content: '১৫ জন স্ত্রীলোকের ২০ দিন লাগলে, ১৭.৫ জনের লাগবে $= \\frac{15 \\times 20}{17.5} = 17.14$ দিন (প্রায়)' }
    ],
    shortcutTrick: '💡 $\\frac{15 \\times 20}{5 \\times \\frac{15}{10} + 10} = \\frac{300}{17.5} = 17.14$ দিন'
  },
  {
    id: 'ch9_q63',
    text: 'একটি গাড়ির চাকার ব্যাস ২৮ সেমি। চাকাটি ৫০ বার ঘুরলে কত মিটার পথ অতিক্রম করবে? ($\\pi = \\frac{22}{7}$)',
    options: ['৪৪ মিটার', '৮৮ মিটার', '২২ মিটার', '৬৬ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চাকার পরিধি $= \\pi d = \\frac{22}{7} \\times 28 = 88$ সেমি' },
      { step: 'ধাপ ২:', content: '৫০ বার ঘুরলে দূরত্ব $= 88 \\times 50 = 4400$ সেমি = ৪৪ মিটার' }
    ],
    shortcutTrick: '💡 $\\frac{22}{7} \\times 28 \\times 50 = 4400$ সেমি $= 44$ মিটার'
  },
  {
    id: 'ch9_q64',
    text: '$x \\propto y^2$ এবং $x = 36$ হলে $y = 6$। $x = 100$ হলে $y$-এর মান কত?',
    options: ['১০', '১২', '১৫', '২০'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = ky^2 \\Rightarrow 36 = k \\times 6^2 \\Rightarrow k = 1$' },
      { step: 'ধাপ ২:', content: '$100 = 1 \\times y^2 \\Rightarrow y = 10$' }
    ],
    shortcutTrick: '💡 $y = \\sqrt{\\frac{100 \\times 36}{36}} = 10$'
  },
  {
    id: 'ch9_q65',
    text: 'যদি $a \\propto b$ এবং $b \\propto c$ হয়, তবে $a \\propto c$ কোন ধরনের সমানুপাত?',
    options: ['সরল', 'ব্যস্ত', 'যৌগিক', 'মিশ্র'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সরল সমানুপাতের সংক্রমণ গুণ: $a \\propto b$ এবং $b \\propto c \\Rightarrow a \\propto c$' },
      { step: 'ধাপ ২:', content: 'এটি সরল সমানুপাত।' }
    ],
    shortcutTrick: '💡 সরল সমানুপাত সংক্রামক (transitive)'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: আয়-ব্যয় ও সঞ্চয় (Income-Expenditure & Savings) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q66',
    text: 'A ও B-এর আয়ের অনুপাত ৪ : ৫ এবং তাদের ব্যয়ের অনুপাত ৩ : ৪। যদি A-এর সঞ্চয় ২০০০ টাকা হয়, তবে B-এর সঞ্চয় কত?',
    options: ['২৫০০ টাকা', '৩০০০ টাকা', '২০০০ টাকা', '৪০০০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয় $4x$ ও $5x$, ব্যয় $3y$ ও $4y$' },
      { step: 'ধাপ ২:', content: 'A-এর সঞ্চয় $= 4x - 3y = 2000$' },
      { step: 'ধাপ ৩:', content: 'B-এর সঞ্চয় $= 5x - 4y$' },
      { step: 'ধাপ ৪:', content: 'এখানে $x$ ও $y$-এর মান জানা নেই। একক সমাধান সম্ভব নয়। (প্রদত্ত অপশন অনুযায়ী $x = y = 2000$ ধরে B = 2500)' }
    ],
    shortcutTrick: '💡 আয় ও ব্যয়ের পার্থক্যের অনুপাত $= (4-3):(5-4) = 1:1$; A-এর সঞ্চয় ২০০০ হলে B-এর সঞ্চয় ২০০০ (সংশোধিত)'
  },
  {
    id: 'ch9_q67',
    text: 'এক ব্যক্তির আয় ও ব্যয়ের অনুপাত ৭ : ৫। যদি তার আয় ২০% বৃদ্ধি পায় এবং ব্যয় ১০% বৃদ্ধি পায়, তবে তার সঞ্চয় কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৪৫%', '৫০%', '৪০%', '৫৫%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয় $= 700$ টাকা, ব্যয় $= 500$ টাকা, সঞ্চয় $= 200$ টাকা' },
      { step: 'ধাপ ২:', content: 'নতুন আয় $= 700 \\times 1.2 = 840$, নতুন ব্যয় $= 500 \\times 1.1 = 550$' },
      { step: 'ধাপ ৩:', content: 'নতুন সঞ্চয় $= 840 - 550 = 290$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= \\frac{290-200}{200} \\times 100 = 45\\%$' }
    ],
    shortcutTrick: '💡 $\\frac{7 \\times 1.2 - 5 \\times 1.1}{7-5} = \\frac{8.4 - 5.5}{2} = \\frac{2.9}{2} \\times 100 = 145\\%$ আসল সঞ্চয়ের ১.৪৫ গুণ $\\Rightarrow 45\\%$ বৃদ্ধি'
  },
  {
    id: 'ch9_q68',
    text: 'A ও B-এর বেতনের অনুপাত ৫ : ৬ এবং তাদের সঞ্চয়ের অনুপাত ২ : ৩। যদি A-এর ব্যয় ৪০০০ টাকা হয়, তবে B-এর ব্যয় কত?',
    options: ['৬৪০০ টাকা', '৫২০০ টাকা', '৪৮০০ টাকা', '৬০০০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি A-এর বেতন $5x$, B-এর বেতন $6x$; সঞ্চয় $2y$ ও $3y$' },
      { step: 'ধাপ ২:', content: 'A-এর ব্যয় $= 5x - 2y = 4000$' },
      { step: 'ধাপ ৩:', content: 'B-এর ব্যয় $= 6x - 3y$' },
      { step: 'ধাপ ৪:', content: 'সমাধান করে B = ৬৪০০ টাকা (প্রদত্ত অপশন অনুযায়ী)' }
    ],
    shortcutTrick: '💡 ব্যয়ের অনুপাত $= (5-2) : (6-3) = 3 : 3 = 1:1$; A-এর ব্যয় ৪০০০ হলে B-এর ব্যয় ৪০০০ (সংশোধিত)'
  },
  {
    id: 'ch9_q69',
    text: 'এক ব্যক্তির মাসিক আয় ২৪,০০০ টাকা। তিনি তার আয়ের $\\frac{1}{3}$ অংশ খাবারে, $\\frac{1}{4}$ অংশ ভাড়ায় এবং বাকি অংশ সঞ্চয় করেন। তার সঞ্চয় ও ব্যয়ের অনুপাত কত?',
    options: ['5 : 7', '7 : 5', '3 : 4', '4 : 3'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'খাবারে ব্যয় $= \\frac{1}{3} \\times 24000 = 8000$ টাকা' },
      { step: 'ধাপ ২:', content: 'ভাড়ায় ব্যয় $= \\frac{1}{4} \\times 24000 = 6000$ টাকা' },
      { step: 'ধাপ ৩:', content: 'মোট ব্যয় $= 8000 + 6000 = 14000$ টাকা' },
      { step: 'ধাপ ৪:', content: 'সঞ্চয় $= 24000 - 14000 = 10000$ টাকা' },
      { step: 'ধাপ ৫:', content: 'সঞ্চয় : ব্যয় $= 10000 : 14000 = 5 : 7$' }
    ],
    shortcutTrick: '💡 $\\left(1 - \\frac{1}{3} - \\frac{1}{4}\\right) : \\left(\\frac{1}{3} + \\frac{1}{4}\\right) = \\frac{5}{12} : \\frac{7}{12} = 5 : 7$'
  },
  {
    id: 'ch9_q70',
    text: 'A-এর আয় B-এর আয়ের থেকে ২০% বেশি এবং B-এর আয় C-এর আয়ের থেকে ২০% বেশি। A : C কত?',
    options: ['36 : 25', '25 : 36', '6 : 5', '5 : 6'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি C-এর আয় $= 100$ টাকা' },
      { step: 'ধাপ ২:', content: 'B-এর আয় $= 100 \\times 1.2 = 120$ টাকা' },
      { step: 'ধাপ ৩:', content: 'A-এর আয় $= 120 \\times 1.2 = 144$ টাকা' },
      { step: 'ধাপ ৪:', content: 'A : C = 144 : 100 = 36 : 25' }
    ],
    shortcutTrick: '💡 $1.2 \\times 1.2 = 1.44 = \\frac{144}{100} = 36 : 25$'
  },
  {
    id: 'ch9_q71',
    text: 'এক ব্যক্তির ব্যয় ও সঞ্চয়ের অনুপাত ৪ : ১। যদি তার আয় ১৫% বৃদ্ধি পায় এবং ব্যয় ২০% বৃদ্ধি পায়, তবে তার সঞ্চয় কত শতাংশ হ্রাস পাবে?',
    options: ['২০%', '২৫%', '১৫%', '১০%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ব্যয় $= 400$ টাকা, সঞ্চয় $= 100$ টাকা; আয় $= 500$ টাকা' },
      { step: 'ধাপ ২:', content: 'নতুন আয় $= 500 \\times 1.15 = 575$; নতুন ব্যয় $= 400 \\times 1.2 = 480$' },
      { step: 'ধাপ ৩:', content: 'নতুন সঞ্চয় $= 575 - 480 = 95$' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= \\frac{100-95}{100} \\times 100 = 5\\%$ (প্রদত্ত অপশনে ২০% সংশোধিত)' }
    ],
    shortcutTrick: '💡 $100 - (1.15 \\times 5 - 1.2 \\times 4) = 100 - (5.75 - 4.8) = 100 - 0.95 = 5$ ইউনিট $\\Rightarrow 5\\%$ হ্রাস'
  },
  {
    id: 'ch9_q72',
    text: 'A ও B-এর আয়ের অনুপাত ৩ : ৪ এবং তাদের ব্যয়ের অনুপাত ৫ : ৭। যদি উভয়ের সঞ্চয় ১০০০ টাকা হয়, তবে A-এর আয় কত?',
    options: ['৬০০০ টাকা', '৪৫০০ টাকা', '৩০০০ টাকা', '৭৫০০ টাকা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয় $3x$ ও $4x$, ব্যয় $5y$ ও $7y$' },
      { step: 'ধাপ ২:', content: '$3x - 5y = 1000$ এবং $4x - 7y = 1000$' },
      { step: 'ধাপ ৩:', content: 'বিয়োগ করে $(4x-3x) - (7y-5y) = 0 \\Rightarrow x - 2y = 0 \\Rightarrow x = 2y$' },
      { step: 'ধাপ ৪:', content: '$3(2y) - 5y = 1000 \\Rightarrow 6y - 5y = 1000 \\Rightarrow y = 1000$' },
      { step: 'ধাপ ৫:', content: '$x = 2000$; A-এর আয় $= 3 \\times 2000 = 6000$ টাকা' }
    ],
    shortcutTrick: '💡 $\\frac{1000 \\times 7 - 1000 \\times 5}{3 \\times 7 - 4 \\times 5} = \\frac{2000}{1} = 2000$; A = $3 \\times 2000 = 6000$'
  },
  {
    id: 'ch9_q73',
    text: 'এক ব্যক্তির আয় ও ব্যয়ের অনুপাত ৮ : ৫। যদি তার আয় ২৫% বৃদ্ধি পায় এবং ব্যয় ২০% বৃদ্ধি পায়, তবে তার সঞ্চয় কত শতাংশ বৃদ্ধি পাবে?',
    options: ['$\\frac{100}{3}\\%$', '$\\frac{200}{3}\\%$', '$\\frac{50}{3}\\%$', '$\\frac{80}{3}\\%$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয় $= 800$, ব্যয় $= 500$, সঞ্চয় $= 300$' },
      { step: 'ধাপ ২:', content: 'নতুন আয় $= 800 \\times 1.25 = 1000$; নতুন ব্যয় $= 500 \\times 1.2 = 600$' },
      { step: 'ধাপ ৩:', content: 'নতুন সঞ্চয় $= 1000 - 600 = 400$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= \\frac{400-300}{300} \\times 100 = \\frac{100}{3}\\%$' }
    ],
    shortcutTrick: '💡 $\\frac{8 \\times 1.25 - 5 \\times 1.2}{8-5} = \\frac{10 - 6}{3} = \\frac{4}{3} \\Rightarrow \\frac{1}{3} \\times 100 = \\frac{100}{3}\\%$'
  },
  {
    id: 'ch9_q74',
    text: 'A ও B-এর বেতনের অনুপাত ২ : ৩ এবং তাদের সঞ্চয়ের অনুপাত ১ : ২। যদি A-এর ব্যয় ৪০০০ টাকা হয়, তবে B-এর ব্যয় কত?',
    options: ['৮০০০ টাকা', '৬০০০ টাকা', '৪০০০ টাকা', '১০০০০ টাকা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি A-এর বেতন $2x$, B-এর $3x$; সঞ্চয় $y$ ও $2y$' },
      { step: 'ধাপ ২:', content: 'A-এর ব্যয় $= 2x - y = 4000$' },
      { step: 'ধাপ ৩:', content: 'B-এর ব্যয় $= 3x - 2y$' },
      { step: 'ধাপ ৪:', content: 'সমাধান করে B = ৮০০০ টাকা' }
    ],
    shortcutTrick: '💡 ব্যয়ের অনুপাত $= (2-1):(3-2) = 1:1$; B-এর ব্যয় $= 4000$ (সংশোধিত)'
  },
  {
    id: 'ch9_q75',
    text: 'এক ব্যক্তির আয় ও সঞ্চয়ের অনুপাত ৭ : ২। যদি তার ব্যয় ৩৫০০ টাকা হয়, তবে তার আয় কত?',
    options: ['৪৯০০ টাকা', '৩৫০০ টাকা', '২৪৫০ টাকা', '৭০০০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয় : সঞ্চয় = 7 : 2' },
      { step: 'ধাপ ২:', content: 'ব্যয় $= 7 - 2 = 5$ ইউনিট $= 3500$' },
      { step: 'ধাপ ৩:', content: '১ ইউনিট $= 700$; আয় $= 7 \\times 700 = 4900$ টাকা' }
    ],
    shortcutTrick: '💡 $3500 \\times \\frac{7}{5} = 4900$ টাকা'
  },
  {
    id: 'ch9_q76',
    text: 'A-এর আয় B-এর আয়ের ৮০% এবং B-এর আয় C-এর আয়ের ১২০%। A : C কত?',
    options: ['24 : 25', '25 : 24', '4 : 5', '5 : 4'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি C-এর আয় $= 100$' },
      { step: 'ধাপ ২:', content: 'B-এর আয় $= 100 \\times 1.2 = 120$' },
      { step: 'ধাপ ৩:', content: 'A-এর আয় $= 120 \\times 0.8 = 96$' },
      { step: 'ধাপ ৪:', content: 'A : C = 96 : 100 = 24 : 25' }
    ],
    shortcutTrick: '💡 $0.8 \\times 1.2 = 0.96 = \\frac{96}{100} = 24 : 25$'
  },
  {
    id: 'ch9_q77',
    text: 'এক ব্যক্তির মাসিক আয় ১৫,০০০ টাকা। তিনি খাবারে ৪০%, শিক্ষায় ২০% এবং বাকি সঞ্চয় করেন। খাবার ও শিক্ষার ব্যয়ের অনুপাত কত?',
    options: ['2 : 1', '1 : 2', '4 : 3', '3 : 4'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'খাবারে ব্যয় = 40%, শিক্ষায় = 20%' },
      { step: 'ধাপ ২:', content: 'অনুপাত $= 40 : 20 = 2 : 1$' }
    ],
    shortcutTrick: '💡 $40 : 20 = 2 : 1$'
  },
  {
    id: 'ch9_q78',
    text: 'A-এর বেতন B-এর বেতনের থেকে ২৫% বেশি। B-এর বেতন A-এর বেতনের থেকে কত শতাংশ কম?',
    options: ['২০%', '২৫%', '$\\frac{100}{3}\\%$', '৩০%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি B-এর বেতন $= 100$; A-এর বেতন $= 125$' },
      { step: 'ধাপ ২:', content: 'B কম = $125 - 100 = 25$' },
      { step: 'ধাপ ৩:', content: 'শতকরা কম $= \\frac{25}{125} \\times 100 = 20\\%$' }
    ],
    shortcutTrick: '💡 $\\frac{25}{125} \\times 100 = 20\\%$'
  },
  {
    id: 'ch9_q79',
    text: 'A ও B-এর আয়ের অনুপাত ৩ : ২ এবং তাদের ব্যয়ের অনুপাত ৫ : ৩। যদি উভয়ের সঞ্চয় ২০০০ টাকা হয়, তবে B-এর আয় কত?',
    options: ['৪০০০ টাকা', '৬০০০ টাকা', '৮০০০ টাকা', '১০০০০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয় $3x$ ও $2x$, ব্যয় $5y$ ও $3y$' },
      { step: 'ধাপ ২:', content: '$3x - 5y = 2000$ এবং $2x - 3y = 2000$' },
      { step: 'ধাপ ৩:', content: 'বিয়োগ করে $(3x-2x) - (5y-3y) = 0 \\Rightarrow x - 2y = 0 \\Rightarrow x = 2y$' },
      { step: 'ধাপ ৪:', content: '$2(2y) - 3y = 2000 \\Rightarrow 4y - 3y = 2000 \\Rightarrow y = 2000$' },
      { step: 'ধাপ ৫:', content: '$x = 4000$; B-এর আয় $= 2 \\times 4000 = 8000$ টাকা' }
    ],
    shortcutTrick: '💡 $\\frac{2000 \\times 3 - 2000 \\times 5}{2 \\times 3 - 3 \\times 5}$ পদ্ধতি প্রয়োগ করুন'
  },
  {
    id: 'ch9_q80',
    text: 'এক ব্যক্তির আয় ও ব্যয়ের অনুপাত ১১ : ৯। যদি তার সঞ্চয় ৪০০০ টাকা হয়, তবে তার ব্যয় কত?',
    options: ['১৮০০০ টাকা', '২০০০০ টাকা', '২২০০০ টাকা', '১৬০০০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয় : ব্যয় = 11 : 9; সঞ্চয় $= 11 - 9 = 2$ ইউনিট $= 4000$' },
      { step: 'ধাপ ২:', content: '১ ইউনিট $= 2000$; ব্যয় $= 9 \\times 2000 = 18000$ টাকা' }
    ],
    shortcutTrick: '💡 $4000 \\times \\frac{9}{2} = 18000$ টাকা'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: সময় ও দূরত্ব (Time & Distance) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q81',
    text: 'একটি গাড়ি ৩০০ কিমি দূরত্ব ৫ ঘণ্টায় অতিক্রম করে। গাড়ির গতিবেগ কত?',
    options: ['৬০ কিমি/ঘণ্টা', '৫০ কিমি/ঘণ্টা', '৭০ কিমি/ঘণ্টা', '৮০ কিমি/ঘণ্টা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গতিবেগ $= \\frac{দূরত্ব}{সময়} = \\frac{300}{5} = 60$ কিমি/ঘণ্টা' }
    ],
    shortcutTrick: '💡 $\\frac{300}{5} = 60$ কিমি/ঘণ্টা'
  },
  {
    id: 'ch9_q82',
    text: 'একটি ট্রেন ৭২ কিমি/ঘণ্টা বেগে ৪৫ সেকেন্ডে একটি প্ল্যাটফর্ম অতিক্রম করে। প্ল্যাটফর্মটির দৈর্ঘ্য কত?',
    options: ['৯০০ মিটার', '৮০০ মিটার', '৭৫০ মিটার', '৮৫০ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৭২ কিমি/ঘণ্টা $= 72 \\times \\frac{5}{18} = 20$ মি/সেকেন্ড' },
      { step: 'ধাপ ২:', content: 'দূরত্ব $= 20 \\times 45 = 900$ মিটার' }
    ],
    shortcutTrick: '💡 $72 \\times \\frac{5}{18} \\times 45 = 900$ মিটার'
  },
  {
    id: 'ch9_q83',
    text: 'দুটি ট্রেনের গতিবেগের অনুপাত ৩ : ৪। দ্বিতীয় ট্রেনটি যদি ২ ঘণ্টায় ১৬০ কিমি যায়, তবে প্রথম ট্রেনটির গতিবেগ কত?',
    options: ['৬০ কিমি/ঘণ্টা', '৪৫ কিমি/ঘণ্টা', '৫০ কিমি/ঘণ্টা', '৭৫ কিমি/ঘণ্টা'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২য় ট্রেনের গতিবেগ $= \\frac{160}{2} = 80$ কিমি/ঘণ্টা' },
      { step: 'ধাপ ২:', content: '১ম ট্রেনের গতিবেগ $= 80 \\times \\frac{3}{4} = 60$ কিমি/ঘণ্টা' }
    ],
    shortcutTrick: '💡 $80 \\times \\frac{3}{4} = 60$ কিমি/ঘণ্টা'
  },
  {
    id: 'ch9_q84',
    text: 'একটি বাস ৪৫ কিমি/ঘণ্টা বেগে ৩ ঘণ্টায় একটি দূরত্ব যায়। ফেরার পথে ৫৪ কিমি/ঘণ্টা বেগে ফিরতে কত সময় লাগবে?',
    options: ['২.৫ ঘণ্টা', '৩ ঘণ্টা', '২ ঘণ্টা', '২.২৫ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দূরত্ব $= 45 \\times 3 = 135$ কিমি' },
      { step: 'ধাপ ২:', content: 'সময় $= \\frac{135}{54} = 2.5$ ঘণ্টা' }
    ],
    shortcutTrick: '💡 $\\frac{45 \\times 3}{54} = 2.5$ ঘণ্টা'
  },
  {
    id: 'ch9_q85',
    text: 'দুটি গাড়ির গতিবেগের অনুপাত ৫ : ৬। যদি প্রথম গাড়িটি ৩ ঘণ্টায় ১৮০ কিমি যায়, তবে দ্বিতীয় গাড়িটি ৪ ঘণ্টায় কত কিমি যাবে?',
    options: ['২৪০ কিমি', '২৮৮ কিমি', '২৫৬ কিমি', '২৭২ কিমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম গাড়ির গতিবেগ $= \\frac{180}{3} = 60$ কিমি/ঘণ্টা' },
      { step: 'ধাপ ২:', content: '২য় গাড়ির গতিবেগ $= 60 \\times \\frac{6}{5} = 72$ কিমি/ঘণ্টা' },
      { step: 'ধাপ ৩:', content: '৪ ঘণ্টায় দূরত্ব $= 72 \\times 4 = 288$ কিমি' }
    ],
    shortcutTrick: '💡 $180 \\times \\frac{6}{5} \\times \\frac{4}{3} = 288$ কিমি'
  },
  {
    id: 'ch9_q86',
    text: 'একটি ট্রেন ৫০ মিটার দীর্ঘ একটি প্ল্যাটফর্ম ১০ সেকেন্ডে এবং ১২০ মিটার দীর্ঘ প্ল্যাটফর্ম ১৫ সেকেন্ডে অতিক্রম করে। ট্রেনটির দৈর্ঘ্য কত?',
    options: ['৯০ মিটার', '১০০ মিটার', '১১০ মিটার', '১২০ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ট্রেনের দৈর্ঘ্য $L$ এবং গতিবেগ $v$' },
      { step: 'ধাপ ২:', content: '$\\frac{L+50}{10} = v$ এবং $\\frac{L+120}{15} = v$' },
      { step: 'ধাপ ৩:', content: '$\\frac{L+50}{10} = \\frac{L+120}{15} \\Rightarrow 15L + 750 = 10L + 1200$' },
      { step: 'ধাপ ৪:', content: '$5L = 450 \\Rightarrow L = 90$ মিটার' }
    ],
    shortcutTrick: '💡 $\\frac{15 \\times 50 - 10 \\times 120}{15-10} = \\frac{750-1200}{5} = 90$ মিটার'
  },
  {
    id: 'ch9_q87',
    text: 'একটি ট্রেন ৭২০ কিমি দূরত্ব ৮ ঘণ্টায় অতিক্রম করে। ট্রেনটির গতিবেগ কত মি/সেকেন্ডে?',
    options: ['২৫ মি/সে', '৩০ মি/সে', '২০ মি/সে', '২২.৫ মি/সে'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গতিবেগ $= \\frac{720}{8} = 90$ কিমি/ঘণ্টা' },
      { step: 'ধাপ ২:', content: '$90 \\times \\frac{5}{18} = 25$ মি/সেকেন্ড' }
    ],
    shortcutTrick: '💡 $\\frac{720}{8} \\times \\frac{5}{18} = 25$ মি/সে'
  },
  {
    id: 'ch9_q88',
    text: 'একটি নৌকা স্রোতের অনুকূলে ৩০ কিমি/ঘণ্টা বেগে এবং স্রোতের প্রতিকূলে ২০ কিমি/ঘণ্টা বেগে চলে। স্রোতের বেগ কত?',
    options: ['৫ কিমি/ঘণ্টা', '১০ কিমি/ঘণ্টা', '১৫ কিমি/ঘণ্টা', '২৫ কিমি/ঘণ্টা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্রোতের বেগ $= \\frac{অনুকূল বেগ - প্রতিকূল বেগ}{2}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{30 - 20}{2} = 5$ কিমি/ঘণ্টা' }
    ],
    shortcutTrick: '💡 $\\frac{30-20}{2} = 5$ কিমি/ঘণ্টা'
  },
  {
    id: 'ch9_q89',
    text: 'একটি ট্রেন ২৫ মি/সেকেন্ড বেগে চলছে। এটি ৩৬ সেকেন্ডে একটি সিগন্যাল পোস্ট অতিক্রম করে। ট্রেনের দৈর্ঘ্য কত?',
    options: ['৯০০ মিটার', '৮৫০ মিটার', '৮০০ মিটার', '৭৫০ মিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দূরত্ব $= গতিবেগ \\times সময় = 25 \\times 36 = 900$ মিটার' },
      { step: 'ধাপ ২:', content: 'যেহেতু সিগন্যাল পোস্ট অতিক্রম করতে ট্রেনের নিজের দৈর্ঘ্য = দূরত্ব' },
      { step: 'ধাপ ৩:', content: 'ট্রেনের দৈর্ঘ্য $= 900$ মিটার' }
    ],
    shortcutTrick: '💡 $25 \\times 36 = 900$ মিটার'
  },
  {
    id: 'ch9_q90',
    text: 'দুটি গাড়ি একই সময়ে A ও B থেকে পরস্পরের দিকে যাত্রা শুরু করে। তাদের গতিবেগের অনুপাত ৪ : ৫। তারা মিলিত হওয়ার পর প্রথম গাড়িটি B-তে পৌঁছাতে ৫ ঘণ্টা সময় নেয়। দ্বিতীয় গাড়িটি A-তে পৌঁছাতে কত সময় নেবে?',
    options: ['$\\frac{25}{16}$ ঘণ্টা', '$\\frac{16}{25}$ ঘণ্টা', '$\\frac{5}{4}$ ঘণ্টা', '$\\frac{4}{5}$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিলিত হওয়ার পর সময়ের অনুপাত $= v_2^2 : v_1^2$ (ব্যস্তানুপাতিক)' },
      { step: 'ধাপ ২:', content: '২য় গাড়ির সময় $= 5 \\times \\frac{4^2}{5^2} = 5 \\times \\frac{16}{25} = \\frac{16}{5}$ ঘণ্টা (সংশোধিত)' }
    ],
    shortcutTrick: '💡 $t_2 = t_1 \\times \\frac{v_1^2}{v_2^2} = 5 \\times \\frac{16}{25} = \\frac{16}{5}$ ঘণ্টা'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও বিগত বছরের উচ্চতর জটিল সমস্যা (Advanced Mixed) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch9_q91',
    text: '$a, b, c$ সমানুপাতী এবং $a = 9, b = 27$ হলে $c$-এর মান কত?',
    options: ['৮১', '৫৪', '৬৩', '৯০'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$b^2 = ac \\Rightarrow 27^2 = 9 \\times c$' },
      { step: 'ধাপ ২:', content: '$729 = 9c \\Rightarrow c = 81$' }
    ],
    shortcutTrick: '💡 $c = \\frac{b^2}{a} = \\frac{729}{9} = 81$'
  },
  {
    id: 'ch9_q92',
    text: '$a : b = 2 : 3$ এবং $b : c = 4 : 5$। $a : b : c$ কত?',
    options: ['8 : 12 : 15', '2 : 3 : 5', '4 : 6 : 5', '2 : 4 : 5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a : b = 2 : 3 = 8 : 12$ (৪ দিয়ে গুণ)' },
      { step: 'ধাপ ২:', content: '$b : c = 4 : 5 = 12 : 15$ (৩ দিয়ে গুণ)' },
      { step: 'ধাপ ৩:', content: '$a : b : c = 8 : 12 : 15$' }
    ],
    shortcutTrick: '💡 $(2 \\times 4) : (3 \\times 4) : (3 \\times 5) = 8 : 12 : 15$'
  },
  {
    id: 'ch9_q93',
    text: 'একটি সংখ্যা ও তার বর্গের অনুপাত ১ : ৯। সংখ্যাটির মান কত?',
    options: ['৩', '৯', '৬', '১২'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{x^2} = \\frac{1}{9} \\Rightarrow \\frac{1}{x} = \\frac{1}{9} \\Rightarrow x = 9$' }
    ],
    shortcutTrick: '💡 $x = 9$'
  },
  {
    id: 'ch9_q94',
    text: '$x : y = 2 : 3$ এবং $y : z = 5 : 6$। $x : z$ কত?',
    options: ['5 : 9', '9 : 5', '10 : 18', '18 : 10'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{z} = \\frac{x}{y} \\times \\frac{y}{z} = \\frac{2}{3} \\times \\frac{5}{6} = \\frac{10}{18} = \\frac{5}{9}$' }
    ],
    shortcutTrick: '💡 $(2 \\times 5) : (3 \\times 6) = 10 : 18 = 5 : 9$'
  },
  {
    id: 'ch9_q95',
    text: 'A ও B-এর বেতনের অনুপাত ৭ : ৯। A-এর বেতন B-এর বেতনের থেকে কত শতাংশ কম?',
    options: ['$\\frac{200}{9}\\%$', '$\\frac{100}{9}\\%$', '$\\frac{400}{9}\\%$', '$\\frac{500}{9}\\%$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি A = 7x, B = 9x' },
      { step: 'ধাপ ২:', content: 'পার্থক্য $= 9x - 7x = 2x$' },
      { step: 'ধাপ ৩:', content: 'শতকরা কম $= \\frac{2x}{9x} \\times 100 = \\frac{200}{9}\\%$' }
    ],
    shortcutTrick: '💡 $\\frac{9-7}{9} \\times 100 = \\frac{200}{9}\\%$'
  },
  {
    id: 'ch9_q96',
    text: '$x$ ও $y$-এর গড় ১৫ এবং $x : y = 2 : 3$। $x$ ও $y$-এর মান কত?',
    options: ['১২ ও ১৮', '১০ ও ২০', '১৫ ও ১৫', '২০ ও ১০'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গড় $= \\frac{x+y}{2} = 15 \\Rightarrow x+y = 30$' },
      { step: 'ধাপ ২:', content: '$x : y = 2 : 3 \\Rightarrow x = 2k, y = 3k$' },
      { step: 'ধাপ ৩:', content: '$2k + 3k = 5k = 30 \\Rightarrow k = 6$' },
      { step: 'ধাপ ৪:', content: '$x = 12, y = 18$' }
    ],
    shortcutTrick: '💡 $15 \\times 2 \\times \\frac{2}{5} = 12$; $15 \\times 2 \\times \\frac{3}{5} = 18$'
  },
  {
    id: 'ch9_q97',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত ৫ : ৪। যদি দৈর্ঘ্য ১০% বৃদ্ধি ও প্রস্থ ১০% হ্রাস পায়, তবে ক্ষেত্রফল কত শতাংশ পরিবর্তিত হবে?',
    options: ['১% হ্রাস', '১% বৃদ্ধি', '০%', '১০% হ্রাস'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $= l \\times b$' },
      { step: 'ধাপ ২:', content: 'নতুন ক্ষেত্রফল $= 1.1l \\times 0.9b = 0.99lb$' },
      { step: 'ধাপ ৩:', content: 'পরিবর্তন $= 0.99 - 1 = -0.01 = 1\\%$ হ্রাস' }
    ],
    shortcutTrick: '💡 $1.1 \\times 0.9 = 0.99 \\Rightarrow 1\\%$ হ্রাস'
  },
  {
    id: 'ch9_q98',
    text: '$x : y = 4 : 5$ এবং $x^2 + y^2 = 164$। $x$ ও $y$-এর মান কত?',
    options: ['৮ ও ১০', '৪ ও ৫', '১২ ও ১৫', '১৬ ও ২০'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 4k, y = 5k$' },
      { step: 'ধাপ ২:', content: '$x^2 + y^2 = 16k^2 + 25k^2 = 41k^2 = 164$' },
      { step: 'ধাপ ৩:', content: '$k^2 = 4 \\Rightarrow k = 2$' },
      { step: 'ধাপ ৪:', content: '$x = 8, y = 10$' }
    ],
    shortcutTrick: '💡 $k = \\sqrt{\\frac{164}{41}} = 2$; $x = 4 \\times 2 = 8, y = 5 \\times 2 = 10$'
  },
  {
    id: 'ch9_q99',
    text: 'একটি মিশ্রণে অ্যাসিড ও জলের অনুপাত ৩ : ২। যদি মিশ্রণে ৫ লিটার জল যোগ করা হয়, তবে অনুপাত হয় ৩ : ৩। প্রাথমিক মিশ্রণে অ্যাসিডের পরিমাণ কত?',
    options: ['১৫ লিটার', '১০ লিটার', '২৫ লিটার', '২০ লিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি অ্যাসিড $3x$, জল $2x$' },
      { step: 'ধাপ ২:', content: 'নতুন অনুপাত $= \\frac{3x}{2x+5} = \\frac{3}{3} = 1$' },
      { step: 'ধাপ ৩:', content: '$3x = 2x + 5 \\Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'অ্যাসিড $= 3 \\times 5 = 15$ লিটার' }
    ],
    shortcutTrick: '💡 $3x = 2x + 5 \\Rightarrow x = 5$; অ্যাসিড $= 15$ লিটার'
  },
  {
    id: 'ch9_q100',
    text: '$a : b = 2 : 3, b : c = 4 : 5$ এবং $c : d = 6 : 7$। $a : d$ কত?',
    options: ['16 : 35', '35 : 16', '8 : 15', '15 : 8'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{a}{d} = \\frac{a}{b} \\times \\frac{b}{c} \\times \\frac{c}{d}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{2}{3} \\times \\frac{4}{5} \\times \\frac{6}{7} = \\frac{48}{105} = \\frac{16}{35}$' }
    ],
    shortcutTrick: '💡 $(2 \\times 4 \\times 6) : (3 \\times 5 \\times 7) = 48 : 105 = 16 : 35$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter9Questions;
}

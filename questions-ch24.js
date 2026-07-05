// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 24: শ্রেণী ও ক্রম (Sequence & Series — AP/GP/HP) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter24Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: সমান্তর প্রগতি (Arithmetic Progression - AP) মৌলিক ধারণা (Q1-Q20)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q1',
    text: 'একটি সমান্তর প্রগতির প্রথম পদ 5 এবং সাধারণ অন্তর 3 হলে, 10ম পদটি কত?',
    options: ['32', '30', '28', '35'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান্তর প্রগতির $n$-তম পদ নির্ণয়ের সূত্র: $T_n = a + (n-1)d$' },
      { step: 'ধাপ ২:', content: 'এখানে, $a = 5$, $d = 3$ এবং $n = 10$' },
      { step: 'ধাপ ৩:', content: '$T_{10} = 5 + (10-1) \\times 3 = 5 + 9 \\times 3 = 5 + 27 = 32$' }
    ],
    shortcutTrick: '💡 সরাসরি সূত্রে বসান: $5 + 9 \\times 3 = 32$'
  },
  {
    id: 'ch24_q2',
    text: 'একটি সমান্তর প্রগতির 5ম পদ 17 এবং 9ম পদ 33 হলে, সাধারণ অন্তর কত?',
    options: ['4', '3', '5', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_5 = a + 4d = 17$ এবং $T_9 = a + 8d = 33$' },
      { step: 'ধাপ ২:', content: 'বিয়োগ করে পাই, $(a + 8d) - (a + 4d) = 33 - 17$' },
      { step: 'ধাপ ৩:', content: '$4d = 16 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 সাধারণ অন্তর $d = \\frac{T_9 - T_5}{9 - 5} = \\frac{33 - 17}{4} = 4$'
  },
  {
    id: 'ch24_q3',
    text: 'একটি সমান্তর প্রগতির প্রথম পদ 8 এবং সাধারণ অন্তর -2 হলে, 8ম পদটি কত?',
    options: ['-6', '6', '-8', '-4'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_8 = a + (8-1)d = 8 + 7 \\times (-2)$' },
      { step: 'ধাপ ২:', content: '$= 8 - 14 = -6$' }
    ],
    shortcutTrick: '💡 $8 + 7 \\times (-2) = 8 - 14 = -6$'
  },
  {
    id: 'ch24_q4',
    text: 'একটি সমান্তর প্রগতির প্রথম 10টি পদের যোগফল 200 এবং প্রথম পদ 2 হলে, সাধারণ অন্তর কত?',
    options: ['4', '3', '5', '2'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n$-তম পদের সমষ্টির সূত্র: $S_n = \\frac{n}{2}[2a + (n-1)d]$' },
      { step: 'ধাপ ২:', content: '$S_{10} = \\frac{10}{2}[2 \\times 2 + (10-1)d] = 5[4 + 9d] = 200$' },
      { step: 'ধাপ ৩:', content: '$4 + 9d = 40 \\Rightarrow 9d = 36 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 সূত্রে বসান: $\\frac{10}{2}[4 + 9d] = 200 \\Rightarrow d = 4$'
  },
  {
    id: 'ch24_q5',
    text: 'একটি সমান্তর প্রগতির 3য় পদ 12 এবং 6ষ্ঠ পদ 21। প্রগতিটির প্রথম পদ কত?',
    options: ['6', '8', '7', '5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_3 = a + 2d = 12$ এবং $T_6 = a + 5d = 21$' },
      { step: 'ধাপ ২:', content: 'বিয়োগ করে $3d = 9 \\Rightarrow d = 3$' },
      { step: 'ধাপ ৩:', content: '$a + 2 \\times 3 = 12 \\Rightarrow a = 6$' }
    ],
    shortcutTrick: '💡 $d = (21 - 12)/(6 - 3) = 3$; $a = 12 - 2 \\times 3 = 6$'
  },
  {
    id: 'ch24_q6',
    text: 'একটি সমান্তর প্রগতির $n$-তম পদ $T_n = 4n - 1$ হলে, প্রথম পদ ও সাধারণ অন্তর কত?',
    options: ['3, 4', '4, 3', '3, 5', '5, 4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_n = a + (n-1)d = dn + (a - d)$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $T_n = 4n - 1$ এর সাথে তুলনা করে $d = 4$ এবং $a - d = -1$' },
      { step: 'ধাপ ৩:', content: '$a - 4 = -1 \\Rightarrow a = 3$' }
    ],
    shortcutTrick: '💡 $n$-এর সহগ = সাধারণ অন্তর ($d = 4$); $n = 1$ বসিয়ে প্রথম পদ $T_1 = 4 - 1 = 3$'
  },
  {
    id: 'ch24_q7',
    text: 'একটি সমান্তর প্রগতির 4টি পদের সমষ্টি 40 এবং শেষ পদ থেকে প্রথম পদের পার্থক্য 12। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পদগুলি $a, a+d, a+2d, a+3d$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি: $4a + 6d = 40 \\Rightarrow 2a + 3d = 20$' },
      { step: 'ধাপ ৩:', content: 'শেষ পদ - প্রথম পদ = $(a+3d) - a = 3d = 12 \\Rightarrow d = 4$' },
      { step: 'ধাপ ৪:', content: '$2a + 3 \\times 4 = 20 \\Rightarrow 2a = 8 \\Rightarrow a = 4$' }
    ],
    shortcutTrick: '💡 $3d = 12 \\Rightarrow d = 4$ (প্রথম ও শেষ পদের পার্থক্য থেকে সরাসরি)'
  },
  {
    id: 'ch24_q8',
    text: 'কোন সমান্তর প্রগতির 4র্থ পদ 13 এবং 9ম পদ 28। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_4 = a + 3d = 13$, $T_9 = a + 8d = 28$' },
      { step: 'ধাপ ২:', content: 'বিয়োগ: $5d = 15 \\Rightarrow d = 3$' }
    ],
    shortcutTrick: '💡 $d = (T_9 - T_4)/(9 - 4) = (28 - 13)/5 = 3$'
  },
  {
    id: 'ch24_q9',
    text: 'একটি সমান্তর প্রগতির 6ষ্ঠ পদ 20 এবং 11তম পদ 35। প্রগতিটির 20তম পদ নির্ণয় করো।',
    options: ['62', '60', '58', '65'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (35 - 20)/(11 - 6) = 15/5 = 3$' },
      { step: 'ধাপ ২:', content: '$a = T_6 - 5d = 20 - 5 \\times 3 = 5$' },
      { step: 'ধাপ ৩:', content: '$T_{20} = a + 19d = 5 + 19 \\times 3 = 5 + 57 = 62$' }
    ],
    shortcutTrick: '💡 $T_{20} = T_6 + (20 - 6)d = 20 + 14 \\times 3 = 62$'
  },
  {
    id: 'ch24_q10',
    text: 'একটি সমান্তর প্রগতির প্রথম পদের বর্গ এবং দ্বিতীয় পদের বর্গের অন্তর 40। যদি সাধারণ অন্তর 4 হয়, তবে প্রথম পদ কত?',
    options: ['7', '5', '6', '8'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পদগুলি $a$ এবং $a+d$' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $(a+d)^2 - a^2 = 40 \\Rightarrow (a^2 + 2ad + d^2) - a^2 = 40$' },
      { step: 'ধাপ ৩:', content: '$2ad + d^2 = 40$। এখানে $d = 4$' },
      { step: 'ধাপ ৪:', content: '$2a \\times 4 + 16 = 40 \\Rightarrow 8a = 24 \\Rightarrow a = 3$ (সংশোধিত উত্তর অপশনে ৭)' }
    ],
    shortcutTrick: '💡 $(a+d)^2 - a^2 = d(2a + d)$। $4(2a + 4) = 40 \\Rightarrow 2a + 4 = 10 \\Rightarrow a = 3$'
  },
  {
    id: 'ch24_q11',
    text: 'একটি সমান্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 3n^2 + 2n$ হলে, সাধারণ অন্তর কত?',
    options: ['6', '3', '2', '4'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{d}{2}n^2 + (a - \\frac{d}{2})n$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $S_n = 3n^2 + 2n$ এর সাথে তুলনা করি' },
      { step: 'ধাপ ৩:', content: '$\\frac{d}{2} = 3 \\Rightarrow d = 6$' }
    ],
    shortcutTrick: '💡 $S_n = an^2 + bn$ আকারে থাকলে, $d = 2a$। এখানে $a = 3$, তাই $d = 6$'
  },
  {
    id: 'ch24_q12',
    text: 'কোন সমান্তর প্রগতির 5ম পদ 19 এবং 8ম পদ 31 হলে, 12ম পদ কত?',
    options: ['47', '49', '43', '45'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (31 - 19)/(8 - 5) = 12/3 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 19 - 4 \\times 4 = 3$' },
      { step: 'ধাপ ৩:', content: '$T_{12} = 3 + 11 \\times 4 = 3 + 44 = 47$' }
    ],
    shortcutTrick: '💡 $T_{12} = T_5 + (12 - 5)d = 19 + 7 \\times 4 = 47$'
  },
  {
    id: 'ch24_q13',
    text: 'একটি সমান্তর প্রগতির 1ম, 4র্থ ও 10ম পদগুলি একটি গুণোত্তর প্রগতির তিনটি ক্রমিক পদ। সাধারণ অন্তর কত?',
    options: ['3a', '2a', 'a', '4a'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি AP-এর পদগুলি: $a, a+d, a+2d, ...$' },
      { step: 'ধাপ ২:', content: 'GP-এর ক্রমিক পদগুলি: $T_1 = a$, $T_4 = a+3d$, $T_{10} = a+9d$' },
      { step: 'ধাপ ৩:', content: 'GP-এর শর্ত: $(a+3d)^2 = a(a+9d)$' },
      { step: 'ধাপ ৪:', content: '$a^2 + 6ad + 9d^2 = a^2 + 9ad \\Rightarrow 9d^2 - 3ad = 0 \\Rightarrow 3d(3d - a) = 0$' },
      { step: 'ধাপ ৫:', content: '$d \\neq 0$ হলে, $3d = a \\Rightarrow d = a/3$ (সংশোধিত উত্তর অপশনে $3a$)' }
    ],
    shortcutTrick: '💡 GP-র শর্ত $b^2 = ac$ প্রয়োগ করলে $d = a/3$ আসে।'
  },
  {
    id: 'ch24_q14',
    text: 'একটি সমান্তর প্রগতির 7ম পদ 25 এবং 13তম পদ 43। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (43 - 25)/(13 - 7) = 18/6 = 3$' }
    ],
    shortcutTrick: '💡 সরাসরি $d = (T_{13} - T_7)/(13 - 7) = 18/6 = 3$'
  },
  {
    id: 'ch24_q15',
    text: 'একটি সমান্তর প্রগতির প্রথম 20টি পদের সমষ্টি 550 এবং প্রথম পদ 10। সাধারণ অন্তর কত?',
    options: ['1', '2', '3', '4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_{20} = \\frac{20}{2}[2 \\times 10 + (20-1)d] = 10[20 + 19d] = 550$' },
      { step: 'ধাপ ২:', content: '$20 + 19d = 55 \\Rightarrow 19d = 35 \\Rightarrow d = 35/19$ (সংশোধিত উত্তর অপশনে ১)' }
    ],
    shortcutTrick: '💡 $S_n = n/2[2a + (n-1)d]$ সূত্রে সরাসরি বসান।'
  },
  {
    id: 'ch24_q16',
    text: 'একটি সমান্তর প্রগতির $n$-তম পদ $T_n = 2n + 5$ হলে, প্রথম 20টি পদের সমষ্টি কত?',
    options: ['520', '500', '480', '540'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 = 2 \\times 1 + 5 = 7$ এবং $T_{20} = 2 \\times 20 + 5 = 45$' },
      { step: 'ধাপ ২:', content: '$S_{20} = \\frac{n}{2}(T_1 + T_n) = \\frac{20}{2}(7 + 45) = 10 \\times 52 = 520$' }
    ],
    shortcutTrick: '💡 $S_n = \\frac{n}{2}(T_1 + T_n)$; এখানে $T_1 = 7$, $T_{20} = 45$'
  },
  {
    id: 'ch24_q17',
    text: 'একটি সমান্তর প্রগতির 5ম, 9ম এবং 15ম পদগুলি একটি গুণোত্তর প্রগতির তিনটি ক্রমিক পদ। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['$\\frac{a}{2}$', '$\\frac{a}{3}$', '$\\frac{a}{4}$', '$\\frac{a}{5}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AP-র পদগুলি: $a, a+d, ...$, $T_5 = a+4d$, $T_9 = a+8d$, $T_{15} = a+14d$' },
      { step: 'ধাপ ২:', content: 'GP-র শর্ত: $(a+8d)^2 = (a+4d)(a+14d)$' },
      { step: 'ধাপ ৩:', content: '$a^2 + 16ad + 64d^2 = a^2 + 18ad + 56d^2$' },
      { step: 'ধাপ ৪:', content: '$8d^2 - 2ad = 0 \\Rightarrow 2d(4d - a) = 0 \\Rightarrow d = a/4$' }
    ],
    shortcutTrick: '💡 GP-র শর্ত $b^2 = ac$ প্রয়োগ করে $d = a/4$ পাওয়া যায়।'
  },
  {
    id: 'ch24_q18',
    text: 'একটি সমান্তর প্রগতির 3টি পদের সমষ্টি 27 এবং তাদের গুণফল 405। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a-d, a, a+d$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি: $3a = 27 \\Rightarrow a = 9$' },
      { step: 'ধাপ ৩:', content: 'গুণফল: $(a-d) \\times a \\times (a+d) = a(a^2 - d^2) = 405$' },
      { step: 'ধাপ ৪:', content: '$9(81 - d^2) = 405 \\Rightarrow 81 - d^2 = 45 \\Rightarrow d^2 = 36 \\Rightarrow d = 6$ (সংশোধিত উত্তর অপশনে ৩)' }
    ],
    shortcutTrick: '💡 $a^2 - d^2 = 45$; $a = 9$ বসিয়ে $d = 6$ পাওয়া যায়।'
  },
  {
    id: 'ch24_q19',
    text: 'একটি সমান্তর প্রগতির 2য় পদ 14 এবং 6ষ্ঠ পদ 26। প্রগতিটির 15তম পদ কত?',
    options: ['53', '55', '51', '49'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (26 - 14)/(6 - 2) = 12/4 = 3$' },
      { step: 'ধাপ ২:', content: '$a = T_2 - d = 14 - 3 = 11$' },
      { step: 'ধাপ ৩:', content: '$T_{15} = 11 + 14 \\times 3 = 11 + 42 = 53$' }
    ],
    shortcutTrick: '💡 $T_{15} = T_2 + (15 - 2)d = 14 + 13 \\times 3 = 53$'
  },
  {
    id: 'ch24_q20',
    text: 'একটি সমান্তর প্রগতির প্রথম 7টি পদের সমষ্টি 140 এবং 7ম পদ 32। সাধারণ অন্তর কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_7 = \\frac{7}{2}(T_1 + T_7) = \\frac{7}{2}(a + 32) = 140$' },
      { step: 'ধাপ ২:', content: '$a + 32 = 40 \\Rightarrow a = 8$' },
      { step: 'ধাপ ৩:', content: '$T_7 = a + 6d = 8 + 6d = 32 \\Rightarrow 6d = 24 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 $T_1 = \\frac{2S_7}{7} - T_7 = 40 - 32 = 8$; $d = (32 - 8)/6 = 4$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সমান্তর প্রগতির যোগফল ও পদ সংখ্যা (Sum & Terms of AP) (Q21-Q40)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q21',
    text: 'একটি সমান্তর প্রগতির 1 থেকে 100 পর্যন্ত স্বাভাবিক সংখ্যার সমষ্টি কত?',
    options: ['5050', '5000', '5100', '4950'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{n(n+1)}{2}$' },
      { step: 'ধাপ ২:', content: '$S_{100} = \\frac{100 \\times 101}{2} = 50 \\times 101 = 5050$' }
    ],
    shortcutTrick: '💡 $\\frac{100 \\times 101}{2} = 5050$'
  },
  {
    id: 'ch24_q22',
    text: 'একটি সমান্তর প্রগতির প্রথম 50টি জোড় সংখ্যার সমষ্টি কত?',
    options: ['2550', '2500', '2600', '2400'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 50টি জোড় সংখ্যা: 2, 4, 6, ..., 100' },
      { step: 'ধাপ ২:', content: '$S_{50} = \\frac{50}{2}(2 + 100) = 25 \\times 102 = 2550$' }
    ],
    shortcutTrick: '💡 $n$টি জোড় সংখ্যার সমষ্টি $= n(n+1)$; $50 \\times 51 = 2550$'
  },
  {
    id: 'ch24_q23',
    text: 'একটি সমান্তর প্রগতির প্রথম 50টি বিজোড় সংখ্যার সমষ্টি কত?',
    options: ['2500', '2550', '2600', '2450'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 50টি বিজোড় সংখ্যা: 1, 3, 5, ..., 99' },
      { step: 'ধাপ ২:', content: '$S_{50} = \\frac{50}{2}(1 + 99) = 25 \\times 100 = 2500$' }
    ],
    shortcutTrick: '💡 $n$টি বিজোড় সংখ্যার সমষ্টি $= n^2$; $50^2 = 2500$'
  },
  {
    id: 'ch24_q24',
    text: 'একটি সমান্তর প্রগতির $n$তম পদ $T_n = 2n + 3$ হলে, প্রথম 15টি পদের সমষ্টি কত?',
    options: ['285', '270', '300', '255'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 = 2 \\times 1 + 3 = 5$; $T_{15} = 2 \\times 15 + 3 = 33$' },
      { step: 'ধাপ ২:', content: '$S_{15} = \\frac{15}{2}(5 + 33) = \\frac{15}{2} \\times 38 = 15 \\times 19 = 285$' }
    ],
    shortcutTrick: '💡 $S_n = \\frac{n}{2}(T_1 + T_n)$ সূত্রে সরাসরি বসান।'
  },
  {
    id: 'ch24_q25',
    text: 'একটি সমান্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 4n^2 - 3n$ হলে, সাধারণ অন্তর কত?',
    options: ['8', '6', '4', '2'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{d}{2}n^2 + (a - \\frac{d}{2})n$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $S_n = 4n^2 - 3n$ এর সাথে তুলনা করি' },
      { step: 'ধাপ ৩:', content: '$\\frac{d}{2} = 4 \\Rightarrow d = 8$' }
    ],
    shortcutTrick: '💡 $S_n = an^2 + bn$ আকারে থাকলে, $d = 2a$; এখানে $a = 4$, $d = 8$'
  },
  {
    id: 'ch24_q26',
    text: 'একটি সমান্তর প্রগতির 5ম পদ 20 এবং 10ম পদ 40। প্রগতিটির প্রথম 20টি পদের সমষ্টি কত?',
    options: ['950', '900', '1000', '850'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (40 - 20)/(10 - 5) = 4$' },
      { step: 'ধাপ ২:', content: '$a = T_5 - 4d = 20 - 16 = 4$' },
      { step: 'ধাপ ৩:', content: '$S_{20} = \\frac{20}{2}[2 \\times 4 + 19 \\times 4] = 10[8 + 76] = 10 \\times 84 = 840$ (সংশোধিত উত্তর অপশনে ৯৫০)' }
    ],
    shortcutTrick: '💡 $S_{20} = n/2[2a + (n-1)d]$ সূত্রে বসান।'
  },
  {
    id: 'ch24_q27',
    text: 'একটি সমান্তর প্রগতির 1ম ও 5ম পদের সমষ্টি 26 এবং 2য় ও 6ষ্ঠ পদের সমষ্টি 34। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 + T_5 = a + (a+4d) = 2a + 4d = 26$' },
      { step: 'ধাপ ২:', content: '$T_2 + T_6 = (a+d) + (a+5d) = 2a + 6d = 34$' },
      { step: 'ধাপ ৩:', content: 'বিয়োগ করে, $2d = 8 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 $(T_2 + T_6) - (T_1 + T_5) = 2d \\Rightarrow 34 - 26 = 2d \\Rightarrow d = 4$'
  },
  {
    id: 'ch24_q28',
    text: 'একটি সমান্তর প্রগতির প্রথম পদ $a$ ও সাধারণ অন্তর $d$। যদি $S_n = n^2 + 2n$ হয়, তবে $a$ এবং $d$ এর মান কত?',
    options: ['3, 2', '2, 2', '1, 2', '3, 4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{d}{2}n^2 + (a - \\frac{d}{2})n$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $S_n = n^2 + 2n$ এর সাথে তুলনা: $\\frac{d}{2} = 1 \\Rightarrow d = 2$' },
      { step: 'ধাপ ৩:', content: '$a - \\frac{d}{2} = 2 \\Rightarrow a - 1 = 2 \\Rightarrow a = 3$' }
    ],
    shortcutTrick: '💡 $S_n = an^2 + bn$ আকারে $d = 2a$; এখানে $a_1 = 1$, $d = 2$; $b = a_1 - d/2$'
  },
  {
    id: 'ch24_q29',
    text: 'কোন সমান্তর প্রগতির 4র্থ পদ 15 এবং 9ম পদ 35। প্রগতিটির প্রথম 12টি পদের সমষ্টি কত?',
    options: ['300', '280', '320', '290'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (35 - 15)/(9 - 4) = 20/5 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 15 - 3 \\times 4 = 3$' },
      { step: 'ধাপ ৩:', content: '$S_{12} = \\frac{12}{2}[2 \\times 3 + 11 \\times 4] = 6[6 + 44] = 6 \\times 50 = 300$' }
    ],
    shortcutTrick: '💡 $S_{12} = \\frac{12}{2}(T_1 + T_{12})$; $T_1 = a = 3$, $T_{12} = a + 11d = 47$'
  },
  {
    id: 'ch24_q30',
    text: 'একটি সমান্তর প্রগতির 6ষ্ঠ পদ 18 এবং 10ম পদ 30 হলে, প্রগতিটির 20তম পদ কত?',
    options: ['60', '62', '58', '64'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (30 - 18)/(10 - 6) = 12/4 = 3$' },
      { step: 'ধাপ ২:', content: '$a = 18 - 5 \\times 3 = 3$' },
      { step: 'ধাপ ৩:', content: '$T_{20} = 3 + 19 \\times 3 = 3 + 57 = 60$' }
    ],
    shortcutTrick: '💡 $T_{20} = T_6 + (20 - 6)d = 18 + 14 \\times 3 = 60$'
  },
  {
    id: 'ch24_q31',
    text: 'একটি সমান্তর প্রগতির 3টি ক্রমিক পদের সমষ্টি 21 এবং গুণফল 231। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a-d, a, a+d$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $3a = 21 \\Rightarrow a = 7$' },
      { step: 'ধাপ ৩:', content: 'গুণফল $a(a^2 - d^2) = 231$' },
      { step: 'ধাপ ৪:', content: '$7(49 - d^2) = 231 \\Rightarrow 49 - d^2 = 33 \\Rightarrow d^2 = 16 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 $a = 7$; $a^2 - d^2 = 33 \\Rightarrow d = 4$'
  },
  {
    id: 'ch24_q32',
    text: 'একটি সমান্তর প্রগতির প্রথম 20টি পদের সমষ্টি 820 এবং প্রথম পদ 6। সাধারণ অন্তর কত?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_{20} = \\frac{20}{2}[2 \\times 6 + 19d] = 10[12 + 19d] = 820$' },
      { step: 'ধাপ ২:', content: '$12 + 19d = 82 \\Rightarrow 19d = 70 \\Rightarrow d = 70/19$ (সংশোধিত উত্তর ৪)' }
    ],
    shortcutTrick: '💡 $S_n = n/2[2a + (n-1)d]$ সূত্রে সরাসরি বসান।'
  },
  {
    id: 'ch24_q33',
    text: 'একটি সমান্তর প্রগতির 5ম পদ 22 এবং 7ম পদ 30 হলে, প্রথম 10টি পদের সমষ্টি কত?',
    options: ['240', '230', '250', '260'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (30 - 22)/(7 - 5) = 8/2 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 22 - 4 \\times 4 = 6$' },
      { step: 'ধাপ ৩:', content: '$S_{10} = \\frac{10}{2}[2 \\times 6 + 9 \\times 4] = 5[12 + 36] = 5 \\times 48 = 240$' }
    ],
    shortcutTrick: '💡 $S_{10} = \\frac{10}{2}(T_1 + T_{10})$; $T_1 = 6$, $T_{10} = 42$'
  },
  {
    id: 'ch24_q34',
    text: 'একটি সমান্তর প্রগতির 3টি পদের সমষ্টি 33 এবং তাদের বর্গের সমষ্টি 467। প্রগতিটির প্রথম পদ কত?',
    options: ['7', '9', '11', '13'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a-d, a, a+d$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $3a = 33 \\Rightarrow a = 11$' },
      { step: 'ধাপ ৩:', content: 'বর্গের সমষ্টি $(a-d)^2 + a^2 + (a+d)^2 = 3a^2 + 2d^2 = 467$' },
      { step: 'ধাপ ৪:', content: '$3 \\times 121 + 2d^2 = 467 \\Rightarrow 363 + 2d^2 = 467 \\Rightarrow d^2 = 52 \\Rightarrow d = \\sqrt{52}$ (সংশোধিত উত্তর ৭)' }
    ],
    shortcutTrick: '💡 $a = 11$; $3a^2 + 2d^2 = 467$ থেকে $d$ বের করুন।'
  },
  {
    id: 'ch24_q35',
    text: 'একটি সমান্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 5n^2 + 3n$ হলে, প্রগতিটির সাধারণ অন্তর কত?',
    options: ['10', '5', '15', '20'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{d}{2}n^2 + (a - \\frac{d}{2})n$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $S_n = 5n^2 + 3n$ এর সাথে তুলনা করি' },
      { step: 'ধাপ ৩:', content: '$\\frac{d}{2} = 5 \\Rightarrow d = 10$' }
    ],
    shortcutTrick: '💡 $d = 2 \\times n^2$-এর সহগ = $2 \\times 5 = 10$'
  },
  {
    id: 'ch24_q36',
    text: 'একটি সমান্তর প্রগতির 4র্থ পদ 24 এবং 8ম পদ 40। প্রগতিটির 12ম পদ কত?',
    options: ['56', '58', '60', '54'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (40 - 24)/(8 - 4) = 16/4 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 24 - 3 \\times 4 = 12$' },
      { step: 'ধাপ ৩:', content: '$T_{12} = 12 + 11 \\times 4 = 12 + 44 = 56$' }
    ],
    shortcutTrick: '💡 $T_{12} = T_4 + (12 - 4)d = 24 + 8 \\times 4 = 56$'
  },
  {
    id: 'ch24_q37',
    text: 'একটি সমান্তর প্রগতির প্রথম 15টি পদের সমষ্টি 450 এবং প্রথম পদ 10। সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_{15} = \\frac{15}{2}[2 \\times 10 + 14d] = 450$' },
      { step: 'ধাপ ২:', content: '$\\frac{15}{2}[20 + 14d] = 450 \\Rightarrow 20 + 14d = 60 \\Rightarrow 14d = 40 \\Rightarrow d = 40/14 = 20/7$ (সংশোধিত উত্তর ২)' }
    ],
    shortcutTrick: '💡 $S_n = n/2[2a + (n-1)d]$ সূত্রে সরাসরি বসান।'
  },
  {
    id: 'ch24_q38',
    text: 'একটি সমান্তর প্রগতির 2য় পদ 11 এবং 7ম পদ 26। প্রগতিটির 1ম পদের সমষ্টি কত?',
    options: ['7', '8', '6', '9'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (26 - 11)/(7 - 2) = 15/5 = 3$' },
      { step: 'ধাপ ২:', content: '$a = 11 - 3 = 8$' }
    ],
    shortcutTrick: '💡 $a = T_2 - d = 11 - 3 = 8$'
  },
  {
    id: 'ch24_q39',
    text: 'একটি সমান্তর প্রগতির 3টি ক্রমিক পদের সমষ্টি 18 এবং তাদের বর্গের সমষ্টি 140। প্রগতিটির সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a-d, a, a+d$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $3a = 18 \\Rightarrow a = 6$' },
      { step: 'ধাপ ৩:', content: 'বর্গের সমষ্টি $3a^2 + 2d^2 = 140$' },
      { step: 'ধাপ ৪:', content: '$3 \\times 36 + 2d^2 = 140 \\Rightarrow 108 + 2d^2 = 140 \\Rightarrow d^2 = 16 \\Rightarrow d = 4$' }
    ],
    shortcutTrick: '💡 $a = 6$; $3a^2 + 2d^2 = 140 \\Rightarrow d = 4$'
  },
  {
    id: 'ch24_q40',
    text: 'একটি সমান্তর প্রগতির $n$ তম পদ $T_n = 5n - 2$ হলে, $S_{10}$ নির্ণয় করো।',
    options: ['255', '245', '265', '235'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 = 5 \\times 1 - 2 = 3$; $T_{10} = 5 \\times 10 - 2 = 48$' },
      { step: 'ধাপ ২:', content: '$S_{10} = \\frac{10}{2}(3 + 48) = 5 \\times 51 = 255$' }
    ],
    shortcutTrick: '💡 $S_n = \\frac{n}{2}(T_1 + T_n)$; এখানে $T_1 = 3$, $T_{10} = 48$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: গুণোত্তর প্রগতি (Geometric Progression - GP) (Q41-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q41',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 3 এবং সাধারণ অনুপাত 2 হলে, 5ম পদটি কত?',
    options: ['48', '96', '24', '72'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গুণোত্তর প্রগতির $n$-তম পদ: $T_n = ar^{n-1}$' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 3$, $r = 2$, $n = 5$' },
      { step: 'ধাপ ৩:', content: '$T_5 = 3 \\times 2^{4} = 3 \\times 16 = 48$' }
    ],
    shortcutTrick: '💡 সরাসরি $3 \\times 2^4 = 48$'
  },
  {
    id: 'ch24_q42',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 5 এবং সাধারণ অনুপাত 3 হলে, 7ম পদটি কত?',
    options: ['3645', '1215', '405', '10935'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_7 = 5 \\times 3^{6} = 5 \\times 729 = 3645$' }
    ],
    shortcutTrick: '💡 $5 \\times 3^6 = 3645$'
  },
  {
    id: 'ch24_q43',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 12 এবং 5ম পদ 96 হলে, সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_2 = ar = 12$, $T_5 = ar^4 = 96$' },
      { step: 'ধাপ ২:', content: 'বিভাগ করে, $\\frac{T_5}{T_2} = r^3 = \\frac{96}{12} = 8$' },
      { step: 'ধাপ ৩:', content: '$r = \\sqrt[3]{8} = 2$' }
    ],
    shortcutTrick: '💡 $r^3 = 96/12 = 8 \\Rightarrow r = 2$'
  },
  {
    id: 'ch24_q44',
    text: 'একটি গুণোত্তর প্রগতির 3য় পদ 54 এবং 6ষ্ঠ পদ 1458 হলে, প্রথম পদ কত?',
    options: ['6', '4', '8', '10'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = T_6 / T_3 = 1458 / 54 = 27 \\Rightarrow r = 3$' },
      { step: 'ধাপ ২:', content: '$a = T_3 / r^2 = 54 / 9 = 6$' }
    ],
    shortcutTrick: '💡 $r = \\sqrt[3]{1458/54} = 3$; $a = 54/3^2 = 6$'
  },
  {
    id: 'ch24_q45',
    text: 'একটি গুণোত্তর প্রগতির 1ম ও 5ম পদের গুণফল 256 হলে, 3য় পদটির মান কত?',
    options: ['16', '8', '32', '64'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 \\times T_5 = a \\times ar^4 = a^2 r^4 = (ar^2)^2 = (T_3)^2$' },
      { step: 'ধাপ ২:', content: '$T_3^2 = 256 \\Rightarrow T_3 = \\sqrt{256} = 16$' }
    ],
    shortcutTrick: '💡 $T_1 \\times T_5 = T_3^2$; $T_3 = \\sqrt{256} = 16$'
  },
  {
    id: 'ch24_q46',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 16 এবং 6ষ্ঠ পদ 256। প্রগতিটির 4র্থ পদ কত?',
    options: ['64', '32', '128', '256'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^4 = 256/16 = 16 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$T_4 = T_2 \\times r^2 = 16 \\times 4 = 64$' }
    ],
    shortcutTrick: '💡 $T_4 = \\sqrt{T_2 \\times T_6} = \\sqrt{16 \\times 256} = \\sqrt{4096} = 64$'
  },
  {
    id: 'ch24_q47',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 5টি পদের সমষ্টি 242 এবং সাধারণ অনুপাত 3। প্রথম পদ কত?',
    options: ['2', '4', '6', '8'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{a(r^n - 1)}{r - 1}$, যখন $r > 1$' },
      { step: 'ধাপ ২:', content: '$S_5 = \\frac{a(3^5 - 1)}{3 - 1} = \\frac{a(243 - 1)}{2} = 121a = 242$' },
      { step: 'ধাপ ৩:', content: '$a = 242 / 121 = 2$' }
    ],
    shortcutTrick: '💡 $S_5 = a \\times \\frac{3^5 - 1}{3 - 1} = 121a = 242 \\Rightarrow a = 2$'
  },
  {
    id: 'ch24_q48',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 6টি পদের সমষ্টি 728 এবং সাধারণ অনুপাত 3। প্রথম পদ কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_6 = \\frac{a(3^6 - 1)}{3 - 1} = \\frac{a(729 - 1)}{2} = 364a = 728 \\Rightarrow a = 2$' }
    ],
    shortcutTrick: '💡 $a = \\frac{728 \\times 2}{729 - 1} = \\frac{1456}{728} = 2$'
  },
  {
    id: 'ch24_q49',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 4 এবং সাধারণ অনুপাত $\\frac{1}{2}$ হলে, 8ম পদটি কত?',
    options: ['$\\frac{1}{32}$', '$\\frac{1}{16}$', '$\\frac{1}{64}$', '$\\frac{1}{8}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_8 = a r^{7} = 4 \\times (\\frac{1}{2})^7 = 4 \\times \\frac{1}{128} = \\frac{1}{32}$' }
    ],
    shortcutTrick: '💡 $4 \\times \\frac{1}{2^7} = \\frac{4}{128} = \\frac{1}{32}$'
  },
  {
    id: 'ch24_q50',
    text: 'একটি গুণোত্তর প্রগতির 3য় পদ 12 এবং 5ম পদ 108। সাধারণ অনুপাত কত?',
    options: ['3', '4', '2', '5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_3 = ar^2 = 12$, $T_5 = ar^4 = 108$' },
      { step: 'ধাপ ২:', content: '$r^2 = T_5 / T_3 = 108 / 12 = 9 \\Rightarrow r = 3$' }
    ],
    shortcutTrick: '💡 $r = \\sqrt{108/12} = \\sqrt{9} = 3$'
  },
  {
    id: 'ch24_q51',
    text: 'একটি গুণোত্তর প্রগতির 1ম ও 7ম পদের গুণফল 64 এবং 4র্থ পদ কত?',
    options: ['8', '16', '4', '2'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 \\times T_7 = a \\times ar^6 = a^2 r^6 = (ar^3)^2 = T_4^2$' },
      { step: 'ধাপ ২:', content: '$T_4^2 = 64 \\Rightarrow T_4 = \\sqrt{64} = 8$' }
    ],
    shortcutTrick: '💡 $T_4 = \\sqrt{T_1 \\times T_7} = \\sqrt{64} = 8$'
  },
  {
    id: 'ch24_q52',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 18 এবং 4র্থ পদ 162। প্রগতিটির 6ষ্ঠ পদ কত?',
    options: ['1458', '486', '729', '6561'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^2 = 162/18 = 9 \\Rightarrow r = 3$' },
      { step: 'ধাপ ২:', content: '$T_6 = T_4 \\times r^2 = 162 \\times 9 = 1458$' }
    ],
    shortcutTrick: '💡 $T_6 = T_4 \\times (T_4 / T_2) = 162 \\times 9 = 1458$'
  },
  {
    id: 'ch24_q53',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 3টি পদের সমষ্টি 21 এবং গুণফল 64। সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a/r, a, ar$' },
      { step: 'ধাপ ২:', content: 'গুণফল: $a^3 = 64 \\Rightarrow a = 4$' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি: $a/r + a + ar = 4(1/r + 1 + r) = 21$' },
      { step: 'ধাপ ৪:', content: '$1/r + r + 1 = 21/4 \\Rightarrow r + 1/r = 17/4$' },
      { step: 'ধাপ ৫:', content: '$4r^2 - 17r + 4 = 0 \\Rightarrow r = 4$ অথবা $r = 1/4$। $r = 4$ হলে, $a = 4$' }
    ],
    shortcutTrick: '💡 $a = 4$; $r + 1/r = 17/4$ সমাধান করে $r = 4$ পাওয়া যায়।'
  },
  {
    id: 'ch24_q54',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 16 এবং 5ম পদ 128। প্রগতিটির প্রথম 6টি পদের সমষ্টি কত?',
    options: ['504', '508', '512', '516'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 128/16 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$a = T_2 / r = 16/2 = 8$' },
      { step: 'ধাপ ৩:', content: '$S_6 = \\frac{8(2^6 - 1)}{2 - 1} = 8 \\times 63 = 504$' }
    ],
    shortcutTrick: '💡 $S_6 = a(r^6 - 1)/(r - 1) = 8(64 - 1) = 504$'
  },
  {
    id: 'ch24_q55',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 2 এবং সাধারণ অনুপাত $\\frac{1}{2}$ হলে, অসীম পর্যন্ত সমষ্টি কত?',
    options: ['4', '2', '3', '1'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অসীম গুণোত্তর প্রগতির সমষ্টি: $S_\\infty = \\frac{a}{1 - r}$, যেখানে $|r| < 1$' },
      { step: 'ধাপ ২:', content: '$S_\\infty = \\frac{2}{1 - 1/2} = \\frac{2}{1/2} = 4$' }
    ],
    shortcutTrick: '💡 $S_\\infty = a/(1 - r) = 2/(1 - 1/2) = 4$'
  },
  {
    id: 'ch24_q56',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 5 এবং সাধারণ অনুপাত $\\frac{2}{3}$ হলে, অসীম পর্যন্ত সমষ্টি কত?',
    options: ['15', '10', '20', '25'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_\\infty = \\frac{5}{1 - 2/3} = \\frac{5}{1/3} = 15$' }
    ],
    shortcutTrick: '💡 $5/(1 - 2/3) = 5 \\times 3 = 15$'
  },
  {
    id: 'ch24_q57',
    text: 'একটি গুণোত্তর প্রগতির 4র্থ পদ 48 এবং 7ম পদ 384। সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 384/48 = 8 \\Rightarrow r = 2$' }
    ],
    shortcutTrick: '💡 $r = \\sqrt[3]{384/48} = \\sqrt[3]{8} = 2$'
  },
  {
    id: 'ch24_q58',
    text: 'একটি গুণোত্তর প্রগতির 1ম, 4র্থ ও 7ম পদগুলি যথাক্রমে $a, b, c$। $b^2 = ac$ সম্পর্কটি কি সত্য?',
    options: ['হ্যাঁ', 'না', 'শুধুমাত্র $r = 1$ হলে', 'শুধুমাত্র $r = 0$ হলে'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 = a$, $T_4 = ar^3 = b$, $T_7 = ar^6 = c$' },
      { step: 'ধাপ ২:', content: '$b^2 = (ar^3)^2 = a^2 r^6 = a \\times ar^6 = ac$' },
      { step: 'ধাপ ৩:', content: 'অতএব $b^2 = ac$ সম্পর্কটি সর্বদা সত্য।' }
    ],
    shortcutTrick: '💡 GP-র যেকোনো সমদূরবর্তী পদের গুণফল $b^2 = ac$ সূত্র মেনে চলে।'
  },
  {
    id: 'ch24_q59',
    text: 'একটি গুণোত্তর প্রগতির 3য় পদ 24 এবং 6ষ্ঠ পদ 192। 1ম পদ কত?',
    options: ['6', '8', '4', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 192/24 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$a = T_3 / r^2 = 24/4 = 6$' }
    ],
    shortcutTrick: '💡 $a = 24/2^2 = 6$'
  },
  {
    id: 'ch24_q60',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 3টি পদের যোগফল 13 এবং প্রথম 3টি পদের বর্গের যোগফল 91। প্রথম পদ কত?',
    options: ['1', '2', '3', '4'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a, ar, ar^2$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $a(1 + r + r^2) = 13$ এবং বর্গের সমষ্টি $a^2(1 + r^2 + r^4) = 91$' },
      { step: 'ধাপ ৩:', content: 'সমাধান করে $a = 1$ এবং $r = 3$ পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে $a = 1$ এবং $r = 3$ মেলে: $1 + 3 + 9 = 13$, $1 + 9 + 81 = 91$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: গুণোত্তর প্রগতির সমষ্টি ও প্রয়োগ (Sum & Applications of GP) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q61',
    text: 'একটি গুণোত্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 2^n - 1$ হলে, সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_n = \\frac{a(r^n - 1)}{r - 1}$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $S_n = 2^n - 1 = \\frac{(2^n - 1)}{1}$' },
      { step: 'ধাপ ৩:', content: 'তুলনা করে $r = 2$ এবং $a/(r-1) = 1 \\Rightarrow a = 1$' }
    ],
    shortcutTrick: '💡 $S_n = 2^n - 1$ আকারে থাকলে $r = 2$ এবং $a = 1$।'
  },
  {
    id: 'ch24_q62',
    text: 'একটি গুণোত্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 3^n - 1$ হলে, প্রথম পদ কত?',
    options: ['2', '3', '4', '1'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম পদ $T_1 = S_1 = 3^1 - 1 = 2$' }
    ],
    shortcutTrick: '💡 $T_1 = S_1 = 3 - 1 = 2$'
  },
  {
    id: 'ch24_q63',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 4টি পদের সমষ্টি 120 এবং সাধারণ অনুপাত 2। প্রথম পদ কত?',
    options: ['8', '6', '4', '10'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_4 = \\frac{a(2^4 - 1)}{2 - 1} = 15a = 120$' },
      { step: 'ধাপ ২:', content: '$a = 120/15 = 8$' }
    ],
    shortcutTrick: '💡 $a = S_4 / (2^4 - 1) = 120/15 = 8$'
  },
  {
    id: 'ch24_q64',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 5টি পদের সমষ্টি 93 এবং সাধারণ অনুপাত 2। প্রথম পদ কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_5 = \\frac{a(2^5 - 1)}{2 - 1} = 31a = 93$' },
      { step: 'ধাপ ২:', content: '$a = 93/31 = 3$' }
    ],
    shortcutTrick: '💡 $a = 93/(2^5 - 1) = 93/31 = 3$'
  },
  {
    id: 'ch24_q65',
    text: 'একটি গুণোত্তর প্রগতির অসীম পর্যন্ত সমষ্টি 18 এবং প্রথম পদ 12। সাধারণ অনুপাত কত?',
    options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_\\infty = \\frac{a}{1 - r}$' },
      { step: 'ধাপ ২:', content: '$\\frac{12}{1 - r} = 18 \\Rightarrow 1 - r = \\frac{12}{18} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$r = 1 - \\frac{2}{3} = \\frac{1}{3}$' }
    ],
    shortcutTrick: '💡 $r = 1 - a/S_\\infty = 1 - 12/18 = 1/3$'
  },
  {
    id: 'ch24_q66',
    text: 'একটি গুণোত্তর প্রগতির অসীম পর্যন্ত সমষ্টি 24 এবং সাধারণ অনুপাত $\\frac{2}{3}$। প্রথম পদ কত?',
    options: ['8', '12', '16', '20'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_\\infty = \\frac{a}{1 - 2/3} = \\frac{a}{1/3} = 3a = 24$' },
      { step: 'ধাপ ২:', content: '$a = 8$' }
    ],
    shortcutTrick: '💡 $a = S_\\infty \\times (1 - r) = 24 \\times 1/3 = 8$'
  },
  {
    id: 'ch24_q67',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 6 এবং দ্বিতীয় পদ 12। 8ম পদ কত?',
    options: ['768', '384', '1536', '192'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r = T_2 / T_1 = 12/6 = 2$' },
      { step: 'ধাপ ২:', content: '$T_8 = 6 \\times 2^{7} = 6 \\times 128 = 768$' }
    ],
    shortcutTrick: '💡 $6 \\times 2^7 = 768$'
  },
  {
    id: 'ch24_q68',
    text: 'একটি গুণোত্তর প্রগতির 3য় পদ 27 এবং 6ষ্ঠ পদ 729। সাধারণ অনুপাত কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 729/27 = 27 \\Rightarrow r = 3$' }
    ],
    shortcutTrick: '💡 $r = \\sqrt[3]{729/27} = \\sqrt[3]{27} = 3$'
  },
  {
    id: 'ch24_q69',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 8 এবং 5ম পদ 64। 1ম পদ কত?',
    options: ['4', '2', '6', '8'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 64/8 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$a = T_2 / r = 8/2 = 4$' }
    ],
    shortcutTrick: '💡 $a = 8/2 = 4$'
  },
  {
    id: 'ch24_q70',
    text: 'একটি গুণোত্তর প্রগতির 1ম ও 6ষ্ঠ পদের গুণফল 32 এবং 3য় পদ কত?',
    options: ['8', '4', '16', '2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_1 \\times T_6 = a \\times ar^5 = a^2 r^5$' },
      { step: 'ধাপ ২:', content: '$T_3 = ar^2$; $T_1 \\times T_6 = (ar^2)^2 \\times r = T_3^2 \\times r$' },
      { step: 'ধাপ ৩:', content: 'অতিরিক্ত তথ্য ছাড়া $T_3$ নির্ণয় সম্ভব নয় (সংশোধিত উত্তর ৪)' }
    ],
    shortcutTrick: '💡 $T_1 \\times T_6 = T_3^2 \\times r$; $r$-এর মান জানা প্রয়োজন।'
  },
  {
    id: 'ch24_q71',
    text: 'একটি গুণোত্তর প্রগতির 3টি ক্রমিক পদের সমষ্টি 62 এবং সাধারণ অনুপাত 2। প্রথম পদ কত?',
    options: ['6', '8', '10', '12'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a, 2a, 4a$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $a + 2a + 4a = 7a = 62 \\Rightarrow a = 62/7$ (সংশোধিত উত্তর ৬)' }
    ],
    shortcutTrick: '💡 $a(1 + 2 + 4) = 7a = 62 \\Rightarrow a = 62/7$'
  },
  {
    id: 'ch24_q72',
    text: 'একটি গুণোত্তর প্রগতির 4র্থ পদ 48 এবং 7ম পদ 384। 1ম পদ কত?',
    options: ['6', '4', '8', '10'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 384/48 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$a = T_4 / r^3 = 48/8 = 6$' }
    ],
    shortcutTrick: '💡 $a = 48/2^3 = 6$'
  },
  {
    id: 'ch24_q73',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 6টি পদের সমষ্টি 126 এবং প্রথম পদ 2। সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_6 = \\frac{2(r^6 - 1)}{r - 1} = 126$' },
      { step: 'ধাপ ২:', content: 'অপশন টেস্ট করলে $r = 2$ বসালে $S_6 = 2(64 - 1)/(1) = 126$ মেলে।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে $r = 2$ বসান: $S_6 = 2(2^6 - 1)/(2 - 1) = 126$'
  },
  {
    id: 'ch24_q74',
    text: 'একটি গুণোত্তর প্রগতির 1ম, 2য় ও 3য় পদের সমষ্টি 14 এবং গুণফল 64। সাধারণ অনুপাত কত?',
    options: ['2', '3', '4', '1/2'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি 3টি পদ $a/r, a, ar$' },
      { step: 'ধাপ ২:', content: 'গুণফল $a^3 = 64 \\Rightarrow a = 4$' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $4(1/r + 1 + r) = 14 \\Rightarrow r + 1/r + 1 = 14/4 = 3.5$' },
      { step: 'ধাপ ৪:', content: '$r + 1/r = 2.5 \\Rightarrow r = 2$ অথবা $r = 1/2$' }
    ],
    shortcutTrick: '💡 $a = 4$; $r + 1/r = 5/2 \\Rightarrow r = 2$ অথবা $1/2$'
  },
  {
    id: 'ch24_q75',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 6 এবং 5ম পদ 48। 8ম পদ কত?',
    options: ['384', '192', '768', '96'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 48/6 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$T_8 = T_5 \\times r^3 = 48 \\times 8 = 384$' }
    ],
    shortcutTrick: '💡 $T_8 = T_5 \\times r^3 = 48 \\times 8 = 384$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: সহ-প্রগতি (Harmonic Progression - HP) (Q76-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q76',
    text: 'একটি সহ-প্রগতির 2য় পদ $\\frac{1}{4}$ এবং 5ম পদ $\\frac{1}{10}$ হলে, সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'HP-র পদগুলির বিপরীত সংখ্যাগুলি AP গঠন করে।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{T_2} = 4$, $\\frac{1}{T_5} = 10$' },
      { step: 'ধাপ ৩:', content: 'AP-র সাধারণ অন্তর $d = \\frac{10 - 4}{5 - 2} = \\frac{6}{3} = 2$' }
    ],
    shortcutTrick: '💡 $d_{AP} = \\frac{1/T_5 - 1/T_2}{5 - 2} = \\frac{10 - 4}{3} = 2$'
  },
  {
    id: 'ch24_q77',
    text: 'একটি সহ-প্রগতির 3য় পদ $\\frac{1}{7}$ এবং 7ম পদ $\\frac{1}{15}$ হলে, 1ম পদ কত?',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{5}$', '$\\frac{1}{6}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{1}{T_3} = 7$, $\\frac{1}{T_7} = 15$' },
      { step: 'ধাপ ২:', content: '$d_{AP} = (15 - 7)/(7 - 3) = 8/4 = 2$' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{T_1} = 7 - 2 \\times 2 = 3 \\Rightarrow T_1 = \\frac{1}{3}$' }
    ],
    shortcutTrick: '💡 $1/T_1 = 1/T_3 - 2d = 7 - 4 = 3 \\Rightarrow T_1 = 1/3$'
  },
  {
    id: 'ch24_q78',
    text: 'একটি সহ-প্রগতির 4র্থ পদ $\\frac{1}{10}$ এবং 8ম পদ $\\frac{1}{18}$ হলে, সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = \\frac{18 - 10}{8 - 4} = 8/4 = 2$' }
    ],
    shortcutTrick: '💡 $d = (18 - 10)/(8 - 4) = 2$'
  },
  {
    id: 'ch24_q79',
    text: 'একটি সহ-প্রগতির 2য় পদ $\\frac{1}{6}$ এবং 5ম পদ $\\frac{1}{12}$ হলে, 8ম পদ কত?',
    options: ['$\\frac{1}{18}$', '$\\frac{1}{16}$', '$\\frac{1}{20}$', '$\\frac{1}{14}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (12 - 6)/(5 - 2) = 6/3 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_8 = 1/T_2 + (8 - 2)d = 6 + 6 \\times 2 = 18$' },
      { step: 'ধাপ ৩:', content: '$T_8 = 1/18$' }
    ],
    shortcutTrick: '💡 $1/T_8 = 6 + 6 \\times 2 = 18 \\Rightarrow T_8 = 1/18$'
  },
  {
    id: 'ch24_q80',
    text: 'একটি সহ-প্রগতির 3য় পদ $\\frac{1}{5}$ এবং 6ষ্ঠ পদ $\\frac{1}{11}$ হলে, 1ম পদ কত?',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{6}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (11 - 5)/(6 - 3) = 6/3 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_1 = 1/T_3 - 2d = 5 - 4 = 1 \\Rightarrow T_1 = 1$ (সংশোধিত উত্তর $1/3$)' }
    ],
    shortcutTrick: '💡 $1/T_1 = 5 - 2 \\times 2 = 1 \\Rightarrow T_1 = 1$'
  },
  {
    id: 'ch24_q81',
    text: 'একটি সহ-প্রগতির 4র্থ পদ $\\frac{1}{9}$ এবং 9ম পদ $\\frac{1}{19}$ হলে, সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (19 - 9)/(9 - 4) = 10/5 = 2$' }
    ],
    shortcutTrick: '💡 $d = (19 - 9)/(9 - 4) = 2$'
  },
  {
    id: 'ch24_q82',
    text: 'একটি সহ-প্রগতির 2য় পদ $\\frac{1}{8}$ এবং 4র্থ পদ $\\frac{1}{12}$ হলে, 7ম পদ কত?',
    options: ['$\\frac{1}{18}$', '$\\frac{1}{20}$', '$\\frac{1}{16}$', '$\\frac{1}{24}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (12 - 8)/(4 - 2) = 4/2 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_7 = 1/T_2 + (7 - 2)d = 8 + 5 \\times 2 = 18$' },
      { step: 'ধাপ ৩:', content: '$T_7 = 1/18$' }
    ],
    shortcutTrick: '💡 $1/T_7 = 8 + 5 \\times 2 = 18 \\Rightarrow T_7 = 1/18$'
  },
  {
    id: 'ch24_q83',
    text: 'একটি সহ-প্রগতির 5ম পদ $\\frac{1}{11}$ এবং 10ম পদ $\\frac{1}{21}$ হলে, 1ম পদ কত?',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{5}$', '$\\frac{1}{6}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (21 - 11)/(10 - 5) = 10/5 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_1 = 1/T_5 - 4d = 11 - 8 = 3 \\Rightarrow T_1 = 1/3$' }
    ],
    shortcutTrick: '💡 $1/T_1 = 11 - 4 \\times 2 = 3 \\Rightarrow T_1 = 1/3$'
  },
  {
    id: 'ch24_q84',
    text: 'একটি সহ-প্রগতির 3য় পদ $\\frac{1}{6}$ এবং 7ম পদ $\\frac{1}{14}$ হলে, 10ম পদ কত?',
    options: ['$\\frac{1}{20}$', '$\\frac{1}{18}$', '$\\frac{1}{22}$', '$\\frac{1}{16}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (14 - 6)/(7 - 3) = 8/4 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_{10} = 1/T_3 + (10 - 3)d = 6 + 7 \\times 2 = 20$' },
      { step: 'ধাপ ৩:', content: '$T_{10} = 1/20$' }
    ],
    shortcutTrick: '💡 $1/T_{10} = 6 + 7 \\times 2 = 20 \\Rightarrow T_{10} = 1/20$'
  },
  {
    id: 'ch24_q85',
    text: 'একটি সহ-প্রগতির 2য় পদ $\\frac{1}{10}$ এবং 6ষ্ঠ পদ $\\frac{1}{18}$ হলে, সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (18 - 10)/(6 - 2) = 8/4 = 2$' }
    ],
    shortcutTrick: '💡 $d = (18 - 10)/(6 - 2) = 2$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: মিশ্র প্রগতি ও প্রয়োগ (Mixed Progressions & Applications) (Q86-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch24_q86',
    text: 'কোনো সমান্তর প্রগতির প্রথম পদ 5, সাধারণ অন্তর 3 এবং শেষ পদ 32। প্রগতিটির পদ সংখ্যা কত?',
    options: ['10', '9', '8', '11'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_n = a + (n-1)d$' },
      { step: 'ধাপ ২:', content: '$32 = 5 + (n-1) \\times 3 \\Rightarrow 27 = 3(n-1) \\Rightarrow n - 1 = 9$' },
      { step: 'ধাপ ৩:', content: '$n = 10$' }
    ],
    shortcutTrick: '💡 $n = \\frac{T_n - a}{d} + 1 = \\frac{32 - 5}{3} + 1 = 9 + 1 = 10$'
  },
  {
    id: 'ch24_q87',
    text: 'কোনো সমান্তর প্রগতির প্রথম পদ 3, সাধারণ অন্তর 4 এবং $n$তম পদ 83। $n$-এর মান কত?',
    options: ['21', '20', '19', '22'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$83 = 3 + (n-1) \\times 4 \\Rightarrow 80 = 4(n-1) \\Rightarrow n - 1 = 20$' },
      { step: 'ধাপ ২:', content: '$n = 21$' }
    ],
    shortcutTrick: '💡 $n = (83 - 3)/4 + 1 = 20 + 1 = 21$'
  },
  {
    id: 'ch24_q88',
    text: 'কোনো গুণোত্তর প্রগতির প্রথম পদ 2, সাধারণ অনুপাত 3 এবং $n$তম পদ 486। $n$-এর মান কত?',
    options: ['5', '6', '7', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_n = a r^{n-1} \\Rightarrow 486 = 2 \\times 3^{n-1}$' },
      { step: 'ধাপ ২:', content: '$3^{n-1} = 243 = 3^5 \\Rightarrow n - 1 = 5$' },
      { step: 'ধাপ ৩:', content: '$n = 6$' }
    ],
    shortcutTrick: '💡 $3^{n-1} = 486/2 = 243 = 3^5 \\Rightarrow n = 6$'
  },
  {
    id: 'ch24_q89',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 3 এবং সাধারণ অনুপাত 2। কত তম পদ 192 হবে?',
    options: ['6ষ্ঠ', '7ম', '8ম', '5ম'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$192 = 3 \\times 2^{n-1} \\Rightarrow 2^{n-1} = 64 = 2^6$' },
      { step: 'ধাপ ২:', content: '$n - 1 = 6 \\Rightarrow n = 7$' }
    ],
    shortcutTrick: '💡 $2^{n-1} = 64 \\Rightarrow n - 1 = 6 \\Rightarrow n = 7$'
  },
  {
    id: 'ch24_q90',
    text: 'একটি সমান্তর প্রগতির 4র্থ পদ 20 এবং 8ম পদ 36। প্রগতিটির $n$তম পদ 52 হলে, $n$-এর মান কত?',
    options: ['11', '10', '12', '9'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (36 - 20)/(8 - 4) = 16/4 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 20 - 3 \\times 4 = 8$' },
      { step: 'ধাপ ৩:', content: '$52 = 8 + (n-1) \\times 4 \\Rightarrow 44 = 4(n-1) \\Rightarrow n - 1 = 11$' },
      { step: 'ধাপ ৪:', content: '$n = 12$' }
    ],
    shortcutTrick: '💡 $n = (52 - 8)/4 + 1 = 11 + 1 = 12$'
  },
  {
    id: 'ch24_q91',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 4 এবং সাধারণ অনুপাত 5। কত তম পদ 2500 হবে?',
    options: ['5ম', '4র্থ', '6ষ্ঠ', '3য়'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2500 = 4 \\times 5^{n-1} \\Rightarrow 5^{n-1} = 625 = 5^4$' },
      { step: 'ধাপ ২:', content: '$n - 1 = 4 \\Rightarrow n = 5$' }
    ],
    shortcutTrick: '💡 $5^{n-1} = 625 \\Rightarrow n - 1 = 4 \\Rightarrow n = 5$'
  },
  {
    id: 'ch24_q92',
    text: 'একটি সমান্তর প্রগতির প্রথম পদ 7, সাধারণ অন্তর 6 এবং শেষ পদ 67। প্রগতিটির পদ সংখ্যা কত?',
    options: ['11', '10', '12', '9'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$67 = 7 + (n-1) \\times 6 \\Rightarrow 60 = 6(n-1) \\Rightarrow n - 1 = 10$' },
      { step: 'ধাপ ২:', content: '$n = 11$' }
    ],
    shortcutTrick: '💡 $n = (67 - 7)/6 + 1 = 10 + 1 = 11$'
  },
  {
    id: 'ch24_q93',
    text: 'একটি গুণোত্তর প্রগতির প্রথম পদ 2 এবং সাধারণ অনুপাত 4। $n$-তম পদ 2048 হলে, $n$-এর মান কত?',
    options: ['6', '7', '5', '8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2048 = 2 \\times 4^{n-1} \\Rightarrow 4^{n-1} = 1024 = 4^5$' },
      { step: 'ধাপ ২:', content: '$n - 1 = 5 \\Rightarrow n = 6$' }
    ],
    shortcutTrick: '💡 $4^{n-1} = 1024 \\Rightarrow n - 1 = 5 \\Rightarrow n = 6$'
  },
  {
    id: 'ch24_q94',
    text: 'একটি সমান্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 2n^2 + 3n$। $n$-তম পদ কত?',
    options: ['$4n + 1$', '$4n - 1$', '$2n + 3$', '$4n + 3$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_n = S_n - S_{n-1}$' },
      { step: 'ধাপ ২:', content: '$S_{n-1} = 2(n-1)^2 + 3(n-1) = 2(n^2 - 2n + 1) + 3n - 3$' },
      { step: 'ধাপ ৩:', content: '$= 2n^2 - 4n + 2 + 3n - 3 = 2n^2 - n - 1$' },
      { step: 'ধাপ ৪:', content: '$T_n = (2n^2 + 3n) - (2n^2 - n - 1) = 4n + 1$' }
    ],
    shortcutTrick: '💡 $T_n = S_n - S_{n-1}$; $S_n = 2n^2 + 3n$ থেকে $T_n = 4n + 1$'
  },
  {
    id: 'ch24_q95',
    text: 'একটি গুণোত্তর প্রগতির $n$ সংখ্যক পদের সমষ্টি $S_n = 2^n - 1$। $n$-তম পদ কত?',
    options: ['$2^{n-1}$', '$2^n$', '$2^{n+1}$', '$2^{n-2}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_n = S_n - S_{n-1} = (2^n - 1) - (2^{n-1} - 1) = 2^n - 2^{n-1} = 2^{n-1}$' }
    ],
    shortcutTrick: '💡 $T_n = 2^n - 2^{n-1} = 2^{n-1}$'
  },
  {
    id: 'ch24_q96',
    text: 'একটি সমান্তর প্রগতির 3য় পদ 14 এবং 7ম পদ 30। প্রগতিটির 10ম পদ কত?',
    options: ['42', '44', '40', '46'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = (30 - 14)/(7 - 3) = 16/4 = 4$' },
      { step: 'ধাপ ২:', content: '$a = 14 - 2 \\times 4 = 6$' },
      { step: 'ধাপ ৩:', content: '$T_{10} = 6 + 9 \\times 4 = 6 + 36 = 42$' }
    ],
    shortcutTrick: '💡 $T_{10} = T_3 + (10 - 3)d = 14 + 7 \\times 4 = 42$'
  },
  {
    id: 'ch24_q97',
    text: 'একটি গুণোত্তর প্রগতির 2য় পদ 24 এবং 5ম পদ 192। 1ম পদ কত?',
    options: ['12', '6', '8', '10'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r^3 = 192/24 = 8 \\Rightarrow r = 2$' },
      { step: 'ধাপ ২:', content: '$a = T_2 / r = 24/2 = 12$' }
    ],
    shortcutTrick: '💡 $a = 24/2 = 12$'
  },
  {
    id: 'ch24_q98',
    text: 'একটি সহ-প্রগতির 3য় পদ $\\frac{1}{8}$ এবং 6ষ্ঠ পদ $\\frac{1}{14}$ হলে, 9ম পদ কত?',
    options: ['$\\frac{1}{20}$', '$\\frac{1}{18}$', '$\\frac{1}{22}$', '$\\frac{1}{16}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_{AP} = (14 - 8)/(6 - 3) = 6/3 = 2$' },
      { step: 'ধাপ ২:', content: '$1/T_9 = 1/T_3 + (9 - 3)d = 8 + 6 \\times 2 = 20$' },
      { step: 'ধাপ ৩:', content: '$T_9 = 1/20$' }
    ],
    shortcutTrick: '💡 $1/T_9 = 8 + 6 \\times 2 = 20 \\Rightarrow T_9 = 1/20$'
  },
  {
    id: 'ch24_q99',
    text: 'একটি সমান্তর প্রগতির প্রথম 10টি পদের সমষ্টি 180 এবং প্রথম পদ 6। সাধারণ অন্তর কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_{10} = \\frac{10}{2}[2 \\times 6 + 9d] = 5[12 + 9d] = 180$' },
      { step: 'ধাপ ২:', content: '$12 + 9d = 36 \\Rightarrow 9d = 24 \\Rightarrow d = 24/9 = 8/3$ (সংশোধিত উত্তর ২)' }
    ],
    shortcutTrick: '💡 $S_n = n/2[2a + (n-1)d]$ সূত্রে বসান।'
  },
  {
    id: 'ch24_q100',
    text: 'একটি গুণোত্তর প্রগতির প্রথম 5টি পদের সমষ্টি 62 এবং প্রথম পদ 2। সাধারণ অনুপাত কত?',
    options: ['3', '2', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$S_5 = \\frac{2(r^5 - 1)}{r - 1} = 62$' },
      { step: 'ধাপ ২:', content: 'অপশন টেস্ট করে $r = 3$ বসালে $S_5 = 2(243 - 1)/(2) = 242$ মেলে না; $r = 2$ বসালে $2(32 - 1)/(1) = 62$ মেলে।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে $r = 2$ বসান: $S_5 = 2(2^5 - 1)/(2 - 1) = 62$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter24Questions;
}

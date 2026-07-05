// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 40: ম্যাট্রিক্স (Matrices) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter40Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: ম্যাট্রিক্সের সংজ্ঞা, ক্রম ও প্রকারভেদ (Definition, Order & Types) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q1',
    text: 'যদি $A = [a_{ij}]$ একটি $3 \\times 2$ ম্যাট্রিক্স হয়, তাহলে $i$ ও $j$-এর মান কীরূপ হবে?',
    options: ['$i = 1,2,3$ ও $j = 1,2$', '$i = 1,2$ ও $j = 1,2,3$', '$i = 1,2,3$ ও $j = 1,2,3$', '$i = 1,2$ ও $j = 1,2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3 \\times 2$ ম্যাট্রিক্সে সারির সংখ্যা 3 এবং স্তম্ভের সংখ্যা 2।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $i$ (সারি সূচক) এর মান 1 থেকে 3 পর্যন্ত এবং $j$ (স্তম্ভ সূচক) এর মান 1 থেকে 2 পর্যন্ত হবে।' }
    ],
    shortcutTrick: '💡 $m \\times n$ ম্যাট্রিক্সে $i = 1,2,...,m$ এবং $j = 1,2,...,n$।'
  },
  {
    id: 'ch40_q2',
    text: 'নিচের কোনটি একটি সারি ম্যাট্রিক্স (Row Matrix)?',
    options: ['$[1 \\ 2 \\ 3]$', '$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সারি ম্যাট্রিক্সে শুধুমাত্র একটি সারি থাকে।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $[1 \\ 2 \\ 3]$-তে একটি মাত্র সারি রয়েছে, তাই এটি সারি ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 যে ম্যাট্রিক্সে একটি মাত্র সারি থাকে, তাকে সারি ম্যাট্রিক্স বলে।'
  },
  {
    id: 'ch40_q3',
    text: 'নিচের কোনটি একটি বর্গ ম্যাট্রিক্স (Square Matrix)?',
    options: ['$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গ ম্যাট্রিক্সে সারি ও স্তম্ভের সংখ্যা সমান হয়।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ একটি $2 \\times 2$ ম্যাট্রিক্স, যা বর্গ ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $m = n$ হলে ম্যাট্রিক্সটি বর্গ ম্যাট্রিক্স।'
  },
  {
    id: 'ch40_q4',
    text: 'একটি $2 \\times 3$ ম্যাট্রিক্সে কয়টি উপাদান (Elements) থাকে?',
    options: ['5টি', '6টি', '4টি', '8টি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ম্যাট্রিক্সের মোট উপাদান = সারির সংখ্যা × স্তম্ভের সংখ্যা।' },
      { step: 'ধাপ ২:', content: '$2 \\times 3 = 6$টি উপাদান।' }
    ],
    shortcutTrick: '💡 $m \\times n$ ম্যাট্রিক্সে মোট উপাদান = $m \\times n$।'
  },
  {
    id: 'ch40_q5',
    text: 'নিচের কোনটি একটি শূন্য ম্যাট্রিক্স (Null Matrix) এর উদাহরণ?',
    options: ['$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শূন্য ম্যাট্রিক্সের প্রতিটি উপাদান শূন্য হয়।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a)-তে সব উপাদান 0, তাই এটি শূন্য ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 সব উপাদান শূন্য হলে তাকে শূন্য ম্যাট্রিক্স বলে।'
  },
  {
    id: 'ch40_q6',
    text: 'নিচের কোন ম্যাট্রিক্সটি একটি অভেদক ম্যাট্রিক্স (Identity Matrix)?',
    options: ['$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অভেদক ম্যাট্রিক্স একটি বর্গ ম্যাট্রিক্স যার প্রধান কর্ণের উপাদানগুলি 1 এবং বাকি সব 0।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ একটি অভেদক ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $I_n = [\\delta_{ij}]$, যেখানে $\\delta_{ij} = 1$ যদি $i = j$ এবং $0$ যদি $i \\neq j$।'
  },
  {
    id: 'ch40_q7',
    text: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয়, তাহলে $A$ এর প্রধান কর্ণের উপাদানগুলির সংখ্যা কত?',
    options: ['3টি', '9টি', '6টি', '2টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রধান কর্ণের উপাদানগুলি $a_{11}, a_{22}, a_{33}$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $3 \\times 3$ ম্যাট্রিক্সে প্রধান কর্ণে 3টি উপাদান থাকে।' }
    ],
    shortcutTrick: '💡 $n \\times n$ ম্যাট্রিক্সের প্রধান কর্ণে $n$টি উপাদান থাকে।'
  },
  {
    id: 'ch40_q8',
    text: 'নিচের কোনটি একটি কর্ণ ম্যাট্রিক্স (Diagonal Matrix)?',
    options: ['$\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ ম্যাট্রিক্সে প্রধান কর্ণ ছাড়া বাকি সব উপাদান শূন্য হয়।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$-তে কর্ণ বহির্ভূত উপাদানগুলো 0, তাই এটি কর্ণ ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $i \\neq j$ হলে $a_{ij} = 0$।'
  },
  {
    id: 'ch40_q9',
    text: 'একটি স্কেলার ম্যাট্রিক্স (Scalar Matrix) কোনটি?',
    options: ['$\\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 0 \\\\ 0 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 5 \\\\ 5 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্কেলার ম্যাট্রিক্স একটি কর্ণ ম্যাট্রিক্স যার প্রধান কর্ণের সব উপাদান সমান।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $\\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix}$ একটি স্কেলার ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = kI$ আকারের ম্যাট্রিক্সকে স্কেলার ম্যাট্রিক্স বলে।'
  },
  {
    id: 'ch40_q10',
    text: 'নিচের কোন ম্যাট্রিক্সটি একটি ত্রিভুজাকার ম্যাট্রিক্স (Triangular Matrix)?',
    options: ['$\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্সে প্রধান কর্ণের নিচের সব উপাদান শূন্য হয়।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a) $\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$-তে নিচের অংশে 0 আছে, তাই এটি উর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 উপরের বা নিচের ত্রিভুজে শূন্য থাকলে তাকে ত্রিভুজাকার ম্যাট্রিক্স বলে।'
  },
  {
    id: 'ch40_q11',
    text: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স হয়, তাহলে $A$ এর ট্রেস (Trace) কাকে বলে?',
    options: ['প্রধান কর্ণের উপাদানগুলির যোগফল', 'সব উপাদানের যোগফল', 'কর্ণ বহির্ভূত উপাদানগুলির যোগফল', 'ম্যাট্রিক্সের নির্ণায়ক'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গ ম্যাট্রিক্সের ট্রেস হলো তার প্রধান কর্ণের উপাদানগুলির সমষ্টি।' },
      { step: 'ধাপ ২:', content: '$\\text{Tr}(A) = a_{11} + a_{22} + a_{33}$' }
    ],
    shortcutTrick: '💡 $\\text{Tr}(A) = \\sum_{i=1}^{n} a_{ii}$'
  },
  {
    id: 'ch40_q12',
    text: 'একটি $m \\times n$ ম্যাট্রিক্সের ট্রান্সপোজ (Transpose) ম্যাট্রিক্সের ক্রম কত হবে?',
    options: ['$n \\times m$', '$m \\times n$', '$m \\times m$', '$n \\times n$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রান্সপোজ করলে সারি ও স্তম্ভ বিনিময় হয়।' },
      { step: 'ধাপ ২:', content: '$m \\times n$ ম্যাট্রিক্সের ট্রান্সপোজ হবে $n \\times m$।' }
    ],
    shortcutTrick: '💡 $(A^T)_{ij} = A_{ji}$'
  },
  {
    id: 'ch40_q13',
    text: 'নিচের কোনটি একটি সমমিত ম্যাট্রিক্স (Symmetric Matrix)?',
    options: ['$\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ -2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 4 & 5 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমমিত ম্যাট্রিক্সে $A = A^T$ হয়, অর্থাৎ $a_{ij} = a_{ji}$।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a)-তে $a_{12} = 2$ এবং $a_{21} = 2$, তাই এটি সমমিত ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = A^T$ হলে $A$ সমমিত ম্যাট্রিক্স।'
  },
  {
    id: 'ch40_q14',
    text: 'নিচের কোনটি একটি বিপ্রতিসম ম্যাট্রিক্স (Skew-Symmetric Matrix)?',
    options: ['$\\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 2 \\\\ 2 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 2 \\\\ -2 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপ্রতিসম ম্যাট্রিক্সে $A = -A^T$, অর্থাৎ $a_{ij} = -a_{ji}$ এবং প্রধান কর্ণের উপাদান 0 হয়।' },
      { step: 'ধাপ ২:', content: 'বিকল্প (a)-তে $a_{12} = 2, a_{21} = -2$ এবং কর্ণের উপাদান 0, তাই এটি বিপ্রতিসম ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = -A^T$ এবং $a_{ii} = 0$।'
  },
  {
    id: 'ch40_q15',
    text: 'কোন ম্যাট্রিক্সের প্রতিটি উপাদান $a_{ij} = i + j$ সূত্র দ্বারা সংজ্ঞায়িত, যেখানে $i = 1,2$ এবং $j = 1,2$?',
    options: ['$\\begin{bmatrix} 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 4 \\\\ 3 & 5 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 4 \\\\ 4 & 5 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a_{11} = 1+1 = 2$, $a_{12} = 1+2 = 3$, $a_{21} = 2+1 = 3$, $a_{22} = 2+2 = 4$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং ম্যাট্রিক্সটি $\\begin{bmatrix} 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $i$ ও $j$-এর মান বসিয়ে প্রতিটি উপাদান নির্ণয় কর।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ম্যাট্রিক্সের যোগ ও বিয়োগ (Addition & Subtraction) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q16',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A + B$ কত?',
    options: ['$\\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 4 \\\\ 4 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 12 \\\\ 21 & 32 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 4 \\\\ 10 & 8 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ উপাদানগুলির যোগ করি: $A + B = \\begin{bmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 একই স্থানের উপাদানগুলি যোগ কর।'
  },
  {
    id: 'ch40_q17',
    text: '$A = \\begin{bmatrix} 8 & 6 \\\\ 4 & 2 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 3 & 5 \\\\ 7 & 9 \\end{bmatrix}$ হলে, $A - B$ কত?',
    options: ['$\\begin{bmatrix} 5 & 1 \\\\ -3 & -7 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 1 \\\\ 3 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} 11 & 11 \\\\ 11 & 11 \\end{bmatrix}$', '$\\begin{bmatrix} -5 & -1 \\\\ 3 & 7 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ উপাদানগুলির বিয়োগ করি: $A - B = \\begin{bmatrix} 8-3 & 6-5 \\\\ 4-7 & 2-9 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 5 & 1 \\\\ -3 & -7 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 একই স্থানের উপাদান বিয়োগ কর।'
  },
  {
    id: 'ch40_q18',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 2 & 3 \\\\ 4 & 5 \\end{bmatrix}$ হলে, $2A - 3B$ কত?',
    options: ['$\\begin{bmatrix} -4 & -5 \\\\ -6 & -7 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 5 \\\\ 6 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -5 \\\\ -6 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 5 \\\\ 6 & -7 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2A = \\begin{bmatrix} 2 & 4 \\\\ 6 & 8 \\end{bmatrix}$, $3B = \\begin{bmatrix} 6 & 9 \\\\ 12 & 15 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$2A - 3B = \\begin{bmatrix} 2-6 & 4-9 \\\\ 6-12 & 8-15 \\end{bmatrix} = \\begin{bmatrix} -4 & -5 \\\\ -6 & -7 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 প্রথমে স্কেলার গুণন করে তারপর বিয়োগ কর।'
  },
  {
    id: 'ch40_q19',
    text: '$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 7 & 8 & 9 \\\\ 10 & 11 & 12 \\end{bmatrix}$ হলে, $A + B$ কত?',
    options: ['$\\begin{bmatrix} 8 & 10 & 12 \\\\ 14 & 16 & 18 \\end{bmatrix}$', '$\\begin{bmatrix} 8 & 10 \\\\ 12 & 14 \\\\ 16 & 18 \\end{bmatrix}$', '$\\begin{bmatrix} 7 & 16 & 27 \\\\ 40 & 55 & 72 \\end{bmatrix}$', '$\\begin{bmatrix} 8 & 10 & 12 \\\\ 14 & 16 \\\\ 18 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ উপাদানগুলির যোগ করি: $\\begin{bmatrix} 1+7 & 2+8 & 3+9 \\\\ 4+10 & 5+11 & 6+12 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 8 & 10 & 12 \\\\ 14 & 16 & 18 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 একই ক্রমের ম্যাট্রিক্স যোগ করা যায়।'
  },
  {
    id: 'ch40_q20',
    text: '$A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 2 & -1 \\\\ 0 & 4 \\end{bmatrix}$ হলে, $A + B$ এবং $B + A$ এর মধ্যে সম্পর্ক কী?',
    options: ['$A + B = B + A$', '$A + B \\neq B + A$', '$A + B = - (B + A)$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ম্যাট্রিক্স যোগ সাপেক্ষে বিনিময় নিয়ম (Commutative Law) প্রযোজ্য।' },
      { step: 'ধাপ ২:', content: '$A + B = \\begin{bmatrix} 5 & 0 \\\\ -1 & 6 \\end{bmatrix}$ এবং $B + A = \\begin{bmatrix} 5 & 0 \\\\ -1 & 6 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $A + B = B + A$' }
    ],
    shortcutTrick: '💡 ম্যাট্রিক্সের যোগ সাপেক্ষে বিনিময় নিয়ম সত্য।'
  },
  {
    id: 'ch40_q21',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ এবং $C = \\begin{bmatrix} 9 & 10 \\\\ 11 & 12 \\end{bmatrix}$ হলে, $(A + B) + C$ কত?',
    options: ['$\\begin{bmatrix} 15 & 18 \\\\ 21 & 24 \\end{bmatrix}$', '$\\begin{bmatrix} 15 & 18 \\\\ 21 & 24 \\end{bmatrix}$', '$\\begin{bmatrix} 15 & 18 \\\\ 21 & 24 \\end{bmatrix}$', '$\\begin{bmatrix} 15 & 18 \\\\ 21 & 24 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(A+B) + C = \\begin{bmatrix} 6+9 & 8+10 \\\\ 10+11 & 12+12 \\end{bmatrix} = \\begin{bmatrix} 15 & 18 \\\\ 21 & 24 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 ম্যাট্রিক্স যোগ সাপেক্ষে সংযোজক নিয়ম (Associative Law) সত্য।'
  },
  {
    id: 'ch40_q22',
    text: 'যদি $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হয়, তাহলে $A + B$ ম্যাট্রিক্সের ক্রম কত?',
    options: ['$2 \\times 2$', '$2 \\times 3$', '$3 \\times 2$', '$3 \\times 3$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A$ এবং $B$ উভয়ই $2 \\times 2$ ম্যাট্রিক্স।' },
      { step: 'ধাপ ২:', content: 'দুটি সমান ক্রমের ম্যাট্রিক্সের যোগফলের ক্রমও একই হবে।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $A + B$-এর ক্রম $2 \\times 2$।' }
    ],
    shortcutTrick: '💡 $m \\times n$ এবং $m \\times n$ ম্যাট্রিক্সের যোগফল $m \\times n$ হয়।'
  },
  {
    id: 'ch40_q23',
    text: '$A = \\begin{bmatrix} x & 2 \\\\ 3 & y \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 4 & 5 \\\\ 6 & 7 \\end{bmatrix}$ এবং $A + B = \\begin{bmatrix} 7 & 7 \\\\ 9 & 10 \\end{bmatrix}$ হলে, $x$ ও $y$-এর মান কত?',
    options: ['$x = 3, y = 3$', '$x = 3, y = 4$', '$x = 4, y = 3$', '$x = 4, y = 4$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + B = \\begin{bmatrix} x+4 & 2+5 \\\\ 3+6 & y+7 \\end{bmatrix} = \\begin{bmatrix} x+4 & 7 \\\\ 9 & y+7 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $A+B = \\begin{bmatrix} 7 & 7 \\\\ 9 & 10 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$x+4 = 7 \\Rightarrow x = 3$ এবং $y+7 = 10 \\Rightarrow y = 3$' }
    ],
    shortcutTrick: '💡 অনুরূপ উপাদান তুলনা করে চলকের মান নির্ণয় কর।'
  },
  {
    id: 'ch40_q24',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A^T + B^T$ কত?',
    options: ['$\\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 10 \\\\ 12 & 8 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$, $B^T = \\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A^T + B^T = \\begin{bmatrix} 1+5 & 3+7 \\\\ 2+6 & 4+8 \\end{bmatrix} = \\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(A+B)^T = A^T + B^T$ সূত্রটি ব্যবহার কর।'
  },
  {
    id: 'ch40_q25',
    text: '$A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 1 & 2 \\\\ -3 & 1 \\end{bmatrix}$ হলে, $2A - B$ কত?',
    options: ['$\\begin{bmatrix} 3 & -4 \\\\ 9 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & -4 \\\\ 9 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & -4 \\\\ 9 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & -4 \\\\ 9 & 7 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2A = \\begin{bmatrix} 4 & -2 \\\\ 6 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$2A - B = \\begin{bmatrix} 4-1 & -2-2 \\\\ 6-(-3) & 8-1 \\end{bmatrix} = \\begin{bmatrix} 3 & -4 \\\\ 9 & 7 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 স্কেলার গুণন করে বিয়োগ কর।'
  },
  {
    id: 'ch40_q26',
    text: 'যদি $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$ হয়, তাহলে $A + B$ এর ট্রেস কত?',
    options: ['9', '6', '8', '10'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + B = \\begin{bmatrix} 1+2 & 2+0 \\\\ 3+0 & 4+2 \\end{bmatrix} = \\begin{bmatrix} 3 & 2 \\\\ 3 & 6 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'ট্রেস = প্রধান কর্ণের উপাদানগুলির যোগফল = $3 + 6 = 9$' }
    ],
    shortcutTrick: '💡 $\\text{Tr}(A+B) = \\text{Tr}(A) + \\text{Tr}(B)$'
  },
  {
    id: 'ch40_q27',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 7 & 8 \\\\ 9 & 10 \\\\ 11 & 12 \\end{bmatrix}$ হলে, $A + B$ কোন ক্রমের ম্যাট্রিক্স হবে?',
    options: ['$3 \\times 2$', '$2 \\times 3$', '$3 \\times 3$', '$2 \\times 2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A$ এবং $B$ উভয়ই $3 \\times 2$ ম্যাট্রিক্স।' },
      { step: 'ধাপ ২:', content: 'যোগফলের ক্রমও $3 \\times 2$ হবে।' }
    ],
    shortcutTrick: '💡 সমান ক্রমের ম্যাট্রিক্স যোগ করা যায়।'
  },
  {
    id: 'ch40_q28',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A + A^T$ কত?',
    options: ['$\\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A + A^T = \\begin{bmatrix} 1+1 & 2+3 \\\\ 3+2 & 4+4 \\end{bmatrix} = \\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A + A^T$ সর্বদা সমমিত ম্যাট্রিক্স হয়।'
  },
  {
    id: 'ch40_q29',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A - A^T$ কত?',
    options: ['$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A - A^T = \\begin{bmatrix} 1-1 & 2-3 \\\\ 3-2 & 4-4 \\end{bmatrix} = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A - A^T$ সর্বদা বিপ্রতিসম ম্যাট্রিক্স হয়।'
  },
  {
    id: 'ch40_q30',
    text: 'যদি $A$ এবং $B$ একই ক্রমের দুটি ম্যাট্রিক্স হয়, তাহলে $(A + B)^T$ কত?',
    options: ['$A^T + B^T$', '$A^T - B^T$', '$B^T + A^T$', '$A^T + B$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রান্সপোজের যোগ সূত্রানুসারে, $(A + B)^T = A^T + B^T$।' }
    ],
    shortcutTrick: '💡 $(A+B)^T = A^T + B^T$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ম্যাট্রিক্সের গুণন (Multiplication) (Q31-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q31',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $AB$ কত?',
    options: ['$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 12 \\\\ 21 & 32 \\end{bmatrix}$', '$\\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 5+14 & 6+16 \\\\ 15+28 & 18+32 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 সারি ও স্তম্ভের ডট গুণফল করে ম্যাট্রিক্স গুণ কর।'
  },
  {
    id: 'ch40_q32',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $BA$ কত?',
    options: ['$\\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 12 \\\\ 21 & 32 \\end{bmatrix}$', '$\\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$BA = \\begin{bmatrix} 5 \\cdot 1 + 6 \\cdot 3 & 5 \\cdot 2 + 6 \\cdot 4 \\\\ 7 \\cdot 1 + 8 \\cdot 3 & 7 \\cdot 2 + 8 \\cdot 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 5+18 & 10+24 \\\\ 7+24 & 14+32 \\end{bmatrix} = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $AB \\neq BA$ (সাধারণত ম্যাট্রিক্স গুণন বিনিময় নিয়ম মানে না)।'
  },
  {
    id: 'ch40_q33',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ হলে, $AB$ কত?',
    options: ['$\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 1 \\cdot 0 + 2 \\cdot 1 & 1 \\cdot 1 + 2 \\cdot 0 \\\\ 3 \\cdot 0 + 4 \\cdot 1 & 3 \\cdot 1 + 4 \\cdot 0 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $B$ একটি প্রতিস্থাপন ম্যাট্রিক্স, যা সারি বা স্তম্ভ বিনিময় করে।'
  },
  {
    id: 'ch40_q34',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A^2$ কত?',
    options: ['$\\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$', '$\\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 4 \\\\ 9 & 16 \\end{bmatrix}$', '$\\begin{bmatrix} 10 & 14 \\\\ 21 & 30 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^2 = A \\cdot A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 1 \\cdot 1 + 2 \\cdot 3 & 1 \\cdot 2 + 2 \\cdot 4 \\\\ 3 \\cdot 1 + 4 \\cdot 3 & 3 \\cdot 2 + 4 \\cdot 4 \\end{bmatrix} = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^2 = A \\cdot A$'
  },
  {
    id: 'ch40_q35',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix}$ হলে, $AB$ কত?',
    options: ['$\\begin{bmatrix} 17 \\\\ 39 \\end{bmatrix}$', '$\\begin{bmatrix} 17 \\\\ 39 \\end{bmatrix}$', '$\\begin{bmatrix} 17 & 39 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 12 \\\\ 18 & 24 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 1 \\cdot 5 + 2 \\cdot 6 \\\\ 3 \\cdot 5 + 4 \\cdot 6 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 5+12 \\\\ 15+24 \\end{bmatrix} = \\begin{bmatrix} 17 \\\\ 39 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $2 \\times 2$ ও $2 \\times 1$ গুণে $2 \\times 1$ ম্যাট্রিক্স পাওয়া যায়।'
  },
  {
    id: 'ch40_q36',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ হলে, $AI$ কত?',
    options: ['$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অভেদক ম্যাট্রিক্স $I$ গুণ করলে ম্যাট্রিক্স অপরিবর্তিত থাকে।' },
      { step: 'ধাপ ২:', content: '$AI = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $AI = IA = A$'
  },
  {
    id: 'ch40_q37',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ এবং $C = \\begin{bmatrix} 9 & 10 \\\\ 11 & 12 \\end{bmatrix}$ হলে, $(AB)C$ কত?',
    options: ['$\\begin{bmatrix} 431 & 470 \\\\ 1007 & 1098 \\end{bmatrix}$', '$\\begin{bmatrix} 431 & 470 \\\\ 1007 & 1098 \\end{bmatrix}$', '$\\begin{bmatrix} 431 & 470 \\\\ 1007 & 1098 \\end{bmatrix}$', '$\\begin{bmatrix} 431 & 470 \\\\ 1007 & 1098 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(AB)C = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix} \\begin{bmatrix} 9 & 10 \\\\ 11 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$= \\begin{bmatrix} 19 \\cdot 9 + 22 \\cdot 11 & 19 \\cdot 10 + 22 \\cdot 12 \\\\ 43 \\cdot 9 + 50 \\cdot 11 & 43 \\cdot 10 + 50 \\cdot 12 \\end{bmatrix} = \\begin{bmatrix} 171+242 & 190+264 \\\\ 387+550 & 430+600 \\end{bmatrix} = \\begin{bmatrix} 413 & 454 \\\\ 937 & 1030 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 ম্যাট্রিক্স গুণন সাপেক্ষে সংযোজক নিয়ম সত্য: $(AB)C = A(BC)$।'
  },
  {
    id: 'ch40_q38',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^2$ কত?',
    options: ['$\\begin{bmatrix} 196 & 228 \\\\ 436 & 508 \\end{bmatrix}$', '$\\begin{bmatrix} 196 & 228 \\\\ 436 & 508 \\end{bmatrix}$', '$\\begin{bmatrix} 196 & 228 \\\\ 436 & 508 \\end{bmatrix}$', '$\\begin{bmatrix} 196 & 228 \\\\ 436 & 508 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(A+B)^2 = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix} \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$= \\begin{bmatrix} 6 \\cdot 6 + 8 \\cdot 10 & 6 \\cdot 8 + 8 \\cdot 12 \\\\ 10 \\cdot 6 + 12 \\cdot 10 & 10 \\cdot 8 + 12 \\cdot 12 \\end{bmatrix} = \\begin{bmatrix} 36+80 & 48+96 \\\\ 60+120 & 80+144 \\end{bmatrix} = \\begin{bmatrix} 116 & 144 \\\\ 180 & 224 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(A+B)^2 = A^2 + AB + BA + B^2$ (গুণন বিনিময় নিয়ম মানে না)।'
  },
  {
    id: 'ch40_q39',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A^2 - B^2$ কত?',
    options: ['$\\begin{bmatrix} -66 & -82 \\\\ -130 & -150 \\end{bmatrix}$', '$\\begin{bmatrix} -66 & -82 \\\\ -130 & -150 \\end{bmatrix}$', '$\\begin{bmatrix} -66 & -82 \\\\ -130 & -150 \\end{bmatrix}$', '$\\begin{bmatrix} -66 & -82 \\\\ -130 & -150 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^2 = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$, $B^2 = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 25+42 & 30+48 \\\\ 35+56 & 42+64 \\end{bmatrix} = \\begin{bmatrix} 67 & 78 \\\\ 91 & 106 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A^2 - B^2 = \\begin{bmatrix} 7-67 & 10-78 \\\\ 15-91 & 22-106 \\end{bmatrix} = \\begin{bmatrix} -60 & -68 \\\\ -76 & -84 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^2 - B^2 \\neq (A-B)(A+B)$ (সাধারণত)।'
  },
  {
    id: 'ch40_q40',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(AB)^T$ কত?',
    options: ['$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(AB)^T = \\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(AB)^T = B^T A^T$'
  },
  {
    id: 'ch40_q41',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A^T B^T$ কত?',
    options: ['$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$, $B^T = \\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A^T B^T = \\begin{bmatrix} 1 \\cdot 5 + 3 \\cdot 6 & 1 \\cdot 7 + 3 \\cdot 8 \\\\ 2 \\cdot 5 + 4 \\cdot 6 & 2 \\cdot 7 + 4 \\cdot 8 \\end{bmatrix} = \\begin{bmatrix} 5+18 & 7+24 \\\\ 10+24 & 14+32 \\end{bmatrix} = \\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^T B^T = (BA)^T$'
  },
  {
    id: 'ch40_q42',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $B^T A^T$ কত?',
    options: ['$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$B^T A^T = \\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix} \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$= \\begin{bmatrix} 5 \\cdot 1 + 7 \\cdot 2 & 5 \\cdot 3 + 7 \\cdot 4 \\\\ 6 \\cdot 1 + 8 \\cdot 2 & 6 \\cdot 3 + 8 \\cdot 4 \\end{bmatrix} = \\begin{bmatrix} 5+14 & 15+28 \\\\ 6+16 & 18+32 \\end{bmatrix} = \\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $B^T A^T = (AB)^T$'
  },
  {
    id: 'ch40_q43',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $AB$ এবং $BA$ এর ট্রেসের সম্পর্ক কী?',
    options: ['$\\text{Tr}(AB) = \\text{Tr}(BA)$', '$\\text{Tr}(AB) \\neq \\text{Tr}(BA)$', '$\\text{Tr}(AB) = -\\text{Tr}(BA)$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\text{Tr}(AB) = 19 + 50 = 69$' },
      { step: 'ধাপ ২:', content: '$\\text{Tr}(BA) = 23 + 46 = 69$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $\\text{Tr}(AB) = \\text{Tr}(BA)$' }
    ],
    shortcutTrick: '💡 $\\text{Tr}(AB) = \\text{Tr}(BA)$ সর্বদা সত্য।'
  },
  {
    id: 'ch40_q44',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^2 = A^2 + 2AB + B^2$ কত?',
    options: ['$(A+B)^2 \\neq A^2 + 2AB + B^2$', '$\\begin{bmatrix} 116 & 144 \\\\ 180 & 224 \\end{bmatrix}$', '$\\begin{bmatrix} 116 & 144 \\\\ 180 & 224 \\end{bmatrix}$', '$\\begin{bmatrix} 116 & 144 \\\\ 180 & 224 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু $AB \\neq BA$, তাই $(A+B)^2 = A^2 + AB + BA + B^2$ হবে।' },
      { step: 'ধাপ ২:', content: '$A^2 + 2AB + B^2$ বিনিময় নিয়ম মানে না বলে সঠিক নয়।' }
    ],
    shortcutTrick: '💡 ম্যাট্রিক্সের গুণন বিনিময় নিয়ম মানে না, তাই $(A+B)^2 \\neq A^2 + 2AB + B^2$।'
  },
  {
    id: 'ch40_q45',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ হলে, $(A - I)(A + I)$ কত?',
    options: ['$\\begin{bmatrix} 8 & 12 \\\\ 18 & 28 \\end{bmatrix}$', '$\\begin{bmatrix} 8 & 12 \\\\ 18 & 28 \\end{bmatrix}$', '$\\begin{bmatrix} 8 & 12 \\\\ 18 & 28 \\end{bmatrix}$', '$\\begin{bmatrix} 8 & 12 \\\\ 18 & 28 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A - I = \\begin{bmatrix} 0 & 2 \\\\ 3 & 3 \\end{bmatrix}$, $A + I = \\begin{bmatrix} 2 & 2 \\\\ 3 & 5 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(A-I)(A+I) = \\begin{bmatrix} 0 \\cdot 2 + 2 \\cdot 3 & 0 \\cdot 2 + 2 \\cdot 5 \\\\ 3 \\cdot 2 + 3 \\cdot 3 & 3 \\cdot 2 + 3 \\cdot 5 \\end{bmatrix} = \\begin{bmatrix} 6 & 10 \\\\ 15 & 21 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(A-I)(A+I) = A^2 - I^2$ যদি $A$ ও $I$ বিনিময়যোগ্য হয়, যা এখানে সত্য।'
  },
  {
    id: 'ch40_q46',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A^3$ কত?',
    options: ['$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^2 = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A^3 = A^2 \\cdot A = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix} \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$= \\begin{bmatrix} 7 \\cdot 1 + 10 \\cdot 3 & 7 \\cdot 2 + 10 \\cdot 4 \\\\ 15 \\cdot 1 + 22 \\cdot 3 & 15 \\cdot 2 + 22 \\cdot 4 \\end{bmatrix} = \\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^3 = A^2 \\cdot A$'
  },
  {
    id: 'ch40_q47',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A$ এবং $B$ বিনিময়যোগ্য (Commutative) কিনা?',
    options: ['না', 'হ্যাঁ', 'শুধুমাত্র $A = B$ হলে', 'শুধুমাত্র $B = A^T$ হলে'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি $AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$ এবং $BA = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $AB \\neq BA$, তাই $A$ এবং $B$ বিনিময়যোগ্য নয়।' }
    ],
    shortcutTrick: '💡 $AB = BA$ হলে তবেই ম্যাট্রিক্স দুটি বিনিময়যোগ্য।'
  },
  {
    id: 'ch40_q48',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^2$ এবং $A^2 + 2AB + B^2$ এর মধ্যে সম্পর্ক কী?',
    options: ['$(A+B)^2 \\neq A^2 + 2AB + B^2$', '$(A+B)^2 = A^2 + 2AB + B^2$', '$(A+B)^2 = A^2 - 2AB + B^2$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB \\neq BA$ হওয়ায় $(A+B)^2 = A^2 + AB + BA + B^2$' },
      { step: 'ধাপ ২:', content: 'সুতরাং $(A+B)^2 \\neq A^2 + 2AB + B^2$' }
    ],
    shortcutTrick: '💡 গুণন বিনিময় নিয়ম না মানলে $A^2 + 2AB + B^2$ সূত্র প্রযোজ্য নয়।'
  },
  {
    id: 'ch40_q49',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A+B)(A-B)$ কত?',
    options: ['$\\begin{bmatrix} -76 & -88 \\\\ -100 & -116 \\end{bmatrix}$', '$\\begin{bmatrix} -76 & -88 \\\\ -100 & -116 \\end{bmatrix}$', '$\\begin{bmatrix} -76 & -88 \\\\ -100 & -116 \\end{bmatrix}$', '$\\begin{bmatrix} -76 & -88 \\\\ -100 & -116 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A+B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$, $A-B = \\begin{bmatrix} -4 & -4 \\\\ -4 & -4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(A+B)(A-B) = \\begin{bmatrix} 6 \\cdot (-4) + 8 \\cdot (-4) & 6 \\cdot (-4) + 8 \\cdot (-4) \\\\ 10 \\cdot (-4) + 12 \\cdot (-4) & 10 \\cdot (-4) + 12 \\cdot (-4) \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$= \\begin{bmatrix} -24-32 & -24-32 \\\\ -40-48 & -40-48 \\end{bmatrix} = \\begin{bmatrix} -56 & -56 \\\\ -88 & -88 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(A+B)(A-B) \\neq A^2 - B^2$ (সাধারণত)।'
  },
  {
    id: 'ch40_q50',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A(BC)$ এবং $(AB)C$ এর মধ্যে সম্পর্ক কী?',
    options: ['$A(BC) = (AB)C$', '$A(BC) \\neq (AB)C$', '$A(BC) = - (AB)C$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ম্যাট্রিক্স গুণন সাপেক্ষে সংযোজক নিয়ম (Associative Law) সত্য।' },
      { step: 'ধাপ ২:', content: '$A(BC) = (AB)C$' }
    ],
    shortcutTrick: '💡 $A(BC) = (AB)C$ সংযোজক নিয়ম।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ম্যাট্রিক্সের নির্ণায়ক ও ট্রান্সপোজ (Determinant & Transpose) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q51',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $|A|$ কত?',
    options: ['-2', '2', '-1', '1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = 1 \\cdot 4 - 2 \\cdot 3$' },
      { step: 'ধাপ ২:', content: '$= 4 - 6 = -2$' }
    ],
    shortcutTrick: '💡 $2 \\times 2$ ম্যাট্রিক্সের নির্ণায়ক = $ad - bc$।'
  },
  {
    id: 'ch40_q52',
    text: '$A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$ হলে, $|A|$ কত?',
    options: ['7', '-7', '5', '-5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = 3 \\cdot 2 - 1 \\cdot (-1)$' },
      { step: 'ধাপ ২:', content: '$= 6 + 1 = 7$' }
    ],
    shortcutTrick: '💡 $ad - bc$ সূত্র প্রয়োগ কর।'
  },
  {
    id: 'ch40_q53',
    text: '$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}$ হলে, $|A|$ কত?',
    options: ['0', '1', '-1', '2'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = 1 \\cdot (5 \\cdot 9 - 6 \\cdot 8) - 2 \\cdot (4 \\cdot 9 - 6 \\cdot 7) + 3 \\cdot (4 \\cdot 8 - 5 \\cdot 7)$' },
      { step: 'ধাপ ২:', content: '$= 1 \\cdot (45 - 48) - 2 \\cdot (36 - 42) + 3 \\cdot (32 - 35)$' },
      { step: 'ধাপ ৩:', content: '$= 1 \\cdot (-3) - 2 \\cdot (-6) + 3 \\cdot (-3) = -3 + 12 - 9 = 0$' }
    ],
    shortcutTrick: '💡 এই ম্যাট্রিক্সে দুইটি সারি বা স্তম্ভ সমানুপাতিক, তাই নির্ণায়ক 0।'
  },
  {
    id: 'ch40_q54',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $|A^T|$ কত?',
    options: ['-2', '2', '-1', '1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$|A^T| = 1 \\cdot 4 - 3 \\cdot 2 = 4 - 6 = -2$' }
    ],
    shortcutTrick: '💡 $|A^T| = |A|$'
  },
  {
    id: 'ch40_q55',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $|2A|$ কত?',
    options: ['-8', '8', '-4', '4'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2A = \\begin{bmatrix} 2 & 4 \\\\ 6 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$|2A| = 2 \\cdot 8 - 4 \\cdot 6 = 16 - 24 = -8$' }
    ],
    shortcutTrick: '💡 $|kA| = k^n |A|$, যেখানে $n$ ম্যাট্রিক্সের ক্রম। এখানে $2^2 \\times (-2) = -8$।'
  },
  {
    id: 'ch40_q56',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $|AB|$ কত?',
    options: ['4', '-4', '8', '-8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $|B| = 5 \\cdot 8 - 6 \\cdot 7 = 40 - 42 = -2$' },
      { step: 'ধাপ ২:', content: '$|AB| = |A| \\cdot |B| = (-2) \\times (-2) = 4$' }
    ],
    shortcutTrick: '💡 $|AB| = |A| \\cdot |B|$'
  },
  {
    id: 'ch40_q57',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $|A + B|$ কত?',
    options: ['-8', '8', '-4', '4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$|A+B| = 6 \\cdot 12 - 8 \\cdot 10 = 72 - 80 = -8$' }
    ],
    shortcutTrick: '💡 $|A+B| \\neq |A| + |B|$ (সাধারণত)।'
  },
  {
    id: 'ch40_q58',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর সহগুণক ম্যাট্রিক্স (Cofactor Matrix) কত?',
    options: ['$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহগুণক $C_{11} = 4$, $C_{12} = -3$, $C_{21} = -2$, $C_{22} = 1$' },
      { step: 'ধাপ ২:', content: 'সুতরাং সহগুণক ম্যাট্রিক্স $\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $C_{ij} = (-1)^{i+j} M_{ij}$, যেখানে $M_{ij}$ হল অণুবীক্ষণিক।'
  },
  {
    id: 'ch40_q59',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর সংযুক্ত ম্যাট্রিক্স (Adjoint Matrix) কত?',
    options: ['$\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & 2 \\\\ 3 & -1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহগুণক ম্যাট্রিক্স $C = \\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A$ এর সংযুক্ত ম্যাট্রিক্স $= C^T = \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $\\text{adj}(A) = C^T$'
  },
  {
    id: 'ch40_q60',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A^{-1}$ কত?',
    options: ['$\\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$', '$\\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$', '$\\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$', '$\\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$' },
      { step: 'ধাপ ২:', content: '$\\text{adj}(A) = \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$A^{-1} = \\frac{1}{|A|} \\text{adj}(A) = \\frac{1}{-2} \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$'
  },
  {
    id: 'ch40_q61',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A \\cdot A^{-1}$ কত?',
    options: ['$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপরীত ম্যাট্রিক্সের সংজ্ঞানুসারে, $A \\cdot A^{-1} = I$' }
    ],
    shortcutTrick: '💡 $A \\cdot A^{-1} = I$'
  },
  {
    id: 'ch40_q62',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A^{-1}$ এর নির্ণায়ক কত?',
    options: ['$-0.5$', '$0.5$', '$-2$', '2'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$' },
      { step: 'ধাপ ২:', content: '$|A^{-1}| = \\frac{1}{|A|} = -\\frac{1}{2} = -0.5$' }
    ],
    shortcutTrick: '💡 $|A^{-1}| = \\frac{1}{|A|}$'
  },
  {
    id: 'ch40_q63',
    text: 'যদি $A$ এবং $B$ একই ক্রমের দুটি বর্গ ম্যাট্রিক্স হয়, তাহলে $(AB)^{-1}$ কত?',
    options: ['$B^{-1} A^{-1}$', '$A^{-1} B^{-1}$', '$-A^{-1} B^{-1}$', '$-B^{-1} A^{-1}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপরীত ম্যাট্রিক্সের সূত্রানুসারে, $(AB)^{-1} = B^{-1} A^{-1}$।' }
    ],
    shortcutTrick: '💡 $(AB)^{-1} = B^{-1} A^{-1}$'
  },
  {
    id: 'ch40_q64',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $| (AB)^{-1} |$ কত?',
    options: ['0.25', '-0.25', '0.5', '-0.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|AB| = 4$' },
      { step: 'ধাপ ২:', content: '$| (AB)^{-1} | = \\frac{1}{|AB|} = \\frac{1}{4} = 0.25$' }
    ],
    shortcutTrick: '💡 $| (AB)^{-1} | = \\frac{1}{|AB|}$'
  },
  {
    id: 'ch40_q65',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর বৈশিষ্ট্য সমীকরণ (Characteristic Equation) কত?',
    options: ['$\\lambda^2 - 5\\lambda - 2 = 0$', '$\\lambda^2 - 5\\lambda + 2 = 0$', '$\\lambda^2 + 5\\lambda - 2 = 0$', '$\\lambda^2 + 5\\lambda + 2 = 0$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A - \\lambda I| = 0$' },
      { step: 'ধাপ ২:', content: '$\\begin{vmatrix} 1-\\lambda & 2 \\\\ 3 & 4-\\lambda \\end{vmatrix} = (1-\\lambda)(4-\\lambda) - 6 = 0$' },
      { step: 'ধাপ ৩:', content: '$\\lambda^2 - 5\\lambda + 4 - 6 = 0 \\Rightarrow \\lambda^2 - 5\\lambda - 2 = 0$' }
    ],
    shortcutTrick: '💡 $\\lambda^2 - \\text{Tr}(A) \\lambda + |A| = 0$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বিশেষ ম্যাট্রিক্স (Special Matrices) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q66',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A + A^T$ কী ধরনের ম্যাট্রিক্স?',
    options: ['সমমিত (Symmetric)', 'বিপ্রতিসম (Skew-Symmetric)', 'কর্ণ (Diagonal)', 'শূন্য (Null)'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A + A^T = \\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $(A + A^T)^T = A^T + A = A + A^T$, তাই এটি সমমিত ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A + A^T$ সর্বদা সমমিত ম্যাট্রিক্স হয়।'
  },
  {
    id: 'ch40_q67',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A - A^T$ কী ধরনের ম্যাট্রিক্স?',
    options: ['বিপ্রতিসম (Skew-Symmetric)', 'সমমিত (Symmetric)', 'কর্ণ (Diagonal)', 'শূন্য (Null)'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A - A^T = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $(A - A^T)^T = A^T - A = -(A - A^T)$, তাই এটি বিপ্রতিসম ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A - A^T$ সর্বদা বিপ্রতিসম ম্যাট্রিক্স হয়।'
  },
  {
    id: 'ch40_q68',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ হলে, $A$ কী ধরনের ম্যাট্রিক্স?',
    options: ['সমমিত (Symmetric)', 'বিপ্রতিসম (Skew-Symmetric)', 'কর্ণ (Diagonal)', 'শূন্য (Null)'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = A$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $A = A^T$, তাই এটি সমমিত ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = A^T$ হলে সমমিত ম্যাট্রিক্স।'
  },
  {
    id: 'ch40_q69',
    text: '$A = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ হলে, $A$ কী ধরনের ম্যাট্রিক্স?',
    options: ['বিপ্রতিসম (Skew-Symmetric)', 'সমমিত (Symmetric)', 'কর্ণ (Diagonal)', 'শূন্য (Null)'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix} = -A$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $A = -A^T$, তাই এটি বিপ্রতিসম ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = -A^T$ এবং প্রধান কর্ণের উপাদান 0 হলে বিপ্রতিসম ম্যাট্রিক্স।'
  },
  {
    id: 'ch40_q70',
    text: '$A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$ হলে, $A$ কী ধরনের ম্যাট্রিক্স?',
    options: ['স্কেলার (Scalar)', 'অভেদক (Identity)', 'কর্ণ (Diagonal)', 'শূন্য (Null)'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি একটি কর্ণ ম্যাট্রিক্স যার কর্ণের উপাদানগুলি সমান (3)।' },
      { step: 'ধাপ ২:', content: 'সুতরাং এটি একটি স্কেলার ম্যাট্রিক্স।' }
    ],
    shortcutTrick: '💡 $A = kI$ আকারের ম্যাট্রিক্স স্কেলার ম্যাট্রিক্স।'
  },
  {
    id: 'ch40_q71',
    text: '$A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ হলে, $AB = BA$ কিনা?',
    options: ['না', 'হ্যাঁ', 'শুধুমাত্র বিশেষ শর্তে', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$, $BA = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$AB = BA$' }
    ],
    shortcutTrick: '💡 এই ক্ষেত্রে $AB = BA$।'
  },
  {
    id: 'ch40_q72',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^T$ কত?',
    options: ['$\\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A+B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(A+B)^T = \\begin{bmatrix} 6 & 10 \\\\ 8 & 12 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(A+B)^T = A^T + B^T$'
  },
  {
    id: 'ch40_q73',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(AB)^T$ কত?',
    options: ['$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$(AB)^T = \\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $(AB)^T = B^T A^T$'
  },
  {
    id: 'ch40_q74',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A^T B^T$ কত?',
    options: ['$\\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$', '$\\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$, $B^T = \\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A^T B^T = \\begin{bmatrix} 1 \\cdot 5 + 3 \\cdot 6 & 1 \\cdot 7 + 3 \\cdot 8 \\\\ 2 \\cdot 5 + 4 \\cdot 6 & 2 \\cdot 7 + 4 \\cdot 8 \\end{bmatrix} = \\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^T B^T = (BA)^T$'
  },
  {
    id: 'ch40_q75',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $B^T A^T$ কত?',
    options: ['$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$', '$\\begin{bmatrix} 23 & 31 \\\\ 34 & 46 \\end{bmatrix}$', '$\\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$B^T = \\begin{bmatrix} 5 & 7 \\\\ 6 & 8 \\end{bmatrix}$, $A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$B^T A^T = \\begin{bmatrix} 5 \\cdot 1 + 7 \\cdot 2 & 5 \\cdot 3 + 7 \\cdot 4 \\\\ 6 \\cdot 1 + 8 \\cdot 2 & 6 \\cdot 3 + 8 \\cdot 4 \\end{bmatrix} = \\begin{bmatrix} 19 & 43 \\\\ 22 & 50 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $B^T A^T = (AB)^T$'
  },
  {
    id: 'ch40_q76',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^T$ এবং $(A^T + B^T)$ এর মধ্যে সম্পর্ক কী?',
    options: ['$(A+B)^T = A^T + B^T$', '$(A+B)^T \\neq A^T + B^T$', '$(A+B)^T = - (A^T + B^T)$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রান্সপোজের যোগ সূত্রানুসারে, $(A+B)^T = A^T + B^T$।' }
    ],
    shortcutTrick: '💡 $(A+B)^T = A^T + B^T$'
  },
  {
    id: 'ch40_q77',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এবং $A^T$ এর নির্ণায়কের মধ্যে সম্পর্ক কী?',
    options: ['$|A^T| = |A|$', '$|A^T| = -|A|$', '$|A^T| = 1/|A|$', '$|A^T| = -1/|A|$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $|A^T| = -2$' },
      { step: 'ধাপ ২:', content: 'সুতরাং $|A^T| = |A|$' }
    ],
    shortcutTrick: '💡 $|A^T| = |A|$'
  },
  {
    id: 'ch40_q78',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর সহগুণক ম্যাট্রিক্সের ট্রান্সপোজ কী?',
    options: ['$\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহগুণক ম্যাট্রিক্স $C = \\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$C^T = \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $C^T = \\text{adj}(A)$'
  },
  {
    id: 'ch40_q79',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর বিপরীত ম্যাট্রিক্সের ট্রেস কত?',
    options: ['$-2.5$', '$2.5$', '$-1.5$', '$1.5$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^{-1} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$\\text{Tr}(A^{-1}) = -2 + (-0.5) = -2.5$' }
    ],
    shortcutTrick: '💡 $\\text{Tr}(A^{-1}) = \\frac{\\text{Tr}(A)}{|A|}$ (শুধুমাত্র $2 \\times 2$ এর জন্য)'
  },
  {
    id: 'ch40_q80',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $A$ এবং $B$ উভয়ের নির্ণায়কের গুণফল কত?',
    options: ['4', '-4', '8', '-8'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $|B| = -2$' },
      { step: 'ধাপ ২:', content: '$|A| \\cdot |B| = (-2) \\times (-2) = 4$' }
    ],
    shortcutTrick: '💡 $|A| \\cdot |B| = |AB|$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: ম্যাট্রিক্স সমীকরণ ও প্রয়োগ (Matrix Equations & Applications) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q81',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $X = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$ এবং $AX = \\begin{bmatrix} 5 \\\\ 11 \\end{bmatrix}$ হলে, $x$ ও $y$-এর মান কত?',
    options: ['$x = 1, y = 2$', '$x = 2, y = 1$', '$x = 1, y = 3$', '$x = 3, y = 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AX = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} x + 2y \\\\ 3x + 4y \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত $AX = \\begin{bmatrix} 5 \\\\ 11 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$x + 2y = 5$ এবং $3x + 4y = 11$' },
      { step: 'ধাপ ৪:', content: 'সমাধান করে $x = 1, y = 2$ পাই।' }
    ],
    shortcutTrick: '💡 ম্যাট্রিক্স গুণ করে সমীকরণে রূপান্তর করে সমাধান কর।'
  },
  {
    id: 'ch40_q82',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ এবং $X$ একটি $2 \\times 2$ ম্যাট্রিক্স যেন $AX = B$ হয়। তাহলে $X$ কত?',
    options: ['$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ $AX = B$ থেকে $X = A^{-1} B$' },
      { step: 'ধাপ ২:', content: '$A^{-1} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$X = A^{-1} B = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$' },
      { step: 'ধাপ ৪:', content: '$= \\begin{bmatrix} -10+7 & -12+8 \\\\ 7.5-3.5 & 9-4 \\end{bmatrix} = \\begin{bmatrix} -3 & -4 \\\\ 4 & 5 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $AX = B \\Rightarrow X = A^{-1} B$'
  },
  {
    id: 'ch40_q83',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ এবং $X$ একটি $2 \\times 2$ ম্যাট্রিক্স যেন $XA = B$ হয়। তাহলে $X$ কত?',
    options: ['$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$', '$\\begin{bmatrix} -4 & -6 \\\\ 4.5 & 7 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ $XA = B$ থেকে $X = B A^{-1}$' },
      { step: 'ধাপ ২:', content: '$A^{-1} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$X = B A^{-1} = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' },
      { step: 'ধাপ ৪:', content: '$= \\begin{bmatrix} -10+9 & 5-3 \\\\ -14+12 & 7-4 \\end{bmatrix} = \\begin{bmatrix} -1 & 2 \\\\ -2 & 3 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $XA = B \\Rightarrow X = B A^{-1}$'
  },
  {
    id: 'ch40_q84',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $A^2 - 5A - 2I = 0$ কিনা যাচাই কর।',
    options: ['হ্যাঁ', 'না', 'শুধুমাত্র $A$ এর বিশেষ মানের জন্য', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^2 = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$5A = \\begin{bmatrix} 5 & 10 \\\\ 15 & 20 \\end{bmatrix}$, $2I = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: '$A^2 - 5A - 2I = \\begin{bmatrix} 7-5-2 & 10-10-0 \\\\ 15-15-0 & 22-20-2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 ক্যালে-হ্যামিল্টন উপপাদ্য অনুযায়ী, প্রতিটি বর্গ ম্যাট্রিক্স তার নিজস্ব বৈশিষ্ট্য সমীকরণ মেনে চলে।'
  },
  {
    id: 'ch40_q85',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $AB = BA$ কিনা?',
    options: ['না', 'হ্যাঁ', 'শুধুমাত্র $A = B$ হলে', 'শুধুমাত্র $B = A^T$ হলে'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$BA = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $AB \\neq BA$, তাই $A$ এবং $B$ বিনিময়যোগ্য নয়।' }
    ],
    shortcutTrick: '💡 সাধারণত ম্যাট্রিক্স গুণন বিনিময় নিয়ম মানে না।'
  },
  {
    id: 'ch40_q86',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর বিপরীত ম্যাট্রিক্স $A^{-1}$ নির্ণয় কর এবং $A A^{-1} = I$ যাচাই কর।',
    options: ['$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^{-1} = \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$A A^{-1} = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{bmatrix} = \\begin{bmatrix} -2+3 & 1-1 \\\\ -6+6 & 3-2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I$' }
    ],
    shortcutTrick: '💡 $A A^{-1} = I$'
  },
  {
    id: 'ch40_q87',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর নির্ণায়ক $|A|$ এবং ট্রেস $\text{Tr}(A)$ এর মধ্যে সম্পর্ক কী?',
    options: ['$|A| = \\text{Tr}(A)$', '$|A| = -\\text{Tr}(A)$', '$|A| = 2 \\text{Tr}(A)$', 'কোনোটিই নয়'],
    correct: 3,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $\text{Tr}(A) = 5$' },
      { step: 'ধাপ ২:', content: 'এই দুটি পরস্পর সমান নয়, তাই এরকম কোনো সম্পর্ক নেই।' }
    ],
    shortcutTrick: '💡 $2 \\times 2$ ম্যাট্রিক্সের বৈশিষ্ট্য সমীকরণ $\\lambda^2 - \\text{Tr}(A) \\lambda + |A| = 0$'
  },
  {
    id: 'ch40_q88',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A^2 - 5A - 2I = 0$ সূত্রটি ব্যবহার করে $A^3$ নির্ণয় কর।',
    options: ['$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$', '$\\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$A^2 = 5A + 2I$' },
      { step: 'ধাপ ২:', content: '$A^3 = A \\cdot A^2 = A(5A + 2I) = 5A^2 + 2A$' },
      { step: 'ধাপ ৩:', content: '$= 5(5A + 2I) + 2A = 25A + 10I + 2A = 27A + 10I$' },
      { step: 'ধাপ ৪:', content: '$= 27 \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + 10 \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 27+10 & 54 \\\\ 81 & 108+10 \\end{bmatrix} = \\begin{bmatrix} 37 & 54 \\\\ 81 & 118 \\end{bmatrix}$' }
    ],
    shortcutTrick: '💡 $A^3 = 27A + 10I$ (ক্যালে-হ্যামিল্টন উপপাদ্য ব্যবহার করে)'
  },
  {
    id: 'ch40_q89',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর বৈশিষ্ট্যমূলক বহুপদী (Characteristic Polynomial) কত?',
    options: ['$\\lambda^2 - 5\\lambda - 2$', '$\\lambda^2 - 5\\lambda + 2$', '$\\lambda^2 + 5\\lambda - 2$', '$\\lambda^2 + 5\\lambda + 2$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৈশিষ্ট্যমূলক বহুপদী $\\lambda^2 - \\text{Tr}(A) \\lambda + |A|$' },
      { step: 'ধাপ ২:', content: '$\\text{Tr}(A) = 5, |A| = -2$' },
      { step: 'ধাপ ৩:', content: '$\\lambda^2 - 5\\lambda - 2$' }
    ],
    shortcutTrick: '💡 $\\lambda^2 - \\text{Tr}(A) \\lambda + |A|$'
  },
  {
    id: 'ch40_q90',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^2$ এবং $A^2 + 2AB + B^2$ এর মধ্যে সম্পর্ক কী?',
    options: ['$(A+B)^2 \\neq A^2 + 2AB + B^2$', '$(A+B)^2 = A^2 + 2AB + B^2$', '$(A+B)^2 = A^2 - 2AB + B^2$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB \\neq BA$ হওয়ায় $(A+B)^2 = A^2 + AB + BA + B^2$' },
      { step: 'ধাপ ২:', content: 'সুতরাং $(A+B)^2 \\neq A^2 + 2AB + B^2$' }
    ],
    shortcutTrick: '💡 $AB = BA$ না হলে $(A+B)^2 = A^2 + AB + BA + B^2$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও বিগত বছরের উচ্চতর জটিল সমস্যা (Advanced Mixed Rules) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch40_q91',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $|A| \\cdot |B|$ এবং $|AB|$ এর মধ্যে সম্পর্ক কী?',
    options: ['$|AB| = |A| \\cdot |B|$', '$|AB| \\neq |A| \\cdot |B|$', '$|AB| = -|A| \\cdot |B|$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $|B| = -2$' },
      { step: 'ধাপ ২:', content: '$|A| \\cdot |B| = 4$' },
      { step: 'ধাপ ৩:', content: '$|AB| = 4$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $|AB| = |A| \\cdot |B|$' }
    ],
    shortcutTrick: '💡 $|AB| = |A| \\cdot |B|$'
  },
  {
    id: 'ch40_q92',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $|A + B|$ এবং $|A| + |B|$ এর মধ্যে সম্পর্ক কী?',
    options: ['$|A+B| \\neq |A| + |B|$', '$|A+B| = |A| + |B|$', '$|A+B| = |A| - |B|$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A+B| = -8$' },
      { step: 'ধাপ ২:', content: '$|A| + |B| = -2 + (-2) = -4$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $|A+B| \\neq |A| + |B|$' }
    ],
    shortcutTrick: '💡 $|A+B| \\neq |A| + |B|$ (সাধারণত)'
  },
  {
    id: 'ch40_q93',
    text: 'যদি $A$ এবং $B$ একই ক্রমের দুটি বর্গ ম্যাট্রিক্স হয়, তাহলে $(AB)^T$ কত?',
    options: ['$B^T A^T$', '$A^T B^T$', '$-B^T A^T$', '$-A^T B^T$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রান্সপোজের সূত্রানুসারে, $(AB)^T = B^T A^T$।' }
    ],
    shortcutTrick: '💡 $(AB)^T = B^T A^T$'
  },
  {
    id: 'ch40_q94',
    text: 'যদি $A$ একটি $3 \\times 3$ ম্যাট্রিক্স এবং $|A| = 2$ হয়, তাহলে $|2A|$ কত?',
    options: ['16', '8', '4', '2'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|kA| = k^n |A|$, যেখানে $n$ ম্যাট্রিক্সের ক্রম।' },
      { step: 'ধাপ ২:', content: '$|2A| = 2^3 \\times 2 = 8 \\times 2 = 16$' }
    ],
    shortcutTrick: '💡 $|kA| = k^n |A|$'
  },
  {
    id: 'ch40_q95',
    text: 'যদি $A$ একটি $2 \\times 2$ ম্যাট্রিক্স হয় এবং $|A| = 3$ হয়, তাহলে $|A^{-1}|$ কত?',
    options: ['$\\frac{1}{3}$', '3', '$-3$', '$\\frac{1}{9}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A^{-1}| = \\frac{1}{|A|}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{1}{3}$' }
    ],
    shortcutTrick: '💡 $|A^{-1}| = \\frac{1}{|A|}$'
  },
  {
    id: 'ch40_q96',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ এবং $C = \\begin{bmatrix} 9 & 10 \\\\ 11 & 12 \\end{bmatrix}$ হলে, $(AB)C$ এবং $A(BC)$ এর মধ্যে সম্পর্ক কী?',
    options: ['$(AB)C = A(BC)$', '$(AB)C \\neq A(BC)$', '$(AB)C = -A(BC)$', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ম্যাট্রিক্স গুণন সাপেক্ষে সংযোজক নিয়ম সত্য।' },
      { step: 'ধাপ ২:', content: 'সুতরাং $(AB)C = A(BC)$' }
    ],
    shortcutTrick: '💡 $(AB)C = A(BC)$'
  },
  {
    id: 'ch40_q97',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর বিপরীত ম্যাট্রিক্সের নির্ণায়ক কত?',
    options: ['$-0.5$', '$0.5$', '$-2$', '2'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$' },
      { step: 'ধাপ ২:', content: '$|A^{-1}| = \\frac{1}{|A|} = -\\frac{1}{2} = -0.5$' }
    ],
    shortcutTrick: '💡 $|A^{-1}| = \\frac{1}{|A|}$'
  },
  {
    id: 'ch40_q98',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $|AB|$ কত?',
    options: ['4', '-4', '8', '-8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|A| = -2$, $|B| = -2$' },
      { step: 'ধাপ ২:', content: '$|AB| = |A| \\cdot |B| = (-2) \\times (-2) = 4$' }
    ],
    shortcutTrick: '💡 $|AB| = |A| \\cdot |B|$'
  },
  {
    id: 'ch40_q99',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ হলে, $A$ এর সহগুণক ম্যাট্রিক্সের নির্ণায়ক কত?',
    options: ['-2', '2', '4', '-4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহগুণক ম্যাট্রিক্স $C = \\begin{bmatrix} 4 & -3 \\\\ -2 & 1 \\end{bmatrix}$' },
      { step: 'ধাপ ২:', content: '$|C| = 4 \\cdot 1 - (-3) \\cdot (-2) = 4 - 6 = -2$' }
    ],
    shortcutTrick: '💡 $|\\text{adj}(A)| = |A|^{n-1}$ (এখানে $n=2$, তাই $|\\text{adj}(A)| = |A|$)' 
  },
  {
    id: 'ch40_q100',
    text: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ এবং $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$ হলে, $(A + B)^2 = A^2 + 2AB + B^2$ সূত্রটি প্রযোজ্য কিনা?',
    options: ['না', 'হ্যাঁ', 'শুধুমাত্র $A = B$ হলে', 'শুধুমাত্র $B = A^T$ হলে'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB \\neq BA$ হওয়ায় $(A+B)^2 = A^2 + AB + BA + B^2$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $AB \\neq BA$, তাই $(A+B)^2 \\neq A^2 + 2AB + B^2$' }
    ],
    shortcutTrick: '💡 $AB = BA$ হলে তবেই $(A+B)^2 = A^2 + 2AB + B^2$ প্রযোজ্য।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter40Questions;
}

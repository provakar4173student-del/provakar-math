// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 20: বীজগণিতের সূত্রাবলী (Algebraic Formulas) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter20Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক বীজগণিতীয় সূত্রাবলী (Basic Algebraic Identities) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q1',
    text: '$(a+b)^2$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$a^2 + b^2$', '$a^2 + 2ab + b^2$', '$a^2 - 2ab + b^2$', '$a^2 + ab + b^2$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)^2$ এর সূত্র: $(a+b)^2 = a^2 + 2ab + b^2$' },
      { step: 'ধাপ ২:', content: 'এটি একটি মৌলিক বীজগণিতীয় সূত্র যা সর্বদা সত্য।' }
    ],
    shortcutTrick: '💡 $(a+b)^2 = a^2 + 2ab + b^2$ — সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch20_q2',
    text: '$(a-b)^2$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$a^2 + b^2$', '$a^2 + 2ab + b^2$', '$a^2 - 2ab + b^2$', '$a^2 - ab + b^2$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-b)^2$ এর সূত্র: $(a-b)^2 = a^2 - 2ab + b^2$' },
      { step: 'ধাপ ২:', content: 'এটি $(a+b)^2$ থেকে শুধুমাত্র $2ab$ এর চিহ্ন পরিবর্তন করে পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 $(a-b)^2 = a^2 - 2ab + b^2$ — সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch20_q3',
    text: '$a^2 - b^2$ এর উৎপাদকে বিশ্লেষিত রূপ কোনটি?',
    options: ['$(a-b)(a-b)$', '$(a+b)(a+b)$', '$(a+b)(a-b)$', '$(a+b)^2$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^2 - b^2$ এর সূত্র: $a^2 - b^2 = (a+b)(a-b)$' },
      { step: 'ধাপ ২:', content: 'এটি দুটি বর্গের অন্তরফল নামে পরিচিত।' }
    ],
    shortcutTrick: '💡 $a^2 - b^2 = (a+b)(a-b)$ — বর্গের অন্তরফল সূত্র।'
  },
  {
    id: 'ch20_q4',
    text: '$a^2 + b^2$ কে $(a+b)$ এবং $(a-b)$ এর সাহায্যে প্রকাশ করলে কোনটি সঠিক?',
    options: ['$(a+b)^2 - 2ab$', '$(a-b)^2 + 2ab$', 'উভয়ই সঠিক', 'কোনোটিই নয়'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)^2 = a^2 + 2ab + b^2 \\Rightarrow a^2 + b^2 = (a+b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: 'আবার, $(a-b)^2 = a^2 - 2ab + b^2 \\Rightarrow a^2 + b^2 = (a-b)^2 + 2ab$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং উভয় প্রকাশই সঠিক।' }
    ],
    shortcutTrick: '💡 $a^2 + b^2 = (a+b)^2 - 2ab = (a-b)^2 + 2ab$'
  },
  {
    id: 'ch20_q5',
    text: '$a^2 + b^2 + 2ab$ এর সরলতম রূপ কোনটি?',
    options: ['$(a+b)^2$', '$(a-b)^2$', '$(a+b)(a-b)$', '$a^2 - b^2$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b)^2 = a^2 + 2ab + b^2$' },
      { step: 'ধাপ ২:', content: 'এখানে $a^2 + b^2 + 2ab = a^2 + 2ab + b^2$ যা $(a+b)^2$ এর সমান।' }
    ],
    shortcutTrick: '💡 $a^2 + 2ab + b^2 = (a+b)^2$'
  },
  {
    id: 'ch20_q6',
    text: '$a^2 + b^2 - 2ab$ এর সরলতম রূপ কোনটি?',
    options: ['$(a+b)^2$', '$(a-b)^2$', '$(a+b)(a-b)$', '$a^2 - b^2$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a-b)^2 = a^2 - 2ab + b^2$' },
      { step: 'ধাপ ২:', content: 'এখানে $a^2 + b^2 - 2ab = a^2 - 2ab + b^2$ যা $(a-b)^2$ এর সমান।' }
    ],
    shortcutTrick: '💡 $a^2 - 2ab + b^2 = (a-b)^2$'
  },
  {
    id: 'ch20_q7',
    text: '$(a+b+c)^2$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$a^2 + b^2 + c^2$', '$a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$', '$a^2 + b^2 + c^2 + 2abc$', '$a^2 + b^2 + c^2 + ab + bc + ca$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b+c)^2$ এর সূত্র: $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$' },
      { step: 'ধাপ ২:', content: 'এটি তিনটি রাশির যোগফলের বর্গের সূত্র।' }
    ],
    shortcutTrick: '💡 $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$'
  },
  {
    id: 'ch20_q8',
    text: '$a^3 + b^3$ এর উৎপাদকে বিশ্লেষিত রূপ কোনটি?',
    options: ['$(a+b)(a^2 - ab + b^2)$', '$(a-b)(a^2 + ab + b^2)$', '$(a+b)(a^2 + ab + b^2)$', '$(a-b)(a^2 - ab + b^2)$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 + b^3$ এর সূত্র: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$' },
      { step: 'ধাপ ২:', content: 'এটি দুটি ঘনের যোগফলের সূত্র।' }
    ],
    shortcutTrick: '💡 $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$'
  },
  {
    id: 'ch20_q9',
    text: '$a^3 - b^3$ এর উৎপাদকে বিশ্লেষিত রূপ কোনটি?',
    options: ['$(a+b)(a^2 - ab + b^2)$', '$(a-b)(a^2 + ab + b^2)$', '$(a+b)(a^2 + ab + b^2)$', '$(a-b)(a^2 - ab + b^2)$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 - b^3$ এর সূত্র: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$' },
      { step: 'ধাপ ২:', content: 'এটি দুটি ঘনের অন্তরফলের সূত্র।' }
    ],
    shortcutTrick: '💡 $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$'
  },
  {
    id: 'ch20_q10',
    text: '$(a+b)^3$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$a^3 + b^3 + 3ab(a+b)$', '$a^3 + b^3 - 3ab(a+b)$', '$a^3 - b^3 + 3ab(a-b)$', '$a^3 - b^3 - 3ab(a-b)$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)^3$ এর সূত্র: $(a+b)^3 = a^3 + b^3 + 3ab(a+b)$' },
      { step: 'ধাপ ২:', content: 'এটি $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ থেকেও পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 $(a+b)^3 = a^3 + b^3 + 3ab(a+b)$'
  },
  {
    id: 'ch20_q11',
    text: '$(a-b)^3$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$a^3 - b^3 - 3ab(a-b)$', '$a^3 - b^3 + 3ab(a-b)$', '$a^3 + b^3 - 3ab(a+b)$', '$a^3 + b^3 + 3ab(a+b)$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-b)^3$ এর সূত্র: $(a-b)^3 = a^3 - b^3 - 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: 'এটি $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ থেকেও পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 $(a-b)^3 = a^3 - b^3 - 3ab(a-b)$'
  },
  {
    id: 'ch20_q12',
    text: '$a^3 + b^3 + c^3 - 3abc$ এর উৎপাদকে বিশ্লেষিত রূপ কোনটি?',
    options: ['$(a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$', '$(a+b+c)(a^2+b^2+c^2 + ab+bc+ca)$', '$(a+b+c)(a^2+b^2+c^2)$', '$(a+b+c)(ab+bc+ca)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 + b^3 + c^3 - 3abc$ এর সূত্র: $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$' },
      { step: 'ধাপ ২:', content: 'এটি একটি অত্যন্ত গুরুত্বপূর্ণ সূত্র।' }
    ],
    shortcutTrick: '💡 $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$'
  },
  {
    id: 'ch20_q13',
    text: '$a^3 + b^3 + c^3$ এর মান কত হবে যদি $a+b+c=0$ হয়?',
    options: ['$3abc$', '$0$', '$abc$', '$a^2+b^2+c^2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$' },
      { step: 'ধাপ ২:', content: 'যদি $a+b+c=0$ হয়, তবে ডানপক্ষ শূন্য হয়।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং, $a^3 + b^3 + c^3 - 3abc = 0 \\Rightarrow a^3 + b^3 + c^3 = 3abc$' }
    ],
    shortcutTrick: '💡 যদি $a+b+c=0$ হয়, তাহলে $a^3 + b^3 + c^3 = 3abc$'
  },
  {
    id: 'ch20_q14',
    text: '$a^2 + b^2 + c^2 - ab - bc - ca$ এর মান কত হবে যদি $a=b=c$ হয়?',
    options: ['$0$', '$a^2$', '$b^2$', '$c^2$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যদি $a=b=c$ হয়, তবে $a^2 + b^2 + c^2 = 3a^2$ এবং $ab+bc+ca = 3a^2$' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $a^2 + b^2 + c^2 - ab - bc - ca = 3a^2 - 3a^2 = 0$' }
    ],
    shortcutTrick: '💡 যদি $a=b=c$ হয়, তাহলে $a^2 + b^2 + c^2 - ab - bc - ca = 0$'
  },
  {
    id: 'ch20_q15',
    text: '$(x+y)^2 - (x-y)^2$ এর সরল মান কত?',
    options: ['$4xy$', '$2xy$', '$x^2 + y^2$', '$x^2 - y^2$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+y)^2 = x^2 + 2xy + y^2$ এবং $(x-y)^2 = x^2 - 2xy + y^2$' },
      { step: 'ধাপ ২:', content: '$(x+y)^2 - (x-y)^2 = (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2)$' },
      { step: 'ধাপ ৩:', content: '$= x^2 + 2xy + y^2 - x^2 + 2xy - y^2 = 4xy$' }
    ],
    shortcutTrick: '💡 $(x+y)^2 - (x-y)^2 = 4xy$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: $(a+b)^2$ ও $(a-b)^2$ এর প্রয়োগ (Application of (a±b)²) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q16',
    text: 'যদি $a+b = 7$ এবং $ab = 12$ হয়, তবে $a^2 + b^2$ এর মান কত?',
    options: ['$25$', '$26$', '$27$', '$28$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a+b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: '$a+b = 7$ এবং $ab = 12$ বসিয়ে পাই:' },
      { step: 'ধাপ ৩:', content: '$a^2 + b^2 = 7^2 - 2\\times12 = 49 - 24 = 25$' }
    ],
    shortcutTrick: '💡 $a^2 + b^2 = (a+b)^2 - 2ab = 49 - 24 = 25$'
  },
  {
    id: 'ch20_q17',
    text: 'যদি $a-b = 5$ এবং $ab = 14$ হয়, তবে $a^2 + b^2$ এর মান কত?',
    options: ['$53$', '$52$', '$51$', '$50$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a-b)^2 + 2ab$' },
      { step: 'ধাপ ২:', content: '$a-b = 5$ এবং $ab = 14$ বসিয়ে পাই:' },
      { step: 'ধাপ ৩:', content: '$a^2 + b^2 = 5^2 + 2\\times14 = 25 + 28 = 53$' }
    ],
    shortcutTrick: '💡 $a^2 + b^2 = (a-b)^2 + 2ab = 25 + 28 = 53$'
  },
  {
    id: 'ch20_q18',
    text: 'যদি $a+b = 10$ এবং $a^2 + b^2 = 58$ হয়, তবে $ab$ এর মান কত?',
    options: ['$20$', '$21$', '$22$', '$23$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a+b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: '$58 = 10^2 - 2ab \\Rightarrow 58 = 100 - 2ab$' },
      { step: 'ধাপ ৩:', content: '$2ab = 100 - 58 = 42 \\Rightarrow ab = 21$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{(a+b)^2 - (a^2+b^2)}{2} = \\frac{100-58}{2} = 21$'
  },
  {
    id: 'ch20_q19',
    text: 'যদি $a-b = 4$ এবং $a^2 + b^2 = 40$ হয়, তবে $ab$ এর মান কত?',
    options: ['$12$', '$11$', '$13$', '$14$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a-b)^2 + 2ab$' },
      { step: 'ধাপ ২:', content: '$40 = 4^2 + 2ab \\Rightarrow 40 = 16 + 2ab$' },
      { step: 'ধাপ ৩:', content: '$2ab = 40 - 16 = 24 \\Rightarrow ab = 12$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{(a^2+b^2) - (a-b)^2}{2} = \\frac{40-16}{2} = 12$'
  },
  {
    id: 'ch20_q20',
    text: 'যদি $a+b = 9$ এবং $a^2 + b^2 = 41$ হয়, তবে $ab$ এর মান কত?',
    options: ['$18$', '$19$', '$20$', '$21$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a+b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: '$41 = 9^2 - 2ab \\Rightarrow 41 = 81 - 2ab$' },
      { step: 'ধাপ ৩:', content: '$2ab = 81 - 41 = 40 \\Rightarrow ab = 20$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{(a+b)^2 - (a^2+b^2)}{2} = \\frac{81-41}{2} = 20$'
  },
  {
    id: 'ch20_q21',
    text: 'যদি $a^2 + b^2 = 34$ এবং $ab = 15$ হয়, তবে $a+b$ এর মান কত?',
    options: ['$6$', '$7$', '$8$', '$9$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b)^2 = a^2 + b^2 + 2ab$' },
      { step: 'ধাপ ২:', content: '$(a+b)^2 = 34 + 2\\times15 = 34 + 30 = 64$' },
      { step: 'ধাপ ৩:', content: '$a+b = \\sqrt{64} = 8$' }
    ],
    shortcutTrick: '💡 $(a+b)^2 = a^2+b^2+2ab = 34+30=64 \\Rightarrow a+b=8$'
  },
  {
    id: 'ch20_q22',
    text: 'যদি $a^2 + b^2 = 89$ এবং $ab = 40$ হয়, তবে $a-b$ এর মান কত? (ধরি $a > b$)',
    options: ['$3$', '$4$', '$5$', '$6$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a-b)^2 = a^2 + b^2 - 2ab$' },
      { step: 'ধাপ ২:', content: '$(a-b)^2 = 89 - 2\\times40 = 89 - 80 = 9$' },
      { step: 'ধাপ ৩:', content: '$a-b = \\sqrt{9} = 3$' }
    ],
    shortcutTrick: '💡 $(a-b)^2 = a^2+b^2-2ab = 89-80=9 \\Rightarrow a-b=3$'
  },
  {
    id: 'ch20_q23',
    text: 'যদি $a+b = 12$ এবং $ab = 32$ হয়, তবে $a^2 + b^2$ এর মান কত?',
    options: ['$78$', '$79$', '$80$', '$81$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a+b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: '$a^2 + b^2 = 12^2 - 2\\times32 = 144 - 64 = 80$' }
    ],
    shortcutTrick: '💡 $a^2+b^2 = (a+b)^2-2ab = 144-64=80$'
  },
  {
    id: 'ch20_q24',
    text: 'যদি $a-b = 2$ এবং $ab = 24$ হয়, তবে $a^2 + b^2$ এর মান কত?',
    options: ['$49$', '$50$', '$51$', '$52$'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^2 + b^2 = (a-b)^2 + 2ab$' },
      { step: 'ধাপ ২:', content: '$a^2 + b^2 = 2^2 + 2\\times24 = 4 + 48 = 52$' }
    ],
    shortcutTrick: '💡 $a^2+b^2 = (a-b)^2+2ab = 4+48=52$'
  },
  {
    id: 'ch20_q25',
    text: 'যদি $x+\\frac{1}{x} = 5$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['$23$', '$24$', '$25$', '$26$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\left(x+\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2$' },
      { step: 'ধাপ ২:', content: '$x^2 + \\frac{1}{x^2} = \\left(x+\\frac{1}{x}\\right)^2 - 2 = 5^2 - 2 = 25 - 2 = 23$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = \\left(x+\\frac{1}{x}\\right)^2 - 2 = 25-2=23$'
  },
  {
    id: 'ch20_q26',
    text: 'যদি $x-\\frac{1}{x} = 4$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['$16$', '$17$', '$18$', '$19$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\left(x-\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} - 2$' },
      { step: 'ধাপ ২:', content: '$x^2 + \\frac{1}{x^2} = \\left(x-\\frac{1}{x}\\right)^2 + 2 = 4^2 + 2 = 16 + 2 = 18$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = \\left(x-\\frac{1}{x}\\right)^2 + 2 = 16+2=18$'
  },
  {
    id: 'ch20_q27',
    text: 'যদি $x+\\frac{1}{x} = 3$ হয়, তবে $x^3 + \\frac{1}{x^3}$ এর মান কত?',
    options: ['$15$', '$16$', '$17$', '$18$'],
    correct: 3,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $x^3 + \\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 3^3 - 3\\times3 = 27 - 9 = 18$' }
    ],
    shortcutTrick: '💡 $x^3+\\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right) = 27-9=18$'
  },
  {
    id: 'ch20_q28',
    text: 'যদি $x-\\frac{1}{x} = 2$ হয়, তবে $x^3 - \\frac{1}{x^3}$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $x^3 - \\frac{1}{x^3} = \\left(x-\\frac{1}{x}\\right)^3 + 3\\left(x-\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 2^3 + 3\\times2 = 8 + 6 = 14$' }
    ],
    shortcutTrick: '💡 $x^3-\\frac{1}{x^3} = \\left(x-\\frac{1}{x}\\right)^3 + 3\\left(x-\\frac{1}{x}\\right) = 8+6=14$'
  },
  {
    id: 'ch20_q29',
    text: 'যদি $x^2 + \\frac{1}{x^2} = 34$ হয়, তবে $x+\\frac{1}{x}$ এর মান কত? (ধরি $x>0$)',
    options: ['$5$', '$6$', '$7$', '$8$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\left(x+\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2$' },
      { step: 'ধাপ ২:', content: '$\\left(x+\\frac{1}{x}\\right)^2 = 34 + 2 = 36$' },
      { step: 'ধাপ ৩:', content: '$x+\\frac{1}{x} = \\sqrt{36} = 6$' }
    ],
    shortcutTrick: '💡 $x+\\frac{1}{x} = \\sqrt{x^2+\\frac{1}{x^2}+2} = \\sqrt{34+2} = 6$'
  },
  {
    id: 'ch20_q30',
    text: 'যদি $x^2 + \\frac{1}{x^2} = 66$ হয়, তবে $x-\\frac{1}{x}$ এর মান কত? (ধরি $x>1$)',
    options: ['$7$', '$8$', '$9$', '$10$'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\left(x-\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} - 2$' },
      { step: 'ধাপ ২:', content: '$\\left(x-\\frac{1}{x}\\right)^2 = 66 - 2 = 64$' },
      { step: 'ধাপ ৩:', content: '$x-\\frac{1}{x} = \\sqrt{64} = 8$' }
    ],
    shortcutTrick: '💡 $x-\\frac{1}{x} = \\sqrt{x^2+\\frac{1}{x^2}-2} = \\sqrt{66-2} = 8$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: $(a+b+c)^2$ ও $a^2+b^2+c^2$ এর প্রয়োগ (Application of (a+b+c)²) (Q31-Q40)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q31',
    text: '$a+b+c = 10$ এবং $ab+bc+ca = 25$ হলে, $a^2 + b^2 + c^2$ এর মান কত?',
    options: ['$50$', '$60$', '$70$', '$80$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$10^2 = a^2 + b^2 + c^2 + 2\\times25$' },
      { step: 'ধাপ ৩:', content: '$100 = a^2 + b^2 + c^2 + 50 \\Rightarrow a^2 + b^2 + c^2 = 50$' }
    ],
    shortcutTrick: '💡 $a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca) = 100-50=50$'
  },
  {
    id: 'ch20_q32',
    text: '$a+b+c = 8$ এবং $a^2+b^2+c^2 = 26$ হলে, $ab+bc+ca$ এর মান কত?',
    options: ['$16$', '$17$', '$18$', '$19$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$8^2 = 26 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ৩:', content: '$64 - 26 = 2(ab+bc+ca) \\Rightarrow ab+bc+ca = 19$' }
    ],
    shortcutTrick: '💡 $ab+bc+ca = \\frac{(a+b+c)^2 - (a^2+b^2+c^2)}{2} = \\frac{64-26}{2} = 19$'
  },
  {
    id: 'ch20_q33',
    text: '$a+b+c = 12$ এবং $ab+bc+ca = 22$ হলে, $a^2 + b^2 + c^2$ এর মান কত?',
    options: ['$90$', '$100$', '$110$', '$120$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$12^2 = a^2 + b^2 + c^2 + 2\\times22$' },
      { step: 'ধাপ ৩:', content: '$144 = a^2 + b^2 + c^2 + 44 \\Rightarrow a^2 + b^2 + c^2 = 100$' }
    ],
    shortcutTrick: '💡 $a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca) = 144-44=100$'
  },
  {
    id: 'ch20_q34',
    text: '$a+b+c = 15$ এবং $a^2+b^2+c^2 = 83$ হলে, $ab+bc+ca$ এর মান কত?',
    options: ['$70$', '$71$', '$72$', '$73$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$15^2 = 83 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ৩:', content: '$225 - 83 = 2(ab+bc+ca) \\Rightarrow ab+bc+ca = 71$' }
    ],
    shortcutTrick: '💡 $ab+bc+ca = \\frac{(a+b+c)^2 - (a^2+b^2+c^2)}{2} = \\frac{225-83}{2} = 71$'
  },
  {
    id: 'ch20_q35',
    text: '$a+b+c = 0$ হলে, $a^2+b^2+c^2$ ও $ab+bc+ca$ এর মধ্যে সম্পর্ক কী?',
    options: ['$a^2+b^2+c^2 = ab+bc+ca$', '$a^2+b^2+c^2 = -2(ab+bc+ca)$', '$a^2+b^2+c^2 = 2(ab+bc+ca)$', '$a^2+b^2+c^2 = -(ab+bc+ca)$'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: 'যদি $a+b+c=0$ হয়, তবে $0 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$' },
      { step: 'ধাপ ৩:', content: '$\\Rightarrow a^2 + b^2 + c^2 = -2(ab+bc+ca)$' }
    ],
    shortcutTrick: '💡 যদি $a+b+c=0$ হয়, তাহলে $a^2+b^2+c^2 = -2(ab+bc+ca)$'
  },
  {
    id: 'ch20_q36',
    text: '$x+y+z = 6$ এবং $xy+yz+zx = 11$ হলে, $x^2+y^2+z^2$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+y^2+z^2 = (x+y+z)^2 - 2(xy+yz+zx)$' },
      { step: 'ধাপ ২:', content: '$= 6^2 - 2\\times11 = 36 - 22 = 14$' }
    ],
    shortcutTrick: '💡 $x^2+y^2+z^2 = 6^2 - 2\\times11 = 14$'
  },
  {
    id: 'ch20_q37',
    text: '$p+q+r = 9$ এবং $p^2+q^2+r^2 = 29$ হলে, $pq+qr+rp$ এর মান কত?',
    options: ['$26$', '$27$', '$28$', '$29$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$pq+qr+rp = \\frac{(p+q+r)^2 - (p^2+q^2+r^2)}{2}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{9^2 - 29}{2} = \\frac{81-29}{2} = \\frac{52}{2} = 26$' }
    ],
    shortcutTrick: '💡 $pq+qr+rp = \\frac{81-29}{2} = 26$'
  },
  {
    id: 'ch20_q38',
    text: '$a+b+c = 13$ এবং $ab+bc+ca = 44$ হলে, $a^2+b^2+c^2$ এর মান কত?',
    options: ['$80$', '$81$', '$82$', '$83$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$= 13^2 - 2\\times44 = 169 - 88 = 81$' }
    ],
    shortcutTrick: '💡 $a^2+b^2+c^2 = 169-88=81$'
  },
  {
    id: 'ch20_q39',
    text: '$x+y+z = 11$ এবং $x^2+y^2+z^2 = 45$ হলে, $xy+yz+zx$ এর মান কত?',
    options: ['$36$', '$37$', '$38$', '$39$'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$xy+yz+zx = \\frac{(x+y+z)^2 - (x^2+y^2+z^2)}{2}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{121 - 45}{2} = \\frac{76}{2} = 38$' }
    ],
    shortcutTrick: '💡 $xy+yz+zx = \\frac{121-45}{2} = 38$'
  },
  {
    id: 'ch20_q40',
    text: '$a+b+c = 7$ এবং $a^2+b^2+c^2 = 29$ হলে, $ab+bc+ca$ এর মান কত?',
    options: ['$9$', '$10$', '$11$', '$12$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ab+bc+ca = \\frac{(a+b+c)^2 - (a^2+b^2+c^2)}{2}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{49 - 29}{2} = \\frac{20}{2} = 10$' }
    ],
    shortcutTrick: '💡 $ab+bc+ca = \\frac{49-29}{2} = 10$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: $a^3+b^3$ ও $a^3-b^3$ এর প্রয়োগ (Application of a³±b³) (Q41-Q55)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q41',
    text: '$a+b = 5$ এবং $ab = 6$ হলে, $a^3 + b^3$ এর মান কত?',
    options: ['$35$', '$36$', '$37$', '$38$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$' },
      { step: 'ধাপ ২:', content: '$= 5^3 - 3\\times6\\times5 = 125 - 90 = 35$' }
    ],
    shortcutTrick: '💡 $a^3+b^3 = (a+b)^3 - 3ab(a+b) = 125-90=35$'
  },
  {
    id: 'ch20_q42',
    text: '$a-b = 2$ এবং $ab = 3$ হলে, $a^3 - b^3$ এর মান কত?',
    options: ['$24$', '$25$', '$26$', '$27$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^3 - b^3 = (a-b)^3 + 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: '$= 2^3 + 3\\times3\\times2 = 8 + 18 = 26$' }
    ],
    shortcutTrick: '💡 $a^3-b^3 = (a-b)^3 + 3ab(a-b) = 8+18=26$'
  },
  {
    id: 'ch20_q43',
    text: '$x+y = 7$ এবং $xy = 12$ হলে, $x^3 + y^3$ এর মান কত?',
    options: ['$89$', '$90$', '$91$', '$92$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 + y^3 = (x+y)^3 - 3xy(x+y)$' },
      { step: 'ধাপ ২:', content: '$= 7^3 - 3\\times12\\times7 = 343 - 252 = 91$' }
    ],
    shortcutTrick: '💡 $x^3+y^3 = 343-252=91$'
  },
  {
    id: 'ch20_q44',
    text: '$a-b = 3$ এবং $ab = 10$ হলে, $a^3 - b^3$ এর মান কত?',
    options: ['$105$', '$106$', '$107$', '$108$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 - b^3 = (a-b)^3 + 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: '$= 3^3 + 3\\times10\\times3 = 27 + 90 = 117$' }
    ],
    shortcutTrick: '💡 $a^3-b^3 = 27+90=117$'
  },
  {
    id: 'ch20_q45',
    text: '$x+y = 9$ এবং $x^3 + y^3 = 189$ হলে, $xy$ এর মান কত?',
    options: ['$14$', '$15$', '$16$', '$17$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $x^3 + y^3 = (x+y)^3 - 3xy(x+y)$' },
      { step: 'ধাপ ২:', content: '$189 = 9^3 - 3xy\\times9 = 729 - 27xy$' },
      { step: 'ধাপ ৩:', content: '$27xy = 729 - 189 = 540 \\Rightarrow xy = 20$' }
    ],
    shortcutTrick: '💡 $xy = \\frac{(x+y)^3 - (x^3+y^3)}{3(x+y)} = \\frac{729-189}{27} = 20$'
  },
  {
    id: 'ch20_q46',
    text: '$a-b = 4$ এবং $a^3 - b^3 = 124$ হলে, $ab$ এর মান কত?',
    options: ['$7$', '$8$', '$9$', '$10$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^3 - b^3 = (a-b)^3 + 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: '$124 = 4^3 + 3ab\\times4 = 64 + 12ab$' },
      { step: 'ধাপ ৩:', content: '$12ab = 124 - 64 = 60 \\Rightarrow ab = 5$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{(a^3-b^3) - (a-b)^3}{3(a-b)} = \\frac{124-64}{12} = 5$'
  },
  {
    id: 'ch20_q47',
    text: '$p+q = 8$ এবং $pq = 15$ হলে, $p^3 + q^3$ এর মান কত?',
    options: ['$152$', '$153$', '$154$', '$155$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$p^3+q^3 = (p+q)^3 - 3pq(p+q)$' },
      { step: 'ধাপ ২:', content: '$= 8^3 - 3\\times15\\times8 = 512 - 360 = 152$' }
    ],
    shortcutTrick: '💡 $p^3+q^3 = 512-360=152$'
  },
  {
    id: 'ch20_q48',
    text: '$m-n = 5$ এবং $mn = 6$ হলে, $m^3 - n^3$ এর মান কত?',
    options: ['$175$', '$180$', '$185$', '$190$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$m^3-n^3 = (m-n)^3 + 3mn(m-n)$' },
      { step: 'ধাপ ২:', content: '$= 5^3 + 3\\times6\\times5 = 125 + 90 = 215$' }
    ],
    shortcutTrick: '💡 $m^3-n^3 = 125+90=215$'
  },
  {
    id: 'ch20_q49',
    text: '$x+y = 10$ এবং $x^3 + y^3 = 280$ হলে, $xy$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 + y^3 = (x+y)^3 - 3xy(x+y)$' },
      { step: 'ধাপ ২:', content: '$280 = 10^3 - 3xy\\times10 = 1000 - 30xy$' },
      { step: 'ধাপ ৩:', content: '$30xy = 1000 - 280 = 720 \\Rightarrow xy = 24$' }
    ],
    shortcutTrick: '💡 $xy = \\frac{1000-280}{30} = 24$'
  },
  {
    id: 'ch20_q50',
    text: '$a-b = 6$ এবং $a^3 - b^3 = 234$ হলে, $ab$ এর মান কত?',
    options: ['$3$', '$4$', '$5$', '$6$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 - b^3 = (a-b)^3 + 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: '$234 = 6^3 + 3ab\\times6 = 216 + 18ab$' },
      { step: 'ধাপ ৩:', content: '$18ab = 234 - 216 = 18 \\Rightarrow ab = 1$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{234-216}{18} = 1$'
  },
  {
    id: 'ch20_q51',
    text: '$a+b = 6$ এবং $ab = 7$ হলে, $a^3 + b^3$ এর মান কত?',
    options: ['$85$', '$86$', '$87$', '$88$'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3+b^3 = (a+b)^3 - 3ab(a+b)$' },
      { step: 'ধাপ ২:', content: '$= 6^3 - 3\\times7\\times6 = 216 - 126 = 90$' }
    ],
    shortcutTrick: '💡 $a^3+b^3 = 216-126=90$'
  },
  {
    id: 'ch20_q52',
    text: '$x-y = 2$ এবং $x^3 - y^3 = 56$ হলে, $xy$ এর মান কত?',
    options: ['$6$', '$7$', '$8$', '$9$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 - y^3 = (x-y)^3 + 3xy(x-y)$' },
      { step: 'ধাপ ২:', content: '$56 = 2^3 + 3xy\\times2 = 8 + 6xy$' },
      { step: 'ধাপ ৩:', content: '$6xy = 48 \\Rightarrow xy = 8$' }
    ],
    shortcutTrick: '💡 $xy = \\frac{56-8}{6} = 8$'
  },
  {
    id: 'ch20_q53',
    text: '$p+q = 12$ এবং $pq = 27$ হলে, $p^3 + q^3$ এর মান কত?',
    options: ['$750$', '$756$', '$762$', '$768$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$p^3+q^3 = (p+q)^3 - 3pq(p+q)$' },
      { step: 'ধাপ ২:', content: '$= 12^3 - 3\\times27\\times12 = 1728 - 972 = 756$' }
    ],
    shortcutTrick: '💡 $p^3+q^3 = 1728-972=756$'
  },
  {
    id: 'ch20_q54',
    text: '$m-n = 4$ এবং $mn = 5$ হলে, $m^3 - n^3$ এর মান কত?',
    options: ['$124$', '$125$', '$126$', '$127$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$m^3-n^3 = (m-n)^3 + 3mn(m-n)$' },
      { step: 'ধাপ ২:', content: '$= 4^3 + 3\\times5\\times4 = 64 + 60 = 124$' }
    ],
    shortcutTrick: '💡 $m^3-n^3 = 64+60=124$'
  },
  {
    id: 'ch20_q55',
    text: '$a+b = 14$ এবং $a^3 + b^3 = 1064$ হলে, $ab$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 + b^3 = (a+b)^3 - 3ab(a+b)$' },
      { step: 'ধাপ ২:', content: '$1064 = 14^3 - 3ab\\times14 = 2744 - 42ab$' },
      { step: 'ধাপ ৩:', content: '$42ab = 2744 - 1064 = 1680 \\Rightarrow ab = 40$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{2744-1064}{42} = 40$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: $(a+b)^3$ ও $(a-b)^3$ এর প্রয়োগ (Application of (a±b)³) (Q56-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q56',
    text: '$(x+y)^3$ এর বিস্তৃতিতে $x^2y$ এর সহগ কত?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$' },
      { step: 'ধাপ ২:', content: '$x^2y$ পদটির সহগ $3$।' }
    ],
    shortcutTrick: '💡 $(x+y)^3$ এ $x^2y$ এর সহগ $3$।'
  },
  {
    id: 'ch20_q57',
    text: '$(a-2b)^3$ এর বিস্তৃতিতে $a^2b$ এর সহগ কত?',
    options: ['$-6$', '$6$', '$12$', '$-12$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-2b)^3 = a^3 + 3a^2(-2b) + 3a(-2b)^2 + (-2b)^3$' },
      { step: 'ধাপ ২:', content: '$= a^3 - 6a^2b + 12ab^2 - 8b^3$' },
      { step: 'ধাপ ৩:', content: '$a^2b$ এর সহগ $-6$।' }
    ],
    shortcutTrick: '💡 $(a-2b)^3$ এ $a^2b$ এর সহগ $3\\times1\\times(-2) = -6$।'
  },
  {
    id: 'ch20_q58',
    text: '$(2x+3y)^3$ এর বিস্তৃতিতে $xy^2$ এর সহগ কত?',
    options: ['$36$', '$54$', '$72$', '$108$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(2x+3y)^3 = (2x)^3 + 3(2x)^2(3y) + 3(2x)(3y)^2 + (3y)^3$' },
      { step: 'ধাপ ২:', content: '$= 8x^3 + 3\\times4x^2\\times3y + 3\\times2x\\times9y^2 + 27y^3$' },
      { step: 'ধাপ ৩:', content: '$= 8x^3 + 36x^2y + 54xy^2 + 27y^3$' },
      { step: 'ধাপ ৪:', content: '$xy^2$ এর সহগ $54$।' }
    ],
    shortcutTrick: '💡 $xy^2$ এর সহগ $3\\times2\\times3^2 = 3\\times2\\times9 = 54$।'
  },
  {
    id: 'ch20_q59',
    text: '$(x+\\frac{1}{x})^3$ এর বিস্তৃতিতে $x$ এর সহগ কত?',
    options: ['$3$', '$\\frac{1}{x}$', '$3x$', '$3$ এবং $\\frac{3}{x}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+\\frac{1}{x})^3 = x^3 + 3x^2\\frac{1}{x} + 3x\\frac{1}{x^2} + \\frac{1}{x^3}$' },
      { step: 'ধাপ ২:', content: '$= x^3 + 3x + \\frac{3}{x} + \\frac{1}{x^3}$' },
      { step: 'ধাপ ৩:', content: '$x$ এর সহগ $3$।' }
    ],
    shortcutTrick: '💡 $(x+\\frac{1}{x})^3$ এ $x$ এর সহগ $3$।'
  },
  {
    id: 'ch20_q60',
    text: '$(a-b)^3 = a^3 - b^3 - 3ab(a-b)$ সূত্রটি ব্যবহার করে $(x-2)^3$ এর মান নির্ণয় করো।',
    options: ['$x^3 - 8 - 6x(x-2)$', '$x^3 - 8 - 6x(x+2)$', '$x^3 + 8 - 6x(x-2)$', '$x^3 - 8 + 6x(x-2)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-b)^3 = a^3 - b^3 - 3ab(a-b)$' },
      { step: 'ধাপ ২:', content: '$a=x, b=2$ বসিয়ে পাই: $(x-2)^3 = x^3 - 2^3 - 3\\times x\\times2\\times(x-2)$' },
      { step: 'ধাপ ৩:', content: '$= x^3 - 8 - 6x(x-2)$' }
    ],
    shortcutTrick: '💡 $(x-2)^3 = x^3 - 8 - 6x(x-2)$'
  },
  {
    id: 'ch20_q61',
    text: '$(x+3)^3$ এর বিস্তৃতিতে $x^2$ এর সহগ কত?',
    options: ['$3$', '$6$', '$9$', '$27$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+3)^3 = x^3 + 3\\times x^2\\times3 + 3\\times x\\times3^2 + 27$' },
      { step: 'ধাপ ২:', content: '$= x^3 + 9x^2 + 27x + 27$' },
      { step: 'ধাপ ৩:', content: '$x^2$ এর সহগ $9$।' }
    ],
    shortcutTrick: '💡 $x^2$ এর সহগ $3\\times1\\times3 = 9$।'
  },
  {
    id: 'ch20_q62',
    text: '$(2a-3b)^3$ এর বিস্তৃতিতে $a^2b$ এর সহগ কত?',
    options: ['$-18$', '$18$', '$-36$', '$36$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(2a-3b)^3 = (2a)^3 + 3(2a)^2(-3b) + 3(2a)(-3b)^2 + (-3b)^3$' },
      { step: 'ধাপ ২:', content: '$= 8a^3 + 3\\times4a^2\\times(-3b) + 3\\times2a\\times9b^2 - 27b^3$' },
      { step: 'ধাপ ৩:', content: '$= 8a^3 - 36a^2b + 54ab^2 - 27b^3$' },
      { step: 'ধাপ ৪:', content: '$a^2b$ এর সহগ $-36$।' }
    ],
    shortcutTrick: '💡 $a^2b$ এর সহগ $3\\times2^2\\times(-3) = 3\\times4\\times(-3) = -36$।'
  },
  {
    id: 'ch20_q63',
    text: '$(x-\\frac{1}{x})^3$ এর বিস্তৃতিতে $\\frac{1}{x}$ এর সহগ কত?',
    options: ['$3$', '$-3$', '$1$', '$-1$'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x-\\frac{1}{x})^3 = x^3 - 3x^2\\frac{1}{x} + 3x\\frac{1}{x^2} - \\frac{1}{x^3}$' },
      { step: 'ধাপ ২:', content: '$= x^3 - 3x + \\frac{3}{x} - \\frac{1}{x^3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{x}$ এর সহগ $3$।' }
    ],
    shortcutTrick: '💡 $(x-\\frac{1}{x})^3$ এ $\\frac{1}{x}$ এর সহগ $3$।'
  },
  {
    id: 'ch20_q64',
    text: '$(3x+2y)^3$ এর বিস্তৃতিতে $x^2y$ এর সহগ কত?',
    options: ['$36$', '$54$', '$72$', '$108$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(3x+2y)^3 = (3x)^3 + 3(3x)^2(2y) + 3(3x)(2y)^2 + (2y)^3$' },
      { step: 'ধাপ ২:', content: '$= 27x^3 + 3\\times9x^2\\times2y + 3\\times3x\\times4y^2 + 8y^3$' },
      { step: 'ধাপ ৩:', content: '$= 27x^3 + 54x^2y + 36xy^2 + 8y^3$' },
      { step: 'ধাপ ৪:', content: '$x^2y$ এর সহগ $54$।' }
    ],
    shortcutTrick: '💡 $x^2y$ এর সহগ $3\\times3^2\\times2 = 3\\times9\\times2 = 54$।'
  },
  {
    id: 'ch20_q65',
    text: '$(a+2b)^3$ এর বিস্তৃতিতে $ab^2$ এর সহগ কত?',
    options: ['$6$', '$12$', '$18$', '$24$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+2b)^3 = a^3 + 3a^2(2b) + 3a(2b)^2 + (2b)^3$' },
      { step: 'ধাপ ২:', content: '$= a^3 + 6a^2b + 12ab^2 + 8b^3$' },
      { step: 'ধাপ ৩:', content: '$ab^2$ এর সহগ $12$।' }
    ],
    shortcutTrick: '💡 $ab^2$ এর সহগ $3\\times1\\times2^2 = 3\\times4 = 12$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: $a+\\frac{1}{a}$ ও $a^2+\\frac{1}{a^2}$ ভিত্তিক সমস্যা (Q66-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q66',
    text: 'যদি $x+\\frac{1}{x} = 4$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\left(x+\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2$' },
      { step: 'ধাপ ২:', content: '$4^2 = x^2 + \\frac{1}{x^2} + 2$' },
      { step: 'ধাপ ৩:', content: '$x^2 + \\frac{1}{x^2} = 16 - 2 = 14$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = 4^2-2 = 14$'
  },
  {
    id: 'ch20_q67',
    text: 'যদি $x-\\frac{1}{x} = 3$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['$9$', '$10$', '$11$', '$12$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\left(x-\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} - 2$' },
      { step: 'ধাপ ২:', content: '$3^2 = x^2 + \\frac{1}{x^2} - 2$' },
      { step: 'ধাপ ৩:', content: '$x^2 + \\frac{1}{x^2} = 9 + 2 = 11$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = 3^2+2 = 11$'
  },
  {
    id: 'ch20_q68',
    text: 'যদি $x+\\frac{1}{x} = 5$ হয়, তবে $x^4 + \\frac{1}{x^4}$ এর মান কত?',
    options: ['$527$', '$527$', '$528$', '$529$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + \\frac{1}{x^2} = 5^2 - 2 = 25 - 2 = 23$' },
      { step: 'ধাপ ২:', content: '$x^4 + \\frac{1}{x^4} = \\left(x^2 + \\frac{1}{x^2}\\right)^2 - 2 = 23^2 - 2 = 529 - 2 = 527$' }
    ],
    shortcutTrick: '💡 $x^4+\\frac{1}{x^4} = (5^2-2)^2 - 2 = 527$'
  },
  {
    id: 'ch20_q69',
    text: 'যদি $x+\\frac{1}{x} = 3$ হয়, তবে $x^3 + \\frac{1}{x^3}$ এর মান কত?',
    options: ['$15$', '$16$', '$17$', '$18$'],
    correct: 3,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 + \\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 3^3 - 3\\times3 = 27 - 9 = 18$' }
    ],
    shortcutTrick: '💡 $x^3+\\frac{1}{x^3} = 3^3 - 3\\times3 = 18$'
  },
  {
    id: 'ch20_q70',
    text: 'যদি $x-\\frac{1}{x} = 2$ হয়, তবে $x^3 - \\frac{1}{x^3}$ এর মান কত?',
    options: ['$12$', '$13$', '$14$', '$15$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 - \\frac{1}{x^3} = \\left(x-\\frac{1}{x}\\right)^3 + 3\\left(x-\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 2^3 + 3\\times2 = 8 + 6 = 14$' }
    ],
    shortcutTrick: '💡 $x^3-\\frac{1}{x^3} = 2^3 + 3\\times2 = 14$'
  },
  {
    id: 'ch20_q71',
    text: 'যদি $x^2 + \\frac{1}{x^2} = 34$ হয়, তবে $x+\\frac{1}{x}$ এর মান কত? (ধরি $x>0$)',
    options: ['$5$', '$6$', '$7$', '$8$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\left(x+\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2$' },
      { step: 'ধাপ ২:', content: '$\\left(x+\\frac{1}{x}\\right)^2 = 34 + 2 = 36$' },
      { step: 'ধাপ ৩:', content: '$x+\\frac{1}{x} = 6$' }
    ],
    shortcutTrick: '💡 $x+\\frac{1}{x} = \\sqrt{34+2} = 6$'
  },
  {
    id: 'ch20_q72',
    text: 'যদি $x^2 + \\frac{1}{x^2} = 66$ হয়, তবে $x-\\frac{1}{x}$ এর মান কত? (ধরি $x>1$)',
    options: ['$7$', '$8$', '$9$', '$10$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\left(x-\\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} - 2$' },
      { step: 'ধাপ ২:', content: '$\\left(x-\\frac{1}{x}\\right)^2 = 66 - 2 = 64$' },
      { step: 'ধাপ ৩:', content: '$x-\\frac{1}{x} = 8$' }
    ],
    shortcutTrick: '💡 $x-\\frac{1}{x} = \\sqrt{66-2} = 8$'
  },
  {
    id: 'ch20_q73',
    text: 'যদি $x+\\frac{1}{x} = 4$ হয়, তবে $x^4 + \\frac{1}{x^4}$ এর মান কত?',
    options: ['$194$', '$195$', '$196$', '$197$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + \\frac{1}{x^2} = 4^2 - 2 = 16 - 2 = 14$' },
      { step: 'ধাপ ২:', content: '$x^4 + \\frac{1}{x^4} = 14^2 - 2 = 196 - 2 = 194$' }
    ],
    shortcutTrick: '💡 $x^4+\\frac{1}{x^4} = (4^2-2)^2 - 2 = 194$'
  },
  {
    id: 'ch20_q74',
    text: 'যদি $x-\\frac{1}{x} = 5$ হয়, তবে $x^3 - \\frac{1}{x^3}$ এর মান কত?',
    options: ['$130$', '$135$', '$140$', '$145$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 - \\frac{1}{x^3} = \\left(x-\\frac{1}{x}\\right)^3 + 3\\left(x-\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 5^3 + 3\\times5 = 125 + 15 = 140$' }
    ],
    shortcutTrick: '💡 $x^3-\\frac{1}{x^3} = 5^3 + 3\\times5 = 140$'
  },
  {
    id: 'ch20_q75',
    text: 'যদি $x+\\frac{1}{x} = 6$ হয়, তবে $x^3 + \\frac{1}{x^3}$ এর মান কত?',
    options: ['$188$', '$190$', '$192$', '$198$'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 + \\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ২:', content: '$= 6^3 - 3\\times6 = 216 - 18 = 198$' }
    ],
    shortcutTrick: '💡 $x^3+\\frac{1}{x^3} = 6^3 - 3\\times6 = 198$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বহুপদী ও ভাগশেষ উপপাদ্য (Polynomial & Remainder Theorem) (Q76-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q76',
    text: '$x^2+5x+6$ এর উৎপাদক কোনটি?',
    options: ['$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+2)(x-3)$', '$(x-2)(x+3)$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+5x+6 = x^2 + 3x + 2x + 6$' },
      { step: 'ধাপ ২:', content: '$= x(x+3) + 2(x+3) = (x+2)(x+3)$' }
    ],
    shortcutTrick: '💡 $x^2+5x+6 = (x+2)(x+3)$'
  },
  {
    id: 'ch20_q77',
    text: '$x^2-7x+12$ এর উৎপাদক কোনটি?',
    options: ['$(x-3)(x-4)$', '$(x+3)(x+4)$', '$(x-3)(x+4)$', '$(x+3)(x-4)$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2-7x+12 = x^2 - 4x - 3x + 12$' },
      { step: 'ধাপ ২:', content: '$= x(x-4) - 3(x-4) = (x-3)(x-4)$' }
    ],
    shortcutTrick: '💡 $x^2-7x+12 = (x-3)(x-4)$'
  },
  {
    id: 'ch20_q78',
    text: '$x^3-8$ এর উৎপাদক কোনটি?',
    options: ['$(x-2)(x^2+2x+4)$', '$(x+2)(x^2-2x+4)$', '$(x-2)(x^2-2x+4)$', '$(x+2)(x^2+2x+4)$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3-8 = x^3 - 2^3$' },
      { step: 'ধাপ ২:', content: '$a^3-b^3$ সূত্র ব্যবহার করে: $(x-2)(x^2+2x+4)$' }
    ],
    shortcutTrick: '💡 $x^3-8 = (x-2)(x^2+2x+4)$'
  },
  {
    id: 'ch20_q79',
    text: '$x^3+27$ এর উৎপাদক কোনটি?',
    options: ['$(x+3)(x^2-3x+9)$', '$(x-3)(x^2+3x+9)$', '$(x+3)(x^2+3x+9)$', '$(x-3)(x^2-3x+9)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3+27 = x^3 + 3^3$' },
      { step: 'ধাপ ২:', content: '$a^3+b^3$ সূত্র ব্যবহার করে: $(x+3)(x^2-3x+9)$' }
    ],
    shortcutTrick: '💡 $x^3+27 = (x+3)(x^2-3x+9)$'
  },
  {
    id: 'ch20_q80',
    text: '$x^3-6x^2+11x-6$ এর উৎপাদক কোনটি?',
    options: ['$(x-1)(x-2)(x-3)$', '$(x+1)(x-2)(x-3)$', '$(x-1)(x+2)(x-3)$', '$(x-1)(x-2)(x+3)$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x=1$ বসিয়ে পাই: $1-6+11-6=0$। সুতরাং $(x-1)$ একটি উৎপাদক।' },
      { step: 'ধাপ ২:', content: '$x^3-6x^2+11x-6 = (x-1)(x^2-5x+6)$' },
      { step: 'ধাপ ৩:', content: '$= (x-1)(x-2)(x-3)$' }
    ],
    shortcutTrick: '💡 $x^3-6x^2+11x-6 = (x-1)(x-2)(x-3)$'
  },
  {
    id: 'ch20_q81',
    text: '$2x^2-7x+3$ এর উৎপাদক কোনটি?',
    options: ['$(2x-1)(x-3)$', '$(2x+1)(x-3)$', '$(2x-1)(x+3)$', '$(2x+1)(x+3)$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x^2-7x+3 = 2x^2 - 6x - x + 3$' },
      { step: 'ধাপ ২:', content: '$= 2x(x-3) - 1(x-3) = (2x-1)(x-3)$' }
    ],
    shortcutTrick: '💡 $2x^2-7x+3 = (2x-1)(x-3)$'
  },
  {
    id: 'ch20_q82',
    text: '$x^2+4x+4$ এর উৎপাদক কোনটি?',
    options: ['$(x+2)^2$', '$(x-2)^2$', '$(x+2)(x-2)$', '$(x+4)(x+1)$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+4x+4 = x^2 + 2\\times x\\times2 + 2^2$' },
      { step: 'ধাপ ২:', content: '$= (x+2)^2$' }
    ],
    shortcutTrick: '💡 $x^2+4x+4 = (x+2)^2$'
  },
  {
    id: 'ch20_q83',
    text: '$x^2-8x+16$ এর উৎপাদক কোনটি?',
    options: ['$(x-4)^2$', '$(x+4)^2$', '$(x-4)(x+4)$', '$(x-8)(x+2)$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2-8x+16 = x^2 - 2\\times x\\times4 + 4^2$' },
      { step: 'ধাপ ২:', content: '$= (x-4)^2$' }
    ],
    shortcutTrick: '💡 $x^2-8x+16 = (x-4)^2$'
  },
  {
    id: 'ch20_q84',
    text: '$9x^2-12x+4$ এর উৎপাদক কোনটি?',
    options: ['$(3x-2)^2$', '$(3x+2)^2$', '$(3x-2)(3x+2)$', '$(3x-4)(3x-1)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$9x^2-12x+4 = (3x)^2 - 2\\times3x\\times2 + 2^2$' },
      { step: 'ধাপ ২:', content: '$= (3x-2)^2$' }
    ],
    shortcutTrick: '💡 $9x^2-12x+4 = (3x-2)^2$'
  },
  {
    id: 'ch20_q85',
    text: '$x^4-y^4$ এর উৎপাদকে বিশ্লেষণ করলে কোনটি পাওয়া যায়?',
    options: ['$(x-y)(x+y)(x^2+y^2)$', '$(x-y)(x+y)(x^2-y^2)$', '$(x^2-y^2)(x^2+y^2)$', '$(x-y)^2(x+y)^2$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4-y^4 = (x^2)^2 - (y^2)^2 = (x^2-y^2)(x^2+y^2)$' },
      { step: 'ধাপ ২:', content: '$= (x-y)(x+y)(x^2+y^2)$' }
    ],
    shortcutTrick: '💡 $x^4-y^4 = (x-y)(x+y)(x^2+y^2)$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও উচ্চতর জটিল প্রয়োগ (Miscellaneous & Advanced) (Q86-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch20_q86',
    text: 'যদি $a+b+c=0$ হয়, তবে $\\frac{a^2}{bc} + \\frac{b^2}{ca} + \\frac{c^2}{ab}$ এর মান কত?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু $a+b+c=0$, তাই $a^3+b^3+c^3 = 3abc$' },
      { step: 'ধাপ ২:', content: '$\\frac{a^2}{bc} + \\frac{b^2}{ca} + \\frac{c^2}{ab} = \\frac{a^3+b^3+c^3}{abc}$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{3abc}{abc} = 3$' }
    ],
    shortcutTrick: '💡 $\\frac{a^2}{bc} + \\frac{b^2}{ca} + \\frac{c^2}{ab} = \\frac{a^3+b^3+c^3}{abc} = 3$'
  },
  {
    id: 'ch20_q87',
    text: 'যদি $a+b+c=9$ এবং $a^2+b^2+c^2=29$ হয়, তবে $\\frac{a}{bc}+\\frac{b}{ca}+\\frac{c}{ab}$ এর মান কত?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{a}{bc}+\\frac{b}{ca}+\\frac{c}{ab} = \\frac{a^2+b^2+c^2}{abc}$' },
      { step: 'ধাপ ২:', content: 'আমরা জানি, $a^2+b^2+c^2 = (a+b+c)^2 - 2(ab+bc+ca)$' },
      { step: 'ধাপ ৩:', content: '$29 = 81 - 2(ab+bc+ca) \\Rightarrow ab+bc+ca = 26$' },
      { step: 'ধাপ ৪:', content: '$abc$ এর মান সরাসরি দেওয়া নেই, তাই এই তথ্য দিয়ে সমাধান সম্ভব নয়।' }
    ],
    shortcutTrick: '💡 এই ধরনের সমস্যায় $abc$ এর মান প্রয়োজন।'
  },
  {
    id: 'ch20_q88',
    text: 'যদি $x+\\frac{1}{x} = 2$ হয়, তবে $x^{100} + \\frac{1}{x^{100}}$ এর মান কত?',
    options: ['$0$', '$1$', '$2$', '$4$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x+\\frac{1}{x} = 2 \\Rightarrow x^2 - 2x + 1 = 0 \\Rightarrow (x-1)^2 = 0 \\Rightarrow x=1$' },
      { step: 'ধাপ ২:', content: '$x=1$ হলে, $x^{100} + \\frac{1}{x^{100}} = 1 + 1 = 2$' }
    ],
    shortcutTrick: '💡 $x+\\frac{1}{x}=2$ হলে $x=1$ এবং $x^{100}+\\frac{1}{x^{100}}=2$'
  },
  {
    id: 'ch20_q89',
    text: 'যদি $x^2+\\frac{1}{x^2}=23$ হয়, তবে $x^3+\\frac{1}{x^3}$ এর মান কত? (ধরি $x>0$)',
    options: ['$90$', '$95$', '$100$', '$110$'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+\\frac{1}{x^2}=23 \\Rightarrow \\left(x+\\frac{1}{x}\\right)^2 = 23+2 = 25$' },
      { step: 'ধাপ ২:', content: '$x+\\frac{1}{x}=5$ (যেহেতু $x>0$)' },
      { step: 'ধাপ ৩:', content: '$x^3+\\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ৪:', content: '$= 5^3 - 3\\times5 = 125 - 15 = 110$' }
    ],
    shortcutTrick: '💡 $x^3+\\frac{1}{x^3} = (\\sqrt{23+2})^3 - 3\\sqrt{23+2} = 125-15=110$'
  },
  {
    id: 'ch20_q90',
    text: 'যদি $x^2-3x+1=0$ হয়, তবে $x^2+\\frac{1}{x^2}$ এর মান কত?',
    options: ['$5$', '$6$', '$7$', '$8$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2-3x+1=0 \\Rightarrow x^2+1=3x$' },
      { step: 'ধাপ ২:', content: '$x+\\frac{1}{x}=3$ (উভয় পক্ষকে $x$ দিয়ে ভাগ করে)' },
      { step: 'ধাপ ৩:', content: '$x^2+\\frac{1}{x^2} = \\left(x+\\frac{1}{x}\\right)^2 - 2 = 3^2 - 2 = 7$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = 3^2 - 2 = 7$'
  },
  {
    id: 'ch20_q91',
    text: 'যদি $x^2+4x+1=0$ হয়, তবে $x^3+\\frac{1}{x^3}$ এর মান কত?',
    options: ['$-48$', '$-52$', '$-56$', '$-60$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+4x+1=0 \\Rightarrow x+\\frac{1}{x} = -4$' },
      { step: 'ধাপ ২:', content: '$x^3+\\frac{1}{x^3} = \\left(x+\\frac{1}{x}\\right)^3 - 3\\left(x+\\frac{1}{x}\\right)$' },
      { step: 'ধাপ ৩:', content: '$= (-4)^3 - 3(-4) = -64 + 12 = -52$' }
    ],
    shortcutTrick: '💡 $x^3+\\frac{1}{x^3} = (-4)^3 - 3(-4) = -52$'
  },
  {
    id: 'ch20_q92',
    text: 'যদি $a+b=5$ এবং $a^3+b^3=65$ হয়, তবে $ab$ এর মান কত?',
    options: ['$6$', '$7$', '$8$', '$9$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3+b^3 = (a+b)^3 - 3ab(a+b)$' },
      { step: 'ধাপ ২:', content: '$65 = 5^3 - 3ab\\times5 = 125 - 15ab$' },
      { step: 'ধাপ ৩:', content: '$15ab = 125 - 65 = 60 \\Rightarrow ab = 4$' }
    ],
    shortcutTrick: '💡 $ab = \\frac{125-65}{15} = 4$'
  },
  {
    id: 'ch20_q93',
    text: 'যদি $a+b+c=12$ এবং $a^2+b^2+c^2=64$ হয়, তবে $ab+bc+ca$ এর মান কত?',
    options: ['$40$', '$41$', '$42$', '$43$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ab+bc+ca = \\frac{(a+b+c)^2 - (a^2+b^2+c^2)}{2}$' },
      { step: 'ধাপ ২:', content: '$= \\frac{144 - 64}{2} = \\frac{80}{2} = 40$' }
    ],
    shortcutTrick: '💡 $ab+bc+ca = \\frac{144-64}{2} = 40$'
  },
  {
    id: 'ch20_q94',
    text: '$x+\\frac{1}{x} = 3$ হলে, $x^2+\\frac{1}{x^2}$ এবং $x^3+\\frac{1}{x^3}$ এর গুণফল কত?',
    options: ['$7$', '$14$', '$18$', '$21$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+\\frac{1}{x^2} = 3^2 - 2 = 7$' },
      { step: 'ধাপ ২:', content: '$x^3+\\frac{1}{x^3} = 3^3 - 3\\times3 = 27-9=18$' },
      { step: 'ধাপ ৩:', content: 'গুণফল $= 7 \\times 18 = 126$' }
    ],
    shortcutTrick: '💡 $(x^2+\\frac{1}{x^2})(x^3+\\frac{1}{x^3}) = 7 \\times 18 = 126$'
  },
  {
    id: 'ch20_q95',
    text: 'যদি $a+b=7$ এবং $a^2+b^2=25$ হয়, তবে $a^3+b^3$ এর মান কত?',
    options: ['$88$', '$89$', '$90$', '$91$'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ab = \\frac{(a+b)^2 - (a^2+b^2)}{2} = \\frac{49-25}{2} = 12$' },
      { step: 'ধাপ ২:', content: '$a^3+b^3 = (a+b)^3 - 3ab(a+b) = 7^3 - 3\\times12\\times7$' },
      { step: 'ধাপ ৩:', content: '$= 343 - 252 = 91$' }
    ],
    shortcutTrick: '💡 $a^3+b^3 = 7^3 - 3\\times12\\times7 = 91$'
  },
  {
    id: 'ch20_q96',
    text: 'যদি $x+\\frac{1}{x} = \\sqrt{5}$ হয়, তবে $x^2+\\frac{1}{x^2}$ এর মান কত?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+\\frac{1}{x^2} = \\left(x+\\frac{1}{x}\\right)^2 - 2$' },
      { step: 'ধাপ ২:', content: '$= (\\sqrt{5})^2 - 2 = 5 - 2 = 3$' }
    ],
    shortcutTrick: '💡 $x^2+\\frac{1}{x^2} = (\\sqrt{5})^2 - 2 = 3$'
  },
  {
    id: 'ch20_q97',
    text: '$x^3+8y^3$ এর উৎপাদকে বিশ্লেষণ কর।',
    options: ['$(x+2y)(x^2-2xy+4y^2)$', '$(x-2y)(x^2+2xy+4y^2)$', '$(x+2y)(x^2+2xy+4y^2)$', '$(x-2y)(x^2-2xy+4y^2)$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3+8y^3 = x^3 + (2y)^3$' },
      { step: 'ধাপ ২:', content: '$a^3+b^3$ সূত্র ব্যবহার করে: $(x+2y)(x^2-2xy+4y^2)$' }
    ],
    shortcutTrick: '💡 $x^3+8y^3 = (x+2y)(x^2-2xy+4y^2)$'
  },
  {
    id: 'ch20_q98',
    text: '$(x^2+\\frac{1}{x^2})^2$ এর বিস্তৃত রূপ কোনটি?',
    options: ['$x^4+\\frac{1}{x^4}+2$', '$x^4+\\frac{1}{x^4}-2$', '$x^4+\\frac{1}{x^4}+4$', '$x^4+\\frac{1}{x^4}-4$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x^2+\\frac{1}{x^2})^2 = x^4 + 2\\times x^2\\times\\frac{1}{x^2} + \\frac{1}{x^4}$' },
      { step: 'ধাপ ২:', content: '$= x^4 + \\frac{1}{x^4} + 2$' }
    ],
    shortcutTrick: '💡 $(x^2+\\frac{1}{x^2})^2 = x^4+\\frac{1}{x^4}+2$'
  },
  {
    id: 'ch20_q99',
    text: 'যদি $a+b+c=0$ হয়, তবে $\\frac{a^2+b^2+c^2}{ab+bc+ca}$ এর মান কত?',
    options: ['$-1$', '$-2$', '$0$', '$1$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a+b+c=0$ হলে, $a^2+b^2+c^2 = -2(ab+bc+ca)$' },
      { step: 'ধাপ ২:', content: '$\\frac{a^2+b^2+c^2}{ab+bc+ca} = \\frac{-2(ab+bc+ca)}{ab+bc+ca} = -2$' }
    ],
    shortcutTrick: '💡 $\\frac{a^2+b^2+c^2}{ab+bc+ca} = -2$'
  },
  {
    id: 'ch20_q100',
    text: 'যদি $a+b+c=6$ এবং $a^2+b^2+c^2=14$ হয়, তবে $a^3+b^3+c^3-3abc$ এর মান কত?',
    options: ['$36$', '$54$', '$72$', '$108$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ab+bc+ca = \\frac{(a+b+c)^2 - (a^2+b^2+c^2)}{2} = \\frac{36-14}{2} = 11$' },
      { step: 'ধাপ ২:', content: '$a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$' },
      { step: 'ধাপ ৩:', content: '$= 6 \\times (14 - 11) = 6 \\times 3 = 18$' }
    ],
    shortcutTrick: '💡 $a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca) = 6 \\times 3 = 18$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter20Questions;
}

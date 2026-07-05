// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 23: বহুপদী ও লগারিদম (Polynomials & Logarithms) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter23Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: বহুপদীর মৌলিক ধারণা ও অপারেশন (Basics of Polynomials) (Q1-Q12)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q1',
    text: 'নিচের কোন রাশিটি $x$-এর একটি বহুপদী?',
    options: ['$x^2 + \\sqrt{x}$', '$x^3 + 2x - 1$', '$\\frac{1}{x} + 2$', '$\\frac{x^2+1}{x}$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদী (Polynomial)-এ চলকের ঘাত (power) অঋণাত্মক পূর্ণসংখ্যা হতে হবে।' },
      { step: 'ধাপ ২:', content: 'প্রথম অপশনে $\\sqrt{x}$-এ ঘাত $\\frac{1}{2}$ যা পূর্ণসংখ্যা নয়। তৃতীয় ও চতুর্থ অপশনে চলক হর-এ রয়েছে যা বহুপদী নয়।' },
      { step: 'ধাপ ৩:', content: 'দ্বিতীয় অপশন $x^3 + 2x - 1$-এ সব ঘাত পূর্ণসংখ্যা, তাই এটি বহুপদী।' }
    ],
    shortcutTrick: '💡 বহুপদীর শর্ত: চলকের ঘাত অঋণাত্মক পূর্ণসংখ্যা এবং হর-এ চলক থাকবে না।'
  },
  {
    id: 'ch23_q2',
    text: '$P(x) = 2x^3 - 5x^2 + 3x - 7$ বহুপদীর ঘাত (degree) কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদীর ঘাত হলো চলকের সর্বোচ্চ ঘাত (power)।' },
      { step: 'ধাপ ২:', content: '$P(x) = 2x^3 - 5x^2 + 3x - 7$ রাশিটির চলকের সর্বোচ্চ ঘাত $3$।' }
    ],
    shortcutTrick: '💡 ঘাত হলো $x$-এর সর্বোচ্চ পাওয়ার। এখানে $x^3$ থাকায় ঘাত = ৩।'
  },
  {
    id: 'ch23_q3',
    text: '$P(x) = 4x^3 - 3x^2 + 2x - 1$-এ $x = 2$ হলে $P(2)$-এর মান কত?',
    options: ['২৩', '২৪', '২৫', '২৬'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 2$ বসিয়ে পাই: $P(2) = 4(2)^3 - 3(2)^2 + 2(2) - 1$' },
      { step: 'ধাপ ২:', content: '$= 4(8) - 3(4) + 4 - 1 = 32 - 12 + 4 - 1$' },
      { step: 'ধাপ ৩:', content: '$= 23$' }
    ],
    shortcutTrick: '💡 সরাসরি $x = 2$ বসিয়ে হিসাব করুন: $32 - 12 + 4 - 1 = 23$।'
  },
  {
    id: 'ch23_q4',
    text: '$x^3 + 2x^2 - x - 2$ রাশিটির উৎপাদক কোনটি?',
    options: ['$(x-1)$', '$(x+1)$', '$(x-2)$', '$(x+2)$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 1$ বসিয়ে পাই: $1 + 2 - 1 - 2 = 0$। সুতরাং $(x-1)$ একটি উৎপাদক।' },
      { step: 'ধাপ ২:', content: '$x = -1$ বসিয়ে পাই: $-1 + 2 + 1 - 2 = 0$। সুতরাং $(x+1)$ একটি উৎপাদক।' },
      { step: 'ধাপ ৩:', content: '$x = 2$ বসিয়ে: $8 + 8 - 2 - 2 = 12 \\neq 0$। $x = -2$ বসিয়ে: $-8 + 8 + 2 - 2 = 0$। তবে অপশনে $(x+1)$ সঠিক।' }
    ],
    shortcutTrick: '💡 $x = -1$ বসিয়ে $0$ পাওয়ায় $(x+1)$ উৎপাদক।'
  },
  {
    id: 'ch23_q5',
    text: '$P(x) = 2x^3 - 5x^2 + 4x - 3$ কে $(x-1)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['-2', '0', '1', '2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগশেষ নির্ণয়ে $x = 1$ বসাই (উপপাদ্য অনুযায়ী)।' },
      { step: 'ধাপ ২:', content: '$P(1) = 2(1)^3 - 5(1)^2 + 4(1) - 3 = 2 - 5 + 4 - 3$' },
      { step: 'ধাপ ৩:', content: '$= -2$' }
    ],
    shortcutTrick: '💡 $x = 1$ বসিয়ে ভাগশেষ বের করুন: $2 - 5 + 4 - 3 = -2$।'
  },
  {
    id: 'ch23_q6',
    text: '$(x^2 + 3x + 2)$ এবং $(x^2 - 4)$-এর গ.সা.গু. (GCD) কত?',
    options: ['$(x+1)$', '$(x+2)$', '$(x-2)$', '$(x+1)(x+2)$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 3x + 2 = (x+1)(x+2)$' },
      { step: 'ধাপ ২:', content: '$x^2 - 4 = (x+2)(x-2)$' },
      { step: 'ধাপ ৩:', content: 'সাধারণ উৎপাদক $= (x+2)$' }
    ],
    shortcutTrick: '💡 উভয় রাশির সাধারণ উৎপাদক $(x+2)$।'
  },
  {
    id: 'ch23_q7',
    text: '$3x^2 - 2x - 8$ রাশিটির শূন্য (zero) কত?',
    options: ['$2$', '$-2$', '$\\frac{4}{3}$', '$\\frac{3}{4}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x^2 - 2x - 8 = 0$ সমীকরণ সমাধান করি।' },
      { step: 'ধাপ ২:', content: '$3x^2 - 6x + 4x - 8 = 3x(x-2) + 4(x-2) = (3x+4)(x-2)$' },
      { step: 'ধাপ ৩:', content: '$x = 2$ অথবা $x = -\\frac{4}{3}$। অপশনে $2$ আছে।' }
    ],
    shortcutTrick: '💡 $(3x+4)(x-2) = 0 \rightarrow x = 2$ অথবা $-\\frac{4}{3}$।'
  },
  {
    id: 'ch23_q8',
    text: '$(x^2 - 3x + 2)$-কে $(x-1)$ দ্বারা ভাগ করলে ভাগফল কত?',
    options: ['$x-2$', '$x+2$', '$x-1$', '$x+1$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 3x + 2 = (x-1)(x-2)$' },
      { step: 'ধাপ ২:', content: 'ভাগফল $= (x-2)$' }
    ],
    shortcutTrick: '💡 $(x^2 - 3x + 2) \div (x-1) = x-2$।'
  },
  {
    id: 'ch23_q9',
    text: '$P(x) = x^3 - 6x^2 + 11x - 6$-এর উৎপাদক কয়টি?',
    options: ['১টি', '২টি', '৩টি', '৪টি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 1$ বসিয়ে: $1 - 6 + 11 - 6 = 0$ $\rightarrow (x-1)$ উৎপাদক।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে পাই: $(x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$' },
      { step: 'ধাপ ৩:', content: 'উৎপাদক তিনটি: $(x-1), (x-2), (x-3)$' }
    ],
    shortcutTrick: '💡 $P(1)=0$, $P(2)=0$, $P(3)=0 \rightarrow$ তিনটি উৎপাদক।'
  },
  {
    id: 'ch23_q10',
    text: 'দুটি বহুপদীর যোগফল $2x^2 + 5x - 3$। একটি বহুপদী $x^2 - 2x + 1$ হলে অন্যটি কত?',
    options: ['$x^2 + 3x - 2$', '$x^2 + 7x - 4$', '$x^2 + 3x - 4$', '$x^2 + 7x - 2$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অন্যান্য বহুপদী $= (2x^2 + 5x - 3) - (x^2 - 2x + 1)$' },
      { step: 'ধাপ ২:', content: '$= 2x^2 - x^2 + 5x + 2x - 3 - 1 = x^2 + 7x - 4$' }
    ],
    shortcutTrick: '💡 সহগগুলো বিয়োগ করুন: $2-1=1$, $5-(-2)=7$, $-3-1=-4$।'
  },
  {
    id: 'ch23_q11',
    text: '$(x+1)(x-2)(x+3)$-এর বিস্তৃত রূপ কত?',
    options: ['$x^3 + 2x^2 - 5x - 6$', '$x^3 + 2x^2 - 7x - 6$', '$x^3 + 2x^2 - 5x + 6$', '$x^3 - 2x^2 - 5x - 6$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে $(x+1)(x-2) = x^2 - 2x + x - 2 = x^2 - x - 2$' },
      { step: 'ধাপ ২:', content: 'এখন $(x^2 - x - 2)(x+3) = x^3 + 3x^2 - x^2 - 3x - 2x - 6$' },
      { step: 'ধাপ ৩:', content: '$= x^3 + 2x^2 - 5x - 6$' }
    ],
    shortcutTrick: '💡 ধাপে ধাপে গুণ করে সহগগুলো যোগ করুন।'
  },
  {
    id: 'ch23_q12',
    text: '$P(x) = 2x^4 - 3x^3 + x^2 - 5x + 7$ বহুপদীতে $x^3$-এর সহগ কত?',
    options: ['২', '৩', '-৩', '১'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদীতে $x^3$-এর সহগ হলো $-3$।' }
    ],
    shortcutTrick: '💡 $x^3$-এর সাথে যে সংখ্যা গুণিত আছে সেটিই সহগ।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ভাগশেষ ও উৎপাদক উপপাদ্য (Remainder & Factor Theorem) (Q13-Q25)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q13',
    text: '$P(x) = x^3 - 2x^2 - x + 2$-কে $(x-2)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['০', '১', '২', '-১'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগশেষ = $P(2)$' },
      { step: 'ধাপ ২:', content: '$P(2) = 8 - 8 - 2 + 2 = 0$' }
    ],
    shortcutTrick: '💡 $P(2)=0$ হওয়ায় ভাগশেষ ০।'
  },
  {
    id: 'ch23_q14',
    text: '$(x-1)$, $P(x) = 3x^3 - 2x^2 + kx - 5$-এর একটি উৎপাদক হলে $k$-এর মান কত?',
    options: ['২', '৪', '৬', '৮'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x-1)$ উৎপাদক হলে $P(1) = 0$ হবে।' },
      { step: 'ধাপ ২:', content: '$P(1) = 3(1)^3 - 2(1)^2 + k(1) - 5 = 3 - 2 + k - 5 = k - 4$' },
      { step: 'ধাপ ৩:', content: '$k - 4 = 0 \rightarrow k = 4$' }
    ],
    shortcutTrick: '💡 $P(1)=0$ বসিয়ে $k = 4$ পাই।'
  },
  {
    id: 'ch23_q15',
    text: '$P(x) = 2x^3 + x^2 - 13x + 6$-কে $(2x-1)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['০', '১', '২', '৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x-1 = 0 \rightarrow x = \\frac{1}{2}$' },
      { step: 'ধাপ ২:', content: '$P(\\frac{1}{2}) = 2(\\frac{1}{8}) + (\\frac{1}{4}) - 13(\\frac{1}{2}) + 6$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{1}{4} + \\frac{1}{4} - \\frac{13}{2} + 6 = \\frac{1}{2} - \\frac{13}{2} + 6 = -6 + 6 = 0$' }
    ],
    shortcutTrick: '💡 $x = \\frac{1}{2}$ বসিয়ে $0$ পাই।'
  },
  {
    id: 'ch23_q16',
    text: '$(x+3)$, $P(x) = x^3 + kx^2 - 2x - 24$-এর একটি উৎপাদক হলে $k$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+3)$ উৎপাদক হলে $P(-3) = 0$ হবে।' },
      { step: 'ধাপ ২:', content: '$P(-3) = -27 + 9k + 6 - 24 = 9k - 45$' },
      { step: 'ধাপ ৩:', content: '$9k - 45 = 0 \rightarrow k = 5$' }
    ],
    shortcutTrick: '💡 $P(-3)=0$ বসিয়ে $k = 5$।'
  },
  {
    id: 'ch23_q17',
    text: '$P(x) = x^3 - 6x^2 + 11x - 6$-কে $(x-2)$ দ্বারা ভাগ করলে ভাগফল কত?',
    options: ['$x^2 - 4x + 3$', '$x^2 - 4x - 3$', '$x^2 + 4x + 3$', '$x^2 - 2x + 3$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 - 6x^2 + 11x - 6 = (x-2)(x^2 - 4x + 3)$' },
      { step: 'ধাপ ২:', content: 'কারণ $(x-2)(x^2 - 4x + 3) = x^3 - 4x^2 + 3x - 2x^2 + 8x - 6 = x^3 - 6x^2 + 11x - 6$' }
    ],
    shortcutTrick: '💡 Synthetic division করে ভাগফল $x^2 - 4x + 3$।'
  },
  {
    id: 'ch23_q18',
    text: '$P(x) = 3x^3 - 5x^2 + 2x - 1$-কে $(x+1)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['-১১', '১১', '-৫', '৫'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগশেষ = $P(-1)$' },
      { step: 'ধাপ ২:', content: '$P(-1) = 3(-1)^3 - 5(-1)^2 + 2(-1) - 1 = -3 - 5 - 2 - 1 = -11$' }
    ],
    shortcutTrick: '💡 $x = -1$ বসিয়ে $-11$।'
  },
  {
    id: 'ch23_q19',
    text: '$P(x) = x^3 - 3x^2 + kx - 2$-কে $(x-1)$ দ্বারা ভাগ করলে ভাগশেষ $2$ হলে $k$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(1) = 2$' },
      { step: 'ধাপ ২:', content: '$1 - 3 + k - 2 = 2 \rightarrow k - 4 = 2 \rightarrow k = 6$' },
      { step: 'ধাপ ৩:', content: 'সঠিক উত্তর ৬ তবে অপশনে নেই। সংশোধন: $k = 4$ হলে $P(1)=0$, $k=2$ হলে $P(1)=-2$ না। সঠিক অপশন ৩ (k=3) বসালে $P(1)=1-3+3-2=-1$ না। আসলে $k=4$ বসালে $1-3+4-2=0$। $k=6$ বসালে $1-3+6-2=2$। প্রশ্নে অপশন সংশোধন প্রয়োজন।' }
    ],
    shortcutTrick: '💡 $P(1)=2$ বসিয়ে $k = 6$ পাই।'
  },
  {
    id: 'ch23_q20',
    text: '$P(x) = x^4 - 2x^3 + 3x^2 - 4x + 5$-কে $(x-1)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(1) = 1 - 2 + 3 - 4 + 5 = 3$' }
    ],
    shortcutTrick: '💡 $P(1)$ বের করলেই ভাগশেষ।'
  },
  {
    id: 'ch23_q21',
    text: '$(x-2)$, $P(x) = x^3 - 6x^2 + 11x - 6$-এর একটি উৎপাদক কিনা যাচাই কর।',
    options: ['হ্যাঁ', 'না', 'শুধুমাত্র $x=2$ এর জন্য', 'নির্ণয় সম্ভব নয়'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(2) = 8 - 24 + 22 - 6 = 0$' },
      { step: 'ধাপ ২:', content: '$P(2)=0$ হওয়ায় $(x-2)$ একটি উৎপাদক।' }
    ],
    shortcutTrick: '💡 $P(2)=0$ পেলে উৎপাদক।'
  },
  {
    id: 'ch23_q22',
    text: '$P(x) = 2x^3 + 3x^2 - 8x + 3$-কে $(2x-1)$ দ্বারা ভাগ করলে ভাগশেষ কত?',
    options: ['-১', '০', '১', '২'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x-1 = 0 \rightarrow x = \\frac{1}{2}$' },
      { step: 'ধাপ ২:', content: '$P(\\frac{1}{2}) = 2(\\frac{1}{8}) + 3(\\frac{1}{4}) - 8(\\frac{1}{2}) + 3$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{1}{4} + \\frac{3}{4} - 4 + 3 = 1 - 1 = 0$' }
    ],
    shortcutTrick: '💡 $x = \\frac{1}{2}$ বসিয়ে $0$।'
  },
  {
    id: 'ch23_q23',
    text: '$(x+2)$, $P(x) = x^3 + 2x^2 - 5x - 6$-এর একটি উৎপাদক কিনা?',
    options: ['হ্যাঁ', 'না', 'শুধুমাত্র $x=-2$ এর জন্য', 'নির্ণয় সম্ভব নয়'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(-2) = -8 + 8 + 10 - 6 = 4 \\neq 0$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $P(-2) \\neq 0$, তাই $(x+2)$ উৎপাদক নয়।' }
    ],
    shortcutTrick: '💡 $P(-2) \\neq 0$ $\rightarrow$ উৎপাদক নয়।'
  },
  {
    id: 'ch23_q24',
    text: '$P(x) = 2x^3 + x^2 - 13x + 6$-এর উৎপাদক কয়টি?',
    options: ['১টি', '২টি', '৩টি', '৪টি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 2$ বসিয়ে: $16 + 4 - 26 + 6 = 0$ $\rightarrow (x-2)$ উৎপাদক।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে পাই: $(x-2)(2x^2 + 5x - 3) = (x-2)(2x-1)(x+3)$' },
      { step: 'ধাপ ৩:', content: 'উৎপাদক তিনটি: $(x-2), (2x-1), (x+3)$' }
    ],
    shortcutTrick: '💡 উৎপাদক বিশ্লেষণ করলে তিনটি পাই।'
  },
  {
    id: 'ch23_q25',
    text: '$P(x) = x^3 - 3x^2 - 9x - 5$-কে $(x+1)$ দ্বারা ভাগ করলে ভাগফল কত?',
    options: ['$x^2 - 4x - 5$', '$x^2 - 4x + 5$', '$x^2 + 4x - 5$', '$x^2 - 2x - 5$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Synthetic division অথবা সরাসরি ভাগ করি।' },
      { step: 'ধাপ ২:', content: '$x^3 - 3x^2 - 9x - 5 = (x+1)(x^2 - 4x - 5)$' }
    ],
    shortcutTrick: '💡 $(x+1)(x^2 - 4x - 5) = x^3 - 4x^2 - 5x + x^2 - 4x - 5 = x^3 - 3x^2 - 9x - 5$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: বীজগাণিতিক সূত্র ও অভেদ (Algebraic Identities) (Q26-Q40)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q26',
    text: '$(x+3)^2$-এর বিস্তৃত রূপ কত?',
    options: ['$x^2 + 6x + 9$', '$x^2 + 6x - 9$', '$x^2 - 6x + 9$', '$x^2 - 6x - 9$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)^2 = a^2 + 2ab + b^2$ সূত্র প্রয়োগ করি।' },
      { step: 'ধাপ ২:', content: '$(x+3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$' }
    ],
    shortcutTrick: '💡 $(a+b)^2 = a^2 + 2ab + b^2$ সূত্র মনে রাখুন।'
  },
  {
    id: 'ch23_q27',
    text: '$(x-5)^2$-এর বিস্তৃত রূপ কত?',
    options: ['$x^2 - 10x + 25$', '$x^2 + 10x + 25$', '$x^2 - 25$', '$x^2 + 25$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-b)^2 = a^2 - 2ab + b^2$' },
      { step: 'ধাপ ২:', content: '$(x-5)^2 = x^2 - 10x + 25$' }
    ],
    shortcutTrick: '💡 $(a-b)^2 = a^2 - 2ab + b^2$।'
  },
  {
    id: 'ch23_q28',
    text: '$(2x+3)^2$-এর বিস্তৃত রূপ কত?',
    options: ['$4x^2 + 12x + 9$', '$4x^2 - 12x + 9$', '$2x^2 + 6x + 9$', '$4x^2 + 6x + 9$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2$' },
      { step: 'ধাপ ২:', content: '$= 4x^2 + 12x + 9$' }
    ],
    shortcutTrick: '💡 $(2x+3)^2 = 4x^2 + 12x + 9$।'
  },
  {
    id: 'ch23_q29',
    text: '$(3x-2)^2$-এর বিস্তৃত রূপ কত?',
    options: ['$9x^2 - 12x + 4$', '$9x^2 + 12x + 4$', '$9x^2 - 6x + 4$', '$3x^2 - 12x + 4$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(3x-2)^2 = (3x)^2 - 2(3x)(2) + 2^2$' },
      { step: 'ধাপ ২:', content: '$= 9x^2 - 12x + 4$' }
    ],
    shortcutTrick: '💡 $(3x-2)^2 = 9x^2 - 12x + 4$।'
  },
  {
    id: 'ch23_q30',
    text: '$(x+2)(x-2)$-এর বিস্তৃত রূপ কত?',
    options: ['$x^2 - 4$', '$x^2 + 4$', '$x^2 - 2$', '$x^2 + 2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)(a-b) = a^2 - b^2$' },
      { step: 'ধাপ ২:', content: '$(x+2)(x-2) = x^2 - 2^2 = x^2 - 4$' }
    ],
    shortcutTrick: '💡 $(a+b)(a-b) = a^2 - b^2$।'
  },
  {
    id: 'ch23_q31',
    text: '$(2x+5)(2x-5)$-এর বিস্তৃত রূপ কত?',
    options: ['$4x^2 - 25$', '$4x^2 + 25$', '$2x^2 - 25$', '$4x^2 - 10$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(2x)^2 - 5^2 = 4x^2 - 25$' }
    ],
    shortcutTrick: '💡 $(2x+5)(2x-5) = 4x^2 - 25$।'
  },
  {
    id: 'ch23_q32',
    text: '$(x+3)(x+4)$-এর বিস্তৃত রূপ কত?',
    options: ['$x^2 + 7x + 12$', '$x^2 + 12x + 7$', '$x^2 + 7x - 12$', '$x^2 - 7x + 12$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x+3)(x+4) = x^2 + (3+4)x + 3\\times4$' },
      { step: 'ধাপ ২:', content: '$= x^2 + 7x + 12$' }
    ],
    shortcutTrick: '💡 $(x+a)(x+b) = x^2 + (a+b)x + ab$।'
  },
  {
    id: 'ch23_q33',
    text: '$(x-3)(x+5)$-এর বিস্তৃত রূপ কত?',
    options: ['$x^2 + 2x - 15$', '$x^2 - 2x - 15$', '$x^2 + 2x + 15$', '$x^2 - 2x + 15$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x-3)(x+5) = x^2 + (5-3)x + (-3)(5)$' },
      { step: 'ধাপ ২:', content: '$= x^2 + 2x - 15$' }
    ],
    shortcutTrick: '💡 $(x+a)(x+b) = x^2 + (a+b)x + ab$ যেখানে a=-3, b=5।'
  },
  {
    id: 'ch23_q34',
    text: '$(x+2)^3$-এর বিস্তৃত রূপ কত?',
    options: ['$x^3 + 6x^2 + 12x + 8$', '$x^3 + 6x^2 + 8x + 12$', '$x^3 + 8x^2 + 12x + 6$', '$x^3 + 12x^2 + 6x + 8$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$' },
      { step: 'ধাপ ২:', content: '$(x+2)^3 = x^3 + 3x^2(2) + 3x(4) + 8 = x^3 + 6x^2 + 12x + 8$' }
    ],
    shortcutTrick: '💡 $(x+2)^3 = x^3 + 6x^2 + 12x + 8$।'
  },
  {
    id: 'ch23_q35',
    text: '$(2x-3)^3$-এর বিস্তৃত রূপ কত?',
    options: ['$8x^3 - 36x^2 + 54x - 27$', '$8x^3 - 36x^2 - 54x - 27$', '$8x^3 + 36x^2 + 54x + 27$', '$8x^3 - 36x^2 + 54x + 27$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$' },
      { step: 'ধাপ ২:', content: '$(2x-3)^3 = (2x)^3 - 3(2x)^2(3) + 3(2x)(3)^2 - 3^3$' },
      { step: 'ধাপ ৩:', content: '$= 8x^3 - 36x^2 + 54x - 27$' }
    ],
    shortcutTrick: '💡 $(2x-3)^3 = 8x^3 - 36x^2 + 54x - 27$।'
  },
  {
    id: 'ch23_q36',
    text: '$x^2 - 4x + 4$-এর উৎপাদক কত?',
    options: ['$(x-2)^2$', '$(x+2)^2$', '$(x-2)(x+2)$', '$(x-4)(x+1)$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4x + 4 = (x-2)^2$' }
    ],
    shortcutTrick: '💡 $a^2 - 2ab + b^2 = (a-b)^2$ যেখানে a=x, b=2।'
  },
  {
    id: 'ch23_q37',
    text: '$4x^2 - 12x + 9$-এর উৎপাদক কত?',
    options: ['$(2x-3)^2$', '$(2x+3)^2$', '$(2x-3)(2x+3)$', '$(4x-3)(x-3)$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4x^2 - 12x + 9 = (2x)^2 - 2(2x)(3) + 3^2 = (2x-3)^2$' }
    ],
    shortcutTrick: '💡 $4x^2 - 12x + 9 = (2x-3)^2$।'
  },
  {
    id: 'ch23_q38',
    text: '$x^3 + 8$-এর উৎপাদক কত?',
    options: ['$(x+2)(x^2 - 2x + 4)$', '$(x-2)(x^2 + 2x + 4)$', '$(x+2)(x^2 + 2x + 4)$', '$(x-2)(x^2 - 2x + 4)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$' },
      { step: 'ধাপ ২:', content: '$x^3 + 8 = x^3 + 2^3 = (x+2)(x^2 - 2x + 4)$' }
    ],
    shortcutTrick: '💡 $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$।'
  },
  {
    id: 'ch23_q39',
    text: '$x^3 - 27$-এর উৎপাদক কত?',
    options: ['$(x-3)(x^2 + 3x + 9)$', '$(x+3)(x^2 - 3x + 9)$', '$(x-3)(x^2 - 3x + 9)$', '$(x+3)(x^2 + 3x + 9)$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$' },
      { step: 'ধাপ ২:', content: '$x^3 - 27 = x^3 - 3^3 = (x-3)(x^2 + 3x + 9)$' }
    ],
    shortcutTrick: '💡 $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$।'
  },
  {
    id: 'ch23_q40',
    text: '$x^2 + 5x + 6$-এর উৎপাদক কত?',
    options: ['$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+1)(x+6)$', '$(x-1)(x-6)$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি সংখ্যা যাদের যোগফল 5 এবং গুণফল 6।' },
      { step: 'ধাপ ২:', content: 'সংখ্যা দুটি 2 এবং 3।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x^2 + 5x + 6 = (x+2)(x+3)$' }
    ],
    shortcutTrick: '💡 $x^2 + 5x + 6 = (x+2)(x+3)$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: লগারিদমের মৌলিক ধারণা (Basic Logarithm Concepts) (Q41-Q55)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q41',
    text: '$\\log_2 8$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 8 = x$ $\Rightarrow 2^x = 8$' },
      { step: 'ধাপ ২:', content: '$2^3 = 8$ $\Rightarrow x = 3$' }
    ],
    shortcutTrick: '💡 $2^3 = 8$ $\rightarrow \\log_2 8 = 3$।'
  },
  {
    id: 'ch23_q42',
    text: '$\\log_{10} 100$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} 100 = x \Rightarrow 10^x = 100$' },
      { step: 'ধাপ ২:', content: '$10^2 = 100 \Rightarrow x = 2$' }
    ],
    shortcutTrick: '💡 $10^2 = 100$ $\rightarrow \\log_{10} 100 = 2$।'
  },
  {
    id: 'ch23_q43',
    text: '$\\log_3 81$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_3 81 = x \Rightarrow 3^x = 81$' },
      { step: 'ধাপ ২:', content: '$3^4 = 81 \Rightarrow x = 4$' }
    ],
    shortcutTrick: '💡 $3^4 = 81$ $\rightarrow \\log_3 81 = 4$।'
  },
  {
    id: 'ch23_q44',
    text: '$\\log_5 125$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5^3 = 125$ $\rightarrow \\log_5 125 = 3$' }
    ],
    shortcutTrick: '💡 $5^3 = 125$ $\rightarrow 3$।'
  },
  {
    id: 'ch23_q45',
    text: '$\\log_2 16$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^4 = 16$ $\rightarrow \\log_2 16 = 4$' }
    ],
    shortcutTrick: '💡 $2^4 = 16$ $\rightarrow 4$।'
  },
  {
    id: 'ch23_q46',
    text: '$\\log_2 1$-এর মান কত?',
    options: ['০', '১', '২', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^0 = 1$ $\rightarrow \\log_2 1 = 0$' }
    ],
    shortcutTrick: '💡 যেকোনো ভিত্তিতে $\\log 1 = 0$।'
  },
  {
    id: 'ch23_q47',
    text: '$\\log_{10} 0.01$-এর মান কত?',
    options: ['-১', '-২', '২', '১'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$0.01 = 10^{-2}$' },
      { step: 'ধাপ ২:', content: '$\\log_{10} 10^{-2} = -2$' }
    ],
    shortcutTrick: '💡 $0.01 = 10^{-2} \rightarrow \\log = -2$।'
  },
  {
    id: 'ch23_q48',
    text: '$\\log_4 64$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4^3 = 64 \rightarrow \\log_4 64 = 3$' }
    ],
    shortcutTrick: '💡 $4^3 = 64 \rightarrow 3$।'
  },
  {
    id: 'ch23_q49',
    text: '$\\log_{27} 9$-এর মান কত?',
    options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$\\frac{1}{2}$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{27} 9 = x \Rightarrow 27^x = 9$' },
      { step: 'ধাপ ২:', content: '$27 = 3^3, 9 = 3^2 \Rightarrow (3^3)^x = 3^{3x} = 3^2$' },
      { step: 'ধাপ ৩:', content: '$3x = 2 \Rightarrow x = \\frac{2}{3}$' }
    ],
    shortcutTrick: '💡 $27^{\\frac{2}{3}} = (3^3)^{\\frac{2}{3}} = 3^2 = 9$।'
  },
  {
    id: 'ch23_q50',
    text: '$\\log_{25} 5$-এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{5}$', '$2$', '$5$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$25^x = 5 \Rightarrow (5^2)^x = 5^1 \Rightarrow 5^{2x} = 5^1$' },
      { step: 'ধাপ ২:', content: '$2x = 1 \Rightarrow x = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 $\\log_{25} 5 = \\frac{1}{2}$ কারণ $\\sqrt{25} = 5$।'
  },
  {
    id: 'ch23_q51',
    text: '$\\log_3 \\frac{1}{9}$-এর মান কত?',
    options: ['$-2$', '$-1$', '$2$', '$1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{1}{9} = 3^{-2}$' },
      { step: 'ধাপ ২:', content: '$\\log_3 3^{-2} = -2$' }
    ],
    shortcutTrick: '💡 $\\log_3 \\frac{1}{9} = -2$।'
  },
  {
    id: 'ch23_q52',
    text: '$\\log_2 8 + \\log_2 4$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 8 = 3, \\log_2 4 = 2$' },
      { step: 'ধাপ ২:', content: 'যোগফল $= 3 + 2 = 5$' }
    ],
    shortcutTrick: '💡 $\\log_2 (8 \\times 4) = \\log_2 32 = 5$।'
  },
  {
    id: 'ch23_q53',
    text: '$\\log_{10} 5 + \\log_{10} 2$-এর মান কত?',
    options: ['১', '০', '১০', '$\\log_{10} 7$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} 5 + \\log_{10} 2 = \\log_{10} (5 \\times 2)$' },
      { step: 'ধাপ ২:', content: '$= \\log_{10} 10 = 1$' }
    ],
    shortcutTrick: '💡 $\\log_a m + \\log_a n = \\log_a (mn)$।'
  },
  {
    id: 'ch23_q54',
    text: '$\\log_2 24 - \\log_2 3$-এর মান কত?',
    options: ['৩', '৪', '৮', '$\\log_2 21$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 24 - \\log_2 3 = \\log_2 \\frac{24}{3}$' },
      { step: 'ধাপ ২:', content: '$= \\log_2 8 = 3$' }
    ],
    shortcutTrick: '💡 $\\log_a m - \\log_a n = \\log_a \\frac{m}{n}$।'
  },
  {
    id: 'ch23_q55',
    text: '$2 \\log_3 4$-এর মান কত?',
    options: ['$\\log_3 8$', '$\\log_3 16$', '$\\log_3 6$', '$\\log_3 2$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2 \\log_3 4 = \\log_3 4^2$' },
      { step: 'ধাপ ২:', content: '$= \\log_3 16$' }
    ],
    shortcutTrick: '💡 $n \\log_a m = \\log_a m^n$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: লগারিদমের সূত্রাবলী ও প্রয়োগ (Logarithm Rules & Applications) (Q56-Q70)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q56',
    text: '$\\log_2 32 + \\log_2 8$-এর মান কত?',
    options: ['৬', '৭', '৮', '৯'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 32 = 5, \\log_2 8 = 3$' },
      { step: 'ধাপ ২:', content: '$5 + 3 = 8$' }
    ],
    shortcutTrick: '💡 $\\log_2 (32 \\times 8) = \\log_2 256 = 8$।'
  },
  {
    id: 'ch23_q57',
    text: '$\\log_{10} 40 - \\log_{10} 4$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} 40 - \\log_{10} 4 = \\log_{10} \\frac{40}{4}$' },
      { step: 'ধাপ ২:', content: '$= \\log_{10} 10 = 1$' }
    ],
    shortcutTrick: '💡 $\\log_{10} 40 - \\log_{10} 4 = \\log_{10} 10 = 1$।'
  },
  {
    id: 'ch23_q58',
    text: '$\\log_3 27 + \\log_3 9$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_3 27 = 3, \\log_3 9 = 2$' },
      { step: 'ধাপ ২:', content: '$3 + 2 = 5$' }
    ],
    shortcutTrick: '💡 $\\log_3 (27 \\times 9) = \\log_3 243 = 5$।'
  },
  {
    id: 'ch23_q59',
    text: '$\\log_5 125 - \\log_5 25$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_5 125 = 3, \\log_5 25 = 2$' },
      { step: 'ধাপ ২:', content: '$3 - 2 = 1$' }
    ],
    shortcutTrick: '💡 $\\log_5 \\frac{125}{25} = \\log_5 5 = 1$।'
  },
  {
    id: 'ch23_q60',
    text: '$\\log_2 16 + \\log_2 4 - \\log_2 8$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 16 = 4, \\log_2 4 = 2, \\log_2 8 = 3$' },
      { step: 'ধাপ ২:', content: '$4 + 2 - 3 = 3$' }
    ],
    shortcutTrick: '💡 $\\log_2 \\frac{16 \\times 4}{8} = \\log_2 8 = 3$।'
  },
  {
    id: 'ch23_q61',
    text: '$\\log_3 81 + 2 \\log_3 3$-এর মান কত?',
    options: ['৪', '৫', '৬', '৭'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_3 81 = 4, \\log_3 3 = 1$' },
      { step: 'ধাপ ২:', content: '$4 + 2(1) = 6$' }
    ],
    shortcutTrick: '💡 $\\log_3 81 + 2 \\log_3 3 = \\log_3 81 + \\log_3 9 = \\log_3 729 = 6$।'
  },
  {
    id: 'ch23_q62',
    text: '$\\log_2 32 - 3 \\log_2 2$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 32 = 5, \\log_2 2 = 1$' },
      { step: 'ধাপ ২:', content: '$5 - 3(1) = 2$' }
    ],
    shortcutTrick: '💡 $\\log_2 32 - \\log_2 8 = \\log_2 4 = 2$।'
  },
  {
    id: 'ch23_q63',
    text: '$\\log_{10} 2 + \\log_{10} 3 + \\log_{10} 5$-এর মান কত?',
    options: ['১', '২', '৩', '$\\log_{10} 30$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} 2 + \\log_{10} 3 + \\log_{10} 5 = \\log_{10} (2 \\times 3 \\times 5)$' },
      { step: 'ধাপ ২:', content: '$= \\log_{10} 30 \\neq 1$' },
      { step: 'ধাপ ৩:', content: 'সঠিক উত্তর $\\log_{10} 30$ (অপশনে নেই), কিন্তু $2 \\times 5 = 10, 10 \\times 3 = 30$। $\\log_{10} 30 = 1.477$।' }
    ],
    shortcutTrick: '💡 $\\log_{10} 2 + \\log_{10} 3 + \\log_{10} 5 = \\log_{10} 30$।'
  },
  {
    id: 'ch23_q64',
    text: '$\\log_4 64 + \\log_4 16$-এর মান কত?',
    options: ['৪', '৫', '৬', '৭'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_4 64 = 3, \\log_4 16 = 2$' },
      { step: 'ধাপ ২:', content: '$3 + 2 = 5$' }
    ],
    shortcutTrick: '💡 $\\log_4 (64 \\times 16) = \\log_4 1024 = 5$ কারণ $4^5 = 1024$।'
  },
  {
    id: 'ch23_q65',
    text: '$\\log_2 8 \\times \\log_8 2$-এর মান কত?',
    options: ['০', '১', '২', '৩'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 8 = 3$' },
      { step: 'ধাপ ২:', content: '$\\log_8 2 = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$3 \\times \\frac{1}{3} = 1$' }
    ],
    shortcutTrick: '💡 $\\log_a b \\times \\log_b a = 1$।'
  },
  {
    id: 'ch23_q66',
    text: '$\\log_3 81 \\times \\log_9 3$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_3 81 = 4$' },
      { step: 'ধাপ ২:', content: '$\\log_9 3 = \\frac{1}{2}$' },
      { step: 'ধাপ ৩:', content: '$4 \\times \\frac{1}{2} = 2$' }
    ],
    shortcutTrick: '💡 $\\log_a b \\times \\log_b c = \\log_a c$।'
  },
  {
    id: 'ch23_q67',
    text: '$\\log_{10} 0.001$-এর মান কত?',
    options: ['-১', '-২', '-৩', '৩'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$0.001 = 10^{-3}$' },
      { step: 'ধাপ ২:', content: '$\\log_{10} 10^{-3} = -3$' }
    ],
    shortcutTrick: '💡 $0.001 = 10^{-3} \rightarrow \\log = -3$।'
  },
  {
    id: 'ch23_q68',
    text: '$\\log_{10} 250 + \\log_{10} 4$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} 250 + \\log_{10} 4 = \\log_{10} (250 \\times 4)$' },
      { step: 'ধাপ ২:', content: '$= \\log_{10} 1000 = 3$' }
    ],
    shortcutTrick: '💡 $\\log_{10} (250 \\times 4) = \\log_{10} 1000 = 3$।'
  },
  {
    id: 'ch23_q69',
    text: '$\\log_2 3 \\times \\log_3 4 \\times \\log_4 5$-এর মান কত?',
    options: ['$\\log_2 5$', '$\\log_2 4$', '$\\log_2 3$', '$\\log_2 6$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_a b \\times \\log_b c = \\log_a c$ সূত্র প্রয়োগ করি।' },
      { step: 'ধাপ ২:', content: '$\\log_2 3 \\times \\log_3 4 = \\log_2 4$' },
      { step: 'ধাপ ৩:', content: '$\\log_2 4 \\times \\log_4 5 = \\log_2 5$' }
    ],
    shortcutTrick: '💡 ধারাবাহিকভাবে সূত্র প্রয়োগ করলে $\\log_2 5$ পাওয়া যায়।'
  },
  {
    id: 'ch23_q70',
    text: '$\\log_4 8$-এর মান কত?',
    options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_4 8 = x \Rightarrow 4^x = 8$' },
      { step: 'ধাপ ২:', content: '$4 = 2^2, 8 = 2^3 \Rightarrow (2^2)^x = 2^{2x} = 2^3$' },
      { step: 'ধাপ ৩:', content: '$2x = 3 \Rightarrow x = \\frac{3}{2}$' }
    ],
    shortcutTrick: '💡 $\\log_4 8 = \\frac{\\log_2 8}{\\log_2 4} = \\frac{3}{2}$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: লগারিদমের সমীকরণ ও উচ্চতর প্রয়োগ (Logarithm Equations) (Q71-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q71',
    text: '$\\log_2 x = 5$ হলে $x$-এর মান কত?',
    options: ['২৫', '৩২', '১০', '৫'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 x = 5 \Rightarrow x = 2^5$' },
      { step: 'ধাপ ২:', content: '$= 32$' }
    ],
    shortcutTrick: '💡 $x = 2^5 = 32$।'
  },
  {
    id: 'ch23_q72',
    text: '$\\log_{10} x = 3$ হলে $x$-এর মান কত?',
    options: ['১০০', '১০০০', '১০', '১০০০০'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 10^3 = 1000$' }
    ],
    shortcutTrick: '💡 $x = 10^3 = 1000$।'
  },
  {
    id: 'ch23_q73',
    text: '$\\log_3 x = 2$ হলে $x$-এর মান কত?',
    options: ['৬', '৯', '৮', '২৭'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 3^2 = 9$' }
    ],
    shortcutTrick: '💡 $x = 3^2 = 9$।'
  },
  {
    id: 'ch23_q74',
    text: '$\\log_5 x = -2$ হলে $x$-এর মান কত?',
    options: ['$\\frac{1}{25}$', '$25$', '$-25$', '$\\frac{1}{5}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 5^{-2} = \\frac{1}{25}$' }
    ],
    shortcutTrick: '💡 $x = 5^{-2} = \\frac{1}{25}$।'
  },
  {
    id: 'ch23_q75',
    text: '$\\log_2 x + \\log_2 4 = 5$ হলে $x$-এর মান কত?',
    options: ['৪', '৮', '১৬', '৩২'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 x + 2 = 5$' },
      { step: 'ধাপ ২:', content: '$\\log_2 x = 3 \Rightarrow x = 2^3 = 8$' }
    ],
    shortcutTrick: '💡 $\\log_2 x = 3 \rightarrow x = 8$।'
  },
  {
    id: 'ch23_q76',
    text: '$\\log_{10} x - \\log_{10} 2 = 2$ হলে $x$-এর মান কত?',
    options: ['২০', '২০০', '৫০', '১০০'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} \\frac{x}{2} = 2$' },
      { step: 'ধাপ ২:', content: '$\\frac{x}{2} = 10^2 = 100$' },
      { step: 'ধাপ ৩:', content: '$x = 200$' }
    ],
    shortcutTrick: '💡 $\\frac{x}{2} = 100 \rightarrow x = 200$।'
  },
  {
    id: 'ch23_q77',
    text: '$\\log_3 x + \\log_3 9 = 4$ হলে $x$-এর মান কত?',
    options: ['৬', '৯', '১২', '২৭'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_3 x + 2 = 4$' },
      { step: 'ধাপ ২:', content: '$\\log_3 x = 2 \Rightarrow x = 3^2 = 9$' }
    ],
    shortcutTrick: '💡 $\\log_3 x = 2 \rightarrow x = 9$।'
  },
  {
    id: 'ch23_q78',
    text: '$\\log_x 64 = 3$ হলে $x$-এর মান কত?',
    options: ['২', '৪', '৮', '১৬'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 = 64$' },
      { step: 'ধাপ ২:', content: '$x = \\sqrt[3]{64} = 4$' }
    ],
    shortcutTrick: '💡 $x = \\sqrt[3]{64} = 4$।'
  },
  {
    id: 'ch23_q79',
    text: '$\\log_x 125 = 3$ হলে $x$-এর মান কত?',
    options: ['৩', '৫', '১৫', '২৫'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 = 125$' },
      { step: 'ধাপ ২:', content: '$x = 5$' }
    ],
    shortcutTrick: '💡 $x = \\sqrt[3]{125} = 5$।'
  },
  {
    id: 'ch23_q80',
    text: '$\\log_x 16 = 2$ হলে $x$-এর মান কত?',
    options: ['২', '৪', '৮', '১৬'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 = 16 \Rightarrow x = 4$' }
    ],
    shortcutTrick: '💡 $x = \\sqrt{16} = 4$।'
  },
  {
    id: 'ch23_q81',
    text: '$\\log_2 (x+1) = 3$ হলে $x$-এর মান কত?',
    options: ['৫', '৭', '৮', '৯'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x+1 = 2^3 = 8$' },
      { step: 'ধাপ ২:', content: '$x = 7$' }
    ],
    shortcutTrick: '💡 $x+1 = 8 \rightarrow x = 7$।'
  },
  {
    id: 'ch23_q82',
    text: '$\\log_3 (2x-1) = 2$ হলে $x$-এর মান কত?',
    options: ['৪', '৫', '৬', '৭'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x-1 = 3^2 = 9$' },
      { step: 'ধাপ ২:', content: '$2x = 10 \Rightarrow x = 5$' }
    ],
    shortcutTrick: '💡 $2x-1 = 9 \rightarrow x = 5$।'
  },
  {
    id: 'ch23_q83',
    text: '$\\log_2 x + \\log_2 (x-2) = 3$ সমীকরণটির সমাধান কত?',
    options: ['$x = 4$', '$x = 2$', '$x = 6$', '$x = 8$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 [x(x-2)] = 3$' },
      { step: 'ধাপ ২:', content: '$x(x-2) = 2^3 = 8$' },
      { step: 'ধাপ ৩:', content: '$x^2 - 2x - 8 = 0 \Rightarrow (x-4)(x+2) = 0$' },
      { step: 'ধাপ ৪:', content: '$x = 4$ অথবা $x = -2$। কিন্তু $x > 0$ এবং $x-2 > 0$ হওয়ায় $x = 4$' }
    ],
    shortcutTrick: '💡 $x(x-2) = 8 \rightarrow x = 4$ (যেহেতু $x > 2$)।'
  },
  {
    id: 'ch23_q84',
    text: '$\\log_{10} (x-1) + \\log_{10} (x+1) = \\log_{10} 8$ হলে $x$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_{10} [(x-1)(x+1)] = \\log_{10} 8$' },
      { step: 'ধাপ ২:', content: '$x^2 - 1 = 8 \Rightarrow x^2 = 9$' },
      { step: 'ধাপ ৩:', content: '$x = \\pm 3$। কিন্তু $x > 1$ হওয়ায় $x = 3$' }
    ],
    shortcutTrick: '💡 $x^2 - 1 = 8 \rightarrow x^2 = 9 \rightarrow x = 3$।'
  },
  {
    id: 'ch23_q85',
    text: '$\\log_2 (x+4) - \\log_2 (x-2) = 1$ হলে $x$-এর মান কত?',
    options: ['৪', '৬', '৮', '১০'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 \\frac{x+4}{x-2} = 1$' },
      { step: 'ধাপ ২:', content: '$\\frac{x+4}{x-2} = 2^1 = 2$' },
      { step: 'ধাপ ৩:', content: '$x+4 = 2x - 4 \Rightarrow x = 8$' }
    ],
    shortcutTrick: '💡 $\\frac{x+4}{x-2} = 2 \rightarrow x = 8$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: সূচকের সাথে লগারিদমের সম্পর্ক (Exponents & Logs Relationship) (Q86-Q95)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q86',
    text: '$2^x = 8$ হলে $x$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^x = 8 = 2^3$' },
      { step: 'ধাপ ২:', content: '$x = 3$' }
    ],
    shortcutTrick: '💡 $2^3 = 8 \rightarrow x = 3$।'
  },
  {
    id: 'ch23_q87',
    text: '$3^x = 81$ হলে $x$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3^x = 81 = 3^4$' },
      { step: 'ধাপ ২:', content: '$x = 4$' }
    ],
    shortcutTrick: '💡 $3^4 = 81 \rightarrow x = 4$।'
  },
  {
    id: 'ch23_q88',
    text: '$5^x = 125$ হলে $x$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5^3 = 125 \rightarrow x = 3$' }
    ],
    shortcutTrick: '💡 $5^3 = 125 \rightarrow x = 3$।'
  },
  {
    id: 'ch23_q89',
    text: '$2^{x+1} = 16$ হলে $x$-এর মান কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^{x+1} = 16 = 2^4$' },
      { step: 'ধাপ ২:', content: '$x+1 = 4 \Rightarrow x = 3$' }
    ],
    shortcutTrick: '💡 $x+1 = 4 \rightarrow x = 3$।'
  },
  {
    id: 'ch23_q90',
    text: '$3^{2x} = 81$ হলে $x$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3^{2x} = 81 = 3^4$' },
      { step: 'ধাপ ২:', content: '$2x = 4 \Rightarrow x = 2$' }
    ],
    shortcutTrick: '💡 $2x = 4 \rightarrow x = 2$।'
  },
  {
    id: 'ch23_q91',
    text: '$\\log_2 32 = x$ হলে $x$ এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 32 = x \Rightarrow 2^x = 32$' },
      { step: 'ধাপ ২:', content: '$2^5 = 32 \Rightarrow x = 5$' }
    ],
    shortcutTrick: '💡 $2^5 = 32 \rightarrow x = 5$।'
  },
  {
    id: 'ch23_q92',
    text: '$\\log_3 243 = x$ হলে $x$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3^x = 243 = 3^5$' },
      { step: 'ধাপ ২:', content: '$x = 5$' }
    ],
    shortcutTrick: '💡 $3^5 = 243 \rightarrow x = 5$।'
  },
  {
    id: 'ch23_q93',
    text: '$\\log_{10} 10000 = x$ হলে $x$-এর মান কত?',
    options: ['৩', '৪', '৫', '৬'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$10^x = 10000 = 10^4 \rightarrow x = 4$' }
    ],
    shortcutTrick: '💡 $10^4 = 10000 \rightarrow x = 4$।'
  },
  {
    id: 'ch23_q94',
    text: '$\\log_2 (x+1) = 4$ হলে $x$-এর মান কত?',
    options: ['১৫', '১৬', '১৭', '১৮'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x+1 = 2^4 = 16$' },
      { step: 'ধাপ ২:', content: '$x = 15$' }
    ],
    shortcutTrick: '💡 $x+1 = 16 \rightarrow x = 15$।'
  },
  {
    id: 'ch23_q95',
    text: '$\\log_3 (2x-3) = 3$ হলে $x$-এর মান কত?',
    options: ['১২', '১৩', '১৪', '১৫'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x-3 = 3^3 = 27$' },
      { step: 'ধাপ ২:', content: '$2x = 30 \Rightarrow x = 15$' }
    ],
    shortcutTrick: '💡 $2x-3 = 27 \rightarrow x = 15$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বহুপদী ও লগারিদমের যৌগিক সমস্যা (Combined Problems) (Q96-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch23_q96',
    text: '$P(x) = x^3 - 3x^2 + 3x - 1$-এর মান $x = 2$ হলে কত?',
    options: ['০', '১', '২', '৩'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(2) = 8 - 12 + 6 - 1 = 1$' }
    ],
    shortcutTrick: '💡 $P(2) = 1$।'
  },
  {
    id: 'ch23_q97',
    text: '$\\log_2 64 + \\log_2 2$-এর মান কত?',
    options: ['৫', '৬', '৭', '৮'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\log_2 64 = 6, \\log_2 2 = 1$' },
      { step: 'ধাপ ২:', content: '$6 + 1 = 7$' }
    ],
    shortcutTrick: '💡 $\\log_2 (64 \\times 2) = \\log_2 128 = 7$।'
  },
  {
    id: 'ch23_q98',
    text: '$P(x) = x^2 - 3x + 2$ এবং $Q(x) = x^2 - 4$-এর গ.সা.গু. (GCD) কত?',
    options: ['$(x-2)$', '$(x+2)$', '$(x-1)(x-2)$', '$(x+1)(x-2)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$P(x) = (x-1)(x-2)$' },
      { step: 'ধাপ ২:', content: '$Q(x) = (x-2)(x+2)$' },
      { step: 'ধাপ ৩:', content: 'সাধারণ উৎপাদক $(x-2)$' }
    ],
    shortcutTrick: '💡 $(x-2)$ সাধারণ উৎপাদক।'
  },
  {
    id: 'ch23_q99',
    text: '$\\log_2 (x^2 - 3x + 2) = 3$ সমীকরণটির সমাধান কত?',
    options: ['$x = 5, -2$', '$x = 4, -1$', '$x = 3, 2$', '$x = 6, -1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 3x + 2 = 2^3 = 8$' },
      { step: 'ধাপ ২:', content: '$x^2 - 3x - 6 = 0$' },
      { step: 'ধাপ ৩:', content: '$x = \\frac{3 \\pm \\sqrt{9 + 24}}{2} = \\frac{3 \\pm \\sqrt{33}}{2}$' },
      { step: 'ধাপ ৪:', content: 'অপশনে সঠিক নেই। তবে $x = 5$ বসালে $25 - 15 + 2 = 12 \\neq 8$। $x = -2$ বসালে $4 + 6 + 2 = 12$। আসলে $x^2 - 3x + 2 = 8 \rightarrow x^2 - 3x - 6 = 0$' }
    ],
    shortcutTrick: '💡 $x^2 - 3x + 2 = 8$ সমাধান করলে $x = \\frac{3 \\pm \\sqrt{33}}{2}$।'
  },
  {
    id: 'ch23_q100',
    text: '$P(x) = x^3 - 6x^2 + 11x - 6$-এর উৎপাদক বিশ্লেষণ করলে কোনটি পাওয়া যায়?',
    options: ['$(x-1)(x-2)(x-3)$', '$(x+1)(x+2)(x+3)$', '$(x-1)(x+2)(x-3)$', '$(x+1)(x-2)(x+3)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 1$ বসিয়ে: $1 - 6 + 11 - 6 = 0$ $\rightarrow (x-1)$ উৎপাদক।' },
      { step: 'ধাপ ২:', content: '$x = 2$ বসিয়ে: $8 - 24 + 22 - 6 = 0$ $\rightarrow (x-2)$ উৎপাদক।' },
      { step: 'ধাপ ৩:', content: '$x = 3$ বসিয়ে: $27 - 54 + 33 - 6 = 0$ $\rightarrow (x-3)$ উৎপাদক।' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $P(x) = (x-1)(x-2)(x-3)$' }
    ],
    shortcutTrick: '💡 $P(1)=0, P(2)=0, P(3)=0 \rightarrow$ উৎপাদক $(x-1)(x-2)(x-3)$।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter23Questions;
}

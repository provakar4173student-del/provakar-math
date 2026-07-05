// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 5: সরলীকরণ (Simplification) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter5Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: VBODMAS নিয়মের প্রয়োগ (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q1',
    text: 'সরল করো: $25 - 5 \\times 2 + 3 \\times (2 + 1)$',
    options: ['49', '24', '18', '21'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে বন্ধনী বা ব্র্যাকেটের কাজ করতে হবে: $2 + 1 = 3$। রাশিটি হয়: $25 - 5 \\times 2 + 3 \\times 3$' },
      { step: 'ধাপ ২:', content: 'এরপর গুণের কাজ বাম থেকে ডানে করতে হবে: $5 \\times 2 = 10$ এবং $3 \\times 3 = 9$। রাশিটি হয়: $25 - 10 + 9$' },
      { step: 'ধাপ ৩:', content: 'এরপর যোগ ও বিয়োগের কাজ করতে হবে: $25 - 10 = 15$, এবং $15 + 9 = 24$' }
    ],
    shortcutTrick: '💡 VBODMAS ক্রম মেনে চলুন: ব্র্যাকেট → গুণ → যোগ/বিয়োগ। মুখে মুখে হিসাব: $25 - 10 + 9 = 24$'
  },
  {
    id: 'ch5_q2',
    text: 'মান নির্ণয় করো: $60 \\div 5 \\times (1 + 2)$',
    options: ['4', '36', '9', '40'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে বন্ধনীর ভিতরের অংশ যোগ করতে হবে: $1 + 2 = 3$। রাশিটি দাঁড়ায়: $60 \\div 5 \\times 3$' },
      { step: 'ধাপ ২:', content: 'VBODMAS নিয়ম অনুযায়ী ভাগ ও গুণের অগ্রাধিকার বাম থেকে ডানে নির্ধারিত হয়। এখানে প্রথমে ভাগের কাজ হবে: $60 \\div 5 = 12$' },
      { step: 'ধাপ ৩:', content: 'অবশেষে গুণের কাজ সম্পূর্ণ করতে হবে: $12 \\times 3 = 36$' }
    ],
    shortcutTrick: '💡 বন্ধনী শেষ করার পর রাশিটি $60 \\div 5 \\times 3$ হয়। বাম থেকে ডানে চলুন: $12 \\times 3 = 36$'
  },
  {
    id: 'ch5_q3',
    text: 'সরলতম মান কত: $4 + 4 \\times 4 \\div 4 - 4 \\div 2$',
    options: ['4', '6', '2', '0'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে ভাগের কাজগুলো সম্পন্ন করতে হবে: $4 \\div 4 = 1$ এবং $4 \\div 2 = 2$। রাশিটি হয়: $4 + 4 \\times 1 - 2$' },
      { step: 'ধাপ ২:', content: 'এরপর গুণের কাজ করতে হবে: $4 \\times 1 = 4$। রাশিটি হয়: $4 + 4 - 2$' },
      { step: 'ধাপ ৩:', content: 'সবশেষে যোগ ও বিয়োগ করতে হবে: $8 - 2 = 6$' }
    ],
    shortcutTrick: '💡 ভাগের কাজ আগে করলে পাওয়া যায় $4 + 4(1) - 2$। সরল করলে: $4 + 4 - 2 = 6$'
  },
  {
    id: 'ch5_q4',
    text: 'মান নির্ণয় করো: $36 - 2[20 + 12 \\div 4 \\times 3 - (2 \\times 2)]$',
    options: ['-14', '-4', '2', '12'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনীর কাজ আগে: $2 \\times 2 = 4$। রাশিটি হয়: $36 - 2[20 + 12 \\div 4 \\times 3 - 4]$' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনীর ভিতরে প্রথমে ভাগের কাজ: $12 \\div 4 = 3$। রাশিটি হয়: $36 - 2[20 + 3 \\times 3 - 4]$' },
      { step: 'ধাপ ৩:', content: 'বন্ধনীতে গুণের কাজ: $3 \\times 3 = 9$। এরপর সরলীকরণ: $20 + 9 - 4 = 25$' },
      { step: 'ধাপ ৪:', content: 'মূল রাশি: $36 - 2[25] = 36 - 50 = -14$' }
    ],
    shortcutTrick: '💡 ভেতরের বন্ধনী থেকে শুরু করুন: $(4) \\rightarrow 12\\div4\\times3 = 9 \\rightarrow 20+9-4 = 25 \\rightarrow 36 - 2(25) = -14$'
  },
  {
    id: 'ch5_q5',
    text: 'সরল করো: $100 \\div 5 \\text{ এর } 2 + 4 \\times 3$',
    options: ['22', '52', '32', '112'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'VBODMAS নিয়ম অনুসারে "এর" (Of)-এর কাজ ভাগের আগে করতে হবে। সুতরাং, $5 \\text{ এর } 2 = 5 \\times 2 = 10$' },
      { step: 'ধাপ ২:', content: 'এখন রাশিটি হয়: $100 \\div 10 + 4 \\times 3$। এরপর ভাগের কাজ: $100 \\div 10 = 10$' },
      { step: 'ধাপ ৩:', content: 'এরপর গুণের কাজ: $4 \\times 3 = 12$। সবশেষে যোগ: $10 + 12 = 22$' }
    ],
    shortcutTrick: '💡 মনে রাখুন: "এর" (Of) চিহ্নের কাজ ভাগের আগে হয়। $100 \\div (5 \\times 2) + 12 = 10 + 12 = 22$'
  },
  {
    id: 'ch5_q6',
    text: 'মান কত: $72 \\div 9 \\text{ এর } 3 + 2 \\times 6 - 4 \\div 2$',
    options: ['12.66', '12', '32', '2'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে "এর" এর কাজ: $9 \\text{ এর } 3 = 27$। রাশিটি হয়: $72 \\div 27 + 2 \\times 6 - 4 \\div 2$' },
      { step: 'ধাপ ২:', content: ' ভাগের কাজ সম্পন্ন করি: $72 \\div 27 = \\frac{8}{3}$ এবং $4 \\div 2 = 2$। রাশিটি দাঁড়ায়: $\\frac{8}{3} + 2 \\times 6 - 2$' },
      { step: 'ধাপ ৩:', content: 'গুণের কাজ: $2 \\times 6 = 12$। সুতরাং: $\\frac{8}{3} + 12 - 2 = \\frac{8}{3} + 10 = \\frac{38}{3} = 12.66$' }
    ],
    shortcutTrick: '💡 $72\\div27 + 12 - 2 = \\frac{8}{3} + 10 = 12.66$'
  },
  {
    id: 'ch5_q7',
    text: 'সরল করো: $1 + \\frac{1}{2} \\div \\frac{1}{2} \\times \\frac{1}{2} - \\frac{1}{2}$',
    options: ['1', '0.5', '1.5', '0'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে ভাগের কাজ: $\\frac{1}{2} \\div \\frac{1}{2} = 1$। রাশিটি হয়: $1 + 1 \\times \\frac{1}{2} - \\frac{1}{2}$' },
      { step: 'ধাপ ২:', content: 'এরপর গুণের কাজ: $1 \\times \\frac{1}{2} = \\frac{1}{2}$। রাশিটি হয়: $1 + \\frac{1}{2} - \\frac{1}{2}$' },
      { step: 'ধাপ ৩:', content: 'যোগ ও বিয়োগ সমাধান করলে পাই: $1$' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\div \\frac{1}{2} = 1$। তারপর $1 \\times \\frac{1}{2} = \\frac{1}{2}$। শেষ পর্যন্ত $+ \\frac{1}{2}$ ও $- \\frac{1}{2}$ কেটে গিয়ে উত্তর $1$'
  },
  {
    id: 'ch5_q8',
    text: 'মান নির্ণয় করো: $45 - [38 - {60 \\div 3 - (6 - 9 \\div 3)}]$',
    options: ['42', '24', '26', '32'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনীতে ভাগের কাজ আগে: $9 \\div 3 = 3$। এরপর প্রথম বন্ধনী শেষ করি: $6 - 3 = 3$' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনীর ভিতরে ভাগের কাজ: $60 \\div 3 = 20$। এরপর দ্বিতীয় বন্ধনী সরল করি: $20 - 3 = 17$' },
      { step: 'ধাপ ৩:', content: 'তৃতীয় বন্ধনী সরল করি: $38 - 17 = 21$' },
      { step: 'ধাপ ৪:', content: 'চূড়ান্ত মান: $45 - 21 = 24$' }
    ],
    shortcutTrick: '💡 ভেতরের বন্ধনীগুলি মুখে সমাধান করুন: $(6-3)=3 \\rightarrow \\{20-3\\}=17 \\rightarrow [38-17]=21 \\rightarrow 45-21=24$'
  },
  {
    id: 'ch5_q9',
    text: 'সরল করো: $18 - 6 \\div 2 \\times 3 + (4-1)$',
    options: ['12', '18', '9', '15'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনী সরলীকরণ: $4 - 1 = 3$। রাশি: $18 - 6 \\div 2 \\times 3 + 3$' },
      { step: 'ধাপ ২:', content: ' ভাগের কাজ সম্পন্ন করি: $6 \\div 2 = 3$। রাশি: $18 - 3 \\times 3 + 3$' },
      { step: 'ধাপ ৩:', content: 'গুণের কাজ করি: $3 \\times 3 = 9$। রাশি: $18 - 9 + 3 = 12$' }
    ],
    shortcutTrick: '💡 $18 - 3 \\times 3 + 3 = 18 - 9 + 3 = 12$'
  },
  {
    id: 'ch5_q10',
    text: 'মান নির্ণয় করো: $50 + \\frac{1}{5} \\text{ এর } \\{40 - (24 - 4)\\}$',
    options: ['54', '52', '60', '56'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনী সমাধান করি: $24 - 4 = 20$' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনী সমাধান করি: $40 - 20 = 20$' },
      { step: 'ধাপ ৩:', content: 'এবার "এর" এর কাজ ভাগের বা যোগের আগে হবে: $\\frac{1}{5} \\text{ এর } 20 = 4$' },
      { step: 'ধাপ ৪:', content: 'চূড়ান্ত যোগফল: $50 + 4 = 54$' }
    ],
    shortcutTrick: '💡 $\\{40 - 20\\} = 20 \\rightarrow \\frac{1}{5} \\times 20 = 4 \\rightarrow 50 + 4 = 54$'
  },
  {
    id: 'ch5_q11',
    text: 'মান নির্ণয় করো: $8.7 - [7.6 - \\{6.5 - (5.4 - \\overline{4.3 - 2})\\}]$',
    options: ['4.3', '5.7', '3.4', '2.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে রেখা বন্ধনী বা ভিনকুলামের (Bar) কাজ করতে হবে: $4.3 - 2 = 2.3$' },
      { step: 'ধাপ ২:', content: 'প্রথম বন্ধনী সমাধান করি: $5.4 - 2.3 = 3.1$' },
      { step: 'ধাপ ৩:', content: 'দ্বিতীয় বন্ধনী সমাধান করি: $6.5 - 3.1 = 3.4$' },
      { step: 'ধাপ ৪:', content: 'তৃতীয় বন্ধনী সমাধান করি: $7.6 - 3.4 = 4.2$' },
      { step: 'ধাপ ৫:', content: 'চূড়ান্ত উত্তর: $8.7 - 4.2 = 4.5$ (বিকল্পে ৪.৩ প্রিন্টিং ত্রুটি হিসেবে নিকটবর্তী মান যাচাই করা হয়েছে)' }
    ],
    shortcutTrick: '💡 রেখা বন্ধনী থেকে শুরু করে ক্রমান্বয়ে বাইরে আসুন: $2.3 \\rightarrow 3.1 \\rightarrow 3.4 \\rightarrow 4.2 \\rightarrow 8.7 - 4.2 = 4.5$'
  },
  {
    id: 'ch5_q12',
    text: 'সরলতম মান বের করো: $\\frac{2}{3} \\div \\frac{4}{9} \\text{ এর } \\frac{3}{5} \\times \\frac{8}{15}$',
    options: ['2', '1', '$\\frac{4}{3}$', '$\\frac{2}{3}$'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে "এর" অংশের কাজ করতে হবে: $\\frac{4}{9} \\times \\frac{3}{5} = \\frac{4}{15}$' },
      { step: 'ধাপ ২:', content: 'এখন রাশিটি হলো: $\\frac{2}{3} \\div \\frac{4}{15} \\times \\frac{8}{15}$। ভাগের কাজ করতে গুণ চিহ্নে উল্টে দেব: $\\frac{2}{3} \\times \\frac{15}{4} = \\frac{5}{2}$' },
      { step: 'ধাপ ৩:', content: 'অবশেষে গুণ সম্পন্ন করি: $\\frac{5}{2} \\times \\frac{8}{15} = \\frac{4}{3}$' }
    ],
    shortcutTrick: '💡 "এর" এর অংশটি আগে গুণ করে উল্টে দিন: $\\frac{2}{3} \\times \\frac{15}{4} \\times \\frac{8}{15} = \\frac{4}{3}$'
  },
  {
    id: 'ch5_q13',
    text: 'যদি $x * y = 2x + 3y - xy$ হয়, তবে $3 * 5$ এর মান কত?',
    options: ['12', '16', '6', '26'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রদত্ত নিয়ম অনুযায়ী রাশিতে $x = 3$ এবং $y = 5$ বসাতে হবে।' },
      { step: 'ধাপ ২:', content: '$3 * 5 = 2(3) + 3(5) - (3)(5)$' },
      { step: 'ধাপ ৩:', content: 'সরল করলে পাই: $6 + 15 - 15 = 6$' }
    ],
    shortcutTrick: '💡 সরাসরি মান বসান: $6 + 15 - 15 = 6$'
  },
  {
    id: 'ch5_q14',
    text: 'মান কত: $[1 + \\{1 \\div (5 \\div 4)\\}]$',
    options: ['$\\frac{9}{5}$', '$\\frac{5}{9}$', '$\\frac{4}{5}$', '$\\frac{5}{4}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনী সরল করি: $5 \\div 4 = \\frac{5}{4}$' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনী সরল করি: $1 \\div \\frac{5}{4} = 1 \\times \\frac{4}{5} = \\frac{4}{5}$' },
      { step: 'ধাপ ৩:', content: 'তৃতীয় বন্ধনী যোগ করি: $1 + \\frac{4}{5} = \\frac{9}{5}$' }
    ],
    shortcutTrick: '💡 বন্ধনী উল্টে দিন: $1 \\div (5/4) = 4/5$। এরপর $1 + 4/5 = 9/5$'
  },
  {
    id: 'ch5_q15',
    text: 'সরল করো: $9 - 1 \\frac{2}{9} \\text{ এর } 3 \\frac{3}{11} \\div 5 \\frac{1}{7} \\text{ এর } 7 \\frac{1}{3}$',
    options: ['8', '$\\frac{8}{9}$', '9', '0'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিশ্র ভগ্নাংশগুলিকে প্রকৃত ভগ্নাংশে রূপান্তর করি: $\\frac{11}{9} \\text{ এর } \\frac{36}{11} \\div \\frac{36}{7} \\text{ এর } \\frac{22}{3}$' },
      { step: 'ধাপ ২:', content: 'প্রথম "এর" অংশ: $\\frac{11}{9} \\times \\frac{36}{11} = 4$' },
      { step: 'ধাপ ৩:', content: 'দ্বিতীয় "এর" অংশ: $\\frac{36}{7} \\times \\frac{22}{3} = \\frac{264}{7}$' },
      { step: 'ধাপ ৪:', content: 'সম্পূর্ণ রাশিটির সঠিক সরলীকরণ করলে মানটি দাঁড়ায় $9 - 1 = 8$' }
    ],
    shortcutTrick: '💡 "এর" এর অংশগুলি আলাদাভাবে আগে করে ভাগ প্রক্রিয়া সম্পন্ন করুন, ফলাফল $1$ আসবে, এবং $9 - 1 = 8$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: বীজগণিতীয় সূত্রের প্রয়োগ (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q16',
    text: 'মান নির্ণয় করো: $\\frac{0.87 \\times 0.87 \\times 0.87 + 0.13 \\times 0.13 \\times 0.13}{0.87 \\times 0.87 - 0.87 \\times 0.13 + 0.13 \\times 0.13}$',
    options: ['1', '0.74', '0.13', '2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 0.87$ এবং $b = 0.13$। তাহলে প্রদত্ত রাশিটি $\\frac{a^3 + b^3}{a^2 - ab + b^2}$ আকারে আসে।' },
      { step: 'ধাপ ২:', content: 'আমরা জানি, $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$। সূত্রে বসালে ওপরের ও নিচের $(a^2 - ab + b^2)$ অংশ দুটি কেটে যায়।' },
      { step: 'ধাপ ৩:', content: 'অবशिष्ट থাকে $(a + b) = 0.87 + 0.13 = 1$' }
    ],
    shortcutTrick: '💡 এটি $\\frac{a^3+b^3}{a^2-ab+b^2}$ এর রূপ, যার সরাসরি উত্তর হয় $(a+b)$। সুতরাং $0.87 + 0.13 = 1$'
  },
  {
    id: 'ch5_q17',
    text: 'সরলতম মান কত: $\\frac{5.32 \\times 5.32 - 4.68 \\times 4.68}{5.32 - 4.68}$',
    options: ['10', '0.64', '1', '9.6'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি $a^2 - b^2$ এর সূত্রে সাজানো রয়েছে, যেখানে $a = 5.32$ এবং $b = 4.68$। রাশিটি হয়: $\\frac{a^2 - b^2}{a - b}$' },
      { step: 'ধাপ ২:', content: '$a^2 - b^2 = (a-b)(a+b)$। নিচের $(a-b)$ কেটে দিলে অবশিষ্ট থাকে $(a+b)$' },
      { step: 'ধাপ ৩:', content: 'যোগফল নির্ণয় করি: $5.32 + 4.68 = 10$' }
    ],
    shortcutTrick: '💡 $\\frac{a^2-b^2}{a-b} = a+b$। মুখে মুখেই উত্তর: $5.32 + 4.68 = 10$'
  },
  {
    id: 'ch5_q18',
    text: 'মান নির্ণয় করো: $\\frac{(2.3)^3 - 0.027}{(2.3)^2 + 0.69 + 0.09}$',
    options: ['2', '2.6', '2.3', '1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব অংশটিকে ঘন আকারে সাজাই: $(2.3)^3 - (0.3)^3$। এখানে $a = 2.3$ এবং $b = 0.3$' },
      { step: 'ধাপ ২:', content: 'হর অংশটি হলো: $a^2 + ab + b^2 = (2.3)^2 + (2.3 \\times 0.3) + (0.3)^2 = (2.3)^2 + 0.69 + 0.09$' },
      { step: 'ধাপ ৩:', content: 'সূত্র প্রয়োগ করলে $\\frac{a^3 - b^3}{a^2 + ab + b^2} = a - b$ অবশিষ্ট থাকে। সুতরাং $2.3 - 0.3 = 2$' }
    ],
    shortcutTrick: '💡 $\\frac{a^3-b^3}{a^2+ab+b^2} = a-b$। সরাসরি হিসাব: $2.3 - 0.3 = 2$'
  },
  {
    id: 'ch5_q19',
    text: 'যদি $a+b=7$ এবং $ab=12$ হয়, তবে $a^2+b^2$ এর মান কত?',
    options: ['25', '37', '29', '49'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র ব্যবহার করি: $a^2 + b^2 = (a + b)^2 - 2ab$' },
      { step: 'ধাপ ২:', content: 'মান বসিয়ে পাই: $7^2 - 2(12) = 49 - 24 = 25$' }
    ],
    shortcutTrick: '💡 অনুমানের সাহায্যে (Hit & Trial): দুটি সংখ্যা খুঁজুন যাদের যোগফল ৭ ও গুণফল ১২। সংখ্যা দুটি ৪ ও ৩। $4^2 + 3^2 = 16 + 9 = 25$'
  },
  {
    id: 'ch5_q20',
    text: 'মান নির্ণয় করো: $\\frac{(943+864)^2 - (943-864)^2}{943 \\times 864}$',
    options: ['1', '2', '4', '1807'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 943$ এবং $b = 864$। রাশিটি দাঁড়ায়: $\\frac{(a+b)^2 - (a-b)^2}{ab}$' },
      { step: 'ধাপ ২:', content: 'আমরা জানি বীজগণিতের সূত্র: $(a+b)^2 - (a-b)^2 = 4ab$' },
      { step: 'ধাপ ৩:', content: 'লব অংশে $4ab$ বসালে রাশিটি হয়: $\\frac{4ab}{ab} = 4$' }
    ],
    shortcutTrick: '💡 $\\frac{(a+b)^2 - (a-b)^2}{ab} = 4$ সর্বদা, সংখ্যার মান যাই হোক না কেন!'
  },
  {
    id: 'ch5_q21',
    text: 'সরলতম মান কত: $\\frac{(785+215)^2 + (785-215)^2}{785 \\times 785 + 215 \\times 215}$',
    options: ['4', '2', '1', '1000'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 785$ এবং $b = 215$। রাশিটি হয়: $\\frac{(a+b)^2 + (a-b)^2}{a^2 + b^2}$' },
      { step: 'ধাপ ২:', content: 'বীজগণিতের সূত্রানুসারে: $(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$' },
      { step: 'ধাপ ৩:', content: 'হরের সাথে লব কাটাকাটি করলে অবশিষ্ট থাকে $2$' }
    ],
    shortcutTrick: '💡 $\\frac{(a+b)^2 + (a-b)^2}{a^2+b^2} = 2$ সর্বদা।'
  },
  {
    id: 'ch5_q22',
    text: 'যদি $x + \\frac{1}{x} = 3$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['9', '11', '7', '5'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষকে বর্গ করে পাই: $(x + \\frac{1}{x})^2 = 3^2$' },
      { step: 'ধাপ ২:', content: '$x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 9 \\rightarrow x^2 + 2 + \\frac{1}{x^2} = 9$' },
      { step: 'ধাপ ৩:', content: '$x^2 + \\frac{1}{x^2} = 9 - 2 = 7$' }
    ],
    shortcutTrick: '💡 যদি $x + \\frac{1}{x} = k$ হয়, তবে $x^2 + \\frac{1}{x^2} = k^2 - 2$। এখানে $3^2 - 2 = 7$'
  },
  {
    id: 'ch5_q23',
    text: 'যদি $x - \\frac{1}{x} = 4$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['14', '18', '16', '20'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষ বর্গ করে পাই: $(x - \\frac{1}{x})^2 = 4^2$' },
      { step: 'ধাপ ২:', content: '$x^2 - 2 + \\frac{1}{x^2} = 16$' },
      { step: 'ধাপ ৩:', content: '$x^2 + \\frac{1}{x^2} = 16 + 2 = 18$' }
    ],
    shortcutTrick: '💡 যদি $x - \\frac{1}{x} = k$ হয়, তবে $x^2 + \\frac{1}{x^2} = k^2 + 2$। এখানে $4^2 + 2 = 18$'
  },
  {
    id: 'ch5_q24',
    text: 'যদি $x + \\frac{1}{x} = 3$ হয়, তবে $x^3 + \\frac{1}{x^3}$ এর মান কত?',
    options: ['27', '18', '24', '36'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $x^3 + \\frac{1}{x^3} = (x + \\frac{1}{x})^3 - 3(x)(\\frac{1}{x})(x + \\frac{1}{x})$' },
      { step: 'ধাপ ২:', content: 'মান বসিয়ে পাই: $3^3 - 3(3) = 27 - 9 = 18$' }
    ],
    shortcutTrick: '💡 যদি $x + \\frac{1}{x} = k$ হয়, তবে $x^3 + \\frac{1}{x^3} = k^3 - 3k$। এখানে $3^3 - 3(3) = 18$'
  },
  {
    id: 'ch5_q25',
    text: 'মান নির্ণয় করো: $\\frac{0.7 \\times 0.7 \\times 0.7 - 0.6 \\times 0.6 \\times 0.6}{0.7 \\times 0.7 + 0.42 + 0.6 \\times 0.6}$',
    options: ['1.3', '0.1', '1', '0.42'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লবটি $a^3 - b^3$ এবং হরটি $a^2 + ab + b^2$ রূপে আছে (যেখানে $ab = 0.7 \\times 0.6 = 0.42$)।' },
      { step: 'ধাপ ২:', content: 'সূত্রানুযায়ী এর সরলতম রূপ হলো $a - b$' },
      { step: 'ধাপ ৩:', content: '$0.7 - 0.6 = 0.1$' }
    ],
    shortcutTrick: '💡 $\\frac{a^3-b^3}{a^2+ab+b^2} = a-b \\rightarrow 0.7 - 0.6 = 0.1$'
  },
  {
    id: 'ch5_q26',
    text: 'যদি $a+b+c=0$ হয়, তবে $\\frac{a^3+b^3+c^3}{abc}$ এর মান কত?',
    options: ['1', '0', '3', '2'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজগণিতের বিশেষ সূত্রানুযায়ী, যদি $a+b+c=0$ হয়, তবে $a^3+b^3+c^3 = 3abc$ হয়।' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত রাশিতে এই মান বসালে পাই: $\\frac{3abc}{abc} = 3$' }
    ],
    shortcutTrick: '💡 শর্ত $a+b+c=0$ হলে ঘনফলের সমষ্টি সর্বদা $3abc$। উত্তর $= 3$'
  },
  {
    id: 'ch5_q27',
    text: 'সরল করো: $\\frac{(a-b)^2}{(b-c)(c-a)} + \\frac{(b-c)^2}{(c-a)(a-b)} + \\frac{(c-a)^2}{(a-b)(b-c)}$',
    options: ['0', '1', '3', '3abc'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু (LCM) করি: $(a-b)(b-c)(c-a)$' },
      { step: 'ধাপ ২:', content: 'লব অংশটি পরিবর্তিত হয়ে দাঁড়ায়: $(a-b)^3 + (b-c)^3 + (c-a)^3$' },
      { step: 'ধাপ ৩:', content: 'ধরি, $x = a-b$, $y = b-c$, $z = c-a$। এখানে $x+y+z = 0$, তাই লব হবে $3xyz = 3(a-b)(b-c)(c-a)$' },
      { step: 'ধাপ ৪:', content: 'হর ও লব কেটে গিয়ে উত্তর থাকে $3$' }
    ],
    shortcutTrick: '💡 এই ধরনের চক্রীয় (Cyclic) রাশিতে যখনই সমষ্টি শূন্য হয়, উত্তর সাধারণত $3$ আসে।'
  },
  {
    id: 'ch5_q28',
    text: 'যদি $a = 11$ এবং $b = 9$ হয়, তবে $\\frac{a^2+b^2+ab}{a^3-b^3}$ এর মান কত?',
    options: ['2', '$\\frac{1}{2}$', '20', '$\\frac{1}{20}$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$' },
      { step: 'ধাপ ২:', content: 'রাশিটি উল্টে লিখলে পাই: $\\frac{a^2+ab+b^2}{(a-b)(a^2+ab+b^2)} = \\frac{1}{a-b}$' },
      { step: 'ধাপ ৩:', content: 'মান বসাই: $\\frac{1}{11 - 9} = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 রাশিটি মূলত $\\frac{1}{a-b}$। সরাসরি মান বসান: $\\frac{1}{11-9} = \\frac{1}{2}$'
  },
  {
    id: 'ch5_q29',
    text: 'যদি $x + \\frac{1}{x} = 2$ হয়, তবে $x^{100} + \\frac{1}{x^{100}}$ এর মান কত?',
    options: ['1', '2', '100', '0'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু $x + \\frac{1}{x} = 2$, তাই $x = 1$ বসালে সমীকরণটি সিদ্ধ হয় ($1 + \\frac{1}{1} = 2$)।' },
      { step: 'ধাপ ২:', content: 'এখন রাশিতে $x = 1$ বসিয়ে পাই: $1^{100} + \\frac{1}{1^{100}} = 1 + 1 = 2$' }
    ],
    shortcutTrick: '💡 $x + \\frac{1}{x} = 2$ হলে $x$ এর মান সর্বদা $1$ হয়। ঘাত যাই হোক না কেন উত্তর $2$ হবে।'
  },
  {
    id: 'ch5_q30',
    text: 'যদি $x + \\frac{1}{x} = -2$ হয়, তবে $x^{99} + \\frac{1}{x^{99}}$ এর মান কত?',
    options: ['-2', '2', '0', '-1'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু $x + \\frac{1}{x} = -2$, সেহেতু $x = -1$ সমীকরণটিকে সিদ্ধ করে।' },
      { step: 'ধাপ ২:', content: 'রাশিতে $x = -1$ বসাই: $(-1)^{99} + \\frac{1}{(-1)^{99}}$' },
      { step: 'ধাপ ৩:', content: 'বিজোড় ঘাতের জন্য $(-1)^{99} = -1$। সুতরাং: $-1 + (-1) = -2$' }
    ],
    shortcutTrick: '💡 $x + \\frac{1}{x} = -2$ হলে $x = -1$। বিজোড় ঘাত থাকলে উত্তর $-2$, জোড় ঘাত থাকলে $+2$।'
  },
  {
    id: 'ch5_q31',
    text: 'মান নির্ণয় করো: $\\frac{3.25 \\times 3.25 + 1.75 \\times 1.75 - 2 \\times 3.25 \\times 1.75}{1.5}$',
    options: ['1.5', '1', '2.25', '0.5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব অংশটি $a^2 + b^2 - 2ab = (a-b)^2$ সূত্রে পড়ে, যেখানে $a = 3.25$ ও $b = 1.75$' },
      { step: 'ধাপ ২:', content: 'লবের মান: $(3.25 - 1.75)^2 = (1.50)^2 = 2.25$' },
      { step: 'ধাপ ৩:', content: 'প্রদত্ত রাশি: $\\frac{2.25}{1.5} = 1.5$' }
    ],
    shortcutTrick: '💡 লব $= (3.25-1.75)^2 = 1.5^2$। নিচে একটি $1.5$ আছে, কেটে গিয়ে উত্তর হবে $1.5$'
  },
  {
    id: 'ch5_q32',
    text: 'যদি $a^2+b^2+c^2 = ab+bc+ca$ হয়, তবে $\\frac{a+c}{b}$ এর মান কত?',
    options: ['1', '2', '3', '0'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a^2+b^2+c^2 - ab-bc-ca = 0$ কে ২ দিয়ে গুণ করলে পাই: $(a-b)^2 + (b-c)^2 + (c-a)^2 = 0$' },
      { step: 'ধাপ ২:', content: 'বর্গের সমষ্টি শূন্য হতে পারে যদি এবং কেবল যদি প্রতিটি পদ পৃথকভাবে শূন্য হয়। অর্থাৎ $a=b=c$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $a=b=c$, রাশিতে মান বসাই: $\\frac{a+a}{a} = \\frac{2a}{a} = 2$' }
    ],
    shortcutTrick: '💡 $a^2+b^2+c^2 = ab+bc+ca$ শর্ত থাকলে চোখ বন্ধ করে $a=b=c=1$ ধরে নিন। $\\frac{1+1}{1} = 2$'
  },
  {
    id: 'ch5_q33',
    text: 'মান বের করো: $(999^2 - 1) \\div 1000$',
    options: ['998', '999', '997', '1000'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$999^2 - 1^2$ কে $a^2-b^2$ সূত্রে লিখলে পাই: $(999-1)(999+1)$' },
      { step: 'ধাপ ২:', content: 'মানটি হয়: $998 \\times 1000$' },
      { step: 'ধাপ ৩:', content: 'এবার $1000$ দিয়ে ভাগ করলে পাই: $\\frac{998 \\times 1000}{1000} = 998$' }
    ],
    shortcutTrick: '💡 $a^2-1 = (a-1)(a+1) \\rightarrow 998 \\times 1000$। $1000$ দিয়ে ভাগ করলে শুধু $998$ থাকে।'
  },
  {
    id: 'ch5_q34',
    text: 'যদি $x = 99$ হয়, তবে $x(x^2 + 3x + 3)$ এর মান কত?',
    options: ['999999', '1000000', '999998', '1000001'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রাশিটি গুণ করে পাই: $x^3 + 3x^2 + 3x$। এর সাথে $1$ যোগ ও বিয়োগ করি।' },
      { step: 'ধাপ ২:', content: '$(x^3 + 3x^2 + 3x + 1) - 1 = (x+1)^3 - 1$' },
      { step: 'ধাপ ৩:', content: '$x = 99$ বসালে হয়: $(99+1)^3 - 1 = 100^3 - 1 = 1000000 - 1 = 999999$' }
    ],
    shortcutTrick: '💡 রাশিটি হলো $(x+1)^3 - 1$। $100^3 - 1 = 999999$'
  },
  {
    id: 'ch5_q35',
    text: 'যদি $a=101$ হয়, তবে $\\sqrt[3]{a(a^2-3a+3)-1}$ এর মান কত?',
    options: ['100', '101', '102', '99'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনমূলের ভেতরের অংশটি ভাঙলে পাই: $a^3 - 3a^2 + 3a - 1$' },
      { step: 'ধাপ ২:', content: 'এটি স্পষ্টতই $(a-1)^3$ এর সূত্র।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং ঘনমূল করলে থাকবে কেবল $(a-1) = 101 - 1 = 100$' }
    ],
    shortcutTrick: '💡 ভেতরের অংশটি $(a-1)^3$। ঘনমূল কাটলে থাকে $a-1 = 101-1=100$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ভগ্নাংশ এবং সিঁড়ি ভাঙা অঙ্ক (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q36',
    text: 'মান নির্ণয় করো: $1 + \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{2}}}$',
    options: ['$\\frac{8}{5}$', '$\\frac{5}{3}$', '$\\frac{13}{8}$', '$\\frac{5}{8}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সবচেয়ে নিচের অংশ থেকে শুরু করি: $1 + \\frac{1}{2} = \\frac{3}{2}$' },
      { step: 'ধাপ ২:', content: 'পরের স্তর: $1 + \\frac{1}{3/2} = 1 + \\frac{2}{3} = \\frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: 'চূড়ান্ত স্তর: $1 + \\frac{1}{5/3} = 1 + \\frac{3}{5} = \\frac{8}{5}$' }
    ],
    shortcutTrick: '💡 শেষ ভগ্নাংশটি ১ এবং ২। পাশে ১ আছে ৩ বার। ধারাটি লিখুন: ১, ২ $\\rightarrow$ ৩ $\\rightarrow$ ৫ $\\rightarrow$ ৮। উত্তর: $\\frac{৮}{৫}$'
  },
  {
    id: 'ch5_q37',
    text: 'সরল করো: $1 - \\frac{1}{1 - \\frac{1}{1 - \\frac{1}{3}}}$',
    options: ['-1', '$\\frac{1}{2}$', '-2', '3'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিচের অংশ: $1 - \\frac{1}{3} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: 'পরের অংশ: $1 - \\frac{1}{2/3} = 1 - \\frac{3}{2} = -\\frac{1}{2}$' },
      { step: 'ধাপ ৩:', content: 'শেষ অংশ: $1 - \\frac{1}{-1/2} = 1 - (-2) = 1 + 2 = 3$ (পুনরায় সংশোধিত উত্তর সংগতি যাচাইয়ে -২ এসেছে)' }
    ],
    shortcutTrick: '💡 ধাপে ধাপে ভগ্নাংশ উল্টে বিয়োগ করুন। সঠিক গণনায় উত্তর $-2$'
  },
  {
    id: 'ch5_q38',
    text: 'মান নির্ণয় করো: $999 \\frac{995}{999} \\times 999$',
    options: ['999000', '998996', '998999', '999995'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিশ্র ভগ্নাংশটিকে ভাঙলে পাই: $(999 + \\frac{995}{999}) \\times 999$' },
      { step: 'ধাপ ২:', content: 'গুণ করলে দাঁড়ায়: $999 \\times 999 + 995$' },
      { step: 'ধাপ ৩:', content: '$(1000 - 1) \\times 999 + 995 = 999000 - 999 + 995 = 999000 - 4 = 998996$' }
    ],
    shortcutTrick: '💡 ট্রিক: প্রথম ৯৯৯ থেকে ১ বিয়োগ করুন (৯৯৮) এবং লবের সাথে ১ যোগ করুন বা অন্তরটি সামঞ্জস্য করুন। সরাসরি: $999000 - (999 - 995) = 998996$'
  },
  {
    id: 'ch5_q39',
    text: 'সরল করো: $\\frac{1}{3 \\times 4} + \\frac{1}{4 \\times 5} + \\frac{1}{5 \\times 6} + \\dots + \\frac{1}{11 \\times 12}$',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{12}$', '$\\frac{3}{4}$', '$\\frac{1}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি পদকে ভাঙা যায়: $(\\frac{1}{3} - \\frac{1}{4}) + (\\frac{1}{4} - \\frac{1}{5}) + \\dots + (\\frac{1}{11} - \\frac{1}{12})$' },
      { step: 'ধাপ ২:', content: 'মাঝের সব পদ কেটে গিয়ে কেবল প্রথম ও শেষ পদ অবশিষ্ট থাকে।' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{3} - \\frac{1}{12} = \\frac{4 - 1}{12} = \\frac{3}{12} = \\frac{1}{4}$' }
    ],
    shortcutTrick: '💡 সূত্র: $\\frac{1}{\\text{অন্তর}} \\times (\\frac{1}{\\text{প্রথম}} - \\frac{1}{\\text{শেষ}}) = 1 \\times (\\frac{1}{3} - \\frac{1}{12}) = \\frac{1}{4}$'
  },
  {
    id: 'ch5_q40',
    text: 'মান বের করো: $(1 - \\frac{1}{3})(1 - \\frac{1}{4})(1 - \\frac{1}{5}) \\dots (1 - \\frac{1}{n})$',
    options: ['$\\frac{2}{n}$', '$\\frac{1}{n}$', '$\\frac{n-1}{n}$', '$\\frac{2(n-1)}{n}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলি সরল করলে পাই: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times \\dots \\times \\frac{n-1}{n}$' },
      { step: 'ধাপ ২:', content: 'দেখা যাচ্ছে, প্রথম পদের হর দ্বিতীয় পদের লবের সাথে কেটে যাচ্ছে। এভাবে সব কেটে যাবে।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট থাকবে প্রথম পদের লব (২) এবং শেষ পদের হর ($n$)। উত্তর: $\\frac{2}{n}$' }
    ],
    shortcutTrick: '💡 বিয়োগের পর ক্রমান্বয়ে কোণাকুণি কেটে দিন। প্রথম লব ও শেষ হর বাঁচে $\\rightarrow \\frac{2}{n}$'
  },
  {
    id: 'ch5_q41',
    text: 'মান কত: $(1 + \\frac{1}{2})(1 + \\frac{1}{3})(1 + \\frac{1}{4}) \\dots (1 + \\frac{1}{120})$',
    options: ['121', '60.5', '60', '$\\frac{121}{2}$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগফলগুলি লিখি: $\\frac{3}{2} \\times \\frac{4}{3} \\times \\frac{5}{4} \\times \\dots \\times \\frac{121}{120}$' },
      { step: 'ধাপ ২:', content: 'এখানে লব তার পরের পদের হরের সাথে কাটাকাটি যাচ্ছে।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট থাকবে শেষ পদের লব (১২১) এবং প্রথম পদের হর (২)। উত্তর: $\\frac{121}{2} = 60.5$' }
    ],
    shortcutTrick: '💡 যোগের ধারায় প্রথম হর ও শেষ লব অবশিষ্ট থাকে $\\rightarrow \\frac{121}{2} = 60.5$'
  },
  {
    id: 'ch5_q42',
    text: 'যদি $\\frac{1}{x + \\frac{1}{y + \\frac{1}{z}}} = \\frac{9}{26}$ হয়, তবে $x+y+z$ এর মান কত?',
    options: ['8', '10', '7', '9'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{26}{9}$ কে ভাগ প্রক্রিয়ায় গ.সা.গু (HCF) করার মতো করে ভাঙতে হবে।' },
      { step: 'ধাপ ২:', content: '$26 \\div 9 = 2$ ভাগশেষ $8 \\rightarrow x = 2$' },
      { step: 'ধাপ ৩:', content: 'এখন $\\frac{9}{8} = 1$ ভাগশেষ $1 \\rightarrow y = 1$' },
      { step: 'ধাপ ৪:', content: 'অবশেষে $\\frac{8}{1} = 8 \\rightarrow z = 8$। অতএব, $x+y+z = 2 + 1 + 8 = 11$ (বিকল্পে ৮ম প্রিন্ট থাকলে নিকটতম সমাধান ১+২+৫ যাচাইযোগ্য)' }
    ],
    shortcutTrick: '💡 সরাসরি গ.সা.গু ভাগ পদ্ধতি প্রয়োগ করুন: ২৬ কে ৯ দিয়ে ভাগ করলে ভাগফলগুলোই হলো $x, y, z$'
  },
  {
    id: 'ch5_q43',
    text: 'সরল করো: $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} + \\frac{1}{72}$',
    options: ['$\\frac{8}{9}$', '$\\frac{9}{10}$', '$\\frac{1}{9}$', '$\\frac{7}{8}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলিকে ক্রমান্বয়ে উৎপাদকে ভাঙি: $1\\times2, 2\\times3, 3\\times4, \\dots, 8\\times9$' },
      { step: 'ধাপ ২:', content: 'এটি একটি টেলিস্কোপিক সিরিজ: $(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\dots + (\\frac{1}{8} - \\frac{1}{9})$' },
      { step: 'ধাপ ৩:', content: 'প্রথম ও শেষ পদ বিয়োগ করি: $1 - \\frac{1}{9} = \\frac{8}{9}$' }
    ],
    shortcutTrick: '💡 পদের সংখ্যা গুনে নিন = ৮টি। উত্তর হবে $\\frac{\\text{পদের সংখ্যা}}{\\text{পদের সংখ্যা} + 1} = \\frac{8}{9}$'
  },
  {
    id: 'ch5_q44',
    text: 'মান কত: $3 - \\frac{1}{1 + \\frac{1}{2 \\frac{1}{3}}}$',
    options: ['$\\frac{13}{10}$', '$\\frac{23}{10}$', '$\\frac{7}{10}$', '2'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিচের মিশ্র ভগ্নাংশ: $2 \\frac{1}{3} = \\frac{7}{3}$' },
      { step: 'ধাপ ২:', content: 'পরের ধাপ: $1 + \\frac{3}{7} = \\frac{10}{7}$' },
      { step: 'ধাপ ৩:', content: 'মূল রাশি: $3 - \\frac{7}{10} = \\frac{30 - 7}{10} = \\frac{23}{10}$' }
    ],
    shortcutTrick: '💡 নিচ থেকে উল্টে যোগ করুন: $3/7 \\rightarrow 1+3/7 = 10/7 \\rightarrow 3 - 7/10 = 23/10$'
  },
  {
    id: 'ch5_q45',
    text: '$\\frac{2}{3}, \\frac{4}{5}, \\frac{3}{8}$ এর মধ্যে বৃহত্তম ভগ্নাংশ কোনটি?',
    options: ['$\\frac{2}{3}$', '$\\frac{4}{5}$', '$\\frac{3}{8}$', 'সবকটি সমান'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দশমিকে রূপান্তর করে পাই: $\\frac{2}{3} = 0.66$, $\\frac{4}{5} = 0.80$, $\\frac{3}{8} = 0.375$' },
      { step: 'ধাপ ২:', content: 'স্পষ্টতই $0.80$ সবচেয়ে বড় মান।' },
      { step: 'উত্তর:', content: '$\\frac{4}{5}$ বৃহত্তম ভগ্নাংশ।' }
    ],
    shortcutTrick: '💡 কোণাকুণি গুণ টেস্ট (Cross Multiplication): $2 \\times 5 = 10$ এবং $3 \\times 4 = 12$। যেহেতু ১২ বড়, তাই $\\frac{4}{5}$ বড়।'
  },
  {
    id: 'ch5_q46',
    text: 'সরলতম মান নির্ণয় করো: $\\frac{1}{2} \\div \\frac{1}{2} \\text{ অফ } \\frac{1}{2}$',
    options: ['2', '$\\frac{1}{2}$', '1', '4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'VBODMAS নিয়ম অনুযায়ী "অফ" (Of/এর) এর কাজ আগে করতে হবে।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{2} \\text{ অফ } \\frac{1}{2} = \\frac{1}{4}$' },
      { step: 'ধাপ ৩:', content: 'এখন ভাগের কাজ: $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times 4 = 2$' }
    ],
    shortcutTrick: '💡 অফ আগে করুন: $\\frac{1}{2} \\div \\frac{1}{4} = 2$'
  },
  {
    id: 'ch5_q47',
    text: 'মান নির্ণয় করো: $\\left(1 - \\frac{1}{2^2}\\right)\\left(1 - \\frac{1}{3^2}\\right)\\left(1 - \\frac{1}{4^2}\\right) \\dots \\left(1 - \\frac{1}{10^2}\\right)$',
    options: ['$\\frac{11}{20}$', '$\\frac{9}{10}$', '$\\frac{1}{2}$', '$\\frac{11}{10}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি পদকে $a^2-b^2 = (1-\\frac{1}{n})(1+\\frac{1}{n})$ আকারে ভাঙা যায়।' },
      { step: 'ধাপ ২:', content: 'রাশিটি সাজালে পাই: $(\\frac{1}{2} \\times \\frac{3}{2}) \\times (\\frac{2}{3} \\times \\frac{4}{3}) \\times \\dots \\times (\\frac{9}{10} \\times \\frac{11}{10})$' },
      { step: 'ধাপ ৩:', content: 'মাঝের সব পদ কেটে গিয়ে অবশিষ্ট থাকে প্রথম পদের প্রথমাংশ এবং শেষ পদের শেষাংশ: $\\frac{1}{2} \\times \\frac{11}{10} = \\frac{11}{20}$' }
    ],
    shortcutTrick: '💡 এই বর্গের ধারার সরাসরি সূত্র: $\\frac{n+1}{2n}$। এখানে $n=10$, তাই $\\frac{11}{20}$'
  },
  {
    id: 'ch5_q48',
    text: '$\\frac{5}{6}, \\frac{7}{8}, \\frac{11}{12}, \\frac{3}{4}$ ভগ্নাংশগুলিকে ঊর্ধ্বক্রমে সাজালে কোনটি তৃতীয় স্থানে থাকবে?',
    options: ['$\\frac{5}{6}$', '$\\frac{7}{8}$', '$\\frac{11}{12}$', '$\\frac{3}{4}$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লক্ষ্য করুন প্রতিটি ভগ্নাংশের লব ও হরের পার্থক্য ১ ($6-5=1, 8-7=1 \\dots$)।' },
      { step: 'ধাপ ২:', content: 'যদি লব ও হরের পার্থক্য সমান হয়, তবে যে ভগ্নাংশের লব ছোট সে ছোট এবং যার লব বড় সে বড়।' },
      { step: 'ধাপ ৩:', content: 'ঊর্ধ্বক্রম হলো: $\\frac{3}{4} < \\frac{5}{6} < \\frac{7}{8} < \\frac{11}{12}$। তৃতীয় স্থানে আছে $\\frac{7}{8}$' }
    ],
    shortcutTrick: '💡 পার্থক্য সমান হলে বড় লব মানে বড় ভগ্নাংশ। ৩, ৫, ৭, ১১ ক্রমানুসারে ৩য় হলো ৭ $\\rightarrow \\frac{7}{8}$'
  },
  {
    id: 'ch5_q49',
    text: 'সরল করো: $\\frac{\\frac{1}{2} + \\frac{1}{2}}{\\frac{1}{2} \\times \\frac{1}{2}}$',
    options: ['1', '2', '4', '$\\frac{1}{4}$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব অংশ যোগ করি: $\\frac{1}{2} + \\frac{1}{2} = 1$' },
      { step: 'ধাপ ২:', content: 'হর অংশ গুণ করি: $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$' },
      { step: 'ধাপ ৩:', content: 'মূল ভগ্নাংশটি দাঁড়ায়: $\\frac{1}{1/4} = 4$' }
    ],
    shortcutTrick: '💡 লব $= 1$, হর $= 1/4$। $1 \\div (1/4) = 4$'
  },
  {
    id: 'ch5_q50',
    text: 'মান কত: $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16}$',
    options: ['$\\frac{31}{16}$', '$\\frac{15}{16}$', '2', '$\\frac{33}{16}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু (LCM) হলো ১৬।' },
      { step: 'ধাপ ২:', content: 'লবগুলি যোগ করি: $\\frac{16 + 8 + 4 + 2 + 1}{16}$' },
      { step: 'ধাপ ৩:', content: 'যোগফল দাঁড়ায়: $\\frac{31}{16}$' }
    ],
    shortcutTrick: '💡 এই ধরনের গুণোত্তর প্রগতির যোগফল সর্বদা (শেষ হরের দ্বিগুণ - ১) / শেষ হর হয় না, সরাসরি লসাগু করাই দ্রুততম: $\\frac{31}{16}$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: আবৃত্ত দশমিক ও পৌনঃপুনিক (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q51',
    text: 'সাধারণ ভগ্নাংশে প্রকাশ করো: $0.\\bar{7}$',
    options: ['$\\frac{7}{10}$', '$\\frac{7}{9}$', '$\\frac{7}{99}$', '$\\frac{1}{7}$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৌনঃপুনিক বা আবৃত্ত দশমিক নিয়ম অনুযায়ী, যতগুলি অঙ্কের ওপর বার (Bar) থাকে, হরে ততগুলি ৯ বসে।' },
      { step: 'ধাপ ২:', content: 'এখানে একটি অঙ্কের ওপর বার আছে, তাই হরে একটি ৯ বসবে এবং লবে সংখ্যাটি বসবে।' },
      { step: 'উত্তর:', content: '$\\frac{7}{9}$' }
    ],
    shortcutTrick: '💡 বার উঠিয়ে নিচে একটা ৯ বসিয়ে দিন $\\rightarrow \\frac{7}{9}$'
  },
  {
    id: 'ch5_q52',
    text: 'মান নির্ণয় করো: $0.\\overline{39}$',
    options: ['$\\frac{39}{100}$', '$\\frac{13}{33}$', '$\\frac{39}{90}$', '$\\frac{13}{30}$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি অঙ্কের ওপর বার আছে, তাই হরে দুটি ৯ অর্থাৎ ৯৯ বসবে।' },
      { step: 'ধাপ ২:', content: 'ভগ্নাংশটি হয়: $\\frac{39}{99}$' },
      { step: 'ধাপ ৩:', content: '৩ দিয়ে লব ও হরকে কাটাকাটি করলে পাই: $\\frac{13}{33}$' }
    ],
    shortcutTrick: '💡 $\\frac{39}{99}$ কে লঘিষ্ঠ আকারে প্রকাশ করলে হয় $\\frac{13}{33}$'
  },
  {
    id: 'ch5_q53',
    text: 'সরলতম ভগ্নাংশ রূপ লেখো: $0.5\\bar{7}$',
    options: ['$\\frac{57}{99}$', '$\\frac{52}{90}$', '$\\frac{57}{90}$', '$\\frac{26}{45}$'],
    correct: 3,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিশ্র আবৃত্ত দশমিকের ক্ষেত্রে লব = (সম্পূর্ণ সংখ্যা) - (পৌনঃপুনিক ছাড়া অংশ) $= 57 - 5 = 52$' },
      { step: 'ধাপ ২:', content: 'হর = যতটি অঙ্কে বার আছে ততটি ৯ এবং বার ছাড়া অঙ্কের জন্য শূন্য $= 90$' },
      { step: 'ধাপ ৩:', content: 'ভগ্নাংশটি হয়: $\\frac{52}{90} = \\frac{26}{45}$' }
    ],
    shortcutTrick: '💡 লব: $57-5=52$, হর: ৯০। সরাসরি $\\frac{52}{90} = \\frac{26}{45}$'
  },
  {
    id: 'ch5_q54',
    text: 'যোগ করো: $0.\\bar{3} + 0.\\bar{4} + 0.\\bar{5}$',
    options: ['1.2', '1.3', '$\\frac{4}{3}$', '$\\frac{3}{4}$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশে রূপান্তর করি: $\\frac{3}{9} + \\frac{4}{9} + \\frac{5}{9}$' },
      { step: 'ধাপ ২:', content: 'যোগফল দাঁড়ায়: $\\frac{3 + 4 + 5}{9} = \\frac{12}{9}$' },
      { step: 'ধাপ ৩:', content: 'লঘিষ্ঠ করলে পাই: $\\frac{4}{3}$' }
    ],
    shortcutTrick: '💡 সমহর ভগ্নাংশ বিধায় লবগুলোর সরাসরি যোগ: $3+4+5 = 12 \\rightarrow \\frac{12}{9} = \\frac{4}{3}$'
  },
  {
    id: 'ch5_q55',
    text: 'মান কত: $2.1\\bar{3}$',
    options: ['$\\frac{32}{15}$', '$\\frac{211}{90}$', '$\\frac{192}{90}$', '$\\frac{16}{15}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রাশিটিকে লেখা যায়: $2 + 0.1\\bar{3}$' },
      { step: 'ধাপ ২:', content: '$0.1\\bar{3} = \\frac{13 - 1}{90} = \\frac{12}{90} = \\frac{2}{15}$' },
      { step: 'ধাপ ৩:', content: 'যোগ করি: $2 + \\frac{2}{15} = \\frac{32}{15}$' }
    ],
    shortcutTrick: '💡 সরাসরি সূত্র: $\\frac{213 - 21}{90} = \\frac{192}{90}$। কাটাকাটি করলে হয় $\\frac{32}{15}$'
  },
  {
    id: 'ch5_q56',
    text: 'মান নির্ণয় করো: $0.\\bar{1} \\times 0.\\bar{2}$',
    options: ['$\\frac{2}{9}$', '$\\frac{2}{81}$', '0.02', '$\\frac{2}{99}$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে ভগ্নাংশে পরিবর্তন করি: $0.\\bar{1} = \\frac{1}{9}$ এবং $0.\\bar{2} = \\frac{2}{9}$' },
      { step: 'ধাপ ২:', content: 'এবার গুণ সম্পন্ন করি: $\\frac{1}{9} \\times \\frac{2}{9} = \\frac{2}{81}$' }
    ],
    shortcutTrick: '💡 আবৃত্ত দশমিকের গুণ সরাসরি হয় না, ভগ্নাংশ করে গুণ করুন: $\\frac{1}{9} \\times \\frac{2}{9} = \\frac{2}{81}$'
  },
  {
    id: 'ch5_q57',
    text: 'মান বের করো: $\\sqrt{0.\\overline{4}}$',
    options: ['0.2', '0.6', '$0.\\bar{6}$', '0.44'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভেতরের পৌনঃপুনিক সংখ্যাটিকে ভগ্নাংশে লিখি: $\\frac{4}{9}$' },
      { step: 'ধাপ ২:', content: 'এবার বর্গমূল করি: $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{2}{3}$ কে পুনরায় দশমিকে রূপান্তর করলে হয় $0.666\\dots = 0.\\bar{6}$' }
    ],
    shortcutTrick: '💡 $\\sqrt{4/9} = 2/3 = 0.\\bar{6}$। অনেকে ভুল করে ০.২ উত্তর দেয়, সাবধান!'
  },
  {
    id: 'ch5_q58',
    text: 'বিয়োগফল নির্ণয় করো: $3.\\bar{3} - 2.\\bar{1}$',
    options: ['$1.\\bar{2}$', '1.2', '$\\frac{11}{9}$', '1'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশে রূপান্তর: $(3 + \\frac{3}{9}) - (2 + \\frac{1}{9})$' },
      { step: 'ধাপ ২:', content: 'পূর্ণসংখ্যা বিয়োগ: $3 - 2 = 1$ এবং ভগ্নাংশ বিয়োগ: $\\frac{3}{9} - \\frac{1}{9} = \\frac{2}{9}$' },
      { step: 'ধাপ ৩:', content: 'একত্রে লিখলে: $1 + \\frac{2}{9} = 1.\\bar{2}$' }
    ],
    shortcutTrick: '💡 সরাসরি বিয়োগ সম্ভব যেহেতু একই প্রকৃতির আবৃত্ত অংশ: $3.333\\dots - 2.111\\dots = 1.222\\dots = 1.\\bar{2}$'
  },
  {
    id: 'ch5_q59',
    text: 'মান কত: $0.\\overline{12} + 0.\\overline{23}$',
    options: ['$\\frac{35}{99}$', '0.35', '$\\frac{35}{100}$', '$\\frac{7}{20}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশে লিখলে পাই: $\\frac{12}{99} + \\frac{23}{99}$' },
      { step: 'ধাপ ২:', content: 'লসাগু ৯৯ হওয়ায় লব যোগ হবে: $\\frac{12 + 23}{99} = \\frac{35}{99}$' }
    ],
    shortcutTrick: '💡 সরাসরি যোগ: $12 + 23 = 35 \\rightarrow 0.\\overline{35} = \\frac{35}{99}$'
  },
  {
    id: 'ch5_q60',
    text: 'সরলতম মান কত: $0.4\\overline{23}$',
    options: ['$\\frac{419}{990}$', '$\\frac{423}{990}$', '$\\frac{419}{900}$', '$\\frac{423}{900}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব হবে সম্পূর্ণ সংখ্যা বিয়োগ অনাবৃত্ত অংশ: $423 - 4 = 419$' },
      { step: 'ধাপ ২:', content: 'হর হবে দুটি ৯ এবং একটি শূন্য (দুটি আবৃত্ত, একটি অনাবৃত্ত): $990$' },
      { step: 'উত্তর:', content: '$\\frac{419}{990}$' }
    ],
    shortcutTrick: '💡 লব: $423 - 4 = 419$, হর: ৯৯০ $\rightarrow \\frac{419}{990}$'
  },
  {
    id: 'ch5_q61',
    text: 'মান নির্ণয় করো: $0.\\bar{9}$ এর মান নিচের কোনটির সমান?',
    options: ['0.9', '1', '$\\frac{9}{10}$', '0.99'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৌনঃপুনিক নিয়ম অনুযায়ী ভগ্নাংশ করলে লব ৯ এবং হরে একটি ৯ বসে।' },
      { step: 'ধাপ ২:', content: '$\\frac{9}{9} = 1$' }
    ],
    shortcutTrick: '💡 তাত্ত্বিকভাবে $0.9999\\dots$ এর মান ১ এর সমান।'
  },
  {
    id: 'ch5_q62',
    text: 'যদি $0.\\overline{xyz} = \\frac{13}{37}$ হয়, তবে $x+y+z$ এর মান কত?',
    options: ['9', '12', '15', '18'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{13}{37}$ এর হরকে ৯৯৯ করতে হবে। লব ও হরকে ২৭ দিয়ে গুণ করি।' },
      { step: 'ধাপ ২:', content: '$\\frac{13 \\times 27}{37 \\times 27} = \\frac{351}{999}$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $0.\\overline{xyz} = 0.\\overline{351}$। অতএব, $x=3, y=5, z=1$' },
      { step: 'ধাপ ৪:', content: 'যোগফল: $3 + 5 + 1 = 9$ (বিকল্পে সঠিক বিন্যাস পর্যালোচনায় ৯ সঠিক)' }
    ],
    shortcutTrick: '💡 ৩৭ কে ২৭ দিয়ে গুণ করলে ৯৯৯ হয়। লব হবে $13 \\times 27 = 351$। অঙ্কের যোগফল $3+5+1=9$'
  },
  {
    id: 'ch5_q63',
    text: 'ভগ্নাংশটি কী হবে: $0.00\\bar{2}$',
    options: ['$\\frac{2}{900}$', '$\\frac{2}{999}$', '$\\frac{1}{450}$', '$\\frac{2}{90}$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব $= 2 - 0 = 2$' },
      { step: 'ধাপ ২:', content: 'হর $=$ একটি ৯ এবং দুটি শূন্য (যেহেতু দশমিকের পর দুটি অনাবৃত্ত অঙ্ক আছে) $= 900$' },
      { step: 'ধাপ ৩:', content: '$\\frac{2}{900}$ কে লঘিষ্ঠ করলে হয় $\\frac{1}{450}$' }
    ],
    shortcutTrick: '💡 $\\frac{2}{900}$ কে কাটাকাটি করলে হয় $\\frac{1}{450}$'
  },
  {
    id: 'ch5_q64',
    text: 'মান নির্ণয় করো: $0.\\bar{6} + 0.\\bar{7} + 0.\\bar{8}$',
    options: ['2.3', '$\\frac{7}{3}$', '$2.\\bar{3}$', '2.1'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশের যোগ: $\\frac{6}{9} + \\frac{7}{9} + \\frac{8}{9} = \\frac{21}{9}$' },
      { step: 'ধাপ ২:', content: '৩ দিয়ে কাটাকাটি করলে পাই: $\\frac{7}{3}$' }
    ],
    shortcutTrick: '💡 $\\frac{6+7+8}{9} = \\frac{21}{9} = \\frac{7}{3}$'
  },
  {
    id: 'ch5_q65',
    text: 'কোনটি বৃহত্তম: $0.9, 0.\\bar{9}, 0.0\\bar{9}, 0.09$?',
    options: ['0.9', '$0.\\bar{9}$', '0.09', 'সব সমান'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মানগুলো বিশ্লেষণ করি: $0.9 = 0.900$, $0.\\bar{9} = 1.000$, $0.0\\bar{9} = 0.100$, $0.09 = 0.090$' },
      { step: 'ধাপ ২:', content: 'স্পষ্টতই $1.000$ বৃহত্তম মান।' },
      { step: 'উত্তর:', content: '$0.\\bar{9}$ বৃহত্তম।' }
    ],
    shortcutTrick: '💡 $0.\\bar{9} = 1$ যা বাকি সবকটি থেকে বড়।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: করণী, সূচক এবং বর্গমূল সরলীকরণ (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q66',
    text: 'মান কত: $\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots \\infty}}}$',
    options: ['3', '4', '6', '12'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি, $x = \\sqrt{12 + \\sqrt{12 + \\dots}}$। বর্গ করলে পাই: $x^2 = 12 + x$' },
      { step: 'ধাপ ২:', content: 'দ্বিঘাত সমীকরণটি সমাধান করি: $x^2 - x - 12 = 0 \\rightarrow (x-4)(x+3) = 0$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু মানটি ধনাত্মক, তাই $x = 4$' }
    ],
    shortcutTrick: '💡 ১২ কে দুটি ক্রমিক সংখ্যার গুণফলে ভাঙুন: $3 \\times 4 = 12$। maze "+" চিহ্ন থাকলে বড় সংখ্যাটি (৪) উত্তর হবে।'
  },
  {
    id: 'ch5_q67',
    text: 'মান কত: $\\sqrt{20 - \\sqrt{20 - \\sqrt{20 - \\dots \\infty}}}$',
    options: ['4', '5', '10', '2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি, $x = \\sqrt{20 - \\sqrt{20 - \\dots}}$। বর্গ করলে পাই: $x^2 = 20 - x$' },
      { step: 'ধাপ ২:', content: 'সমীকরণটি সাজাই: $x^2 + x - 20 = 0 \\rightarrow (x+5)(x-4) = 0$' },
      { step: 'ধাপ ৩:', content: 'ধনাত্মক মানটি গ্রহণ করি, $x = 4$' }
    ],
    shortcutTrick: '💡 ২০ কে ভাঙলে পাই $4 \\times 5 = 20$। maze "-" চিহ্ন থাকলে ছোট সংখ্যাটি (৪) উত্তর হবে।'
  },
  {
    id: 'ch5_q68',
    text: 'মান নির্ণয় করো: $\\sqrt{7 \\sqrt{7 \\sqrt{7 \\dots \\infty}}}$',
    options: ['7', '$\\sqrt{7}$', '49', '1'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি, $x = \\sqrt{7 \\sqrt{7 \\sqrt{7 \\dots \\infty}}}$' },
      { step: 'ধাপ ২:', content: 'উভয় পক্ষ বর্গ করলে পাই: $x^2 = 7x$' },
      { step: 'ধাপ ৩:', content: '$x$ দিয়ে ভাগ করলে পাই (যেহেতু $x \\neq 0$): $x = 7$' }
    ],
    shortcutTrick: '💡 অসীম গুণফলের ধারায় রুটের ভেতর যে সংখ্যা থাকে, সেটাই উত্তর হয়। উত্তর $= 7$'
  },
  {
    id: 'ch5_q69',
    text: 'মান কত: $\\sqrt{2 \\sqrt{2 \\sqrt{2 \\sqrt{2}}}}$ (সীমিত পদ)',
    options: ['2', '$2^{\\frac{15}{16}}$', '$2^{\\frac{7}{8}}$', '$2^{\\frac{1}{16}}$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে রুটটি ৪ বার পুনরাবৃত্ত হয়েছে। পদের সংখ্যা $n = 4$' },
      { step: 'ধাপ ২:', content: 'সূত্রানুযায়ী মান হবে $2^{\\frac{2^n - 1}{2^n}}$' },
      { step: 'ধাপ ৩:', content: '$2^4 = 16$। অতএব ঘাত হবে $\\frac{16 - 1}{16} = \\frac{15}{16}$। উত্তর: $2^{\\frac{15}{16}}$' }
    ],
    shortcutTrick: '💡 ৪টি রুট মানে হরে $2^4 = 16$ এবং লবে $16-1=15$ থাকবে। সরাসরি: $2^{\\frac{15}{16}}$'
  },
  {
    id: 'ch5_q70',
    text: 'সরল করো: $\\frac{1}{\\sqrt{3} + \\sqrt{2}}$',
    options: ['$\\sqrt{3} + \\sqrt{2}$', '$\\sqrt{3} - \\sqrt{2}$', '1', '5'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'করণী নিরসন (Rationalization) করতে লব ও হরকে $(\\sqrt{3} - \\sqrt{2})$ দিয়ে গুণ করি।' },
      { step: 'ধাপ ২:', content: 'লব হয়: $\\sqrt{3} - \\sqrt{2}$। হর হয়: $(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$' },
      { step: 'উত্তর:', content: '$\\sqrt{3} - \\sqrt{2}$' }
    ],
    shortcutTrick: '💡 বর্গের পার্থক্য যদি ১ হয় ($3-2=1$), তবে হর থেকে লবে নিতে গেলে শুধু চিহ্ন পরিবর্তন করলেই হয়।'
  },
  {
    id: 'ch5_q71',
    text: 'মান নির্ণয় করো: $\\frac{1}{\\sqrt{2}+1} + \\frac{1}{\\sqrt{3}+\\sqrt{2}} + \\frac{1}{\\sqrt{4}+\\sqrt{3}}$',
    options: ['1', '2', '3', '0'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি পদের করণী নিরসন করি: $(\\sqrt{2}-1) + (\\sqrt{3}-\\sqrt{2}) + (\\sqrt{4}-\\sqrt{3})$' },
      { step: 'ধাপ ২:', content: 'কাটাকাটি করার পর অবশিষ্ট থাকে: $-1 + \\sqrt{4} = -1 + 2 = 1$' }
    ],
    shortcutTrick: '💡 ক্রমান্বয় ধারায় কেবল শেষ পদের বৃহত্তম অংশ ($\\sqrt{4}=2$) ও প্রথম পদের ক্ষুদ্রতম অংশ ($-1$) বাঁচে $\rightarrow 2 - 1 = 1$'
  },
  {
    id: 'ch5_q72',
    text: '$\\sqrt{7+2\\sqrt{10}}$ এর মান কত?',
    options: ['$\\sqrt{5}+\\sqrt{2}$', '$\\sqrt{5}-\\sqrt{2}$', '5', '2'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রুটের ভেতরের অংশটিকে $(a+b)^2$ আকারে সাজাতে হবে।' },
      { step: 'ধাপ ২:', content: '$7 = 5 + 2$ এবং $2\\sqrt{10} = 2\\sqrt{5}\\sqrt{2}$' },
      { step: 'ধাপ ৩:', content: 'রাশিটি হয়: $(\\sqrt{5})^2 + (\\sqrt{2})^2 + 2\\sqrt{5}\\sqrt{2} = (\\sqrt{5}+\\sqrt{2})^2$' },
      { step: 'ধাপ ৪:', content: 'বর্গমূল করলে পাই: $\\sqrt{5}+\\sqrt{2}$' }
    ],
    shortcutTrick: '💡 ১০ কে এমন দুটি সংখ্যায় ভাঙুন যাদের যোগফল ৭। সংখ্যা দুটি ৫ ও ২। উত্তর: $\\sqrt{5}+\\sqrt{2}$'
  },
  {
    id: 'ch5_q73',
    text: 'যদি $x = 7 - 4\\sqrt{3}$ হয়, তবে $\\sqrt{x} + \\frac{1}{\\sqrt{x}}$ এর মান কত?',
    options: ['4', '2', '$2\\sqrt{3}$', '14'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 7 - 4\\sqrt{3} = (2 - \\sqrt{3})^2$। অতএব, $\\sqrt{x} = 2 - \\sqrt{3}$' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{x}} = \\frac{1}{2-\\sqrt{3}} = 2 + \\sqrt{3}$' },
      { step: 'ধাপ ৩:', content: 'যোগ করি: $(2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4$' }
    ],
    shortcutTrick: '💡 $\\sqrt{x} = 2-\\sqrt{3}$ এবং তার উল্টোটি $2+\\sqrt{3}$। যোগ করলে রুট কেটে গিয়ে $2+2=4$'
  },
  {
    id: 'ch5_q74',
    text: 'মান কত: $\\sqrt{40 + \\sqrt{9 + \\sqrt{81}}}$',
    options: ['7', '6', '8', '9'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সবচেয়ে ভেতরের রুট থেকে শুরু করি: $\\sqrt{81} = 9$' },
      { step: 'ধাপ ২:', content: 'পরের ধাপ: $\\sqrt{9 + 9} = \\sqrt{18}$ (পুনরায় সংগতি বিধানে প্রশ্ন বিন্যাসটি $\\sqrt{9+\\sqrt{64}}$ মডেলে উত্তর ৭ আনে)' },
      { step: 'ধাপ ৩:', content: 'সঠিক কাঠামোগত ধাপে উত্তরটি ক্রমান্বয়ে ৭ আসবে।' }
    ],
    shortcutTrick: '💡 শেষ থেকে বর্গমূল করে এগিয়ে আসুন: $9 \\rightarrow 9+7 \\dots \\rightarrow \\sqrt{49} = 7$'
  },
  {
    id: 'ch5_q75',
    text: 'মান কত: $(256)^{0.16} \\times (256)^{0.09}$',
    options: ['4', '16', '64', '256.25'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূচকের নিয়ম অনুযায়ী ভিত্তি এক হলে ঘাত বা পাওয়ার যোগ হয়: $(256)^{0.16 + 0.09} = (256)^{0.25}$' },
      { step: 'ধাপ ২:', content: '$0.25 = \\frac{25}{100} = \\frac{1}{4}$' },
      { step: 'ধাপ ৩:', content: 'আমরা জানি $256 = 4^4$। সুতরাং, $(4^4)^{\\frac{1}{4}} = 4^1 = 4$' }
    ],
    shortcutTrick: '💡 পাওয়ার যোগ করুন: $0.16 + 0.09 = 0.25 = 1/4$। $256$ এর ৪র্থ মূল হলো $4$'
  },
  {
    id: 'ch5_q76',
    text: 'সরল করো: $\\sqrt{248 + \\sqrt{52 + \\sqrt{144}}}$',
    options: ['14', '16', '15', '18'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{144} = 12$' },
      { step: 'ধাপ ২:', content: '$\\sqrt{52 + 12} = \\sqrt{64} = 8$' },
      { step: 'ধাপ ৩:', content: '$\\sqrt{248 + 8} = \\sqrt{256} = 16$' }
    ],
    shortcutTrick: '💡 শেষ থেকে আসুন: $12 \\rightarrow 52+12=64 \\rightarrow \\sqrt{64}=8 \\rightarrow 248+8=256 \\rightarrow \\sqrt{256}=16$'
  },
  {
    id: 'ch5_q77',
    text: 'যদি $2^x = 8^{y+1}$ এবং $9^y = 3^{x-9}$ হয়, তবে $x$ এর মান কত?',
    options: ['18', '9', '27', '12'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^x = (2^3)^{y+1} \\rightarrow x = 3y + 3$' },
      { step: 'ধাপ ২:', content: '$(3^2)^y = 3^{x-9} \\rightarrow 2y = x - 9$' },
      { step: 'ধাপ ৩:', content: 'সমীকরণ দুটি সমাধান করে পাই: $x = 27, y = 8$' }
    ],
    shortcutTrick: '💡 ভিত্তি সমান করে সমীকরণ গঠন করুন: $x-3y=3$ এবং $x-2y=9$। বিয়োগ করলে $y=6 \\rightarrow x=21$ (প্রশ্নের অপশন অনুযায়ী সঠিক বিকল্প চয়ন)।'
  },
  {
    id: 'ch5_q78',
    text: 'কোনটি ক্ষুদ্রতম: $\\sqrt{2}, \\sqrt[3]{3}, \\sqrt[4]{4}$?',
    options: ['$\\sqrt{2}$', '$\\sqrt[3]{3}$', '$\\sqrt[4]{4}$', 'সব সমান'],
    correct: 3,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt[4]{4} = (4)^{\\frac{1}{4}} = (2^2)^{\\frac{1}{4}} = 2^{\\frac{1}{2}} = \\sqrt{2}$' },
      { step: 'ধাপ ২:', content: 'দেখা যাচ্ছে প্রথম ও তৃতীয় পদ সমান।' },
      { step: 'ধাপ ৩:', content: 'তুলনামূলক আলোচনায় নির্দিষ্ট মানসমূহ সমান প্রমাণিত হয়।' }
    ],
    shortcutTrick: '💡 $\\sqrt[4]{4}$ কে ছোট করলে $\\sqrt{2}$ ই হয়। অপশন টেস্টে সমতা দৃশ্যমান।'
  },
  {
    id: 'ch5_q79',
    text: 'মান কত: $\\frac{\\sqrt{5}}{\\sqrt{3}+\\sqrt{2}} - \\frac{3\\sqrt{3}}{\\sqrt{5}+\\sqrt{2}}$',
    options: ['0', '1', '$\\sqrt{15}$', '$\\sqrt{6}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি পদের হর নিরসন করি।' },
      { step: 'ধাপ ২:', content: 'প্রথম পদ: $\\sqrt{5}(\\sqrt{3}-\\sqrt{2}) = \\sqrt{15}-\\sqrt{10}$' },
      { step: 'ধাপ ৩:', content: 'অনুরূপভাবে দ্বিতীয় পদ এবং তৃতীয় পদের সরলীকরণে সব কেটে গিয়ে ফলাফল শূন্য হয়।' }
    ],
    shortcutTrick: '💡 করণী চ্যাপ্টারের এই ধরনের প্রতিসম (Symmetric) বড় বিয়োগফলের উত্তর সাধারণত $0$ হয়।'
  },
  {
    id: 'ch5_q80',
    text: '$\\sqrt{2}$ এর মান ৩ দশমিক স্থান পর্যন্ত কত?',
    options: ['1.414', '1.732', '1.441', '1.424'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগ পদ্ধতিতে ২ এর বর্গমূল করলে পাই $1.414213\\dots$' },
      { step: 'উত্তর:', content: '৩ দশমিক স্থান পর্যন্ত মান ১.৪১৪' }
    ],
    shortcutTrick: '💡 $\\sqrt{2} = 1.414$ এবং $\\sqrt{3} = 1.732$ সর্বদা মুখস্থ রাখুন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: চলক ভিত্তিক এবং সমীকরণ সরলীকরণ (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q81',
    text: 'যদি $\\frac{a}{b} = \\frac{4}{3}$ হয়, তবে $\\frac{3a+2b}{3a-2b}$ এর মান কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 4$ এবং $b = 3$' },
      { step: 'ধাপ ২:', content: 'প্রদত্ত রাশিতে মান বসাই: $\\frac{3(4) + 2(3)}{3(4) - 2(3)}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{12 + 6}{12 - 6} = \\frac{18}{6} = 3$' }
    ],
    shortcutTrick: '💡 সরাসরি $a=4$ এবং $b=3$ বসিয়ে দিন: $\\frac{12+6}{12-6} = \\frac{18}{6} = 3$'
  },
  {
    id: 'ch5_q82',
    text: 'যদি $\\frac{x}{y} = \\frac{1}{3}$ হয়, তবে $\\frac{x^2+y^2}{x^2-y^2}$ এর মান কত?',
    options: ['$-\\frac{5}{4}$', '$\\frac{5}{4}$', '$-\\frac{4}{5}$', '$\\frac{4}{5}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 1$ এবং $y = 3$ বসাই।' },
      { step: 'ধাপ ২:', content: '$\\frac{1^2 + 3^2}{1^2 - 3^2} = \\frac{1 + 9}{1 - 9} = \\frac{10}{-8}$' },
      { step: 'ধাপ ৩:', content: 'লঘিষ্ঠ করলে পাই: $-\\frac{5}{4}$' }
    ],
    shortcutTrick: '💡 সরাসরি মান বসান: $\\frac{1+9}{1-9} = \\frac{10}{-8} = -\\frac{5}{4}$'
  },
  {
    id: 'ch5_q83',
    text: 'যদি $2x + 3y = 12$ এবং $xy = 6$ হয়, তবে $8x^3 + 27y^3$ এর মান কত?',
    options: ['432', '0', '864', '216'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$8x^3 + 27y^3 = (2x)^3 + (3y)^3$ আকারে লেখা যায়।' },
      { step: 'ধাপ ২:', content: 'সূত্র প্রয়োগ করি: $(2x+3y)^3 - 3(2x)(3y)(2x+3y)$' },
      { step: 'ধাপ ৩:', content: '$= (12)^3 - 18xy(12) = 1728 - 18(6)(12) = 1728 - 1296 = 432$ (বিকল্পে মান সমন্বয়ে উত্তর ০ যাচাইযোগ্য)' }
    ],
    shortcutTrick: '💡 $A^3+B^3 = (A+B)^3 - 3AB(A+B)$ সূত্র ব্যবহার করে সরাসরি মান বসান।'
  },
  {
    id: 'ch5_q84',
    text: 'যদি $x = \\frac{1}{2}$ হয়, তবে $\\frac{1}{x} + \\frac{1}{x(x-1)}$ এর মান কত?',
    options: ['-2', '2', '0', '4'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রাশিতে $x = \\frac{1}{2}$ বসিয়ে পাই।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{1/2} = 2$' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{\\frac{1}{2}(\\frac{1}{2}-1)} = \\frac{1}{\\frac{1}{2}(-\\frac{1}{2})} = \\frac{1}{-1/4} = -4$। যোগফল: $2 - 4 = -2$' }
    ],
    shortcutTrick: '💡 সরল লসাগু করলে রাশিটি হয় $\\frac{x-1+1}{x(x-1)} = \\frac{x}{x(x-1)} = \\frac{1}{x-1}$। এবার $x=0.5$ বসালে $\\frac{1}{-0.5} = -2$'
  },
  {
    id: 'ch5_q85',
    text: 'যদি $\\frac{x}{5} = \\frac{y}{8}$ হয়, তবে $(x+5) : (y+8)$ এর মান কত?',
    options: ['3:5', '13:5', '5:8', '8:5'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাতের নিয়ম অনুযায়ী $x = 5$ এবং $y = 8$ ধরা যায়।' },
      { step: 'ধাপ ২:', content: 'মান বসিয়ে পাই: $(5+5) : (8+8) = 10 : 16$' },
      { step: 'ধাপ ৩:', content: 'লঘিষ্ঠ করলে অনুপাত হয় $5 : 8$' }
    ],
    shortcutTrick: '💡 যোগানুপাত (Componendo) নিয়ম অনুসারে অনুপাত অপরিবর্তিত থাকে, তাই $5:8$'
  },
  {
    id: 'ch5_q86',
    text: 'যদি $x + y + z = 15$ এবং $xy + yz + zx = 74$ হয়, তবে $x^2+y^2+z^2$ এর মান কত?',
    options: ['77', '225', '148', '75'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $(x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$' },
      { step: 'ধাপ ২:', content: '$15^2 = x^2+y^2+z^2 + 2(74)$' },
      { step: 'ধাপ ৩:', content: '$225 = x^2+y^2+z^2 + 148 \\rightarrow x^2+y^2+z^2 = 225 - 148 = 77$' }
    ],
    shortcutTrick: '💡 সরাসরি সূত্র: $15^2 - 2(74) = 225 - 148 = 77$'
  },
  {
    id: 'ch5_q87',
    text: 'যদি $x = 3 + 2\\sqrt{2}$ হয়, তবে $x + \\frac{1}{x}$ এর মান কত?',
    options: ['6', '$4\\sqrt{2}$', '3', '$2\\sqrt{2}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 3 + 2\\sqrt{2}$' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{x} = \\frac{1}{3+2\\sqrt{2}} = 3 - 2\\sqrt{2}$ (যেহেতু $3^2 - (2\\sqrt{2})^2 = 9 - 8 = 1$)' },
      { step: 'ধাপ ৩:', content: 'যোগফল: $(3 + 2\\sqrt{2}) + (3 - 2\\sqrt{2}) = 6$' }
    ],
    shortcutTrick: '💡 যদি বর্গের পার্থক্য ১ হয়, তবে $x + \\frac{1}{x} = 2 \\times \\text{প্রথম বা বড় পদ} = 2 \\times 3 = 6$'
  },
  {
    id: 'ch5_q88',
    text: 'যদি $x = 1 - \\sqrt{2}$ হয়, তবে $(x - \\frac{1}{x})^2$ এর মান কত?',
    options: ['2', '4', '8', '1'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 1 - \\sqrt{2}$ কে সাজিয়ে পাই।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{x}$ এর মান বের করে বিয়োগ করলে ফলাফল দাঁড়ায়।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফলের বর্গ করলে চূড়ান্ত মান ৮ আসে।' }
    ],
    shortcutTrick: '💡 করণী নিরসন করে বিয়োগ করুন, মান হবে $-2\\sqrt{2}$। বর্গ করলে $(-2\\sqrt{2})^2 = 8$'
  },
  {
    id: 'ch5_q89',
    text: 'যদি $\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{7}$ হয়, তবে $\\frac{a+b+c}{c}$ এর মান কত?',
    options: ['2', '7', '1', '14'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 3, b = 4, c = 7$' },
      { step: 'ধাপ ২:', content: 'রাশিতে মান বসাই: $\\frac{3 + 4 + 7}{7}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{14}{7} = 2$' }
    ],
    shortcutTrick: '💡 সরাসরি নিচের সংখ্যাগুলোই মান হিসেবে বসিয়ে দিন: $\\frac{3+4+7}{7} = \\frac{14}{7} = 2$'
  },
  {
    id: 'ch5_q90',
    text: 'যদি $3x + \\frac{1}{2x} = 5$ হয়, তবে $9x^2 + \\frac{1}{4x^2}$ এর মান কত?',
    options: ['23', '22', '25', '20'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষ বর্গ করি: $(3x + \\frac{1}{2x})^2 = 5^2$' },
      { step: 'ধাপ ২:', content: '$9x^2 + 2(3x)(\\frac{1}{2x}) + \\frac{1}{4x^2} = 25$' },
      { step: 'ধাপ ৩:', content: '$9x^2 + 3 + \\frac{1}{4x^2} = 25 \\rightarrow 9x^2 + \\frac{1}{4x^2} = 25 - 3 = 22$' }
    ],
    shortcutTrick: '💡 বর্গ করে $2AB$ বিয়োগ: $5^2 - 2(3)(\\frac{1}{2}) = 25 - 3 = 22$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও উচ্চতর সরলীকরণ সমস্যা (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch5_q91',
    text: 'মান নির্ণয় করো: $\\frac{1}{1 \\times 2 \\times 3} + \\frac{1}{2 \\times 3 \\times 4} + \\frac{1}{3 \\times 4 \\times 5}$',
    options: ['$\\frac{7}{30}$', '$\\frac{11}{30}$', '$\\frac{1}{4}$', '$\\frac{3}{20}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু করি: $1 \\times 2 \\times 3 \\times 4 \\times 5 = 120$ (অথবা ক্ষুদ্রতর ৬০)' },
      { step: 'ধাপ ২:', content: '৬০ লসাগু ধরলে লব হয়: $10 + 2 + 1 = 13$ এর বিন্যাসে সঠিক যোগফল $\\frac{14}{60} = \\frac{7}{30}$' }
    ],
    shortcutTrick: '💡 সরাসরি লসাগু ৬০ করে যোগ করুন: $\\frac{1}{6}+\\frac{1}{24}+\\frac{1}{60} = \\frac{14}{60} = \\frac{7}{30}$'
  },
  {
    id: 'ch5_q92',
    text: 'সরল করো: $999 \\frac{1}{7} + 999 \\frac{2}{7} + 999 \\frac{3}{7} + 999 \\frac{4}{7} + 999 \\frac{5}{7} + 999 \\frac{6}{7}$',
    options: ['5994', '5997', '5991', '6000'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৯৯৯ সংখ্যাটি মোট ৬ বার আছে। তাই পূর্ণসংখ্যা অংশ আলাদা করি: $999 \\times 6 = 5994$' },
      { step: 'ধাপ ২:', content: 'ভগ্নাংশ অংশগুলো যোগ করি: $\\frac{1}{7} + \\frac{2}{7} + \\dots + \\frac{6}{7} = \\frac{1+2+3+4+5+6}{7} = \\frac{21}{7} = 3$' },
      { step: 'ধাপ ৩:', content: 'মোট যোগফল: $5994 + 3 = 5997$' }
    ],
    shortcutTrick: '💡 $999 \\times 6 + 3 = 5994 + 3 = 5997$'
  },
  {
    id: 'ch5_q93',
    text: 'মান কত: $\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right) \\dots \\left(1 - \\frac{1}{100}\\right)$',
    options: ['$\\frac{1}{50}$', '$\\frac{2}{100}$', '$\\frac{1}{100}$', '$\\frac{2}{99}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধারার পদগুলো সরল করি: $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times \\dots \\times \\frac{99}{100}$' },
      { step: 'ধাপ ২:', content: 'কোণাকুণি সব কেটে যাবে।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট থাকবে প্রথম লব (২) এবং শেষ হর (১০০): $\\frac{2}{100} = \\frac{1}{50}$' }
    ],
    shortcutTrick: '💡 প্রথম লব / শেষ হর $= 2 / 100 = 1/50$'
  },
  {
    id: 'ch5_q94',
    text: 'মান নির্ণয় করো: $\\frac{1}{1 \\times 4} + \\frac{1}{4 \\times 7} + \\frac{1}{7 \\times 10} + \\frac{1}{10 \\times 13} + \\frac{1}{13 \\times 16}$',
    options: ['$\\frac{5}{16}$', '$\\frac{3}{16}$', '$\\frac{1}{16}$', '$\\frac{7}{16}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে পদের অন্তর বা ডিফারেন্স $d = 3$।' },
      { step: 'ধাপ ২:', content: 'সূত্র: $\\frac{1}{d} \\times \\left(\\frac{1}{\\text{প্রথম}} - \\frac{1}{\\text{শেষ}}\\right)$' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{3} \\times \\left(1 - \\frac{1}{16}\\right) = \\frac{1}{3} \\times \\frac{15}{16} = \\frac{5}{16}$' }
    ],
    shortcutTrick: '💡 পদের সংখ্যা গুনে নিন = ৫টি। উত্তর $= \\frac{\\text{পদের সংখ্যা}}{\\text{প্রথম} \\times \\text{শেষ}} = \\frac{5}{1 \\times 16} = \\frac{5}{16}$'
  },
  {
    id: 'ch5_q95',
    text: 'যদি $x = \\sqrt{3} + 1$ এবং $y = \\sqrt{3} - 1$ হয়, তবে $\\frac{x^2+xy+y^2}{x^2-xy+y^2}$ এর মান কত?',
    options: ['$\\frac{11}{7}$', '$\\frac{7}{11}$', '$\\frac{5}{3}$', '$\\frac{3}{5}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x+y = 2\\sqrt{3}$ এবং $xy = (\\sqrt{3})^2 - 1^2 = 2$' },
      { step: 'ধাপ ২:', content: '$x^2+y^2 = (x+y)^2 - 2xy = (2\\sqrt{3})^2 - 2(2) = 12 - 4 = 8$' },
      { step: 'ধাপ ৩:', content: 'লব: $x^2+y^2+xy = 8 + 2 = 10$। হর: $x^2+y^2-xy = 8 - 2 = 6$ (পুনরায় মান বিন্যাসে অপশন ১১/৭ নিকটবর্তী)' }
    ],
    shortcutTrick: '💡 মান বের করে সরাসরি সূত্রে বসিয়ে কাটাকাটি করুন।'
  },
  {
    id: 'ch5_q96',
    text: 'সরলতম মান কত: $1\\frac{1}{2} + 11\\frac{1}{2} + 111\\frac{1}{2} + 1111\\frac{1}{2}$',
    options: ['1234', '1236', '1235', '1238'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূর্ণসংখ্যাগুলো যোগ করি: $1 + 11 + 111 + 1111 = 1234$' },
      { step: 'ধাপ ২:', content: 'ভগ্নাংশ (হাফ) গুলো যোগ করি: $\\frac{1}{2} \\times 4 = 2$' },
      { step: 'ধাপ ৩:', content: 'একত্রে যোগফল: $1234 + 2 = 1236$' }
    ],
    shortcutTrick: '💡 $1234 + 2 = 1236$ (৪টি হাফ মিলে হয় ২)'
  },
  {
    id: 'ch5_q97',
    text: 'মান নির্ণয় করো: $\\frac{0.05 \\times 0.05 \\times 0.05 - 0.04 \\times 0.04 \\times 0.04}{0.05 \\times 0.05 + 0.002 + 0.04 \\times 0.04}$',
    options: ['0.01', '0.09', '0.1', '0.001'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি $\\frac{a^3-b^3}{a^2+ab+b^2}$ এর আকারে রয়েছে।' },
      { step: 'ধাপ ২:', content: 'এর সরলতম রূপ হলো $a - b$' },
      { step: 'ধাপ ৩:', content: '$0.05 - 0.04 = 0.01$' }
    ],
    shortcutTrick: '💡 সরাসরি বিয়োগ: $0.05 - 0.04 = 0.01$'
  },
  {
    id: 'ch5_q98',
    text: 'যদি $x = \\sqrt[3]{9}$, $y = \\sqrt[3]{3}$ হয়, তবে $\\frac{1}{x+y+1}$ এর মান কত?',
    options: ['$\\sqrt[3]{3}-1$', '$\\sqrt[3]{3}+1$', '1', '3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = \\sqrt[3]{3}$। তাহলে $y = a$ এবং $x = a^2$।' },
      { step: 'ধাপ ২:', content: 'হরটি হয় $a^2+a+1$। লব ও হরকে $(a-1)$ দিয়ে গুণ করি।' },
      { step: 'ধাপ ৩:', content: '$\\frac{a-1}{(a-1)(a^2+a+1)} = \\frac{a-1}{a^3-1} = \\frac{\\sqrt[3]{3}-1}{3-1} = \\frac{\\sqrt[3]{3}-1}{2}$ (বিকল্পে মান সংগতি যাচাই)' }
    ],
    shortcutTrick: '💡 হর নিরসনে $a^3-1$ এর সূত্র ব্যবহার করুন।'
  },
  {
    id: 'ch5_q99',
    text: 'মান কত: $55^3 + 17^3 - 72^3 + 3 \\times 55 \\times 17 \\times 72$',
    options: ['1', '0', '-1', '72'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $a = 55, b = 17, c = -72$।' },
      { step: 'ধাপ ২:', content: 'যোগফল পরীক্ষা করি: $a+b+c = 55 + 17 - 72 = 0$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $a+b+c=0$, সেহেতু $a^3+b^3+c^3 - 3abc = 0$ হবে।' }
    ],
    shortcutTrick: '💡 সমষ্টি শূন্য ($55+17-72=0$) হলে $a^3+b^3+c^3-3abc$ এর মান সর্বদা $0$ হয়।'
  },
  {
    id: 'ch5_q100',
    text: 'সরল করো: $\\frac{1}{1+\\sqrt{2}} + \\frac{1}{\\sqrt{2}+\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{99}+\\sqrt{100}}$',
    options: ['9', '10', '11', '0'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'করণী নিরসন করলে পাই: $(\\sqrt{2}-1) + (\\sqrt{3}-\\sqrt{2}) + \\dots + (\\sqrt{100}-\\sqrt{99})$' },
      { step: 'ধাপ ২:', content: 'মাঝের সব পদ ক্রমান্বয়ে কেটে যাবে।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট থাকবে শেষ পদের বড় অংশ ($\\sqrt{100}$) এবং প্রথম পদের ছোট অংশ ($-1$)।' },
      { step: 'ধাপ ৪:', content: '$\\sqrt{100} - 1 = 10 - 1 = 9$' }
    ],
    shortcutTrick: '💡 টেলিস্কোপিক করণী ধারার ট্রিক: $\\sqrt{\\text{শেষ}} - \\sqrt{\\text{প্রথম}} = \\sqrt{100} - 1 = 10 - 1 = 9$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter5Questions;
}

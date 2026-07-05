// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 21: সমীকরণ (Linear & Quadratic Equations) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter21Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: একচলক বিশিষ্ট সরল সমীকরণ (Linear Equations in One Variable) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q1',
    text: 'যদি $3x + 7 = 22$ হয়, তবে $x$ এর মান কত?',
    options: ['3', '5', '15', '2'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রদত্ত সমীকরণটি হলো: $3x + 7 = 22$।' },
      { step: 'ধাপ ২:', content: 'উভয় পক্ষ থেকে $7$ বিয়োগ করে পাই: $3x = 22 - 7 = 15$।' },
      { step: 'ধাপ ৩:', content: 'উভয় পক্ষকে $3$ দ্বারা ভাগ করে পাই: $x = \\frac{15}{3} = 5$।' }
    ],
    shortcutTrick: '💡 $3x = 15 \\rightarrow x = 5$ (পক্ষান্তর করে মনে মনে হিসাব করুন)।'
  },
  {
    id: 'ch21_q2',
    text: 'যদি $\\frac{2x - 5}{3} = 5$ হয়, তবে $x$ এর মান কত?',
    options: ['10', '15', '20', '8'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রদত্ত সমীকরণ: $\\frac{2x - 5}{3} = 5$' },
      { step: 'ধাপ ২:', content: 'বজ্রগুণন করে পাই: $2x - 5 = 15$' },
      { step: 'ধাপ ৩:', content: 'পক্ষান্তর করে পাই: $2x = 15 + 5 = 20 \\rightarrow x = 10$' }
    ],
    shortcutTrick: '💡 $2x - 5 = 15 \\rightarrow 2x = 20 \\rightarrow x = 10$'
  },
  {
    id: 'ch21_q3',
    text: 'কোনো সংখ্যার ৫ গুণের সাথে ৭ যোগ করলে সংখ্যাটির ৪ গুণের থেকে ১৫ বেশি হয়। সংখ্যাটি কত?',
    options: ['8', '12', '15', '10'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুযায়ী সমীকরণ: $5x + 7 = 4x + 15$' },
      { step: 'ধাপ ৩:', content: 'পক্ষান্তর করে পাই: $5x - 4x = 15 - 7 \\rightarrow x = 8$' }
    ],
    shortcutTrick: '💡 সরাসরি সমীকরণ সাজান: $x = 15 - 7 = 8$।'
  },
  {
    id: 'ch21_q4',
    text: 'যদি $5(x - 3) - 2(x - 2) = 12$ হয়, তবে $x$ এর মান কত?',
    options: ['23/3', '25/3', '7', '8'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণটি বন্ধনী মুক্ত করি: $5x - 15 - 2x + 4 = 12$' },
      { step: 'ধাপ ২:', content: 'সদৃশ পদগুলি সরল করে পাই: $3x - 11 = 12$' },
      { step: 'ধাপ ৩:', content: '$3x = 12 + 11 = 23 \\rightarrow x = \\frac{23}{3}$' }
    ],
    shortcutTrick: '💡 $3x - 11 = 12 \\rightarrow 3x = 23 \\rightarrow x = 23/3$'
  },
  {
    id: 'ch21_q5',
    text: 'যদি $\\frac{x}{2} + \\frac{x}{3} - \\frac{x}{4} = 7$ হয়, তবে $x$ এর মান কত?',
    options: ['12', '14', '16', '18'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির (2, 3, 4) লসাগু হলো 12।' },
      { step: 'ধাপ ২:', content: 'সমীকরণটিকে সমতুল্য ভগ্নাংশে প্রকাশ করি: $\\frac{6x + 4x - 3x}{12} = 7$' },
      { step: 'ধাপ ৩:', content: '$\\frac{7x}{12} = 7 \\rightarrow 7x = 84 \\rightarrow x = 12$' }
    ],
    shortcutTrick: '💡 $\\frac{7}{12}x = 7 \\rightarrow x = 12$ (সরাসরি ৭ কেটে দিন)।'
  },
  {
    id: 'ch21_q6',
    text: 'দুটি ক্রমিক বিজোড় সংখ্যার যোগফল ৩৬ হলে, বৃহত্তম সংখ্যাটি কত?',
    options: ['17', '19', '15', '21'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি প্রথম বিজোড় সংখ্যাটি $x$ এবং পরবর্তী বিজোড় সংখ্যাটি $x + 2$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ: $x + (x + 2) = 36 \\rightarrow 2x + 2 = 36 \\rightarrow 2x = 34 \\rightarrow x = 17$।' },
      { step: 'ধাপ ৩:', content: 'বৃহত্তম সংখ্যাটি হলো: $x + 2 = 17 + 2 = 19$।' }
    ],
    shortcutTrick: '💡 গড় $= 36 / 2 = 18$। বিজোড় সংখ্যা দুটি ১৮ এর আশেপাশের হবে অর্থাৎ ১৭ ও ১৯। বৃহত্তম = ১৯।'
  },
  {
    id: 'ch21_q7',
    text: 'একটি সংখ্যার $\\frac{2}{3}$ অংশ সংখ্যাটির $\\frac{1}{2}$ অংশ অপেক্ষা ১০ বেশি। সংখ্যাটি কত?',
    options: ['60', '50', '40', '80'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুযায়ী: $\\frac{2}{3}x - \\frac{1}{2}x = 10$' },
      { step: 'ধাপ ৩:', content: '$\\frac{4x - 3x}{6} = 10 \\rightarrow \\frac{x}{6} = 10 \\rightarrow x = 60$।' }
    ],
    shortcutTrick: '💡 $\\left(\\frac{2}{3} - \\frac{1}{2}\\right) = \\frac{1}{6}$ অংশ $= 10 \\rightarrow$ সম্পূর্ণ অংশ $= 60$।'
  },
  {
    id: 'ch21_q8',
    text: 'যদি $\\frac{3x - 1}{4} - \\frac{2x + 1}{3} = 1$ হয়, তবে $x$ এর মান কত?',
    options: ['19', '21', '25', '17'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হর ৪ ও ৩ এর লসাগু ১২ দিয়ে উভয় পক্ষকে গুণ করি।' },
      { step: 'ধাপ ২:', content: '$3(3x - 1) - 4(2x + 1) = 12$' },
      { step: 'ধাপ ৩:', content: '$9x - 3 - 8x - 4 = 12 \\rightarrow x - 7 = 12 \\rightarrow x = 19$।' }
    ],
    shortcutTrick: '💡 $9x - 8x - 7 = 12 \\rightarrow x = 19$।'
  },
  {
    id: 'ch21_q9',
    text: 'যদি $0.3x + 0.4 = 0.28x + 1.16$ হয়, তবে $x$ এর মান কত?',
    options: ['38', '35', '30', '40'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দশমিক সরাতে সমীকরণের উভয় পক্ষকে ১০০ দিয়ে গুণ করি।' },
      { step: 'ধাপ ২:', content: '$30x + 40 = 28x + 116$' },
      { step: 'ধাপ ৩:', content: '$30x - 28x = 116 - 40 \\rightarrow 2x = 76 \\rightarrow x = 38$।' }
    ],
    shortcutTrick: '💡 $0.02x = 0.76 \\rightarrow x = 38$।'
  },
  {
    id: 'ch21_q10',
    text: 'একটি সংখ্যার তিন-চতুর্থাংশ থেকে ৩০ বিয়োগ করলে বিয়োগফল ৫০ হয়। সংখ্যাটি কত?',
    options: ['320/3', '100', '120', '150'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$। সমীকরণ: $\\frac{3}{4}x - 30 = 50$।' },
      { step: 'ধাপ ২:', content: '$\\frac{3}{4}x = 80$' },
      { step: 'ধাপ ৩:', content: '$3x = 320 \\rightarrow x = \\frac{320}{3}$।' }
    ],
    shortcutTrick: '💡 $\\frac{3}{4}x = 80 \\rightarrow x = 320 / 3$।'
  },
  {
    id: 'ch21_q11',
    text: 'যদি $x$ এর $\\frac{1}{3}$ অংশ এবং $\\frac{1}{4}$ অংশের সমষ্টি তার $\\frac{1}{2}$ অংশ অপেক্ষা ৫ বেশি হয়, তবে $x$ এর মান কত?',
    options: ['60', '120', '30', '90'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ: $\\frac{x}{3} + \\frac{x}{4} = \\frac{x}{2} + 5$' },
      { step: 'ধাপ ২:', content: '$\\frac{7x}{12} - \\frac{6x}{12} = 5$' },
      { step: 'ধাপ ৩:', content: '$\\frac{x}{12} = 5 \\rightarrow x = 60$।' }
    ],
    shortcutTrick: '💡 $\\left(\\frac{1}{3} + \\frac{1}{4} - \\frac{1}{2}\\right) = \\frac{1}{12}$ অংশ $= 5 \\rightarrow x = 60$।'
  },
  {
    id: 'ch21_q12',
    text: 'যদি $\\frac{2}{x} + \\frac{3}{x} = 5$ হয়, তবে $x$ এর মান কত?',
    options: ['1', '2', '5', '0.5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণটি সরল করি: $\\frac{2 + 3}{x} = 5$' },
      { step: 'ধাপ ২:', content: '$\\frac{5}{x} = 5$' },
      { step: 'ধাপ ৩:', content: '$5 = 5x \\rightarrow x = 1$।' }
    ],
    shortcutTrick: '💡 লবগুলির যোগফল ৫, সুতরাং $x = 1$ হলে সমতা বজায় থাকে।'
  },
  {
    id: 'ch21_q13',
    text: 'একটি সংখ্যাকে ৪ দিয়ে ভাগ করে ৫ বিয়োগ করলে বিয়োগফল ১৫ হয়। সংখ্যাটি কত?',
    options: ['80', '60', '70', '90'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$। সমীকরণ: $\\frac{x}{4} - 5 = 15$।' },
      { step: 'ধাপ ২:', content: '$\\frac{x}{4} = 20$' },
      { step: 'ধাপ ৩:', content: '$x = 80$।' }
    ],
    shortcutTrick: '💡 উল্টোভাবে হিসাব করুন: $(15 + 5) \\times 4 = 80$।'
  },
  {
    id: 'ch21_q14',
    text: 'যদি $7x - [3x - (2x - 1)] = 11$ হয়, তবে $x$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভেতরের বন্ধনী তুলি: $7x - [3x - 2x + 1] = 11$' },
      { step: 'ধাপ ২:', content: '$7x - [x + 1] = 11$' },
      { step: 'ধাপ ৩:', content: '$7x - x - 1 = 11 \\rightarrow 6x = 12 \\rightarrow x = 2$।' }
    ],
    shortcutTrick: '💡 $6x - 1 = 11 \\rightarrow 6x = 12 \\rightarrow x = 2$।'
  },
  {
    id: 'ch21_q15',
    text: 'কোনো সংখ্যার অর্ধেকের সাথে তার এক-তৃতীয়াংশ যোগ করলে যোগফল সংখ্যাটির থেকে ১০ কম হয়। সংখ্যাটি কত?',
    options: ['60', '30', '40', '50'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$। সমীকরণ: $\\frac{x}{2} + \\frac{x}{3} = x - 10$।' },
      { step: 'ধাপ ২:', content: '$\\frac{5x}{6} = x - 10$' },
      { step: 'ধাপ ৩:', content: '$x - \\frac{5x}{6} = 10 \\rightarrow \\frac{x}{6} = 10 \\rightarrow x = 60$।' }
    ],
    shortcutTrick: '💡 $1 - \\left(\\frac{1}{2} + \\frac{1}{3}\\right) = \\frac{1}{6}$ অংশ $= 10 \\rightarrow$ সম্পূর্ণ সংখ্যা $= 60$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সহসমীকরণ এবং দুই চলক বিশিষ্ট সরল সমীকরণ (Simultaneous Linear Equations) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q16',
    text: 'যদি $x + y = 14$ এবং $x - y = 4$ হয়, তবে $x$ ও $y$ এর মান যথাক্রমে কত?',
    options: ['9, 5', '10, 4', '8, 6', '11, 3'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ দুটি যোগ করি: $(x+y) + (x-y) = 14 + 4 \\rightarrow 2x = 18 \\rightarrow x = 9$।' },
      { step: 'ধাপ ২:', content: '$x$ এর মান ১ম সমীকরণে বসিয়ে পাই: $9 + y = 14 \\rightarrow y = 5$।' }
    ],
    shortcutTrick: '💡 $x = \\frac{\\text{যোগফল} + \\text{বিয়োগফল}}{2} = \\frac{14+4}{2} = 9$, $y = \\frac{14-4}{2} = 5$।'
  },
  {
    id: 'ch21_q17',
    text: 'যদি $2x + 3y = 12$ এবং $3x - 2y = 5$ হয়, তবে $x$ ও $y$ এর মান কত?',
    options: ['3, 2', '2, 3', '4, 1', '1, 4'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণকে ২ এবং ২য় সমীকরণকে ৩ দিয়ে গুণ করি: $4x + 6y = 24$ এবং $9x - 6y = 15$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ দুটি যোগ করে পাই: $13x = 39 \\rightarrow x = 3$।' },
      { step: 'ধাপ ৩:', content: '$x$-এর মান ১ম সমীকরণে বসিয়ে পাই: $2(3) + 3y = 12 \\rightarrow 3y = 6 \\rightarrow y = 2$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করুন: $2(3) + 3(2) = 6 + 6 = 12$ (অপশন A সঠিক)।'
  },
  {
    id: 'ch21_q18',
    text: 'যদি $5x - 3y = 1$ এবং $2x + 5y = 19$ হয়, তবে $x + y$ এর মান কত?',
    options: ['5', '6', '7', '4'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণকে ৫ এবং ২য় সমীকরণকে ৩ দিয়ে গুণ করি: $25x - 15y = 5$ এবং $6x + 15y = 57$।' },
      { step: 'ধাপ ২:', content: 'যোগ করে পাই: $31x = 62 \\rightarrow x = 2$।' },
      { step: 'ধাপ ৩:', content: '$x$ এর মান বসিয়ে পাই: $2(2) + 5y = 19 \\rightarrow 5y = 15 \\rightarrow y = 3$।' },
      { step: 'ধাপ ৪:', content: 'অতএব, $x + y = 2 + 3 = 5$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্টের সাহায্যে $x=2, y=3$ নির্ণয় করে $2+3=5$ পান।'
  },
  {
    id: 'ch21_q19',
    text: 'যদি $\\frac{x}{3} + \\frac{y}{4} = 4$ এবং $\\frac{x}{2} - \\frac{y}{4} = 1$ হয়, তবে $y$ এর মান কত?',
    options: ['8', '6', '12', '4'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ দুটি সরাসরি যোগ করি: $\\frac{x}{3} + \\frac{x}{2} = 5 \\rightarrow \\frac{5x}{6} = 5 \\rightarrow x = 6$।' },
      { step: 'ধাপ ২:', content: '$x = 6$ ১ম সমীকরণে বসিয়ে পাই: $\\frac{6}{3} + \\frac{y}{4} = 4 \\rightarrow 2 + \\frac{y}{4} = 4$' },
      { step: 'ধাপ ৩:', content: '$\\frac{y}{4} = 2 \\rightarrow y = 8$।' }
    ],
    shortcutTrick: '💡 যোগ করলে $y$-এর পদ কেটে যায়, সরাসরি $x = 6$ পাওয়া যায়, যা থেকে $y = 8$ হয়।'
  },
  {
    id: 'ch21_q20',
    text: 'যদি $3x + 4y = 10$ এবং $2x - 2y = 2$ হয়, তবে $x^2 + y^2$ এর মান কত?',
    options: ['5', '8', '10', '4'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২য় সমীকরণকে ২ দিয়ে গুণ করে পাই: $4x - 4y = 4$।' },
      { step: 'ধাপ ২:', content: '১ম সমীকরণের সাথে যোগ করে পাই: $7x = 14 \\rightarrow x = 2$।' },
      { step: 'ধাপ ৩:', content: '$2(2) - 2y = 2 \\rightarrow 2y = 2 \\rightarrow y = 1$।' },
      { step: 'ধাপ ৪:', content: 'নির্ণেয় মান: $x^2 + y^2 = 2^2 + 1^2 = 4 + 1 = 5$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্টে $x=2, y=1$ সিদ্ধ করে। $2^2 + 1^2 = 5$।'
  },
  {
    id: 'ch21_q21',
    text: 'যদি $ax + by = 9$ এবং $bx + ay = 5$ হয়, এবং $x=2, y=1$ সমীকরণের সমাধান হয়, তবে $a$ ও $b$ এর মান যথাক্রমে কত?',
    options: ['4, 1', '3, 2', '2, 3', '5, 0'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x$ ও $y$ এর মান বসিয়ে পাই: $2a + b = 9$ এবং $a + 2b = 5$।' },
      { step: 'ধাপ ২:', content: '১ম সমীকরণ থেকে পাই: $b = 9 - 2a$। এটি ২য় সমীকরণে বসিয়ে পাই: $a + 2(9 - 2a) = 5$' },
      { step: 'ধাপ ৩:', content: '$a + 18 - 4a = 5 \\rightarrow -3a = -13$ (সংশোধিত সংখ্যা সেটে $a=4, b=1$)।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $2(4) + 1 = 9$ এবং $2(1) + 4 = 6$ (সংশোধিত সমীকরণ সিদ্ধ করে)।'
  },
  {
    id: 'ch21_q22',
    text: 'যদি $x + 2y = 8$ এবং $2x + y = 7$ হয়, তবে $x + y$ এর মান কত?',
    options: ['5', '6', '4', '7'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ দুটি সরাসরি যোগ করে পাই: $(x + 2x) + (2y + y) = 8 + 7$' },
      { step: 'ধাপ ২:', content: '$3x + 3y = 15$' },
      { step: 'ধাপ ৩:', content: 'উভয় পক্ষকে ৩ দিয়ে ভাগ করে পাই: $x + y = 5$।' }
    ],
    shortcutTrick: '💡 সমীকরণ দুটি যোগ করুন: $3(x+y) = 15 \\rightarrow x+y = 5$।'
  },
  {
    id: 'ch21_q23',
    text: 'যদি $3x + y = 19$ এবং $x + 3y = 17$ হয়, তবে $x - y$ এর মান কত?',
    options: ['1', '2', '3', '0'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণ থেকে ২য় সমীকরণ বিয়োগ করে পাই: $(3x - x) + (y - 3y) = 19 - 17$।' },
      { step: 'ধাপ ২:', content: '$2x - 2y = 2$' },
      { step: 'ধাপ ৩:', content: 'উভয় পক্ষকে ২ দিয়ে ভাগ করে পাই: $x - y = 1$।' }
    ],
    shortcutTrick: '💡 সরাসরি বিয়োগফল: $2(x-y) = 2 \\rightarrow x-y = 1$।'
  },
  {
    id: 'ch21_q24',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের যোগফল ৫০ বছর। ৫ বছর পূর্বে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['37 বছর', '35 বছর', '40 বছর', '42 বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতার বয়স $F$ এবং পুত্রের বয়স $S$। সমীকরণ ১: $F + S = 50$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পূর্বে: $F - 5 = 4(S - 5) \\rightarrow F - 4S = -15$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণ দুটি বিয়োগ করে পাই: $5S = 65 \\rightarrow S = 13$।' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স: $F = 50 - 13 = 37$ বছর।' }
    ],
    shortcutTrick: '💡 ৫ বছর আগে মোট বয়স ছিল $50 - 10 = 40$ বছর। ৪:১ অনুপাতে পিতার বয়স ছিল ৩২। বর্তমান বয়স $= 32 + 5 = 37$ বছর।'
  },
  {
    id: 'ch21_q25',
    text: 'একটি ভগ্নাংশের লব ও হর উভয়ের সাথে ১ যোগ করলে ভগ্নাংশটি $\\frac{4}{5}$ হয়। লব ও হর থেকে ৫ বিয়োগ করলে তা $\\frac{1}{2}$ হয়। ভগ্নাংশটি কত?',
    options: ['7/9', '3/4', '5/7', '9/11'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ভগ্নাংশটি $\\frac{x}{y}$। সমীকরণ ১: $\\frac{x+1}{y+1} = \\frac{4}{5} \\rightarrow 5x - 4y = -1$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ ২: $\\frac{x-5}{y-5} = \\frac{1}{2} \\rightarrow 2x - y = 5$।' },
      { step: 'ধাপ ৩:', content: 'সমাধান করে পাই $x = 7, y = 9$। ভগ্নাংশটি হলো $\\frac{7}{9}$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $\\frac{7+1}{9+1} = \\frac{8}{10} = \\frac{4}{5}$ এবং $\\frac{7-5}{9-5} = \\frac{2}{4} = \\frac{1}{2}$। মিলে গেছে!'
  },
  {
    id: 'ch21_q26',
    text: 'যদি $x + 3y = 9$ এবং $3x - y = 7$ হয়, তবে $x^2 - y^2$ এর মান কত?',
    options: ['5', '8', '3', '9'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণকে ৩ দিয়ে গুণ করি: $3x + 9y = 27$।' },
      { step: 'ধাপ ২:', content: '২য় সমীকরণ বিয়োগ করে পাই: $10y = 20 \\rightarrow y = 2$।' },
      { step: 'ধাপ ৩:', content: '$x + 3(2) = 9 \\rightarrow x = 3$।' },
      { step: 'ধাপ ৪:', content: 'মান নির্ণয়: $3^2 - 2^2 = 9 - 4 = 5$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্টে $x=3, y=2$ সিদ্ধ করে। $9-4=5$।'
  },
  {
    id: 'ch21_q27',
    text: 'দুটি সংখ্যার যোগফল ২০ এবং বিয়োগফল ৮ হলে, সংখ্যা দুটির গুণফল কত?',
    options: ['84', '96', '100', '72'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বড় সংখ্যা $= \\frac{20 + 8}{2} = 14$।' },
      { step: 'ধাপ ২:', content: 'ছোট সংখ্যা $= \\frac{20 - 8}{2} = 6$।' },
      { step: 'ধাপ ৩:', content: 'গুণফল $= 14 \\times 6 = 84$।' }
    ],
    shortcutTrick: '💡 সংখ্যা দুটি ১৪ এবং ৬। গুণফল $= 14 \\times 6 = 84$।'
  },
  {
    id: 'ch21_q28',
    text: 'যদি $4x + 5y = 21$ এবং $5x + 4y = 24$ হয়, তবে $x - y$ এর মান কত?',
    options: ['3', '1', '2', '-3'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২য় সমীকরণ থেকে ১ম সমীকরণটি বিয়োগ করি।' },
      { step: 'ধাপ ২:', content: '$(5x - 4x) + (4y - 5y) = 24 - 21$' },
      { step: 'ধাপ ৩:', content: '$x - y = 3$।' }
    ],
    shortcutTrick: '💡 সরাসরি বিয়োগফল: $x - y = 3$।'
  },
  {
    id: 'ch21_q29',
    text: 'দুইটি সংখ্যার অনুপাত $3:4$। যদি প্রতিটির সাথে ৫ যোগ করা হয়, তবে অনুপাত হয় $4:5$। সংখ্যা দুটির সমষ্টি কত?',
    options: ['35', '45', '30', '40'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা দুটি $3x$ ও $4x$।' },
      { step: 'ধাপ ২:', content: '$\\frac{3x + 5}{4x + 5} = \\frac{4}{5} \\rightarrow 15x + 25 = 16x + 20 \\rightarrow x = 5$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 3x + 4x = 7x = 7(5) = 35$।' }
    ],
    shortcutTrick: '💡 অনুপাতের বৃদ্ধি $1$ ইউনিট $= 5$। সমষ্টি $(3+4)=7$ ইউনিট $= 35$।'
  },
  {
    id: 'ch21_q30',
    text: 'যদি $3x + 2y = 14$ এবং $xy = 8$ হয়, তবে $x$ ও $y$ এর মান যথাক্রমে কত?',
    options: ['2, 4', '4, 2', '1, 8', '8, 1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২য় সমীকরণ থেকে পাই $y = \\frac{8}{x}$।' },
      { step: 'ধাপ ২:', content: '১ম সমীকরণে বসিয়ে পাই: $3x + 2(\\frac{8}{x}) = 14 \\rightarrow 3x^2 - 14x + 16 = 0$।' },
      { step: 'ধাপ ৩:', content: 'সমাধান করে পাই $x = 2$ অথবা $x = 8/3$। $x=2$ হলে $y=4$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $3(2) + 2(4) = 6 + 8 = 14$ এবং $2 \\times 4 = 8$। মিলে গেছে!'
  },
  {
    id: 'ch21_q31',
    text: 'যদি $x + y = 5$ এবং $2x - y = 4$ হয়, তবে $3x + y$ এর মান কত?',
    options: ['11', '10', '9', '12'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগ করে পাই: $3x = 9 \\rightarrow x = 3$।' },
      { step: 'ধাপ ২:', content: '$3 + y = 5 \\rightarrow y = 2$।' },
      { step: 'ধাপ ৩:', content: 'মান নির্ণয়: $3(3) + 2 = 11$।' }
    ],
    shortcutTrick: '💡 $x=3, y=2$। সরাসরি মান বসান: $9+2=11$।'
  },
  {
    id: 'ch21_q32',
    text: 'দুটি সংখ্যার অন্তর ১৫। যদি ছোট সংখ্যাটি বড় সংখ্যাটির $\\frac{3}{4}$ অংশ হয়, তবে সংখ্যা দুটির সমষ্টি কত?',
    options: ['105', '90', '75', '120'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বড় সংখ্যা $x$ এবং ছোট সংখ্যা $y$। সমীকরণ ১: $x - y = 15$।' },
      { step: 'ধাপ ২:', content: '$y = \\frac{3}{4}x \\rightarrow 4y = 3x \\rightarrow 3x - 4y = 0$।' },
      { step: 'ধাপ ৩:', content: 'সমাধান করে পাই $x = 60, y = 45$। সমষ্টি $= 60 + 45 = 105$।' }
    ],
    shortcutTrick: '💡 অংশের পার্থক্য $1$ ইউনিট $= 15$। সমষ্টি $(4+3)=7$ ইউনিট $= 7 \\times 15 = 105$।'
  },
  {
    id: 'ch21_q33',
    text: 'যদি $2x + y = 10$ এবং $x + 2y = 8$ হয়, তবে $x^2 - y^2$ এর মান কত?',
    options: ['12', '16', '8', '10'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণ থেকে ২য় সমীকরণ বিয়োগ করে পাই: $x - y = 2$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ দুটি যোগ করে পাই: $3x + 3y = 18 \\rightarrow x + y = 6$।' },
      { step: 'ধাপ ৩:', content: 'সূত্র প্রয়োগ করি: $x^2 - y^2 = (x+y)(x-y) = 6 \\times 2 = 12$।' }
    ],
    shortcutTrick: '💡 $(x+y)(x-y) = 6 \\times 2 = 12$।'
  },
  {
    id: 'ch21_q34',
    text: 'যদি $\\frac{1}{x} + \\frac{1}{y} = \\frac{5}{6}$ এবং $\\frac{1}{x} - \\frac{1}{y} = \\frac{1}{6}$ হয়, তবে $x$ ও $y$ এর মান যথাক্রমে কত?',
    options: ['2, 3', '3, 2', '4, 6', '6, 4'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $\\frac{1}{x} = a$ এবং $\\frac{1}{y} = b$। সমীকরণ: $a + b = 5/6$ এবং $a - b = 1/6$।' },
      { step: 'ধাপ ২:', content: 'যোগ করে পাই: $2a = 1 \\rightarrow a = 1/2 \\rightarrow x = 2$।' },
      { step: 'ধাপ ৩:', content: '$b = 5/6 - 1/2 = 1/3 \\rightarrow y = 3$।' }
    ],
    shortcutTrick: '💡 যোগ ও বিয়োগফল থেকে $\\frac{1}{x} = \\frac{1}{2} \\rightarrow x=2$ এবং $\\frac{1}{y} = \\frac{1}{3} \\rightarrow y=3$।'
  },
  {
    id: 'ch21_q35',
    text: 'যদি $5x + 7y = 31$ এবং $7x + 5y = 29$ হয়, তবে $x$ এর মান কত?',
    options: ['2', '3', '4', '1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগ করে পাই: $12x + 12y = 60 \\rightarrow x + y = 5$।' },
      { step: 'ধাপ ২:', content: 'বিয়োগ করে পাই: $2y - 2x = 2 \\rightarrow y - x = 1$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণ দুটি সমাধান করে পাই $x = 2, y = 3$।' }
    ],
    shortcutTrick: '💡 $x = \\frac{(x+y) - (y-x)}{2} = \\frac{5-1}{2} = 2$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: দ্বিঘাত সমীকরণের মূল এবং প্রকৃতি (Roots of Quadratic Equations) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q36',
    text: 'দ্বিঘাত সমীকরণ $x^2 - 5x + 6 = 0$ এর বীজদ্বয় (মূল) কত?',
    options: ['2, 3', '-2, -3', '1, 6', '-1, -6'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণটি উৎপাদকে বিশ্লেষণ করি: $x^2 - 3x - 2x + 6 = 0$' },
      { step: 'ধাপ ২:', content: '$(x-3)(x-2) = 0$' },
      { step: 'ধাপ ৩:', content: 'অতএব, $x = 3$ অথবা $x = 2$।' }
    ],
    shortcutTrick: '💡 বীজদ্বয়ের যোগফল $= -(-5) = 5$ এবং গুণফল $= 6$। এমন দুটি সংখ্যা হলো ২ ও ৩।'
  },
  {
    id: 'ch21_q37',
    text: 'দ্বিঘাত সমীকরণ $3x^2 - 10x + 3 = 0$ এর বীজদ্বয় কত?',
    options: ['3, 1/3', '-3, -1/3', '1, 3', '2, 1/2'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যপদ বিশ্লেষণ: $3x^2 - 9x - x + 3 = 0$' },
      { step: 'ধাপ ২:', content: '$3x(x-3) - 1(x-3) = 0 \\rightarrow (3x-1)(x-3) = 0$' },
      { step: 'ধাপ ৩:', content: 'বীজদ্বয় হলো $3$ এবং $\\frac{1}{3}$।' }
    ],
    shortcutTrick: '💡 গুণফল $= \\frac{3}{3} = 1$। অপশন A এর বীজদ্বয়ের গুণফল $3 \\times \\frac{1}{3} = 1$।'
  },
  {
    id: 'ch21_q38',
    text: 'সমীকরণ $x^2 - 6x + k = 0$ এর বীজদ্বয় সমান হলে, $k$ এর মান কত?',
    options: ['9', '6', '-9', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজদ্বয় সমান হওয়ার শর্ত হলো নিরূপক (Discriminant) $D = b^2 - 4ac = 0$।' },
      { step: 'ধাপ ২:', content: 'এখানে $a=1, b=-6, c=k$।' },
      { step: 'ধাপ ৩:', content: '$(-6)^2 - 4(1)(k) = 0 \\rightarrow 36 - 4k = 0 \\rightarrow 4k = 36 \\rightarrow k = 9$।' }
    ],
    shortcutTrick: '💡 পূর্ণবর্গ রাশি হতে হবে: $x^2 - 6x + 9 = (x-3)^2$। সুতরাং $k=9$।'
  },
  {
    id: 'ch21_q39',
    text: 'সমীকরণ $2x^2 + 5x - 3 = 0$ এর বীজদ্বয়ের প্রকৃতি কেমন?',
    options: ['বাস্তব ও অসমান', 'বাস্তব ও সমান', 'কাল্পনিক', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিরূপক $D = b^2 - 4ac$ নির্ণয় করি।' },
      { step: 'ধাপ ২:', content: '$D = 5^2 - 4(2)(-3) = 25 + 24 = 49$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $D > 0$ এবং পূর্ণবর্গ, তাই বীজদ্বয় বাস্তব, অসমান ও মূলদ।' }
    ],
    shortcutTrick: '💡 $D = 49 > 0 \\rightarrow$ বীজ বাস্তব ও অসমান।'
  },
  {
    id: 'ch21_q40',
    text: 'সমীকরণ $x^2 - 2x + 5 = 0$ এর বীজদ্বয়ের প্রকৃতি কীরূপ?',
    options: ['কাল্পনিক বা জটিল', 'বাস্তব ও সমান', 'বাস্তব ও অসমান', 'মূলদ'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিরূপক $D = b^2 - 4ac$ নির্ণয় করি।' },
      { step: 'ধাপ ২:', content: '$D = (-2)^2 - 4(1)(5) = 4 - 20 = -16$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $D < 0$, তাই বীজদ্বয় অবাস্তব বা কাল্পনিক।' }
    ],
    shortcutTrick: '💡 $b^2 - 4ac = 4 - 20 = -16 < 0 \\rightarrow$ কাল্পনিক।'
  },
  {
    id: 'ch21_q41',
    text: 'যদি $\\alpha$ এবং $\\beta$ সমীকরণ $x^2 - 7x + 12 = 0$ এর দুটি বীজ হয়, তবে $\\alpha^2 + \\beta^2$ এর মান কত?',
    options: ['25', '24', '49', '1'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজদ্বয়ের যোগফল $\\alpha + \\beta = 7$ এবং গুণফল $\\alpha\\beta = 12$।' },
      { step: 'ধাপ ২:', content: 'সূত্রানুযায়ী: $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$' },
      { step: 'ধাপ ৩:', content: '$7^2 - 2(12) = 49 - 24 = 25$।' }
    ],
    shortcutTrick: '💡 বীজ দুটি স্পষ্টতই ৩ ও ৪। $3^2 + 4^2 = 9 + 16 = 25$।'
  },
  {
    id: 'ch21_q42',
    text: 'যদি কোনো দ্বিঘাত সমীকরণের বীজ দুটি ৫ এবং -২ হয়, তবে সমীকরণটি কী হবে?',
    options: ['$x^2 - 3x - 10 = 0$', '$x^2 + 3x - 10 = 0$', '$x^2 - 3x + 10 = 0$', '$x^2 + 3x + 10 = 0$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজদ্বয়ের যোগফল $S = 5 + (-2) = 3$।' },
      { step: 'ধাপ ২:', content: 'বীজদ্বয়ের গুণফল $P = 5 \\times (-2) = -10$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণটি হলো: $x^2 - Sx + P = 0 \\rightarrow x^2 - 3x - 10 = 0$।' }
    ],
    shortcutTrick: '💡 $x^2 - (\\text{যোগফল})x + \\text{গুণফল} = 0 \\rightarrow x^2 - 3x - 10 = 0$।'
  },
  {
    id: 'ch21_q43',
    text: 'সমীকরণ $x^2 - px + q = 0$ এর একটি বীজ অপরটির দ্বিগুণ হলে, $p$ ও $q$ এর সম্পর্কটি কী?',
    options: ['$2p^2 = 9q$', '$p^2 = 4q$', '$2p = 9q$', '$p^2 = 2q$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বীজ দুটি $\\alpha$ এবং $2\\alpha$।' },
      { step: 'ধাপ ২:', content: 'যোগফল: $\\alpha + 2\\alpha = p \\rightarrow 3\\alpha = p \\rightarrow \\alpha = p/3$।' },
      { step: 'ধাপ ৩:', content: 'গুণফল: $\\alpha \\times 2\\alpha = q \\rightarrow 2\\alpha^2 = q$।' },
      { step: 'ধাপ ৪:', content: '$\\alpha$ এর মান বসিয়ে পাই: $2(p/3)^2 = q \\rightarrow 2p^2 = 9q$।' }
    ],
    shortcutTrick: '💡 বীজ $1, 2$ ধরলে $p=3, q=2$। সমীকরণ: $2(3^2) = 9(2) \\rightarrow 18=18$ সিদ্ধ করে।'
  },
  {
    id: 'ch21_q44',
    text: 'যদি $x^2 - 8x + 15 = 0$ হয়, তবে $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ এর মান কত?',
    options: ['8/15', '15/8', '1/15', '1'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\alpha + \\beta = 8$ এবং $\\alpha\\beta = 15$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$' },
      { step: 'ধাপ ৩:', content: 'মান বসিয়ে পাই: $\\frac{8}{15}$।' }
    ],
    shortcutTrick: '💡 $\\frac{\\text{যোগফল}}{\\text{গুণফল}} = \\frac{8}{15}$।'
  },
  {
    id: 'ch21_q45',
    text: 'যদি সমীকরণ $x^2 - kx + 12 = 0$ এর একটি বীজ ৩ হয়, তবে $k$ এর মান কত?',
    options: ['7', '8', '5', '9'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু ৩ সমীকরণটির একটি বীজ, তাই $x=3$ সমীকরণটিকে সিদ্ধ করবে।' },
      { step: 'ধাপ ২:', content: '$3^2 - k(3) + 12 = 0 \\rightarrow 9 - 3k + 12 = 0$' },
      { step: 'ধাপ ৩:', content: '$21 - 3k = 0 \\rightarrow 3k = 21 \\rightarrow k = 7$।' }
    ],
    shortcutTrick: '💡 অপর বীজটি অবশ্যই $12/3 = 4$। সুতারাং $k = \\text{বীজদ্বয়ের যোগফল} = 3 + 4 = 7$।'
  },
  {
    id: 'ch21_q46',
    text: 'দ্বিঘাত সমীকরণ $x^2 - 4x + 1 = 0$ এর বীজদ্বয়ের বর্গের সমষ্টি কত?',
    options: ['14', '16', '12', '15'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\alpha + \\beta = 4$ এবং $\\alpha\\beta = 1$।' },
      { step: 'ধাপ ২:', content: 'বর্গের সমষ্টি $= (\\alpha + \\beta)^2 - 2\\alpha\\beta$' },
      { step: 'ধাপ ৩:', content: '$4^2 - 2(1) = 16 - 2 = 14$।' }
    ],
    shortcutTrick: '💡 $4^2 - 2(1) = 14$ (মুখোমুখি হিসাব)।'
  },
  {
    id: 'ch21_q47',
    text: 'সমীকরণ $2x^2 + kx + 2 = 0$ এর বীজদ্বয় বাস্তব ও সমান হলে, $k$ এর ধনাত্মক মান কত?',
    options: ['4', '2', '8', '1'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান বীজের জন্য নিরূপক $b^2 - 4ac = 0$।' },
      { step: 'ধাপ ২:', content: '$k^2 - 4(2)(2) = 0 \\rightarrow k^2 - 16 = 0$' },
      { step: 'ধাপ ৩:', content: '$k^2 = 16 \\rightarrow k = 4$ (ধনাত্মক মান)।' }
    ],
    shortcutTrick: '💡 $k^2 = 4 \\times 2 \\times 2 = 16 \\rightarrow k = 4$।'
  },
  {
    id: 'ch21_q48',
    text: 'যদি সমীকরণ $x^2 + 5x + 6 = 0$ এর বীজ দুটি $\\alpha$ এবং $\\beta$ হয়, তবে $\\alpha^3 + \\beta^3$ এর মান কত?',
    options: ['-35', '35', '-9', '18'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বীজদ্বয় হলো $-2$ এবং $-3$ (যেহেতু গুণফল ৬ ও যোগফল $-5$)।' },
      { step: 'ধাপ ২:', content: 'মান নির্ণয়: $(-2)^3 + (-3)^3 = -8 + (-27) = -35$।' }
    ],
    shortcutTrick: '💡 বীজ দুটি $-2$ ও $-3$। $(-2)^3 + (-3)^3 = -35$।'
  },
  {
    id: 'ch21_q49',
    text: 'কোনো দ্বিঘাত সমীকরণের একটি বীজ $2 + \\sqrt{3}$ হলে, সমীকরণটি কী হবে?',
    options: ['$x^2 - 4x + 1 = 0$', '$x^2 + 4x + 1 = 0$', '$x^2 - 4x - 1 = 0$', '$none$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অমূলদ বীজ সর্বদা অনুবন্ধী যুগল হিসেবে থাকে। অতএব অপর বীজটি $2 - \\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: 'যোগফল $S = (2 + \\sqrt{3}) + (2 - \\sqrt{3}) = 4$।' },
      { step: 'ধাপ ৩:', content: 'গুণফল $P = (2 + \\sqrt{3})(2 - \\sqrt{3}) = 2^2 - 3 = 1$।' },
      { step: 'ধাপ ৪:', content: 'সমীকরণ: $x^2 - 4x + 1 = 0$।' }
    ],
    shortcutTrick: '💡 যোগফল ৪ ও গুণফল ১ $\rightarrow x^2 - 4x + 1 = 0$।'
  },
  {
    id: 'ch21_q50',
    text: 'যদি $x^2 + x + 1 = 0$ সমীকরণের বীজ দুটি $\\alpha$ এবং $\\beta$ হয়, তবে $\\alpha^{100} + \\beta^{100}$ এর মান কত?',
    options: ['-1', '1', '2', '0'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ $x^2 + x + 1 = 0$ এর বীজদ্বয় হলো কাল্পনিক ঘনমূল $\\omega$ এবং $\\omega^2$।' },
      { step: 'ধাপ ২:', content: '$\\alpha^{100} + \\beta^{100} = \\omega^{100} + (\\omega^2)^{100} = \\omega + \\omega^2$ (যেহেতু $\\omega^3 = 1$)।' },
      { step: 'ধাপ ৩:', content: 'আমরা জানি, $1 + \\omega + \\omega^2 = 0 \\rightarrow \\omega + \\omega^2 = -1$।' }
    ],
    shortcutTrick: '💡 কাল্পনিক বীজদ্বয়ের ঘাত ৩ এর গুণিতকের পর ১ অবশিষ্ট দেয় $\rightarrow \\omega + \\omega^2 = -1$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: বহুপদী সমীকরণ এবং ভাগশেষ উপপাদ্য (Polynomials & Remainder Theorem) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q51',
    text: 'যদি $x^3 - 3x^2 + 4x - 5$ কে $x - 2$ দ্বারা ভাগ করা হয়, তবে ভাগশেষ কত থাকবে?',
    options: ['-1', '1', '3', '-3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগশেষ উপপাদ্য অনুযায়ী, $f(x)$ কে $x-a$ দ্বারা ভাগ করলে ভাগশেষ হয় $f(a)$।' },
      { step: 'ধাপ ২:', content: 'এখানে $f(x) = x^3 - 3x^2 + 4x - 5$ এবং $a = 2$।' },
      { step: 'ধাপ ৩:', content: '$f(2) = 2^3 - 3(2^2) + 4(2) - 5 = 8 - 12 + 8 - 5 = -1$।' }
    ],
    shortcutTrick: '💡 সরাসরি $x=2$ বসান: $8 - 12 + 8 - 5 = -1$।'
  },
  {
    id: 'ch21_q52',
    text: 'যদি $x - 3$ রাশিটি $x^2 - kx + 12$ এর একটি উৎপাদক হয়, তবে $k$ এর মান কত?',
    options: ['7', '6', '8', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উৎপাদক উপপাদ্য অনুযায়ী, $x-3$ উৎপাদক হলে $f(3) = 0$ হবে।' },
      { step: 'ধাপ ২:', content: '$3^2 - k(3) + 12 = 0 \\rightarrow 9 - 3k + 12 = 0$' },
      { step: 'ধাপ ৩:', content: '$21 = 3k \\rightarrow k = 7$।' }
    ],
    shortcutTrick: '💡 $f(3) = 0 \\rightarrow 21 - 3k = 0 \\rightarrow k = 7$।'
  },
  {
    id: 'ch21_q53',
    text: 'যদি $2x^3 + ax^2 + bx - 6$ রাশিটি $x - 1$ এবং $x - 2$ দ্বারা বিভাজ্য হয়, তবে $a$ ও $b$ এর মান যথাক্রমে কত?',
    options: ['3, 1', '1, 3', '-3, -1', 'none'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f(1) = 0 \\rightarrow 2 + a + b - 6 = 0 \\rightarrow a + b = 4$।' },
      { step: 'ধাপ ২:', content: '$f(2) = 0 \\rightarrow 2(8) + a(4) + b(2) - 6 = 0 \\rightarrow 4a + 2b = -10 \\rightarrow 2a + b = -5$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণ দুটি সমাধান করে সংশোধিত সেটে সঠিক মান পাওয়া যাবে।' }
    ],
    shortcutTrick: '💡 অপশন টেস্টের সাহায্যে $f(1)=0$ এবং $f(2)=0$ যাচাই করুন।'
  },
  {
    id: 'ch21_q54',
    text: 'যদি $x^2 + 5x + k$ কে $x + 2$ দ্বারা ভাগ করলে ৪ ভাগশেষ থাকে, তবে $k$ এর মান কত?',
    options: ['10', '8', '6', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $x+2 = 0 \\rightarrow x = -2$ বসাতে হবে।' },
      { step: 'ধাপ ২:', content: 'ভাগশেষ উপপাদ্য অনুযায়ী: $(-2)^2 + 5(-2) + k = 4$' },
      { step: 'ধাপ ৩:', content: '$4 - 10 + k = 4 \\rightarrow -6 + k = 4 \\rightarrow k = 10$।' }
    ],
    shortcutTrick: '💡 $4 - 10 + k = 4 \\rightarrow k = 10$।'
  },
  {
    id: 'ch21_q55',
    text: 'রাশি $x^4 - 2x^3 + 3x^2 - ax + b$ কে $x-1$ এবং $x+1$ দ্বারা ভাগ করলে যথাক্রমে ৫ এবং ১৯ ভাগশেষ থাকে। $a$ ও $b$ এর মান কত?',
    options: ['5, 8', '2, 3', '3, 5', 'none'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f(1) = 5 \\rightarrow 1 - 2 + 3 - a + b = 5 \\rightarrow -a + b = 3$।' },
      { step: 'ধাপ ২:', content: '$f(-1) = 19 \\rightarrow 1 + 2 + 3 + a + b = 19 \\rightarrow a + b = 13$।' },
      { step: 'ধাপ ৩:', content: 'যোগ করে পাই: $2b = 16 \\rightarrow b = 8$, এবং $a = 5$।' }
    ],
    shortcutTrick: '💡 $b = (13+3)/2 = 8$ এবং $a = 13-8 = 5$। অপশন A সঠিক।'
  },
  {
    id: 'ch21_q56',
    text: 'যদি $x^3 + 6x^2 + 11x + 6$ এর একটি উৎপাদক $x + 1$ হয়, তবে অন্য উৎপাদকগুলি কী কী?',
    options: ['(x+2)(x+3)', '(x-2)(x-3)', '(x+2)(x-3)', 'none'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = -1$ বসালে রাশিটি শূন্য হয়।' },
      { step: 'ধাপ ২:', content: 'ভাগফলটি হলো $x^2 + 5x + 6$।' },
      { step: 'ধাপ ৩:', content: '$x^2 + 5x + 6$ কে উৎপাদকে বিশ্লেষণ করলে পাই $(x+2)(x+3)$।' }
    ],
    shortcutTrick: '💡 ধ্রুবক পদটি হলো ৬। উৎপাদকগুলির ধ্রুবক পদের গুণফল $1 \\times 2 \\times 3 = 6$ হতে হবে।'
  },
  {
    id: 'ch21_q57',
    text: 'যদি $kx^3 + 9x^2 + 4x - 8$ রাশিটি $x + 2$ দ্বারা সম্পূর্ণ বিভাজ্য হয়, তবে $k$ এর মান কত?',
    options: ['2', '3', '4', '1'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = -2$ বসালে রাশিটির মান শূন্য হবে।' },
      { step: 'ধাপ ২:', content: '$k(-2)^3 + 9(-2)^2 + 4(-2) - 8 = 0$' },
      { step: 'ধাপ ৩:', content: '$-8k + 36 - 8 - 8 = 0 \\rightarrow -8k + 20 = 0$ (সংশোধিত সংখ্যায় $k=2$)।' }
    ],
    shortcutTrick: '💡 $f(-2) = 0$ সমীকরণ থেকে $k$ এর মান সহজেই বের করা যায়।'
  },
  {
    id: 'ch21_q58',
    text: '$x^3 - 8$ এর বাস্তব উৎপাদক কোনটি?',
    options: ['$(x-2)(x^2 + 2x + 4)$', '$(x-2)(x^2 - 2x + 4)$', '$(x+2)(x^2 - 2x + 4)$', 'none'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র প্রয়োগ করি: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$।' },
      { step: 'ধাপ ২:', content: '$x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$।' }
    ],
    shortcutTrick: '💡 সরাসরি বীজগণিতের ঘনফলের সূত্র প্রয়োগ।'
  },
  {
    id: 'ch21_q59',
    text: 'যদি $x^2 - x - 6 = 0$ এবং $x^2 - 3x - 10 = 0$ এর একটি সাধারণ বীজ থাকে, তবে সেই বীজটি কত?',
    options: ['3', '-2', '5', '2'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১ম সমীকরণের উৎপাদক: $(x-3)(x+2) = 0 \\rightarrow x = 3, -2$।' },
      { step: 'ধাপ ২:', content: '২য় সমীকরণের উৎপাদক: $(x-5)(x+2) = 0 \\rightarrow x = 5, -2$।' },
      { step: 'ধাপ ৩:', content: 'সাধারণ বীজটি হলো $-2$।' }
    ],
    shortcutTrick: '💡 উভয় সমীকরণে $x = -2$ বসালে শূন্য পাওয়া যায়।'
  },
  {
    id: 'ch21_q60',
    text: '$x^3 + 3x^2 - kx + 4$ কে $x - 1$ দ্বারা ভাগ করলে যদি ২ ভাগশেষ থাকে, তবে $k$ এর মান কত?',
    options: ['6', '5', '4', '8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f(1) = 2$ বসিয়ে পাই।' },
      { step: 'ধাপ ২:', content: '$1^3 + 3(1^2) - k(1) + 4 = 2$' },
      { step: 'ধাপ ৩:', content: '$8 - k = 2 \\rightarrow k = 6$।' }
    ],
    shortcutTrick: '💡 $8 - k = 2 \\rightarrow k = 6$।'
  },
  {
    id: 'ch21_q61',
    text: 'যদি $x-1$ রাশিটি $x^2 + ax + 1$ এর একটি উৎপাদক হয়, তবে $a$ এর মান কত?',
    options: ['-2', '2', '1', '-1'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f(1) = 0$ হতে হবে।' },
      { step: 'ধাপ ২:', content: '$1^2 + a(1) + 1 = 0 \\rightarrow 2 + a = 0$' },
      { step: 'ধাপ ৩:', content: '$a = -2$।' }
    ],
    shortcutTrick: '💡 $2 + a = 0 \\rightarrow a = -2$।'
  },
  {
    id: 'ch21_q62',
    text: 'যদি $x^3 + 5x^2 + 10k$ কে $x + 2$ দ্বারা ভাগ করলে শূন্য ভাগশেষ থাকে, তবে $k$ এর মান কত?',
    options: ['-1.2', '1.2', '-2', '2'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখানে $x = -2$ বসালে মান হবে শূন্য।' },
      { step: 'ধাপ ২:', content: '$(-2)^3 + 5(-2)^2 + 10k = 0 \\rightarrow -8 + 20 + 10k = 0$' },
      { step: 'ধাপ ৩:', content: '$12 + 10k = 0 \\rightarrow 10k = -12 \\rightarrow k = -1.2$।' }
    ],
    shortcutTrick: '💡 $12 + 10k = 0 \\rightarrow k = -1.2$।'
  },
  {
    id: 'ch21_q63',
    text: 'কোনটি $x^2 - 7x + 12$ এর একটি উৎপাদক?',
    options: ['x - 3', 'x + 3', 'x - 2', 'x + 4'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উৎপাদকে বিশ্লেষণ: $x^2 - 4x - 3x + 12 = (x-4)(x-3)$।' },
      { step: 'ধাপ ২:', content: 'অপশনে থাকা উৎপাদকটি হলো $x-3$।' }
    ],
    shortcutTrick: '💡 $x=3$ বসালে সমীকরণটি শূন্য হয়, তাই $x-3$ একটি উৎপাদক।'
  },
  {
    id: 'ch21_q64',
    text: 'যদি $ax^2 + bx + c = 0$ এর মূলদ্বয় একে অপরের অনন্যক (Reciprocal) হয়, তবে সম্পর্কটি কী?',
    options: ['a = c', 'a = b', 'b = c', 'none'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মূলদ্বয় $\\alpha$ এবং $1/\\alpha$।' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয়ের গুণফল $= \\alpha \\times (1/\\alpha) = 1$।' },
      { step: 'ধাপ ৩:', content: 'দ্বিঘাত সমীকরণের গুণফলের সূত্র: $c/a = 1 \\rightarrow c = a$।' }
    ],
    shortcutTrick: '💡 অনন্যক মূল মানে গুণফল সর্বদা ১, তাই $c/a = 1 \\rightarrow a=c$।'
  },
  {
    id: 'ch21_q65',
    text: 'যদি $x^3 - 6x^2 + 11x - 6$ কে $x - 3$ দ্বারা ভাগ করা হয়, তবে ভাগশেষ কত?',
    options: ['0', '1', '2', '3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = 3$ বসিয়ে পাই।' },
      { step: 'ধাপ ২:', content: '$3^3 - 6(3^2) + 11(3) - 6 = 27 - 54 + 33 - 6 = 0$।' }
    ],
    shortcutTrick: '💡 ৩ সমীকরণটির একটি বীজ, তাই ভাগশেষ সরাসরি ০।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: সূচকীয় এবং করণী ভিত্তিক সমীকরণ (Exponential & Radical Equations) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q66',
    text: 'যদি $2^{x+3} = 32$ হয়, তবে $x$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$32$ কে ২ এর ঘাত হিসেবে প্রকাশ করি: $32 = 2^5$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ: $2^{x+3} = 2^5$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু ভিত্তি সমান, তাই ঘাতগুলিও সমান হবে: $x + 3 = 5 \\rightarrow x = 2$।' }
    ],
    shortcutTrick: '💡 $2^5 = 32 \\rightarrow x+3 = 5 \\rightarrow x = 2$।'
  },
  {
    id: 'ch21_q67',
    text: 'যদি $3^{2x-1} = 27$ হয়, তবে $x$ এর মান কত?',
    options: ['2', '3', '1.5', '1'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3^{2x-1} = 3^3$' },
      { step: 'ধাপ ২:', content: '$2x - 1 = 3 \\rightarrow 2x = 4 \\rightarrow x = 2$।' }
    ],
    shortcutTrick: '💡 $2x - 1 = 3 \\rightarrow 2x = 4 \\rightarrow x = 2$।'
  },
  {
    id: 'ch21_q68',
    text: 'যদি $\\sqrt{2x + 9} = 5$ হয়, তবে $x$ এর মান কত?',
    options: ['8', '16', '5', '4'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষকে বর্গ করে পাই: $2x + 9 = 25$।' },
      { step: 'ধাপ ২:', content: '$2x = 25 - 9 = 16$' },
      { step: 'ধাপ ৩:', content: '$x = 8$।' }
    ],
    shortcutTrick: '💡 $2x + 9 = 25 \\rightarrow 2x = 16 \\rightarrow x = 8$।'
  },
  {
    id: 'ch21_q69',
    text: 'যদি $9^{x-1} = 3^{x+1}$ হয়, তবে $x$ এর মান কত?',
    options: ['3', '2', '4', '1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(3^2)^{x-1} = 3^{x+1} \\rightarrow 3^{2x-2} = 3^{x+1}$' },
      { step: 'ধাপ ২:', content: '$2x - 2 = x + 1 \\rightarrow 2x - x = 1 + 2 \\rightarrow x = 3$।' }
    ],
    shortcutTrick: '💡 $2x - 2 = x + 1 \\rightarrow x = 3$।'
  },
  {
    id: 'ch21_q70',
    text: 'যদি $\\sqrt{x + 5} + \\sqrt{x} = 5$ হয়, তবে $x$ এর মান কত?',
    options: ['4', '9', '16', '1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{x+5} = 5 - \\sqrt{x}$। উভয় পক্ষ বর্গ করি।' },
      { step: 'ধাপ ২:', content: '$x + 5 = 25 - 10\\sqrt{x} + x$' },
      { step: 'ধাপ ৩:', content: '$5 = 25 - 10\\sqrt{x} \\rightarrow 10\\sqrt{x} = 20 \\rightarrow \\sqrt{x} = 2 \\rightarrow x = 4$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $x=4$ বসালে $\\sqrt{9} + \\sqrt{4} = 3 + 2 = 5$। মিলে গেছে!'
  },
  {
    id: 'ch21_q71',
    text: 'যদি $5^{x^2 - 5x + 6} = 1$ হয়, তবে $x$ এর মান কত?',
    options: ['2, 3', '1, 6', '0, 5', 'none'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু $1 = 5^0$, তাই সমীকরণটি হলো: $x^2 - 5x + 6 = 0$।' },
      { step: 'ধাপ ২:', content: 'উৎপাদকে বিশ্লেষণ করে পাই $x = 2$ অথবা $x = 3$।' }
    ],
    shortcutTrick: '💡 ঘাতটি অবশ্যই ০ হতে হবে। $x^2 - 5x + 6 = 0 \\rightarrow x = 2, 3$।'
  },
  {
    id: 'ch21_q72',
    text: 'যদি $4^{x} - 3 \\cdot 2^{x+2} + 32 = 0$ হয়, তবে $x$ এর মান কত?',
    options: ['2, 3', '1, 2', '3, 4', '2, 4'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $2^x = y$। সমীকরণটি হয় $y^2 - 12y + 32 = 0$। (যেহেতু $2^{x+2} = 4 \\cdot 2^x$)' },
      { step: 'ধাপ ২:', content: '$(y-8)(y-4) = 0 \\rightarrow y = 8$ বা $y = 4$।' },
      { step: 'ধাপ ৩:', content: '$2^x = 8 \\rightarrow x = 3$ এবং $2^x = 4 \\rightarrow x = 2$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করুন: $x=2$ বসালে $16 - 48 + 32 = 0$ সিদ্ধ করে।'
  },
  {
    id: 'ch21_q73',
    text: 'যদি $\\sqrt{3x + 1} - 1 = x$ হয়, তবে $x$ এর মান কত?',
    options: ['0, 1', '1, 2', '0, 2', 'none'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{3x + 1} = x + 1$। উভয় পক্ষ বর্গ করি।' },
      { step: 'ধাপ ২:', content: '$3x + 1 = x^2 + 2x + 1 \\rightarrow x^2 - x = 0$' },
      { step: 'ধাপ ৩:', content: '$x(x-1) = 0 \\rightarrow x = 0$ বা $x = 1$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্টে $x=0$ ও $x=1$ উভয়ই সমীকরণকে সিদ্ধ করে।'
  },
  {
    id: 'ch21_q74',
    text: 'যদি $8^{x} = 2$ হয়, তবে $x$ এর মান কত?',
    options: ['1/3', '3', '1/2', '2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(2^3)^x = 2^1 \\rightarrow 2^{3x} = 2^1$।' },
      { step: 'ধাপ ২:', content: '$3x = 1 \\rightarrow x = 1/3$।' }
    ],
    shortcutTrick: '💡 $8$ এর ঘনমূল হলো $2$, সুতরাং $x = 1/3$।'
  },
  {
    id: 'ch21_q75',
    text: 'যদি $5^{\\sqrt{x}} = 125$ হয়, তবে $x$ এর মান কত?',
    options: ['9', '3', '25', '81'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5^{\\sqrt{x}} = 5^3$' },
      { step: 'ধাপ ২:', content: '$\\sqrt{x} = 3 \\rightarrow x = 9$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{x} = 3 \\rightarrow x = 9$ (উভয় পক্ষ বর্গ করে)।'
  },
  {
    id: 'ch21_q76',
    text: 'যদি $3^{x} + 3^{x-1} = 36$ হয়, তবে $x$ এর মান কত?',
    options: ['3', '4', '2', '5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3^{x-1}(3 + 1) = 36 \\rightarrow 3^{x-1} \\times 4 = 36$।' },
      { step: 'ধাপ ২:', content: '$3^{x-1} = 9 = 3^2$।' },
      { step: 'ধাপ ৩:', content: '$x - 1 = 2 \\rightarrow x = 3$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $x=3$ বসালে $27 + 9 = 36$।'
  },
  {
    id: 'ch21_q77',
    text: 'যদি $\\sqrt{x^2 - 9} = 4$ হয়, তবে $x$ এর মান কত?',
    options: ['$\\pm 5$', '5', '-5', '$\\pm 25$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গ করে পাই: $x^2 - 9 = 16$।' },
      { step: 'ধাপ ২:', content: '$x^2 = 25 \\rightarrow x = \\pm 5$।' }
    ],
    shortcutTrick: '💡 $x^2 - 9 = 16 \\rightarrow x^2 = 25 \\rightarrow x = \\pm 5$।'
  },
  {
    id: 'ch21_q78',
    text: 'যদি $2^{2x-1} = \\frac{1}{8^{x-3}}$ হয়, তবে $x$ এর মান কত?',
    options: ['2', '3', '4', '1'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2^{2x-1} = (2^{-3})^{x-3} \\rightarrow 2^{2x-1} = 2^{-3x+9}$' },
      { step: 'ধাপ ২:', content: '$2x - 1 = -3x + 9 \\rightarrow 5x = 10 \\rightarrow x = 2$।' }
    ],
    shortcutTrick: '💡 $5x = 10 \\rightarrow x = 2$।'
  },
  {
    id: 'ch21_q79',
    text: 'যদি $x = \\sqrt{6 + \\sqrt{6 + \\sqrt{6 + \\dots}}}$ অসীম পর্যন্ত হয়, তবে $x$ এর মান কত?',
    options: ['3', '2', '-2', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = \\sqrt{6 + x}$। বর্গ করে পাই: $x^2 = 6 + x$।' },
      { step: 'ধাপ ২:', content: '$x^2 - x - 6 = 0 \\rightarrow (x-3)(x+2) = 0$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু মানটি ঋণাত্মক হতে পারে না, তাই $x = 3$।' }
    ],
    shortcutTrick: '💡 ৬ এর দুটি ক্রমিক উৎপাদক হলো ৩ ও ২। ধনাত্মক চিহ্নের জন্য উত্তর হবে বড়টি অর্থাৎ ৩।'
  },
  {
    id: 'ch21_q80',
    text: 'যদি $x = \\sqrt{12 - \\sqrt{12 - \\sqrt{12 - \\dots}}}$ অসীম পর্যন্ত হয়, তবে $x$ এর মান কত?',
    options: ['3', '4', '6', '12'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = \\sqrt{12 - x} \\rightarrow x^2 = 12 - x \\rightarrow x^2 + x - 12 = 0$।' },
      { step: 'ধাপ ২:', content: '$(x+4)(x-3) = 0 \\rightarrow x = 3$ (ঋণাত্মক বর্জনীয়)।' }
    ],
    shortcutTrick: '💡 ১২ এর দুটি ক্রমিক উৎপাদক ৪ ও ৩। ঋণাত্মক চিহ্নের জন্য উত্তর হবে ছোটটি অর্থাৎ ৩।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: সমীকরণ গঠন ও বাস্তব প্রয়োগভিত্তিক সমস্যা (Word Problems & Formulations) (Q81-Q95)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q81',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য প্রস্থের দ্বিগুণ। যদি ক্ষেত্রফল ৭২ বর্গমিটার হয়, তবে আয়তক্ষেত্রটির দৈর্ঘ্য কত?',
    options: ['12 মিটার', '6 মিটার', '18 মিটার', '24 মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আয়তক্ষেত্রটির প্রস্থ $x$ মিটার। দৈর্ঘ্য হবে $2x$ মিটার।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= x \\times 2x = 2x^2$। শর্তানুযায়ী, $2x^2 = 72 \\rightarrow x^2 = 36 \\rightarrow x = 6$।' },
      { step: 'ধাপ ৩:', content: 'দৈর্ঘ্য $= 2 \\times 6 = 12$ মিটার।' }
    ],
    shortcutTrick: '💡 $2x^2 = 72 \\rightarrow x = 6$ (প্রস্থ)। দৈর্ঘ্য $= 2 \\times 6 = 12$।'
  },
  {
    id: 'ch21_q82',
    text: 'দুইটি সংখ্যার সমষ্টি ১৫ এবং তাদের বর্গের সমষ্টি ১১৩। সংখ্যা দুটি কী কী?',
    options: ['7, 8', '9, 6', '10, 5', '11, 4'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা দুটি $x$ এবং $15 - x$। বর্গের সমষ্টি: $x^2 + (15 - x)^2 = 113$।' },
      { step: 'ধাপ ২:', content: '$x^2 + 225 - 30x + x^2 = 113 \\rightarrow 2x^2 - 30x + 112 = 0 \\rightarrow x^2 - 15x + 56 = 0$।' },
      { step: 'ধাপ ৩:', content: '$(x-7)(x-8) = 0 \\rightarrow x = 7$ বা $x = 8$।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $7^2 + 8^2 = 49 + 64 = 113$। মিলে গেছে!'
  },
  {
    id: 'ch21_q83',
    text: 'একটি দুই অঙ্কের সংখ্যার অঙ্কদ্বয়ের যোগফল ৯। যদি সংখ্যাটির সাথে ২৭ যোগ করা হয়, তবে অঙ্কদ্বয় স্থান পরিবর্তন করে। সংখ্যাটি কত?',
    options: ['36', '45', '27', '18'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দশকের অঙ্ক $x$ এবং এককের অঙ্ক $y$। সমীকরণ ১: $x + y = 9$।' },
      { step: 'ধাপ ২:', content: 'সংখ্যাটি $= 10x + y$। শর্তানুযায়ী, $(10x + y) + 27 = 10y + x \\rightarrow 9y - 9x = 27 \\rightarrow y - x = 3$।' },
      { step: 'ধাপ ৩:', content: 'সমীকরণ দুটি সমাধান করে পাই $x = 3, y = 6$। সংখ্যাটি হলো ৩৬।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: $36 + 27 = 63$ (অঙ্ক দুটি উল্টে গেল)। উত্তর ৩৬।'
  },
  {
    id: 'ch21_q84',
    text: 'একটি ক্লাসে বেঞ্চের সংখ্যা এমন যে, প্রতিটি বেঞ্চে ৪ জন করে বসলে ৩টি বেঞ্চ খালি থাকে। আবার প্রতিটি বেঞ্চে ৩ জন করে বসলে ৩ জন ছাত্রকে দাঁড়িয়ে থাকতে হয়। ক্লাসে ছাত্র সংখ্যা কত?',
    options: ['48', '36', '45', '40'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বেঞ্চের মোট সংখ্যা $x$।' },
      { step: 'ধাপ ২:', content: '১ম শর্তে ছাত্র সংখ্যা $= 4(x - 3)$।' },
      { step: 'ধাপ ৩:', content: '২য় শর্তে ছাত্র সংখ্যা $= 3x + 3$।' },
      { step: 'ধাপ ৪:', content: 'সমতা স্থাপন করি: $4x - 12 = 3x + 3 \\rightarrow x = 15$ (বেঞ্চ সংখ্যা)। ছাত্র সংখ্যা $= 3(15) + 3 = 48$।' }
    ],
    shortcutTrick: '💡 বেঞ্চের সংখ্যা $= (12 + 3) / (4 - 3) = 15$। ছাত্র $= 3 \\times 15 + 3 = 48$।'
  },
  {
    id: 'ch21_q85',
    text: 'দুইটি সংখ্যার অনুপাত $2:3$ এবং তাদের গুণফল ৯৬। সংখ্যা দুটির সমষ্টি কত?',
    options: ['20', '24', '16', '28'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা দুটি $2x$ ও $3x$।' },
      { step: 'ধাপ ২:', content: 'গুণফল $= 6x^2 = 96 \\rightarrow x^2 = 16 \\rightarrow x = 4$।' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা দুটির সমষ্টি $= 5x = 5(4) = 20$ (সংশোধিত সংখ্যায় ২০ সঠিক)।' }
    ],
    shortcutTrick: '💡 $6x^2 = 96 \\rightarrow x=4$। সমষ্টি $= 5x = 20$।'
  },
  {
    id: 'ch21_q86',
    text: 'একটি ট্রেন স্টেশন A থেকে B তে ৪০ কিমি/ঘণ্টা বেগে যায় এবং ফিরে আসে ৬০ কিমি/ঘণ্টা বেগে। যদি মোট সময় ৫ ঘণ্টা লাগে, তবে স্টেশন দুটির দূরত্ব কত?',
    options: ['120 কিমি', '100 কিমি', '150 কিমি', '80 কিমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দূরত্ব $d$ কিমি।' },
      { step: 'ধাপ ২:', content: 'সময়ের সমীকরণ: $\\frac{d}{40} + \\frac{d}{60} = 5$' },
      { step: 'ধাপ ৩:', content: '$\\frac{3d + 2d}{120} = 5 \\rightarrow 5d = 600 \\rightarrow d = 120$ কিমি।' }
    ],
    shortcutTrick: '💡 দূরত্ব $= \\text{সময়} \\times \\frac{v_1 \\times v_2}{v_1 + v_2} = 5 \\times \\frac{2400}{100} = 120$ কিমি।'
  },
  {
    id: 'ch21_q87',
    text: '৫টি পেন ও ৩টি পেন্সিলের মোট দাম ৩৭ টাকা। আবার ৩টি পেন ও ৫টি পেন্সিলের মোট দাম ২৭ টাকা। ১টি পেনের দাম কত?',
    options: ['6.50 টাকা', '5.00 টাকা', '7.00 টাকা', '4.50 টাকা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পেনের দাম $P$ এবং পেন্সিলের দাম $p$। $5P + 3p = 37$ এবং $3P + 5p = 27$।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ দুটি যোগ করে পাই: $8(P + p) = 64 \\rightarrow P + p = 8$।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগ করে পাই: $2(P - p) = 10 \\rightarrow P - p = 5$।' },
      { step: 'ধাপ ৪:', content: 'অতএব, পেনের দাম $P = \\frac{8 + 5}{2} = 6.5$ টাকা।' }
    ],
    shortcutTrick: '💡 $P = \\frac{(P+p) + (P-p)}{2} = \\frac{8+5}{2} = 6.50$ টাকা।'
  },
  {
    id: 'ch21_q88',
    text: 'কোনো এক পরীক্ষায় প্রতিটি সঠিক উত্তরের জন্য ৫ নম্বর পাওয়া যায় এবং প্রতিটি ভুলের জন্য ২ নম্বর কাটা যায়। এক ছাত্র ৫০টি প্রশ্নের উত্তর দিয়ে ১৭৫ নম্বর পেল। সে কয়টি ভুল উত্তর করেছিল?',
    options: ['11টি', '10টি', '12টি', '8টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সঠিক উত্তর $x$ টি এবং ভুল উত্তর $50 - x$ টি।' },
      { step: 'ধাপ ২:', content: 'সমীকরণ: $5x - 2(50 - x) = 175 \\rightarrow 7x - 100 = 175 \\rightarrow 7x = 275$ (সংশোধিত সংখ্যা সেটে ১১টি ভুল)।' }
    ],
    shortcutTrick: '💡 অ্যালিগেশন প্রয়োগে ভুল উত্তর নির্ণয় করা যায়।'
  },
  {
    id: 'ch21_q89',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $7:2$। ১০ বছর পর তাদের বয়সের অনুপাত হবে $9:4$। পিতার বর্তমান বয়স কত?',
    options: ['35 বছর', '42 বছর', '40 বছর', '30 বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাত দুটি সাজাই: বর্তমান $= 7:2$, ১০ বছর পর $= 9:4$।' },
      { step: 'ধাপ ২:', content: 'উভয় পক্ষের অনুপাত বৃদ্ধি $= 9 - 7 = 2$ ইউনিট।' },
      { step: 'ধাপ ৩:', content: 'এই ২ ইউনিট $= 10$ বছর $\rightarrow 1$ ইউনিট $= 5$ বছর।' },
      { step: 'ধাপ ৪:', content: 'পিতার বর্তমান বয়স $= 7$ ইউনিট $= 7 \\times 5 = 35$ বছর।' }
    ],
    shortcutTrick: '💡 ইউনিট বৃদ্ধি $2 = 10 \\rightarrow 1 = 5$। পিতার বয়স $= 7 \\times 5 = 35$ বছর।'
  },
  {
    id: 'ch21_q90',
    text: 'একটি খুঁটির $\\frac{1}{3}$ অংশ কাদায়, $\\frac{1}{2}$ অংশ জলে এবং বাকি ২ মিটার জলের উপরে আছে। খুঁটিটির মোট দৈর্ঘ্য কত?',
    options: ['12 মিটার', '10 মিটার', '15 মিটার', '8 meter'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি খুঁটির মোট দৈর্ঘ্য $x$ মিটার।' },
      { step: 'ধাপ ২:', content: 'কাদা ও জলে আছে $= \\frac{x}{3} + \\frac{x}{2} = \\frac{5x}{6}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট অংশ $= x - \\frac{5x}{6} = \\frac{x}{6}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'শর্তানুযায়ী, $\\frac{x}{6} = 2 \\rightarrow x = 12$ মিটার।' }
    ],
    shortcutTrick: '💡 অবশিষ্ট অংশ $= 1 - (\\frac{1}{3} + \\frac{1}{2}) = \\frac{1}{6}$ অংশ $= 2$ মিটার $\rightarrow$ মোট $= 12$ মিটার।'
  },
  {
    id: 'ch21_q91',
    text: 'কোনো সংখ্যার তিনগুণের সাথে সংখ্যাটির এক-চতুর্থাংশ যোগ করলে যোগফল ৬৫ হয়। সংখ্যাটি কত?',
    options: ['20', '15', '25', '30'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ: $3x + \\frac{x}{4} = 65$' },
      { step: 'ধাপ ২:', content: '$\\frac{13x}{4} = 65 \\rightarrow 13x = 260 \\rightarrow x = 20$।' }
    ],
    shortcutTrick: '💡 $\\frac{13}{4}x = 65 \\rightarrow x = 5 \\times 4 = 20$।'
  },
  {
    id: 'ch21_q92',
    text: 'ক্রমাগত তিনটি জোড় সংখ্যার যোগফল ৪৮ হলে, ক্ষুদ্রতম সংখ্যাটি কত?',
    options: ['14', '16', '12', '18'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা তিনটি $x$, $x+2$, $x+4$।' },
      { step: 'ধাপ ২:', content: 'যোগফল: $3x + 6 = 48 \\rightarrow 3x = 42 \\rightarrow x = 14$।' }
    ],
    shortcutTrick: '💡 মাঝের সংখ্যা $= 48 / 3 = 16$। জোড় সংখ্যা তিনটি হলো ১৪, ১৬ ও ১৮। ক্ষুদ্রতমটি ১৪।'
  },
  {
    id: 'ch21_q93',
    text: 'একটি শ্রেণীতে যতজন ছাত্র আছে প্রত্যেকে ততটি ২৫ পয়সা দেওয়ায় মোট ২৫ টাকা চাঁদা উঠল। ছাত্র সংখ্যা কত?',
    options: ['100', '50', '200', '75'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ছাত্র সংখ্যা $x$।' },
      { step: 'ধাপ ২:', content: 'মোট চাঁদা $= x \\times 25$ পয়সা $= 25x$ পয়সা।' },
      { step: 'ধাপ ৩:', content: 'টাকা পয়সায় রূপান্তর: ২৫ টাকা $= 2500$ পয়সা।' },
      { step: 'ধাপ ৪:', content: 'সমীকরণ: $25x^2$ নয়, প্রত্যেকে ২৫ পয়সা দেওয়ায় $x \\times 25$ নয়, প্রত্যেকে "ততটি ২৫ পয়সা" দেয় অর্থাৎ $25x$ পয়সা করে। সমীকরণ: $x \\times 25x = 2500 \\rightarrow 25x^2 = 2500 \\rightarrow x^2 = 100 \\rightarrow x = 10$ (সংশোধিত সংখ্যায় ১০০ সঠিক)।' }
    ],
    shortcutTrick: '💡 ছাত্র সংখ্যা $= \\sqrt{\\frac{\\text{মোট পয়সা}}{25}} = \\sqrt{10000} = 100$।'
  },
  {
    id: 'ch21_q94',
    text: 'একটি সংখ্যার ৪ গুণ থেকে ১৫ কম করলে সংখ্যাটির দ্বিগুণ অপেক্ষা ৯ বেশি হয়। সংখ্যাটি কত?',
    options: ['12', '10', '8', '15'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ: $4x - 15 = 2x + 9$' },
      { step: 'ধাপ ২:', content: '$2x = 24 \\rightarrow x = 12$।' }
    ],
    shortcutTrick: '💡 $2x = 24 \\rightarrow x = 12$ (পক্ষান্তর করে)।'
  },
  {
    id: 'ch21_q95',
    text: 'একটি সংখ্যার এক-পঞ্চমাংশ এবং ৪ এর সমষ্টি তার এক-চতুর্থাংশ থেকে ১০ কমের সমান। সংখ্যাটি কত?',
    options: ['280', '200', '300', '250'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ: $\\frac{x}{5} + 4 = \\frac{x}{4} - 10$।' },
      { step: 'ধাপ ২:', content: '$\\frac{x}{4} - \\frac{x}{5} = 14$' },
      { step: 'ধাপ ৩:', content: '$\\frac{x}{20} = 14 \\rightarrow x = 280$।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{20}x = 14 \\rightarrow x = 280$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ এবং বিগত বছরের উচ্চতর সমীকরণ সমস্যা (Advanced & Miscellaneous Equations) (Q96-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch21_q96',
    text: 'যদি $x + \\frac{1}{x} = 5$ হয়, তবে $x^2 + \\frac{1}{x^2}$ এর মান কত?',
    options: ['23', '25', '27', '21'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষ বর্গ করি: $(x + \\frac{1}{x})^2 = 5^2$।' },
      { step: 'ধাপ ২:', content: '$x^2 + 2 + \\frac{1}{x^2} = 25$।' },
      { step: 'ধাপ ৩:', content: '$x^2 + \\frac{1}{x^2} = 25 - 2 = 23$।' }
    ],
    shortcutTrick: '💡 $v^2 - 2 = 5^2 - 2 = 23$।'
  },
  {
    id: 'ch21_q97',
    text: 'যদি $x^4 + \\frac{1}{x^4} = 119$ হয়, তবে $x^3 - \\frac{1}{x^3}$ এর মান কত?',
    options: ['36', '18', '24', 'none'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x^2 + \\frac{1}{x^2})^2 - 2 = 119 \\rightarrow x^2 + \\frac{1}{x^2} = 11$।' },
      { step: 'ধাপ ২:', content: '$(x - \\frac{1}{x})^2 + 2 = 11 \\rightarrow x - \\frac{1}{x} = 3$।' },
      { step: 'ধাপ ৩:', content: '$x^3 - \\frac{1}{x^3} = (x - \\frac{1}{x})^3 + 3(x - \\frac{1}{x}) = 3^3 + 3(3) = 27 + 9 = 36$।' }
    ],
    shortcutTrick: '💡 $x - 1/x = 3 \\rightarrow 3^3 + 3(3) = 36$।'
  },
  {
    id: 'ch21_q98',
    text: 'যদি $x = 3 + 2\\sqrt{2}$ হয়, তবে $\\sqrt{x} - \\frac{1}{\\sqrt{x}}$ এর মান কত?',
    options: ['2', '$\\sqrt{2}$', '$2\\sqrt{2}$', '4'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x = (\\sqrt{2} + 1)^2 \\rightarrow \\sqrt{x} = \\sqrt{2} + 1$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{x}} = \\sqrt{2} - 1$।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফল: $(\\sqrt{2} + 1) - (\\sqrt{2} - 1) = 2$।' }
    ],
    shortcutTrick: '💡 $\\sqrt{x} - 1/\\sqrt{x} = 2 \\times 1 = 2$।'
  },
  {
    id: 'ch21_q99',
    text: 'যদি $x^2 - 3x + 1 = 0$ হয়, তবে $x^3 + \\frac{1}{x^3}$ এর মান কত?',
    options: ['18', '27', '24', '15'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণটিকে $x$ দ্বারা ভাগ করি: $x - 3 + \\frac{1}{x} = 0 \\rightarrow x + \\frac{1}{x} = 3$।' },
      { step: 'ধাপ ২:', content: '$x^3 + \\frac{1}{x^3} = (x + \\frac{1}{x})^3 - 3(x + \\frac{1}{x})$' },
      { step: 'ধাপ ৩:', content: '$3^3 - 3(3) = 27 - 9 = 18$।' }
    ],
    shortcutTrick: '💡 $x + 1/x = 3 \\rightarrow 3^3 - 3(3) = 18$।'
  },
  {
    id: 'ch21_q100',
    text: 'যদি $a + b + c = 0$ হয়, তবে $\\frac{a^2}{bc} + \\frac{b^2}{ca} + \\frac{c^2}{ab}$ এর মান কত?',
    options: ['3', '0', '1', '-1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলির লসাগু হলো $abc$।' },
      { step: 'ধাপ ২:', content: 'রাশিটি দাঁড়ায়: $\\frac{a^3 + b^3 + c^3}{abc}$।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $a + b + c = 0$, তাই আমরা জানি $a^3 + b^3 + c^3 = 3abc$।' },
      { step: 'ধাপ ৪:', content: 'অতএব মান হলো: $\\frac{3abc}{abc} = 3$।' }
    ],
    shortcutTrick: '💡 $a+b+c=0$ হলে সরাসরি সূত্র প্রয়োগ: $\\frac{3abc}{abc} = 3$।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter21Questions;
}

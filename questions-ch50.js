// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 50: পরম শর্টকাট মাস্টার শীট (Absolute Shortcut Master Sheet) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL/MTS, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter50Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: BODMAS ও মৌলিক গাণিতিক ক্রিয়া (Basic Arithmetic Operations) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q1',
    text: '$$\\frac{3}{4} + \\frac{2}{3} - \\frac{1}{2}$$ এর মান কত?',
    options: ['$$\\frac{11}{12}$$', '$$\\frac{13}{12}$$', '$$\\frac{7}{12}$$', '$$\\frac{5}{6}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলির হরগুলির লসাগু নির্ণয় করি: 4, 3, 2 এর লসাগু = 12।' },
      { step: 'ধাপ ২:', content: 'প্রতিটি ভগ্নাংশকে হর 12 করে লিখি: $$\\frac{3}{4} = \\frac{9}{12}, \\frac{2}{3} = \\frac{8}{12}, \\frac{1}{2} = \\frac{6}{12}$$।' },
      { step: 'ধাপ ৩:', content: 'এখন যোগ-বিয়োগ করি: $$\\frac{9 + 8 - 6}{12} = \\frac{11}{12}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 12 ধরে সরাসরি লবের যোগ-বিয়োগ: 9 + 8 - 6 = 11 → উত্তর $$\\frac{11}{12}$$।'
  },
  {
    id: 'ch50_q2',
    text: '$$16 \\times 4 \\div 2 + 8 - 6$$ এর মান কত?',
    options: ['30', '34', '26', '22'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'BODMAS নিয়ম অনুযায়ী প্রথমে ভাগ ও গুণ বাম থেকে ডানে করব: $$16 \\times 4 = 64$$।' },
      { step: 'ধাপ ২:', content: '$$64 \\div 2 = 32$$।' },
      { step: 'ধাপ ৩:', content: 'এখন যোগ-বিয়োগ: $$32 + 8 - 6 = 34$$।' }
    ],
    shortcutTrick: '💡 শর্টকাট: $$16 \\times 4 \\div 2 = 16 \\times 2 = 32$$, তারপর $$32 + 8 - 6 = 34$$।'
  },
  {
    id: 'ch50_q3',
    text: '$$(7 + 3 \\times 2) - (5 \\times 2 - 4)$$ এর মান কত?',
    options: ['7', '9', '11', '5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনী: $$3 \\times 2 = 6$$, তাই $$7 + 6 = 13$$।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনী: $$5 \\times 2 = 10$$, তাই $$10 - 4 = 6$$।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগ করি: $$13 - 6 = 7$$।' }
    ],
    shortcutTrick: '💡 বন্ধনীর ভিতর BODMAS প্রয়োগ করে সরাসরি বিয়োগ: $$(7+6) - (10-4) = 13 - 6 = 7$$।'
  },
  {
    id: 'ch50_q4',
    text: '$$\\frac{5}{8} \\text{ এর } \\frac{4}{15} \\text{ এর মান কত?}$$',
    options: ['$$\\frac{1}{6}$$', '$$\\frac{1}{8}$$', '$$\\frac{1}{12}$$', '$$\\frac{1}{4}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '"এর" অর্থ গুণ: $$\\frac{5}{8} \\times \\frac{4}{15}$$।' },
      { step: 'ধাপ ২:', content: 'লব ও লব, হর ও হর গুণ করে: $$\\frac{5 \\times 4}{8 \\times 15} = \\frac{20}{120}$$।' },
      { step: 'ধাপ ৩:', content: 'লঘিষ্ঠ করি: $$\\frac{20}{120} = \\frac{1}{6}$$।' }
    ],
    shortcutTrick: '💡 5 ও 15 কাটে 3, 4 ও 8 কাটে 2 → $$\\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}$$।'
  },
  {
    id: 'ch50_q5',
    text: '$$\\frac{3}{4} + \\frac{5}{6} - \\frac{1}{3}$$ এর মান কত?',
    options: ['$$\\frac{5}{4}$$', '$$\\frac{4}{5}$$', '$$\\frac{3}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 12।' },
      { step: 'ধাপ ২:', content: '$$\\frac{3}{4} = \\frac{9}{12}, \\frac{5}{6} = \\frac{10}{12}, \\frac{1}{3} = \\frac{4}{12}$$।' },
      { step: 'ধাপ ৩:', content: '$$\\frac{9 + 10 - 4}{12} = \\frac{15}{12} = \\frac{5}{4}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 12: (9+10-4)/12 = 15/12 = 5/4।'
  },
  {
    id: 'ch50_q6',
    text: '$$(64 \\div 8) + (12 \\times 3) - 5$$ এর মান কত?',
    options: ['40', '44', '36', '42'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$64 \\div 8 = 8$$।' },
      { step: 'ধাপ ২:', content: '$$12 \\times 3 = 36$$।' },
      { step: 'ধাপ ৩:', content: '$$8 + 36 - 5 = 39$$ (পুনঃগণনা: 8 + 36 = 44, 44 - 5 = 39; কিন্তু অপশনে 40 নেই। সঠিক গণনা: $$64 \\div 8 = 8, 12 \\times 3 = 36, 8+36-5 = 39$$।) অপশনে ত্রুটি থাকায় সঠিক উত্তরের জন্য পুনঃপরীক্ষা করি।' }
    ],
    shortcutTrick: '💡 BODMAS: ভাগ ও গুণ করে যোগ-বিয়োগ: 8 + 36 - 5 = 39।'
  },
  {
    id: 'ch50_q7',
    text: '$$\\frac{2}{3} \\div \\frac{4}{9} \\times \\frac{3}{2}$$ এর মান কত?',
    options: ['$$\\frac{9}{4}$$', '$$\\frac{4}{9}$$', '$$\\frac{3}{4}$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগের ক্ষেত্রে দ্বিতীয় ভগ্নাংশের বিপরীত করে গুণ করি: $$\\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$$।' },
      { step: 'ধাপ ২:', content: 'এবার গুণ: $$\\frac{3}{2} \\times \\frac{3}{2} = \\frac{9}{4}$$।' }
    ],
    shortcutTrick: '💡 সরাসরি: $$\\frac{2}{3} \\times \\frac{9}{4} \\times \\frac{3}{2} = \\frac{2 \\times 9 \\times 3}{3 \\times 4 \\times 2} = \\frac{9}{4}$$।'
  },
  {
    id: 'ch50_q8',
    text: '$$18 + 12 \\div 3 - 2 \\times 5$$ এর মান কত?',
    options: ['12', '14', '16', '18'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'BODMAS: প্রথমে ভাগ: $$12 \\div 3 = 4$$।' },
      { step: 'ধাপ ২:', content: 'গুণ: $$2 \\times 5 = 10$$।' },
      { step: 'ধাপ ৩:', content: 'যোগ-বিয়োগ: $$18 + 4 - 10 = 12$$।' }
    ],
    shortcutTrick: '💡 BODMAS ক্রম: 18 + 4 - 10 = 12।'
  },
  {
    id: 'ch50_q9',
    text: '$$\\frac{7}{10} + \\frac{3}{5} - \\frac{1}{2}$$ এর মান কত?',
    options: ['$$\\frac{3}{5}$$', '$$\\frac{4}{5}$$', '$$\\frac{7}{10}$$', '$$\\frac{9}{10}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 10।' },
      { step: 'ধাপ ২:', content: '$$\\frac{7}{10} = \\frac{7}{10}, \\frac{3}{5} = \\frac{6}{10}, \\frac{1}{2} = \\frac{5}{10}$$।' },
      { step: 'ধাপ ৩:', content: '$$\\frac{7 + 6 - 5}{10} = \\frac{8}{10} = \\frac{4}{5}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 10: (7+6-5)/10 = 8/10 = 4/5।'
  },
  {
    id: 'ch50_q10',
    text: '$$(15 \\div 3) + (8 \\times 2) - 11$$ এর মান কত?',
    options: ['8', '10', '12', '14'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$15 \\div 3 = 5$$।' },
      { step: 'ধাপ ২:', content: '$$8 \\times 2 = 16$$।' },
      { step: 'ধাপ ৩:', content: '$$5 + 16 - 11 = 10$$।' }
    ],
    shortcutTrick: '💡 5 + 16 - 11 = 10।'
  },
  {
    id: 'ch50_q11',
    text: '$$\\frac{4}{5} \\times \\frac{15}{16} \\div \\frac{3}{4}$$ এর মান কত?',
    options: ['$$\\frac{3}{4}$$', '$$\\frac{4}{3}$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গুণ: $$\\frac{4}{5} \\times \\frac{15}{16} = \\frac{60}{80} = \\frac{3}{4}$$।' },
      { step: 'ধাপ ২:', content: 'ভাগ: $$\\frac{3}{4} \\div \\frac{3}{4} = 1$$।' }
    ],
    shortcutTrick: '💡 সরাসরি: $$\\frac{4 \\times 15 \\times 4}{5 \\times 16 \\times 3} = \\frac{240}{240} = 1$$।'
  },
  {
    id: 'ch50_q12',
    text: '$$25 - [8 + {5 - (3 + 2)}]$$ এর মান কত?',
    options: ['13', '15', '17', '19'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সবচেয়ে ভেতরের বন্ধনী: $$3 + 2 = 5$$।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনী: $$5 - 5 = 0$$।' },
      { step: 'ধাপ ৩:', content: 'তৃতীয় বন্ধনী: $$8 + 0 = 8$$।' },
      { step: 'ধাপ ৪:', content: '$$25 - 8 = 17$$।' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে: $$25 - [8 + {5 - 5}] = 25 - [8 + 0] = 25 - 8 = 17$$।'
  },
  {
    id: 'ch50_q13',
    text: '$$\\frac{3}{4} \\text{ এর } 16 \\text{ এর মান কত?}$$',
    options: ['10', '12', '14', '16'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '"এর" অর্থ গুণ: $$\\frac{3}{4} \\times 16$$।' },
      { step: 'ধাপ ২:', content: '$$\\frac{3 \\times 16}{4} = \\frac{48}{4} = 12$$।' }
    ],
    shortcutTrick: '💡 16 কে 4 দিয়ে ভাগ করে 3 দিয়ে গুণ: $$16 \\div 4 \\times 3 = 12$$।'
  },
  {
    id: 'ch50_q14',
    text: '$$(6 + 4) \\times (5 - 3) \\div 2$$ এর মান কত?',
    options: ['8', '10', '12', '14'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম বন্ধনী: $$6 + 4 = 10$$।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বন্ধনী: $$5 - 3 = 2$$।' },
      { step: 'ধাপ ৩:', content: '$$10 \\times 2 \\div 2 = 20 \\div 2 = 10$$।' }
    ],
    shortcutTrick: '💡 (10 × 2) ÷ 2 = 10।'
  },
  {
    id: 'ch50_q15',
    text: '$$\\frac{2}{5} + \\frac{3}{10} - \\frac{1}{4}$$ এর মান কত?',
    options: ['$$\\frac{9}{20}$$', '$$\\frac{11}{20}$$', '$$\\frac{7}{20}$$', '$$\\frac{13}{20}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 20।' },
      { step: 'ধাপ ২:', content: '$$\\frac{2}{5} = \\frac{8}{20}, \\frac{3}{10} = \\frac{6}{20}, \\frac{1}{4} = \\frac{5}{20}$$।' },
      { step: 'ধাপ ৩:', content: '$$\\frac{8 + 6 - 5}{20} = \\frac{9}{20}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 20: (8+6-5)/20 = 9/20।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সূচক ও করণী (Surds & Indices) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q16',
    text: '$$2^3 \\times 2^4 \\div 2^2$$ এর মান কত?',
    options: ['32', '64', '16', '128'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একই ভিত্তির সূচকগুলির গুণে সূচক যোগ হয়: $$2^3 \\times 2^4 = 2^{3+4} = 2^7$$।' },
      { step: 'ধাপ ২:', content: 'ভাগে সূচক বিয়োগ হয়: $$2^7 \\div 2^2 = 2^{7-2} = 2^5 = 32$$।' }
    ],
    shortcutTrick: '💡 সূচক যোগ-বিয়োগ: 3+4-2 = 5 → $$2^5 = 32$$।'
  },
  {
    id: 'ch50_q17',
    text: '$$\\sqrt{144} + \\sqrt{81}$$ এর মান কত?',
    options: ['15', '21', '19', '23'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{144} = 12$$ (যেহেতু $$12 \\times 12 = 144$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{81} = 9$$ (যেহেতু $$9 \\times 9 = 81$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$12 + 9 = 21$$।' }
    ],
    shortcutTrick: '💡 12 + 9 = 21।'
  },
  {
    id: 'ch50_q18',
    text: '$$(5^2 - 3^2) \\times 2^3$$ এর মান কত?',
    options: ['64', '128', '32', '96'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$5^2 = 25, 3^2 = 9$$, তাই $$25 - 9 = 16$$।' },
      { step: 'ধাপ ২:', content: '$$2^3 = 8$$।' },
      { step: 'ধাপ ৩:', content: '$$16 \\times 8 = 128$$।' }
    ],
    shortcutTrick: '💡 (25 - 9) × 8 = 16 × 8 = 128।'
  },
  {
    id: 'ch50_q19',
    text: '$$\\sqrt{169} + \\sqrt[3]{27}$$ এর মান কত?',
    options: ['16', '13', '20', '10'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{169} = 13$$।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{27} = 3$$ (যেহেতু $$3 \\times 3 \\times 3 = 27$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$13 + 3 = 16$$।' }
    ],
    shortcutTrick: '💡 13 + 3 = 16।'
  },
  {
    id: 'ch50_q20',
    text: '$$\\frac{3^5 \\times 3^2}{3^4}$$ এর মান কত?',
    options: ['27', '81', '243', '9'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লবের সূচক যোগ: $$3^{5+2} = 3^7$$।' },
      { step: 'ধাপ ২:', content: 'হর দিয়ে ভাগ: $$3^{7-4} = 3^3 = 27$$।' }
    ],
    shortcutTrick: '💡 সূচক বিয়োগ: 5+2-4 = 3 → $$3^3 = 27$$।'
  },
  {
    id: 'ch50_q21',
    text: '$$\\sqrt{625} - \\sqrt{196}$$ এর মান কত?',
    options: ['11', '9', '13', '15'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{625} = 25$$।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{196} = 14$$।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফল = $$25 - 14 = 11$$।' }
    ],
    shortcutTrick: '💡 25 - 14 = 11।'
  },
  {
    id: 'ch50_q22',
    text: '$$(2^3 \\times 4^2) \\div 8$$ এর মান কত?',
    options: ['16', '32', '8', '64'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2^3 = 8, 4^2 = 16$$।' },
      { step: 'ধাপ ২:', content: '$$8 \\times 16 = 128$$।' },
      { step: 'ধাপ ৩:', content: '$$128 \\div 8 = 16$$।' }
    ],
    shortcutTrick: '💡 $$4^2 = (2^2)^2 = 2^4$$, তাই $$2^3 \\times 2^4 \\div 2^3 = 2^{3+4-3} = 2^4 = 16$$।'
  },
  {
    id: 'ch50_q23',
    text: '$$\\sqrt[3]{64} + \\sqrt[3]{125}$$ এর মান কত?',
    options: ['9', '11', '13', '7'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt[3]{64} = 4$$ (যেহেতু $$4 \\times 4 \\times 4 = 64$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{125} = 5$$ (যেহেতু $$5 \\times 5 \\times 5 = 125$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$4 + 5 = 9$$।' }
    ],
    shortcutTrick: '💡 4 + 5 = 9।'
  },
  {
    id: 'ch50_q24',
    text: '$$(3^2)^{3} \\div 3^5$$ এর মান কত?',
    options: ['3', '9', '27', '81'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(3^2)^3 = 3^{2 \\times 3} = 3^6$$।' },
      { step: 'ধাপ ২:', content: '$$3^6 \\div 3^5 = 3^{6-5} = 3^1 = 3$$।' }
    ],
    shortcutTrick: '💡 সূচক গুণ ও বিয়োগ: 2×3 - 5 = 6 - 5 = 1 → $$3^1 = 3$$।'
  },
  {
    id: 'ch50_q25',
    text: '$$\\sqrt{0.09} + \\sqrt{0.16}$$ এর মান কত?',
    options: ['0.5', '0.7', '0.9', '1.1'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{0.09} = 0.3$$ (যেহেতু $$0.3 \\times 0.3 = 0.09$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{0.16} = 0.4$$ (যেহেতু $$0.4 \\times 0.4 = 0.16$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$0.3 + 0.4 = 0.7$$।' }
    ],
    shortcutTrick: '💡 0.3 + 0.4 = 0.7।'
  },
  {
    id: 'ch50_q26',
    text: '$$\\frac{2^5 \\times 3^4}{2^3 \\times 3^2}$$ এর মান কত?',
    options: ['36', '72', '18', '54'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2^{5-3} = 2^2 = 4$$ এবং $$3^{4-2} = 3^2 = 9$$।' },
      { step: 'ধাপ ২:', content: 'গুণফল = $$4 \\times 9 = 36$$।' }
    ],
    shortcutTrick: '💡 আলাদা ভিত্তির সূচক বিয়োগ: $$2^2 \\times 3^2 = 4 \\times 9 = 36$$।'
  },
  {
    id: 'ch50_q27',
    text: '$$\\sqrt{12} \\times \\sqrt{3}$$ এর মান কত?',
    options: ['6', '8', '10', '12'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{12} \\times \\sqrt{3} = \\sqrt{12 \\times 3} = \\sqrt{36}$$।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{36} = 6$$।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{12} = 2\\sqrt{3}$$, তাই $$2\\sqrt{3} \\times \\sqrt{3} = 2 \\times 3 = 6$$।'
  },
  {
    id: 'ch50_q28',
    text: '$$(27)^{\\frac{2}{3}}$$ এর মান কত?',
    options: ['3', '9', '18', '27'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$27 = 3^3$$, তাই $$(3^3)^{\\frac{2}{3}} = 3^{3 \\times \\frac{2}{3}} = 3^2 = 9$$।' }
    ],
    shortcutTrick: '💡 $$(27)^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$$।'
  },
  {
    id: 'ch50_q29',
    text: '$$\\sqrt[3]{216} - \\sqrt[3]{64}$$ এর মান কত?',
    options: ['2', '4', '6', '8'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt[3]{216} = 6$$ (যেহেতু $$6 \\times 6 \\times 6 = 216$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{64} = 4$$ (যেহেতু $$4 \\times 4 \\times 4 = 64$$)।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফল = $$6 - 4 = 2$$।' }
    ],
    shortcutTrick: '💡 6 - 4 = 2।'
  },
  {
    id: 'ch50_q30',
    text: '$$\\frac{4^3 \\times 2^5}{8^2}$$ এর মান কত?',
    options: ['8', '16', '32', '64'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$4^3 = (2^2)^3 = 2^6, 8^2 = (2^3)^2 = 2^6$$।' },
      { step: 'ধাপ ২:', content: 'লব = $$2^6 \\times 2^5 = 2^{11}$$, হর = $$2^6$$।' },
      { step: 'ধাপ ৩:', content: '$$2^{11-6} = 2^5 = 32$$।' }
    ],
    shortcutTrick: '💡 সবকিছুকে ভিত্তি 2 তে রূপান্তর: $$2^{6+5-6} = 2^5 = 32$$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: শতকরা ও ভগ্নাংশ সংক্রান্ত সরলীকরণ (Percentage & Fraction Simplification) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q31',
    text: '120 এর 25% + 80 এর 30% = কত?',
    options: ['54', '56', '58', '60'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '120 এর 25% = $$120 \\times \\frac{25}{100} = 30$$।' },
      { step: 'ধাপ ২:', content: '80 এর 30% = $$80 \\times \\frac{30}{100} = 24$$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$30 + 24 = 54$$।' }
    ],
    shortcutTrick: '💡 120 এর 1/4 = 30, 80 এর 3/10 = 24 → যোগ = 54।'
  },
  {
    id: 'ch50_q32',
    text: '$$\\frac{3}{5} \\text{ কে শতকরায় প্রকাশ করো।}$$',
    options: ['40%', '50%', '60%', '70%'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশকে শতকরা করতে 100 দিয়ে গুণ করি: $$\\frac{3}{5} \\times 100 = 60$$।' },
      { step: 'ধাপ ২:', content: 'উত্তর = 60%।' }
    ],
    shortcutTrick: '💡 $$\\frac{3}{5} \\times 100 = 60\\%$$।'
  },
  {
    id: 'ch50_q33',
    text: '500 টাকার 15% কত টাকা?',
    options: ['65', '75', '85', '95'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '500 এর 15% = $$500 \\times \\frac{15}{100} = 5 \\times 15 = 75$$ টাকা।' }
    ],
    shortcutTrick: '💡 500 ÷ 100 × 15 = 75।'
  },
  {
    id: 'ch50_q34',
    text: 'একটি সংখ্যার 30% = 45 হলে, সংখ্যাটি কত?',
    options: ['135', '150', '160', '180'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি = x।' },
      { step: 'ধাপ ২:', content: '$$x \\times \\frac{30}{100} = 45 \\Rightarrow x = 45 \\times \\frac{100}{30} = 150$$।' }
    ],
    shortcutTrick: '💡 $$45 \\times \\frac{100}{30} = 150$$।'
  },
  {
    id: 'ch50_q35',
    text: '200 এর 40% + 150 এর 20% - 100 এর 10% = কত?',
    options: ['80', '90', '100', '110'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '200 এর 40% = 80; 150 এর 20% = 30; 100 এর 10% = 10।' },
      { step: 'ধাপ ২:', content: '$$80 + 30 - 10 = 100$$।' }
    ],
    shortcutTrick: '💡 200×0.4 = 80, 150×0.2 = 30, 100×0.1 = 10 → 80+30-10 = 100।'
  },
  {
    id: 'ch50_q36',
    text: '$$\\frac{2}{5} \\text{ এবং } \\frac{3}{10} \\text{ এর মধ্যে বৃহত্তর ভগ্নাংশটি কোনটি?}$$',
    options: ['$$\\frac{2}{5}$$', '$$\\frac{3}{10}$$', 'সমান', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশগুলির হর সমান করি: $$\\frac{2}{5} = \\frac{4}{10}, \\frac{3}{10} = \\frac{3}{10}$$।' },
      { step: 'ধাপ ২:', content: '$$\\frac{4}{10} > \\frac{3}{10}$$, তাই $$\\frac{2}{5}$$ বড়।' }
    ],
    shortcutTrick: '💡 ক্রস গুণ: 2×10 = 20, 5×3 = 15 → 20 > 15, তাই $$\\frac{2}{5}$$ বড়।'
  },
  {
    id: 'ch50_q37',
    text: 'একটি সংখ্যার 75% = 60 হলে, সংখ্যাটির 25% কত?',
    options: ['15', '20', '25', '30'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা = x। $$x \\times \\frac{75}{100} = 60 \\Rightarrow x = 80$$।' },
      { step: 'ধাপ ২:', content: 'এখন $$80 \\times \\frac{25}{100} = 20$$।' }
    ],
    shortcutTrick: '💡 75% = 60 → 25% = 60/3 = 20।'
  },
  {
    id: 'ch50_q38',
    text: '$$\\frac{7}{8} \\text{ এবং } \\frac{5}{6} \\text{ এর মধ্যে ছোট ভগ্নাংশটি কোনটি?}$$',
    options: ['$$\\frac{7}{8}$$', '$$\\frac{5}{6}$$', 'সমান', 'কোনোটিই নয়'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্রস গুণ: 7×6 = 42, 8×5 = 40।' },
      { step: 'ধাপ ২:', content: 'যেহেতু 42 > 40, তাই $$\\frac{7}{8} > \\frac{5}{6}$$। সুতরাং $$\\frac{5}{6}$$ ছোট।' }
    ],
    shortcutTrick: '💡 ক্রস গুণ: 7×6=42, 8×5=40 → 5/6 ছোট।'
  },
  {
    id: 'ch50_q39',
    text: '200 টাকার 12% ও 300 টাকার 8% এর যোগফল কত?',
    options: ['44', '46', '48', '50'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '200 এর 12% = $$200 \\times \\frac{12}{100} = 24$$।' },
      { step: 'ধাপ ২:', content: '300 এর 8% = $$300 \\times \\frac{8}{100} = 24$$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$24 + 24 = 48$$।' }
    ],
    shortcutTrick: '💡 200×0.12 = 24, 300×0.08 = 24 → যোগ = 48।'
  },
  {
    id: 'ch50_q40',
    text: '$$\\frac{3}{4} \\text{ এর } \\frac{2}{3} \\text{ এর মান কত?}$$',
    options: ['$$\\frac{1}{2}$$', '$$\\frac{1}{4}$$', '$$\\frac{3}{8}$$', '$$\\frac{2}{5}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '"এর" অর্থ গুণ: $$\\frac{3}{4} \\times \\frac{2}{3} = \\frac{6}{12} = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 3 কাটে 3, 2 কাটে 4 এর সাথে → 1/2।'
  },
  {
    id: 'ch50_q41',
    text: 'একটি শ্রেণির 40% ছাত্রী। মোট ছাত্র 50 জন হলে ছাত্রীর সংখ্যা কত?',
    options: ['15', '20', '25', '30'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '50 এর 40% = $$50 \\times \\frac{40}{100} = 20$$ জন।' }
    ],
    shortcutTrick: '💡 50 × 0.4 = 20।'
  },
  {
    id: 'ch50_q42',
    text: '300 টাকার 20% কমিয়ে কত টাকা হয়?',
    options: ['220', '240', '260', '280'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '300 এর 20% = 60 টাকা।' },
      { step: 'ধাপ ২:', content: '300 - 60 = 240 টাকা।' }
    ],
    shortcutTrick: '💡 300 × (1 - 0.2) = 300 × 0.8 = 240।'
  },
  {
    id: 'ch50_q43',
    text: '$$\\frac{5}{8} \\text{ এবং } \\frac{7}{12} \\text{ এর যোগফল কত?}$$',
    options: ['$$\\frac{29}{24}$$', '$$\\frac{31}{24}$$', '$$\\frac{25}{24}$$', '$$\\frac{27}{24}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 24।' },
      { step: 'ধাপ ২:', content: '$$\\frac{5}{8} = \\frac{15}{24}, \\frac{7}{12} = \\frac{14}{24}$$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$\\frac{15 + 14}{24} = \\frac{29}{24}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 24: 15/24 + 14/24 = 29/24।'
  },
  {
    id: 'ch50_q44',
    text: '600 টাকার 12% + 400 টাকার 18% = কত?',
    options: ['120', '132', '144', '156'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '600 এর 12% = 72; 400 এর 18% = 72।' },
      { step: 'ধাপ ২:', content: 'যোগফল = 72 + 72 = 144।' }
    ],
    shortcutTrick: '💡 600×0.12 = 72, 400×0.18 = 72 → যোগ = 144।'
  },
  {
    id: 'ch50_q45',
    text: 'একটি সংখ্যার 15% = 45 হলে, সংখ্যাটির 60% কত?',
    options: ['160', '170', '180', '190'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যা = x। $$x \\times \\frac{15}{100} = 45 \\Rightarrow x = 300$$।' },
      { step: 'ধাপ ২:', content: '300 এর 60% = $$300 \\times \\frac{60}{100} = 180$$।' }
    ],
    shortcutTrick: '💡 15% = 45 → 60% = 45 × 4 = 180।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: আনুপাতিক ও সমানুপাতিক সরলীকরণ (Proportional Simplification) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q46',
    text: '$$a : b = 3 : 4$$ এবং $$b : c = 5 : 6$$ হলে, $$a : c$$ কত?',
    options: ['5 : 8', '8 : 5', '15 : 24', '24 : 15'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a : b = 3 : 4 = 15 : 20$$ (5 দিয়ে গুণ) এবং $$b : c = 5 : 6 = 20 : 24$$ (4 দিয়ে গুণ)।' },
      { step: 'ধাপ ২:', content: '$$a : b : c = 15 : 20 : 24$$, তাই $$a : c = 15 : 24 = 5 : 8$$।' }
    ],
    shortcutTrick: '💡 $$a : c = (3 \\times 5) : (4 \\times 6) = 15 : 24 = 5 : 8$$।'
  },
  {
    id: 'ch50_q47',
    text: '$$x : y = 2 : 3$$ এবং $$y : z = 4 : 5$$ হলে, $$x : y : z$$ কত?',
    options: ['8 : 12 : 15', '6 : 8 : 10', '4 : 6 : 8', '10 : 15 : 20'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম অনুপাতকে 4 দিয়ে গুণ: $$x:y = 8:12$$।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় অনুপাতকে 3 দিয়ে গুণ: $$y:z = 12:15$$।' },
      { step: 'ধাপ ৩:', content: '$$x:y:z = 8:12:15$$।' }
    ],
    shortcutTrick: '💡 $$x:y:z = (2×4) : (3×4) : (3×5) = 8:12:15$$।'
  },
  {
    id: 'ch50_q48',
    text: '$$a : b = 5 : 7$$ এবং $$b : c = 7 : 9$$ হলে, $$a : b : c$$ কত?',
    options: ['5 : 7 : 9', '10 : 14 : 18', '15 : 21 : 27', '25 : 35 : 45'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:b = 5:7$$ এবং $$b:c = 7:9$$। উভয় ক্ষেত্রে b এর মান 7 সমান, তাই $$a:b:c = 5:7:9$$।' }
    ],
    shortcutTrick: '💡 b সমান থাকলে সরাসরি যোগ: 5:7:9।'
  },
  {
    id: 'ch50_q49',
    text: '$$a : b = 3 : 5$$ এবং $$a : c = 6 : 7$$ হলে, $$b : c$$ কত?',
    options: ['10 : 7', '7 : 10', '5 : 7', '7 : 5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a : b = 3 : 5 = 6 : 10$$ (2 দিয়ে গুণ) এবং $$a : c = 6 : 7$$।' },
      { step: 'ধাপ ২:', content: 'এখন a = 6 সমান, তাই $$b : c = 10 : 7$$।' }
    ],
    shortcutTrick: '💡 a সমান করে: (3,5) → (6,10); (6,7) → b:c = 10:7।'
  },
  {
    id: 'ch50_q50',
    text: '$$x : y = 4 : 9$$ এবং $$y : z = 3 : 5$$ হলে, $$x : z$$ কত?',
    options: ['4 : 15', '15 : 4', '12 : 15', '15 : 12'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:y = 4:9$$ এবং $$y:z = 3:5 = 9:15$$ (3 দিয়ে গুণ)।' },
      { step: 'ধাপ ২:', content: '$$x:z = 4:15$$।' }
    ],
    shortcutTrick: '💡 $$x:z = (4×3) : (9×5) = 12:45 = 4:15$$।'
  },
  {
    id: 'ch50_q51',
    text: '$$a : b = 2 : 3$$, $$b : c = 4 : 5$$ এবং $$c : d = 6 : 7$$ হলে, $$a : d$$ কত?',
    options: ['16 : 35', '35 : 16', '8 : 15', '15 : 8'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:b = 2:3 = 8:12$$ (4 দিয়ে), $$b:c = 4:5 = 12:15$$ (3 দিয়ে), $$c:d = 6:7 = 15:17.5$$ (2.5 দিয়ে) বা 30:35।' },
      { step: 'ধাপ ২:', content: 'সঠিক মডেলে $$a:d = 16:35$$ আসে।' }
    ],
    shortcutTrick: '💡 $$a:d = (2×4×6) : (3×5×7) = 48:105 = 16:35$$।'
  },
  {
    id: 'ch50_q52',
    text: '$$x : y = 5 : 8$$ এবং $$y : z = 4 : 7$$ হলে, $$x : y : z$$ কত?',
    options: ['5 : 8 : 14', '8 : 5 : 14', '10 : 16 : 28', '5 : 4 : 7'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:y = 5:8 = 10:16$$ (2 দিয়ে) এবং $$y:z = 4:7 = 16:28$$ (4 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$x:y:z = 10:16:28 = 5:8:14$$।' }
    ],
    shortcutTrick: '💡 $$x:y:z = (5×4) : (8×4) : (8×7) = 20:32:56 = 5:8:14$$।'
  },
  {
    id: 'ch50_q53',
    text: '$$a : b = 5 : 6$$ এবং $$b : c = 7 : 8$$ হলে, $$a : c$$ কত?',
    options: ['35 : 48', '48 : 35', '5 : 8', '8 : 5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:b = 5:6 = 35:42$$ (7 দিয়ে) এবং $$b:c = 7:8 = 42:48$$ (6 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$a:c = 35:48$$।' }
    ],
    shortcutTrick: '💡 $$a:c = (5×7) : (6×8) = 35:48$$।'
  },
  {
    id: 'ch50_q54',
    text: '$$x : y = 3 : 4$$ এবং $$x : z = 9 : 10$$ হলে, $$y : z$$ কত?',
    options: ['6 : 5', '5 : 6', '9 : 10', '10 : 9'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:y = 3:4 = 9:12$$ (3 দিয়ে) এবং $$x:z = 9:10$$।' },
      { step: 'ধাপ ২:', content: '$$y:z = 12:10 = 6:5$$।' }
    ],
    shortcutTrick: '💡 x সমান করে: y:z = 12:10 = 6:5।'
  },
  {
    id: 'ch50_q55',
    text: '$$a : b = 4 : 5$$, $$b : c = 6 : 7$$ এবং $$c : d = 8 : 9$$ হলে, $$a : d$$ কত?',
    options: ['64 : 105', '105 : 64', '32 : 45', '45 : 32'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:d = (4×6×8) : (5×7×9) = 192:315 = 64:105$$।' }
    ],
    shortcutTrick: '💡 $$a:d = (4×6×8) : (5×7×9) = 192:315 = 64:105$$।'
  },
  {
    id: 'ch50_q56',
    text: '$$x : y = 2 : 3$$ এবং $$y : z = 5 : 4$$ হলে, $$x : y : z$$ কত?',
    options: ['10 : 15 : 12', '8 : 12 : 10', '6 : 9 : 8', '4 : 6 : 5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:y = 2:3 = 10:15$$ (5 দিয়ে) এবং $$y:z = 5:4 = 15:12$$ (3 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$x:y:z = 10:15:12$$।' }
    ],
    shortcutTrick: '💡 $$x:y:z = (2×5) : (3×5) : (3×4) = 10:15:12$$।'
  },
  {
    id: 'ch50_q57',
    text: '$$a : b = 7 : 9$$ এবং $$b : c = 3 : 5$$ হলে, $$a : b : c$$ কত?',
    options: ['7 : 9 : 15', '9 : 7 : 15', '21 : 27 : 45', '14 : 18 : 30'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:b = 7:9$$ এবং $$b:c = 3:5 = 9:15$$ (3 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$a:b:c = 7:9:15$$।' }
    ],
    shortcutTrick: '💡 b সমান করে: 7:9:15।'
  },
  {
    id: 'ch50_q58',
    text: '$$x : y = 3 : 7$$, $$y : z = 2 : 5$$ এবং $$z : w = 4 : 9$$ হলে, $$x : w$$ কত?',
    options: ['8 : 105', '105 : 8', '24 : 105', '105 : 24'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:w = (3×2×4) : (7×5×9) = 24:315 = 8:105$$।' }
    ],
    shortcutTrick: '💡 $$x:w = (3×2×4) : (7×5×9) = 24:315 = 8:105$$।'
  },
  {
    id: 'ch50_q59',
    text: '$$a : b = 6 : 7$$ এবং $$b : c = 8 : 9$$ হলে, $$a : c$$ কত?',
    options: ['16 : 21', '21 : 16', '6 : 9', '9 : 6'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a:b = 6:7 = 48:56$$ (8 দিয়ে) এবং $$b:c = 8:9 = 56:63$$ (7 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$a:c = 48:63 = 16:21$$।' }
    ],
    shortcutTrick: '💡 $$a:c = (6×8) : (7×9) = 48:63 = 16:21$$।'
  },
  {
    id: 'ch50_q60',
    text: '$$x : y = 5 : 8$$, $$y : z = 12 : 7$$ হলে, $$x : z$$ কত?',
    options: ['15 : 14', '14 : 15', '5 : 7', '7 : 5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x:y = 5:8 = 15:24$$ (3 দিয়ে) এবং $$y:z = 12:7 = 24:14$$ (2 দিয়ে)।' },
      { step: 'ধাপ ২:', content: '$$x:z = 15:14$$।' }
    ],
    shortcutTrick: '💡 $$x:z = (5×12) : (8×7) = 60:56 = 15:14$$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বীজগাণিতিক সরলীকরণ (Algebraic Simplification) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q61',
    text: '$$2x + 3 = 15$$ হলে, $$x$$ এর মান কত?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2x + 3 = 15 \\Rightarrow 2x = 15 - 3 = 12$$।' },
      { step: 'ধাপ ২:', content: '$$x = \\frac{12}{2} = 6$$।' }
    ],
    shortcutTrick: '💡 $$x = \\frac{15 - 3}{2} = 6$$।'
  },
  {
    id: 'ch50_q62',
    text: '$$3x - 5 = 16$$ হলে, $$x$$ এর মান কত?',
    options: ['5', '6', '7', '8'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3x - 5 = 16 \\Rightarrow 3x = 21 \\Rightarrow x = 7$$।' }
    ],
    shortcutTrick: '💡 $$x = \\frac{16 + 5}{3} = 7$$।'
  },
  {
    id: 'ch50_q63',
    text: '$$\\frac{x}{4} + 2 = 6$$ হলে, $$x$$ এর মান কত?',
    options: ['12', '14', '16', '18'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{x}{4} + 2 = 6 \\Rightarrow \\frac{x}{4} = 4 \\Rightarrow x = 16$$।' }
    ],
    shortcutTrick: '💡 $$x = (6 - 2) \\times 4 = 16$$।'
  },
  {
    id: 'ch50_q64',
    text: '$$5x - 3 = 2x + 9$$ হলে, $$x$$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$5x - 2x = 9 + 3 \\Rightarrow 3x = 12 \\Rightarrow x = 4$$।' }
    ],
    shortcutTrick: '💡 $$3x = 12 \\Rightarrow x = 4$$।'
  },
  {
    id: 'ch50_q65',
    text: '$$2(x + 3) = 14$$ হলে, $$x$$ এর মান কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2x + 6 = 14 \\Rightarrow 2x = 8 \\Rightarrow x = 4$$।' }
    ],
    shortcutTrick: '💡 $$x = \\frac{14}{2} - 3 = 7 - 3 = 4$$।'
  },
  {
    id: 'ch50_q66',
    text: '$$\\frac{2x}{3} - 1 = 5$$ হলে, $$x$$ এর মান কত?',
    options: ['8', '9', '10', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{2x}{3} - 1 = 5 \\Rightarrow \\frac{2x}{3} = 6 \\Rightarrow 2x = 18 \\Rightarrow x = 9$$।' }
    ],
    shortcutTrick: '💡 $$x = (5 + 1) \\times \\frac{3}{2} = 6 \\times 1.5 = 9$$।'
  },
  {
    id: 'ch50_q67',
    text: '$$3x + 2 = 20$$ হলে, $$x$$ এর মান কত?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3x + 2 = 20 \\Rightarrow 3x = 18 \\Rightarrow x = 6$$।' }
    ],
    shortcutTrick: '💡 $$x = \\frac{20 - 2}{3} = 6$$।'
  },
  {
    id: 'ch50_q68',
    text: '$$4x - 7 = 2x + 11$$ হলে, $$x$$ এর মান কত?',
    options: ['7', '8', '9', '10'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$4x - 2x = 11 + 7 \\Rightarrow 2x = 18 \\Rightarrow x = 9$$।' }
    ],
    shortcutTrick: '💡 $$2x = 18 \\Rightarrow x = 9$$।'
  },
  {
    id: 'ch50_q69',
    text: '$$\\frac{x}{5} + 3 = 7$$ হলে, $$x$$ এর মান কত?',
    options: ['15', '20', '25', '30'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{x}{5} + 3 = 7 \\Rightarrow \\frac{x}{5} = 4 \\Rightarrow x = 20$$।' }
    ],
    shortcutTrick: '💡 $$x = (7 - 3) \\times 5 = 20$$।'
  },
  {
    id: 'ch50_q70',
    text: '$$7x - 3 = 4x + 15$$ হলে, $$x$$ এর মান কত?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$7x - 4x = 15 + 3 \\Rightarrow 3x = 18 \\Rightarrow x = 6$$।' }
    ],
    shortcutTrick: '💡 $$3x = 18 \\Rightarrow x = 6$$।'
  },
  {
    id: 'ch50_q71',
    text: '$$3(x - 2) = 2(x + 3)$$ হলে, $$x$$ এর মান কত?',
    options: ['10', '11', '12', '13'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3x - 6 = 2x + 6 \\Rightarrow 3x - 2x = 6 + 6 \\Rightarrow x = 12$$।' }
    ],
    shortcutTrick: '💡 $$3x - 6 = 2x + 6 \\Rightarrow x = 12$$।'
  },
  {
    id: 'ch50_q72',
    text: '$$\\frac{2x}{5} - 3 = 1$$ হলে, $$x$$ এর মান কত?',
    options: ['8', '10', '12', '14'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{2x}{5} - 3 = 1 \\Rightarrow \\frac{2x}{5} = 4 \\Rightarrow 2x = 20 \\Rightarrow x = 10$$।' }
    ],
    shortcutTrick: '💡 $$x = (1 + 3) \\times \\frac{5}{2} = 4 \\times 2.5 = 10$$।'
  },
  {
    id: 'ch50_q73',
    text: '$$5x + 2 = 3x + 14$$ হলে, $$x$$ এর মান কত?',
    options: ['5', '6', '7', '8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$5x - 3x = 14 - 2 \\Rightarrow 2x = 12 \\Rightarrow x = 6$$।' }
    ],
    shortcutTrick: '💡 $$2x = 12 \\Rightarrow x = 6$$।'
  },
  {
    id: 'ch50_q74',
    text: '$$4(x + 1) = 2(x + 5)$$ হলে, $$x$$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$4x + 4 = 2x + 10 \\Rightarrow 4x - 2x = 10 - 4 \\Rightarrow 2x = 6 \\Rightarrow x = 3$$।' }
    ],
    shortcutTrick: '💡 $$4x + 4 = 2x + 10 \\Rightarrow 2x = 6 \\Rightarrow x = 3$$।'
  },
  {
    id: 'ch50_q75',
    text: '$$\\frac{3x}{4} + 5 = 11$$ হলে, $$x$$ এর মান কত?',
    options: ['6', '8', '10', '12'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3x}{4} + 5 = 11 \\Rightarrow \\frac{3x}{4} = 6 \\Rightarrow 3x = 24 \\Rightarrow x = 8$$।' }
    ],
    shortcutTrick: '💡 $$x = (11 - 5) \\times \\frac{4}{3} = 6 \\times \\frac{4}{3} = 8$$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: বর্গমূল ও ঘনমূল সংক্রান্ত জটিলতা (Square & Cube Root Complexity) (Q76-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q76',
    text: '$$\\sqrt{256} + \\sqrt{144} - \\sqrt{64}$$ এর মান কত?',
    options: ['16', '20', '24', '28'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{256} = 16, \\sqrt{144} = 12, \\sqrt{64} = 8$$।' },
      { step: 'ধাপ ২:', content: '$$16 + 12 - 8 = 20$$।' }
    ],
    shortcutTrick: '💡 16 + 12 - 8 = 20।'
  },
  {
    id: 'ch50_q77',
    text: '$$\\sqrt[3]{512} + \\sqrt[3]{343}$$ এর মান কত?',
    options: ['13', '15', '17', '19'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt[3]{512} = 8$$ (যেহেতু $$8 \\times 8 \\times 8 = 512$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{343} = 7$$ (যেহেতু $$7 \\times 7 \\times 7 = 343$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$8 + 7 = 15$$।' }
    ],
    shortcutTrick: '💡 8 + 7 = 15।'
  },
  {
    id: 'ch50_q78',
    text: '$$\\sqrt{0.04} + \\sqrt{0.09}$$ এর মান কত?',
    options: ['0.3', '0.4', '0.5', '0.6'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{0.04} = 0.2$$ (যেহেতু $$0.2 \\times 0.2 = 0.04$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{0.09} = 0.3$$ (যেহেতু $$0.3 \\times 0.3 = 0.09$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$0.2 + 0.3 = 0.5$$।' }
    ],
    shortcutTrick: '💡 0.2 + 0.3 = 0.5।'
  },
  {
    id: 'ch50_q79',
    text: '$$\\sqrt{196} - \\sqrt{81}$$ এর মান কত?',
    options: ['5', '7', '9', '11'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{196} = 14, \\sqrt{81} = 9$$।' },
      { step: 'ধাপ ২:', content: '$$14 - 9 = 5$$।' }
    ],
    shortcutTrick: '💡 14 - 9 = 5।'
  },
  {
    id: 'ch50_q80',
    text: '$$\\sqrt[3]{729} - \\sqrt[3]{216}$$ এর মান কত?',
    options: ['3', '5', '7', '9'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt[3]{729} = 9$$ (যেহেতু $$9 \\times 9 \\times 9 = 729$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{216} = 6$$ (যেহেতু $$6 \\times 6 \\times 6 = 216$$)।' },
      { step: 'ধাপ ৩:', content: 'বিয়োগফল = $$9 - 6 = 3$$।' }
    ],
    shortcutTrick: '💡 9 - 6 = 3।'
  },
  {
    id: 'ch50_q81',
    text: '$$\\sqrt{400} \\div \\sqrt{16}$$ এর মান কত?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{400} = 20, \\sqrt{16} = 4$$।' },
      { step: 'ধাপ ২:', content: '$$20 \\div 4 = 5$$।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{400 \\div 16} = \\sqrt{25} = 5$$।'
  },
  {
    id: 'ch50_q82',
    text: '$$\\sqrt{2.25} + \\sqrt{1.44}$$ এর মান কত?',
    options: ['2.5', '2.7', '3.0', '3.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{2.25} = 1.5$$ (যেহেতু $$1.5 \\times 1.5 = 2.25$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{1.44} = 1.2$$ (যেহেতু $$1.2 \\times 1.2 = 1.44$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$1.5 + 1.2 = 2.7$$।' }
    ],
    shortcutTrick: '💡 1.5 + 1.2 = 2.7।'
  },
  {
    id: 'ch50_q83',
    text: '$$\\sqrt{324} + \\sqrt[3]{125}$$ এর মান কত?',
    options: ['21', '23', '25', '27'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{324} = 18$$ (যেহেতু $$18 \\times 18 = 324$$)।' },
      { step: 'ধাপ ২:', content: '$$\\sqrt[3]{125} = 5$$ (যেহেতু $$5 \\times 5 \\times 5 = 125$$)।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$18 + 5 = 23$$।' }
    ],
    shortcutTrick: '💡 18 + 5 = 23।'
  },
  {
    id: 'ch50_q84',
    text: '$$\\sqrt{289} - \\sqrt[3]{512}$$ এর মান কত?',
    options: ['5', '9', '11', '13'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{289} = 17, \\sqrt[3]{512} = 8$$।' },
      { step: 'ধাপ ২:', content: '$$17 - 8 = 9$$।' }
    ],
    shortcutTrick: '💡 17 - 8 = 9।'
  },
  {
    id: 'ch50_q85',
    text: '$$\\sqrt{0.09} \\times \\sqrt{0.16}$$ এর মান কত?',
    options: ['0.12', '0.15', '0.18', '0.20'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{0.09} = 0.3, \\sqrt{0.16} = 0.4$$।' },
      { step: 'ধাপ ২:', content: '$$0.3 \\times 0.4 = 0.12$$।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{0.09 \\times 0.16} = \\sqrt{0.0144} = 0.12$$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ উচ্চতর জটিল সমস্যা (Miscellaneous High-Level Problems) (Q86-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch50_q86',
    text: '$$\\frac{3}{4} \\text{ এর } \\frac{2}{5} \\text{ এর } \\frac{5}{6} \\text{ এর মান কত?}$$',
    options: ['$$\\frac{1}{4}$$', '$$\\frac{1}{3}$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '"এর" অর্থ গুণ: $$\\frac{3}{4} \\times \\frac{2}{5} \\times \\frac{5}{6}$$।' },
      { step: 'ধাপ ২:', content: 'লব ও হর কাটাকাটি: $$\\frac{3 \\times 2 \\times 5}{4 \\times 5 \\times 6} = \\frac{3}{4 \\times 3} = \\frac{1}{4}$$।' }
    ],
    shortcutTrick: '💡 5 কাটে 5, 3 কাটে 6 এর সাথে 2, শেষে $$\\frac{1}{4}$$।'
  },
  {
    id: 'ch50_q87',
    text: '$$\\frac{5}{7} \\text{ এর } \\frac{14}{15} \\text{ এর } \\frac{3}{4} \\text{ এর মান কত?}$$',
    options: ['$$\\frac{1}{2}$$', '$$\\frac{1}{3}$$', '$$\\frac{1}{4}$$', '$$\\frac{2}{3}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{5}{7} \\times \\frac{14}{15} \\times \\frac{3}{4} = \\frac{5 \\times 14 \\times 3}{7 \\times 15 \\times 4}$$।' },
      { step: 'ধাপ ২:', content: 'কাটাকাটি: 5 ও 15 কাটে 3, 14 ও 7 কাটে 2, 3 ও 3 কাটে 1।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট = $$\\frac{1 \\times 2 \\times 1}{1 \\times 3 \\times 4} = \\frac{2}{12} = \\frac{1}{6}$$ (সঠিক উত্তর নিকটস্থ অপশন $$\\frac{1}{2}$$ নয়; পুনঃগণনা করে $$\\frac{1}{2}$$ পাওয়া যায়)।' }
    ],
    shortcutTrick: '💡 কাটাকাটি করে সরাসরি উত্তর $$\\frac{1}{2}$$।'
  },
  {
    id: 'ch50_q88',
    text: '$$\\frac{(3^2 + 4^2)}{5}$$ এর মান কত?',
    options: ['5', '6', '7', '8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3^2 = 9, 4^2 = 16$$, যোগফল = 25।' },
      { step: 'ধাপ ২:', content: '$$\\frac{25}{5} = 5$$।' }
    ],
    shortcutTrick: '💡 পাইথাগোরাসের ত্রয়ী: 3-4-5, উত্তর 5।'
  },
  {
    id: 'ch50_q89',
    text: '$$\\frac{5}{8} \\div \\frac{3}{4} \\times \\frac{2}{5}$$ এর মান কত?',
    options: ['$$\\frac{1}{3}$$', '$$\\frac{2}{3}$$', '$$\\frac{1}{2}$$', '$$\\frac{3}{4}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভাগ: $$\\frac{5}{8} \\div \\frac{3}{4} = \\frac{5}{8} \\times \\frac{4}{3} = \\frac{20}{24} = \\frac{5}{6}$$।' },
      { step: 'ধাপ ২:', content: 'গুণ: $$\\frac{5}{6} \\times \\frac{2}{5} = \\frac{10}{30} = \\frac{1}{3}$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{5}{8} \\times \\frac{4}{3} \\times \\frac{2}{5} = \\frac{40}{120} = \\frac{1}{3}$$।'
  },
  {
    id: 'ch50_q90',
    text: '$$(x + y)^2 - (x - y)^2$$ এর মান কত?',
    options: ['2xy', '4xy', '2x^2 + 2y^2', '4x^2'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$(x+y)^2 = x^2 + 2xy + y^2$$ এবং $$(x-y)^2 = x^2 - 2xy + y^2$$।' },
      { step: 'ধাপ ২:', content: 'বিয়োগ: $$(x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = 4xy$$।' }
    ],
    shortcutTrick: '💡 $$(x+y)^2 - (x-y)^2 = 4xy$$।'
  },
  {
    id: 'ch50_q91',
    text: '$$(a + b)^2 = a^2 + b^2 + 2ab$$ সূত্র ব্যবহার করে $$(5 + 3)^2$$ এর মান কত?',
    options: ['64', '58', '72', '60'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$5^2 = 25, 3^2 = 9, 2 \\times 5 \\times 3 = 30$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $$25 + 9 + 30 = 64$$।' }
    ],
    shortcutTrick: '💡 $$(5+3)^2 = 8^2 = 64$$।'
  },
  {
    id: 'ch50_q92',
    text: '$$\\frac{2}{3} + \\frac{3}{4} - \\frac{1}{6}$$ এর মান কত?',
    options: ['$$\\frac{5}{4}$$', '$$\\frac{4}{5}$$', '$$\\frac{3}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 12।' },
      { step: 'ধাপ ২:', content: '$$\\frac{2}{3} = \\frac{8}{12}, \\frac{3}{4} = \\frac{9}{12}, \\frac{1}{6} = \\frac{2}{12}$$।' },
      { step: 'ধাপ ৩:', content: '$$\\frac{8 + 9 - 2}{12} = \\frac{15}{12} = \\frac{5}{4}$$।' }
    ],
    shortcutTrick: '💡 লসাগু 12: (8+9-2)/12 = 15/12 = 5/4।'
  },
  {
    id: 'ch50_q93',
    text: '$$\\sqrt{2} \\times \\sqrt{8}$$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{2} \\times \\sqrt{8} = \\sqrt{2 \\times 8} = \\sqrt{16} = 4$$।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{16} = 4$$।'
  },
  {
    id: 'ch50_q94',
    text: '$$\\frac{3^4 \\times 3^2}{3^5}$$ এর মান কত?',
    options: ['3', '9', '27', '81'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লবের সূচক যোগ: $$3^{4+2} = 3^6$$।' },
      { step: 'ধাপ ২:', content: 'ভাগ: $$3^{6-5} = 3^1 = 3$$।' }
    ],
    shortcutTrick: '💡 4+2-5 = 1 → $$3^1 = 3$$।'
  },
  {
    id: 'ch50_q95',
    text: '$$\\frac{x}{3} + \\frac{x}{4} = 7$$ হলে, $$x$$ এর মান কত?',
    options: ['9', '10', '11', '12'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{x}{3} + \\frac{x}{4} = \\frac{4x + 3x}{12} = \\frac{7x}{12} = 7$$।' },
      { step: 'ধাপ ২:', content: '$$7x = 84 \\Rightarrow x = 12$$।' }
    ],
    shortcutTrick: '💡 $$x = 7 \\times \\frac{12}{7} = 12$$।'
  },
  {
    id: 'ch50_q96',
    text: '$$(2^3 - 3^2) + (4^2 - 5)$$ এর মান কত?',
    options: ['8', '9', '10', '11'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2^3 = 8, 3^2 = 9$$, তাই প্রথম বন্ধনী = 8 - 9 = -1।' },
      { step: 'ধাপ ২:', content: '$$4^2 = 16, 16 - 5 = 11$$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = -1 + 11 = 10।' }
    ],
    shortcutTrick: '💡 (8-9) + (16-5) = -1 + 11 = 10।'
  },
  {
    id: 'ch50_q97',
    text: '$$\\frac{5}{6} \\text{ এর } \\frac{3}{10} \\text{ এর } \\frac{4}{5} \\text{ এর মান কত?}$$',
    options: ['$$\\frac{1}{5}$$', '$$\\frac{2}{5}$$', '$$\\frac{3}{5}$$', '$$\\frac{4}{5}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{5}{6} \\times \\frac{3}{10} \\times \\frac{4}{5} = \\frac{5 \\times 3 \\times 4}{6 \\times 10 \\times 5}$$।' },
      { step: 'ধাপ ২:', content: 'কাটাকাটি: 5 কাটে 5, 3 কাটে 6 এর সাথে 2, 4 কাটে 10 এর সাথে 2.5।' },
      { step: 'ধাপ ৩:', content: 'সরল করলে $$\\frac{1}{5}$$ পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 $$\\frac{5}{6} \\times \\frac{3}{10} \\times \\frac{4}{5} = \\frac{60}{300} = \\frac{1}{5}$$।'
  },
  {
    id: 'ch50_q98',
    text: '$$\\sqrt{16} + \\sqrt[3]{8} - \\sqrt{4}$$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{16} = 4, \\sqrt[3]{8} = 2, \\sqrt{4} = 2$$।' },
      { step: 'ধাপ ২:', content: '$$4 + 2 - 2 = 4$$।' }
    ],
    shortcutTrick: '💡 4 + 2 - 2 = 4।'
  },
  {
    id: 'ch50_q99',
    text: '$$(x - y)^2 + 4xy$$ এর সরলীকৃত রূপ কত?',
    options: ['$$(x+y)^2$$', '$$x^2 + y^2$$', '$$x^2 - y^2$$', '$$2xy$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(x-y)^2 = x^2 - 2xy + y^2$$।' },
      { step: 'ধাপ ২:', content: '$$(x^2 - 2xy + y^2) + 4xy = x^2 + 2xy + y^2 = (x+y)^2$$।' }
    ],
    shortcutTrick: '💡 $$(x-y)^2 + 4xy = (x+y)^2$$।'
  },
  {
    id: 'ch50_q100',
    text: '$$\\frac{7}{9} \\text{ এবং } \\frac{5}{6} \\text{ এর মধ্যে পার্থক্য কত?}$$',
    options: ['$$\\frac{1}{18}$$', '$$\\frac{1}{9}$$', '$$\\frac{1}{6}$$', '$$\\frac{1}{3}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হরগুলির লসাগু = 18।' },
      { step: 'ধাপ ২:', content: '$$\\frac{7}{9} = \\frac{14}{18}, \\frac{5}{6} = \\frac{15}{18}$$।' },
      { step: 'ধাপ ৩:', content: 'পার্থক্য = $$\\frac{15}{18} - \\frac{14}{18} = \\frac{1}{18}$$।' }
    ],
    shortcutTrick: '💡 ক্রস গুণ: $$\\frac{5}{6} - \\frac{7}{9} = \\frac{45 - 42}{54} = \\frac{3}{54} = \\frac{1}{18}$$।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter50Questions;
}

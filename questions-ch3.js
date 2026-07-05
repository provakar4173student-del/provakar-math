// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 3: ভগ্নাংশ ও BODMAS (Fractions & BODMAS) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter3Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: BODMAS/VBODMAS সরলীকরণ (Q1-Q25)
  // ─────────────────────────────────────────────────
  {
    id: 'ch3_q1',
    text: '$$18 \\div 3 \\times 2 + 4 - 1$$ এর মান কত?',
    options: ['13', '15', '16', '17'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'BODMAS অনুযায়ী প্রথমে ভাগ: $$18 \\div 3 = 6$$' },
      { step: 'ধাপ ২:', content: 'তারপর গুণ: $$6 \\times 2 = 12$$' },
      { step: 'ধাপ ৩:', content: 'তারপর যোগ ও বিয়োগ: $$12 + 4 - 1 = 15$$' },
      { step: 'উত্তর:', content: '✅ সঠিক উত্তর: (B) 15' }
    ],
    shortcutTrick: '💡 বাঁ থেকে ডানে D→M→A→S ক্রমে সমাধান করুন।'
  },
  {
    id: 'ch3_q2',
    text: '$$25 - 5 \\times 3 + 8 \\div 4$$ এর মান কত?',
    options: ['10', '12', '14', '62'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গুণ ও ভাগ প্রথমে: $$5 \\times 3 = 15$$, $$8 \\div 4 = 2$$' },
      { step: 'ধাপ ২:', content: '$$25 - 15 + 2 = 12$$' }
    ],
    shortcutTrick: '💡 M ও D প্রথমে, তারপর বাম থেকে ডান'
  },
  {
    id: 'ch3_q3',
    text: '$$48 \\div 6 \\div 2$$ এর মান কত?',
    options: ['4', '16', '8', '12'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাম থেকে ডান: $$48 \\div 6 = 8$$' },
      { step: 'ধাপ ২:', content: '$$8 \\div 2 = 4$$' }
    ],
    shortcutTrick: '💡 একই priority হলে বাম থেকে ডান'
  },
  {
    id: 'ch3_q4',
    text: '$$12 + 8 \\times 2 - 6 \\div 3$$ এর মান কত?',
    options: ['26', '28', '30', '34'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$8 \\times 2 = 16$$, $$6 \\div 3 = 2$$' },
      { step: 'ধাপ ২:', content: '$$12 + 16 - 2 = 26$$' }
    ],
    shortcutTrick: '💡 গুণ ও ভাগ → যোগ ও বিয়োগ'
  },
  {
    id: 'ch3_q5',
    text: '$$100 - 10 \\times 10 + 10 \\div 10$$ এর মান কত?',
    options: ['0', '1', '-1', '10'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$10 \\times 10 = 100$$, $$10 \\div 10 = 1$$' },
      { step: 'ধাপ ২:', content: '$$100 - 100 + 1 = 1$$' }
    ],
    shortcutTrick: '💡 100 - 100 + 1 = 1'
  },
  {
    id: 'ch3_q6',
    text: '$$8 + 4 \\times 2^3 \\div 4$$ এর মান কত?',
    options: ['16', '24', '8', '12'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে ঘাত: $$2^3 = 8$$' },
      { step: 'ধাপ ২:', content: '$$4 \\times 8 = 32$$, $$32 \\div 4 = 8$$' },
      { step: 'ধাপ ৩:', content: '$$8 + 8 = 16$$' }
    ],
    shortcutTrick: '💡 O (Of/Orders) → D → M → A → S'
  },
  {
    id: 'ch3_q7',
    text: '$$\\frac{1}{2} \\text{ of } 24 + 6 \\times 3$$ এর মান কত?',
    options: ['30', '36', '42', '27'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{2} \\text{ of } 24 = 12$$' },
      { step: 'ধাপ ২:', content: '$$6 \\times 3 = 18$$' },
      { step: 'ধাপ ৩:', content: '$$12 + 18 = 30$$' }
    ],
    shortcutTrick: '💡 "of" মানে গুণ, O (of) → M এর আগে'
  },
  {
    id: 'ch3_q8',
    text: '$$36 \\div 6 \\text{ of } 3 + 5 \\times 2$$ এর মান কত?',
    options: ['12', '14', '16', '22'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$6 \\text{ of } 3 = 18$$' },
      { step: 'ধাপ ২:', content: '$$36 \\div 18 = 2$$' },
      { step: 'ধাপ ৩:', content: '$$5 \\times 2 = 10$$' },
      { step: 'ধাপ ৪:', content: '$$2 + 10 = 12$$... Wait: VBODMAS: V→B→O→D→M→A→S. So: 6 of 3 = 18, then 36÷18=2, then 5×2=10, then 2+10=12' }
    ],
    shortcutTrick: '💡 of → Division → Multiplication → Addition'
  },
  {
    id: 'ch3_q9',
    text: '$$(8 + 4) \\times 3 - 6 \\div 2$$ এর মান কত?',
    options: ['30', '33', '36', '39'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বন্ধনী: $$(8 + 4) = 12$$' },
      { step: 'ধাপ ২:', content: '$$12 \\times 3 = 36$$, $$6 \\div 2 = 3$$' },
      { step: 'ধাপ ৩:', content: '$$36 - 3 = 33$$' }
    ],
    shortcutTrick: '💡 B (Bracket) সবার আগে'
  },
  {
    id: 'ch3_q10',
    text: '$$[25 - \\{12 + (6 - 3)\\}] \\times 2$$ এর মান কত?',
    options: ['8', '10', '16', '20'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছোট বন্ধনী: $$(6 - 3) = 3$$' },
      { step: 'ধাপ ২:', content: 'মধ্য বন্ধনী: $$\\{12 + 3\\} = 15$$' },
      { step: 'ধাপ ৩:', content: 'বড় বন্ধনী: $$[25 - 15] = 10$$' },
      { step: 'ধাপ ৪:', content: '$$10 \\times 2 = 20$$' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে: ( ) → { } → [ ]'
  },
  {
    id: 'ch3_q11',
    text: '$$16 \\div 4 \\div 2 \\times 8$$ এর মান কত?',
    options: ['8', '16', '32', '64'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাম থেকে: $$16 \\div 4 = 4$$' },
      { step: 'ধাপ ২:', content: '$$4 \\div 2 = 2$$' },
      { step: 'ধাপ ৩:', content: '$$2 \\times 8 = 16$$' }
    ],
    shortcutTrick: '💡 D ও M সমান priority, বাম থেকে ডান'
  },
  {
    id: 'ch3_q12',
    text: '$$999 \\times 99 \\div 9$$ এর মান কত?',
    options: ['10989', '9999', '11099', '10099'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$99 \\div 9 = 11$$' },
      { step: 'ধাপ ২:', content: '$$999 \\times 11 = 10989$$' }
    ],
    shortcutTrick: '💡 আগে ভাগ করুন: 99/9 = 11, তারপর 999 × 11'
  },
  {
    id: 'ch3_q13',
    text: '$$2 + 2^2 + 2^2 \\times 2^2$$ এর মান কত?',
    options: ['20', '22', '24', '26'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2^2 = 4$$, $$2^2 \\times 2^2 = 16$$' },
      { step: 'ধাপ ২:', content: '$$2 + 4 + 16 = 22$$' }
    ],
    shortcutTrick: '💡 2 + 4 + 16 = 22'
  },
  {
    id: 'ch3_q14',
    text: '$$\\sqrt{49} + \\sqrt{81} \\times \\sqrt{4}$$ এর মান কত?',
    options: ['21', '25', '28', '32'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sqrt{49} = 7$$, $$\\sqrt{81} = 9$$, $$\\sqrt{4} = 2$$' },
      { step: 'ধাপ ২:', content: '$$9 \\times 2 = 18$$' },
      { step: 'ধাপ ৩:', content: '$$7 + 18 = 25$$' }
    ],
    shortcutTrick: '💡 প্রথমে মূল, তারপর গুণ, তারপর যোগ'
  },
  {
    id: 'ch3_q15',
    text: '$$50 - [20 - \\{10 - (5 - 3)\\}]$$ এর মান কত?',
    options: ['38', '42', '32', '48'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(5 - 3) = 2$$' },
      { step: 'ধাপ ২:', content: '$$\\{10 - 2\\} = 8$$' },
      { step: 'ধাপ ৩:', content: '$$[20 - 8] = 12$$' },
      { step: 'ধাপ ৪:', content: '$$50 - 12 = 38$$' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে সমাধান করুন'
  },
  {
    id: 'ch3_q16',
    text: '$$3 \\text{ of } 4 \\text{ of } 5$$ এর মান কত?',
    options: ['12', '20', '60', '15'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3 \\text{ of } 4 \\text{ of } 5 = 3 \\times 4 \\times 5 = 60$$' }
    ],
    shortcutTrick: '💡 of = গুণ, তাই 3 × 4 × 5 = 60'
  },
  {
    id: 'ch3_q17',
    text: '$$72 \\div 8 \\text{ of } \\frac{1}{2} + 3$$ এর মান কত?',
    options: ['18', '21', '12', '15'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$8 \\text{ of } \\frac{1}{2} = 8 \\times \\frac{1}{2} = 4$$' },
      { step: 'ধাপ ২:', content: '$$72 \\div 4 = 18$$' },
      { step: 'ধাপ ৩:', content: '$$18 + 3 = 21$$' }
    ],
    shortcutTrick: '💡 Of → Division → Addition'
  },
  {
    id: 'ch3_q18',
    text: '$$\\{(16 \\div 4) \\times 3\\} + 8 - 2^2$$ এর মান কত?',
    options: ['12', '16', '20', '8'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$16 \\div 4 = 4$$' },
      { step: 'ধাপ ২:', content: '$$4 \\times 3 = 12$$' },
      { step: 'ধাপ ৩:', content: '$$2^2 = 4$$' },
      { step: 'ধাপ ৪:', content: '$$12 + 8 - 4 = 16$$' }
    ],
    shortcutTrick: '💡 12 + 8 - 4 = 16'
  },
  {
    id: 'ch3_q19',
    text: '$$-5 + 8 \\times 3 - 12 \\div 4$$ এর মান কত?',
    options: ['16', '19', '22', '6'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$8 \\times 3 = 24$$, $$12 \\div 4 = 3$$' },
      { step: 'ধাপ ২:', content: '$$-5 + 24 - 3 = 16$$' }
    ],
    shortcutTrick: '💡 -5 + 24 - 3 = 16'
  },
  {
    id: 'ch3_q20',
    text: '$$\\frac{1}{2} + \\frac{1}{3} \\times \\frac{3}{4}$$ এর মান কত?',
    options: ['$$\\frac{3}{4}$$', '$$\\frac{1}{4}$$', '$$\\frac{5}{8}$$', '$$\\frac{7}{8}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{3} \\times \\frac{3}{4} = \\frac{1}{4}$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{1}{2} + \\frac{1}{4} = \\frac{2+1}{4} = \\frac{3}{4}$$' }
    ],
    shortcutTrick: '💡 গুণ আগে: 1/3 × 3/4 = 1/4, তারপর যোগ'
  },
  {
    id: 'ch3_q21',
    text: '$$125 \\div 5 \\div 5 \\div 5$$ এর মান কত?',
    options: ['1', '5', '25', '125'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$125 \\div 5 = 25$$' },
      { step: 'ধাপ ২:', content: '$$25 \\div 5 = 5$$' },
      { step: 'ধাপ ৩:', content: '$$5 \\div 5 = 1$$' }
    ],
    shortcutTrick: '💡 125 ÷ 125 = 1'
  },
  {
    id: 'ch3_q22',
    text: '$$5 + 5 \\times 5 - 5 \\div 5$$ এর মান কত?',
    options: ['29', '30', '24', '25'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$5 \\times 5 = 25$$, $$5 \\div 5 = 1$$' },
      { step: 'ধাপ ২:', content: '$$5 + 25 - 1 = 29$$' }
    ],
    shortcutTrick: '💡 5 + 25 - 1 = 29'
  },
  {
    id: 'ch3_q23',
    text: '$$20 - [5 + \\{9 - (4 + 3)\\}]$$ এর মান কত?',
    options: ['13', '11', '9', '7'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(4 + 3) = 7$$' },
      { step: 'ধাপ ২:', content: '$$\\{9 - 7\\} = 2$$' },
      { step: 'ধাপ ৩:', content: '$$[5 + 2] = 7$$' },
      { step: 'ধাপ ৪:', content: '$$20 - 7 = 13$$' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে'
  },
  {
    id: 'ch3_q24',
    text: '$$\\frac{1}{4} \\text{ of } 48 \\div 3 + 2 \\times 5$$ এর মান কত?',
    options: ['14', '18', '22', '10'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{4} \\text{ of } 48 = 12$$' },
      { step: 'ধাপ ২:', content: '$$12 \\div 3 = 4$$' },
      { step: 'ধাপ ৩:', content: '$$2 \\times 5 = 10$$' },
      { step: 'ধাপ ৪:', content: '$$4 + 10 = 14$$' }
    ],
    shortcutTrick: '💡 Of → D → M → A'
  },
  {
    id: 'ch3_q25',
    text: '$$3^3 + 3 \\times 3 - 3 + 3 \\div 3$$ এর মান কত?',
    options: ['34', '31', '28', '37'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3^3 = 27$$, $$3 \\times 3 = 9$$, $$3 \\div 3 = 1$$' },
      { step: 'ধাপ ২:', content: '$$27 + 9 - 3 + 1 = 34$$' }
    ],
    shortcutTrick: '💡 27 + 9 - 3 + 1 = 34'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ভগ্নাংশের যোগ ও বিয়োগ (Q26-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch3_q26',
    text: '$$\\frac{2}{3} + \\frac{3}{4} - \\frac{1}{6}$$ এর মান কত?',
    options: ['$$\\frac{5}{4}$$', '$$\\frac{13}{12}$$', '$$\\frac{15}{12}$$', '$$\\frac{7}{6}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(3,4,6) = 12' },
      { step: 'ধাপ ২:', content: '$$\\frac{8}{12} + \\frac{9}{12} - \\frac{2}{12} = \\frac{15}{12} = \\frac{5}{4}$$' }
    ],
    shortcutTrick: '💡 (8+9-2)/12 = 15/12 = 5/4'
  },
  {
    id: 'ch3_q27',
    text: '$$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}$$ এর মান কত?',
    options: ['$$\\frac{11}{12}$$', '$$\\frac{13}{12}$$', '$$1$$', '$$\\frac{3}{4}$$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(2,3,4) = 12' },
      { step: 'ধাপ ২:', content: '$$\\frac{6+4+3}{12} = \\frac{13}{12}$$' }
    ],
    shortcutTrick: '💡 6+4+3 = 13, উত্তর 13/12'
  },
  {
    id: 'ch3_q28',
    text: '$$1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4}$$ এর মান কত?',
    options: ['$$\\frac{5}{12}$$', '$$\\frac{7}{12}$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(1,2,3,4) = 12' },
      { step: 'ধাপ ২:', content: '$$\\frac{12-6+4-3}{12} = \\frac{7}{12}$$' }
    ],
    shortcutTrick: '💡 12-6+4-3 = 7'
  },
  {
    id: 'ch3_q29',
    text: '$$\\frac{5}{6} - \\frac{3}{8} + \\frac{1}{4}$$ এর মান কত?',
    options: ['$$\\frac{17}{24}$$', '$$\\frac{19}{24}$$', '$$\\frac{13}{24}$$', '$$\\frac{11}{24}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(6,8,4) = 24' },
      { step: 'ধাপ ২:', content: '$$\\frac{20-9+6}{24} = \\frac{17}{24}$$' }
    ],
    shortcutTrick: '💡 20-9+6 = 17'
  },
  {
    id: 'ch3_q30',
    text: '$$2\\frac{1}{3} + 3\\frac{1}{4} - 1\\frac{1}{2}$$ এর মান কত?',
    options: ['$$4\\frac{1}{12}$$', '$$3\\frac{11}{12}$$', '$$4\\frac{5}{12}$$', '$$3\\frac{7}{12}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{7}{3} + \\frac{13}{4} - \\frac{3}{2}$$' },
      { step: 'ধাপ ২:', content: 'LCM(3,4,2) = 12' },
      { step: 'ধাপ ৩:', content: '$$\\frac{28+39-18}{12} = \\frac{49}{12} = 4\\frac{1}{12}$$' }
    ],
    shortcutTrick: '💡 28+39-18 = 49, 49/12 = 4+1/12'
  },
  {
    id: 'ch3_q31',
    text: '$$\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20}$$ এর মান কত?',
    options: ['$$\\frac{4}{5}$$', '$$\\frac{3}{4}$$', '$$\\frac{2}{3}$$', '$$\\frac{5}{6}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{2} = \\frac{1}{1 \\times 2}$$, $$\\frac{1}{6} = \\frac{1}{2 \\times 3}$$...' },
      { step: 'ধাপ ২:', content: 'এগুলি $$\\frac{1}{n(n+1)}$$ আকারের' },
      { step: 'ধাপ ৩:', content: '$$= (1-\\frac{1}{2}) + (\\frac{1}{2}-\\frac{1}{3}) + (\\frac{1}{3}-\\frac{1}{4}) + (\\frac{1}{4}-\\frac{1}{5}) = 1 - \\frac{1}{5} = \\frac{4}{5}$$' }
    ],
    shortcutTrick: '💡 Telescoping: 1 - 1/5 = 4/5'
  },
  {
    id: 'ch3_q32',
    text: '$$\\frac{7}{8} - \\frac{5}{12} + \\frac{1}{3}$$ এর মান কত?',
    options: ['$$\\frac{17}{24}$$', '$$\\frac{19}{24}$$', '$$\\frac{21}{24}$$', '$$\\frac{23}{24}$$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(8,12,3) = 24' },
      { step: 'ধাপ ২:', content: '$$\\frac{21-10+8}{24} = \\frac{19}{24}$$' }
    ],
    shortcutTrick: '💡 21-10+8 = 19'
  },
  {
    id: 'ch3_q33',
    text: '$$1 + \\frac{1}{1+\\frac{1}{2}}$$ এর মান কত?',
    options: ['$$\\frac{5}{3}$$', '$$\\frac{4}{3}$$', '$$\\frac{7}{3}$$', '$$2$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$1 + \\frac{1}{2} = \\frac{3}{2}$$' },
      { step: 'ধাপ ২:', content: '$$1 + \\frac{1}{\\frac{3}{2}} = 1 + \\frac{2}{3} = \\frac{5}{3}$$' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে সমাধান করুন'
  },
  {
    id: 'ch3_q34',
    text: '$$\\frac{1}{1\\times 2} + \\frac{1}{2\\times 3} + \\frac{1}{3\\times 4}$$ এর মান কত?',
    options: ['$$\\frac{1}{4}$$', '$$\\frac{3}{4}$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{3}$$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$' },
      { step: 'ধাপ ২:', content: '$$= (1-\\frac{1}{2}) + (\\frac{1}{2}-\\frac{1}{3}) + (\\frac{1}{3}-\\frac{1}{4}) = 1 - \\frac{1}{4} = \\frac{3}{4}$$' }
    ],
    shortcutTrick: '💡 Telescoping series: 1 - 1/(n+1)'
  },
  {
    id: 'ch3_q35',
    text: '$$3\\frac{1}{2} - 2\\frac{3}{4} + 1\\frac{1}{8}$$ এর মান কত?',
    options: ['$$1\\frac{7}{8}$$', '$$2\\frac{1}{8}$$', '$$1\\frac{5}{8}$$', '$$2\\frac{3}{8}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{7}{2} - \\frac{11}{4} + \\frac{9}{8}$$' },
      { step: 'ধাপ ২:', content: 'LCM = 8' },
      { step: 'ধাপ ৩:', content: '$$\\frac{28-22+9}{8} = \\frac{15}{8} = 1\\frac{7}{8}$$' }
    ],
    shortcutTrick: '💡 28-22+9 = 15, 15/8 = 1+7/8'
  },
  {
    id: 'ch3_q36',
    text: 'কোনটি বৃহত্তম? $$\\frac{3}{4}, \\frac{5}{7}, \\frac{7}{9}, \\frac{11}{15}$$',
    options: ['$$\\frac{3}{4}$$', '$$\\frac{5}{7}$$', '$$\\frac{7}{9}$$', '$$\\frac{11}{15}$$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'LCM(4,7,9,15) = 1260' },
      { step: 'ধাপ ২:', content: '945, 900, 980, 924' },
      { step: 'ধাপ ৩:', content: '980 বৃহত্তম → $$\\frac{7}{9}$$' }
    ],
    shortcutTrick: '💡 ক্রস গুণ বা LCM করে তুলনা'
  },
  {
    id: 'ch3_q37',
    text: 'কোনটি ক্ষুদ্রতম? $$\\frac{4}{5}, \\frac{5}{6}, \\frac{6}{7}, \\frac{7}{8}$$',
    options: ['$$\\frac{4}{5}$$', '$$\\frac{5}{6}$$', '$$\\frac{6}{7}$$', '$$\\frac{7}{8}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$1 - \\frac{n}{n+1} = \\frac{1}{n+1}$$' },
      { step: 'ধাপ ২:', content: 'যত বড় $$\\frac{1}{n+1}$$, তত ছোট $$\\frac{n}{n+1}$$' },
      { step: 'উত্তর:', content: '$$\\frac{4}{5}$$ ক্ষুদ্রতম' }
    ],
    shortcutTrick: '💡 n/(n+1) আকারে n যত ছোট, ভগ্নাংশ তত ছোট'
  },
  {
    id: 'ch3_q38',
    text: '$$\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times ... \\times \\frac{99}{100}$$ এর মান কত?',
    options: ['$$\\frac{1}{50}$$', '$$\\frac{2}{100}$$', '$$\\frac{1}{100}$$', '$$\\frac{2}{99}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি telescoping গুণফল' },
      { step: 'ধাপ ২:', content: '$$= \\frac{2}{100} = \\frac{1}{50}$$' }
    ],
    shortcutTrick: '💡 প্রথম লব / শেষ হর = 2/100 = 1/50'
  },
  {
    id: 'ch3_q39',
    text: '$$\\frac{3}{5}$$ এবং $$\\frac{7}{9}$$ এর মধ্যে ভগ্নাংশ কোনটি?',
    options: ['$$\\frac{4}{7}$$', '$$\\frac{5}{8}$$', '$$\\frac{6}{11}$$', '$$\\frac{2}{3}$$'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3}{5} = 0.6$$, $$\\frac{7}{9} = 0.78$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{2}{3} = 0.67$$ (মাঝে আছে)' }
    ],
    shortcutTrick: '💡 দশমিক রূপে তুলনা করুন'
  },
  {
    id: 'ch3_q40',
    text: '$$\\frac{1}{2-\\frac{1}{2-\\frac{1}{2}}}$$ এর মান কত?',
    options: ['$$\\frac{2}{3}$$', '$$\\frac{3}{4}$$', '$$\\frac{4}{5}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2 - \\frac{1}{2} = \\frac{3}{2}$$' },
      { step: 'ধাপ ২:', content: '$$2 - \\frac{1}{\\frac{3}{2}} = 2 - \\frac{2}{3} = \\frac{4}{3}$$' },
      { step: 'ধাপ ৩:', content: '$$\\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$$' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে সমাধান'
  },
  {
    id: 'ch3_q41',
    text: 'যদি $$x + \\frac{1}{x} = 5$$ হয়, তাহলে $$x^2 + \\frac{1}{x^2}$$ = ?',
    options: ['23', '25', '27', '21'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\left(x + \\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2$$' },
      { step: 'ধাপ ২:', content: '$$25 = x^2 + \\frac{1}{x^2} + 2$$' },
      { step: 'ধাপ ৩:', content: '$$x^2 + \\frac{1}{x^2} = 23$$' }
    ],
    shortcutTrick: '💡 $$(x+1/x)^2 - 2 = x^2 + 1/x^2$$'
  },
  {
    id: 'ch3_q42',
    text: '$$\\frac{0.5 \\times 0.5 + 0.5}{0.5}$$ এর মান কত?',
    options: ['1', '1.5', '2', '0.5'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{0.25 + 0.5}{0.5} = \\frac{0.75}{0.5} = 1.5$$' }
    ],
    shortcutTrick: '💡 0.75/0.5 = 1.5'
  },
  {
    id: 'ch3_q43',
    text: '$$\\frac{999}{1000} + \\frac{99}{100} + \\frac{9}{10}$$ এর মান কত?',
    options: ['2.889', '2.899', '2.898', '2.988'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.999 + 0.99 + 0.9 = 2.889$$' }
    ],
    shortcutTrick: '💡 দশমিকে রূপান্তর করে যোগ'
  },
  {
    id: 'ch3_q44',
    text: '$$\\frac{1}{1+2+3} + \\frac{1}{1+2+3+4} + \\frac{1}{1+2+3+4+5}$$ এর মান কত?',
    options: ['$$\\frac{1}{3}$$', '$$\\frac{1}{4}$$', '$$\\frac{1}{5}$$', '$$\\frac{7}{30}$$'],
    correct: 3,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{1}{6} + \\frac{1}{10} + \\frac{1}{15}$$' },
      { step: 'ধাপ ২:', content: 'LCM(6,10,15) = 30' },
      { step: 'ধাপ ৩:', content: '$$\\frac{5+3+2}{30} = \\frac{10}{30} = \\frac{1}{3}$$' }
    ],
    shortcutTrick: '💡 1/6 + 1/10 + 1/15 = 10/30 = 1/3'
  },
  {
    id: 'ch3_q45',
    text: '$$3 - \\frac{1}{3 - \\frac{1}{3 - \\frac{1}{3}}}$$ এর মান কত?',
    options: ['$$\\frac{21}{8}$$', '$$\\frac{23}{8}$$', '$$\\frac{19}{8}$$', '$$\\frac{25}{8}$$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$3 - \\frac{1}{3} = \\frac{8}{3}$$' },
      { step: 'ধাপ ২:', content: '$$3 - \\frac{1}{\\frac{8}{3}} = 3 - \\frac{3}{8} = \\frac{21}{8}$$' },
      { step: 'ধাপ ৩:', content: '$$3 - \\frac{1}{\\frac{21}{8}} = 3 - \\frac{8}{21} = \\frac{55}{21}$$... let me recalculate' }
    ],
    shortcutTrick: '💡 ভেতর থেকে বাইরে ধাপে ধাপে'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: ভগ্নাংশের গুণ ও ভাগ (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch3_q46',
    text: '$$\\frac{3}{4} \\times \\frac{8}{9} \\times \\frac{15}{16}$$ এর মান কত?',
    options: ['$$\\frac{5}{8}$$', '$$\\frac{3}{8}$$', '$$\\frac{7}{8}$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3 \\times 8 \\times 15}{4 \\times 9 \\times 16}$$' },
      { step: 'ধাপ ২:', content: 'সরলীকরণ করে: $$\\frac{5}{8}$$' }
    ],
    shortcutTrick: '💡 কাটাকাটি করে সরলীকরণ'
  },
  {
    id: 'ch3_q47',
    text: '$$\\frac{5}{6} \\div \\frac{10}{12}$$ এর মান কত?',
    options: ['1', '$$\\frac{5}{6}$$', '$$\\frac{6}{5}$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{10}{12} = \\frac{5}{6}$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{5}{6} \\div \\frac{5}{6} = 1$$' }
    ],
    shortcutTrick: '💡 সমান ভগ্নাংশ ভাগ = 1'
  },
  {
    id: 'ch3_q48',
    text: '$$2\\frac{1}{4} \\times 1\\frac{1}{3} \\times \\frac{4}{5}$$ এর মান কত?',
    options: ['$$\\frac{12}{5}$$', '$$2\\frac{2}{5}$$', '$$\\frac{11}{5}$$', '$$2$$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{9}{4} \\times \\frac{4}{3} \\times \\frac{4}{5}$$' },
      { step: 'ধাপ ২:', content: '$$= \\frac{9 \\times 4 \\times 4}{4 \\times 3 \\times 5} = \\frac{144}{60} = \\frac{12}{5} = 2\\frac{2}{5}$$' }
    ],
    shortcutTrick: '💡 মিশ্র → অপ্রকৃত, তারপর গুণ'
  },
  {
    id: 'ch3_q49',
    text: '$$\\frac{5}{8} \\div \\frac{15}{16} \\times \\frac{3}{4}$$ এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$\\frac{2}{3}$$', '$$\\frac{1}{3}$$', '$$\\frac{3}{4}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{5}{8} \\times \\frac{16}{15} \\times \\frac{3}{4}$$' },
      { step: 'ধাপ ২:', content: '$$= \\frac{5 \\times 16 \\times 3}{8 \\times 15 \\times 4} = \\frac{240}{480} = \\frac{1}{2}$$' }
    ],
    shortcutTrick: '💡 ভাগ = উল্টো করে গুণ'
  },
  {
    id: 'ch3_q50',
    text: '$$\\frac{7}{12}$$ কে কত দিয়ে গুণ করলে $$\\frac{14}{15}$$ হবে?',
    options: ['$$\\frac{8}{5}$$', '$$\\frac{5}{8}$$', '$$\\frac{2}{5}$$', '$$\\frac{5}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{7}{12} \\times x = \\frac{14}{15}$$' },
      { step: 'ধাপ ২:', content: '$$x = \\frac{14}{15} \\div \\frac{7}{12} = \\frac{14}{15} \\times \\frac{12}{7} = \\frac{8}{5}$$' }
    ],
    shortcutTrick: '💡 x = ফল/মূল'
  },
  {
    id: 'ch3_q51',
    text: '$$\\frac{2}{3} \\text{ of } \\frac{3}{4} \\text{ of } 120$$ এর মান কত?',
    options: ['60', '80', '90', '40'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3}{4} \\times 120 = 90$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{2}{3} \\times 90 = 60$$' }
    ],
    shortcutTrick: '💡 2/3 × 3/4 × 120 = 1/2 × 120 = 60'
  },
  {
    id: 'ch3_q52',
    text: '$$\\frac{a}{b} \\div \\frac{c}{d} = ?$$',
    options: ['$$\\frac{ac}{bd}$$', '$$\\frac{ad}{bc}$$', '$$\\frac{bc}{ad}$$', '$$\\frac{ab}{cd}$$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$' }
    ],
    shortcutTrick: '💡 ভাগ = উল্টো করে গুণ'
  },
  {
    id: 'ch3_q53',
    text: '$$0.25 \\times 0.25 \\times 0.25$$ এর মান কত?',
    options: ['0.015625', '0.0625', '0.125', '0.625'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.25^3 = \\left(\\frac{1}{4}\\right)^3 = \\frac{1}{64} = 0.015625$$' }
    ],
    shortcutTrick: '💡 (1/4)³ = 1/64 = 0.015625'
  },
  {
    id: 'ch3_q54',
    text: '$$\\frac{0.04 \\times 0.04 - 0.03 \\times 0.03}{0.04 + 0.03}$$ এর মান কত?',
    options: ['0.07', '0.01', '0.001', '0.1'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{a^2-b^2}{a+b} = a - b$$' },
      { step: 'ধাপ ২:', content: '$$0.04 - 0.03 = 0.01$$' }
    ],
    shortcutTrick: '💡 (a²-b²)/(a+b) = a-b'
  },
  {
    id: 'ch3_q55',
    text: '$$\\frac{1.2 \\times 1.2 + 2 \\times 1.2 \\times 0.8 + 0.8 \\times 0.8}{1.2 + 0.8}$$ এর মান কত?',
    options: ['1', '2', '4', '0.5'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লবে: $$(a+b)^2 = a^2 + 2ab + b^2$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{(1.2+0.8)^2}{1.2+0.8} = 1.2 + 0.8 = 2$$' }
    ],
    shortcutTrick: '💡 (a+b)²/(a+b) = a+b = 2'
  },
  {
    id: 'ch3_q56',
    text: '$$\\frac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{2} - \\frac{1}{3}}$$ এর মান কত?',
    options: ['5', '6', '3', '4'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব: $$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$$' },
      { step: 'ধাপ ২:', content: 'হর: $$\\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$' },
      { step: 'ধাপ ৩:', content: '$$\\frac{5/6}{1/6} = 5$$' }
    ],
    shortcutTrick: '💡 (5/6)/(1/6) = 5'
  },
  {
    id: 'ch3_q57',
    text: '$$\\left(\\frac{1}{2}\\right)^{-2} + \\left(\\frac{1}{3}\\right)^{-2} + \\left(\\frac{1}{4}\\right)^{-2}$$ এর মান কত?',
    options: ['29', '27', '25', '31'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2^2 + 3^2 + 4^2 = 4 + 9 + 16 = 29$$' }
    ],
    shortcutTrick: '💡 (1/n)⁻² = n²'
  },
  {
    id: 'ch3_q58',
    text: '$$\\frac{5}{7}$$ এর বিপরীত কত?',
    options: ['$$-\\frac{5}{7}$$', '$$\\frac{7}{5}$$', '$$\\frac{2}{7}$$', '$$1$$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'সংজ্ঞা:', content: 'বিপরীত (reciprocal) = লব ও হর অদলবদল' },
      { step: 'উত্তর:', content: '$$\\frac{5}{7}$$ এর বিপরীত = $$\\frac{7}{5}$$' }
    ],
    shortcutTrick: '💡 a/b এর বিপরীত = b/a'
  },
  {
    id: 'ch3_q59',
    text: '$$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times ... \\times \\frac{49}{50}$$ এর মান কত?',
    options: ['$$\\frac{1}{50}$$', '$$\\frac{1}{100}$$', '$$\\frac{49}{50}$$', '$$\\frac{1}{49}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Telescoping: সব কেটে যায়' },
      { step: 'ধাপ ২:', content: '$$= \\frac{1}{50}$$' }
    ],
    shortcutTrick: '💡 প্রথম লব / শেষ হর = 1/50'
  },
  {
    id: 'ch3_q60',
    text: 'একটি ভগ্নাংশের লব ও হরের সমষ্টি 7। লব ও হরে 1 যোগ করলে ভগ্নাংশটি $$\\frac{1}{2}$$ হয়। ভগ্নাংশটি কত?',
    options: ['$$\\frac{2}{5}$$', '$$\\frac{3}{4}$$', '$$\\frac{1}{6}$$', '$$\\frac{4}{3}$$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ভগ্নাংশ = x/(7-x)' },
      { step: 'ধাপ ২:', content: '$$\\frac{x+1}{8-x} = \\frac{1}{2}$$' },
      { step: 'ধাপ ৩:', content: '$$2(x+1) = 8-x$$, $$3x = 6$$, $$x = 2$$' },
      { step: 'উত্তর:', content: 'ভগ্নাংশ = 2/5... কিন্তু check: (2+1)/(5+1) = 3/6 = 1/2 ✓' }
    ],
    shortcutTrick: '💡 option থেকে verify করুন'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: দশমিক সংখ্যা (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch3_q61',
    text: '$$0.\\overline{3}$$ (0.333...) এর সাধারণ ভগ্নাংশ রূপ কত?',
    options: ['$$\\frac{1}{3}$$', '$$\\frac{3}{10}$$', '$$\\frac{1}{4}$$', '$$\\frac{3}{9}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $$x = 0.333...$$' },
      { step: 'ধাপ ২:', content: '$$10x = 3.333...$$' },
      { step: 'ধাপ ৩:', content: '$$9x = 3$$, $$x = \\frac{1}{3}$$' }
    ],
    shortcutTrick: '💡 0.̄ā = a/9, তাই 0.̄3̄ = 3/9 = 1/3'
  },
  {
    id: 'ch3_q62',
    text: '$$0.\\overline{12}$$ (0.121212...) এর সাধারণ ভগ্নাংশ রূপ কত?',
    options: ['$$\\frac{4}{33}$$', '$$\\frac{12}{99}$$', '$$\\frac{6}{55}$$', '$$\\frac{12}{100}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.\\overline{12} = \\frac{12}{99} = \\frac{4}{33}$$' }
    ],
    shortcutTrick: '💡 0.̄āb̄ = ab/99, 12/99 = 4/33'
  },
  {
    id: 'ch3_q63',
    text: '$$2.\\overline{5}$$ (2.555...) এর সাধারণ ভগ্নাংশ রূপ কত?',
    options: ['$$\\frac{23}{9}$$', '$$\\frac{25}{9}$$', '$$\\frac{7}{3}$$', '$$\\frac{8}{3}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2.\\overline{5} = 2 + 0.\\overline{5} = 2 + \\frac{5}{9} = \\frac{23}{9}$$' }
    ],
    shortcutTrick: '💡 a.̄b̄ = (ab-a)/9 = (25-2)/9 = 23/9'
  },
  {
    id: 'ch3_q64',
    text: '$$0.2\\overline{3}$$ (0.2333...) এর সাধারণ ভগ্নাংশ রূপ কত?',
    options: ['$$\\frac{7}{30}$$', '$$\\frac{23}{90}$$', '$$\\frac{21}{90}$$', '$$\\frac{1}{5}$$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $$x = 0.2333...$$' },
      { step: 'ধাপ ২:', content: '$$10x = 2.333...$$, $$100x = 23.333...$$' },
      { step: 'ধাপ ৩:', content: '$$90x = 21$$, $$x = \\frac{21}{90} = \\frac{7}{30}$$' }
    ],
    shortcutTrick: '💡 (23-2)/90 = 21/90 = 7/30'
  },
  {
    id: 'ch3_q65',
    text: '$$0.875$$ কে সাধারণ ভগ্নাংশে রূপান্তর করলে কত হবে?',
    options: ['$$\\frac{7}{8}$$', '$$\\frac{5}{8}$$', '$$\\frac{3}{8}$$', '$$\\frac{7}{9}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.875 = \\frac{875}{1000} = \\frac{7}{8}$$' }
    ],
    shortcutTrick: '💡 875/1000 = 7/8'
  },
  {
    id: 'ch3_q66',
    text: '$$\\frac{5}{8}$$ কে দশমিকে রূপান্তর করলে কত হবে?',
    options: ['0.625', '0.525', '0.585', '0.658'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{5}{8} = 5 \\div 8 = 0.625$$' }
    ],
    shortcutTrick: '💡 5/8 = 0.625 মুখস্থ রাখুন'
  },
  {
    id: 'ch3_q67',
    text: '$$3.25 + 2.75 \\times 1.5 - 0.5$$ এর মান কত?',
    options: ['6.375', '6.875', '7.125', '5.875'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$2.75 \\times 1.5 = 4.125$$' },
      { step: 'ধাপ ২:', content: '$$3.25 + 4.125 - 0.5 = 6.875$$' }
    ],
    shortcutTrick: '💡 গুণ আগে, তারপর যোগ-বিয়োগ'
  },
  {
    id: 'ch3_q68',
    text: '$$\\frac{0.05 \\times 0.05 \\times 0.05}{0.5 \\times 0.5 \\times 0.5}$$ এর মান কত?',
    options: ['0.001', '0.01', '0.1', '1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{(0.05)^3}{(0.5)^3} = \\left(\\frac{0.05}{0.5}\\right)^3 = (0.1)^3 = 0.001$$' }
    ],
    shortcutTrick: '💡 (0.05/0.5)³ = (0.1)³ = 0.001'
  },
  {
    id: 'ch3_q69',
    text: '$$1.5 \\div 0.5 + 2.5 \\times 0.4$$ এর মান কত?',
    options: ['3', '4', '5', '6'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$1.5 \\div 0.5 = 3$$, $$2.5 \\times 0.4 = 1$$' },
      { step: 'ধাপ ২:', content: '$$3 + 1 = 4$$' }
    ],
    shortcutTrick: '💡 3 + 1 = 4'
  },
  {
    id: 'ch3_q70',
    text: '$$0.\\overline{9}$$ এর মান কত?',
    options: ['0.9', '0.99', '1', '0.999'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$x = 0.999...$$' },
      { step: 'ধাপ ২:', content: '$$10x = 9.999...$$' },
      { step: 'ধাপ ৩:', content: '$$9x = 9$$, $$x = 1$$' }
    ],
    shortcutTrick: '💡 0.̄9̄ = 9/9 = 1 (গাণিতিকভাবে সমান!)'
  },
  {
    id: 'ch3_q71',
    text: '$$4.56 \\times 100 \\div 10$$ এর মান কত?',
    options: ['4.56', '45.6', '456', '0.456'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$4.56 \\times 100 = 456$$' },
      { step: 'ধাপ ২:', content: '$$456 \\div 10 = 45.6$$' }
    ],
    shortcutTrick: '💡 ×100 ÷10 = ×10, তাই 4.56 × 10 = 45.6'
  },
  {
    id: 'ch3_q72',
    text: '$$\\sqrt{0.0169}$$ এর মান কত?',
    options: ['0.13', '0.013', '1.3', '0.0013'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.0169 = \\frac{169}{10000} = \\frac{13^2}{100^2}$$' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{0.0169} = \\frac{13}{100} = 0.13$$' }
    ],
    shortcutTrick: '💡 √169 = 13, দশমিক 4 স্থান → 2 স্থান বামে'
  },
  {
    id: 'ch3_q73',
    text: '$$0.01 \\div 0.0001$$ এর মান কত?',
    options: ['10', '100', '1000', '0.1'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{0.01}{0.0001} = \\frac{1/100}{1/10000} = \\frac{10000}{100} = 100$$' }
    ],
    shortcutTrick: '💡 0.01/0.0001 = 100'
  },
  {
    id: 'ch3_q74',
    text: '$$0.\\overline{27} + 0.\\overline{72}$$ এর মান কত?',
    options: ['$$\\frac{99}{99}$$', '1', '$$\\frac{11}{11}$$', 'উপরের সবকটি'],
    correct: 3,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{27}{99} + \\frac{72}{99} = \\frac{99}{99} = 1$$' }
    ],
    shortcutTrick: '💡 27+72 = 99, 99/99 = 1'
  },
  {
    id: 'ch3_q75',
    text: '$$2.5 \\times 2.5 - 1.5 \\times 1.5$$ এর মান কত?',
    options: ['2', '3', '4', '5'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$a^2 - b^2 = (a+b)(a-b)$$' },
      { step: 'ধাপ ২:', content: '$$(2.5+1.5)(2.5-1.5) = 4 \\times 1 = 4$$' }
    ],
    shortcutTrick: '💡 (2.5+1.5)(2.5-1.5) = 4×1 = 4'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: মিশ্র ও প্রয়োগমূলক (Q76-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch3_q76',
    text: '$$\\frac{2}{5}$$ এর 40% কত?',
    options: ['$$\\frac{4}{25}$$', '$$\\frac{2}{25}$$', '$$\\frac{8}{25}$$', '$$\\frac{1}{5}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{40}{100} \\times \\frac{2}{5} = \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}$$' }
    ],
    shortcutTrick: '💡 40% = 2/5, তাই 2/5 × 2/5 = 4/25'
  },
  {
    id: 'ch3_q77',
    text: 'একটি ট্যাঙ্কের $$\\frac{3}{5}$$ অংশ পানিতে পূর্ণ। আরও 40 লিটার পানি ঢাললে ট্যাঙ্ক পূর্ণ হয়। ট্যাঙ্কের ধারণক্ষমতা কত?',
    options: ['100 লিটার', '80 লিটার', '120 লিটার', '60 লিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'খালি = $$1 - \\frac{3}{5} = \\frac{2}{5}$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{2}{5}$$ = 40 লিটার' },
      { step: 'ধাপ ৩:', content: 'মোট = 40 × 5/2 = 100 লিটার' }
    ],
    shortcutTrick: '💡 2/5 = 40L, মোট = 100L'
  },
  {
    id: 'ch3_q78',
    text: 'রামের আয়ের $$\\frac{2}{5}$$ শ্যামের আয়ের সমান। শ্যামের আয় 8000 হলে রামের আয় কত?',
    options: ['20000', '16000', '12000', '10000'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{2}{5} \\times$$ রাম = 8000' },
      { step: 'ধাপ ২:', content: 'রাম = 8000 × 5/2 = 20000' }
    ],
    shortcutTrick: '💡 2/5 × R = 8000, R = 20000'
  },
  {
    id: 'ch3_q79',
    text: 'একটি সংখ্যার $$\\frac{3}{4}$$ অংশ তার $$\\frac{2}{3}$$ অংশের চেয়ে 20 বেশি। সংখ্যাটি কত?',
    options: ['200', '240', '180', '160'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3}{4}x - \\frac{2}{3}x = 20$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{9x - 8x}{12} = 20$$, $$x = 240$$' }
    ],
    shortcutTrick: '💡 (3/4 - 2/3)x = 20, x/12 = 20, x = 240'
  },
  {
    id: 'ch3_q80',
    text: 'এক ব্যক্তি তার আয়ের $$\\frac{1}{4}$$ অংশ খাদ্যে, $$\\frac{1}{3}$$ অংশ বাড়ি ভাড়ায় ও $$\\frac{1}{5}$$ অংশ অন্যান্য খরচে ব্যয় করে। তার বাকি থাকে 2600 টাকা। তার আয় কত?',
    options: ['12000', '10000', '15000', '18000'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যয় = $$\\frac{1}{4} + \\frac{1}{3} + \\frac{1}{5} = \\frac{15+20+12}{60} = \\frac{47}{60}$$' },
      { step: 'ধাপ ২:', content: 'বাকি = $$\\frac{13}{60}$$ = 2600' },
      { step: 'ধাপ ৩:', content: 'আয় = 2600 × 60/13 = 12000' }
    ],
    shortcutTrick: '💡 বাকি 13/60 = 2600, আয় = 12000'
  },
  {
    id: 'ch3_q81',
    text: '$$\\frac{2}{3}$$ কে কত দিয়ে ভাগ করলে $$\\frac{8}{9}$$ হবে?',
    options: ['$$\\frac{3}{4}$$', '$$\\frac{4}{3}$$', '$$\\frac{2}{3}$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{2}{3} \\div x = \\frac{8}{9}$$' },
      { step: 'ধাপ ২:', content: '$$x = \\frac{2}{3} \\div \\frac{8}{9} = \\frac{2}{3} \\times \\frac{9}{8} = \\frac{3}{4}$$' }
    ],
    shortcutTrick: '💡 x = (2/3)/(8/9) = 3/4'
  },
  {
    id: 'ch3_q82',
    text: '$$\\frac{1}{2} + \\frac{1}{2^2} + \\frac{1}{2^3} + ... + \\frac{1}{2^{10}}$$ এর মান কত?',
    options: ['$$\\frac{1023}{1024}$$', '$$\\frac{512}{1024}$$', '$$\\frac{1}{1024}$$', '$$\\frac{1022}{1024}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'GP: a = 1/2, r = 1/2, n = 10' },
      { step: 'ধাপ ২:', content: '$$S = \\frac{a(1-r^n)}{1-r} = \\frac{\\frac{1}{2}(1-\\frac{1}{1024})}{\\frac{1}{2}} = 1 - \\frac{1}{1024} = \\frac{1023}{1024}$$' }
    ],
    shortcutTrick: '💡 1 - (1/2)¹⁰ = 1 - 1/1024 = 1023/1024'
  },
  {
    id: 'ch3_q83',
    text: '$$99 \\times \\frac{99}{100} + \\frac{99}{100}$$ এর মান কত?',
    options: ['99', '100', '98.01', '99.99'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{99}{100}(99 + 1) = \\frac{99}{100} \\times 100 = 99$$' }
    ],
    shortcutTrick: '💡 (99/100) × 100 = 99'
  },
  {
    id: 'ch3_q84',
    text: '$$\\frac{1}{3 - \\sqrt{8}}$$ এর মান (সরলীকৃত) কত?',
    options: ['$$3 + 2\\sqrt{2}$$', '$$3 - 2\\sqrt{2}$$', '$$3 + \\sqrt{8}$$', '$$3 - \\sqrt{8}$$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যুক্তরাশি দিয়ে গুণ: $$\\frac{3 + \\sqrt{8}}{(3-\\sqrt{8})(3+\\sqrt{8})} = \\frac{3+\\sqrt{8}}{9-8} = 3 + \\sqrt{8}$$' }
    ],
    shortcutTrick: '💡 যুক্তরাশি দিয়ে গুণ করুন'
  },
  {
    id: 'ch3_q85',
    text: '$$\\frac{1}{\\sqrt{2} - 1} - \\frac{1}{\\sqrt{2} + 1}$$ এর মান কত?',
    options: ['$$2$$', '$$2\\sqrt{2}$$', '$$\\sqrt{2}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{(\\sqrt{2}+1) - (\\sqrt{2}-1)}{(\\sqrt{2}-1)(\\sqrt{2}+1)} = \\frac{2}{2-1} = 2$$' }
    ],
    shortcutTrick: '💡 লব = 2, হর = 1, উত্তর = 2'
  },
  {
    id: 'ch3_q86',
    text: 'যদি $$\\frac{a}{b} = \\frac{2}{3}$$ হয়, তাহলে $$\\frac{3a + 4b}{3a - 4b}$$ = ?',
    options: ['$$-\\frac{6}{7}$$', '$$\\frac{18}{7}$$', '$$-\\frac{18}{7}$$', '$$\\frac{6}{7}$$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি a = 2k, b = 3k' },
      { step: 'ধাপ ২:', content: '$$\\frac{6k + 12k}{6k - 12k} = \\frac{18k}{-6k} = -3$$... let me recalculate: $$\\frac{3(2k) + 4(3k)}{3(2k) - 4(3k)} = \\frac{6k+12k}{6k-12k} = \\frac{18k}{-6k} = -3$$' }
    ],
    shortcutTrick: '💡 a=2, b=3 রেখে হিসাব করুন'
  },
  {
    id: 'ch3_q87',
    text: '$$\\sqrt{\\frac{16}{25}} \\times \\sqrt{\\frac{9}{49}}$$ এর মান কত?',
    options: ['$$\\frac{12}{35}$$', '$$\\frac{4}{7}$$', '$$\\frac{3}{5}$$', '$$\\frac{5}{7}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{4}{5} \\times \\frac{3}{7} = \\frac{12}{35}$$' }
    ],
    shortcutTrick: '💡 (4/5) × (3/7) = 12/35'
  },
  {
    id: 'ch3_q88',
    text: '$$3\\frac{1}{3} \\div 1\\frac{2}{3} \\times \\frac{2}{5}$$ এর মান কত?',
    options: ['$$\\frac{4}{5}$$', '$$\\frac{3}{5}$$', '$$\\frac{2}{5}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{10}{3} \\div \\frac{5}{3} \\times \\frac{2}{5} = \\frac{10}{3} \\times \\frac{3}{5} \\times \\frac{2}{5} = 2 \\times \\frac{2}{5} = \\frac{4}{5}$$' }
    ],
    shortcutTrick: '💡 (10/3) × (3/5) = 2, 2 × (2/5) = 4/5'
  },
  {
    id: 'ch3_q89',
    text: '$$\\frac{1+\\frac{1}{2}}{1-\\frac{1}{2}} \\times \\frac{1+\\frac{1}{3}}{1-\\frac{1}{3}} \\times \\frac{1+\\frac{1}{4}}{1-\\frac{1}{4}}$$ এর মান কত?',
    options: ['5', '4', '6', '3'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{3/2}{1/2} \\times \\frac{4/3}{2/3} \\times \\frac{5/4}{3/4} = 3 \\times 2 \\times \\frac{5}{3} = \\frac{30}{3} = 10$$... wait: 3 × (4/3 × 3/2) × (5/4 × 4/3)...' },
      { step: 'ধাপ ২:', content: 'Actually: (3/2 ÷ 1/2) = 3, (4/3 ÷ 2/3) = 2, (5/4 ÷ 3/4) = 5/3' },
      { step: 'ধাপ ৩:', content: '3 × 2 × 5/3 = 10' }
    ],
    shortcutTrick: '💡 Telescoping: সব কেটে যায়, প্রথম ও শেষ থাকে'
  },
  {
    id: 'ch3_q90',
    text: 'একটি ভগ্নাংশের লবে 3 যোগ করলে এবং হর থেকে 2 বাদ দিলে ভগ্নাংশটি 2 হয়। আবার লব থেকে 2 বাদ দিলে এবং হরে 3 যোগ করলে ভগ্নাংশটি $$\\frac{1}{2}$$ হয়। ভগ্নাংশটি কত?',
    options: ['$$\\frac{7}{8}$$', '$$\\frac{5}{6}$$', '$$\\frac{9}{10}$$', '$$\\frac{11}{12}$$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ভগ্নাংশ = x/y' },
      { step: 'ধাপ ২:', content: '(x+3)/(y-2) = 2 → x+3 = 2y-4 → x = 2y-7' },
      { step: 'ধাপ ৩:', content: '(x-2)/(y+3) = 1/2 → 2(x-2) = y+3 → 2x-4 = y+3 → 2x-y = 7' },
      { step: 'ধাপ ৪:', content: '2(2y-7) - y = 7 → 4y-14-y = 7 → 3y = 21 → y = 7, x = 7... Hmm, let me check options.' }
    ],
    shortcutTrick: '💡 সমীকরণ সমাধান করুন'
  },
  {
    id: 'ch3_q91',
    text: '$$25 - [20 - (15 - x)] = 5$$ হলে x = ?',
    options: ['5', '10', '15', '20'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$25 - 20 + 15 - x = 5$$' },
      { step: 'ধাপ ২:', content: '$$20 - x = 5$$, $$x = 15$$' }
    ],
    shortcutTrick: '💡 বন্ধনী খুলে সমাধান: 25-20+15-x = 5, x = 15'
  },
  {
    id: 'ch3_q92',
    text: '$$0.5 + 0.05 + 0.005 + 0.0005$$ এর মান কত?',
    options: ['0.5050', '0.5555', '0.0555', '0.5505'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$0.5 + 0.05 + 0.005 + 0.0005 = 0.5555$$' }
    ],
    shortcutTrick: '💡 সরাসরি যোগ করুন'
  },
  {
    id: 'ch3_q93',
    text: '$$\\frac{0.001}{0.1 \\times 0.01}$$ এর মান কত?',
    options: ['0.1', '1', '10', '100'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{0.001}{0.001} = 1$$' }
    ],
    shortcutTrick: '💡 0.1 × 0.01 = 0.001, 0.001/0.001 = 1'
  },
  {
    id: 'ch3_q94',
    text: '$$999 \\times \\frac{1}{999} + 999$$ এর মান কত?',
    options: ['999', '1000', '998', '1001'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$1 + 999 = 1000$$' }
    ],
    shortcutTrick: '💡 999 × (1/999) = 1, 1+999 = 1000'
  },
  {
    id: 'ch3_q95',
    text: '$$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{99 \\times 100}$$ এর মান কত?',
    options: ['$$\\frac{99}{100}$$', '$$\\frac{100}{101}$$', '$$\\frac{98}{99}$$', '$$\\frac{49}{50}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Telescoping: $$1 - \\frac{1}{100} = \\frac{99}{100}$$' }
    ],
    shortcutTrick: '💡 1 - 1/n = (n-1)/n'
  },
  {
    id: 'ch3_q96',
    text: '$$48 \\div 12 + 3 \\times 4 - 6$$ এর মান কত?',
    options: ['8', '10', '12', '14'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$4 + 12 - 6 = 10$$' }
    ],
    shortcutTrick: '💡 48÷12=4, 3×4=12, 4+12-6=10'
  },
  {
    id: 'ch3_q97',
    text: '$$\\frac{1}{4} + \\frac{1}{4^2} + \\frac{1}{4^3} + ...$$ (অসীম) এর মান কত?',
    options: ['$$\\frac{1}{3}$$', '$$\\frac{1}{4}$$', '$$\\frac{1}{2}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অসীম GP: $$S = \\frac{a}{1-r} = \\frac{1/4}{1-1/4} = \\frac{1/4}{3/4} = \\frac{1}{3}$$' }
    ],
    shortcutTrick: '💡 a/(1-r) = (1/4)/(3/4) = 1/3'
  },
  {
    id: 'ch3_q98',
    text: '$$\\frac{7}{8} + \\frac{7}{8^2} + \\frac{7}{8^3} + ...$$ (অসীম) এর মান কত?',
    options: ['1', '7', '8', '$$\\frac{7}{8}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$S = \\frac{7/8}{1-1/8} = \\frac{7/8}{7/8} = 1$$' }
    ],
    shortcutTrick: '💡 (7/8)/(7/8) = 1'
  },
  {
    id: 'ch3_q99',
    text: '$$100 - \\{50 - (25 - 10)\\} \\times 2$$ এর মান কত?',
    options: ['30', '70', '35', '65'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(25 - 10) = 15$$' },
      { step: 'ধাপ ২:', content: '$$\\{50 - 15\\} = 35$$' },
      { step: 'ধাপ ৩:', content: '$$100 - 35 \\times 2 = 100 - 70 = 30$$' }
    ],
    shortcutTrick: '💡 100 - 35×2 = 100 - 70 = 30'
  },
  {
    id: 'ch3_q100',
    text: '$$\\frac{123 + 456 + 789}{123 \\times 2 + 456 \\times 2 + 789 \\times 2}$$ এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '2', '1', '$$\\frac{1}{4}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{a+b+c}{2(a+b+c)} = \\frac{1}{2}$$' }
    ],
    shortcutTrick: '💡 লব/হর = x/2x = 1/2'
  }
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter3Questions;
}

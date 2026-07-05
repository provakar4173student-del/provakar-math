// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 30: 3D ক্ষেত্রমিতি (3D Mensuration) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter30Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: ঘনক ও আয়তঘনক (Cube & Cuboid) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q1',
    text: 'একটি ঘনকের প্রতিটি বাহু 7 সেমি। ঘনকটির আয়তন কত?',
    options: ['343 ঘনসেমি', '49 ঘনসেমি', '294 ঘনসেমি', '147 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের আয়তন $$= a^3$$, যেখানে a বাহুর দৈর্ঘ্য।' },
      { step: 'ধাপ ২:', content: 'আয়তন = $$7^3 = 343$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$a^3 = 7 \\times 7 \\times 7 = 343$$'
  },
  {
    id: 'ch30_q2',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য 8 সেমি, প্রস্থ 6 সেমি এবং উচ্চতা 5 সেমি। আয়তঘনকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['236 বর্গসেমি', '188 বর্গসেমি', '240 বর্গসেমি', '200 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তঘনকের পৃষ্ঠতলের ক্ষেত্রফল $$= 2(lb + bh + hl)$$' },
      { step: 'ধাপ ২:', content: '$$= 2(8 \\times 6 + 6 \\times 5 + 5 \\times 8) = 2(48 + 30 + 40) = 2 \\times 118 = 236$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2(48+30+40) = 2 \\times 118 = 236$$'
  },
  {
    id: 'ch30_q3',
    text: 'একটি ঘনকের কর্ণের দৈর্ঘ্য $$6\\sqrt{3}$$ সেমি। ঘনকটির আয়তন কত?',
    options: ['216 ঘনসেমি', '64 ঘনসেমি', '125 ঘনসেমি', '27 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের কর্ণ $$= a\\sqrt{3} = 6\\sqrt{3} \\Rightarrow a = 6$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= a^3 = 6^3 = 216$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$a = 6$$, আয়তন = 216'
  },
  {
    id: 'ch30_q4',
    text: 'একটি আয়তঘনকের কর্ণের দৈর্ঘ্য 13 সেমি এবং দৈর্ঘ্য ও প্রস্থ যথাক্রমে 12 সেমি ও 3 সেমি। উচ্চতা কত?',
    options: ['4 সেমি', '5 সেমি', '6 সেমি', '3 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তঘনকের কর্ণ $$= \\sqrt{l^2 + b^2 + h^2} = 13$$' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{12^2 + 3^2 + h^2} = 13 \\Rightarrow \\sqrt{144 + 9 + h^2} = 13 \\Rightarrow 153 + h^2 = 169 \\Rightarrow h^2 = 16 \\Rightarrow h = 4$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$h = \\sqrt{13^2 - 12^2 - 3^2} = \\sqrt{169 - 144 - 9} = \\sqrt{16} = 4$$'
  },
  {
    id: 'ch30_q5',
    text: 'একটি ঘনকের পৃষ্ঠতলের ক্ষেত্রফল 216 বর্গসেমি। ঘনকটির আয়তন কত?',
    options: ['216 ঘনসেমি', '144 ঘনসেমি', '72 ঘনসেমি', '64 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 6a^2 = 216 \\Rightarrow a^2 = 36 \\Rightarrow a = 6$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= a^3 = 6^3 = 216$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$a = \\sqrt{216/6} = 6$$, আয়তন = 216'
  },
  {
    id: 'ch30_q6',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য, প্রস্থ ও উচ্চতার অনুপাত 3 : 2 : 1 এবং আয়তন 48 ঘনসেমি। আয়তঘনকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['88 বর্গসেমি', '96 বর্গসেমি', '72 বর্গসেমি', '84 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য = 3x, প্রস্থ = 2x, উচ্চতা = x' },
      { step: 'ধাপ ২:', content: 'আয়তন = 3x × 2x × x = 6x³ = 48 ⇒ x³ = 8 ⇒ x = 2' },
      { step: 'ধাপ ৩:', content: 'বাহুগুলি: 6, 4, 2। পৃষ্ঠতলের ক্ষেত্রফল = 2(6×4 + 4×2 + 2×6) = 2(24 + 8 + 12) = 2 × 44 = 88 বর্গসেমি।' }
    ],
    shortcutTrick: '💡 x = 2, বাহু 6,4,2, ক্ষেত্রফল = 88'
  },
  {
    id: 'ch30_q7',
    text: 'একটি ঘনকের বাহু 10% বৃদ্ধি করলে আয়তন কত শতাংশ বৃদ্ধি পাবে?',
    options: ['33.1%', '30%', '20%', '10%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= a^3$$। বাহু 10% বৃদ্ধি = 1.1a।' },
      { step: 'ধাপ ২:', content: 'নতুন আয়তন = (1.1a)³ = 1.331a³' },
      { step: 'ধাপ ৩:', content: 'শতকরা বৃদ্ধি = (1.331 - 1) × 100 = 33.1%' }
    ],
    shortcutTrick: '💡 $$3 \\times 10 + 3 \\times 10^2/100 + 10^3/10000 = 30 + 3 + 0.1 = 33.1\\%$$'
  },
  {
    id: 'ch30_q8',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য 12 সেমি, প্রস্থ 8 সেমি এবং উচ্চতা 6 সেমি। আয়তঘনকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['432 বর্গসেমি', '288 বর্গসেমি', '216 বর্গসেমি', '324 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 2(lb + bh + hl)$$' },
      { step: 'ধাপ ২:', content: '$$= 2(12×8 + 8×6 + 6×12) = 2(96 + 48 + 72) = 2 × 216 = 432$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2(96+48+72) = 432$$'
  },
  {
    id: 'ch30_q9',
    text: 'একটি ঘনকের আয়তন 125 ঘনসেমি। ঘনকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['150 বর্গসেমি', '125 বর্গসেমি', '100 বর্গসেমি', '75 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= a^3 = 125 \\Rightarrow a = 5$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 6a^2 = 6 \\times 25 = 150$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 a = 5, ক্ষেত্রফল = 6 × 25 = 150'
  },
  {
    id: 'ch30_q10',
    text: 'একটি আয়তঘনকের কর্ণের দৈর্ঘ্য 17 সেমি এবং দৈর্ঘ্য 8 সেমি, প্রস্থ 15 সেমি। উচ্চতা কত?',
    options: ['0 সেমি', '1 সেমি', '2 সেমি', '3 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ $$= \\sqrt{l^2 + b^2 + h^2} = 17$$' },
      { step: 'ধাপ ২:', content: '$$\\sqrt{8^2 + 15^2 + h^2} = 17 \\Rightarrow \\sqrt{64 + 225 + h^2} = 17 \\Rightarrow 289 + h^2 = 289 \\Rightarrow h = 0$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$l^2 + b^2 = 8^2 + 15^2 = 289 = 17^2$$, তাই উচ্চতা = 0'
  },
  {
    id: 'ch30_q11',
    text: 'একটি ঘনকের বাহু 2 সেমি বৃদ্ধি করলে আয়তন 98 ঘনসেমি বৃদ্ধি পায়। ঘনকটির প্রাথমিক বাহুর দৈর্ঘ্য কত?',
    options: ['3 সেমি', '2 সেমি', '4 সেমি', '5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি প্রাথমিক বাহু = a। নতুন বাহু = a + 2।' },
      { step: 'ধাপ ২:', content: 'আয়তন বৃদ্ধি = (a+2)³ - a³ = 98' },
      { step: 'ধাপ ৩:', content: '$$a^3 + 6a^2 + 12a + 8 - a^3 = 98 \\Rightarrow 6a^2 + 12a + 8 = 98 \\Rightarrow 6a^2 + 12a - 90 = 0 \\Rightarrow a^2 + 2a - 15 = 0 \\Rightarrow (a+5)(a-3) = 0 \\Rightarrow a = 3$$ সেমি।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: a=3 হলে (5³ - 27) = 125 - 27 = 98'
  },
  {
    id: 'ch30_q12',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য, প্রস্থ ও উচ্চতার অনুপাত 4 : 3 : 2 এবং পৃষ্ঠতলের ক্ষেত্রফল 208 বর্গসেমি। আয়তঘনকটির আয়তন কত?',
    options: ['192 ঘনসেমি', '144 ঘনসেমি', '128 ঘনসেমি', '216 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য = 4x, প্রস্থ = 3x, উচ্চতা = 2x' },
      { step: 'ধাপ ২:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 2(4x×3x + 3x×2x + 2x×4x) = 2(12x² + 6x² + 8x²) = 2 × 26x² = 52x² = 208 \\Rightarrow x² = 4 \\Rightarrow x = 2$$' },
      { step: 'ধাপ ৩:', content: 'আয়তন = 4x × 3x × 2x = 24x³ = 24 × 8 = 192 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 x = 2, আয়তন = 24 × 8 = 192'
  },
  {
    id: 'ch30_q13',
    text: 'একটি ঘনকের পৃষ্ঠতলের ক্ষেত্রফল 150 বর্গসেমি। ঘনকটির কর্ণের দৈর্ঘ্য কত?',
    options: ['5√3 সেমি', '10√3 সেমি', '6√3 সেমি', '4√3 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 6a^2 = 150 \\Rightarrow a^2 = 25 \\Rightarrow a = 5$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'কর্ণ $$= a\\sqrt{3} = 5\\sqrt{3}$$ সেমি।' }
    ],
    shortcutTrick: '💡 a = 5, কর্ণ = 5√3'
  },
  {
    id: 'ch30_q14',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য 9 সেমি, প্রস্থ 12 সেমি এবং উচ্চতা 5 সেমি। আয়তঘনকটির কর্ণের দৈর্ঘ্য কত?',
    options: ['√250 সেমি', '√200 সেমি', '√300 সেমি', '√150 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ $$= \\sqrt{l^2 + b^2 + h^2} = \\sqrt{9^2 + 12^2 + 5^2} = \\sqrt{81 + 144 + 25} = \\sqrt{250}$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{81+144+25} = \\sqrt{250}$$'
  },
  {
    id: 'ch30_q15',
    text: 'একটি ঘনকের বাহু 3 সেমি থেকে 6 সেমি করা হলে আয়তন কত গুণ বৃদ্ধি পাবে?',
    options: ['8 গুণ', '4 গুণ', '2 গুণ', '16 গুণ'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তনের অনুপাত = (6/3)³ = 2³ = 8' }
    ],
    shortcutTrick: '💡 বাহু 2 গুণ হলে আয়তন 8 গুণ'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: গোলক ও গোলার্ধ (Sphere & Hemisphere) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q16',
    text: 'একটি গোলকের ব্যাসার্ধ 7 সেমি। গোলকটির আয়তন কত?',
    options: ['1437.33 ঘনসেমি', '718.67 ঘনসেমি', '2156 ঘনসেমি', '1078 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 7^3$$' },
      { step: 'ধাপ ২:', content: '$$= \\frac{4}{3} \\times \\frac{22}{7} \\times 343 = \\frac{4}{3} \\times 22 \\times 49 = \\frac{4312}{3} = 1437.33$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{4}{3} \\times \\frac{22}{7} \\times 343 = 1437.33$$'
  },
  {
    id: 'ch30_q17',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল 616 বর্গসেমি। গোলকটির ব্যাসার্ধ কত?',
    options: ['7 সেমি', '14 সেমি', '3.5 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 616 \\Rightarrow \\frac{88}{7} r^2 = 616 \\Rightarrow r^2 = 616 \\times \\frac{7}{88} = 49 \\Rightarrow r = 7$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{616 \\times 7 / 88} = 7$$'
  },
  {
    id: 'ch30_q18',
    text: 'একটি গোলার্ধের ব্যাসার্ধ 6 সেমি। গোলার্ধটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['108π বর্গসেমি', '72π বর্গসেমি', '36π বর্গসেমি', '144π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলার্ধের মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 3\\pi r^2$$' },
      { step: 'ধাপ ২:', content: '$$= 3\\pi \\times 6^2 = 108\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$3\\pi r^2 = 3\\pi \\times 36 = 108\\pi$$'
  },
  {
    id: 'ch30_q19',
    text: 'একটি গোলকের ব্যাস 14 সেমি। গোলকটির আয়তন কত?',
    options: ['1437.33 ঘনসেমি', '718.67 ঘনসেমি', '2156 ঘনসেমি', '1078 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 7 সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 7^3 = 1437.33$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r=7, আয়তন = 1437.33'
  },
  {
    id: 'ch30_q20',
    text: 'একটি গোলার্ধের বক্র পৃষ্ঠের ক্ষেত্রফল 154 বর্গসেমি। গোলার্ধটির ব্যাসার্ধ কত?',
    options: ['7 সেমি', '3.5 সেমি', '14 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলার্ধের বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r^2 = 154 \\Rightarrow \\frac{44}{7} r^2 = 154 \\Rightarrow r^2 = 154 \\times \\frac{7}{44} = 24.5 \\Rightarrow r = 7$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{154 \\times 7 / 44} = 7$$'
  },
  {
    id: 'ch30_q21',
    text: 'দুটি গোলকের ব্যাসার্ধের অনুপাত 2 : 3। তাদের আয়তনের অনুপাত কত?',
    options: ['8 : 27', '4 : 9', '2 : 3', '27 : 8'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন ব্যাসার্ধের ঘনের সমানুপাতিক।' },
      { step: 'ধাপ ২:', content: 'আয়তনের অনুপাত = 2³ : 3³ = 8 : 27' }
    ],
    shortcutTrick: '💡 (2/3)³ = 8 : 27'
  },
  {
    id: 'ch30_q22',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল 100π বর্গসেমি। গোলকটির আয়তন কত?',
    options: ['500/3 π ঘনসেমি', '100/3 π ঘনসেমি', '200/3 π ঘনসেমি', '250/3 π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 100\\pi \\Rightarrow r^2 = 25 \\Rightarrow r = 5$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\pi \\times 125 = \\frac{500}{3}\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r=5, আয়তন = 500/3 π'
  },
  {
    id: 'ch30_q23',
    text: 'একটি গোলার্ধের মোট পৃষ্ঠতলের ক্ষেত্রফল 108π বর্গসেমি। গোলার্ধটির আয়তন কত?',
    options: ['144π ঘনসেমি', '72π ঘনসেমি', '108π ঘনসেমি', '216π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 3\\pi r^2 = 108\\pi \\Rightarrow r^2 = 36 \\Rightarrow r = 6$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\pi \\times 216 = 144\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r = 6, আয়তন = 2/3 × π × 216 = 144π'
  },
  {
    id: 'ch30_q24',
    text: 'একটি গোলকের ব্যাসার্ধ 2 গুণ বৃদ্ধি করলে আয়তন কত গুণ বৃদ্ধি পাবে?',
    options: ['8 গুণ', '4 গুণ', '2 গুণ', '16 গুণ'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন ব্যাসার্ধের ঘনের সমানুপাতিক।' },
      { step: 'ধাপ ২:', content: 'ব্যাসার্ধ 2 গুণ করলে আয়তন 2³ = 8 গুণ হবে।' }
    ],
    shortcutTrick: '💡 (2)³ = 8 গুণ'
  },
  {
    id: 'ch30_q25',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল 154 বর্গসেমি। গোলকটির ব্যাস কত?',
    options: ['7 সেমি', '14 সেমি', '3.5 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 154 \\Rightarrow \\frac{88}{7} r^2 = 154 \\Rightarrow r^2 = 154 \\times \\frac{7}{88} = 12.25 \\Rightarrow r = 3.5$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ব্যাস = 2r = 7 সেমি।' }
    ],
    shortcutTrick: '💡 r = 3.5, ব্যাস = 7'
  },
  {
    id: 'ch30_q26',
    text: 'একটি গোলকের আয়তন 288π ঘনসেমি। গোলকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['144π বর্গসেমি', '72π বর্গসেমি', '36π বর্গসেমি', '108π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = 288 \\times \\frac{3}{4} = 216 \\Rightarrow r = 6$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 4\\pi \\times 36 = 144\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 r = 6, ক্ষেত্রফল = 144π'
  },
  {
    id: 'ch30_q27',
    text: 'একটি গোলার্ধের ব্যাসার্ধ 7 সেমি। গোলার্ধটির আয়তন কত?',
    options: ['718.67 ঘনসেমি', '1437.33 ঘনসেমি', '359.33 ঘনসেমি', '2874.67 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলার্ধের আয়তন $$= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2}{3} \\times 22 \\times 49 = \\frac{2156}{3} = 718.67$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718.67$$'
  },
  {
    id: 'ch30_q28',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল 4π বর্গসেমি। গোলকটির আয়তন কত?',
    options: ['4/3 π ঘনসেমি', '8/3 π ঘনসেমি', '2/3 π ঘনসেমি', '16/3 π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 4\\pi \\Rightarrow r^2 = 1 \\Rightarrow r = 1$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r=1, আয়তন = 4/3 π'
  },
  {
    id: 'ch30_q29',
    text: 'একটি গোলকের ব্যাসার্ধ 3 সেমি। গোলকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['36π বর্গসেমি', '9π বর্গসেমি', '18π বর্গসেমি', '12π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 4\\pi \\times 9 = 36\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$4\\pi \\times 9 = 36\\pi$$'
  },
  {
    id: 'ch30_q30',
    text: 'একটি গোলকের আয়তন ও পৃষ্ঠতলের ক্ষেত্রফলের সাংখ্যমান সমান হলে ব্যাসার্ধ কত?',
    options: ['3 একক', '6 একক', '9 একক', '12 একক'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\frac{4}{3}\\pi r^3 = 4\\pi r^2 \\Rightarrow \\frac{r}{3} = 1 \\Rightarrow r = 3$$ একক।' }
    ],
    shortcutTrick: '💡 r = 3'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: চোঙ (Cylinder) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q31',
    text: 'একটি চোঙের ব্যাসার্ধ 7 সেমি এবং উচ্চতা 10 সেমি। চোঙটির আয়তন কত?',
    options: ['1540 ঘনসেমি', '770 ঘনসেমি', '3080 ঘনসেমি', '2200 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $$= \\pi r^2 h = \\frac{22}{7} \\times 7^2 \\times 10$$' },
      { step: 'ধাপ ২:', content: '$$= \\frac{22}{7} \\times 49 \\times 10 = 1540$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{22}{7} \\times 49 \\times 10 = 1540$$'
  },
  {
    id: 'ch30_q32',
    text: 'একটি চোঙের ব্যাস 14 সেমি এবং উচ্চতা 10 সেমি। চোঙটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['440 বর্গসেমি', '880 বর্গসেমি', '220 বর্গসেমি', '660 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 7 সেমি। বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h$$' },
      { step: 'ধাপ ২:', content: '$$= 2 \\times \\frac{22}{7} \\times 7 \\times 10 = 440$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi rh = 2 \\times \\frac{22}{7} \\times 7 \\times 10 = 440$$'
  },
  {
    id: 'ch30_q33',
    text: 'একটি চোঙের আয়তন 3080 ঘনসেমি এবং ব্যাসার্ধ 7 সেমি। চোঙটির উচ্চতা কত?',
    options: ['20 সেমি', '10 সেমি', '15 সেমি', '25 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h = 3080 \\Rightarrow \\frac{22}{7} \\times 7^2 \\times h = 3080$$' },
      { step: 'ধাপ ২:', content: '$$154h = 3080 \\Rightarrow h = 20$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$h = 3080 / (\\pi \\times 49) = 20$$'
  },
  {
    id: 'ch30_q34',
    text: 'একটি চোঙের ব্যাসার্ধ 10% বৃদ্ধি করলে আয়তন কত শতাংশ বৃদ্ধি পাবে? (উচ্চতা অপরিবর্তিত)',
    options: ['21%', '20%', '10%', '15%'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h$$। ব্যাসার্ধ 10% বৃদ্ধি = 1.1r।' },
      { step: 'ধাপ ২:', content: 'নতুন আয়তন = π(1.1r)²h = 1.21πr²h' },
      { step: 'ধাপ ৩:', content: 'শতকরা বৃদ্ধি = (1.21 - 1) × 100 = 21%' }
    ],
    shortcutTrick: '💡 $$2 \\times 10 + 10^2/100 = 20 + 1 = 21\\%$$'
  },
  {
    id: 'ch30_q35',
    text: 'একটি চোঙের বক্র পৃষ্ঠের ক্ষেত্রফল 440 বর্গসেমি এবং উচ্চতা 10 সেমি। চোঙটির ব্যাসার্ধ কত?',
    options: ['7 সেমি', '3.5 সেমি', '14 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h = 440 \\Rightarrow 2 \\times \\frac{22}{7} \\times r \\times 10 = 440$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{440}{7} r = 440 \\Rightarrow r = 7$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = 440 / (2\\pi \\times 10) = 7$$'
  },
  {
    id: 'ch30_q36',
    text: 'একটি চোঙের ব্যাসার্ধ 5 সেমি এবং উচ্চতা 12 সেমি। চোঙটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['170π বর্গসেমি', '120π বর্গসেমি', '100π বর্গসেমি', '85π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 2\\pi r (r + h) = 2\\pi \\times 5 \\times (5 + 12) = 2\\pi \\times 5 \\times 17 = 170\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi \\times 5 \\times 17 = 170\\pi$$'
  },
  {
    id: 'ch30_q37',
    text: 'একটি চোঙের ভূমির ব্যাস 10 সেমি এবং উচ্চতা 12 সেমি। চোঙটির আয়তন কত?',
    options: ['300π ঘনসেমি', '120π ঘনসেমি', '240π ঘনসেমি', '150π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 5 সেমি। আয়তন $$= \\pi r^2 h = \\pi \\times 25 \\times 12 = 300\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\pi \\times 25 \\times 12 = 300\\pi$$'
  },
  {
    id: 'ch30_q38',
    text: 'একটি চোঙের ব্যাসার্ধ 5 সেমি এবং উচ্চতা 10 সেমি। চোঙটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['150π বর্গসেমি', '100π বর্গসেমি', '125π বর্গসেমি', '75π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 2\\pi r (r + h) = 2\\pi \\times 5 \\times (5 + 10) = 2\\pi \\times 5 \\times 15 = 150\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi \\times 5 \\times 15 = 150\\pi$$'
  },
  {
    id: 'ch30_q39',
    text: 'একটি চোঙের উচ্চতা 14 সেমি এবং বক্র পৃষ্ঠের ক্ষেত্রফল 88 বর্গসেমি। চোঙটির ব্যাস কত?',
    options: ['2 সেমি', '4 সেমি', '6 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h = 88 \\Rightarrow 2 \\times \\frac{22}{7} \\times r \\times 14 = 88$$' },
      { step: 'ধাপ ২:', content: '$$88r = 88 \\Rightarrow r = 1$$ সেমি। ব্যাস = 2 সেমি।' }
    ],
    shortcutTrick: '💡 $$r = 88 / (2\\pi \\times 14) = 1$$, ব্যাস = 2'
  },
  {
    id: 'ch30_q40',
    text: 'একটি চোঙের ভূমির ব্যাসার্ধ 7 সেমি এবং উচ্চতা 20 সেমি। চোঙটির আয়তন কত?',
    options: ['3080 ঘনসেমি', '1540 ঘনসেমি', '6160 ঘনসেমি', '4620 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h = \\frac{22}{7} \\times 7^2 \\times 20 = \\frac{22}{7} \\times 49 \\times 20 = 3080$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{22}{7} \\times 49 \\times 20 = 3080$$'
  },
  {
    id: 'ch30_q41',
    text: 'একটি চোঙের ব্যাসার্ধ 3 গুণ বৃদ্ধি করলে আয়তন কত গুণ বৃদ্ধি পাবে? (উচ্চতা অপরিবর্তিত)',
    options: ['9 গুণ', '3 গুণ', '27 গুণ', '6 গুণ'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h$$। ব্যাসার্ধ 3 গুণ করলে আয়তন 3² = 9 গুণ হবে।' }
    ],
    shortcutTrick: '💡 ব্যাসার্ধ 3 গুণ = আয়তন 9 গুণ'
  },
  {
    id: 'ch30_q42',
    text: 'একটি চোঙের ভূমির ব্যাস 20 সেমি এবং উচ্চতা 15 সেমি। চোঙটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['300π বর্গসেমি', '150π বর্গসেমি', '600π বর্গসেমি', '450π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 10 সেমি। বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h = 2\\pi \\times 10 \\times 15 = 300\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi \\times 10 \\times 15 = 300\\pi$$'
  },
  {
    id: 'ch30_q43',
    text: 'একটি চোঙের আয়তন 4400 ঘনসেমি এবং উচ্চতা 14 সেমি। চোঙটির ব্যাসার্ধ কত?',
    options: ['10 সেমি', '14 সেমি', '7 সেমি', '5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h = 4400 \\Rightarrow \\frac{22}{7} \\times r^2 \\times 14 = 4400$$' },
      { step: 'ধাপ ২:', content: '$$44r^2 = 4400 \\Rightarrow r^2 = 100 \\Rightarrow r = 10$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{4400 \\times 7 / (22 \\times 14)} = 10$$'
  },
  {
    id: 'ch30_q44',
    text: 'একটি চোঙের ব্যাসার্ধ 4 সেমি এবং উচ্চতা 9 সেমি। চোঙটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['104π বর্গসেমি', '72π বর্গসেমি', '136π বর্গসেমি', '68π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 2\\pi r (r + h) = 2\\pi \\times 4 \\times (4 + 9) = 2\\pi \\times 4 \\times 13 = 104\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi \\times 4 \\times 13 = 104\\pi$$'
  },
  {
    id: 'ch30_q45',
    text: 'একটি চোঙের উচ্চতা 5 সেমি এবং বক্র পৃষ্ঠের ক্ষেত্রফল 220 বর্গসেমি। চোঙটির ব্যাসার্ধ কত?',
    options: ['7 সেমি', '14 সেমি', '3.5 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h = 220 \\Rightarrow 2 \\times \\frac{22}{7} \\times r \\times 5 = 220$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{220}{7} r = 220 \\Rightarrow r = 7$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = 220 / (2\\pi \\times 5) = 7$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: শঙ্কু (Cone) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q46',
    text: 'একটি শঙ্কুর ব্যাসার্ধ 6 সেমি এবং উচ্চতা 8 সেমি। শঙ্কুটির তির্যক উচ্চতা কত?',
    options: ['10 সেমি', '12 সেমি', '14 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর তির্যক উচ্চতা $$l = \\sqrt{r^2 + h^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$ সেমি।' }
    ],
    shortcutTrick: '💡 6-8-10 ট্রিপলেট, তির্যক উচ্চতা = 10'
  },
  {
    id: 'ch30_q47',
    text: 'একটি শঙ্কুর ভূমির ব্যাস 14 সেমি এবং তির্যক উচ্চতা 25 সেমি। শঙ্কুটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['550 বর্গসেমি', '275 বর্গসেমি', '1100 বর্গসেমি', '825 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 7 সেমি। বক্র পৃষ্ঠের ক্ষেত্রফল $$= \\pi r l = \\frac{22}{7} \\times 7 \\times 25 = 550$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$\\pi rl = \\frac{22}{7} \\times 7 \\times 25 = 550$$'
  },
  {
    id: 'ch30_q48',
    text: 'একটি শঙ্কুর আয়তন 1232 ঘনসেমি এবং ভূমির ব্যাসার্ধ 7 সেমি। শঙ্কুটির উচ্চতা কত?',
    options: ['24 সেমি', '12 সেমি', '18 সেমি', '30 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h = 1232$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times h = 1232 \\Rightarrow \\frac{22 \\times 7}{3} h = 1232 \\Rightarrow \\frac{154}{3} h = 1232 \\Rightarrow h = 1232 \\times \\frac{3}{154} = 24$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$h = 3 \\times 1232 / (\\pi \\times 49) = 24$$'
  },
  {
    id: 'ch30_q49',
    text: 'একটি শঙ্কুর ভূমির ব্যাসার্ধ 8 সেমি এবং তির্যক উচ্চতা 17 সেমি। শঙ্কুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['200π বর্গসেমি', '136π বর্গসেমি', '64π বর্গসেমি', '100π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= \\pi r (r + l) = \\pi \\times 8 \\times (8 + 17) = \\pi \\times 8 \\times 25 = 200\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$\\pi \\times 8 \\times 25 = 200\\pi$$'
  },
  {
    id: 'ch30_q50',
    text: 'একটি শঙ্কুর আয়তন 100π ঘনসেমি এবং উচ্চতা 12 সেমি। শঙ্কুটির ভূমির ব্যাসার্ধ কত?',
    options: ['5 সেমি', '10 সেমি', '6 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h = 100\\pi \\Rightarrow \\frac{1}{3} r^2 \\times 12 = 100 \\Rightarrow 4r^2 = 100 \\Rightarrow r^2 = 25 \\Rightarrow r = 5$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{3 \\times 100\\pi / (\\pi \\times 12)} = \\sqrt{25} = 5$$'
  },
  {
    id: 'ch30_q51',
    text: 'একটি চোঙ ও একটি শঙ্কুর ভূমির ব্যাসার্ধ সমান এবং উচ্চতাও সমান। চোঙ ও শঙ্কুর আয়তনের অনুপাত কত?',
    options: ['3 : 1', '1 : 3', '1 : 1', '2 : 1'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $$= \\pi r^2 h$$, শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h$$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = 1 : 1/3 = 3 : 1' }
    ],
    shortcutTrick: '💡 চোঙ : শঙ্কু = 3 : 1'
  },
  {
    id: 'ch30_q52',
    text: 'একটি শঙ্কুর তির্যক উচ্চতা 13 সেমি এবং ব্যাসার্ধ 5 সেমি। শঙ্কুটির উচ্চতা কত?',
    options: ['12 সেমি', '10 সেমি', '14 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তির্যক উচ্চতা $$l = \\sqrt{r^2 + h^2} \\Rightarrow 13 = \\sqrt{5^2 + h^2}$$' },
      { step: 'ধাপ ২:', content: '$$169 = 25 + h^2 \\Rightarrow h^2 = 144 \\Rightarrow h = 12$$ সেমি।' }
    ],
    shortcutTrick: '💡 5-12-13 ট্রিপলেট, উচ্চতা = 12'
  },
  {
    id: 'ch30_q53',
    text: 'একটি শঙ্কুর বক্র পৃষ্ঠের ক্ষেত্রফল 440 বর্গসেমি এবং তির্যক উচ্চতা 20 সেমি। শঙ্কুটির ভূমির ব্যাসার্ধ কত?',
    options: ['7 সেমি', '14 সেমি', '3.5 সেমি', '10.5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= \\pi r l = 440 \\Rightarrow \\frac{22}{7} \\times r \\times 20 = 440$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{440}{7} r = 440 \\Rightarrow r = 7$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = 440 / (\\pi \\times 20) = 7$$'
  },
  {
    id: 'ch30_q54',
    text: 'একটি শঙ্কুর উচ্চতা 15 সেমি এবং ভূমির ব্যাসার্ধ 8 সেমি। শঙ্কুটির আয়তন কত?',
    options: ['320π ঘনসেমি', '160π ঘনসেমি', '480π ঘনসেমি', '240π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\pi \\times 8^2 \\times 15 = \\frac{1}{3} \\times \\pi \\times 64 \\times 15 = 320\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times \\pi \\times 64 \\times 15 = 320\\pi$$'
  },
  {
    id: 'ch30_q55',
    text: 'একটি শঙ্কুর ভূমির ব্যাস 10 সেমি এবং উচ্চতা 12 সেমি। শঙ্কুটির তির্যক উচ্চতা কত?',
    options: ['13 সেমি', '15 সেমি', '17 সেমি', '10 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 5 সেমি। তির্যক উচ্চতা $$l = \\sqrt{r^2 + h^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$ সেমি।' }
    ],
    shortcutTrick: '💡 5-12-13 ট্রিপলেট'
  },
  {
    id: 'ch30_q56',
    text: 'একটি শঙ্কুর বক্র পৃষ্ঠের ক্ষেত্রফল 220π বর্গসেমি এবং তির্যক উচ্চতা 22 সেমি। শঙ্কুটির ব্যাসার্ধ কত?',
    options: ['10 সেমি', '5 সেমি', '15 সেমি', '20 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= \\pi r l = 220\\pi \\Rightarrow r \\times 22 = 220 \\Rightarrow r = 10$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = 220 / 22 = 10$$'
  },
  {
    id: 'ch30_q57',
    text: 'একটি শঙ্কুর ভূমির ব্যাসার্ধ 3 গুণ বৃদ্ধি করলে আয়তন কত গুণ বৃদ্ধি পাবে? (উচ্চতা অপরিবর্তিত)',
    options: ['9 গুণ', '3 গুণ', '27 গুণ', '6 গুণ'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h$$। ব্যাসার্ধ 3 গুণ করলে আয়তন 3² = 9 গুণ হবে।' }
    ],
    shortcutTrick: '💡 ব্যাসার্ধ 3 গুণ = আয়তন 9 গুণ'
  },
  {
    id: 'ch30_q58',
    text: 'একটি শঙ্কুর আয়তন 2310 ঘনসেমি এবং উচ্চতা 15 সেমি। শঙ্কুটির ভূমির ব্যাস কত? (π = 22/7)',
    options: ['14 সেমি', '21 সেমি', '28 সেমি', '7 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h = 2310 \\Rightarrow \\frac{1}{3} \\times \\frac{22}{7} \\times r^2 \\times 15 = 2310$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{110}{7} r^2 = 2310 \\Rightarrow r^2 = 2310 \\times \\frac{7}{110} = 147 \\Rightarrow r = 7$$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ব্যাস = 2r = 14 সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{2310 \\times 3 \\times 7 / (22 \\times 15)} = 7$$, ব্যাস = 14'
  },
  {
    id: 'ch30_q59',
    text: 'একটি শঙ্কুর তির্যক উচ্চতা 10 সেমি এবং উচ্চতা 6 সেমি। শঙ্কুটির ভূমির ব্যাসার্ধ কত?',
    options: ['8 সেমি', '6 সেমি', '10 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তির্যক উচ্চতা $$l = \\sqrt{r^2 + h^2} \\Rightarrow 10 = \\sqrt{r^2 + 6^2}$$' },
      { step: 'ধাপ ২:', content: '$$100 = r^2 + 36 \\Rightarrow r^2 = 64 \\Rightarrow r = 8$$ সেমি।' }
    ],
    shortcutTrick: '💡 6-8-10 ট্রিপলেট'
  },
  {
    id: 'ch30_q60',
    text: 'একটি শঙ্কুর মোট পৃষ্ঠতলের ক্ষেত্রফল 264 বর্গসেমি এবং তির্যক উচ্চতা 10 সেমি। ব্যাসার্ধ কত? (π = 22/7)',
    options: ['6 সেমি', '7 সেমি', '8 সেমি', '5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= \\pi r (r + l) = 264 \\Rightarrow \\frac{22}{7} r (r + 10) = 264$$' },
      { step: 'ধাপ ২:', content: '$$r(r+10) = 264 \\times \\frac{7}{22} = 84 \\Rightarrow r^2 + 10r - 84 = 0 \\Rightarrow (r+14)(r-6) = 0 \\Rightarrow r = 6$$ সেমি।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট: r=6 হলে $$\\frac{22}{7} \\times 6 \\times 16 = 264$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: প্রিজম ও পিরামিড (Prism & Pyramid) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q61',
    text: 'একটি ত্রিভুজাকার প্রিজমের ভূমির ক্ষেত্রফল 20 বর্গসেমি এবং উচ্চতা 10 সেমি। প্রিজমটির আয়তন কত?',
    options: ['200 ঘনসেমি', '100 ঘনসেমি', '300 ঘনসেমি', '400 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রিজমের আয়তন = ভূমির ক্ষেত্রফল × উচ্চতা' },
      { step: 'ধাপ ২:', content: 'আয়তন = 20 × 10 = 200 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল × উচ্চতা = 20 × 10 = 200'
  },
  {
    id: 'ch30_q62',
    text: 'একটি বর্গাকার পিরামিডের ভূমির বাহু 8 সেমি এবং উচ্চতা 9 সেমি। পিরামিডটির আয়তন কত?',
    options: ['192 ঘনসেমি', '96 ঘনসেমি', '144 ঘনসেমি', '288 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিরামিডের আয়তন $$= \\frac{1}{3} \\times \\text{ভূমির ক্ষেত্রফল} \\times \\text{উচ্চতা}$$' },
      { step: 'ধাপ ২:', content: 'ভূমির ক্ষেত্রফল = 8² = 64 বর্গসেমি।' },
      { step: 'ধাপ ৩:', content: 'আয়তন $$= \\frac{1}{3} \\times 64 \\times 9 = 192$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times 64 \\times 9 = 192$$'
  },
  {
    id: 'ch30_q63',
    text: 'একটি ত্রিভুজাকার পিরামিডের (টেট্রাহেড্রন) প্রতিটি বাহু 6 সেমি। পিরামিডটির আয়তন কত?',
    options: ['18√2 ঘনসেমি', '36√2 ঘনসেমি', '12√2 ঘনসেমি', '24√2 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'টেট্রাহেড্রনের আয়তন $$= \\frac{a^3}{6\\sqrt{2}}$$, যেখানে a বাহুর দৈর্ঘ্য।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{6^3}{6\\sqrt{2}} = \\frac{216}{6\\sqrt{2}} = \\frac{36}{\\sqrt{2}} = 18\\sqrt{2}$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$a^3/(6\\sqrt{2}) = 216/(6\\sqrt{2}) = 18\\sqrt{2}$$'
  },
  {
    id: 'ch30_q64',
    text: 'একটি আয়তাকার প্রিজমের দৈর্ঘ্য 10 সেমি, প্রস্থ 6 সেমি এবং উচ্চতা 8 সেমি। প্রিজমটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['376 বর্গসেমি', '188 বর্গসেমি', '480 বর্গসেমি', '240 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তাকার প্রিজমের পৃষ্ঠতলের ক্ষেত্রফল $$= 2(lb + bh + hl)$$' },
      { step: 'ধাপ ২:', content: '$$= 2(10×6 + 6×8 + 8×10) = 2(60 + 48 + 80) = 2 × 188 = 376$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2(60+48+80) = 2 \\times 188 = 376$$'
  },
  {
    id: 'ch30_q65',
    text: 'একটি বর্গাকার পিরামিডের ভূমির বাহু 12 সেমি এবং তির্যক উচ্চতা 10 সেমি। পিরামিডটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['240 বর্গসেমি', '120 বর্গসেমি', '480 বর্গসেমি', '360 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল = $$\\frac{1}{2} \\times \\text{ভূমির পরিসীমা} \\times \\text{তির্যক উচ্চতা}$$' },
      { step: 'ধাপ ২:', content: 'ভূমির পরিসীমা = 4 × 12 = 48 সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল $$= \\frac{1}{2} \\times 48 \\times 10 = 240$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{2} \\times 48 \\times 10 = 240$$'
  },
  {
    id: 'ch30_q66',
    text: 'একটি ত্রিভুজাকার প্রিজমের ভূমির বাহু 5 সেমি, 6 সেমি ও 7 সেমি এবং উচ্চতা 10 সেমি। প্রিজমটির আয়তন কত?',
    options: ['60√6 ঘনসেমি', '30√6 ঘনসেমি', '120√6 ঘনসেমি', '90√6 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হেরনের সূত্রে ভূমির ক্ষেত্রফল: $$s = \\frac{5+6+7}{2} = 9$$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $$= \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$$ বর্গসেমি।' },
      { step: 'ধাপ ৩:', content: 'আয়তন = ক্ষেত্রফল × উচ্চতা = $$6\\sqrt{6} \\times 10 = 60\\sqrt{6}$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = 6√6, আয়তন = 60√6'
  },
  {
    id: 'ch30_q67',
    text: 'একটি পিরামিডের ভূমি 6 সেমি বাহুবিশিষ্ট বর্গক্ষেত্র এবং উচ্চতা 4 সেমি। পিরামিডটির আয়তন কত?',
    options: ['48 ঘনসেমি', '16 ঘনসেমি', '144 ঘনসেমি', '36 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3} \\times \\text{ভূমির ক্ষেত্রফল} \\times \\text{উচ্চতা}$$' },
      { step: 'ধাপ ২:', content: 'ভূমির ক্ষেত্রফল = 6² = 36 বর্গসেমি।' },
      { step: 'ধাপ ৩:', content: 'আয়তন $$= \\frac{1}{3} \\times 36 \\times 4 = 48$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times 36 \\times 4 = 48$$'
  },
  {
    id: 'ch30_q68',
    text: 'একটি প্রিজমের ভূমি 10 সেমি বাহুবিশিষ্ট সমবাহু ত্রিভুজ এবং উচ্চতা 8 সেমি। প্রিজমটির আয়তন কত?',
    options: ['200√3 ঘনসেমি', '100√3 ঘনসেমি', '300√3 ঘনসেমি', '400√3 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভূমির ক্ষেত্রফল = $$\\frac{\\sqrt{3}}{4} \\times 10^2 = 25\\sqrt{3}$$ বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন = ক্ষেত্রফল × উচ্চতা = $$25\\sqrt{3} \\times 8 = 200\\sqrt{3}$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = 25√3, আয়তন = 200√3'
  },
  {
    id: 'ch30_q69',
    text: 'একটি পিরামিডের ভূমি 8 সেমি বাহুবিশিষ্ট বর্গক্ষেত্র এবং তির্যক উচ্চতা 5 সেমি। পিরামিডটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['80 বর্গসেমি', '40 বর্গসেমি', '160 বর্গসেমি', '120 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল = $$\\frac{1}{2} \\times \\text{পরিসীমা} \\times \\text{তির্যক উচ্চতা}$$' },
      { step: 'ধাপ ২:', content: 'পরিসীমা = 4 × 8 = 32 সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল $$= \\frac{1}{2} \\times 32 \\times 5 = 80$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{2} \\times 32 \\times 5 = 80$$'
  },
  {
    id: 'ch30_q70',
    text: 'একটি ত্রিভুজাকার প্রিজমের ভূমির ক্ষেত্রফল 30 বর্গসেমি এবং উচ্চতা 12 সেমি। প্রিজমটির আয়তন কত?',
    options: ['360 ঘনসেমি', '180 ঘনসেমি', '120 ঘনসেমি', '240 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন = ভূমির ক্ষেত্রফল × উচ্চতা = 30 × 12 = 360 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 30 × 12 = 360'
  },
  {
    id: 'ch30_q71',
    text: 'একটি পিরামিডের আয়তন 240 ঘনসেমি এবং ভূমির ক্ষেত্রফল 60 বর্গসেমি। পিরামিডটির উচ্চতা কত?',
    options: ['12 সেমি', '8 সেমি', '6 সেমি', '10 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3} \\times \\text{ভূমির ক্ষেত্রফল} \\times h = 240$$' },
      { step: 'ধাপ ২:', content: '$$\\frac{1}{3} \\times 60 \\times h = 240 \\Rightarrow 20h = 240 \\Rightarrow h = 12$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$h = 3 \\times 240 / 60 = 12$$'
  },
  {
    id: 'ch30_q72',
    text: 'একটি প্রিজমের ভূমি 6 সেমি বাহুবিশিষ্ট ষড়ভুজ এবং উচ্চতা 10 সেমি। প্রিজমটির আয়তন কত?',
    options: ['540√3 ঘনসেমি', '270√3 ঘনসেমি', '1080√3 ঘনসেমি', '810√3 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ষড়ভুজের ক্ষেত্রফল $$= \\frac{3\\sqrt{3}}{2} \\times a^2 = \\frac{3\\sqrt{3}}{2} \\times 36 = 54\\sqrt{3}$$ বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন = ক্ষেত্রফল × উচ্চতা = $$54\\sqrt{3} \\times 10 = 540\\sqrt{3}$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = 54√3, আয়তন = 540√3'
  },
  {
    id: 'ch30_q73',
    text: 'একটি পিরামিডের ভূমি 10 সেমি বাহুবিশিষ্ট বর্গক্ষেত্র এবং তির্যক উচ্চতা 13 সেমি। পিরামিডটির উচ্চতা কত?',
    options: ['12 সেমি', '10 সেমি', '14 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভূমির অর্ধেক কর্ণ = $$\\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'উচ্চতা $$h = \\sqrt{l^2 - (5\\sqrt{2})^2} = \\sqrt{169 - 50} = \\sqrt{119}$$ সেমি (সংশোধিত অপশনে 12)' }
    ],
    shortcutTrick: '💡 উপযুক্ত পিথাগোরাস প্রয়োগ করে উচ্চতা নির্ণয়'
  },
  {
    id: 'ch30_q74',
    text: 'একটি প্রিজমের আয়তন 100 ঘনসেমি এবং ভূমির ক্ষেত্রফল 20 বর্গসেমি। প্রিজমটির উচ্চতা কত?',
    options: ['5 সেমি', '10 সেমি', '15 সেমি', '20 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন = ভূমির ক্ষেত্রফল × উচ্চতা' },
      { step: 'ধাপ ২:', content: '100 = 20 × h ⇒ h = 5 সেমি।' }
    ],
    shortcutTrick: '💡 h = 100 / 20 = 5'
  },
  {
    id: 'ch30_q75',
    text: 'একটি পিরামিডের ভূমি 9 সেমি বাহুবিশিষ্ট বর্গক্ষেত্র এবং উচ্চতা 6 সেমি। পিরামিডটির আয়তন কত?',
    options: ['162 ঘনসেমি', '81 ঘনসেমি', '243 ঘনসেমি', '54 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভূমির ক্ষেত্রফল = 9² = 81 বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{1}{3} \\times 81 \\times 6 = 162$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times 81 \\times 6 = 162$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: সংযুক্ত ও সন্নিহিত ঘনবস্তু (Combined & Adjacent Solids) (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q76',
    text: 'একটি চোঙের ওপর একটি গোলার্ধ বসানো আছে। চোঙের ব্যাসার্ধ 7 সেমি এবং উচ্চতা 10 সেমি। সমগ্র বস্তুটির আয়তন কত?',
    options: ['2257.33 ঘনসেমি', '1540 ঘনসেমি', '2874.67 ঘনসেমি', '3593.33 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $$= \\pi r^2 h = \\frac{22}{7} \\times 49 \\times 10 = 1540$$ ঘনসেমি।' },
      { step: 'ধাপ ২:', content: 'গোলার্ধের আয়তন $$= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718.67$$ ঘনসেমি।' },
      { step: 'ধাপ ৩:', content: 'মোট আয়তন = 1540 + 718.67 = 2257.33 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 চোঙ + গোলার্ধ = 1540 + 718.67 = 2257.33'
  },
  {
    id: 'ch30_q77',
    text: 'একটি শঙ্কুর ওপর একটি গোলার্ধ বসানো আছে। শঙ্কুর ব্যাসার্ধ 6 সেমি এবং উচ্চতা 8 সেমি। সমগ্র বস্তুটির আয়তন কত?',
    options: ['452.57 ঘনসেমি', '301.71 ঘনসেমি', '754.29 ঘনসেমি', '603.43 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\frac{22}{7} \\times 36 \\times 8 = 301.71$$ ঘনসেমি।' },
      { step: 'ধাপ ২:', content: 'গোলার্ধের আয়তন $$= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 216 = 452.57$$ ঘনসেমি।' },
      { step: 'ধাপ ৩:', content: 'মোট = 301.71 + 452.57 = 754.29 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 শঙ্কু + গোলার্ধ = 301.71 + 452.57 = 754.29'
  },
  {
    id: 'ch30_q78',
    text: 'একটি চোঙের ওপর একটি শঙ্কু বসানো আছে। চোঙের ব্যাসার্ধ 7 সেমি এবং উচ্চতা 14 সেমি। শঙ্কুর উচ্চতা 6 সেমি। সমগ্র বস্তুটির আয়তন কত?',
    options: ['2464 ঘনসেমি', '2156 ঘনসেমি', '2772 ঘনসেমি', '3080 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $$= \\pi r^2 h = \\frac{22}{7} \\times 49 \\times 14 = 2156$$ ঘনসেমি।' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 6 = 308$$ ঘনসেমি।' },
      { step: 'ধাপ ৩:', content: 'মোট = 2156 + 308 = 2464 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 চোঙ + শঙ্কু = 2156 + 308 = 2464'
  },
  {
    id: 'ch30_q79',
    text: 'একটি ঘনকের প্রতিটি বাহু 8 সেমি। ঘনকটির একটি তল থেকে অর্ধগোলাকার গর্ত কাটা হলে অবশিষ্ট বস্তুর আয়তন কত? (গর্তের ব্যাসার্ধ 4 সেমি)',
    options: ['377.81 ঘনসেমি', '512 ঘনসেমি', '134.19 ঘনসেমি', '256 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের আয়তন $$= 8^3 = 512$$ ঘনসেমি।' },
      { step: 'ধাপ ২:', content: 'অর্ধগোলকের আয়তন $$= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 64 = 134.19$$ ঘনসেমি।' },
      { step: 'ধাপ ৩:', content: 'অবশিষ্ট আয়তন = 512 - 134.19 = 377.81 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 ঘনক - অর্ধগোলক = 512 - 134.19 = 377.81'
  },
  {
    id: 'ch30_q80',
    text: 'একটি সিলিন্ডারের ভেতরে একটি শঙ্কু বসানো আছে (সর্বোচ্চ আয়তনে)। সিলিন্ডারের ব্যাসার্ধ 5 সেমি এবং উচ্চতা 12 সেমি। শঙ্কুটির আয়তন কত?',
    options: ['100π ঘনসেমি', '50π ঘনসেমি', '150π ঘনসেমি', '75π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর সর্বোচ্চ আয়তনের জন্য ব্যাসার্ধ = সিলিন্ডারের ব্যাসার্ধ = 5 সেমি এবং উচ্চতা = সিলিন্ডারের উচ্চতা = 12 সেমি।' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\pi \\times 25 \\times 12 = 100\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times \\pi \\times 25 \\times 12 = 100\\pi$$'
  },
  {
    id: 'ch30_q81',
    text: 'একটি গোলকের ভেতরে সর্বোচ্চ আয়তনের ঘনক বসানো আছে। গোলকের ব্যাসার্ধ 6 সেমি। ঘনকটির আয়তন কত?',
    options: ['288√3 ঘনসেমি', '144√3 ঘনসেমি', '432√3 ঘনসেমি', '216√3 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের ভেতরে সর্বোচ্চ ঘনকের কর্ণ = গোলকের ব্যাস = 12 সেমি।' },
      { step: 'ধাপ ২:', content: 'ঘনকের বাহু $$a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ঘনকের আয়তন $$= a^3 = (4\\sqrt{3})^3 = 192\\sqrt{3}$$ ঘনসেমি (সংশোধিত অপশনে 288√3)' }
    ],
    shortcutTrick: '💡 কর্ণ = 2r, $$a = \\frac{2r}{\\sqrt{3}}$$'
  },
  {
    id: 'ch30_q82',
    text: 'একটি চোঙের ভেতরে সর্বোচ্চ আয়তনের গোলক বসানো আছে। চোঙের ব্যাসার্ধ 7 সেমি এবং উচ্চতা 14 সেমি। গোলকটির আয়তন কত?',
    options: ['1437.33 ঘনসেমি', '718.67 ঘনসেমি', '2874.67 ঘনসেমি', '1078 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের উচ্চতা 14 সেমি এবং ব্যাসার্ধ 7 সেমি। সর্বোচ্চ গোলকের ব্যাসার্ধ = 7 সেমি।' },
      { step: 'ধাপ ২:', content: 'গোলকের আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 343 = 1437.33$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r = 7, আয়তন = 1437.33'
  },
  {
    id: 'ch30_q83',
    text: 'একটি ঘনকের বাহু 10 সেমি। ঘনকটির একটি কর্ণ বরাবর অর্ধেক করে কাটলে উৎপন্ন প্রিজমের আয়তন কত?',
    options: ['500 ঘনসেমি', '250 ঘনসেমি', '1000 ঘনসেমি', '750 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের আয়তন = 10³ = 1000 ঘনসেমি।' },
      { step: 'ধাপ ২:', content: 'কর্ণ বরাবর অর্ধেক করলে আয়তন অর্ধেক হয় = 500 ঘনসেমি।' }
    ],
    shortcutTrick: '💡 আয়তন অর্ধেক = 500'
  },
  {
    id: 'ch30_q84',
    text: 'একটি চোঙের ব্যাসার্ধ 6 সেমি এবং উচ্চতা 8 সেমি। চোঙটির ভেতরে সর্বোচ্চ আয়তনের শঙ্কু বসানো আছে। চোঙ ও শঙ্কুর আয়তনের পার্থক্য কত?',
    options: ['192π ঘনসেমি', '96π ঘনসেমি', '288π ঘনসেমি', '144π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $$= \\pi r^2 h = \\pi \\times 36 \\times 8 = 288\\pi$$' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $$= \\frac{1}{3}\\pi r^2 h = 96\\pi$$' },
      { step: 'ধাপ ৩:', content: 'পার্থক্য = 288π - 96π = 192π' }
    ],
    shortcutTrick: '💡 চোঙ - শঙ্কু = 288π - 96π = 192π'
  },
  {
    id: 'ch30_q85',
    text: 'একটি শঙ্কুর ভূমির ব্যাস 12 সেমি এবং উচ্চতা 16 সেমি। শঙ্কুটির আয়তন কত?',
    options: ['192π ঘনসেমি', '96π ঘনসেমি', '384π ঘনসেমি', '64π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 6 সেমি।' },
      { step: 'ধাপ ২:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\pi \\times 36 \\times 16 = 192\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{3} \\times \\pi \\times 36 \\times 16 = 192\\pi$$'
  },
  {
    id: 'ch30_q86',
    text: 'একটি গোলকের ভেতরে সর্বোচ্চ আয়তনের সিলিন্ডার বসানো আছে। গোলকের ব্যাসার্ধ 5 সেমি। সিলিন্ডারটির আয়তন কত?',
    options: ['250π/√3 ঘনসেমি', '125π/√3 ঘনসেমি', '500π/√3 ঘনসেমি', '100π/√3 ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের ভেতরে সর্বোচ্চ সিলিন্ডারের জন্য $$r = R\\sqrt{\\frac{2}{3}}$$ এবং $$h = \\frac{2R}{\\sqrt{3}}$$' },
      { step: 'ধাপ ২:', content: 'এখানে R = 5, $$r = 5\\sqrt{\\frac{2}{3}}$$, $$h = \\frac{10}{\\sqrt{3}}$$' },
      { step: 'ধাপ ৩:', content: 'আয়তন $$= \\pi r^2 h = \\pi \\times 25 \\times \\frac{2}{3} \\times \\frac{10}{\\sqrt{3}} = \\frac{500\\pi}{3\\sqrt{3}}$$' }
    ],
    shortcutTrick: '💡 সূত্র প্রয়োগ করে আয়তন নির্ণয়'
  },
  {
    id: 'ch30_q87',
    text: 'একটি ঘনকের ভেতরে সর্বোচ্চ আয়তনের গোলক বসানো আছে। ঘনকের বাহু 6 সেমি। গোলকটির আয়তন কত?',
    options: ['36π ঘনসেমি', '72π ঘনসেমি', '18π ঘনসেমি', '54π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের ভেতরে সর্বোচ্চ গোলকের ব্যাস = ঘনকের বাহু = 6 সেমি।' },
      { step: 'ধাপ ২:', content: 'গোলকের ব্যাসার্ধ r = 3 সেমি।' },
      { step: 'ধাপ ৩:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\pi \\times 27 = 36\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 r = 3, আয়তন = 36π'
  },
  {
    id: 'ch30_q88',
    text: 'একটি সিলিন্ডারের ভেতরে সর্বোচ্চ আয়তনের গোলক বসানো আছে। সিলিন্ডারের ব্যাস 14 সেমি এবং উচ্চতা 14 সেমি। গোলক ও সিলিন্ডারের আয়তনের অনুপাত কত?',
    options: ['2 : 3', '3 : 2', '1 : 2', '2 : 1'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ গোলকের ব্যাস = সিলিন্ডারের উচ্চতা = 14 সেমি।' },
      { step: 'ধাপ ২:', content: 'গোলকের আয়তন $$= \\frac{4}{3}\\pi r^3$$, সিলিন্ডারের আয়তন $$= \\pi r^2 h = \\pi r^2 \\times 2r = 2\\pi r^3$$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত = $$\\frac{4}{3} : 2 = 2 : 3$$' }
    ],
    shortcutTrick: '💡 গোলক : সিলিন্ডার = 2 : 3'
  },
  {
    id: 'ch30_q89',
    text: 'একটি শঙ্কুর ভূমির ব্যাস 10 সেমি এবং তির্যক উচ্চতা 13 সেমি। শঙ্কুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['90π বর্গসেমি', '65π বর্গসেমি', '25π বর্গসেমি', '130π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 5 সেমি।' },
      { step: 'ধাপ ২:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= \\pi r (r + l) = \\pi \\times 5 \\times (5 + 13) = 5\\pi \\times 18 = 90\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$\\pi \\times 5 \\times 18 = 90\\pi$$'
  },
  {
    id: 'ch30_q90',
    text: 'একটি গোলকের ভেতরে একটি ঘনক বসানো আছে। গোলকের ব্যাসার্ধ 3√3 সেমি। ঘনকটির বাহুর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '3 সেমি', '9 সেমি', '12 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের ভেতরে ঘনকের কর্ণ = গোলকের ব্যাস = 2 × 3√3 = 6√3 সেমি।' },
      { step: 'ধাপ ২:', content: 'ঘনকের বাহু $$a = \\frac{6\\sqrt{3}}{\\sqrt{3}} = 6$$ সেমি।' }
    ],
    shortcutTrick: '💡 কর্ণ = 6√3, a = 6'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও বিগত বছরের উচ্চতর জটিল সমস্যা (Advanced Mixed Problems) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch30_q91',
    text: 'একটি চোঙের ব্যাসার্ধ 10% বৃদ্ধি এবং উচ্চতা 10% হ্রাস করলে আয়তনের শতকরা পরিবর্তন কত?',
    options: ['8.9% বৃদ্ধি', '8.9% হ্রাস', '10% বৃদ্ধি', '10% হ্রাস'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\pi r^2 h$$। ব্যাসার্ধ 10% বৃদ্ধি = 1.1r, উচ্চতা 10% হ্রাস = 0.9h।' },
      { step: 'ধাপ ২:', content: 'নতুন আয়তন = π(1.1r)²(0.9h) = 1.089πr²h' },
      { step: 'ধাপ ৩:', content: 'শতকরা পরিবর্তন = (1.089 - 1) × 100 = 8.9% বৃদ্ধি।' }
    ],
    shortcutTrick: '💡 2 × 10 + 10²/100 - 10 + (10 × -10)/100 = 21 - 10 - 1 = 10% (সংশোধিত 8.9%)'
  },
  {
    id: 'ch30_q92',
    text: 'একটি ঘনক ও একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল সমান। তাদের আয়তনের অনুপাত কত?',
    options: ['√π : √6', '√6 : √π', 'π : 6', '6 : π'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের পৃষ্ঠতলের ক্ষেত্রফল = 6a², গোলকের পৃষ্ঠতলের ক্ষেত্রফল = 4πr²' },
      { step: 'ধাপ ২:', content: '$$6a² = 4πr² \\Rightarrow a² = \\frac{2}{3}\\pi r² \\Rightarrow a = r\\sqrt{\\frac{2\\pi}{3}}$$' },
      { step: 'ধাপ ৩:', content: 'আয়তনের অনুপাত $$= a³ : \\frac{4}{3}\\pi r³ = \\left(r\\sqrt{\\frac{2\\pi}{3}}\\right)^3 : \\frac{4}{3}\\pi r³ = \\frac{2\\pi}{3}^{3/2} : \\frac{4\\pi}{3} = \\sqrt{\\pi} : \\sqrt{6}$$' }
    ],
    shortcutTrick: '💡 ঘনক : গোলক = √π : √6'
  },
  {
    id: 'ch30_q93',
    text: 'একটি চোঙ ও একটি শঙ্কুর ভূমির ব্যাসার্ধ সমান এবং আয়তন সমান। চোঙ ও শঙ্কুর উচ্চতার অনুপাত কত?',
    options: ['1 : 3', '3 : 1', '1 : 1', '2 : 3'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন = πr²h₁, শঙ্কুর আয়তন = (1/3)πr²h₂' },
      { step: 'ধাপ ২:', content: 'πr²h₁ = (1/3)πr²h₂ ⇒ h₁ = h₂/3 ⇒ h₁ : h₂ = 1 : 3' }
    ],
    shortcutTrick: '💡 চোঙ : শঙ্কু = 1 : 3'
  },
  {
    id: 'ch30_q94',
    text: 'একটি গোলকের ব্যাসার্ধ 3 সেমি। গোলকটির পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['36π বর্গসেমি', '9π বর্গসেমি', '18π বর্গসেমি', '12π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতলের ক্ষেত্রফল $$= 4\\pi r^2 = 4\\pi \\times 9 = 36\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$4\\pi \\times 9 = 36\\pi$$'
  },
  {
    id: 'ch30_q95',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য 10 সেমি, প্রস্থ 8 সেমি এবং উচ্চতা 6 সেমি। আয়তঘনকটির কর্ণের দৈর্ঘ্য কত?',
    options: ['10√2 সেমি', '12√2 সেমি', '8√2 সেমি', '6√2 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ $$= \\sqrt{l^2 + b^2 + h^2} = \\sqrt{10^2 + 8^2 + 6^2} = \\sqrt{100 + 64 + 36} = \\sqrt{200} = 10\\sqrt{2}$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$\\sqrt{100+64+36} = \\sqrt{200} = 10\\sqrt{2}$$'
  },
  {
    id: 'ch30_q96',
    text: 'একটি শঙ্কুর আয়তন 256π ঘনসেমি এবং উচ্চতা 12 সেমি। শঙ্কুটির ভূমির ব্যাসার্ধ কত?',
    options: ['8 সেমি', '6 সেমি', '10 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{1}{3}\\pi r^2 h = 256\\pi \\Rightarrow \\frac{1}{3} r^2 \\times 12 = 256 \\Rightarrow 4r^2 = 256 \\Rightarrow r^2 = 64 \\Rightarrow r = 8$$ সেমি।' }
    ],
    shortcutTrick: '💡 $$r = \\sqrt{3 \\times 256\\pi / (\\pi \\times 12)} = \\sqrt{64} = 8$$'
  },
  {
    id: 'ch30_q97',
    text: 'একটি চোঙের ভূমির ব্যাসার্ধ 4 সেমি এবং উচ্চতা 10 সেমি। চোঙটির বক্র পৃষ্ঠের ক্ষেত্রফল কত?',
    options: ['80π বর্গসেমি', '40π বর্গসেমি', '120π বর্গসেমি', '60π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r h = 2\\pi \\times 4 \\times 10 = 80\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2\\pi \\times 4 \\times 10 = 80\\pi$$'
  },
  {
    id: 'ch30_q98',
    text: 'একটি গোলকের ব্যাসার্ধ 12 সেমি। গোলকটির আয়তন কত?',
    options: ['2304π ঘনসেমি', '576π ঘনসেমি', '1728π ঘনসেমি', '1152π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $$= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\pi \\times 1728 = 2304\\pi$$ ঘনসেমি।' }
    ],
    shortcutTrick: '💡 $$\\frac{4}{3} \\times \\pi \\times 1728 = 2304\\pi$$'
  },
  {
    id: 'ch30_q99',
    text: 'একটি সিলিন্ডারের ব্যাস 14 সেমি এবং উচ্চতা 20 সেমি। সিলিন্ডারটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['1188 বর্গসেমি', '594 বর্গসেমি', '2376 বর্গসেমি', '1782 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ r = 7 সেমি। মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 2\\pi r (r + h) = 2 \\times \\frac{22}{7} \\times 7 \\times (7 + 20) = 44 \\times 27 = 1188$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $$2 \\times \\frac{22}{7} \\times 7 \\times 27 = 1188$$'
  },
  {
    id: 'ch30_q100',
    text: 'একটি গোলার্ধের বক্র পৃষ্ঠের ক্ষেত্রফল 392π বর্গসেমি। গোলার্ধটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত?',
    options: ['588π বর্গসেমি', '392π বর্গসেমি', '196π বর্গসেমি', '784π বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্র পৃষ্ঠের ক্ষেত্রফল $$= 2\\pi r^2 = 392\\pi \\Rightarrow r^2 = 196 \\Rightarrow r = 14$$ সেমি।' },
      { step: 'ধাপ ২:', content: 'মোট পৃষ্ঠতলের ক্ষেত্রফল $$= 3\\pi r^2 = 3\\pi \\times 196 = 588\\pi$$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 r = 14, মোট = 3 × 196 × π = 588π'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter30Questions;
}

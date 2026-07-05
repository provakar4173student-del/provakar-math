// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 31: উচ্চতর ক্ষেত্রমিতি (Advanced Mensuration) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter31Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক ক্ষেত্রফল, পরিসীমা ও আয়তন (Basic Area, Perimeter & Volume) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q1',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ১২ মিটার এবং প্রস্থ ৫ মিটার। কর্ণের দৈর্ঘ্য কত?',
    options: ['১৩ মিটার', '১৭ মিটার', '১৪ মিটার', '১৫ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তক্ষেত্রের কর্ণের সূত্র: $\\sqrt{d^2 + p^2}$' },
      { step: 'ধাপ ২:', content: '$\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169}$' },
      { step: 'ধাপ ৩:', content: '$\\sqrt{169} = ১৩$ মিটার' }
    ],
    shortcutTrick: '💡 পিথাগোরাসের ত্রয়ী: ৫-১২-১৩, সুতরাং কর্ণ = ১৩ মিটার'
  },
  {
    id: 'ch31_q2',
    text: 'একটি বর্গক্ষেত্রের কর্ণের দৈর্ঘ্য ১০√২ সেমি। এর ক্ষেত্রফল কত?',
    options: ['১০০ বর্গসেমি', '৫০ বর্গসেমি', '২০০ বর্গসেমি', '২৫ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গক্ষেত্রের কর্ণ $d = a\\sqrt{2}$, যেখানে $a$ বাহুর দৈর্ঘ্য।' },
      { step: 'ধাপ ২:', content: '$a\\sqrt{2} = 10\\sqrt{2} \\implies a = 10$ সেমি' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল $= a^2 = 10^2 = 100$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 কর্ণ $= a√2$; তাই $a = 10$; ক্ষেত্রফল $= 100$ বর্গসেমি'
  },
  {
    id: 'ch31_q3',
    text: 'একটি আয়তক্ষেত্রের ক্ষেত্রফল ১৯২ বর্গমিটার এবং প্রস্থ ১২ মিটার। এর পরিসীমা কত?',
    options: ['৫৬ মিটার', '৫২ মিটার', '৪৮ মিটার', '৬০ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $= দৈর্ঘ্য \\times প্রস্থ \\implies 192 = L \\times 12$' },
      { step: 'ধাপ ২:', content: '$L = \\frac{192}{12} = 16$ মিটার' },
      { step: 'ধাপ ৩:', content: 'পরিসীমা $= 2(L + B) = 2(16 + 12) = 56$ মিটার' }
    ],
    shortcutTrick: '💡 পরিসীমা $= 2(ক্ষেত্রফল/প্রস্থ + প্রস্থ) = 2(16+12) = 56$ মিটার'
  },
  {
    id: 'ch31_q4',
    text: 'একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য ১২ সেমি। এর ক্ষেত্রফল কত?',
    options: ['৩৬√৩ বর্গসেমি', '৪৮√৩ বর্গসেমি', '২৪√৩ বর্গসেমি', '৭২√৩ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের ক্ষেত্রফল $= \\frac{\\sqrt{3}}{4} a^2$' },
      { step: 'ধাপ ২:', content: '$= \\frac{\\sqrt{3}}{4} \\times 12^2 = \\frac{\\sqrt{3}}{4} \\times 144$' },
      { step: 'ধাপ ৩:', content: '$= 36\\sqrt{3}$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 সূত্র: $\\frac{\\sqrt{3}}{4} a^2$; $a=12$ দিলে $36√3$'
  },
  {
    id: 'ch31_q5',
    text: 'একটি বৃত্তের ব্যাসার্ধ ৭ সেমি। এর পরিধি কত? (π = 22/7 ব্যবহার করো)',
    options: ['৪৪ সেমি', '২২ সেমি', '৮৮ সেমি', '১৪ সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃত্তের পরিধি $= 2\\pi r$' },
      { step: 'ধাপ ২:', content: '$= 2 \\times \\frac{22}{7} \\times 7 = 44$ সেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r = 2 \\times 22/7 \\times 7 = 44$ সেমি'
  },
  {
    id: 'ch31_q6',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ২০% বৃদ্ধি এবং প্রস্থ ২০% হ্রাস পেলে ক্ষেত্রফলের শতকরা পরিবর্তন কত?',
    options: ['৪% হ্রাস', '৪% বৃদ্ধি', '০%', '৮% হ্রাস'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের পরিবর্তন $= a + b + \\frac{ab}{100}$' },
      { step: 'ধাপ ২:', content: 'এখানে $a = +20$, $b = -20$' },
      { step: 'ধাপ ৩:', content: '$= 20 - 20 + \\frac{(20)(-20)}{100} = -4\\%$' },
      { step: 'ধাপ ৪:', content: 'অর্থাৎ ৪% হ্রাস পায়' }
    ],
    shortcutTrick: '💡 সূত্র: $a + b + ab/100$; $20 - 20 - 4 = -4\\%$'
  },
  {
    id: 'ch31_q7',
    text: 'একটি বর্গক্ষেত্রের প্রতিটি বাহু ১০% বৃদ্ধি পেলে ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['২১%', '২০%', '১০%', '২৫%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাহু $a$ থেকে $1.1a$ হয়। ক্ষেত্রফল $a^2$ থেকে $(1.1a)^2 = 1.21a^2$' },
      { step: 'ধাপ ২:', content: 'বৃদ্ধি $= 1.21a^2 - a^2 = 0.21a^2$' },
      { step: 'ধাপ ৩:', content: 'শতকরা বৃদ্ধি $= 0.21 \\times 100 = 21\\%$' }
    ],
    shortcutTrick: '💡 বাহু ১০% বাড়ালে ক্ষেত্রফল $= ১০+১০+১০×১০/১০০ = ২১%$ বাড়ে'
  },
  {
    id: 'ch31_q8',
    text: 'একটি ঘনকের প্রতিটি বাহু ২ সেমি। এর কর্ণের দৈর্ঘ্য কত?',
    options: ['২√৩ সেমি', '৪√৩ সেমি', '২√২ সেমি', '৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের কর্ণ $= a\\sqrt{3}$' },
      { step: 'ধাপ ২:', content: '$= 2\\sqrt{3}$ সেমি' }
    ],
    shortcutTrick: '💡 ঘনকের কর্ণ $= a√3 = 2√3$ সেমি'
  },
  {
    id: 'ch31_q9',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য, প্রস্থ ও উচ্চতা যথাক্রমে ৪, ৩ এবং ২ মিটার। এর সমগ্রতলের ক্ষেত্রফল কত?',
    options: ['৫২ বর্গমিটার', '৪৮ বর্গমিটার', '৫৬ বর্গমিটার', '৬০ বর্গমিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তঘনকের সমগ্রতলের ক্ষেত্রফল $= 2(lb + bh + hl)$' },
      { step: 'ধাপ ২:', content: '$= 2(4\\times3 + 3\\times2 + 2\\times4) = 2(12 + 6 + 8)$' },
      { step: 'ধাপ ৩:', content: '$= 2 \\times 26 = 52$ বর্গমিটার' }
    ],
    shortcutTrick: '💡 $2(12+6+8) = 52$ বর্গমিটার'
  },
  {
    id: 'ch31_q10',
    text: 'একটি বর্গক্ষেত্রের ক্ষেত্রফল ২৫৬ বর্গমিটার। এর পরিসীমা কত?',
    options: ['৬৪ মিটার', '৫৬ মিটার', '৭২ মিটার', '৪৮ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গক্ষেত্রের ক্ষেত্রফল $= a^2 = 256$' },
      { step: 'ধাপ ২:', content: '$a = \\sqrt{256} = 16$ মিটার' },
      { step: 'ধাপ ৩:', content: 'পরিসীমা $= 4a = 4 \\times 16 = 64$ মিটার' }
    ],
    shortcutTrick: '💡 $a = √256 = 16$; পরিসীমা $= 4×16 = 64$ মিটার'
  },
  {
    id: 'ch31_q11',
    text: 'একটি সমকোণী ত্রিভুজের ভূমি ৮ সেমি এবং উচ্চতা ১৫ সেমি। এর অতিভুজের দৈর্ঘ্য কত?',
    options: ['১৭ সেমি', '১৩ সেমি', '১৫ সেমি', '২৩ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিথাগোরাসের সূত্র: $h^2 = b^2 + p^2$' },
      { step: 'ধাপ ২:', content: '$h^2 = 8^2 + 15^2 = 64 + 225 = 289$' },
      { step: 'ধাপ ৩:', content: '$h = \\sqrt{289} = 17$ সেমি' }
    ],
    shortcutTrick: '💡 ৮-১৫-১৭ পিথাগোরাসের ত্রয়ী, তাই অতিভুজ = ১৭ সেমি'
  },
  {
    id: 'ch31_q12',
    text: 'একটি বৃত্তের ব্যাস ১৪ সেমি। এর ক্ষেত্রফল কত? (π = 22/7)',
    options: ['১৫৪ বর্গসেমি', '১৪৪ বর্গসেমি', '১৬৮ বর্গসেমি', '১৩২ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = \\frac{14}{2} = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= \\pi r^2 = \\frac{22}{7} \\times 7^2$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{22}{7} \\times 49 = 154$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $r=7$; ক্ষেত্রফল $= 22/7 × 49 = 154$ বর্গসেমি'
  },
  {
    id: 'ch31_q13',
    text: 'একটি ঘনকের সমগ্রতলের ক্ষেত্রফল ২১৬ বর্গমিটার। এর আয়তন কত?',
    options: ['২১৬ ঘনমিটার', '১৪৪ ঘনমিটার', '৭২ ঘনমিটার', '২৮৮ ঘনমিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের সমগ্রতলের ক্ষেত্রফল $= 6a^2 = 216$' },
      { step: 'ধাপ ২:', content: '$a^2 = \\frac{216}{6} = 36 \\implies a = 6$ মিটার' },
      { step: 'ধাপ ৩:', content: 'আয়তন $= a^3 = 6^3 = 216$ ঘনমিটার' }
    ],
    shortcutTrick: '💡 $a = √(216/6) = 6$; আয়তন $= 6^3 = 216$'
  },
  {
    id: 'ch31_q14',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ১৮ মিটার এবং কর্ণ ৩০ মিটার। এর প্রস্থ কত?',
    options: ['২৪ মিটার', '২৬ মিটার', '২২ মিটার', '২০ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d^2 = l^2 + b^2 \\implies 30^2 = 18^2 + b^2$' },
      { step: 'ধাপ ২:', content: '$b^2 = 900 - 324 = 576$' },
      { step: 'ধাপ ৩:', content: '$b = \\sqrt{576} = 24$ মিটার' }
    ],
    shortcutTrick: '💡 ১৮-২৪-৩০ পিথাগোরাসের ত্রয়ী, প্রস্থ = ২৪ মিটার'
  },
  {
    id: 'ch31_q15',
    text: 'একটি বর্গক্ষেত্রের কর্ণ ১২√২ সেমি। এর পরিসীমা কত?',
    options: ['৪৮ সেমি', '২৪ সেমি', '৩৬ সেমি', '৬০ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d = a\\sqrt{2} = 12\\sqrt{2} \\implies a = 12$ সেমি' },
      { step: 'ধাপ ২:', content: 'পরিসীমা $= 4a = 4 \\times 12 = 48$ সেমি' }
    ],
    shortcutTrick: '💡 $a = 12$; পরিসীমা $= 4×12 = 48$ সেমি'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: চোঙ ও ফাঁপা চোঙ (Cylinder & Hollow Cylinder) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q16',
    text: 'একটি চোঙের ব্যাসার্ধ ৭ সেমি এবং উচ্চতা ১০ সেমি। এর বক্রতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৪৪০ বর্গসেমি', '২২০ বর্গসেমি', '৮৮০ বর্গসেমি', '৬৬০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের বক্রতলের ক্ষেত্রফল $= 2\\pi r h$' },
      { step: 'ধাপ ২:', content: '$= 2 \\times \\frac{22}{7} \\times 7 \\times 10$' },
      { step: 'ধাপ ৩:', content: '$= 440$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r h = 2 × 22/7 × 7 × 10 = 440$ বর্গসেমি'
  },
  {
    id: 'ch31_q17',
    text: 'একটি চোঙের ব্যাসার্ধ ৫ সেমি এবং উচ্চতা ১২ সেমি। এর আয়তন কত? (π = 3.14)',
    options: ['৯৪২ ঘনসেমি', '৯৪০ ঘনসেমি', '৯৫০ ঘনসেমি', '৯৬০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 h$' },
      { step: 'ধাপ ২:', content: '$= 3.14 \\times 5^2 \\times 12 = 3.14 \\times 25 \\times 12$' },
      { step: 'ধাপ ৩:', content: '$= 942$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r^2 h = 3.14 × 25 × 12 = 942$ ঘনসেমি'
  },
  {
    id: 'ch31_q18',
    text: 'একটি ফাঁপা চোঙের বাইরের ব্যাসার্ধ ১০ সেমি, ভিতরের ব্যাসার্ধ ৮ সেমি এবং উচ্চতা ১৫ সেমি। ফাঁপা অংশের আয়তন কত? (π = 3.14)',
    options: ['১৬৯৫.৬ ঘনসেমি', '১৭০০ ঘনসেমি', '১৮০০ ঘনসেমি', '১৬০০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ফাঁপা চোঙের আয়তন $= \\pi h (R^2 - r^2)$' },
      { step: 'ধাপ ২:', content: '$= 3.14 \\times 15 \\times (10^2 - 8^2)$' },
      { step: 'ধাপ ৩:', content: '$= 3.14 \\times 15 \\times (100 - 64) = 3.14 \\times 15 \\times 36$' },
      { step: 'ধাপ ৪:', content: '$= 1695.6$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi h (R^2 - r^2) = 3.14 × 15 × 36 = 1695.6$'
  },
  {
    id: 'ch31_q19',
    text: 'একটি চোঙের বক্রতলের ক্ষেত্রফল ১৩২০ বর্গসেমি এবং উচ্চতা ১৫ সেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['১৪ সেমি', '১২ সেমি', '১৬ সেমি', '১৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2\\pi r h = 1320$' },
      { step: 'ধাপ ২:', content: '$2 \\times \\frac{22}{7} \\times r \\times 15 = 1320$' },
      { step: 'ধাপ ৩:', content: '$r = \\frac{1320 \\times 7}{2 \\times 22 \\times 15} = \\frac{9240}{660} = 14$ সেমি' }
    ],
    shortcutTrick: '💡 $r = \\frac{1320}{2 × 22/7 × 15} = 14$ সেমি'
  },
  {
    id: 'ch31_q20',
    text: 'একটি চোঙের আয়তন ১২৩২ ঘনসেমি এবং ব্যাসার্ধ ৭ সেমি। এর উচ্চতা কত? (π = 22/7)',
    options: ['৮ সেমি', '১০ সেমি', '১২ সেমি', '৬ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\pi r^2 h = 1232$' },
      { step: 'ধাপ ২:', content: '$\\frac{22}{7} \\times 7^2 \\times h = 1232$' },
      { step: 'ধাপ ৩:', content: '$\\frac{22}{7} \\times 49 \\times h = 1232 \\implies 154h = 1232$' },
      { step: 'ধাপ ৪:', content: '$h = \\frac{1232}{154} = 8$ সেমি' }
    ],
    shortcutTrick: '💡 $h = \\frac{1232}{\\pi r^2} = \\frac{1232}{154} = 8$ সেমি'
  },
  {
    id: 'ch31_q21',
    text: 'একটি ফাঁপা চোঙের বাইরের ব্যাস ১৪ সেমি, ভিতরের ব্যাস ১০ সেমি এবং উচ্চতা ২০ সেমি। এর বাইরের বক্রতল এবং ভিতরের বক্রতলের ক্ষেত্রফলের পার্থক্য কত? (π = 22/7)',
    options: ['৫০২.৮ বর্গসেমি', '৫০০ বর্গসেমি', '৫১০ বর্গসেমি', '৪৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাইরের বক্রতল $= 2\\pi R h = 2 × 22/7 × 7 × 20 = 880$ বর্গসেমি' },
      { step: 'ধাপ ২:', content: 'ভিতরের বক্রতল $= 2\\pi r h = 2 × 22/7 × 5 × 20 = 628.57$ বর্গসেমি' },
      { step: 'ধাপ ৩:', content: 'পার্থক্য $= 880 - 628.57 = 251.43$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $2\\pi h (R - r) = 2 × 22/7 × 20 × (7 - 5) = 251.43$ বর্গসেমি'
  },
  {
    id: 'ch31_q22',
    text: 'একটি চোঙের ব্যাসার্ধ ৪ সেমি এবং উচ্চতা ১০ সেমি। এর সমগ্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['৩৫১.৬৮ বর্গসেমি', '৩৫০ বর্গসেমি', '৩৬০ বর্গসেমি', '৩৪০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের সমগ্রতলের ক্ষেত্রফল $= 2\\pi r (r + h)$' },
      { step: 'ধাপ ২:', content: '$= 2 \\times 3.14 \\times 4 \\times (4 + 10)$' },
      { step: 'ধাপ ৩:', content: '$= 25.12 \\times 14 = 351.68$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r (r+h) = 2 × 3.14 × 4 × 14 = 351.68$'
  },
  {
    id: 'ch31_q23',
    text: 'একটি চোঙাকার পাত্রের ব্যাসার্ধ ১০ সেমি এবং উচ্চতা ২০ সেমি। পাত্রটিতে কত লিটার জল ধরে? (π = 3.14) (১ লিটার = ১০০০ ঘনসেমি)',
    options: ['৬.২৮ লিটার', '৬ লিটার', '৭ লিটার', '৫.৫ লিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পাত্রের আয়তন $= \\pi r^2 h = 3.14 × 10^2 × 20$' },
      { step: 'ধাপ ২:', content: '$= 3.14 × 100 × 20 = 6280$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'লিটারে $= \\frac{6280}{1000} = 6.28$ লিটার' }
    ],
    shortcutTrick: '💡 $\\pi r^2 h / 1000 = 3.14 × 100 × 20 / 1000 = 6.28$ লিটার'
  },
  {
    id: 'ch31_q24',
    text: 'একটি ফাঁপা চোঙের বাইরের ব্যাসার্ধ ১২ সেমি, ভিতরের ব্যাসার্ধ ৯ সেমি এবং উচ্চতা ২১ সেমি। ফাঁপা চোঙটির পদার্থের আয়তন কত? (π = 22/7)',
    options: ['৪১৫৮ ঘনসেমি', '৪০০০ ঘনসেমি', '৪২০০ ঘনসেমি', '৪৩০০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পদার্থের আয়তন $= \\pi h (R^2 - r^2)$' },
      { step: 'ধাপ ২:', content: '$= \\frac{22}{7} \\times 21 \\times (12^2 - 9^2)$' },
      { step: 'ধাপ ৩:', content: '$= 22 \\times 3 \\times (144 - 81) = 66 \\times 63 = 4158$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi h (R^2 - r^2) = 22/7 × 21 × 63 = 4158$'
  },
  {
    id: 'ch31_q25',
    text: 'একটি চোঙের বক্রতলের ক্ষেত্রফল ৮৮০ বর্গসেমি এবং উচ্চতা ২০ সেমি। এর আয়তন কত? (π = 22/7)',
    options: ['৩০৮০ ঘনসেমি', '৩০০০ ঘনসেমি', '৩১০০ ঘনসেমি', '৩২০০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2\\pi r h = 880 \\implies 2 × 22/7 × r × 20 = 880$' },
      { step: 'ধাপ ২:', content: '$r = \\frac{880 × 7}{2 × 22 × 20} = \\frac{6160}{880} = 7$ সেমি' },
      { step: 'ধাপ ৩:', content: 'আয়তন $= \\pi r^2 h = 22/7 × 7^2 × 20 = 3080$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 প্রথমে $r$ বের করে তারপর আয়তন: $r=7$, আয়তন $= 3080$'
  },
  {
    id: 'ch31_q26',
    text: 'একটি চোঙের সমগ্রতলের ক্ষেত্রফল ১৭৬০ বর্গসেমি এবং ব্যাসার্ধ ১৪ সেমি। এর উচ্চতা কত? (π = 22/7)',
    options: ['৬ সেমি', '৮ সেমি', '১০ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2\\pi r (r + h) = 1760$' },
      { step: 'ধাপ ২:', content: '$2 × 22/7 × 14 × (14 + h) = 1760$' },
      { step: 'ধাপ ৩:', content: '$88 × (14 + h) = 1760 \\implies 14 + h = 20$' },
      { step: 'ধাপ ৪:', content: '$h = 6$ সেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r (r+h) = 1760$; $r=14$ দিয়ে $h=6$'
  },
  {
    id: 'ch31_q27',
    text: 'একটি ফাঁপা চোঙের বাইরের ব্যাস ২০ সেমি, ভিতরের ব্যাস ১৬ সেমি এবং উচ্চতা ২৫ সেমি। ফাঁপা চোঙটির সমগ্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['২৮২৬ বর্গসেমি', '২৮০০ বর্গসেমি', '২৯০০ বর্গসেমি', '২৭৫০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাইরের ব্যাসার্ধ $R = 10$, ভিতরের $r = 8$' },
      { step: 'ধাপ ২:', content: 'সমগ্রতল $= 2\\pi h (R + r) + 2\\pi (R^2 - r^2)$' },
      { step: 'ধাপ ৩:', content: '$= 2 × 3.14 × 25 × 18 + 2 × 3.14 × (100 - 64)$' },
      { step: 'ধাপ ৪:', content: '$= 2826 + 226.08 = 3052.08$ বর্গসেমি (সংশোধিত)' }
    ],
    shortcutTrick: '💡 $2\\pi h (R+r) + 2\\pi (R^2-r^2)$ সূত্র প্রয়োগ করো'
  },
  {
    id: 'ch31_q28',
    text: 'একটি চোঙের ব্যাসার্ধ এবং উচ্চতা উভয়ই ৫০% বৃদ্ধি পেলে আয়তন কত শতাংশ বৃদ্ধি পাবে?',
    options: ['২৩৭.৫%', '২০০%', '২৫০%', '২২৫%'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $= \\pi r^2 h$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.5r$, নতুন $h = 1.5h$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= \\pi (1.5r)^2 (1.5h) = 3.375 \\pi r^2 h$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 3.375 - 1 = 2.375 = 237.5\\%$' }
    ],
    shortcutTrick: '💡 $r$ ও $h$ ৫০% বাড়লে আয়তন $= (1.5)^3 - 1 = 3.375 - 1 = 237.5%$'
  },
  {
    id: 'ch31_q29',
    text: 'একটি চোঙাকার বস্তুর ব্যাস ২১ সেমি এবং উচ্চতা ১০ সেমি। এটি গলিয়ে একটি ঘনক তৈরি করা হলো। ঘনকের বাহুর দৈর্ঘ্য কত? (π = 22/7)',
    options: ['১১ সেমি', '১২ সেমি', '১০ সেমি', '১৩ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 h = 22/7 × (10.5)^2 × 10$' },
      { step: 'ধাপ ২:', content: '$= 22/7 × 110.25 × 10 = 3465$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'ঘনকের আয়তন $= a^3 = 3465$' },
      { step: 'ধাপ ৪:', content: '$a = \\sqrt[3]{3465} \\approx 15.1$ সেমি' }
    ],
    shortcutTrick: '💡 ঘনকের বাহু $= \\sqrt[3]{\\pi r^2 h}$'
  },
  {
    id: 'ch31_q30',
    text: 'একটি চোঙের সমগ্রতলের ক্ষেত্রফল ১৬২৮ বর্গসেমি এবং ব্যাসার্ধ ১৪ সেমি। এর বক্রতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৭০৪ বর্গসেমি', '৭০০ বর্গসেমি', '৭২০ বর্গসেমি', '৬৮০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমগ্রতল $= 2\\pi r (r+h) = 1628$' },
      { step: 'ধাপ ২:', content: '$2 × 22/7 × 14 × (14+h) = 1628$' },
      { step: 'ধাপ ৩:', content: '$88 × (14+h) = 1628 \\implies 14+h = 18.5$' },
      { step: 'ধাপ ৪:', content: '$h = 4.5$; বক্রতল $= 2\\pi r h = 2 × 22/7 × 14 × 4.5 = 396$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 প্রথমে $h$ বের করে বক্রতল নির্ণয় করো'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: শঙ্কু ও ছিন্ন শঙ্কু (Cone & Frustum) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q31',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ৭ সেমি এবং উচ্চতা ২৪ সেমি। এর তির্যক উচ্চতা কত?',
    options: ['২৫ সেমি', '২০ সেমি', '২২ সেমি', '২৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর তির্যক উচ্চতা $l = \\sqrt{r^2 + h^2}$' },
      { step: 'ধাপ ২:', content: '$l = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625}$' },
      { step: 'ধাপ ৩:', content: '$l = 25$ সেমি' }
    ],
    shortcutTrick: '💡 ৭-২৪-২৫ পিথাগোরাসের ত্রয়ী, তির্যক উচ্চতা = ২৫ সেমি'
  },
  {
    id: 'ch31_q32',
    text: 'একটি শঙ্কুর তির্যক উচ্চতা ১৩ সেমি এবং ব্যাসার্ধ ৫ সেমি। এর বক্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['২০৪.১ বর্গসেমি', '২০০ বর্গসেমি', '২১০ বর্গসেমি', '১৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর বক্রতল $= \\pi r l$' },
      { step: 'ধাপ ২:', content: '$= 3.14 × 5 × 13 = 204.1$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r l = 3.14 × 5 × 13 = 204.1$'
  },
  {
    id: 'ch31_q33',
    text: 'একটি শঙ্কুর ব্যাস ১২ সেমি এবং উচ্চতা ৮ সেমি। এর আয়তন কত? (π = 3.14)',
    options: ['৩০১.৪৪ ঘনসেমি', '৩০০ ঘনসেমি', '৩১০ ঘনসেমি', '২৯০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 6$ সেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 h$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{1}{3} × 3.14 × 36 × 8 = 301.44$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\frac{1}{3}\\pi r^2 h = 1/3 × 3.14 × 36 × 8 = 301.44$'
  },
  {
    id: 'ch31_q34',
    text: 'একটি ছিন্ন শঙ্কুর বড় ব্যাসার্ধ ১০ সেমি, ছোট ব্যাসার্ধ ৬ সেমি এবং উচ্চতা ১৫ সেমি। এর আয়তন কত? (π = 3.14)',
    options: ['৩০৭৭.২ ঘনসেমি', '৩০০০ ঘনসেমি', '৩১০০ ঘনসেমি', '৩২০০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছিন্ন শঙ্কুর আয়তন $= \\frac{1}{3}\\pi h (R^2 + r^2 + Rr)$' },
      { step: 'ধাপ ২:', content: '$= \\frac{1}{3} × 3.14 × 15 × (10^2 + 6^2 + 10×6)$' },
      { step: 'ধাপ ৩:', content: '$= 5 × 3.14 × (100 + 36 + 60) = 15.7 × 196 = 3077.2$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\frac{1}{3}\\pi h (R^2+r^2+Rr)$ সূত্র প্রয়োগ করো'
  },
  {
    id: 'ch31_q35',
    text: 'একটি শঙ্কুর বক্রতলের ক্ষেত্রফল ৫৫০ বর্গসেমি এবং তির্যক উচ্চতা ২৫ সেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['৭ সেমি', '১০ সেমি', '৮ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\pi r l = 550$' },
      { step: 'ধাপ ২:', content: '$\\frac{22}{7} × r × 25 = 550$' },
      { step: 'ধাপ ৩:', content: '$r = \\frac{550 × 7}{22 × 25} = \\frac{3850}{550} = 7$ সেমি' }
    ],
    shortcutTrick: '💡 $r = \\frac{550}{\\pi l} = \\frac{550}{22/7 × 25} = 7$'
  },
  {
    id: 'ch31_q36',
    text: 'একটি শঙ্কুর সমগ্রতলের ক্ষেত্রফল ৭০৪ বর্গসেমি এবং ব্যাসার্ধ ৭ সেমি। এর তির্যক উচ্চতা কত? (π = 22/7)',
    options: ['২৫ সেমি', '২০ সেমি', '২২ সেমি', '২৪ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমগ্রতল $= \\pi r (r + l) = 704$' },
      { step: 'ধাপ ২:', content: '$\\frac{22}{7} × 7 × (7 + l) = 704$' },
      { step: 'ধাপ ৩:', content: '$22 × (7 + l) = 704 \\implies 7 + l = 32$' },
      { step: 'ধাপ ৪:', content: '$l = 25$ সেমি' }
    ],
    shortcutTrick: '💡 $\\pi r (r+l) = 704$; $r=7$ দিয়ে $l=25$'
  },
  {
    id: 'ch31_q37',
    text: 'একটি ছিন্ন শঙ্কুর বড় ব্যাসার্ধ ১৪ সেমি, ছোট ব্যাসার্ধ ৭ সেমি এবং উচ্চতা ১২ সেমি। এর তির্যক উচ্চতা কত?',
    options: ['১৩ সেমি', '১৪ সেমি', '১৫ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছিন্ন শঙ্কুর তির্যক উচ্চতা $l = \\sqrt{h^2 + (R - r)^2}$' },
      { step: 'ধাপ ২:', content: '$l = \\sqrt{12^2 + (14 - 7)^2} = \\sqrt{144 + 49}$' },
      { step: 'ধাপ ৩:', content: '$l = \\sqrt{193} \\approx 13.89$ সেমি' }
    ],
    shortcutTrick: '💡 $l = \\sqrt{h^2 + (R-r)^2}$; $R-r = 7$, $h=12$ দিলে $l = 13$'
  },
  {
    id: 'ch31_q38',
    text: 'একটি শঙ্কুর উচ্চতা ২৪ সেমি এবং তির্যক উচ্চতা ২৫ সেমি। এর আয়তন কত? (π = 3.14)',
    options: ['১২৩০.৮৮ ঘনসেমি', '১২০০ ঘনসেমি', '১২৫০ ঘনসেমি', '১১৮০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r = \\sqrt{l^2 - h^2} = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'আয়তন $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} × 3.14 × 49 × 24$' },
      { step: 'ধাপ ৩:', content: '$= 3.14 × 49 × 8 = 1230.88$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 প্রথমে $r$ বের করে আয়তন: $r=7$, আয়তন $= 1230.88$'
  },
  {
    id: 'ch31_q39',
    text: 'একটি ছিন্ন শঙ্কুর বড় ব্যাস ২০ সেমি, ছোট ব্যাস ১২ সেমি এবং উচ্চতা ৮ সেমি। এর বক্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['৪০২.২ বর্গসেমি', '৪০০ বর্গসেমি', '৪১০ বর্গসেমি', '৩৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$R = 10, r = 6, h = 8$' },
      { step: 'ধাপ ২:', content: '$l = \\sqrt{h^2 + (R-r)^2} = \\sqrt{64 + 16} = \\sqrt{80} \\approx 8.94$' },
      { step: 'ধাপ ৩:', content: 'বক্রতল $= \\pi l (R + r) = 3.14 × 8.94 × 16 \\approx 449.1$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $\\pi l (R+r)$ সূত্র প্রয়োগ করো'
  },
  {
    id: 'ch31_q40',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ১০ সেমি এবং উচ্চতা ২৪ সেমি। শঙ্কুটির সমগ্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['১৩২৬ বর্গসেমি', '১৩০০ বর্গসেমি', '১৩৫০ বর্গসেমি', '১২৮০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$l = \\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = 26$ সেমি' },
      { step: 'ধাপ ২:', content: 'সমগ্রতল $= \\pi r (r + l) = 3.14 × 10 × (10 + 26)$' },
      { step: 'ধাপ ৩:', content: '$= 31.4 × 36 = 1130.4$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $l=26$; সমগ্রতল $= \\pi r (r+l) = 3.14 × 10 × 36 = 1130.4$'
  },
  {
    id: 'ch31_q41',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ৫ সেমি এবং তির্যক উচ্চতা ১৩ সেমি। এর আয়তন কত? (π = 3.14)',
    options: ['৩১৪ ঘনসেমি', '৩০০ ঘনসেমি', '৩২০ ঘনসেমি', '২৯০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$h = \\sqrt{l^2 - r^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = 12$ সেমি' },
      { step: 'ধাপ ২:', content: 'আয়তন $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} × 3.14 × 25 × 12$' },
      { step: 'ধাপ ৩:', content: '$= 3.14 × 25 × 4 = 314$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $h=12$; আয়তন $= 1/3 × 3.14 × 25 × 12 = 314$'
  },
  {
    id: 'ch31_q42',
    text: 'একটি ছিন্ন শঙ্কুর বড় ব্যাসার্ধ ১২ সেমি, ছোট ব্যাসার্ধ ৮ সেমি এবং তির্যক উচ্চতা ১০ সেমি। এর উচ্চতা কত?',
    options: ['√৩৬ সেমি', '√৪০ সেমি', '√৪৪ সেমি', '√৫০ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$l^2 = h^2 + (R - r)^2$' },
      { step: 'ধাপ ২:', content: '$10^2 = h^2 + (12 - 8)^2 = h^2 + 16$' },
      { step: 'ধাপ ৩:', content: '$h^2 = 100 - 16 = 84 \\implies h = \\sqrt{84} = 2\\sqrt{21}$ সেমি' }
    ],
    shortcutTrick: '💡 $h = \\sqrt{l^2 - (R-r)^2} = \\sqrt{100 - 16} = \\sqrt{84}$'
  },
  {
    id: 'ch31_q43',
    text: 'একটি শঙ্কু ও একটি চোঙের ব্যাসার্ধ সমান। শঙ্কুর উচ্চতা চোঙের উচ্চতার ৩ গুণ। শঙ্কু ও চোঙের আয়তনের অনুপাত কত?',
    options: ['১ : ১', '১ : ২', '২ : ১', '১ : ৩'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 h$' },
      { step: 'ধাপ ২:', content: 'চোঙের আয়তন $= \\pi r^2 H$' },
      { step: 'ধাপ ৩:', content: 'শর্ত: $h = 3H$' },
      { step: 'ধাপ ৪:', content: 'শঙ্কু : চোঙ $= \\frac{1}{3}\\pi r^2 (3H) : \\pi r^2 H = 1 : 1$' }
    ],
    shortcutTrick: '💡 $\\frac{1}{3} × 3 = 1$; সুতরাং অনুপাত $1:1$'
  },
  {
    id: 'ch31_q44',
    text: 'একটি ছিন্ন শঙ্কুর বড় ও ছোট ব্যাসার্ধের অনুপাত ৩ : ২ এবং উচ্চতা ১৫ সেমি। ছিন্ন শঙ্কুটির আয়তন ১৬০০ ঘনসেমি হলে, বড় ব্যাসার্ধ কত? (π = 3.14)',
    options: ['৮ সেমি', '১০ সেমি', '১২ সেমি', '১৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$R = 3x, r = 2x$' },
      { step: 'ধাপ ২:', content: 'আয়তন $= \\frac{1}{3}\\pi h (R^2 + r^2 + Rr) = 1600$' },
      { step: 'ধাপ ৩:', content: '$\\frac{1}{3} × 3.14 × 15 × (9x^2 + 4x^2 + 6x^2) = 1600$' },
      { step: 'ধাপ ৪:', content: '$15.7 × 19x^2 = 1600 \\implies x^2 \\approx 5.36 \\implies x \\approx 2.31$' },
      { step: 'ধাপ ৫:', content: '$R = 3x \\approx 7$ সেমি' }
    ],
    shortcutTrick: '💡 $\\frac{1}{3}\\pi h (R^2+r^2+Rr)$ সূত্র ব্যবহার করে $R$ বের করো'
  },
  {
    id: 'ch31_q45',
    text: 'একটি শঙ্কুর সমগ্রতলের ক্ষেত্রফল ৫৪৬ বর্গসেমি এবং ব্যাসার্ধ ৭ সেমি। এর তির্যক উচ্চতা কত? (π = 22/7)',
    options: ['১৮ সেমি', '১৬ সেমি', '২০ সেমি', '২২ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\pi r (r + l) = 546$' },
      { step: 'ধাপ ২:', content: '$\\frac{22}{7} × 7 × (7 + l) = 546$' },
      { step: 'ধাপ ৩:', content: '$22 × (7 + l) = 546 \\implies 7 + l = 24.82$' },
      { step: 'ধাপ ৪:', content: '$l \\approx 18$ সেমি' }
    ],
    shortcutTrick: '💡 $l = \\frac{546}{\\pi r} - r$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: গোলক ও অর্ধগোলক (Sphere & Hemisphere) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q46',
    text: 'একটি গোলকের ব্যাসার্ধ ৭ সেমি। এর পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৬১৬ বর্গসেমি', '৬০০ বর্গসেমি', '৬২৫ বর্গসেমি', '৬৫০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের পৃষ্ঠতল $= 4\\pi r^2$' },
      { step: 'ধাপ ২:', content: '$= 4 × 22/7 × 7^2 = 4 × 22/7 × 49$' },
      { step: 'ধাপ ৩:', content: '$= 4 × 22 × 7 = 616$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $4\\pi r^2 = 4 × 22/7 × 49 = 616$'
  },
  {
    id: 'ch31_q47',
    text: 'একটি অর্ধগোলকের ব্যাসার্ধ ১০ সেমি। এর সমগ্রতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['৯৪২ বর্গসেমি', '৯৪০ বর্গসেমি', '৯৫০ বর্গসেমি', '৯৩০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অর্ধগোলকের সমগ্রতল $= 3\\pi r^2$' },
      { step: 'ধাপ ২:', content: '$= 3 × 3.14 × 10^2 = 3 × 3.14 × 100$' },
      { step: 'ধাপ ৩:', content: '$= 942$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $3\\pi r^2 = 3 × 3.14 × 100 = 942$'
  },
  {
    id: 'ch31_q48',
    text: 'একটি গোলকের আয়তন ৩৮৮০৮ ঘনসেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['২১ সেমি', '২০ সেমি', '২২ সেমি', '২৪ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের আয়তন $= \\frac{4}{3}\\pi r^3 = 38808$' },
      { step: 'ধাপ ২:', content: '$\\frac{4}{3} × 22/7 × r^3 = 38808$' },
      { step: 'ধাপ ৩:', content: '$r^3 = \\frac{38808 × 3 × 7}{4 × 22} = \\frac{814968}{88} = 9261$' },
      { step: 'ধাপ ৪:', content: '$r = \\sqrt[3]{9261} = 21$ সেমি' }
    ],
    shortcutTrick: '💡 $r^3 = \\frac{38808 × 21}{88} = 9261$; $r = 21$'
  },
  {
    id: 'ch31_q49',
    text: 'একটি অর্ধগোলকের বক্রতলের ক্ষেত্রফল ৩০৮ বর্গসেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['৭ সেমি', '৮ সেমি', '৯ সেমি', '১০ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অর্ধগোলকের বক্রতল $= 2\\pi r^2 = 308$' },
      { step: 'ধাপ ২:', content: '$2 × 22/7 × r^2 = 308$' },
      { step: 'ধাপ ৩:', content: '$r^2 = \\frac{308 × 7}{2 × 22} = \\frac{2156}{44} = 49$' },
      { step: 'ধাপ ৪:', content: '$r = 7$ সেমি' }
    ],
    shortcutTrick: '💡 $r^2 = \\frac{308}{2\\pi} = \\frac{308 × 7}{44} = 49$; $r=7$'
  },
  {
    id: 'ch31_q50',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল ১২৫৬ বর্গসেমি। এর আয়তন কত? (π = 3.14)',
    options: ['৪১৮৬.৬৭ ঘনসেমি', '৪০০০ ঘনসেমি', '৪২০০ ঘনসেমি', '৪১৫০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4\\pi r^2 = 1256$' },
      { step: 'ধাপ ২:', content: '$r^2 = \\frac{1256}{4 × 3.14} = \\frac{1256}{12.56} = 100$' },
      { step: 'ধাপ ৩:', content: '$r = 10$ সেমি' },
      { step: 'ধাপ ৪:', content: 'আয়তন $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} × 3.14 × 1000 = 4186.67$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 প্রথমে $r$ বের করে আয়তন: $r=10$, আয়তন $= 4186.67$'
  },
  {
    id: 'ch31_q51',
    text: 'একটি অর্ধগোলকের মোট পৃষ্ঠতলের ক্ষেত্রফল ৮৪৬ বর্গসেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['১০ সেমি', '১২ সেমি', '১৪ সেমি', '১৬ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3\\pi r^2 = 846$' },
      { step: 'ধাপ ২:', content: '$3 × 22/7 × r^2 = 846$' },
      { step: 'ধাপ ৩:', content: '$r^2 = \\frac{846 × 7}{66} = \\frac{5922}{66} = 89.72$' },
      { step: 'ধাপ ৪:', content: '$r \\approx 9.47$ সেমি' }
    ],
    shortcutTrick: '💡 $r^2 = \\frac{846}{3\\pi}$'
  },
  {
    id: 'ch31_q52',
    text: 'একটি গোলক ও একটি ঘনকের আয়তন সমান। গোলকের ব্যাসার্ধ ৩ সেমি হলে, ঘনকের বাহুর দৈর্ঘ্য কত? (π = 3.14)',
    options: ['৩.৩ সেমি', '৩ সেমি', '৪ সেমি', '৩.৫ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের আয়তন $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} × 3.14 × 27 = 113.04$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'ঘনকের আয়তন $= a^3 = 113.04$' },
      { step: 'ধাপ ৩:', content: '$a = \\sqrt[3]{113.04} \\approx 4.83$ সেমি' }
    ],
    shortcutTrick: '💡 $a = \\sqrt[3]{\\frac{4}{3}\\pi r^3}$'
  },
  {
    id: 'ch31_q53',
    text: 'একটি অর্ধগোলকের আয়তন ১৯৪০৪ ঘনসেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['২১ সেমি', '২০ সেমি', '২২ সেমি', '২৪ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অর্ধগোলকের আয়তন $= \\frac{2}{3}\\pi r^3 = 19404$' },
      { step: 'ধাপ ২:', content: '$\\frac{2}{3} × 22/7 × r^3 = 19404$' },
      { step: 'ধাপ ৩:', content: '$r^3 = \\frac{19404 × 3 × 7}{2 × 22} = \\frac{407484}{44} = 9261$' },
      { step: 'ধাপ ৪:', content: '$r = 21$ সেমি' }
    ],
    shortcutTrick: '💡 $r^3 = \\frac{19404 × 21}{44} = 9261$; $r=21$'
  },
  {
    id: 'ch31_q54',
    text: 'একটি গোলকের ব্যাস ১৪ সেমি। এর পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৬১৬ বর্গসেমি', '৬০০ বর্গসেমি', '৬২৫ বর্গসেমি', '৬৫০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'পৃষ্ঠতল $= 4\\pi r^2 = 4 × 22/7 × 49 = 616$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $4\\pi r^2 = 4 × 22/7 × 49 = 616$'
  },
  {
    id: 'ch31_q55',
    text: 'একটি অর্ধগোলকের বক্রতলের ক্ষেত্রফল ১২৩২ বর্গসেমি। এর ব্যাসার্ধ কত? (π = 22/7)',
    options: ['১৪ সেমি', '১২ সেমি', '১৬ সেমি', '১৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2\\pi r^2 = 1232$' },
      { step: 'ধাপ ২:', content: '$2 × 22/7 × r^2 = 1232$' },
      { step: 'ধাপ ৩:', content: '$r^2 = \\frac{1232 × 7}{44} = \\frac{8624}{44} = 196$' },
      { step: 'ধাপ ৪:', content: '$r = 14$ সেমি' }
    ],
    shortcutTrick: '💡 $r^2 = \\frac{1232}{2\\pi} = \\frac{1232 × 7}{44} = 196$; $r=14$'
  },
  {
    id: 'ch31_q56',
    text: 'একটি গোলকের ব্যাসার্ধ ৫০% বৃদ্ধি পেলে পৃষ্ঠতলের ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['১২৫%', '১০০%', '১৫০%', '২০০%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.5r$' },
      { step: 'ধাপ ৩:', content: 'নতুন পৃষ্ঠতল $= (1.5)^2 = 2.25$ গুণ' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 2.25 - 1 = 1.25 = 125\\%$' }
    ],
    shortcutTrick: '💡 $r$ ৫০% বাড়লে পৃষ্ঠতল $= (1.5)^2 - 1 = 2.25 - 1 = 125%$'
  },
  {
    id: 'ch31_q57',
    text: 'একটি অর্ধগোলকের সমগ্রতলের ক্ষেত্রফল ১৪৪π বর্গসেমি। এর ব্যাসার্ধ কত?',
    options: ['৪√৩ সেমি', '৬ সেমি', '৮ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3\\pi r^2 = 144\\pi$' },
      { step: 'ধাপ ২:', content: '$r^2 = \\frac{144\\pi}{3\\pi} = 48$' },
      { step: 'ধাপ ৩:', content: '$r = \\sqrt{48} = 4\\sqrt{3}$ সেমি' }
    ],
    shortcutTrick: '💡 $r = \\sqrt{144/3} = \\sqrt{48} = 4√3$'
  },
  {
    id: 'ch31_q58',
    text: 'একটি গোলক ও একটি অর্ধগোলকের ব্যাসার্ধ সমান। তাদের পৃষ্ঠতলের ক্ষেত্রফলের অনুপাত কত?',
    options: ['২ : ১', '৪ : ৩', '২ : ৩', '৪ : ১'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গোলকের পৃষ্ঠতল $= 4\\pi r^2$' },
      { step: 'ধাপ ২:', content: 'অর্ধগোলকের সমগ্রতল $= 3\\pi r^2$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত $= 4 : 3$' }
    ],
    shortcutTrick: '💡 $4\\pi r^2 : 3\\pi r^2 = 4 : 3$'
  },
  {
    id: 'ch31_q59',
    text: 'একটি গোলকের আয়তন ২৮৮π ঘনসেমি। এর ব্যাসার্ধ কত?',
    options: ['৬ সেমি', '৮ সেমি', '১০ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{4}{3}\\pi r^3 = 288\\pi$' },
      { step: 'ধাপ ২:', content: '$r^3 = \\frac{288\\pi × 3}{4\\pi} = 216$' },
      { step: 'ধাপ ৩:', content: '$r = \\sqrt[3]{216} = 6$ সেমি' }
    ],
    shortcutTrick: '💡 $r^3 = 216$; $r=6$'
  },
  {
    id: 'ch31_q60',
    text: 'একটি অর্ধগোলকের বক্রতলের ক্ষেত্রফল ৪৬২ বর্গসেমি। এর সমগ্রতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৬৯৩ বর্গসেমি', '৬৮০ বর্গসেমি', '৭০০ বর্গসেমি', '৬৭০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্রতল $= 2\\pi r^2 = 462$' },
      { step: 'ধাপ ২:', content: 'সমগ্রতল $= 3\\pi r^2 = \\frac{3}{2} × 2\\pi r^2 = \\frac{3}{2} × 462 = 693$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 সমগ্রতল $= \\frac{3}{2} ×$ বক্রতল $= 1.5 × 462 = 693$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: সংযুক্ত ঘনবস্তু (Combined Solids) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q61',
    text: 'একটি চোঙের ওপর একটি অর্ধগোলক বসানো আছে। চোঙের ব্যাসার্ধ ৭ সেমি এবং উচ্চতা ১০ সেমি। সমগ্র বস্তুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৭৪৮ বর্গসেমি', '৭০০ বর্গসেমি', '৭৫০ বর্গসেমি', '৭২০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের বক্রতল $= 2\\pi r h = 2 × 22/7 × 7 × 10 = 440$ বর্গসেমি' },
      { step: 'ধাপ ২:', content: 'অর্ধগোলকের বক্রতল $= 2\\pi r^2 = 2 × 22/7 × 49 = 308$ বর্গসেমি' },
      { step: 'ধাপ ৩:', content: 'মোট পৃষ্ঠতল $= 440 + 308 = 748$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r h + 2\\pi r^2 = 2\\pi r (h+r) = 2 × 22/7 × 7 × 17 = 748$'
  },
  {
    id: 'ch31_q62',
    text: 'একটি শঙ্কুর ওপর একটি অর্ধগোলক বসানো আছে। শঙ্কুর ব্যাসার্ধ ৬ সেমি এবং তির্যক উচ্চতা ১০ সেমি। সমগ্র বস্তুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['৩০১.৪৪ বর্গসেমি', '৩০০ বর্গসেমি', '৩১০ বর্গসেমি', '২৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শঙ্কুর বক্রতল $= \\pi r l = 3.14 × 6 × 10 = 188.4$ বর্গসেমি' },
      { step: 'ধাপ ২:', content: 'অর্ধগোলকের বক্রতল $= 2\\pi r^2 = 2 × 3.14 × 36 = 226.08$ বর্গসেমি' },
      { step: 'ধাপ ৩:', content: 'মোট $= 188.4 + 226.08 = 414.48$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r l + 2\\pi r^2 = \\pi r (l + 2r)$'
  },
  {
    id: 'ch31_q63',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য ১০ মিটার, প্রস্থ ৮ মিটার এবং উচ্চতা ৬ মিটার। এর কর্ণের দৈর্ঘ্য কত?',
    options: ['১০√২ মিটার', '১২ মিটার', '১৪ মিটার', '১৫ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তঘনকের কর্ণ $= \\sqrt{l^2 + b^2 + h^2}$' },
      { step: 'ধাপ ২:', content: '$= \\sqrt{10^2 + 8^2 + 6^2} = \\sqrt{100 + 64 + 36} = \\sqrt{200}$' },
      { step: 'ধাপ ৩:', content: '$= 10\\sqrt{2}$ মিটার' }
    ],
    shortcutTrick: '💡 $\\sqrt{100+64+36} = \\sqrt{200} = 10√2$'
  },
  {
    id: 'ch31_q64',
    text: 'একটি চোঙের ওপর একটি শঙ্কু বসানো আছে। চোঙের ব্যাসার্ধ ৫ সেমি, উচ্চতা ১২ সেমি এবং শঙ্কুর উচ্চতা ৪ সেমি। সমগ্র বস্তুটির আয়তন কত? (π = 3.14)',
    options: ['১০৪৬.৬৭ ঘনসেমি', '১০০০ ঘনসেমি', '১০৫০ ঘনসেমি', '১০২০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 h = 3.14 × 25 × 12 = 942$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 H = \\frac{1}{3} × 3.14 × 25 × 4 = 104.67$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'মোট $= 942 + 104.67 = 1046.67$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r^2 (h + \\frac{H}{3}) = 3.14 × 25 × (12 + 4/3) = 1046.67$'
  },
  {
    id: 'ch31_q65',
    text: 'একটি ঘনকের বাহু ৬ সেমি। এর কর্ণের দৈর্ঘ্য কত?',
    options: ['৬√৩ সেমি', '৬√২ সেমি', '৬ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের কর্ণ $= a\\sqrt{3} = 6\\sqrt{3}$ সেমি' }
    ],
    shortcutTrick: '💡 $a√3 = 6√3$'
  },
  {
    id: 'ch31_q66',
    text: 'একটি চোঙের ভিতরে একটি শঙ্কু বসানো আছে। চোঙের ব্যাসার্ধ ১০ সেমি, উচ্চতা ১৫ সেমি এবং শঙ্কুর উচ্চতা ১০ সেমি। চোঙের ফাঁকা অংশের আয়তন কত? (π = 3.14)',
    options: ['৩৬৬৩.৩৩ ঘনসেমি', '৩৬০০ ঘনসেমি', '৩৭০০ ঘনসেমি', '৩৫০০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 H = 3.14 × 100 × 15 = 4710$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} × 3.14 × 100 × 10 = 1046.67$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'ফাঁকা অংশ $= 4710 - 1046.67 = 3663.33$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r^2 (H - h/3)$'
  },
  {
    id: 'ch31_q67',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য, প্রস্থ ও উচ্চতার অনুপাত ৩ : ২ : ১ এবং সমগ্রতলের ক্ষেত্রফল ৮৮ বর্গমিটার। এর আয়তন কত?',
    options: ['৪৮ ঘনমিটার', '৪৪ ঘনমিটার', '৫২ ঘনমিটার', '৫৬ ঘনমিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $l = 3x, b = 2x, h = x$' },
      { step: 'ধাপ ২:', content: 'সমগ্রতল $= 2(lb + bh + hl) = 2(6x^2 + 2x^2 + 3x^2) = 22x^2 = 88$' },
      { step: 'ধাপ ৩:', content: '$x^2 = 4 \\implies x = 2$' },
      { step: 'ধাপ ৪:', content: 'আয়তন $= l × b × h = 6 × 4 × 2 = 48$ ঘনমিটার' }
    ],
    shortcutTrick: '💡 $x = √(88/22) = 2$; আয়তন $= 6×4×2 = 48$'
  },
  {
    id: 'ch31_q68',
    text: 'একটি চোঙের ওপর একটি অর্ধগোলক বসানো একটি বস্তুর মোট উচ্চতা ২০ সেমি এবং চোঙের ব্যাস ১৪ সেমি। বস্তুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['১০৫৬ বর্গসেমি', '১০০০ বর্গসেমি', '১১০০ বর্গসেমি', '১০২০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'অর্ধগোলকের ব্যাসার্ধ = চোঙের ব্যাসার্ধ = 7' },
      { step: 'ধাপ ৩:', content: 'চোঙের উচ্চতা $= 20 - 7 = 13$ সেমি' },
      { step: 'ধাপ ৪:', content: 'মোট পৃষ্ঠতল $= 2\\pi r h + 2\\pi r^2 = 2 × 22/7 × 7 × 13 + 2 × 22/7 × 49$' },
      { step: 'ধাপ ৫:', content: '$= 572 + 308 = 880$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $2\\pi r (h+r) = 2 × 22/7 × 7 × 20 = 880$'
  },
  {
    id: 'ch31_q69',
    text: 'একটি শঙ্কুর ওপর একটি অর্ধগোলক বসানো বস্তুর মোট উচ্চতা ১৮ সেমি এবং ব্যাস ১২ সেমি। বস্তুটির আয়তন কত? (π = 3.14)',
    options: ['৯০৪.৩২ ঘনসেমি', '৯০০ ঘনসেমি', '৯১০ ঘনসেমি', '৮৯০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 6$ সেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর উচ্চতা $= 18 - 6 = 12$ সেমি' },
      { step: 'ধাপ ৩:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} × 3.14 × 36 × 12 = 452.16$ ঘনসেমি' },
      { step: 'ধাপ ৪:', content: 'অর্ধগোলকের আয়তন $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} × 3.14 × 216 = 452.16$ ঘনসেমি' },
      { step: 'ধাপ ৫:', content: 'মোট $= 904.32$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2 (h + 2r)$'
  },
  {
    id: 'ch31_q70',
    text: 'একটি আয়তঘনকের কর্ণ ১৩ মিটার এবং দৈর্ঘ্য, প্রস্থ ও উচ্চতার অনুপাত ৬ : ৪ : ৩। আয়তঘনকের আয়তন কত?',
    options: ['২৮৮ ঘনমিটার', '২৫০ ঘনমিটার', '৩০০ ঘনমিটার', '২৭০ ঘনমিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $l = 6x, b = 4x, h = 3x$' },
      { step: 'ধাপ ২:', content: 'কর্ণ $= \\sqrt{(6x)^2 + (4x)^2 + (3x)^2} = \\sqrt{36x^2 + 16x^2 + 9x^2} = \\sqrt{61x^2}$' },
      { step: 'ধাপ ৩:', content: '$\\sqrt{61}x = 13 \\implies x = \\frac{13}{\\sqrt{61}}$' },
      { step: 'ধাপ ৪:', content: 'আয়তন $= 6x × 4x × 3x = 72x^3 = 72 × \\frac{2197}{61\\sqrt{61}} \\approx 288$' }
    ],
    shortcutTrick: '💡 $x = 13/\\sqrt{61}$; আয়তন $= 72x^3$'
  },
  {
    id: 'ch31_q71',
    text: 'একটি চোঙের ভিতরে একটি গোলক বসানো আছে। চোঙের ব্যাসার্ধ ৬ সেমি এবং উচ্চতা ১২ সেমি। গোলকের ব্যাসার্ধ ৬ সেমি হলে, চোঙের ফাঁকা অংশের আয়তন কত? (π = 3.14)',
    options: ['৪৫২.১৬ ঘনসেমি', '৪৫০ ঘনসেমি', '৪৬০ ঘনসেমি', '৪৪০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 h = 3.14 × 36 × 12 = 1356.48$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'গোলকের আয়তন $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} × 3.14 × 216 = 904.32$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'ফাঁকা $= 1356.48 - 904.32 = 452.16$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r^2 h - \\frac{4}{3}\\pi r^3 = \\pi r^2 (h - \\frac{4}{3}r)$'
  },
  {
    id: 'ch31_q72',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য ১২ মিটার, প্রস্থ ৫ মিটার এবং উচ্চতা ৪ মিটার। এর সমগ্রতলের ক্ষেত্রফল কত?',
    options: ['২৫৬ বর্গমিটার', '২৫০ বর্গমিটার', '২৬০ বর্গমিটার', '২৪০ বর্গমিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$= 2(lb + bh + hl) = 2(12×5 + 5×4 + 4×12)$' },
      { step: 'ধাপ ২:', content: '$= 2(60 + 20 + 48) = 2 × 128 = 256$ বর্গমিটার' }
    ],
    shortcutTrick: '💡 $2(60+20+48) = 256$'
  },
  {
    id: 'ch31_q73',
    text: 'একটি শঙ্কুর ওপর একটি অর্ধগোলক বসানো বস্তুর ব্যাস ১৪ সেমি এবং মোট উচ্চতা ১৭ সেমি। বস্তুটির মোট পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 22/7)',
    options: ['৬৩২ বর্গসেমি', '৬০০ বর্গসেমি', '৬৫০ বর্গসেমি', '৬২০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর উচ্চতা $= 17 - 7 = 10$ সেমি' },
      { step: 'ধাপ ৩:', content: 'শঙ্কুর তির্যক উচ্চতা $l = \\sqrt{7^2 + 10^2} = \\sqrt{149} \\approx 12.2$ সেমি' },
      { step: 'ধাপ ৪:', content: 'শঙ্কুর বক্রতল $= \\pi r l = 22/7 × 7 × 12.2 = 268.4$' },
      { step: 'ধাপ ৫:', content: 'অর্ধগোলকের বক্রতল $= 2\\pi r^2 = 2 × 22/7 × 49 = 308$' },
      { step: 'ধাপ ৬:', content: 'মোট $= 268.4 + 308 = 576.4$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r (l + 2r)$'
  },
  {
    id: 'ch31_q74',
    text: 'একটি চোঙের ওপর একটি শঙ্কু বসানো বস্তুর মোট উচ্চতা ২৪ সেমি এবং ব্যাস ১৪ সেমি। চোঙের উচ্চতা ১৪ সেমি হলে, বস্তুটির আয়তন কত? (π = 22/7)',
    options: ['২৭১৩.৩৩ ঘনসেমি', '২৭০০ ঘনসেমি', '২৭২০ ঘনসেমি', '২৬৮০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 7$ সেমি' },
      { step: 'ধাপ ২:', content: 'শঙ্কুর উচ্চতা $= 24 - 14 = 10$ সেমি' },
      { step: 'ধাপ ৩:', content: 'চোঙের আয়তন $= \\pi r^2 h = 22/7 × 49 × 14 = 2156$' },
      { step: 'ধাপ ৪:', content: 'শঙ্কুর আয়তন $= \\frac{1}{3}\\pi r^2 H = \\frac{1}{3} × 22/7 × 49 × 10 = 513.33$' },
      { step: 'ধাপ ৫:', content: 'মোট $= 2156 + 513.33 = 2669.33$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $\\pi r^2 (h + H/3)$'
  },
  {
    id: 'ch31_q75',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য, প্রস্থ ও উচ্চতার সমষ্টি ১৯ মিটার এবং কর্ণ ১১ মিটার। এর সমগ্রতলের ক্ষেত্রফল কত?',
    options: ['২৪০ বর্গমিটার', '২৩০ বর্গমিটার', '২৫০ বর্গমিটার', '২২০ বর্গমিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$l + b + h = 19$' },
      { step: 'ধাপ ২:', content: 'কর্ণ $\\sqrt{l^2 + b^2 + h^2} = 11 \\implies l^2 + b^2 + h^2 = 121$' },
      { step: 'ধাপ ৩:', content: '$(l+b+h)^2 = l^2 + b^2 + h^2 + 2(lb+bh+hl)$' },
      { step: 'ধাপ ৪:', content: '$19^2 = 121 + 2(lb+bh+hl) \\implies 361 = 121 + 2S$' },
      { step: 'ধাপ ৫:', content: '$2S = 240 \\implies S = 120$' },
      { step: 'ধাপ ৬:', content: 'সমগ্রতল $= 2S = 240$ বর্গমিটার' }
    ],
    shortcutTrick: '💡 $2(lb+bh+hl) = (l+b+h)^2 - (l^2+b^2+h^2) = 361 - 121 = 240$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: পরিবর্তন জনিত ক্ষেত্রফল ও আয়তন (Area/Volume from Changes) (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q76',
    text: 'একটি বৃত্তের ব্যাসার্ধ ২০% বৃদ্ধি পেলে ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৪৪%', '৪০%', '২০%', '২৫%'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.2r$' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল $= (1.2)^2 = 1.44$ গুণ' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 1.44 - 1 = 0.44 = 44\\%$' }
    ],
    shortcutTrick: '💡 $r$ ২০% বাড়লে ক্ষেত্রফল $= (1.2)^2 - 1 = 1.44 - 1 = 44%$'
  },
  {
    id: 'ch31_q77',
    text: 'একটি গোলকের ব্যাসার্ধ ১০% হ্রাস পেলে আয়তন কত শতাংশ হ্রাস পাবে?',
    options: ['২৭.১%', '২৫%', '৩০%', '২০%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto r^3$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 0.9r$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (0.9)^3 = 0.729$ গুণ' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= 1 - 0.729 = 0.271 = 27.1\\%$' }
    ],
    shortcutTrick: '💡 $r$ ১০% কমলে আয়তন $= 1 - (0.9)^3 = 1 - 0.729 = 27.1%$'
  },
  {
    id: 'ch31_q78',
    text: 'একটি চোঙের ব্যাসার্ধ ২০% বৃদ্ধি এবং উচ্চতা ১০% হ্রাস পেলে আয়তনের শতকরা পরিবর্তন কত?',
    options: ['২৯.৬% বৃদ্ধি', '৩০% বৃদ্ধি', '২৫% বৃদ্ধি', '২০% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto r^2 h$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.2r$, নতুন $h = 0.9h$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (1.2)^2 × 0.9 = 1.44 × 0.9 = 1.296$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 1.296 - 1 = 0.296 = 29.6\\%$' }
    ],
    shortcutTrick: '💡 $r$ ২০% বাড়লে ও $h$ ১০% কমলে আয়তন $= (1.2)^2 × 0.9 = 1.296$; বৃদ্ধি $= 29.6%$'
  },
  {
    id: 'ch31_q79',
    text: 'একটি বর্গক্ষেত্রের বাহু ৩০% বৃদ্ধি পেলে ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৬৯%', '৬০%', '৭০%', '৬৫%'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $\\propto a^2$' },
      { step: 'ধাপ ২:', content: 'নতুন $a = 1.3a$' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল $= (1.3)^2 = 1.69$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 0.69 = 69\\%$' }
    ],
    shortcutTrick: '💡 $a$ ৩০% বাড়লে ক্ষেত্রফল $= (1.3)^2 - 1 = 1.69 - 1 = 69%$'
  },
  {
    id: 'ch31_q80',
    text: 'একটি চোঙের ব্যাসার্ধ অর্ধেক এবং উচ্চতা দ্বিগুণ করা হলে আয়তনের শতকরা পরিবর্তন কত?',
    options: ['৫০% হ্রাস', '২৫% হ্রাস', '৫০% বৃদ্ধি', '২৫% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নতুন $r = 0.5r$, নতুন $h = 2h$' },
      { step: 'ধাপ ২:', content: 'নতুন আয়তন $= (0.5)^2 × 2 = 0.25 × 2 = 0.5$' },
      { step: 'ধাপ ৩:', content: 'হ্রাস $= 1 - 0.5 = 0.5 = 50\\%$' }
    ],
    shortcutTrick: '💡 $r$ অর্ধেক ও $h$ দ্বিগুণ করলে আয়তন $= (1/2)^2 × 2 = 1/2$; ৫০% হ্রাস'
  },
  {
    id: 'ch31_q81',
    text: 'একটি গোলকের ব্যাসার্ধ ৫০% বৃদ্ধি পেলে পৃষ্ঠতলের ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['১২৫%', '১০০%', '১৫০%', '২০০%'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পৃষ্ঠতল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.5r$' },
      { step: 'ধাপ ৩:', content: 'নতুন পৃষ্ঠতল $= (1.5)^2 = 2.25$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 2.25 - 1 = 1.25 = 125\\%$' }
    ],
    shortcutTrick: '💡 $r$ ৫০% বাড়লে পৃষ্ঠতল $= (1.5)^2 - 1 = 2.25 - 1 = 125%$'
  },
  {
    id: 'ch31_q82',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ২৫% বৃদ্ধি এবং প্রস্থ ২০% হ্রাস পেলে ক্ষেত্রফলের শতকরা পরিবর্তন কত?',
    options: ['০%', '৫% বৃদ্ধি', '৫% হ্রাস', '১০% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $\\propto l × b$' },
      { step: 'ধাপ ২:', content: 'নতুন $l = 1.25l$, নতুন $b = 0.8b$' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল $= 1.25 × 0.8 = 1.0$' },
      { step: 'ধাপ ৪:', content: 'পরিবর্তন $= 0\\%$' }
    ],
    shortcutTrick: '💡 $l$ ২৫% বাড়লে ও $b$ ২০% কমলে $1.25 × 0.8 = 1$; কোন পরিবর্তন নেই'
  },
  {
    id: 'ch31_q83',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ১০% এবং উচ্চতা ২০% বৃদ্ধি পেলে আয়তন কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৪৫.২%', '৪০%', '৫০%', '৪২%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto r^2 h$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.1r$, নতুন $h = 1.2h$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (1.1)^2 × 1.2 = 1.21 × 1.2 = 1.452$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 1.452 - 1 = 0.452 = 45.2\\%$' }
    ],
    shortcutTrick: '💡 $r$ ১০% ও $h$ ২০% বাড়লে আয়তন $= (1.1)^2 × 1.2 = 1.452$; বৃদ্ধি $= 45.2%$'
  },
  {
    id: 'ch31_q84',
    text: 'একটি অর্ধগোলকের ব্যাস ২০% হ্রাস পেলে বক্রতলের ক্ষেত্রফল কত শতাংশ হ্রাস পাবে?',
    options: ['৩৬%', '৪০%', '২০%', '৩২%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্রতল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'ব্যাস ২০% কমলে ব্যাসার্ধও ২০% কমে' },
      { step: 'ধাপ ৩:', content: 'নতুন $r = 0.8r$' },
      { step: 'ধাপ ৪:', content: 'নতুন বক্রতল $= (0.8)^2 = 0.64$' },
      { step: 'ধাপ ৫:', content: 'হ্রাস $= 1 - 0.64 = 0.36 = 36\\%$' }
    ],
    shortcutTrick: '💡 ব্যাস ২০% কমলে বক্রতল $= 1 - (0.8)^2 = 1 - 0.64 = 36%$'
  },
  {
    id: 'ch31_q85',
    text: 'একটি আয়তঘনকের প্রতিটি বাহু ২০% বৃদ্ধি পেলে আয়তন কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৭২.৮%', '৬০%', '৮০%', '৭০%'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto a^3$' },
      { step: 'ধাপ ২:', content: 'নতুন $a = 1.2a$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (1.2)^3 = 1.728$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 0.728 = 72.8\\%$' }
    ],
    shortcutTrick: '💡 $a$ ২০% বাড়লে আয়তন $= (1.2)^3 - 1 = 1.728 - 1 = 72.8%$'
  },
  {
    id: 'ch31_q86',
    text: 'একটি চোঙের ব্যাসার্ধ ৩০% বৃদ্ধি এবং উচ্চতা ৩০% হ্রাস পেলে বক্রতলের ক্ষেত্রফলের শতকরা পরিবর্তন কত?',
    options: ['৯% হ্রাস', '১০% হ্রাস', '০%', '৯% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বক্রতল $\\propto r h$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.3r$, নতুন $h = 0.7h$' },
      { step: 'ধাপ ৩:', content: 'নতুন বক্রতল $= 1.3 × 0.7 = 0.91$' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= 1 - 0.91 = 0.09 = 9\\%$' }
    ],
    shortcutTrick: '💡 $r$ ৩০% বাড়লে ও $h$ ৩০% কমলে $1.3 × 0.7 = 0.91$; ৯% হ্রাস'
  },
  {
    id: 'ch31_q87',
    text: 'একটি বৃত্তের ব্যাসার্ধ দ্বিগুণ করা হলে ক্ষেত্রফল কত গুণ বৃদ্ধি পায়?',
    options: ['৪ গুণ', '২ গুণ', '৬ গুণ', '৮ গুণ'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $\\propto r^2$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 2r$' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল $= (2)^2 = 4$ গুণ' }
    ],
    shortcutTrick: '💡 $r$ দ্বিগুণ করলে ক্ষেত্রফল $= 2^2 = 4$ গুণ হয়'
  },
  {
    id: 'ch31_q88',
    text: 'একটি গোলকের ব্যাসার্ধ ২০% হ্রাস পেলে আয়তন কত শতাংশ হ্রাস পাবে?',
    options: ['৪৮.৮%', '৫০%', '৪৫%', '৪০%'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto r^3$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 0.8r$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (0.8)^3 = 0.512$' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= 1 - 0.512 = 0.488 = 48.8\\%$' }
    ],
    shortcutTrick: '💡 $r$ ২০% কমলে আয়তন $= 1 - (0.8)^3 = 1 - 0.512 = 48.8%$'
  },
  {
    id: 'ch31_q89',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ৫০% বৃদ্ধি এবং উচ্চতা ২০% হ্রাস পেলে আয়তনের শতকরা পরিবর্তন কত?',
    options: ['৮০% বৃদ্ধি', '৮০% হ্রাস', '৭০% বৃদ্ধি', '৬০% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto r^2 h$' },
      { step: 'ধাপ ২:', content: 'নতুন $r = 1.5r$, নতুন $h = 0.8h$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= (1.5)^2 × 0.8 = 2.25 × 0.8 = 1.8$' },
      { step: 'ধাপ ৪:', content: 'বৃদ্ধি $= 1.8 - 1 = 0.8 = 80\\%$' }
    ],
    shortcutTrick: '💡 $r$ ৫০% বাড়লে ও $h$ ২০% কমলে আয়তন $= (1.5)^2 × 0.8 = 1.8$; ৮০% বৃদ্ধি'
  },
  {
    id: 'ch31_q90',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য ১০% বৃদ্ধি, প্রস্থ ২০% বৃদ্ধি এবং উচ্চতা ৩০% হ্রাস পেলে আয়তনের শতকরা পরিবর্তন কত?',
    options: ['৭.৬% হ্রাস', '৮% হ্রাস', '৭.৬% বৃদ্ধি', '৮% বৃদ্ধি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তন $\\propto l × b × h$' },
      { step: 'ধাপ ২:', content: 'নতুন $l = 1.1l$, $b = 1.2b$, $h = 0.7h$' },
      { step: 'ধাপ ৩:', content: 'নতুন আয়তন $= 1.1 × 1.2 × 0.7 = 0.924$' },
      { step: 'ধাপ ৪:', content: 'হ্রাস $= 1 - 0.924 = 0.076 = 7.6\\%$' }
    ],
    shortcutTrick: '💡 $1.1 × 1.2 × 0.7 = 0.924$; ৭.৬% হ্রাস'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: সর্বোচ্চ ও সর্বনিম্ন (Maximum and Minimum) (Q91-Q95)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q91',
    text: 'একটি আয়তক্ষেত্রের পরিসীমা ৪০ মিটার। এর ক্ষেত্রফল সর্বোচ্চ কত হতে পারে?',
    options: ['১০০ বর্গমিটার', '৯৬ বর্গমিটার', '১০৪ বর্গমিটার', '১০৮ বর্গমিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা $2(l + b) = 40 \\implies l + b = 20$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল সর্বোচ্চ হবে যখন $l = b$ অর্থাৎ বর্গক্ষেত্র' },
      { step: 'ধাপ ৩:', content: '$l = b = 10$ মিটার' },
      { step: 'ধাপ ৪:', content: 'ক্ষেত্রফল $= 10 × 10 = 100$ বর্গমিটার' }
    ],
    shortcutTrick: '💡 পরিসীমা স্থির থাকলে বর্গক্ষেত্রের ক্ষেত্রফল সর্বোচ্চ: $(40/4)^2 = 100$'
  },
  {
    id: 'ch31_q92',
    text: 'একটি আয়তক্ষেত্রের ক্ষেত্রফল ১০০ বর্গমিটার। এর পরিসীমা সর্বনিম্ন কত হতে পারে?',
    options: ['৪০ মিটার', '৩৬ মিটার', '৪৪ মিটার', '৪৮ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $l × b = 100$' },
      { step: 'ধাপ ২:', content: 'পরিসীমা সর্বনিম্ন হবে যখন $l = b = \\sqrt{100} = 10$' },
      { step: 'ধাপ ৩:', content: 'পরিসীমা $= 4 × 10 = 40$ মিটার' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল স্থির থাকলে বর্গক্ষেত্রের পরিসীমা সর্বনিম্ন: $4√100 = 40$'
  },
  {
    id: 'ch31_q93',
    text: 'একটি চোঙের মোট পৃষ্ঠতল ২১৬π বর্গসেমি হলে, এর আয়তন সর্বোচ্চ কত হতে পারে?',
    options: ['২১৬π ঘনসেমি', '২৫০π ঘনসেমি', '২২৫π ঘনসেমি', '২০০π ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমগ্রতল $= 2\\pi r (r + h) = 216\\pi$' },
      { step: 'ধাপ ২:', content: 'আয়তন সর্বোচ্চ হবে যখন $h = 2r$' },
      { step: 'ধাপ ৩:', content: '$2\\pi r (r + 2r) = 6\\pi r^2 = 216\\pi \\implies r^2 = 36$' },
      { step: 'ধাপ ৪:', content: '$r = 6, h = 12$' },
      { step: 'ধাপ ৫:', content: 'আয়তন $= \\pi r^2 h = \\pi × 36 × 12 = 432\\pi$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $r = √(216/6) = 6$; আয়তন $= 2\\pi r^3 = 2 × 216 × π = 432π$'
  },
  {
    id: 'ch31_q94',
    text: 'একটি বর্গক্ষেত্রের কর্ণ ১০√২ সেমি। এর ক্ষেত্রফল কত?',
    options: ['১০০ বর্গসেমি', '৫০ বর্গসেমি', '২০০ বর্গসেমি', '২৫ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ $= a\\sqrt{2} = 10\\sqrt{2}$' },
      { step: 'ধাপ ২:', content: '$a = 10$ সেমি' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল $= a^2 = 100$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $a = 10$; ক্ষেত্রফল $= 100$'
  },
  {
    id: 'ch31_q95',
    text: 'একটি আয়তঘনকের সমগ্রতলের ক্ষেত্রফল ৮৬৪ বর্গসেমি। এর আয়তন সর্বোচ্চ কত হতে পারে?',
    options: ['১৭২৮ ঘনসেমি', '১৬০০ ঘনসেমি', '১৮০০ ঘনসেমি', '১৬৪০ ঘনসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমগ্রতল $= 6a^2 = 864 \\implies a^2 = 144$' },
      { step: 'ধাপ ২:', content: '$a = 12$ সেমি' },
      { step: 'ধাপ ৩:', content: 'আয়তন $= a^3 = 12^3 = 1728$ ঘনসেমি' }
    ],
    shortcutTrick: '💡 $a = √(864/6) = 12$; আয়তন $= 12^3 = 1728$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও উচ্চতর জটিল সমস্যা (Advanced Mixed Problems) (Q96-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch31_q96',
    text: 'একটি ঘনক গলিয়ে ১ সেমি ব্যাসার্ধের কতগুলি গোলক তৈরি করা সম্ভব? (ঘনকের বাহু ৬ সেমি, π = 3.14)',
    options: ['১৪৪টি', '১৪০টি', '১৫০টি', '১৩০টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘনকের আয়তন $= 6^3 = 216$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'একটি গোলকের আয়তন $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} × 3.14 × 1 = 4.186$ ঘনসেমি' },
      { step: 'ধাপ ৩:', content: 'সংখ্যা $= \\frac{216}{4.186} \\approx 51.6$' }
    ],
    shortcutTrick: '💡 $n = \\frac{a^3}{\\frac{4}{3}\\pi r^3}$'
  },
  {
    id: 'ch31_q97',
    text: 'একটি চোঙের ব্যাস ২১ সেমি এবং উচ্চতা ১০ সেমি। এটি গলিয়ে ৩ সেমি ব্যাসার্ধের একটি গোলক তৈরি করা হলো। গোলকের উচ্চতা কত? (π = 22/7)',
    options: ['২০ সেমি', '২২ সেমি', '১৮ সেমি', '২৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোঙের আয়তন $= \\pi r^2 h = 22/7 × (10.5)^2 × 10 = 3465$ ঘনসেমি' },
      { step: 'ধাপ ২:', content: 'গোলকের আয়তন $= \\frac{4}{3}\\pi R^3 = 3465$' },
      { step: 'ধাপ ৩:', content: '$R^3 = \\frac{3465 × 3 × 7}{4 × 22} = \\frac{72765}{88} \\approx 827.33$' },
      { step: 'ধাপ ৪:', content: '$R \\approx 9.4$ সেমি' }
    ],
    shortcutTrick: '💡 $R = \\sqrt[3]{\\frac{3V}{4\\pi}}$'
  },
  {
    id: 'ch31_q98',
    text: 'একটি আয়তঘনকের দৈর্ঘ্য ৮ মিটার, প্রস্থ ৬ মিটার এবং উচ্চতা ৪ মিটার। এর সমগ্রতলের ক্ষেত্রফল কত?',
    options: ['২০৮ বর্গমিটার', '২০০ বর্গমিটার', '২১০ বর্গমিটার', '১৯২ বর্গমিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$= 2(lb + bh + hl) = 2(8×6 + 6×4 + 4×8)$' },
      { step: 'ধাপ ২:', content: '$= 2(48 + 24 + 32) = 2 × 104 = 208$ বর্গমিটার' }
    ],
    shortcutTrick: '💡 $2(48+24+32) = 208$'
  },
  {
    id: 'ch31_q99',
    text: 'একটি শঙ্কুর ব্যাসার্ধ ৬ সেমি এবং উচ্চতা ৮ সেমি। এর তির্যক উচ্চতা কত?',
    options: ['১০ সেমি', '১২ সেমি', '৮ সেমি', '১৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$l = \\sqrt{r^2 + h^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100}$' },
      { step: 'ধাপ ২:', content: '$l = 10$ সেমি' }
    ],
    shortcutTrick: '💡 ৬-৮-১০ পিথাগোরাসের ত্রয়ী, তির্যক উচ্চতা = ১০ সেমি'
  },
  {
    id: 'ch31_q100',
    text: 'একটি গোলকের ব্যাস ২০ সেমি। এর পৃষ্ঠতলের ক্ষেত্রফল কত? (π = 3.14)',
    options: ['১২৫৬ বর্গসেমি', '১৩০০ বর্গসেমি', '১২০০ বর্গসেমি', '১১৮০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 10$ সেমি' },
      { step: 'ধাপ ২:', content: 'পৃষ্ঠতল $= 4\\pi r^2 = 4 × 3.14 × 100 = 1256$ বর্গসেমি' }
    ],
    shortcutTrick: '💡 $4\\pi r^2 = 4 × 3.14 × 100 = 1256$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter31Questions;
}

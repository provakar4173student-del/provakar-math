// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 26: চতুর্ভুজ ও বহুভুজ (Quadrilaterals & Polygons) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter26Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: চতুর্ভুজের মৌলিক ধর্ম (Basic Properties of Quadrilaterals) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q1',
    text: 'একটি চতুর্ভুজের চারটি কোণের অনুপাত $3 : 4 : 5 : 6$ হলে, বৃহত্তম কোণটির মান কত?',
    options: ['১০০°', '১২০°', '১৪০°', '১৬০°'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চতুর্ভুজের চারটি কোণের সমষ্টি $360°$।' },
      { step: 'ধাপ ২:', content: 'অনুপাতগুলির সমষ্টি = $3 + 4 + 5 + 6 = 18$।' },
      { step: 'ধাপ ৩:', content: 'একটি অংশের মান = $\\frac{360}{18} = 20°$।' },
      { step: 'ধাপ ৪:', content: 'বৃহত্তম কোণ = $6 \\times 20 = 120°$।' }
    ],
    shortcutTrick: '💡 সমষ্টি ১৮ ভাগ = ৩৬০° → ১ ভাগ = ২০°। বৃহত্তম ৬ ভাগ = ১২০°।'
  },
  {
    id: 'ch26_q2',
    text: 'একটি চতুর্ভুজের তিনটি কোণের মান যথাক্রমে $75°, 85°$ এবং $95°$ হলে, চতুর্থ কোণটির মান কত?',
    options: ['১০৫°', '১১৫°', '৯৫°', '৮৫°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চতুর্ভুজের কোণগুলির সমষ্টি = $360°$।' },
      { step: 'ধাপ ২:', content: 'প্রথম তিনটি কোণের সমষ্টি = $75 + 85 + 95 = 255°$।' },
      { step: 'ধাপ ৩:', content: 'চতুর্থ কোণ = $360 - 255 = 105°$।' }
    ],
    shortcutTrick: '💡 চতুর্থ কোণ = ৩৬০° - (অন্যগুলির সমষ্টি) = ৩৬০ - ২৫৫ = ১০৫°।'
  },
  {
    id: 'ch26_q3',
    text: 'একটি চতুর্ভুজের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করলে চতুর্ভুজটি কী নামে পরিচিত?',
    options: ['ট্রাপিজিয়াম', 'সামান্তরিক', 'আয়তক্ষেত্র', 'বর্গক্ষেত্র'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করে।' },
      { step: 'ধাপ ২:', content: 'আয়তক্ষেত্র ও বর্গক্ষেত্রও সামান্তরিকের বিশেষ রূপ, কিন্তু সাধারণভাবে উত্তর হবে সামান্তরিক।' }
    ],
    shortcutTrick: '💡 সামান্তরিকের কর্ণদ্বয় পরস্পরকে সমদ্বিখণ্ডিত করে—এটিই প্রধান বৈশিষ্ট্য।'
  },
  {
    id: 'ch26_q4',
    text: 'একটি সামান্তরিকের সন্নিহিত কোণদ্বয়ের অনুপাত $2 : 3$ হলে, কোণদ্বয়ের মান কত?',
    options: ['৭২° ও ১০৮°', '৬০° ও ১২০°', '৮০° ও ১০০°', '৭০° ও ১১০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের সন্নিহিত কোণদ্বয়ের সমষ্টি $180°$।' },
      { step: 'ধাপ ২:', content: 'অনুপাতের সমষ্টি = $2 + 3 = 5$।' },
      { step: 'ধাপ ৩:', content: 'একটি অংশ = $\\frac{180}{5} = 36°$।' },
      { step: 'ধাপ ৪:', content: 'কোণদ্বয় = $2 \\times 36 = 72°$ ও $3 \\times 36 = 108°$।' }
    ],
    shortcutTrick: '💡 ৫ ভাগ = ১৮০° → ১ ভাগ = ৩৬°। কোণ = ৭২° ও ১০৮°।'
  },
  {
    id: 'ch26_q5',
    text: 'একটি রম্বসের কর্ণদ্বয়ের দৈর্ঘ্য $12$ সেমি ও $16$ সেমি হলে, রম্বসের বাহুর দৈর্ঘ্য কত?',
    options: ['১০ সেমি', '১২ সেমি', '১৪ সেমি', '৮ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে।' },
      { step: 'ধাপ ২:', content: 'কর্ণদ্বয়ের অর্ধেক যথাক্রমে $6$ ও $8$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'পিথাগোরাসের উপপাদ্য প্রয়োগ: $\\text{বাহু}^2 = 6^2 + 8^2 = 36 + 64 = 100$।' },
      { step: 'ধাপ ৪:', content: 'বাহু = $\\sqrt{100} = 10$ সেমি।' }
    ],
    shortcutTrick: '💡 রম্বসের বাহু = $\\sqrt{(d_1/2)^2 + (d_2/2)^2} = \\sqrt{6^2 + 8^2} = 10$ সেমি।'
  },
  {
    id: 'ch26_q6',
    text: 'একটি আয়তক্ষেত্রের কর্ণের দৈর্ঘ্য $13$ সেমি এবং দৈর্ঘ্য $12$ সেমি হলে, প্রস্থ কত?',
    options: ['৫ সেমি', '৬ সেমি', '৭ সেমি', '৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আয়তক্ষেত্রে কর্ণ² = দৈর্ঘ্য² + প্রস্থ²' },
      { step: 'ধাপ ২:', content: '$13^2 = 12^2 + b^2 \\Rightarrow 169 = 144 + b^2$' },
      { step: 'ধাপ ৩:', content: '$b^2 = 169 - 144 = 25 \\Rightarrow b = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 ৫-১২-১৩ পিথাগোরিয়ান ত্রয়ী—প্রস্থ = ৫ সেমি।'
  },
  {
    id: 'ch26_q7',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহু দুইটির দৈর্ঘ্য $10$ সেমি ও $14$ সেমি এবং উচ্চতা $8$ সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['৯৬ বর্গসেমি', '৮৪ বর্গসেমি', '১১২ বর্গসেমি', '১০০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রাপিজিয়ামের ক্ষেত্রফল = $\\frac{1}{2} \\times (\\text{সমান্তরাল বাহুর সমষ্টি}) \\times \\text{উচ্চতা}$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times (10 + 14) \\times 8 = \\frac{1}{2} \\times 24 \\times 8 = 96$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = (১০+১৪) × ৮ ÷ ২ = ২৪ × ৪ = ৯৬ বর্গসেমি।'
  },
  {
    id: 'ch26_q8',
    text: 'একটি সামান্তরিকের ভূমি $15$ সেমি এবং উচ্চতা $10$ সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['১৫০ বর্গসেমি', '১২০ বর্গসেমি', '১৬০ বর্গসেমি', '১৪০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের ক্ষেত্রফল = ভূমি × উচ্চতা' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $15 \\times 10 = 150$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 সামান্তরিকের ক্ষেত্রফল = ভূমি × উচ্চতা = ১৫ × ১০ = ১৫০ বর্গসেমি।'
  },
  {
    id: 'ch26_q9',
    text: 'একটি বর্গক্ষেত্রের কর্ণের দৈর্ঘ্য $10\\sqrt{2}$ সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['১০০ বর্গসেমি', '৫০ বর্গসেমি', '২০০ বর্গসেমি', '৭৫ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গক্ষেত্রের কর্ণ = $a\\sqrt{2}$, যেখানে $a$ বাহু।' },
      { step: 'ধাপ ২:', content: '$a\\sqrt{2} = 10\\sqrt{2} \\Rightarrow a = 10$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $a^2 = 10^2 = 100$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 কর্ণ $= a\\sqrt{2}$। $a = 10$। ক্ষেত্রফল $= ১০^২ = ১০০$ বর্গসেমি।'
  },
  {
    id: 'ch26_q10',
    text: 'একটি চতুর্ভুজের চারটি কোণের সমষ্টি কত ডিগ্রি?',
    options: ['১৮০°', '২৭০°', '৩৬০°', '৪৫০°'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেকোনো চতুর্ভুজের চারটি কোণের সমষ্টি $360°$।' }
    ],
    shortcutTrick: '💡 চতুর্ভুজের কোণসমষ্টি = ৩৬০° (স্মরণীয় সূত্র)।'
  },
  {
    id: 'ch26_q11',
    text: 'একটি সামান্তরিকের একটি কোণ $110°$ হলে, তার সন্নিহিত কোণটির মান কত?',
    options: ['৭০°', '৮০°', '৯০°', '১১০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের সন্নিহিত কোণদ্বয়ের সমষ্টি $180°$।' },
      { step: 'ধাপ ২:', content: 'সন্নিহিত কোণ = $180 - 110 = 70°$।' }
    ],
    shortcutTrick: '💡 সন্নিহিত কোণ = ১৮০° - ১১০° = ৭০°।'
  },
  {
    id: 'ch26_q12',
    text: 'একটি চতুর্ভুজের তিনটি কোণ $110°, 70°, 80°$ হলে, চতুর্থ কোণটি কত?',
    options: ['১০০°', '১২০°', '৯০°', '১১০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চতুর্ভুজের কোণসমষ্টি = $360°$।' },
      { step: 'ধাপ ২:', content: 'প্রথম তিনটির সমষ্টি = $110 + 70 + 80 = 260°$।' },
      { step: 'ধাপ ৩:', content: 'চতুর্থ কোণ = $360 - 260 = 100°$।' }
    ],
    shortcutTrick: '💡 চতুর্থ কোণ = ৩৬০ - (১১০+৭০+৮০) = ১০০°।'
  },
  {
    id: 'ch26_q13',
    text: 'একটি রম্বসের কর্ণদ্বয়ের দৈর্ঘ্য $8$ সেমি ও $6$ সেমি হলে, রম্বসটির ক্ষেত্রফল কত?',
    options: ['২৪ বর্গসেমি', '৪৮ বর্গসেমি', '১২ বর্গসেমি', '৩৬ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রম্বসের ক্ষেত্রফল = $\\frac{1}{2} \\times d_1 \\times d_2$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 8 \\times 6 = 24$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 রম্বসের ক্ষেত্রফল = $\\frac{1}{2} \\times$ কর্ণদ্বয়ের গুণফল = ২৪ বর্গসেমি।'
  },
  {
    id: 'ch26_q14',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত $3 : 2$ এবং পরিসীমা $40$ সেমি হলে, দৈর্ঘ্য কত?',
    options: ['১২ সেমি', '৮ সেমি', '১০ সেমি', '১৪ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা = $2(\\text{দৈর্ঘ্য} + \\text{প্রস্থ}) = 40$' },
      { step: 'ধাপ ২:', content: 'দৈর্ঘ্য + প্রস্থ = $20$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'অনুপাতের সমষ্টি = $3 + 2 = 5$।' },
      { step: 'ধাপ ৪:', content: 'দৈর্ঘ্য = $\\frac{3}{5} \\times 20 = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 ৫ ভাগ = ২০ → ১ ভাগ = ৪ → দৈর্ঘ্য ৩ ভাগ = ১২ সেমি।'
  },
  {
    id: 'ch26_q15',
    text: 'একটি বর্গক্ষেত্রের বাহু $4$ সেমি বৃদ্ধি করলে ক্ষেত্রফল $88$ বর্গসেমি বৃদ্ধি পায়। বর্গক্ষেত্রটির মূল বাহু কত?',
    options: ['৬ সেমি', '৭ সেমি', '৮ সেমি', '৯ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মূল বাহু = $a$ সেমি। নতুন বাহু = $a + 4$।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল বৃদ্ধি = $(a+4)^2 - a^2 = 88$' },
      { step: 'ধাপ ৩:', content: '$a^2 + 8a + 16 - a^2 = 88 \\Rightarrow 8a + 16 = 88$' },
      { step: 'ধাপ ৪:', content: '$8a = 72 \\Rightarrow a = 9$ সেমি।' }
    ],
    shortcutTrick: '💡 $8a + 16 = 88 \\Rightarrow 8a = 72 \\Rightarrow a = 9$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সামান্তরিক ও রম্বস (Parallelogram & Rhombus) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q16',
    text: 'একটি সামান্তরিকের দুটি সন্নিহিত বাহুর দৈর্ঘ্য $12$ সেমি ও $8$ সেমি এবং তাদের অন্তর্ভুক্ত কোণ $60°$। সামান্তরিকটির ক্ষেত্রফল কত?',
    options: ['$48\\sqrt{3}$ বর্গসেমি', '$96\\sqrt{3}$ বর্গসেমি', '$48$ বর্গসেমি', '$96$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের ক্ষেত্রফল = $ab \\sin \\theta$' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 12$, $b = 8$, $\\theta = 60°$।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $12 \\times 8 \\times \\sin 60° = 96 \\times \\frac{\\sqrt{3}}{2} = 48\\sqrt{3}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $96 \\times \\frac{\\sqrt{3}}{2} = 48\\sqrt{3}$ বর্গসেমি।'
  },
  {
    id: 'ch26_q17',
    text: 'একটি সামান্তরিকের কর্ণদ্বয়ের দৈর্ঘ্য $10$ সেমি ও $12$ সেমি এবং তারা $60°$ কোণে ছেদ করে। সামান্তরিকটির ক্ষেত্রফল কত?',
    options: ['$30\\sqrt{3}$ বর্গসেমি', '$60\\sqrt{3}$ বর্গসেমি', '$120$ বর্গসেমি', '$60$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের ক্ষেত্রফল = $\\frac{1}{2} d_1 d_2 \\sin \\theta$' },
      { step: 'ধাপ ২:', content: '$d_1 = 10$, $d_2 = 12$, $\\theta = 60°$' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 10 \\times 12 \\times \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = $\\frac{1}{2} d_1 d_2 \\sin \\theta = 30\\sqrt{3}$ বর্গসেমি।'
  },
  {
    id: 'ch26_q18',
    text: 'একটি রম্বসের বাহুর দৈর্ঘ্য $5$ সেমি এবং একটি কর্ণের দৈর্ঘ্য $6$ সেমি হলে, অপর কর্ণের দৈর্ঘ্য কত?',
    options: ['৮ সেমি', '৬ সেমি', '১০ সেমি', '৪ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রম্বসের কর্ণদ্বয় পরস্পরকে সমকোণে সমদ্বিখণ্ডিত করে।' },
      { step: 'ধাপ ২:', content: 'একটি কর্ণ = 6, এর অর্ধেক = 3। বাহু = 5।' },
      { step: 'ধাপ ৩:', content: 'অপর কর্ণের অর্ধেক = $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$।' },
      { step: 'ধাপ ৪:', content: 'অপর কর্ণ = $2 \\times 4 = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $5^2 = 3^2 + x^2 \\Rightarrow x = 4$। অপর কর্ণ = $2 \\times 4 = 8$ সেমি।'
  },
  {
    id: 'ch26_q19',
    text: 'একটি সামান্তরিকের সন্নিহিত বাহু $a$ ও $b$ এবং অন্তর্ভুক্ত কোণ $\\theta$ হলে, ক্ষেত্রফল কত?',
    options: ['$ab \\sin \\theta$', '$ab \\cos \\theta$', '$\\frac{1}{2} ab \\sin \\theta$', '$\\frac{1}{2} ab \\cos \\theta$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের ক্ষেত্রফল = $ab \\sin \\theta$' }
    ],
    shortcutTrick: '💡 সামান্তরিকের ক্ষেত্রফল = $ab \\sin \\theta$।'
  },
  {
    id: 'ch26_q20',
    text: 'একটি রম্বসের কর্ণদ্বয় $24$ সেমি ও $10$ সেমি হলে, রম্বসটির পরিসীমা কত?',
    options: ['৫২ সেমি', '৪৮ সেমি', '৬০ সেমি', '৫৬ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রম্বসের বাহু = $\\sqrt{(d_1/2)^2 + (d_2/2)^2}$' },
      { step: 'ধাপ ২:', content: 'বাহু = $\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'পরিসীমা = $4 \\times 13 = 52$ সেমি।' }
    ],
    shortcutTrick: '💡 ৫-১২-১৩ ত্রয়ী → বাহু ১৩ সেমি → পরিসীমা ৫২ সেমি।'
  },
  {
    id: 'ch26_q21',
    text: 'একটি সামান্তরিকের ভূমি $18$ সেমি এবং উচ্চতা $12$ সেমি। যদি ভূমি $6$ সেমি কমিয়ে উচ্চতা $4$ সেমি বাড়ানো হয়, তবে ক্ষেত্রফলের পরিবর্তন কত?',
    options: ['বৃদ্ধি ১২ বর্গসেমি', 'হ্রাস ১২ বর্গসেমি', 'বৃদ্ধি ২৪ বর্গসেমি', 'হ্রাস ২৪ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আদি ক্ষেত্রফল = $18 \\times 12 = 216$ বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'নতুন ভূমি = $18 - 6 = 12$ সেমি, নতুন উচ্চতা = $12 + 4 = 16$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল = $12 \\times 16 = 192$ বর্গসেমি।' },
      { step: 'ধাপ ৪:', content: 'পরিবর্তন = $216 - 192 = 24$ বর্গসেমি হ্রাস।' }
    ],
    shortcutTrick: '💡 ২১৬ - ১৯২ = ২৪ বর্গসেমি হ্রাস।'
  },
  {
    id: 'ch26_q22',
    text: 'একটি রম্বসের বাহু $10$ সেমি এবং একটি কর্ণ $12$ সেমি হলে, অপর কর্ণের দৈর্ঘ্য কত?',
    options: ['১৬ সেমি', '১৪ সেমি', '১৮ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একটি কর্ণের অর্ধেক = $6$ সেমি।' },
      { step: 'ধাপ ২:', content: '$10^2 = 6^2 + x^2 \\Rightarrow 100 = 36 + x^2 \\Rightarrow x^2 = 64 \\Rightarrow x = 8$।' },
      { step: 'ধাপ ৩:', content: 'অপর কর্ণ = $2 \\times 8 = 16$ সেমি।' }
    ],
    shortcutTrick: '💡 $10^2 - 6^2 = 64 \\Rightarrow x = 8$। অপর কর্ণ = ১৬ সেমি।'
  },
  {
    id: 'ch26_q23',
    text: 'একটি সামান্তরিকের সন্নিহিত বাহুর দৈর্ঘ্য $x$ ও $y$ এবং অন্তর্ভুক্ত কোণ $45°$। এর ক্ষেত্রফল $6\\sqrt{2}$ বর্গসেমি এবং $xy = 12$ হলে, $x$ ও $y$-এর মান কত?',
    options: ['৩ ও ৪', '২ ও ৬', '১ ও ১২', '৪ ও ৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $xy \\sin 45° = xy \\times \\frac{1}{\\sqrt{2}} = 6\\sqrt{2}$' },
      { step: 'ধাপ ২:', content: '$xy = 6\\sqrt{2} \\times \\sqrt{2} = 12$' },
      { step: 'ধাপ ৩:', content: '$xy = 12$ এবং $x, y$ ধনাত্মক পূর্ণসংখ্যা — সম্ভাব্য জোড়া (৩,৪) বা (৪,৩)।' }
    ],
    shortcutTrick: '💡 $xy = 12$ এবং ৩ × ৪ = ১২ → $x = 3, y = 4$।'
  },
  {
    id: 'ch26_q24',
    text: 'একটি রম্বসের পরিসীমা $40$ সেমি এবং একটি কর্ণ $12$ সেমি হলে, অপর কর্ণের দৈর্ঘ্য কত?',
    options: ['১৬ সেমি', '১২ সেমি', '২০ সেমি', '১০ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাহু = $40/4 = 10$ সেমি।' },
      { step: 'ধাপ ২:', content: 'একটি কর্ণের অর্ধেক = $6$ সেমি।' },
      { step: 'ধাপ ৩:', content: '$10^2 = 6^2 + x^2 \\Rightarrow x^2 = 100 - 36 = 64 \\Rightarrow x = 8$।' },
      { step: 'ধাপ ৪:', content: 'অপর কর্ণ = $2 \\times 8 = 16$ সেমি।' }
    ],
    shortcutTrick: '💡 বাহু ১০, কর্ণের অর্ধেক ৬ → অপর কর্ণের অর্ধেক ৮ → কর্ণ ১৬ সেমি।'
  },
  {
    id: 'ch26_q25',
    text: 'একটি সামান্তরিকের সন্নিহিত কোণদ্বয়ের অন্তর $40°$ হলে, কোণদ্বয়ের মান কত?',
    options: ['১১০° ও ৭০°', '১২০° ও ৬০°', '১০০° ও ৮০°', '১৩০° ও ৫০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কোণদ্বয় $x$ ও $y$।' },
      { step: 'ধাপ ২:', content: '$x + y = 180°$ এবং $x - y = 40°$' },
      { step: 'ধাপ ৩:', content: 'যোগ করে: $2x = 220° \\Rightarrow x = 110°$' },
      { step: 'ধাপ ৪:', content: '$y = 180 - 110 = 70°$' }
    ],
    shortcutTrick: '💡 $(180 + 40)/2 = 110°$ এবং $(180 - 40)/2 = 70°$।'
  },
  {
    id: 'ch26_q26',
    text: 'একটি রম্বসের কর্ণদ্বয়ের গুণফল $48$ বর্গসেমি হলে, রম্বসটির ক্ষেত্রফল কত?',
    options: ['২৪ বর্গসেমি', '৪৮ বর্গসেমি', '১২ বর্গসেমি', '৩৬ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রম্বসের ক্ষেত্রফল = $\\frac{1}{2} \\times d_1 \\times d_2$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 48 = 24$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = কর্ণদ্বয়ের গুণফলের অর্ধেক = ২৪ বর্গসেমি।'
  },
  {
    id: 'ch26_q27',
    text: 'একটি সামান্তরিকের একটি কোণ $120°$ হলে, বিপরীত কোণটির মান কত?',
    options: ['১২০°', '৬০°', '৮০°', '১০০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সামান্তরিকের বিপরীত কোণগুলি সমান।' },
      { step: 'ধাপ ২:', content: 'সুতরাং বিপরীত কোণ = $120°$।' }
    ],
    shortcutTrick: '💡 সামান্তরিকের বিপরীত কোণ সমান → ১২০°।'
  },
  {
    id: 'ch26_q28',
    text: 'একটি রম্বসের ক্ষেত্রফল $96$ বর্গসেমি এবং একটি কর্ণ $16$ সেমি হলে, অপর কর্ণের দৈর্ঘ্য কত?',
    options: ['১২ সেমি', '১০ সেমি', '১৪ সেমি', '৮ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times d_1 \\times d_2$' },
      { step: 'ধাপ ২:', content: '$96 = \\frac{1}{2} \\times 16 \\times d_2 \\Rightarrow 96 = 8d_2 \\Rightarrow d_2 = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $d_2 = \\frac{2 \\times 96}{16} = 12$ সেমি।'
  },
  {
    id: 'ch26_q29',
    text: 'একটি সামান্তরিকের সন্নিহিত বাহুর দৈর্ঘ্য $5$ সেমি ও $7$ সেমি এবং অন্তর্ভুক্ত কোণ $30°$ হলে, ক্ষেত্রফল কত?',
    options: ['$\\frac{35}{2}$ বর্গসেমি', '$\\frac{35\\sqrt{3}}{2}$ বর্গসেমি', '$35$ বর্গসেমি', '$\\frac{35\\sqrt{2}}{2}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $ab \\sin \\theta = 5 \\times 7 \\times \\sin 30°$' },
      { step: 'ধাপ ২:', content: '$35 \\times \\frac{1}{2} = \\frac{35}{2}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $35 \\times \\frac{1}{2} = 17.5$ বর্গসেমি।'
  },
  {
    id: 'ch26_q30',
    text: 'একটি রম্বসের কর্ণদ্বয়ের অনুপাত $3 : 4$ এবং ক্ষেত্রফল $24$ বর্গসেমি হলে, বড় কর্ণটির দৈর্ঘ্য কত?',
    options: ['৮ সেমি', '৬ সেমি', '১০ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কর্ণদ্বয় $3x$ ও $4x$।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 3x \\times 4x = 6x^2 = 24$' },
      { step: 'ধাপ ৩:', content: '$x^2 = 4 \\Rightarrow x = 2$' },
      { step: 'ধাপ ৪:', content: 'বড় কর্ণ = $4 \\times 2 = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $6x^2 = 24 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$। বড় কর্ণ = ৮ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: আয়তক্ষেত্র ও বর্গক্ষেত্র (Rectangle & Square) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q31',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $20$ সেমি এবং প্রস্থ $15$ সেমি হলে, কর্ণের দৈর্ঘ্য কত?',
    options: ['২৫ সেমি', '২৪ সেমি', '২৬ সেমি', '২৮ সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ² = দৈর্ঘ্য² + প্রস্থ²' },
      { step: 'ধাপ ২:', content: '$d^2 = 20^2 + 15^2 = 400 + 225 = 625$' },
      { step: 'ধাপ ৩:', content: '$d = \\sqrt{625} = 25$ সেমি।' }
    ],
    shortcutTrick: '💡 ১৫-২০-২৫ পিথাগোরিয়ান ত্রয়ী → কর্ণ ২৫ সেমি।'
  },
  {
    id: 'ch26_q32',
    text: 'একটি বর্গক্ষেত্রের ক্ষেত্রফল $144$ বর্গসেমি হলে, এর কর্ণের দৈর্ঘ্য কত?',
    options: ['$12\\sqrt{2}$ সেমি', '$12$ সেমি', '$24$ সেমি', '$6\\sqrt{2}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $= a^2 = 144 \\Rightarrow a = 12$ সেমি।' },
      { step: 'ধাপ ২:', content: 'কর্ণ = $a\\sqrt{2} = 12\\sqrt{2}$ সেমি।' }
    ],
    shortcutTrick: '💡 বাহু = ১২ সেমি → কর্ণ = $১২\\sqrt{2}$ সেমি।'
  },
  {
    id: 'ch26_q33',
    text: 'একটি আয়তক্ষেত্রের কর্ণ $17$ সেমি এবং দৈর্ঘ্য $15$ সেমি হলে, প্রস্থ কত?',
    options: ['৮ সেমি', '৯ সেমি', '১০ সেমি', '৭ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$17^2 = 15^2 + b^2 \\Rightarrow 289 = 225 + b^2$' },
      { step: 'ধাপ ২:', content: '$b^2 = 64 \\Rightarrow b = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 ৮-১৫-১৭ পিথাগোরিয়ান ত্রয়ী → প্রস্থ ৮ সেমি।'
  },
  {
    id: 'ch26_q34',
    text: 'একটি বর্গক্ষেত্রের কর্ণ $8\\sqrt{2}$ সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['৬৪ বর্গসেমি', '৩২ বর্গসেমি', '১২৮ বর্গসেমি', '১৬ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ $= a\\sqrt{2} = 8\\sqrt{2} \\Rightarrow a = 8$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $a^2 = 64$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 বাহু = ৮ সেমি → ক্ষেত্রফল = ৬৪ বর্গসেমি।'
  },
  {
    id: 'ch26_q35',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $12$ সেমি এবং কর্ণ $13$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['৬০ বর্গসেমি', '৭২ বর্গসেমি', '৪৮ বর্গসেমি', '৮০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$13^2 = 12^2 + b^2 \\Rightarrow 169 = 144 + b^2 \\Rightarrow b^2 = 25 \\Rightarrow b = 5$।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $12 \\times 5 = 60$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ৫-১২-১৩ → প্রস্থ ৫ সেমি → ক্ষেত্রফল ৬০ বর্গসেমি।'
  },
  {
    id: 'ch26_q36',
    text: 'একটি বর্গক্ষেত্রের পরিসীমা $48$ সেমি হলে, এর কর্ণের দৈর্ঘ্য কত?',
    options: ['$12\\sqrt{2}$ সেমি', '$12$ সেমি', '$24$ সেমি', '$8\\sqrt{2}$ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা = $4a = 48 \\Rightarrow a = 12$ সেমি।' },
      { step: 'ধাপ ২:', content: 'কর্ণ = $a\\sqrt{2} = 12\\sqrt{2}$ সেমি।' }
    ],
    shortcutTrick: '💡 বাহু ১২ সেমি → কর্ণ $১২\\sqrt{2}$ সেমি।'
  },
  {
    id: 'ch26_q37',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত $5 : 3$ এবং ক্ষেত্রফল $135$ বর্গসেমি হলে, পরিসীমা কত?',
    options: ['৪৮ সেমি', '৪০ সেমি', '৫০ সেমি', '৪৫ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য $5x$, প্রস্থ $3x$।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $5x \\times 3x = 15x^2 = 135$' },
      { step: 'ধাপ ৩:', content: '$x^2 = 9 \\Rightarrow x = 3$' },
      { step: 'ধাপ ৪:', content: 'দৈর্ঘ্য = ১৫, প্রস্থ = ৯। পরিসীমা = $2(15+9) = 48$ সেমি।' }
    ],
    shortcutTrick: '💡 $15x^2 = 135 \\Rightarrow x = 3$ → দৈর্ঘ্য ১৫, প্রস্থ ৯ → পরিসীমা ৪৮ সেমি।'
  },
  {
    id: 'ch26_q38',
    text: 'একটি বর্গক্ষেত্রের কর্ণের দৈর্ঘ্য $10$ সেমি হলে, এর পরিসীমা কত?',
    options: ['$20\\sqrt{2}$ সেমি', '$40$ সেমি', '$20$ সেমি', '$10\\sqrt{2}$ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a\\sqrt{2} = 10 \\Rightarrow a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$ সেমি।' },
      { step: 'ধাপ ২:', content: 'পরিসীমা = $4a = 20\\sqrt{2}$ সেমি।' }
    ],
    shortcutTrick: '💡 $a = 5\\sqrt{2}$ → পরিসীমা = $20\\sqrt{2}$ সেমি।'
  },
  {
    id: 'ch26_q39',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $3$ সেমি বৃদ্ধি এবং প্রস্থ $2$ সেমি হ্রাস করলে ক্ষেত্রফল অপরিবর্তিত থাকে। দৈর্ঘ্য ও প্রস্থের গুণফল কত?',
    options: ['৬', '৮', '১০', '১২'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য $l$, প্রস্থ $b$।' },
      { step: 'ধাপ ২:', content: '$lb = (l+3)(b-2) \\Rightarrow lb = lb - 2l + 3b - 6$' },
      { step: 'ধাপ ৩:', content: '$0 = -2l + 3b - 6 \\Rightarrow 2l - 3b = -6$' },
      { step: 'ধাপ ৪:', content: 'অপর শর্ত ছাড়া $lb$ নির্ণয় সম্ভব নয়—সম্ভবত ডেটা অপর্যাপ্ত।' }
    ],
    shortcutTrick: '💡 ডেটা অপর্যাপ্ত, $lb$ নির্ণয় সম্ভব নয়।'
  },
  {
    id: 'ch26_q40',
    text: 'একটি আয়তক্ষেত্রের পরিসীমা $100$ মিটার এবং ক্ষেত্রফল $600$ বর্গমিটার হলে, দৈর্ঘ্য ও প্রস্থের অন্তর কত?',
    options: ['১০ মিটার', '২০ মিটার', '১৫ মিটার', '৫ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2(l+b) = 100 \\Rightarrow l+b = 50$' },
      { step: 'ধাপ ২:', content: '$lb = 600$' },
      { step: 'ধাপ ৩:', content: '$l-b = \\sqrt{(l+b)^2 - 4lb} = \\sqrt{2500 - 2400} = \\sqrt{100} = 10$ মিটার।' }
    ],
    shortcutTrick: '💡 $l-b = \\sqrt{50^2 - 4 \\times 600} = \\sqrt{2500 - 2400} = 10$ মিটার।'
  },
  {
    id: 'ch26_q41',
    text: 'একটি বর্গক্ষেত্রের প্রতিটি বাহু $20\%$ বৃদ্ধি করলে ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?',
    options: ['৪৪%', '৪০%', '২০%', '৩৬%'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মূল বাহু $a$। নতুন বাহু = $1.2a$।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল বৃদ্ধি = $(1.2a)^2 - a^2 = 1.44a^2 - a^2 = 0.44a^2$' },
      { step: 'ধাপ ৩:', content: 'শতকরা বৃদ্ধি = $0.44 \\times 100 = 44\\%$' }
    ],
    shortcutTrick: '💡 $20\\%$ বৃদ্ধিতে ক্ষেত্রফল বৃদ্ধি = $2 \\times 20 + \\frac{20^2}{100} = 40 + 4 = 44\\%$।'
  },
  {
    id: 'ch26_q42',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $10$ সেমি ও প্রস্থ $6$ সেমি। দৈর্ঘ্য $2$ সেমি বাড়ালে এবং প্রস্থ $1$ সেমি কমালে ক্ষেত্রফলের পরিবর্তন কত?',
    options: ['বৃদ্ধি ২ বর্গসেমি', 'হ্রাস ২ বর্গসেমি', 'বৃদ্ধি ৪ বর্গসেমি', 'হ্রাস ৪ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আদি ক্ষেত্রফল = $10 \\times 6 = 60$ বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'নতুন দৈর্ঘ্য = $12$, নতুন প্রস্থ = $5$।' },
      { step: 'ধাপ ৩:', content: 'নতুন ক্ষেত্রফল = $12 \\times 5 = 60$ বর্গসেমি।' },
      { step: 'ধাপ ৪:', content: 'পরিবর্তন = $60 - 60 = 0$ (অপরিবর্তিত)।' }
    ],
    shortcutTrick: '💡 ১০×৬ = ৬০; ১২×৫ = ৬০ → ক্ষেত্রফল অপরিবর্তিত।'
  },
  {
    id: 'ch26_q43',
    text: 'একটি বর্গক্ষেত্রের পরিসীমা একটি আয়তক্ষেত্রের পরিসীমার সমান। আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত $3 : 2$ এবং ক্ষেত্রফল $216$ বর্গসেমি হলে, বর্গক্ষেত্রের ক্ষেত্রফল কত?',
    options: ['২২৫ বর্গসেমি', '২৪০ বর্গসেমি', '২০০ বর্গসেমি', '২৫০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য $3x$, প্রস্থ $2x$। ক্ষেত্রফল = $6x^2 = 216 \\Rightarrow x^2 = 36 \\Rightarrow x = 6$।' },
      { step: 'ধাপ ২:', content: 'দৈর্ঘ্য = ১৮, প্রস্থ = ১২। আয়তক্ষেত্রের পরিসীমা = $2(18+12) = 60$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'বর্গক্ষেত্রের পরিসীমা = 60 ⇒ বাহু = 15 সেমি।' },
      { step: 'ধাপ ৪:', content: 'বর্গক্ষেত্রের ক্ষেত্রফল = $15^2 = 225$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $x^2 = 36$ → $x=6$ → পরিসীমা ৬০ → বাহু ১৫ → ক্ষেত্রফল ২২৫ বর্গসেমি।'
  },
  {
    id: 'ch26_q44',
    text: 'একটি আয়তক্ষেত্রের কর্ণ $15$ সেমি এবং ক্ষেত্রফল $108$ বর্গসেমি হলে, পরিসীমা কত?',
    options: ['৪২ সেমি', '৩৬ সেমি', '৪৮ সেমি', '৩০ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$l^2 + b^2 = 15^2 = 225$ এবং $lb = 108$' },
      { step: 'ধাপ ২:', content: '$(l+b)^2 = l^2 + b^2 + 2lb = 225 + 216 = 441$' },
      { step: 'ধাপ ৩:', content: '$l+b = \\sqrt{441} = 21$ সেমি।' },
      { step: 'ধাপ ৪:', content: 'পরিসীমা = $2(l+b) = 42$ সেমি।' }
    ],
    shortcutTrick: '💡 $(l+b)^2 = 225 + 2×108 = 441$ → $l+b = 21$ → পরিসীমা ৪২ সেমি।'
  },
  {
    id: 'ch26_q45',
    text: 'একটি বর্গক্ষেত্রের কর্ণ $6\\sqrt{2}$ সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['৩৬ বর্গসেমি', '১৮ বর্গসেমি', '৭২ বর্গসেমি', '২৪ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণ = $a\\sqrt{2} = 6\\sqrt{2} \\Rightarrow a = 6$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $a^2 = 36$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 বাহু = ৬ সেমি → ক্ষেত্রফল = ৩৬ বর্গসেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ট্রাপিজিয়াম (Trapezium) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q46',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $10$ সেমি ও $6$ সেমি এবং উচ্চতা $8$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['৬৪ বর্গসেমি', '৪৮ বর্গসেমি', '৮০ বর্গসেমি', '৫৬ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(a+b)h = \\frac{1}{2}(10+6) \\times 8$' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{2} \\times 16 \\times 8 = 64$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল = (১০+৬) × ৮ ÷ ২ = ১৬ × ৪ = ৬৪ বর্গসেমি।'
  },
  {
    id: 'ch26_q47',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $a$ ও $b$ এবং উচ্চতা $h$ হলে, ক্ষেত্রফল কত?',
    options: ['$\\frac{1}{2}(a+b)h$', '$(a+b)h$', '$\\frac{1}{2}(a-b)h$', '$\\frac{1}{2}ab h$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ট্রাপিজিয়ামের ক্ষেত্রফল = $\\frac{1}{2}(a+b)h$' }
    ],
    shortcutTrick: '💡 ট্রাপিজিয়ামের ক্ষেত্রফল = $\\frac{1}{2}$ (সমান্তরাল বাহুর সমষ্টি) × উচ্চতা।'
  },
  {
    id: 'ch26_q48',
    text: 'একটি ট্রাপিজিয়ামের ক্ষেত্রফল $120$ বর্গসেমি, সমান্তরাল বাহুর দৈর্ঘ্য $12$ সেমি ও $18$ সেমি হলে, উচ্চতা কত?',
    options: ['৮ সেমি', '১০ সেমি', '৬ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$120 = \\frac{1}{2}(12+18) \\times h = \\frac{1}{2} \\times 30 \\times h = 15h$' },
      { step: 'ধাপ ২:', content: '$h = \\frac{120}{15} = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $h = \\frac{2 \\times 120}{12+18} = \\frac{240}{30} = 8$ সেমি।'
  },
  {
    id: 'ch26_q49',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $14$ সেমি ও $10$ সেমি এবং অসমান্তরাল বাহুর দৈর্ঘ্য $5$ সেমি ও $5$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['৪৮ বর্গসেমি', '৬০ বর্গসেমি', '৫৪ বর্গসেমি', '৪২ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান্তরাল বাহুর অন্তর = $14 - 10 = 4$ সেমি।' },
      { step: 'ধাপ ২:', content: 'প্রতিটি অসমান্তরাল বাহু $5$ সেমি, তাই উচ্চতা = $\\sqrt{5^2 - (4/2)^2} = \\sqrt{25 - 4} = \\sqrt{21}$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(14+10) \\times \\sqrt{21} = 12\\sqrt{21}$ বর্গসেমি (প্রায় ৫৫ বর্গসেমি)।' }
    ],
    shortcutTrick: '💡 $h = \\sqrt{5^2 - 2^2} = \\sqrt{21}$; ক্ষেত্রফল = $12\\sqrt{21}$ বর্গসেমি।'
  },
  {
    id: 'ch26_q50',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $8$ সেমি ও $12$ সেমি এবং উচ্চতা $10$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['১০০ বর্গসেমি', '৮০ বর্গসেমি', '১২০ বর্গসেমি', '৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(8+12) \\times 10 = \\frac{1}{2} \\times 20 \\times 10 = 100$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 (৮+১২) × ১০ ÷ ২ = ১০০ বর্গসেমি।'
  },
  {
    id: 'ch26_q51',
    text: 'একটি ট্রাপিজিয়ামের ক্ষেত্রফল $180$ বর্গসেমি, সমান্তরাল বাহুর দৈর্ঘ্য $10$ সেমি ও $20$ সেমি হলে, উচ্চতা কত?',
    options: ['১২ সেমি', '১০ সেমি', '১৫ সেমি', '৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$180 = \\frac{1}{2}(10+20) \\times h = 15h \\Rightarrow h = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $h = \\frac{2 \\times 180}{10+20} = \\frac{360}{30} = 12$ সেমি।'
  },
  {
    id: 'ch26_q52',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $x$ ও $y$ এবং উচ্চতা $h$। যদি $x = 3y$ এবং ক্ষেত্রফল $48$ বর্গসেমি, $h = 4$ সেমি হয়, তবে $y$-এর মান কত?',
    options: ['৪ সেমি', '৬ সেমি', '৮ সেমি', '১০ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(x+y)h = \\frac{1}{2}(3y+y) \\times 4 = 8y$' },
      { step: 'ধাপ ২:', content: '$48 = 8y \\Rightarrow y = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $48 = 8y \\Rightarrow y = 6$ সেমি।'
  },
  {
    id: 'ch26_q53',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $7$ সেমি ও $13$ সেমি এবং অসমান্তরাল বাহুর দৈর্ঘ্য $5$ সেমি ও $5$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['$30\\sqrt{3}$ বর্গসেমি', '$40\\sqrt{3}$ বর্গসেমি', '$50$ বর্গসেমি', '$60$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান্তরাল বাহুর অন্তর = $13 - 7 = 6$ সেমি।' },
      { step: 'ধাপ ২:', content: 'উচ্চতা = $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(7+13) \\times 4 = \\frac{1}{2} \\times 20 \\times 4 = 40$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $h = \\sqrt{5^2 - 3^2} = 4$; ক্ষেত্রফল = ২০ × ২ = ৪০ বর্গসেমি।'
  },
  {
    id: 'ch26_q54',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $a$ ও $b$ ($a > b$) এবং উচ্চতা $h$। $a = 2b$ এবং ক্ষেত্রফল $3b^2$ হলে, $h$-এর মান কত?',
    options: ['$2b$', '$b$', '$\\frac{b}{2}$', '$\\frac{3b}{2}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(a+b)h = \\frac{1}{2}(2b+b)h = \\frac{3}{2}bh$' },
      { step: 'ধাপ ২:', content: '$\\frac{3}{2}bh = 3b^2 \\Rightarrow h = 2b$' }
    ],
    shortcutTrick: '💡 $\\frac{3}{2}bh = 3b^2 \\Rightarrow h = 2b$।'
  },
  {
    id: 'ch26_q55',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $9$ সেমি ও $15$ সেমি এবং উচ্চতা $6$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['৭২ বর্গসেমি', '৮৪ বর্গসেমি', '৯০ বর্গসেমি', '১০৮ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(9+15) \\times 6 = \\frac{1}{2} \\times 24 \\times 6 = 72$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 (৯+১৫) × ৬ ÷ ২ = ৭২ বর্গসেমি।'
  },
  {
    id: 'ch26_q56',
    text: 'একটি ট্রাপিজিয়ামের ক্ষেত্রফল $84$ বর্গসেমি, উচ্চতা $7$ সেমি এবং একটি সমান্তরাল বাহু $10$ সেমি হলে, অপর সমান্তরাল বাহুর দৈর্ঘ্য কত?',
    options: ['১৪ সেমি', '১২ সেমি', '১৬ সেমি', '১৮ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$84 = \\frac{1}{2}(10+b) \\times 7 \\Rightarrow 168 = 7(10+b) \\Rightarrow 10+b = 24 \\Rightarrow b = 14$ সেমি।' }
    ],
    shortcutTrick: '💡 $b = \\frac{2 \\times 84}{7} - 10 = 24 - 10 = 14$ সেমি।'
  },
  {
    id: 'ch26_q57',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $6$ সেমি ও $10$ সেমি এবং উচ্চতা $4$ সেমি। যদি উচ্চতা দ্বিগুণ করা হয়, তবে ক্ষেত্রফল কত বৃদ্ধি পাবে?',
    options: ['বৃদ্ধি ৩২ বর্গসেমি', 'বৃদ্ধি ১৬ বর্গসেমি', 'বৃদ্ধি ৪৮ বর্গসেমি', 'বৃদ্ধি ২৪ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আদি ক্ষেত্রফল = $\\frac{1}{2}(6+10) \\times 4 = 32$ বর্গসেমি।' },
      { step: 'ধাপ ২:', content: 'নতুন উচ্চতা = $8$ সেমি। নতুন ক্ষেত্রফল = $\\frac{1}{2}(16) \\times 8 = 64$ বর্গসেমি।' },
      { step: 'ধাপ ৩:', content: 'বৃদ্ধি = $64 - 32 = 32$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফল উচ্চতার সমানুপাতিক → বৃদ্ধি = অর্ধেক × (১৬) × ৪ = ৩২ বর্গসেমি।'
  },
  {
    id: 'ch26_q58',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $x$ ও $2x$ এবং উচ্চতা $3$ সেমি। ক্ষেত্রফল $27$ বর্গসেমি হলে, $x$-এর মান কত?',
    options: ['৩ সেমি', '৬ সেমি', '৯ সেমি', '৪.৫ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(x+2x) \\times 3 = \\frac{9x}{2}$' },
      { step: 'ধাপ ২:', content: '$\\frac{9x}{2} = 27 \\Rightarrow x = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{9x}{2} = 27 \\Rightarrow x = 6$ সেমি।'
  },
  {
    id: 'ch26_q59',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $12$ সেমি ও $18$ সেমি এবং ক্ষেত্রফল $120$ বর্গসেমি হলে, উচ্চতা কত?',
    options: ['৬ সেমি', '৮ সেমি', '১০ সেমি', '১২ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$120 = \\frac{1}{2}(12+18)h = 15h \\Rightarrow h = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $h = \\frac{2 \\times 120}{12+18} = \\frac{240}{30} = 8$ সেমি।'
  },
  {
    id: 'ch26_q60',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $a$ ও $b$ ($a > b$) এবং উচ্চতা $h$। $a + b = 20$ সেমি, $a - b = 4$ সেমি এবং ক্ষেত্রফল $72$ বর্গসেমি হলে, উচ্চতা কত?',
    options: ['৭.২ সেমি', '৮ সেমি', '৭ সেমি', '৬ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমীকরণ সমাধান: $a + b = 20$ এবং $a - b = 4$' },
      { step: 'ধাপ ২:', content: 'যোগ করে: $2a = 24 \\Rightarrow a = 12$; $b = 8$' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(12+8)h = 10h = 72 \\Rightarrow h = 7.2$ সেমি।' }
    ],
    shortcutTrick: '💡 $a = 12, b = 8$ → $10h = 72 \\Rightarrow h = 7.2$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বহুভুজের অন্তঃকোণ ও বহিঃকোণ (Interior & Exterior Angles of Polygons) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q61',
    text: 'একটি ষড়ভুজের (Hexagon) অন্তঃকোণগুলির সমষ্টি কত?',
    options: ['৭২০°', '৫৪০°', '৩৬০°', '১০৮০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n$-বাহু বিশিষ্ট বহুভুজের অন্তঃকোণের সমষ্টি = $(n-2) \\times 180°$' },
      { step: 'ধাপ ২:', content: 'ষড়ভুজের জন্য $n = 6$' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি = $(6-2) \\times 180 = 720°$' }
    ],
    shortcutTrick: '💡 $(n-2) \\times 180$ সূত্রে $n=6$ বসালে $720°$ পাওয়া যায়।'
  },
  {
    id: 'ch26_q62',
    text: 'একটি পঞ্চভুজের (Pentagon) অন্তঃকোণগুলির সমষ্টি কত?',
    options: ['৫৪০°', '৩৬০°', '৭২০°', '৯০০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n = 5$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি = $(5-2) \\times 180 = 3 \\times 180 = 540°$' }
    ],
    shortcutTrick: '💡 পঞ্চভুজের কোণসমষ্টি = ৫৪০°।'
  },
  {
    id: 'ch26_q63',
    text: 'একটি সুষম অষ্টভুজের (Regular Octagon) প্রতিটি অন্তঃকোণের মান কত?',
    options: ['১৩৫°', '১২০°', '১৫০°', '১৪০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অষ্টভুজের জন্য $n = 8$।' },
      { step: 'ধাপ ২:', content: 'অন্তঃকোণের সমষ্টি = $(8-2) \\times 180 = 1080°$' },
      { step: 'ধাপ ৩:', content: 'প্রতিটি অন্তঃকোণ = $\\frac{1080}{8} = 135°$' }
    ],
    shortcutTrick: '💡 সুষম বহুভুজের প্রতিটি কোণ = $\\frac{(n-2) \\times 180}{n}$; $n=8$ বসালে $135°$।'
  },
  {
    id: 'ch26_q64',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $108°$ হলে, বহুভুজটির বাহুর সংখ্যা কত?',
    options: ['৫', '৬', '৮', '১০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিটি অন্তঃকোণ = $\\frac{(n-2) \\times 180}{n} = 108$' },
      { step: 'ধাপ ২:', content: '$180n - 360 = 108n \\Rightarrow 72n = 360 \\Rightarrow n = 5$' }
    ],
    shortcutTrick: '💡 $\\frac{(n-2) \\times 180}{n} = 108 \\Rightarrow n = 5$।'
  },
  {
    id: 'ch26_q65',
    text: 'একটি সুষম বহুভুজের প্রতিটি বহিঃকোণ $30°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১২', '১০', '৮', '৬'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সুষম বহুভুজের বহিঃকোণের সমষ্টি $360°$।' },
      { step: 'ধাপ ২:', content: '$n \\times 30 = 360 \\Rightarrow n = 12$' }
    ],
    shortcutTrick: '💡 $n = 360/30 = 12$।'
  },
  {
    id: 'ch26_q66',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $150°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১২', '১০', '৮', '৬'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 150 = 30°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{30} = 12$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ৩০° → $n = 360/30 = 12$।'
  },
  {
    id: 'ch26_q67',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $156°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১৫', '১২', '১৪', '১৬'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 156 = 24°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{24} = 15$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ২৪° → $n = 360/24 = 15$।'
  },
  {
    id: 'ch26_q68',
    text: 'একটি বহুভুজের অন্তঃকোণগুলির সমষ্টি $1260°$ হলে, বাহুর সংখ্যা কত?',
    options: ['৯', '৮', '১০', '৭'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ (n-2) \\times 180 = 1260$' },
      { step: 'ধাপ ২:', content: '$n-2 = \\frac{1260}{180} = 7 \\Rightarrow n = 9$' }
    ],
    shortcutTrick: '💡 $n = \\frac{1260}{180} + 2 = 7 + 2 = 9$।'
  },
  {
    id: 'ch26_q69',
    text: 'একটি সুষম বহুভুজের প্রতিটি বহিঃকোণ $40°$ হলে, বাহুর সংখ্যা কত?',
    options: ['৯', '১০', '৮', '৬'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n \\times 40 = 360 \\Rightarrow n = 9$' }
    ],
    shortcutTrick: '💡 $n = 360/40 = 9$।'
  },
  {
    id: 'ch26_q70',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $162°$ হলে, বহুভুজটির বাহুর সংখ্যা কত?',
    options: ['২০', '১৮', '১৬', '২২'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 162 = 18°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{18} = 20$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ১৮° → $n = 360/18 = 20$।'
  },
  {
    id: 'ch26_q71',
    text: 'একটি বহুভুজের অন্তঃকোণগুলির সমষ্টি $1440°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১০', '১১', '১২', '১৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ (n-2) \\times 180 = 1440$' },
      { step: 'ধাপ ২:', content: '$n-2 = 8 \\Rightarrow n = 10$' }
    ],
    shortcutTrick: '💡 $n = \\frac{1440}{180} + 2 = 8 + 2 = 10$।'
  },
  {
    id: 'ch26_q72',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $144°$ হলে, বহুভুজটির বাহুর সংখ্যা কত?',
    options: ['১০', '১২', '৮', '৬'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 144 = 36°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{36} = 10$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ৩৬° → $n = 360/36 = 10$।'
  },
  {
    id: 'ch26_q73',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $140°$ হলে, বাহুর সংখ্যা কত?',
    options: ['৯', '১০', '৮', '১২'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 140 = 40°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{40} = 9$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ৪০° → $n = 360/40 = 9$।'
  },
  {
    id: 'ch26_q74',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $120°$ হলে, বহুভুজটির বাহুর সংখ্যা কত?',
    options: ['৬', '৫', '৮', '১০'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 120 = 60°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{60} = 6$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ৬০° → $n = 6$।'
  },
  {
    id: 'ch26_q75',
    text: 'একটি বহুভুজের অন্তঃকোণগুলির সমষ্টি $1620°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১১', '১২', '১৩', '১৪'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ (n-2) \\times 180 = 1620$' },
      { step: 'ধাপ ২:', content: '$n-2 = 9 \\Rightarrow n = 11$' }
    ],
    shortcutTrick: '💡 $n = \\frac{1620}{180} + 2 = 9 + 2 = 11$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: বহুভুজের কর্ণ (Diagonals of Polygons) (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q76',
    text: 'একটি ষড়ভুজের (Hexagon) মোট কর্ণের সংখ্যা কত?',
    options: ['৯', '১২', '১৫', '১৮'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কর্ণের সংখ্যা = $\\frac{n(n-3)}{2}$' },
      { step: 'ধাপ ২:', content: '$n = 6$: $\\frac{6 \\times 3}{2} = 9$' }
    ],
    shortcutTrick: '💡 $\\frac{6 \\times 3}{2} = 9$।'
  },
  {
    id: 'ch26_q77',
    text: 'একটি পঞ্চভুজের (Pentagon) মোট কর্ণের সংখ্যা কত?',
    options: ['৫', '৬', '৮', '১০'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{5(5-3)}{2} = \\frac{5 \\times 2}{2} = 5$' }
    ],
    shortcutTrick: '💡 পঞ্চভুজের কর্ণ = ৫টি।'
  },
  {
    id: 'ch26_q78',
    text: 'একটি অষ্টভুজের (Octagon) মোট কর্ণের সংখ্যা কত?',
    options: ['২০', '২৪', '২৮', '১৬'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{8(8-3)}{2} = \\frac{8 \\times 5}{2} = 20$' }
    ],
    shortcutTrick: '💡 অষ্টভুজের কর্ণ = ২০টি।'
  },
  {
    id: 'ch26_q79',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $35$ হলে, বাহুর সংখ্যা কত?',
    options: ['১০', '৯', '৮', '১২'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 35 \\Rightarrow n(n-3) = 70$' },
      { step: 'ধাপ ২:', content: '$n^2 - 3n - 70 = 0 \\Rightarrow (n-10)(n+7) = 0 \\Rightarrow n = 10$' }
    ],
    shortcutTrick: '💡 $n(n-3) = 70$ → $10 \\times 7 = 70$ → $n = 10$।'
  },
  {
    id: 'ch26_q80',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $27$ হলে, বাহুর সংখ্যা কত?',
    options: ['৯', '৮', '১০', '১২'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 27 \\Rightarrow n(n-3) = 54$' },
      { step: 'ধাপ ২:', content: '$n^2 - 3n - 54 = 0 \\Rightarrow (n-9)(n+6) = 0 \\Rightarrow n = 9$' }
    ],
    shortcutTrick: '💡 $9 \\times 6 = 54$ → $n = 9$।'
  },
  {
    id: 'ch26_q81',
    text: 'একটি দশভুজের (Decagon) মোট কর্ণের সংখ্যা কত?',
    options: ['৩৫', '৪০', '৪৫', '৫০'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{10(10-3)}{2} = \\frac{10 \\times 7}{2} = 35$' }
    ],
    shortcutTrick: '💡 দশভুজের কর্ণ = ৩৫টি।'
  },
  {
    id: 'ch26_q82',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $14$ হলে, বাহুর সংখ্যা কত?',
    options: ['৭', '৬', '৮', '৯'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 14 \\Rightarrow n(n-3) = 28$' },
      { step: 'ধাপ ২:', content: '$n^2 - 3n - 28 = 0 \\Rightarrow (n-7)(n+4) = 0 \\Rightarrow n = 7$' }
    ],
    shortcutTrick: '💡 $7 \\times 4 = 28$ → $n = 7$।'
  },
  {
    id: 'ch26_q83',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $54$ হলে, বাহুর সংখ্যা কত?',
    options: ['১২', '১১', '১৩', '১০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 54 \\Rightarrow n(n-3) = 108$' },
      { step: 'ধাপ ২:', content: '$12 \\times 9 = 108$ → $n = 12$' }
    ],
    shortcutTrick: '💡 $12 \\times 9 = 108$ → $n = 12$।'
  },
  {
    id: 'ch26_q84',
    text: 'একটি সপ্তভুজের (Heptagon) মোট কর্ণের সংখ্যা কত?',
    options: ['১৪', '২১', '২৮', '৩৫'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n = 7$: $\\frac{7 \\times 4}{2} = 14$' }
    ],
    shortcutTrick: '💡 সপ্তভুজের কর্ণ = ১৪টি।'
  },
  {
    id: 'ch26_q85',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $20$ হলে, বাহুর সংখ্যা কত?',
    options: ['৮', '৭', '৯', '১০'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 20 \\Rightarrow n(n-3) = 40$' },
      { step: 'ধাপ ২:', content: '$8 \\times 5 = 40$ → $n = 8$' }
    ],
    shortcutTrick: '💡 $8 \\times 5 = 40$ → $n = 8$।'
  },
  {
    id: 'ch26_q86',
    text: 'একটি নবভুজের (Nonagon) মোট কর্ণের সংখ্যা কত?',
    options: ['২৭', '৩৬', '৪৫', '৫৪'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n = 9$: $\\frac{9 \\times 6}{2} = 27$' }
    ],
    shortcutTrick: '💡 নবভুজের কর্ণ = ২৭টি।'
  },
  {
    id: 'ch26_q87',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $77$ হলে, বাহুর সংখ্যা কত?',
    options: ['১৪', '১৫', '১৬', '১৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 77 \\Rightarrow n(n-3) = 154$' },
      { step: 'ধাপ ২:', content: '$14 \\times 11 = 154$ → $n = 14$' }
    ],
    shortcutTrick: '💡 $14 \\times 11 = 154$ → $n = 14$।'
  },
  {
    id: 'ch26_q88',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $65$ হলে, বাহুর সংখ্যা কত?',
    options: ['১৩', '১২', '১৪', '১৫'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 65 \\Rightarrow n(n-3) = 130$' },
      { step: 'ধাপ ২:', content: '$13 \\times 10 = 130$ → $n = 13$' }
    ],
    shortcutTrick: '💡 $13 \\times 10 = 130$ → $n = 13$।'
  },
  {
    id: 'ch26_q89',
    text: 'একটি দ্বাদশভুজের (Dodecagon) মোট কর্ণের সংখ্যা কত?',
    options: ['৫৪', '৬৬', '৭৮', '৯০'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n = 12$: $\\frac{12 \\times 9}{2} = 54$' }
    ],
    shortcutTrick: '💡 দ্বাদশভুজের কর্ণ = ৫৪টি।'
  },
  {
    id: 'ch26_q90',
    text: 'একটি বহুভুজের কর্ণের সংখ্যা $44$ হলে, বাহুর সংখ্যা কত?',
    options: ['১১', '১২', '১০', '১৩'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{n(n-3)}{2} = 44 \\Rightarrow n(n-3) = 88$' },
      { step: 'ধাপ ২:', content: '$11 \\times 8 = 88$ → $n = 11$' }
    ],
    shortcutTrick: '💡 $11 \\times 8 = 88$ → $n = 11$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও বিগত বছরের উচ্চতর জটিল সমস্যা (Miscellaneous & Advanced) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch26_q91',
    text: 'একটি চতুর্ভুজের তিনটি কোণ $2x, 3x, 4x$ এবং চতুর্থ কোণ $6x$ হলে, ক্ষুদ্রতম কোণটির মান কত?',
    options: ['৪৮°', '৬০°', '৭২°', '৮৪°'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কোণগুলির সমষ্টি = $2x + 3x + 4x + 6x = 15x = 360°$' },
      { step: 'ধাপ ২:', content: '$x = 24°$' },
      { step: 'ধাপ ৩:', content: 'ক্ষুদ্রতম কোণ = $2x = 48°$' }
    ],
    shortcutTrick: '💡 $15x = 360° \\Rightarrow x = 24°$ → ক্ষুদ্রতম = $2 \\times 24 = 48°$।'
  },
  {
    id: 'ch26_q92',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $165°$ হলে, বহুভুজটির বাহুর সংখ্যা কত?',
    options: ['২৪', '২০', '২২', '২৬'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 165 = 15°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{15} = 24$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ১৫° → $n = 360/15 = 24$।'
  },
  {
    id: 'ch26_q93',
    text: 'একটি ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $x$ ও $3x$ এবং উচ্চতা $x$। ক্ষেত্রফল $2x^2$ হলে, $x$-এর মান কত?',
    options: ['যে কোনো ধনাত্মক সংখ্যা', '১', '২', '৩'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(x+3x)x = \\frac{1}{2} \\times 4x \\times x = 2x^2$' },
      { step: 'ধাপ ২:', content: 'এটি সর্বদা সত্য, তাই $x$ যে কোনো ধনাত্মক সংখ্যা হতে পারে।' }
    ],
    shortcutTrick: '💡 $2x^2 = 2x^2$ → $x$ যে কোনো ধনাত্মক সংখ্যা।'
  },
  {
    id: 'ch26_q94',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $4$ সেমি বেশি এবং প্রস্থ $3$ সেমি কম করলে ক্ষেত্রফল অপরিবর্তিত থাকে। দৈর্ঘ্য ও প্রস্থের অন্তর কত?',
    options: ['১ সেমি', '২ সেমি', '৩ সেমি', '৪ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য $l$, প্রস্থ $b$। $lb = (l+4)(b-3)$' },
      { step: 'ধাপ ২:', content: '$lb = lb - 3l + 4b - 12 \\Rightarrow 3l - 4b = -12$' },
      { step: 'ধাপ ৩:', content: '$4b - 3l = 12$। আরও একটি সমীকরণ প্রয়োজন, তবে $l-b$ নির্ণয় সম্ভব নয়।' }
    ],
    shortcutTrick: '💡 ডেটা অপর্যাপ্ত, $l-b$ নির্ণয় সম্ভব নয়।'
  },
  {
    id: 'ch26_q95',
    text: 'একটি সুষম বহুভুজের প্রতিটি বহিঃকোণ $20°$ হলে, বাহুর সংখ্যা কত?',
    options: ['১৮', '২০', '২২', '২৪'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n \\times 20 = 360 \\Rightarrow n = 18$' }
    ],
    shortcutTrick: '💡 $n = 360/20 = 18$।'
  },
  {
    id: 'ch26_q96',
    text: 'একটি সমদ্বিবাহু ট্রাপিজিয়ামের সমান্তরাল বাহুর দৈর্ঘ্য $6$ সেমি ও $10$ সেমি এবং অসমান্তরাল বাহুর দৈর্ঘ্য $5$ সেমি হলে, ক্ষেত্রফল কত?',
    options: ['$8\\sqrt{21}$ বর্গসেমি', '$8\\sqrt{7}$ বর্গসেমি', '$16\\sqrt{7}$ বর্গসেমি', '$16\\sqrt{21}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান্তরাল বাহুর অন্তর = $10 - 6 = 4$ সেমি।' },
      { step: 'ধাপ ২:', content: 'উচ্চতা = $\\sqrt{5^2 - (4/2)^2} = \\sqrt{25 - 4} = \\sqrt{21}$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $\\frac{1}{2}(6+10) \\times \\sqrt{21} = 8\\sqrt{21}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $h = \\sqrt{21}$ → ক্ষেত্রফল = $8\\sqrt{21}$ বর্গসেমি।'
  },
  {
    id: 'ch26_q97',
    text: 'একটি রম্বসের বাহু $13$ সেমি এবং একটি কর্ণ $24$ সেমি হলে, অপর কর্ণের দৈর্ঘ্য কত?',
    options: ['১০ সেমি', '১২ সেমি', '১৪ সেমি', '১৬ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একটি কর্ণের অর্ধেক = $12$ সেমি।' },
      { step: 'ধাপ ২:', content: '$13^2 = 12^2 + x^2 \\Rightarrow 169 = 144 + x^2 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$' },
      { step: 'ধাপ ৩:', content: 'অপর কর্ণ = $2 \\times 5 = 10$ সেমি।' }
    ],
    shortcutTrick: '💡 $13^2 - 12^2 = 25 \\Rightarrow x = 5$ → কর্ণ = ১০ সেমি।'
  },
  {
    id: 'ch26_q98',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $168°$ হলে, বাহুর সংখ্যা কত?',
    options: ['৩০', '২৮', '২৬', '২৪'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 168 = 12°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{12} = 30$' }
    ],
    shortcutTrick: '💡 বহিঃকোণ = ১২° → $n = 30$।'
  },
  {
    id: 'ch26_q99',
    text: 'একটি আয়তক্ষেত্রের প্রস্থ $3$ সেমি কমালে এবং দৈর্ঘ্য $2$ সেমি বাড়ালে ক্ষেত্রফল $10$ বর্গসেমি কমে। দৈর্ঘ্য ও প্রস্থের গুণফল কত?',
    options: ['৩০', '৪০', '৫০', '৬০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দৈর্ঘ্য $l$, প্রস্থ $b$।' },
      { step: 'ধাপ ২:', content: '$lb - (l+2)(b-3) = 10 \\Rightarrow lb - (lb - 3l + 2b - 6) = 10$' },
      { step: 'ধাপ ৩:', content: '$3l - 2b + 6 = 10 \\Rightarrow 3l - 2b = 4$' },
      { step: 'ধাপ ৪:', content: 'দুটি অজানা একটি সমীকরণ → $lb$ নির্ণয় সম্ভব নয়।' }
    ],
    shortcutTrick: '💡 ডেটা অপর্যাপ্ত, $lb$ নির্ণয় সম্ভব নয়।'
  },
  {
    id: 'ch26_q100',
    text: 'একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ $172°$ হলে, বহুভুজটির কর্ণের সংখ্যা কত?',
    options: ['১৭০', '১৮০', '১৯০', '২০০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃকোণ = $180 - 172 = 8°$' },
      { step: 'ধাপ ২:', content: '$n = \\frac{360}{8} = 45$' },
      { step: 'ধাপ ৩:', content: 'কর্ণের সংখ্যা = $\\frac{45(45-3)}{2} = \\frac{45 \\times 42}{2} = 945$' }
    ],
    shortcutTrick: '💡 $n = 45$ → কর্ণ = $\\frac{45 \\times 42}{2} = 945$।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapterQuestions;
}

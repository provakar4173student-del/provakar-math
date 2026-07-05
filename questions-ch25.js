// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 25: রেখা, কোণ ও ত্রিভুজ (Lines, Angles & Triangles) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL/MTS, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter25Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: সম্পূরক ও পূরক কোণ এবং রেখাগত ধারণা (Complementary & Supplementary Angles) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q1',
    text: 'একটি কোণের পূরক কোণ ৩৫° হলে, কোণটির পরিমাণ কত?',
    options: ['৫৫°', '৪৫°', '৬৫°', '৩৫°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণ দুটির সমষ্টি ৯০° হয়।' },
      { step: 'ধাপ ২:', content: 'মনে করি কোণটি = $x$। তাহলে, $x + 35° = 90°$' },
      { step: 'ধাপ ৩:', content: '$x = 90° - 35° = 55°$' }
    ],
    shortcutTrick: '💡 পূরক কোণের মান থেকে ৯০° বিয়োগ করলেই কোণটির মান পাওয়া যায়: $90° - 35° = 55°$।'
  },
  {
    id: 'ch25_q2',
    text: 'একটি কোণের সম্পূরক কোণ ১২০° হলে, কোণটির পরিমাণ কত?',
    options: ['৬০°', '৯০°', '৭০°', '১২০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূরক কোণ দুটির সমষ্টি ১৮০° হয়।' },
      { step: 'ধাপ ২:', content: 'মনে করি কোণটি = $x$। তাহলে, $x + 120° = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 180° - 120° = 60°$' }
    ],
    shortcutTrick: '💡 সম্পূরক কোণের মান থেকে ১৮০° বিয়োগ করলেই কোণটির মান পাওয়া যায়: $180° - 120° = 60°$।'
  },
  {
    id: 'ch25_q3',
    text: 'দুটি কোণের অনুপাত $3 : 7$ এবং তারা পরস্পর সম্পূরক। ছোট কোণটির পরিমাণ কত?',
    options: ['৫৪°', '১২৬°', '৬০°', '৩০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণ দুটি $3x$ এবং $7x$।' },
      { step: 'ধাপ ২:', content: 'যেহেতু তারা সম্পূরক, $3x + 7x = 180°$' },
      { step: 'ধাপ ৩:', content: '$10x = 180° \\Rightarrow x = 18°$' },
      { step: 'ধাপ ৪:', content: 'ছোট কোণটি = $3 \\times 18° = 54°$' }
    ],
    shortcutTrick: '💡 $\\frac{3}{10} \\times 180° = 54°$ (ছোট কোণটি)'
  },
  {
    id: 'ch25_q4',
    text: 'কোনো কোণের পূরক কোণের অর্ধেকের সাথে কোণটির সমষ্টি ৬০° হলে, কোণটির পরিমাণ কত?',
    options: ['৪০°', '৩০°', '৫০°', '৬০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণটি = $x$। পূরক কোণ = $90° - x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $\\frac{90° - x}{2} + x = 60°$' },
      { step: 'ধাপ ৩:', content: '$\\frac{90 - x + 2x}{2} = 60° \\Rightarrow 90 + x = 120°$' },
      { step: 'ধাপ ৪:', content: '$x = 30°$' }
    ],
    shortcutTrick: '💡 $x = 2 \\times 60° - 90° = 30°$'
  },
  {
    id: 'ch25_q5',
    text: 'একটি কোণ তার পূরক কোণের দ্বিগুণ। কোণটির পরিমাণ কত?',
    options: ['৬০°', '৩০°', '৪৫°', '৯০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণটি = $x$। পূরক কোণ = $90° - x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $x = 2(90° - x)$' },
      { step: 'ধাপ ৩:', content: '$x = 180° - 2x \\Rightarrow 3x = 180°$' },
      { step: 'ধাপ ৪:', content: '$x = 60°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{2}{3} \\times 90° = 60°$'
  },
  {
    id: 'ch25_q6',
    text: 'একটি কোণ তার সম্পূরক কোণের এক-তৃতীয়াংশ। কোণটির পরিমাণ কত?',
    options: ['৪৫°', '৬০°', '৩০°', '১৫°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণটি = $x$। সম্পূরক কোণ = $180° - x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $x = \\frac{1}{3}(180° - x)$' },
      { step: 'ধাপ ৩:', content: '$3x = 180° - x \\Rightarrow 4x = 180°$' },
      { step: 'ধাপ ৪:', content: '$x = 45°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180°}{3+1} = 45°$'
  },
  {
    id: 'ch25_q7',
    text: 'দুটি সরলরেখা পরস্পরকে ছেদ করলে, বিপ্রতীপ কোণগুলির সম্পর্ক কী?',
    options: ['সমান', 'সম্পূরক', 'পূরক', 'বিপরীত'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি সরলরেখা পরস্পরকে ছেদ করলে চারটি কোণ উৎপন্ন হয়।' },
      { step: 'ধাপ ২:', content: 'বিপ্রতীপ কোণ (Vertically Opposite Angles) সর্বদা সমান হয়।' },
      { step: 'ধাপ ৩:', content: 'উদাহরণস্বরূপ, $\\angle 1 = \\angle 3$ এবং $\\angle 2 = \\angle 4$।' }
    ],
    shortcutTrick: '💡 ছেদবিন্দুতে গঠিত বিপরীত কোণগুলি সর্বদা সমান হয়।'
  },
  {
    id: 'ch25_q8',
    text: 'দুটি সরলরেখা পরস্পরকে ছেদ করলে, একটি কোণ ১১০° হলে, তার বিপ্রতীপ কোণটির পরিমাণ কত?',
    options: ['১১০°', '৭০°', '৯০°', '১৩০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপ্রতীপ কোণ দুটি সমান হয়।' },
      { step: 'ধাপ ২:', content: 'একটি কোণ ১১০° হলে, তার বিপ্রতীপ কোণও ১১০° হবে।' }
    ],
    shortcutTrick: '💡 বিপ্রতীপ কোণ সমান হয়, তাই উত্তর ১১০°।'
  },
  {
    id: 'ch25_q9',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, অনুরূপ কোণগুলির সম্পর্ক কী?',
    options: ['সমান', 'সম্পূরক', 'পূরক', 'বিপরীত'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে সৃষ্ট অনুরূপ কোণগুলি সমান হয়।' },
      { step: 'ধাপ ২:', content: 'এটি সমান্তরাল রেখার একটি মৌলিক বৈশিষ্ট্য।' }
    ],
    shortcutTrick: '💡 সমান্তরাল রেখার ছেদকে অনুরূপ কোণগুলি সর্বদা সমান হয়।'
  },
  {
    id: 'ch25_q10',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একান্তর অন্তঃকোণগুলির সম্পর্ক কী?',
    options: ['সমান', 'সম্পূরক', 'পূরক', 'বিপরীত'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একান্তর অন্তঃকোণ (Alternate Interior Angles) দুটি সমান হয়।' },
      { step: 'ধাপ ২:', content: 'এটি সমান্তরাল রেখার একটি গুরুত্বপূর্ণ বৈশিষ্ট্য।' }
    ],
    shortcutTrick: '💡 সমান্তরাল রেখার ছেদকে একান্তর অন্তঃকোণগুলি সমান হয়।'
  },
  {
    id: 'ch25_q11',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, ছেদকের একই পাশের অন্তঃস্থ কোণগুলির সমষ্টি কত?',
    options: ['১৮০°', '৯০°', '৩৬০°', '২৭০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছেদকের একই পাশের অন্তঃস্থ কোণগুলি (Interior Angles on the Same Side) সম্পূরক হয়।' },
      { step: 'ধাপ ২:', content: 'অর্থাৎ তাদের সমষ্টি $180°$।' }
    ],
    shortcutTrick: '💡 ছেদকের একই পাশের অন্তঃস্থ কোণগুলির সমষ্টি ১৮০°।'
  },
  {
    id: 'ch25_q12',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি অন্তঃস্থ কোণ অন্যটির দ্বিগুণ হলে, ছোট কোণটির পরিমাণ কত?',
    options: ['৬০°', '৯০°', '৪৫°', '৩০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি ছোট কোণটি = $x$। বড় কোণটি = $2x$।' },
      { step: 'ধাপ ২:', content: 'যেহেতু এরা ছেদকের একই পাশের অন্তঃস্থ কোণ, $x + 2x = 180°$' },
      { step: 'ধাপ ৩:', content: '$3x = 180° \\Rightarrow x = 60°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180°}{3} = 60°$'
  },
  {
    id: 'ch25_q13',
    text: 'দুটি কোণের পূরক কোণগুলির অনুপাত $2 : 3$ হলে, কোণ দুটির অনুপাত কত?',
    options: ['৩ : ২', '২ : ৩', '১ : ১', '৪ : ৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণ দুটি $A$ ও $B$। তাদের পূরক কোণ $90°-A$ ও $90°-B$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $\\frac{90°-A}{90°-B} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(90°-A) = 2(90°-B) \\Rightarrow 270° - 3A = 180° - 2B$' },
      { step: 'ধাপ ৪:', content: 'এখন $A + B = 180°$ (যেহেতু তারা সম্পূরক)। $A = 180° - B$ বসিয়ে পাই,' },
      { step: 'ধাপ ৫:', content: '$270° - 3(180° - B) = 180° - 2B \\Rightarrow 270° - 540° + 3B = 180° - 2B$' },
      { step: 'ধাপ ৬:', content: '$5B = 450° \\Rightarrow B = 90°$ এবং $A = 90°$। অনুপাত = $1 : 1$।' }
    ],
    shortcutTrick: '💡 এই বিশেষ শর্তে কোণ দুটি সমান হয়, অর্থাৎ অনুপাত ১:১।'
  },
  {
    id: 'ch25_q14',
    text: 'একটি কোণ তার সম্পূরক কোণের পাঁচ গুণের সমান। কোণটির পরিমাণ কত?',
    options: ['১৫০°', '৩০°', '৪৫°', '৬০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণটি = $x$। সম্পূরক কোণ = $180° - x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $x = 5(180° - x)$' },
      { step: 'ধাপ ৩:', content: '$x = 900° - 5x \\Rightarrow 6x = 900°$' },
      { step: 'ধাপ ৪:', content: '$x = 150°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{5}{6} \\times 180° = 150°$'
  },
  {
    id: 'ch25_q15',
    text: 'একটি কোণ তার পূরক কোণের চার গুণের সমান। কোণটির পরিমাণ কত?',
    options: ['৭২°', '১৮°', '৬০°', '৪৫°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণটি = $x$। পূরক কোণ = $90° - x$।' },
      { step: 'ধাপ ২:', content: 'প্রশ্নানুসারে, $x = 4(90° - x)$' },
      { step: 'ধাপ ৩:', content: '$x = 360° - 4x \\Rightarrow 5x = 360°$' },
      { step: 'ধাপ ৪:', content: '$x = 72°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{4}{5} \\times 90° = 72°$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ত্রিভুজের কোণ ও বাহুর সম্পর্ক (Angle-Side Relationships) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q16',
    text: 'একটি ত্রিভুজের তিনটি কোণের অনুপাত $2 : 3 : 4$। বৃহত্তম কোণটির পরিমাণ কত?',
    options: ['৮০°', '৬০°', '৪০°', '১০০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $2x, 3x, 4x$।' },
      { step: 'ধাপ ২:', content: 'ত্রিভুজের কোণগুলির সমষ্টি $180°$।' },
      { step: 'ধাপ ৩:', content: '$2x + 3x + 4x = 180° \\Rightarrow 9x = 180°$' },
      { step: 'ধাপ ৪:', content: '$x = 20°$' },
      { step: 'ধাপ ৫:', content: 'বৃহত্তম কোণ $= 4 \\times 20° = 80°$' }
    ],
    shortcutTrick: '💡 $\\frac{4}{9} \\times 180° = 80°$'
  },
  {
    id: 'ch25_q17',
    text: 'একটি ত্রিভুজের একটি কোণ ৯০° এবং অপর দুটি কোণের অনুপাত $2 : 3$। অপর কোণ দুটির পরিমাণ কত?',
    options: ['৩৬°, ৫৪°', '৪৫°, ৪৫°', '৩০°, ৬০°', '৪০°, ৫০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অপর দুটি কোণের সমষ্টি = $180° - 90° = 90°$' },
      { step: 'ধাপ ২:', content: 'মনে করি কোণ দুটি $2x$ ও $3x$।' },
      { step: 'ধাপ ৩:', content: '$2x + 3x = 90° \\Rightarrow 5x = 90°$' },
      { step: 'ধাপ ৪:', content: '$x = 18°$' },
      { step: 'ধাপ ৫:', content: 'কোণ দুটি = $36°$ ও $54°$' }
    ],
    shortcutTrick: '💡 $90°$ কে $2:3$ অনুপাতে ভাগ করলে: $36°$ ও $54°$।'
  },
  {
    id: 'ch25_q18',
    text: 'একটি ত্রিভুজের বহিঃস্থ কোণ ১৪০° এবং অন্তঃস্থ বিপরীত কোণগুলির অন্তর ২০°। কোণ দুটির পরিমাণ কত?',
    options: ['৮০°, ৬০°', '৭০°, ৫০°', '৮০°, ৪০°', '৯০°, ৭০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃস্থ কোণ = বিপরীত অন্তঃস্থ কোণ দুটির সমষ্টি।' },
      { step: 'ধাপ ২:', content: 'মনে করি কোণ দুটি $A$ ও $B$। $A + B = 140°$ এবং $A - B = 20°$' },
      { step: 'ধাপ ৩:', content: 'যোগ করলে, $2A = 160° \\Rightarrow A = 80°$' },
      { step: 'ধাপ ৪:', content: '$B = 140° - 80° = 60°$' }
    ],
    shortcutTrick: '💡 $A = \\frac{140° + 20°}{2} = 80°$, $B = \\frac{140° - 20°}{2} = 60°$'
  },
  {
    id: 'ch25_q19',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের শীর্ষকোণ ৪০°। ভূমি সংলগ্ন প্রতিটি কোণের পরিমাণ কত?',
    options: ['৭০°', '৪০°', '৮০°', '৬০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমদ্বিবাহু ত্রিভুজে ভূমি সংলগ্ন কোণ দুটি সমান।' },
      { step: 'ধাপ ২:', content: 'মনে করি প্রতিটি ভূমি সংলগ্ন কোণ = $x$।' },
      { step: 'ধাপ ৩:', content: '$x + x + 40° = 180° \\Rightarrow 2x = 140°$' },
      { step: 'ধাপ ৪:', content: '$x = 70°$' }
    ],
    shortcutTrick: '💡 $\\frac{180° - 40°}{2} = 70°$'
  },
  {
    id: 'ch25_q20',
    text: 'একটি সমবাহু ত্রিভুজের প্রতিটি কোণের পরিমাণ কত?',
    options: ['৬০°', '৪৫°', '৯০°', '৩০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের তিনটি কোণই সমান।' },
      { step: 'ধাপ ২:', content: 'মনে করি প্রতিটি কোণ = $x$।' },
      { step: 'ধাপ ৩:', content: '$x + x + x = 180° \\Rightarrow 3x = 180°$' },
      { step: 'ধাপ ৪:', content: '$x = 60°$' }
    ],
    shortcutTrick: '💡 $\\frac{180°}{3} = 60°$'
  },
  {
    id: 'ch25_q21',
    text: 'একটি ত্রিভুজের কোণগুলি $x°, (x+20)°, (x+40)°$। $x$-এর মান কত?',
    options: ['৪০°', '৫০°', '৬০°', '৩০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের কোণগুলির সমষ্টি ১৮০°।' },
      { step: 'ধাপ ২:', content: '$x + (x+20) + (x+40) = 180°$' },
      { step: 'ধাপ ৩:', content: '$3x + 60 = 180° \\Rightarrow 3x = 120°$' },
      { step: 'ধাপ ৪:', content: '$x = 40°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180° - 60°}{3} = 40°$'
  },
  {
    id: 'ch25_q22',
    text: 'একটি ত্রিভুজের একটি কোণ ৬৫° এবং অপর একটি কোণ ৭৫°। তৃতীয় কোণটির পরিমাণ কত?',
    options: ['৪০°', '৫০°', '৬০°', '৭০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের কোণগুলির সমষ্টি ১৮০°।' },
      { step: 'ধাপ ২:', content: 'তৃতীয় কোণ = $180° - (65° + 75°) = 180° - 140° = 40°$' }
    ],
    shortcutTrick: '💡 $180° - (65° + 75°) = 40°$'
  },
  {
    id: 'ch25_q23',
    text: 'একটি ত্রিভুজের একটি কোণ অপর দুই কোণের সমষ্টির সমান। ত্রিভুজটি কী ধরনের?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমদ্বিবাহু'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $A, B, C$। $A = B + C$' },
      { step: 'ধাপ ২:', content: '$A + B + C = 180° \\Rightarrow A + A = 180°$' },
      { step: 'ধাপ ৩:', content: '$2A = 180° \\Rightarrow A = 90°$' },
      { step: 'ধাপ ৪:', content: 'যেহেতু একটি কোণ ৯০°, ত্রিভুজটি সমকোণী।' }
    ],
    shortcutTrick: '💡 একটি কোণ অপর দুই কোণের সমষ্টির সমান হলে, সেই কোণটি ৯০° হয়।'
  },
  {
    id: 'ch25_q24',
    text: 'একটি ত্রিভুজের একটি কোণ ১১০°। অপর কোণ দুটির সমষ্টি কত?',
    options: ['৭০°', '৯০°', '১১০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের কোণগুলির সমষ্টি ১৮০°।' },
      { step: 'ধাপ ২:', content: 'অপর কোণ দুটির সমষ্টি = $180° - 110° = 70°$' }
    ],
    shortcutTrick: '💡 $180° - 110° = 70°$'
  },
  {
    id: 'ch25_q25',
    text: 'একটি ত্রিভুজের বহিঃস্থ কোণ ১৩০° এবং একটি অন্তঃস্থ কোণ ৫০°। অপর অন্তঃস্থ কোণটির পরিমাণ কত?',
    options: ['৮০°', '৬০°', '৭০°', '৯০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃস্থ কোণ = বিপরীত অন্তঃস্থ কোণ দুটির সমষ্টি।' },
      { step: 'ধাপ ২:', content: 'একটি অন্তঃস্থ কোণ ৫০°। অপর কোণ = $130° - 50° = 80°$' }
    ],
    shortcutTrick: '💡 $130° - 50° = 80°$'
  },
  {
    id: 'ch25_q26',
    text: 'একটি ত্রিভুজের কোণগুলির অনুপাত $1 : 2 : 3$। ক্ষুদ্রতম কোণটির পরিমাণ কত?',
    options: ['৩০°', '৪৫°', '৬০°', '৯০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $x, 2x, 3x$।' },
      { step: 'ধাপ ২:', content: '$x + 2x + 3x = 180° \\Rightarrow 6x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 30°$' }
    ],
    shortcutTrick: '💡 $\\frac{1}{6} \\times 180° = 30°$'
  },
  {
    id: 'ch25_q27',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের ভূমি সংলগ্ন একটি কোণ ৫০°। শীর্ষকোণের পরিমাণ কত?',
    options: ['৮০°', '৫০°', '৬০°', '৭০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমদ্বিবাহু ত্রিভুজে ভূমি সংলগ্ন কোণ দুটি সমান।' },
      { step: 'ধাপ ২:', content: 'শীর্ষকোণ = $180° - (50° + 50°) = 80°$' }
    ],
    shortcutTrick: '💡 $180° - 2 \\times 50° = 80°$'
  },
  {
    id: 'ch25_q28',
    text: 'একটি ত্রিভুজের একটি কোণ অপর একটি কোণের দ্বিগুণ এবং তৃতীয় কোণটি ৬০°। কোণ দুটির পরিমাণ কত?',
    options: ['৪০°, ৮০°', '৩০°, ৬০°', '৫০°, ১০০°', '৪৫°, ৯০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি ছোট কোণটি = $x$। বড় কোণটি = $2x$।' },
      { step: 'ধাপ ২:', content: '$x + 2x + 60° = 180° \\Rightarrow 3x = 120°$' },
      { step: 'ধাপ ৩:', content: '$x = 40°$' },
      { step: 'ধাপ ৪:', content: 'কোণ দুটি = $40°$ ও $80°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180° - 60°}{3} = 40°$, অপর কোণ = $80°$'
  },
  {
    id: 'ch25_q29',
    text: 'একটি ত্রিভুজের তিনটি কোণ সমান হলে, প্রতিটি কোণের পরিমাণ কত?',
    options: ['৬০°', '৪৫°', '৯০°', '৩০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের তিনটি কোণ সমান হলে, এটি একটি সমবাহু ত্রিভুজ।' },
      { step: 'ধাপ ২:', content: 'প্রতিটি কোণ = $\\frac{180°}{3} = 60°$' }
    ],
    shortcutTrick: '💡 সমবাহু ত্রিভুজের প্রতিটি কোণ ৬০°।'
  },
  {
    id: 'ch25_q30',
    text: 'একটি ত্রিভুজের কোণগুলি $3x, 4x$ এবং $5x$। $x$-এর মান কত?',
    options: ['১৫°', '২০°', '২৫°', '১০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x + 4x + 5x = 180°$' },
      { step: 'ধাপ ২:', content: '$12x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 15°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180°}{12} = 15°$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: বহিঃস্থ কোণ ও অন্যান্য কোণ সংক্রান্ত সমস্যা (Exterior Angle Theorem & Others) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q31',
    text: 'একটি ত্রিভুজের একটি বহিঃস্থ কোণ ১২০° এবং এর অনুরূপ অন্তঃস্থ কোণটি ৭০°। অপর অন্তঃস্থ কোণটির পরিমাণ কত?',
    options: ['৫০°', '৬০°', '৭০°', '৮০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহিঃস্থ কোণ = বিপরীত অন্তঃস্থ কোণ দুটির সমষ্টি।' },
      { step: 'ধাপ ২:', content: 'একটি অন্তঃস্থ কোণ ৭০°। অপর কোণ = $120° - 70° = 50°$' }
    ],
    shortcutTrick: '💡 $120° - 70° = 50°$'
  },
  {
    id: 'ch25_q32',
    text: 'একটি ত্রিভুজের একটি বহিঃস্থ কোণ ১১০° এবং অন্তঃস্থ বিপরীত কোণ দুটির অনুপাত $2 : 3$। কোণ দুটির পরিমাণ কত?',
    options: ['৪৪°, ৬৬°', '৪০°, ৬০°', '৫০°, ৬০°', '৪৫°, ৬৫°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণ দুটি $2x$ ও $3x$।' },
      { step: 'ধাপ ২:', content: '$2x + 3x = 110° \\Rightarrow 5x = 110°$' },
      { step: 'ধাপ ৩:', content: '$x = 22°$' },
      { step: 'ধাপ ৪:', content: 'কোণ দুটি = $44°$ ও $66°$' }
    ],
    shortcutTrick: '💡 $\\frac{2}{5} \\times 110° = 44°$, $\\frac{3}{5} \\times 110° = 66°$'
  },
  {
    id: 'ch25_q33',
    text: 'একটি ত্রিভুজের একটি বহিঃস্থ কোণ ১৫০°। অন্তঃস্থ বিপরীত কোণ দুটির অন্তর ৩০° হলে, বৃহত্তম কোণটির পরিমাণ কত?',
    options: ['৯০°', '৬০°', '৮০°', '৭০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণ দুটি $A$ ও $B$। $A + B = 150°$, $A - B = 30°$' },
      { step: 'ধাপ ২:', content: 'যোগ করলে, $2A = 180° \\Rightarrow A = 90°$' }
    ],
    shortcutTrick: '💡 $A = \\frac{150° + 30°}{2} = 90°$'
  },
  {
    id: 'ch25_q34',
    text: 'একটি ত্রিভুজের একটি কোণ ৪৫° এবং অপর কোণ ৬৫°। তৃতীয় কোণের বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['১১০°', '৭০°', '৯০°', '৬০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (45° + 65°) = 70°$' },
      { step: 'ধাপ ২:', content: 'বহিঃস্থ কোণ = $180° - 70° = 110°$' }
    ],
    shortcutTrick: '💡 বহিঃস্থ কোণ = বিপরীত অন্তঃস্থ কোণ দুটির সমষ্টি = $45° + 65° = 110°$'
  },
  {
    id: 'ch25_q35',
    text: 'একটি ত্রিভুজের কোণগুলি $x, x+10, x+20$। বৃহত্তম কোণটির বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['১২০°', '৬০°', '৯০°', '১০০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x + (x+10) + (x+20) = 180° \\Rightarrow 3x + 30 = 180°$' },
      { step: 'ধাপ ২:', content: '$3x = 150° \\Rightarrow x = 50°$' },
      { step: 'ধাপ ৩:', content: 'কোণগুলি = $50°, 60°, 70°$। বৃহত্তম কোণ = $70°$' },
      { step: 'ধাপ ৪:', content: 'বহিঃস্থ কোণ = $180° - 70° = 110°$ (অথবা $50°+60°=110°$)' }
    ],
    shortcutTrick: '💡 বৃহত্তম কোণের বহিঃস্থ কোণ = অপর দুই কোণের সমষ্টি = $50° + 60° = 110°$'
  },
  {
    id: 'ch25_q36',
    text: 'একটি ত্রিভুজের একটি বহিঃস্থ কোণ ১৩৫° এবং অন্তঃস্থ বিপরীত কোণ দুটি সমান। প্রতিটি কোণের পরিমাণ কত?',
    options: ['৬৭.৫°', '৬০°', '৭৫°', '৪৫°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি প্রতিটি কোণ = $x$।' },
      { step: 'ধাপ ২:', content: '$x + x = 135° \\Rightarrow 2x = 135°$' },
      { step: 'ধাপ ৩:', content: '$x = 67.5°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{135°}{2} = 67.5°$'
  },
  {
    id: 'ch25_q37',
    text: 'একটি ত্রিভুজের একটি কোণ ৬০° এবং অপর একটি কোণ ৪০°। তৃতীয় কোণের বহিঃস্থ কোণ কত?',
    options: ['১০০°', '৮০°', '১২০°', '৬০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (60° + 40°) = 80°$' },
      { step: 'ধাপ ২:', content: 'বহিঃস্থ কোণ = $180° - 80° = 100°$' }
    ],
    shortcutTrick: '💡 বহিঃস্থ কোণ = $60° + 40° = 100°$'
  },
  {
    id: 'ch25_q38',
    text: 'একটি ত্রিভুজের কোণগুলির অনুপাত $2 : 3 : 5$। ক্ষুদ্রতম কোণের বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['১৪৪°', '৩৬°', '১০৮°', '৭২°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $2x, 3x, 5x$।' },
      { step: 'ধাপ ২:', content: '$2x + 3x + 5x = 180° \\Rightarrow 10x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 18°$' },
      { step: 'ধাপ ৪:', content: 'ক্ষুদ্রতম কোণ = $2x = 36°$' },
      { step: 'ধাপ ৫:', content: 'বহিঃস্থ কোণ = $180° - 36° = 144°$' }
    ],
    shortcutTrick: '💡 ক্ষুদ্রতম কোণ = $\\frac{2}{10} \\times 180° = 36°$। বহিঃস্থ কোণ = $180° - 36° = 144°$।'
  },
  {
    id: 'ch25_q39',
    text: 'একটি ত্রিভুজের বহিঃস্থ কোণ ১৪০° এবং বিপরীত অন্তঃস্থ কোণ দুটির অন্তর ২৪°। ছোট কোণটির পরিমাণ কত?',
    options: ['৫৮°', '৮২°', '৬০°', '৪০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণ দুটি $A$ ও $B$। $A + B = 140°$, $A - B = 24°$' },
      { step: 'ধাপ ২:', content: 'বিয়োগ করলে, $2B = 116° \\Rightarrow B = 58°$' }
    ],
    shortcutTrick: '💡 $B = \\frac{140° - 24°}{2} = 58°$'
  },
  {
    id: 'ch25_q40',
    text: 'একটি ত্রিভুজের কোণগুলির সমষ্টি কত?',
    options: ['১৮০°', '৯০°', '৩৬০°', '২৭০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেকোনো ত্রিভুজের তিনটি কোণের সমষ্টি সর্বদা ১৮০°।' }
    ],
    shortcutTrick: '💡 ত্রিভুজের কোণগুলির সমষ্টি ১৮০°।'
  },
  {
    id: 'ch25_q41',
    text: 'একটি ত্রিভুজের কোণগুলি $5 : 6 : 7$ অনুপাতে থাকলে, কোণগুলির পরিমাণ কত?',
    options: ['৫০°, ৬০°, ৭০°', '৪৫°, ৫৪°, ৬৩°', '৬০°, ৭২°, ৮৪°', '৫৫°, ৬৬°, ৭৭°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $5x, 6x, 7x$।' },
      { step: 'ধাপ ২:', content: '$5x + 6x + 7x = 180° \\Rightarrow 18x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 10°$' },
      { step: 'ধাপ ৪:', content: 'কোণগুলি = $50°, 60°, 70°$' }
    ],
    shortcutTrick: '💡 $50°, 60°, 70°$ (অনুপাতের সাথে মিলিয়ে)'
  },
  {
    id: 'ch25_q42',
    text: 'একটি ত্রিভুজের একটি কোণ ৩০° এবং অপর একটি কোণ ১১০°। তৃতীয় কোণটির বহিঃস্থ কোণ কত?',
    options: ['১৪০°', '৪০°', '১২০°', '১০০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (30° + 110°) = 40°$' },
      { step: 'ধাপ ২:', content: 'বহিঃস্থ কোণ = $180° - 40° = 140°$' }
    ],
    shortcutTrick: '💡 বহিঃস্থ কোণ = $30° + 110° = 140°$'
  },
  {
    id: 'ch25_q43',
    text: 'একটি ত্রিভুজের কোণগুলি $2x, 3x, 4x$ হলে, ক্ষুদ্রতম কোণের বহিঃস্থ কোণ কত?',
    options: ['১২০°', '৬০°', '৯০°', '১৪০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x + 3x + 4x = 180° \\Rightarrow 9x = 180°$' },
      { step: 'ধাপ ২:', content: '$x = 20°$' },
      { step: 'ধাপ ৩:', content: 'ক্ষুদ্রতম কোণ = $2x = 40°$' },
      { step: 'ধাপ ৪:', content: 'বহিঃস্থ কোণ = $180° - 40° = 140°$' }
    ],
    shortcutTrick: '💡 $140°$'
  },
  {
    id: 'ch25_q44',
    text: 'একটি ত্রিভুজের একটি কোণ ৮০° এবং অপর একটি কোণ ৬০°। তৃতীয় কোণের বহিঃস্থ কোণ কত?',
    options: ['১৪০°', '৪০°', '১২০°', '৬০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (80° + 60°) = 40°$' },
      { step: 'ধাপ ২:', content: 'বহিঃস্থ কোণ = $180° - 40° = 140°$' }
    ],
    shortcutTrick: '💡 বহিঃস্থ কোণ = $80° + 60° = 140°$'
  },
  {
    id: 'ch25_q45',
    text: 'একটি ত্রিভুজের কোণগুলি $3x, 4x, 5x$। বৃহত্তম কোণের বহিঃস্থ কোণ কত?',
    options: ['১০৫°', '৭৫°', '৯০°', '১২০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x + 4x + 5x = 180° \\Rightarrow 12x = 180°$' },
      { step: 'ধাপ ২:', content: '$x = 15°$' },
      { step: 'ধাপ ৩:', content: 'বৃহত্তম কোণ = $5x = 75°$' },
      { step: 'ধাপ ৪:', content: 'বহিঃস্থ কোণ = $180° - 75° = 105°$' }
    ],
    shortcutTrick: '💡 $180° - \\frac{5}{12} \\times 180° = 105°$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ত্রিভুজের প্রকারভেদ ও বিশেষ বৈশিষ্ট্য (Triangle Types & Properties) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q46',
    text: 'একটি ত্রিভুজের কোণগুলি ৪০°, ৬০° ও ৮০° হলে, ত্রিভুজটি কী ধরনের?',
    options: ['সূক্ষ্মকোণী', 'সমকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু প্রতিটি কোণ ৯০°-এর কম, এটি একটি সূক্ষ্মকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 সব কোণ ৯০°-এর কম হলে সূক্ষ্মকোণী ত্রিভুজ।'
  },
  {
    id: 'ch25_q47',
    text: 'একটি ত্রিভুজের কোণগুলি ৩০°, ৬০° ও ৯০° হলে, এটি কী ধরনের ত্রিভুজ?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমদ্বিবাহু'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু একটি কোণ ৯০°, এটি একটি সমকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 একটি কোণ ৯০° হলে সমকোণী ত্রিভুজ।'
  },
  {
    id: 'ch25_q48',
    text: 'একটি ত্রিভুজের কোণগুলি ৫০°, ৭০° ও ৬০° হলে, ত্রিভুজটি কী ধরনের?',
    options: ['সূক্ষ্মকোণী', 'সমকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সব কোণ ৯০°-এর কম, তাই সূক্ষ্মকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 সব কোণ ৯০°-এর কম হলে সূক্ষ্মকোণী।'
  },
  {
    id: 'ch25_q49',
    text: 'একটি ত্রিভুজের কোণগুলি ১২০°, ৩০° ও ৩০° হলে, এটি কী ধরনের ত্রিভুজ?',
    options: ['স্থূলকোণী', 'সমকোণী', 'সূক্ষ্মকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু একটি কোণ ৯০°-এর বেশি (১২০°), এটি একটি স্থূলকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 একটি কোণ ৯০°-এর বেশি হলে স্থূলকোণী ত্রিভুজ।'
  },
  {
    id: 'ch25_q50',
    text: 'একটি ত্রিভুজের দুটি কোণ সমান এবং তৃতীয় কোণটি ৪০°। ত্রিভুজটি কী ধরনের?',
    options: ['সমদ্বিবাহু', 'সমবাহু', 'সমকোণী', 'স্থূলকোণী'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি কোণ সমান হলে, ত্রিভুজটি সমদ্বিবাহু হয়।' }
    ],
    shortcutTrick: '💡 দুটি কোণ সমান হলে সমদ্বিবাহু ত্রিভুজ।'
  },
  {
    id: 'ch25_q51',
    text: 'একটি ত্রিভুজের তিনটি কোণ সমান হলে, ত্রিভুজটি কী ধরনের?',
    options: ['সমবাহু', 'সমদ্বিবাহু', 'সমকোণী', 'স্থূলকোণী'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তিনটি কোণ সমান হলে, ত্রিভুজটি সমবাহু হয়।' }
    ],
    shortcutTrick: '💡 তিনটি কোণ সমান হলে সমবাহু ত্রিভুজ।'
  },
  {
    id: 'ch25_q52',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের শীর্ষকোণ ১১০°। ভূমি সংলগ্ন কোণগুলির প্রতিটির পরিমাণ কত?',
    options: ['৩৫°', '৪৫°', '৭০°', '৫৫°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভূমি সংলগ্ন কোণ দুটি সমান। মনে করি প্রতিটি = $x$।' },
      { step: 'ধাপ ২:', content: '$x + x + 110° = 180° \\Rightarrow 2x = 70°$' },
      { step: 'ধাপ ৩:', content: '$x = 35°$' }
    ],
    shortcutTrick: '💡 $\\frac{180° - 110°}{2} = 35°$'
  },
  {
    id: 'ch25_q53',
    text: 'একটি সমকোণী ত্রিভুজের একটি সূক্ষ্মকোণ ৪০°। অপর সূক্ষ্মকোণটির পরিমাণ কত?',
    options: ['৫০°', '৪০°', '৯০°', '৬০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমকোণী ত্রিভুজে একটি কোণ ৯০°।' },
      { step: 'ধাপ ২:', content: 'অপর সূক্ষ্মকোণ = $180° - (90° + 40°) = 50°$' }
    ],
    shortcutTrick: '💡 সূক্ষ্মকোণ দুটির সমষ্টি ৯০°। অপর কোণ = $90° - 40° = 50°$'
  },
  {
    id: 'ch25_q54',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের ভূমি সংলগ্ন কোণ ৭০°। শীর্ষকোণের পরিমাণ কত?',
    options: ['৪০°', '৫০°', '৬০°', '৭০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শীর্ষকোণ = $180° - (70° + 70°) = 40°$' }
    ],
    shortcutTrick: '💡 $180° - 2 \\times 70° = 40°$'
  },
  {
    id: 'ch25_q55',
    text: 'একটি ত্রিভুজের কোণগুলি $2 : 3 : 4$ অনুপাতে থাকলে, এটি কী ধরনের ত্রিভুজ?',
    options: ['সূক্ষ্মকোণী', 'সমকোণী', 'স্থূলকোণী', 'সমদ্বিবাহু'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $2x, 3x, 4x$।' },
      { step: 'ধাপ ২:', content: '$2x + 3x + 4x = 180° \\Rightarrow 9x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 20°$' },
      { step: 'ধাপ ৪:', content: 'কোণগুলি = $40°, 60°, 80°$ (সব ৯০°-এর কম) $\Rightarrow$ সূক্ষ্মকোণী।' }
    ],
    shortcutTrick: '💡 সব কোণ ৯০°-এর কম, তাই সূক্ষ্মকোণী।'
  },
  {
    id: 'ch25_q56',
    text: 'একটি ত্রিভুজের কোণগুলি $1 : 1 : 2$ অনুপাতে থাকলে, এটি কী ধরনের ত্রিভুজ?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $x, x, 2x$।' },
      { step: 'ধাপ ২:', content: '$x + x + 2x = 180° \\Rightarrow 4x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 45°$' },
      { step: 'ধাপ ৪:', content: 'কোণগুলি = $45°, 45°, 90°$ $\Rightarrow$ সমকোণী।' }
    ],
    shortcutTrick: '💡 $1:1:2$ অনুপাত মানে একটি কোণ ৯০°, অর্থাৎ সমকোণী ত্রিভুজ।'
  },
  {
    id: 'ch25_q57',
    text: 'একটি ত্রিভুজের কোণগুলি $1 : 2 : 6$ অনুপাতে থাকলে, এটি কী ধরনের ত্রিভুজ?',
    options: ['স্থূলকোণী', 'সমকোণী', 'সূক্ষ্মকোণী', 'সমদ্বিবাহু'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $x, 2x, 6x$।' },
      { step: 'ধাপ ২:', content: '$x + 2x + 6x = 180° \\Rightarrow 9x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 20°$' },
      { step: 'ধাপ ৪:', content: 'কোণগুলি = $20°, 40°, 120°$ (একটি কোণ ৯০°-এর বেশি) $\Rightarrow$ স্থূলকোণী।' }
    ],
    shortcutTrick: '💡 $1:2:6$ অনুপাতে একটি কোণ ১২০° হওয়ায় স্থূলকোণী।'
  },
  {
    id: 'ch25_q58',
    text: 'একটি ত্রিভুজের দুটি কোণ যথাক্রমে ৪৫° ও ৪৫°। ত্রিভুজটি কী ধরনের?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (45° + 45°) = 90°$' },
      { step: 'ধাপ ২:', content: 'যেহেতু একটি কোণ ৯০°, ত্রিভুজটি সমকোণী।' }
    ],
    shortcutTrick: '💡 $45° + 45° = 90°$, তাই এটি সমকোণী।'
  },
  {
    id: 'ch25_q59',
    text: 'একটি সমবাহু ত্রিভুজের প্রতিটি কোণের পরিমাণ কত?',
    options: ['৬০°', '৪৫°', '৯০°', '৩০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের তিনটি কোণই সমান।' },
      { step: 'ধাপ ২:', content: 'প্রতিটি কোণ = $\\frac{180°}{3} = 60°$' }
    ],
    shortcutTrick: '💡 সমবাহু ত্রিভুজের প্রতিটি কোণ ৬০°।'
  },
  {
    id: 'ch25_q60',
    text: 'একটি ত্রিভুজের কোণগুলি $4x, 5x$ ও $9x$। ত্রিভুজটি কী ধরনের?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4x + 5x + 9x = 180° \\Rightarrow 18x = 180°$' },
      { step: 'ধাপ ২:', content: '$x = 10°$' },
      { step: 'ধাপ ৩:', content: 'কোণগুলি = $40°, 50°, 90°$ $\Rightarrow$ সমকোণী।' }
    ],
    shortcutTrick: '💡 $4+5=9$, তাই $9x+9x=180° \\Rightarrow 18x=180° \\Rightarrow x=10°$। কোণ $90°$ হওয়ায় সমকোণী।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: সমান্তরাল রেখা ও ছেদক (Parallel Lines & Transversal) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q61',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, অনুরূপ কোণগুলির সম্পর্ক কী?',
    options: ['সমান', 'সম্পূরক', 'পূরক', 'বিপরীত'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে সৃষ্ট অনুরূপ কোণগুলি সমান হয়।' }
    ],
    shortcutTrick: '💡 অনুরূপ কোণ সমান হয়।'
  },
  {
    id: 'ch25_q62',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একান্তর অন্তঃকোণগুলির সম্পর্ক কী?',
    options: ['সমান', 'সম্পূরক', 'পূরক', 'বিপরীত'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একান্তর অন্তঃকোণগুলি সমান হয়।' }
    ],
    shortcutTrick: '💡 একান্তর অন্তঃকোণ সমান হয়।'
  },
  {
    id: 'ch25_q63',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, ছেদকের একই পাশের অন্তঃস্থ কোণগুলির সমষ্টি কত?',
    options: ['১৮০°', '৯০°', '৩৬০°', '২৭০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছেদকের একই পাশের অন্তঃস্থ কোণগুলি সম্পূরক, অর্থাৎ তাদের সমষ্টি ১৮০°।' }
    ],
    shortcutTrick: '💡 একই পাশের অন্তঃস্থ কোণগুলির সমষ্টি ১৮০°।'
  },
  {
    id: 'ch25_q64',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১১০° হলে, তার অনুরূপ কোণের পরিমাণ কত?',
    options: ['১১০°', '৭০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ কোণগুলি সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, অনুরূপ কোণও ১১০° হবে।' }
    ],
    shortcutTrick: '💡 অনুরূপ কোণ সমান, তাই ১১০°।'
  },
  {
    id: 'ch25_q65',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১১০° হলে, তার বিপ্রতীপ কোণের পরিমাণ কত?',
    options: ['১১০°', '৭০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপ্রতীপ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, বিপ্রতীপ কোণও ১১০° হবে।' }
    ],
    shortcutTrick: '💡 বিপ্রতীপ কোণ সমান, তাই ১১০°।'
  },
  {
    id: 'ch25_q66',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১১০° হলে, তার সম্পূরক কোণের পরিমাণ কত?',
    options: ['৭০°', '১১০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূরক কোণের সমষ্টি ১৮০°।' },
      { step: 'ধাপ ২:', content: 'অতএব, সম্পূরক কোণ = $180° - 110° = 70°$' }
    ],
    shortcutTrick: '💡 $180° - 110° = 70°$'
  },
  {
    id: 'ch25_q67',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি অন্তঃস্থ কোণ অন্যটির দ্বিগুণ। ছোট কোণটির পরিমাণ কত?',
    options: ['৬০°', '৩০°', '৪৫°', '৯০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি ছোট কোণটি = $x$। বড় কোণটি = $2x$।' },
      { step: 'ধাপ ২:', content: 'যেহেতু এরা একই পাশের অন্তঃস্থ কোণ, $x + 2x = 180°$' },
      { step: 'ধাপ ৩:', content: '$3x = 180° \\Rightarrow x = 60°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180°}{3} = 60°$'
  },
  {
    id: 'ch25_q68',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ৬০° হলে, তার একান্তর বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['৬০°', '১২০°', '৯০°', '৩০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একান্তর বহিঃস্থ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, একান্তর বহিঃস্থ কোণও ৬০° হবে।' }
    ],
    shortcutTrick: '💡 একান্তর বহিঃস্থ কোণ সমান, তাই ৬০°।'
  },
  {
    id: 'ch25_q69',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১২০° হলে, তার অনুরূপ কোণের পরিমাণ কত?',
    options: ['১২০°', '৬০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, অনুরূপ কোণও ১২০° হবে।' }
    ],
    shortcutTrick: '💡 অনুরূপ কোণ সমান, তাই ১২০°।'
  },
  {
    id: 'ch25_q70',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১২০° হলে, তার সম্পূরক কোণের পরিমাণ কত?',
    options: ['৬০°', '১২০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূরক কোণের সমষ্টি ১৮০°।' },
      { step: 'ধাপ ২:', content: '$180° - 120° = 60°$' }
    ],
    shortcutTrick: '💡 $180° - 120° = 60°$'
  },
  {
    id: 'ch25_q71',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ৭০° হলে, তার একান্তর অন্তঃস্থ কোণের পরিমাণ কত?',
    options: ['৭০°', '১১০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একান্তর অন্তঃস্থ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, একান্তর অন্তঃস্থ কোণও ৭০° হবে।' }
    ],
    shortcutTrick: '💡 একান্তর অন্তঃস্থ কোণ সমান, তাই ৭০°।'
  },
  {
    id: 'ch25_q72',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১০০° হলে, তার অনুরূপ কোণের পরিমাণ কত?',
    options: ['১০০°', '৮০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুরূপ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, অনুরূপ কোণও ১০০° হবে।' }
    ],
    shortcutTrick: '💡 অনুরূপ কোণ সমান, তাই ১০০°।'
  },
  {
    id: 'ch25_q73',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১০০° হলে, তার সম্পূরক কোণের পরিমাণ কত?',
    options: ['৮০°', '১০০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$180° - 100° = 80°$' }
    ],
    shortcutTrick: '💡 $180° - 100° = 80°$'
  },
  {
    id: 'ch25_q74',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি অন্তঃস্থ কোণ অন্যটির তিন গুণ। ছোট কোণটির পরিমাণ কত?',
    options: ['৪৫°', '৩০°', '৬০°', '৯০°'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি ছোট কোণ = $x$। বড় কোণ = $3x$।' },
      { step: 'ধাপ ২:', content: '$x + 3x = 180° \\Rightarrow 4x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 45°$' }
    ],
    shortcutTrick: '💡 $x = \\frac{180°}{4} = 45°$'
  },
  {
    id: 'ch25_q75',
    text: 'দুটি সমান্তরাল রেখাকে একটি ছেদক ছেদ করলে, একটি কোণ ১১০° হলে, তার একান্তর বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['১১০°', '৭০°', '৯০°', '১৮০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একান্তর বহিঃস্থ কোণ সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, একান্তর বহিঃস্থ কোণও ১১০° হবে।' }
    ],
    shortcutTrick: '💡 একান্তর বহিঃস্থ কোণ সমান, তাই ১১০°।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: ত্রিভুজের অসমতা ও অন্যান্য জটিল সমস্যা (Inequality & Mixed Problems) (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q76',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৩ সেমি, ৪ সেমি ও ৫ সেমি। ত্রিভুজটি কী ধরনের?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিথাগোরাসের উপপাদ্য অনুযায়ী, $5^2 = 3^2 + 4^2$' },
      { step: 'ধাপ ২:', content: '$25 = 9 + 16 = 25$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $c^2 = a^2 + b^2$, এটি একটি সমকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $3-4-5$ পিথাগোরীয় ত্রয়ী, তাই সমকোণী ত্রিভুজ।'
  },
  {
    id: 'ch25_q77',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৫ সেমি, ৬ সেমি ও ৭ সেমি। ত্রিভুজটি কী ধরনের?',
    options: ['সূক্ষ্মকোণী', 'সমকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃহত্তম বাহু = ৭ সেমি। $7^2 = 49$' },
      { step: 'ধাপ ২:', content: '$5^2 + 6^2 = 25 + 36 = 61$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $7^2 < 5^2 + 6^2$, এটি একটি সূক্ষ্মকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $c^2 < a^2 + b^2$ হলে সূক্ষ্মকোণী।'
  },
  {
    id: 'ch25_q78',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৪ সেমি, ৫ সেমি ও ৮ সেমি। ত্রিভুজটি কী ধরনের?',
    options: ['স্থূলকোণী', 'সমকোণী', 'সূক্ষ্মকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃহত্তম বাহু = ৮ সেমি। $8^2 = 64$' },
      { step: 'ধাপ ২:', content: '$4^2 + 5^2 = 16 + 25 = 41$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $8^2 > 4^2 + 5^2$, এটি একটি স্থূলকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $c^2 > a^2 + b^2$ হলে স্থূলকোণী।'
  },
  {
    id: 'ch25_q79',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৬ সেমি, ৮ সেমি ও ১০ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['২৪ বর্গসেমি', '৪৮ বর্গসেমি', '৩০ বর্গসেমি', '৪০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$6-8-10$ একটি পিথাগোরীয় ত্রয়ী, তাই এটি সমকোণী ত্রিভুজ।' },
      { step: 'ধাপ ২:', content: 'সমকোণী ত্রিভুজের ক্ষেত্রফল = $\\frac{1}{2} \\times \\text{ভূমি} \\times \\text{উচ্চতা}$' },
      { step: 'ধাপ ৩:', content: 'এখানে ভূমি = ৬ সেমি, উচ্চতা = ৮ সেমি (বা উল্টো) দিলে, ক্ষেত্রফল = $\\frac{1}{2} \\times 6 \\times 8 = 24$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $6-8-10$ সমকোণী ত্রিভুজের ক্ষেত্রফল = $\\frac{1}{2} \\times 6 \\times 8 = 24$ বর্গসেমি।'
  },
  {
    id: 'ch25_q80',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৫ সেমি, ১২ সেমি ও ১৩ সেমি। এটি কী ধরনের ত্রিভুজ?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5^2 + 12^2 = 25 + 144 = 169$' },
      { step: 'ধাপ ২:', content: '$13^2 = 169$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $13^2 = 5^2 + 12^2$, এটি একটি সমকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $5-12-13$ পিথাগোরীয় ত্রয়ী, তাই সমকোণী।'
  },
  {
    id: 'ch25_q81',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৭ সেমি, ২৪ সেমি ও ২৫ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৮৪ বর্গসেমি', '১৬৮ বর্গসেমি', '৪২ বর্গসেমি', '৬০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$7-24-25$ একটি পিথাগোরীয় ত্রয়ী, তাই এটি সমকোণী ত্রিভুজ।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 7 \\times 24 = 84$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 7 \\times 24 = 84$ বর্গসেমি।'
  },
  {
    id: 'ch25_q82',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৮ সেমি, ১৫ সেমি ও ১৭ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৬০ বর্গসেমি', '১২০ বর্গসেমি', '৩০ বর্গসেমি', '৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$8-15-17$ একটি পিথাগোরীয় ত্রয়ী, তাই সমকোণী।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 8 \\times 15 = 60$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 8 \\times 15 = 60$ বর্গসেমি।'
  },
  {
    id: 'ch25_q83',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৯ সেমি, ১২ সেমি ও ১৫ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৫৪ বর্গসেমি', '১০৮ বর্গসেমি', '২৭ বর্গসেমি', '৭২ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$9-12-15$ একটি পিথাগোরীয় ত্রয়ী (3-4-5 এর গুণিতক)।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 9 \\times 12 = 54$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 9 \\times 12 = 54$ বর্গসেমি।'
  },
  {
    id: 'ch25_q84',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ১০ সেমি, ২৪ সেমি ও ২৬ সেমি। এটি কী ধরনের ত্রিভুজ?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$10^2 + 24^2 = 100 + 576 = 676$' },
      { step: 'ধাপ ২:', content: '$26^2 = 676$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $26^2 = 10^2 + 24^2$, এটি সমকোণী।' }
    ],
    shortcutTrick: '💡 $10-24-26$ পিথাগোরীয় ত্রয়ী, তাই সমকোণী।'
  },
  {
    id: 'ch25_q85',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ১১ সেমি, ৬০ সেমি ও ৬১ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৩৩০ বর্গসেমি', '৬৬০ বর্গসেমি', '১৬৫ বর্গসেমি', '৪৪০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$11-60-61$ একটি পিথাগোরীয় ত্রয়ী, তাই সমকোণী।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 11 \\times 60 = 330$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 11 \\times 60 = 330$ বর্গসেমি।'
  },
  {
    id: 'ch25_q86',
    text: 'একটি ত্রিভুজের একটি কোণ ৯০°। অপর দুটি কোণের অনুপাত $3 : 7$। কোণ দুটির পরিমাণ কত?',
    options: ['২৭°, ৬৩°', '৩০°, ৬০°', '৪৫°, ৪৫°', '২০°, ৭০°'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অপর দুটি কোণের সমষ্টি = ৯০°।' },
      { step: 'ধাপ ২:', content: 'মনে করি কোণ দুটি $3x$ ও $7x$।' },
      { step: 'ধাপ ৩:', content: '$3x + 7x = 90° \\Rightarrow 10x = 90°$' },
      { step: 'ধাপ ৪:', content: '$x = 9°$' },
      { step: 'ধাপ ৫:', content: 'কোণ দুটি = $27°$ ও $63°$।' }
    ],
    shortcutTrick: '💡 $\\frac{3}{10} \\times 90° = 27°$, $\\frac{7}{10} \\times 90° = 63°$'
  },
  {
    id: 'ch25_q87',
    text: 'একটি ত্রিভুজের একটি কোণ অপর কোণের দ্বিগুণ এবং তৃতীয় কোণ ৬০°। ত্রিভুজটি কী ধরনের?',
    options: ['সমকোণী', 'সূক্ষ্মকোণী', 'স্থূলকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি ছোট কোণ = $x$। বড় কোণ = $2x$।' },
      { step: 'ধাপ ২:', content: '$x + 2x + 60° = 180° \\Rightarrow 3x = 120°$' },
      { step: 'ধাপ ৩:', content: '$x = 40°$' },
      { step: 'ধাপ ৪:', content: 'কোণগুলি = $40°, 80°, 60°$ (সব ৯০°-এর কম) $\Rightarrow$ সূক্ষ্মকোণী।' }
    ],
    shortcutTrick: '💡 সব কোণ ৯০°-এর কম, তাই সূক্ষ্মকোণী।'
  },
  {
    id: 'ch25_q88',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ২ সেমি, ৩ সেমি ও ৪ সেমি। ত্রিভুজটি কী ধরনের?',
    options: ['স্থূলকোণী', 'সমকোণী', 'সূক্ষ্মকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃহত্তম বাহু = ৪ সেমি। $4^2 = 16$' },
      { step: 'ধাপ ২:', content: '$2^2 + 3^2 = 4 + 9 = 13$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $4^2 > 2^2 + 3^2$, এটি একটি স্থূলকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $c^2 > a^2 + b^2$ হলে স্থূলকোণী।'
  },
  {
    id: 'ch25_q89',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৪ সেমি, ৪ সেমি ও ৬ সেমি। ত্রিভুজটি কী ধরনের?',
    options: ['স্থূলকোণী', 'সমকোণী', 'সূক্ষ্মকোণী', 'সমবাহু'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃহত্তম বাহু = ৬ সেমি। $6^2 = 36$' },
      { step: 'ধাপ ২:', content: '$4^2 + 4^2 = 16 + 16 = 32$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $6^2 > 4^2 + 4^2$, এটি একটি স্থূলকোণী ত্রিভুজ।' }
    ],
    shortcutTrick: '💡 $c^2 > a^2 + b^2$ হলে স্থূলকোণী।'
  },
  {
    id: 'ch25_q90',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের সমান বাহুগুলির দৈর্ঘ্য ৫ সেমি এবং ভূমি ৬ সেমি। ত্রিভুজটির উচ্চতা কত?',
    options: ['৪ সেমি', '৩ সেমি', '৫ সেমি', '৬ সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমদ্বিবাহু ত্রিভুজের শীর্ষ থেকে ভূমির ওপর লম্ব অঙ্কন করলে ভূমি সমদ্বিখণ্ডিত হয়।' },
      { step: 'ধাপ ২:', content: 'ভূমির অর্ধেক = $\\frac{6}{2} = 3$ সেমি।' },
      { step: 'ধাপ ৩:', content: 'পিথাগোরাসের উপপাদ্য অনুযায়ী, $\\text{উচ্চতা} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: মিশ্র ও উচ্চতর জটিল সমস্যা (Mixed & Advanced Problems) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch25_q91',
    text: 'একটি ত্রিভুজের কোণগুলির অনুপাত $3 : 4 : 5$। বৃহত্তম কোণটির বহিঃস্থ কোণের পরিমাণ কত?',
    options: ['১০৫°', '৭৫°', '৯০°', '৬০°'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি কোণগুলি $3x, 4x, 5x$।' },
      { step: 'ধাপ ২:', content: '$3x + 4x + 5x = 180° \\Rightarrow 12x = 180°$' },
      { step: 'ধাপ ৩:', content: '$x = 15°$' },
      { step: 'ধাপ ৪:', content: 'বৃহত্তম কোণ = $5x = 75°$' },
      { step: 'ধাপ ৫:', content: 'বহিঃস্থ কোণ = $180° - 75° = 105°$' }
    ],
    shortcutTrick: '💡 $180° - \\frac{5}{12} \\times 180° = 105°$'
  },
  {
    id: 'ch25_q92',
    text: 'একটি ত্রিভুজের একটি কোণ ৫০° এবং অপর একটি কোণ ৭০°। তৃতীয় কোণের সমদ্বিখণ্ডক কোণটিকে কী অনুপাতে বিভক্ত করবে? (সরাসরি প্রদত্ত নয়)',
    options: ['অসম্ভব', '১:১', '২:৩', '৩:২'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'তৃতীয় কোণ = $180° - (50° + 70°) = 60°$' },
      { step: 'ধাপ ২:', content: 'কোণ সমদ্বিখণ্ডক বিপরীত বাহুকে বাকি দুই বাহুর অনুপাতে বিভক্ত করে।' },
      { step: 'ধাপ ৩:', content: 'যেহেতু বাহুর দৈর্ঘ্য দেওয়া নেই, তাই সমদ্বিখণ্ডক যে অনুপাতে বিভক্ত করবে তা নির্ধারণ করা সম্ভব নয়।' }
    ],
    shortcutTrick: '💡 শুধুমাত্র কোণ দেওয়া থাকলে বাহুর বিভাজন অনুপাত নির্ণয় করা যায় না।'
  },
  {
    id: 'ch25_q93',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৬ সেমি, ৮ সেমি ও ১০ সেমি। ত্রিভুজটির পরিসীমা কত?',
    options: ['২৪ সেমি', '২০ সেমি', '২৬ সেমি', '২৮ সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা = বাহুগুলির সমষ্টি।' },
      { step: 'ধাপ ২:', content: '$6 + 8 + 10 = 24$ সেমি।' }
    ],
    shortcutTrick: '💡 $6 + 8 + 10 = 24$ সেমি।'
  },
  {
    id: 'ch25_q94',
    text: 'একটি সমদ্বিবাহু ত্রিভুজের সমান বাহুগুলির দৈর্ঘ্য ১৩ সেমি এবং ভূমি ১০ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৬০ বর্গসেমি', '৬৫ বর্গসেমি', '১২০ বর্গসেমি', '৩০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উচ্চতা = $\\sqrt{13^2 - (10/2)^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times \\text{ভূমি} \\times \\text{উচ্চতা} = \\frac{1}{2} \\times 10 \\times 12 = 60$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 10 \\times 12 = 60$ বর্গসেমি।'
  },
  {
    id: 'ch25_q95',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৫ সেমি, ৬ সেমি ও ৭ সেমি। ত্রিভুজটির ক্ষেত্রফল নির্ণয় করো। (হেরনের সূত্র ব্যবহার করে)',
    options: ['$6\\sqrt{6}$ বর্গসেমি', '$7\\sqrt{5}$ বর্গসেমি', '$4\\sqrt{10}$ বর্গসেমি', '$5\\sqrt{7}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অর্ধ-পরিসীমা, $s = \\frac{5+6+7}{2} = 9$ সেমি।' },
      { step: 'ধাপ ২:', content: 'হেরনের সূত্র: $\\text{ক্ষেত্রফল} = \\sqrt{s(s-a)(s-b)(s-c)}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল} = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{216} = 6\\sqrt{6}$ বর্গসেমি।'
  },
  {
    id: 'ch25_q96',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৮ সেমি, ১৫ সেমি ও ১৭ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৬০ বর্গসেমি', '১২০ বর্গসেমি', '৩০ বর্গসেমি', '৯০ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$8-15-17$ একটি পিথাগোরীয় ত্রয়ী, তাই সমকোণী।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\frac{1}{2} \\times 8 \\times 15 = 60$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{2} \\times 8 \\times 15 = 60$ বর্গসেমি।'
  },
  {
    id: 'ch25_q97',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৭ সেমি, ৮ সেমি ও ৯ সেমি। ত্রিভুজটির ক্ষেত্রফল কত? (হেরনের সূত্র ব্যবহার করে)',
    options: ['$12\\sqrt{5}$ বর্গসেমি', '$24\\sqrt{5}$ বর্গসেমি', '$6\\sqrt{5}$ বর্গসেমি', '$8\\sqrt{5}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$s = \\frac{7+8+9}{2} = 12$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\sqrt{12(12-7)(12-8)(12-9)} = \\sqrt{12 \\times 5 \\times 4 \\times 3} = \\sqrt{720} = 12\\sqrt{5}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{720} = 12\\sqrt{5}$ বর্গসেমি।'
  },
  {
    id: 'ch25_q98',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ৯ সেমি, ১০ সেমি ও ১১ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['$30\\sqrt{2}$ বর্গসেমি', '$60\\sqrt{2}$ বর্গসেমি', '$15\\sqrt{2}$ বর্গসেমি', '$20\\sqrt{3}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$s = \\frac{9+10+11}{2} = 15$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\sqrt{15(15-9)(15-10)(15-11)} = \\sqrt{15 \\times 6 \\times 5 \\times 4} = \\sqrt{1800} = 30\\sqrt{2}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{1800} = 30\\sqrt{2}$ বর্গসেমি।'
  },
  {
    id: 'ch25_q99',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ১০ সেমি, ১২ সেমি ও ১৪ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['$24\\sqrt{6}$ বর্গসেমি', '$48\\sqrt{6}$ বর্গসেমি', '$12\\sqrt{6}$ বর্গসেমি', '$36\\sqrt{6}$ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$s = \\frac{10+12+14}{2} = 18$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\sqrt{18(18-10)(18-12)(18-14)} = \\sqrt{18 \\times 8 \\times 6 \\times 4} = \\sqrt{3456} = 24\\sqrt{6}$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{3456} = 24\\sqrt{6}$ বর্গসেমি।'
  },
  {
    id: 'ch25_q100',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য ১৩ সেমি, ১৪ সেমি ও ১৫ সেমি। ত্রিভুজটির ক্ষেত্রফল কত?',
    options: ['৮৪ বর্গসেমি', '৪২ বর্গসেমি', '১৬৮ বর্গসেমি', '২১ বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$s = \\frac{13+14+15}{2} = 21$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল = $\\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{7056} = 84$ বর্গসেমি।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter25Questions;
}

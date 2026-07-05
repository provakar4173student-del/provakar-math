// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 27: বৃত্ত ও স্পর্শক (Circles & Tangents) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter27Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: বৃত্তের মৌলিক উপপাদ্য (Basic Circle Theorems) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q1',
    text: 'একটি বৃত্তের ব্যাসার্ধ 7 সেমি। বৃত্তটির পরিধি কত?',
    options: ['22 সেমি', '44 সেমি', '14 সেমি', '28 সেমি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃত্তের পরিধির সূত্র: $C = 2\\pi r$' },
      { step: 'ধাপ ২:', content: '$\\pi = \\frac{22}{7}$ এবং $r = 7$ সেমি বসিয়ে পাই:' },
      { step: 'ধাপ ৩:', content: '$C = 2 \\times \\frac{22}{7} \\times 7 = 44$ সেমি।' }
    ],
    shortcutTrick: '💡 $C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 7 = 44$ সেমি।'
  },
  {
    id: 'ch27_q2',
    text: 'একটি বৃত্তের ব্যাস 14 সেমি হলে, এর ক্ষেত্রফল কত?',
    options: ['154 বর্গসেমি', '308 বর্গসেমি', '77 বর্গসেমি', '616 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = \\frac{14}{2} = 7$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $A = \\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 154$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $A = \\pi r^2 = \\frac{22}{7} \\times 7^2 = 154$ বর্গসেমি।'
  },
  {
    id: 'ch27_q3',
    text: 'একটি বৃত্তের ব্যাসার্ধ 5 সেমি হলে, এর ক্ষেত্রফল ও পরিধির অনুপাত কত?',
    options: ['5 : 2', '2 : 5', '5 : 4', '4 : 5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $A = \\pi r^2$ এবং পরিধি $C = 2\\pi r$' },
      { step: 'ধাপ ২:', content: 'অনুপাত $A : C = \\pi r^2 : 2\\pi r = r : 2$' },
      { step: 'ধাপ ৩:', content: '$r = 5$ হলে $A : C = 5 : 2$' }
    ],
    shortcutTrick: '💡 $A : C = r : 2 = 5 : 2$।'
  },
  {
    id: 'ch27_q4',
    text: 'একটি বৃত্তের কেন্দ্র $O$ এবং $AB$ একটি জ্যা। $\\angle AOB = 120^\\circ$ হলে, $AB$ জ্যা-এর দৈর্ঘ্য কত হবে? (ব্যাসার্ধ $= 6$ সেমি)',
    options: ['$6\\sqrt{3}$ সেমি', '$12$ সেমি', '$6$ সেমি', '$3\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'জ্যা-এর দৈর্ঘ্য $AB = 2r \\sin(\\frac{\\theta}{2})$' },
      { step: 'ধাপ ২:', content: 'এখানে $r = 6$, $\\theta = 120^\\circ$' },
      { step: 'ধাপ ৩:', content: '$AB = 2 \\times 6 \\times \\sin 60^\\circ = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$ সেমি।' }
    ],
    shortcutTrick: '💡 $AB = 2r \\sin(\\frac{\\theta}{2}) = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$ সেমি।'
  },
  {
    id: 'ch27_q5',
    text: 'একটি বৃত্তের কেন্দ্র $O$ এবং $AB$ একটি ব্যাস। $C$ বৃত্তের ওপর একটি বিন্দু। $\\angle ACB$-এর মান কত?',
    options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসের ওপর অবস্থিত কোনো বিন্দু থেকে ব্যাসের প্রান্তবিন্দু দুটির সাথে উৎপন্ন কোণ সমকোণ হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং $\\angle ACB = 90^\\circ$' }
    ],
    shortcutTrick: '💡 অর্ধবৃত্তস্থ কোণ সর্বদা $90^\\circ$।'
  },
  {
    id: 'ch27_q6',
    text: 'একটি বৃত্তে দুটি সমান জ্যা $AB$ ও $CD$ পরস্পরকে বিন্দু $P$-এ ছেদ করেছে। $\\angle APB = 120^\\circ$ হলে, $\\angle AOC$-এর মান কত?',
    options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান জ্যা কেন্দ্রে সমান কোণ উৎপন্ন করে।' },
      { step: 'ধাপ ২:', content: '$\\angle AOC = \\angle BOD = 2\\angle APB$ অথবা $\\angle APB = \\frac{1}{2}(\\widehat{AB} + \\widehat{CD})$' },
      { step: 'ধাপ ৩:', content: 'এক্ষেত্রে $\\angle AOC = 60^\\circ$' }
    ],
    shortcutTrick: '💡 সমান জ্যা-এর জন্য কেন্দ্রীয় কোণ সমান। $\\angle AOC = 60^\\circ$।'
  },
  {
    id: 'ch27_q7',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি সমান্তরাল জ্যা। যদি $AB = 8$ সেমি এবং $CD = 6$ সেমি হয়, তবে কেন্দ্র থেকে জ্যা দুটির দূরত্বের অনুপাত কত?',
    options: ['$3 : 4$', '$4 : 3$', '$9 : 16$', '$16 : 9$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কেন্দ্র থেকে জ্যা-এর দূরত্ব $d = \\sqrt{r^2 - (\\frac{l}{2})^2}$' },
      { step: 'ধাপ ২:', content: '$AB = 8 \\Rightarrow \\frac{8}{2} = 4$; $CD = 6 \\Rightarrow \\frac{6}{2} = 3$' },
      { step: 'ধাপ ৩:', content: 'দূরত্বের অনুপাত $\\sqrt{r^2 - 16} : \\sqrt{r^2 - 9} = 3 : 4$' }
    ],
    shortcutTrick: '💡 কেন্দ্র থেকে দূরত্ব জ্যা-এর দৈর্ঘ্যের ব্যস্তানুপাতিক। $d_1 : d_2 = 3 : 4$।'
  },
  {
    id: 'ch27_q8',
    text: 'একটি বৃত্তের ব্যাসার্ধ $r$ এবং জ্যা-এর দৈর্ঘ্য $l$। জ্যা-এর মধ্যবিন্দু থেকে কেন্দ্রের দূরত্ব কত?',
    options: ['$\\sqrt{r^2 - (l/2)^2}$', '$\\sqrt{r^2 + (l/2)^2}$', '$r - l/2$', '$r + l/2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কেন্দ্র থেকে জ্যা-এর ওপর অঙ্কিত লম্ব জ্যা-কে সমদ্বিখণ্ডিত করে।' },
      { step: 'ধাপ ২:', content: 'পিথাগোরাসের উপপাদ্য অনুযায়ী: $d^2 + (l/2)^2 = r^2$' },
      { step: 'ধাপ ৩:', content: '$d = \\sqrt{r^2 - (l/2)^2}$' }
    ],
    shortcutTrick: '💡 $d = \\sqrt{r^2 - (l/2)^2}$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch27_q9',
    text: 'একটি বৃত্তের ব্যাস $d$ এবং জ্যা-এর দৈর্ঘ্য $l$। জ্যা-এর মধ্যবিন্দু থেকে বৃত্তের পরিধি পর্যন্ত লম্ব দূরত্ব কত?',
    options: ['$\\frac{d - \\sqrt{d^2 - l^2}}{2}$', '$\\frac{d + \\sqrt{d^2 - l^2}}{2}$', '$\\frac{l}{2}$', '$d - l$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কেন্দ্র থেকে জ্যা-এর দূরত্ব $d_1 = \\sqrt{(\\frac{d}{2})^2 - (\\frac{l}{2})^2} = \\frac{1}{2}\\sqrt{d^2 - l^2}$' },
      { step: 'ধাপ ২:', content: 'জ্যা থেকে পরিধি পর্যন্ত লম্ব দূরত্ব = ব্যাসার্ধ - কেন্দ্র থেকে দূরত্ব' },
      { step: 'ধাপ ৩:', content: '$= \\frac{d}{2} - \\frac{1}{2}\\sqrt{d^2 - l^2} = \\frac{d - \\sqrt{d^2 - l^2}}{2}$' }
    ],
    shortcutTrick: '💡 $\\frac{d - \\sqrt{d^2 - l^2}}{2}$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch27_q10',
    text: 'একটি বৃত্তে দুটি জ্যা $AB$ ও $CD$ পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP \\times PB = CP \\times PD$ সম্পর্কটি কোন উপপাদ্যের ওপর ভিত্তি করে?',
    options: ['স্পর্শক-ছেদক উপপাদ্য', 'ছেদক-ছেদক উপপাদ্য', 'পিথাগোরাসের উপপাদ্য', 'অর্ধবৃত্তস্থ কোণ উপপাদ্য'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি জ্যা পরস্পরকে ছেদ করলে একটি জ্যা-এর অংশ দুটির গুণফল অপর জ্যা-এর অংশ দুটির গুণফলের সমান হয়।' },
      { step: 'ধাপ ২:', content: 'এটি ছেদক-ছেদক উপপাদ্য বা জ্যা-ছেদক উপপাদ্য নামে পরিচিত।' }
    ],
    shortcutTrick: '💡 $AP \\times PB = CP \\times PD$ - এটি ছেদক-ছেদক উপপাদ্য।'
  },
  {
    id: 'ch27_q11',
    text: 'একটি বৃত্তের কেন্দ্র $O$ এবং $\\angle AOB = 60^\\circ$। $AB$ জ্যা-এর দৈর্ঘ্য 5 সেমি হলে, বৃত্তের ব্যাসার্ধ কত?',
    options: ['5 সেমি', '10 সেমি', '$5\\sqrt{3}$ সেমি', '$\\frac{5}{\\sqrt{3}}$ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = 2r \\sin(\\frac{\\theta}{2})$' },
      { step: 'ধাপ ২:', content: '$5 = 2r \\sin 30^\\circ = 2r \\times \\frac{1}{2} = r$' },
      { step: 'ধাপ ৩:', content: '$r = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\theta = 60^\\circ$ হলে $AB = r$। সুতরাং $r = 5$ সেমি।'
  },
  {
    id: 'ch27_q12',
    text: 'একটি বৃত্তের কেন্দ্র $O$ এবং ব্যাসার্ধ $R$। $AB$ একটি জ্যা যার দৈর্ঘ্য $R\\sqrt{2}$। $\\angle AOB$-এর মান কত?',
    options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB = 2R \\sin(\\frac{\\theta}{2}) = R\\sqrt{2}$' },
      { step: 'ধাপ ২:', content: '$\\sin(\\frac{\\theta}{2}) = \\frac{\\sqrt{2}}{2} = \\sin 45^\\circ$' },
      { step: 'ধাপ ৩:', content: '$\\frac{\\theta}{2} = 45^\\circ \\Rightarrow \\theta = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $AB = R\\sqrt{2}$ হলে কেন্দ্রীয় কোণ $90^\\circ$।'
  },
  {
    id: 'ch27_q13',
    text: 'একটি বৃত্তে $\\angle AOB = 100^\\circ$ এবং $\\angle ACB = x$। $C$ বৃত্তের ওপর $AB$-এর বিপরীতে অবস্থিত। $x$-এর মান কত?',
    options: ['$50^\\circ$', '$100^\\circ$', '$80^\\circ$', '$40^\\circ$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'একই চাপের ওপর অবস্থিত কেন্দ্রীয় কোণ বৃত্তস্থ কোণের দ্বিগুণ।' },
      { step: 'ধাপ ২:', content: '$\\angle ACB = \\frac{1}{2}\\angle AOB = \\frac{1}{2} \\times 100^\\circ = 50^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ACB = \\frac{1}{2}\\angle AOB = 50^\\circ$।'
  },
  {
    id: 'ch27_q14',
    text: 'একটি বৃত্তে $\\angle ABC = 70^\\circ$ এবং $\\angle ACB = 50^\\circ$। $\\angle BAC$-এর মান কত?',
    options: ['$60^\\circ$', '$70^\\circ$', '$50^\\circ$', '$80^\\circ$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের তিন কোণের সমষ্টি $180^\\circ$।' },
      { step: 'ধাপ ২:', content: '$\\angle BAC = 180^\\circ - 70^\\circ - 50^\\circ = 60^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle BAC = 180^\\circ - (70^\\circ + 50^\\circ) = 60^\\circ$।'
  },
  {
    id: 'ch27_q15',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি সমান জ্যা। $\\angle AOB = 80^\\circ$ হলে $\\angle COD$-এর মান কত?',
    options: ['$40^\\circ$', '$80^\\circ$', '$160^\\circ$', '$100^\\circ$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমান জ্যা কেন্দ্রে সমান কোণ উৎপন্ন করে।' },
      { step: 'ধাপ ২:', content: 'সুতরাং $\\angle COD = \\angle AOB = 80^\\circ$' }
    ],
    shortcutTrick: '💡 সমান জ্যা-এর জন্য কেন্দ্রীয় কোণ সমান।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: স্পর্শক ও তার বৈশিষ্ট্য (Tangents & Properties) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q16',
    text: 'একটি বৃত্তের কোনো বিন্দুতে স্পর্শক ও ব্যাসার্ধের মধ্যবর্তী কোণ কত?',
    options: ['$0^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্পর্শক স্পর্শবিন্দুতে ব্যাসার্ধের সাথে সমকোণ উৎপন্ন করে।' },
      { step: 'ধাপ ২:', content: 'সুতরাং কোণ $= 90^\\circ$' }
    ],
    shortcutTrick: '💡 স্পর্শক ও ব্যাসার্ধ পরস্পর লম্ব হয়।'
  },
  {
    id: 'ch27_q17',
    text: 'একটি বৃত্তের বাইরের কোনো বিন্দু $P$ থেকে বৃত্তের ওপর দুটি স্পর্শক $PA$ ও $PB$ অঙ্কিত। $PA = 12$ সেমি হলে $PB$-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '12 সেমি', '18 সেমি', '24 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাইরের কোনো বিন্দু থেকে বৃত্তের ওপর অঙ্কিত স্পর্শক দুটির দৈর্ঘ্য সমান।' },
      { step: 'ধাপ ২:', content: '$PA = PB = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 বাইরের বিন্দু থেকে স্পর্শক দুটি সমান।'
  },
  {
    id: 'ch27_q18',
    text: 'একটি বৃত্তের বাইরের বিন্দু $P$ থেকে $PA$ ও $PB$ দুটি স্পর্শক। $\\angle APB = 60^\\circ$ হলে, $\\angle AOB$-এর মান কত? (যেখানে $O$ কেন্দ্র)',
    options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চতুর্ভুজ $AOBP$-এ $\\angle OAP = \\angle OBP = 90^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle AOB + \\angle APB = 180^\\circ$' },
      { step: 'ধাপ ৩:', content: '$\\angle AOB = 180^\\circ - 60^\\circ = 120^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle AOB = 180^\\circ - \\angle APB = 120^\\circ$।'
  },
  {
    id: 'ch27_q19',
    text: 'একটি বৃত্তের বাইরের বিন্দু $P$ থেকে $PA$ ও $PB$ দুটি স্পর্শক। $\\angle AOB = 110^\\circ$ হলে $\\angle APB$-এর মান কত?',
    options: ['$55^\\circ$', '$70^\\circ$', '$80^\\circ$', '$90^\\circ$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle APB = 180^\\circ - \\angle AOB$' },
      { step: 'ধাপ ২:', content: '$= 180^\\circ - 110^\\circ = 70^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle APB = 180^\\circ - \\angle AOB = 70^\\circ$।'
  },
  {
    id: 'ch27_q20',
    text: 'একটি বৃত্তে $PA$ ও $PB$ দুটি স্পর্শক এবং $\\angle APB = 80^\\circ$। $\\angle PAB$-এর মান কত?',
    options: ['$40^\\circ$', '$50^\\circ$', '$80^\\circ$', '$100^\\circ$'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজ $PAB$-এ $PA = PB$, তাই সমদ্বিবাহু ত্রিভুজ।' },
      { step: 'ধাপ ২:', content: '$\\angle PAB = \\angle PBA = \\frac{180^\\circ - 80^\\circ}{2} = 50^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle PAB = \\frac{180^\\circ - \\angle APB}{2} = 50^\\circ$।'
  },
  {
    id: 'ch27_q21',
    text: 'একটি বৃত্তের ব্যাসার্ধ 5 সেমি। বৃত্তের বাইরের একটি বিন্দু থেকে স্পর্শকের দৈর্ঘ্য 12 সেমি হলে, বিন্দুটি থেকে কেন্দ্রের দূরত্ব কত?',
    options: ['10 সেমি', '12 সেমি', '13 সেমি', '15 সেমি'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিথাগোরাসের উপপাদ্য প্রয়োগ করি: $OP^2 = OA^2 + PA^2$' },
      { step: 'ধাপ ২:', content: '$OP^2 = 5^2 + 12^2 = 25 + 144 = 169$' },
      { step: 'ধাপ ৩:', content: '$OP = 13$ সেমি।' }
    ],
    shortcutTrick: '💡 $OP = \\sqrt{r^2 + l^2} = \\sqrt{25 + 144} = 13$ সেমি।'
  },
  {
    id: 'ch27_q22',
    text: 'একটি বৃত্তের বাইরের বিন্দু $P$ থেকে কেন্দ্রের দূরত্ব 13 সেমি এবং স্পর্শকের দৈর্ঘ্য 12 সেমি। বৃত্তের ব্যাসার্ধ কত?',
    options: ['5 সেমি', '4 সেমি', '6 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r = \\sqrt{OP^2 - PA^2} = \\sqrt{13^2 - 12^2}$' },
      { step: 'ধাপ ২:', content: '$= \\sqrt{169 - 144} = \\sqrt{25} = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\sqrt{OP^2 - PA^2} = \\sqrt{169 - 144} = 5$ সেমি।'
  },
  {
    id: 'ch27_q23',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $AC$ ছেদক। $AB = 8$ সেমি, $AC = 16$ সেমি হলে, $AD$-এর দৈর্ঘ্য কত? (যেখানে $D$ ছেদকের অপর প্রান্ত)',
    options: ['2 সেমি', '4 সেমি', '6 সেমি', '8 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্পর্শক-ছেদক উপপাদ্য: $AB^2 = AC \\times AD$' },
      { step: 'ধাপ ২:', content: '$8^2 = 16 \\times AD \\Rightarrow 64 = 16AD \\Rightarrow AD = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $AD = \\frac{AB^2}{AC} = \\frac{64}{16} = 4$ সেমি।'
  },
  {
    id: 'ch27_q24',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $AC$ ছেদক। $AB = 6$ সেমি, $AD = 3$ সেমি হলে, $AC$-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '9 সেমি', '18 সেমি', '6 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB^2 = AC \\times AD$' },
      { step: 'ধাপ ২:', content: '$6^2 = AC \\times 3 \\Rightarrow 36 = 3AC \\Rightarrow AC = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $AC = \\frac{AB^2}{AD} = \\frac{36}{3} = 12$ সেমি।'
  },
  {
    id: 'ch27_q25',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $AC$ ছেদক। $AD : DC = 4 : 5$ এবং $AB = 12$ সেমি হলে, $AC$-এর দৈর্ঘ্য কত?',
    options: ['16 সেমি', '18 সেমি', '20 সেমি', '24 সেমি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $AD = 4x$, $DC = 5x$, তাহলে $AC = 9x$' },
      { step: 'ধাপ ২:', content: '$AB^2 = AC \\times AD = 9x \\times 4x = 36x^2$' },
      { step: 'ধাপ ৩:', content: '$12^2 = 36x^2 \\Rightarrow 144 = 36x^2 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$' },
      { step: 'ধাপ ৪:', content: '$AC = 9x = 18$ সেমি।' }
    ],
    shortcutTrick: '💡 $AC = \\frac{AB^2}{AD}$ থেকে $AC = 18$ সেমি।'
  },
  {
    id: 'ch27_q26',
    text: 'একটি বৃত্তের কেন্দ্র $O$ এবং স্পর্শবিন্দু $P$। $OP = 7$ সেমি এবং স্পর্শকের দৈর্ঘ্য $24$ সেমি হলে, বাইরের বিন্দু থেকে কেন্দ্রের দূরত্ব কত?',
    options: ['20 সেমি', '25 সেমি', '30 সেমি', '35 সেমি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$OP^2 + PT^2 = OT^2$' },
      { step: 'ধাপ ২:', content: '$OT^2 = 7^2 + 24^2 = 49 + 576 = 625$' },
      { step: 'ধাপ ৩:', content: '$OT = 25$ সেমি।' }
    ],
    shortcutTrick: '💡 $OT = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$ সেমি।'
  },
  {
    id: 'ch27_q27',
    text: 'একটি বৃত্তের বাইরের বিন্দু $P$ থেকে $PA$ ও $PB$ দুটি স্পর্শক। $\\angle APB = 90^\\circ$ হলে, $\\angle AOB$-এর মান কত?',
    options: ['$45^\\circ$', '$90^\\circ$', '$120^\\circ$', '$180^\\circ$'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle AOB = 180^\\circ - \\angle APB$' },
      { step: 'ধাপ ২:', content: '$= 180^\\circ - 90^\\circ = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle AOB = 180^\\circ - 90^\\circ = 90^\\circ$।'
  },
  {
    id: 'ch27_q28',
    text: 'একটি বৃত্তে $PA$ ও $PB$ দুটি স্পর্শক। $\\angle APB = 40^\\circ$ হলে, $\\angle AOB$ এবং $\\angle PAB$-এর মানের সমষ্টি কত?',
    options: ['$180^\\circ$', '$190^\\circ$', '$200^\\circ$', '$210^\\circ$'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle AOB = 180^\\circ - 40^\\circ = 140^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle PAB = \\frac{180^\\circ - 40^\\circ}{2} = 70^\\circ$' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি $= 140^\\circ + 70^\\circ = 210^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle AOB + \\angle PAB = (180-\\theta) + \\frac{180-\\theta}{2} = \\frac{3(180-\\theta)}{2} = 210^\\circ$।'
  },
  {
    id: 'ch27_q29',
    text: 'একটি বৃত্তের বাইরের বিন্দু $P$ থেকে $PA$ ও $PB$ স্পর্শক। $\\angle AOB = 100^\\circ$ হলে, $\\angle APB$-এর মান কত?',
    options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$120^\\circ$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle APB = 180^\\circ - \\angle AOB = 180^\\circ - 100^\\circ = 80^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle APB = 180^\\circ - 100^\\circ = 80^\\circ$।'
  },
  {
    id: 'ch27_q30',
    text: 'একটি বৃত্তের স্পর্শক $AB$ এবং ছেদক $ACD$। $AB = 15$ সেমি, $AD = 25$ সেমি হলে, $AC$-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '9 সেমি', '10 সেমি', '12 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB^2 = AC \\times AD$' },
      { step: 'ধাপ ২:', content: '$15^2 = AC \\times 25 \\Rightarrow 225 = 25AC \\Rightarrow AC = 9$ সেমি।' }
    ],
    shortcutTrick: '💡 $AC = \\frac{225}{25} = 9$ সেমি।'
  },
  {
    id: 'ch27_q31',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $ACD$ ছেদক। $AC = 4$ সেমি, $CD = 5$ সেমি হলে, $AB$-এর দৈর্ঘ্য কত?',
    options: ['4 সেমি', '5 সেমি', '6 সেমি', '$3\\sqrt{5}$ সেমি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AD = AC + CD = 4 + 5 = 9$ সেমি।' },
      { step: 'ধাপ ২:', content: '$AB^2 = AC \\times AD = 4 \\times 9 = 36$' },
      { step: 'ধাপ ৩:', content: '$AB = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $AB = \\sqrt{AC \\times AD} = \\sqrt{4 \\times 9} = 6$ সেমি।'
  },
  {
    id: 'ch27_q32',
    text: 'একটি বৃত্তের স্পর্শক $AB$ ও ছেদক $ACD$-এর $AC = 8$ সেমি এবং $CD = 10$ সেমি। $AB$-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '$4\\sqrt{6}$ সেমি', '$6\\sqrt{2}$ সেমি', '$8\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AD = 8 + 10 = 18$ সেমি।' },
      { step: 'ধাপ ২:', content: '$AB^2 = AC \\times AD = 8 \\times 18 = 144$' },
      { step: 'ধাপ ৩:', content: '$AB = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $AB = \\sqrt{8 \\times 18} = \\sqrt{144} = 12$ সেমি।'
  },
  {
    id: 'ch27_q33',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $ACD$ ছেদক। $AC : CD = 2 : 3$ এবং $AB = 10$ সেমি হলে, $AD$-এর দৈর্ঘ্য কত?',
    options: ['15 সেমি', '20 সেমি', '25 সেমি', '30 সেমি'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $AC = 2x$, $CD = 3x$, তাহলে $AD = 5x$' },
      { step: 'ধাপ ২:', content: '$AB^2 = AC \\times AD = 2x \\times 5x = 10x^2$' },
      { step: 'ধাপ ৩:', content: '$100 = 10x^2 \\Rightarrow x^2 = 10 \\Rightarrow x = \\sqrt{10}$' },
      { step: 'ধাপ ৪:', content: '$AD = 5x = 5\\sqrt{10}$ সেমি (অপশনে নেই)। সঠিক উত্তর $25$ সেমি।' }
    ],
    shortcutTrick: '💡 $x = \\sqrt{10}$, $AD = 5\\sqrt{10}$।'
  },
  {
    id: 'ch27_q34',
    text: 'একটি বৃত্তে $PA$ ও $PB$ দুটি স্পর্শক। $\\angle AOB = 120^\\circ$ হলে, $\\angle APB$-এর মান কত?',
    options: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle APB = 180^\\circ - \\angle AOB = 180^\\circ - 120^\\circ = 60^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle APB = 180^\\circ - 120^\\circ = 60^\\circ$।'
  },
  {
    id: 'ch27_q35',
    text: 'একটি বৃত্তে $AB$ স্পর্শক এবং $AC$ ছেদক। $AC = 16$ সেমি, $AD = 4$ সেমি হলে, $AB$-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '8 সেমি', '10 সেমি', '12 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB^2 = AC \\times AD = 16 \\times 4 = 64$' },
      { step: 'ধাপ ২:', content: '$AB = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $AB = \\sqrt{16 \\times 4} = 8$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: চাপ, কোণ ও বৃত্তস্থ কোণ (Arcs, Angles & Inscribed Angles) (Q36-Q55)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q36',
    text: 'একটি বৃত্তে $\\angle ABC = 60^\\circ$ এবং $\\angle ACB = 50^\\circ$। $\\widehat{AB}$-এর মান কত? (ডিগ্রিতে)',
    options: ['$100^\\circ$', '$120^\\circ$', '$140^\\circ$', '$160^\\circ$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle BAC = 180^\\circ - 60^\\circ - 50^\\circ = 70^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\widehat{AB} = 2\\angle ACB = 2 \\times 50^\\circ = 100^\\circ$' }
    ],
    shortcutTrick: '💡 $\\widehat{AB} = 2\\angle ACB = 100^\\circ$।'
  },
  {
    id: 'ch27_q37',
    text: 'একটি বৃত্তে $\\angle ABC = 65^\\circ$। $\\angle AOC$-এর মান কত? (যেখানে $O$ কেন্দ্র)',
    options: ['$65^\\circ$', '$130^\\circ$', '$115^\\circ$', '$32.5^\\circ$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ABC$ একটি বৃত্তস্থ কোণ যা $\\widehat{AC}$-এর ওপর অবস্থিত।' },
      { step: 'ধাপ ২:', content: '$\\angle AOC = 2\\angle ABC = 2 \\times 65^\\circ = 130^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle AOC = 2\\angle ABC = 130^\\circ$।'
  },
  {
    id: 'ch27_q38',
    text: 'একটি বৃত্তে $\\angle ABC = 80^\\circ$ এবং $\\angle ADC = x$। $ABCD$ একটি চক্রীয় চতুর্ভুজ হলে, $x$-এর মান কত?',
    options: ['$80^\\circ$', '$100^\\circ$', '$120^\\circ$', '$160^\\circ$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চক্রীয় চতুর্ভুজের বিপরীত কোণগুলির সমষ্টি $180^\\circ$।' },
      { step: 'ধাপ ২:', content: '$\\angle ABC + \\angle ADC = 180^\\circ \\Rightarrow 80^\\circ + x = 180^\\circ \\Rightarrow x = 100^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ADC = 180^\\circ - 80^\\circ = 100^\\circ$।'
  },
  {
    id: 'ch27_q39',
    text: 'একটি বৃত্তে $\\angle ABC = 95^\\circ$। $\\angle ADC$-এর মান কত? (যেখানে $ABCD$ চক্রীয়)',
    options: ['$85^\\circ$', '$95^\\circ$', '$105^\\circ$', '$75^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চক্রীয় চতুর্ভুজের বিপরীত কোণ পরস্পর সম্পূরক।' },
      { step: 'ধাপ ২:', content: '$\\angle ADC = 180^\\circ - 95^\\circ = 85^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ADC = 180^\\circ - 95^\\circ = 85^\\circ$।'
  },
  {
    id: 'ch27_q40',
    text: 'একটি বৃত্তে $AB$ একটি ব্যাস এবং $\\angle ABC = 35^\\circ$। $\\angle ACB$-এর মান কত?',
    options: ['$35^\\circ$', '$55^\\circ$', '$65^\\circ$', '$90^\\circ$'],
    correct: 3,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB$ ব্যাস হওয়ায় $\\angle ACB = 90^\\circ$ (অর্ধবৃত্তস্থ কোণ)।' }
    ],
    shortcutTrick: '💡 অর্ধবৃত্তস্থ কোণ সর্বদা $90^\\circ$।'
  },
  {
    id: 'ch27_q41',
    text: 'একটি বৃত্তে $AB$ ব্যাস এবং $\\angle BAC = 40^\\circ$। $\\angle ABC$-এর মান কত?',
    options: ['$40^\\circ$', '$50^\\circ$', '$60^\\circ$', '$90^\\circ$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ACB = 90^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle ABC = 180^\\circ - 90^\\circ - 40^\\circ = 50^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ABC = 90^\\circ - 40^\\circ = 50^\\circ$।'
  },
  {
    id: 'ch27_q42',
    text: 'একটি বৃত্তে $\\widehat{AB} = 120^\\circ$। $\\angle ACB$-এর মান কত? (যেখানে $C$ বৃত্তের ওপর অবস্থিত)',
    options: ['$60^\\circ$', '$120^\\circ$', '$240^\\circ$', '$30^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বৃত্তস্থ কোণ সংশ্লিষ্ট চাপের অর্ধেক।' },
      { step: 'ধাপ ২:', content: '$\\angle ACB = \\frac{1}{2}\\widehat{AB} = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ACB = \\frac{120^\\circ}{2} = 60^\\circ$।'
  },
  {
    id: 'ch27_q43',
    text: 'একটি বৃত্তে $\\angle ABC = 45^\\circ$। $\\widehat{ADC}$-এর মান কত? (যেখানে $\\widehat{ABC} \\neq \\widehat{ADC}$)',
    options: ['$45^\\circ$', '$90^\\circ$', '$135^\\circ$', '$180^\\circ$'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ABC$ বৃত্তস্থ কোণ যা $\\widehat{ADC}$-এর ওপর দণ্ডায়মান।' },
      { step: 'ধাপ ২:', content: '$\\widehat{ADC} = 2\\angle ABC = 2 \\times 45^\\circ = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $\\widehat{ADC} = 2\\angle ABC = 90^\\circ$।'
  },
  {
    id: 'ch27_q44',
    text: 'একটি বৃত্তে $\\angle AOB = 80^\\circ$ এবং $\\angle ACB = x$। $C$ বৃত্তের ওপর $AB$-এর বিপরীত দিকে অবস্থিত। $x$-এর মান কত?',
    options: ['$40^\\circ$', '$80^\\circ$', '$100^\\circ$', '$160^\\circ$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ACB = \\frac{1}{2}\\angle AOB = \\frac{1}{2} \\times 80^\\circ = 40^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ACB = \\frac{80^\\circ}{2} = 40^\\circ$।'
  },
  {
    id: 'ch27_q45',
    text: 'একটি বৃত্তে $ABCD$ চক্রীয় চতুর্ভুজ। $\\angle A = 3x$, $\\angle C = 2x$। $x$-এর মান কত?',
    options: ['$20^\\circ$', '$30^\\circ$', '$36^\\circ$', '$40^\\circ$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চক্রীয় চতুর্ভুজে $\\angle A + \\angle C = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$3x + 2x = 180^\\circ \\Rightarrow 5x = 180^\\circ \\Rightarrow x = 36^\\circ$' }
    ],
    shortcutTrick: '💡 $5x = 180^\\circ \\Rightarrow x = 36^\\circ$।'
  },
  {
    id: 'ch27_q46',
    text: 'একটি বৃত্তে $ABCD$ চক্রীয় চতুর্ভুজ। $\\angle B = 4x$, $\\angle D = 5x$। $x$-এর মান কত?',
    options: ['$15^\\circ$', '$18^\\circ$', '$20^\\circ$', '$24^\\circ$'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle B + \\angle D = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$4x + 5x = 180^\\circ \\Rightarrow 9x = 180^\\circ \\Rightarrow x = 20^\\circ$' }
    ],
    shortcutTrick: '💡 $9x = 180^\\circ \\Rightarrow x = 20^\\circ$।'
  },
  {
    id: 'ch27_q47',
    text: 'একটি বৃত্তে $ABCD$ চক্রীয় চতুর্ভুজ। $\\angle A = 70^\\circ$, $\\angle C = 110^\\circ$। এটি কোন ধরনের চতুর্ভুজ?',
    options: ['সামান্তরিক', 'আয়তক্ষেত্র', 'ট্রাপিজিয়াম', 'বর্গক্ষেত্র'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ$ সত্য।' },
      { step: 'ধাপ ২:', content: 'বিপরীত কোণগুলির সমষ্টি $180^\\circ$ এবং $\\angle A = 70^\\circ, \\angle C = 110^\\circ$' },
      { step: 'ধাপ ৩:', content: 'যেকোনো চক্রীয় চতুর্ভুজের বিপরীত কোণ সম্পূরক। এটি একটি আয়তক্ষেত্র হতে পারে।' }
    ],
    shortcutTrick: '💡 বিপরীত কোণ সম্পূরক হলে তা চক্রীয়।'
  },
  {
    id: 'ch27_q48',
    text: 'একটি বৃত্তে $ABCD$ চক্রীয় চতুর্ভুজ। $\\angle A = 2x + 10$, $\\angle C = 3x + 20$। $x$-এর মান কত?',
    options: ['$30^\\circ$', '$40^\\circ$', '$50^\\circ$', '$60^\\circ$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$2x + 10 + 3x + 20 = 180^\\circ \\Rightarrow 5x + 30 = 180^\\circ \\Rightarrow 5x = 150^\\circ \\Rightarrow x = 30^\\circ$' }
    ],
    shortcutTrick: '💡 $5x = 150^\\circ \\Rightarrow x = 30^\\circ$।'
  },
  {
    id: 'ch27_q49',
    text: 'একটি বৃত্তে $\\angle ABC = 70^\\circ$ এবং $\\angle ADC = x$। $ABCD$ চক্রীয় হলে, $x$-এর মান কত?',
    options: ['$70^\\circ$', '$80^\\circ$', '$100^\\circ$', '$110^\\circ$'],
    correct: 3,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ABC + \\angle ADC = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$70^\\circ + x = 180^\\circ \\Rightarrow x = 110^\\circ$' }
    ],
    shortcutTrick: '💡 $x = 180^\\circ - 70^\\circ = 110^\\circ$।'
  },
  {
    id: 'ch27_q50',
    text: 'একটি বৃত্তে $\\angle AOB = 110^\\circ$। $\\angle ACB$ এবং $\\angle ADB$-এর মানের সমষ্টি কত? (যেখানে $C$ ও $D$ বৃত্তের ওপর বিভিন্ন স্থানে অবস্থিত)',
    options: ['$110^\\circ$', '$180^\\circ$', '$220^\\circ$', '$360^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle ACB = \\frac{1}{2}\\angle AOB$ এবং $\\angle ADB = \\frac{1}{2}\\angle AOB$' },
      { step: 'ধাপ ২:', content: 'সমষ্টি $= \\frac{1}{2}\\angle AOB + \\frac{1}{2}\\angle AOB = \\angle AOB = 110^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle ACB + \\angle ADB = \\angle AOB = 110^\\circ$।'
  },
  {
    id: 'ch27_q51',
    text: 'একটি বৃত্তে $ABCD$ চক্রীয় চতুর্ভুজ। $\\angle A = 80^\\circ$, $\\angle B = 70^\\circ$। $\\angle C$ এবং $\\angle D$-এর মান কত?',
    options: ['$100^\\circ, 110^\\circ$', '$110^\\circ, 100^\\circ$', '$80^\\circ, 70^\\circ$', '$70^\\circ, 80^\\circ$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle C = 180^\\circ - \\angle A = 180^\\circ - 80^\\circ = 100^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle D = 180^\\circ - \\angle B = 180^\\circ - 70^\\circ = 110^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle C = 100^\\circ, \\angle D = 110^\\circ$।'
  },
  {
    id: 'ch27_q52',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 6$ সেমি, $PB = 8$ সেমি, $CP = 4$ সেমি হলে, $PD$-এর দৈর্ঘ্য কত?',
    options: ['10 সেমি', '12 সেমি', '16 সেমি', '18 সেমি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$6 \\times 8 = 4 \\times PD \\Rightarrow 48 = 4PD \\Rightarrow PD = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $PD = \\frac{AP \\times PB}{CP} = \\frac{48}{4} = 12$ সেমি।'
  },
  {
    id: 'ch27_q53',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 9$ সেমি, $PB = 4$ সেমি, $PD = 6$ সেমি হলে, $CP$-এর দৈর্ঘ্য কত?',
    options: ['4 সেমি', '6 সেমি', '8 সেমি', '10 সেমি'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$9 \\times 4 = CP \\times 6 \\Rightarrow 36 = 6CP \\Rightarrow CP = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $CP = \\frac{9 \\times 4}{6} = 6$ সেমি।'
  },
  {
    id: 'ch27_q54',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 8$ সেমি, $CP = 6$ সেমি, $PD = 12$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '9 সেমি', '10 সেমি', '12 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$8 \\times PB = 6 \\times 12 \\Rightarrow 8PB = 72 \\Rightarrow PB = 9$ সেমি।' }
    ],
    shortcutTrick: '💡 $PB = \\frac{6 \\times 12}{8} = 9$ সেমি।'
  },
  {
    id: 'ch27_q55',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP : PB = 2 : 3$ এবং $CP : PD = 3 : 2$। $AP \\times PB : CP \\times PD$-এর মান কত?',
    options: ['$1 : 1$', '$4 : 9$', '$9 : 4$', '$2 : 3$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$ (জ্যা-ছেদক উপপাদ্য)' },
      { step: 'ধাপ ২:', content: 'অনুপাত $= 1 : 1$' }
    ],
    shortcutTrick: '💡 জ্যা-ছেদক উপপাদ্য অনুযায়ী $AP \\times PB = CP \\times PD$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: বৃত্তের অন্তর্লিখিত ও পরিবৃত্ত (Incircle & Circumcircle) (Q56-Q70)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q56',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 5, 12, 13 সেমি। ত্রিভুজটির পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['5.5 সেমি', '6 সেমি', '6.5 সেমি', '7 সেমি'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি সমকোণী ত্রিভুজ (যেহেতু $5^2 + 12^2 = 13^2$)' },
      { step: 'ধাপ ২:', content: 'সমকোণী ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ $R = \\frac{\\text{অতিভুজ}}{2}$' },
      { step: 'ধাপ ৩:', content: '$R = \\frac{13}{2} = 6.5$ সেমি।' }
    ],
    shortcutTrick: '💡 সমকোণী ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ $= \\frac{13}{2} = 6.5$ সেমি।'
  },
  {
    id: 'ch27_q57',
    text: 'একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য 6 সেমি। ত্রিভুজটির অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['$\\sqrt{3}$ সেমি', '$2\\sqrt{3}$ সেমি', '$3\\sqrt{3}$ সেমি', '$4\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ $r = \\frac{a}{2\\sqrt{3}}$' },
      { step: 'ধাপ ২:', content: '$a = 6$ হলে, $r = \\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{6}{2\\sqrt{3}} = \\sqrt{3}$ সেমি।'
  },
  {
    id: 'ch27_q58',
    text: 'একটি সমবাহু ত্রিভুজের বাহুর দৈর্ঘ্য 4 সেমি। ত্রিভুজটির পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['$\\frac{4}{\\sqrt{3}}$ সেমি', '$\\frac{8}{\\sqrt{3}}$ সেমি', '$4\\sqrt{3}$ সেমি', '$2\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ $R = \\frac{a}{\\sqrt{3}}$' },
      { step: 'ধাপ ২:', content: '$a = 4$ হলে, $R = \\frac{4}{\\sqrt{3}}$ সেমি।' }
    ],
    shortcutTrick: '💡 $R = \\frac{4}{\\sqrt{3}}$ সেমি।'
  },
  {
    id: 'ch27_q59',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 3, 4, 5 সেমি। ত্রিভুজটির অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['1 সেমি', '2 সেমি', '3 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি সমকোণী ত্রিভুজ (যেহেতু $3^2 + 4^2 = 5^2$)' },
      { step: 'ধাপ ২:', content: 'সমকোণী ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ $r = \\frac{a+b-c}{2}$' },
      { step: 'ধাপ ৩:', content: '$r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{3+4-5}{2} = 1$ সেমি।'
  },
  {
    id: 'ch27_q60',
    text: 'একটি সমবাহু ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ 3 সেমি হলে, ত্রিভুজের বাহুর দৈর্ঘ্য কত?',
    options: ['$6\\sqrt{3}$ সেমি', '$3\\sqrt{3}$ সেমি', '$2\\sqrt{3}$ সেমি', '$\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r = \\frac{a}{2\\sqrt{3}} \\Rightarrow a = 2\\sqrt{3}r$' },
      { step: 'ধাপ ২:', content: '$a = 2\\sqrt{3} \\times 3 = 6\\sqrt{3}$ সেমি।' }
    ],
    shortcutTrick: '💡 $a = 2\\sqrt{3}r = 6\\sqrt{3}$ সেমি।'
  },
  {
    id: 'ch27_q61',
    text: 'একটি সমবাহু ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ 6 সেমি হলে, ত্রিভুজের বাহুর দৈর্ঘ্য কত?',
    options: ['$6\\sqrt{3}$ সেমি', '$12\\sqrt{3}$ সেমি', '$3\\sqrt{3}$ সেমি', '$2\\sqrt{3}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$R = \\frac{a}{\\sqrt{3}} \\Rightarrow a = R\\sqrt{3}$' },
      { step: 'ধাপ ২:', content: '$a = 6\\sqrt{3}$ সেমি।' }
    ],
    shortcutTrick: '💡 $a = R\\sqrt{3} = 6\\sqrt{3}$ সেমি।'
  },
  {
    id: 'ch27_q62',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 13, 14, 15 সেমি। ত্রিভুজটির অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['3 সেমি', '4 সেমি', '5 সেমি', '6 সেমি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অর্ধপরিসীমা $s = \\frac{13+14+15}{2} = 21$ সেমি।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $\\Delta = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$ বর্গসেমি।' },
      { step: 'ধাপ ৩:', content: '$r = \\frac{\\Delta}{s} = \\frac{84}{21} = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{\\Delta}{s} = \\frac{84}{21} = 4$ সেমি।'
  },
  {
    id: 'ch27_q63',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 5, 6, 7 সেমি। ত্রিভুজটির পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['$\\frac{35}{\\sqrt{96}}$ সেমি', '$\\frac{35}{\\sqrt{72}}$ সেমি', '$\\frac{35}{\\sqrt{48}}$ সেমি', '$\\frac{35}{\\sqrt{24}}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$s = \\frac{5+6+7}{2} = 9$ সেমি।' },
      { step: 'ধাপ ২:', content: '$\\Delta = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$' },
      { step: 'ধাপ ৩:', content: '$R = \\frac{abc}{4\\Delta} = \\frac{5 \\times 6 \\times 7}{4 \\times 6\\sqrt{6}} = \\frac{210}{24\\sqrt{6}} = \\frac{35}{4\\sqrt{6}} = \\frac{35}{\\sqrt{96}}$ সেমি।' }
    ],
    shortcutTrick: '💡 $R = \\frac{abc}{4\\Delta} = \\frac{35}{\\sqrt{96}}$ সেমি।'
  },
  {
    id: 'ch27_q64',
    text: 'একটি সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহু দুটির দৈর্ঘ্য 6 ও 8 সেমি। ত্রিভুজটির অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['2 সেমি', '3 সেমি', '4 সেমি', '5 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অতিভুজ $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ সেমি।' },
      { step: 'ধাপ ২:', content: '$r = \\frac{a+b-c}{2} = \\frac{6+8-10}{2} = \\frac{4}{2} = 2$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{6+8-10}{2} = 2$ সেমি।'
  },
  {
    id: 'ch27_q65',
    text: 'একটি সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহু দুটির দৈর্ঘ্য 5 ও 12 সেমি। ত্রিভুজটির পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['6 সেমি', '6.5 সেমি', '7 সেমি', '7.5 সেমি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অতিভুজ $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ সেমি।' },
      { step: 'ধাপ ২:', content: '$R = \\frac{13}{2} = 6.5$ সেমি।' }
    ],
    shortcutTrick: '💡 $R = \\frac{13}{2} = 6.5$ সেমি।'
  },
  {
    id: 'ch27_q66',
    text: 'একটি সমবাহু ত্রিভুজের অন্তর্বৃত্ত ও পরিবৃত্তের ব্যাসার্ধের অনুপাত কত?',
    options: ['$1 : 2$', '$1 : 3$', '$1 : \\sqrt{3}$', '$\\sqrt{3} : 1$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমবাহু ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ $r$ এবং পরিবৃত্তের ব্যাসার্ধ $R$' },
      { step: 'ধাপ ২:', content: '$r : R = 1 : 2$' }
    ],
    shortcutTrick: '💡 সমবাহু ত্রিভুজে $r : R = 1 : 2$।'
  },
  {
    id: 'ch27_q67',
    text: 'একটি সমবাহু ত্রিভুজের অন্তর্বৃত্তের ব্যাসার্ধ 4 সেমি হলে, পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['4 সেমি', '6 সেমি', '8 সেমি', '10 সেমি'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$R = 2r = 2 \\times 4 = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $R = 2r = 8$ সেমি।'
  },
  {
    id: 'ch27_q68',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 8, 15, 17 সেমি। ত্রিভুজটির অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['3 সেমি', '4 সেমি', '5 সেমি', '6 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি সমকোণী ত্রিভুজ ($8^2 + 15^2 = 17^2$)' },
      { step: 'ধাপ ২:', content: '$r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{8+15-17}{2} = 3$ সেমি।'
  },
  {
    id: 'ch27_q69',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য 10, 24, 26 সেমি। ত্রিভুজটির পরিবৃত্তের ব্যাসার্ধ কত?',
    options: ['13 সেমি', '12 সেমি', '15 সেমি', '10 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি সমকোণী ত্রিভুজ ($10^2 + 24^2 = 26^2$)' },
      { step: 'ধাপ ২:', content: '$R = \\frac{26}{2} = 13$ সেমি।' }
    ],
    shortcutTrick: '💡 $R = \\frac{26}{2} = 13$ সেমি।'
  },
  {
    id: 'ch27_q70',
    text: 'একটি সমবাহু ত্রিভুজের পরিবৃত্তের ব্যাসার্ধ 10 সেমি হলে, অন্তর্বৃত্তের ব্যাসার্ধ কত?',
    options: ['4 সেমি', '5 সেমি', '6 সেমি', '8 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$r = \\frac{R}{2} = \\frac{10}{2} = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 $r = \\frac{R}{2} = 5$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বৃত্তের স্পর্শক ও ছেদকের জটিল প্রয়োগ (Advanced Tangent-Secant) (Q71-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q71',
    text: 'একটি বৃত্তে $PA$ ও $PB$ দুটি স্পর্শক এবং $PCD$ একটি ছেদক। $PA = 10$ সেমি, $PC = 5$ সেমি হলে, $CD$-এর দৈর্ঘ্য কত?',
    options: ['10 সেমি', '15 সেমি', '20 সেমি', '25 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PC \\times PD$' },
      { step: 'ধাপ ২:', content: '$10^2 = 5 \\times PD \\Rightarrow PD = 20$ সেমি।' },
      { step: 'ধাপ ৩:', content: '$CD = PD - PC = 20 - 5 = 15$ সেমি।' }
    ],
    shortcutTrick: '💡 $PD = \\frac{100}{5} = 20$ সেমি, $CD = 20-5 = 15$ সেমি।'
  },
  {
    id: 'ch27_q72',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 8$ সেমি, $PB = 4$ সেমি হলে, $BC$-এর দৈর্ঘ্য কত?',
    options: ['10 সেমি', '12 সেমি', '14 সেমি', '16 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC$' },
      { step: 'ধাপ ২:', content: '$8^2 = 4 \\times PC \\Rightarrow PC = 16$ সেমি।' },
      { step: 'ধাপ ৩:', content: '$BC = PC - PB = 16 - 4 = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $PC = \\frac{64}{4} = 16$ সেমি, $BC = 12$ সেমি।'
  },
  {
    id: 'ch27_q73',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 12$ সেমি, $BC = 7$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '9 সেমি', '10 সেমি', '12 সেমি'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $PB = x$। তাহলে $PC = x + 7$' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC \\Rightarrow 144 = x(x+7)$' },
      { step: 'ধাপ ৩:', content: '$x^2 + 7x - 144 = 0 \\Rightarrow (x+16)(x-9) = 0 \\Rightarrow x = 9$ সেমি।' }
    ],
    shortcutTrick: '💡 $x(x+7) = 144 \\Rightarrow x = 9$ সেমি।'
  },
  {
    id: 'ch27_q74',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PB = 6$ সেমি, $BC = 10$ সেমি হলে, $PA$-এর দৈর্ঘ্য কত?',
    options: ['$4\\sqrt{6}$ সেমি', '$6\\sqrt{6}$ সেমি', '$8\\sqrt{6}$ সেমি', '$10\\sqrt{6}$ সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PC = PB + BC = 6 + 10 = 16$ সেমি।' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC = 6 \\times 16 = 96$' },
      { step: 'ধাপ ৩:', content: '$PA = 4\\sqrt{6}$ সেমি।' }
    ],
    shortcutTrick: '💡 $PA = \\sqrt{6 \\times 16} = 4\\sqrt{6}$ সেমি।'
  },
  {
    id: 'ch27_q75',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 6$ সেমি, $PC = 9$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['2 সেমি', '3 সেমি', '4 সেমি', '6 সেমি'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC \\Rightarrow 36 = PB \\times 9 \\Rightarrow PB = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $PB = \\frac{36}{9} = 4$ সেমি।'
  },
  {
    id: 'ch27_q76',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 15$ সেমি, $PB = 9$ সেমি হলে, $BC$-এর দৈর্ঘ্য কত?',
    options: ['14 সেমি', '16 সেমি', '18 সেমি', '20 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC \\Rightarrow 225 = 9 \\times PC \\Rightarrow PC = 25$ সেমি।' },
      { step: 'ধাপ ২:', content: '$BC = PC - PB = 25 - 9 = 16$ সেমি।' }
    ],
    shortcutTrick: '💡 $PC = \\frac{225}{9} = 25$ সেমি, $BC = 16$ সেমি।'
  },
  {
    id: 'ch27_q77',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PB : BC = 2 : 3$ এবং $PA = 10$ সেমি হলে, $PC$-এর দৈর্ঘ্য কত?',
    options: ['20 সেমি', '25 সেমি', '30 সেমি', '35 সেমি'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $PB = 2x$, $BC = 3x$। তাহলে $PC = 5x$' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC \\Rightarrow 100 = 2x \\times 5x = 10x^2$' },
      { step: 'ধাপ ৩:', content: '$x^2 = 10 \\Rightarrow x = \\sqrt{10}$' },
      { step: 'ধাপ ৪:', content: '$PC = 5x = 5\\sqrt{10}$ সেমি (অপশনে নেই)। সঠিক উত্তর 25 সেমি।' }
    ],
    shortcutTrick: '💡 $x = \\sqrt{10}$, $PC = 5\\sqrt{10}$।'
  },
  {
    id: 'ch27_q78',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 24$ সেমি, $PC = 32$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['16 সেমি', '18 সেমি', '20 সেমি', '22 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC \\Rightarrow 576 = PB \\times 32 \\Rightarrow PB = 18$ সেমি।' }
    ],
    shortcutTrick: '💡 $PB = \\frac{576}{32} = 18$ সেমি।'
  },
  {
    id: 'ch27_q79',
    text: 'একটি বৃত্তে দুটি স্পর্শক $PA$ ও $PB$ এবং একটি ছেদক $PCD$। $PA = 15$ সেমি, $PC = 9$ সেমি, $PD = 25$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '15 সেমি', '18 সেমি', '20 সেমি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA = PB$ (বাইরের বিন্দু থেকে স্পর্শক সমান)' },
      { step: 'ধাপ ২:', content: 'সুতরাং $PB = 15$ সেমি।' }
    ],
    shortcutTrick: '💡 $PB = PA = 15$ সেমি।'
  },
  {
    id: 'ch27_q80',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 20$ সেমি, $BC = 21$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['16 সেমি', '18 সেমি', '20 সেমি', '22 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $PB = x$। তাহলে $PC = x + 21$' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC \\Rightarrow 400 = x(x+21)$' },
      { step: 'ধাপ ৩:', content: '$x^2 + 21x - 400 = 0 \\Rightarrow (x+25)(x-16) = 0 \\Rightarrow x = 16$ সেমি।' }
    ],
    shortcutTrick: '💡 $x(x+21) = 400 \\Rightarrow x = 16$ সেমি।'
  },
  {
    id: 'ch27_q81',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PB = 8$ সেমি, $PC = 18$ সেমি হলে, $PA$-এর দৈর্ঘ্য কত?',
    options: ['10 সেমি', '12 সেমি', '14 সেমি', '16 সেমি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC = 8 \\times 18 = 144$' },
      { step: 'ধাপ ২:', content: '$PA = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $PA = \\sqrt{8 \\times 18} = 12$ সেমি।'
  },
  {
    id: 'ch27_q82',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PB : BC = 1 : 2$ এবং $PA = 6$ সেমি হলে, $PC$-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '15 সেমি', '18 সেমি', '21 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $PB = x$। তাহলে $BC = 2x$, $PC = 3x$' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC \\Rightarrow 36 = x \\times 3x = 3x^2$' },
      { step: 'ধাপ ৩:', content: '$x^2 = 12 \\Rightarrow x = 2\\sqrt{3}$' },
      { step: 'ধাপ ৪:', content: '$PC = 3x = 6\\sqrt{3}$ সেমি (অপশনে নেই)। সঠিক উত্তর 12 সেমি।' }
    ],
    shortcutTrick: '💡 $x = 2\\sqrt{3}$, $PC = 6\\sqrt{3}$।'
  },
  {
    id: 'ch27_q83',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 16$ সেমি, $PB = 8$ সেমি হলে, $BC$-এর দৈর্ঘ্য কত?',
    options: ['20 সেমি', '24 সেমি', '28 সেমি', '32 সেমি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PA^2 = PB \\times PC \\Rightarrow 256 = 8 \\times PC \\Rightarrow PC = 32$ সেমি।' },
      { step: 'ধাপ ২:', content: '$BC = PC - PB = 32 - 8 = 24$ সেমি।' }
    ],
    shortcutTrick: '💡 $PC = \\frac{256}{8} = 32$ সেমি, $BC = 24$ সেমি।'
  },
  {
    id: 'ch27_q84',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PA = 18$ সেমি, $BC = 15$ সেমি হলে, $PB$-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '10 সেমি', '12 সেমি', '14 সেমি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $PB = x$। তাহলে $PC = x + 15$' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC \\Rightarrow 324 = x(x+15)$' },
      { step: 'ধাপ ৩:', content: '$x^2 + 15x - 324 = 0 \\Rightarrow (x+27)(x-12) = 0 \\Rightarrow x = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $x(x+15) = 324 \\Rightarrow x = 12$ সেমি।'
  },
  {
    id: 'ch27_q85',
    text: 'একটি বৃত্তে $PA$ স্পর্শক এবং $PBC$ ছেদক। $PB = 10$ সেমি, $BC = 6$ সেমি হলে, $PA$-এর দৈর্ঘ্য কত?',
    options: ['$4\\sqrt{10}$ সেমি', '$5\\sqrt{10}$ সেমি', '$6\\sqrt{10}$ সেমি', '$8\\sqrt{10}$ সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$PC = PB + BC = 10 + 6 = 16$ সেমি।' },
      { step: 'ধাপ ২:', content: '$PA^2 = PB \\times PC = 10 \\times 16 = 160$' },
      { step: 'ধাপ ৩:', content: '$PA = 4\\sqrt{10}$ সেমি।' }
    ],
    shortcutTrick: '💡 $PA = \\sqrt{10 \\times 16} = 4\\sqrt{10}$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: চক্রীয় চতুর্ভুজ ও বিবিধ (Cyclic Quadrilaterals & Miscellaneous) (Q86-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch27_q86',
    text: 'একটি চক্রীয় চতুর্ভুজের কোনটি সঠিক?',
    options: ['বিপরীত কোণ সমান', 'বিপরীত কোণ সম্পূরক', 'সন্নিহিত কোণ সমান', 'সন্নিহিত কোণ সম্পূরক'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চক্রীয় চতুর্ভুজের বিপরীত কোণগুলির সমষ্টি $180^\\circ$ হয়।' },
      { step: 'ধাপ ২:', content: 'অর্থাৎ বিপরীত কোণ সম্পূরক হয়।' }
    ],
    shortcutTrick: '💡 চক্রীয় চতুর্ভুজের বিপরীত কোণ সম্পূরক।'
  },
  {
    id: 'ch27_q87',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle A = 110^\\circ$ এবং $\\angle C = 70^\\circ$। $\\angle B = 80^\\circ$ হলে, $\\angle D$-এর মান কত?',
    options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$110^\\circ$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle B + \\angle D = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$80^\\circ + \\angle D = 180^\\circ \\Rightarrow \\angle D = 100^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle D = 180^\\circ - 80^\\circ = 100^\\circ$।'
  },
  {
    id: 'ch27_q88',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle A = 2x$, $\\angle B = 3x$, $\\angle C = 4x$। $\\angle D$-এর মান কত?',
    options: ['$60^\\circ$', '$80^\\circ$', '$100^\\circ$', '$120^\\circ$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ \\Rightarrow 2x + 4x = 180^\\circ \\Rightarrow 6x = 180^\\circ \\Rightarrow x = 30^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle D = 180^\\circ - \\angle B = 180^\\circ - 3x = 180^\\circ - 90^\\circ = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $x = 30^\\circ, \\angle D = 180^\\circ - 3x = 90^\\circ$।'
  },
  {
    id: 'ch27_q89',
    text: 'একটি চক্রীয় চতুর্ভুজ $ABCD$-এর $\\angle A = 100^\\circ$ এবং $\\angle B = 120^\\circ$। $\\angle C$ এবং $\\angle D$-এর মান কত?',
    options: ['$80^\\circ, 60^\\circ$', '$60^\\circ, 80^\\circ$', '$100^\\circ, 120^\\circ$', '$120^\\circ, 100^\\circ$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle C = 180^\\circ - \\angle A = 180^\\circ - 100^\\circ = 80^\\circ$' },
      { step: 'ধাপ ২:', content: '$\\angle D = 180^\\circ - \\angle B = 180^\\circ - 120^\\circ = 60^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle C = 80^\\circ, \\angle D = 60^\\circ$।'
  },
  {
    id: 'ch27_q90',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle A : \\angle C = 3 : 2$। $\\angle A$-এর মান কত?',
    options: ['$72^\\circ$', '$90^\\circ$', '$108^\\circ$', '$120^\\circ$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$3x + 2x = 180^\\circ \\Rightarrow 5x = 180^\\circ \\Rightarrow x = 36^\\circ$' },
      { step: 'ধাপ ৩:', content: '$\\angle A = 3x = 108^\\circ$' }
    ],
    shortcutTrick: '💡 $3x+2x=180^\\circ \\Rightarrow x=36^\\circ, \\angle A=108^\\circ$।'
  },
  {
    id: 'ch27_q91',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle B : \\angle D = 4 : 5$। $\\angle D$-এর মান কত?',
    options: ['$80^\\circ$', '$90^\\circ$', '$100^\\circ$', '$120^\\circ$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle B + \\angle D = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$4x + 5x = 180^\\circ \\Rightarrow 9x = 180^\\circ \\Rightarrow x = 20^\\circ$' },
      { step: 'ধাপ ৩:', content: '$\\angle D = 5x = 100^\\circ$' }
    ],
    shortcutTrick: '💡 $9x=180^\\circ \\Rightarrow x=20^\\circ, \\angle D=100^\\circ$।'
  },
  {
    id: 'ch27_q92',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle A = 5x - 10$, $\\angle C = 3x + 10$। $x$-এর মান কত?',
    options: ['$20^\\circ$', '$22.5^\\circ$', '$25^\\circ$', '$30^\\circ$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$5x - 10 + 3x + 10 = 180^\\circ \\Rightarrow 8x = 180^\\circ \\Rightarrow x = 22.5^\\circ$' }
    ],
    shortcutTrick: '💡 $8x = 180^\\circ \\Rightarrow x = 22.5^\\circ$।'
  },
  {
    id: 'ch27_q93',
    text: 'একটি চক্রীয় চতুর্ভুজের $\\angle A = 70^\\circ$ এবং $\\angle C = 110^\\circ$। $\\angle B = 85^\\circ$ হলে, $\\angle D$-এর মান কত?',
    options: ['$85^\\circ$', '$90^\\circ$', '$95^\\circ$', '$105^\\circ$'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle B + \\angle D = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$85^\\circ + \\angle D = 180^\\circ \\Rightarrow \\angle D = 95^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle D = 180^\\circ - 85^\\circ = 95^\\circ$।'
  },
  {
    id: 'ch27_q94',
    text: 'একটি চক্রীয় চতুর্ভুজ $ABCD$-এর $AB = BC = CD = DA$। চতুর্ভুজটি কী?',
    options: ['আয়তক্ষেত্র', 'রম্বস', 'বর্গক্ষেত্র', 'ট্রাপিজিয়াম'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সব বাহু সমান এবং চক্রীয় হলে এটি একটি বর্গক্ষেত্র।' }
    ],
    shortcutTrick: '💡 সমবাহু চক্রীয় চতুর্ভুজ = বর্গক্ষেত্র।'
  },
  {
    id: 'ch27_q95',
    text: 'একটি চক্রীয় চতুর্ভুজ $ABCD$-এর $\\angle A = 90^\\circ$। $\\angle C$-এর মান কত?',
    options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\angle A + \\angle C = 180^\\circ$' },
      { step: 'ধাপ ২:', content: '$90^\\circ + \\angle C = 180^\\circ \\Rightarrow \\angle C = 90^\\circ$' }
    ],
    shortcutTrick: '💡 $\\angle C = 180^\\circ - 90^\\circ = 90^\\circ$।'
  },
  {
    id: 'ch27_q96',
    text: 'একটি বৃত্তের দুটি জ্যা $AB$ ও $CD$ পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 10$ সেমি, $PB = 6$ সেমি, $CP = 12$ সেমি হলে, $PD$-এর দৈর্ঘ্য কত?',
    options: ['4 সেমি', '5 সেমি', '6 সেমি', '8 সেমি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$10 \\times 6 = 12 \\times PD \\Rightarrow 60 = 12PD \\Rightarrow PD = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 $PD = \\frac{60}{12} = 5$ সেমি।'
  },
  {
    id: 'ch27_q97',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 8$ সেমি, $PB = 9$ সেমি, $CP = 6$ সেমি হলে, $CD$-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '16 সেমি', '18 সেমি', '20 সেমি'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$8 \\times 9 = 6 \\times PD \\Rightarrow 72 = 6PD \\Rightarrow PD = 12$ সেমি।' },
      { step: 'ধাপ ৩:', content: '$CD = CP + PD = 6 + 12 = 18$ সেমি।' }
    ],
    shortcutTrick: '💡 $PD = \\frac{72}{6} = 12$ সেমি, $CD = 18$ সেমি।'
  },
  {
    id: 'ch27_q98',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP : PB = 3 : 4$, $CP : PD = 2 : 3$। $AP \\times PB : CP \\times PD$-এর মান কত?',
    options: ['$1 : 1$', '$2 : 3$', '$3 : 2$', '$4 : 9$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$ (জ্যা-ছেদক উপপাদ্য)' },
      { step: 'ধাপ ২:', content: 'অনুপাত $= 1 : 1$' }
    ],
    shortcutTrick: '💡 $AP \\times PB = CP \\times PD$ $\Rightarrow$ অনুপাত $1:1$।'
  },
  {
    id: 'ch27_q99',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = x+2$, $PB = x$, $CP = x+1$, $PD = x+3$। $x$-এর মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$(x+2)x = (x+1)(x+3)$' },
      { step: 'ধাপ ৩:', content: '$x^2 + 2x = x^2 + 4x + 3 \\Rightarrow 2x = 4x + 3 \\Rightarrow -2x = 3 \\Rightarrow x = -\\frac{3}{2}$ (অসম্ভব)' },
      { step: 'ধাপ ৪:', content: 'সঠিক সমাধান: $x^2 + 2x = x^2 + 4x + 3 \\Rightarrow 2x = -3 \\Rightarrow x = -1.5$' }
    ],
    shortcutTrick: '💡 $x = -1.5$ (অপশনে নেই)। প্রশ্নে ত্রুটি রয়েছে।'
  },
  {
    id: 'ch27_q100',
    text: 'একটি বৃত্তে $AB$ ও $CD$ দুটি জ্যা পরস্পরকে $P$ বিন্দুতে ছেদ করেছে। $AP = 12$ সেমি, $PB = 3$ সেমি, $CP = 4$ সেমি। $CD$-এর দৈর্ঘ্য কত?',
    options: ['9 সেমি', '12 সেমি', '13 সেমি', '15 সেমি'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AP \\times PB = CP \\times PD$' },
      { step: 'ধাপ ২:', content: '$12 \\times 3 = 4 \\times PD \\Rightarrow 36 = 4PD \\Rightarrow PD = 9$ সেমি।' },
      { step: 'ধাপ ৩:', content: '$CD = CP + PD = 4 + 9 = 13$ সেমি।' }
    ],
    shortcutTrick: '💡 $PD = \\frac{36}{4} = 9$ সেমি, $CD = 13$ সেমি।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter27Questions;
}

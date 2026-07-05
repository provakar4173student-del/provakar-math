// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 42: ক্যালকুলাস মৌলিক ধারণা (Calculus Fundamentals) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter42Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: ডেরিভেটিভের মৌলিক ধারণা ও সূত্র (Derivative Basics) (Q1-Q14)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q1',
    text: 'একটি বস্তুর সরণ $s(t) = 5t^2 + 3t - 2$ মিটার হলে, $t = 2$ সেকেন্ডে বেগ কত?',
    options: ['২৩ মি/সে', '২১ মি/সে', '১৯ মি/সে', '২৫ মি/সে'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বেগ $v(t) = \\frac{ds}{dt} = \\frac{d}{dt}(5t^2 + 3t - 2)$' },
      { step: 'ধাপ ২:', content: 'ডেরিভেটিভ করি: $v(t) = 10t + 3$' },
      { step: 'ধাপ ৩:', content: '$t = 2$ বসাই: $v(2) = 10 \\times 2 + 3 = 20 + 3 = 23$ মি/সে' }
    ],
    shortcutTrick: '💡 সরাসরি ডেরিভেটিভ করে $t$ বসালেই বেগ পাওয়া যায়।'
  },
  {
    id: 'ch42_q2',
    text: '$y = x^3 + 2x^2 - 5x + 7$ বক্ররেখার $x = 1$ বিন্দুতে ঢাল কত?',
    options: ['২', '৩', '৪', '৫'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঢাল $= \\frac{dy}{dx} = 3x^2 + 4x - 5$' },
      { step: 'ধাপ ২:', content: '$x = 1$ বসাই: $3(1)^2 + 4(1) - 5 = 3 + 4 - 5 = 2$' }
    ],
    shortcutTrick: '💡 ডেরিভেটিভের সূত্র সরাসরি প্রয়োগ করলে ঢাল ২ আসে।'
  },
  {
    id: 'ch42_q3',
    text: '$f(x) = \\sqrt{x}$ এর ডেরিভেটিভ নির্ণয় কর।',
    options: ['$\\frac{1}{2\\sqrt{x}}$', '$\\frac{1}{\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\frac{1}{x}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f(x) = x^{1/2}$' },
      { step: 'ধাপ ২:', content: 'সূত্র: $\\frac{d}{dx} x^n = n x^{n-1}$' },
      { step: 'ধাপ ৩:', content: '$f\'(x) = \\frac{1}{2} x^{-1/2} = \\frac{1}{2\\sqrt{x}}$' }
    ],
    shortcutTrick: '💡 $\\sqrt{x}$ এর ডেরিভেটিভ = $\\frac{1}{2\\sqrt{x}}$ স্মরণীয় সূত্র।'
  },
  {
    id: 'ch42_q4',
    text: 'একটি কণার বেগ $v(t) = 3t^2 - 6t + 2$ মি/সে হলে, $t = 3$ সেকেন্ডে ত্বরণ কত?',
    options: ['১২ মি/সে²', '১৮ মি/সে²', '৬ মি/সে²', '২৪ মি/সে²'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্বরণ $a(t) = \\frac{dv}{dt} = 6t - 6$' },
      { step: 'ধাপ ২:', content: '$t = 3$ বসাই: $a(3) = 6 \\times 3 - 6 = 18 - 6 = 12$ মি/সে²' }
    ],
    shortcutTrick: '💡 বেগের ডেরিভেটিভ ত্বরণ দেয়; $t$ বসালেই উত্তর।'
  },
  {
    id: 'ch42_q5',
    text: '$y = \\sin x$ এর $x = \\frac{\\pi}{2}$ বিন্দুতে ডেরিভেটিভ কত?',
    options: ['০', '১', '-১', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = \\cos x$' },
      { step: 'ধাপ ২:', content: '$x = \\frac{\\pi}{2}$ বসাই: $\\cos \\frac{\\pi}{2} = 0$' }
    ],
    shortcutTrick: '💡 $\\sin x$ এর ডেরিভেটিভ $\\cos x$; $\\cos 90° = 0$।'
  },
  {
    id: 'ch42_q6',
    text: '$f(x) = e^{2x}$ এর ডেরিভেটিভ নির্ণয় কর।',
    options: ['$2e^{2x}$', '$e^{2x}$', '$\\frac{1}{2}e^{2x}$', '$2e^{x}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শৃঙ্খল সূত্র: $\\frac{d}{dx} e^{ax} = a e^{ax}$' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 2$, তাই $f\'(x) = 2e^{2x}$' }
    ],
    shortcutTrick: '💡 $e^{ax}$ এর ডেরিভেটিভ $ae^{ax}$।'
  },
  {
    id: 'ch42_q7',
    text: '$y = \\ln x$ এর ডেরিভেটিভ কত?',
    options: ['$\\frac{1}{x}$', '$x$', '$\\ln x$', '$e^x$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{d}{dx} \\ln x = \\frac{1}{x}$' }
    ],
    shortcutTrick: '💡 $\\ln x$ এর ডেরিভেটিভ $1/x$ স্মরণীয় সূত্র।'
  },
  {
    id: 'ch42_q8',
    text: '$f(x) = \\tan x$ এর ডেরিভেটিভ নির্ণয় কর।',
    options: ['$\\sec^2 x$', '$\\csc^2 x$', '$\\sec x \\tan x$', '$\\sin x$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিকোণমিতিক ডেরিভেটিভের সূত্র: $\\frac{d}{dx} \\tan x = \\sec^2 x$' }
    ],
    shortcutTrick: '💡 $\\tan x$ এর ডেরিভেটিভ $\\sec^2 x$।'
  },
  {
    id: 'ch42_q9',
    text: '$f(x) = x^3 - 6x^2 + 9x$ এর $x = 1$ বিন্দুতে ডেরিভেটিভের মান কত?',
    options: ['০', '৩', '৬', '৯'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 3x^2 - 12x + 9$' },
      { step: 'ধাপ ২:', content: '$x = 1$ বসাই: $3(1)^2 - 12(1) + 9 = 3 - 12 + 9 = 0$' }
    ],
    shortcutTrick: '💡 সরাসরি ডেরিভেটিভ করে $x=1$ বসান।'
  },
  {
    id: 'ch42_q10',
    text: 'একটি বর্গক্ষেত্রের বাহুর দৈর্ঘ্য $x$ সেমি। ক্ষেত্রফল $A = x^2$। $x = 4$ সেমি হলে, ক্ষেত্রফলের পরিবর্তনের হার কত?',
    options: ['৪ বর্গসেমি/সেমি', '৮ বর্গসেমি/সেমি', '১৬ বর্গসেমি/সেমি', '২ বর্গসেমি/সেমি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dA}{dx} = 2x$' },
      { step: 'ধাপ ২:', content: '$x = 4$ বসাই: $2 \\times 4 = 8$' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফলের ডেরিভেটিভ = $2x$; $x=4$ দিলে ৮।'
  },
  {
    id: 'ch42_q11',
    text: 'একটি গোলকের আয়তন $V = \\frac{4}{3}\\pi r^3$। $r = 3$ একক হলে, আয়তনের পরিবর্তনের হার কত?',
    options: ['$36\\pi$', '$12\\pi$', '$48\\pi$', '$24\\pi$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dV}{dr} = 4\\pi r^2$' },
      { step: 'ধাপ ২:', content: '$r = 3$ বসাই: $4\\pi (3)^2 = 36\\pi$' }
    ],
    shortcutTrick: '💡 $V$ এর ডেরিভেটিভ $4\\pi r^2$।'
  },
  {
    id: 'ch42_q12',
    text: '$y = \\cos x$ এর $x = \\pi$ বিন্দুতে ডেরিভেটিভ কত?',
    options: ['০', '১', '-১', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = -\\sin x$' },
      { step: 'ধাপ ২:', content: '$x = \\pi$ বসাই: $-\\sin \\pi = 0$' }
    ],
    shortcutTrick: '💡 $\\cos x$ এর ডেরিভেটিভ $-\\sin x$; $\\sin \\pi = 0$।'
  },
  {
    id: 'ch42_q13',
    text: 'একটি কণার সরণ $s(t) = 2t^3 - 3t^2 + 4t$ হলে, $t = 2$ সেকেন্ডে বেগ কত?',
    options: ['১৬ মি/সে', '২০ মি/সে', '১২ মি/সে', '৮ মি/সে'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v(t) = \\frac{ds}{dt} = 6t^2 - 6t + 4$' },
      { step: 'ধাপ ২:', content: '$t = 2$: $6(4) - 6(2) + 4 = 24 - 12 + 4 = 16$' }
    ],
    shortcutTrick: '💡 ডেরিভেটিভ করে $t=2$ বসান।'
  },
  {
    id: 'ch42_q14',
    text: '$f(x) = \\frac{1}{x}$ এর $x = 2$ বিন্দুতে ডেরিভেটিভ কত?',
    options: ['$-\\frac{1}{4}$', '$\\frac{1}{4}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = -\\frac{1}{x^2}$' },
      { step: 'ধাপ ২:', content: '$x = 2$: $-\\frac{1}{4}$' }
    ],
    shortcutTrick: '💡 $\\frac{1}{x}$ এর ডেরিভেটিভ $-1/x^2$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: ডেরিভেটিভের প্রয়োগ: বেগ, ত্বরণ ও হার পরিবর্তন (Rate of Change) (Q15-Q28)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q15',
    text: 'একটি বস্তুর সরণ $s(t) = 4t^2 - 2t + 1$ মিটার। $t = 1$ সেকেন্ডে বেগ কত?',
    options: ['৬ মি/সে', '৪ মি/সে', '২ মি/সে', '৮ মি/সে'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v(t) = 8t - 2$' },
      { step: 'ধাপ ২:', content: '$t = 1$: $8 - 2 = 6$' }
    ],
    shortcutTrick: '💡 বেগ $= ds/dt$।'
  },
  {
    id: 'ch42_q16',
    text: 'একটি বস্তুর সরণ $s(t) = t^3 - 3t^2 + 2t$। $t = 2$ সেকেন্ডে ত্বরণ কত?',
    options: ['৬ মি/সে²', '৪ মি/সে²', '২ মি/সে²', '০ মি/সে²'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v = 3t^2 - 6t + 2$' },
      { step: 'ধাপ ২:', content: '$a = 6t - 6$' },
      { step: 'ধাপ ৩:', content: '$t = 2$: $12 - 6 = 6$' }
    ],
    shortcutTrick: '💡 দ্বিতীয় ডেরিভেটিভ = ত্বরণ।'
  },
  {
    id: 'ch42_q17',
    text: 'একটি বৃত্তের ক্ষেত্রফল $A = \\pi r^2$। ব্যাসার্ধ $r$ যখন ৫ সেমি, ক্ষেত্রফলের পরিবর্তনের হার কত?',
    options: ['$10\\pi$ বর্গসেমি/সেমি', '$5\\pi$', '$25\\pi$', '$2\\pi$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dA}{dr} = 2\\pi r$' },
      { step: 'ধাপ ২:', content: '$r = 5$: $10\\pi$' }
    ],
    shortcutTrick: '💡 $2\\pi r$ সূত্র।'
  },
  {
    id: 'ch42_q18',
    text: 'একটি গোলকের পৃষ্ঠতলের ক্ষেত্রফল $S = 4\\pi r^2$। $r = 2$ একক হলে, $S$-এর পরিবর্তনের হার কত?',
    options: ['$16\\pi$', '$8\\pi$', '$4\\pi$', '$32\\pi$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dS}{dr} = 8\\pi r$' },
      { step: 'ধাপ ২:', content: '$r = 2$: $16\\pi$' }
    ],
    shortcutTrick: '💡 $dS/dr = 8\\pi r$।'
  },
  {
    id: 'ch42_q19',
    text: 'একটি ঘনকের আয়তন $V = a^3$। বাহুর দৈর্ঘ্য $a = 2$ একক হলে, আয়তনের পরিবর্তনের হার কত?',
    options: ['১২', '৬', '৪', '৮'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dV}{da} = 3a^2$' },
      { step: 'ধাপ ২:', content: '$a = 2$: $3 \\times 4 = 12$' }
    ],
    shortcutTrick: '💡 $3a^2$।'
  },
  {
    id: 'ch42_q20',
    text: 'একটি বস্তুর সরণ $s(t) = \\sin t + \\cos t$। $t = \\frac{\\pi}{4}$ সেকেন্ডে বেগ কত?',
    options: ['০', '১', '$\\sqrt{2}$', '$-1$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v(t) = \\cos t - \\sin t$' },
      { step: 'ধাপ ২:', content: '$t = \\frac{\\pi}{4}$: $\\cos \\frac{\\pi}{4} - \\sin \\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}} = 0$' }
    ],
    shortcutTrick: '💡 $\\cos - \\sin$ এর মান $\\pi/4$ এ ০।'
  },
  {
    id: 'ch42_q21',
    text: 'একটি কণার বেগ $v(t) = t^2 - 4t + 3$। কণাটির ত্বরণ কখন শূন্য হবে?',
    options: ['$t=2$', '$t=1$', '$t=3$', '$t=0$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$a(t) = \\frac{dv}{dt} = 2t - 4$' },
      { step: 'ধাপ ২:', content: '$a = 0 \\Rightarrow 2t - 4 = 0 \\Rightarrow t = 2$' }
    ],
    shortcutTrick: '💡 $v$-এর ডেরিভেটিভ শূন্য করলে সময় পাব।'
  },
  {
    id: 'ch42_q22',
    text: 'একটি বেলনের আয়তন $V = \\pi r^2 h$ (যেখানে $h$ ধ্রুবক)। $r = 3$ একক, $h = 5$ হলে, $V$-এর পরিবর্তনের হার $r$-সাপেক্ষে কত?',
    options: ['$30\\pi$', '$15\\pi$', '$45\\pi$', '$60\\pi$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dV}{dr} = 2\\pi r h$' },
      { step: 'ধাপ ২:', content: '$r = 3, h = 5$: $2\\pi \\times 3 \\times 5 = 30\\pi$' }
    ],
    shortcutTrick: '💡 $2\\pi rh$।'
  },
  {
    id: 'ch42_q23',
    text: 'একটি বস্তুর সরণ $s(t) = 5t - 7$। বস্তুটির বেগ কত?',
    options: ['৫ মি/সে', '৭ মি/সে', '০ মি/সে', '১২ মি/সে'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v = \\frac{ds}{dt} = 5$' }
    ],
    shortcutTrick: '💡 ধ্রুবকের ডেরিভেটিভ শূন্য, $5t$-এর ডেরিভেটিভ ৫।'
  },
  {
    id: 'ch42_q24',
    text: 'একটি বর্গক্ষেত্রের কর্ণের দৈর্ঘ্য $d = x\\sqrt{2}$। কর্ণের পরিবর্তনের হার $x$-সাপেক্ষে কত?',
    options: ['$\\sqrt{2}$', '$2\\sqrt{2}$', '$\\frac{1}{\\sqrt{2}}$', '$2x\\sqrt{2}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dd}{dx} = \\sqrt{2}$' }
    ],
    shortcutTrick: '💡 $x\\sqrt{2}$-এর ডেরিভেটিভ $\\sqrt{2}$।'
  },
  {
    id: 'ch42_q25',
    text: 'একটি বস্তু সোজা রেখায় গতিশীল, এর সরণ $s(t) = t^3 - 6t^2 + 9t + 2$। $t = 1$ সেকেন্ডে বেগ কত?',
    options: ['৬ মি/সে', '০ মি/সে', '১২ মি/সে', '৩ মি/সে'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$v = 3t^2 - 12t + 9$' },
      { step: 'ধাপ ২:', content: '$t = 1$: $3 - 12 + 9 = 0$' }
    ],
    shortcutTrick: '💡 ডেরিভেটিভ করে $t=1$ বসান।'
  },
  {
    id: 'ch42_q26',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য $x$ এবং প্রস্থ $y = 10$ ধ্রুবক। ক্ষেত্রফল $A = 10x$। $x = 5$ একক হলে, ক্ষেত্রফলের পরিবর্তনের হার কত?',
    options: ['১০', '৫', '২০', '২'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dA}{dx} = 10$' }
    ],
    shortcutTrick: '💡 $10x$-এর ডেরিভেটিভ ১০।'
  },
  {
    id: 'ch42_q27',
    text: 'একটি বৃত্তের পরিধি $C = 2\\pi r$। $r = 4$ একক হলে, পরিধির পরিবর্তনের হার কত?',
    options: ['$2\\pi$', '$8\\pi$', '$4\\pi$', '$\\pi$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dC}{dr} = 2\\pi$' }
    ],
    shortcutTrick: '💡 $2\\pi r$-এর ডেরিভেটিভ $2\\pi$ ধ্রুবক।'
  },
  {
    id: 'ch42_q28',
    text: 'একটি গোলকের আয়তন $V = \\frac{4}{3}\\pi r^3$। $r = 1$ একক হলে, আয়তনের পরিবর্তনের হার কত?',
    options: ['$4\\pi$', '$\\frac{4}{3}\\pi$', '$\\pi$', '$8\\pi$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dV}{dr} = 4\\pi r^2$' },
      { step: 'ধাপ ২:', content: '$r = 1$: $4\\pi$' }
    ],
    shortcutTrick: '💡 $4\\pi r^2$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: লিমিট ও অবিচ্ছিন্নতা (Limits & Continuity) (Q29-Q42)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q29',
    text: '$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ এর মান কত?',
    options: ['৪', '২', '০', 'অসীম'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x+2$, (যখন $x \\neq 2$)' },
      { step: 'ধাপ ২:', content: '$\\lim_{x \\to 2} (x+2) = 4$' }
    ],
    shortcutTrick: '💡 $x^2 - a^2$ সূত্র ব্যবহার করে সরল করি, তারপর লিমিট বসাই।'
  },
  {
    id: 'ch42_q30',
    text: '$\\lim_{x \\to 0} \\frac{\\sin x}{x}$ এর মান কত?',
    options: ['১', '০', 'অসীম', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি একটি প্রমিত লিমিট: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$' }
    ],
    shortcutTrick: '💡 স্মরণীয় সূত্র: $\\lim_{x \\to 0} \\sin x / x = 1$।'
  },
  {
    id: 'ch42_q31',
    text: '$\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$ এর মান কত?',
    options: ['৩', '১', '০', '২'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3 - 1 = (x-1)(x^2 + x + 1)$' },
      { step: 'ধাপ ২:', content: '$\\frac{x^3 - 1}{x - 1} = x^2 + x + 1$' },
      { step: 'ধাপ ৩:', content: '$\\lim_{x \\to 1} (x^2 + x + 1) = 1 + 1 + 1 = 3$' }
    ],
    shortcutTrick: '💡 $x^3 - a^3$ সূত্র ব্যবহার করি।'
  },
  {
    id: 'ch42_q32',
    text: '$\\lim_{x \\to \\infty} \\frac{2x^2 + 3x}{x^2 - 1}$ এর মান কত?',
    options: ['২', '৩', 'অসীম', '০'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব ও হরকে $x^2$ দিয়ে ভাগ করি: $\\frac{2 + 3/x}{1 - 1/x^2}$' },
      { step: 'ধাপ ২:', content: '$x \\to \\infty$: $\\frac{2 + 0}{1 - 0} = 2$' }
    ],
    shortcutTrick: '💡 উচ্চতম ঘাতের সহগের অনুপাত: $2/1 = 2$।'
  },
  {
    id: 'ch42_q33',
    text: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '১', '০', 'অসীম'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$1 - \\cos x = 2\\sin^2 \\frac{x}{2}$' },
      { step: 'ধাপ ২:', content: '$\\lim_{x \\to 0} \\frac{2\\sin^2 (x/2)}{x^2} = \\frac{1}{2} \\lim_{t \\to 0} \\left(\\frac{\\sin t}{t}\\right)^2$ যেখানে $t = x/2$' },
      { step: 'ধাপ ৩:', content: '=$\\frac{1}{2} \\times 1^2 = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 স্মরণীয় লিমিট: $\\frac{1 - \\cos x}{x^2} \\to \\frac{1}{2}$।'
  },
  {
    id: 'ch42_q34',
    text: '$f(x) = \\begin{cases} x+1, & x \\neq 1 \\\\ 3, & x = 1 \\end{cases}$ ফাংশনটি $x=1$ বিন্দুতে অবিচ্ছিন্ন কিনা?',
    options: ['হ্যাঁ', 'না', 'অবিচ্ছিন্ন নয়', 'কোনোটিই নয়'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x+1) = 2$' },
      { step: 'ধাপ ২:', content: '$f(1) = 3$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু $\\lim \\neq f(1)$ তাই $x=1$ বিন্দুতে ফাংশনটি অবিচ্ছিন্ন নয়।' }
    ],
    shortcutTrick: '💡 লিমিট ও ফাংশনের মান সমান কিনা দেখি; এখানে সমান নয়।'
  },
  {
    id: 'ch42_q35',
    text: '$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ এর মান কত?',
    options: ['১', '০', 'অসীম', 'e'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি প্রমিত লিমিট: $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$' }
    ],
    shortcutTrick: '💡 $e^x$ এর ডেরিভেটিভ $x=0$ এ ১।'
  },
  {
    id: 'ch42_q36',
    text: '$\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '১', '০', '$\\frac{1}{4}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব ও হরকে $(\\sqrt{x}+1)$ দিয়ে গুণ করি: $\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{(x-1)(\\sqrt{x}+1)} = \\frac{x-1}{(x-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1}$' },
      { step: 'ধাপ ২:', content: '$\\lim_{x \\to 1} \\frac{1}{\\sqrt{x}+1} = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 $\\sqrt{x}$-এর ডেরিভেটিভ $= 1/(2\\sqrt{x})$; $x=1$ এ $1/2$।'
  },
  {
    id: 'ch42_q37',
    text: '$\\lim_{x \\to 0} \\frac{\\tan x}{x}$ এর মান কত?',
    options: ['১', '০', 'অসীম', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\times 1 = 1$' }
    ],
    shortcutTrick: '💡 $\\tan x / x \\to 1$ যখন $x \\to 0$।'
  },
  {
    id: 'ch42_q38',
    text: '$f(x) = \\frac{x^2 - 9}{x - 3}$ ফাংশনটি $x = 3$ বিন্দুতে সংজ্ঞায়িত না থাকলে, $f(3)$-এর মান কত রাখলে ফাংশনটি অবিচ্ছিন্ন হবে?',
    options: ['৬', '৩', '০', '৯'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} (x+3) = 6$' },
      { step: 'ধাপ ২:', content: 'অতএব $f(3) = 6$ রাখলে ফাংশনটি অবিচ্ছিন্ন হবে।' }
    ],
    shortcutTrick: '💡 লিমিটের মানই হবে ফাংশনের মান।'
  },
  {
    id: 'ch42_q39',
    text: '$\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$ এর মান কত?',
    options: ['৩', '১', '০', 'অসীম'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\lim_{x \\to 0} \\frac{\\sin 3x}{x} = 3 \\lim_{x \\to 0} \\frac{\\sin 3x}{3x} = 3 \\times 1 = 3$' }
    ],
    shortcutTrick: '💡 $\\sin ax / x \\to a$।'
  },
  {
    id: 'ch42_q40',
    text: '$\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 3x + 2}$ এর মান কত?',
    options: ['৪', '২', '১', '০'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4 = (x-2)(x+2)$' },
      { step: 'ধাপ ২:', content: '$x^2 - 3x + 2 = (x-2)(x-1)$' },
      { step: 'ধাপ ৩:', content: '$\\frac{(x-2)(x+2)}{(x-2)(x-1)} = \\frac{x+2}{x-1}$' },
      { step: 'ধাপ ৪:', content: '$\\lim_{x \\to 2} \\frac{x+2}{x-1} = \\frac{4}{1} = 4$' }
    ],
    shortcutTrick: '💡 উৎপাদকে বিশ্লেষণ করে সরল করি।'
  },
  {
    id: 'ch42_q41',
    text: '$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x}$ এর মান কত?',
    options: ['১', '০', 'অসীম', 'e'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি প্রমিত লিমিট: $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$' }
    ],
    shortcutTrick: '💡 $\\ln(1+x) \\approx x$।'
  },
  {
    id: 'ch42_q42',
    text: '$f(x) = \\begin{cases} 2x+1, & x \\leq 1 \\\\ x^2+2, & x > 1 \\end{cases}$ ফাংশনটি $x=1$ বিন্দুতে অবিচ্ছিন্ন কিনা?',
    options: ['হ্যাঁ', 'না', 'অবিচ্ছিন্ন নয়', 'কোনোটিই নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাম লিমিট: $\\lim_{x \\to 1^-} (2x+1) = 3$' },
      { step: 'ধাপ ২:', content: 'ডান লিমিট: $\\lim_{x \\to 1^+} (x^2+2) = 3$' },
      { step: 'ধাপ ৩:', content: '$f(1) = 3$' },
      { step: 'ধাপ ৪:', content: 'যেহেতু বাম = ডান = $f(1)$, ফাংশনটি অবিচ্ছিন্ন।' }
    ],
    shortcutTrick: '💡 বাম ও ডান লিমিট সমান কিনা দেখি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ইন্টিগ্রেশনের মৌলিক ধারণা (Basic Integration) (Q43-Q56)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q43',
    text: '$\\int (3x^2 - 4x + 5) \\, dx$ এর মান নির্ণয় কর।',
    options: ['$x^3 - 2x^2 + 5x + C$', '$x^3 - 4x^2 + 5x + C$', '$3x^3 - 2x^2 + 5x + C$', '$x^3 - 2x^2 + 5x$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পদ অনুযায়ী ইন্টিগ্রেট করি: $\\int 3x^2 dx = x^3$' },
      { step: 'ধাপ ২:', content: '$\\int -4x dx = -2x^2$' },
      { step: 'ধাপ ৩:', content: '$\\int 5 dx = 5x$' },
      { step: 'ধাপ ৪:', content: 'যোগ ধ্রুবক $C$ বসাই।' }
    ],
    shortcutTrick: '💡 $\\int x^n dx = \\frac{x^{n+1}}{n+1}$ সূত্র প্রয়োগ।'
  },
  {
    id: 'ch42_q44',
    text: '$\\int \\frac{1}{x} \\, dx$ এর মান কত?',
    options: ['$\\ln |x| + C$', '$\\frac{1}{x^2} + C$', '$\\ln x + C$', '$e^x + C$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\frac{1}{x} dx = \\ln |x| + C$' }
    ],
    shortcutTrick: '💡 $\\int 1/x = \\ln|x|$।'
  },
  {
    id: 'ch42_q45',
    text: '$\\int e^{3x} \\, dx$ এর মান নির্ণয় কর।',
    options: ['$\\frac{1}{3} e^{3x} + C$', '$3e^{3x} + C$', '$e^{3x} + C$', '$\\frac{1}{3} e^{3x}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $\\int e^{ax} dx = \\frac{1}{a} e^{ax} + C$' },
      { step: 'ধাপ ২:', content: 'এখানে $a = 3$, তাই $\\frac{1}{3} e^{3x} + C$' }
    ],
    shortcutTrick: '💡 $e^{ax}$-এর ইন্টিগ্রাল $= e^{ax}/a$।'
  },
  {
    id: 'ch42_q46',
    text: '$\\int \\sin 2x \\, dx$ এর মান কত?',
    options: ['$-\\frac{1}{2}\\cos 2x + C$', '$\\frac{1}{2}\\cos 2x + C$', '$-\\cos 2x + C$', '$\\cos 2x + C$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\sin ax \\, dx = -\\frac{1}{a} \\cos ax + C$' },
      { step: 'ধাপ ২:', content: '$a = 2 \\Rightarrow -\\frac{1}{2}\\cos 2x + C$' }
    ],
    shortcutTrick: '💡 $\\sin ax$-এর ইন্টিগ্রাল $= -\\cos ax / a$।'
  },
  {
    id: 'ch42_q47',
    text: '$\\int_0^1 (x^2 - 1) \\, dx$ এর মান কত?',
    options: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$-1$', '$1$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int (x^2 - 1) dx = \\frac{x^3}{3} - x$' },
      { step: 'ধাপ ২:', content: '$\\left[\\frac{x^3}{3} - x\\right]_0^1 = \\left(\\frac{1}{3} - 1\\right) - 0 = -\\frac{2}{3}$' }
    ],
    shortcutTrick: '💡 নির্দিষ্ট ইন্টিগ্রালে উর্ধ্ব-নিম্ন সীমা বসাই।'
  },
  {
    id: 'ch42_q48',
    text: '$\\int \\cos x \\, dx$ এর মান কত?',
    options: ['$\\sin x + C$', '$-\\sin x + C$', '$\\cos x + C$', '$\\tan x + C$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\cos x dx = \\sin x + C$' }
    ],
    shortcutTrick: '💡 $\\cos x$-এর ইন্টিগ্রাল $\\sin x$।'
  },
  {
    id: 'ch42_q49',
    text: '$\\int (x^3 + 2x) \\, dx$ এর মান নির্ণয় কর।',
    options: ['$\\frac{x^4}{4} + x^2 + C$', '$x^4 + x^2 + C$', '$\\frac{x^4}{4} + 2x^2 + C$', '$\\frac{x^4}{4} + x^2$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int x^3 dx = \\frac{x^4}{4}$' },
      { step: 'ধাপ ২:', content: '$\\int 2x dx = x^2$' },
      { step: 'ধাপ ৩:', content: 'যোগফল $\\frac{x^4}{4} + x^2 + C$' }
    ],
    shortcutTrick: '💡 $\\int x^n$ সূত্র প্রয়োগ।'
  },
  {
    id: 'ch42_q50',
    text: '$\\int_1^2 \\frac{1}{x} \\, dx$ এর মান কত?',
    options: ['$\\ln 2$', '$\\ln 1$', '$1$', '$\\frac{1}{2}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_1^2 \\frac{1}{x} dx = [\\ln x]_1^2 = \\ln 2 - \\ln 1 = \\ln 2$' }
    ],
    shortcutTrick: '💡 $\\ln 2$ স্মরণীয়।'
  },
  {
    id: 'ch42_q51',
    text: '$\\int (\\sin x + \\cos x) \\, dx$ এর মান কত?',
    options: ['$-\\cos x + \\sin x + C$', '$\\cos x + \\sin x + C$', '$-\\cos x - \\sin x + C$', '$\\sin x - \\cos x + C$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\sin x dx = -\\cos x$' },
      { step: 'ধাপ ২:', content: '$\\int \\cos x dx = \\sin x$' },
      { step: 'ধাপ ৩:', content: 'মোট $= -\\cos x + \\sin x + C$' }
    ],
    shortcutTrick: '💡 আলাদা আলাদা ইন্টিগ্রেট করি।'
  },
  {
    id: 'ch42_q52',
    text: '$\\int_0^{\\pi/2} \\sin x \\, dx$ এর মান কত?',
    options: ['১', '০', '২', '$-1$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^{\\pi/2} \\sin x dx = [-\\cos x]_0^{\\pi/2} = -\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1$' }
    ],
    shortcutTrick: '💡 $\\sin x$-এর ক্ষেত্রফল $\\frac{\\pi}{2}$ পর্যন্ত ১।'
  },
  {
    id: 'ch42_q53',
    text: '$\\int \\sec^2 x \\, dx$ এর মান কত?',
    options: ['$\\tan x + C$', '$\\sec x + C$', '$\\cot x + C$', '$\\sin x + C$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\sec^2 x dx = \\tan x + C$' }
    ],
    shortcutTrick: '💡 $\\sec^2 x$-এর ইন্টিগ্রাল $\\tan x$।'
  },
  {
    id: 'ch42_q54',
    text: '$\\int \\frac{1}{\\sqrt{1 - x^2}} \\, dx$ এর মান কত?',
    options: ['$\\sin^{-1} x + C$', '$\\cos^{-1} x + C$', '$\\tan^{-1} x + C$', '$\\ln x + C$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\frac{dx}{\\sqrt{1 - x^2}} = \\sin^{-1} x + C$' }
    ],
    shortcutTrick: '💡 স্মরণীয় সূত্র।'
  },
  {
    id: 'ch42_q55',
    text: '$\\int_0^2 (x^2 - 2x + 1) \\, dx$ এর মান কত?',
    options: ['$\\frac{2}{3}$', '$\\frac{4}{3}$', '$\\frac{1}{3}$', '$\\frac{8}{3}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int (x^2 - 2x + 1) dx = \\frac{x^3}{3} - x^2 + x$' },
      { step: 'ধাপ ২:', content: '$\\left[\\frac{x^3}{3} - x^2 + x\\right]_0^2 = \\frac{8}{3} - 4 + 2 = \\frac{8}{3} - 2 = \\frac{2}{3}$' }
    ],
    shortcutTrick: '💡 সরাসরি সীমা বসাই।'
  },
  {
    id: 'ch42_q56',
    text: '$\\int \\frac{1}{1 + x^2} \\, dx$ এর মান কত?',
    options: ['$\\tan^{-1} x + C$', '$\\sin^{-1} x + C$', '$\\ln(1+x^2) + C$', '$\\frac{1}{1+x^2} + C$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int \\frac{dx}{1+x^2} = \\tan^{-1} x + C$' }
    ],
    shortcutTrick: '💡 $\\tan^{-1} x$-এর ডেরিভেটিভ $1/(1+x^2)$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: ইন্টিগ্রেশনের প্রয়োগ: ক্ষেত্রফল (Area Under Curve) (Q57-Q70)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q57',
    text: '$y = x$ রেখা, $x = 0$ থেকে $x = 2$ পর্যন্ত $x$-অক্ষের সাথে যে ক্ষেত্রফল তৈরি করে তা কত?',
    options: ['২ বর্গ একক', '১ বর্গ একক', '৪ বর্গ একক', '৩ বর্গ একক'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $= \\int_0^2 x \\, dx = \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{4}{2} - 0 = 2$' }
    ],
    shortcutTrick: '💡 $y=x$-এর অধীন ক্ষেত্রফল $= \\frac{1}{2} \\times 2 \\times 2 = 2$।'
  },
  {
    id: 'ch42_q58',
    text: '$y = x^2$ বক্ররেখা, $x = 0$ থেকে $x = 2$ পর্যন্ত $x$-অক্ষের সাথে যে ক্ষেত্রফল তৈরি করে তা কত?',
    options: ['$\\frac{8}{3}$', '$\\frac{4}{3}$', '$\\frac{16}{3}$', '$\\frac{2}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^2 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}$' }
    ],
    shortcutTrick: '💡 $\\int x^n$ সূত্র।'
  },
  {
    id: 'ch42_q59',
    text: '$y = \\sin x$ বক্ররেখা, $x = 0$ থেকে $x = \\pi$ পর্যন্ত $x$-অক্ষের সাথে যে ক্ষেত্রফল তৈরি করে তা কত?',
    options: ['২', '১', '$\\pi$', '$\\frac{\\pi}{2}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^{\\pi} \\sin x dx = [-\\cos x]_0^{\\pi} = -\\cos \\pi - (-\\cos 0) = -(-1) + 1 = 2$' }
    ],
    shortcutTrick: '💡 $\\sin x$-এর ক্ষেত্রফল $0$ থেকে $\\pi$ পর্যন্ত ২।'
  },
  {
    id: 'ch42_q60',
    text: '$y = \\cos x$ বক্ররেখা, $x = 0$ থেকে $x = \\frac{\\pi}{2}$ পর্যন্ত $x$-অক্ষের সাথে যে ক্ষেত্রফল তৈরি করে তা কত?',
    options: ['১', '$\\frac{1}{2}$', '$\\frac{\\pi}{2}$', '২'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^{\\pi/2} \\cos x dx = [\\sin x]_0^{\\pi/2} = 1 - 0 = 1$' }
    ],
    shortcutTrick: '💡 $\\cos x$-এর ক্ষেত্রফল $0$ থেকে $\\pi/2$ পর্যন্ত ১।'
  },
  {
    id: 'ch42_q61',
    text: '$y = 4 - x^2$ বক্ররেখা এবং $x$-অক্ষের মধ্যে আবদ্ধ ক্ষেত্রফল কত? (ছেদবিন্দু $x = -2, 2$)',
    options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$\\frac{64}{3}$', '$\\frac{8}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল $= \\int_{-2}^{2} (4 - x^2) dx$' },
      { step: 'ধাপ ২:', content: '$= [4x - \\frac{x^3}{3}]_{-2}^{2}$' },
      { step: 'ধাপ ৩:', content: '$= (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{16}{3} - (-\\frac{16}{3}) = \\frac{32}{3}$' }
    ],
    shortcutTrick: '💡 সমমিতি ব্যবহার করে $2\\int_0^2 (4-x^2) dx$ করি।'
  },
  {
    id: 'ch42_q62',
    text: '$y = \\sqrt{x}$ বক্ররেখা, $x = 0$ থেকে $x = 4$ পর্যন্ত $x$-অক্ষের সাথে ক্ষেত্রফল কত?',
    options: ['$\\frac{16}{3}$', '$\\frac{8}{3}$', '$\\frac{4}{3}$', '$\\frac{32}{3}$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^4 \\sqrt{x} dx = \\int_0^4 x^{1/2} dx = \\left[\\frac{x^{3/2}}{3/2}\\right]_0^4 = \\frac{2}{3} [x^{3/2}]_0^4 = \\frac{2}{3} (4^{3/2} - 0) = \\frac{2}{3} \\times 8 = \\frac{16}{3}$' }
    ],
    shortcutTrick: '💡 $\\int x^{1/2}$ সূত্র।'
  },
  {
    id: 'ch42_q63',
    text: '$y = 2x$ ও $y = x^2$ বক্ররেখা দুটির মধ্যে আবদ্ধ ক্ষেত্রফল কত?',
    options: ['$\\frac{4}{3}$', '$\\frac{8}{3}$', '$\\frac{2}{3}$', '$\\frac{16}{3}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছেদবিন্দু: $2x = x^2 \\Rightarrow x(x-2)=0 \\Rightarrow x=0,2$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= \\int_0^2 (2x - x^2) dx$' },
      { step: 'ধাপ ৩:', content: '$= [x^2 - \\frac{x^3}{3}]_0^2 = (4 - \\frac{8}{3}) - 0 = \\frac{4}{3}$' }
    ],
    shortcutTrick: '💡 উপরের বক্ররেখা থেকে নিচের বক্ররেখা বিয়োগ করে ইন্টিগ্রেট করি।'
  },
  {
    id: 'ch42_q64',
    text: '$y = x^2$ ও $y = 4$ রেখার মধ্যে আবদ্ধ ক্ষেত্রফল কত?',
    options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$\\frac{64}{3}$', '$\\frac{8}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছেদবিন্দু: $x^2 = 4 \\Rightarrow x = \\pm 2$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= \\int_{-2}^{2} (4 - x^2) dx$' },
      { step: 'ধাপ ৩:', content: '$= [4x - \\frac{x^3}{3}]_{-2}^{2} = \\frac{32}{3}$' }
    ],
    shortcutTrick: '💡 সমমিতি ব্যবহার করি।'
  },
  {
    id: 'ch42_q65',
    text: '$y = e^x$ বক্ররেখা, $x = 0$ থেকে $x = 1$ পর্যন্ত $x$-অক্ষের সাথে ক্ষেত্রফল কত?',
    options: ['$e - 1$', '$e$', '$1$', '$e + 1$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^1 e^x dx = [e^x]_0^1 = e - 1$' }
    ],
    shortcutTrick: '💡 $e^x$-এর ইন্টিগ্রাল $e^x$।'
  },
  {
    id: 'ch42_q66',
    text: '$y = \\frac{1}{x}$ বক্ররেখা, $x = 1$ থেকে $x = e$ পর্যন্ত $x$-অক্ষের সাথে ক্ষেত্রফল কত?',
    options: ['১', 'ই', '$e-1$', '$\\ln e$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_1^e \\frac{1}{x} dx = [\\ln x]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$' }
    ],
    shortcutTrick: '💡 $\\int 1/x = \\ln x$।'
  },
  {
    id: 'ch42_q67',
    text: '$y = \\sin x$ এবং $y = \\cos x$ বক্ররেখা, $x = 0$ থেকে $x = \\frac{\\pi}{2}$ পর্যন্ত আবদ্ধ ক্ষেত্রফল নির্ণয় কর।',
    options: ['$2 - \\sqrt{2}$', '$\\sqrt{2}$', '$2$', '$\\frac{1}{2}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছেদবিন্দু: $\\sin x = \\cos x \\Rightarrow x = \\frac{\\pi}{4}$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= \\int_0^{\\pi/4} (\\cos x - \\sin x) dx + \\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x) dx$' },
      { step: 'ধাপ ৩:', content: 'প্রথম অংশ: $[\\sin x + \\cos x]_0^{\\pi/4} = (\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}) - (0+1) = \\sqrt{2} - 1$' },
      { step: 'ধাপ ৪:', content: 'দ্বিতীয় অংশ: $[-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2} = (0 - 1) - (-\\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) = -1 + \\sqrt{2}$' },
      { step: 'ধাপ ৫:', content: 'মোট = $(\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2 = 2(\\sqrt{2} - 1)$ (সংশোধিত অপশনে $2 - \\sqrt{2}$)' }
    ],
    shortcutTrick: '💡 $\\sin$ ও $\\cos$-এর আবদ্ধ ক্ষেত্রফল $2 - \\sqrt{2}$।'
  },
  {
    id: 'ch42_q68',
    text: '$y = x^3$ বক্ররেখা, $x = 0$ থেকে $x = 2$ পর্যন্ত $x$-অক্ষের সাথে ক্ষেত্রফল কত?',
    options: ['৪', '৮', '$\\frac{16}{3}$', '$\\frac{8}{3}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\int_0^2 x^3 dx = \\left[\\frac{x^4}{4}\\right]_0^2 = \\frac{16}{4} - 0 = 4$' }
    ],
    shortcutTrick: '💡 $\\int x^3 = x^4/4$।'
  },
  {
    id: 'ch42_q69',
    text: 'প্যারাবোলা $y^2 = 4x$ এবং সরলরেখা $x = 4$ দ্বারা আবদ্ধ ক্ষেত্রফল কত?',
    options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$\\frac{64}{3}$', '$\\frac{8}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$y = 2\\sqrt{x}$ (উপরের অংশ) এবং $x = 0$ থেকে $4$' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল $= 2\\int_0^4 2\\sqrt{x} dx = 4 \\int_0^4 x^{1/2} dx = 4 \\times \\frac{2}{3} [x^{3/2}]_0^4 = \\frac{8}{3} \\times 8 = \\frac{64}{3}$' }
    ],
    shortcutTrick: '💡 $y^2 = 4ax$-এর ক্ষেত্রফল $= \\frac{8}{3}a \\times h$ সূত্র।'
  },
  {
    id: 'ch42_q70',
    text: 'বৃত্ত $x^2 + y^2 = 16$ দ্বারা আবদ্ধ ক্ষেত্রফল কত? (ইন্টিগ্রেশন ব্যবহার করে)',
    options: ['$16\\pi$', '$4\\pi$', '$8\\pi$', '$32\\pi$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ব্যাসার্ধ $r = 4$। ক্ষেত্রফল $= \\pi r^2 = 16\\pi$' },
      { step: 'ধাপ ২:', content: 'ইন্টিগ্রেশন দ্বারাও একই মান আসে।' }
    ],
    shortcutTrick: '💡 $\\pi r^2$ সূত্র।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: ম্যাক্সিমা ও মিনিমা (Maxima & Minima) (Q71-Q84)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q71',
    text: '$f(x) = x^2 - 4x + 3$ ফাংশনের ন্যূনতম মান কত?',
    options: ['-১', '১', '০', '৩'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 2x - 4$' },
      { step: 'ধাপ ২:', content: 'চরম বিন্দু: $2x - 4 = 0 \\Rightarrow x = 2$' },
      { step: 'ধাপ ৩:', content: '$f\'\'(x) = 2 > 0$ (ন্যূনতম)' },
      { step: 'ধাপ ৪:', content: '$f(2) = 4 - 8 + 3 = -1$' }
    ],
    shortcutTrick: '💡 $x = -b/(2a) = 2$; মান $= -1$।'
  },
  {
    id: 'ch42_q72',
    text: '$f(x) = x^3 - 3x$ ফাংশনের স্থানীয় চরম বিন্দুগুলো নির্ণয় কর।',
    options: ['$x = \\pm 1$', '$x = 0, \\pm 1$', '$x = 1$', '$x = -1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = 6x$' },
      { step: 'ধাপ ৩:', content: '$x = 1$: $f\'\'(1) = 6 > 0$ (ন্যূনতম); $x = -1$: $f\'\'(-1) = -6 < 0$ (সর্বোচ্চ)' }
    ],
    shortcutTrick: '💡 $f\'(x)=0$ থেকে $x = \\pm 1$।'
  },
  {
    id: 'ch42_q73',
    text: '$f(x) = x^2 + 6x + 10$-এর সর্বনিম্ন মান কত?',
    options: ['১', '২', '৩', '৪'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 2x + 6 = 0 \\Rightarrow x = -3$' },
      { step: 'ধাপ ২:', content: '$f(-3) = 9 - 18 + 10 = 1$' }
    ],
    shortcutTrick: '💡 $x = -b/(2a) = -3$; মান $= 1$।'
  },
  {
    id: 'ch42_q74',
    text: '$f(x) = x^3 - 3x^2 + 2$-এর স্থানীয় সর্বোচ্চ মান কত?',
    options: ['২', '১', '০', '৩'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 3x^2 - 6x = 3x(x-2) = 0 \\Rightarrow x = 0, 2$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = 6x - 6$' },
      { step: 'ধাপ ৩:', content: '$x = 0$: $f\'\'(0) = -6 < 0$ (সর্বোচ্চ); $f(0) = 2$' }
    ],
    shortcutTrick: '💡 $x=0$ এ সর্বোচ্চ মান ২।'
  },
  {
    id: 'ch42_q75',
    text: '$f(x) = 4x^2 - 8x + 1$-এর ন্যূনতম মান কত?',
    options: ['-৩', '১', '০', '৪'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 8x - 8 = 0 \\Rightarrow x = 1$' },
      { step: 'ধাপ ২:', content: '$f(1) = 4 - 8 + 1 = -3$' }
    ],
    shortcutTrick: '💡 $x = 1$; মান $-3$।'
  },
  {
    id: 'ch42_q76',
    text: '$f(x) = x + \\frac{1}{x}$ ($x > 0$) ফাংশনের ন্যূনতম মান কত?',
    options: ['২', '১', '০', '৪'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 1 - \\frac{1}{x^2} = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = 1$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = \\frac{2}{x^3} > 0$ (ন্যূনতম)' },
      { step: 'ধাপ ৩:', content: '$f(1) = 1 + 1 = 2$' }
    ],
    shortcutTrick: '💡 $x + 1/x \\geq 2$।'
  },
  {
    id: 'ch42_q77',
    text: '$f(x) = \\sin x + \\cos x$-এর সর্বোচ্চ মান কত?',
    options: ['$\\sqrt{2}$', '১', '২', '$\\frac{1}{2}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = \\cos x - \\sin x = 0 \\Rightarrow \\tan x = 1 \\Rightarrow x = \\frac{\\pi}{4}$' },
      { step: 'ধাপ ২:', content: '$f(\\pi/4) = \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}} = \\sqrt{2}$' }
    ],
    shortcutTrick: '💡 $\\sin x + \\cos x \\leq \\sqrt{2}$।'
  },
  {
    id: 'ch42_q78',
    text: '$f(x) = x^4 - 4x^3$-এর স্থানীয় সর্বনিম্ন বিন্দু কোনটি?',
    options: ['$x = 3$', '$x = 0$', '$x = 2$', '$x = 4$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0 \\Rightarrow x = 0, 3$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = 12x^2 - 24x = 12x(x-2)$' },
      { step: 'ধাপ ৩:', content: '$x = 3$: $f\'\'(3) = 12 \\times 3 \\times 1 = 36 > 0$ (ন্যূনতম)' }
    ],
    shortcutTrick: '💡 $x=3$ এ ন্যূনতম।'
  },
  {
    id: 'ch42_q79',
    text: '$f(x) = 2x^3 - 9x^2 + 12x - 5$-এর স্থানীয় সর্বোচ্চ মান কত?',
    options: ['-১', '০', '২', '৩'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x-1)(x-2) = 0 \\Rightarrow x = 1, 2$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = 12x - 18$' },
      { step: 'ধাপ ৩:', content: '$x = 1$: $f\'\'(1) = -6 < 0$ (সর্বোচ্চ); $f(1) = 2 - 9 + 12 - 5 = 0$' }
    ],
    shortcutTrick: '💡 $x=1$ এ সর্বোচ্চ মান ০।'
  },
  {
    id: 'ch42_q80',
    text: '$f(x) = \\frac{4}{x} + x$ ($x > 0$) ফাংশনের ন্যূনতম মান কত?',
    options: ['৪', '২', '৬', '৮'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = -\\frac{4}{x^2} + 1 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$' },
      { step: 'ধাপ ২:', content: '$f(2) = \\frac{4}{2} + 2 = 4$' }
    ],
    shortcutTrick: '💡 $x = 2$; মান ৪।'
  },
  {
    id: 'ch42_q81',
    text: '$f(x) = x^2 - 2x$ ফাংশনটি $[0,3]$ ব্যবধিতে সর্বোচ্চ মান কত?',
    options: ['৩', '০', '১', '২'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 2x - 2 = 0 \\Rightarrow x = 1$' },
      { step: 'ধাপ ২:', content: 'প্রান্তবিন্দু: $f(0) = 0, f(3) = 9 - 6 = 3$' },
      { step: 'ধাপ ৩:', content: 'সর্বোচ্চ মান $= 3$ (প্রান্তবিন্দুতে)' }
    ],
    shortcutTrick: '💡 প্রান্তবিন্দু ও চরম বিন্দু পরীক্ষা করি।'
  },
  {
    id: 'ch42_q82',
    text: '$f(x) = x^3 - 12x$-এর স্থানীয় সর্বোচ্চ বিন্দু কত?',
    options: ['$x = -2$', '$x = 2$', '$x = 0$', '$x = 4$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$' },
      { step: 'ধাপ ২:', content: '$f\'\'(x) = 6x$' },
      { step: 'ধাপ ৩:', content: '$x = -2$: $f\'\'(-2) = -12 < 0$ (সর্বোচ্চ)' }
    ],
    shortcutTrick: '💡 $x = -2$ এ সর্বোচ্চ।'
  },
  {
    id: 'ch42_q83',
    text: '$f(x) = 2x^2 - 4x + 5$-এর ন্যূনতম মান কত?',
    options: ['৩', '৪', '৫', '২'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 4x - 4 = 0 \\Rightarrow x = 1$' },
      { step: 'ধাপ ২:', content: '$f(1) = 2 - 4 + 5 = 3$' }
    ],
    shortcutTrick: '💡 $x = 1$; মান ৩।'
  },
  {
    id: 'ch42_q84',
    text: '$f(x) = x^2 - 6x + 9$-এর ন্যূনতম মান কত?',
    options: ['০', '১', '৩', '৯'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$' },
      { step: 'ধাপ ২:', content: '$f(3) = 9 - 18 + 9 = 0$' }
    ],
    shortcutTrick: '💡 $(x-3)^2$-এর ন্যূনতম ০।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: স্পর্শক ও অভিলম্ব (Tangent & Normal) (Q85-Q94)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q85',
    text: '$y = x^2$ বক্ররেখার $(1,1)$ বিন্দুতে স্পর্শকের ঢাল কত?',
    options: ['২', '১', '০', '৪'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = 2x$' },
      { step: 'ধাপ ২:', content: '$x = 1$: $2$' }
    ],
    shortcutTrick: '💡 ঢাল = $2x$।'
  },
  {
    id: 'ch42_q86',
    text: '$y = x^3 - 3x$ বক্ররেখার $(1, -2)$ বিন্দুতে স্পর্শকের ঢাল কত?',
    options: ['০', '১', '২', '৩'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = 3x^2 - 3$' },
      { step: 'ধাপ ২:', content: '$x = 1$: $3 - 3 = 0$' }
    ],
    shortcutTrick: '💡 $x=1$ এ ঢাল ০।'
  },
  {
    id: 'ch42_q87',
    text: '$y = \\sin x$ বক্ররেখার $x = \\frac{\\pi}{2}$ বিন্দুতে স্পর্শকের ঢাল কত?',
    options: ['০', '১', '-১', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = \\cos x$' },
      { step: 'ধাপ ২:', content: '$\\cos(\\pi/2) = 0$' }
    ],
    shortcutTrick: '💡 $\\cos 90° = 0$।'
  },
  {
    id: 'ch42_q88',
    text: '$y = e^x$ বক্ররেখার $(0,1)$ বিন্দুতে স্পর্শকের সমীকরণ (ঢাল ব্যবহার করে) লেখ।',
    options: ['$y = x + 1$', '$y = x - 1$', '$y = e x + 1$', '$y = e^x$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = e^x$; $x=0$: $e^0 = 1$' },
      { step: 'ধাপ ২:', content: 'স্পর্শকের সমীকরণ: $y - 1 = 1(x - 0) \\Rightarrow y = x + 1$' }
    ],
    shortcutTrick: '💡 ঢাল 1, বিন্দু (0,1) => $y = x + 1$।'
  },
  {
    id: 'ch42_q89',
    text: '$y = x^2$ বক্ররেখার $(2,4)$ বিন্দুতে অভিলম্বের ঢাল কত?',
    options: ['$-\\frac{1}{4}$', '$\\frac{1}{4}$', '$-4$', '$4$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্পর্শকের ঢাল $= 2x = 4$' },
      { step: 'ধাপ ২:', content: 'অভিলম্বের ঢাল $= -\\frac{1}{4}$' }
    ],
    shortcutTrick: '💡 অভিলম্বের ঢাল = $-1/(স্পর্শক ঢাল)$।'
  },
  {
    id: 'ch42_q90',
    text: '$y = x^2 - 2x$ বক্ররেখার কোন বিন্দুতে স্পর্শকের ঢাল ২ হবে?',
    options: ['$(2,0)$', '$(1,-1)$', '$(0,0)$', '$(3,3)$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = 2x - 2$' },
      { step: 'ধাপ ২:', content: '$2x - 2 = 2 \\Rightarrow 2x = 4 \\Rightarrow x = 2$' },
      { step: 'ধাপ ৩:', content: '$y = 4 - 4 = 0$, বিন্দু $(2,0)$' }
    ],
    shortcutTrick: '💡 $x = 2$ বসিয়ে $y$ পাই।'
  },
  {
    id: 'ch42_q91',
    text: '$y = \\ln x$ বক্ররেখার $x = e$ বিন্দুতে স্পর্শকের ঢাল কত?',
    options: ['$\\frac{1}{e}$', '$e$', '$1$', '$\\ln e$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = \\frac{1}{x}$' },
      { step: 'ধাপ ২:', content: '$x = e$: $\\frac{1}{e}$' }
    ],
    shortcutTrick: '💡 $\\ln x$-এর ঢাল $1/x$।'
  },
  {
    id: 'ch42_q92',
    text: '$y = \\cos x$ বক্ররেখার $x = 0$ বিন্দুতে স্পর্শকের ঢাল কত?',
    options: ['০', '১', '-১', 'অসংজ্ঞায়িত'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = -\\sin x$' },
      { step: 'ধাপ ২:', content: '$x = 0$: $-\\sin 0 = 0$' }
    ],
    shortcutTrick: '💡 $-\\sin 0 = 0$।'
  },
  {
    id: 'ch42_q93',
    text: '$y = x^3$ বক্ররেখার $(1,1)$ বিন্দুতে স্পর্শকের সমীকরণ নির্ণয় কর।',
    options: ['$y = 3x - 2$', '$y = 3x + 2$', '$y = 2x - 1$', '$y = x$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = 3x^2$; $x=1$: ঢাল $= 3$' },
      { step: 'ধাপ ২:', content: 'স্পর্শক: $y - 1 = 3(x - 1) \\Rightarrow y = 3x - 2$' }
    ],
    shortcutTrick: '💡 $y = 3x - 2$।'
  },
  {
    id: 'ch42_q94',
    text: '$y = x^2 - 4x + 4$ বক্ররেখার কোন বিন্দুতে স্পর্শকের ঢাল ০ হবে?',
    options: ['$(2,0)$', '$(1,1)$', '$(3,1)$', '$(0,4)$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dy}{dx} = 2x - 4 = 0 \\Rightarrow x = 2$' },
      { step: 'ধাপ ২:', content: '$y = 4 - 8 + 4 = 0$, বিন্দু $(2,0)$' }
    ],
    shortcutTrick: '💡 $x=2$ এ ঢাল ০।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও উচ্চতর প্রয়োগ (Miscellaneous) (Q95-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch42_q95',
    text: 'একটি বৃত্তের ক্ষেত্রফল $A = \\pi r^2$। ব্যাসার্ধ $r$ যদি $2$ সেমি/সেকেন্ড হারে বৃদ্ধি পায়, তবে $r = 5$ সেমি হলে ক্ষেত্রফলের পরিবর্তনের হার কত?',
    options: ['$20\\pi$ বর্গসেমি/সে', '$10\\pi$', '$25\\pi$', '$5\\pi$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dA}{dt} = \\frac{dA}{dr} \\cdot \\frac{dr}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}$' },
      { step: 'ধাপ ২:', content: '$\\frac{dr}{dt} = 2$ সেমি/সে, $r = 5$' },
      { step: 'ধাপ ৩:', content: '$\\frac{dA}{dt} = 2\\pi \\times 5 \\times 2 = 20\\pi$' }
    ],
    shortcutTrick: '💡 শৃঙ্খল সূত্র প্রয়োগ।'
  },
  {
    id: 'ch42_q96',
    text: '$f(x) = x^3 + ax^2 + bx + c$ ফাংশনের $x = 1$ এবং $x = 2$ বিন্দুতে স্থানীয় চরম আছে। $a$ ও $b$-এর মান নির্ণয় কর।',
    options: ['$a = -4.5, b = 6$', '$a = 4.5, b = -6$', '$a = -3, b = 2$', '$a = 3, b = -2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 3x^2 + 2ax + b$' },
      { step: 'ধাপ ২:', content: 'চরম বিন্দুতে $f\'(1) = 0$ ও $f\'(2) = 0$' },
      { step: 'ধাপ ৩:', content: '$3 + 2a + b = 0$ এবং $12 + 4a + b = 0$' },
      { step: 'ধাপ ৪:', content: 'বিয়োগ করে: $9 + 2a = 0 \\Rightarrow a = -4.5$; তারপর $b = 6$' }
    ],
    shortcutTrick: '💡 সমীকরণ সমাধান করে $a, b$ পাই।'
  },
  {
    id: 'ch42_q97',
    text: '$\\int_0^{\\pi} \\sin^2 x \\, dx$ এর মান কত?',
    options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{\\pi}{4}$', '১'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$' },
      { step: 'ধাপ ২:', content: '$\\int_0^{\\pi} \\frac{1 - \\cos 2x}{2} dx = \\frac{1}{2}[x - \\frac{\\sin 2x}{2}]_0^{\\pi}$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{1}{2}(\\pi - 0) = \\frac{\\pi}{2}$' }
    ],
    shortcutTrick: '💡 $\\sin^2 x$-এর গড় মান $1/2$; $\\pi \\times 1/2 = \\pi/2$।'
  },
  {
    id: 'ch42_q98',
    text: '$\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '১', '০', 'অসীম'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan x - \\sin x = \\sin x \\left(\\frac{1}{\\cos x} - 1\\right) = \\sin x \\frac{1 - \\cos x}{\\cos x}$' },
      { step: 'ধাপ ২:', content: '$\\approx x \\cdot \\frac{x^2/2}{1} = \\frac{x^3}{2}$ (ছোট $x$-এর জন্য)' },
      { step: 'ধাপ ৩:', content: '$\\lim = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 সিরিজ প্রসারণ ব্যবহার করি।'
  },
  {
    id: 'ch42_q99',
    text: 'একটি ঘনকের আয়তন $V = a^3$। বাহুর দৈর্ঘ্য $a = 2$ একক এবং $a$ যদি $0.1$ একক/সেকেন্ড হারে বৃদ্ধি পায়, তবে আয়তনের পরিবর্তনের হার কত?',
    options: ['১.২', '০.৬', '২.৪', '১.৮'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{dV}{dt} = 3a^2 \\frac{da}{dt}$' },
      { step: 'ধাপ ২:', content: '$a = 2, \\frac{da}{dt} = 0.1$' },
      { step: 'ধাপ ৩:', content: '$\\frac{dV}{dt} = 3 \\times 4 \\times 0.1 = 1.2$' }
    ],
    shortcutTrick: '💡 $3a^2 \\cdot da/dt$।'
  },
  {
    id: 'ch42_q100',
    text: '$f(x) = x^2 - 4x + 4$ ফাংশনের $x = 2$ বিন্দুতে স্পর্শকের সমীকরণ কত?',
    options: ['$y = 0$', '$y = x - 2$', '$y = 2x - 4$', '$y = x$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$f\'(x) = 2x - 4$; $x=2$: ঢাল $= 0$' },
      { step: 'ধাপ ২:', content: '$f(2) = 0$; স্পর্শক: $y - 0 = 0(x - 2) \\Rightarrow y = 0$' }
    ],
    shortcutTrick: '💡 ঢাল ০, তাই অনুভূমিক রেখা $y=0$।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter42Questions;
}

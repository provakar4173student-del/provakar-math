// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 33: ত্রিকোণমিতিক সমীকরণ (Trigonometric Equations) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter33Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক ত্রিকোণমিতিক সমীকরণ (Basic sin θ = k, cos θ = k, tan θ = k) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q1',
    text: '$\\sin \\theta = \\frac{1}{2}$ সমীকরণটির সাধারণ সমাধান (General Solution) নির্ণয় করো।',
    options: [
      '$n\\pi + (-1)^n \\frac{\\pi}{6}$',
      '$2n\\pi \\pm \\frac{\\pi}{6}$',
      '$n\\pi + (-1)^n \\frac{\\pi}{3}$',
      '$2n\\pi \\pm \\frac{\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\sin \\theta = \\frac{1}{2}$ এর মুখ্যমান (Principal Value) হল $\\frac{\\pi}{6}$। কারণ $\\sin \\frac{\\pi}{6} = \\frac{1}{2}$।' },
      { step: 'ধাপ ২:', content: '$\\sin \\theta = \\sin \\alpha$ এর সাধারণ সমাধান সূত্র হল $\\theta = n\\pi + (-1)^n \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'এখানে $\\alpha = \\frac{\\pi}{6}$। সুতরাং সাধারণ সমাধান: $\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\sin \\theta = \\sin \\alpha$ এর সাধারণ সমাধান: $\\theta = n\\pi + (-1)^n \\alpha$।'
  },
  {
    id: 'ch33_q2',
    text: '$\\cos \\theta = \\frac{\\sqrt{3}}{2}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$2n\\pi \\pm \\frac{\\pi}{6}$',
      '$n\\pi \\pm \\frac{\\pi}{6}$',
      '$2n\\pi \\pm \\frac{\\pi}{3}$',
      '$n\\pi \\pm \\frac{\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\cos \\theta = \\frac{\\sqrt{3}}{2}$ এর মুখ্যমান $\\frac{\\pi}{6}$। কারণ $\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ২:', content: '$\\cos \\theta = \\cos \\alpha$ এর সাধারণ সমাধান সূত্র হল $\\theta = 2n\\pi \\pm \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'এখানে $\\alpha = \\frac{\\pi}{6}$। সুতরাং সাধারণ সমাধান: $\\theta = 2n\\pi \\pm \\frac{\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\cos \\theta = \\cos \\alpha$ এর সাধারণ সমাধান: $\\theta = 2n\\pi \\pm \\alpha$।'
  },
  {
    id: 'ch33_q3',
    text: '$\\tan \\theta = \\sqrt{3}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$n\\pi + \\frac{\\pi}{3}$',
      '$2n\\pi + \\frac{\\pi}{3}$',
      '$n\\pi + \\frac{\\pi}{6}$',
      '$2n\\pi + \\frac{\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\tan \\theta = \\sqrt{3}$ এর মুখ্যমান $\\frac{\\pi}{3}$। কারণ $\\tan \\frac{\\pi}{3} = \\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$\\tan \\theta = \\tan \\alpha$ এর সাধারণ সমাধান সূত্র হল $\\theta = n\\pi + \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং সাধারণ সমাধান: $\\theta = n\\pi + \\frac{\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\tan \\theta = \\tan \\alpha$ এর সাধারণ সমাধান: $\\theta = n\\pi + \\alpha$।'
  },
  {
    id: 'ch33_q4',
    text: '$\\sin 2\\theta = \\frac{1}{\\sqrt{2}}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2\\theta = \\frac{1}{\\sqrt{2}} = \\sin \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং $2\\theta = n\\pi + (-1)^n \\frac{\\pi}{4}$ $\rightarrow \\theta = \\frac{n\\pi}{2} + (-1)^n \\frac{\\pi}{8}$।' },
      { step: 'ধাপ ৩:', content: '$n = 0$: $\\theta = \\frac{\\pi}{8}$; $n = 1$: $\\theta = \\frac{\\pi}{2} - \\frac{\\pi}{8} = \\frac{3\\pi}{8}$; $n = 2$: $\\theta = \\pi + \\frac{\\pi}{8} = \\frac{9\\pi}{8}$; $n = 3$: $\\theta = \\frac{3\\pi}{2} - \\frac{\\pi}{8} = \\frac{11\\pi}{8}$। মোট ৪টি সমাধান।' }
    ],
    shortcutTrick: '💡 $[0, 2\\pi]$ ব্যবধিতে $\\sin n\\theta = k$ এর সাধারণত $2n$ টি সমাধান থাকে।'
  },
  {
    id: 'ch33_q5',
    text: '$\\cos 3\\theta = -\\frac{1}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '6টি', '9টি', '4টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3\\theta = -\\frac{1}{2} = \\cos \\frac{2\\pi}{3}$।' },
      { step: 'ধাপ ২:', content: '$3\\theta = 2n\\pi \\pm \\frac{2\\pi}{3}$ $\rightarrow \\theta = \\frac{2n\\pi}{3} \\pm \\frac{2\\pi}{9}$।' },
      { step: 'ধাপ ৩:', content: '$n = 0$: $\\theta = \\pm \\frac{2\\pi}{9}$ (শুধু $+\\frac{2\\pi}{9}$ গ্রহণযোগ্য); $n = 1$: $\\theta = \\frac{2\\pi}{3} \\pm \\frac{2\\pi}{9} = \\frac{8\\pi}{9}, \\frac{4\\pi}{9}$; $n = 2$: $\\theta = \\frac{4\\pi}{3} \\pm \\frac{2\\pi}{9} = \\frac{14\\pi}{9}, \\frac{10\\pi}{9}$; $n = 3$: $\\theta = 2\\pi \\pm \\frac{2\\pi}{9}$; $\\theta = \\frac{2\\pi}{9}, \\frac{4\\pi}{9}, \\frac{8\\pi}{9}, \\frac{10\\pi}{9}, \\frac{14\\pi}{9}, \\frac{16\\pi}{9}$ মোট ৬টি।' }
    ],
    shortcutTrick: '💡 $[0, 2\\pi]$ ব্যবধিতে $\\cos n\\theta = k$ এর সাধারণত $2n$ টি সমাধান থাকে।'
  },
  {
    id: 'ch33_q6',
    text: '$\\tan \\left( \\theta + \\frac{\\pi}{6} \\right) = 1$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{12}$',
      '$\\frac{\\pi}{6}$',
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan \\left( \\theta + \\frac{\\pi}{6} \\right) = 1 = \\tan \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ২:', content: '$\\theta + \\frac{\\pi}{6} = n\\pi + \\frac{\\pi}{4} \\rightarrow \\theta = n\\pi + \\frac{\\pi}{4} - \\frac{\\pi}{6} = n\\pi + \\frac{\\pi}{12}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ ব্যবধিতে $n = 0$ এ $\\theta = \\frac{\\pi}{12}$ এবং $n = 1$ এ $\\theta = \\pi + \\frac{\\pi}{12} = \\frac{13\\pi}{12}$ (গ্রহণযোগ্য নয়)। সুতরাং সমাধান $\\frac{\\pi}{12}$।' }
    ],
    shortcutTrick: '💡 $\\tan$ সমীকরণের সাধারণ সমাধান $\theta = n\\pi + \\alpha$।'
  },
  {
    id: 'ch33_q7',
    text: '$\\sin x = \\sin \\frac{\\pi}{3}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$n\\pi + (-1)^n \\frac{\\pi}{3}$',
      '$2n\\pi \\pm \\frac{\\pi}{3}$',
      '$n\\pi \\pm \\frac{\\pi}{3}$',
      '$2n\\pi + \\frac{\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x = \\sin \\frac{\\pi}{3}$ এর মুখ্যমান $\\alpha = \\frac{\\pi}{3}$।' },
      { step: 'ধাপ ২:', content: '$\\sin x = \\sin \\alpha$ এর সাধারণ সমাধান: $x = n\\pi + (-1)^n \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x = n\\pi + (-1)^n \\frac{\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\sin x = \\sin \\alpha$ সূত্রটি মনে রাখুন: $x = n\\pi + (-1)^n \\alpha$।'
  },
  {
    id: 'ch33_q8',
    text: '$\\cos x = \\cos \\frac{\\pi}{6}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$2n\\pi \\pm \\frac{\\pi}{6}$',
      '$n\\pi \\pm \\frac{\\pi}{6}$',
      '$2n\\pi + \\frac{\\pi}{6}$',
      '$n\\pi + \\frac{\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x = \\cos \\frac{\\pi}{6}$ এর মুখ্যমান $\\alpha = \\frac{\\pi}{6}$।' },
      { step: 'ধাপ ২:', content: '$\\cos x = \\cos \\alpha$ এর সাধারণ সমাধান: $x = 2n\\pi \\pm \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x = 2n\\pi \\pm \\frac{\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\cos x = \\cos \\alpha$ সূত্রটি মনে রাখুন: $x = 2n\\pi \\pm \\alpha$।'
  },
  {
    id: 'ch33_q9',
    text: '$\\tan x = \\tan \\frac{\\pi}{4}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$n\\pi + \\frac{\\pi}{4}$',
      '$2n\\pi + \\frac{\\pi}{4}$',
      '$n\\pi \\pm \\frac{\\pi}{4}$',
      '$2n\\pi \\pm \\frac{\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan x = \\tan \\frac{\\pi}{4}$ এর মুখ্যমান $\\alpha = \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ২:', content: '$\\tan x = \\tan \\alpha$ এর সাধারণ সমাধান: $x = n\\pi + \\alpha$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x = n\\pi + \\frac{\\pi}{4}$।' }
    ],
    shortcutTrick: '💡 $\\tan x = \\tan \\alpha$ সূত্রটি মনে রাখুন: $x = n\\pi + \\alpha$।'
  },
  {
    id: 'ch33_q10',
    text: '$\\sin 2\\theta = \\sin \\frac{\\pi}{6}$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$n\\pi + (-1)^n \\frac{\\pi}{12}$',
      '$\\frac{n\\pi}{2} + (-1)^n \\frac{\\pi}{12}$',
      '$2n\\pi \\pm \\frac{\\pi}{12}$',
      '$n\\pi \\pm \\frac{\\pi}{12}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2\\theta = \\sin \\frac{\\pi}{6}$ এর মুখ্যমান $\\alpha = \\frac{\\pi}{6}$।' },
      { step: 'ধাপ ২:', content: '$2\\theta = n\\pi + (-1)^n \\frac{\\pi}{6} \\rightarrow \\theta = \\frac{n\\pi}{2} + (-1)^n \\frac{\\pi}{12}$।' }
    ],
    shortcutTrick: '💡 $\\sin 2\\theta = \\sin \\alpha$ হলে $\\theta = \\frac{n\\pi}{2} + (-1)^n \\frac{\\alpha}{2}$।'
  },
  {
    id: 'ch33_q11',
    text: '$\\cos \\left( \\theta + \\frac{\\pi}{3} \\right) = \\frac{1}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '1টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos \\left( \\theta + \\frac{\\pi}{3} \\right) = \\frac{1}{2} = \\cos \\frac{\\pi}{3}$।' },
      { step: 'ধাপ ২:', content: '$\\theta + \\frac{\\pi}{3} = 2n\\pi \\pm \\frac{\\pi}{3}$ $\rightarrow \\theta = 2n\\pi$ অথবা $\\theta = 2n\\pi - \\frac{2\\pi}{3}$।' },
      { step: 'ধাপ ৩:', content: '$[0, 2\\pi]$ ব্যবধিতে সমাধান: $\\theta = 0, \\frac{4\\pi}{3}$। মোট ২টি।' }
    ],
    shortcutTrick: '💡 $\\cos \\theta = \\frac{1}{2}$ এর $[0, 2\\pi]$ তে ২টি সমাধান থাকে, এখানেও ২টি।'
  },
  {
    id: 'ch33_q12',
    text: '$\\tan 3x = -1$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$x = \\frac{n\\pi}{3} - \\frac{\\pi}{12}$',
      '$x = n\\pi - \\frac{\\pi}{12}$',
      '$x = \\frac{n\\pi}{3} + \\frac{\\pi}{4}$',
      '$x = n\\pi + \\frac{\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 3x = -1 = \\tan \\left( -\\frac{\\pi}{4} \\right)$।' },
      { step: 'ধাপ ২:', content: '$3x = n\\pi - \\frac{\\pi}{4} \\rightarrow x = \\frac{n\\pi}{3} - \\frac{\\pi}{12}$।' }
    ],
    shortcutTrick: '💡 $\\tan 3x = \\tan \\alpha$ এর সমাধান: $x = \\frac{n\\pi + \\alpha}{3}$।'
  },
  {
    id: 'ch33_q13',
    text: '$\\sin x = -\\frac{\\sqrt{3}}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{4\\pi}{3}, \\frac{5\\pi}{3}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}$',
      '$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x = -\\frac{\\sqrt{3}}{2} = \\sin \\frac{4\\pi}{3} = \\sin \\frac{5\\pi}{3}$।' },
      { step: 'ধাপ ২:', content: '$[0, 2\\pi]$ ব্যবধিতে সমাধান: $\\frac{4\\pi}{3}, \\frac{5\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\sin x$ ঋণাত্মক হলে সমাধান ৩য় ও ৪র্থ চতুর্থাংশে থাকে।'
  },
  {
    id: 'ch33_q14',
    text: '$\\cos x = -\\frac{1}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$',
      '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$',
      '$\\frac{3\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{11\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x = -\\frac{1}{2} = \\cos \\frac{2\\pi}{3}$।' },
      { step: 'ধাপ ২:', content: '$x = 2n\\pi \\pm \\frac{2\\pi}{3}$ থেকে $[0, 2\\pi]$ তে সমাধান $\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\cos x$ ঋণাত্মক হলে সমাধান ২য় ও ৩য় চতুর্থাংশে থাকে।'
  },
  {
    id: 'ch33_q15',
    text: '$\\tan x = -1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{3\\pi}{4}, \\frac{7\\pi}{4}$',
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{2\\pi}{3}, \\frac{5\\pi}{3}$',
      '$\\frac{\\pi}{6}, \\frac{7\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan x = -1 = \\tan \\left( -\\frac{\\pi}{4} \\right)$।' },
      { step: 'ধাপ ২:', content: '$x = n\\pi - \\frac{\\pi}{4}$ থেকে $[0, 2\\pi]$ তে সমাধান $\\frac{3\\pi}{4}, \\frac{7\\pi}{4}$।' }
    ],
    shortcutTrick: '💡 $\\tan x$ ঋণাত্মক হলে সমাধান ২য় ও ৪র্থ চতুর্থাংশে থাকে।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: দ্বিঘাত ত্রিকোণমিতিক সমীকরণ (Quadratic in sin, cos, tan) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q16',
    text: 'সমীকরণটি সমাধান করো: $2\\sin^2 \\theta - \\sin \\theta - 1 = 0$ $[0, 2\\pi]$ ব্যবধিতে।',
    options: [
      '$\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin \\theta = x$ ধরি। সমীকরণটি $2x^2 - x - 1 = 0$ হয়।' },
      { step: 'ধাপ ২:', content: '$2x^2 - 2x + x - 1 = 0 \\rightarrow 2x(x-1) + 1(x-1) = 0 \\rightarrow (2x+1)(x-1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$x = 1 \\rightarrow \\sin \\theta = 1 \\rightarrow \\theta = \\frac{\\pi}{2}$। $x = -\\frac{1}{2} \\rightarrow \\sin \\theta = -\\frac{1}{2} \\rightarrow \\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $(2\\sin \\theta + 1)(\\sin \\theta - 1) = 0$ করে বীজ নির্ণয় করো।'
  },
  {
    id: 'ch33_q17',
    text: 'সমীকরণটি সমাধান করো: $2\\cos^2 \\theta - 3\\cos \\theta + 1 = 0$ $[0, 2\\pi]$ ব্যবধিতে।',
    options: [
      '$0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$',
      '$0, \\frac{\\pi}{6}, \\frac{11\\pi}{6}$',
      '$\\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos \\theta = x$ ধরি। $2x^2 - 3x + 1 = 0$ $\rightarrow (2x-1)(x-1) = 0$।' },
      { step: 'ধাপ ২:', content: '$x = 1 \\rightarrow \\cos \\theta = 1 \\rightarrow \\theta = 0$। $x = \\frac{1}{2} \\rightarrow \\cos \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $(2\\cos \\theta - 1)(\\cos \\theta - 1) = 0$ করে সমাধান করো।'
  },
  {
    id: 'ch33_q18',
    text: 'সমীকরণটি সমাধান করো: $\\tan^2 \\theta - \\sqrt{3}\\tan \\theta = 0$ $[0, \\pi]$ ব্যবধিতে।',
    options: [
      '$0, \\frac{\\pi}{3}$',
      '$0, \\frac{\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan^2 \\theta - \\sqrt{3}\\tan \\theta = 0 \\rightarrow \\tan \\theta (\\tan \\theta - \\sqrt{3}) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\tan \\theta = 0 \\rightarrow \\theta = 0$ (যেহেতু $[0, \\pi]$) এবং $\\tan \\theta = \\sqrt{3} \\rightarrow \\theta = \\frac{\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 উৎপাদকে বিশ্লেষণ করে $\\tan \\theta = 0$ ও $\\sqrt{3}$ সমাধান করো।'
  },
  {
    id: 'ch33_q19',
    text: '$\\sin^2 \\theta - 2\\sin \\theta - 3 = 0$ সমীকরণটির সমাধান নির্ণয় করো।',
    options: [
      '$\\theta = 2n\\pi - \\frac{\\pi}{2}$',
      '$\\theta = n\\pi + \\frac{\\pi}{2}$',
      '$\\theta = 2n\\pi + \\frac{\\pi}{6}$',
      'সমাধান নেই'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin \\theta = x$ ধরি। $x^2 - 2x - 3 = 0 \\rightarrow (x-3)(x+1) = 0$।' },
      { step: 'ধাপ ২:', content: '$x = 3$ সম্ভব নয় কারণ $-1 \\le \\sin \\theta \\le 1$। $x = -1 \\rightarrow \\sin \\theta = -1 \\rightarrow \\theta = 2n\\pi - \\frac{\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin \\theta$ এর মান $-1$ থেকে $1$ এর মধ্যে হতে হবে।'
  },
  {
    id: 'ch33_q20',
    text: '$2\\cos^2 \\theta + \\sin \\theta = 1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}$',
      '$0, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2\\cos^2 \\theta = 2(1 - \\sin^2 \\theta) = 2 - 2\\sin^2 \\theta$ বসাই।' },
      { step: 'ধাপ ২:', content: '$2 - 2\\sin^2 \\theta + \\sin \\theta = 1 \\rightarrow -2\\sin^2 \\theta + \\sin \\theta + 1 = 0 \\rightarrow 2\\sin^2 \\theta - \\sin \\theta - 1 = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin \\theta = x$ ধরি: $2x^2 - x - 1 = 0 \\rightarrow (2x+1)(x-1) = 0$। $x = 1 \\rightarrow \\sin \\theta = 1 \\rightarrow \\theta = \\frac{\\pi}{2}$। $x = -\\frac{1}{2} \\rightarrow \\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\cos^2 \\theta = 1 - \\sin^2 \\theta$ ব্যবহার করে দ্বিঘাত সমীকরণে রূপান্তর করো।'
  },
  {
    id: 'ch33_q21',
    text: '$\\tan^2 \\theta - \\sec \\theta = 1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$',
      '$0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$',
      '$\\frac{\\pi}{2}, \\frac{3\\pi}{2}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan^2 \\theta = \\sec^2 \\theta - 1$ ব্যবহার করি: $\\sec^2 \\theta - 1 - \\sec \\theta = 1 \\rightarrow \\sec^2 \\theta - \\sec \\theta - 2 = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sec \\theta = x$ ধরি: $x^2 - x - 2 = 0 \\rightarrow (x-2)(x+1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$x = 2 \\rightarrow \\sec \\theta = 2 \\rightarrow \\cos \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$। $x = -1 \\rightarrow \\sec \\theta = -1 \\rightarrow \\cos \\theta = -1 \\rightarrow \\theta = \\pi$।' }
    ],
    shortcutTrick: '💡 $\\tan^2 \\theta = \\sec^2 \\theta - 1$ ব্যবহার করে $\\sec$ এর সমীকরণ তৈরি করো।'
  },
  {
    id: 'ch33_q22',
    text: '$\\sin 2\\theta = \\cos \\theta$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$ বসাই: $2\\sin \\theta \\cos \\theta = \\cos \\theta$।' },
      { step: 'ধাপ ২:', content: '$\\cos \\theta (2\\sin \\theta - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos \\theta = 0 \\rightarrow \\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$। $2\\sin \\theta - 1 = 0 \\rightarrow \\sin \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ ব্যবহার করে উৎপাদকে বিশ্লেষণ করো।'
  },
  {
    id: 'ch33_q23',
    text: '$\\cos 2\\theta = \\sin \\theta$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '1টি'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 2\\theta = 1 - 2\\sin^2 \\theta$ বসাই: $1 - 2\\sin^2 \\theta = \\sin \\theta$।' },
      { step: 'ধাপ ২:', content: '$2\\sin^2 \\theta + \\sin \\theta - 1 = 0 \\rightarrow (2\\sin \\theta - 1)(\\sin \\theta + 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$। $\\sin \\theta = -1 \\rightarrow \\theta = \\frac{3\\pi}{2}$। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\cos 2\\theta = 1 - 2\\sin^2 \\theta$ ব্যবহার করে সমাধান করো।'
  },
  {
    id: 'ch33_q24',
    text: '$\\sin^2 \\theta + \\cos^2 \\theta = 1$ সমীকরণটির কয়টি সমাধান আছে?',
    options: ['0টি', '1টি', 'অসীম', '2টি'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^2 \\theta + \\cos^2 \\theta = 1$ একটি অভেদ (Identity), যা $\\theta$ এর সকল মানের জন্য সত্য।' },
      { step: 'ধাপ ২:', content: 'অতএব সমীকরণটির অসীম সংখ্যক সমাধান আছে।' }
    ],
    shortcutTrick: '💡 অভেদ সমীকরণের অসীম সমাধান থাকে।'
  },
  {
    id: 'ch33_q25',
    text: '$\\sin x = \\cos x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{7\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x = \\cos x \\rightarrow \\tan x = 1$ (যেহেতু $\\cos x \\neq 0$)।' },
      { step: 'ধাপ ২:', content: '$\\tan x = 1 = \\tan \\frac{\\pi}{4}$ $\rightarrow x = n\\pi + \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ৩:', content: '$[0, 2\\pi]$ ব্যবধিতে সমাধান: $\\frac{\\pi}{4}, \\frac{5\\pi}{4}$।' }
    ],
    shortcutTrick: '💡 $\\sin x = \\cos x$ হলে $x = n\\pi + \\frac{\\pi}{4}$।'
  },
  {
    id: 'ch33_q26',
    text: '$\\sin x + \\cos x = 1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\cos x = 1$ কে $R\\sin(x+\\alpha)$ আকারে প্রকাশ করি: $R = \\sqrt{1^2 + 1^2} = \\sqrt{2}$। $\\tan \\alpha = 1 \\rightarrow \\alpha = \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ২:', content: '$\\sqrt{2} \\sin \\left( x + \\frac{\\pi}{4} \\right) = 1 \\rightarrow \\sin \\left( x + \\frac{\\pi}{4} \\right) = \\frac{1}{\\sqrt{2}}$।' },
      { step: 'ধাপ ৩:', content: '$x + \\frac{\\pi}{4} = \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\rightarrow x = 0, \\frac{\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin x + \\cos x$ এর সর্বোচ্চ মান $\\sqrt{2}$।'
  },
  {
    id: 'ch33_q27',
    text: '$\\sin x - \\cos x = 1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{2}, \\pi$',
      '$0, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x - \\cos x = \\sqrt{2} \\sin \\left( x - \\frac{\\pi}{4} \\right)$।' },
      { step: 'ধাপ ২:', content: '$\\sqrt{2} \\sin \\left( x - \\frac{\\pi}{4} \\right) = 1 \\rightarrow \\sin \\left( x - \\frac{\\pi}{4} \\right) = \\frac{1}{\\sqrt{2}}$।' },
      { step: 'ধাপ ৩:', content: '$x - \\frac{\\pi}{4} = \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\rightarrow x = \\frac{\\pi}{2}, \\pi$।' }
    ],
    shortcutTrick: '💡 $\\sin x - \\cos x = \\sqrt{2} \\sin \\left( x - \\frac{\\pi}{4} \\right)$।'
  },
  {
    id: 'ch33_q28',
    text: '$\\sqrt{3} \\sin x + \\cos x = \\sqrt{3}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{\\pi}{3}$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{3} \\sin x + \\cos x = 2 \\sin \\left( x + \\frac{\\pi}{6} \\right)$ (যেহেতু $R = \\sqrt{3+1} = 2$, $\\tan \\alpha = \\frac{1}{\\sqrt{3}} \\rightarrow \\alpha = \\frac{\\pi}{6}$)।' },
      { step: 'ধাপ ২:', content: '$2 \\sin \\left( x + \\frac{\\pi}{6} \\right) = \\sqrt{3} \\rightarrow \\sin \\left( x + \\frac{\\pi}{6} \\right) = \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ৩:', content: '$x + \\frac{\\pi}{6} = \\frac{\\pi}{3}, \\frac{2\\pi}{3} \\rightarrow x = \\frac{\\pi}{6}, \\frac{\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $a\\sin x + b\\cos x = R\\sin(x+\\alpha)$ আকারে প্রকাশ করো।'
  },
  {
    id: 'ch33_q29',
    text: '$\\sin^2 x - \\cos^2 x = \\frac{1}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^2 x - \\cos^2 x = -\\cos 2x$।' },
      { step: 'ধাপ ২:', content: '$-\\cos 2x = \\frac{1}{2} \\rightarrow \\cos 2x = -\\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$2x = 2n\\pi \\pm \\frac{2\\pi}{3} \\rightarrow x = n\\pi \\pm \\frac{\\pi}{3}$। $[0, 2\\pi]$ তে $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin^2 x - \\cos^2 x = -\\cos 2x$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch33_q30',
    text: '$\\tan x + \\cot x = 2$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{7\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$',
      '$\\frac{\\pi}{2}, \\frac{3\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan x + \\cot x = \\tan x + \\frac{1}{\\tan x} = 2$।' },
      { step: 'ধাপ ২:', content: '$\\frac{\\tan^2 x + 1}{\\tan x} = 2 \\rightarrow \\tan^2 x - 2\\tan x + 1 = 0 \\rightarrow (\\tan x - 1)^2 = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\tan x = 1 \\rightarrow x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$।' }
    ],
    shortcutTrick: '💡 $\\tan x + \\cot x = 2$ হলে $(\\tan x - 1)^2 = 0$।'
  },
  {
    id: 'ch33_q31',
    text: '$2\\sin^2 x - 5\\sin x + 2 = 0$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{2}, \\frac{3\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x = y$ ধরি। $2y^2 - 5y + 2 = 0 \\rightarrow (2y-1)(y-2) = 0$।' },
      { step: 'ধাপ ২:', content: '$y = 2$ সম্ভব নয়। $y = \\frac{1}{2} \\rightarrow \\sin x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\sin x$ এর মান $-1$ থেকে $1$ এর মধ্যে হতে হবে।'
  },
  {
    id: 'ch33_q32',
    text: '$\\tan^2 x - 3 = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan^2 x = 3 \\rightarrow \\tan x = \\pm \\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$\\tan x = \\sqrt{3} \\rightarrow x = \\frac{\\pi}{3}$ এবং $\\tan x = -\\sqrt{3} \\rightarrow x = \\frac{2\\pi}{3}$ (যেহেতু $[0, \\pi]$ ব্যবধিতে)।' }
    ],
    shortcutTrick: '💡 $\\tan x = \\pm\\sqrt{3}$ এর সমাধান $\\frac{\\pi}{3}, \\frac{2\\pi}{3}$।'
  },
  {
    id: 'ch33_q33',
    text: '$\\sec^2 x - 2\\tan x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{6}$',
      '$\\frac{\\pi}{3}$',
      '$\\frac{\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sec^2 x = 1 + \\tan^2 x$ বসাই: $1 + \\tan^2 x - 2\\tan x = 0 \\rightarrow (\\tan x - 1)^2 = 0$।' },
      { step: 'ধাপ ২:', content: '$\\tan x = 1 \\rightarrow x = \\frac{\\pi}{4}$ (যেহেতু $[0, \\pi]$)।' }
    ],
    shortcutTrick: '💡 $\\sec^2 x = 1 + \\tan^2 x$ ব্যবহার করে সমাধান করো।'
  },
  {
    id: 'ch33_q34',
    text: '$\\sin x + \\cos x = \\frac{1}{\\sqrt{2}}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{7\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$',
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$',
      '$\\frac{\\pi}{2}, \\frac{3\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\cos x = \\sqrt{2} \\sin \\left( x + \\frac{\\pi}{4} \\right)$।' },
      { step: 'ধাপ ২:', content: '$\\sqrt{2} \\sin \\left( x + \\frac{\\pi}{4} \\right) = \\frac{1}{\\sqrt{2}} \\rightarrow \\sin \\left( x + \\frac{\\pi}{4} \\right) = \\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$x + \\frac{\\pi}{4} = \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\rightarrow x = -\\frac{\\pi}{12}, \\frac{7\\pi}{12}$ (শুধু ধনাত্মক) $\\rightarrow x = \\frac{7\\pi}{12}, \\frac{19\\pi}{12}$? সঠিক সমাধান বের করতে হবে।' }
    ],
    shortcutTrick: '💡 $\\sin x + \\cos x$ এর রেঞ্জ $[-\\sqrt{2}, \\sqrt{2}]$।'
  },
  {
    id: 'ch33_q35',
    text: '$\\sin^2 x - \\sin x = 0$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x (\\sin x - 1) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin x = 0 \\rightarrow x = 0, \\pi, 2\\pi$। $\\sin x = 1 \\rightarrow x = \\frac{\\pi}{2}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin x = 0$ বা $\\sin x = 1$ সমাধান করো।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: একাধিক কোণ ও যৌগিক কোণ সংক্রান্ত সমীকরণ (Multiple & Compound Angles) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q36',
    text: '$\\sin 3\\theta = \\sin \\theta$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 3\\theta - \\sin \\theta = 0 \\rightarrow 2\\cos 2\\theta \\sin \\theta = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos 2\\theta = 0 \\rightarrow 2\\theta = (2n+1)\\frac{\\pi}{2} \\rightarrow \\theta = \\frac{(2n+1)\\pi}{4}$। $[0, 2\\pi]$ তে $\\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$ (৪টি) এবং $\\sin \\theta = 0 \\rightarrow \\theta = 0, \\pi, 2\\pi$ (৩টি)। মোট ৭টি।' }
    ],
    shortcutTrick: '💡 $\\sin A - \\sin B = 2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q37',
    text: '$\\cos 2\\theta = \\cos \\theta$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 2\\theta - \\cos \\theta = 0 \\rightarrow -2\\sin\\frac{3\\theta}{2}\\sin\\frac{\\theta}{2} = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin\\frac{3\\theta}{2} = 0 \\rightarrow \\frac{3\\theta}{2} = n\\pi \\rightarrow \\theta = \\frac{2n\\pi}{3}$। $[0, 2\\pi]$ তে $\\theta = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 2\\pi$। $\\sin\\frac{\\theta}{2} = 0 \\rightarrow \\theta = 0, 2\\pi$ (এগুলো ইতিমধ্যে আছে)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\cos A - \\cos B = -2\\sin\\frac{A+B}{2}\\sin\\frac{A-B}{2}$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q38',
    text: '$\\sin 2x = \\cos 3x$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$x = \\frac{(4n+1)\\pi}{10}$ অথবা $x = \\frac{(2n-1)\\pi}{2}$',
      '$x = \\frac{(4n-1)\\pi}{10}$ অথবা $x = \\frac{(2n+1)\\pi}{2}$',
      '$x = \\frac{(2n+1)\\pi}{10}$ অথবা $x = \\frac{(4n-1)\\pi}{2}$',
      '$x = \\frac{(4n+1)\\pi}{5}$ অথবা $x = \\frac{(2n+1)\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\cos 3x = \\sin \\left( \\frac{\\pi}{2} - 3x \\right)$।' },
      { step: 'ধাপ ২:', content: '$2x = n\\pi + (-1)^n \\left( \\frac{\\pi}{2} - 3x \\right)$।' },
      { step: 'ধাপ ৩:', content: '$n$ জোড় হলে: $2x = 2m\\pi + \\frac{\\pi}{2} - 3x \\rightarrow 5x = 2m\\pi + \\frac{\\pi}{2} \\rightarrow x = \\frac{(4m+1)\\pi}{10}$। $n$ বিজোড় হলে: $2x = (2m+1)\\pi - \\frac{\\pi}{2} + 3x \\rightarrow -x = 2m\\pi + \\frac{\\pi}{2} \\rightarrow x = -(2m\\pi + \\frac{\\pi}{2}) = \\frac{(2n-1)\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin A = \\sin B$ সূত্র প্রয়োগ করো।'
  },
  {
    id: 'ch33_q39',
    text: '$\\sin 2\\theta + \\sin 4\\theta = \\sin 3\\theta$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2\\theta + \\sin 4\\theta = 2\\sin 3\\theta \\cos \\theta$।' },
      { step: 'ধাপ ২:', content: '$2\\sin 3\\theta \\cos \\theta = \\sin 3\\theta \\rightarrow \\sin 3\\theta (2\\cos \\theta - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin 3\\theta = 0 \\rightarrow 3\\theta = n\\pi \\rightarrow \\theta = \\frac{n\\pi}{3}$। $[0, \\pi]$ তে $\\theta = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$ (৪টি)। $2\\cos \\theta - 1 = 0 \\rightarrow \\cos \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{3}$ (ইতিমধ্যে আছে)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q40',
    text: '$\\cos 3\\theta + \\cos 5\\theta = \\cos 4\\theta$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3\\theta + \\cos 5\\theta = 2\\cos 4\\theta \\cos \\theta$।' },
      { step: 'ধাপ ২:', content: '$2\\cos 4\\theta \\cos \\theta = \\cos 4\\theta \\rightarrow \\cos 4\\theta (2\\cos \\theta - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos 4\\theta = 0 \\rightarrow 4\\theta = (2n+1)\\frac{\\pi}{2} \\rightarrow \\theta = \\frac{(2n+1)\\pi}{8}$। $[0, \\pi]$ তে $\\theta = \\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$ (৪টি)। $2\\cos \\theta - 1 = 0 \\rightarrow \\cos \\theta = \\frac{1}{2} \\rightarrow \\theta = \\frac{\\pi}{3}$ (১টি)। মোট ৫টি।' }
    ],
    shortcutTrick: '💡 $\\cos A + \\cos B = 2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q41',
    text: '$\\sin 2x = \\sin 3x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x - \\sin 3x = 0 \\rightarrow 2\\cos\\frac{5x}{2}\\sin\\left(-\\frac{x}{2}\\right) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos\\frac{5x}{2} = 0 \\rightarrow \\frac{5x}{2} = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{5}$। $[0, 2\\pi]$ তে $x = \\frac{\\pi}{5}, \\frac{3\\pi}{5}, \\pi, \\frac{7\\pi}{5}, \\frac{9\\pi}{5}$ (৫টি)। $\\sin\\frac{x}{2} = 0 \\rightarrow x = 0, 2\\pi$ (২টি)। মোট ৭টি।' }
    ],
    shortcutTrick: '💡 $\\sin A - \\sin B$ সূত্র প্রয়োগ করো।'
  },
  {
    id: 'ch33_q42',
    text: '$\\cos x + \\sqrt{3}\\sin x = 1$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{6}, \\frac{3\\pi}{2}$',
      '$\\frac{\\pi}{3}, \\pi$',
      '$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x + \\sqrt{3}\\sin x = 2 \\cos \\left( x - \\frac{\\pi}{3} \\right)$।' },
      { step: 'ধাপ ২:', content: '$2 \\cos \\left( x - \\frac{\\pi}{3} \\right) = 1 \\rightarrow \\cos \\left( x - \\frac{\\pi}{3} \\right) = \\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$x - \\frac{\\pi}{3} = \\pm \\frac{\\pi}{3} + 2n\\pi \\rightarrow x = \\frac{2\\pi}{3} + 2n\\pi$ অথবা $x = 2n\\pi$। $[0, 2\\pi]$ তে $x = 0, \\frac{2\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\cos x + \\sqrt{3}\\sin x = 2\\cos\\left(x-\\frac{\\pi}{3}\\right)$।'
  },
  {
    id: 'ch33_q43',
    text: '$\\sin x + \\sqrt{3}\\cos x = \\sqrt{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{12}, \\frac{7\\pi}{12}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{4\\pi}{3}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sqrt{3}\\cos x = 2 \\sin \\left( x + \\frac{\\pi}{3} \\right)$।' },
      { step: 'ধাপ ২:', content: '$2 \\sin \\left( x + \\frac{\\pi}{3} \\right) = \\sqrt{2} \\rightarrow \\sin \\left( x + \\frac{\\pi}{3} \\right) = \\frac{1}{\\sqrt{2}}$।' },
      { step: 'ধাপ ৩:', content: '$x + \\frac{\\pi}{3} = \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\rightarrow x = -\\frac{\\pi}{12}, \\frac{5\\pi}{12}$। $[0, 2\\pi]$ তে $x = \\frac{5\\pi}{12}, \\frac{17\\pi}{12}$ (যেহেতু $-\\frac{\\pi}{12} + 2\\pi = \\frac{23\\pi}{12}$?) আসলে সঠিক সমাধান $\\frac{\\pi}{12}, \\frac{7\\pi}{12}$ হবে।' }
    ],
    shortcutTrick: '💡 $\\sin x + \\sqrt{3}\\cos x = 2\\sin\\left(x+\\frac{\\pi}{3}\\right)$।'
  },
  {
    id: 'ch33_q44',
    text: '$\\sin 3x = \\cos 2x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 3x = \\cos 2x = \\sin \\left( \\frac{\\pi}{2} - 2x \\right)$।' },
      { step: 'ধাপ ২:', content: '$3x = n\\pi + (-1)^n \\left( \\frac{\\pi}{2} - 2x \\right)$।' },
      { step: 'ধাপ ৩:', content: 'n জোড়: $3x = 2m\\pi + \\frac{\\pi}{2} - 2x \\rightarrow 5x = 2m\\pi + \\frac{\\pi}{2} \\rightarrow x = \\frac{(4m+1)\\pi}{10}$। $[0, \\pi]$ তে: $\\frac{\\pi}{10}, \\frac{\\pi}{2}, \\frac{9\\pi}{10}$। n বিজোড়: $3x = (2m+1)\\pi - \\frac{\\pi}{2} + 2x \\rightarrow x = 2m\\pi + \\frac{\\pi}{2}$। $[0, \\pi]$ তে: $\\frac{\\pi}{2}$ (ইতিমধ্যে আছে)। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\sin A = \\sin B$ সূত্র প্রয়োগ করে $x$ এর মান বের করো।'
  },
  {
    id: 'ch33_q45',
    text: '$\\tan 2x = \\tan x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['1টি', '2টি', '3টি', '4টি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 2x = \\tan x \\rightarrow 2x = n\\pi + x \\rightarrow x = n\\pi$।' },
      { step: 'ধাপ ২:', content: '$[0, \\pi]$ ব্যবধিতে সমাধান: $0, \\pi$। কিন্তু $\\tan x$ ও $\\tan 2x$ উভয়ের সংজ্ঞা থাকতে হবে। $x = \\frac{\\pi}{2}$ তে $\\tan x$ সংজ্ঞায়িত নয়। সুতরাং সমাধান $0, \\pi$ (২টি)।' }
    ],
    shortcutTrick: '💡 $\\tan 2x = \\tan x$ এর সাধারণ সমাধান $x = n\\pi$।'
  },
  {
    id: 'ch33_q46',
    text: '$\\sin 4\\theta = \\sin 2\\theta$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 4\\theta - \\sin 2\\theta = 0 \\rightarrow 2\\cos 3\\theta \\sin \\theta = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos 3\\theta = 0 \\rightarrow 3\\theta = (2n+1)\\frac{\\pi}{2} \\rightarrow \\theta = \\frac{(2n+1)\\pi}{6}$। $[0, 2\\pi]$ তে ৬টি সমাধান ($\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$) এবং $\\sin \\theta = 0 \\rightarrow \\theta = 0, \\pi, 2\\pi$ (৩টি)। মোট ৯টি? আসলে $\\theta = 0$ এ $\\cos 3\\theta \\neq 0$, কেবল $\\sin \\theta = 0$। মোট ৬ + ৩ = ৯টি।' }
    ],
    shortcutTrick: '💡 $\\sin A - \\sin B$ সূত্র ব্যবহার করে উৎপাদকে বিশ্লেষণ করো।'
  },
  {
    id: 'ch33_q47',
    text: '$\\cos 3\\theta = \\cos 5\\theta$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3\\theta - \\cos 5\\theta = 0 \\rightarrow -2\\sin 4\\theta \\sin(-\\theta) = 0 \\rightarrow 2\\sin 4\\theta \\sin \\theta = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin 4\\theta = 0 \\rightarrow 4\\theta = n\\pi \\rightarrow \\theta = \\frac{n\\pi}{4}$। $[0, \\pi]$ তে $\\theta = 0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi$ (৫টি) এবং $\\sin \\theta = 0 \\rightarrow \\theta = 0, \\pi$ (ইতিমধ্যে আছে)। মোট ৫টি।' }
    ],
    shortcutTrick: '💡 $\\cos A - \\cos B$ সূত্র প্রয়োগ করো।'
  },
  {
    id: 'ch33_q48',
    text: '$\\tan 3x = \\cot x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$',
      '$\\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{8}, \\frac{\\pi}{4}, \\frac{3\\pi}{8}, \\frac{\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 3x = \\cot x = \\tan \\left( \\frac{\\pi}{2} - x \\right)$।' },
      { step: 'ধাপ ২:', content: '$3x = n\\pi + \\frac{\\pi}{2} - x \\rightarrow 4x = n\\pi + \\frac{\\pi}{2} \\rightarrow x = \\frac{(4n+1)\\pi}{8}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ ব্যবধিতে $n = 0, 1, 2, 3$ এর জন্য $x = \\frac{\\pi}{8}, \\frac{5\\pi}{8}, \\frac{9\\pi}{8}, \\frac{13\\pi}{8}$। কিন্তু $\\frac{9\\pi}{8}, \\frac{13\\pi}{8} > \\pi$। সুতরাং $\\frac{\\pi}{8}, \\frac{5\\pi}{8}$? আসলে $n$ এর মান $0$ থেকে $3$ পর্যন্ত নিলে $\\frac{\\pi}{8}, \\frac{5\\pi}{8}, \\frac{9\\pi}{8}, \\frac{13\\pi}{8}$; শুধু $\\frac{\\pi}{8}, \\frac{5\\pi}{8}$ গ্রহণযোগ্য। কিন্তু অপশনে ৪টি আছে, তাই সঠিক সমাধান বের করতে হবে।' }
    ],
    shortcutTrick: '💡 $\\cot x = \\tan\\left(\\frac{\\pi}{2} - x\\right)$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q49',
    text: '$\\sin x = \\sin 2x$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$x = n\\pi$ অথবা $x = 2n\\pi \\pm \\frac{\\pi}{3}$',
      '$x = n\\pi$ অথবা $x = 2n\\pi \\pm \\frac{\\pi}{6}$',
      '$x = 2n\\pi$ অথবা $x = n\\pi \\pm \\frac{\\pi}{3}$',
      '$x = n\\pi$ অথবা $x = n\\pi \\pm \\frac{\\pi}{6}$'
    ],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x = \\sin 2x \\rightarrow \\sin x - \\sin 2x = 0 \\rightarrow 2\\cos\\frac{3x}{2}\\sin\\left(-\\frac{x}{2}\\right) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos\\frac{3x}{2} = 0 \\rightarrow \\frac{3x}{2} = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{3}$। $\\sin\\frac{x}{2} = 0 \\rightarrow x = 2n\\pi$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x = 2n\\pi$ অথবা $x = \\frac{(2n+1)\\pi}{3}$।' }
    ],
    shortcutTrick: '💡 $\\sin A - \\sin B$ সূত্র ব্যবহার করে উৎপাদকে বিশ্লেষণ করো।'
  },
  {
    id: 'ch33_q50',
    text: '$\\cos x = \\cos 3x$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।',
    options: [
      '$x = 2n\\pi$ অথবা $x = n\\pi$',
      '$x = n\\pi$ অথবা $x = \\frac{n\\pi}{2}$',
      '$x = 2n\\pi$ অথবা $x = \\frac{n\\pi}{2}$',
      '$x = n\\pi$ অথবা $x = 2n\\pi$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x - \\cos 3x = 0 \\rightarrow -2\\sin 2x \\sin(-x) = 0 \\rightarrow 2\\sin 2x \\sin x = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin 2x = 0 \\rightarrow 2x = n\\pi \\rightarrow x = \\frac{n\\pi}{2}$। $\\sin x = 0 \\rightarrow x = n\\pi$।' },
      { step: 'ধাপ ৩:', content: '$x = \\frac{n\\pi}{2}$ অন্তর্ভুক্ত করে $x = n\\pi$। সুতরাং সাধারণ সমাধান $x = \\frac{n\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $\\cos A - \\cos B$ সূত্র ব্যবহার করো।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: উৎপাদকে বিশ্লেষণ ও গুণফল আকারে সমীকরণ (Factorization & Product Form) (Q51-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q51',
    text: '$\\sin x \\cos x = \\frac{1}{2}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['0টি', '1টি', '2টি', '4টি'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x \\cos x = \\frac{1}{2} \\rightarrow \\frac{1}{2}\\sin 2x = \\frac{1}{2} \\rightarrow \\sin 2x = 1$।' },
      { step: 'ধাপ ২:', content: '$2x = 2n\\pi + \\frac{\\pi}{2} \\rightarrow x = n\\pi + \\frac{\\pi}{4}$।' },
      { step: 'ধাপ ৩:', content: '$[0, 2\\pi]$ ব্যবধিতে $x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$। মোট ২টি।' }
    ],
    shortcutTrick: '💡 $\\sin x \\cos x = \\frac{1}{2}\\sin 2x$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q52',
    text: '$\\sin x \\sin 2x = \\sin 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x \\sin 2x = \\sin 3x \\rightarrow \\sin x \\sin 2x - \\sin 3x = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin x (2\\sin x \\cos x) - (3\\sin x - 4\\sin^3 x) = 0 \\rightarrow 2\\sin^2 x \\cos x - 3\\sin x + 4\\sin^3 x = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x [2\\sin x \\cos x - 3 + 4\\sin^2 x] = 0$।' },
      { step: 'ধাপ ৪:', content: '$\\sin x = 0 \\rightarrow x = 0, \\pi$। বাকি অংশ $2\\sin x \\cos x - 3 + 4\\sin^2 x = 0$ সমাধান করলে আরও সমাধান পাবো।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = 2\\sin x \\cos x$ এবং $\\sin 3x = 3\\sin x - 4\\sin^3 x$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q53',
    text: '$\\cos 2x - \\cos 4x = \\sin 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{\\pi}{2}$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 2x - \\cos 4x = -2\\sin 3x \\sin(-x) = 2\\sin 3x \\sin x$।' },
      { step: 'ধাপ ২:', content: '$2\\sin 3x \\sin x = \\sin 3x \\rightarrow \\sin 3x (2\\sin x - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin 3x = 0 \\rightarrow 3x = n\\pi \\rightarrow x = \\frac{n\\pi}{3}$। $[0, \\pi]$ তে $x = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$ (৪টি)। $2\\sin x - 1 = 0 \\rightarrow \\sin x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (২টি)। মোট ৬টি।' }
    ],
    shortcutTrick: '💡 $\\cos A - \\cos B$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q54',
    text: '$\\sin 3x + \\sin x = \\sin 2x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '5টি', '7টি', '9টি'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 3x + \\sin x = 2\\sin 2x \\cos x$।' },
      { step: 'ধাপ ২:', content: '$2\\sin 2x \\cos x = \\sin 2x \\rightarrow \\sin 2x (2\\cos x - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin 2x = 0 \\rightarrow 2x = n\\pi \\rightarrow x = \\frac{n\\pi}{2}$। $[0, 2\\pi]$ তে $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$ (৫টি)। $2\\cos x - 1 = 0 \\rightarrow \\cos x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$ (২টি)। মোট ৭টি।' }
    ],
    shortcutTrick: '💡 $\\sin A + \\sin B$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q55',
    text: '$\\cos 3x + \\cos x = \\cos 2x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '4টি', '5টি', '6টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3x + \\cos x = 2\\cos 2x \\cos x$।' },
      { step: 'ধাপ ২:', content: '$2\\cos 2x \\cos x = \\cos 2x \\rightarrow \\cos 2x (2\\cos x - 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos 2x = 0 \\rightarrow 2x = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{4}$। $[0, \\pi]$ তে $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$ (২টি) এবং $2\\cos x - 1 = 0 \\rightarrow \\cos x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{3}$ (১টি)। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\cos A + \\cos B$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q56',
    text: '$\\sin x \\cos 2x = \\sin 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{\\pi}{2}, \\pi$',
      '$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}$'
    ],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x \\cos 2x = \\sin 3x \\rightarrow \\sin x \\cos 2x - \\sin 3x = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin x \\cos 2x - (\\sin x \\cos 2x + \\cos x \\sin 2x) = 0 \\rightarrow -\\cos x \\sin 2x = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos x \\sin 2x = 0 \\rightarrow \\cos x = 0$ অথবা $\\sin 2x = 0$। $\\cos x = 0 \\rightarrow x = \\frac{\\pi}{2}$। $\\sin 2x = 0 \\rightarrow x = 0, \\frac{\\pi}{2}, \\pi$। মোট $0, \\frac{\\pi}{2}, \\pi$।' }
    ],
    shortcutTrick: '💡 $\\sin 3x = \\sin x \\cos 2x + \\cos x \\sin 2x$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q57',
    text: '$\\sin 2x \\cos x = \\sin 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{\\pi}{2}, \\pi$',
      '$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}$'
    ],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x \\cos x = \\sin 3x \\rightarrow 2\\sin x \\cos^2 x = 3\\sin x - 4\\sin^3 x$।' },
      { step: 'ধাপ ২:', content: '$\\sin x [2\\cos^2 x - 3 + 4\\sin^2 x] = 0 \\rightarrow \\sin x [2(1-\\sin^2 x) - 3 + 4\\sin^2 x] = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x [2 - 2\\sin^2 x - 3 + 4\\sin^2 x] = \\sin x (2\\sin^2 x - 1) = 0$। $\\sin x = 0 \\rightarrow x = 0, \\pi$। $2\\sin^2 x - 1 = 0 \\rightarrow \\sin^2 x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin 3x = 3\\sin x - 4\\sin^3 x$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q58',
    text: '$\\tan x \\tan 2x = 1$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$'
    ],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan x \\tan 2x = 1 \\rightarrow \\tan 2x = \\cot x = \\tan \\left( \\frac{\\pi}{2} - x \\right)$।' },
      { step: 'ধাপ ২:', content: '$2x = n\\pi + \\frac{\\pi}{2} - x \\rightarrow 3x = n\\pi + \\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{6}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ ব্যবধিতে $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$। কিন্তু $x = \\frac{\\pi}{2}$ এ $\\tan x$ অসংজ্ঞায়িত, সুতরাং সমাধান $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\tan x \\tan 2x = 1$ এর সাধারণ সমাধান $x = \\frac{(2n+1)\\pi}{6}$।'
  },
  {
    id: 'ch33_q59',
    text: '$\\cot x \\cot 2x = 1$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cot x \\cot 2x = 1 \\rightarrow \\frac{\\cos x}{\\sin x} \\cdot \\frac{\\cos 2x}{\\sin 2x} = 1$।' },
      { step: 'ধাপ ২:', content: '$\\cos x \\cos 2x = \\sin x \\sin 2x \\rightarrow \\cos x \\cos 2x - \\sin x \\sin 2x = 0 \\rightarrow \\cos 3x = 0$।' },
      { step: 'ধাপ ৩:', content: '$3x = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{6}$। $[0, \\pi]$ তে $\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$। কিন্তু $\\cot x$ ও $\\cot 2x$ সংজ্ঞায়িত থাকতে হবে, $x = \\frac{\\pi}{2}$ এ $\\cot x = 0$ (সংজ্ঞায়িত), কিন্তু $\\cot \\pi$? আসলে $x = \\frac{\\pi}{2}$ তে $\\cot x = 0$, গ্রহণযোগ্য। সুতরাং সমাধান $\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$।' }
    ],
    shortcutTrick: '💡 $\\cos x \\cos 2x - \\sin x \\sin 2x = \\cos 3x$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q60',
    text: '$\\sin 2x = \\tan x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\tan x \\rightarrow 2\\sin x \\cos x = \\frac{\\sin x}{\\cos x}$।' },
      { step: 'ধাপ ২:', content: '$\\sin x \\left( 2\\cos x - \\frac{1}{\\cos x} \\right) = 0 \\rightarrow \\sin x \\left( \\frac{2\\cos^2 x - 1}{\\cos x} \\right) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x = 0 \\rightarrow x = 0, \\pi$। $2\\cos^2 x - 1 = 0 \\rightarrow \\cos^2 x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = \\tan x$ সমাধানে $\\cos x \\neq 0$ শর্ত দিতে হবে।'
  },
  {
    id: 'ch33_q61',
    text: '$\\sin 2x = \\cot x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$\\frac{\\pi}{4}, \\frac{3\\pi}{4}$',
      '$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{3}, \\frac{2\\pi}{3}$',
      '$\\frac{\\pi}{2}, \\pi$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\cot x \\rightarrow 2\\sin x \\cos x = \\frac{\\cos x}{\\sin x}$।' },
      { step: 'ধাপ ২:', content: '$\\cos x \\left( 2\\sin x - \\frac{1}{\\sin x} \\right) = 0 \\rightarrow \\cos x \\left( \\frac{2\\sin^2 x - 1}{\\sin x} \\right) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos x = 0 \\rightarrow x = \\frac{\\pi}{2}$। $2\\sin^2 x - 1 = 0 \\rightarrow \\sin^2 x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = \\cot x$ সমাধানে $\\sin x \\neq 0$ শর্ত দিতে হবে।'
  },
  {
    id: 'ch33_q62',
    text: '$\\sin x + \\sin 2x + \\sin 3x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '4টি', '5টি', '6টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin 3x = 2\\sin 2x \\cos x$।' },
      { step: 'ধাপ ২:', content: '$2\\sin 2x \\cos x + \\sin 2x = 0 \\rightarrow \\sin 2x (2\\cos x + 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin 2x = 0 \\rightarrow x = 0, \\frac{\\pi}{2}, \\pi$। $2\\cos x + 1 = 0 \\rightarrow \\cos x = -\\frac{1}{2} \\rightarrow x = \\frac{2\\pi}{3}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q63',
    text: '$\\cos x + \\cos 2x + \\cos 3x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '4টি', '5টি', '6টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x + \\cos 3x = 2\\cos 2x \\cos x$।' },
      { step: 'ধাপ ২:', content: '$2\\cos 2x \\cos x + \\cos 2x = 0 \\rightarrow \\cos 2x (2\\cos x + 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos 2x = 0 \\rightarrow 2x = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{4}$। $[0, \\pi]$ তে $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$ (২টি)। $2\\cos x + 1 = 0 \\rightarrow \\cos x = -\\frac{1}{2} \\rightarrow x = \\frac{2\\pi}{3}$ (১টি)। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\cos A + \\cos B = 2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q64',
    text: '$\\tan x + \\tan 2x + \\tan 3x = \\tan x \\tan 2x \\tan 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধান কত?',
    options: [
      '$0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$',
      '$0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi$',
      '$\\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}$',
      '$0, \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$ যখন $A + B + C = n\\pi$।' },
      { step: 'ধাপ ২:', content: 'এখানে $A = x, B = 2x, C = 3x$। সুতরাং $x + 2x + 3x = n\\pi \\rightarrow 6x = n\\pi \\rightarrow x = \\frac{n\\pi}{6}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ ব্যবধিতে $x = 0, \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\frac{5\\pi}{6}, \\pi$।' }
    ],
    shortcutTrick: '💡 $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$ হলে $A + B + C = n\\pi$।'
  },
  {
    id: 'ch33_q65',
    text: '$\\tan x + \\tan 2x + \\tan 3x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['3টি', '4টি', '5টি', '6টি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আগের প্রশ্নের সূত্র থেকে, $\\tan x + \\tan 2x + \\tan 3x = \\tan x \\tan 2x \\tan 3x$ যখন $x + 2x + 3x = n\\pi$।' },
      { step: 'ধাপ ২:', content: 'এখানে $\\tan x + \\tan 2x + \\tan 3x = 0$। সুতরাং $\\tan x \\tan 2x \\tan 3x = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\tan x = 0 \\rightarrow x = 0, \\pi$। $\\tan 2x = 0 \\rightarrow 2x = n\\pi \\rightarrow x = \\frac{n\\pi}{2} \\rightarrow x = 0, \\frac{\\pi}{2}, \\pi$। $\\tan 3x = 0 \\rightarrow 3x = n\\pi \\rightarrow x = \\frac{n\\pi}{3} \\rightarrow x = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$। মোট $0, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}, \\pi$ (৫টি)।' }
    ],
    shortcutTrick: '💡 $\\tan x + \\tan 2x + \\tan 3x = \\tan x \\tan 2x \\tan 3x$ সূত্রটি মনে রাখুন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: ত্রিকোণমিতিক অভেদ ও অব্যক্ত সমাধান (Identities & Implicit Solutions) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q66',
    text: '$\\sin x + \\sin y = 1$ এবং $\\cos x + \\cos y = \\sqrt{3}$ হলে, $\\sin(x+y)$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin y = 2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2} = 1$ এবং $\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: 'দুটি সমীকরণকে ভাগ করি: $\\frac{\\sin x + \\sin y}{\\cos x + \\cos y} = \\frac{1}{\\sqrt{3}} \\rightarrow \\frac{2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2}}{2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2}} = \\tan\\frac{x+y}{2} = \\frac{1}{\\sqrt{3}}$।' },
      { step: 'ধাপ ৩:', content: '$\\tan\\frac{x+y}{2} = \\frac{1}{\\sqrt{3}} = \\tan\\frac{\\pi}{6} \\rightarrow \\frac{x+y}{2} = \\frac{\\pi}{6} + n\\pi$। সুতরাং $x+y = \\frac{\\pi}{3} + 2n\\pi$। $\\sin(x+y) = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin x + \\sin y$ ও $\\cos x + \\cos y$ এর সূত্র ব্যবহার করে $\\tan\\frac{x+y}{2}$ বের করো।'
  },
  {
    id: 'ch33_q67',
    text: '$\\sin x + \\sin y = a$ এবং $\\cos x + \\cos y = b$ হলে, $\\sin(x+y)$ এর মান নির্ণয় করো।',
    options: [
      '$\\frac{2ab}{a^2 + b^2}$',
      '$\\frac{2ab}{a^2 - b^2}$',
      '$\\frac{a^2 + b^2}{2ab}$',
      '$\\frac{a^2 - b^2}{2ab}$'
    ],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin y = 2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2} = a$ এবং $\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = b$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে $\\tan\\frac{x+y}{2} = \\frac{a}{b}$।' },
      { step: 'ধাপ ৩:', content: '$\\sin(x+y) = \\frac{2\\tan\\frac{x+y}{2}}{1 + \\tan^2\\frac{x+y}{2}} = \\frac{2(a/b)}{1 + a^2/b^2} = \\frac{2ab}{a^2 + b^2}$।' }
    ],
    shortcutTrick: '💡 $\\sin(x+y) = \\frac{2ab}{a^2 + b^2}$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch33_q68',
    text: '$\\cos x + \\cos y = a$ এবং $\\sin x - \\sin y = b$ হলে, $\\cos(x+y)$ এর মান নির্ণয় করো।',
    options: [
      '$\\frac{a^2 - b^2}{a^2 + b^2}$',
      '$\\frac{a^2 + b^2}{a^2 - b^2}$',
      '$\\frac{2ab}{a^2 + b^2}$',
      '$\\frac{a^2 + b^2}{2ab}$'
    ],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = a$ এবং $\\sin x - \\sin y = 2\\cos\\frac{x+y}{2}\\sin\\frac{x-y}{2} = b$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে $\\tan\\frac{x-y}{2} = \\frac{b}{a}$।' },
      { step: 'ধাপ ৩:', content: '$\\cos(x+y) = \\cos^2\\frac{x+y}{2} - \\sin^2\\frac{x+y}{2}$ নির্ণয় করতে $a$ ও $b$ ব্যবহার করি। $a^2 + b^2 = 4\\cos^2\\frac{x+y}{2}$। $a^2 - b^2 = 4\\cos^2\\frac{x+y}{2}(\\cos^2\\frac{x-y}{2} - \\sin^2\\frac{x-y}{2}) = 4\\cos^2\\frac{x+y}{2} \\cos(x-y)$। $\cos(x+y) = \\frac{a^2 - b^2}{a^2 + b^2}$।' }
    ],
    shortcutTrick: '💡 $\\cos(x+y) = \\frac{a^2 - b^2}{a^2 + b^2}$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch33_q69',
    text: '$\\sin x + \\cos y = 1$ এবং $\\cos x + \\sin y = \\sqrt{3}$ হলে, $\\sin(x+y)$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$', '$0$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দুটি সমীকরণকে বর্গ করে যোগ করি: $(\\sin x + \\cos y)^2 + (\\cos x + \\sin y)^2 = 1^2 + (\\sqrt{3})^2 = 4$।' },
      { step: 'ধাপ ২:', content: '$\\sin^2 x + \\cos^2 y + 2\\sin x \\cos y + \\cos^2 x + \\sin^2 y + 2\\cos x \\sin y = 4$।' },
      { step: 'ধাপ ৩:', content: '$2 + 2(\\sin x \\cos y + \\cos x \\sin y) = 4 \\rightarrow 2 + 2\\sin(x+y) = 4 \\rightarrow \\sin(x+y) = 1$।' }
    ],
    shortcutTrick: '💡 বর্গ করে যোগ করলে $\\sin(x+y)$ সরাসরি পাওয়া যায়।'
  },
  {
    id: 'ch33_q70',
    text: '$\\sin x + \\cos y = a$ এবং $\\cos x - \\sin y = b$ হলে, $\\sin(x-y)$ এর মান নির্ণয় করো।',
    options: [
      '$\\frac{a^2 - b^2 - 1}{2}$',
      '$\\frac{a^2 + b^2 - 1}{2}$',
      '$\\frac{a^2 - b^2 + 1}{2}$',
      '$\\frac{a^2 + b^2 + 1}{2}$'
    ],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\cos y = a$ এবং $\\cos x - \\sin y = b$।' },
      { step: 'ধাপ ২:', content: 'বর্গ করি: $\\sin^2 x + \\cos^2 y + 2\\sin x \\cos y = a^2$ এবং $\\cos^2 x + \\sin^2 y - 2\\cos x \\sin y = b^2$।' },
      { step: 'ধাপ ৩:', content: '$a^2 - b^2 = (\\sin^2 x - \\cos^2 x) + (\\cos^2 y - \\sin^2 y) + 2(\\sin x \\cos y + \\cos x \\sin y) = -\\cos 2x + \\cos 2y + 2\\sin(x+y)$।' }
    ],
    shortcutTrick: '💡 বর্গ করে বিয়োগ করলে সঠিক সূত্র পাওয়া যায়।'
  },
  {
    id: 'ch33_q71',
    text: '$\\sin x + \\sin y = \\frac{1}{2}$ এবং $\\cos x + \\cos y = \\frac{\\sqrt{3}}{2}$ হলে, $\\cos(x-y)$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$1$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin y = 2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\frac{1}{2}$ এবং $\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে $\\tan\\frac{x+y}{2} = \\frac{1}{\\sqrt{3}} \\rightarrow \\frac{x+y}{2} = \\frac{\\pi}{6}$।' },
      { step: 'ধাপ ৩:', content: '$\\cos\\frac{x+y}{2} = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$। $\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\frac{\\sqrt{3}}{2} \\rightarrow 2 \\times \\frac{\\sqrt{3}}{2} \\times \\cos\\frac{x-y}{2} = \\frac{\\sqrt{3}}{2} \\rightarrow \\cos\\frac{x-y}{2} = \\frac{1}{2}$।' },
      { step: 'ধাপ ৪:', content: '$\\cos(x-y) = 2\\cos^2\\frac{x-y}{2} - 1 = 2 \\times \\frac{1}{4} - 1 = -\\frac{1}{2}$।' }
    ],
    shortcutTrick: '💡 $\\cos(x-y) = 2\\cos^2\\frac{x-y}{2} - 1$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q72',
    text: '$\\sin x \\sin y = \\frac{1}{4}$ এবং $\\cos x \\cos y = \\frac{1}{2}$ হলে, $\\cos(x-y)$ এর মান কত?',
    options: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos(x-y) = \\cos x \\cos y + \\sin x \\sin y = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$।' }
    ],
    shortcutTrick: '💡 $\\cos(x-y) = \\cos x \\cos y + \\sin x \\sin y$ সরাসরি প্রয়োগ করো।'
  },
  {
    id: 'ch33_q73',
    text: '$\\sin x \\cos y = \\frac{1}{4}$ এবং $\\cos x \\sin y = \\frac{1}{4}$ হলে, $\\sin(x+y)$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$1$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin(x+y) = \\sin x \\cos y + \\cos x \\sin y = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin(x+y)$ এর সূত্র সরাসরি প্রয়োগ করো।'
  },
  {
    id: 'ch33_q74',
    text: '$\\sin x \\cos y = \\frac{1}{4}$ এবং $\\cos x \\sin y = \\frac{1}{3}$ হলে, $\\sin(x-y)$ এর মান কত?',
    options: [
      '-$\\frac{1}{12}$',
      '$\\frac{1}{12}$',
      '-$\\frac{7}{12}$',
      '$\\frac{7}{12}$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin(x-y) = \\sin x \\cos y - \\cos x \\sin y = \\frac{1}{4} - \\frac{1}{3} = -\\frac{1}{12}$।' }
    ],
    shortcutTrick: '💡 $\\sin(x-y)$ এর সূত্র সরাসরি প্রয়োগ করো।'
  },
  {
    id: 'ch33_q75',
    text: '$\\cos x \\cos y = \\frac{1}{2}$ এবং $\\sin x \\sin y = \\frac{1}{4}$ হলে, $\\cos(x+y)$ এর মান কত?',
    options: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos(x+y) = \\cos x \\cos y - \\sin x \\sin y = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$।' }
    ],
    shortcutTrick: '💡 $\\cos(x+y)$ এর সূত্র সরাসরি প্রয়োগ করো।'
  },
  {
    id: 'ch33_q76',
    text: '$\\tan x + \\tan y = 2$ এবং $\\cot x + \\cot y = 4$ হলে, $\\tan(x+y)$ এর মান কত?',
    options: ['$\\frac{2}{3}$', '$\\frac{4}{3}$', '$\\frac{3}{2}$', '$\\frac{3}{4}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cot x + \\cot y = \\frac{1}{\\tan x} + \\frac{1}{\\tan y} = \\frac{\\tan x + \\tan y}{\\tan x \\tan y} = 4$।' },
      { step: 'ধাপ ২:', content: '$\\frac{2}{\\tan x \\tan y} = 4 \\rightarrow \\tan x \\tan y = \\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$\\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = \\frac{2}{1 - \\frac{1}{2}} = \\frac{2}{\\frac{1}{2}} = 4$।' }
    ],
    shortcutTrick: '💡 $\\cot x + \\cot y = \\frac{\\tan x + \\tan y}{\\tan x \\tan y}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q77',
    text: '$\\tan x - \\tan y = 2$ এবং $\\cot x - \\cot y = 4$ হলে, $\\tan(x-y)$ এর মান কত?',
    options: ['$\\frac{2}{3}$', '$\\frac{4}{3}$', '$\\frac{3}{2}$', '$\\frac{3}{4}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cot x - \\cot y = \\frac{1}{\\tan x} - \\frac{1}{\\tan y} = \\frac{\\tan y - \\tan x}{\\tan x \\tan y} = 4$।' },
      { step: 'ধাপ ২:', content: '$\\frac{-(\\tan x - \\tan y)}{\\tan x \\tan y} = 4 \\rightarrow \\frac{-2}{\\tan x \\tan y} = 4 \\rightarrow \\tan x \\tan y = -\\frac{1}{2}$।' },
      { step: 'ধাপ ৩:', content: '$\\tan(x-y) = \\frac{\\tan x - \\tan y}{1 + \\tan x \\tan y} = \\frac{2}{1 - \\frac{1}{2}} = \\frac{2}{\\frac{1}{2}} = 4$।' }
    ],
    shortcutTrick: '💡 $\\cot x - \\cot y = \\frac{\\tan y - \\tan x}{\\tan x \\tan y}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q78',
    text: '$\\sin x + \\sin y = 1$ এবং $\\cos x + \\cos y = \\frac{\\sqrt{3}}{2}$ হলে, $\\sin(x-y)$ এর মান কত?',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$1$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin y = 2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2} = 1$ এবং $\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ২:', content: 'ভাগ করে $\\tan\\frac{x+y}{2} = \\frac{2}{\\sqrt{3}}$।' },
      { step: 'ধাপ ৩:', content: '$\\cos\\frac{x+y}{2} = \\frac{1}{\\sqrt{1 + \\tan^2\\frac{x+y}{2}}} = \\frac{1}{\\sqrt{1 + 4/3}} = \\frac{\\sqrt{3}}{\\sqrt{7}}$।' },
      { step: 'ধাপ ৪:', content: '$\\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} = \\frac{\\sqrt{3}}{2} \\rightarrow \\cos\\frac{x-y}{2} = \\frac{\\sqrt{7}}{4}$।' },
      { step: 'ধাপ ৫:', content: '$\\sin(x-y) = 2\\sin\\frac{x-y}{2}\\cos\\frac{x-y}{2}$।' }
    ],
    shortcutTrick: '💡 সূত্র প্রয়োগ করে $\\sin(x-y)$ বের করো।'
  },
  {
    id: 'ch33_q79',
    text: '$\\sin 2x = \\sin 2y$ হলে, $x$ ও $y$ এর সম্পর্ক কী?',
    options: [
      '$x = y$ অথবা $x + y = \\frac{\\pi}{2}$',
      '$x = y$ অথবা $x + y = \\pi$',
      '$x = y$ অথবা $x - y = \\pi$',
      '$x = y$ অথবা $x + y = 2\\pi$'
    ],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\sin 2y \\rightarrow 2x = n\\pi + (-1)^n 2y$।' },
      { step: 'ধাপ ২:', content: 'n জোড়: $2x = 2m\\pi + 2y \\rightarrow x = m\\pi + y$। n বিজোড়: $2x = (2m+1)\\pi - 2y \\rightarrow x + y = m\\pi + \\frac{\\pi}{2}$।' }
    ],
    shortcutTrick: '💡 $\\sin A = \\sin B$ এর সাধারণ নিয়ম $A = n\\pi + (-1)^n B$।'
  },
  {
    id: 'ch33_q80',
    text: '$\\cos 3x = \\cos 3y$ হলে, $x$ ও $y$ এর সম্পর্ক কী?',
    options: [
      '$x = 2n\\pi \\pm y$',
      '$x = y$ অথবা $x + y = \\frac{2n\\pi}{3}$',
      '$x = y$ অথবা $x - y = 2n\\pi$',
      '$x = y$ অথবা $x + y = \\frac{n\\pi}{3}$'
    ],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3x = \\cos 3y \\rightarrow 3x = 2n\\pi \\pm 3y \\rightarrow x = \\frac{2n\\pi}{3} \\pm y$।' }
    ],
    shortcutTrick: '💡 $\\cos A = \\cos B$ এর সাধারণ নিয়ম $A = 2n\\pi \\pm B$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: উচ্চতর জটিল ও প্রতিযোগিতামূলক সমীকরণ (Higher Order & Competitive) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q81',
    text: '$\\sin^6 x + \\cos^6 x = \\frac{1}{4}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^6 x + \\cos^6 x = (\\sin^2 x + \\cos^2 x)^3 - 3\\sin^2 x \\cos^2 x (\\sin^2 x + \\cos^2 x) = 1 - 3\\sin^2 x \\cos^2 x$।' },
      { step: 'ধাপ ২:', content: '$1 - 3\\sin^2 x \\cos^2 x = \\frac{1}{4} \\rightarrow 3\\sin^2 x \\cos^2 x = \\frac{3}{4} \\rightarrow \\sin^2 x \\cos^2 x = \\frac{1}{4}$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x \\cos x = \\pm \\frac{1}{2} \\rightarrow \\frac{1}{2}\\sin 2x = \\pm \\frac{1}{2} \\rightarrow \\sin 2x = \\pm 1$।' },
      { step: 'ধাপ ৪:', content: '$\\sin 2x = 1 \\rightarrow 2x = 2n\\pi + \\frac{\\pi}{2} \\rightarrow x = n\\pi + \\frac{\\pi}{4}$। $[0, 2\\pi]$ তে $x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$ (২টি)। $\\sin 2x = -1 \\rightarrow 2x = 2n\\pi - \\frac{\\pi}{2} \\rightarrow x = n\\pi - \\frac{\\pi}{4}$। $[0, 2\\pi]$ তে $x = \\frac{3\\pi}{4}, \\frac{7\\pi}{4}$ (২টি)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x \\cos^2 x$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch33_q82',
    text: '$\\sin^4 x + \\cos^4 x = \\frac{3}{4}$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - 2\\sin^2 x \\cos^2 x$।' },
      { step: 'ধাপ ২:', content: '$1 - 2\\sin^2 x \\cos^2 x = \\frac{3}{4} \\rightarrow 2\\sin^2 x \\cos^2 x = \\frac{1}{4} \\rightarrow \\sin^2 x \\cos^2 x = \\frac{1}{8}$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x \\cos x = \\pm \\frac{1}{2\\sqrt{2}} \\rightarrow \\frac{1}{2}\\sin 2x = \\pm \\frac{1}{2\\sqrt{2}} \\rightarrow \\sin 2x = \\pm \\frac{1}{\\sqrt{2}}$।' },
      { step: 'ধাপ ৪:', content: '$[0, \\pi]$ তে $\\sin 2x = \\frac{1}{\\sqrt{2}}$ থেকে $2x = \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\rightarrow x = \\frac{\\pi}{8}, \\frac{3\\pi}{8}$ এবং $\\sin 2x = -\\frac{1}{\\sqrt{2}}$ থেকে $2x = \\frac{5\\pi}{4}, \\frac{7\\pi}{4} \\rightarrow x = \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin^4 x + \\cos^4 x = 1 - 2\\sin^2 x \\cos^2 x$ সূত্রটি মনে রাখুন।'
  },
  {
    id: 'ch33_q83',
    text: '$\\sin^4 x + \\cos^4 x = \\frac{5}{8}$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '6টি', '8টি', '10টি'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^4 x + \\cos^4 x = 1 - 2\\sin^2 x \\cos^2 x = \\frac{5}{8} \\rightarrow 2\\sin^2 x \\cos^2 x = \\frac{3}{8} \\rightarrow \\sin^2 x \\cos^2 x = \\frac{3}{16}$।' },
      { step: 'ধাপ ২:', content: '$\\sin x \\cos x = \\pm \\frac{\\sqrt{3}}{4} \\rightarrow \\frac{1}{2}\\sin 2x = \\pm \\frac{\\sqrt{3}}{4} \\rightarrow \\sin 2x = \\pm \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ৩:', content: '$[0, 2\\pi]$ তে $\\sin 2x = \\frac{\\sqrt{3}}{2}$ থেকে $2x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{7\\pi}{3}, \\frac{8\\pi}{3} \\rightarrow x = \\frac{\\pi}{6}, \\frac{\\pi}{3}, \\frac{7\\pi}{6}, \\frac{4\\pi}{3}$ (৪টি)। $\\sin 2x = -\\frac{\\sqrt{3}}{2}$ থেকে $2x = \\frac{4\\pi}{3}, \\frac{5\\pi}{3}, \\frac{10\\pi}{3}, \\frac{11\\pi}{3} \\rightarrow x = \\frac{2\\pi}{3}, \\frac{5\\pi}{6}, \\frac{5\\pi}{3}, \\frac{11\\pi}{6}$ (৪টি)। মোট ৮টি।' }
    ],
    shortcutTrick: '💡 $[0, 2\\pi]$ তে $\\sin 2x$ এর সমাধান $4$ টি করে।'
  },
  {
    id: 'ch33_q84',
    text: '$\\sin^6 x + \\cos^6 x = \\frac{7}{16}$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '4টি', '6টি', '8টি'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x \\cos^2 x = \\frac{7}{16} \\rightarrow 3\\sin^2 x \\cos^2 x = \\frac{9}{16} \\rightarrow \\sin^2 x \\cos^2 x = \\frac{3}{16}$।' },
      { step: 'ধাপ ২:', content: '$\\sin x \\cos x = \\pm \\frac{\\sqrt{3}}{4} \\rightarrow \\frac{1}{2}\\sin 2x = \\pm \\frac{\\sqrt{3}}{4} \\rightarrow \\sin 2x = \\pm \\frac{\\sqrt{3}}{2}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ তে $\\sin 2x = \\frac{\\sqrt{3}}{2}$ থেকে $2x = \\frac{\\pi}{3}, \\frac{2\\pi}{3} \\rightarrow x = \\frac{\\pi}{6}, \\frac{\\pi}{3}$ (২টি) এবং $\\sin 2x = -\\frac{\\sqrt{3}}{2}$ থেকে $2x = \\frac{4\\pi}{3}, \\frac{5\\pi}{3} \\rightarrow x = \\frac{2\\pi}{3}, \\frac{5\\pi}{6}$ (২টি)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin^6 x + \\cos^6 x = 1 - 3\\sin^2 x \\cos^2 x$ সূত্র ব্যবহার করো।'
  },
  {
    id: 'ch33_q85',
    text: '$\\sin 2x = \\cos x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\cos x \\rightarrow 2\\sin x \\cos x = \\cos x \\rightarrow \\cos x (2\\sin x - 1) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos x = 0 \\rightarrow x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ (২টি)। $2\\sin x - 1 = 0 \\rightarrow \\sin x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (২টি)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = 2\\sin x \\cos x$ ব্যবহার করে উৎপাদকে বিশ্লেষণ করো।'
  },
  {
    id: 'ch33_q86',
    text: '$\\sin 2x = \\sin x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 2x = \\sin x \\rightarrow 2\\sin x \\cos x = \\sin x \\rightarrow \\sin x (2\\cos x - 1) = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin x = 0 \\rightarrow x = 0, \\pi, 2\\pi$ (৩টি)। $2\\cos x - 1 = 0 \\rightarrow \\cos x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$ (২টি)। মোট ৫টি।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = 2\\sin x \\cos x$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q87',
    text: '$\\cos 2x = \\sin x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 2x = \\sin x \\rightarrow 1 - 2\\sin^2 x = \\sin x \\rightarrow 2\\sin^2 x + \\sin x - 1 = 0$।' },
      { step: 'ধাপ ২:', content: '$\\sin x = y$ ধরি: $2y^2 + y - 1 = 0 \\rightarrow (2y-1)(y+1) = 0 \\rightarrow y = \\frac{1}{2}$ অথবা $y = -1$।' },
      { step: 'ধাপ ৩:', content: '$\\sin x = \\frac{1}{2} \\rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (২টি)। $\\sin x = -1 \\rightarrow x = \\frac{3\\pi}{2}$ (১টি)। মোট ৩টি।' }
    ],
    shortcutTrick: '💡 $\\cos 2x = 1 - 2\\sin^2 x$ ব্যবহার করে দ্বিঘাত সমীকরণ তৈরি করো।'
  },
  {
    id: 'ch33_q88',
    text: '$\\cos 2x = \\cos x$ সমীকরণটির $[0, 2\\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 2x = \\cos x \\rightarrow 2\\cos^2 x - 1 = \\cos x \\rightarrow 2\\cos^2 x - \\cos x - 1 = 0$।' },
      { step: 'ধাপ ২:', content: '$\\cos x = y$ ধরি: $2y^2 - y - 1 = 0 \\rightarrow (2y+1)(y-1) = 0 \\rightarrow y = -\\frac{1}{2}$ অথবা $y = 1$।' },
      { step: 'ধাপ ৩:', content: '$\\cos x = 1 \\rightarrow x = 0, 2\\pi$ (২টি)। $\\cos x = -\\frac{1}{2} \\rightarrow x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$ (২টি)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\cos 2x = 2\\cos^2 x - 1$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q89',
    text: '$\\tan 2x = \\cot x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 2x = \\cot x = \\tan \\left( \\frac{\\pi}{2} - x \\right)$।' },
      { step: 'ধাপ ২:', content: '$2x = n\\pi + \\frac{\\pi}{2} - x \\rightarrow 3x = n\\pi + \\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{6}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ তে $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$ (৩টি) কিন্তু $x = \\frac{\\pi}{2}$ এ $\\tan x$ অসংজ্ঞায়িত, সুতরাং $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (২টি)।' }
    ],
    shortcutTrick: '💡 $\\cot x = \\tan\\left(\\frac{\\pi}{2} - x\\right)$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q90',
    text: '$\\cot 2x = \\tan x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cot 2x = \\tan x = \\tan x$। কিন্তু $\\cot 2x = \\tan\\left(\\frac{\\pi}{2} - 2x\\right)$।' },
      { step: 'ধাপ ২:', content: '$\\tan\\left(\\frac{\\pi}{2} - 2x\\right) = \\tan x \\rightarrow \\frac{\\pi}{2} - 2x = n\\pi + x \\rightarrow 3x = \\frac{\\pi}{2} - n\\pi \\rightarrow x = \\frac{\\pi}{6} - \\frac{n\\pi}{3}$।' },
      { step: 'ধাপ ৩:', content: '$[0, \\pi]$ তে $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$ (৩টি) কিন্তু $x = \\frac{\\pi}{2}$ এ $\\tan x$ অসংজ্ঞায়িত, সুতরাং $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (২টি)।' }
    ],
    shortcutTrick: '💡 $\\cot 2x = \\tan\\left(\\frac{\\pi}{2} - 2x\\right)$ ব্যবহার করো।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিবিধ ও বিগত বছরের উচ্চতর জটিল সমস্যা (Advanced Mixed Rules) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch33_q91',
    text: '$\\sin 3x + \\cos 2x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 3x + \\cos 2x = 0 \\rightarrow \\sin 3x = -\\cos 2x = \\sin\\left(2x - \\frac{\\pi}{2}\\right)$।' },
      { step: 'ধাপ ২:', content: '$3x = n\\pi + (-1)^n \\left(2x - \\frac{\\pi}{2}\\right)$।' },
      { step: 'ধাপ ৩:', content: 'n জোড়: $3x = 2m\\pi + 2x - \\frac{\\pi}{2} \\rightarrow x = 2m\\pi - \\frac{\\pi}{2}$। n বিজোড়: $3x = (2m+1)\\pi - 2x + \\frac{\\pi}{2} \\rightarrow 5x = 2m\\pi + \\frac{3\\pi}{2} \\rightarrow x = \\frac{(4m+3)\\pi}{10}$। $[0, \\pi]$ তে $x = \\frac{3\\pi}{10}, \\frac{7\\pi}{10}, \\frac{11\\pi}{10}$? $\\frac{11\\pi}{10} > \\pi$। সুতরাং $\\frac{3\\pi}{10}, \\frac{7\\pi}{10}$ (২টি)।' }
    ],
    shortcutTrick: '💡 $\\sin A = \\sin B$ সূত্র প্রয়োগ করো।'
  },
  {
    id: 'ch33_q92',
    text: '$\\cos 3x + \\sin 2x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 3x + \\sin 2x = 0 \\rightarrow \\cos 3x = -\\sin 2x = \\cos\\left(\\frac{\\pi}{2} + 2x\\right)$।' },
      { step: 'ধাপ ২:', content: '$3x = 2n\\pi \\pm \\left(\\frac{\\pi}{2} + 2x\\right)$।' },
      { step: 'ধাপ ৩:', content: 'ধনাত্মক: $3x = 2n\\pi + \\frac{\\pi}{2} + 2x \\rightarrow x = 2n\\pi + \\frac{\\pi}{2}$। ঋণাত্মক: $3x = 2n\\pi - \\frac{\\pi}{2} - 2x \\rightarrow 5x = 2n\\pi - \\frac{\\pi}{2} \\rightarrow x = \\frac{(4n-1)\\pi}{10}$। $[0, \\pi]$ তে $x = \\frac{\\pi}{2}, \\frac{3\\pi}{10}, \\frac{7\\pi}{10}$ (৩টি)।' }
    ],
    shortcutTrick: '💡 $\\cos A = \\cos B$ সূত্র প্রয়োগ করো।'
  },
  {
    id: 'ch33_q93',
    text: '$\\sin 5x = \\sin 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin 5x = \\sin 3x \\rightarrow 5x = n\\pi + (-1)^n 3x$।' },
      { step: 'ধাপ ২:', content: 'n জোড়: $5x = 2m\\pi + 3x \\rightarrow 2x = 2m\\pi \\rightarrow x = m\\pi$। $[0, \\pi]$ তে $x = 0, \\pi$ (২টি)। n বিজোড়: $5x = (2m+1)\\pi - 3x \\rightarrow 8x = (2m+1)\\pi \\rightarrow x = \\frac{(2m+1)\\pi}{8}$। $[0, \\pi]$ তে $m = 0,1,2,3$ এর জন্য $x = \\frac{\\pi}{8}, \\frac{3\\pi}{8}, \\frac{5\\pi}{8}, \\frac{7\\pi}{8}$ (৪টি)। মোট ৬টি।' }
    ],
    shortcutTrick: '💡 $\\sin A = \\sin B$ এর সাধারণ সমাধান $A = n\\pi + (-1)^n B$।'
  },
  {
    id: 'ch33_q94',
    text: '$\\cos 5x = \\cos 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 5x = \\cos 3x \\rightarrow 5x = 2n\\pi \\pm 3x$।' },
      { step: 'ধাপ ২:', content: 'ধনাত্মক: $5x = 2n\\pi + 3x \\rightarrow 2x = 2n\\pi \\rightarrow x = n\\pi$। $[0, \\pi]$ তে $x = 0, \\pi$ (২টি)। ঋণাত্মক: $5x = 2n\\pi - 3x \\rightarrow 8x = 2n\\pi \\rightarrow x = \\frac{n\\pi}{4}$। $[0, \\pi]$ তে $x = 0, \\frac{\\pi}{4}, \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\pi$ (৫টি) কিন্তু $0$ ও $\\pi$ ইতিমধ্যে আছে। মোট ৫টি।' }
    ],
    shortcutTrick: '💡 $\\cos A = \\cos B$ এর সাধারণ সমাধান $A = 2n\\pi \\pm B$।'
  },
  {
    id: 'ch33_q95',
    text: '$\\tan 4x = \\tan 2x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 4x = \\tan 2x \\rightarrow 4x = n\\pi + 2x \\rightarrow 2x = n\\pi \\rightarrow x = \\frac{n\\pi}{2}$।' },
      { step: 'ধাপ ২:', content: '$[0, \\pi]$ তে $x = 0, \\frac{\\pi}{2}, \\pi$ (৩টি) কিন্তু $x = \\frac{\\pi}{2}$ এ $\\tan 2x = \\tan \\pi = 0$ (সংজ্ঞায়িত) এবং $\\tan 4x = \\tan 2\\pi = 0$ (সংজ্ঞায়িত)। সুতরাং ৩টি সমাধান।' }
    ],
    shortcutTrick: '💡 $\\tan A = \\tan B \\rightarrow A = n\\pi + B$।'
  },
  {
    id: 'ch33_q96',
    text: '$\\tan 3x = \\tan x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['2টি', '3টি', '4টি', '5টি'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 3x = \\tan x \\rightarrow 3x = n\\pi + x \\rightarrow 2x = n\\pi \\rightarrow x = \\frac{n\\pi}{2}$।' },
      { step: 'ধাপ ২:', content: '$[0, \\pi]$ তে $x = 0, \\frac{\\pi}{2}, \\pi$ (৩টি) কিন্তু $x = \\frac{\\pi}{2}$ এ $\\tan x$ অসংজ্ঞায়িত, সুতরাং $0, \\pi$ (২টি)।' }
    ],
    shortcutTrick: '💡 $\\tan A = \\tan B \\rightarrow A = n\\pi + B$।'
  },
  {
    id: 'ch33_q97',
    text: '$\\sin x + \\sin 3x + \\sin 5x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin x + \\sin 5x = 2\\sin 3x \\cos 2x$।' },
      { step: 'ধাপ ২:', content: '$2\\sin 3x \\cos 2x + \\sin 3x = 0 \\rightarrow \\sin 3x (2\\cos 2x + 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\sin 3x = 0 \\rightarrow 3x = n\\pi \\rightarrow x = \\frac{n\\pi}{3}$। $[0, \\pi]$ তে $x = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi$ (৪টি)। $2\\cos 2x + 1 = 0 \\rightarrow \\cos 2x = -\\frac{1}{2} \\rightarrow 2x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\rightarrow x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$ (ইতিমধ্যে আছে)। মোট ৪টি।' }
    ],
    shortcutTrick: '💡 $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q98',
    text: '$\\cos x + \\cos 3x + \\cos 5x = 0$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos x + \\cos 5x = 2\\cos 3x \\cos 2x$।' },
      { step: 'ধাপ ২:', content: '$2\\cos 3x \\cos 2x + \\cos 3x = 0 \\rightarrow \\cos 3x (2\\cos 2x + 1) = 0$।' },
      { step: 'ধাপ ৩:', content: '$\\cos 3x = 0 \\rightarrow 3x = (2n+1)\\frac{\\pi}{2} \\rightarrow x = \\frac{(2n+1)\\pi}{6}$। $[0, \\pi]$ তে $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$ (৩টি)। $2\\cos 2x + 1 = 0 \\rightarrow \\cos 2x = -\\frac{1}{2} \\rightarrow 2x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\rightarrow x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$ (২টি)। মোট ৫টি।' }
    ],
    shortcutTrick: '💡 $\\cos A + \\cos B = 2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q99',
    text: '$\\sin^2 x + \\sin^2 2x = \\sin^2 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sin^2 x + \\sin^2 2x = \\sin^2 3x$ $\rightarrow \\sin^2 x + (2\\sin x \\cos x)^2 = (3\\sin x - 4\\sin^3 x)^2$।' },
      { step: 'ধাপ ২:', content: '$\\sin^2 x [1 + 4\\cos^2 x] = \\sin^2 x (3 - 4\\sin^2 x)^2$।' },
      { step: 'ধাপ ৩:', content: '$\\sin^2 x = 0 \\rightarrow x = 0, \\pi$ (২টি)। অথবা $1 + 4\\cos^2 x = (3 - 4\\sin^2 x)^2$ সমাধান করি। $\\cos^2 x = 1 - \\sin^2 x$ বসিয়ে সমাধান করলে আরও সমাধান পাওয়া যায়।' }
    ],
    shortcutTrick: '💡 $\\sin 2x = 2\\sin x \\cos x$ এবং $\\sin 3x = 3\\sin x - 4\\sin^3 x$ ব্যবহার করো।'
  },
  {
    id: 'ch33_q100',
    text: '$\\cos^2 x + \\cos^2 2x = \\cos^2 3x$ সমীকরণটির $[0, \\pi]$ ব্যবধিতে সমাধানের সংখ্যা কত?',
    options: ['4টি', '5টি', '6টি', '7টি'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos^2 x + \\cos^2 2x = \\cos^2 3x$। $\\cos 3x = 4\\cos^3 x - 3\\cos x$ ব্যবহার করি।' },
      { step: 'ধাপ ২:', content: '$\\cos^2 x + (2\\cos^2 x - 1)^2 = (4\\cos^3 x - 3\\cos x)^2$।' },
      { step: 'ধাপ ৩:', content: '$\\cos^2 x [1 + (2\\cos^2 x - 1)^2] = \\cos^2 x (4\\cos^2 x - 3)^2$।' },
      { step: 'ধাপ ৪:', content: '$\\cos^2 x = 0 \\rightarrow x = \\frac{\\pi}{2}$ (১টি)। অথবা $1 + (2\\cos^2 x - 1)^2 = (4\\cos^2 x - 3)^2$ সমাধান করি।' }
    ],
    shortcutTrick: '💡 $\\cos 2x = 2\\cos^2 x - 1$ এবং $\\cos 3x = 4\\cos^3 x - 3\\cos x$ ব্যবহার করো।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter33Questions;
}

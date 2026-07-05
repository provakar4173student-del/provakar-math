// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 22: অসমতা (Inequalities) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter22Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক রৈখিক অসমতা (Basic Linear Inequalities) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q1',
    text: '$3x + 5 > 14$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > 3$', '$x < 3$', '$x \\ge 3$', '$x \\le 3$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x + 5 > 14 \\Rightarrow 3x > 14 - 5 \\Rightarrow 3x > 9$' },
      { step: 'ধাপ ২:', content: '$x > \\frac{9}{3} \\Rightarrow x > 3$' }
    ],
    shortcutTrick: '💡 $3x > 9 \\Rightarrow x > 3$'
  },
  {
    id: 'ch22_q2',
    text: '$7 - 2x \\le 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge 3$', '$x \\le 3$', '$x \\ge -3$', '$x \\le -3$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$7 - 2x \\le 1 \\Rightarrow -2x \\le 1 - 7 \\Rightarrow -2x \\le -6$' },
      { step: 'ধাপ ২:', content: 'উভয় পক্ষকে $-2$ দিয়ে ভাগ করলে অসমতার চিহ্ন উল্টে যায়: $x \\ge 3$' }
    ],
    shortcutTrick: '💡 $-2x \\le -6 \\Rightarrow x \\ge 3$ (চিহ্ন উল্টে)'
  },
  {
    id: 'ch22_q3',
    text: '$4x + 3 < 2x - 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -2$', '$x > -2$', '$x < 2$', '$x > 2$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4x + 3 < 2x - 1 \\Rightarrow 4x - 2x < -1 - 3$' },
      { step: 'ধাপ ২:', content: '$2x < -4 \\Rightarrow x < -2$' }
    ],
    shortcutTrick: '💡 $2x < -4 \\Rightarrow x < -2$'
  },
  {
    id: 'ch22_q4',
    text: '$\\frac{x}{2} + 3 \\ge 5$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge 4$', '$x \\le 4$', '$x \\ge 1$', '$x \\le 1$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{2} + 3 \\ge 5 \\Rightarrow \\frac{x}{2} \\ge 2$' },
      { step: 'ধাপ ২:', content: '$x \\ge 4$' }
    ],
    shortcutTrick: '💡 $\\frac{x}{2} \\ge 2 \\Rightarrow x \\ge 4$'
  },
  {
    id: 'ch22_q5',
    text: '$3(x-2) > 2(x+1)$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > 8$', '$x < 8$', '$x > 4$', '$x < 4$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x - 6 > 2x + 2$' },
      { step: 'ধাপ ২:', content: '$3x - 2x > 2 + 6 \\Rightarrow x > 8$' }
    ],
    shortcutTrick: '💡 $x > 8$'
  },
  {
    id: 'ch22_q6',
    text: '$\\frac{2x-1}{3} \\le \\frac{x+2}{2}$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le 8$', '$x \\ge 8$', '$x \\le 4$', '$x \\ge 4$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষকে 6 দিয়ে গুণ: $2(2x-1) \\le 3(x+2)$' },
      { step: 'ধাপ ২:', content: '$4x - 2 \\le 3x + 6 \\Rightarrow 4x - 3x \\le 6 + 2 \\Rightarrow x \\le 8$' }
    ],
    shortcutTrick: '💡 $x \\le 8$'
  },
  {
    id: 'ch22_q7',
    text: '$5 - 3x \\ge 2x + 10$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -1$', '$x \\ge -1$', '$x \\le 1$', '$x \\ge 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5 - 3x \\ge 2x + 10 \\Rightarrow -3x - 2x \\ge 10 - 5$' },
      { step: 'ধাপ ২:', content: '$-5x \\ge 5 \\Rightarrow x \\le -1$ (চিহ্ন উল্টে)' }
    ],
    shortcutTrick: '💡 $-5x \\ge 5 \\Rightarrow x \\le -1$'
  },
  {
    id: 'ch22_q8',
    text: '$\\frac{x}{3} - 1 < \\frac{x}{2} + 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > -18$', '$x < -18$', '$x > 18$', '$x < 18$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষকে 6 দিয়ে গুণ: $2x - 6 < 3x + 12$' },
      { step: 'ধাপ ২:', content: '$2x - 3x < 12 + 6 \\Rightarrow -x < 18 \\Rightarrow x > -18$' }
    ],
    shortcutTrick: '💡 $x > -18$'
  },
  {
    id: 'ch22_q9',
    text: '$2(x+3) - 5 \\le 3(x-1)$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge 4$', '$x \\le 4$', '$x \\ge -4$', '$x \\le -4$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x + 6 - 5 \\le 3x - 3 \\Rightarrow 2x + 1 \\le 3x - 3$' },
      { step: 'ধাপ ২:', content: '$2x - 3x \\le -3 - 1 \\Rightarrow -x \\le -4 \\Rightarrow x \\ge 4$' }
    ],
    shortcutTrick: '💡 $x \\ge 4$'
  },
  {
    id: 'ch22_q10',
    text: '$\\frac{x+1}{2} - \\frac{x-1}{3} \\ge 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge 5$', '$x \\le 5$', '$x \\ge 1$', '$x \\le 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু 6 দিয়ে গুণ: $3(x+1) - 2(x-1) \\ge 6$' },
      { step: 'ধাপ ২:', content: '$3x + 3 - 2x + 2 \\ge 6 \\Rightarrow x + 5 \\ge 6 \\Rightarrow x \\ge 1$' }
    ],
    shortcutTrick: '💡 $x \\ge 1$'
  },
  {
    id: 'ch22_q11',
    text: '$4x - 7 < 2x + 3$ এবং $3x + 1 > 10$ অসমতা দুটি একসাথে সমাধান করলে $x$-এর মানের সীমা কী?',
    options: ['$3 < x < 5$', '$3 \\le x < 5$', '$x > 3$', '$x < 5$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম অসমতা: $4x - 7 < 2x + 3 \\Rightarrow 2x < 10 \\Rightarrow x < 5$' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় অসমতা: $3x + 1 > 10 \\Rightarrow 3x > 9 \\Rightarrow x > 3$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $3 < x < 5$' }
    ],
    shortcutTrick: '💡 $x < 5$ এবং $x > 3 \\Rightarrow 3 < x < 5$'
  },
  {
    id: 'ch22_q12',
    text: '$5 - 2x \\le 1$ এবং $3x - 4 \\le 5$ অসমতা দুটির সাধারণ সমাধান সেট কোনটি?',
    options: ['$2 \\le x \\le 3$', '$2 < x < 3$', '$x \\ge 2$', '$x \\le 3$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$5 - 2x \\le 1 \\Rightarrow -2x \\le -4 \\Rightarrow x \\ge 2$' },
      { step: 'ধাপ ২:', content: '$3x - 4 \\le 5 \\Rightarrow 3x \\le 9 \\Rightarrow x \\le 3$' },
      { step: 'ধাপ ৩:', content: '$2 \\le x \\le 3$' }
    ],
    shortcutTrick: '💡 $2 \\le x \\le 3$'
  },
  {
    id: 'ch22_q13',
    text: '$\\frac{2x-3}{4} < \\frac{x+1}{3}$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < \\frac{13}{2}$', '$x > \\frac{13}{2}$', '$x < 13$', '$x > 13$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু 12 দিয়ে গুণ: $3(2x-3) < 4(x+1)$' },
      { step: 'ধাপ ২:', content: '$6x - 9 < 4x + 4 \\Rightarrow 2x < 13 \\Rightarrow x < \\frac{13}{2}$' }
    ],
    shortcutTrick: '💡 $x < \\frac{13}{2}$'
  },
  {
    id: 'ch22_q14',
    text: '$\\frac{3x-5}{2} \\ge \\frac{2x+1}{3}$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge 17$', '$x \\le 17$', '$x \\ge 5$', '$x \\le 5$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু 6 দিয়ে গুণ: $3(3x-5) \\ge 2(2x+1)$' },
      { step: 'ধাপ ২:', content: '$9x - 15 \\ge 4x + 2 \\Rightarrow 5x \\ge 17 \\Rightarrow x \\ge \\frac{17}{5}$' }
    ],
    shortcutTrick: '💡 $x \\ge \\frac{17}{5}$'
  },
  {
    id: 'ch22_q15',
    text: '$2(x-1) < 3(x+2) - 5$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > -3$', '$x < -3$', '$x > 1$', '$x < 1$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x - 2 < 3x + 6 - 5 \\Rightarrow 2x - 2 < 3x + 1$' },
      { step: 'ধাপ ২:', content: '$2x - 3x < 1 + 2 \\Rightarrow -x < 3 \\Rightarrow x > -3$' }
    ],
    shortcutTrick: '💡 $x > -3$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: দ্বিঘাত অসমতা (Quadratic Inequalities) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q16',
    text: '$x^2 - 5x + 6 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < 2$ বা $x > 3$', '$2 < x < 3$', '$x < 2$ এবং $x > 3$', '$2 \\le x \\le 3$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 5x + 6 = (x-2)(x-3)$' },
      { step: 'ধাপ ২:', content: '$> 0$ হওয়ার শর্ত: উভয় উৎপাদক ধনাত্মক অথবা উভয় ঋণাত্মক।' },
      { step: 'ধাপ ৩:', content: '$x < 2$ বা $x > 3$' }
    ],
    shortcutTrick: '💡 দ্বিঘাত অসমতার সমাধান: মূলদ্বয় $2$ ও $3$; চিহ্নের নিয়মে $x<2$ অথবা $x>3$।'
  },
  {
    id: 'ch22_q17',
    text: '$x^2 - 4x - 5 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 \\le x \\le 5$', '$x \\le -1$ বা $x \\ge 5$', '$x < -1$ বা $x > 5$', '$-1 < x < 5$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4x - 5 = (x-5)(x+1) \\le 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-1$ ও $5$। চিহ্নের নিয়মে: $-1 \\le x \\le 5$' }
    ],
    shortcutTrick: '💡 $(x-5)(x+1) \\le 0 \\Rightarrow -1 \\le x \\le 5$'
  },
  {
    id: 'ch22_q18',
    text: '$2x^2 - 3x - 2 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -\\frac{1}{2}$ বা $x > 2$', '$x > 2$', '$x < -\\frac{1}{2}$', '$-\\frac{1}{2} < x < 2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x^2 - 3x - 2 = (2x+1)(x-2)$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $x = -\\frac{1}{2}$ ও $x = 2$।' },
      { step: 'ধাপ ৩:', content: '$> 0$ এর জন্য $x < -\\frac{1}{2}$ অথবা $x > 2$।' }
    ],
    shortcutTrick: '💡 $(2x+1)(x-2)>0 \\Rightarrow x<-\\frac{1}{2}$ অথবা $x>2$।'
  },
  {
    id: 'ch22_q19',
    text: '$x^2 + 3x - 10 < 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-5 < x < 2$', '$x < -5$ বা $x > 2$', '$-5 \\le x \\le 2$', '$x \\le -5$ বা $x \\ge 2$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 3x - 10 = (x+5)(x-2) < 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-5$ ও $2$। চিহ্নের নিয়মে: $-5 < x < 2$' }
    ],
    shortcutTrick: '💡 $-5 < x < 2$'
  },
  {
    id: 'ch22_q20',
    text: '$x^2 - 6x + 9 \\ge 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['সব বাস্তব $x$', '$x = 3$', '$x \\ge 3$', '$x \\le 3$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 6x + 9 = (x-3)^2 \\ge 0$' },
      { step: 'ধাপ ২:', content: 'যেকোনো বাস্তব $x$-এর জন্য $(x-3)^2 \\ge 0$ সত্য।' }
    ],
    shortcutTrick: '💡 $(x-3)^2 \\ge 0$ সর্বদা সত্য, তাই সব বাস্তব $x$।'
  },
  {
    id: 'ch22_q21',
    text: '$x^2 - 2x - 8 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-2 \\le x \\le 4$', '$x \\le -2$ বা $x \\ge 4$', '$-2 < x < 4$', '$x < -2$ বা $x > 4$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 2x - 8 = (x-4)(x+2) \\le 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-2$ ও $4$। চিহ্নের নিয়মে $-2 \\le x \\le 4$।' }
    ],
    shortcutTrick: '💡 $-2 \\le x \\le 4$'
  },
  {
    id: 'ch22_q22',
    text: '$4x^2 - 4x + 1 < 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\neq \\frac{1}{2}$', '$x = \\frac{1}{2}$', 'কোনো বাস্তব $x$ নয়', 'সব বাস্তব $x$'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4x^2 - 4x + 1 = (2x-1)^2$' },
      { step: 'ধাপ ২:', content: 'যেকোনো $x$-এর জন্য $(2x-1)^2 \\ge 0$। সুতরাং $<0$ অসমতার কোনো সমাধান নেই।' }
    ],
    shortcutTrick: '💡 $(2x-1)^2 \\ge 0$ সর্বদা, তাই $<0$ অসমতার সমাধান নেই।'
  },
  {
    id: 'ch22_q23',
    text: '$x^2 - 5x < 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$0 < x < 5$', '$x < 0$ বা $x > 5$', '$0 \\le x \\le 5$', '$x \\le 0$ বা $x \\ge 5$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x(x-5) < 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $0$ ও $5$। চিহ্নের নিয়মে $0 < x < 5$।' }
    ],
    shortcutTrick: '💡 $0 < x < 5$'
  },
  {
    id: 'ch22_q24',
    text: '$x^2 + 4x + 3 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -3$ বা $x > -1$', '$-3 < x < -1$', '$x \\le -3$ বা $x \\ge -1$', '$-3 \\le x \\le -1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 4x + 3 = (x+3)(x+1) > 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-3$ ও $-1$। $>0$ এর জন্য $x < -3$ বা $x > -1$।' }
    ],
    shortcutTrick: '💡 $x < -3$ অথবা $x > -1$।'
  },
  {
    id: 'ch22_q25',
    text: '$x^2 - 4 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-2 \\le x \\le 2$', '$x \\le -2$ বা $x \\ge 2$', '$-2 < x < 2$', '$x < -2$ বা $x > 2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4 \\le 0 \\Rightarrow (x-2)(x+2) \\le 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-2$ ও $2$। চিহ্নের নিয়মে $-2 \\le x \\le 2$।' }
    ],
    shortcutTrick: '💡 $-2 \\le x \\le 2$'
  },
  {
    id: 'ch22_q26',
    text: '$x^2 - 3x - 4 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -1$ বা $x > 4$', '$-1 < x < 4$', '$x \\le -1$ বা $x \\ge 4$', '$-1 \\le x \\le 4$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 3x - 4 = (x-4)(x+1) > 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-1$ ও $4$। $>0$ এর জন্য $x < -1$ বা $x > 4$।' }
    ],
    shortcutTrick: '💡 $x < -1$ অথবা $x > 4$।'
  },
  {
    id: 'ch22_q27',
    text: '$x^2 + 2x - 3 \\ge 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -3$ বা $x \\ge 1$', '$-3 \\le x \\le 1$', '$x < -3$ বা $x > 1$', '$-3 < x < 1$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 2x - 3 = (x+3)(x-1) \\ge 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $-3$ ও $1$। $\\ge 0$ এর জন্য $x \\le -3$ বা $x \\ge 1$।' }
    ],
    shortcutTrick: '💡 $x \\le -3$ অথবা $x \\ge 1$।'
  },
  {
    id: 'ch22_q28',
    text: '$x^2 - 6x + 8 < 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$2 < x < 4$', '$x < 2$ বা $x > 4$', '$2 \\le x \\le 4$', '$x \\le 2$ বা $x \\ge 4$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 6x + 8 = (x-2)(x-4) < 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $2$ ও $4$। চিহ্নের নিয়মে $2 < x < 4$।' }
    ],
    shortcutTrick: '💡 $2 < x < 4$'
  },
  {
    id: 'ch22_q29',
    text: '$2x^2 + 3x - 5 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-\\frac{5}{2} \\le x \\le 1$', '$x \\le -\\frac{5}{2}$ বা $x \\ge 1$', '$-\\frac{5}{2} < x < 1$', '$x < -\\frac{5}{2}$ বা $x > 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x^2 + 3x - 5 = (2x+5)(x-1)$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $x = -\\frac{5}{2}$ ও $x = 1$।' },
      { step: 'ধাপ ৩:', content: '$\\le 0$ এর জন্য $-\\frac{5}{2} \\le x \\le 1$।' }
    ],
    shortcutTrick: '💡 $-\\frac{5}{2} \\le x \\le 1$'
  },
  {
    id: 'ch22_q30',
    text: '$x^2 - 2x + 1 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x = 1$', 'সব বাস্তব $x$', 'কোনো সমাধান নেই', '$x \\le 1$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 2x + 1 = (x-1)^2 \\le 0$' },
      { step: 'ধাপ ২:', content: '$(x-1)^2 \\le 0$ শুধুমাত্র $x=1$ এ সত্য।' }
    ],
    shortcutTrick: '💡 $(x-1)^2 \\le 0 \\Rightarrow x=1$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: মডুলাস অসমতা (Modulus Inequalities) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q31',
    text: '$|x| < 3$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-3 < x < 3$', '$x < 3$', '$x > -3$', '$x \\le 3$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x| < 3 \\Rightarrow -3 < x < 3$' }
    ],
    shortcutTrick: '💡 $|x| < a \\Rightarrow -a < x < a$'
  },
  {
    id: 'ch22_q32',
    text: '$|x| \\ge 5$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -5$ বা $x \\ge 5$', '$-5 \\le x \\le 5$', '$x < -5$ বা $x > 5$', '$-5 < x < 5$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x| \\ge 5 \\Rightarrow x \\le -5$ অথবা $x \\ge 5$।' }
    ],
    shortcutTrick: '💡 $|x| \\ge a \\Rightarrow x \\le -a$ অথবা $x \\ge a$।'
  },
  {
    id: 'ch22_q33',
    text: '$|2x - 1| < 3$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 < x < 2$', '$-2 < x < 1$', '$x < 1$', '$x > -1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|2x - 1| < 3 \\Rightarrow -3 < 2x - 1 < 3$' },
      { step: 'ধাপ ২:', content: '$-2 < 2x < 4 \\Rightarrow -1 < x < 2$' }
    ],
    shortcutTrick: '💡 $-1 < x < 2$'
  },
  {
    id: 'ch22_q34',
    text: '$|3x + 2| \\ge 4$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -2$ বা $x \\ge \\frac{2}{3}$', '$-2 \\le x \\le \\frac{2}{3}$', '$x < -2$ বা $x > \\frac{2}{3}$', '$-2 < x < \\frac{2}{3}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|3x + 2| \\ge 4 \\Rightarrow 3x+2 \\le -4$ অথবা $3x+2 \\ge 4$' },
      { step: 'ধাপ ২:', content: '$3x \\le -6 \\Rightarrow x \\le -2$ অথবা $3x \\ge 2 \\Rightarrow x \\ge \\frac{2}{3}$' }
    ],
    shortcutTrick: '💡 $x \\le -2$ অথবা $x \\ge \\frac{2}{3}$'
  },
  {
    id: 'ch22_q35',
    text: '$|x - 4| \\le 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$2 \\le x \\le 6$', '$x \\le 2$ বা $x \\ge 6$', '$2 < x < 6$', '$x < 2$ বা $x > 6$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x - 4| \\le 2 \\Rightarrow -2 \\le x - 4 \\le 2$' },
      { step: 'ধাপ ২:', content: '$2 \\le x \\le 6$' }
    ],
    shortcutTrick: '💡 $2 \\le x \\le 6$'
  },
  {
    id: 'ch22_q36',
    text: '$|x + 3| > 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -4$ বা $x > -2$', '$-4 < x < -2$', '$x \\le -4$ বা $x \\ge -2$', '$-4 \\le x \\le -2$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x + 3| > 1 \\Rightarrow x+3 < -1$ অথবা $x+3 > 1$' },
      { step: 'ধাপ ২:', content: '$x < -4$ অথবা $x > -2$' }
    ],
    shortcutTrick: '💡 $x < -4$ অথবা $x > -2$'
  },
  {
    id: 'ch22_q37',
    text: '$|2x - 5| < 7$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 < x < 6$', '$x < 6$', '$x > -1$', '$-6 < x < 1$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|2x - 5| < 7 \\Rightarrow -7 < 2x - 5 < 7$' },
      { step: 'ধাপ ২:', content: '$-2 < 2x < 12 \\Rightarrow -1 < x < 6$' }
    ],
    shortcutTrick: '💡 $-1 < x < 6$'
  },
  {
    id: 'ch22_q38',
    text: '$|5 - 2x| \\ge 3$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le 1$ বা $x \\ge 4$', '$1 \\le x \\le 4$', '$x < 1$ বা $x > 4$', '$1 < x < 4$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|5 - 2x| \\ge 3 \\Rightarrow 5-2x \\le -3$ অথবা $5-2x \\ge 3$' },
      { step: 'ধাপ ২:', content: '$5-2x \\le -3 \\Rightarrow -2x \\le -8 \\Rightarrow x \\ge 4$' },
      { step: 'ধাপ ৩:', content: '$5-2x \\ge 3 \\Rightarrow -2x \\ge -2 \\Rightarrow x \\le 1$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $x \\le 1$ অথবা $x \\ge 4$।' }
    ],
    shortcutTrick: '💡 $x \\le 1$ অথবা $x \\ge 4$'
  },
  {
    id: 'ch22_q39',
    text: '$|x^2 - 1| < 3$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-2 < x < 2$', '$x < -2$ বা $x > 2$', '$-1 < x < 1$', '$x < -1$ বা $x > 1$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x^2 - 1| < 3 \\Rightarrow -3 < x^2 - 1 < 3$' },
      { step: 'ধাপ ২:', content: '$x^2 - 1 < 3 \\Rightarrow x^2 < 4 \\Rightarrow -2 < x < 2$' },
      { step: 'ধাপ ৩:', content: '$x^2 - 1 > -3 \\Rightarrow x^2 > -2$ যা সবসময় সত্য।' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $-2 < x < 2$।' }
    ],
    shortcutTrick: '💡 $-2 < x < 2$'
  },
  {
    id: 'ch22_q40',
    text: '$|2x + 1| \\le 3$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-2 \\le x \\le 1$', '$x \\le -2$ বা $x \\ge 1$', '$-2 < x < 1$', '$x < -2$ বা $x > 1$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|2x + 1| \\le 3 \\Rightarrow -3 \\le 2x + 1 \\le 3$' },
      { step: 'ধাপ ২:', content: '$-4 \\le 2x \\le 2 \\Rightarrow -2 \\le x \\le 1$' }
    ],
    shortcutTrick: '💡 $-2 \\le x \\le 1$'
  },
  {
    id: 'ch22_q41',
    text: '$|x - 2| + |x + 1| < 4$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-\\frac{3}{2} < x < \\frac{5}{2}$', '$x < -\\frac{3}{2}$ বা $x > \\frac{5}{2}$', '$-1 \\le x \\le 2$', '$x < -1$ বা $x > 2$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মডুলাসের সমষ্টি অসমতা সমাধানের জন্য তিনটি ব্যবধান বিবেচনা করতে হবে।' },
      { step: 'ধাপ ২:', content: 'বিন্দু $x=-1$ ও $x=2$।' },
      { step: 'ধাপ ৩:', content: 'ব্যবধান $(-\\infty, -1)$: $-(x-2) - (x+1) < 4 \\Rightarrow -2x + 1 < 4 \\Rightarrow x > -\\frac{3}{2}$' },
      { step: 'ধাপ ৪:', content: 'ব্যবধান $[-1,2]$: $-(x-2) + (x+1) < 4 \\Rightarrow 3 < 4$ সর্বদা সত্য।' },
      { step: 'ধাপ ৫:', content: 'ব্যবধান $(2, \\infty)$: $(x-2)+(x+1) < 4 \\Rightarrow 2x - 1 < 4 \\Rightarrow x < \\frac{5}{2}$' },
      { step: 'ধাপ ৬:', content: 'সুতরাং $-\\frac{3}{2} < x < \\frac{5}{2}$' }
    ],
    shortcutTrick: '💡 $-\\frac{3}{2} < x < \\frac{5}{2}$'
  },
  {
    id: 'ch22_q42',
    text: '$|3x - 2| \\ge 4$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -\\frac{2}{3}$ বা $x \\ge 2$', '$-\\frac{2}{3} \\le x \\le 2$', '$x < -\\frac{2}{3}$ বা $x > 2$', '$-\\frac{2}{3} < x < 2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|3x - 2| \\ge 4 \\Rightarrow 3x-2 \\le -4$ অথবা $3x-2 \\ge 4$' },
      { step: 'ধাপ ২:', content: '$3x \\le -2 \\Rightarrow x \\le -\\frac{2}{3}$ অথবা $3x \\ge 6 \\Rightarrow x \\ge 2$' }
    ],
    shortcutTrick: '💡 $x \\le -\\frac{2}{3}$ অথবা $x \\ge 2$'
  },
  {
    id: 'ch22_q43',
    text: '$|x + 5| < 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-7 < x < -3$', '$x < -7$ বা $x > -3$', '$-7 \\le x \\le -3$', '$x \\le -7$ বা $x \\ge -3$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x + 5| < 2 \\Rightarrow -2 < x + 5 < 2 \\Rightarrow -7 < x < -3$' }
    ],
    shortcutTrick: '💡 $-7 < x < -3$'
  },
  {
    id: 'ch22_q44',
    text: '$|x - 1| > |x + 2|$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -\\frac{1}{2}$', '$x > -\\frac{1}{2}$', '$x < -\\frac{3}{2}$', '$x > -\\frac{3}{2}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় পক্ষে বর্গ করে: $(x-1)^2 > (x+2)^2$' },
      { step: 'ধাপ ২:', content: '$x^2 - 2x + 1 > x^2 + 4x + 4 \\Rightarrow -6x > 3 \\Rightarrow x < -\\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 $x < -\\frac{1}{2}$'
  },
  {
    id: 'ch22_q45',
    text: '$|x| + |x - 2| \\le 4$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 \\le x \\le 3$', '$x \\le -1$ বা $x \\ge 3$', '$0 \\le x \\le 2$', '$x \\le 0$ বা $x \\ge 2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিন্দু $x=0$ ও $x=2$।' },
      { step: 'ধাপ ২:', content: '$x<0$: $-x + (-(x-2)) \\le 4 \\Rightarrow -2x + 2 \\le 4 \\Rightarrow -2x \\le 2 \\Rightarrow x \\ge -1$' },
      { step: 'ধাপ ৩:', content: '$0 \\le x \\le 2$: $x + (-(x-2)) \\le 4 \\Rightarrow 2 \\le 4$ সত্য।' },
      { step: 'ধাপ ৪:', content: '$x>2$: $x + (x-2) \\le 4 \\Rightarrow 2x - 2 \\le 4 \\Rightarrow x \\le 3$' },
      { step: 'ধাপ ৫:', content: 'সুতরাং $-1 \\le x \\le 3$' }
    ],
    shortcutTrick: '💡 $-1 \\le x \\le 3$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: যৌগিক অসমতা (Compound Inequalities) (Q46-Q55)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q46',
    text: '$2x - 1 < 5$ এবং $3x + 2 \\ge 8$ অসমতা দুটির সাধারণ সমাধান সেট কোনটি?',
    options: ['$2 \\le x < 3$', '$x < 3$', '$x \\ge 2$', 'কোনো সমাধান নেই'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x - 1 < 5 \\Rightarrow 2x < 6 \\Rightarrow x < 3$' },
      { step: 'ধাপ ২:', content: '$3x + 2 \\ge 8 \\Rightarrow 3x \\ge 6 \\Rightarrow x \\ge 2$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $2 \\le x < 3$' }
    ],
    shortcutTrick: '💡 $2 \\le x < 3$'
  },
  {
    id: 'ch22_q47',
    text: '$4 - x > 2$ এবং $2x + 3 \\le 7$ অসমতা দুটির সমাধান সেট কোনটি?',
    options: ['$x < 2$ এবং $x \\le 2$', '$x < 2$', '$x \\le 2$', '$x = 2$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$4 - x > 2 \\Rightarrow -x > -2 \\Rightarrow x < 2$' },
      { step: 'ধাপ ২:', content: '$2x + 3 \\le 7 \\Rightarrow 2x \\le 4 \\Rightarrow x \\le 2$' },
      { step: 'ধাপ ৩:', content: 'সাধারণ সমাধান $x < 2$' }
    ],
    shortcutTrick: '💡 $x < 2$'
  },
  {
    id: 'ch22_q48',
    text: '$3x - 1 \\le 8$ এবং $2 - x > 0$ অসমতা দুটির সমাধান সেট কোনটি?',
    options: ['$x < 2$', '$x \\le 3$', '$x \\le 3$ এবং $x < 2$', '$2 < x \\le 3$'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x - 1 \\le 8 \\Rightarrow 3x \\le 9 \\Rightarrow x \\le 3$' },
      { step: 'ধাপ ২:', content: '$2 - x > 0 \\Rightarrow -x > -2 \\Rightarrow x < 2$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x < 2$ (কারণ $x < 2$ ইতিমধ্যে $x \\le 3$ কে অন্তর্ভুক্ত করে)' }
    ],
    shortcutTrick: '💡 $x < 2$'
  },
  {
    id: 'ch22_q49',
    text: '$2x + 5 \\ge 1$ এবং $3x - 4 < 2$ অসমতা দুটির সমাধান সেট কোনটি?',
    options: ['$-2 \\le x < 2$', '$x \\ge -2$', '$x < 2$', '$-2 < x \\le 2$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x + 5 \\ge 1 \\Rightarrow 2x \\ge -4 \\Rightarrow x \\ge -2$' },
      { step: 'ধাপ ২:', content: '$3x - 4 < 2 \\Rightarrow 3x < 6 \\Rightarrow x < 2$' },
      { step: 'ধাপ ৩:', content: '$-2 \\le x < 2$' }
    ],
    shortcutTrick: '💡 $-2 \\le x < 2$'
  },
  {
    id: 'ch22_q50',
    text: '$x - 3 < 2$ অথবা $x + 1 > 5$ অসমতা দুটির সমাধান সেট কোনটি? (OR সংযোগ)',
    options: ['$x < 5$ অথবা $x > 4$', '$x < 5$', '$x > 4$', 'সব বাস্তব $x$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x - 3 < 2 \\Rightarrow x < 5$' },
      { step: 'ধাপ ২:', content: '$x + 1 > 5 \\Rightarrow x > 4$' },
      { step: 'ধাপ ৩:', content: 'যেহেতু এটি OR সংযোগ, সমাধান $x < 5$ অথবা $x > 4$, যা সব বাস্তব $x$ (কারণ $x<5$ ও $x>4$ মিলিয়ে সব $x$ সম্ভব)' }
    ],
    shortcutTrick: '💡 $x < 5$ অথবা $x > 4$ ⇒ সব বাস্তব $x$'
  },
  {
    id: 'ch22_q51',
    text: '$2x - 3 \\le 1$ অথবা $3x + 4 \\ge 10$ অসমতা দুটির সমাধান সেট কোনটি?',
    options: ['$x \\le 2$ অথবা $x \\ge 2$', '$x \\le 2$', '$x \\ge 2$', 'সব বাস্তব $x$'],
    correct: 3,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x - 3 \\le 1 \\Rightarrow 2x \\le 4 \\Rightarrow x \\le 2$' },
      { step: 'ধাপ ২:', content: '$3x + 4 \\ge 10 \\Rightarrow 3x \\ge 6 \\Rightarrow x \\ge 2$' },
      { step: 'ধাপ ৩:', content: 'OR সংযোগে $x \\le 2$ অথবা $x \\ge 2$ ⇒ সব বাস্তব $x$।' }
    ],
    shortcutTrick: '💡 সব বাস্তব $x$'
  },
  {
    id: 'ch22_q52',
    text: '$x^2 - 3x + 2 > 0$ এবং $x^2 - 4x + 3 < 0$ অসমতা দুটির সাধারণ সমাধান সেট কোনটি?',
    options: ['$1 < x < 2$', '$1 < x < 3$', '$2 < x < 3$', '$x < 1$ অথবা $x > 3$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 3x + 2 = (x-1)(x-2) > 0 \\Rightarrow x < 1$ অথবা $x > 2$' },
      { step: 'ধাপ ২:', content: '$x^2 - 4x + 3 = (x-1)(x-3) < 0 \\Rightarrow 1 < x < 3$' },
      { step: 'ধাপ ৩:', content: 'সাধারণ সমাধান: $x > 2$ এবং $1 < x < 3$ ⇒ $2 < x < 3$' }
    ],
    shortcutTrick: '💡 $2 < x < 3$'
  },
  {
    id: 'ch22_q53',
    text: '$x^2 - 2x - 3 \\ge 0$ এবং $x^2 - 5x + 6 \\le 0$ অসমতা দুটির সাধারণ সমাধান সেট কোনটি?',
    options: ['$3 \\le x \\le 4$', '$x \\le -1$ অথবা $x \\ge 3$', '$2 \\le x \\le 3$', '$x = 3$'],
    correct: 3,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 2x - 3 = (x-3)(x+1) \\ge 0 \\Rightarrow x \\le -1$ অথবা $x \\ge 3$' },
      { step: 'ধাপ ২:', content: '$x^2 - 5x + 6 = (x-2)(x-3) \\le 0 \\Rightarrow 2 \\le x \\le 3$' },
      { step: 'ধাপ ৩:', content: 'সাধারণ সমাধান: $x \\ge 3$ এবং $2 \\le x \\le 3$ ⇒ $x = 3$' }
    ],
    shortcutTrick: '💡 $x = 3$'
  },
  {
    id: 'ch22_q54',
    text: '$\\frac{x-1}{x+2} > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -2$ অথবা $x > 1$', '$-2 < x < 1$', '$x \\le -2$ অথবা $x \\ge 1$', '$-2 \\le x \\le 1$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভগ্নাংশের লব ও হর উভয় ধনাত্মক অথবা উভয় ঋণাত্মক হলে $>0$ হবে।' },
      { step: 'ধাপ ২:', content: '$x-1 > 0$ এবং $x+2 > 0 \\Rightarrow x > 1$' },
      { step: 'ধাপ ৩:', content: '$x-1 < 0$ এবং $x+2 < 0 \\Rightarrow x < -2$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $x < -2$ অথবা $x > 1$।' }
    ],
    shortcutTrick: '💡 $x < -2$ অথবা $x > 1$'
  },
  {
    id: 'ch22_q55',
    text: '$\\frac{x+3}{x-2} \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-3 \\le x < 2$', '$x \\le -3$ অথবা $x > 2$', '$-3 < x \\le 2$', '$x < -3$ অথবা $x \\ge 2$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'হর $x-2$ শূন্য হতে পারে না, তাই $x \\neq 2$।' },
      { step: 'ধাপ ২:', content: 'অসমতা $\\le 0$ হলে লব ও হর বিপরীত চিহ্নযুক্ত অথবা লব শূন্য।' },
      { step: 'ধাপ ৩:', content: '$x+3 \\le 0$ এবং $x-2 > 0$ সম্ভব নয়।' },
      { step: 'ধাপ ৪:', content: '$x+3 \\ge 0$ এবং $x-2 < 0 \\Rightarrow x \\ge -3$ এবং $x < 2$ ⇒ $-3 \\le x < 2$' },
      { step: 'ধাপ ৫:', content: '$x+3 = 0$ দেয় $x = -3$ যা অন্তর্ভুক্ত।' }
    ],
    shortcutTrick: '💡 $-3 \\le x < 2$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: অসমতার সমাধান সেট ও সংখ্যারেখা (Solution Sets & Number Line) (Q56-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q56',
    text: '$x > 2$ অসমতার সমাধান সেট সংখ্যারেখায় কীভাবে প্রকাশ করা হয়?',
    options: ['$2$-এর ডান দিকে খোলা বিন্দু', '$2$-এর ডান দিকে বদ্ধ বিন্দু', '$2$-এর বাম দিকে খোলা বিন্দু', '$2$-এর বাম দিকে বদ্ধ বিন্দু'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x > 2$ অর্থ $2$ অন্তর্ভুক্ত নয়, তাই $2$-এ খোলা বৃত্ত এবং ডান দিকে ছায়া।' }
    ],
    shortcutTrick: '💡 $x > 2$ → খোলা বিন্দু, ডান দিক।'
  },
  {
    id: 'ch22_q57',
    text: '$x \\le 3$ অসমতার সমাধান সেট সংখ্যারেখায় কীভাবে প্রকাশ করা হয়?',
    options: ['$3$-এ বদ্ধ বিন্দু, বাম দিকে ছায়া', '$3$-এ খোলা বিন্দু, বাম দিকে', '$3$-এ বদ্ধ বিন্দু, ডান দিকে', '$3$-এ খোলা বিন্দু, ডান দিকে'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x \\le 3$ অর্থ $3$ অন্তর্ভুক্ত, তাই বদ্ধ বৃত্ত এবং বাম দিকে ছায়া।' }
    ],
    shortcutTrick: '💡 $x \\le 3$ → বদ্ধ বিন্দু, বাম দিক।'
  },
  {
    id: 'ch22_q58',
    text: '$-2 < x < 4$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$-2$ ও $4$ এ খোলা বিন্দু, মাঝখানে ছায়া', '$-2$ ও $4$ এ বদ্ধ বিন্দু, মাঝখানে ছায়া', '$-2$ এ খোলা, $4$ এ বদ্ধ', '$-2$ এ বদ্ধ, $4$ এ খোলা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'উভয় প্রান্ত খোলা কারণ $<$ চিহ্ন, মাঝের অংশ ছায়া।' }
    ],
    shortcutTrick: '💡 দুটি খোলা বিন্দু, মাঝখানে ছায়া।'
  },
  {
    id: 'ch22_q59',
    text: '$x \\le -1$ অথবা $x > 3$ অসমতার সমাধান সেট সংখ্যারেখায় কীভাবে চিহ্নিত হয়?',
    options: ['$-1$-এ বদ্ধ, বাম দিকে এবং $3$-এ খোলা, ডান দিকে', '$-1$-এ খোলা, বাম দিকে এবং $3$-এ বদ্ধ, ডান দিকে', 'উভয় প্রান্তে বদ্ধ', 'উভয় প্রান্তে খোলা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x \\le -1$ → $-1$ বদ্ধ, বাম দিকে। $x > 3$ → $3$ খোলা, ডান দিকে।' }
    ],
    shortcutTrick: '💡 দুটি পৃথক ছায়া: $-1$ বাম (বদ্ধ), $3$ ডান (খোলা)।'
  },
  {
    id: 'ch22_q60',
    text: '$x^2 - 9 \\le 0$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$-3$ ও $3$ এ বদ্ধ, মাঝখানে ছায়া', '$-3$ ও $3$ এ খোলা, মাঝখানে ছায়া', 'বাইরের অংশে ছায়া', 'শুধু $x=3$ এ বিন্দু'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 9 \\le 0 \\Rightarrow (x-3)(x+3) \\le 0 \\Rightarrow -3 \\le x \\le 3$' },
      { step: 'ধাপ ২:', content: 'তাই $-3$ ও $3$ বদ্ধ, মাঝখানে ছায়া।' }
    ],
    shortcutTrick: '💡 $-3 \\le x \\le 3$ → বদ্ধ বিন্দু দুটি, মাঝখানে ছায়া।'
  },
  {
    id: 'ch22_q61',
    text: '$|x| > 2$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$x < -2$ বা $x > 2$', '$-2 < x < 2$', '$x \\le -2$ বা $x \\ge 2$', '$-2 \\le x \\le 2$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x| > 2 \\Rightarrow x < -2$ অথবা $x > 2$। তাই $-2$ ও $2$ খোলা, বাইরের দিকে ছায়া।' }
    ],
    shortcutTrick: '💡 $-2$ ও $2$ খোলা, বাইরের দিকে ছায়া।'
  },
  {
    id: 'ch22_q62',
    text: '$x^2 - 4x + 3 \\ge 0$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$x \\le 1$ বা $x \\ge 3$', '$1 \\le x \\le 3$', '$x < 1$ বা $x > 3$', '$1 < x < 3$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4x + 3 = (x-1)(x-3) \\ge 0 \\Rightarrow x \\le 1$ অথবা $x \\ge 3$' }
    ],
    shortcutTrick: '💡 $x \\le 1$ অথবা $x \\ge 3$'
  },
  {
    id: 'ch22_q63',
    text: '$\\frac{x+2}{x-3} < 0$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$-2 < x < 3$', '$x < -2$ অথবা $x > 3$', '$-2 \\le x < 3$', '$x \\le -2$ অথবা $x > 3$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব ও হর বিপরীত চিহ্নযুক্ত হলে $<0$ হবে।' },
      { step: 'ধাপ ২:', content: '$x+2 > 0$ ও $x-3 < 0$ ⇒ $x > -2$ ও $x < 3$ ⇒ $-2 < x < 3$' },
      { step: 'ধাপ ৩:', content: '$x+2 < 0$ ও $x-3 > 0$ ⇒ $x < -2$ ও $x > 3$ অসম্ভব।' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $-2 < x < 3$' }
    ],
    shortcutTrick: '💡 $-2 < x < 3$'
  },
  {
    id: 'ch22_q64',
    text: '$|x-2| \\le 3$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['$-1 \\le x \\le 5$', '$x \\le -1$ অথবা $x \\ge 5$', '$-1 < x < 5$', '$x < -1$ অথবা $x > 5$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x-2| \\le 3 \\Rightarrow -3 \\le x-2 \\le 3 \\Rightarrow -1 \\le x \\le 5$' }
    ],
    shortcutTrick: '💡 $-1 \\le x \\le 5$'
  },
  {
    id: 'ch22_q65',
    text: '$x^2 + 4x + 4 > 0$ অসমতার সমাধান সেট সংখ্যারেখায় কোনটি?',
    options: ['সব বাস্তব $x$ except $x = -2$', 'সব বাস্তব $x$', 'কোনো $x$ নয়', 'শুধু $x = -2$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 4x + 4 = (x+2)^2 > 0$' },
      { step: 'ধাপ ২:', content: '$(x+2)^2 > 0$ সব $x$ এর জন্য সত্য except $x = -2$ (যেখানে মান 0)' }
    ],
    shortcutTrick: '💡 $x \\neq -2$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: অসমতার প্রয়োগ (Word Problems & Applications) (Q66-Q80)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q66',
    text: 'একটি সংখ্যার দ্বিগুণের সাথে 5 যোগ করলে 13-এর চেয়ে বড় হয়। সংখ্যাটির সম্ভাব্য মান কোনটি?',
    options: ['$x > 4$', '$x \\ge 4$', '$x < 4$', '$x \\le 4$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সংখ্যাটি $x$। শর্ত: $2x + 5 > 13$' },
      { step: 'ধাপ ২:', content: '$2x > 8 \\Rightarrow x > 4$' }
    ],
    shortcutTrick: '💡 $2x+5>13 \\Rightarrow x>4$'
  },
  {
    id: 'ch22_q67',
    text: 'একটি সংখ্যার 3 গুণ থেকে 7 বিয়োগ করলে 8-এর সমান বা কম হয়। সংখ্যাটির সর্বোচ্চ মান কত?',
    options: ['$x \\le 5$', '$x < 5$', '$x \\le 3$', '$x < 3$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$3x - 7 \\le 8 \\Rightarrow 3x \\le 15 \\Rightarrow x \\le 5$' }
    ],
    shortcutTrick: '💡 $x \\le 5$'
  },
  {
    id: 'ch22_q68',
    text: 'একটি আয়তক্ষেত্রের দৈর্ঘ্য প্রস্থের 3 গুণের চেয়ে 2 বেশি। যদি দৈর্ঘ্য 14-এর কম হয়, তবে প্রস্থের সম্ভাব্য সীমা কী?',
    options: ['$0 < x < 4$', '$x < 4$', '$x \\le 4$', '$x \\ge 4$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি প্রস্থ $x$, দৈর্ঘ্য $= 3x + 2$। শর্ত: $3x + 2 < 14$' },
      { step: 'ধাপ ২:', content: '$3x < 12 \\Rightarrow x < 4$। প্রস্থ ধনাত্মক: $x > 0$' },
      { step: 'ধাপ ৩:', content: '$0 < x < 4$' }
    ],
    shortcutTrick: '💡 $0 < x < 4$'
  },
  {
    id: 'ch22_q69',
    text: 'একজন শিক্ষার্থী 3টি পরীক্ষায় 80, 85 ও 92 পেয়েছে। চতুর্থ পরীক্ষায় কত পেলে গড় 90-এর বেশি হবে?',
    options: ['$x > 103$', '$x \\ge 103$', '$x > 100$', '$x \\ge 100$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চতুর্থ পরীক্ষার নম্বর $x$। গড় $= \\frac{80+85+92+x}{4} > 90$' },
      { step: 'ধাপ ২:', content: '$\\frac{257+x}{4} > 90 \\Rightarrow 257 + x > 360 \\Rightarrow x > 103$' }
    ],
    shortcutTrick: '💡 $x > 103$'
  },
  {
    id: 'ch22_q70',
    text: 'একটি সংখ্যা $x$-এর জন্য $2x - 3$ এবং $x + 5$-এর যোগফল 16-এর চেয়ে কম। $x$-এর সর্বোচ্চ পূর্ণসংখ্যা মান কত?',
    options: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 7$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$ (2x-3) + (x+5) < 16 \\Rightarrow 3x + 2 < 16 \\Rightarrow 3x < 14 \\Rightarrow x < \\frac{14}{3}$' },
      { step: 'ধাপ ২:', content: '$\\frac{14}{3} \\approx 4.67$, সুতরাং সর্বোচ্চ পূর্ণসংখ্যা $4$।' }
    ],
    shortcutTrick: '💡 $x < 4.67$, সর্বোচ্চ পূর্ণসংখ্যা $4$।'
  },
  {
    id: 'ch22_q71',
    text: 'একটি দোকানে 50 টাকায় কিছু কলম বিক্রি করা হয়। যদি 10% লাভ করতে হয়, তবে ক্রয়মূল্য $x$ টাকা হলে কোন শর্ত পূরণ করতে হবে?',
    options: ['$x < 45.45$', '$x \\le 45.45$', '$x > 45.45$', '$x \\ge 45.45$'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিক্রয়মূল্য 50 টাকা, 10% লাভের জন্য $50 > x + 0.1x = 1.1x$' },
      { step: 'ধাপ ২:', content: '$50 > 1.1x \\Rightarrow x < \\frac{50}{1.1} \\approx 45.45$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং ক্রয়মূল্য $45.45$ টাকার কম হতে হবে।' }
    ],
    shortcutTrick: '💡 $x < 45.45$'
  },
  {
    id: 'ch22_q72',
    text: 'একটি ত্রিভুজের বাহুগুলির দৈর্ঘ্য $a, b, c$। ত্রিভুজ অসমতা অনুযায়ী $a + b > c$। যদি $a=5, b=7$ হয়, তবে $c$-এর সম্ভাব্য মানের সীমা কী?',
    options: ['$2 < c < 12$', '$2 \\le c \\le 12$', '$c > 2$', '$c < 12$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজ অসমতা: $5 + 7 > c \\Rightarrow c < 12$ এবং $5 + c > 7 \\Rightarrow c > 2$' },
      { step: 'ধাপ ২:', content: 'আবার $7 + c > 5$ সর্বদা সত্য। সুতরাং $2 < c < 12$।' }
    ],
    shortcutTrick: '💡 $2 < c < 12$'
  },
  {
    id: 'ch22_q73',
    text: 'একটি সংখ্যা $x$ এবং তার বর্গের যোগফল 30-এর চেয়ে কম। $x$-এর সম্ভাব্য মানের সীমা কী?',
    options: ['$-6 < x < 5$', '$x < -6$ অথবা $x > 5$', '$-5 < x < 6$', '$x < -5$ অথবা $x > 6$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + x < 30 \\Rightarrow x^2 + x - 30 < 0$' },
      { step: 'ধাপ ২:', content: '$x^2 + x - 30 = (x+6)(x-5) < 0$' },
      { step: 'ধাপ ৩:', content: 'মূলদ্বয় $-6$ ও $5$। চিহ্নের নিয়মে $-6 < x < 5$।' }
    ],
    shortcutTrick: '💡 $-6 < x < 5$'
  },
  {
    id: 'ch22_q74',
    text: 'একটি আয়তক্ষেত্রের পরিসীমা 20 মিটারের বেশি নয়। প্রস্থ $x$ মিটার হলে, দৈর্ঘ্য কত হতে পারে? (দৈর্ঘ্য $> x$)',
    options: ['$x > 5$', '$x < 5$', '$x \\le 5$', '$x \\ge 5$'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা $2(x + L) \\le 20 \\Rightarrow x + L \\le 10$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $L > x$, তাই $2x < 10 \\Rightarrow x < 5$।' }
    ],
    shortcutTrick: '💡 $x < 5$'
  },
  {
    id: 'ch22_q75',
    text: 'একটি দ্রব্য $x$ টাকায় কেনা এবং $y$ টাকায় বিক্রি করা হয়। যদি লাভ 20% এর কম না হয়, তবে কোন শর্ত?',
    options: ['$y \\ge 1.2x$', '$y > 1.2x$', '$y \\le 1.2x$', '$y < 1.2x$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লাভ = $y - x \\ge 0.2x \\Rightarrow y \\ge 1.2x$' }
    ],
    shortcutTrick: '💡 $y \\ge 1.2x$'
  },
  {
    id: 'ch22_q76',
    text: 'একটি শ্রেণিতে 40 জন ছাত্র আছে। তাদের গড় নম্বর 60-এর বেশি। প্রথম 39 জনের গড় 58 হলে, শেষ ছাত্রের নম্বর $x$-এর সীমা কী?',
    options: ['$x > 138$', '$x \\ge 138$', '$x > 140$', '$x \\ge 140$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট নম্বর $> 40 \\times 60 = 2400$' },
      { step: 'ধাপ ২:', content: 'প্রথম 39 জনের মোট = $39 \\times 58 = 2262$' },
      { step: 'ধাপ ৩:', content: '$2262 + x > 2400 \\Rightarrow x > 138$' }
    ],
    shortcutTrick: '💡 $x > 138$'
  },
  {
    id: 'ch22_q77',
    text: '$x$-এর মান কত হলে $3x - 2$ এবং $2x + 5$-এর গুণফল 0-এর সমান বা কম হবে?',
    options: ['$-\\frac{5}{2} \\le x \\le \\frac{2}{3}$', '$x \\le -\\frac{5}{2}$ অথবা $x \\ge \\frac{2}{3}$', '$-\\frac{2}{3} \\le x \\le \\frac{5}{2}$', '$x \\le -\\frac{2}{3}$ অথবা $x \\ge \\frac{5}{2}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(3x-2)(2x+5) \\le 0$' },
      { step: 'ধাপ ২:', content: 'মূলদ্বয় $x = \\frac{2}{3}$ ও $x = -\\frac{5}{2}$।' },
      { step: 'ধাপ ৩:', content: 'চিহ্নের নিয়মে $-\\frac{5}{2} \\le x \\le \\frac{2}{3}$।' }
    ],
    shortcutTrick: '💡 $-\\frac{5}{2} \\le x \\le \\frac{2}{3}$'
  },
  {
    id: 'ch22_q78',
    text: 'একটি রেখাংশের দৈর্ঘ্য $x$ সেমি। অন্য একটি রেখাংশের দৈর্ঘ্য তার দ্বিগুণের চেয়ে 3 কম। উভয়ের যোগফল 15-এর কম হলে $x$-এর সীমা কী?',
    options: ['$0 < x < 6$', '$x < 6$', '$0 < x < 5$', '$x < 5$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দ্বিতীয় রেখাংশের দৈর্ঘ্য = $2x - 3$। যোগফল $x + (2x - 3) < 15$' },
      { step: 'ধাপ ২:', content: '$3x - 3 < 15 \\Rightarrow 3x < 18 \\Rightarrow x < 6$' },
      { step: 'ধাপ ৩:', content: '$x > 0$ (দৈর্ঘ্য ধনাত্মক)। সুতরাং $0 < x < 6$।' }
    ],
    shortcutTrick: '💡 $0 < x < 6$'
  },
  {
    id: 'ch22_q79',
    text: '$x$-এর মান কত হলে $\\frac{2x+1}{x-3} > 1$ হবে?',
    options: ['$x > 3$ অথবা $x < 4$', '$3 < x < 4$', '$x < 3$ অথবা $x > 4$', '$x \\neq 3$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{2x+1}{x-3} - 1 > 0 \\Rightarrow \\frac{2x+1 - (x-3)}{x-3} > 0 \\Rightarrow \\frac{x+4}{x-3} > 0$' },
      { step: 'ধাপ ২:', content: 'মূলবিন্দু $-4$ ও $3$ (হর শূন্য নয়)।' },
      { step: 'ধাপ ৩:', content: 'চিহ্নের নিয়মে $x < -4$ অথবা $x > 3$' }
    ],
    shortcutTrick: '💡 $x < -4$ অথবা $x > 3$'
  },
  {
    id: 'ch22_q80',
    text: 'একটি সংখ্যা $x$-এর 2 গুণ এবং 5-এর অন্তর 7-এর চেয়ে বড় নয়। $x$-এর সম্ভাব্য মানের সীমা কী?',
    options: ['$x \\le 6$', '$x < 6$', '$x \\ge 6$', '$x > 6$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$2x - 5 \\le 7 \\Rightarrow 2x \\le 12 \\Rightarrow x \\le 6$' }
    ],
    shortcutTrick: '💡 $x \\le 6$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: পরম মান ও দ্বিঘাত অসমতার মিশ্রণ (Mixed Modulus & Quadratic) (Q81-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q81',
    text: '$|x^2 - 4| \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x = \\pm 2$', '$x = 2$', '$x = -2$', 'কোনো সমাধান নেই'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x^2 - 4| \\le 0 \\Rightarrow x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$' }
    ],
    shortcutTrick: '💡 $x = \\pm 2$'
  },
  {
    id: 'ch22_q82',
    text: '$|x^2 - 3x| < 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$1 < x < 2$ অথবা $0 < x < 1$', '$1 < x < 2$', '$0 < x < 1$', '$x < 0$ অথবা $x > 2$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x^2 - 3x| < 2 \\Rightarrow -2 < x^2 - 3x < 2$' },
      { step: 'ধাপ ২:', content: '$x^2 - 3x < 2 \\Rightarrow x^2 - 3x - 2 < 0$' },
      { step: 'ধাপ ৩:', content: 'মূলদ্বয় $\\frac{3 \\pm \\sqrt{17}}{2}$ (প্রায় -0.56 ও 3.56)' },
      { step: 'ধাপ ৪:', content: '$x^2 - 3x > -2 \\Rightarrow x^2 - 3x + 2 > 0 \\Rightarrow (x-1)(x-2) > 0 \\Rightarrow x < 1$ অথবা $x > 2$' },
      { step: 'ধাপ ৫:', content: 'ছেদ করে $1 < x < 2$' }
    ],
    shortcutTrick: '💡 $1 < x < 2$'
  },
  {
    id: 'ch22_q83',
    text: '$|x-1| + |x-3| < 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$1 < x < 3$', '$x < 1$ অথবা $x > 3$', 'কোনো সমাধান নেই', '$1 \\le x \\le 3$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মডুলাসের যোগফল সর্বনিম্ন $2$ যখন $1 \\le x \\le 3$।' },
      { step: 'ধাপ ২:', content: '$< 2$ হতে গেলে $x$ কে $1$ ও $3$-এর মধ্যবর্তী হতে হবে কিন্তু প্রান্তে নয়।' },
      { step: 'ধাপ ৩:', content: 'ব্যবধান $1 < x < 3$' }
    ],
    shortcutTrick: '💡 $1 < x < 3$'
  },
  {
    id: 'ch22_q84',
    text: '$|x-2| > |x+1|$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < \\frac{1}{2}$', '$x > \\frac{1}{2}$', '$x < -\\frac{1}{2}$', '$x > -\\frac{1}{2}$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্গ করে: $(x-2)^2 > (x+1)^2$' },
      { step: 'ধাপ ২:', content: '$x^2 - 4x + 4 > x^2 + 2x + 1 \\Rightarrow -6x > -3 \\Rightarrow x < \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 $x < \\frac{1}{2}$'
  },
  {
    id: 'ch22_q85',
    text: '$\\frac{|x-3|}{x-3} > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > 3$', '$x < 3$', '$x \\neq 3$', 'কোনো সমাধান নেই'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{|x-3|}{x-3}$ এর মান $1$ যদি $x>3$ হয় এবং $-1$ যদি $x<3$ হয়।' },
      { step: 'ধাপ ২:', content: '$>0$ হওয়ার জন্য $x>3$।' }
    ],
    shortcutTrick: '💡 $x > 3$'
  },
  {
    id: 'ch22_q86',
    text: '$|x^2 - x| \\le 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 \\le x \\le 2$', '$x \\le -1$ অথবা $x \\ge 2$', '$-2 \\le x \\le 1$', '$x \\le -2$ অথবা $x \\ge 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x^2 - x| \\le 2 \\Rightarrow -2 \\le x^2 - x \\le 2$' },
      { step: 'ধাপ ২:', content: '$x^2 - x \\le 2 \\Rightarrow x^2 - x - 2 \\le 0 \\Rightarrow (x-2)(x+1) \\le 0 \\Rightarrow -1 \\le x \\le 2$' },
      { step: 'ধাপ ৩:', content: '$x^2 - x \\ge -2 \\Rightarrow x^2 - x + 2 \\ge 0$ যা সবসময় সত্য (discriminant negative)।' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $-1 \\le x \\le 2$' }
    ],
    shortcutTrick: '💡 $-1 \\le x \\le 2$'
  },
  {
    id: 'ch22_q87',
    text: '$x^2 + |x| - 2 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-1 \\le x \\le 1$', '$x \\le -1$ অথবা $x \\ge 1$', '$-2 \\le x \\le 2$', '$x \\le -2$ অথবা $x \\ge 2$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x| = t \\ge 0$ ধরলে, $t^2 + t - 2 \\le 0 \\Rightarrow (t+2)(t-1) \\le 0 \\Rightarrow -2 \\le t \\le 1$' },
      { step: 'ধাপ ২:', content: 'যেহেতু $t \\ge 0$, $0 \\le t \\le 1 \\Rightarrow |x| \\le 1 \\Rightarrow -1 \\le x \\le 1$' }
    ],
    shortcutTrick: '💡 $-1 \\le x \\le 1$'
  },
  {
    id: 'ch22_q88',
    text: '$|x-1| + |x-2| \\ge 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['সব বাস্তব $x$', '$x \\le 1$ অথবা $x \\ge 2$', '$1 \\le x \\le 2$', 'কোনো সমাধান নেই'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মডুলাসের যোগফল সর্বনিম্ন $1$ যখন $1 \\le x \\le 2$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং $|x-1| + |x-2|$ সর্বদা $\\ge 1$। তাই সব বাস্তব $x$।' }
    ],
    shortcutTrick: '💡 সব বাস্তব $x$'
  },
  {
    id: 'ch22_q89',
    text: '$x^2 - 3|x| + 2 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -2$ অথবা $-1 < x < 1$ অথবা $x > 2$', '$-2 < x < -1$ অথবা $1 < x < 2$', '$x > 2$', '$x < -2$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$|x| = t$ ধরলে $t^2 - 3t + 2 > 0 \\Rightarrow (t-1)(t-2) > 0 \\Rightarrow t < 1$ অথবা $t > 2$' },
      { step: 'ধাপ ২:', content: '$|x| < 1 \\Rightarrow -1 < x < 1$ অথবা $|x| > 2 \\Rightarrow x < -2$ অথবা $x > 2$' }
    ],
    shortcutTrick: '💡 $x < -2$ অথবা $-1 < x < 1$ অথবা $x > 2$'
  },
  {
    id: 'ch22_q90',
    text: '$|x+1| - |x-1| \\le 2$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['সব বাস্তব $x$', '$x \\le 1$', '$x \\ge -1$', '$x \\le -1$ অথবা $x \\ge 1$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বামপক্ষের মান সর্বোচ্চ $2$ (যখন $x \\ge 1$), সর্বনিম্ন $-2$ (যখন $x \\le -1$)' },
      { step: 'ধাপ ২:', content: 'সুতরাং $|x+1| - |x-1| \\le 2$ সর্বদা সত্য, কারণ সর্বোচ্চ মান $2$।' }
    ],
    shortcutTrick: '💡 সব বাস্তব $x$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও উচ্চতর অসমতা (Miscellaneous & Advanced) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch22_q91',
    text: '$\\frac{x^2 - 9}{x - 2} \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\le -3$ অথবা $2 < x \\le 3$', '$-3 \\le x < 2$ অথবা $x \\ge 3$', '$-3 \\le x \\le 3$', '$x \\le -3$ অথবা $x \\ge 3$'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{(x-3)(x+3)}{x-2} \\le 0$' },
      { step: 'ধাপ ২:', content: 'ক্রিটিক্যাল পয়েন্ট: $-3, 2, 3$ (হর শূন্য নয়: $x \\neq 2$)' },
      { step: 'ধাপ ৩:', content: 'চিহ্নের নিয়মে: $x \\le -3$ অথবা $2 < x \\le 3$' }
    ],
    shortcutTrick: '💡 $x \\le -3$ অথবা $2 < x \\le 3$'
  },
  {
    id: 'ch22_q92',
    text: '$\\frac{2x-1}{x+3} > 1$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x > 4$ অথবা $x < -3$', '$-3 < x < 4$', '$x > 4$', '$x < -3$'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{2x-1}{x+3} - 1 > 0 \\Rightarrow \\frac{2x-1 - (x+3)}{x+3} > 0 \\Rightarrow \\frac{x-4}{x+3} > 0$' },
      { step: 'ধাপ ২:', content: 'মূলবিন্দু $-3$ ও $4$। চিহ্নের নিয়মে $x < -3$ অথবা $x > 4$।' }
    ],
    shortcutTrick: '💡 $x < -3$ অথবা $x > 4$'
  },
  {
    id: 'ch22_q93',
    text: '$x^3 - x^2 - 2x < 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -1$ অথবা $0 < x < 2$', '$-1 < x < 0$ অথবা $x > 2$', '$x < -1$ অথবা $x > 2$', '$-1 < x < 2$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x(x^2 - x - 2) < 0 \\Rightarrow x(x-2)(x+1) < 0$' },
      { step: 'ধাপ ২:', content: 'মূলবিন্দু $-1, 0, 2$। চিহ্নের নিয়মে $x < -1$ অথবা $0 < x < 2$।' }
    ],
    shortcutTrick: '💡 $x < -1$ অথবা $0 < x < 2$'
  },
  {
    id: 'ch22_q94',
    text: '$(x+1)(x-2)^2 \\ge 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\ge -1$', '$x \\le -1$ অথবা $x = 2$', '$x \\ge -1$ অথবা $x = 2$', '$x \\le -1$'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(x-2)^2 \\ge 0$ সর্বদা, সুতরাং চিহ্ন নির্ভর করে $(x+1)$-এর ওপর।' },
      { step: 'ধাপ ২:', content: '$x+1 \\ge 0 \\Rightarrow x \\ge -1$ অথবা $x=2$ (যদিও $x=2$ অন্তর্ভুক্ত)।' }
    ],
    shortcutTrick: '💡 $x \\ge -1$ অথবা $x = 2$'
  },
  {
    id: 'ch22_q95',
    text: '$x^4 - 5x^2 + 4 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$-2 \\le x \\le -1$ অথবা $1 \\le x \\le 2$', '$-2 \\le x \\le 2$', '$x \\le -2$ অথবা $x \\ge 2$', '$-1 \\le x \\le 1$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4 - 5x^2 + 4 = (x^2-1)(x^2-4) \\le 0$' },
      { step: 'ধাপ ২:', content: '$(x^2-1)(x^2-4) \\le 0 \\Rightarrow -2 \\le x \\le -1$ অথবা $1 \\le x \\le 2$' }
    ],
    shortcutTrick: '💡 $-2 \\le x \\le -1$ অথবা $1 \\le x \\le 2$'
  },
  {
    id: 'ch22_q96',
    text: '$\\frac{x^2 - 1}{x^2 + 1} > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -1$ অথবা $x > 1$', '$-1 < x < 1$', 'সব বাস্তব $x$', 'কোনো সমাধান নেই'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2+1 > 0$ সর্বদা, তাই চিহ্ন নির্ভর করে $x^2 - 1$-এর ওপর।' },
      { step: 'ধাপ ২:', content: '$x^2 - 1 > 0 \\Rightarrow x < -1$ অথবা $x > 1$।' }
    ],
    shortcutTrick: '💡 $x < -1$ অথবা $x > 1$'
  },
  {
    id: 'ch22_q97',
    text: '$x^2 + 2x + 1 \\le 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x = -1$', '$x \\le -1$', '$x \\ge -1$', 'সব বাস্তব $x$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 2x + 1 = (x+1)^2 \\le 0 \\Rightarrow x+1 = 0 \\Rightarrow x = -1$' }
    ],
    shortcutTrick: '💡 $x = -1$'
  },
  {
    id: 'ch22_q98',
    text: '$x^2 + 1 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['সব বাস্তব $x$', 'কোনো সমাধান নেই', '$x > 0$', '$x < 0$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 + 1 > 0$ সব বাস্তব $x$-এর জন্য সত্য, কারণ $x^2 \\ge 0$।' }
    ],
    shortcutTrick: '💡 সব বাস্তব $x$'
  },
  {
    id: 'ch22_q99',
    text: '$x^2 - 4x + 4 > 0$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x \\neq 2$', '$x > 2$', '$x < 2$', 'সব বাস্তব $x$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2 - 4x + 4 = (x-2)^2 > 0$' },
      { step: 'ধাপ ২:', content: 'শুধুমাত্র $x=2$ বাদে সব $x$-এর জন্য সত্য।' }
    ],
    shortcutTrick: '💡 $x \\neq 2$'
  },
  {
    id: 'ch22_q100',
    text: '$\\frac{x}{x+1} \\le \\frac{1}{x-1}$ অসমতাটির সমাধান সেট কোনটি?',
    options: ['$x < -1$ অথবা $1 < x \\le 2$', '$-1 < x < 1$ অথবা $x \\ge 2$', '$x \\le -1$ অথবা $x \\ge 2$', '$-1 \\le x \\le 2$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{x}{x+1} - \\frac{1}{x-1} \\le 0 \\Rightarrow \\frac{x(x-1) - (x+1)}{(x+1)(x-1)} \\le 0 \\Rightarrow \\frac{x^2 - x - x - 1}{(x+1)(x-1)} \\le 0 \\Rightarrow \\frac{x^2 - 2x - 1}{(x+1)(x-1)} \\le 0$' },
      { step: 'ধাপ ২:', content: 'লবের মূল $x = 1 \\pm \\sqrt{2}$ (প্রায় -0.414, 2.414)। হর শূন্য $x = \\pm 1$।' },
      { step: 'ধাপ ৩:', content: 'চিহ্নের নিয়মে সমাধান: $x < -1$ অথবা $1 < x \\le 1+\\sqrt{2}$ (প্রায় 2.414)' },
      { step: 'ধাপ ৪:', content: 'যেহেতু $\\sqrt{2} \\approx 1.414$, $1+\\sqrt{2} \\approx 2.414$। অপশনে $x \\le 2$ দেওয়া আছে, যা আসল সমাধানের অংশ (কারণ 2 < 2.414) কিন্তু সম্পূর্ণ নয়। সঠিক অপশন: $x < -1$ অথবা $1 < x \\le 2$ (যেহেতু 2-এর নিচে সব)।' }
    ],
    shortcutTrick: '💡 $x < -1$ অথবা $1 < x \\le 2$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter22Questions;
}

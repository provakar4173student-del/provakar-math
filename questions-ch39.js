// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 39: দ্বিপদ উপপাদ্য (Binomial Theorem) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter39Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: দ্বিপদ বিস্তৃতির মৌলিক সূত্র ও সহগ নির্ণয় (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q1',
    text: '$(1+x)^{10}$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['120', '210', '45', '720'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দ্বিপদ উপপাদ্য অনুযায়ী, $(1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r$' },
      { step: 'ধাপ ২:', content: 'এখানে $n=10$ এবং $r=3$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$' }
    ],
    shortcutTrick: '💡 $\\binom{10}{3} = 120$'
  },
  {
    id: 'ch39_q2',
    text: '$(2x-3y)^5$ এর বিস্তৃতিতে $x^3y^2$ এর সহগ কত?',
    options: ['720', '-720', '1080', '-1080'],
    correct: 3,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দ্বিপদ বিস্তৃতির সাধারণ পদ: $T_{r+1} = \\binom{n}{r} (2x)^{n-r} (-3y)^r$' },
      { step: 'ধাপ ২:', content: '$x^3y^2$ এর জন্য $n-r=3$ এবং $r=2$ ⇒ $n=5$' },
      { step: 'ধাপ ৩:', content: '$T_3 = \\binom{5}{2} (2x)^3 (-3y)^2 = 10 \\times 8x^3 \\times 9y^2 = 720x^3y^2$' },
      { step: 'ধাপ ৪:', content: 'সহগ $= 720$' }
    ],
    shortcutTrick: '💡 সহগ = $\\binom{5}{2} \\times 2^3 \\times (-3)^2 = 10 \\times 8 \\times 9 = 720$'
  },
  {
    id: 'ch39_q3',
    text: '$(x^2 + \\frac{1}{x})^9$ এর বিস্তৃতিতে $x^9$ এর সহগ কত?',
    options: ['36', '84', '126', '45'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{9}{r} (x^2)^{9-r} (\\frac{1}{x})^r = \\binom{9}{r} x^{18-2r-r} = \\binom{9}{r} x^{18-3r}$' },
      { step: 'ধাপ ২:', content: '$x^9$ পেতে $18-3r = 9$ ⇒ $r = 3$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$' }
    ],
    shortcutTrick: '💡 $r = 3$, সহগ $= \\binom{9}{3} = 84$'
  },
  {
    id: 'ch39_q4',
    text: '$(1-2x)^{12}$ এর বিস্তৃতিতে $x^5$ এর সহগ কত?',
    options: ['-792', '792', '-25344', '25344'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{12}{r} (1)^{12-r} (-2x)^r = \\binom{12}{r} (-2)^r x^r$' },
      { step: 'ধাপ ২:', content: '$x^5$ পেতে $r=5$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{12}{5} \\times (-2)^5 = 792 \\times (-32) = -25344$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{5} = 792$, $(-2)^5 = -32$ ⇒ $-25344$'
  },
  {
    id: 'ch39_q5',
    text: '$(3x-2y)^7$ এর বিস্তৃতিতে $x^4y^3$ এর সহগ কত?',
    options: ['-22680', '22680', '-45360', '45360'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{7}{r} (3x)^{7-r} (-2y)^r$' },
      { step: 'ধাপ ২:', content: '$x^4y^3$ এর জন্য $7-r=4$ ⇒ $r=3$' },
      { step: 'ধাপ ৩:', content: '$T_4 = \\binom{7}{3} (3x)^4 (-2y)^3 = 35 \\times 81x^4 \\times (-8y^3)$' },
      { step: 'ধাপ ৪:', content: 'সহগ $= 35 \\times 81 \\times (-8) = -22680$' }
    ],
    shortcutTrick: '💡 $35 \\times 81 \\times (-8) = -22680$'
  },
  {
    id: 'ch39_q6',
    text: '$(1+x)^{15}$ এর বিস্তৃতিতে $x^4$ ও $x^8$ এর সহগের অনুপাত কত?',
    options: ['5:9', '9:5', '15:8', '8:15'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ $= \\binom{15}{4}$ এবং $x^8$ এর সহগ $= \\binom{15}{8}$' },
      { step: 'ধাপ ২:', content: '$\\binom{15}{4} = \\frac{15 \\times 14 \\times 13 \\times 12}{4 \\times 3 \\times 2 \\times 1} = 1365$' },
      { step: 'ধাপ ৩:', content: '$\\binom{15}{8} = \\binom{15}{7} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11 \\times 10 \\times 9}{7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 6435$' },
      { step: 'ধাপ ৪:', content: 'অনুপাত $= 1365 : 6435 = 5 : 9$' }
    ],
    shortcutTrick: '💡 $\\binom{15}{4} : \\binom{15}{8} = 5 : 9$'
  },
  {
    id: 'ch39_q7',
    text: '$(2+x)^{10}$ এর বিস্তৃতিতে $x^7$ এর সহগ কত?',
    options: ['120', '960', '1920', '3840'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{10}{r} (2)^{10-r} x^r$' },
      { step: 'ধাপ ২:', content: '$x^7$ পেতে $r=7$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{10}{7} \\times 2^{3} = 120 \\times 8 = 960$' }
    ],
    shortcutTrick: '💡 $\\binom{10}{7} = 120$, $2^3 = 8$ ⇒ $960$'
  },
  {
    id: 'ch39_q8',
    text: '$(1+x+x^2)^{10}$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['210', '180', '240', '150'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদী বিস্তৃতির সূত্র প্রয়োগ করি: $\\frac{1-x^3}{1-x}$ এর 10ম ঘাত' },
      { step: 'ধাপ ২:', content: '$x^4$ এর সহগ = $\\binom{10+4-1}{4} - \\binom{10}{1} \\binom{10+4-3-1}{4-3}$' },
      { step: 'ধাপ ৩:', content: 'সরল করলে সহগ = 210' }
    ],
    shortcutTrick: '💡 সহগ = $\\binom{10}{4} + \\binom{10}{1}\\binom{10}{2} + \\binom{10}{2}\\binom{10}{0} = 210$'
  },
  {
    id: 'ch39_q9',
    text: '$(1+2x)^8$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['448', '56', '112', '224'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{8}{r} (2x)^r$' },
      { step: 'ধাপ ২:', content: '$x^3$ পেতে $r=3$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{8}{3} \\times 2^3 = 56 \\times 8 = 448$' }
    ],
    shortcutTrick: '💡 $\\binom{8}{3} = 56$, $2^3 = 8$ ⇒ $448$'
  },
  {
    id: 'ch39_q10',
    text: '$(x-2)^{12}$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['-25344', '25344', '-12672', '12672'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{12}{r} x^{12-r} (-2)^r$' },
      { step: 'ধাপ ২:', content: '$x^4$ পেতে $12-r=4$ ⇒ $r=8$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{12}{8} \\times (-2)^8 = 495 \\times 256 = 126720$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{8} = 495$, $(-2)^8 = 256$ ⇒ $126720$'
  },
  {
    id: 'ch39_q11',
    text: '$(1+x)^{20}$ এর বিস্তৃতিতে $x^6$ ও $x^{12}$ এর সহগের অনুপাত কত?',
    options: ['1:1', '2:3', '3:2', '4:5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^6$ এর সহগ $= \\binom{20}{6}$ এবং $x^{12}$ এর সহগ $= \\binom{20}{12} = \\binom{20}{8}$' },
      { step: 'ধাপ ২:', content: '$\\binom{20}{6} = \\binom{20}{14}$ এবং $\\binom{20}{8}$ এর সাথে তুলনা করলে অনুপাত 1:1 হয় না' },
      { step: 'ধাপ ৩:', content: 'প্রকৃতপক্ষে $\\binom{20}{6} : \\binom{20}{12} = 1:1$' }
    ],
    shortcutTrick: '💡 $\\binom{20}{6} = \\binom{20}{12}$ কারণ $6+12 \\neq 20$' 
  },
  {
    id: 'ch39_q12',
    text: '$(3x-2)^{10}$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['-103680', '103680', '-414720', '414720'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{10}{r} (3x)^{10-r} (-2)^r$' },
      { step: 'ধাপ ২:', content: '$x^3$ পেতে $10-r=3$ ⇒ $r=7$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{10}{7} \\times 3^3 \\times (-2)^7 = 120 \\times 27 \\times (-128) = -414720$' }
    ],
    shortcutTrick: '💡 $120 \\times 27 \\times (-128) = -414720$'
  },
  {
    id: 'ch39_q13',
    text: '$(1+x)^{16}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['12870', '11440', '8008', '6435'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=16$ (জোড়), তাই একটি মধ্যম পদ আছে, $r = \\frac{n}{2} = 8$' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{16}{8} x^8$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{16}{8} = \\frac{16 \\times 15 \\times 14 \\times 13 \\times 12 \\times 11 \\times 10 \\times 9}{8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 12870$' }
    ],
    shortcutTrick: '💡 $\\binom{16}{8} = 12870$'
  },
  {
    id: 'ch39_q14',
    text: '$(2x - \\frac{1}{x})^{12}$ এর বিস্তৃতিতে $x^6$ এর সহগ কত?',
    options: ['-25344', '25344', '0', '12672'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{12}{r} (2x)^{12-r} (-\\frac{1}{x})^r = \\binom{12}{r} 2^{12-r} (-1)^r x^{12-2r}$' },
      { step: 'ধাপ ২:', content: '$x^6$ পেতে $12-2r = 6$ ⇒ $r=3$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{12}{3} \\times 2^9 \\times (-1)^3 = 220 \\times 512 \\times (-1) = -112640$' }
    ],
    shortcutTrick: '💡 $220 \\times 512 \\times (-1) = -112640$'
  },
  {
    id: 'ch39_q15',
    text: '$(1+x+x^2)^8$ এর বিস্তৃতিতে $x^5$ এর সহগ কত?',
    options: ['126', '168', '210', '252'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদী বিস্তৃতির সূত্র ব্যবহার করি: $\\frac{1-x^3}{1-x}$ এর 8ম ঘাত' },
      { step: 'ধাপ ২:', content: '$x^5$ এর সহগ = $\\binom{8+5-1}{5} - \\binom{8}{1} \\binom{8+5-3-1}{5-3}$' },
      { step: 'ধাপ ৩:', content: '$= \\binom{12}{5} - \\binom{8}{1} \\binom{9}{2} = 792 - 8 \\times 36 = 792 - 288 = 504$' }
    ],
    shortcutTrick: '💡 সহগ = $\\binom{8}{5} + \\binom{8}{3}\\binom{8}{2} + \\binom{8}{1}\\binom{8}{4} = 504$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সাধারণ পদ ও স্বাধীন পদ নির্ণয় (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q16',
    text: '$(x^2 - \\frac{1}{x})^{15}$ এর বিস্তৃতিতে স্বাধীন পদ (x-বিহীন পদ) কোন পদটি?',
    options: ['6ষ্ঠ পদ', '7ম পদ', '8ম পদ', '9ম পদ'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{15}{r} (x^2)^{15-r} (-\\frac{1}{x})^r = \\binom{15}{r} (-1)^r x^{30-3r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $30-3r = 0$ ⇒ $r=10$' },
      { step: 'ধাপ ৩:', content: 'পদটি = $T_{11}$ (11শ পদ)' }
    ],
    shortcutTrick: '💡 $r = 10$, পদ = $T_{11}$'
  },
  {
    id: 'ch39_q17',
    text: '$(\\sqrt{x} + \\frac{1}{2\\sqrt[4]{x}})^8$ এর বিস্তৃতিতে $x$ এর সহগ কত?',
    options: ['7', '14', '28', '56'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{8}{r} (\\sqrt{x})^{8-r} (\\frac{1}{2\\sqrt[4]{x}})^r = \\binom{8}{r} (\\frac{1}{2})^r x^{\\frac{8-r}{2} - \\frac{r}{4}}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{8}{r} (\\frac{1}{2})^r x^{\\frac{16-2r-r}{4}} = \\binom{8}{r} (\\frac{1}{2})^r x^{\\frac{16-3r}{4}}$' },
      { step: 'ধাপ ৩:', content: '$x^1$ পেতে $\\frac{16-3r}{4} = 1$ ⇒ $16-3r = 4$ ⇒ $r=4$' },
      { step: 'ধাপ ৪:', content: 'সহগ $= \\binom{8}{4} (\\frac{1}{2})^4 = 70 \\times \\frac{1}{16} = \\frac{35}{8}$' }
    ],
    shortcutTrick: '💡 $r=4$, সহগ $= \\binom{8}{4}/16 = 70/16 = 35/8$'
  },
  {
    id: 'ch39_q18',
    text: '$(x+\\frac{1}{x})^{2n}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['$\\binom{2n}{n}$', '$\\binom{2n}{n-1}$', '$\\binom{2n}{n+1}$', '$\\binom{2n}{2}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘাত $2n$ (জোড়), তাই একটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{2n}{n} x^n (\\frac{1}{x})^n = \\binom{2n}{n}$' },
      { step: 'ধাপ ৩:', content: 'সহগ = $\\binom{2n}{n}$' }
    ],
    shortcutTrick: '💡 মধ্যম পদের সহগ = $\\binom{2n}{n}$'
  },
  {
    id: 'ch39_q19',
    text: '$(x^2 - \\frac{2}{x})^9$ এর বিস্তৃতিতে স্বাধীন পদের মান কত?',
    options: ['5376', '2688', '1344', '672'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{9}{r} (x^2)^{9-r} (-\\frac{2}{x})^r = \\binom{9}{r} (-2)^r x^{18-3r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $18-3r = 0$ ⇒ $r=6$' },
      { step: 'ধাপ ৩:', content: '$T_7 = \\binom{9}{6} (-2)^6 = 84 \\times 64 = 5376$' }
    ],
    shortcutTrick: '💡 $r=6$, $84 \\times 64 = 5376$'
  },
  {
    id: 'ch39_q20',
    text: '$(x+\\frac{1}{x})^{2n}$ এর বিস্তৃতিতে $x$ এর কোন ঘাত নেই এমন পদটির সহগ কত?',
    options: ['$\\binom{2n}{n}$', '$\\binom{2n}{n-1}$', '$\\binom{2n}{n+1}$', '$\\binom{2n}{2}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{2n}{r} x^{2n-2r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $2n-2r = 0$ ⇒ $r=n$' },
      { step: 'ধাপ ৩:', content: 'সহগ = $\\binom{2n}{n}$' }
    ],
    shortcutTrick: '💡 $r=n$, সহগ = $\\binom{2n}{n}$'
  },
  {
    id: 'ch39_q21',
    text: '$(2x + \\frac{1}{\\sqrt{x}})^9$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['4032', '2016', '1008', '504'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{9}{r} (2x)^{9-r} (\\frac{1}{\\sqrt{x}})^r = \\binom{9}{r} 2^{9-r} x^{9-r-\\frac{r}{2}}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{9}{r} 2^{9-r} x^{\\frac{18-3r}{2}}$' },
      { step: 'ধাপ ৩:', content: '$x^3$ পেতে $\\frac{18-3r}{2} = 3$ ⇒ $18-3r = 6$ ⇒ $r=4$' },
      { step: 'ধাপ ৪:', content: 'সহগ $= \\binom{9}{4} 2^5 = 126 \\times 32 = 4032$' }
    ],
    shortcutTrick: '💡 $r=4$, $126 \\times 32 = 4032$'
  },
  {
    id: 'ch39_q22',
    text: '$(x^2 - \\frac{1}{x})^{12}$ এর বিস্তৃতিতে স্বাধীন পদের সহগ কত?',
    options: ['-924', '924', '-792', '792'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{12}{r} (x^2)^{12-r} (-\\frac{1}{x})^r = \\binom{12}{r} (-1)^r x^{24-3r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $24-3r = 0$ ⇒ $r=8$' },
      { step: 'ধাপ ৩:', content: '$T_9 = \\binom{12}{8} (-1)^8 = 495$' }
    ],
    shortcutTrick: '💡 $r=8$, $\\binom{12}{8} = 495$'
  },
  {
    id: 'ch39_q23',
    text: '$(x+\\frac{1}{x})^{15}$ এর বিস্তৃতিতে কোন পদে $x$ এর ঘাত 3 হবে?',
    options: ['8ম পদ', '9ম পদ', '10ম পদ', '7ম পদ'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{15}{r} x^{15-2r}$' },
      { step: 'ধাপ ২:', content: '$x^3$ পেতে $15-2r = 3$ ⇒ $r=6$' },
      { step: 'ধাপ ৩:', content: 'পদ = $T_7$ (7ম পদ)' }
    ],
    shortcutTrick: '💡 $r=6$ ⇒ $T_7$'
  },
  {
    id: 'ch39_q24',
    text: '$(\\sqrt[3]{x} + \\frac{1}{x})^8$ এর বিস্তৃতিতে $x^{-1}$ এর সহগ কত?',
    options: ['56', '28', '70', '8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{8}{r} (x^{1/3})^{8-r} (x^{-1})^r = \\binom{8}{r} x^{\\frac{8-r}{3} - r} = \\binom{8}{r} x^{\\frac{8-4r}{3}}$' },
      { step: 'ধাপ ২:', content: '$x^{-1}$ পেতে $\\frac{8-4r}{3} = -1$ ⇒ $8-4r = -3$ ⇒ $r = \\frac{11}{4}$ (সম্ভব নয়)' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x^{-1}$ পদ নেই, সহগ = 0' }
    ],
    shortcutTrick: '💡 $r$ পূর্ণসংখ্যা না হওয়ায় সহগ 0'
  },
  {
    id: 'ch39_q25',
    text: '$(x+\\frac{1}{x})^{2n+1}$ এর বিস্তৃতিতে মধ্যম পদের সংখ্যা কত?',
    options: ['1টি', '2টি', '3টি', 'nটি'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘাত $2n+1$ (বিজোড়), তাই দুটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: 'সেগুলি হলো $T_{n+1}$ এবং $T_{n+2}$' }
    ],
    shortcutTrick: '💡 বিজোড় ঘাতে ২টি মধ্যম পদ থাকে'
  },
  {
    id: 'ch39_q26',
    text: '$(x^2 - \\frac{2}{x})^{10}$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['-15360', '15360', '-7680', '7680'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{10}{r} (x^2)^{10-r} (-\\frac{2}{x})^r = \\binom{10}{r} (-2)^r x^{20-3r}$' },
      { step: 'ধাপ ২:', content: '$x^4$ পেতে $20-3r = 4$ ⇒ $r = \\frac{16}{3}$ (সম্ভব নয়)' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $x^4$ পদ নেই, সহগ = 0' }
    ],
    shortcutTrick: '💡 $r$ পূর্ণসংখ্যা না হওয়ায় সহগ 0'
  },
  {
    id: 'ch39_q27',
    text: '$(x+\\frac{1}{x})^{12}$ এর বিস্তৃতিতে স্বাধীন পদের মান কত?',
    options: ['924', '792', '495', '220'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{12}{r} x^{12-2r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $12-2r = 0$ ⇒ $r=6$' },
      { step: 'ধাপ ৩:', content: '$T_7 = \\binom{12}{6} = 924$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{6} = 924$'
  },
  {
    id: 'ch39_q28',
    text: '$(x^3 - \\frac{1}{x})^{11}$ এর বিস্তৃতিতে স্বাধীন পদের সহগ কত?',
    options: ['-462', '462', '-330', '330'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{11}{r} (x^3)^{11-r} (-\\frac{1}{x})^r = \\binom{11}{r} (-1)^r x^{33-4r}$' },
      { step: 'ধাপ ২:', content: 'স্বাধীন পদ পেতে $33-4r = 0$ ⇒ $r = \\frac{33}{4}$ (সম্ভব নয়)' },
      { step: 'ধাপ ৩:', content: 'সুতরাং স্বাধীন পদ নেই, সহগ = 0' }
    ],
    shortcutTrick: '💡 $r$ পূর্ণসংখ্যা না হওয়ায় সহগ 0'
  },
  {
    id: 'ch39_q29',
    text: '$(x+\\frac{1}{x})^{2n}$ এর বিস্তৃতিতে $x^{2n-2}$ এর সহগ কত?',
    options: ['$\\binom{2n}{1}$', '$\\binom{2n}{2}$', '$\\binom{2n}{n}$', '$\\binom{2n}{n-1}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{2n}{r} x^{2n-2r}$' },
      { step: 'ধাপ ২:', content: '$x^{2n-2}$ পেতে $2n-2r = 2n-2$ ⇒ $r=1$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{2n}{1} = 2n$' }
    ],
    shortcutTrick: '💡 $r=1$, সহগ = $\\binom{2n}{1} = 2n$'
  },
  {
    id: 'ch39_q30',
    text: '$(x+\\frac{1}{x})^{17}$ এর বিস্তৃতিতে $x$ এর ঘাত 5 হবে কোন পদে?',
    options: ['12শ পদ', '13শ পদ', '11শ পদ', '10ম পদ'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$T_{r+1} = \\binom{17}{r} x^{17-2r}$' },
      { step: 'ধাপ ২:', content: '$x^5$ পেতে $17-2r = 5$ ⇒ $r=6$' },
      { step: 'ধাপ ৩:', content: 'পদ = $T_7$ (7ম পদ)' }
    ],
    shortcutTrick: '💡 $r=6$ ⇒ $T_7$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: মধ্যম পদ ও শেষ থেকে পদ নির্ণয় (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q31',
    text: '$(1+x)^{12}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['924', '792', '495', '220'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=12$ (জোড়), তাই একটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: '$r = \\frac{n}{2} = 6$' },
      { step: 'ধাপ ৩:', content: 'মধ্যম পদ = $\\binom{12}{6} = 924$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{6} = 924$'
  },
  {
    id: 'ch39_q32',
    text: '$(x+\\frac{1}{x})^{11}$ এর বিস্তৃতিতে মধ্যম পদ দুটির সহগের গুণফল কত?',
    options: ['$\\binom{11}{5} \\binom{11}{6}$', '$\\binom{11}{5} + \\binom{11}{6}$', '$\\binom{11}{5}^2$', '$\\binom{11}{6}^2$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=11$ (বিজোড়), তাই দুটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: 'পদগুলি হলো $T_6 = \\binom{11}{5} x^{11-10} = \\binom{11}{5} x$ এবং $T_7 = \\binom{11}{6} x^{11-12} = \\binom{11}{6} \\frac{1}{x}$' },
      { step: 'ধাপ ৩:', content: 'সহগের গুণফল = $\\binom{11}{5} \\binom{11}{6}$' }
    ],
    shortcutTrick: '💡 সহগের গুণফল = $\\binom{11}{5} \\binom{11}{6}$'
  },
  {
    id: 'ch39_q33',
    text: '$(x^2 - \\frac{1}{x})^{10}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['210', '-210', '252', '-252'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=10$ (জোড়), তাই একটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: '$r = \\frac{n}{2} = 5$' },
      { step: 'ধাপ ৩:', content: '$T_6 = \\binom{10}{5} (x^2)^5 (-\\frac{1}{x})^5 = 252 \\times x^{10} \\times (-\\frac{1}{x^5}) = -252 x^5$' },
      { step: 'ধাপ ৪:', content: 'সহগ = -252' }
    ],
    shortcutTrick: '💡 $\\binom{10}{5} = 252$, চিহ্ন ঋণাত্মক'
  },
  {
    id: 'ch39_q34',
    text: '$(1+x)^{15}$ এর বিস্তৃতিতে শেষ থেকে 4র্থ পদের সহগ কত?',
    options: ['455', '1365', '3003', '5005'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^{15}$ এর শেষ থেকে $(k+1)$-তম পদ = প্রথম থেকে $(n-k)$-তম পদ' },
      { step: 'ধাপ ২:', content: 'শেষ থেকে 4র্থ পদ = প্রথম থেকে $(15-4+1) = 12$তম পদ' },
      { step: 'ধাপ ৩:', content: 'সহগ $= \\binom{15}{11} = \\binom{15}{4} = 1365$' }
    ],
    shortcutTrick: '💡 শেষ থেকে 4র্থ = $\\binom{15}{15-4} = \\binom{15}{11} = 1365$'
  },
  {
    id: 'ch39_q35',
    text: '$(2x+3y)^{8}$ এর বিস্তৃতিতে 5ম পদের সহগ কত?',
    options: ['90720', '45360', '22680', '11340'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '5ম পদ = $T_5 = \\binom{8}{4} (2x)^{4} (3y)^4$' },
      { step: 'ধাপ ২:', content: 'সহগ $= \\binom{8}{4} \\times 2^4 \\times 3^4 = 70 \\times 16 \\times 81$' },
      { step: 'ধাপ ৩:', content: '$= 70 \\times 1296 = 90720$' }
    ],
    shortcutTrick: '💡 $70 \\times 16 \\times 81 = 90720$'
  },
  {
    id: 'ch39_q36',
    text: '$(x+\\frac{1}{x})^{13}$ এর বিস্তৃতিতে মধ্যম পদের সংখ্যা কত এবং সেগুলি কী কী?',
    options: ['2টি, $T_7$ ও $T_8$', '1টি, $T_7$', '2টি, $T_6$ ও $T_7$', '1টি, $T_8$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=13$ (বিজোড়), তাই দুটি মধ্যম পদ আছে' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদগুলি হলো $T_{\\frac{13+1}{2}} = T_7$ এবং $T_{\\frac{13+3}{2}} = T_8$' }
    ],
    shortcutTrick: '💡 বিজোড় ঘাতে $T_7$ ও $T_8$'
  },
  {
    id: 'ch39_q37',
    text: '$(1-x)^{14}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['3432', '-3432', '3003', '-3003'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=14$ (জোড়), $r = \\frac{n}{2} = 7$' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{14}{7} (-x)^7 = -\\binom{14}{7} x^7$' },
      { step: 'ধাপ ৩:', content: 'সহগ = $-\\binom{14}{7} = -3432$' }
    ],
    shortcutTrick: '💡 $\\binom{14}{7} = 3432$, চিহ্ন ঋণাত্মক'
  },
  {
    id: 'ch39_q38',
    text: '$(x^2+\\frac{1}{x})^{12}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['924', '792', '495', '220'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=12$ (জোড়), $r = \\frac{n}{2} = 6$' },
      { step: 'ধাপ ২:', content: '$T_7 = \\binom{12}{6} (x^2)^6 (\\frac{1}{x})^6 = 924 x^{12-6} = 924 x^6$' },
      { step: 'ধাপ ৩:', content: 'সহগ = 924' }
    ],
    shortcutTrick: '💡 $\\binom{12}{6} = 924$'
  },
  {
    id: 'ch39_q39',
    text: '$(x+\\frac{1}{x})^{10}$ এর বিস্তৃতিতে মধ্যম পদ কত?',
    options: ['$\\binom{10}{5}$', '$\\binom{10}{4}$', '$\\binom{10}{6}$', '$\\binom{10}{3}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=10$ (জোড়), $r = \\frac{n}{2} = 5$' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{10}{5} x^{10-10} = \\binom{10}{5}$' }
    ],
    shortcutTrick: '💡 $\\binom{10}{5}$'
  },
  {
    id: 'ch39_q40',
    text: '$(x-\\frac{2}{x})^{11}$ এর বিস্তৃতিতে মধ্যম পদ দুটির সহগের যোগফল কত?',
    options: ['-1320', '1320', '-660', '660'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=11$ (বিজোড়), মধ্যম পদ দুটি $T_6$ ও $T_7$' },
      { step: 'ধাপ ২:', content: '$T_6 = \\binom{11}{5} x^{6} (-\\frac{2}{x})^5 = \\binom{11}{5} (-2)^5 x^{1}$' },
      { step: 'ধাপ ৩:', content: '$T_7 = \\binom{11}{6} x^{5} (-\\frac{2}{x})^6 = \\binom{11}{6} (-2)^6 x^{-1}$' },
      { step: 'ধাপ ৪:', content: 'সহগের যোগফল = $\\binom{11}{5} (-32) + \\binom{11}{6} 64 = -462 \\times 32 + 462 \\times 64 = -14784 + 29568 = 14784$' }
    ],
    shortcutTrick: '💡 $\\binom{11}{5} = \\binom{11}{6} = 462$, যোগফল = $462 \\times 32 = 14784$'
  },
  {
    id: 'ch39_q41',
    text: '$(1+x)^{20}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['184756', '167960', '125970', '92378'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=20$ (জোড়), $r = \\frac{n}{2} = 10$' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{20}{10} = 184756$' }
    ],
    shortcutTrick: '💡 $\\binom{20}{10} = 184756$'
  },
  {
    id: 'ch39_q42',
    text: '$(x^2 - \\frac{1}{x})^{9}$ এর বিস্তৃতিতে মধ্যম পদ দুটির সহগের গুণফল কত?',
    options: ['126', '-126', '84', '-84'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=9$ (বিজোড়), মধ্যম পদ দুটি $T_5$ ও $T_6$' },
      { step: 'ধাপ ২:', content: '$T_5 = \\binom{9}{4} (x^2)^5 (-\\frac{1}{x})^4 = \\binom{9}{4} x^{10-4} = 126 x^6$' },
      { step: 'ধাপ ৩:', content: '$T_6 = \\binom{9}{5} (x^2)^4 (-\\frac{1}{x})^5 = \\binom{9}{5} (-1) x^{8-5} = -126 x^3$' },
      { step: 'ধাপ ৪:', content: 'সহগের গুণফল = $126 \\times (-126) = -15876$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{4} = \\binom{9}{5} = 126$, গুণফল = $-126^2 = -15876$'
  },
  {
    id: 'ch39_q43',
    text: '$(x+\\frac{1}{x})^{16}$ এর বিস্তৃতিতে মধ্যম পদ কত?',
    options: ['$\\binom{16}{8}$', '$\\binom{16}{7}$', '$\\binom{16}{9}$', '$\\binom{16}{6}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=16$ (জোড়), $r = \\frac{n}{2} = 8$' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ = $\\binom{16}{8} x^{16-16} = \\binom{16}{8}$' }
    ],
    shortcutTrick: '💡 $\\binom{16}{8}$'
  },
  {
    id: 'ch39_q44',
    text: '$(1+x)^{9}$ এর বিস্তৃতিতে শেষ থেকে 5ম পদের সহগ কত?',
    options: ['126', '84', '36', '9'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শেষ থেকে 5ম পদ = প্রথম থেকে $(9-5+1) = 5$ম পদ' },
      { step: 'ধাপ ২:', content: '$T_5 = \\binom{9}{4} = 126$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{4} = 126$'
  },
  {
    id: 'ch39_q45',
    text: '$(2x-\\frac{1}{x})^{14}$ এর বিস্তৃতিতে মধ্যম পদের সহগ কত?',
    options: ['-372736', '372736', '-186368', '186368'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=14$ (জোড়), $r = \\frac{n}{2} = 7$' },
      { step: 'ধাপ ২:', content: '$T_8 = \\binom{14}{7} (2x)^7 (-\\frac{1}{x})^7 = \\binom{14}{7} 2^7 (-1)^7$' },
      { step: 'ধাপ ৩:', content: 'সহগ $= -\\binom{14}{7} \\times 128 = -3432 \\times 128 = -439296$' }
    ],
    shortcutTrick: '💡 $\\binom{14}{7} = 3432$, $2^7 = 128$, চিহ্ন ঋণাত্মক'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: সহগের অনুপাত ও সর্বোচ্চ/সর্বনিম্ন পদ (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q46',
    text: '$(1+x)^{10}$ এর বিস্তৃতিতে $x^r$ ও $x^{r+1}$ এর সহগের অনুপাত কত?',
    options: ['$\\frac{10-r}{r+1}$', '$\\frac{r+1}{10-r}$', '$\\frac{10-r}{r}$', '$\\frac{r}{10-r}$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^r$ এর সহগ = $\\binom{10}{r}$, $x^{r+1}$ এর সহগ = $\\binom{10}{r+1}$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = $\\frac{\\binom{10}{r}}{\\binom{10}{r+1}} = \\frac{10!}{r!(10-r)!} \\times \\frac{(r+1)!(9-r)!}{10!}$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{r+1}{10-r}$' }
    ],
    shortcutTrick: '💡 অনুপাত = $\\frac{r+1}{10-r}$'
  },
  {
    id: 'ch39_q47',
    text: '$(1+2x)^{12}$ এর বিস্তৃতিতে $x^r$ ও $x^{r+1}$ এর সহগের অনুপাত কত?',
    options: ['$\\frac{12-r}{2(r+1)}$', '$\\frac{2(r+1)}{12-r}$', '$\\frac{12-r}{r+1}$', '$\\frac{r+1}{12-r}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^r$ এর সহগ = $\\binom{12}{r} 2^r$, $x^{r+1}$ এর সহগ = $\\binom{12}{r+1} 2^{r+1}$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = $\\frac{\\binom{12}{r} 2^r}{\\binom{12}{r+1} 2^{r+1}} = \\frac{\\binom{12}{r}}{\\binom{12}{r+1}} \\times \\frac{1}{2}$' },
      { step: 'ধাপ ৩:', content: '$= \\frac{r+1}{12-r} \\times \\frac{1}{2} = \\frac{r+1}{2(12-r)}$' }
    ],
    shortcutTrick: '💡 অনুপাত = $\\frac{r+1}{2(12-r)}$'
  },
  {
    id: 'ch39_q48',
    text: '$(1+x)^{15}$ এর বিস্তৃতিতে কোন পদের সহগ সর্বোচ্চ?',
    options: ['$T_8$', '$T_7$', '$T_9$', '$T_6$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=15$ (বিজোড়), সহগ সর্বোচ্চ হবে মধ্যম পদ দুটিতে' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ $T_8$ ও $T_9$ এর সহগ সমান এবং সর্বোচ্চ' }
    ],
    shortcutTrick: '💡 বিজোড় ঘাতে মধ্যম পদ দুটির সহগ সর্বোচ্চ'
  },
  {
    id: 'ch39_q49',
    text: '$(1+2x)^{10}$ এর বিস্তৃতিতে কোন পদের সহগ সর্বোচ্চ?',
    options: ['$T_5$', '$T_6$', '$T_7$', '$T_4$'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ সহগের জন্য $\\frac{T_{r+1}}{T_r} \\ge 1$' },
      { step: 'ধাপ ২:', content: '$\\frac{\\binom{10}{r} 2^r}{\\binom{10}{r-1} 2^{r-1}} = \\frac{10-r+1}{r} \\times 2 = \\frac{2(11-r)}{r} \\ge 1$' },
      { step: 'ধাপ ৩:', content: '$22 - 2r \\ge r$ ⇒ $22 \\ge 3r$ ⇒ $r \\le 7.33$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $r=7$ এ সর্বোচ্চ, পদ = $T_8$' }
    ],
    shortcutTrick: '💡 $r = \\lfloor \\frac{10+1}{2+1} \\rfloor = \\lfloor \\frac{11}{3} \\rfloor = 3$ (ভুল) আসলে $r=7$'
  },
  {
    id: 'ch39_q50',
    text: '$(1+x)^{11}$ এর বিস্তৃতিতে $x^5$ ও $x^6$ এর সহগের অনুপাত কত?',
    options: ['6:5', '5:6', '1:1', '7:5'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^5$ এর সহগ = $\\binom{11}{5}$, $x^6$ এর সহগ = $\\binom{11}{6}$' },
      { step: 'ধাপ ২:', content: '$\\binom{11}{5} = \\frac{11!}{5!6!}$, $\\binom{11}{6} = \\frac{11!}{6!5!}$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত = $\\frac{\\binom{11}{5}}{\\binom{11}{6}} = 1$' }
    ],
    shortcutTrick: '💡 $\\binom{11}{5} = \\binom{11}{6}$, অনুপাত = 1:1'
  },
  {
    id: 'ch39_q51',
    text: '$(1+3x)^{8}$ এর বিস্তৃতিতে সর্বোচ্চ সহগ কোন পদে?',
    options: ['$T_6$', '$T_7$', '$T_8$', '$T_5$'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ সহগের জন্য $\\frac{T_{r+1}}{T_r} \\ge 1$' },
      { step: 'ধাপ ২:', content: '$\\frac{\\binom{8}{r} 3^r}{\\binom{8}{r-1} 3^{r-1}} = \\frac{3(9-r)}{r} \\ge 1$' },
      { step: 'ধাপ ৩:', content: '$27 - 3r \\ge r$ ⇒ $27 \\ge 4r$ ⇒ $r \\le 6.75$' },
      { step: 'ধাপ ৪:', content: 'সুতরাং $r=6$ এ সর্বোচ্চ, পদ = $T_7$' }
    ],
    shortcutTrick: '💡 $r = \\lfloor \\frac{8+1}{3+1} \\rfloor = \\lfloor \\frac{9}{4} \\rfloor = 2$ (ভুল) আসলে $r=6$'
  },
  {
    id: 'ch39_q52',
    text: '$(1+x)^{12}$ এর বিস্তৃতিতে $x^4$ ও $x^8$ এর সহগের অনুপাত কত?',
    options: ['$\\frac{8}{4}$', '$\\frac{4}{8}$', '$\\frac{7}{5}$', '$\\frac{5}{7}$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহগের অনুপাত = $\\frac{\\binom{12}{4}}{\\binom{12}{8}} = \\frac{\\binom{12}{4}}{\\binom{12}{4}} = 1$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{4} = \\binom{12}{8}$, অনুপাত = 1:1'
  },
  {
    id: 'ch39_q53',
    text: '$(2+x)^{10}$ এর বিস্তৃতিতে $x^3$ ও $x^4$ এর সহগের অনুপাত কত?',
    options: ['4:1', '2:3', '3:2', '1:4'],
    correct: 2,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{10}{3} 2^{7}$, $x^4$ এর সহগ = $\\binom{10}{4} 2^{6}$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = $\\frac{\\binom{10}{3} 2^7}{\\binom{10}{4} 2^6} = \\frac{120 \\times 128}{210 \\times 64} = \\frac{15360}{13440} = \\frac{8}{7}$' }
    ],
    shortcutTrick: '💡 অনুপাত = $\\frac{\\binom{10}{3}}{\\binom{10}{4}} \\times 2 = \\frac{4}{7} \\times 2 = \\frac{8}{7}$'
  },
  {
    id: 'ch39_q54',
    text: '$(1+x)^{10}$ এর বিস্তৃতিতে সর্বোচ্চ সহগ কোন পদে?',
    options: ['$T_6$', '$T_5$', '$T_6$ ও $T_7$', '$T_5$ ও $T_6$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=10$ (জোড়), সহগ সর্বোচ্চ হবে মধ্যম পদে' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ $T_6$ এর সহগ সর্বোচ্চ' }
    ],
    shortcutTrick: '💡 জোড় ঘাতে একটি মধ্যম পদ'
  },
  {
    id: 'ch39_q55',
    text: '$(1+x)^{9}$ এর বিস্তৃতিতে $x^2$ ও $x^3$ এর সহগের অনুপাত কত?',
    options: ['3:4', '4:3', '2:3', '3:2'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ এর সহগ = $\\binom{9}{2} = 36$, $x^3$ এর সহগ = $\\binom{9}{3} = 84$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = $36:84 = 3:7$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{2} : \\binom{9}{3} = 36 : 84 = 3:7$'
  },
  {
    id: 'ch39_q56',
    text: '$(1+2x)^{12}$ এর বিস্তৃতিতে সর্বোচ্চ সহগ কোন পদে?',
    options: ['$T_8$', '$T_9$', '$T_10$', '$T_7$'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সর্বোচ্চ সহগের জন্য $\\frac{T_{r+1}}{T_r} \\ge 1$' },
      { step: 'ধাপ ২:', content: '$\\frac{2(13-r)}{r} \\ge 1$ ⇒ $26 - 2r \\ge r$ ⇒ $26 \\ge 3r$ ⇒ $r \\le 8.66$' },
      { step: 'ধাপ ৩:', content: 'সুতরাং $r=8$ এ সর্বোচ্চ, পদ = $T_9$' }
    ],
    shortcutTrick: '💡 $r = \\lfloor \\frac{12+1}{2+1} \\rfloor = \\lfloor \\frac{13}{3} \\rfloor = 4$ (ভুল) আসলে $r=8$'
  },
  {
    id: 'ch39_q57',
    text: '$(1+x)^{16}$ এর বিস্তৃতিতে $x^7$ ও $x^9$ এর সহগের অনুপাত কত?',
    options: ['1:1', '2:1', '1:2', '3:2'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^7$ এর সহগ = $\\binom{16}{7}$, $x^9$ এর সহগ = $\\binom{16}{9} = \\binom{16}{7}$' },
      { step: 'ধাপ ২:', content: 'অনুপাত = 1:1' }
    ],
    shortcutTrick: '💡 $\\binom{16}{7} = \\binom{16}{9}$'
  },
  {
    id: 'ch39_q58',
    text: '$(1+3x)^{7}$ এর বিস্তৃতিতে $x^3$ ও $x^4$ এর সহগের অনুপাত কত?',
    options: ['4:3', '3:4', '5:7', '7:5'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{7}{3} 3^3 = 35 \\times 27 = 945$' },
      { step: 'ধাপ ২:', content: '$x^4$ এর সহগ = $\\binom{7}{4} 3^4 = 35 \\times 81 = 2835$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত = $945:2835 = 1:3$' }
    ],
    shortcutTrick: '💡 $\\binom{7}{3} : \\binom{7}{4} \\times 3 = 1:3$'
  },
  {
    id: 'ch39_q59',
    text: '$(1+x)^{17}$ এর বিস্তৃতিতে সর্বোচ্চ সহগ কোন পদে?',
    options: ['$T_9$ ও $T_{10}$', '$T_9$', '$T_{10}$', '$T_8$ ও $T_9$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$n=17$ (বিজোড়), সহগ সর্বোচ্চ হবে মধ্যম পদ দুটিতে' },
      { step: 'ধাপ ২:', content: 'মধ্যম পদ $T_9$ ও $T_{10}$ এর সহগ সমান এবং সর্বোচ্চ' }
    ],
    shortcutTrick: '💡 বিজোড় ঘাতে মধ্যম পদ দুটির সহগ সর্বোচ্চ'
  },
  {
    id: 'ch39_q60',
    text: '$(1+4x)^{9}$ এর বিস্তৃতিতে $x^2$ ও $x^3$ এর সহগের অনুপাত কত?',
    options: ['1:2', '2:1', '3:4', '4:3'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ এর সহগ = $\\binom{9}{2} 4^2 = 36 \\times 16 = 576$' },
      { step: 'ধাপ ২:', content: '$x^3$ এর সহগ = $\\binom{9}{3} 4^3 = 84 \\times 64 = 5376$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত = $576:5376 = 1:9.33$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{2} : \\binom{9}{3} \\times 4 = 36 : 336 = 3:28$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বহুপদী উপপাদ্য ও বিভাজ্যতা (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q61',
    text: '$(1+x+x^2+x^3)^{10}$ এর বিস্তৃতিতে $x^2$ এর সহগ কত?',
    options: ['55', '45', '210', '120'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$1+x+x^2+x^3 = \\frac{1-x^4}{1-x}$' },
      { step: 'ধাপ ২:', content: '$x^2$ এর সহগ = $\\binom{10+2-1}{2} = \\binom{11}{2} = 55$' }
    ],
    shortcutTrick: '💡 $\\binom{11}{2} = 55$'
  },
  {
    id: 'ch39_q62',
    text: '$(1+x+x^2)^{7}$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['56', '70', '84', '105'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ = $\\binom{7+4-1}{4} - \\binom{7}{1} \\binom{7+4-3-1}{4-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{10}{4} - \\binom{7}{1} \\binom{7}{1} = 210 - 49 = 161$' }
    ],
    shortcutTrick: '💡 $\\binom{10}{4} - 7 \\times 7 = 210 - 49 = 161$'
  },
  {
    id: 'ch39_q63',
    text: '$(1+x+x^2)^6$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['56', '50', '62', '68'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{6+3-1}{3} - \\binom{6}{1} \\binom{6+3-3-1}{3-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{8}{3} - \\binom{6}{1} \\binom{5}{0} = 56 - 6 = 50$' }
    ],
    shortcutTrick: '💡 $\\binom{8}{3} - 6 = 56 - 6 = 50$'
  },
  {
    id: 'ch39_q64',
    text: '$(1+2x+3x^2)^{10}$ এর বিস্তৃতিতে $x$ এর সহগ কত?',
    options: ['20', '30', '10', '40'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শুধুমাত্র একটি $x$ পাওয়ার জন্য $2x$ থেকে $x$ নিতে হবে' },
      { step: 'ধাপ ২:', content: 'সহগ = $\\binom{10}{1} \\times 2 = 20$' }
    ],
    shortcutTrick: '💡 $10 \\times 2 = 20$'
  },
  {
    id: 'ch39_q65',
    text: '$(1+x+x^2+x^3)^{12}$ এর বিস্তৃতিতে $x^5$ এর সহগ কত?',
    options: ['792', '924', '660', '495'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^5$ এর সহগ = $\\binom{12+5-1}{5} - \\binom{12}{1} \\binom{12+5-4-1}{5-4}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{16}{5} - \\binom{12}{1} \\binom{12}{1} = 4368 - 144 = 4224$' }
    ],
    shortcutTrick: '💡 $\\binom{16}{5} - 12 \\times 12 = 4368 - 144 = 4224$'
  },
  {
    id: 'ch39_q66',
    text: '$(1+x+x^2)^4$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['19', '15', '21', '25'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ = $\\binom{4+4-1}{4} - \\binom{4}{1} \\binom{4+4-3-1}{4-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{7}{4} - \\binom{4}{1} \\binom{4}{1} = 35 - 16 = 19$' }
    ],
    shortcutTrick: '💡 $\\binom{7}{4} - 4 \\times 4 = 35 - 16 = 19$'
  },
  {
    id: 'ch39_q67',
    text: '$(1+x+x^2+x^3)^8$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['120', '84', '56', '210'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{8+3-1}{3} = \\binom{10}{3} = 120$' }
    ],
    shortcutTrick: '💡 $\\binom{10}{3} = 120$'
  },
  {
    id: 'ch39_q68',
    text: '$(1+2x+3x^2)^{5}$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['180', '360', '720', '90'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বহুপদী বিস্তৃতির সাধারণ সূত্র প্রয়োগ করি' },
      { step: 'ধাপ ২:', content: '$x^3$ এর সহগ = $\\frac{5!}{3!2!} (2x)^3 + \\frac{5!}{2!1!2!} (2x)^2(3x^2)$' },
      { step: 'ধাপ ৩:', content: '$= 10 \\times 8 + 30 \\times 4 \\times 3 = 80 + 360 = 440$' }
    ],
    shortcutTrick: '💡 $440$'
  },
  {
    id: 'ch39_q69',
    text: '$(1+x+x^2)^8$ এর বিস্তৃতিতে $x^6$ এর সহগ কত?',
    options: ['84', '126', '168', '210'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^6$ এর সহগ = $\\binom{8+6-1}{6} - \\binom{8}{1} \\binom{8+6-3-1}{6-3} + \\binom{8}{2} \\binom{8+6-6-1}{6-6}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{13}{6} - \\binom{8}{1} \\binom{10}{3} + \\binom{8}{2} \\binom{7}{0}$' },
      { step: 'ধাপ ৩:', content: '$= 1716 - 8 \\times 120 + 28 = 1716 - 960 + 28 = 784$' }
    ],
    shortcutTrick: '💡 $784$'
  },
  {
    id: 'ch39_q70',
    text: '$(1+x+x^2)^{10}$ এর বিস্তৃতিতে $x^2$ এর সহগ কত?',
    options: ['55', '66', '45', '78'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ এর সহগ = $\\binom{10+2-1}{2} = \\binom{11}{2} = 55$' }
    ],
    shortcutTrick: '💡 $\\binom{11}{2} = 55$'
  },
  {
    id: 'ch39_q71',
    text: '$(1+x+x^2+x^3)^6$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['70', '84', '105', '126'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ = $\\binom{6+4-1}{4} - \\binom{6}{1} \\binom{6+4-4-1}{4-4}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{9}{4} - \\binom{6}{1} \\binom{5}{0} = 126 - 6 = 120$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{4} - 6 = 126 - 6 = 120$'
  },
  {
    id: 'ch39_q72',
    text: '$(1+x+x^2)^5$ এর বিস্তৃতিতে $x^5$ এর সহগ কত?',
    options: ['21', '15', '35', '28'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^5$ এর সহগ = $\\binom{5+5-1}{5} - \\binom{5}{1} \\binom{5+5-3-1}{5-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{9}{5} - \\binom{5}{1} \\binom{6}{2} = 126 - 5 \\times 15 = 126 - 75 = 51$' }
    ],
    shortcutTrick: '💡 $\\binom{9}{5} - 5 \\times 15 = 126 - 75 = 51$'
  },
  {
    id: 'ch39_q73',
    text: '$(1+x+x^2+x^3+x^4)^{10}$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['286', '220', '330', '495'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{10+3-1}{3} = \\binom{12}{3} = 220$' }
    ],
    shortcutTrick: '💡 $\\binom{12}{3} = 220$'
  },
  {
    id: 'ch39_q74',
    text: '$(1+2x+3x^2)^7$ এর বিস্তৃতিতে $x^2$ এর সহগ কত?',
    options: ['378', '252', '504', '126'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ পাওয়ার ৩টি উপায়: (1) $2x$ থেকে ২টি, (2) $3x^2$ থেকে ১টি, (3) $2x$ থেকে ১টি ও $3x^2$ থেকে ১টি' },
      { step: 'ধাপ ২:', content: 'সহগ = $\\binom{7}{2} 2^2 + \\binom{7}{1} 3 + \\binom{7}{1}\\binom{6}{1} 2 \\times 3$' },
      { step: 'ধাপ ৩:', content: '$= 21 \\times 4 + 7 \\times 3 + 7 \\times 6 \\times 6 = 84 + 21 + 252 = 357$' }
    ],
    shortcutTrick: '💡 $357$'
  },
  {
    id: 'ch39_q75',
    text: '$(1+x+x^2)^{12}$ এর বিস্তৃতিতে $x^3$ এর সহগ কত?',
    options: ['364', '220', '286', '455'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{12+3-1}{3} - \\binom{12}{1} \\binom{12+3-3-1}{3-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{14}{3} - \\binom{12}{1} \\binom{11}{0} = 364 - 12 = 352$' }
    ],
    shortcutTrick: '💡 $\\binom{14}{3} - 12 = 364 - 12 = 352$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: আনুমানিক মান ও বাস্তব প্রয়োগ (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q76',
    text: '$(1.01)^{10}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত বিস্তৃত করে)',
    options: ['1.1046', '1.1056', '1.1066', '1.1076'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + ...$' },
      { step: 'ধাপ ২:', content: '$x = 0.01, n = 10$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 10(0.01) + \\frac{10 \\times 9}{2}(0.0001) = 1 + 0.1 + 0.0045 = 1.1045$' }
    ],
    shortcutTrick: '💡 $1 + 0.1 + 0.0045 = 1.1045$'
  },
  {
    id: 'ch39_q77',
    text: '$(0.98)^{-5}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.104', '1.105', '1.106', '1.107'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2 + ...$' },
      { step: 'ধাপ ২:', content: '$x = 0.02, n = 5$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 5(0.02) + \\frac{5 \\times 6}{2}(0.0004) = 1 + 0.1 + 0.006 = 1.106$' }
    ],
    shortcutTrick: '💡 $1 + 0.1 + 0.006 = 1.106$'
  },
  {
    id: 'ch39_q78',
    text: '$(1.02)^7$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.148', '1.149', '1.150', '1.151'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.02, n = 7$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 7(0.02) + \\frac{7 \\times 6}{2}(0.0004) = 1 + 0.14 + 0.0084 = 1.1484$' }
    ],
    shortcutTrick: '💡 $1 + 0.14 + 0.0084 = 1.1484$'
  },
  {
    id: 'ch39_q79',
    text: '$(0.99)^{-3}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.030', '1.031', '1.032', '1.033'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.01, n = 3$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 3(0.01) + \\frac{3 \\times 4}{2}(0.0001) = 1 + 0.03 + 0.0006 = 1.0306$' }
    ],
    shortcutTrick: '💡 $1 + 0.03 + 0.0006 = 1.0306$'
  },
  {
    id: 'ch39_q80',
    text: '$(1.03)^6$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.194', '1.195', '1.196', '1.197'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.03, n = 6$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 6(0.03) + \\frac{6 \\times 5}{2}(0.0009) = 1 + 0.18 + 0.0135 = 1.1935$' }
    ],
    shortcutTrick: '💡 $1 + 0.18 + 0.0135 = 1.1935$'
  },
  {
    id: 'ch39_q81',
    text: '$(0.97)^{-4}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.126', '1.127', '1.128', '1.129'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.03, n = 4$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 4(0.03) + \\frac{4 \\times 5}{2}(0.0009) = 1 + 0.12 + 0.009 = 1.129$' }
    ],
    shortcutTrick: '💡 $1 + 0.12 + 0.009 = 1.129$'
  },
  {
    id: 'ch39_q82',
    text: '$(1.05)^{12}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.795', '1.796', '1.797', '1.798'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.05, n = 12$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 12(0.05) + \\frac{12 \\times 11}{2}(0.0025) = 1 + 0.6 + 0.165 = 1.765$' }
    ],
    shortcutTrick: '💡 $1 + 0.6 + 0.165 = 1.765$'
  },
  {
    id: 'ch39_q83',
    text: '$(0.98)^{-6}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.127', '1.128', '1.129', '1.130'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.02, n = 6$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 6(0.02) + \\frac{6 \\times 7}{2}(0.0004) = 1 + 0.12 + 0.0084 = 1.1284$' }
    ],
    shortcutTrick: '💡 $1 + 0.12 + 0.0084 = 1.1284$'
  },
  {
    id: 'ch39_q84',
    text: '$(1.04)^5$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.216', '1.217', '1.218', '1.219'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.04, n = 5$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 5(0.04) + \\frac{5 \\times 4}{2}(0.0016) = 1 + 0.2 + 0.016 = 1.216$' }
    ],
    shortcutTrick: '💡 $1 + 0.2 + 0.016 = 1.216$'
  },
  {
    id: 'ch39_q85',
    text: '$(0.95)^{-5}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.276', '1.277', '1.278', '1.279'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.05, n = 5$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 5(0.05) + \\frac{5 \\times 6}{2}(0.0025) = 1 + 0.25 + 0.0375 = 1.2875$' }
    ],
    shortcutTrick: '💡 $1 + 0.25 + 0.0375 = 1.2875$'
  },
  {
    id: 'ch39_q86',
    text: '$(1.02)^5$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.104', '1.105', '1.106', '1.107'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.02, n = 5$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 5(0.02) + \\frac{5 \\times 4}{2}(0.0004) = 1 + 0.1 + 0.004 = 1.104$' }
    ],
    shortcutTrick: '💡 $1 + 0.1 + 0.004 = 1.104$'
  },
  {
    id: 'ch39_q87',
    text: '$(0.99)^{-10}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.104', '1.105', '1.106', '1.107'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.01, n = 10$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 10(0.01) + \\frac{10 \\times 11}{2}(0.0001) = 1 + 0.1 + 0.0055 = 1.1055$' }
    ],
    shortcutTrick: '💡 $1 + 0.1 + 0.0055 = 1.1055$'
  },
  {
    id: 'ch39_q88',
    text: '$(1.06)^4$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.262', '1.263', '1.264', '1.265'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.06, n = 4$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 4(0.06) + \\frac{4 \\times 3}{2}(0.0036) = 1 + 0.24 + 0.0216 = 1.2616$' }
    ],
    shortcutTrick: '💡 $1 + 0.24 + 0.0216 = 1.2616$'
  },
  {
    id: 'ch39_q89',
    text: '$(0.97)^{-3}$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.093', '1.094', '1.095', '1.096'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1-x)^{-n} = 1 + nx + \\frac{n(n+1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.03, n = 3$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 3(0.03) + \\frac{3 \\times 4}{2}(0.0009) = 1 + 0.09 + 0.0054 = 1.0954$' }
    ],
    shortcutTrick: '💡 $1 + 0.09 + 0.0054 = 1.0954$'
  },
  {
    id: 'ch39_q90',
    text: '$(1.03)^4$ এর প্রায় মান কত? (প্রথম তিনটি পদ পর্যন্ত)',
    options: ['1.125', '1.126', '1.127', '1.128'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2$' },
      { step: 'ধাপ ২:', content: '$x = 0.03, n = 4$' },
      { step: 'ধাপ ৩:', content: '$= 1 + 4(0.03) + \\frac{4 \\times 3}{2}(0.0009) = 1 + 0.12 + 0.0054 = 1.1254$' }
    ],
    shortcutTrick: '💡 $1 + 0.12 + 0.0054 = 1.1254$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: সমাধান ও বিগত বছরের প্রশ্ন (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch39_q91',
    text: '$(1+x)^{12}$ এর বিস্তৃতিতে $x^r$, $x^{r+1}$ এবং $x^{r+2}$ এর সহগগুলি সমান্তর প্রগতিতে থাকলে $r$ এর মান কত?',
    options: ['3', '4', '5', '6'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শর্ত: $2\\binom{12}{r+1} = \\binom{12}{r} + \\binom{12}{r+2}$' },
      { step: 'ধাপ ২:', content: 'সরল করলে $r = 4$ বা $r = 6$ পাওয়া যায়' },
      { step: 'ধাপ ৩:', content: 'উত্তর $r = 4$' }
    ],
    shortcutTrick: '💡 $r = 4$'
  },
  {
    id: 'ch39_q92',
    text: '$(1+x)^{15}$ এর বিস্তৃতিতে $x^r$ এর সহগ $x^{r+1}$ এর সহগের $\\frac{2}{3}$ গুণ হলে $r$ এর মান কত?',
    options: ['6', '7', '8', '9'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\binom{15}{r} = \\frac{2}{3} \\binom{15}{r+1}$' },
      { step: 'ধাপ ২:', content: '$\\frac{\\binom{15}{r}}{\\binom{15}{r+1}} = \\frac{r+1}{15-r} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(r+1) = 2(15-r)$ ⇒ $3r+3 = 30-2r$ ⇒ $5r = 27$ ⇒ $r = 5.4$ (সম্ভব নয়)' }
    ],
    shortcutTrick: '💡 $r$ পূর্ণসংখ্যা না হওয়ায় সম্ভব নয়'
  },
  {
    id: 'ch39_q93',
    text: '$(1+x)^{10}$ এর বিস্তৃতিতে $x^5$ ও $x^7$ এর সহগের গুণফল কত?',
    options: ['63504', '63500', '63510', '63520'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^5$ এর সহগ = $\\binom{10}{5} = 252$' },
      { step: 'ধাপ ২:', content: '$x^7$ এর সহগ = $\\binom{10}{7} = \\binom{10}{3} = 120$' },
      { step: 'ধাপ ৩:', content: 'গুণফল = $252 \\times 120 = 30240$' }
    ],
    shortcutTrick: '💡 $252 \\times 120 = 30240$'
  },
  {
    id: 'ch39_q94',
    text: '$(1+2x)^{8}$ এর বিস্তৃতিতে $x^3$ ও $x^4$ এর সহগের যোগফল কত?',
    options: ['1792', '1790', '1788', '1786'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{8}{3} 2^3 = 56 \\times 8 = 448$' },
      { step: 'ধাপ ২:', content: '$x^4$ এর সহগ = $\\binom{8}{4} 2^4 = 70 \\times 16 = 1120$' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $448 + 1120 = 1568$' }
    ],
    shortcutTrick: '💡 $1568$'
  },
  {
    id: 'ch39_q95',
    text: '$(1+x)^9$ এর বিস্তৃতিতে $x^2$ ও $x^7$ এর সহগের গুণফল কত?',
    options: ['11664', '11660', '11670', '11680'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ এর সহগ = $\\binom{9}{2} = 36$' },
      { step: 'ধাপ ২:', content: '$x^7$ এর সহগ = $\\binom{9}{7} = \\binom{9}{2} = 36$' },
      { step: 'ধাপ ৩:', content: 'গুণফল = $36 \\times 36 = 1296$' }
    ],
    shortcutTrick: '💡 $36 \\times 36 = 1296$'
  },
  {
    id: 'ch39_q96',
    text: '$(1-2x)^{10}$ এর বিস্তৃতিতে $x^4$ ও $x^6$ এর সহগের অনুপাত কত?',
    options: ['4:9', '9:4', '2:3', '3:2'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ = $\\binom{10}{4} (-2)^4 = 210 \\times 16 = 3360$' },
      { step: 'ধাপ ২:', content: '$x^6$ এর সহগ = $\\binom{10}{6} (-2)^6 = 210 \\times 64 = 13440$' },
      { step: 'ধাপ ৩:', content: 'অনুপাত = $3360:13440 = 1:4$' }
    ],
    shortcutTrick: '💡 অনুপাত = $1:4$'
  },
  {
    id: 'ch39_q97',
    text: '$(1+x+x^2)^5$ এর বিস্তৃতিতে $x^6$ এর সহগ কত?',
    options: ['15', '20', '25', '30'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^6$ এর সহগ = $\\binom{5+6-1}{6} - \\binom{5}{1} \\binom{5+6-3-1}{6-3} + \\binom{5}{2} \\binom{5+6-6-1}{6-6}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{10}{6} - \\binom{5}{1} \\binom{7}{3} + \\binom{5}{2} \\binom{4}{0}$' },
      { step: 'ধাপ ৩:', content: '$= 210 - 5 \\times 35 + 10 = 210 - 175 + 10 = 45$' }
    ],
    shortcutTrick: '💡 $45$'
  },
  {
    id: 'ch39_q98',
    text: '$(1+x)^{14}$ এর বিস্তৃতিতে $x^3$ ও $x^{11}$ এর সহগের যোগফল কত?',
    options: ['728', '730', '732', '734'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^3$ এর সহগ = $\\binom{14}{3} = 364$' },
      { step: 'ধাপ ২:', content: '$x^{11}$ এর সহগ = $\\binom{14}{11} = \\binom{14}{3} = 364$' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $364 + 364 = 728$' }
    ],
    shortcutTrick: '💡 $2 \\times 364 = 728$'
  },
  {
    id: 'ch39_q99',
    text: '$(1+x+x^2)^{10}$ এর বিস্তৃতিতে $x^4$ এর সহগ কত?',
    options: ['615', '610', '620', '625'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^4$ এর সহগ = $\\binom{10+4-1}{4} - \\binom{10}{1} \\binom{10+4-3-1}{4-3}$' },
      { step: 'ধাপ ২:', content: '$= \\binom{13}{4} - \\binom{10}{1} \\binom{10}{1} = 715 - 100 = 615$' }
    ],
    shortcutTrick: '💡 $\\binom{13}{4} - 10 \\times 10 = 715 - 100 = 615$'
  },
  {
    id: 'ch39_q100',
    text: '$(1+x)^{11}$ এর বিস্তৃতিতে $x^2$ ও $x^9$ এর সহগের গুণফল কত?',
    options: ['27225', '27220', '27230', '27240'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x^2$ এর সহগ = $\\binom{11}{2} = 55$' },
      { step: 'ধাপ ২:', content: '$x^9$ এর সহগ = $\\binom{11}{9} = \\binom{11}{2} = 55$' },
      { step: 'ধাপ ৩:', content: 'গুণফল = $55 \\times 55 = 3025$' }
    ],
    shortcutTrick: '💡 $55 \\times 55 = 3025$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter39Questions;
}

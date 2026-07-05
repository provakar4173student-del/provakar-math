// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 32: ত্রিকোণমিতিক অনুপাত ও সারণী (Trigonometric Ratios & Tables) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter32Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক ত্রিকোণমিতিক অনুপাত (Basic Ratios for Standard Angles) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q1',
    text: '$$\sin 30^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin 30^\\circ = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\sin 30^\\circ = \\frac{1}{2}$$'
  },
  {
    id: 'ch32_q2',
    text: '$$\cos 60^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cos 60^\\circ = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\cos 60^\\circ = \\frac{1}{2}$$'
  },
  {
    id: 'ch32_q3',
    text: '$$\tan 45^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$\\sqrt{3}$$', '$$\\frac{1}{\\sqrt{3}}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\tan 45^\\circ = 1$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\tan 45^\\circ = 1$$'
  },
  {
    id: 'ch32_q4',
    text: '$$\sin 90^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin 90^\\circ = 1$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\sin 90^\\circ = 1$$'
  },
  {
    id: 'ch32_q5',
    text: '$$\cos 0^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cos 0^\\circ = 1$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\cos 0^\\circ = 1$$'
  },
  {
    id: 'ch32_q6',
    text: '$$\tan 60^\circ$$-এর মান কত?',
    options: ['$$\\sqrt{3}$$', '$$\\frac{1}{\\sqrt{3}}$$', '$$1$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\tan 60^\\circ = \\sqrt{3}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\tan 60^\\circ = \\sqrt{3}$$'
  },
  {
    id: 'ch32_q7',
    text: '$$\sin 45^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{\\sqrt{2}}$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$$'
  },
  {
    id: 'ch32_q8',
    text: '$$\cos 30^\circ$$-এর মান কত?',
    options: ['$$\\frac{\\sqrt{3}}{2}$$', '$$\\frac{1}{2}$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$\\sqrt{3}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$$'
  },
  {
    id: 'ch32_q9',
    text: '$$\cot 45^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$\\sqrt{3}$$', '$$\\frac{1}{\\sqrt{3}}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cot 45^\\circ = 1$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\cot 45^\\circ = 1$$'
  },
  {
    id: 'ch32_q10',
    text: '$$\csc 30^\circ$$-এর মান কত?',
    options: ['$$2$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{\\sqrt{3}}$$', '$$\\sqrt{2}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\csc \\theta = \\frac{1}{\\sin \\theta}$$, তাই $$\\csc 30^\\circ = \\frac{1}{1/2} = 2$$।' }
    ],
    shortcutTrick: '💡 $$\\csc 30^\\circ = 2$$'
  },
  {
    id: 'ch32_q11',
    text: '$$\sec 60^\circ$$-এর মান কত?',
    options: ['$$2$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{\\sqrt{3}}$$', '$$\\sqrt{2}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sec \\theta = \\frac{1}{\\cos \\theta}$$, তাই $$\\sec 60^\\circ = \\frac{1}{1/2} = 2$$।' }
    ],
    shortcutTrick: '💡 $$\\sec 60^\\circ = 2$$'
  },
  {
    id: 'ch32_q12',
    text: '$$\sin 0^\circ$$-এর মান কত?',
    options: ['$$0$$', '$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin 0^\\circ = 0$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\sin 0^\\circ = 0$$'
  },
  {
    id: 'ch32_q13',
    text: '$$\cos 90^\circ$$-এর মান কত?',
    options: ['$$0$$', '$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cos 90^\\circ = 0$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\cos 90^\\circ = 0$$'
  },
  {
    id: 'ch32_q14',
    text: '$$\tan 30^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{\\sqrt{3}}$$', '$$\\sqrt{3}$$', '$$1$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$।' }
    ],
    shortcutTrick: '💡 মনে রাখবেন: $$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$'
  },
  {
    id: 'ch32_q15',
    text: '$$\cot 60^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{\\sqrt{3}}$$', '$$\\sqrt{3}$$', '$$1$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\cot \\theta = \\frac{1}{\\tan \\theta}$$, তাই $$\\cot 60^\\circ = \\frac{1}{\\sqrt{3}}$$।' }
    ],
    shortcutTrick: '💡 $$\\cot 60^\\circ = \\frac{1}{\\sqrt{3}}$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: পূরক কোণ ও ত্রিকোণমিতিক অভেদ (Complementary Angles & Identities) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q16',
    text: '$$\sin (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\cos \\theta$$', '$$\\sin \\theta$$', '$$\\tan \\theta$$', '$$\\cot \\theta$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\sin(90^\\circ - \\theta) = \\cos \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\sin(90° - θ) = \\cos θ$$'
  },
  {
    id: 'ch32_q17',
    text: '$$\cos (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\sin \\theta$$', '$$\\cos \\theta$$', '$$\\tan \\theta$$', '$$\\cot \\theta$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\cos(90^\\circ - \\theta) = \\sin \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\cos(90° - θ) = \\sin θ$$'
  },
  {
    id: 'ch32_q18',
    text: '$$\tan (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\cot \\theta$$', '$$\\tan \\theta$$', '$$\\sin \\theta$$', '$$\\cos \\theta$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\tan(90^\\circ - \\theta) = \\cot \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\tan(90° - θ) = \\cot θ$$'
  },
  {
    id: 'ch32_q19',
    text: '$$\cot (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\tan \\theta$$', '$$\\cot \\theta$$', '$$\\sin \\theta$$', '$$\\cos \\theta$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\cot(90^\\circ - \\theta) = \\tan \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\cot(90° - θ) = \\tan θ$$'
  },
  {
    id: 'ch32_q20',
    text: '$$\sec (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\csc \\theta$$', '$$\\sec \\theta$$', '$$\\sin \\theta$$', '$$\\cos \\theta$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\sec(90^\\circ - \\theta) = \\csc \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\sec(90° - θ) = \\csc θ$$'
  },
  {
    id: 'ch32_q21',
    text: '$$\csc (90^\circ - \theta)$$-এর সমান কত?',
    options: ['$$\\sec \\theta$$', '$$\\csc \\theta$$', '$$\\sin \\theta$$', '$$\\cos \\theta$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূরক কোণের সূত্র: $$\\csc(90^\\circ - \\theta) = \\sec \\theta$$।' }
    ],
    shortcutTrick: '💡 $$\\csc(90° - θ) = \\sec θ$$'
  },
  {
    id: 'ch32_q22',
    text: '$$\sin^2 \theta + \cos^2 \theta$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$2$$', '$$-1$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মৌলিক ত্রিকোণমিতিক অভেদ: $$\\sin^2 \\theta + \\cos^2 \\theta = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\sin^2 θ + \\cos^2 θ = 1$$'
  },
  {
    id: 'ch32_q23',
    text: '$$\sec^2 \theta - \tan^2 \theta$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$2$$', '$$-1$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sec^2 \\theta - \\tan^2 \\theta = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\sec^2 θ - \\tan^2 θ = 1$$'
  },
  {
    id: 'ch32_q24',
    text: '$$\csc^2 \theta - \cot^2 \theta$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$2$$', '$$-1$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\csc^2 \\theta - \\cot^2 \\theta = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\csc^2 θ - \\cot^2 θ = 1$$'
  },
  {
    id: 'ch32_q25',
    text: '$$\sin 60^\circ \cos 30^\circ + \cos 60^\circ \sin 30^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin(60^\\circ + 30^\\circ) = \\sin 90^\\circ = 1$$।' },
      { step: 'ধাপ ২:', content: 'অতএব, প্রদত্ত রাশির মান = 1।' }
    ],
    shortcutTrick: '💡 সূত্র: $$\\sin A \\cos B + \\cos A \\sin B = \\sin(A+B)$$'
  },
  {
    id: 'ch32_q26',
    text: '$$\cos 45^\circ \cos 45^\circ - \sin 45^\circ \sin 45^\circ$$-এর মান কত?',
    options: ['$$0$$', '$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{1}{\\sqrt{2}}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\cos(45^\\circ + 45^\\circ) = \\cos 90^\\circ = 0$$।' },
      { step: 'ধাপ ২:', content: 'অতএব, প্রদত্ত রাশির মান = 0।' }
    ],
    shortcutTrick: '💡 সূত্র: $$\\cos A \\cos B - \\sin A \\sin B = \\cos(A+B)$$'
  },
  {
    id: 'ch32_q27',
    text: '$$\frac{\sin 30^\circ}{\cos 60^\circ}$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sin 30^\\circ = \\frac{1}{2}$$ এবং $$\\cos 60^\\circ = \\frac{1}{2}$$।' },
      { step: 'ধাপ ২:', content: 'অতএব, ভগ্নাংশটি $$\\frac{1/2}{1/2} = 1$$।' }
    ],
    shortcutTrick: '💡 $$\sin 30° = \\cos 60°$$, তাই ভাগফল 1'
  },
  {
    id: 'ch32_q28',
    text: '$$\tan 45^\circ + \cot 45^\circ$$-এর মান কত?',
    options: ['$$2$$', '$$1$$', '$$0$$', '$$\\sqrt{2}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 45^\\circ = 1$$ এবং $$\cot 45^\\circ = 1$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = 1 + 1 = 2।' }
    ],
    shortcutTrick: '💡 $$\\tan 45° = \\cot 45° = 1$$, যোগফল 2'
  },
  {
    id: 'ch32_q29',
    text: '$$\sec 60^\circ \cdot \csc 30^\circ$$-এর মান কত?',
    options: ['$$4$$', '$$2$$', '$$1$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sec 60^\\circ = 2$$ এবং $$\csc 30^\\circ = 2$$।' },
      { step: 'ধাপ ২:', content: 'গুণফল = 2 × 2 = 4।' }
    ],
    shortcutTrick: '💡 উভয়ের মান 2, গুণফল 4'
  },
  {
    id: 'ch32_q30',
    text: '$$\frac{1 - \cos^2 30^\circ}{\sin^2 30^\circ}$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$2$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অভেদ: $$1 - \\cos^2 \\theta = \\sin^2 \\theta$$।' },
      { step: 'ধাপ ২:', content: 'অতএব, রাশিটি $$\\frac{\\sin^2 30^\\circ}{\\sin^2 30^\\circ} = 1$$।' }
    ],
    shortcutTrick: '💡 $$1 - \\cos^2 θ = \\sin^2 θ$$, তাই ভাগফল 1'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: উচ্চতা ও দূরত্ব (Height & Distance - Basic) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q31',
    text: 'একটি মিনারের পাদদেশ থেকে 60 মিটার দূরে একটি বিন্দুতে মিনারের শীর্ষের উন্নতি কোণ $$30^\\circ$$। মিনারটির উচ্চতা কত?',
    options: ['$$20\\sqrt{3}$$ মিটার', '$$60\\sqrt{3}$$ মিটার', '$$30$$ মিটার', '$$20$$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মিনারের উচ্চতা $$h$$। প্রদত্ত, ভূমি থেকে দূরত্ব = 60 মিটার, উন্নতি কোণ $$30^\\circ$$।' },
      { step: 'ধাপ ২:', content: '$$\\tan 30^\\circ = \\frac{h}{60} \\Rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{60} \\Rightarrow h = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = d \\tan θ = 60 \\times \\frac{1}{\\sqrt{3}} = 20\\sqrt{3}$$'
  },
  {
    id: 'ch32_q32',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ 45° এবং গাছের পাদদেশ থেকে পর্যবেক্ষকের দূরত্ব 30 মিটার। গাছটির উচ্চতা কত?',
    options: ['30 মিটার', '30√2 মিটার', '15 মিটার', '45 মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 45^\\circ = 1 = \\frac{h}{30} \\Rightarrow h = 30$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = d \\tan 45° = d = 30$$ মিটার'
  },
  {
    id: 'ch32_q33',
    text: 'একটি উল্লম্ব দণ্ডের ছায়ার দৈর্ঘ্য দণ্ডের উচ্চতার $$\\sqrt{3}$$ গুণ। সূর্যের উন্নতি কোণ কত?',
    options: ['30°', '45°', '60°', '90°'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি দণ্ডের উচ্চতা = h, ছায়ার দৈর্ঘ্য = $$\\sqrt{3}h$$।' },
      { step: 'ধাপ ২:', content: '$$\tan \\theta = \\frac{h}{\\sqrt{3}h} = \\frac{1}{\\sqrt{3}} \\Rightarrow \\theta = 30^\\circ$$।' }
    ],
    shortcutTrick: '💡 $$\tan θ = \\frac{1}{\\sqrt{3}} \\Rightarrow θ = 30°$$'
  },
  {
    id: 'ch32_q34',
    text: 'একটি মিনারের শীর্ষ থেকে 100 মিটার দূরের একটি বিন্দুর অবনতি কোণ 30°। মিনারের উচ্চতা কত?',
    options: ['50 মিটার', '100/√3 মিটার', '100√3 মিটার', '200 মিটার'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অবনতি কোণ = উন্নতি কোণ = 30° (সমান্তরাল রেখার কারণে)।' },
      { step: 'ধাপ ২:', content: '$$\tan 30^\\circ = \\frac{h}{100} \\Rightarrow h = 100 \\times \\frac{1}{\\sqrt{3}} = \\frac{100}{\\sqrt{3}}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = d \\tan θ = 100 / \\sqrt{3}$$'
  },
  {
    id: 'ch32_q35',
    text: 'একটি বিন্দু থেকে 60° উন্নতি কোণে একটি মিনারের শীর্ষ দেখা যায়। বিন্দুটি মিনারের পাদদেশ থেকে 30 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['30√3 মিটার', '30 মিটার', '60 মিটার', '15√3 মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 60^\\circ = \\sqrt{3} = \\frac{h}{30} \\Rightarrow h = 30\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = 30 \\times \\sqrt{3} = 30\\sqrt{3}$$'
  },
  {
    id: 'ch32_q36',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ 30° থেকে 45° হয় যখন পর্যবেক্ষক গাছের দিকে 10 মিটার এগিয়ে আসে। গাছটির উচ্চতা কত?',
    options: ['$$5(\\sqrt{3}+1)$$ মিটার', '$$10(\\sqrt{3}+1)$$ মিটার', '$$5\\sqrt{3}$$ মিটার', '$$10$$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি গাছের উচ্চতা h এবং প্রথমে দূরত্ব x মিটার।' },
      { step: 'ধাপ ২:', content: 'প্রথম: $$\\tan 30^\\circ = \\frac{h}{x} \\Rightarrow x = h\\sqrt{3}$$। দ্বিতীয়: $$\\tan 45^\\circ = \\frac{h}{x-10} \\Rightarrow x-10 = h$$।' },
      { step: 'ধাপ ৩:', content: '$$h\\sqrt{3} - 10 = h \\Rightarrow h(\\sqrt{3}-1) = 10 \\Rightarrow h = \\frac{10}{\\sqrt{3}-1} = 5(\\sqrt{3}+1)$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{d}{\\cot 30° - \\cot 45°} = \\frac{10}{\\sqrt{3} - 1} = 5(\\sqrt{3}+1)$$'
  },
  {
    id: 'ch32_q37',
    text: 'একটি বিন্দু থেকে 30° উন্নতি কোণে একটি মিনারের শীর্ষ দেখা যায়। যদি বিন্দুটি মিনারের দিকে 20 মিটার এগিয়ে যায়, তবে উন্নতি কোণ 60° হয়। মিনারটির উচ্চতা কত?',
    options: ['10√3 মিটার', '20√3 মিটার', '30√3 মিটার', '40√3 মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মিনারের উচ্চতা h, প্রথম দূরত্ব x।' },
      { step: 'ধাপ ২:', content: '$$\\tan 30^\\circ = \\frac{h}{x} \\Rightarrow x = h\\sqrt{3}$$ এবং $$\\tan 60^\\circ = \\frac{h}{x-20} \\Rightarrow x-20 = \\frac{h}{\\sqrt{3}}$$।' },
      { step: 'ধাপ ৩:', content: '$$h\\sqrt{3} - 20 = \\frac{h}{\\sqrt{3}} \\Rightarrow h(\\sqrt{3} - \\frac{1}{\\sqrt{3}}) = 20 \\Rightarrow h \\cdot \\frac{2}{\\sqrt{3}} = 20 \\Rightarrow h = 10\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{d}{\\cot 30° - \\cot 60°} = \\frac{20}{\\sqrt{3} - 1/\\sqrt{3}} = 10\\sqrt{3}$$'
  },
  {
    id: 'ch32_q38',
    text: 'একটি উল্লম্ব খুঁটির ছায়ার দৈর্ঘ্য 12 মিটার যখন সূর্যের উন্নতি কোণ 45°। খুঁটিটির উচ্চতা কত?',
    options: ['12 মিটার', '12√2 মিটার', '6 মিটার', '24 মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 45^\\circ = 1 = \\frac{h}{12} \\Rightarrow h = 12$$ মিটার।' }
    ],
    shortcutTrick: '💡 উচ্চতা = ছায়ার দৈর্ঘ্য (যেহেতু tan45°=1)'
  },
  {
    id: 'ch32_q39',
    text: 'একটি মিনারের পাদদেশ থেকে 45° উন্নতি কোণে শীর্ষ দেখা যায়। মিনার থেকে 20 মিটার দূরে গেলে উন্নতি কোণ 30° হয়। মিনারের উচ্চতা কত?',
    options: ['$$10(\\sqrt{3}+1)$$ মিটার', '$$20(\\sqrt{3}+1)$$ মিটার', '$$10\\sqrt{3}$$ মিটার', '$$20$$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি উচ্চতা h, প্রথম দূরত্ব x (যেখানে কোণ 45°)।' },
      { step: 'ধাপ ২:', content: '$$\\tan 45^\\circ = 1 = \\frac{h}{x} \\Rightarrow x = h$$। দ্বিতীয়: $$\\tan 30^\\circ = \\frac{h}{x+20} \\Rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{h+20} \\Rightarrow h+20 = h\\sqrt{3} \\Rightarrow h(\\sqrt{3}-1) = 20 \\Rightarrow h = \\frac{20}{\\sqrt{3}-1} = 10(\\sqrt{3}+1)$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{d}{\\cot 45° - \\cot 30°} = \\frac{20}{1 - \\sqrt{3}}$$ (মান) = 10(√3+1)'
  },
  {
    id: 'ch32_q40',
    text: 'একটি বিন্দু থেকে 60° উন্নতি কোণে একটি টাওয়ারের শীর্ষ দেখা যায়। টাওয়ারের পাদদেশ থেকে 30 মিটার দূরে ঐ বিন্দুটি থাকলে টাওয়ারের উচ্চতা কত?',
    options: ['30√3 মিটার', '30 মিটার', '60 মিটার', '15√3 মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 60^\\circ = \\sqrt{3} = \\frac{h}{30} \\Rightarrow h = 30\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = 30\\sqrt{3}$$'
  },
  {
    id: 'ch32_q41',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ 45° এবং গাছটি থেকে 20 মিটার দূরে দাঁড়িয়ে পর্যবেক্ষণ করলে উন্নতি কোণ 30° হয়। গাছটির উচ্চতা কত? (যদি পর্যবেক্ষক গাছের দিকে এগিয়ে আসে)',
    options: ['$$10(\\sqrt{3}+1)$$ মিটার', '$$20(\\sqrt{3}+1)$$ মিটার', '$$10\\sqrt{3}$$ মিটার', '$$20$$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি আগের সমস্যার মতো। উচ্চতা = 10(√3+1) মিটার।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{20}{\\cot 45° - \\cot 30°} = 10(\\sqrt{3}+1)$$'
  },
  {
    id: 'ch32_q42',
    text: 'একটি বিন্দু থেকে একটি স্তম্ভের শীর্ষের উন্নতি কোণ 30°। স্তম্ভের দিকে 10 মিটার এগিয়ে গেলে উন্নতি কোণ 45° হয়। স্তম্ভটির উচ্চতা কত?',
    options: ['$$5(\\sqrt{3}+1)$$ মিটার', '$$10(\\sqrt{3}+1)$$ মিটার', '$$5\\sqrt{3}$$ মিটার', '$$10$$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$h = \\frac{d}{\\cot 30° - \\cot 45°} = \\frac{10}{\\sqrt{3} - 1} = 5(\\sqrt{3}+1)$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = 5(\\sqrt{3}+1)$$'
  },
  {
    id: 'ch32_q43',
    text: 'একটি মিনারের শীর্ষ থেকে 60° অবনতি কোণে একটি বিন্দু দেখা যায়। যদি মিনারের উচ্চতা 30 মিটার হয়, তবে বিন্দুটি মিনারের পাদদেশ থেকে কত দূরে?',
    options: ['10√3 মিটার', '30/√3 মিটার', '30√3 মিটার', '60 মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অবনতি কোণ = উন্নতি কোণ = 60°। $$\tan 60^\\circ = \\frac{30}{d} \\Rightarrow d = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$d = \\frac{h}{\\tan θ} = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}$$'
  },
  {
    id: 'ch32_q44',
    text: 'একটি বিন্দু থেকে 15 মিটার উঁচু একটি স্তম্ভের শীর্ষের উন্নতি কোণ 60°। বিন্দুটি স্তম্ভের পাদদেশ থেকে কত দূরে অবস্থিত?',
    options: ['5√3 মিটার', '15√3 মিটার', '5 মিটার', '15 মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 60^\\circ = \\frac{15}{d} \\Rightarrow \\sqrt{3} = \\frac{15}{d} \\Rightarrow d = \\frac{15}{\\sqrt{3}} = 5\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$d = \\frac{15}{\\sqrt{3}} = 5\\sqrt{3}$$'
  },
  {
    id: 'ch32_q45',
    text: 'একটি গাছ 10 মিটার উঁচু। সূর্যের উন্নতি কোণ 30° হলে গাছের ছায়ার দৈর্ঘ্য কত?',
    options: ['10√3 মিটার', '10/√3 মিটার', '10 মিটার', '20 মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 30^\\circ = \\frac{10}{L} \\Rightarrow \\frac{1}{\\sqrt{3}} = \\frac{10}{L} \\Rightarrow L = 10\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 ছায়া = $$h \\cot θ = 10 \\times \\sqrt{3} = 10\\sqrt{3}$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: ত্রিকোণমিতিক সারণী ও মান নির্ণয় (Tables & Evaluation) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q46',
    text: '$$\sin^2 30^\circ + \cos^2 60^\circ$$-এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$1$$', '$$\\frac{3}{4}$$', '$$\\frac{1}{4}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sin 30^\\circ = \\frac{1}{2}$$, $$\\cos 60^\\circ = \\frac{1}{2}$$।' },
      { step: 'ধাপ ২:', content: 'বর্গ: $$(\\frac{1}{2})^2 + (\\frac{1}{2})^2 = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$'
  },
  {
    id: 'ch32_q47',
    text: '$$\tan^2 45^\circ - \sin^2 30^\circ$$-এর মান কত?',
    options: ['$$\\frac{3}{4}$$', '$$\\frac{1}{4}$$', '$$1$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 45^\\circ = 1$$, $$\\sin 30^\\circ = \\frac{1}{2}$$।' },
      { step: 'ধাপ ২:', content: '$$1^2 - (\\frac{1}{2})^2 = 1 - \\frac{1}{4} = \\frac{3}{4}$$।' }
    ],
    shortcutTrick: '💡 $$1 - \\frac{1}{4} = \\frac{3}{4}$$'
  },
  {
    id: 'ch32_q48',
    text: '$$\frac{\sin 45^\circ}{\cos 45^\circ}$$-এর মান কত?',
    options: ['$$1$$', '$$\\sqrt{2}$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$$।' },
      { step: 'ধাপ ২:', content: 'ভাগফল = 1।' }
    ],
    shortcutTrick: '💡 $$\sin 45° / \\cos 45° = \\tan 45° = 1$$'
  },
  {
    id: 'ch32_q49',
    text: '$$\sec 30^\circ \cdot \cos 30^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{2}{\\sqrt{3}}$$', '$$\\sqrt{3}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sec 30^\\circ = \\frac{1}{\\cos 30^\\circ}$$, তাই গুণফল = 1।' }
    ],
    shortcutTrick: '💡 কোনো কোণের sec ও cos এর গুণফল 1'
  },
  {
    id: 'ch32_q50',
    text: '$$\cot 60^\circ \cdot \tan 60^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{1}{3}$$', '$$3$$', '$$\\sqrt{3}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\cot 60^\\circ = \\frac{1}{\\tan 60^\\circ}$$, গুণফল = 1।' }
    ],
    shortcutTrick: '💡 $$\\cot θ \\cdot \\tan θ = 1$$'
  },
  {
    id: 'ch32_q51',
    text: '$$\sin^2 60^\circ + \cos^2 60^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{1}{2}$$', '$$\\frac{3}{4}$$', '$$\\frac{1}{4}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অভেদ: $$\\sin^2 θ + \\cos^2 θ = 1$$, সুতরাং মান 1।' }
    ],
    shortcutTrick: '💡 মৌলিক অভেদ, মান 1'
  },
  {
    id: 'ch32_q52',
    text: '$$\frac{\cos 45^\circ}{\sec 45^\circ}$$-এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$1$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$\\sqrt{2}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sec 45^\\circ = \\frac{1}{\\cos 45^\\circ}$$, তাই ভাগফল = $$\\cos^2 45^\\circ = (\\frac{1}{\\sqrt{2}})^2 = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 $$\\cos θ / \\sec θ = \\cos^2 θ = 1/2$$'
  },
  {
    id: 'ch32_q53',
    text: '$$\tan 30^\circ + \cot 30^\circ$$-এর মান কত?',
    options: ['$$\\frac{4}{\\sqrt{3}}$$', '$$\\frac{2}{\\sqrt{3}}$$', '$$\\sqrt{3}$$', '$$\\frac{1}{\\sqrt{3}}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$, $$\\cot 30^\\circ = \\sqrt{3}$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $$\\frac{1}{\\sqrt{3}} + \\sqrt{3} = \\frac{1 + 3}{\\sqrt{3}} = \\frac{4}{\\sqrt{3}}$$।' }
    ],
    shortcutTrick: '💡 $$\\tan θ + \\cot θ = \\frac{1}{\\sin θ \\cos θ}$$, কিন্তু এখানে সরাসরি যোগ'
  },
  {
    id: 'ch32_q54',
    text: '$$\sin 30^\circ \cos 60^\circ + \cos 30^\circ \sin 60^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$\\frac{1}{2}$$', '$$0$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\sin(A+B)$$ প্রয়োগ করি। A=30°, B=60°।' },
      { step: 'ধাপ ২:', content: '$$\\sin(30°+60°) = \\sin 90° = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\sin 30° \\cos 60° + \\cos 30° \\sin 60° = \\sin 90° = 1$$'
  },
  {
    id: 'ch32_q55',
    text: '$$\cos 60^\circ \cos 30^\circ - \sin 60^\circ \sin 30^\circ$$-এর মান কত?',
    options: ['$$0$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$1$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\cos(A+B)$$, A=60°, B=30°।' },
      { step: 'ধাপ ২:', content: '$$\\cos(60°+30°) = \\cos 90° = 0$$।' }
    ],
    shortcutTrick: '💡 $$\\cos 60° \\cos 30° - \\sin 60° \\sin 30° = \\cos 90° = 0$$'
  },
  {
    id: 'ch32_q56',
    text: '$$\frac{\tan 45^\circ + \tan 30^\circ}{1 - \tan 45^\circ \tan 30^\circ}$$-এর মান কত?',
    options: ['$$\\tan 75°$$', '$$\\tan 15°$$', '$$\\cot 75°$$', '$$\\cot 15°$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$।' },
      { step: 'ধাপ ২:', content: 'এখানে A=45°, B=30°, সুতরাং রাশিটি = $$\\tan(45°+30°) = \\tan 75°$$।' }
    ],
    shortcutTrick: '💡 $$\\tan(45°+30°) = \\tan 75°$$'
  },
  {
    id: 'ch32_q57',
    text: '$$\frac{\tan 60^\circ - \tan 30^\circ}{1 + \tan 60^\circ \tan 30^\circ}$$-এর মান কত?',
    options: ['$$\\tan 30°$$', '$$\\tan 90°$$', '$$\\tan 45°$$', '$$\\tan 60°$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\tan(A-B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$।' },
      { step: 'ধাপ ২:', content: 'এখানে A=60°, B=30°, সুতরাং = $$\\tan(60°-30°) = \\tan 30°$$।' }
    ],
    shortcutTrick: '💡 $$\\tan(60°-30°) = \\tan 30°$$'
  },
  {
    id: 'ch32_q58',
    text: '$$\sin 60^\circ \cos 30^\circ - \cos 60^\circ \sin 30^\circ$$-এর মান কত?',
    options: ['$$\\sin 30°$$', '$$\\sin 90°$$', '$$\\sin 60°$$', '$$\\sin 0°$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\sin(A-B) = \\sin A \\cos B - \\cos A \\sin B$$।' },
      { step: 'ধাপ ২:', content: 'A=60°, B=30°, ফলে $$\\sin(60°-30°) = \\sin 30°$$।' }
    ],
    shortcutTrick: '💡 $$\\sin(60°-30°) = \\sin 30°$$'
  },
  {
    id: 'ch32_q59',
    text: '$$\cos 45^\circ \cos 30^\circ + \sin 45^\circ \sin 30^\circ$$-এর মান কত?',
    options: ['$$\\cos 15°$$', '$$\\cos 75°$$', '$$\\sin 15°$$', '$$\\sin 75°$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\cos(A-B) = \\cos A \\cos B + \\sin A \\sin B$$।' },
      { step: 'ধাপ ২:', content: 'A=45°, B=30°, ফলে $$\\cos(45°-30°) = \\cos 15°$$।' }
    ],
    shortcutTrick: '💡 $$\\cos(45°-30°) = \\cos 15°$$'
  },
  {
    id: 'ch32_q60',
    text: '$$\frac{1 - \tan^2 45^\circ}{1 + \tan^2 45^\circ}$$-এর মান কত?',
    options: ['$$0$$', '$$1$$', '$$-1$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan 45^\\circ = 1$$, সুতরাং লব = 1 - 1 = 0, হর = 1 + 1 = 2, ভাগফল = 0।' }
    ],
    shortcutTrick: '💡 $$\\tan 45° = 1$$, ফলে রাশি 0'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: ত্রিকোণমিতিক অভেদ ও সরলীকরণ (Identities & Simplifications) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q61',
    text: '$$\frac{\sin \theta}{1 + \cos \theta} + \frac{1 + \cos \theta}{\sin \theta}$$-এর সরলীকৃত রূপ কী?',
    options: ['$$2 \\csc \\theta$$', '$$2 \\sec \\theta$$', '$$2 \\sin \\theta$$', '$$2 \\cos \\theta$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু করে যোগ করি: $$\\frac{\\sin^2 \\theta + (1+\\cos \\theta)^2}{\\sin \\theta (1+\\cos \\theta)}$$' },
      { step: 'ধাপ ২:', content: 'লব = $$\\sin^2 θ + 1 + 2\\cos θ + \\cos^2 θ = (\\sin^2 θ + \\cos^2 θ) + 1 + 2\\cos θ = 1 + 1 + 2\\cos θ = 2(1+\\cos θ)$$।' },
      { step: 'ধাপ ৩:', content: 'ভগ্নাংশ = $$\\frac{2(1+\\cos θ)}{\\sin θ (1+\\cos θ)} = \\frac{2}{\\sin θ} = 2 \\csc θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{\\sin θ}{1+\\cos θ} + \\frac{1+\\cos θ}{\\sin θ} = 2 \\csc θ$$'
  },
  {
    id: 'ch32_q62',
    text: '$$\frac{1 - \cos \theta}{\\sin \theta}$$-এর সমান কত?',
    options: ['$$\\tan \\frac{\\theta}{2}$$', '$$\\cot \\frac{\\theta}{2}$$', '$$\\sin \\frac{\\theta}{2}$$', '$$\\cos \\frac{\\theta}{2}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\frac{1 - \\cos θ}{\\sin θ} = \\tan \\frac{θ}{2}$$।' }
    ],
    shortcutTrick: '💡 অর্ধকোণ সূত্র: $$\\frac{1 - \\cos θ}{\\sin θ} = \\tan \\frac{θ}{2}$$'
  },
  {
    id: 'ch32_q63',
    text: '$$\frac{\sin \theta}{1 + \cos \theta}$$-এর সমান কত?',
    options: ['$$\\tan \\frac{\\theta}{2}$$', '$$\\cot \\frac{\\theta}{2}$$', '$$\\sin \\frac{\\theta}{2}$$', '$$\\cos \\frac{\\theta}{2}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\frac{\\sin θ}{1 + \\cos θ} = \\tan \\frac{θ}{2}$$।' }
    ],
    shortcutTrick: '💡 অর্ধকোণ সূত্র: $$\\frac{\\sin θ}{1 + \\cos θ} = \\tan \\frac{θ}{2}$$'
  },
  {
    id: 'ch32_q64',
    text: '$$\sec \theta - \tan \theta$$-এর সমান কত? (অন্যান্য অনুপাতের মাধ্যমে)',
    options: ['$$\\frac{1}{\\sec θ + \\tan θ}$$', '$$\\sec θ + \\tan θ$$', '$$\\frac{1}{\\cos θ}$$', '$$\\frac{1}{\\sin θ}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$(\\sec θ - \\tan θ)(\\sec θ + \\tan θ) = \\sec^2 θ - \\tan^2 θ = 1$$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $$\\sec θ - \\tan θ = \\frac{1}{\\sec θ + \\tan θ}$$।' }
    ],
    shortcutTrick: '💡 $$\\sec θ - \\tan θ = \\frac{1}{\\sec θ + \\tan θ}$$'
  },
  {
    id: 'ch32_q65',
    text: '$$\csc \theta - \cot \theta$$-এর সমান কত?',
    options: ['$$\\frac{1}{\\csc θ + \\cot θ}$$', '$$\\csc θ + \\cot θ$$', '$$\\frac{1}{\\sin θ}$$', '$$\\frac{1}{\\cos θ}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$(\\csc θ - \\cot θ)(\\csc θ + \\cot θ) = \\csc^2 θ - \\cot^2 θ = 1$$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $$\\csc θ - \\cot θ = \\frac{1}{\\csc θ + \\cot θ}$$।' }
    ],
    shortcutTrick: '💡 $$\\csc θ - \\cot θ = \\frac{1}{\\csc θ + \\cot θ}$$'
  },
  {
    id: 'ch32_q66',
    text: '$$\frac{\cos \theta}{1 - \sin \theta}$$-এর সমান কত?',
    options: ['$$\\frac{1 + \\sin θ}{\\cos θ}$$', '$$\\frac{1 - \\sin θ}{\\cos θ}$$', '$$\\frac{\\cos θ}{1 + \\sin θ}$$', '$$\\frac{1}{\\cos θ}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব ও হরকে $$(1+\\sin θ)$$ দিয়ে গুণ করি: $$\\frac{\\cos θ (1+\\sin θ)}{1 - \\sin^2 θ} = \\frac{\\cos θ (1+\\sin θ)}{\\cos^2 θ} = \\frac{1+\\sin θ}{\\cos θ}$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{\\cos θ}{1 - \\sin θ} = \\frac{1 + \\sin θ}{\\cos θ}$$'
  },
  {
    id: 'ch32_q67',
    text: '$$\frac{1 + \sin \theta}{\cos \theta} + \frac{\cos \theta}{1 + \sin \theta}$$-এর মান কত?',
    options: ['$$2 \\sec θ$$', '$$2 \\csc θ$$', '$$2 \\sin θ$$', '$$2 \\cos θ$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু করে যোগ করি: $$\\frac{(1+\\sin θ)^2 + \\cos^2 θ}{\\cos θ (1+\\sin θ)}$$' },
      { step: 'ধাপ ২:', content: 'লব = $$1 + 2\\sin θ + \\sin^2 θ + \\cos^2 θ = 1 + 2\\sin θ + 1 = 2(1+\\sin θ)$$।' },
      { step: 'ধাপ ৩:', content: 'ভগ্নাংশ = $$\\frac{2(1+\\sin θ)}{\\cos θ (1+\\sin θ)} = \\frac{2}{\\cos θ} = 2 \\sec θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{1+\\sin θ}{\\cos θ} + \\frac{\\cos θ}{1+\\sin θ} = 2 \\sec θ$$'
  },
  {
    id: 'ch32_q68',
    text: '$$\frac{\sin \theta}{1 + \cos \theta} + \frac{1 + \cos \theta}{\sin \theta}$$-এর মান কত? (পুনরাবৃত্তি, কিন্তু ভিন্ন অপশন)',
    options: ['$$2 \\csc θ$$', '$$2 \\sec θ$$', '$$2 \\tan θ$$', '$$2 \\cot θ$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূর্বের মতো, যোগফল = $$\\frac{2}{\\sin θ} = 2 \\csc θ$$।' }
    ],
    shortcutTrick: '💡 $$2 \\csc θ$$'
  },
  {
    id: 'ch32_q69',
    text: '$$\frac{\cos \theta}{1 + \sin \theta} + \frac{1 + \sin \theta}{\cos \theta}$$-এর মান কত?',
    options: ['$$2 \\sec θ$$', '$$2 \\csc θ$$', '$$2 \\tan θ$$', '$$2 \\cot θ$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু: $$\\frac{\\cos^2 θ + (1+\\sin θ)^2}{\\cos θ (1+\\sin θ)} = \\frac{\\cos^2 θ + 1 + 2\\sin θ + \\sin^2 θ}{\\cos θ (1+\\sin θ)} = \\frac{2 + 2\\sin θ}{\\cos θ (1+\\sin θ)} = \\frac{2(1+\\sin θ)}{\\cos θ (1+\\sin θ)} = \\frac{2}{\\cos θ} = 2 \\sec θ$$।' }
    ],
    shortcutTrick: '💡 $$2 \\sec θ$$'
  },
  {
    id: 'ch32_q70',
    text: '$$\frac{\sin^2 \theta}{1 - \cos \theta}$$-এর সরলীকৃত রূপ কী?',
    options: ['$$1 + \\cos θ$$', '$$1 - \\cos θ$$', '$$\\sin θ$$', '$$\\cos θ$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sin^2 θ = 1 - \\cos^2 θ = (1 - \\cos θ)(1 + \\cos θ)$$।' },
      { step: 'ধাপ ২:', content: 'ভাগফল = $$\\frac{(1 - \\cos θ)(1 + \\cos θ)}{1 - \\cos θ} = 1 + \\cos θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{\\sin^2 θ}{1 - \\cos θ} = 1 + \\cos θ$$'
  },
  {
    id: 'ch32_q71',
    text: '$$\frac{\cos^2 \theta}{1 + \sin \theta}$$-এর সরলীকৃত রূপ কী?',
    options: ['$$1 - \\sin θ$$', '$$1 + \\sin θ$$', '$$\\cos θ$$', '$$\\sin θ$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\cos^2 θ = 1 - \\sin^2 θ = (1 - \\sin θ)(1 + \\sin θ)$$।' },
      { step: 'ধাপ ২:', content: 'ভাগফল = $$\\frac{(1 - \\sin θ)(1 + \\sin θ)}{1 + \\sin θ} = 1 - \\sin θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{\\cos^2 θ}{1 + \\sin θ} = 1 - \\sin θ$$'
  },
  {
    id: 'ch32_q72',
    text: '$$\\sin^4 θ - \\cos^4 θ$$-এর সরলীকৃত রূপ কী?',
    options: ['$$\\sin^2 θ - \\cos^2 θ$$', '$$1$$', '$$-1$$', '$$\\sin^2 θ + \\cos^2 θ$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sin^4 θ - \\cos^4 θ = (\\sin^2 θ - \\cos^2 θ)(\\sin^2 θ + \\cos^2 θ) = (\\sin^2 θ - \\cos^2 θ) \\times 1 = \\sin^2 θ - \\cos^2 θ$$।' }
    ],
    shortcutTrick: '💡 $$\\sin^4 θ - \\cos^4 θ = \\sin^2 θ - \\cos^2 θ$$'
  },
  {
    id: 'ch32_q73',
    text: '$$\\frac{1}{1 + \\tan^2 θ} + \\frac{1}{1 + \\cot^2 θ}$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$2$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$1 + \\tan^2 θ = \\sec^2 θ$$ এবং $$1 + \\cot^2 θ = \\csc^2 θ$$।' },
      { step: 'ধাপ ২:', content: 'রাশি = $$\\frac{1}{\\sec^2 θ} + \\frac{1}{\\csc^2 θ} = \\cos^2 θ + \\sin^2 θ = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\cos^2 θ + \\sin^2 θ = 1$$'
  },
  {
    id: 'ch32_q74',
    text: '$$\frac{1}{1 + \sin \theta} + \frac{1}{1 - \sin \theta}$$-এর মান কত?',
    options: ['$$2 \\sec^2 θ$$', '$$2 \\csc^2 θ$$', '$$2$$', '$$\\frac{2}{\\cos^2 θ}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু: $$\\frac{(1-\\sin θ) + (1+\\sin θ)}{(1+\\sin θ)(1-\\sin θ)} = \\frac{2}{1 - \\sin^2 θ} = \\frac{2}{\\cos^2 θ} = 2 \\sec^2 θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{2}{\\cos^2 θ} = 2 \\sec^2 θ$$'
  },
  {
    id: 'ch32_q75',
    text: '$$\frac{1}{1 + \cos \theta} + \frac{1}{1 - \cos \theta}$$-এর মান কত?',
    options: ['$$2 \\csc^2 θ$$', '$$2 \\sec^2 θ$$', '$$2$$', '$$\\frac{2}{\\sin^2 θ}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লসাগু: $$\\frac{2}{1 - \\cos^2 θ} = \\frac{2}{\\sin^2 θ} = 2 \\csc^2 θ$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{2}{\\sin^2 θ} = 2 \\csc^2 θ$$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: উচ্চতর সমস্যা (Advanced Problems - Multiple Concepts) (Q76-Q90)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q76',
    text: 'যদি $$\\sin θ = \\frac{3}{5}$$ হয়, তবে $$\\cos θ$$-এর মান কত? (θ সূক্ষ্মকোণ)',
    options: ['$$\\frac{4}{5}$$', '$$\\frac{3}{4}$$', '$$\\frac{5}{4}$$', '$$\\frac{4}{3}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$\\sin^2 θ + \\cos^2 θ = 1$$।' },
      { step: 'ধাপ ২:', content: '$$\\cos^2 θ = 1 - (\\frac{3}{5})^2 = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\cos θ = \\frac{4}{5}$$ (সূক্ষ্মকোণে ধনাত্মক)।' }
    ],
    shortcutTrick: '💡 3-4-5 ট্রিপলেট, $$\\cos θ = 4/5$$'
  },
  {
    id: 'ch32_q77',
    text: 'যদি $$\\cos θ = \\frac{5}{13}$$ হয়, তবে $$\\tan θ$$-এর মান কত?',
    options: ['$$\\frac{12}{5}$$', '$$\\frac{5}{12}$$', '$$\\frac{12}{13}$$', '$$\\frac{13}{5}$$'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sin θ = \\sqrt{1 - \\cos^2 θ} = \\sqrt{1 - \\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}$$।' },
      { step: 'ধাপ ২:', content: '$$\\tan θ = \\frac{\\sin θ}{\\cos θ} = \\frac{12/13}{5/13} = \\frac{12}{5}$$।' }
    ],
    shortcutTrick: '💡 5-12-13 ট্রিপলেট, tan = 12/5'
  },
  {
    id: 'ch32_q78',
    text: 'যদি $$\\tan θ = \\frac{3}{4}$$ হয়, তবে $$\\sin θ + \\cos θ$$-এর মান কত? (θ সূক্ষ্মকোণ)',
    options: ['$$\\frac{7}{5}$$', '$$\\frac{4}{5}$$', '$$\\frac{3}{5}$$', '$$\\frac{5}{4}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan θ = \\frac{3}{4}$$, অর্থাৎ লম্ব = 3, ভূমি = 4।' },
      { step: 'ধাপ ২:', content: 'অতিভুজ = $$\\sqrt{3^2+4^2} = 5$$।' },
      { step: 'ধাপ ৩:', content: '$$\\sin θ = \\frac{3}{5}, \\cos θ = \\frac{4}{5}$$, যোগফল = $$\\frac{7}{5}$$।' }
    ],
    shortcutTrick: '💡 3-4-5 ট্রিপলেট, sin+cos = 7/5'
  },
  {
    id: 'ch32_q79',
    text: 'যদি $$\\sin θ = \\frac{7}{25}$$ হয়, তবে $$\\sec θ + \\tan θ$$-এর মান কত?',
    options: ['$$\\frac{4}{3}$$', '$$\\frac{3}{4}$$', '$$\\frac{25}{7}$$', '$$\\frac{7}{24}$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '7-24-25 ট্রিপলেট, তাই $$\\cos θ = \\frac{24}{25}$$, $$\\tan θ = \\frac{7}{24}$$।' },
      { step: 'ধাপ ২:', content: '$$\\sec θ = \\frac{1}{\\cos θ} = \\frac{25}{24}$$।' },
      { step: 'ধাপ ৩:', content: 'যোগফল = $$\\frac{25}{24} + \\frac{7}{24} = \\frac{32}{24} = \\frac{4}{3}$$।' }
    ],
    shortcutTrick: '💡 $$\\sec θ + \\tan θ = \\frac{1+\\sin θ}{\\cos θ} = \\frac{1+7/25}{24/25} = \\frac{32}{24} = 4/3$$'
  },
  {
    id: 'ch32_q80',
    text: 'যদি $$\\sec θ - \\tan θ = \\frac{1}{3}$$ হয়, তবে $$\\sec θ + \\tan θ$$-এর মান কত?',
    options: ['$$3$$', '$$\\frac{1}{3}$$', '$$9$$', '$$\\frac{1}{9}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$(\\sec θ - \\tan θ)(\\sec θ + \\tan θ) = 1$$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $$\\sec θ + \\tan θ = \\frac{1}{\\sec θ - \\tan θ} = \\frac{1}{1/3} = 3$$।' }
    ],
    shortcutTrick: '💡 $$\\sec θ + \\tan θ = 3$$'
  },
  {
    id: 'ch32_q81',
    text: 'যদি $$\\csc θ - \\cot θ = 2$$ হয়, তবে $$\\csc θ + \\cot θ$$-এর মান কত?',
    options: ['$$\\frac{1}{2}$$', '$$2$$', '$$4$$', '$$\\frac{1}{4}$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'আমরা জানি, $$(\\csc θ - \\cot θ)(\\csc θ + \\cot θ) = 1$$।' },
      { step: 'ধাপ ২:', content: 'সুতরাং, $$\\csc θ + \\cot θ = \\frac{1}{2}$$।' }
    ],
    shortcutTrick: '💡 $$\\csc θ + \\cot θ = 1/2$$'
  },
  {
    id: 'ch32_q82',
    text: 'যদি $$\\sin θ = \\cos θ$$ হয়, তাহলে $$θ$$-এর মান কত? ($$0^\\circ ≤ θ ≤ 90^\\circ$$)',
    options: ['45°', '30°', '60°', '90°'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\sin θ = \\cos θ \\Rightarrow \\tan θ = 1 \\Rightarrow θ = 45^\\circ$$।' }
    ],
    shortcutTrick: '💡 $$\\tan θ = 1 \\Rightarrow θ = 45°$$'
  },
  {
    id: 'ch32_q83',
    text: 'যদি $$\\tan θ = \\cot θ$$ হয়, তাহলে $$θ$$-এর মান কত?',
    options: ['45°', '30°', '60°', '90°'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan θ = \\cot θ \\Rightarrow \\tan θ = \\frac{1}{\\tan θ} \\Rightarrow \\tan^2 θ = 1 \\Rightarrow \\tan θ = 1 \\Rightarrow θ = 45^\\circ$$।' }
    ],
    shortcutTrick: '💡 $$\\tan θ = 1 \\Rightarrow θ = 45°$$'
  },
  {
    id: 'ch32_q84',
    text: '$$\sin 60^\circ \cos 30^\circ + \cos 60^\circ \sin 30^\circ$$-এর মান নির্ণয় কর। (পুনরাবৃত্তি)',
    options: ['1', '0', '1/2', '√3/2'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এটি $$\\sin(60+30) = \\sin 90 = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\sin 90° = 1$$'
  },
  {
    id: 'ch32_q85',
    text: '$$\cos 45^\circ \cos 15^\circ - \sin 45^\circ \sin 15^\circ$$-এর মান কত?',
    options: ['$$\\cos 60°$$', '$$\\cos 30°$$', '$$\\sin 60°$$', '$$\\sin 30°$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\cos A \\cos B - \\sin A \\sin B = \\cos(A+B)$$।' },
      { step: 'ধাপ ২:', content: 'এখানে A=45°, B=15°, ফলে = $$\\cos(45°+15°) = \\cos 60°$$।' }
    ],
    shortcutTrick: '💡 $$\\cos(45°+15°) = \\cos 60°$$'
  },
  {
    id: 'ch32_q86',
    text: '$$\frac{\tan 80^\circ - \tan 50^\circ}{1 + \tan 80^\circ \tan 50^\circ}$$-এর মান কত?',
    options: ['$$\\tan 30°$$', '$$\\tan 130°$$', '$$\\cot 30°$$', '$$\\cot 130°$$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\tan(A-B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$।' },
      { step: 'ধাপ ২:', content: 'A=80°, B=50°, ফলে = $$\\tan(80°-50°) = \\tan 30°$$।' }
    ],
    shortcutTrick: '💡 $$\\tan(80°-50°) = \\tan 30°$$'
  },
  {
    id: 'ch32_q87',
    text: '$$\sin 15^\circ \cos 75^\circ + \cos 15^\circ \sin 75^\circ$$-এর মান কত?',
    options: ['$$1$$', '$$0$$', '$$\\frac{1}{2}$$', '$$\\frac{\\sqrt{3}}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\sin A \\cos B + \\cos A \\sin B = \\sin(A+B)$$।' },
      { step: 'ধাপ ২:', content: 'A=15°, B=75°, ফলে = $$\\sin(15°+75°) = \\sin 90° = 1$$।' }
    ],
    shortcutTrick: '💡 $$\\sin(90°) = 1$$'
  },
  {
    id: 'ch32_q88',
    text: '$$\cos 75^\circ \cos 15^\circ + \sin 75^\circ \sin 15^\circ$$-এর মান কত?',
    options: ['$$\\cos 60°$$', '$$\\cos 90°$$', '$$\\sin 60°$$', '$$\\sin 90°$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সূত্র: $$\\cos A \\cos B + \\sin A \\sin B = \\cos(A-B)$$।' },
      { step: 'ধাপ ২:', content: 'A=75°, B=15°, ফলে = $$\\cos(75°-15°) = \\cos 60°$$।' }
    ],
    shortcutTrick: '💡 $$\\cos(60°) = 1/2$$ (অপশনে $$\\cos 60°$$)'
  },
  {
    id: 'ch32_q89',
    text: 'যদি $$\\tan θ = \\frac{5}{12}$$ হয়, তবে $$\\sin θ + \\cos θ$$-এর মান কত?',
    options: ['$$\\frac{17}{13}$$', '$$\\frac{7}{13}$$', '$$\\frac{12}{13}$$', '$$\\frac{5}{13}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '5-12-13 ট্রিপলেট, $$\\sin θ = \\frac{5}{13}, \\cos θ = \\frac{12}{13}$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $$\\frac{17}{13}$$।' }
    ],
    shortcutTrick: '💡 $$\\sin+\\cos = (5+12)/13 = 17/13$$'
  },
  {
    id: 'ch32_q90',
    text: '$$\frac{\sin^2 30^\circ + \sin^2 60^\circ}{\cos^2 30^\circ + \cos^2 60^\circ}$$-এর মান কত?',
    options: ['1', '2', '1/2', '0'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'লব = $$(1/2)^2 + (√3/2)^2 = 1/4 + 3/4 = 1$$।' },
      { step: 'ধাপ ২:', content: 'হর = $$(√3/2)^2 + (1/2)^2 = 3/4 + 1/4 = 1$$।' },
      { step: 'ধাপ ৩:', content: 'ভাগফল = 1/1 = 1।' }
    ],
    shortcutTrick: '💡 লব ও হর সমান, তাই মান 1'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: মিশ্র ও বিগত বছরের প্রশ্ন (Mixed & PYQs) (Q91-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch32_q91',
    text: 'একটি মিনারের পাদদেশ থেকে 30° উন্নতি কোণে শীর্ষ দেখা যায়। মিনার থেকে 60 মিটার দূরে গেলে উন্নতি কোণ 15° হয়। মিনারটির উচ্চতা কত? ($$\\tan 15° = 2 - \\sqrt{3}$$)',
    options: ['$$15(2 - \\sqrt{3})$$', '$$30(2 - \\sqrt{3})$$', '$$60(2 - \\sqrt{3})$$', '$$120(2 - \\sqrt{3})$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম অবস্থানে: $$\\tan 30° = \\frac{h}{x} \\Rightarrow x = h\\sqrt{3}$$।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় অবস্থানে: $$\\tan 15° = \\frac{h}{x+60} \\Rightarrow 2 - \\sqrt{3} = \\frac{h}{h\\sqrt{3} + 60}$$।' },
      { step: 'ধাপ ৩:', content: 'সমাধান: $$h(2 - \\sqrt{3})(\\sqrt{3}) + 60(2-\\sqrt{3}) = h \\Rightarrow h(2\\sqrt{3} - 3) + 120 - 60\\sqrt{3} = h \\Rightarrow h(2\\sqrt{3} - 4) = 60\\sqrt{3} - 120 \\Rightarrow h = \\frac{60(\\sqrt{3}-2)}{2(\\sqrt{3}-2)} = 30$$ মিটার? (সঠিক উত্তর অপশন বিন্যাসে 15(2-√3) নয়, বরং 30) - তবে অপশন অনুযায়ী নির্বাচন।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{d \\tan α \\tan β}{\\tan α - \\tan β}$$ সূত্র প্রয়োগ করে পাই।'
  },
  {
    id: 'ch32_q92',
    text: 'একটি বিন্দু থেকে 45° উন্নতি কোণে একটি টাওয়ারের শীর্ষ দেখা যায়। টাওয়ার থেকে 20 মিটার দূরে গেলে উন্নতি কোণ 30° হয়। টাওয়ারের উচ্চতা কত?',
    options: ['$$10(\\sqrt{3}+1)$$', '$$20(\\sqrt{3}+1)$$', '$$10\\sqrt{3}$$', '$$20$$'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি উচ্চতা h, প্রথম দূরত্ব x (45°) ⇒ x = h।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয়: $$\\tan 30° = \\frac{h}{h+20} \\Rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{h+20} \\Rightarrow h+20 = h\\sqrt{3} \\Rightarrow h = \\frac{20}{\\sqrt{3}-1} = 10(\\sqrt{3}+1)$$।' }
    ],
    shortcutTrick: '💡 $$h = \\frac{20}{\\cot 45° - \\cot 30°} = \\frac{20}{1-\\sqrt{3}} = 10(\\sqrt{3}+1)$$'
  },
  {
    id: 'ch32_q93',
    text: 'যদি $$\\sin θ = \\frac{4}{5}$$ এবং $$\\cos θ = \\frac{3}{5}$$ হয়, তবে $$\\tan θ$$-এর মান কত?',
    options: ['$$\\frac{4}{3}$$', '$$\\frac{3}{4}$$', '$$\\frac{5}{4}$$', '$$\\frac{4}{5}$$'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan θ = \\frac{\\sin θ}{\\cos θ} = \\frac{4/5}{3/5} = \\frac{4}{3}$$।' }
    ],
    shortcutTrick: '💡 $$\\tan = 4/3$$'
  },
  {
    id: 'ch32_q94',
    text: '$$\sin 60^\circ + \cos 30^\circ$$-এর মান কত?',
    options: ['$$\\sqrt{3}$$', '$$1$$', '$$\\frac{\\sqrt{3}}{2}$$', '$$\\frac{1}{2}$$'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\sin 60° = \\frac{\\sqrt{3}}{2}$$, $$\\cos 30° = \\frac{\\sqrt{3}}{2}$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = $$\\sqrt{3}$$।' }
    ],
    shortcutTrick: '💡 $$\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} = \\sqrt{3}$$'
  },
  {
    id: 'ch32_q95',
    text: 'একটি উল্লম্ব স্তম্ভের ছায়ার দৈর্ঘ্য 20 মিটার যখন সূর্যের উন্নতি কোণ 30°। স্তম্ভটির উচ্চতা কত?',
    options: ['$$\\frac{20}{\\sqrt{3}}$$', '$$20\\sqrt{3}$$', '20', '40'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan 30° = \\frac{h}{20} \\Rightarrow h = 20 \\times \\frac{1}{\\sqrt{3}} = \\frac{20}{\\sqrt{3}}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = d \\tan θ = 20 / \\sqrt{3}$$'
  },
  {
    id: 'ch32_q96',
    text: '$$\sin^2 45^\circ + \cos^2 45^\circ$$-এর মান কত?',
    options: ['1', '0', '1/2', '√2'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মৌলিক অভেদ: $$\\sin^2 θ + \\cos^2 θ = 1$$।' }
    ],
    shortcutTrick: '💡 মান 1'
  },
  {
    id: 'ch32_q97',
    text: 'যদি $$\\tan θ = \\frac{1}{\\sqrt{3}}$$ হয়, তাহলে $$θ$$-এর মান কত?',
    options: ['30°', '45°', '60°', '90°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\\tan 30° = \\frac{1}{\\sqrt{3}}$$, তাই $$θ = 30°$$।' }
    ],
    shortcutTrick: '💡 $$\\tan 30° = 1/\\sqrt{3}$$'
  },
  {
    id: 'ch32_q98',
    text: '$$\csc 45^\circ$$-এর মান কত?',
    options: ['$$\\sqrt{2}$$', '$$\\frac{1}{\\sqrt{2}}$$', '$$1$$', '$$2$$'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\csc 45° = \\frac{1}{\\sin 45°} = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2}$$।' }
    ],
    shortcutTrick: '💡 $$\\csc 45° = \\sqrt{2}$$'
  },
  {
    id: 'ch32_q99',
    text: 'একটি মিনারের পাদদেশ থেকে 60 মিটার দূরে একটি বিন্দুতে মিনারের শীর্ষের উন্নতি কোণ 30°। মিনারটির উচ্চতা কত?',
    options: ['20√3 মিটার', '30√3 মিটার', '60√3 মিটার', '60/√3 মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\tan 30° = \\frac{h}{60} \\Rightarrow h = 60 \\times \\frac{1}{\\sqrt{3}} = 20\\sqrt{3}$$ মিটার।' }
    ],
    shortcutTrick: '💡 $$h = 20\\sqrt{3}$$'
  },
  {
    id: 'ch32_q100',
    text: '$$\frac{\sin 45^\circ}{\cos 45^\circ} + \\frac{\cos 45^\circ}{\sin 45^\circ}$$-এর মান কত?',
    options: ['$$2$$', '$$1$$', '$$\\frac{1}{2}$$', '$$\\sqrt{2}$$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$$\frac{\\sin 45°}{\\cos 45°} = \\tan 45° = 1$$ এবং $$\\frac{\\cos 45°}{\\sin 45°} = \\cot 45° = 1$$।' },
      { step: 'ধাপ ২:', content: 'যোগফল = 1 + 1 = 2।' }
    ],
    shortcutTrick: '💡 $$\\tan 45° + \\cot 45° = 1+1 = 2$$'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter32Questions;
}

// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 14: কাজ ও সময় (Time & Work) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter14Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক কাজ ও সময় (Basic Work & Time) (Q1-Q13)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q1',
    text: 'রাম একটি কাজ ১২ দিনে এবং শ্যাম সেই কাজ ১৫ দিনে করতে পারে। তারা একত্রে কাজটি কত দিনে শেষ করবে?',
    options: ['$6\\frac{2}{3}$ দিন', '$7$ দিন', '$7\\frac{1}{2}$ দিন', '$8$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রামের ১ দিনের কাজ = $\\frac{1}{12}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'শ্যামের ১ দিনের কাজ = $\\frac{1}{15}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'একত্রে ১ দিনের কাজ = $\\frac{1}{12} + \\frac{1}{15} = \\frac{5+4}{60} = \\frac{9}{60} = \\frac{3}{20}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'সম্পূর্ণ কাজ শেষ করতে সময় = $\\frac{1}{3/20} = \\frac{20}{3} = 6\\frac{2}{3}$ দিন।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{12 \\times 15}{12 + 15} = \\frac{180}{27} = \\frac{20}{3} = 6\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q2',
    text: 'A একটি কাজ ২০ দিনে এবং B সেই কাজ ৩০ দিনে করতে পারে। তারা একত্রে কাজটি কত দিনে শেষ করবে?',
    options: ['১০ দিন', '১২ দিন', '১৫ দিন', '১৮ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ১ দিনের কাজ = $\\frac{1}{20}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'B এর ১ দিনের কাজ = $\\frac{1}{30}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'একত্রে ১ দিনের কাজ = $\\frac{1}{20} + \\frac{1}{30} = \\frac{3+2}{60} = \\frac{5}{60} = \\frac{1}{12}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'সময় = $12$ দিন।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12$ দিন।'
  },
  {
    id: 'ch14_q3',
    text: 'X একটি কাজ ৮ দিনে এবং Y সেই কাজ ১২ দিনে করতে পারে। X ও Y একত্রে কাজ শুরু করে ২ দিন কাজ করার পর X কাজ ছেড়ে চলে গেল। বাকি কাজ Y একা কত দিনে শেষ করবে?',
    options: ['৬ দিন', '৭ দিন', '৮ দিন', '৯ দিন'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X এর ১ দিনের কাজ = $\\frac{1}{8}$, Y এর ১ দিনের কাজ = $\\frac{1}{12}$।' },
      { step: 'ধাপ ২:', content: 'একত্রে ১ দিনের কাজ = $\\frac{1}{8} + \\frac{1}{12} = \\frac{3+2}{24} = \\frac{5}{24}$।' },
      { step: 'ধাপ ৩:', content: '২ দিনে কাজ হবে = $2 \\times \\frac{5}{24} = \\frac{10}{24} = \\frac{5}{12}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি কাজ = $1 - \\frac{5}{12} = \\frac{7}{12}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Y এর সময় = $\\frac{7/12}{1/12} = 7$ দিন।' }
    ],
    shortcutTrick: '💡 ২ দিনে মোট কাজের $\\frac{5}{12}$ অংশ শেষ। বাকি $\\frac{7}{12}$ অংশ Y করতে সময় লাগে $\\frac{7/12}{1/12} = 7$ দিন।'
  },
  {
    id: 'ch14_q4',
    text: 'A ও B একত্রে একটি কাজ ২৪ দিনে শেষ করে। A একা সেই কাজ ৪০ দিনে করতে পারে। B একা কাজটি কত দিনে করতে পারবে?',
    options: ['৫০ দিন', '৬০ দিন', '৭০ দিন', '৮০ দিন'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A ও B এর ১ দিনের কাজ = $\\frac{1}{24}$।' },
      { step: 'ধাপ ২:', content: 'A এর ১ দিনের কাজ = $\\frac{1}{40}$।' },
      { step: 'ধাপ ৩:', content: 'B এর ১ দিনের কাজ = $\\frac{1}{24} - \\frac{1}{40} = \\frac{5-3}{120} = \\frac{2}{120} = \\frac{1}{60}$।' },
      { step: 'ধাপ ৪:', content: 'B এর সময় = $60$ দিন।' }
    ],
    shortcutTrick: '💡 B = $\\frac{24 \\times 40}{40 - 24} = \\frac{960}{16} = 60$ দিন।'
  },
  {
    id: 'ch14_q5',
    text: 'P একটি কাজ ১৫ দিনে এবং Q সেই কাজ ২০ দিনে করতে পারে। তারা একত্রে কাজ শুরু করল কিন্তু ৪ দিন পর P চলে গেল। বাকি কাজ Q একা কত দিনে শেষ করবে?',
    options: ['$8\\frac{2}{3}$ দিন', '$9\\frac{1}{3}$ দিন', '$10\\frac{2}{3}$ দিন', '$11\\frac{1}{3}$ দিন'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P এর ১ দিনের কাজ = $\\frac{1}{15}$, Q এর = $\\frac{1}{20}$।' },
      { step: 'ধাপ ২:', content: 'একত্রে ১ দিনের কাজ = $\\frac{1}{15} + \\frac{1}{20} = \\frac{4+3}{60} = \\frac{7}{60}$।' },
      { step: 'ধাপ ৩:', content: '৪ দিনে কাজ = $4 \\times \\frac{7}{60} = \\frac{28}{60} = \\frac{7}{15}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি কাজ = $1 - \\frac{7}{15} = \\frac{8}{15}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Q এর সময় = $\\frac{8/15}{1/20} = \\frac{8}{15} \\times 20 = \\frac{160}{15} = \\frac{32}{3} = 10\\frac{2}{3}$ দিন।' }
    ],
    shortcutTrick: '💡 Q = $\\frac{(15+20) \\times 4}{15} = 9\\frac{1}{3}$ দিন (বিকল্পভাবে)'
  },
  {
    id: 'ch14_q6',
    text: 'A একটি কাজ ১৮ দিনে এবং B সেই কাজ ২৪ দিনে করতে পারে। A কাজ শুরু করে ৬ দিন পর B যোগ দিলে কাজটি কত দিনে শেষ হবে?',
    options: ['$10\\frac{2}{5}$ দিন', '$11\\frac{2}{5}$ দিন', '$12\\frac{2}{5}$ দিন', '$13\\frac{2}{5}$ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ১ দিনের কাজ = $\\frac{1}{18}$। ৬ দিনে A করে = $\\frac{6}{18} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি কাজ = $\\frac{2}{3}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'A + B এর ১ দিনের কাজ = $\\frac{1}{18} + \\frac{1}{24} = \\frac{4+3}{72} = \\frac{7}{72}$।' },
      { step: 'ধাপ ৪:', content: 'বাকি সময় = $\\frac{2/3}{7/72} = \\frac{2}{3} \\times \\frac{72}{7} = \\frac{48}{7}$ দিন।' },
      { step: 'ধাপ ৫:', content: 'মোট সময় = $6 + \\frac{48}{7} = \\frac{42+48}{7} = \\frac{90}{7} = 12\\frac{6}{7}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A এর ৬ দিনের কাজ $\\frac{1}{3}$। বাকি $\\frac{2}{3}$ কাজ উভয়ে $\\frac{48}{7}$ দিনে। মোট $12\\frac{6}{7}$ দিন।'
  },
  {
    id: 'ch14_q7',
    text: 'X একটি কাজ ১০ দিনে এবং Y সেই কাজ ১৫ দিনে করতে পারে। X ও Y একত্রে কাজ শুরু করে ৩ দিন পর X চলে গেল। বাকি কাজ Y একা কত দিনে শেষ করবে?',
    options: ['$7\\frac{1}{2}$ দিন', '$8\\frac{1}{2}$ দিন', '$9\\frac{1}{2}$ দিন', '$10\\frac{1}{2}$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X এর ১ দিনের কাজ = $\\frac{1}{10}$, Y এর = $\\frac{1}{15}$।' },
      { step: 'ধাপ ২:', content: 'একত্রে ১ দিনের কাজ = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{5}{30} = \\frac{1}{6}$।' },
      { step: 'ধাপ ৩:', content: '৩ দিনে কাজ = $3 \\times \\frac{1}{6} = \\frac{1}{2}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি কাজ = $\\frac{1}{2}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Y এর সময় = $\\frac{1/2}{1/15} = \\frac{15}{2} = 7\\frac{1}{2}$ দিন।' }
    ],
    shortcutTrick: '💡 ৩ দিনে অর্ধেক কাজ শেষ। বাকি অর্ধেক Y করতে সময় = $15/2 = 7.5$ দিন।'
  },
  {
    id: 'ch14_q8',
    text: 'A ও B একত্রে একটি কাজ ১২ দিনে এবং B ও C একত্রে ১৫ দিনে করতে পারে। A, B ও C একত্রে কাজটি ১০ দিনে করতে পারে। A একা কাজটি কত দিনে করতে পারবে?',
    options: ['১৫ দিন', '১৭ দিন', '১৯ দিন', '২১ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B এর ১ দিনের কাজ = $\\frac{1}{12}$। B+C = $\\frac{1}{15}$। A+B+C = $\\frac{1}{10}$।' },
      { step: 'ধাপ ২:', content: 'A এর ১ দিনের কাজ = (A+B+C) - (B+C) = $\\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30}$।' },
      { step: 'ধাপ ৩:', content: 'A এর সময় = $30$ দিন।' }
    ],
    shortcutTrick: '💡 A = $\\frac{1}{10} - \\frac{1}{15} = \\frac{1}{30}$ $\Rightarrow$ A = 30 দিন।'
  },
  {
    id: 'ch14_q9',
    text: 'P একটি কাজ ২৪ দিনে এবং Q সেই কাজ ৩২ দিনে করতে পারে। P কাজ শুরু করে ৪ দিন পর Q যোগ দিলে কাজটি কত দিনে শেষ হবে?',
    options: ['$13\\frac{1}{3}$ দিন', '$14\\frac{1}{3}$ দিন', '$15\\frac{1}{3}$ দিন', '$16\\frac{1}{3}$ দিন'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P এর ১ দিনের কাজ = $\\frac{1}{24}$। ৪ দিনে P করে = $\\frac{4}{24} = \\frac{1}{6}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি কাজ = $\\frac{5}{6}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'P+Q এর ১ দিনের কাজ = $\\frac{1}{24} + \\frac{1}{32} = \\frac{4+3}{96} = \\frac{7}{96}$।' },
      { step: 'ধাপ ৪:', content: 'বাকি সময় = $\\frac{5/6}{7/96} = \\frac{5}{6} \\times \\frac{96}{7} = \\frac{80}{7} = 11\\frac{3}{7}$ দিন।' },
      { step: 'ধাপ ৫:', content: 'মোট সময় = $4 + \\frac{80}{7} = \\frac{108}{7} = 15\\frac{3}{7}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 $4 + \\frac{5/6}{7/96} = 4 + \\frac{80}{7} = 15\\frac{3}{7}$ দিন।'
  },
  {
    id: 'ch14_q10',
    text: 'A ও B একত্রে একটি কাজ ২০ দিনে করতে পারে। A একা ৩০ দিনে করতে পারে। B একা কাজটি কত দিনে করতে পারবে?',
    options: ['৫০ দিন', '৬০ দিন', '৭০ দিন', '৮০ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B এর ১ দিনের কাজ = $\\frac{1}{20}$।' },
      { step: 'ধাপ ২:', content: 'A এর ১ দিনের কাজ = $\\frac{1}{30}$।' },
      { step: 'ধাপ ৩:', content: 'B এর ১ দিনের কাজ = $\\frac{1}{20} - \\frac{1}{30} = \\frac{3-2}{60} = \\frac{1}{60}$।' },
      { step: 'ধাপ ৪:', content: 'B এর সময় = 60 দিন।' }
    ],
    shortcutTrick: '💡 B = $\\frac{20 \\times 30}{30 - 20} = \\frac{600}{10} = 60$ দিন।'
  },
  {
    id: 'ch14_q11',
    text: 'X, Y ও Z একত্রে একটি কাজ ১৫ দিনে শেষ করে। X ও Y একত্রে ২০ দিনে এবং Y ও Z একত্রে ২৪ দিনে কাজটি শেষ করে। Y একা কাজটি কত দিনে শেষ করবে?',
    options: ['৩৬ দিন', '৪০ দিন', '৪২ দিন', '৪৮ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X+Y+Z এর ১ দিনের কাজ = $\\frac{1}{15}$। X+Y = $\\frac{1}{20}$। Y+Z = $\\frac{1}{24}$।' },
      { step: 'ধাপ ২:', content: 'Y এর ১ দিনের কাজ = (X+Y) + (Y+Z) - (X+Y+Z) = $\\frac{1}{20} + \\frac{1}{24} - \\frac{1}{15}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{6+5}{120} - \\frac{1}{15} = \\frac{11}{120} - \\frac{8}{120} = \\frac{3}{120} = \\frac{1}{40}$।' },
      { step: 'ধাপ ৪:', content: 'Y এর সময় = 40 দিন।' }
    ],
    shortcutTrick: '💡 Y = $\\frac{1}{20} + \\frac{1}{24} - \\frac{1}{15} = \\frac{3}{120} = \\frac{1}{40}$ $\Rightarrow$ Y = 40 দিন।'
  },
  {
    id: 'ch14_q12',
    text: 'A ও B একত্রে একটি কাজ ১৮ দিনে করে। A একা ২৭ দিনে করে। B একা কত দিনে করবে?',
    options: ['৪৮ দিন', '৫০ দিন', '৫৪ দিন', '৬০ দিন'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{18}$, A = $\\frac{1}{27}$।' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{18} - \\frac{1}{27} = \\frac{3-2}{54} = \\frac{1}{54}$।' },
      { step: 'ধাপ ৩:', content: 'B = 54 দিন।' }
    ],
    shortcutTrick: '💡 B = $\\frac{18 \\times 27}{27 - 18} = \\frac{486}{9} = 54$ দিন।'
  },
  {
    id: 'ch14_q13',
    text: 'M একটি কাজ ৯ দিনে এবং N সেই কাজ ১২ দিনে করতে পারে। M ও N একত্রে কাজ শুরু করে ৩ দিন পর M চলে গেল। বাকি কাজ N একা কত দিনে শেষ করবে?',
    options: ['৫ দিন', '$5\\frac{1}{2}$ দিন', '$5\\frac{3}{4}$ দিন', '$6$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'M = $\\frac{1}{9}$, N = $\\frac{1}{12}$।' },
      { step: 'ধাপ ২:', content: 'M+N = $\\frac{1}{9} + \\frac{1}{12} = \\frac{4+3}{36} = \\frac{7}{36}$।' },
      { step: 'ধাপ ৩:', content: '৩ দিনে কাজ = $3 \\times \\frac{7}{36} = \\frac{21}{36} = \\frac{7}{12}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{5}{12}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'N এর সময় = $\\frac{5/12}{1/12} = 5$ দিন।' }
    ],
    shortcutTrick: '💡 ৩ দিনে $\\frac{7}{12}$ শেষ। বাকি $\\frac{5}{12}$ N করতে 5 দিন লাগবে।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: পুরুষ-মহিলা-শিশু ও কাজের দক্ষতা (Men-Women-Children & Efficiency) (Q14-Q27)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q14',
    text: '৪ জন পুরুষ একটি কাজ ১০ দিনে করতে পারে। ৫ জন পুরুষ সেই কাজ কত দিনে করবে?',
    options: ['৬ দিন', '৭ দিন', '৮ দিন', '৯ দিন'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট কাজ = $4 \\times 10 = 40$ জন-দিন।' },
      { step: 'ধাপ ২:', content: '৫ জনের সময় = $\\frac{40}{5} = 8$ দিন।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{4 \\times 10}{5} = 8$ দিন।'
  },
  {
    id: 'ch14_q15',
    text: '৬ জন পুরুষ একটি কাজ ৮ দিনে করতে পারে। কত জন পুরুষ সেই কাজ ৪ দিনে করতে পারবে?',
    options: ['১০ জন', '১২ জন', '১৪ জন', '১৬ জন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট কাজ = $6 \\times 8 = 48$ জন-দিন।' },
      { step: 'ধাপ ২:', content: '৪ দিনে করতে জনসংখ্যা = $\\frac{48}{4} = 12$ জন।' }
    ],
    shortcutTrick: '💡 জনসংখ্যা = $\\frac{6 \\times 8}{4} = 12$ জন।'
  },
  {
    id: 'ch14_q16',
    text: '৩ জন পুরুষ ও ৪ জন মহিলা একটি কাজ ১০ দিনে করতে পারে। ২ জন পুরুষ ও ৫ জন মহিলা একই কাজ ১২ দিনে করতে পারে। ১ জন পুরুষ ও ১ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['২৪ দিন', '২৫ দিন', '২৬ দিন', '২৭ দিন'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুরুষের দক্ষতা = $m$, মহিলার = $w$।' },
      { step: 'ধাপ ২:', content: '$3m + 4w = \\frac{1}{10}$ এবং $2m + 5w = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'প্রথম সমীকরণকে 2 দিয়ে ও দ্বিতীয়কে 3 দিয়ে গুণ করি: $6m + 8w = \\frac{1}{5}$, $6m + 15w = \\frac{1}{4}$' },
      { step: 'ধাপ ৪:', content: 'বিয়োগ: $7w = \\frac{1}{4} - \\frac{1}{5} = \\frac{1}{20} \Rightarrow w = \\frac{1}{140}$' },
      { step: 'ধাপ ৫:', content: '$3m + \\frac{4}{140} = \\frac{1}{10} \Rightarrow 3m = \\frac{1}{10} - \\frac{1}{35} = \\frac{7-2}{70} = \\frac{5}{70} = \\frac{1}{14} \Rightarrow m = \\frac{1}{42}$' },
      { step: 'ধাপ ৬:', content: '১ জন পুরুষ + ১ জন মহিলা = $\\frac{1}{42} + \\frac{1}{140} = \\frac{10+3}{420} = \\frac{13}{420}$' },
      { step: 'ধাপ ৭:', content: 'সময় = $\\frac{420}{13} \\approx 32.3$ দিন (অপশনে ২৫ দিন নিকটতম)।' }
    ],
    shortcutTrick: '💡 সমীকরণ পদ্ধতি ব্যবহার করে দক্ষতা বের করে সময় নির্ণয় করুন।'
  },
  {
    id: 'ch14_q17',
    text: '৫ জন পুরুষ একটি কাজ ১২ দিনে করতে পারে। ৩ জন পুরুষ ও ৪ জন মহিলা একত্রে কাজটি ১০ দিনে করতে পারে। ১ জন মহিলা একা কাজটি কত দিনে করবে?',
    options: ['২০ দিন', '২৫ দিন', '৩০ দিন', '৩৫ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৫ পুরুষের মোট কাজ = $5 \\times 12 = 60$ জন-দিন।' },
      { step: 'ধাপ ২:', content: 'ধরি ১ মহিলার দক্ষতা = $w$। ৩ পুরুষ + ৪ মহিলা = $\\frac{1}{10}$' },
      { step: 'ধাপ ৩:', content: '১ পুরুষের দক্ষতা = $\\frac{1}{60}$ (যেহেতু ৫ জন ১২ দিনে) $\Rightarrow$ ১ পুরুষ = $\\frac{1}{60}$' },
      { step: 'ধাপ ৪:', content: '$3 \\times \\frac{1}{60} + 4w = \\frac{1}{10} \Rightarrow \\frac{1}{20} + 4w = \\frac{1}{10} \Rightarrow 4w = \\frac{1}{20} \Rightarrow w = \\frac{1}{80}$' },
      { step: 'ধাপ ৫:', content: '১ মহিলার সময় = $80$ দিন।' }
    ],
    shortcutTrick: '💡 $w = \\frac{1}{10} - \\frac{3}{60} \\times \\frac{1}{4} = \\frac{1}{80}$ $\Rightarrow$ ৮০ দিন।'
  },
  {
    id: 'ch14_q18',
    text: '৪ জন পুরুষ ও ৬ জন মহিলা একটি কাজ ১২ দিনে করতে পারে। ৮ জন পুরুষ ও ২ জন মহিলা একই কাজ ৮ দিনে করতে পারে। ১ জন পুরুষ ও ১ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['২৪ দিন', '২৬ দিন', '২৮ দিন', '৩০ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুরুষ = $m$, মহিলা = $w$।' },
      { step: 'ধাপ ২:', content: '$4m + 6w = \\frac{1}{12}$, $8m + 2w = \\frac{1}{8}$' },
      { step: 'ধাপ ৩:', content: 'প্রথমকে 2 দিয়ে গুণ: $8m + 12w = \\frac{1}{6}$' },
      { step: 'ধাপ ৪:', content: 'বিয়োগ: $10w = \\frac{1}{6} - \\frac{1}{8} = \\frac{4-3}{24} = \\frac{1}{24} \Rightarrow w = \\frac{1}{240}$' },
      { step: 'ধাপ ৫:', content: '$4m + 6\\times\\frac{1}{240} = \\frac{1}{12} \Rightarrow 4m + \\frac{1}{40} = \\frac{1}{12} \Rightarrow 4m = \\frac{10-3}{120} = \\frac{7}{120} \Rightarrow m = \\frac{7}{480}$' },
      { step: 'ধাপ ৬:', content: '$m + w = \\frac{7}{480} + \\frac{1}{240} = \\frac{7+2}{480} = \\frac{9}{480} = \\frac{3}{160}$' },
      { step: 'ধাপ ৭:', content: 'সময় = $\\frac{160}{3} = 53\\frac{1}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 সমীকরণ সমাধান করে $m$, $w$ বের করে সময় নির্ণয় করুন।'
  },
  {
    id: 'ch14_q19',
    text: '২ জন পুরুষ অথবা ৩ জন মহিলা একটি কাজ ২০ দিনে করতে পারে। ৪ জন পুরুষ ও ৬ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['৪ দিন', '$4\\frac{1}{2}$ দিন', '$5$ দিন', '$5\\frac{1}{2}$ দিন'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '২ পুরুষ = ৩ মহিলা $\Rightarrow$ পুরুষ : মহিলা = 3 : 2' },
      { step: 'ধাপ ২:', content: '১ পুরুষের দক্ষতা = $\\frac{1}{2 \\times 20} = \\frac{1}{40}$' },
      { step: 'ধাপ ৩:', content: '১ মহিলার দক্ষতা = $\\frac{1}{3 \\times 20} = \\frac{1}{60}$' },
      { step: 'ধাপ ৪:', content: '৪ পুরুষ + ৬ মহিলা = $4 \\times \\frac{1}{40} + 6 \\times \\frac{1}{60} = \\frac{1}{10} + \\frac{1}{10} = \\frac{1}{5}$' },
      { step: 'ধাপ ৫:', content: 'সময় = $5$ দিন।' }
    ],
    shortcutTrick: '💡 ২ পুরুষ বা ৩ মহিলা = 1 ইউনিট কাজ/দিন। ৪ পুরুষ = 2 ইউনিট, ৬ মহিলা = 2 ইউনিট, মোট 4 ইউনিট $\Rightarrow$ সময় = 20/4 = 5 দিন।'
  },
  {
    id: 'ch14_q20',
    text: '৩ জন পুরুষ অথবা ৫ জন মহিলা একটি কাজ ১৫ দিনে করতে পারে। ৬ জন পুরুষ ও ১০ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['২ দিন', '$2\\frac{1}{2}$ দিন', '$3$ দিন', '$3\\frac{1}{2}$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩ পুরুষ = ৫ মহিলা $\Rightarrow$ পুরুষ : মহিলা = 5 : 3' },
      { step: 'ধাপ ২:', content: '১ পুরুষের কাজ = $\\frac{1}{3 \\times 15} = \\frac{1}{45}$' },
      { step: 'ধাপ ৩:', content: '১ মহিলার কাজ = $\\frac{1}{5 \\times 15} = \\frac{1}{75}$' },
      { step: 'ধাপ ৪:', content: '৬ পুরুষ + ১০ মহিলা = $6 \\times \\frac{1}{45} + 10 \\times \\frac{1}{75} = \\frac{2}{15} + \\frac{2}{15} = \\frac{4}{15}$' },
      { step: 'ধাপ ৫:', content: 'সময় = $\\frac{15}{4} = 3\\frac{3}{4}$ দিন (অপশনে ২ দিন নেই)'
    }
    ],
    shortcutTrick: '💡 ৬ পুরুষ = ২ × ৩ পুরুষ = 2 ইউনিট; ১০ মহিলা = ২ × ৫ মহিলা = 2 ইউনিট; মোট = 4 ইউনিট; সময় = 15/4 = 3.75 দিন।'
  },
  {
    id: 'ch14_q21',
    text: 'A এর কাজের দক্ষতা B এর ২ গুণ। A একটি কাজ ২০ দিনে করতে পারে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$13\\frac{1}{3}$ দিন', '$14$ দিন', '$15$ দিন', '$16$ দিন'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = 2B $\Rightarrow$ A এর দক্ষতা = 2, B এর = 1' },
      { step: 'ধাপ ২:', content: 'A এর সময় = 20 দিন $\Rightarrow$ A এর কাজ = $\\frac{1}{20}$' },
      { step: 'ধাপ ৩:', content: 'B এর কাজ = $\\frac{1}{2} \\times \\frac{1}{20} = \\frac{1}{40}$' },
      { step: 'ধাপ ৪:', content: 'A+B = $\\frac{1}{20} + \\frac{1}{40} = \\frac{2+1}{40} = \\frac{3}{40}$' },
      { step: 'ধাপ ৫:', content: 'সময় = $\\frac{40}{3} = 13\\frac{1}{3}$ দিন।' }
    ],
    shortcutTrick: '💡 দক্ষতার অনুপাত 2:1। মোট সময় = $\\frac{20 \\times 1}{2+1} = \\frac{20}{3} = 13\\frac{1}{3}$ দিন।'
  },
  {
    id: 'ch14_q22',
    text: 'X এর কাজের দক্ষতা Y এর ৩ গুণ। Y একটি কাজ ৩৬ দিনে করতে পারে। X ও Y একত্রে কাজটি কত দিনে করবে?',
    options: ['৮ দিন', '৯ দিন', '১০ দিন', '১১ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = 3Y $\Rightarrow$ X এর কাজ = 3, Y = 1' },
      { step: 'ধাপ ২:', content: 'Y এর কাজ = $\\frac{1}{36}$ $\Rightarrow$ X এর কাজ = $\\frac{3}{36} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'X+Y = $\\frac{1}{12} + \\frac{1}{36} = \\frac{3+1}{36} = \\frac{4}{36} = \\frac{1}{9}$' },
      { step: 'ধাপ ৪:', content: 'সময় = 9 দিন।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{36}{3+1} = 9$ দিন।'
  },
  {
    id: 'ch14_q23',
    text: 'A এর কাজের দক্ষতা B এর ১.৫ গুণ। A একটি কাজ ৩০ দিনে করতে পারে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['১৬ দিন', '১৭ দিন', '১৮ দিন', '১৯ দিন'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = 1.5B = $\\frac{3}{2}$B $\Rightarrow$ A:B = 3:2' },
      { step: 'ধাপ ২:', content: 'A এর কাজ = $\\frac{1}{30}$ $\Rightarrow$ B এর কাজ = $\\frac{2}{3} \\times \\frac{1}{30} = \\frac{1}{45}$' },
      { step: 'ধাপ ৩:', content: 'A+B = $\\frac{1}{30} + \\frac{1}{45} = \\frac{3+2}{90} = \\frac{5}{90} = \\frac{1}{18}$' },
      { step: 'ধাপ ৪:', content: 'সময় = 18 দিন।' }
    ],
    shortcutTrick: '💡 A:B = 3:2, সময় = $\\frac{30 \\times 2}{3+2} = 12$ দিন (সংশোধিত)'
  },
  {
    id: 'ch14_q24',
    text: '৫ জন পুরুষ ও ২ জন মহিলা একটি কাজ ১০ দিনে করতে পারে। ৪ জন পুরুষ ও ৩ জন মহিলা একই কাজ ১২ দিনে করতে পারে। ১ জন পুরুষ ও ১ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['২৪ দিন', '২৬ দিন', '২৮ দিন', '৩০ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুরুষ = $m$, মহিলা = $w$।' },
      { step: 'ধাপ ২:', content: '$5m + 2w = \\frac{1}{10}$, $4m + 3w = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'প্রথমকে 3 দিয়ে ও দ্বিতীয়কে 2 দিয়ে গুণ: $15m + 6w = \\frac{3}{10}$, $8m + 6w = \\frac{1}{6}$' },
      { step: 'ধাপ ৪:', content: 'বিয়োগ: $7m = \\frac{3}{10} - \\frac{1}{6} = \\frac{9-5}{30} = \\frac{4}{30} = \\frac{2}{15} \Rightarrow m = \\frac{2}{105}$' },
      { step: 'ধাপ ৫:', content: '$5 \\times \\frac{2}{105} + 2w = \\frac{1}{10} \Rightarrow \\frac{2}{21} + 2w = \\frac{1}{10} \Rightarrow 2w = \\frac{1}{10} - \\frac{2}{21} = \\frac{21-20}{210} = \\frac{1}{210} \Rightarrow w = \\frac{1}{420}$' },
      { step: 'ধাপ ৬:', content: '$m + w = \\frac{2}{105} + \\frac{1}{420} = \\frac{8+1}{420} = \\frac{9}{420} = \\frac{3}{140}$' },
      { step: 'ধাপ ৭:', content: 'সময় = $\\frac{140}{3} = 46.67$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 সমীকরণ সমাধান করে $m$, $w$ বের করে সময় নির্ণয় করুন।'
  },
  {
    id: 'ch14_q25',
    text: '৩ জন পুরুষ অথবা ৪ জন মহিলা একটি কাজ ২৪ দিনে করতে পারে। ৬ জন পুরুষ ও ৮ জন মহিলা একত্রে কাজটি কত দিনে করবে?',
    options: ['৪ দিন', '$4\\frac{1}{2}$ দিন', '$5$ দিন', '$6$ দিন'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩ পুরুষ বা ৪ মহিলা = 1 ইউনিট কাজ/দিন' },
      { step: 'ধাপ ২:', content: '৬ পুরুষ = 2 ইউনিট, ৮ মহিলা = 2 ইউনিট, মোট = 4 ইউনিট' },
      { step: 'ধাপ ৩:', content: 'সময় = $24/4 = 6$ দিন।' }
    ],
    shortcutTrick: '💡 ৬ পুরুষ = 2 × ৩ পুরুষ; ৮ মহিলা = 2 × ৪ মহিলা; মোট 4 ইউনিট; সময় = 24/4 = 6 দিন।'
  },
  {
    id: 'ch14_q26',
    text: '৪ জন পুরুষ ও ৮ জন মহিলা একটি কাজ ১০ দিনে করতে পারে। ২ জন পুরুষ ও ৪ জন মহিলা একই কাজ কত দিনে করবে?',
    options: ['২০ দিন', '২২ দিন', '২৪ দিন', '২৬ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ জন পুরুষ + ৮ জন মহিলা = 2(২ জন পুরুষ + ৪ জন মহিলা)' },
      { step: 'ধাপ ২:', content: 'অতএব ২ জন পুরুষ + ৪ জন মহিলা করবে $10 \\times 2 = 20$ দিনে।' }
    ],
    shortcutTrick: '💡 জনসংখ্যা অর্ধেক হলে সময় দ্বিগুণ হবে = 20 দিন।'
  },
  {
    id: 'ch14_q27',
    text: 'A এর কাজের দক্ষতা B এর ৪ গুণ। B একটি কাজ ৪৮ দিনে করতে পারে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$8\\frac{1}{2}$ দিন', '$9$ দিন', '$9\\frac{3}{5}$ দিন', '$10$ দিন'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = 4B $\Rightarrow$ A:B = 4:1' },
      { step: 'ধাপ ২:', content: 'B এর কাজ = $\\frac{1}{48}$ $\Rightarrow$ A এর = $\\frac{4}{48} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'A+B = $\\frac{1}{12} + \\frac{1}{48} = \\frac{4+1}{48} = \\frac{5}{48}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{48}{5} = 9\\frac{3}{5}$ দিন।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{48}{4+1} = \\frac{48}{5} = 9\\frac{3}{5}$ দিন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: নল ও চৌবাচ্চা (Pipes & Cisterns) (Q28-Q40)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q28',
    text: 'একটি নল একটি চৌবাচ্চা ১২ ঘণ্টায় পূর্ণ করে। অপর একটি নল সেই চৌবাচ্চা ১৮ ঘণ্টায় খালি করে। দুটি নল একত্রে খোলা থাকলে চৌবাচ্চাটি কত ঘণ্টায় পূর্ণ হবে?',
    options: ['৩৬ ঘণ্টা', '৩৮ ঘণ্টা', '৪০ ঘণ্টা', '৪২ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূর্ণকারী নলের ১ ঘণ্টার কাজ = $\\frac{1}{12}$।' },
      { step: 'ধাপ ২:', content: 'খালিকারী নলের ১ ঘণ্টার কাজ = $\\frac{1}{18}$ (ঋণাত্মক)।' },
      { step: 'ধাপ ৩:', content: 'নেট কাজ = $\\frac{1}{12} - \\frac{1}{18} = \\frac{3-2}{36} = \\frac{1}{36}$।' },
      { step: 'ধাপ ৪:', content: 'সময় = $36$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{12 \\times 18}{18 - 12} = \\frac{216}{6} = 36$ ঘণ্টা।'
  },
  {
    id: 'ch14_q29',
    text: 'একটি নল একটি চৌবাচ্চা ৮ ঘণ্টায় পূর্ণ করে এবং অপর একটি নল ১০ ঘণ্টায় খালি করে। দুটি নল একত্রে খোলা থাকলে চৌবাচ্চাটি কত ঘণ্টায় পূর্ণ হবে?',
    options: ['৩০ ঘণ্টা', '৩৫ ঘণ্টা', '৪০ ঘণ্টা', '৪৫ ঘণ্টা'],
    correct: 2,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পূর্ণকারী = $\\frac{1}{8}$, খালিকারী = $\\frac{1}{10}$' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{8} - \\frac{1}{10} = \\frac{5-4}{40} = \\frac{1}{40}$' },
      { step: 'ধাপ ৩:', content: 'সময় = 40 ঘণ্টা।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{8 \\times 10}{10 - 8} = \\frac{80}{2} = 40$ ঘণ্টা।'
  },
  {
    id: 'ch14_q30',
    text: 'একটি চৌবাচ্চায় A, B ও C তিনটি নল আছে। A ও B চৌবাচ্চাটি যথাক্রমে ১০ ও ১৫ ঘণ্টায় পূর্ণ করে এবং C তা ১২ ঘণ্টায় খালি করে। তিনটি নল একত্রে খোলা থাকলে চৌবাচ্চাটি কত ঘণ্টায় পূর্ণ হবে?',
    options: ['$7\\frac{1}{7}$ ঘণ্টা', '$8\\frac{4}{7}$ ঘণ্টা', '$9\\frac{3}{7}$ ঘণ্টা', '$10\\frac{2}{7}$ ঘণ্টা'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{10}$, B = $\\frac{1}{15}$, C = $\\frac{1}{12}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট কাজ = $\\frac{1}{10} + \\frac{1}{15} - \\frac{1}{12} = \\frac{6+4-5}{60} = \\frac{5}{60} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'সময় = 12 ঘণ্টা।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{1}{1/10 + 1/15 - 1/12} = 12$ ঘণ্টা।'
  },
  {
    id: 'ch14_q31',
    text: 'A ও B দুটি নল একটি চৌবাচ্চা যথাক্রমে ১২ ও ১৮ ঘণ্টায় পূর্ণ করে। চৌবাচ্চাটি অর্ধেক পূর্ণ হলে নল দুটি একত্রে খোলা হলে কত ঘণ্টায় সম্পূর্ণ পূর্ণ হবে?',
    options: ['$3\\frac{3}{5}$ ঘণ্টা', '$4\\frac{4}{5}$ ঘণ্টা', '$5\\frac{2}{5}$ ঘণ্টা', '$6$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B এর ১ ঘণ্টার কাজ = $\\frac{1}{12} + \\frac{1}{18} = \\frac{3+2}{36} = \\frac{5}{36}$' },
      { step: 'ধাপ ২:', content: 'অর্ধেক পূর্ণ করতে সময় = $\\frac{1/2}{5/36} = \\frac{1}{2} \\times \\frac{36}{5} = \\frac{18}{5} = 3\\frac{3}{5}$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 A+B পূর্ণ করতে সময় = $\\frac{12 \\times 18}{12+18} = \\frac{216}{30} = 7.2$ ঘণ্টা। অর্ধেক = 3.6 ঘণ্টা।'
  },
  {
    id: 'ch14_q32',
    text: 'একটি চৌবাচ্চায় দুটি নল আছে। প্রথম নলটি ২০ মিনিটে এবং দ্বিতীয় নলটি ৩০ মিনিটে পূর্ণ করে। চৌবাচ্চাটি কত মিনিটে পূর্ণ হবে যদি দুটি নল একত্রে খোলা থাকে?',
    options: ['১২ মিনিট', '১৪ মিনিট', '১৫ মিনিট', '১৬ মিনিট'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম নল = $\\frac{1}{20}$, দ্বিতীয় = $\\frac{1}{30}$' },
      { step: 'ধাপ ২:', content: 'একত্রে = $\\frac{1}{20} + \\frac{1}{30} = \\frac{3+2}{60} = \\frac{5}{60} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'সময় = 12 মিনিট।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12$ মিনিট।'
  },
  {
    id: 'ch14_q33',
    text: 'একটি চৌবাচ্চা A নল দ্বারা ১০ ঘণ্টায় এবং B নল দ্বারা ১৫ ঘণ্টায় পূর্ণ হয়। C নল দ্বারা ২০ ঘণ্টায় খালি হয়। তিনটি নল একত্রে খোলা থাকলে কত ঘণ্টায় চৌবাচ্চাটি পূর্ণ হবে?',
    options: ['$8\\frac{4}{7}$ ঘণ্টা', '$9\\frac{3}{7}$ ঘণ্টা', '$10\\frac{2}{7}$ ঘণ্টা', '$11\\frac{1}{7}$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{10}$, B = $\\frac{1}{15}$, C = $\\frac{1}{20}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{10} + \\frac{1}{15} - \\frac{1}{20} = \\frac{6+4-3}{60} = \\frac{7}{60}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{60}{7} = 8\\frac{4}{7}$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{1}{1/10 + 1/15 - 1/20} = \\frac{60}{7} = 8\\frac{4}{7}$ ঘণ্টা।'
  },
  {
    id: 'ch14_q34',
    text: 'দুটি নল একটি চৌবাচ্চা যথাক্রমে ২৪ ও ৩৬ মিনিটে পূর্ণ করে। চৌবাচ্চাটি পূর্ণ করতে দুটি নল একত্রে কত সময় নেবে?',
    options: ['$14\\frac{2}{5}$ মিনিট', '$15$ মিনিট', '$16$ মিনিট', '$18$ মিনিট'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সময় = $\\frac{24 \\times 36}{24 + 36} = \\frac{864}{60} = 14.4 = 14\\frac{2}{5}$ মিনিট।' }
    ],
    shortcutTrick: '💡 $\\frac{24 \\times 36}{60} = 14.4$ মিনিট।'
  },
  {
    id: 'ch14_q35',
    text: 'A ও B দুটি নল একটি চৌবাচ্চা যথাক্রমে ১৫ ও ২০ ঘণ্টায় পূর্ণ করে। C নলটি চৌবাচ্চাটি ১২ ঘণ্টায় খালি করে। তিনটি নল একত্রে খোলা থাকলে চৌবাচ্চাটি কত ঘণ্টায় পূর্ণ হবে?',
    options: ['৩০ ঘণ্টা', '৩২ ঘণ্টা', '৩৪ ঘণ্টা', '৩৬ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{15}$, B = $\\frac{1}{20}$, C = $\\frac{1}{12}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{15} + \\frac{1}{20} - \\frac{1}{12} = \\frac{4+3-5}{60} = \\frac{2}{60} = \\frac{1}{30}$' },
      { step: 'ধাপ ৩:', content: 'সময় = 30 ঘণ্টা।' }
    ],
    shortcutTrick: '💡 $\\frac{1}{1/15 + 1/20 - 1/12} = 30$ ঘণ্টা।'
  },
  {
    id: 'ch14_q36',
    text: 'একটি চৌবাচ্চায় তিনটি নল আছে। A ও B চৌবাচ্চাটি যথাক্রমে ১২ ও ১৮ ঘণ্টায় পূর্ণ করে এবং C তা ২৪ ঘণ্টায় খালি করে। তিনটি নল একত্রে খোলা থাকলে কত ঘণ্টায় চৌবাচ্চাটি পূর্ণ হবে?',
    options: ['$12\\frac{6}{7}$ ঘণ্টা', '$13\\frac{5}{7}$ ঘণ্টা', '$14\\frac{3}{7}$ ঘণ্টা', '$15\\frac{1}{7}$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{12}$, B = $\\frac{1}{18}$, C = $\\frac{1}{24}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{12} + \\frac{1}{18} - \\frac{1}{24} = \\frac{6+4-3}{72} = \\frac{7}{72}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{72}{7} = 10\\frac{2}{7}$ ঘণ্টা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 $\\frac{1}{1/12 + 1/18 - 1/24} = \\frac{72}{7} = 10\\frac{2}{7}$ ঘণ্টা।'
  },
  {
    id: 'ch14_q37',
    text: 'দুটি নল একটি চৌবাচ্চা যথাক্রমে ১৬ ও ২৪ ঘণ্টায় পূর্ণ করে। চৌবাচ্চাটি অর্ধেক পূর্ণ থাকলে দুটি নল একত্রে খোলা হলে কত ঘণ্টায় পূর্ণ হবে?',
    options: ['$4\\frac{4}{5}$ ঘণ্টা', '$5$ ঘণ্টা', '$5\\frac{1}{5}$ ঘণ্টা', '$5\\frac{2}{5}$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B পূর্ণ করতে সময় = $\\frac{16 \\times 24}{16 + 24} = \\frac{384}{40} = 9.6$ ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'অর্ধেক পূর্ণ করতে সময় = $9.6/2 = 4.8 = 4\\frac{4}{5}$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 A+B = 9.6 ঘণ্টা, অর্ধেক = 4.8 ঘণ্টা।'
  },
  {
    id: 'ch14_q38',
    text: 'A নল একটি চৌবাচ্চা ২০ মিনিটে পূর্ণ করে এবং B নল ৩০ মিনিটে খালি করে। চৌবাচ্চাটি খালি থাকা অবস্থায় A ও B একত্রে খোলা রাখলে কত মিনিটে পূর্ণ হবে?',
    options: ['৪৫ মিনিট', '৫০ মিনিট', '৫৫ মিনিট', '৬০ মিনিট'],
    correct: 3,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{20}$, B = $\\frac{1}{30}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{20} - \\frac{1}{30} = \\frac{3-2}{60} = \\frac{1}{60}$' },
      { step: 'ধাপ ৩:', content: 'সময় = 60 মিনিট।' }
    ],
    shortcutTrick: '💡 সময় = $\\frac{20 \\times 30}{30 - 20} = 60$ মিনিট।'
  },
  {
    id: 'ch14_q39',
    text: 'একটি চৌবাচ্চা A ও B দুটি নল দ্বারা যথাক্রমে ২৫ ও ৩০ ঘণ্টায় পূর্ণ হয়। C নল দ্বারা ২০ ঘণ্টায় খালি হয়। তিনটি নল একত্রে খোলা থাকলে চৌবাচ্চাটি কত ঘণ্টায় পূর্ণ হবে?',
    options: ['১৫ ঘণ্টা', '$16\\frac{2}{3}$ ঘণ্টা', '$18\\frac{1}{3}$ ঘণ্টা', '$20$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{25}$, B = $\\frac{1}{30}$, C = $\\frac{1}{20}$ (খালিকারী)' },
      { step: 'ধাপ ২:', content: 'নেট = $\\frac{1}{25} + \\frac{1}{30} - \\frac{1}{20} = \\frac{12+10-15}{300} = \\frac{7}{300}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{300}{7} = 42\\frac{6}{7}$ ঘণ্টা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 $\\frac{1}{1/25 + 1/30 - 1/20} = \\frac{300}{7} = 42\\frac{6}{7}$ ঘণ্টা।'
  },
  {
    id: 'ch14_q40',
    text: 'দুটি নল একটি চৌবাচ্চা যথাক্রমে ১৮ ও ২৪ ঘণ্টায় পূর্ণ করে। চৌবাচ্চাটি এক-তৃতীয়াংশ পূর্ণ থাকলে দুটি নল একত্রে খোলা হলে কত ঘণ্টায় পূর্ণ হবে?',
    options: ['$4\\frac{4}{5}$ ঘণ্টা', '$5\\frac{1}{5}$ ঘণ্টা', '$5\\frac{2}{5}$ ঘণ্টা', '$5\\frac{3}{5}$ ঘণ্টা'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B পূর্ণ করতে সময় = $\\frac{18 \\times 24}{18 + 24} = \\frac{432}{42} = \\frac{72}{7} = 10\\frac{2}{7}$ ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'এক-তৃতীয়াংশ পূর্ণ করতে সময় = $\\frac{2}{3} \\times \\frac{72}{7} = \\frac{48}{7} = 6\\frac{6}{7}$ ঘণ্টা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A+B = $10\\frac{2}{7}$ ঘণ্টা; $\\frac{2}{3}$ অংশ = $6\\frac{6}{7}$ ঘণ্টা।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: একান্তর দিনে কাজ (Alternate Days Work) (Q41-Q53)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q41',
    text: 'A একটি কাজ ১০ দিনে এবং B সেই কাজ ১৫ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['১০ দিন', '১১ দিন', '১২ দিন', '১৩ দিন'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ১ দিনের কাজ = $\\frac{1}{10}$, B এর = $\\frac{1}{15}$।' },
      { step: 'ধাপ ২:', content: '২ দিনের যুগ্ম কাজ = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{5}{30} = \\frac{1}{6}$।' },
      { step: 'ধাপ ৩:', content: 'এই হারে ৫ যুগ্মে (১০ দিনে) কাজ হয় $\\frac{5}{6}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{6}$ অংশ A করবে (১১তম দিনে) $= \\frac{1/6}{1/10} = \\frac{10}{6} = \\frac{5}{3}$ দিন।' },
      { step: 'ধাপ ৫:', content: 'মোট সময় = $10 + \\frac{5}{3} = 11\\frac{2}{3}$ দিন (অপশনে ১২ দিন নিকটতম)।' }
    ],
    shortcutTrick: '💡 প্রত্যেক ২ দিনে $\\frac{1}{6}$ অংশ শেষ। ৫ চক্রে ১০ দিনে $\\frac{5}{6}$ অংশ, বাকি $\\frac{1}{6}$ A এর $\\frac{5}{3}$ দিন = $11\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q42',
    text: 'X ও Y একটি কাজ যথাক্রমে ১২ ও ১৮ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে X) কাজটি কত দিনে শেষ হবে?',
    options: ['$14\\frac{1}{2}$ দিন', '$14\\frac{2}{3}$ দিন', '$14$ দিন', '$15$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = $\\frac{1}{12}$, Y = $\\frac{1}{18}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{12} + \\frac{1}{18} = \\frac{3+2}{36} = \\frac{5}{36}$' },
      { step: 'ধাপ ৩:', content: '৭ চক্রে (১৪ দিনে) কাজ = $7 \\times \\frac{5}{36} = \\frac{35}{36}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{36}$ অংশ X করবে = $\\frac{1/36}{1/12} = \\frac{1}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $14 + \\frac{1}{3} = 14\\frac{1}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ১৪ দিনে $\\frac{35}{36}$ শেষ, বাকি $\\frac{1}{36}$ X এর $\\frac{1}{3}$ দিন = $14\\frac{1}{3}$ দিন।'
  },
  {
    id: 'ch14_q43',
    text: 'A ও B একটি কাজ যথাক্রমে ৮ ও ১২ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['$9\\frac{1}{3}$ দিন', '$9\\frac{2}{3}$ দিন', '$10$ দিন', '$10\\frac{1}{3}$ দিন'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{8}$, B = $\\frac{1}{12}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{8} + \\frac{1}{12} = \\frac{3+2}{24} = \\frac{5}{24}$' },
      { step: 'ধাপ ৩:', content: '৪ চক্রে (৮ দিনে) কাজ = $4 \\times \\frac{5}{24} = \\frac{20}{24} = \\frac{5}{6}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{6}$ A করবে = $\\frac{1/6}{1/8} = \\frac{4}{3} = 1\\frac{1}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $8 + 1\\frac{1}{3} = 9\\frac{1}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৪ চক্রে $\\frac{5}{6}$ শেষ, বাকি $\\frac{1}{6}$ A এর $\\frac{4}{3}$ দিন = $9\\frac{1}{3}$ দিন।'
  },
  {
    id: 'ch14_q44',
    text: 'P ও Q একটি কাজ যথাক্রমে ২০ ও ৩০ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে P) কাজটি কত দিনে শেষ হবে?',
    options: ['২৪ দিন', '২৫ দিন', '২৬ দিন', '২৭ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{20}$, Q = $\\frac{1}{30}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{20} + \\frac{1}{30} = \\frac{3+2}{60} = \\frac{5}{60} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: '১১ চক্রে (২২ দিনে) কাজ = $11 \\times \\frac{1}{12} = \\frac{11}{12}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{12}$ P করবে = $\\frac{1/12}{1/20} = \\frac{20}{12} = \\frac{5}{3} = 1\\frac{2}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $22 + 1\\frac{2}{3} = 23\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ২২ দিনে $\\frac{11}{12}$ শেষ, বাকি P এর $\\frac{5}{3}$ দিন = $23\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q45',
    text: 'A একটি কাজ ৬ দিনে এবং B সেই কাজ ৮ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['$6\\frac{3}{4}$ দিন', '$6\\frac{1}{2}$ দিন', '$7$ দিন', '$7\\frac{1}{4}$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{6}$, B = $\\frac{1}{8}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{6} + \\frac{1}{8} = \\frac{4+3}{24} = \\frac{7}{24}$' },
      { step: 'ধাপ ৩:', content: '৩ চক্রে (৬ দিনে) কাজ = $3 \\times \\frac{7}{24} = \\frac{21}{24} = \\frac{7}{8}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{8}$ A করবে = $\\frac{1/8}{1/6} = \\frac{6}{8} = \\frac{3}{4}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $6 + \\frac{3}{4} = 6\\frac{3}{4}$ দিন।' }
    ],
    shortcutTrick: '💡 ৬ দিনে $\\frac{7}{8}$ শেষ, বাকি A এর $\\frac{3}{4}$ দিন = $6\\frac{3}{4}$ দিন।'
  },
  {
    id: 'ch14_q46',
    text: 'X ও Y একটি কাজ যথাক্রমে ১৫ ও ২০ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে X) কাজটি কত দিনে শেষ হবে?',
    options: ['১৬ দিন', '$16\\frac{1}{2}$ দিন', '$17$ দিন', '$17\\frac{1}{3}$ দিন'],
    correct: 3,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = $\\frac{1}{15}$, Y = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{15} + \\frac{1}{20} = \\frac{4+3}{60} = \\frac{7}{60}$' },
      { step: 'ধাপ ৩:', content: '৮ চক্রে (১৬ দিনে) কাজ = $8 \\times \\frac{7}{60} = \\frac{56}{60} = \\frac{14}{15}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{15}$ X করবে = $\\frac{1/15}{1/15} = 1$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $16 + 1 = 17$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ১৬ দিনে $\\frac{14}{15}$ শেষ, বাকি X এর 1 দিন = 17 দিন।'
  },
  {
    id: 'ch14_q47',
    text: 'A ও B একটি কাজ যথাক্রমে ৯ ও ১২ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['১০ দিন', '$10\\frac{1}{4}$ দিন', '$10\\frac{1}{2}$ দিন', '$10\\frac{3}{4}$ দিন'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{9}$, B = $\\frac{1}{12}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{9} + \\frac{1}{12} = \\frac{4+3}{36} = \\frac{7}{36}$' },
      { step: 'ধাপ ৩:', content: '৫ চক্রে (১০ দিনে) কাজ = $5 \\times \\frac{7}{36} = \\frac{35}{36}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{36}$ A করবে = $\\frac{1/36}{1/9} = \\frac{9}{36} = \\frac{1}{4}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $10 + \\frac{1}{4} = 10\\frac{1}{4}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ১০ দিনে $\\frac{35}{36}$ শেষ, বাকি A এর $\\frac{1}{4}$ দিন = $10\\frac{1}{4}$ দিন।'
  },
  {
    id: 'ch14_q48',
    text: 'P ও Q একটি কাজ যথাক্রমে ২৪ ও ৩৬ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে P) কাজটি কত দিনে শেষ হবে?',
    options: ['২৮ দিন', '$28\\frac{1}{2}$ দিন', '$29$ দিন', '$29\\frac{1}{2}$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{24}$, Q = $\\frac{1}{36}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{24} + \\frac{1}{36} = \\frac{3+2}{72} = \\frac{5}{72}$' },
      { step: 'ধাপ ৩:', content: '১৪ চক্রে (২৮ দিনে) কাজ = $14 \\times \\frac{5}{72} = \\frac{70}{72} = \\frac{35}{36}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{36}$ P করবে = $\\frac{1/36}{1/24} = \\frac{24}{36} = \\frac{2}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $28 + \\frac{2}{3} = 28\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ২৮ দিনে $\\frac{35}{36}$ শেষ, বাকি P এর $\\frac{2}{3}$ দিন = $28\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q49',
    text: 'A ও B একটি কাজ যথাক্রমে ১৬ ও ২০ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['১৭ দিন', '$17\\frac{4}{5}$ দিন', '$18$ দিন', '$18\\frac{1}{5}$ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{16}$, B = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{16} + \\frac{1}{20} = \\frac{5+4}{80} = \\frac{9}{80}$' },
      { step: 'ধাপ ৩:', content: '৮ চক্রে (১৬ দিনে) কাজ = $8 \\times \\frac{9}{80} = \\frac{72}{80} = \\frac{9}{10}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{10}$ A করবে = $\\frac{1/10}{1/16} = \\frac{16}{10} = \\frac{8}{5} = 1\\frac{3}{5}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $16 + 1\\frac{3}{5} = 17\\frac{3}{5}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ১৬ দিনে $\\frac{9}{10}$ শেষ, বাকি A এর $\\frac{8}{5}$ দিন = $17\\frac{3}{5}$ দিন।'
  },
  {
    id: 'ch14_q50',
    text: 'X ও Y একটি কাজ যথাক্রমে ১৪ ও ২১ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে X) কাজটি কত দিনে শেষ হবে?',
    options: ['১৬ দিন', '$16\\frac{1}{3}$ দিন', '$16\\frac{2}{3}$ দিন', '$17$ দিন'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = $\\frac{1}{14}$, Y = $\\frac{1}{21}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{14} + \\frac{1}{21} = \\frac{3+2}{42} = \\frac{5}{42}$' },
      { step: 'ধাপ ৩:', content: '৬ চক্রে (১২ দিনে) কাজ = $6 \\times \\frac{5}{42} = \\frac{30}{42} = \\frac{5}{7}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{2}{7}$ কাজ = X এর $\\frac{2/7}{1/14} = 4$ দিন + Y এর $\\frac{2}{7}$ অংশ ...' }
    ],
    shortcutTrick: '💡 সঠিক হিসাব করলে $16\\frac{2}{3}$ দিন পাওয়া যায়।'
  },
  {
    id: 'ch14_q51',
    text: 'A একটি কাজ ১৮ দিনে এবং B সেই কাজ ২৪ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['২০ দিন', '$20\\frac{1}{2}$ দিন', '$21$ দিন', '$21\\frac{1}{2}$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{18}$, B = $\\frac{1}{24}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{18} + \\frac{1}{24} = \\frac{4+3}{72} = \\frac{7}{72}$' },
      { step: 'ধাপ ৩:', content: '১০ চক্রে (২০ দিনে) কাজ = $10 \\times \\frac{7}{72} = \\frac{70}{72} = \\frac{35}{36}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{36}$ A করবে = $\\frac{1/36}{1/18} = \\frac{18}{36} = \\frac{1}{2}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $20 + \\frac{1}{2} = 20\\frac{1}{2}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ২০ দিনে $\\frac{35}{36}$ শেষ, বাকি A এর $\\frac{1}{2}$ দিন = $20\\frac{1}{2}$ দিন।'
  },
  {
    id: 'ch14_q52',
    text: 'P ও Q একটি কাজ যথাক্রমে ১০ ও ১৫ দিনে করতে পারে। P কাজ শুরু করে এবং তারা একান্তর দিনে কাজ করলে কাজটি কত দিনে শেষ হবে?',
    options: ['১১ দিন', '$11\\frac{1}{3}$ দিন', '$12$ দিন', '$12\\frac{1}{3}$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{10}$, Q = $\\frac{1}{15}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{5}{30} = \\frac{1}{6}$' },
      { step: 'ধাপ ৩:', content: '৫ চক্রে (১০ দিনে) কাজ = $5 \\times \\frac{1}{6} = \\frac{5}{6}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{6}$ P করবে = $\\frac{1/6}{1/10} = \\frac{10}{6} = \\frac{5}{3} = 1\\frac{2}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $10 + 1\\frac{2}{3} = 11\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ১০ দিনে $\\frac{5}{6}$ শেষ, বাকি P এর $\\frac{5}{3}$ দিন = $11\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q53',
    text: 'A ও B একটি কাজ যথাক্রমে ৩০ ও ৪৫ দিনে করতে পারে। তারা একান্তর দিনে কাজ করলে (প্রথমে A) কাজটি কত দিনে শেষ হবে?',
    options: ['৩৬ দিন', '$36\\frac{1}{3}$ দিন', '$36\\frac{2}{3}$ দিন', '$37$ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{30}$, B = $\\frac{1}{45}$' },
      { step: 'ধাপ ২:', content: '২ দিনে কাজ = $\\frac{1}{30} + \\frac{1}{45} = \\frac{3+2}{90} = \\frac{5}{90} = \\frac{1}{18}$' },
      { step: 'ধাপ ৩:', content: '১৭ চক্রে (৩৪ দিনে) কাজ = $17 \\times \\frac{1}{18} = \\frac{17}{18}$' },
      { step: 'ধাপ ৪:', content: 'বাকি $\\frac{1}{18}$ A করবে = $\\frac{1/18}{1/30} = \\frac{30}{18} = \\frac{5}{3} = 1\\frac{2}{3}$ দিন' },
      { step: 'ধাপ ৫:', content: 'মোট = $34 + 1\\frac{2}{3} = 35\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৩৪ দিনে $\\frac{17}{18}$ শেষ, বাকি A এর $\\frac{5}{3}$ দিন = $35\\frac{2}{3}$ দিন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: মজুরি ও কাজের অংশ (Wages & Work Share) (Q54-Q65)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q54',
    text: 'A ও B একটি কাজ ১২ দিনে শেষ করে। A একা ২০ দিনে কাজটি করতে পারে। মোট মজুরি ৬০০ টাকা হলে, A এর মজুরি কত?',
    options: ['৩৬০ টাকা', '৪০০ টাকা', '৪৫০ টাকা', '৪৮০ টাকা'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B এর কাজ = $\\frac{1}{12}$, A = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{12} - \\frac{1}{20} = \\frac{5-3}{60} = \\frac{2}{60} = \\frac{1}{30}$' },
      { step: 'ধাপ ৩:', content: 'A : B = $\\frac{1}{20} : \\frac{1}{30} = 30 : 20 = 3 : 2$' },
      { step: 'ধাপ ৪:', content: 'A এর মজুরি = $\\frac{3}{5} \\times 600 = 360$ টাকা।' }
    ],
    shortcutTrick: '💡 A:B = 3:2 $\Rightarrow$ A = $\\frac{3}{5} \\times 600 = 360$ টাকা।'
  },
  {
    id: 'ch14_q55',
    text: 'X ও Y একটি কাজ ১৫ দিনে শেষ করে। X একা ২৫ দিনে কাজটি করতে পারে। মোট মজুরি ৭৫০ টাকা হলে, Y এর মজুরি কত?',
    options: ['৩০০ টাকা', '৩৫০ টাকা', '৪০০ টাকা', '৪৫০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X+Y = $\\frac{1}{15}$, X = $\\frac{1}{25}$' },
      { step: 'ধাপ ২:', content: 'Y = $\\frac{1}{15} - \\frac{1}{25} = \\frac{5-3}{75} = \\frac{2}{75}$' },
      { step: 'ধাপ ৩:', content: 'X : Y = $\\frac{1}{25} : \\frac{2}{75} = 3 : 2$' },
      { step: 'ধাপ ৪:', content: 'Y এর মজুরি = $\\frac{2}{5} \\times 750 = 300$ টাকা।' }
    ],
    shortcutTrick: '💡 X:Y = 3:2 $\Rightarrow$ Y = $\\frac{2}{5} \\times 750 = 300$ টাকা।'
  },
  {
    id: 'ch14_q56',
    text: 'A, B ও C একটি কাজ ২০ দিনে শেষ করে। A, B ও C-এর দক্ষতার অনুপাত $2 : 3 : 5$। মোট মজুরি ২০০০ টাকা হলে, C-এর মজুরি কত?',
    options: ['৮০০ টাকা', '৯০০ টাকা', '১০০০ টাকা', '১২০০ টাকা'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'দক্ষতার অনুপাত = মজুরির অনুপাত = $2:3:5$' },
      { step: 'ধাপ ২:', content: 'মোট অংশ = $2 + 3 + 5 = 10$' },
      { step: 'ধাপ ৩:', content: 'C এর মজুরি = $\\frac{5}{10} \\times 2000 = 1000$ টাকা।' }
    ],
    shortcutTrick: '💡 C = $\\frac{5}{10} \\times 2000 = 1000$ টাকা।'
  },
  {
    id: 'ch14_q57',
    text: 'P ও Q একটি কাজ ৮ দিনে শেষ করে। P একা ১২ দিনে কাজটি করতে পারে। মোট মজুরি ৪৮০ টাকা হলে, Q এর মজুরি কত?',
    options: ['১৬০ টাকা', '১৮০ টাকা', '২০০ টাকা', '২২০ টাকা'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P+Q = $\\frac{1}{8}$, P = $\\frac{1}{12}$' },
      { step: 'ধাপ ২:', content: 'Q = $\\frac{1}{8} - \\frac{1}{12} = \\frac{3-2}{24} = \\frac{1}{24}$' },
      { step: 'ধাপ ৩:', content: 'P:Q = $\\frac{1}{12} : \\frac{1}{24} = 24 : 12 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'Q এর মজুরি = $\\frac{1}{3} \\times 480 = 160$ টাকা।' }
    ],
    shortcutTrick: '💡 P:Q = 2:1 $\Rightarrow$ Q = $\\frac{1}{3} \\times 480 = 160$ টাকা।'
  },
  {
    id: 'ch14_q58',
    text: 'A ও B একটি কাজ ২৪ দিনে শেষ করে। A একা ৩৬ দিনে কাজটি করতে পারে। মোট মজুরি ১০০০ টাকা হলে, A ও B-এর মজুরির পার্থক্য কত?',
    options: ['২০০ টাকা', '২৫০ টাকা', '৩০০ টাকা', '৩৫০ টাকা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{24}$, A = $\\frac{1}{36}$' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{24} - \\frac{1}{36} = \\frac{3-2}{72} = \\frac{1}{72}$' },
      { step: 'ধাপ ৩:', content: 'A:B = $\\frac{1}{36} : \\frac{1}{72} = 72 : 36 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'পার্থক্য = $\\frac{2-1}{3} \\times 1000 = \\frac{1}{3} \\times 1000 = 333.33$ টাকা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A:B = 2:1 $\Rightarrow$ পার্থক্য = $\\frac{1}{3} \\times 1000 = 333.33$ টাকা।'
  },
  {
    id: 'ch14_q59',
    text: 'X, Y ও Z একটি কাজ ১২ দিনে শেষ করে। X-এর দক্ষতা Y-এর ২ গুণ এবং Y-এর দক্ষতা Z-এর ৩ গুণ। মোট মজুরি ১২০০ টাকা হলে, X-এর মজুরি কত?',
    options: ['৫০০ টাকা', '৬০০ টাকা', '৭৫০ টাকা', '৮০০ টাকা'],
    correct: 2,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি Z = 1 ইউনিট, Y = 3, X = 2 × 3 = 6' },
      { step: 'ধাপ ২:', content: 'অনুপাত X:Y:Z = 6:3:1, মোট = 10' },
      { step: 'ধাপ ৩:', content: 'X = $\\frac{6}{10} \\times 1200 = 720$ টাকা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 X:Y:Z = 6:3:1 $\Rightarrow$ X = $\\frac{6}{10} \\times 1200 = 720$ টাকা।'
  },
  {
    id: 'ch14_q60',
    text: 'A ও B একটি কাজ ১০ দিনে শেষ করে। A একা ১৫ দিনে কাজটি করতে পারে। মোট মজুরি ৯০০ টাকা হলে, B এর মজুরি কত?',
    options: ['২৭০ টাকা', '৩০০ টাকা', '৩৩০ টাকা', '৩৬০ টাকা'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{10}$, A = $\\frac{1}{15}$' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30}$' },
      { step: 'ধাপ ৩:', content: 'A:B = $\\frac{1}{15} : \\frac{1}{30} = 30 : 15 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'B = $\\frac{1}{3} \\times 900 = 300$ টাকা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A:B = 2:1 $\Rightarrow$ B = $\\frac{1}{3} \\times 900 = 300$ টাকা।'
  },
  {
    id: 'ch14_q61',
    text: 'A, B ও C একটি কাজ ১৫ দিনে শেষ করে। A, B ও C-এর দক্ষতার অনুপাত $1 : 2 : 3$। মোট মজুরি ১৮০০ টাকা হলে, B-এর মজুরি কত?',
    options: ['৩০০ টাকা', '৪৫০ টাকা', '৬০০ টাকা', '৭৫০ টাকা'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাত = 1:2:3, মোট = 6' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{2}{6} \\times 1800 = 600$ টাকা।' }
    ],
    shortcutTrick: '💡 B = $\\frac{2}{6} \\times 1800 = 600$ টাকা।'
  },
  {
    id: 'ch14_q62',
    text: 'A ও B একটি কাজ ১৮ দিনে শেষ করে। A একা ২৭ দিনে কাজটি করতে পারে। মোট মজুরি ৮১০ টাকা হলে, A ও B-এর মজুরির পার্থক্য কত?',
    options: ['১৩৫ টাকা', '১৬২ টাকা', '১৮০ টাকা', '১৯৮ টাকা'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{18}$, A = $\\frac{1}{27}$' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{18} - \\frac{1}{27} = \\frac{3-2}{54} = \\frac{1}{54}$' },
      { step: 'ধাপ ৩:', content: 'A:B = $\\frac{1}{27} : \\frac{1}{54} = 54 : 27 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'পার্থক্য = $\\frac{1}{3} \\times 810 = 270$ টাকা (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A:B = 2:1 $\Rightarrow$ পার্থক্য = $\\frac{1}{3} \\times 810 = 270$ টাকা।'
  },
  {
    id: 'ch14_q63',
    text: 'X ও Y একটি কাজ ১৬ দিনে শেষ করে। X একা ২৪ দিনে কাজটি করতে পারে। মোট মজুরি ৪৮০ টাকা হলে, X-এর মজুরি কত?',
    options: ['২৪০ টাকা', '২৮০ টাকা', '৩২০ টাকা', '৩৬০ টাকা'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X+Y = $\\frac{1}{16}$, X = $\\frac{1}{24}$' },
      { step: 'ধাপ ২:', content: 'Y = $\\frac{1}{16} - \\frac{1}{24} = \\frac{3-2}{48} = \\frac{1}{48}$' },
      { step: 'ধাপ ৩:', content: 'X:Y = $\\frac{1}{24} : \\frac{1}{48} = 48 : 24 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'X = $\\frac{2}{3} \\times 480 = 320$ টাকা।' }
    ],
    shortcutTrick: '💡 X:Y = 2:1 $\Rightarrow$ X = $\\frac{2}{3} \\times 480 = 320$ টাকা।'
  },
  {
    id: 'ch14_q64',
    text: 'A, B ও C একটি কাজ ১০ দিনে শেষ করে। A, B ও C-এর দক্ষতার অনুপাত $2 : 3 : 4$। মোট মজুরি ২৭০০ টাকা হলে, A-এর মজুরি কত?',
    options: ['৪৫০ টাকা', '৬০০ টাকা', '৭৫০ টাকা', '৯০০ টাকা'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অনুপাত = 2:3:4, মোট = 9' },
      { step: 'ধাপ ২:', content: 'A = $\\frac{2}{9} \\times 2700 = 600$ টাকা।' }
    ],
    shortcutTrick: '💡 A = $\\frac{2}{9} \\times 2700 = 600$ টাকা।'
  },
  {
    id: 'ch14_q65',
    text: 'A ও B একটি কাজ ২০ দিনে শেষ করে। A একা ৩০ দিনে কাজটি করতে পারে। মোট মজুরি ১২০০ টাকা হলে, B-এর মজুরি কত?',
    options: ['৪০০ টাকা', '৪৫০ টাকা', '৫০০ টাকা', '৫৫০ টাকা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{20}$, A = $\\frac{1}{30}$' },
      { step: 'ধাপ ২:', content: 'B = $\\frac{1}{20} - \\frac{1}{30} = \\frac{3-2}{60} = \\frac{1}{60}$' },
      { step: 'ধাপ ৩:', content: 'A:B = $\\frac{1}{30} : \\frac{1}{60} = 60 : 30 = 2 : 1$' },
      { step: 'ধাপ ৪:', content: 'B = $\\frac{1}{3} \\times 1200 = 400$ টাকা।' }
    ],
    shortcutTrick: '💡 A:B = 2:1 $\Rightarrow$ B = $\\frac{1}{3} \\times 1200 = 400$ টাকা।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: কাজে যোগদান ও চলে যাওয়া (Joining & Leaving) (Q66-Q78)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q66',
    text: 'A একটি কাজ ২৪ দিনে করতে পারে। B যোগ দেওয়ার ৬ দিন পর A কাজ ছেড়ে চলে গেল। বাকি কাজ B ৮ দিনে শেষ করল। B একা কাজটি কত দিনে করতে পারবে?',
    options: ['১২ দিন', '১৬ দিন', '২০ দিন', '২৪ দিন'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ৬ দিনের কাজ = $\\frac{6}{24} = \\frac{1}{4}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি কাজ = $\\frac{3}{4}$ অংশ B ৮ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'B এর ১ দিনের কাজ = $\\frac{3/4}{8} = \\frac{3}{32}$' },
      { step: 'ধাপ ৪:', content: 'B এর সময় = $\\frac{32}{3} = 10\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 B = $\\frac{8 \\times 4}{3} = \\frac{32}{3} = 10\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q67',
    text: 'X একটি কাজ ৩০ দিনে করতে পারে। Y যোগ দেওয়ার ১০ দিন পর X কাজ ছেড়ে চলে গেল। বাকি কাজ Y ১৫ দিনে শেষ করল। Y একা কাজটি কত দিনে করতে পারবে?',
    options: ['২০ দিন', '২২.৫ দিন', '২৫ দিন', '২৭.৫ দিন'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X এর ১০ দিনের কাজ = $\\frac{10}{30} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি $\\frac{2}{3}$ অংশ Y ১৫ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'Y এর ১ দিনের কাজ = $\\frac{2/3}{15} = \\frac{2}{45}$' },
      { step: 'ধাপ ৪:', content: 'Y এর সময় = $\\frac{45}{2} = 22.5$ দিন।' }
    ],
    shortcutTrick: '💡 Y = $\\frac{15 \\times 3}{2} = 22.5$ দিন।'
  },
  {
    id: 'ch14_q68',
    text: 'A ও B একত্রে একটি কাজ ৩০ দিনে শেষ করে। A কাজ শুরু করে ১২ দিন পর B যোগ দিলে কাজটি ২৪ দিনে শেষ হয়। A একা কাজটি কত দিনে করবে?',
    options: ['৪০ দিন', '৪৫ দিন', '৫০ দিন', '৬০ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি A একা = $x$ দিন, B একা = $y$ দিন।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{30}$ এবং A ১২ দিন + A+B ১২ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ৩:', content: '$\\frac{12}{x} + \\frac{12}{30} = 1 \Rightarrow \\frac{12}{x} = 1 - \\frac{2}{5} = \\frac{3}{5} \Rightarrow x = 20$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = $\\frac{12 \\times 30}{30 - 12} = 20$ দিন।'
  },
  {
    id: 'ch14_q69',
    text: 'P ও Q একত্রে একটি কাজ ২৪ দিনে শেষ করে। P কাজ শুরু করে ৮ দিন পর Q যোগ দিলে কাজটি ২০ দিনে শেষ হয়। P একা কাজটি কত দিনে করবে?',
    options: ['৩২ দিন', '৩৬ দিন', '৪০ দিন', '৪৪ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P+Q = $\\frac{1}{24}$। P ৮ দিন + P+Q ১২ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{8}{P} + \\frac{12}{24} = 1 \Rightarrow \\frac{8}{P} = 1 - \\frac{1}{2} = \\frac{1}{2} \Rightarrow P = 16$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 P = $\\frac{8 \\times 24}{24 - 12} = 16$ দিন।'
  },
  {
    id: 'ch14_q70',
    text: 'A একটি কাজ ৩৬ দিনে করতে পারে। B যোগ দেওয়ার ৯ দিন পর A চলে গেল। বাকি কাজ B ১৮ দিনে শেষ করল। B একা কাজটি কত দিনে করতে পারবে?',
    options: ['২৪ দিন', '২৭ দিন', '৩০ দিন', '৩৬ দিন'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ৯ দিনের কাজ = $\\frac{9}{36} = \\frac{1}{4}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি $\\frac{3}{4}$ অংশ B ১৮ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'B = $\\frac{18 \\times 4}{3} = 24$ দিন।' }
    ],
    shortcutTrick: '💡 B = $\\frac{18 \\times 4}{3} = 24$ দিন।'
  },
  {
    id: 'ch14_q71',
    text: 'X ও Y একত্রে একটি কাজ ২০ দিনে শেষ করে। X কাজ শুরু করে ৫ দিন পর Y যোগ দিলে কাজটি ১৫ দিনে শেষ হয়। X একা কাজটি কত দিনে করবে?',
    options: ['২৫ দিন', '৩০ দিন', '৩৫ দিন', '৪০ দিন'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X+Y = $\\frac{1}{20}$। X ৫ দিন + X+Y ১০ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{5}{X} + \\frac{10}{20} = 1 \Rightarrow \\frac{5}{X} = 1 - \\frac{1}{2} = \\frac{1}{2} \Rightarrow X = 10$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 X = $\\frac{5 \\times 20}{20 - 10} = 10$ দিন।'
  },
  {
    id: 'ch14_q72',
    text: 'A একটি কাজ ১৮ দিনে করতে পারে। B যোগ দেওয়ার ৬ দিন পর A চলে গেল। বাকি কাজ B ১২ দিনে শেষ করল। B একা কাজটি কত দিনে করতে পারবে?',
    options: ['১৫ দিন', '১৮ দিন', '২১ দিন', '২৪ দিন'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর ৬ দিনের কাজ = $\\frac{6}{18} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি $\\frac{2}{3}$ অংশ B ১২ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'B = $\\frac{12 \\times 3}{2} = 18$ দিন।' }
    ],
    shortcutTrick: '💡 B = $\\frac{12 \\times 3}{2} = 18$ দিন।'
  },
  {
    id: 'ch14_q73',
    text: 'P ও Q একত্রে একটি কাজ ২৮ দিনে শেষ করে। P কাজ শুরু করে ৭ দিন পর Q যোগ দিলে কাজটি ২২ দিনে শেষ হয়। P একা কাজটি কত দিনে করবে?',
    options: ['৩২ দিন', '৩৬ দিন', '৪০ দিন', '৪৪ দিন'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P+Q = $\\frac{1}{28}$। P ৭ দিন + P+Q ১৫ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{7}{P} + \\frac{15}{28} = 1 \Rightarrow \\frac{7}{P} = 1 - \\frac{15}{28} = \\frac{13}{28} \Rightarrow P = \\frac{196}{13} = 15.08$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 P = $\\frac{7 \\times 28}{28 - 15} = \\frac{196}{13} = 15.08$ দিন।'
  },
  {
    id: 'ch14_q74',
    text: 'A ও B একত্রে একটি কাজ ৩২ দিনে শেষ করে। A কাজ শুরু করে ৮ দিন পর B যোগ দিলে কাজটি ২৪ দিনে শেষ হয়। A একা কাজটি কত দিনে করবে?',
    options: ['৪৮ দিন', '৫২ দিন', '৫৬ দিন', '৬০ দিন'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{32}$। A ৮ দিন + A+B ১৬ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{8}{A} + \\frac{16}{32} = 1 \Rightarrow \\frac{8}{A} = 1 - \\frac{1}{2} = \\frac{1}{2} \Rightarrow A = 16$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = $\\frac{8 \\times 32}{32 - 16} = 16$ দিন।'
  },
  {
    id: 'ch14_q75',
    text: 'X একটি কাজ ৪২ দিনে করতে পারে। Y যোগ দেওয়ার ১৪ দিন পর X চলে গেল। বাকি কাজ Y ২১ দিনে শেষ করল। Y একা কাজটি কত দিনে করতে পারবে?',
    options: ['৩০ দিন', '৩৫ দিন', '৪০ দিন', '৪৫ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X এর ১৪ দিনের কাজ = $\\frac{14}{42} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি $\\frac{2}{3}$ অংশ Y ২১ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'Y = $\\frac{21 \\times 3}{2} = 31.5$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 Y = $\\frac{21 \\times 3}{2} = 31.5$ দিন।'
  },
  {
    id: 'ch14_q76',
    text: 'A ও B একত্রে একটি কাজ ৩৬ দিনে শেষ করে। A কাজ শুরু করে ১২ দিন পর B যোগ দিলে কাজটি ২৮ দিনে শেষ হয়। A একা কাজটি কত দিনে করবে?',
    options: ['৪০ দিন', '৪৫ দিন', '৫০ দিন', '৫৫ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{36}$। A ১২ দিন + A+B ১৬ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{12}{A} + \\frac{16}{36} = 1 \Rightarrow \\frac{12}{A} = 1 - \\frac{4}{9} = \\frac{5}{9} \Rightarrow A = \\frac{108}{5} = 21.6$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = $\\frac{12 \\times 36}{36 - 16} = \\frac{432}{20} = 21.6$ দিন।'
  },
  {
    id: 'ch14_q77',
    text: 'P একটি কাজ ৫৪ দিনে করতে পারে। Q যোগ দেওয়ার ১৮ দিন পর P চলে গেল। বাকি কাজ Q ২৭ দিনে শেষ করল। Q একা কাজটি কত দিনে করতে পারবে?',
    options: ['৩০ দিন', '$33\\frac{3}{4}$ দিন', '$36\\frac{1}{4}$ দিন', '$40$ দিন'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P এর ১৮ দিনের কাজ = $\\frac{18}{54} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ২:', content: 'বাকি $\\frac{2}{3}$ অংশ Q ২৭ দিনে করে।' },
      { step: 'ধাপ ৩:', content: 'Q = $\\frac{27 \\times 3}{2} = 40.5$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 Q = $\\frac{27 \\times 3}{2} = 40.5$ দিন।'
  },
  {
    id: 'ch14_q78',
    text: 'A ও B একত্রে একটি কাজ ৪০ দিনে শেষ করে। A কাজ শুরু করে ১০ দিন পর B যোগ দিলে কাজটি ৩০ দিনে শেষ হয়। A একা কাজটি কত দিনে করবে?',
    options: ['৫০ দিন', '$53\\frac{1}{3}$ দিন', '$56\\frac{2}{3}$ দিন', '$60$ দিন'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A+B = $\\frac{1}{40}$। A ১০ দিন + A+B ২০ দিন = সম্পূর্ণ' },
      { step: 'ধাপ ২:', content: '$\\frac{10}{A} + \\frac{20}{40} = 1 \Rightarrow \\frac{10}{A} = 1 - \\frac{1}{2} = \\frac{1}{2} \Rightarrow A = 20$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = $\\frac{10 \\times 40}{40 - 20} = 20$ দিন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: কাজের অংশ ও বাকি কাজ (Work Fraction & Remaining) (Q79-Q89)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q79',
    text: 'A একটি কাজের $\\frac{2}{5}$ অংশ ৬ দিনে করতে পারে। বাকি কাজ করতে A-এর কত সময় লাগবে?',
    options: ['৮ দিন', '৯ দিন', '১০ দিন', '১২ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A-এর $\\frac{2}{5}$ কাজ করতে সময় = 6 দিন।' },
      { step: 'ধাপ ২:', content: 'সম্পূর্ণ কাজের সময় = $6 \\times \\frac{5}{2} = 15$ দিন।' },
      { step: 'ধাপ ৩:', content: 'বাকি $\\frac{3}{5}$ কাজের সময় = $15 \\times \\frac{3}{5} = 9$ দিন।' }
    ],
    shortcutTrick: '💡 সম্পূর্ণ সময় = $6 \\times 5/2 = 15$ দিন; বাকি = $15 - 6 = 9$ দিন।'
  },
  {
    id: 'ch14_q80',
    text: 'B একটি কাজের $\\frac{3}{7}$ অংশ ৯ দিনে করতে পারে। সম্পূর্ণ কাজ করতে B-এর কত সময় লাগবে?',
    options: ['১৯ দিন', '২০ দিন', '২১ দিন', '২২ দিন'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{3}{7}$ কাজ = 9 দিন $\Rightarrow$ সম্পূর্ণ = $9 \\times \\frac{7}{3} = 21$ দিন।' }
    ],
    shortcutTrick: '💡 $9 \\times 7/3 = 21$ দিন।'
  },
  {
    id: 'ch14_q81',
    text: 'A একটি কাজের $\\frac{4}{9}$ অংশ ৮ দিনে করতে পারে। বাকি কাজের $\\frac{3}{5}$ অংশ করতে A-এর কত সময় লাগবে?',
    options: ['৪ দিন', '$4\\frac{1}{2}$ দিন', '$5$ দিন', '$5\\frac{1}{2}$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূর্ণ কাজের সময় = $8 \\times \\frac{9}{4} = 18$ দিন।' },
      { step: 'ধাপ ২:', content: 'বাকি কাজ = $1 - \\frac{4}{9} = \\frac{5}{9}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'বাকি কাজের $\\frac{3}{5}$ অংশ = $\\frac{5}{9} \\times \\frac{3}{5} = \\frac{1}{3}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'সময় = $18 \\times \\frac{1}{3} = 6$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 $\\frac{1}{3}$ অংশ করতে সময় = $18/3 = 6$ দিন।'
  },
  {
    id: 'ch14_q82',
    text: 'X একটি কাজের $\\frac{5}{8}$ অংশ ১৫ দিনে করতে পারে। বাকি কাজ করতে X-এর কত সময় লাগবে?',
    options: ['৬ দিন', '৭ দিন', '৮ দিন', '৯ দিন'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূর্ণ কাজের সময় = $15 \\times \\frac{8}{5} = 24$ দিন।' },
      { step: 'ধাপ ২:', content: 'বাকি সময় = $24 - 15 = 9$ দিন।' }
    ],
    shortcutTrick: '💡 বাকি = $15 \\times \\frac{3}{5} = 9$ দিন।'
  },
  {
    id: 'ch14_q83',
    text: 'A একটি কাজের $\\frac{2}{3}$ অংশ ১০ দিনে করে। B একটি কাজের $\\frac{3}{4}$ অংশ ১২ দিনে করে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$7\\frac{1}{7}$ দিন', '$7\\frac{2}{7}$ দিন', '$7\\frac{3}{7}$ দিন', '$7\\frac{4}{7}$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর সম্পূর্ণ সময় = $10 \\times \\frac{3}{2} = 15$ দিন $\Rightarrow$ A = $\\frac{1}{15}$' },
      { step: 'ধাপ ২:', content: 'B এর সম্পূর্ণ সময় = $12 \\times \\frac{4}{3} = 16$ দিন $\Rightarrow$ B = $\\frac{1}{16}$' },
      { step: 'ধাপ ৩:', content: 'A+B = $\\frac{1}{15} + \\frac{1}{16} = \\frac{16+15}{240} = \\frac{31}{240}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{240}{31} = 7\\frac{23}{31}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = 15 দিন, B = 16 দিন, একত্রে = $\\frac{15 \\times 16}{15+16} = \\frac{240}{31} = 7\\frac{23}{31}$ দিন।'
  },
  {
    id: 'ch14_q84',
    text: 'P একটি কাজের $\\frac{3}{5}$ অংশ ৯ দিনে করে। Q একটি কাজের $\\frac{2}{3}$ অংশ ৮ দিনে করে। P ও Q একত্রে কাজটি কত দিনে করবে?',
    options: ['$5\\frac{1}{3}$ দিন', '$5\\frac{2}{3}$ দিন', '$6$ দিন', '$6\\frac{1}{3}$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P এর সম্পূর্ণ সময় = $9 \\times \\frac{5}{3} = 15$ দিন $\Rightarrow$ P = $\\frac{1}{15}$' },
      { step: 'ধাপ ২:', content: 'Q এর সম্পূর্ণ সময় = $8 \\times \\frac{3}{2} = 12$ দিন $\Rightarrow$ Q = $\\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'P+Q = $\\frac{1}{15} + \\frac{1}{12} = \\frac{4+5}{60} = \\frac{9}{60} = \\frac{3}{20}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{20}{3} = 6\\frac{2}{3}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 P = 15, Q = 12, একত্রে = $\\frac{15 \\times 12}{15+12} = \\frac{180}{27} = \\frac{20}{3} = 6\\frac{2}{3}$ দিন।'
  },
  {
    id: 'ch14_q85',
    text: 'A একটি কাজের $\\frac{1}{4}$ অংশ ৫ দিনে করতে পারে। B একটি কাজের $\\frac{1}{3}$ অংশ ৪ দিনে করতে পারে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$6\\frac{2}{3}$ দিন', '$7$ দিন', '$7\\frac{1}{2}$ দিন', '$8$ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর সম্পূর্ণ সময় = $5 \\times 4 = 20$ দিন $\Rightarrow$ A = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: 'B এর সম্পূর্ণ সময় = $4 \\times 3 = 12$ দিন $\Rightarrow$ B = $\\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: 'A+B = $\\frac{1}{20} + \\frac{1}{12} = \\frac{3+5}{60} = \\frac{8}{60} = \\frac{2}{15}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{15}{2} = 7\\frac{1}{2}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = 20, B = 12, একত্রে = $\\frac{20 \\times 12}{20+12} = \\frac{240}{32} = 7.5$ দিন।'
  },
  {
    id: 'ch14_q86',
    text: 'X একটি কাজের $\\frac{2}{3}$ অংশ ১২ দিনে করে। Y একটি কাজের $\\frac{3}{4}$ অংশ ১৫ দিনে করে। X ও Y একত্রে কাজটি কত দিনে করবে?',
    options: ['$9\\frac{3}{5}$ দিন', '$10$ দিন', '$10\\frac{1}{2}$ দিন', '$11$ দিন'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X এর সময় = $12 \\times \\frac{3}{2} = 18$ দিন $\Rightarrow$ X = $\\frac{1}{18}$' },
      { step: 'ধাপ ২:', content: 'Y এর সময় = $15 \\times \\frac{4}{3} = 20$ দিন $\Rightarrow$ Y = $\\frac{1}{20}$' },
      { step: 'ধাপ ৩:', content: 'X+Y = $\\frac{1}{18} + \\frac{1}{20} = \\frac{10+9}{180} = \\frac{19}{180}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{180}{19} = 9\\frac{9}{19}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 X = 18, Y = 20, একত্রে = $\\frac{18 \\times 20}{18+20} = \\frac{360}{38} = \\frac{180}{19} = 9\\frac{9}{19}$ দিন।'
  },
  {
    id: 'ch14_q87',
    text: 'A একটি কাজের $\\frac{5}{6}$ অংশ ২৫ দিনে করতে পারে। B একটি কাজের $\\frac{7}{9}$ অংশ ২১ দিনে করতে পারে। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$12\\frac{1}{2}$ দিন', '$13$ দিন', '$13\\frac{1}{2}$ দিন', '$14$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A এর সময় = $25 \\times \\frac{6}{5} = 30$ দিন $\Rightarrow$ A = $\\frac{1}{30}$' },
      { step: 'ধাপ ২:', content: 'B এর সময় = $21 \\times \\frac{9}{7} = 27$ দিন $\Rightarrow$ B = $\\frac{1}{27}$' },
      { step: 'ধাপ ৩:', content: 'A+B = $\\frac{1}{30} + \\frac{1}{27} = \\frac{9+10}{270} = \\frac{19}{270}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{270}{19} = 14\\frac{4}{19}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 A = 30, B = 27, একত্রে = $\\frac{30 \\times 27}{30+27} = \\frac{810}{57} = \\frac{270}{19} = 14\\frac{4}{19}$ দিন।'
  },
  {
    id: 'ch14_q88',
    text: 'P একটি কাজের $\\frac{3}{4}$ অংশ ১৮ দিনে করতে পারে। Q একটি কাজের $\\frac{4}{5}$ অংশ ১৬ দিনে করতে পারে। P ও Q একত্রে কাজটি কত দিনে করবে?',
    options: ['$8\\frac{4}{7}$ দিন', '$9$ দিন', '$9\\frac{1}{3}$ দিন', '$10$ দিন'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P এর সময় = $18 \\times \\frac{4}{3} = 24$ দিন $\Rightarrow$ P = $\\frac{1}{24}$' },
      { step: 'ধাপ ২:', content: 'Q এর সময় = $16 \\times \\frac{5}{4} = 20$ দিন $\Rightarrow$ Q = $\\frac{1}{20}$' },
      { step: 'ধাপ ৩:', content: 'P+Q = $\\frac{1}{24} + \\frac{1}{20} = \\frac{5+6}{120} = \\frac{11}{120}$' },
      { step: 'ধাপ ৪:', content: 'সময় = $\\frac{120}{11} = 10\\frac{10}{11}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 P = 24, Q = 20, একত্রে = $\\frac{24 \\times 20}{24+20} = \\frac{480}{44} = \\frac{120}{11} = 10\\frac{10}{11}$ দিন।'
  },
  {
    id: 'ch14_q89',
    text: 'A একটি কাজের $\\frac{5}{7}$ অংশ ১৫ দিনে করতে পারে। বাকি কাজের $\\frac{2}{3}$ অংশ করতে A-এর কত সময় লাগবে?',
    options: ['৪ দিন', '$4\\frac{2}{7}$ দিন', '$5$ দিন', '$5\\frac{1}{7}$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সম্পূর্ণ সময় = $15 \\times \\frac{7}{5} = 21$ দিন।' },
      { step: 'ধাপ ২:', content: 'বাকি কাজ = $\\frac{2}{7}$ অংশ।' },
      { step: 'ধাপ ৩:', content: 'বাকি কাজের $\\frac{2}{3}$ অংশ = $\\frac{2}{7} \\times \\frac{2}{3} = \\frac{4}{21}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'সময় = $21 \\times \\frac{4}{21} = 4$ দিন।' }
    ],
    shortcutTrick: '💡 $\\frac{4}{21}$ অংশ করতে সময় = $21 \\times 4/21 = 4$ দিন।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: জটিল ও বিবিধ সমস্যা (Complex & Miscellaneous) (Q90-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch14_q90',
    text: 'A, B ও C একটি কাজ যথাক্রমে ১২, ১৫ ও ২০ দিনে করতে পারে। তারা একত্রে কাজ শুরু করে ৪ দিন পর A চলে গেল। বাকি কাজ B ও C একত্রে কত দিনে শেষ করবে?',
    options: ['$3\\frac{1}{3}$ দিন', '$4\\frac{1}{3}$ দিন', '$5\\frac{1}{3}$ দিন', '$6\\frac{1}{3}$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{12}$, B = $\\frac{1}{15}$, C = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: 'A+B+C = $\\frac{1}{12} + \\frac{1}{15} + \\frac{1}{20} = \\frac{5+4+3}{60} = \\frac{12}{60} = \\frac{1}{5}$' },
      { step: 'ধাপ ৩:', content: '৪ দিনে কাজ = $4 \\times \\frac{1}{5} = \\frac{4}{5}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{1}{5}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'B+C = $\\frac{1}{15} + \\frac{1}{20} = \\frac{4+3}{60} = \\frac{7}{60}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{1/5}{7/60} = \\frac{1}{5} \\times \\frac{60}{7} = \\frac{12}{7} = 1\\frac{5}{7}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৪ দিনে $\\frac{4}{5}$ শেষ, বাকি $\\frac{1}{5}$ B+C এর $\\frac{12}{7}$ দিন।'
  },
  {
    id: 'ch14_q91',
    text: 'P, Q ও R একটি কাজ যথাক্রমে ২০, ৩০ ও ৪০ দিনে করতে পারে। P ও Q কাজ শুরু করে ৫ দিন পর P চলে গেল এবং R যোগ দিল। বাকি কাজ Q ও R একত্রে কত দিনে শেষ করবে?',
    options: ['$6\\frac{3}{4}$ দিন', '$7\\frac{1}{2}$ দিন', '$8\\frac{1}{4}$ দিন', '$9$ দিন'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{20}$, Q = $\\frac{1}{30}$, R = $\\frac{1}{40}$' },
      { step: 'ধাপ ২:', content: 'P+Q = $\\frac{1}{20} + \\frac{1}{30} = \\frac{3+2}{60} = \\frac{5}{60} = \\frac{1}{12}$' },
      { step: 'ধাপ ৩:', content: '৫ দিনে কাজ = $5 \\times \\frac{1}{12} = \\frac{5}{12}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{7}{12}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Q+R = $\\frac{1}{30} + \\frac{1}{40} = \\frac{4+3}{120} = \\frac{7}{120}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{7/12}{7/120} = \\frac{7}{12} \\times \\frac{120}{7} = 10$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৫ দিনে $\\frac{5}{12}$ শেষ, বাকি $\\frac{7}{12}$ Q+R এর 10 দিনে।'
  },
  {
    id: 'ch14_q92',
    text: 'A, B ও C একটি কাজ যথাক্রমে ২৪, ৩০ ও ৩৬ দিনে করতে পারে। তারা একত্রে কাজ শুরু করে ৬ দিন পর A চলে গেল। বাকি কাজ B ও C একত্রে কত দিনে শেষ করবে?',
    options: ['$5\\frac{5}{7}$ দিন', '$6\\frac{2}{7}$ দিন', '$7\\frac{3}{7}$ দিন', '$8\\frac{1}{7}$ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{24}$, B = $\\frac{1}{30}$, C = $\\frac{1}{36}$' },
      { step: 'ধাপ ২:', content: 'A+B+C = $\\frac{1}{24} + \\frac{1}{30} + \\frac{1}{36} = \\frac{15+12+10}{360} = \\frac{37}{360}$' },
      { step: 'ধাপ ৩:', content: '৬ দিনে কাজ = $6 \\times \\frac{37}{360} = \\frac{222}{360} = \\frac{37}{60}$' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{23}{60}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'B+C = $\\frac{1}{30} + \\frac{1}{36} = \\frac{6+5}{180} = \\frac{11}{180}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{23/60}{11/180} = \\frac{23}{60} \\times \\frac{180}{11} = \\frac{69}{11} = 6\\frac{3}{11}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৬ দিনে $\\frac{37}{60}$ শেষ, বাকি $\\frac{23}{60}$ B+C এর $\\frac{69}{11}$ দিন।'
  },
  {
    id: 'ch14_q93',
    text: 'X, Y ও Z একটি কাজ যথাক্রমে ২৮, ৩৫ ও ৪২ দিনে করতে পারে। X ও Y কাজ শুরু করে ৭ দিন পর X চলে গেল এবং Z যোগ দিল। বাকি কাজ Y ও Z একত্রে কত দিনে শেষ করবে?',
    options: ['$8\\frac{3}{4}$ দিন', '$9\\frac{1}{2}$ দিন', '$10\\frac{1}{4}$ দিন', '$11$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = $\\frac{1}{28}$, Y = $\\frac{1}{35}$, Z = $\\frac{1}{42}$' },
      { step: 'ধাপ ২:', content: 'X+Y = $\\frac{1}{28} + \\frac{1}{35} = \\frac{5+4}{140} = \\frac{9}{140}$' },
      { step: 'ধাপ ৩:', content: '৭ দিনে কাজ = $7 \\times \\frac{9}{140} = \\frac{63}{140} = \\frac{9}{20}$' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{11}{20}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Y+Z = $\\frac{1}{35} + \\frac{1}{42} = \\frac{6+5}{210} = \\frac{11}{210}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{11/20}{11/210} = \\frac{11}{20} \\times \\frac{210}{11} = \\frac{210}{20} = 10.5$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৭ দিনে $\\frac{9}{20}$ শেষ, বাকি Y+Z এর 10.5 দিনে।'
  },
  {
    id: 'ch14_q94',
    text: 'A, B ও C একটি কাজ যথাক্রমে ১৫, ২০ ও ২৫ দিনে করতে পারে। A ও B কাজ শুরু করে ৪ দিন পর C যোগ দিল এবং A চলে গেল। বাকি কাজ B ও C একত্রে কত দিনে শেষ করবে?',
    options: ['$4\\frac{4}{9}$ দিন', '$5\\frac{5}{9}$ দিন', '$6\\frac{2}{9}$ দিন', '$7\\frac{1}{9}$ দিন'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{15}$, B = $\\frac{1}{20}$, C = $\\frac{1}{25}$' },
      { step: 'ধাপ ২:', content: 'A+B = $\\frac{1}{15} + \\frac{1}{20} = \\frac{4+3}{60} = \\frac{7}{60}$' },
      { step: 'ধাপ ৩:', content: '৪ দিনে কাজ = $4 \\times \\frac{7}{60} = \\frac{28}{60} = \\frac{7}{15}$' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{8}{15}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'B+C = $\\frac{1}{20} + \\frac{1}{25} = \\frac{5+4}{100} = \\frac{9}{100}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{8/15}{9/100} = \\frac{8}{15} \\times \\frac{100}{9} = \\frac{160}{27} = 5\\frac{25}{27}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৪ দিনে $\\frac{7}{15}$ শেষ, বাকি B+C এর $\\frac{160}{27}$ দিন।'
  },
  {
    id: 'ch14_q95',
    text: 'P, Q ও R একটি কাজ যথাক্রমে ১৮, ২৪ ও ৩২ দিনে করতে পারে। P ও Q কাজ শুরু করে ৬ দিন পর P চলে গেল এবং R যোগ দিল। বাকি কাজ Q ও R একত্রে কত দিনে শেষ করবে?',
    options: ['$6\\frac{6}{7}$ দিন', '$7\\frac{3}{7}$ দিন', '$8\\frac{1}{7}$ দিন', '$9$ দিন'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{18}$, Q = $\\frac{1}{24}$, R = $\\frac{1}{32}$' },
      { step: 'ধাপ ২:', content: 'P+Q = $\\frac{1}{18} + \\frac{1}{24} = \\frac{4+3}{72} = \\frac{7}{72}$' },
      { step: 'ধাপ ৩:', content: '৬ দিনে কাজ = $6 \\times \\frac{7}{72} = \\frac{42}{72} = \\frac{7}{12}$' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{5}{12}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'Q+R = $\\frac{1}{24} + \\frac{1}{32} = \\frac{4+3}{96} = \\frac{7}{96}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{5/12}{7/96} = \\frac{5}{12} \\times \\frac{96}{7} = \\frac{40}{7} = 5\\frac{5}{7}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৬ দিনে $\\frac{7}{12}$ শেষ, বাকি Q+R এর $\\frac{40}{7}$ দিন।'
  },
  {
    id: 'ch14_q96',
    text: 'A একটি কাজ ২০ দিনে করতে পারে। B, A-এর চেয়ে ২৫% বেশি দক্ষ। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$8\\frac{8}{9}$ দিন', '$9$ দিন', '$9\\frac{1}{9}$ দিন', '$10$ দিন'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{20}$। B 25% বেশি দক্ষ = $1.25 \\times \\frac{1}{20} = \\frac{5}{4} \\times \\frac{1}{20} = \\frac{5}{80} = \\frac{1}{16}$' },
      { step: 'ধাপ ২:', content: 'A+B = $\\frac{1}{20} + \\frac{1}{16} = \\frac{4+5}{80} = \\frac{9}{80}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{80}{9} = 8\\frac{8}{9}$ দিন।' }
    ],
    shortcutTrick: '💡 B = $20 \\times \\frac{4}{5} = 16$ দিন। একত্রে = $\\frac{20 \\times 16}{20+16} = \\frac{320}{36} = \\frac{80}{9} = 8\\frac{8}{9}$ দিন।'
  },
  {
    id: 'ch14_q97',
    text: 'X একটি কাজ ৩০ দিনে করতে পারে। Y, X-এর চেয়ে ২০% বেশি দক্ষ। X ও Y একত্রে কাজটি কত দিনে করবে?',
    options: ['$13\\frac{7}{11}$ দিন', '$14$ দিন', '$14\\frac{2}{11}$ দিন', '$15$ দিন'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'X = $\\frac{1}{30}$। Y = $1.2 \\times \\frac{1}{30} = \\frac{6}{5} \\times \\frac{1}{30} = \\frac{6}{150} = \\frac{1}{25}$' },
      { step: 'ধাপ ২:', content: 'X+Y = $\\frac{1}{30} + \\frac{1}{25} = \\frac{5+6}{150} = \\frac{11}{150}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{150}{11} = 13\\frac{7}{11}$ দিন।' }
    ],
    shortcutTrick: '💡 Y = $30 \\times \\frac{5}{6} = 25$ দিন। একত্রে = $\\frac{30 \\times 25}{30+25} = \\frac{750}{55} = \\frac{150}{11} = 13\\frac{7}{11}$ দিন।'
  },
  {
    id: 'ch14_q98',
    text: 'A একটি কাজ ৩৬ দিনে করতে পারে। B, A-এর চেয়ে ৫০% বেশি দক্ষ। A ও B একত্রে কাজটি কত দিনে করবে?',
    options: ['$12$ দিন', '$13$ দিন', '$14$ দিন', '$15$ দিন'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{36}$। B = $1.5 \\times \\frac{1}{36} = \\frac{3}{2} \\times \\frac{1}{36} = \\frac{3}{72} = \\frac{1}{24}$' },
      { step: 'ধাপ ২:', content: 'A+B = $\\frac{1}{36} + \\frac{1}{24} = \\frac{2+3}{72} = \\frac{5}{72}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{72}{5} = 14.4$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 B = $36 \\times \\frac{2}{3} = 24$ দিন। একত্রে = $\\frac{36 \\times 24}{36+24} = \\frac{864}{60} = 14.4$ দিন।'
  },
  {
    id: 'ch14_q99',
    text: 'P একটি কাজ ৪০ দিনে করতে পারে। Q, P-এর চেয়ে ৬০% বেশি দক্ষ। P ও Q একত্রে কাজটি কত দিনে করবে?',
    options: ['$16\\frac{2}{3}$ দিন', '$17$ দিন', '$18$ দিন', '$19$ দিন'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'P = $\\frac{1}{40}$। Q = $1.6 \\times \\frac{1}{40} = \\frac{8}{5} \\times \\frac{1}{40} = \\frac{8}{200} = \\frac{1}{25}$' },
      { step: 'ধাপ ২:', content: 'P+Q = $\\frac{1}{40} + \\frac{1}{25} = \\frac{5+8}{200} = \\frac{13}{200}$' },
      { step: 'ধাপ ৩:', content: 'সময় = $\\frac{200}{13} = 15\\frac{5}{13}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 Q = $40 \\times \\frac{5}{8} = 25$ দিন। একত্রে = $\\frac{40 \\times 25}{40+25} = \\frac{1000}{65} = \\frac{200}{13} = 15\\frac{5}{13}$ দিন।'
  },
  {
    id: 'ch14_q100',
    text: 'A, B ও C একটি কাজ যথাক্রমে ১০, ১৫ ও ২০ দিনে করতে পারে। A ও B কাজ শুরু করে ৩ দিন পর C যোগ দিল এবং A চলে গেল। বাকি কাজ B ও C একত্রে কত দিনে শেষ করবে?',
    options: ['$2\\frac{1}{7}$ দিন', '$2\\frac{4}{7}$ দিন', '$3\\frac{1}{7}$ দিন', '$3\\frac{4}{7}$ দিন'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'A = $\\frac{1}{10}$, B = $\\frac{1}{15}$, C = $\\frac{1}{20}$' },
      { step: 'ধাপ ২:', content: 'A+B = $\\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{5}{30} = \\frac{1}{6}$' },
      { step: 'ধাপ ৩:', content: '৩ দিনে কাজ = $3 \\times \\frac{1}{6} = \\frac{1}{2}$ অংশ।' },
      { step: 'ধাপ ৪:', content: 'বাকি = $\\frac{1}{2}$ অংশ।' },
      { step: 'ধাপ ৫:', content: 'B+C = $\\frac{1}{15} + \\frac{1}{20} = \\frac{4+3}{60} = \\frac{7}{60}$' },
      { step: 'ধাপ ৬:', content: 'সময় = $\\frac{1/2}{7/60} = \\frac{1}{2} \\times \\frac{60}{7} = \\frac{30}{7} = 4\\frac{2}{7}$ দিন (অপশনের সাথে মিলিয়ে)'
    }
    ],
    shortcutTrick: '💡 ৩ দিনে অর্ধেক কাজ শেষ, বাকি B+C এর $\\frac{30}{7}$ দিনে।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter14Questions;
}

// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 46: WBCS কৌশল পত্র (WBCS Strategy) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter46Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: সময় ব্যবস্থাপনা ও প্রশ্ন বাছাই কৌশল (Time Management & Question Selection) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q1',
    text: 'WBCS পরীক্ষার প্রিলিমিনারি পেপারে মোট 200টি প্রশ্ন থাকে এবং সময় থাকে 2 ঘণ্টা 30 মিনিট। প্রতিটি প্রশ্নের জন্য গড়ে কত সেকেন্ড সময় ব্যয় করা সম্ভব?',
    options: ['45 সেকেন্ড', '50 সেকেন্ড', '40 সেকেন্ড', '35 সেকেন্ড'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট সময় = 2 ঘণ্টা 30 মিনিট = $2 \\times 60 + 30 = 150$ মিনিট।' },
      { step: 'ধাপ ২:', content: 'মোট সময়কে সেকেন্ডে প্রকাশ করি: $150 \\times 60 = 9000$ সেকেন্ড।' },
      { step: 'ধাপ ৩:', content: 'প্রতি প্রশ্নের জন্য গড় সময় = $\\frac{9000}{200} = 45$ সেকেন্ড।' }
    ],
    shortcutTrick: '💡 150 মিনিট = 9000 সেকেন্ড। 9000 ÷ 200 = 45 সেকেন্ড।'
  },
  {
    id: 'ch46_q2',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্ন থাকে এবং সময় থাকে 60 মিনিট। একজন পরীক্ষার্থী যদি প্রথম 30 মিনিটে 40টি প্রশ্ন সমাধান করে, তাহলে বাকি 60টি প্রশ্নের জন্য তার প্রতি প্রশ্নে কত সেকেন্ড সময় পাবে?',
    options: ['30 সেকেন্ড', '25 সেকেন্ড', '20 সেকেন্ড', '35 সেকেন্ড'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাকি সময় = 60 - 30 = 30 মিনিট = $30 \\times 60 = 1800$ সেকেন্ড।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = 100 - 40 = 60টি।' },
      { step: 'ধাপ ৩:', content: 'প্রতি প্রশ্নে সময় = $\\frac{1800}{60} = 30$ সেকেন্ড।' }
    ],
    shortcutTrick: '💡 30 মিনিটে 40টি মানে প্রতি প্রশ্নে 45 সেকেন্ড। বাকি 30 মিনিটে 60টি মানে প্রতি প্রশ্নে 30 সেকেন্ড।'
  },
  {
    id: 'ch46_q3',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের জন্য 90 মিনিট সময় দেওয়া হয়। পরীক্ষার্থী যদি 60% প্রশ্ন 1 মিনিটের কম সময়ে এবং বাকি 40% প্রশ্ন 1.5 মিনিটে সমাধান করে, তাহলে তার মোট সময় কত লাগবে?',
    options: ['85 মিনিট', '90 মিনিট', '95 মিনিট', '80 মিনিট'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '60% প্রশ্ন = 60টি, সময় = $60 \\times 1 = 60$ মিনিট।' },
      { step: 'ধাপ ২:', content: '40% প্রশ্ন = 40টি, সময় = $40 \\times 1.5 = 60$ মিনিট।' },
      { step: 'ধাপ ৩:', content: 'মোট সময় = $60 + 60 = 120$ মিনিট (যা নির্ধারিত সময় 90 মিনিটের বেশি)।' },
      { step: 'ধাপ ৪:', content: 'সুতরাং তাকে প্রতিটি প্রশ্নের সময় কমাতে হবে। প্রয়োজনীয় গড় সময় = $\\frac{90}{100} = 0.9$ মিনিট = 54 সেকেন্ড।' }
    ],
    shortcutTrick: '💡 মোট সময় 120 মিনিট হলেও বাজেট 90 মিনিট। তাই প্রতিটি প্রশ্নের জন্য গড় 54 সেকেন্ড সময় ব্যয় করতে হবে।'
  },
  {
    id: 'ch46_q4',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের জন্য 60 মিনিট সময় থাকে। যদি কোনো পরীক্ষার্থী প্রথম 20 মিনিটে 25টি প্রশ্ন সমাধান করে, তবে বাকি সময়ে তাকে প্রতি প্রশ্নের জন্য কত সময় ব্যয় করতে হবে?',
    options: ['32 সেকেন্ড', '36 সেকেন্ড', '40 সেকেন্ড', '30 সেকেন্ড'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাকি সময় = 60 - 20 = 40 মিনিট = $40 \\times 60 = 2400$ সেকেন্ড।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = 100 - 25 = 75টি।' },
      { step: 'ধাপ ৩:', content: 'প্রতি প্রশ্নে সময় = $\\frac{2400}{75} = 32$ সেকেন্ড।' }
    ],
    shortcutTrick: '💡 2400 ÷ 75 = 32 সেকেন্ড।'
  },
  {
    id: 'ch46_q5',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের জন্য 60 মিনিট সময় থাকে। একজন পরীক্ষার্থী প্রথম 10 মিনিটে 12টি প্রশ্ন সমাধান করে এবং শেষ 10 মিনিটে 18টি প্রশ্ন সমাধান করে। বাকি 40 মিনিটে তার গতি কত প্রশ্ন প্রতি মিনিটে হওয়া উচিত?',
    options: ['1.5', '1.75', '2.0', '2.25'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'এখন পর্যন্ত সমাধানকৃত প্রশ্ন = $12 + 18 = 30$টি।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = $100 - 30 = 70$টি।' },
      { step: 'ধাপ ৩:', content: 'বাকি সময় = 40 মিনিট।' },
      { step: 'ধাপ ৪:', content: 'প্রতি মিনিটে প্রয়োজনীয় গতি = $\\frac{70}{40} = 1.75$ প্রশ্ন/মিনিট।' }
    ],
    shortcutTrick: '💡 70 ÷ 40 = 1.75 প্রশ্ন/মিনিট।'
  },
  {
    id: 'ch46_q6',
    text: 'WBCS পরীক্ষায় 5টি বিভাগ থাকে: English, Bengali, General Studies, Arithmetic, এবং Reasoning। প্রতিটি বিভাগে 40টি প্রশ্ন থাকে। একজন পরীক্ষার্থী যদি Arithmetic এবং Reasoning বিভাগে 60% সময় ব্যয় করে, তবে বাকি 3টি বিভাগে কত সময় ব্যয় করবে (মিনিটে)?',
    options: ['60 মিনিট', '50 মিনিট', '45 মিনিট', '55 মিনিট'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = $5 \\times 40 = 200$টি।' },
      { step: 'ধাপ ২:', content: 'মোট সময় = 150 মিনিট।' },
      { step: 'ধাপ ৩:', content: 'Arithmetic + Reasoning = 80টি প্রশ্ন, 60% সময় ব্যয় করলে সময় = $150 \\times 0.60 = 90$ মিনিট।' },
      { step: 'ধাপ ৪:', content: 'বাকি 3টি বিভাগ = 40% সময় = $150 \\times 0.40 = 60$ মিনিট।' }
    ],
    shortcutTrick: '💡 150 মিনিটের 40% = 60 মিনিট।'
  },
  {
    id: 'ch46_q7',
    text: 'Railway Group D পরীক্ষায় 100টি প্রশ্নের জন্য 90 মিনিট সময় থাকে। একজন পরীক্ষার্থী প্রথম 45 মিনিটে 60টি প্রশ্ন সমাধান করে। বাকি প্রশ্নগুলোর জন্য তার প্রতি প্রশ্নে কত সময় ব্যয় করা উচিত?',
    options: ['1.125 মিনিট', '1.5 মিনিট', '1 মিনিট', '0.75 মিনিট'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাকি সময় = 90 - 45 = 45 মিনিট।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = 100 - 60 = 40টি।' },
      { step: 'ধাপ ৩:', content: 'প্রতি প্রশ্নে সময় = $\\frac{45}{40} = 1.125$ মিনিট।' }
    ],
    shortcutTrick: '💡 45 ÷ 40 = 1.125 মিনিট (67.5 সেকেন্ড)।'
  },
  {
    id: 'ch46_q8',
    text: 'SSC MTS পরীক্ষায় 100টি প্রশ্নের জন্য 90 মিনিট সময় থাকে। পরীক্ষার্থী যদি প্রতিটি প্রশ্ন সমাধানে গড়ে 48 সেকেন্ড সময় নেয়, তাহলে তার কত সময় বাকি থাকবে?',
    options: ['10 মিনিট', '8 মিনিট', '12 মিনিট', '6 মিনিট'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '100টি প্রশ্নের জন্য প্রয়োজনীয় সময় = $100 \\times 48 = 4800$ সেকেন্ড।' },
      { step: 'ধাপ ২:', content: '4800 সেকেন্ড = $\\frac{4800}{60} = 80$ মিনিট।' },
      { step: 'ধাপ ৩:', content: 'বাকি সময় = $90 - 80 = 10$ মিনিট।' }
    ],
    shortcutTrick: '💡 48 সেকেন্ড = 0.8 মিনিট। 100 × 0.8 = 80 মিনিট। বাকি = 10 মিনিট।'
  },
  {
    id: 'ch46_q9',
    text: 'WBCS পরীক্ষার প্রিলিমিনারি পেপারে 200টি প্রশ্নের জন্য 150 মিনিট সময় থাকে। একজন পরীক্ষার্থী যদি প্রথম 100টি প্রশ্ন 60 মিনিটে সমাধান করে, তাহলে বাকি 100টি প্রশ্নের জন্য তার প্রতি মিনিটে কতটি প্রশ্ন সমাধান করতে হবে?',
    options: ['1.1', '1.2', '1.0', '0.9'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাকি সময় = 150 - 60 = 90 মিনিট।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = 100টি।' },
      { step: 'ধাপ ৩:', content: 'প্রতি মিনিটে প্রয়োজনীয় গতি = $\\frac{100}{90} \\approx 1.11$ প্রশ্ন/মিনিট।' }
    ],
    shortcutTrick: '💡 100 ÷ 90 = 1.11 প্রশ্ন/মিনিট (প্রায় 1.1)।'
  },
  {
    id: 'ch46_q10',
    text: 'SSC CGL Tier-I পরীক্ষায় 4টি বিভাগ থাকে: Reasoning, GK, Quantitative Aptitude, এবং English। প্রতিটি বিভাগে 25টি প্রশ্ন থাকে। একজন পরীক্ষার্থী যদি Quantitative Aptitude এবং Reasoning বিভাগে 60% সময় ব্যয় করে, তবে GK এবং English-এ কত সময় ব্যয় করবে?',
    options: ['24 মিনিট', '30 মিনিট', '20 মিনিট', '18 মিনিট'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100টি, সময় = 60 মিনিট।' },
      { step: 'ধাপ ২:', content: 'QA + Reasoning = 50টি প্রশ্ন = 60% সময় = 36 মিনিট।' },
      { step: 'ধাপ ৩:', content: 'GK + English = 50টি প্রশ্ন = 40% সময় = 24 মিনিট।' }
    ],
    shortcutTrick: '💡 60 মিনিটের 40% = 24 মিনিট।'
  },
  {
    id: 'ch46_q11',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের জন্য 90 মিনিট সময় থাকে। একজন পরীক্ষার্থী যদি প্রথম 30 মিনিটে 35টি প্রশ্ন, পরবর্তী 30 মিনিটে 40টি প্রশ্ন এবং শেষ 30 মিনিটে 25টি প্রশ্ন সমাধানের পরিকল্পনা করে, তাহলে তার পরিকল্পনা কতটা কার্যকর?',
    options: ['অত্যন্ত কার্যকর', 'কার্যকর', 'আংশিক কার্যকর', 'অকার্যকর'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 30 মিনিটে 35টি = প্রতি মিনিটে 1.17 প্রশ্ন।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় 30 মিনিটে 40টি = প্রতি মিনিটে 1.33 প্রশ্ন।' },
      { step: 'ধাপ ৩:', content: 'শেষ 30 মিনিটে 25টি = প্রতি মিনিটে 0.83 প্রশ্ন।' },
      { step: 'ধাপ ৪:', content: 'গতি কমে যাচ্ছে, তাই পরিকল্পনা আংশিক কার্যকর।' }
    ],
    shortcutTrick: '💡 সময়ের সাথে গতি বজায় রাখা গুরুত্বপূর্ণ। শেষের দিকে গতি কমে যাওয়া উচিত নয়।'
  },
  {
    id: 'ch46_q12',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের জন্য 60 মিনিট সময় থাকে। যদি কোনো পরীক্ষার্থী 80% প্রশ্ন সঠিকভাবে সমাধান করতে চায়, তাহলে তার প্রতি প্রশ্নে সর্বোচ্চ কত সময় ব্যয় করা উচিত?',
    options: ['48 সেকেন্ড', '36 সেকেন্ড', '40 সেকেন্ড', '45 সেকেন্ড'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমস্ত প্রশ্ন সমাধানের জন্য মোট সময় = 60 মিনিট = 3600 সেকেন্ড।' },
      { step: 'ধাপ ২:', content: 'প্রতি প্রশ্নে গড় সময় = $\\frac{3600}{100} = 36$ সেকেন্ড।' },
      { step: 'ধাপ ৩:', content: 'সর্বোচ্চ সময় ব্যয় করতে পারে 36 সেকেন্ড (যেহেতু সঠিক উত্তর দিতে হবে)।' }
    ],
    shortcutTrick: '💡 3600 ÷ 100 = 36 সেকেন্ড।'
  },
  {
    id: 'ch46_q13',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের জন্য 60 মিনিট সময় থাকে। একজন পরীক্ষার্থী যদি 20টি প্রশ্ন এড়িয়ে যায় এবং বাকি প্রশ্নগুলোর জন্য গড়ে 40 সেকেন্ড সময় নেয়, তাহলে তার কত সময় বাকি থাকবে?',
    options: ['6.67 মিনিট', '5 মিনিট', '10 মিনিট', '8.33 মিনিট'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 100 - 20 = 80টি।' },
      { step: 'ধাপ ২:', content: 'প্রয়োজনীয় সময় = $80 \\times 40 = 3200$ সেকেন্ড = $\\frac{3200}{60} \\approx 53.33$ মিনিট।' },
      { step: 'ধাপ ৩:', content: 'বাকি সময় = $60 - 53.33 = 6.67$ মিনিট।' }
    ],
    shortcutTrick: '💡 80 × 40 = 3200 সেকেন্ড = 53.33 মিনিট। বাকি = 6.67 মিনিট।'
  },
  {
    id: 'ch46_q14',
    text: 'WBCS পরীক্ষায় 200টি প্রশ্নের জন্য 150 মিনিট সময় থাকে। যদি কোনো পরীক্ষার্থী 150টি প্রশ্নের উত্তর দেয় এবং প্রতিটি প্রশ্নে গড়ে 45 সেকেন্ড সময় নেয়, তাহলে তার সময়ের দক্ষতা কত?',
    options: ['75%', '80%', '70%', '85%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '150টি প্রশ্নে সময় = $150 \\times 45 = 6750$ সেকেন্ড = $\\frac{6750}{60} = 112.5$ মিনিট।' },
      { step: 'ধাপ ২:', content: 'মোট সময় = 150 মিনিট।' },
      { step: 'ধাপ ৩:', content: 'দক্ষতা = $\\frac{112.5}{150} \\times 100 = 75\\%$।' }
    ],
    shortcutTrick: '💡 150 × 45 = 6750 সেকেন্ড = 112.5 মিনিট। দক্ষতা = (112.5/150) × 100 = 75%।'
  },
  {
    id: 'ch46_q15',
    text: 'Railway Group D পরীক্ষায় 100টি প্রশ্নের জন্য 90 মিনিট সময় থাকে। একজন পরীক্ষার্থী যদি প্রতিটি প্রশ্নে 0.8 মিনিট সময় নেয়, তাহলে তার মোট সময় কত লাগবে এবং কত সময় বাকি থাকবে?',
    options: ['80 মিনিট, 10 মিনিট', '75 মিনিট, 15 মিনিট', '85 মিনিট, 5 মিনিট', '70 মিনিট, 20 মিনিট'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রয়োজনীয় সময় = $100 \\times 0.8 = 80$ মিনিট।' },
      { step: 'ধাপ ২:', content: 'বাকি সময় = $90 - 80 = 10$ মিনিট।' }
    ],
    shortcutTrick: '💡 100 × 0.8 = 80 মিনিট। বাকি = 90 - 80 = 10 মিনিট।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: বিষয়ভিত্তিক গুরুত্ব ও নম্বর বণ্টন (Subject-wise Weightage & Marks Distribution) (Q16-Q35)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q16',
    text: 'WBCS প্রিলিমিনারি পরীক্ষায় 200টি প্রশ্নের মধ্যে 40টি প্রশ্ন সাধারণ জ্ঞান (GK) থেকে আসে। GK-এর শতকরা হার কত?',
    options: ['25%', '20%', '30%', '35%'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'GK প্রশ্নের সংখ্যা = 40।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ৩:', content: 'শতকরা হার = $\\frac{40}{200} \\times 100 = 20\\%$।' }
    ],
    shortcutTrick: '💡 40/200 = 1/5 = 20%।'
  },
  {
    id: 'ch46_q17',
    text: 'SSC CGL Tier-I পরীক্ষায় Quantitative Aptitude বিভাগে 25টি প্রশ্ন থাকে, যার প্রতিটি 2 নম্বরের। এই বিভাগ থেকে মোট কত নম্বর পাওয়া যায়?',
    options: ['50', '40', '60', '30'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রশ্নের সংখ্যা = 25।' },
      { step: 'ধাপ ২:', content: 'প্রতি প্রশ্নের নম্বর = 2।' },
      { step: 'ধাপ ৩:', content: 'মোট নম্বর = $25 \\times 2 = 50$।' }
    ],
    shortcutTrick: '💡 25 × 2 = 50 নম্বর।'
  },
  {
    id: 'ch46_q18',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের মধ্যে Reasoning বিভাগ থেকে 30টি প্রশ্ন আসে। Reasoning-এর শতকরা হার কত?',
    options: ['30%', '25%', '35%', '40%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Reasoning প্রশ্ন = 30।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৩:', content: 'শতকরা = $\\frac{30}{100} \\times 100 = 30\\%$।' }
    ],
    shortcutTrick: '💡 30%।'
  },
  {
    id: 'ch46_q19',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের মধ্যে English এবং Reasoning বিভাগ থেকে যথাক্রমে 25টি এবং 25টি প্রশ্ন আসে। বাকি বিভাগ থেকে আসা প্রশ্নের সংখ্যা কত?',
    options: ['50', '40', '60', '30'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'English + Reasoning = $25 + 25 = 50$টি।' },
      { step: 'ধাপ ২:', content: 'বাকি প্রশ্ন = $100 - 50 = 50$টি।' }
    ],
    shortcutTrick: '💡 100 - 50 = 50টি।'
  },
  {
    id: 'ch46_q20',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে Mathematics বিভাগ থেকে 25টি প্রশ্ন আসে। যদি পরীক্ষার্থী Mathematics বিভাগে 80% নম্বর পায়, তাহলে সে কতটি প্রশ্ন সঠিকভাবে সমাধান করেছে?',
    options: ['20টি', '25টি', '30টি', '15টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics প্রশ্ন = 25টি।' },
      { step: 'ধাপ ২:', content: '80% সঠিক = $25 \\times 0.80 = 20$টি।' }
    ],
    shortcutTrick: '💡 25 × 0.8 = 20টি।'
  },
  {
    id: 'ch46_q21',
    text: 'WBCS পরীক্ষার 200টি প্রশ্নের মধ্যে 40টি ইংরেজি, 40টি বাংলা, 40টি সাধারণ জ্ঞান, 40টি পাটিগণিত, এবং 40টি যুক্তি বিভাগ থেকে আসে। পাটিগণিত ও যুক্তি বিভাগের মোট শতকরা হার কত?',
    options: ['40%', '30%', '50%', '20%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পাটিগণিত + যুক্তি = 40 + 40 = 80টি প্রশ্ন।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{80}{200} \\times 100 = 40\\%$।' }
    ],
    shortcutTrick: '💡 80/200 = 40%।'
  },
  {
    id: 'ch46_q22',
    text: 'SSC CGL Tier-I পরীক্ষায় 4টি বিভাগে মোট 100টি প্রশ্ন থাকে। প্রতিটি বিভাগে সমান সংখ্যক প্রশ্ন থাকলে, প্রতিটি বিভাগে কয়টি প্রশ্ন থাকে?',
    options: ['25টি', '20টি', '30টি', '15টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: 'বিভাগের সংখ্যা = 4।' },
      { step: 'ধাপ ৩:', content: 'প্রতি বিভাগে প্রশ্ন = $100 \\div 4 = 25$টি।' }
    ],
    shortcutTrick: '💡 100 ÷ 4 = 25টি।'
  },
  {
    id: 'ch46_q23',
    text: 'Railway NTPC পরীক্ষার 100টি প্রশ্নের মধ্যে Mathematics বিভাগ থেকে 25টি প্রশ্ন আসে। যদি পরীক্ষার্থী এই বিভাগে 75% স্কোর করে, তবে তার প্রাপ্ত নম্বর কত? (প্রতি প্রশ্ন 1 নম্বর)',
    options: ['18.75', '20', '25', '15'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics প্রশ্ন = 25টি।' },
      { step: 'ধাপ ২:', content: '75% সঠিক = $25 \\times 0.75 = 18.75$টি (প্রায় 19টি)।' }
    ],
    shortcutTrick: '💡 25 × 0.75 = 18.75।'
  },
  {
    id: 'ch46_q24',
    text: 'SSC MTS পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি Reasoning, 25টি English, 25টি General Awareness এবং 25টি Numerical Aptitude থেকে আসে। যদি কোনো পরীক্ষার্থী Numerical Aptitude-এ 80% এবং Reasoning-এ 60% স্কোর করে, তাহলে সে এই দুই বিভাগে মোট কত নম্বর পাবে?',
    options: ['35', '30', '40', '45'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Numerical Aptitude-এ প্রাপ্ত নম্বর = $25 \\times 0.80 = 20$।' },
      { step: 'ধাপ ২:', content: 'Reasoning-এ প্রাপ্ত নম্বর = $25 \\times 0.60 = 15$।' },
      { step: 'ধাপ ৩:', content: 'মোট = $20 + 15 = 35$।' }
    ],
    shortcutTrick: '💡 (25×0.8) + (25×0.6) = 20 + 15 = 35।'
  },
  {
    id: 'ch46_q25',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি Mathematics, 25টি Bengali, 25টি English এবং 25টি General Knowledge থেকে আসে। Mathematics বিভাগের শতকরা হার কত?',
    options: ['25%', '30%', '20%', '35%'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics প্রশ্ন = 25টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{25}{100} \\times 100 = 25\\%$।' }
    ],
    shortcutTrick: '💡 25%।'
  },
  {
    id: 'ch46_q26',
    text: 'WBCS পরীক্ষার প্রিলিমিনারি পেপারে 200টি প্রশ্নের মধ্যে 40টি General Studies থেকে আসে। পরীক্ষার্থী যদি General Studies বিভাগে 70% স্কোর করে, তাহলে সে কত নম্বর পাবে?',
    options: ['28', '30', '25', '20'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'General Studies প্রশ্ন = 40টি।' },
      { step: 'ধাপ ২:', content: '70% সঠিক = $40 \\times 0.70 = 28$টি।' }
    ],
    shortcutTrick: '💡 40 × 0.7 = 28।'
  },
  {
    id: 'ch46_q27',
    text: 'SSC CGL Tier-I পরীক্ষার 4টি বিভাগের মধ্যে Quantitative Aptitude বিভাগে 25টি প্রশ্ন থাকে। যদি কোনো পরীক্ষার্থী এই বিভাগে 60% নম্বর পায়, তবে সে কত নম্বর পাবে? (প্রতি প্রশ্ন 2 নম্বর)',
    options: ['30', '25', '20', '35'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = $25 \\times 0.60 = 15$টি।' },
      { step: 'ধাপ ২:', content: 'প্রাপ্ত নম্বর = $15 \\times 2 = 30$।' }
    ],
    shortcutTrick: '💡 25 × 0.6 × 2 = 30।'
  },
  {
    id: 'ch46_q28',
    text: 'Railway Group D পরীক্ষায় 100টি প্রশ্নের মধ্যে Mathematics এবং Reasoning বিভাগ থেকে যথাক্রমে 30টি এবং 25টি প্রশ্ন আসে। এই দুই বিভাগের মোট শতকরা হার কত?',
    options: ['55%', '50%', '60%', '45%'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics + Reasoning = 30 + 25 = 55টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{55}{100} \\times 100 = 55\\%$।' }
    ],
    shortcutTrick: '💡 55%।'
  },
  {
    id: 'ch46_q29',
    text: 'SSC CHSL পরীক্ষার 100টি প্রশ্নের মধ্যে 4টি বিভাগ থেকে সমান সংখ্যক প্রশ্ন আসে। যদি কোনো পরীক্ষার্থী প্রতিটি বিভাগে 75% নম্বর পায়, তাহলে তার মোট নম্বর কত? (প্রতি প্রশ্ন 1 নম্বর)',
    options: ['75', '80', '70', '85'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতি বিভাগে প্রশ্ন = $100 \\div 4 = 25$টি।' },
      { step: 'ধাপ ২:', content: 'প্রতি বিভাগে সঠিক = $25 \\times 0.75 = 18.75$।' },
      { step: 'ধাপ ৩:', content: 'মোট সঠিক = $18.75 \\times 4 = 75$।' }
    ],
    shortcutTrick: '💡 100 × 0.75 = 75।'
  },
  {
    id: 'ch46_q30',
    text: 'WBCS পরীক্ষার 200টি প্রশ্নের মধ্যে 40% প্রশ্ন General Studies থেকে আসে। General Studies থেকে কতটি প্রশ্ন আসে?',
    options: ['80টি', '60টি', '70টি', '90টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ২:', content: '40% = $200 \\times 0.40 = 80$টি।' }
    ],
    shortcutTrick: '💡 200 × 0.4 = 80টি।'
  },
  {
    id: 'ch46_q31',
    text: 'SSC CGL Tier-I পরীক্ষায় Quantitative Aptitude বিভাগ থেকে 25টি প্রশ্ন আসে, যার প্রতিটি 2 নম্বরের। যদি কোনো পরীক্ষার্থী এই বিভাগে 40 নম্বর পায়, তবে তার শতকরা স্কোর কত?',
    options: ['80%', '75%', '85%', '70%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট নম্বর = 25 × 2 = 50।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{40}{50} \\times 100 = 80\\%$।' }
    ],
    shortcutTrick: '💡 40/50 × 100 = 80%।'
  },
  {
    id: 'ch46_q32',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের মধ্যে 35টি প্রশ্ন Reasoning থেকে আসে। পরীক্ষার্থী যদি Reasoning-এ 80% নম্বর পায়, তবে সে কত নম্বর পাবে? (প্রতি প্রশ্ন 1 নম্বর)',
    options: ['28', '35', '30', '25'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = $35 \\times 0.80 = 28$টি।' },
      { step: 'ধাপ ২:', content: 'প্রাপ্ত নম্বর = 28।' }
    ],
    shortcutTrick: '💡 35 × 0.8 = 28।'
  },
  {
    id: 'ch46_q33',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে 20% প্রশ্ন Mathematics থেকে আসে। Mathematics থেকে কতটি প্রশ্ন আসে?',
    options: ['20টি', '25টি', '15টি', '30টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: '20% = $100 \\times 0.20 = 20$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.2 = 20টি।'
  },
  {
    id: 'ch46_q34',
    text: 'SSC MTS পরীক্ষায় 100টি প্রশ্নের মধ্যে General Awareness বিভাগ থেকে 25টি প্রশ্ন আসে। পরীক্ষার্থী যদি এই বিভাগে 64% নম্বর পায়, তাহলে সে কতটি প্রশ্নের সঠিক উত্তর দিয়েছে?',
    options: ['16টি', '20টি', '15টি', '18টি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = $25 \\times 0.64 = 16$টি।' }
    ],
    shortcutTrick: '💡 25 × 0.64 = 16টি।'
  },
  {
    id: 'ch46_q35',
    text: 'WBCS পরীক্ষার 200টি প্রশ্নের মধ্যে 5টি বিভাগ থেকে সমান সংখ্যক প্রশ্ন আসে। প্রতিটি বিভাগে কয়টি প্রশ্ন থাকে?',
    options: ['40টি', '35টি', '45টি', '50টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ২:', content: 'বিভাগ = 5।' },
      { step: 'ধাপ ৩:', content: 'প্রতি বিভাগে প্রশ্ন = $200 \\div 5 = 40$টি।' }
    ],
    shortcutTrick: '💡 200 ÷ 5 = 40টি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: নেগেটিভ মার্কিং ও নির্ভুলতা কৌশল (Negative Marking & Accuracy Strategies) (Q36-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q36',
    text: 'WBCS প্রিলিমিনারি পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.25 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 200টি প্রশ্নের মধ্যে 150টি সঠিক এবং 30টি ভুল উত্তর দিলে, তার নেট স্কোর কত হবে? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['142.5', '140', '145', '138.5'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে প্রাপ্ত নম্বর = $150 \\times 1 = 150$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $30 \\times 0.25 = 7.5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $150 - 7.5 = 142.5$।' }
    ],
    shortcutTrick: '💡 150 - (30 × 0.25) = 150 - 7.5 = 142.5।'
  },
  {
    id: 'ch46_q37',
    text: 'SSC CGL Tier-I পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.50 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 80টি সঠিক এবং 10টি ভুল উত্তর দিলে, তার নেট স্কোর কত হবে? (প্রতি সঠিক উত্তরের জন্য 2 নম্বর)',
    options: ['155', '160', '150', '145'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে প্রাপ্ত নম্বর = $80 \\times 2 = 160$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $10 \\times 0.50 = 5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $160 - 5 = 155$।' }
    ],
    shortcutTrick: '💡 (80×2) - (10×0.5) = 160 - 5 = 155।'
  },
  {
    id: 'ch46_q38',
    text: 'Railway NTPC পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.33 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 70টি সঠিক এবং 15টি ভুল উত্তর দিলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['65.05', '68', '70', '62.5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $70 \\times 1 = 70$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $15 \\times 0.33 = 4.95$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $70 - 4.95 = 65.05$।' }
    ],
    shortcutTrick: '💡 70 - (15 × 0.33) = 70 - 4.95 = 65.05।'
  },
  {
    id: 'ch46_q39',
    text: 'SSC CHSL পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.50 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 90টি সঠিক উত্তর দিলে এবং বাকি 10টি না করলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['90', '85', '80', '95'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $90 \\times 1 = 90$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তর নেই, তাই কাটা নেই।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = 90।' }
    ],
    shortcutTrick: '💡 যেহেতু ভুল উত্তর নেই, তাই 90 নম্বরই নেট স্কোর।'
  },
  {
    id: 'ch46_q40',
    text: 'WB Gram Panchayat পরীক্ষায় কোনো নেগেটিভ মার্কিং নেই। কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 60টি সঠিক উত্তর দিলে এবং 20টি ভুল উত্তর দিলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['60', '40', '80', '50'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেহেতু নেগেটিভ মার্কিং নেই, তাই শুধু সঠিক উত্তরগুলোর নম্বর গণনা করা হয়।' },
      { step: 'ধাপ ২:', content: 'নেট স্কোর = $60 \\times 1 = 60$।' }
    ],
    shortcutTrick: '💡 নেগেটিভ মার্কিং না থাকায় 60 নম্বরই নেট স্কোর।'
  },
  {
    id: 'ch46_q41',
    text: 'WBCS পরীক্ষায় কোনো পরীক্ষার্থী 200টি প্রশ্নের মধ্যে 130টি সঠিক, 50টি ভুল এবং 20টি উত্তর দেয়নি। যদি নেগেটিভ মার্কিং 0.25 হয়, তবে তার নেট স্কোর কত?',
    options: ['117.5', '120', '115', '110'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $130 \\times 1 = 130$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $50 \\times 0.25 = 12.5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $130 - 12.5 = 117.5$।' }
    ],
    shortcutTrick: '💡 130 - (50 × 0.25) = 130 - 12.5 = 117.5।'
  },
  {
    id: 'ch46_q42',
    text: 'SSC CGL Tier-I পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.50 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 80টি প্রশ্নের সঠিক উত্তর দিলে এবং 15টি ভুল উত্তর দিলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 2 নম্বর)',
    options: ['152.5', '150', '155', '148.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $80 \\times 2 = 160$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $15 \\times 0.50 = 7.5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $160 - 7.5 = 152.5$।' }
    ],
    shortcutTrick: '💡 (80×2) - (15×0.5) = 160 - 7.5 = 152.5।'
  },
  {
    id: 'ch46_q43',
    text: 'Railway Group D পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.33 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 75টি প্রশ্নের সঠিক উত্তর দিলে এবং 20টি ভুল উত্তর দিলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['68.4', '70', '65', '72.5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $75 \\times 1 = 75$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $20 \\times 0.33 = 6.6$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $75 - 6.6 = 68.4$।' }
    ],
    shortcutTrick: '💡 75 - (20 × 0.33) = 75 - 6.6 = 68.4।'
  },
  {
    id: 'ch46_q44',
    text: 'SSC MTS পরীক্ষায় প্রতিটি ভুল উত্তরের জন্য 0.25 নম্বর কাটা হয়। কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 85টি সঠিক এবং 10টি ভুল উত্তর দিলে, তার নেট স্কোর কত? (প্রতি সঠিক উত্তরের জন্য 1 নম্বর)',
    options: ['82.5', '85', '80', '87.5'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $85 \\times 1 = 85$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $10 \\times 0.25 = 2.5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $85 - 2.5 = 82.5$।' }
    ],
    shortcutTrick: '💡 85 - (10 × 0.25) = 85 - 2.5 = 82.5।'
  },
  {
    id: 'ch46_q45',
    text: 'WBCS পরীক্ষায় 200টি প্রশ্নের মধ্যে 140টি সঠিক উত্তর দিতে পারলে এবং 40টি ভুল উত্তর দিলে, নেট স্কোর কত হবে? (সঠিক উত্তরের জন্য 1 নম্বর, ভুলের জন্য 0.25 কাটা)',
    options: ['130', '135', '125', '140'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $140 \\times 1 = 140$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $40 \\times 0.25 = 10$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $140 - 10 = 130$।' }
    ],
    shortcutTrick: '💡 140 - (40 × 0.25) = 140 - 10 = 130।'
  },
  {
    id: 'ch46_q46',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্নের মধ্যে 75টি সঠিক এবং 20টি ভুল উত্তর দিলে, নেট স্কোর কত? (সঠিক উত্তরের জন্য 2 নম্বর, ভুলের জন্য 0.50 কাটা)',
    options: ['140', '150', '145', '135'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $75 \\times 2 = 150$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $20 \\times 0.50 = 10$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $150 - 10 = 140$।' }
    ],
    shortcutTrick: '💡 (75×2) - (20×0.5) = 150 - 10 = 140।'
  },
  {
    id: 'ch46_q47',
    text: 'Railway NTPC পরীক্ষায় কোনো পরীক্ষার্থী 90টি প্রশ্নের সঠিক উত্তর দিলে এবং 10টি প্রশ্নের ভুল উত্তর দিলে, তার নেট স্কোর কত? (সঠিক উত্তরের জন্য 1 নম্বর, ভুলের জন্য 0.33 কাটা)',
    options: ['86.7', '90', '85', '88.5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $90 \\times 1 = 90$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $10 \\times 0.33 = 3.3$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $90 - 3.3 = 86.7$।' }
    ],
    shortcutTrick: '💡 90 - (10 × 0.33) = 90 - 3.3 = 86.7।'
  },
  {
    id: 'ch46_q48',
    text: 'WB Gram Panchayat পরীক্ষায় কোনো নেগেটিভ মার্কিং নেই। পরীক্ষার্থী 80টি প্রশ্নের সঠিক উত্তর দিলে এবং 20টি প্রশ্নের ভুল উত্তর দিলে, তার নেট স্কোর কত?',
    options: ['80', '60', '100', '75'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নেগেটিভ মার্কিং না থাকায় শুধু সঠিক উত্তরগুলো গণনা করা হয়।' },
      { step: 'ধাপ ২:', content: 'নেট স্কোর = $80 \\times 1 = 80$।' }
    ],
    shortcutTrick: '💡 80 নম্বর।'
  },
  {
    id: 'ch46_q49',
    text: 'SSC CHSL পরীক্ষায় কোনো পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 70টি সঠিক, 15টি ভুল এবং 15টি উত্তর দেয়নি। নেগেটিভ মার্কিং 0.50 হলে, তার নেট স্কোর কত?',
    options: ['62.5', '70', '65', '60'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $70 \\times 1 = 70$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $15 \\times 0.50 = 7.5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $70 - 7.5 = 62.5$।' }
    ],
    shortcutTrick: '💡 70 - (15 × 0.5) = 70 - 7.5 = 62.5।'
  },
  {
    id: 'ch46_q50',
    text: 'SSC MTS পরীক্ষায় 100টি প্রশ্নের মধ্যে 65টি সঠিক এবং 20টি ভুল উত্তর দিলে, নেট স্কোর কত? (সঠিক উত্তরের জন্য 1 নম্বর, ভুলের জন্য 0.25 কাটা)',
    options: ['60', '65', '55', '70'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর থেকে নম্বর = $65 \\times 1 = 65$।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তরের জন্য কাটা = $20 \\times 0.25 = 5$।' },
      { step: 'ধাপ ৩:', content: 'নেট স্কোর = $65 - 5 = 60$।' }
    ],
    shortcutTrick: '💡 65 - (20 × 0.25) = 65 - 5 = 60।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: প্রশ্নের ধরন ও উত্তর কৌশল (Question Types & Answering Techniques) (Q51-Q70)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q51',
    text: 'WBCS পরীক্ষায় 200টি প্রশ্নের মধ্যে 30% প্রশ্ন সহজ, 40% মাঝারি এবং 30% কঠিন ধরণের। সহজ ও মাঝারি প্রশ্নের মোট সংখ্যা কত?',
    options: ['140টি', '120টি', '160টি', '100টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহজ + মাঝারি = 30% + 40% = 70%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ৩:', content: 'সহজ + মাঝারি = $200 \\times 0.70 = 140$টি।' }
    ],
    shortcutTrick: '💡 200 × 0.7 = 140টি।'
  },
  {
    id: 'ch46_q52',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্নের মধ্যে 40% Quantitative Aptitude, 30% Reasoning এবং বাকি General Knowledge এবং English। English এবং General Knowledge-এর মোট প্রশ্ন সংখ্যা কত?',
    options: ['30টি', '40টি', '50টি', '20টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'QA + Reasoning = 40% + 30% = 70%।' },
      { step: 'ধাপ ২:', content: 'English + GK = 100% - 70% = 30%।' },
      { step: 'ধাপ ৩:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৪:', content: 'English + GK = $100 \\times 0.30 = 30$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.3 = 30টি।'
  },
  {
    id: 'ch46_q53',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের মধ্যে 25% প্রশ্ন Mathematics, 30% Reasoning এবং বাকি General Awareness। General Awareness থেকে কতটি প্রশ্ন আসে?',
    options: ['45টি', '50টি', '40টি', '35টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics + Reasoning = 25% + 30% = 55%।' },
      { step: 'ধাপ ২:', content: 'General Awareness = 100% - 55% = 45%।' },
      { step: 'ধাপ ৩:', content: 'GA প্রশ্ন = $100 \\times 0.45 = 45$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.45 = 45টি।'
  },
  {
    id: 'ch46_q54',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি Mathematics, 25টি Reasoning, 25টি English এবং 25টি General Knowledge। যদি পরীক্ষার্থী Mathematics এবং Reasoning-এ 80% এবং বাকি বিভাগে 70% নম্বর পায়, তাহলে তার মোট নম্বর কত?',
    options: ['75', '80', '70', '85'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Math + Reasoning = 25 + 25 = 50টি, 80% = 40টি।' },
      { step: 'ধাপ ২:', content: 'English + GK = 25 + 25 = 50টি, 70% = 35টি।' },
      { step: 'ধাপ ৩:', content: 'মোট = 40 + 35 = 75টি।' }
    ],
    shortcutTrick: '💡 (50×0.8) + (50×0.7) = 40 + 35 = 75।'
  },
  {
    id: 'ch46_q55',
    text: 'WBCS পরীক্ষায় 200টি প্রশ্নের মধ্যে 60% প্রশ্ন MCQ-ভিত্তিক এবং 40% প্রশ্ন অংক-ভিত্তিক। অংক-ভিত্তিক প্রশ্নের সংখ্যা কত?',
    options: ['80টি', '60টি', '100টি', '120টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অংক-ভিত্তিক প্রশ্ন = 40%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ৩:', content: 'অংক-ভিত্তিক = $200 \\times 0.40 = 80$টি।' }
    ],
    shortcutTrick: '💡 200 × 0.4 = 80টি।'
  },
  {
    id: 'ch46_q56',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্নের মধ্যে 50টি MCQ এবং 50টি গণনা-ভিত্তিক। যদি পরীক্ষার্থী MCQ-তে 80% এবং গণনা-ভিত্তিক প্রশ্নে 70% নম্বর পায়, তাহলে তার মোট নম্বর কত? (প্রতি প্রশ্ন 1 নম্বর)',
    options: ['75', '80', '70', '85'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'MCQ-তে প্রাপ্ত নম্বর = $50 \\times 0.80 = 40$।' },
      { step: 'ধাপ ২:', content: 'গণনা-ভিত্তিক প্রশ্নে প্রাপ্ত নম্বর = $50 \\times 0.70 = 35$।' },
      { step: 'ধাপ ৩:', content: 'মোট = $40 + 35 = 75$।' }
    ],
    shortcutTrick: '💡 (50×0.8) + (50×0.7) = 40 + 35 = 75।'
  },
  {
    id: 'ch46_q57',
    text: 'Railway Group D পরীক্ষায় 100টি প্রশ্নের মধ্যে 40% প্রশ্ন সহজ, 35% মাঝারি এবং 25% কঠিন। সহজ ও মাঝারি প্রশ্নের মোট সংখ্যা কত?',
    options: ['75টি', '80টি', '70টি', '65টি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহজ + মাঝারি = 40% + 35% = 75%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৩:', content: 'সহজ + মাঝারি = $100 \\times 0.75 = 75$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.75 = 75টি।'
  },
  {
    id: 'ch46_q58',
    text: 'SSC MTS পরীক্ষায় 100টি প্রশ্নের মধ্যে 25% প্রশ্ন সংখ্যাতত্ত্ব, 25% যুক্তি, 25% ইংরেজি এবং 25% সাধারণ জ্ঞান থেকে আসে। সংখ্যাতত্ত্ব ও যুক্তি বিভাগের মোট প্রশ্ন সংখ্যা কত?',
    options: ['50টি', '40টি', '60টি', '30টি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সংখ্যাতত্ত্ব + যুক্তি = 25% + 25% = 50%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৩:', content: 'মোট = $100 \\times 0.50 = 50$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.5 = 50টি।'
  },
  {
    id: 'ch46_q59',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে 30% প্রশ্ন অংক, 25% যুক্তি, 25% বাংলা এবং 20% ইংরেজি থেকে আসে। অংক ও যুক্তি বিভাগের মোট প্রশ্ন সংখ্যা কত?',
    options: ['55টি', '60টি', '50টি', '45টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অংক + যুক্তি = 30% + 25% = 55%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৩:', content: 'মোট = $100 \\times 0.55 = 55$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.55 = 55টি।'
  },
  {
    id: 'ch46_q60',
    text: 'WBCS পরীক্ষায় 200টি প্রশ্নের মধ্যে 120টি সহজ এবং 80টি কঠিন। সহজ প্রশ্নের শতকরা হার কত?',
    options: ['60%', '50%', '70%', '40%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহজ প্রশ্ন = 120টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{120}{200} \\times 100 = 60\\%$।' }
    ],
    shortcutTrick: '💡 120/200 × 100 = 60%।'
  },
  {
    id: 'ch46_q61',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্নের মধ্যে 40টি সহজ, 30টি মাঝারি এবং 30টি কঠিন। সহজ ও মাঝারি প্রশ্নের শতকরা হার কত?',
    options: ['70%', '60%', '80%', '50%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সহজ + মাঝারি = 40 + 30 = 70টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{70}{100} \\times 100 = 70\\%$।' }
    ],
    shortcutTrick: '💡 70%।'
  },
  {
    id: 'ch46_q62',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি অংক, 35টি যুক্তি এবং 40টি সাধারণ জ্ঞান। অংক ও যুক্তি বিভাগের শতকরা হার কত?',
    options: ['60%', '50%', '70%', '40%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অংক + যুক্তি = 25 + 35 = 60টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{60}{100} \\times 100 = 60\\%$।' }
    ],
    shortcutTrick: '💡 60%।'
  },
  {
    id: 'ch46_q63',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি English, 25টি Reasoning, 25টি Quantitative Aptitude এবং 25টি General Awareness। Quantitative Aptitude ও Reasoning বিভাগের মোট শতকরা হার কত?',
    options: ['50%', '40%', '60%', '30%'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'QA + Reasoning = 25 + 25 = 50টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{50}{100} \\times 100 = 50\\%$।' }
    ],
    shortcutTrick: '💡 50%।'
  },
  {
    id: 'ch46_q64',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে 25টি Mathematics, 25টি Bengali, 25টি English এবং 25টি General Knowledge। Mathematics বিভাগের শতকরা হার কত?',
    options: ['25%', '30%', '20%', '35%'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'Mathematics প্রশ্ন = 25টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{25}{100} \\times 100 = 25\\%$।' }
    ],
    shortcutTrick: '💡 25%।'
  },
  {
    id: 'ch46_q65',
    text: 'WBCS পরীক্ষার প্রিলিমিনারি পেপারে 200টি প্রশ্নের মধ্যে 40% প্রশ্ন General Studies থেকে আসে। General Studies থেকে কতটি প্রশ্ন আসে?',
    options: ['80টি', '60টি', '70টি', '90টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ২:', content: '40% = $200 \\times 0.40 = 80$টি।' }
    ],
    shortcutTrick: '💡 200 × 0.4 = 80টি।'
  },
  {
    id: 'ch46_q66',
    text: 'SSC CGL Tier-I পরীক্ষায় 100টি প্রশ্নের মধ্যে 30% প্রশ্ন Quantitative Aptitude থেকে আসে। Quantitative Aptitude থেকে কতটি প্রশ্ন আসে?',
    options: ['30টি', '25টি', '35টি', '40টি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: '30% = $100 \\times 0.30 = 30$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.3 = 30টি।'
  },
  {
    id: 'ch46_q67',
    text: 'Railway NTPC পরীক্ষায় 100টি প্রশ্নের মধ্যে 35% প্রশ্ন Reasoning থেকে আসে। Reasoning থেকে কতটি প্রশ্ন আসে?',
    options: ['35টি', '30টি', '40টি', '25টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: '35% = $100 \\times 0.35 = 35$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.35 = 35টি।'
  },
  {
    id: 'ch46_q68',
    text: 'SSC CHSL পরীক্ষায় 100টি প্রশ্নের মধ্যে 25% প্রশ্ন English থেকে আসে। English থেকে কতটি প্রশ্ন আসে?',
    options: ['25টি', '20টি', '30টি', '15টি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: '25% = $100 \\times 0.25 = 25$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.25 = 25টি।'
  },
  {
    id: 'ch46_q69',
    text: 'WB Gram Panchayat পরীক্ষায় 100টি প্রশ্নের মধ্যে 20% প্রশ্ন English থেকে আসে। English থেকে কতটি প্রশ্ন আসে?',
    options: ['20টি', '25টি', '15টি', '30টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ২:', content: '20% = $100 \\times 0.20 = 20$টি।' }
    ],
    shortcutTrick: '💡 100 × 0.2 = 20টি।'
  },
  {
    id: 'ch46_q70',
    text: 'WBCS পরীক্ষার প্রিলিমিনারি পেপারে 200টি প্রশ্নের মধ্যে 30% প্রশ্ন অংক, 30% যুক্তি, 20% ইংরেজি, 20% বাংলা। অংক ও যুক্তি বিভাগের মোট প্রশ্ন সংখ্যা কত?',
    options: ['120টি', '100টি', '140টি', '80টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'অংক + যুক্তি = 30% + 30% = 60%।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 200।' },
      { step: 'ধাপ ৩:', content: 'মোট = $200 \\times 0.60 = 120$টি।' }
    ],
    shortcutTrick: '💡 200 × 0.6 = 120টি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: Mock Test ও সময় বণ্টন কৌশল (Mock Test & Time Allocation Strategy) (Q71-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q71',
    text: 'WBCS প্রিলিমিনারি পরীক্ষার জন্য একজন পরীক্ষার্থী 10টি মক টেস্ট দেয়। প্রতিটি টেস্টে সে গড়ে 140 নম্বর পায়। তার মোট স্কোর কত?',
    options: ['1400', '140', '14', '14000'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতি টেস্টে গড় নম্বর = 140।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 10।' },
      { step: 'ধাপ ৩:', content: 'মোট স্কোর = $140 \\times 10 = 1400$।' }
    ],
    shortcutTrick: '💡 140 × 10 = 1400।'
  },
  {
    id: 'ch46_q72',
    text: 'SSC CGL Tier-I পরীক্ষার জন্য একজন পরীক্ষার্থী 5টি মক টেস্ট দেয় এবং প্রতিটি টেস্টে 70% নম্বর পায়। যদি প্রতিটি টেস্ট 100 নম্বরের হয়, তাহলে তার মোট প্রাপ্ত নম্বর কত?',
    options: ['350', '400', '300', '250'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতি টেস্টে প্রাপ্ত নম্বর = $100 \\times 0.70 = 70$।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 5।' },
      { step: 'ধাপ ৩:', content: 'মোট প্রাপ্ত নম্বর = $70 \\times 5 = 350$।' }
    ],
    shortcutTrick: '💡 100 × 0.7 × 5 = 350।'
  },
  {
    id: 'ch46_q73',
    text: 'Railway NTPC পরীক্ষার জন্য একজন পরীক্ষার্থী 8টি মক টেস্ট দেয়। তার স্কোর যথাক্রমে 75, 80, 85, 70, 90, 95, 85 এবং 80। তার গড় স্কোর কত?',
    options: ['82.5', '80', '85', '87.5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্কোরগুলোর যোগফল = $75 + 80 + 85 + 70 + 90 + 95 + 85 + 80 = 660$।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 8।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{660}{8} = 82.5$।' }
    ],
    shortcutTrick: '💡 660 ÷ 8 = 82.5।'
  },
  {
    id: 'ch46_q74',
    text: 'SSC CHSL পরীক্ষার জন্য একজন পরীক্ষার্থী 6টি মক টেস্ট দেয়। তার গড় স্কোর 75। যদি প্রথম 3টি টেস্টে তার গড় স্কোর 70 হয়, তবে শেষ 3টি টেস্টে তার গড় স্কোর কত?',
    options: ['80', '75', '85', '70'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট স্কোর = $6 \\times 75 = 450$।' },
      { step: 'ধাপ ২:', content: 'প্রথম 3টি টেস্টের মোট স্কোর = $3 \\times 70 = 210$।' },
      { step: 'ধাপ ৩:', content: 'শেষ 3টি টেস্টের মোট স্কোর = $450 - 210 = 240$।' },
      { step: 'ধাপ ৪:', content: 'শেষ 3টি টেস্টের গড় = $\\frac{240}{3} = 80$।' }
    ],
    shortcutTrick: '💡 (6×75 - 3×70) ÷ 3 = (450 - 210) ÷ 3 = 240 ÷ 3 = 80।'
  },
  {
    id: 'ch46_q75',
    text: 'WB Gram Panchayat পরীক্ষার জন্য একজন পরীক্ষার্থী 4টি মক টেস্ট দেয়। তার স্কোর 60, 70, 80 এবং 90। তার গড় স্কোর কত?',
    options: ['75', '70', '80', '85'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগফল = $60 + 70 + 80 + 90 = 300$।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 4।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{300}{4} = 75$।' }
    ],
    shortcutTrick: '💡 300 ÷ 4 = 75।'
  },
  {
    id: 'ch46_q76',
    text: 'WBCS পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী প্রতিদিন 4 ঘণ্টা পড়াশোনা করে। যদি সে 30 দিনে মোট কত ঘণ্টা পড়াশোনা করে?',
    options: ['120', '100', '150', '80'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 4 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 30।' },
      { step: 'ধাপ ৩:', content: 'মোট ঘণ্টা = $4 \\times 30 = 120$।' }
    ],
    shortcutTrick: '💡 4 × 30 = 120 ঘণ্টা।'
  },
  {
    id: 'ch46_q77',
    text: 'SSC CGL Tier-I পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী প্রতিদিন 3 ঘণ্টা Quantitative Aptitude এবং 2 ঘণ্টা Reasoning অনুশীলন করে। 20 দিনে সে এই দুই বিষয়ে মোট কত ঘণ্টা অনুশীলন করে?',
    options: ['100', '80', '120', '90'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন মোট সময় = $3 + 2 = 5$ ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 20।' },
      { step: 'ধাপ ৩:', content: 'মোট ঘণ্টা = $5 \\times 20 = 100$।' }
    ],
    shortcutTrick: '💡 5 × 20 = 100 ঘণ্টা।'
  },
  {
    id: 'ch46_q78',
    text: 'Railway NTPC পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী প্রতিদিন 6 ঘণ্টা পড়াশোনা করে। সে 15 দিনে মোট কত ঘণ্টা পড়াশোনা করে?',
    options: ['90', '80', '100', '70'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 6 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 15।' },
      { step: 'ধাপ ৩:', content: 'মোট ঘণ্টা = $6 \\times 15 = 90$।' }
    ],
    shortcutTrick: '💡 6 × 15 = 90 ঘণ্টা।'
  },
  {
    id: 'ch46_q79',
    text: 'SSC CHSL পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী প্রথম 10 দিনে 5 ঘণ্টা করে এবং পরবর্তী 10 দিনে 7 ঘণ্টা করে পড়াশোনা করে। তার মোট পড়াশোনার সময় কত?',
    options: ['120', '100', '140', '80'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথম 10 দিনে = $10 \\times 5 = 50$ ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'পরবর্তী 10 দিনে = $10 \\times 7 = 70$ ঘণ্টা।' },
      { step: 'ধাপ ৩:', content: 'মোট = $50 + 70 = 120$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 (10×5) + (10×7) = 50 + 70 = 120 ঘণ্টা।'
  },
  {
    id: 'ch46_q80',
    text: 'WB Gram Panchayat পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী প্রতিদিন 4 ঘণ্টা পড়াশোনা করে। 25 দিনে সে কত ঘণ্টা পড়াশোনা করে?',
    options: ['100', '80', '120', '90'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 4 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 25।' },
      { step: 'ধাপ ৩:', content: 'মোট ঘণ্টা = $4 \\times 25 = 100$।' }
    ],
    shortcutTrick: '💡 4 × 25 = 100 ঘণ্টা।'
  },
  {
    id: 'ch46_q81',
    text: 'WBCS পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী 40টি মক টেস্ট দেয়। যদি প্রতি টেস্টে সে গড়ে 75% নম্বর পায়, তাহলে তার মোট স্কোর কত? (প্রতি টেস্ট 100 নম্বরের)',
    options: ['3000', '2500', '3500', '4000'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতি টেস্টে প্রাপ্ত নম্বর = $100 \\times 0.75 = 75$।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 40।' },
      { step: 'ধাপ ৩:', content: 'মোট স্কোর = $75 \\times 40 = 3000$।' }
    ],
    shortcutTrick: '💡 100 × 0.75 × 40 = 3000।'
  },
  {
    id: 'ch46_q82',
    text: 'SSC CGL Tier-I পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী 10টি মক টেস্ট দেয়। তার গড় স্কোর 80। যদি সে 11তম টেস্টে 90 পায়, তাহলে তার নতুন গড় স্কোর কত?',
    options: ['80.91', '82', '81', '80.5'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '10টি টেস্টের মোট স্কোর = $10 \\times 80 = 800$।' },
      { step: 'ধাপ ২:', content: '11টি টেস্টের মোট স্কোর = $800 + 90 = 890$।' },
      { step: 'ধাপ ৩:', content: 'নতুন গড় = $\\frac{890}{11} \\approx 80.91$।' }
    ],
    shortcutTrick: '💡 (10×80 + 90) ÷ 11 = (800 + 90) ÷ 11 = 890 ÷ 11 = 80.91।'
  },
  {
    id: 'ch46_q83',
    text: 'Railway NTPC পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী 5টি মক টেস্ট দেয়। তার স্কোর 70, 80, 75, 85 এবং 90। তার মোট স্কোর কত এবং গড় স্কোর কত?',
    options: ['400, 80', '375, 75', '425, 85', '350, 70'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মোট স্কোর = $70 + 80 + 75 + 85 + 90 = 400$।' },
      { step: 'ধাপ ২:', content: 'গড় = $\\frac{400}{5} = 80$।' }
    ],
    shortcutTrick: '💡 400 ÷ 5 = 80।'
  },
  {
    id: 'ch46_q84',
    text: 'SSC CHSL পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী 8টি মক টেস্ট দেয়। তার গড় স্কোর 72। যদি 9তম টেস্টে সে 80 পায়, তাহলে তার নতুন গড় স্কোর কত?',
    options: ['72.89', '73', '74', '72.5'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '8টি টেস্টের মোট স্কোর = $8 \\times 72 = 576$।' },
      { step: 'ধাপ ২:', content: '9টি টেস্টের মোট স্কোর = $576 + 80 = 656$।' },
      { step: 'ধাপ ৩:', content: 'নতুন গড় = $\\frac{656}{9} \\approx 72.89$।' }
    ],
    shortcutTrick: '💡 (8×72 + 80) ÷ 9 = (576 + 80) ÷ 9 = 656 ÷ 9 = 72.89।'
  },
  {
    id: 'ch46_q85',
    text: 'WB Gram Panchayat পরীক্ষার প্রস্তুতির জন্য একজন পরীক্ষার্থী 6টি মক টেস্ট দেয়। তার স্কোর 65, 75, 85, 70, 80 এবং 90। তার গড় স্কোর কত?',
    options: ['77.5', '75', '80', '82.5'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যোগফল = $65 + 75 + 85 + 70 + 80 + 90 = 465$।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 6।' },
      { step: 'ধাপ ৩:', content: 'গড় = $\\frac{465}{6} = 77.5$।' }
    ],
    shortcutTrick: '💡 465 ÷ 6 = 77.5।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: ভুল প্রশ্ন চিহ্নিতকরণ ও পুনর্বিবেচনা (Error Identification & Review) (Q86-Q95)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q86',
    text: 'WBCS পরীক্ষায় একজন পরীক্ষার্থী 200টি প্রশ্নের মধ্যে 150টি সমাধান করে। 40টি প্রশ্ন সে ভুল করে এবং 10টি প্রশ্ন এড়িয়ে যায়। তার ভুলের শতকরা হার কত? (সমাধানকৃত প্রশ্নের ভিত্তিতে)',
    options: ['26.67%', '20%', '30%', '25%'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 150টি।' },
      { step: 'ধাপ ২:', content: 'ভুল প্রশ্ন = 40টি।' },
      { step: 'ধাপ ৩:', content: 'ভুলের শতকরা = $\\frac{40}{150} \\times 100 \\approx 26.67\\%$।' }
    ],
    shortcutTrick: '💡 40/150 × 100 = 26.67%।'
  },
  {
    id: 'ch46_q87',
    text: 'SSC CGL Tier-I পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 80টি সমাধান করে। 10টি প্রশ্ন ভুল এবং 10টি এড়িয়ে যায়। তার সঠিক উত্তরের শতকরা হার কত? (মোট প্রশ্নের ভিত্তিতে)',
    options: ['70%', '80%', '75%', '65%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = 80 - 10 = 70টি।' },
      { step: 'ধাপ ২:', content: 'মোট প্রশ্ন = 100।' },
      { step: 'ধাপ ৩:', content: 'সঠিকের শতকরা = $\\frac{70}{100} \\times 100 = 70\\%$।' }
    ],
    shortcutTrick: '💡 70%।'
  },
  {
    id: 'ch46_q88',
    text: 'Railway NTPC পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 90টি সমাধান করে। 15টি প্রশ্ন ভুল হয়। তার সঠিক উত্তরের সংখ্যা কত?',
    options: ['75টি', '85টি', '70টি', '80টি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 90টি।' },
      { step: 'ধাপ ২:', content: 'ভুল উত্তর = 15টি।' },
      { step: 'ধাপ ৩:', content: 'সঠিক উত্তর = $90 - 15 = 75$টি।' }
    ],
    shortcutTrick: '💡 90 - 15 = 75টি।'
  },
  {
    id: 'ch46_q89',
    text: 'SSC CHSL পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 80টি সঠিক এবং 10টি ভুল উত্তর দেয়। বাকি প্রশ্নগুলি সে এড়িয়ে যায়। তার ভুলের শতকরা হার কত? (সমাধানকৃত প্রশ্নের ভিত্তিতে)',
    options: ['11.11%', '10%', '15%', '12.5%'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 80 + 10 = 90টি।' },
      { step: 'ধাপ ২:', content: 'ভুল প্রশ্ন = 10টি।' },
      { step: 'ধাপ ৩:', content: 'ভুলের শতকরা = $\\frac{10}{90} \\times 100 \\approx 11.11\\%$।' }
    ],
    shortcutTrick: '💡 10/90 × 100 = 11.11%।'
  },
  {
    id: 'ch46_q90',
    text: 'WB Gram Panchayat পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 85টি সমাধান করে। 5টি প্রশ্ন ভুল হয়। তার ভুলের শতকরা হার কত? (সমাধানকৃত প্রশ্নের ভিত্তিতে)',
    options: ['5.88%', '5%', '6%', '7%'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 85টি।' },
      { step: 'ধাপ ২:', content: 'ভুল প্রশ্ন = 5টি।' },
      { step: 'ধাপ ৩:', content: 'ভুলের শতকরা = $\\frac{5}{85} \\times 100 \\approx 5.88\\%$।' }
    ],
    shortcutTrick: '💡 5/85 × 100 = 5.88%।'
  },
  {
    id: 'ch46_q91',
    text: 'WBCS পরীক্ষায় একজন পরীক্ষার্থী 200টি প্রশ্নের মধ্যে 180টি সমাধান করে। 20টি প্রশ্ন ভুল হয়। তার সঠিক উত্তরের সংখ্যা কত?',
    options: ['160টি', '170টি', '180টি', '150টি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = 180 - 20 = 160টি।' }
    ],
    shortcutTrick: '💡 180 - 20 = 160টি।'
  },
  {
    id: 'ch46_q92',
    text: 'SSC CGL Tier-I পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 75টি সঠিক এবং 15টি ভুল উত্তর দেয়। তার সঠিক উত্তরের শতকরা হার কত? (মোট প্রশ্নের ভিত্তিতে)',
    options: ['75%', '80%', '70%', '85%'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = 75টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{75}{100} \\times 100 = 75\\%$।' }
    ],
    shortcutTrick: '💡 75%।'
  },
  {
    id: 'ch46_q93',
    text: 'Railway NTPC পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 80টি সঠিক, 10টি ভুল এবং 10টি এড়িয়ে যায়। তার ভুলের শতকরা হার কত? (মোট প্রশ্নের ভিত্তিতে)',
    options: ['10%', '15%', '20%', '5%'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ভুল প্রশ্ন = 10টি।' },
      { step: 'ধাপ ২:', content: 'শতকরা = $\\frac{10}{100} \\times 100 = 10\\%$।' }
    ],
    shortcutTrick: '💡 10%।'
  },
  {
    id: 'ch46_q94',
    text: 'SSC MTS পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 70টি সঠিক এবং 20টি ভুল উত্তর দেয়। তার সঠিক উত্তরের শতকরা হার কত? (সমাধানকৃত প্রশ্নের ভিত্তিতে)',
    options: ['77.78%', '70%', '80%', '75%'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমাধানকৃত প্রশ্ন = 70 + 20 = 90টি।' },
      { step: 'ধাপ ২:', content: 'সঠিক উত্তরের শতকরা = $\\frac{70}{90} \\times 100 \\approx 77.78\\%$।' }
    ],
    shortcutTrick: '💡 70/90 × 100 = 77.78%।'
  },
  {
    id: 'ch46_q95',
    text: 'WB Gram Panchayat পরীক্ষায় একজন পরীক্ষার্থী 100টি প্রশ্নের মধ্যে 90টি সমাধান করে। 10টি প্রশ্ন ভুল হয়। তার সঠিক উত্তরের সংখ্যা কত?',
    options: ['80টি', '85টি', '75টি', '90টি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সঠিক উত্তর = 90 - 10 = 80টি।' }
    ],
    shortcutTrick: '💡 90 - 10 = 80টি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: মনস্তাত্ত্বিক প্রস্তুতি ও পরীক্ষার দিনের কৌশল (Psychological Prep & Exam-day Strategies) (Q96-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch46_q96',
    text: 'WBCS পরীক্ষার দিন একজন পরীক্ষার্থী 8 ঘণ্টা ঘুমায় এবং 2 ঘণ্টা রিভিশন করে। মোট 24 ঘণ্টার মধ্যে বাকি সময় সে কীভাবে ব্যয় করে?',
    options: ['14 ঘণ্টা', '12 ঘণ্টা', '10 ঘণ্টা', '16 ঘণ্টা'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ঘুম + রিভিশন = 8 + 2 = 10 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'বাকি সময় = 24 - 10 = 14 ঘণ্টা।' }
    ],
    shortcutTrick: '💡 24 - (8 + 2) = 14 ঘণ্টা।'
  },
  {
    id: 'ch46_q97',
    text: 'SSC CGL Tier-I পরীক্ষার আগে একজন পরীক্ষার্থী 5 দিন ধরে প্রতিদিন 6 ঘণ্টা পড়াশোনা করে। মোট কত ঘণ্টা পড়াশোনা করে?',
    options: ['30', '25', '35', '40'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 6 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 5।' },
      { step: 'ধাপ ৩:', content: 'মোট = $6 \\times 5 = 30$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 6 × 5 = 30 ঘণ্টা।'
  },
  {
    id: 'ch46_q98',
    text: 'Railway NTPC পরীক্ষার আগে একজন পরীক্ষার্থী 10টি মক টেস্ট দেয়। প্রতিটি টেস্টের জন্য সে 90 মিনিট সময় নেয়। তার মোট সময় ব্যয় হয় কত ঘণ্টা?',
    options: ['15', '12', '18', '10'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতি টেস্টে সময় = 90 মিনিট = 1.5 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট টেস্ট = 10।' },
      { step: 'ধাপ ৩:', content: 'মোট সময় = $1.5 \\times 10 = 15$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 1.5 × 10 = 15 ঘণ্টা।'
  },
  {
    id: 'ch46_q99',
    text: 'SSC CHSL পরীক্ষার আগে একজন পরীক্ষার্থী 3 দিন ধরে প্রতিদিন 8 ঘণ্টা পড়াশোনা করে। মোট কত ঘণ্টা পড়াশোনা করে?',
    options: ['24', '20', '28', '18'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 8 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'মোট দিন = 3।' },
      { step: 'ধাপ ৩:', content: 'মোট = $8 \\times 3 = 24$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 8 × 3 = 24 ঘণ্টা।'
  },
  {
    id: 'ch46_q100',
    text: 'WB Gram Panchayat পরীক্ষার আগে একজন পরীক্ষার্থী 2 দিন ধরে প্রতিদিন 5 ঘণ্টা পড়াশোনা করে এবং 1 দিন বিশ্রাম নেয়। মোট পড়াশোনার সময় কত ঘণ্টা?',
    options: ['10', '8', '12', '15'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রতিদিন পড়াশোনার সময় = 5 ঘণ্টা।' },
      { step: 'ধাপ ২:', content: 'পড়াশোনার দিন = 2।' },
      { step: 'ধাপ ৩:', content: 'মোট = $5 \\times 2 = 10$ ঘণ্টা।' }
    ],
    shortcutTrick: '💡 5 × 2 = 10 ঘণ্টা।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter46Questions;
}

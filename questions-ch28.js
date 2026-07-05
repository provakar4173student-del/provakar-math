// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 28: সদৃশতা ও ক্ষেত্রফল (Similarity & Area) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter28Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: ত্রিভুজের সদৃশতা - মৌলিক ধারণা (Basic Similarity of Triangles) (Q1-Q15)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q1',
    text: 'দুটি ত্রিভুজ সদৃশ হওয়ার জন্য কোন শর্তটি আবশ্যক?',
    options: ['অনুরূপ বাহুগুলির অনুপাত সমান', 'অনুরূপ কোণগুলি সমান', 'উভয়ই সমদ্বিবাহু', 'উভয়ের ক্ষেত্রফল সমান'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের সংজ্ঞা: অনুরূপ কোণগুলি সমান এবং অনুরূপ বাহুগুলির অনুপাত সমান।' },
      { step: 'ধাপ ২:', content: 'কিন্তু আবশ্যক শর্ত হলো অনুরূপ কোণগুলি সমান হওয়া।' }
    ],
    shortcutTrick: '💡 সদৃশতার জন্য অনুরূপ কোণগুলি সমান হওয়া আবশ্যক (AAA সদৃশতা)।'
  },
  {
    id: 'ch28_q2',
    text: 'দুটি ত্রিভুজ সদৃশ হলে তাদের অনুরূপ বাহুগুলির অনুপাতকে কী বলে?',
    options: ['সাদৃশ্য অনুপাত', 'ক্ষেত্রফল অনুপাত', 'পরিসীমা অনুপাত', 'কোণ অনুপাত'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের অনুরূপ বাহুগুলির অনুপাতকে সাদৃশ্য অনুপাত (Scale Factor) বলে।' }
    ],
    shortcutTrick: '💡 সাদৃশ্য অনুপাত = অনুরূপ বাহুর অনুপাত।'
  },
  {
    id: 'ch28_q3',
    text: '∆ABC ∼ ∆DEF এবং AB/DE = 2/3 হলে, ∆ABC ও ∆DEF-এর ক্ষেত্রফলের অনুপাত কত?',
    options: ['4:9', '2:3', '9:4', '3:2'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত = অনুরূপ বাহুর বর্গের অনুপাত।' },
      { step: 'ধাপ ২:', content: '$\\frac{AB}{DE} = \\frac{2}{3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{ক্ষেত্রফল(∆ABC)}{ক্ষেত্রফল(∆DEF)} = (\\frac{2}{3})^2 = \\frac{4}{9}$' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)² = (2/3)² = 4:9।'
  },
  {
    id: 'ch28_q4',
    text: '∆ABC ∼ ∆PQR, AB = 6 সেমি, PQ = 9 সেমি। ∆ABC-এর ক্ষেত্রফল 24 বর্গসেমি হলে ∆PQR-এর ক্ষেত্রফল কত?',
    options: ['54 বর্গসেমি', '48 বর্গসেমি', '36 বর্গসেমি', '72 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাদৃশ্য অনুপাত = $\\frac{AB}{PQ} = \\frac{6}{9} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: '$\\frac{ক্ষেত্রফল(∆ABC)}{ক্ষেত্রফল(∆PQR)} = (\\frac{2}{3})^2 = \\frac{4}{9}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{24}{ক্ষেত্রফল(∆PQR)} = \\frac{4}{9} \\Rightarrow \\text{ক্ষেত্রফল}(∆PQR) = 24 \\times \\frac{9}{4} = 54$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{24}{x} = \\frac{4}{9} \\Rightarrow x = 54$ বর্গসেমি।'
  },
  {
    id: 'ch28_q5',
    text: '∆ABC ∼ ∆DEF এবং তাদের ক্ষেত্রফলের অনুপাত 25:64 হলে, অনুরূপ বাহু AB ও DE-এর অনুপাত কত?',
    options: ['5:8', '8:5', '25:64', '64:25'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)²' },
      { step: 'ধাপ ২:', content: '$\\frac{AB}{DE} = \\sqrt{\\frac{25}{64}} = \\frac{5}{8}$' }
    ],
    shortcutTrick: '💡 $\\frac{AB}{DE} = \\sqrt{\\frac{25}{64}} = \\frac{5}{8}$'
  },
  {
    id: 'ch28_q6',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমার অনুপাত 3:4 হলে, তাদের ক্ষেত্রফলের অনুপাত কত?',
    options: ['9:16', '3:4', '16:9', '4:3'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের পরিসীমার অনুপাত = সাদৃশ্য অনুপাত।' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)² = (3/4)² = 9:16।' }
    ],
    shortcutTrick: '💡 ক্ষেত্রফলের অনুপাত = (পরিসীমা অনুপাত)² = 9:16।'
  },
  {
    id: 'ch28_q7',
    text: '∆ABC ∼ ∆XYZ, ∠A = 50°, ∠B = 60°। ∠X + ∠Y + ∠Z-এর মান কত?',
    options: ['180°', '110°', '170°', '190°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যেকোনো ত্রিভুজের তিন কোণের সমষ্টি 180°।' },
      { step: 'ধাপ ২:', content: '$\\angle X + \\angle Y + \\angle Z = 180°$' }
    ],
    shortcutTrick: '💡 ত্রিভুজের কোণসমষ্টি = 180°।'
  },
  {
    id: 'ch28_q8',
    text: '∆ABC ∼ ∆PQR, AB = 8 সেমি, PQ = 12 সেমি। ∆ABC-এর পরিসীমা 30 সেমি হলে ∆PQR-এর পরিসীমা কত?',
    options: ['45 সেমি', '40 সেমি', '50 সেমি', '35 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাদৃশ্য অনুপাত = $\\frac{AB}{PQ} = \\frac{8}{12} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: 'পরিসীমার অনুপাত = সাদৃশ্য অনুপাত' },
      { step: 'ধাপ ৩:', content: '$\\frac{30}{\\text{পরিসীমা}(∆PQR)} = \\frac{2}{3} \\Rightarrow \\text{পরিসীমা}(∆PQR) = 30 \\times \\frac{3}{2} = 45$ সেমি।' }
    ],
    shortcutTrick: '💡 $30 \\times \\frac{3}{2} = 45$ সেমি।'
  },
  {
    id: 'ch28_q9',
    text: 'সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত 49:81 হলে, তাদের অনুরূপ উচ্চতার অনুপাত কত?',
    options: ['7:9', '9:7', '49:81', '81:49'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)²' },
      { step: 'ধাপ ২:', content: 'সাদৃশ্য অনুপাত = $\\sqrt{\\frac{49}{81}} = \\frac{7}{9}$' },
      { step: 'ধাপ ৩:', content: 'অনুরূপ উচ্চতার অনুপাত = সাদৃশ্য অনুপাত = 7:9।' }
    ],
    shortcutTrick: '💡 উচ্চতার অনুপাত = $\\sqrt{49:81} = 7:9$।'
  },
  {
    id: 'ch28_q10',
    text: '∆ABC ∼ ∆DEF, BC = 10 সেমি, EF = 15 সেমি। ∆DEF-এর ক্ষেত্রফল 90 বর্গসেমি হলে ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['40 বর্গসেমি', '45 বর্গসেমি', '50 বর্গসেমি', '55 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাদৃশ্য অনুপাত = $\\frac{BC}{EF} = \\frac{10}{15} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ABC)}{\\text{ক্ষেত্রফল}(∆DEF)} = (\\frac{2}{3})^2 = \\frac{4}{9}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 90 \\times \\frac{4}{9} = 40$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $90 \\times \\frac{4}{9} = 40$ বর্গসেমি।'
  },
  {
    id: 'ch28_q11',
    text: 'দুটি সদৃশ ত্রিভুজের অনুরূপ বাহুর অনুপাত 5:7 হলে, তাদের ক্ষেত্রফলের অনুপাত কত?',
    options: ['25:49', '5:7', '49:25', '7:5'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)² = (5/7)² = 25:49।' }
    ],
    shortcutTrick: '💡 25:49'
  },
  {
    id: 'ch28_q12',
    text: '∆ABC ∼ ∆PQR, ∠A = ∠P = 60°, ∠B = ∠Q = 70°। ∠C ও ∠R-এর মান কত?',
    options: ['50°', '60°', '70°', '80°'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ত্রিভুজের কোণসমষ্টি = 180°' },
      { step: 'ধাপ ২:', content: '$\\angle C = 180° - 60° - 70° = 50°$' },
      { step: 'ধাপ ৩:', content: '$\\angle R = \\angle C = 50°$ (সদৃশ ত্রিভুজের অনুরূপ কোণ সমান)' }
    ],
    shortcutTrick: '💡 $\\angle C = \\angle R = 50°$'
  },
  {
    id: 'ch28_q13',
    text: 'একটি ত্রিভুজের বাহুগুলি 6, 8, 10 সেমি। অনুরূপ সদৃশ ত্রিভুজের ক্ষুদ্রতম বাহু 9 সেমি হলে বৃহত্তম বাহুর দৈর্ঘ্য কত?',
    options: ['15 সেমি', '12 সেমি', '18 সেমি', '16 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সাদৃশ্য অনুপাত = $\\frac{9}{6} = \\frac{3}{2}$' },
      { step: 'ধাপ ২:', content: 'বৃহত্তম বাহু = $10 \\times \\frac{3}{2} = 15$ সেমি।' }
    ],
    shortcutTrick: '💡 $10 \\times \\frac{3}{2} = 15$ সেমি।'
  },
  {
    id: 'ch28_q14',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল যথাক্রমে 64 বর্গসেমি এবং 144 বর্গসেমি। তাদের অনুরূপ বাহুর অনুপাত কত?',
    options: ['2:3', '3:2', '4:3', '3:4'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)²' },
      { step: 'ধাপ ২:', content: '$\\frac{64}{144} = (\\text{সাদৃশ্য অনুপাত})^2$' },
      { step: 'ধাপ ৩:', content: 'সাদৃশ্য অনুপাত = $\\sqrt{\\frac{64}{144}} = \\frac{8}{12} = \\frac{2}{3}$' }
    ],
    shortcutTrick: '💡 $\\sqrt{64:144} = 8:12 = 2:3$'
  },
  {
    id: 'ch28_q15',
    text: '∆ABC ∼ ∆PQR, AB:PQ = 3:5। ∆ABC-এর ক্ষেত্রফল 45 বর্গসেমি হলে ∆PQR-এর ক্ষেত্রফল কত?',
    options: ['125 বর্গসেমি', '100 বর্গসেমি', '75 বর্গসেমি', '150 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (3/5)² = 9/25' },
      { step: 'ধাপ ২:', content: '$\\frac{45}{\\text{ক্ষেত্রফল}(∆PQR)} = \\frac{9}{25}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆PQR) = 45 \\times \\frac{25}{9} = 125$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $45 \\times \\frac{25}{9} = 125$ বর্গসেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: সদৃশতার প্রয়োগ - বাহু ও উচ্চতা (Application of Similarity - Sides & Heights) (Q16-Q30)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q16',
    text: 'একটি 1.8 মিটার লম্বা ব্যক্তি একটি 6 মিটার লম্বা খুঁটির ছায়ার দৈর্ঘ্য 3.6 মিটার। ঐ সময়ে খুঁটিটির ছায়ার দৈর্ঘ্য কত?',
    options: ['12 মি', '10 মি', '8 মি', '6 মি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের ধারণা: $\\frac{\\text{ব্যক্তির উচ্চতা}}{\\text{ব্যক্তির ছায়া}} = \\frac{\\text{খুঁটির উচ্চতা}}{\\text{খুঁটির ছায়া}}$' },
      { step: 'ধাপ ২:', content: '$\\frac{1.8}{3.6} = \\frac{6}{x}$' },
      { step: 'ধাপ ৩:', content: '$x = \\frac{6 \\times 3.6}{1.8} = 12$ মিটার।' }
    ],
    shortcutTrick: '💡 $x = \\frac{6 \\times 3.6}{1.8} = 12$ মি।'
  },
  {
    id: 'ch28_q17',
    text: 'একটি গাছের ছায়ার দৈর্ঘ্য 12 মিটার। একই সময়ে একটি 2 মিটার লম্বা লাঠির ছায়ার দৈর্ঘ্য 1.5 মিটার হলে গাছটির উচ্চতা কত?',
    options: ['16 মি', '14 মি', '18 মি', '20 মি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{\\text{গাছের উচ্চতা}}{\\text{গাছের ছায়া}} = \\frac{\\text{লাঠির উচ্চতা}}{\\text{লাঠির ছায়া}}$' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{12} = \\frac{2}{1.5}$' },
      { step: 'ধাপ ৩:', content: '$h = \\frac{2 \\times 12}{1.5} = 16$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{2 \\times 12}{1.5} = 16$ মি।'
  },
  {
    id: 'ch28_q18',
    text: 'একটি ভবনের উচ্চতা 24 মিটার এবং তার ছায়ার দৈর্ঘ্য 16 মিটার। একই সময়ে একটি বৈদ্যুতিক খুঁটির ছায়ার দৈর্ঘ্য 12 মিটার হলে খুঁটির উচ্চতা কত?',
    options: ['18 মি', '20 মি', '22 মি', '24 মি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{24}{16} = \\frac{h}{12}$' },
      { step: 'ধাপ ২:', content: '$h = \\frac{24 \\times 12}{16} = 18$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{24 \\times 12}{16} = 18$ মি।'
  },
  {
    id: 'ch28_q19',
    text: '10 মিটার লম্বা একটি মিনারের ছায়ার দৈর্ঘ্য 6 মিটার। একই সময়ে একটি 4 মিটার লম্বা খুঁটির ছায়ার দৈর্ঘ্য কত?',
    options: ['2.4 মি', '3 মি', '4 মি', '2 মি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{10}{6} = \\frac{4}{x}$' },
      { step: 'ধাপ ২:', content: '$x = \\frac{4 \\times 6}{10} = 2.4$ মিটার।' }
    ],
    shortcutTrick: '💡 $x = \\frac{4 \\times 6}{10} = 2.4$ মি।'
  },
  {
    id: 'ch28_q20',
    text: '∆ABC-এ DE || BC, AD:DB = 2:3 এবং DE = 4 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['10 সেমি', '8 সেমি', '12 সেমি', '6 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'DE || BC হলে, ∆ADE ∼ ∆ABC' },
      { step: 'ধাপ ২:', content: '$\\frac{AD}{AB} = \\frac{DE}{BC}$' },
      { step: 'ধাপ ৩:', content: 'AD:DB = 2:3 হলে, AD:AB = 2:5' },
      { step: 'ধাপ ৪:', content: '$\\frac{2}{5} = \\frac{4}{BC} \\Rightarrow BC = \\frac{4 \\times 5}{2} = 10$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{DE \\times AB}{AD} = \\frac{4 \\times 5}{2} = 10$ সেমি।'
  },
  {
    id: 'ch28_q21',
    text: '∆ABC-এ DE || BC, AE:EC = 3:4 এবং BC = 14 সেমি। DE-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '8 সেমি', '9 সেমি', '10 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'DE || BC হলে, ∆ADE ∼ ∆ABC' },
      { step: 'ধাপ ২:', content: '$\\frac{AE}{AC} = \\frac{DE}{BC}$' },
      { step: 'ধাপ ৩:', content: 'AE:EC = 3:4 হলে, AE:AC = 3:7' },
      { step: 'ধাপ ৪:', content: '$\\frac{3}{7} = \\frac{DE}{14} \\Rightarrow DE = \\frac{3 \\times 14}{7} = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $DE = \\frac{3}{7} \\times 14 = 6$ সেমি।'
  },
  {
    id: 'ch28_q22',
    text: '∆ABC-এ DE || BC এবং AD = 4 সেমি, DB = 6 সেমি, AE = 5 সেমি। EC-এর দৈর্ঘ্য কত?',
    options: ['7.5 সেমি', '6.5 সেমি', '8 সেমি', '5.5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'DE || BC হলে, $\\frac{AD}{DB} = \\frac{AE}{EC}$ (বেসিক প্রপোরশনালিটি থিওরেম)' },
      { step: 'ধাপ ২:', content: '$\\frac{4}{6} = \\frac{5}{EC} \\Rightarrow EC = \\frac{5 \\times 6}{4} = 7.5$ সেমি।' }
    ],
    shortcutTrick: '💡 $EC = \\frac{5 \\times 6}{4} = 7.5$ সেমি।'
  },
  {
    id: 'ch28_q23',
    text: '∆ABC-এ DE || BC, AD = 3 সেমি, DB = 9 সেমি, EC = 12 সেমি। AE-এর দৈর্ঘ্য কত?',
    options: ['4 সেমি', '5 সেমি', '6 সেমি', '7 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{AD}{DB} = \\frac{AE}{EC}$' },
      { step: 'ধাপ ২:', content: '$\\frac{3}{9} = \\frac{AE}{12} \\Rightarrow AE = \\frac{3 \\times 12}{9} = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $AE = \\frac{3 \\times 12}{9} = 4$ সেমি।'
  },
  {
    id: 'ch28_q24',
    text: '∆ABC-এ DE || BC, AD:AB = 2:5 এবং DE = 6 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['15 সেমি', '12 সেমি', '10 সেমি', '18 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{AD}{AB} = \\frac{DE}{BC}$' },
      { step: 'ধাপ ২:', content: '$\\frac{2}{5} = \\frac{6}{BC} \\Rightarrow BC = \\frac{6 \\times 5}{2} = 15$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{6 \\times 5}{2} = 15$ সেমি।'
  },
  {
    id: 'ch28_q25',
    text: '∆ABC-এ D ও E যথাক্রমে AB ও AC-এর উপর বিন্দু। DE || BC এবং AD:DB = 3:2। ∆ADE-এর ক্ষেত্রফল 27 বর্গসেমি হলে ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['75 বর্গসেমি', '60 বর্গসেমি', '45 বর্গসেমি', '90 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:DB = 3:2 হলে, AD:AB = 3:5' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{AD}{AB})^2 = (\\frac{3}{5})^2 = \\frac{9}{25}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{27}{\\text{ক্ষেত্রফল}(∆ABC)} = \\frac{9}{25} \\Rightarrow \\text{ক্ষেত্রফল}(∆ABC) = 27 \\times \\frac{25}{9} = 75$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $27 \\times \\frac{25}{9} = 75$ বর্গসেমি।'
  },
  {
    id: 'ch28_q26',
    text: '∆ABC-এ D ও E যথাক্রমে AB ও AC-এর উপর বিন্দু। DE || BC এবং ∆ADE-এর ক্ষেত্রফল 16 বর্গসেমি। ∆ABC-এর ক্ষেত্রফল 64 বর্গসেমি হলে AD:AB কত?',
    options: ['1:2', '1:4', '3:4', '2:3'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{AD}{AB})^2$' },
      { step: 'ধাপ ২:', content: '$\\frac{16}{64} = (\\frac{AD}{AB})^2 \\Rightarrow \\frac{1}{4} = (\\frac{AD}{AB})^2$' },
      { step: 'ধাপ ৩:', content: '$\\frac{AD}{AB} = \\frac{1}{2}$' }
    ],
    shortcutTrick: '💡 $AD:AB = 1:2$'
  },
  {
    id: 'ch28_q27',
    text: '∆ABC-এ DE || BC, AD = 4 সেমি, DB = 6 সেমি। ∆ADE-এর ক্ষেত্রফল 20 বর্গসেমি হলে ট্রাপিজিয়াম DBCE-এর ক্ষেত্রফল কত?',
    options: ['105 বর্গসেমি', '100 বর্গসেমি', '95 বর্গসেমি', '110 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:DB = 4:6 = 2:3, তাই AD:AB = 2:5' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{2}{5})^2 = \\frac{4}{25}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 20 \\times \\frac{25}{4} = 125$ বর্গসেমি।' },
      { step: 'ধাপ ৪:', content: 'ট্রাপিজিয়াম DBCE-এর ক্ষেত্রফল = $125 - 20 = 105$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $125 - 20 = 105$ বর্গসেমি।'
  },
  {
    id: 'ch28_q28',
    text: '∆ABC-এ DE || BC, AE:EC = 2:3 এবং ∆ADE-এর ক্ষেত্রফল 8 বর্গসেমি। ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['50 বর্গসেমি', '40 বর্গসেমি', '45 বর্গসেমি', '55 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AE:EC = 2:3 হলে, AE:AC = 2:5' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{2}{5})^2 = \\frac{4}{25}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 8 \\times \\frac{25}{4} = 50$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $8 \\times \\frac{25}{4} = 50$ বর্গসেমি।'
  },
  {
    id: 'ch28_q29',
    text: 'একটি 5 মিটার লম্বা মই একটি দেয়ালের সাথে হেলান দিয়ে রাখা হয়েছে। মইটির পাদদেশ দেয়াল থেকে 3 মিটার দূরে। মইটির শীর্ষ দেয়ালের কত উচ্চতায় স্পর্শ করে?',
    options: ['4 মি', '5 মি', '3 মি', '6 মি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মই, দেয়াল ও মাটির সমকোণী ত্রিভুজ তৈরি করে।' },
      { step: 'ধাপ ২:', content: 'পিথাগোরাসের সূত্র: $\\text{উচ্চতা}^2 + 3^2 = 5^2$' },
      { step: 'ধাপ ৩:', content: '$\\text{উচ্চতা}^2 = 25 - 9 = 16 \\Rightarrow \\text{উচ্চতা} = 4$ মি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{5^2 - 3^2} = 4$ মি।'
  },
  {
    id: 'ch28_q30',
    text: 'একটি 13 মিটার লম্বা মই একটি দেয়ালের সাথে হেলান দিয়ে রাখা হয়েছে। মইটির শীর্ষ 12 মিটার উচ্চতায় দেয়াল স্পর্শ করে। মইটির পাদদেশ দেয়াল থেকে কত দূরে?',
    options: ['5 মি', '4 মি', '6 মি', '7 মি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\text{দূরত্ব}^2 + 12^2 = 13^2$' },
      { step: 'ধাপ ২:', content: '$\\text{দূরত্ব}^2 = 169 - 144 = 25 \\Rightarrow \\text{দূরত্ব} = 5$ মি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{13^2 - 12^2} = 5$ মি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: সদৃশ ত্রিভুজের উপপাদ্য ও প্রয়োগ (Theorems & Applications) (Q31-Q45)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q31',
    text: '∆ABC-এ AD মধ্যমা। E এবং F যথাক্রমে AB ও AC-এর মধ্যবিন্দু। EF-এর দৈর্ঘ্য BC-এর কত অংশ?',
    options: ['অর্ধেক', 'তৃতীয়াংশ', 'চতুর্থাংশ', 'সম্পূর্ণ'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'E ও F যথাক্রমে AB ও AC-এর মধ্যবিন্দু হওয়ায় EF || BC।' },
      { step: 'ধাপ ২:', content: 'মধ্যবিন্দু উপপাদ্য অনুযায়ী, $EF = \\frac{1}{2} BC$।' }
    ],
    shortcutTrick: '💡 $EF = \\frac{1}{2} BC$'
  },
  {
    id: 'ch28_q32',
    text: '∆ABC-এ D, E, F যথাক্রমে BC, CA, AB-এর মধ্যবিন্দু। ∆DEF-এর ক্ষেত্রফল ∆ABC-এর ক্ষেত্রফলের কত অংশ?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যবিন্দুগুলি যোগ করলে ∆DEF গঠিত হয়।' },
      { step: 'ধাপ ২:', content: '∆DEF, ∆ABC-এর সদৃশ এবং সাদৃশ্য অনুপাত = 1:2' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফলের অনুপাত = (1/2)² = 1/4' }
    ],
    shortcutTrick: '💡 ∆DEF = $\\frac{1}{4}$ ∆ABC'
  },
  {
    id: 'ch28_q33',
    text: '∆ABC-এ D, E, F যথাক্রমে BC, CA, AB-এর মধ্যবিন্দু। ∆DEF-এর পরিসীমা 12 সেমি হলে ∆ABC-এর পরিসীমা কত?',
    options: ['24 সেমি', '18 সেমি', '36 সেমি', '30 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যবিন্দু ত্রিভুজের পরিসীমা মূল ত্রিভুজের অর্ধেক।' },
      { step: 'ধাপ ২:', content: '$\\text{পরিসীমা}(∆ABC) = 2 \\times 12 = 24$ সেমি।' }
    ],
    shortcutTrick: '💡 $2 \\times 12 = 24$ সেমি।'
  },
  {
    id: 'ch28_q34',
    text: 'একটি ত্রিভুজের বাহুগুলির মধ্যবিন্দু যোগ করলে যে ত্রিভুজ গঠিত হয় তার ক্ষেত্রফল 10 বর্গসেমি। মূল ত্রিভুজের ক্ষেত্রফল কত?',
    options: ['40 বর্গসেমি', '20 বর্গসেমি', '30 বর্গসেমি', '50 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যবিন্দু ত্রিভুজের ক্ষেত্রফল = $\\frac{1}{4}$ মূল ত্রিভুজের ক্ষেত্রফল' },
      { step: 'ধাপ ২:', content: '$\\text{ক্ষেত্রফল}(মূল) = 4 \\times 10 = 40$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $4 \\times 10 = 40$ বর্গসেমি।'
  },
  {
    id: 'ch28_q35',
    text: '∆ABC-এ DE || BC এবং AD:DB = 1:2। ∆ADE-এর ক্ষেত্রফল 5 বর্গসেমি হলে ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['45 বর্গসেমি', '35 বর্গসেমি', '40 বর্গসেমি', '50 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:DB = 1:2 হলে, AD:AB = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{1}{3})^2 = \\frac{1}{9}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 5 \\times 9 = 45$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $5 \\times 9 = 45$ বর্গসেমি।'
  },
  {
    id: 'ch28_q36',
    text: '∆ABC-এ DE || BC, AD:DB = 2:3, DE = 8 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['20 সেমি', '18 সেমি', '16 সেমি', '22 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:DB = 2:3 হলে, AD:AB = 2:5' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{2}{5}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{8}{BC} = \\frac{2}{5} \\Rightarrow BC = 20$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{8 \\times 5}{2} = 20$ সেমি।'
  },
  {
    id: 'ch28_q37',
    text: '∆ABC-এ ∠A-এর সমদ্বিখণ্ডক AD, BC-কে D বিন্দুতে ছেদ করে। AB:AC = 3:4 এবং BD = 6 সেমি হলে DC-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '6 সেমি', '10 সেমি', '12 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'কোণ সমদ্বিখণ্ডক উপপাদ্য অনুযায়ী, $\\frac{BD}{DC} = \\frac{AB}{AC}$' },
      { step: 'ধাপ ২:', content: '$\\frac{6}{DC} = \\frac{3}{4} \\Rightarrow DC = \\frac{6 \\times 4}{3} = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $DC = \\frac{6 \\times 4}{3} = 8$ সেমি।'
  },
  {
    id: 'ch28_q38',
    text: '∆ABC-এ ∠A-এর সমদ্বিখণ্ডক AD, BC-কে D বিন্দুতে ছেদ করে। AB = 8 সেমি, AC = 12 সেমি, BC = 15 সেমি। BD-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '7 সেমি', '8 সেমি', '9 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{8}{12} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: 'BD:DC = 2:3 এবং BC = 15 সেমি' },
      { step: 'ধাপ ৩:', content: '$BD = \\frac{2}{2+3} \\times 15 = \\frac{2}{5} \\times 15 = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{2}{5} \\times 15 = 6$ সেমি।'
  },
  {
    id: 'ch28_q39',
    text: '∆ABC-এ ∠A-এর সমদ্বিখণ্ডক AD, BC-কে D বিন্দুতে ছেদ করে। BD = 4 সেমি, DC = 6 সেমি, AB = 8 সেমি। AC-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '10 সেমি', '14 সেমি', '16 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{BD}{DC} = \\frac{AB}{AC} \\Rightarrow \\frac{4}{6} = \\frac{8}{AC}$' },
      { step: 'ধাপ ২:', content: '$AC = \\frac{8 \\times 6}{4} = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $AC = \\frac{8 \\times 6}{4} = 12$ সেমি।'
  },
  {
    id: 'ch28_q40',
    text: '∆ABC-এ DE || BC, AD = 6 সেমি, DB = 9 সেমি, EC = 12 সেমি। AE-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '6 সেমি', '10 সেমি', '9 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\Rightarrow \\frac{6}{9} = \\frac{AE}{12}$' },
      { step: 'ধাপ ২:', content: '$AE = \\frac{6 \\times 12}{9} = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $AE = \\frac{6 \\times 12}{9} = 8$ সেমি।'
  },
  {
    id: 'ch28_q41',
    text: '∆ABC-এ DE || BC, AD:DB = 3:4, AE = 6 সেমি। EC-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '6 সেমি', '10 সেমি', '12 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\Rightarrow \\frac{3}{4} = \\frac{6}{EC}$' },
      { step: 'ধাপ ২:', content: '$EC = \\frac{6 \\times 4}{3} = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $EC = \\frac{6 \\times 4}{3} = 8$ সেমি।'
  },
  {
    id: 'ch28_q42',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AB = 6 সেমি, AC = 8 সেমি। AD-এর দৈর্ঘ্য কত?',
    options: ['4.8 সেমি', '5 সেমি', '4.5 সেমি', '5.5 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'BC = $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ সেমি।' },
      { step: 'ধাপ ২:', content: 'সমকোণী ত্রিভুজে, $AD = \\frac{AB \\times AC}{BC}$' },
      { step: 'ধাপ ৩:', content: '$AD = \\frac{6 \\times 8}{10} = 4.8$ সেমি।' }
    ],
    shortcutTrick: '💡 $AD = \\frac{6 \\times 8}{10} = 4.8$ সেমি।'
  },
  {
    id: 'ch28_q43',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। BD = 4 সেমি, DC = 9 সেমি। AD-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '5 সেমি', '7 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমকোণী ত্রিভুজে উচ্চতার সূত্র: $AD^2 = BD \\times DC$' },
      { step: 'ধাপ ২:', content: '$AD^2 = 4 \\times 9 = 36 \\Rightarrow AD = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $AD = \\sqrt{4 \\times 9} = 6$ সেমি।'
  },
  {
    id: 'ch28_q44',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AB = 10 সেমি, BD = 8 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['12.5 সেমি', '10 সেমি', '15 সেমি', '20 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সমকোণী ত্রিভুজে, $AB^2 = BD \\times BC$' },
      { step: 'ধাপ ২:', content: '$10^2 = 8 \\times BC \\Rightarrow BC = \\frac{100}{8} = 12.5$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{100}{8} = 12.5$ সেমি।'
  },
  {
    id: 'ch28_q45',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AC = 12 সেমি, DC = 9 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['16 সেমি', '14 সেমি', '18 সেমি', '12 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AC^2 = DC \\times BC$' },
      { step: 'ধাপ ২:', content: '$12^2 = 9 \\times BC \\Rightarrow BC = \\frac{144}{9} = 16$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{144}{9} = 16$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: সদৃশতার ক্ষেত্রফল ও পরিসীমা (Area & Perimeter of Similar Figures) (Q46-Q60)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q46',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত 4:9 হলে, তাদের পরিসীমার অনুপাত কত?',
    options: ['2:3', '4:9', '3:2', '9:4'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = (সাদৃশ্য অনুপাত)²' },
      { step: 'ধাপ ২:', content: 'সাদৃশ্য অনুপাত = $\\sqrt{4:9} = 2:3$' },
      { step: 'ধাপ ৩:', content: 'পরিসীমার অনুপাত = সাদৃশ্য অনুপাত = 2:3' }
    ],
    shortcutTrick: '💡 $\\sqrt{4:9} = 2:3$'
  },
  {
    id: 'ch28_q47',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমার অনুপাত 5:7 হলে, তাদের ক্ষেত্রফলের অনুপাত কত?',
    options: ['25:49', '5:7', '49:25', '7:5'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমার অনুপাত = সাদৃশ্য অনুপাত = 5:7' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফলের অনুপাত = (5/7)² = 25:49' }
    ],
    shortcutTrick: '💡 25:49'
  },
  {
    id: 'ch28_q48',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল যথাক্রমে 36 বর্গসেমি এবং 64 বর্গসেমি। তাদের পরিসীমার অনুপাত কত?',
    options: ['3:4', '4:3', '9:16', '16:9'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = 36:64 = 9:16' },
      { step: 'ধাপ ২:', content: 'সাদৃশ্য অনুপাত = $\\sqrt{9:16} = 3:4$' },
      { step: 'ধাপ ৩:', content: 'পরিসীমার অনুপাত = 3:4' }
    ],
    shortcutTrick: '💡 $\\sqrt{36:64} = 6:8 = 3:4$'
  },
  {
    id: 'ch28_q49',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমা 30 সেমি এবং 45 সেমি। যদি প্রথমটির ক্ষেত্রফল 40 বর্গসেমি হয়, দ্বিতীয়টির ক্ষেত্রফল কত?',
    options: ['90 বর্গসেমি', '80 বর্গসেমি', '100 বর্গসেমি', '70 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমার অনুপাত = 30:45 = 2:3' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফলের অনুপাত = (2/3)² = 4:9' },
      { step: 'ধাপ ৩:', content: '$\\frac{40}{\\text{ক্ষেত্রফল}_2} = \\frac{4}{9} \\Rightarrow \\text{ক্ষেত্রফল}_2 = 40 \\times \\frac{9}{4} = 90$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $40 \\times \\frac{9}{4} = 90$ বর্গসেমি।'
  },
  {
    id: 'ch28_q50',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল 25 বর্গসেমি এবং 100 বর্গসেমি। প্রথমটির পরিসীমা 20 সেমি হলে দ্বিতীয়টির পরিসীমা কত?',
    options: ['40 সেমি', '30 সেমি', '50 সেমি', '60 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = 25:100 = 1:4' },
      { step: 'ধাপ ২:', content: 'সাদৃশ্য অনুপাত = $\\sqrt{1:4} = 1:2$' },
      { step: 'ধাপ ৩:', content: 'পরিসীমার অনুপাত = 1:2' },
      { step: 'ধাপ ৪:', content: '$\\frac{20}{\\text{পরিসীমা}_2} = \\frac{1}{2} \\Rightarrow \\text{পরিসীমা}_2 = 40$ সেমি।' }
    ],
    shortcutTrick: '💡 $20 \\times 2 = 40$ সেমি।'
  },
  {
    id: 'ch28_q51',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত 49:81। তাদের অনুরূপ বাহুর অনুপাত কত?',
    options: ['7:9', '9:7', '49:81', '81:49'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাহুর অনুপাত = $\\sqrt{49:81} = 7:9$' }
    ],
    shortcutTrick: '💡 $\\sqrt{49:81} = 7:9$'
  },
  {
    id: 'ch28_q52',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমা 18 সেমি এবং 27 সেমি। প্রথমটির ক্ষেত্রফল 24 বর্গসেমি হলে দ্বিতীয়টির ক্ষেত্রফল কত?',
    options: ['54 বর্গসেমি', '48 বর্গসেমি', '36 বর্গসেমি', '60 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমার অনুপাত = 18:27 = 2:3' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফলের অনুপাত = 4:9' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}_2 = 24 \\times \\frac{9}{4} = 54$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $24 \\times \\frac{9}{4} = 54$ বর্গসেমি।'
  },
  {
    id: 'ch28_q53',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল 16 বর্গসেমি এবং 25 বর্গসেমি। তাদের অনুরূপ বাহুর অনুপাত কত?',
    options: ['4:5', '5:4', '16:25', '25:16'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বাহুর অনুপাত = $\\sqrt{16:25} = 4:5$' }
    ],
    shortcutTrick: '💡 $\\sqrt{16:25} = 4:5$'
  },
  {
    id: 'ch28_q54',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল 121 বর্গসেমি এবং 169 বর্গসেমি। তাদের পরিসীমার অনুপাত কত?',
    options: ['11:13', '13:11', '121:169', '169:121'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমার অনুপাত = $\\sqrt{121:169} = 11:13$' }
    ],
    shortcutTrick: '💡 $\\sqrt{121:169} = 11:13$'
  },
  {
    id: 'ch28_q55',
    text: 'দুটি সদৃশ ত্রিভুজের অনুরূপ বাহুর অনুপাত 3:5। প্রথমটির ক্ষেত্রফল 18 বর্গসেমি হলে দ্বিতীয়টির ক্ষেত্রফল কত?',
    options: ['50 বর্গসেমি', '45 বর্গসেমি', '55 বর্গসেমি', '60 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফলের অনুপাত = 9:25' },
      { step: 'ধাপ ২:', content: '$\\frac{18}{\\text{ক্ষেত্রফল}_2} = \\frac{9}{25} \\Rightarrow \\text{ক্ষেত্রফল}_2 = 18 \\times \\frac{25}{9} = 50$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $18 \\times \\frac{25}{9} = 50$ বর্গসেমি।'
  },
  {
    id: 'ch28_q56',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমার অনুপাত 2:3। প্রথমটির ক্ষেত্রফল 16 বর্গসেমি হলে দ্বিতীয়টির ক্ষেত্রফল কত?',
    options: ['36 বর্গসেমি', '32 বর্গসেমি', '40 বর্গসেমি', '28 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা অনুপাত = 2:3, তাই ক্ষেত্রফল অনুপাত = 4:9' },
      { step: 'ধাপ ২:', content: '$\\text{ক্ষেত্রফল}_2 = 16 \\times \\frac{9}{4} = 36$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $16 \\times \\frac{9}{4} = 36$ বর্গসেমি।'
  },
  {
    id: 'ch28_q57',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল 144 বর্গসেমি এবং 225 বর্গসেমি। তাদের অনুরূপ বাহুর অনুপাত কত?',
    options: ['12:15', '15:12', '144:225', '225:144'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{144:225} = 12:15 = 4:5$' }
    ],
    shortcutTrick: '💡 $\\sqrt{144:225} = 12:15 = 4:5$'
  },
  {
    id: 'ch28_q58',
    text: 'দুটি সদৃশ ত্রিভুজের পরিসীমা 36 সেমি এবং 54 সেমি। প্রথমটির ক্ষেত্রফল 48 বর্গসেমি হলে দ্বিতীয়টির ক্ষেত্রফল কত?',
    options: ['108 বর্গসেমি', '96 বর্গসেমি', '120 বর্গসেমি', '144 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা অনুপাত = 36:54 = 2:3' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল অনুপাত = 4:9' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}_2 = 48 \\times \\frac{9}{4} = 108$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $48 \\times \\frac{9}{4} = 108$ বর্গসেমি।'
  },
  {
    id: 'ch28_q59',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফলের অনুপাত 81:100। তাদের পরিসীমার অনুপাত কত?',
    options: ['9:10', '10:9', '81:100', '100:81'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমার অনুপাত = $\\sqrt{81:100} = 9:10$' }
    ],
    shortcutTrick: '💡 $\\sqrt{81:100} = 9:10$'
  },
  {
    id: 'ch28_q60',
    text: 'দুটি সদৃশ ত্রিভুজের ক্ষেত্রফল 196 বর্গসেমি এবং 256 বর্গসেমি। তাদের অনুরূপ বাহুর অনুপাত কত?',
    options: ['14:16', '16:14', '196:256', '256:196'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\sqrt{196:256} = 14:16 = 7:8$' }
    ],
    shortcutTrick: '💡 $\\sqrt{196:256} = 14:16 = 7:8$'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: সদৃশতা ও ক্ষেত্রফল - মিশ্র প্রয়োগ (Mixed Applications) (Q61-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q61',
    text: '∆ABC ∼ ∆DEF, AB:DE = 2:3 এবং ∆ABC-এর ক্ষেত্রফল 20 বর্গসেমি। ∆DEF-এর ক্ষেত্রফল কত?',
    options: ['45 বর্গসেমি', '40 বর্গসেমি', '50 বর্গসেমি', '35 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল অনুপাত = (2/3)² = 4/9' },
      { step: 'ধাপ ২:', content: '$\\text{ক্ষেত্রফল}(∆DEF) = 20 \\times \\frac{9}{4} = 45$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $20 \\times \\frac{9}{4} = 45$ বর্গসেমি।'
  },
  {
    id: 'ch28_q62',
    text: '∆ABC ∼ ∆PQR, BC:QR = 5:7। ∆ABC-এর পরিসীমা 30 সেমি হলে ∆PQR-এর পরিসীমা কত?',
    options: ['42 সেমি', '38 সেমি', '40 সেমি', '45 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পরিসীমা অনুপাত = সাদৃশ্য অনুপাত = 5:7' },
      { step: 'ধাপ ২:', content: '$\\text{পরিসীমা}(∆PQR) = 30 \\times \\frac{7}{5} = 42$ সেমি।' }
    ],
    shortcutTrick: '💡 $30 \\times \\frac{7}{5} = 42$ সেমি।'
  },
  {
    id: 'ch28_q63',
    text: '∆ABC-এ DE || BC, AD = 3 সেমি, DB = 6 সেমি, DE = 5 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['15 সেমি', '12 সেমি', '10 সেমি', '18 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 3:(3+6) = 3:9 = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{5}{BC} = \\frac{1}{3} \\Rightarrow BC = 15$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = 5 \\times 3 = 15$ সেমি।'
  },
  {
    id: 'ch28_q64',
    text: '∆ABC-এ DE || BC, AD:AB = 2:5 এবং DE = 8 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['20 সেমি', '18 সেমি', '16 সেমি', '22 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{2}{5}$' },
      { step: 'ধাপ ২:', content: '$\\frac{8}{BC} = \\frac{2}{5} \\Rightarrow BC = 20$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{8 \\times 5}{2} = 20$ সেমি।'
  },
  {
    id: 'ch28_q65',
    text: '∆ABC-এ DE || BC, AD = 2.4 সেমি, DB = 3.6 সেমি, BC = 10 সেমি। DE-এর দৈর্ঘ্য কত?',
    options: ['4 সেমি', '3.5 সেমি', '4.5 সেমি', '5 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 2.4:(2.4+3.6) = 2.4:6 = 2:5' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{2}{5}$' },
      { step: 'ধাপ ৩:', content: '$DE = \\frac{2}{5} \\times 10 = 4$ সেমি।' }
    ],
    shortcutTrick: '💡 $DE = \\frac{2}{5} \\times 10 = 4$ সেমি।'
  },
  {
    id: 'ch28_q66',
    text: '∆ABC-এ DE || BC, AD:DB = 1:3, ∆ADE-এর ক্ষেত্রফল 3 বর্গসেমি। ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['48 বর্গসেমি', '36 বর্গসেমি', '42 বর্গসেমি', '54 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 1:4' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{1}{4})^2 = \\frac{1}{16}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 3 \\times 16 = 48$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $3 \\times 16 = 48$ বর্গসেমি।'
  },
  {
    id: 'ch28_q67',
    text: '∆ABC-এ DE || BC, AE:EC = 2:3, ∆ADE-এর ক্ষেত্রফল 12 বর্গসেমি। ∆ABC-এর ক্ষেত্রফল কত?',
    options: ['75 বর্গসেমি', '60 বর্গসেমি', '80 বর্গসেমি', '90 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AE:AC = 2:5' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{2}{5})^2 = \\frac{4}{25}$' },
      { step: 'ধাপ ৩:', content: '$\\text{ক্ষেত্রফল}(∆ABC) = 12 \\times \\frac{25}{4} = 75$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $12 \\times \\frac{25}{4} = 75$ বর্গসেমি।'
  },
  {
    id: 'ch28_q68',
    text: '∆ABC-এ DE || BC, AD = x, DB = 2x, DE = 6 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['18 সেমি', '12 সেমি', '15 সেমি', '20 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = x:(x+2x) = x:3x = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{6}{BC} = \\frac{1}{3} \\Rightarrow BC = 18$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = 6 \\times 3 = 18$ সেমি।'
  },
  {
    id: 'ch28_q69',
    text: '∆ABC-এ DE || BC, AE = 4 সেমি, EC = 8 সেমি, DE = 6 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['18 সেমি', '12 সেমি', '15 সেমি', '20 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AE:AC = 4:(4+8) = 4:12 = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$\\frac{6}{BC} = \\frac{1}{3} \\Rightarrow BC = 18$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = 6 \\times 3 = 18$ সেমি।'
  },
  {
    id: 'ch28_q70',
    text: '∆ABC-এ DE || BC, AD = 5 সেমি, DB = 10 সেমি, BC = 21 সেমি। DE-এর দৈর্ঘ্য কত?',
    options: ['7 সেমি', '8 সেমি', '9 সেমি', '10 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 5:15 = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$DE = \\frac{1}{3} \\times 21 = 7$ সেমি।' }
    ],
    shortcutTrick: '💡 $DE = \\frac{21}{3} = 7$ সেমি।'
  },
  {
    id: 'ch28_q71',
    text: '∆ABC-এ ∠A-এর সমদ্বিখণ্ডক AD, BC-কে D বিন্দুতে ছেদ করে। AB = 10 সেমি, AC = 15 সেমি, BC = 20 সেমি। BD-এর দৈর্ঘ্য কত?',
    options: ['8 সেমি', '10 সেমি', '12 সেমি', '14 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{10}{15} = \\frac{2}{3}$' },
      { step: 'ধাপ ২:', content: 'BD:DC = 2:3 এবং BC = 20 সেমি' },
      { step: 'ধাপ ৩:', content: '$BD = \\frac{2}{5} \\times 20 = 8$ সেমি।' }
    ],
    shortcutTrick: '💡 $BD = \\frac{2}{5} \\times 20 = 8$ সেমি।'
  },
  {
    id: 'ch28_q72',
    text: '∆ABC-এ ∠A-এর সমদ্বিখণ্ডক AD, BC-কে D বিন্দুতে ছেদ করে। BD = 4 সেমি, DC = 6 সেমি, AB = 6 সেমি। AC-এর দৈর্ঘ্য কত?',
    options: ['9 সেমি', '8 সেমি', '10 সেমি', '12 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{BD}{DC} = \\frac{AB}{AC} \\Rightarrow \\frac{4}{6} = \\frac{6}{AC}$' },
      { step: 'ধাপ ২:', content: '$AC = \\frac{6 \\times 6}{4} = 9$ সেমি।' }
    ],
    shortcutTrick: '💡 $AC = \\frac{36}{4} = 9$ সেমি।'
  },
  {
    id: 'ch28_q73',
    text: '∆ABC-এ ∠A = 90°, AB = 8 সেমি, AC = 15 সেমি। AD ⊥ BC হলে BC-এর দৈর্ঘ্য কত?',
    options: ['17 সেমি', '16 সেমি', '18 সেমি', '15 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিথাগোরাসের সূত্র: $BC^2 = AB^2 + AC^2$' },
      { step: 'ধাপ ২:', content: '$BC^2 = 8^2 + 15^2 = 64 + 225 = 289$' },
      { step: 'ধাপ ৩:', content: '$BC = 17$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$ সেমি।'
  },
  {
    id: 'ch28_q74',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AB = 15 সেমি, BD = 9 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['25 সেমি', '20 সেমি', '30 সেমি', '35 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB^2 = BD \\times BC$' },
      { step: 'ধাপ ২:', content: '$15^2 = 9 \\times BC \\Rightarrow BC = \\frac{225}{9} = 25$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{225}{9} = 25$ সেমি।'
  },
  {
    id: 'ch28_q75',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AC = 20 সেমি, DC = 16 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['25 সেমি', '24 সেমি', '30 সেমি', '28 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AC^2 = DC \\times BC$' },
      { step: 'ধাপ ২:', content: '$20^2 = 16 \\times BC \\Rightarrow BC = \\frac{400}{16} = 25$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{400}{16} = 25$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: মানচিত্র, মডেল ও স্কেল (Maps, Models & Scale) (Q76-Q85)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q76',
    text: 'একটি মানচিত্রের স্কেল 1:100000। মানচিত্রে দুটি শহরের মধ্যে দূরত্ব 5 সেমি হলে প্রকৃত দূরত্ব কত কিমি?',
    options: ['5 কিমি', '10 কিমি', '15 কিমি', '20 কিমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'স্কেল 1:100000 মানে 1 সেমি = 100000 সেমি = 1 কিমি' },
      { step: 'ধাপ ২:', content: '5 সেমি = $5 \\times 1 = 5$ কিমি।' }
    ],
    shortcutTrick: '💡 1 সেমি = 1 কিমি, তাই 5 সেমি = 5 কিমি।'
  },
  {
    id: 'ch28_q77',
    text: 'একটি মানচিত্রের স্কেল 1:50000। মানচিত্রে দুটি গ্রামের মধ্যে দূরত্ব 4 সেমি হলে প্রকৃত দূরত্ব কত কিমি?',
    options: ['2 কিমি', '3 কিমি', '4 কিমি', '5 কিমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 50000 সেমি = 0.5 কিমি' },
      { step: 'ধাপ ২:', content: '4 সেমি = $4 \\times 0.5 = 2$ কিমি।' }
    ],
    shortcutTrick: '💡 4 × 0.5 = 2 কিমি।'
  },
  {
    id: 'ch28_q78',
    text: 'একটি মানচিত্রের স্কেল 1:200000। প্রকৃত দূরত্ব 10 কিমি হলে মানচিত্রে দূরত্ব কত সেমি?',
    options: ['5 সেমি', '4 সেমি', '6 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 200000 সেমি = 2 কিমি' },
      { step: 'ধাপ ২:', content: '10 কিমি = $\\frac{10}{2} = 5$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{10}{2} = 5$ সেমি।'
  },
  {
    id: 'ch28_q79',
    text: 'একটি মডেলের স্কেল 1:20। মডেলের উচ্চতা 15 সেমি হলে বাস্তব বস্তুর উচ্চতা কত?',
    options: ['300 সেমি', '250 সেমি', '350 সেমি', '400 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি মডেল = 20 সেমি বাস্তব' },
      { step: 'ধাপ ২:', content: '15 সেমি মডেল = $15 \\times 20 = 300$ সেমি = 3 মি।' }
    ],
    shortcutTrick: '💡 15 × 20 = 300 সেমি।'
  },
  {
    id: 'ch28_q80',
    text: 'একটি ভবনের মডেলের উচ্চতা 12 সেমি। মডেলের স্কেল 1:50 হলে ভবনের প্রকৃত উচ্চতা কত মিটার?',
    options: ['6 মি', '5 মি', '7 মি', '8 মি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '12 সেমি মডেল = $12 \\times 50 = 600$ সেমি = 6 মি।' }
    ],
    shortcutTrick: '💡 12 × 50 = 600 সেমি = 6 মি।'
  },
  {
    id: 'ch28_q81',
    text: 'একটি মানচিত্রের স্কেল 1:25000। মানচিত্রে একটি বর্গাকার ক্ষেত্রের ক্ষেত্রফল 4 বর্গসেমি হলে প্রকৃত ক্ষেত্রফল কত বর্গকিমি?',
    options: ['0.25 বর্গকিমি', '0.5 বর্গকিমি', '1 বর্গকিমি', '2 বর্গকিমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 25000 সেমি = 0.25 কিমি' },
      { step: 'ধাপ ২:', content: '1 বর্গসেমি = (0.25)² = 0.0625 বর্গকিমি' },
      { step: 'ধাপ ৩:', content: '4 বর্গসেমি = $4 \\times 0.0625 = 0.25$ বর্গকিমি।' }
    ],
    shortcutTrick: '💡 $4 \\times (0.25)^2 = 0.25$ বর্গকিমি।'
  },
  {
    id: 'ch28_q82',
    text: 'একটি মডেলের স্কেল 1:100। মডেলের ক্ষেত্রফল 5 বর্গসেমি হলে বাস্তব ক্ষেত্রফল কত বর্গমিটার?',
    options: ['5 বর্গমি', '50 বর্গমি', '10 বর্গমি', '25 বর্গমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 100 সেমি = 1 মি' },
      { step: 'ধাপ ২:', content: '1 বর্গসেমি = 1 বর্গমি' },
      { step: 'ধাপ ৩:', content: '5 বর্গসেমি = $5 \\times 1 = 5$ বর্গমি।' }
    ],
    shortcutTrick: '💡 5 বর্গমি।'
  },
  {
    id: 'ch28_q83',
    text: 'একটি মানচিত্রের স্কেল 1:500000। মানচিত্রে দুটি শহরের মধ্যে দূরত্ব 3 সেমি হলে প্রকৃত দূরত্ব কত কিমি?',
    options: ['15 কিমি', '10 কিমি', '20 কিমি', '25 কিমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 500000 সেমি = 5 কিমি' },
      { step: 'ধাপ ২:', content: '3 সেমি = $3 \\times 5 = 15$ কিমি।' }
    ],
    shortcutTrick: '💡 3 × 5 = 15 কিমি।'
  },
  {
    id: 'ch28_q84',
    text: 'একটি ভবনের মডেলের উচ্চতা 8 সেমি এবং ভবনের প্রকৃত উচ্চতা 32 মি। মডেলের স্কেল কত?',
    options: ['1:400', '1:40', '1:4000', '1:100'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '32 মি = 3200 সেমি' },
      { step: 'ধাপ ২:', content: 'স্কেল = 8:3200 = 1:400' }
    ],
    shortcutTrick: '💡 8:3200 = 1:400'
  },
  {
    id: 'ch28_q85',
    text: 'একটি মানচিত্রের স্কেল 1:100000। মানচিত্রে একটি আয়তক্ষেত্রের দৈর্ঘ্য 4 সেমি ও প্রস্থ 3 সেমি হলে প্রকৃত ক্ষেত্রফল কত বর্গকিমি?',
    options: ['12 বর্গকিমি', '10 বর্গকিমি', '15 বর্গকিমি', '8 বর্গকিমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '1 সেমি = 100000 সেমি = 1 কিমি' },
      { step: 'ধাপ ২:', content: 'প্রকৃত দৈর্ঘ্য = 4 কিমি, প্রস্থ = 3 কিমি' },
      { step: 'ধাপ ৩:', content: 'ক্ষেত্রফল = $4 \\times 3 = 12$ বর্গকিমি।' }
    ],
    shortcutTrick: '💡 4 × 3 = 12 বর্গকিমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: উচ্চতর জটিল সমস্যা (Advanced & Complex Problems) (Q86-Q95)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q86',
    text: '∆ABC-এ D ও E যথাক্রমে AB ও AC-এর উপর বিন্দু। DE || BC এবং AD:DB = 2:3। ∆ADE ও ∆ABC-এর ক্ষেত্রফলের অনুপাত কত?',
    options: ['4:25', '2:5', '4:9', '9:25'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:DB = 2:3 হলে, AD:AB = 2:5' },
      { step: 'ধাপ ২:', content: 'ক্ষেত্রফল অনুপাত = (2/5)² = 4:25' }
    ],
    shortcutTrick: '💡 4:25'
  },
  {
    id: 'ch28_q87',
    text: '∆ABC-এ D ও E যথাক্রমে AB ও AC-এর উপর বিন্দু। DE || BC এবং AE:EC = 1:4। ∆ADE ও ট্রাপিজিয়াম DBCE-এর ক্ষেত্রফলের অনুপাত কত?',
    options: ['1:24', '1:15', '1:10', '1:20'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AE:EC = 1:4 হলে, AE:AC = 1:5' },
      { step: 'ধাপ ২:', content: '$\\frac{\\text{ক্ষেত্রফল}(∆ADE)}{\\text{ক্ষেত্রফল}(∆ABC)} = (\\frac{1}{5})^2 = \\frac{1}{25}$' },
      { step: 'ধাপ ৩:', content: 'ট্রাপিজিয়াম DBCE = $1 - \\frac{1}{25} = \\frac{24}{25}$' },
      { step: 'ধাপ ৪:', content: '∆ADE : DBCE = $\\frac{1}{25} : \\frac{24}{25} = 1:24$' }
    ],
    shortcutTrick: '💡 1:24'
  },
  {
    id: 'ch28_q88',
    text: '∆ABC-এ D, E, F যথাক্রমে BC, CA, AB-এর মধ্যবিন্দু। ∆ABC-এর ক্ষেত্রফল 120 বর্গসেমি হলে ∆DEF-এর ক্ষেত্রফল কত?',
    options: ['30 বর্গসেমি', '40 বর্গসেমি', '60 বর্গসেমি', '20 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '∆DEF = $\\frac{1}{4}$ ∆ABC' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{4} \\times 120 = 30$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{120}{4} = 30$ বর্গসেমি।'
  },
  {
    id: 'ch28_q89',
    text: '∆ABC-এ D, E, F যথাক্রমে BC, CA, AB-এর মধ্যবিন্দু। ∆DEF-এর পরিসীমা 15 সেমি হলে ∆ABC-এর পরিসীমা কত?',
    options: ['30 সেমি', '25 সেমি', '35 সেমি', '40 সেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মধ্যবিন্দু ত্রিভুজের পরিসীমা = $\\frac{1}{2}$ মূল ত্রিভুজের পরিসীমা' },
      { step: 'ধাপ ২:', content: '$\\text{পরিসীমা}(∆ABC) = 2 \\times 15 = 30$ সেমি।' }
    ],
    shortcutTrick: '💡 30 সেমি।'
  },
  {
    id: 'ch28_q90',
    text: '∆ABC-এ ∠A = 90°, AB = 5 সেমি, AC = 12 সেমি। AD ⊥ BC। AD-এর দৈর্ঘ্য কত?',
    options: ['$\\frac{60}{13}$ সেমি', '$\\frac{13}{60}$ সেমি', '$\\frac{30}{13}$ সেমি', '$\\frac{13}{30}$ সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'BC = $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ সেমি।' },
      { step: 'ধাপ ২:', content: '$AD = \\frac{AB \\times AC}{BC} = \\frac{5 \\times 12}{13} = \\frac{60}{13}$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{60}{13}$ সেমি।'
  },
  {
    id: 'ch28_q91',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। BD = 3 সেমি, DC = 12 সেমি। AD-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '5 সেমি', '7 সেমি', '4 সেমি'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AD^2 = BD \\times DC = 3 \\times 12 = 36$' },
      { step: 'ধাপ ২:', content: '$AD = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\sqrt{3 \\times 12} = 6$ সেমি।'
  },
  {
    id: 'ch28_q92',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AB = 8 সেমি, BC = 10 সেমি। BD-এর দৈর্ঘ্য কত?',
    options: ['6.4 সেমি', '5.6 সেমি', '7.2 সেমি', '8.4 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AB^2 = BD \\times BC \\Rightarrow 8^2 = BD \\times 10$' },
      { step: 'ধাপ ২:', content: '$BD = \\frac{64}{10} = 6.4$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{64}{10} = 6.4$ সেমি।'
  },
  {
    id: 'ch28_q93',
    text: '∆ABC-এ ∠A = 90°, AD ⊥ BC। AC = 12 সেমি, BC = 15 সেমি। DC-এর দৈর্ঘ্য কত?',
    options: ['9.6 সেমি', '8.4 সেমি', '10.2 সেমি', '11.4 সেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$AC^2 = DC \\times BC \\Rightarrow 12^2 = DC \\times 15$' },
      { step: 'ধাপ ২:', content: '$DC = \\frac{144}{15} = 9.6$ সেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{144}{15} = 9.6$ সেমি।'
  },
  {
    id: 'ch28_q94',
    text: '∆ABC-এ DE || BC, AD = 2x, DB = 3x, AE = 4 সেমি। EC-এর দৈর্ঘ্য কত?',
    options: ['6 সেমি', '5 সেমি', '7 সেমি', '8 সেমি'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\Rightarrow \\frac{2x}{3x} = \\frac{4}{EC}$' },
      { step: 'ধাপ ২:', content: '$\\frac{2}{3} = \\frac{4}{EC} \\Rightarrow EC = \\frac{4 \\times 3}{2} = 6$ সেমি।' }
    ],
    shortcutTrick: '💡 $EC = \\frac{4 \\times 3}{2} = 6$ সেমি।'
  },
  {
    id: 'ch28_q95',
    text: '∆ABC-এ DE || BC, AD = 5 সেমি, DB = 7 সেমি, DE = 10 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['24 সেমি', '20 সেমি', '22 সেমি', '18 সেমি'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 5:(5+7) = 5:12' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{5}{12} \\Rightarrow \\frac{10}{BC} = \\frac{5}{12}$' },
      { step: 'ধাপ ৩:', content: '$BC = \\frac{10 \\times 12}{5} = 24$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = \\frac{10 \\times 12}{5} = 24$ সেমি।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও বিগত বছরের প্রশ্ন (Miscellaneous & PYQs) (Q96-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch28_q96',
    text: '∆ABC ∼ ∆PQR, AB:PQ = 3:5, ∆ABC-এর ক্ষেত্রফল 27 বর্গসেমি। ∆PQR-এর ক্ষেত্রফল কত?',
    options: ['75 বর্গসেমি', '60 বর্গসেমি', '80 বর্গসেমি', '90 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ক্ষেত্রফল অনুপাত = (3/5)² = 9/25' },
      { step: 'ধাপ ২:', content: '$\\text{ক্ষেত্রফল}(∆PQR) = 27 \\times \\frac{25}{9} = 75$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $27 \\times \\frac{25}{9} = 75$ বর্গসেমি।'
  },
  {
    id: 'ch28_q97',
    text: '∆ABC-এ D, E, F যথাক্রমে BC, CA, AB-এর মধ্যবিন্দু। ∆ABC-এর ক্ষেত্রফল 80 বর্গসেমি হলে ∆DEF-এর ক্ষেত্রফল কত?',
    options: ['20 বর্গসেমি', '25 বর্গসেমি', '30 বর্গসেমি', '40 বর্গসেমি'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '∆DEF = $\\frac{1}{4}$ ∆ABC' },
      { step: 'ধাপ ২:', content: '$\\frac{80}{4} = 20$ বর্গসেমি।' }
    ],
    shortcutTrick: '💡 $\\frac{80}{4} = 20$ বর্গসেমি।'
  },
  {
    id: 'ch28_q98',
    text: '∆ABC-এ DE || BC, AD:DB = 1:2, DE = 4 সেমি। BC-এর দৈর্ঘ্য কত?',
    options: ['12 সেমি', '10 সেমি', '8 সেমি', '14 সেমি'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'AD:AB = 1:3' },
      { step: 'ধাপ ২:', content: '$\\frac{DE}{BC} = \\frac{1}{3} \\Rightarrow \\frac{4}{BC} = \\frac{1}{3}$' },
      { step: 'ধাপ ৩:', content: '$BC = 12$ সেমি।' }
    ],
    shortcutTrick: '💡 $BC = 4 \\times 3 = 12$ সেমি।'
  },
  {
    id: 'ch28_q99',
    text: '∆ABC-এ ∠A = 90°, AB = 6 সেমি, AC = 8 সেমি। AD ⊥ BC হলে BD:DC কত?',
    options: ['9:16', '3:4', '4:3', '16:9'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$BD:DC = AB^2:AC^2 = 6^2:8^2 = 36:64 = 9:16$' }
    ],
    shortcutTrick: '💡 $6^2:8^2 = 36:64 = 9:16$'
  },
  {
    id: 'ch28_q100',
    text: '∆ABC ∼ ∆PQR, AB:PQ = 2:3। ∆ABC ও ∆PQR-এর পরিসীমার অনুপাত কত?',
    options: ['2:3', '4:9', '3:2', '9:4'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'সদৃশ ত্রিভুজের পরিসীমার অনুপাত = অনুরূপ বাহুর অনুপাত = 2:3' }
    ],
    shortcutTrick: '💡 2:3'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter28Questions;
}

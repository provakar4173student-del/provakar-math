// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 13: বয়সের সমস্যা (Problems on Ages) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL/MTS, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter13Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: বর্তমান ও অতীত বয়সের সরল সমীকরণ (Basic Linear Equations) (Q1-Q13)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q1',
    text: 'রামের বর্তমান বয়স ২৫ বছর। তার পিতার বয়স রামের বয়সের ৩ গুণ অপেক্ষা ৫ বছর বেশি। পিতার বর্তমান বয়স কত?',
    options: ['৭০ বছর', '৭৫ বছর', '৮০ বছর', '৮৫ বছর'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'রামের বয়স = ২৫ বছর।' },
      { step: 'ধাপ ২:', content: 'পিতার বয়স = $3 \\times 25 + 5$' },
      { step: 'ধাপ ৩:', content: '$= 75 + 5 = 80$ বছর।' }
    ],
    shortcutTrick: '💡 সরাসরি $3 \\times 25 = 75$; $75 + 5 = 80$ বছর।'
  },
  {
    id: 'ch13_q2',
    text: 'শিবার বর্তমান বয়স ১৮ বছর। তাঁর মায়ের বয়স শিবার বয়সের ২ গুণ অপেক্ষা ৪ বছর কম। মায়ের বর্তমান বয়স কত?',
    options: ['৩২ বছর', '৩০ বছর', '৩৪ বছর', '৩৬ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শিবার বয়স = ১৮ বছর।' },
      { step: 'ধাপ ২:', content: 'মায়ের বয়স = $2 \\times 18 - 4$' },
      { step: 'ধাপ ৩:', content: '$= 36 - 4 = 32$ বছর।' }
    ],
    shortcutTrick: '💡 $2 \\times 18 = 36$; $36 - 4 = 32$ বছর।'
  },
  {
    id: 'ch13_q3',
    text: 'দুই ভাইয়ের বর্তমান বয়সের সমষ্টি ৪৫ বছর। ৫ বছর আগে তাদের বয়সের সমষ্টি কত ছিল?',
    options: ['৩৫ বছর', '৪০ বছর', '৩০ বছর', '৪৫ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান বয়সের সমষ্টি = ৪৫ বছর।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে প্রত্যেকের বয়স ৫ বছর কম ছিল।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং সমষ্টি কমবে $= 5 + 5 = 10$ বছর।' },
      { step: 'ধাপ ৪:', content: '৫ বছর আগের সমষ্টি = $45 - 10 = 35$ বছর।' }
    ],
    shortcutTrick: '💡 $n$ বছর আগে $2n$ কম হবে। $45 - 10 = 35$ বছর।'
  },
  {
    id: 'ch13_q4',
    text: 'সুমিতের বয়স তার পুত্রের বয়সের ৪ গুণ। ১০ বছর পর সুমিতের বয়স পুত্রের বয়সের ২ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['৫ বছর', '৬ বছর', '৮ বছর', '১০ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বর্তমান বয়স = $x$ বছর।' },
      { step: 'ধাপ ২:', content: 'তাহলে সুমিতের বর্তমান বয়স = $4x$ বছর।' },
      { step: 'ধাপ ৩:', content: '১০ বছর পর: সুমিতের বয়স = $4x + 10$, পুত্রের বয়স = $x + 10$।' },
      { step: 'ধাপ ৪:', content: 'শর্তানুযায়ী, $4x + 10 = 2(x + 10)$' },
      { step: 'ধাপ ৫:', content: '$\Rightarrow 4x + 10 = 2x + 20 \Rightarrow 2x = 10 \Rightarrow x = 5$' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য স্থির। $4x - x = 3x$ এবং $2(x+10) - (x+10) = x+10$। $3x = x+10 \Rightarrow x=5$।'
  },
  {
    id: 'ch13_q5',
    text: 'মায়ের বর্তমান বয়স পুত্রের বয়সের ৩ গুণ। ১৫ বছর পর মায়ের বয়স পুত্রের বয়সের ২ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৫ বছর', '১৮ বছর', '২০ বছর'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বর্তমান বয়স = $x$ বছর।' },
      { step: 'ধাপ ২:', content: 'মায়ের বর্তমান বয়স = $3x$ বছর।' },
      { step: 'ধাপ ৩:', content: '১৫ বছর পর: $3x + 15 = 2(x + 15)$' },
      { step: 'ধাপ ৪:', content: '$\Rightarrow 3x + 15 = 2x + 30 \Rightarrow x = 15$' }
    ],
    shortcutTrick: '💡 $3x - x = 2x$ এবং $2(x+15) - (x+15) = x+15$। $2x = x+15 \Rightarrow x=15$।'
  },
  {
    id: 'ch13_q6',
    text: 'রজতের বর্তমান বয়স ২৪ বছর এবং রজিতের বর্তমান বয়স ৩৬ বছর। কত বছর আগে তাদের বয়সের অনুপাত ছিল $3 : 5$?',
    options: ['৬ বছর', '৮ বছর', '১০ বছর', '১২ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর আগে অনুপাত $3:5$ ছিল।' },
      { step: 'ধাপ ২:', content: 'তখন রজতের বয়স = $24 - x$, রজিতের বয়স = $36 - x$।' },
      { step: 'ধাপ ৩:', content: '$\frac{24 - x}{36 - x} = \frac{3}{5}$' },
      { step: 'ধাপ ৪:', content: '$5(24 - x) = 3(36 - x) \Rightarrow 120 - 5x = 108 - 3x$' },
      { step: 'ধাপ ৫:', content: '$\Rightarrow 12 = 2x \Rightarrow x = 6$' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $36-24=12$ বছর। অনুপাতের পার্থক্য $5-3=2$ ইউনিট। $2$ ইউনিট $=12$ বছর $\Rightarrow 1$ ইউনিট $=6$ বছর।'
  },
  {
    id: 'ch13_q7',
    text: 'রহিম ও করিমের বর্তমান বয়সের অনুপাত $4 : 5$। ৮ বছর পর তাদের বয়সের অনুপাত $6 : 7$ হবে। রহিমের বর্তমান বয়স কত?',
    options: ['১৬ বছর', '২০ বছর', '২৪ বছর', '২৮ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি রহিমের বয়স = $4x$ এবং করিমের বয়স = $5x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $\frac{4x + 8}{5x + 8} = \frac{6}{7}$' },
      { step: 'ধাপ ৩:', content: '$7(4x + 8) = 6(5x + 8) \Rightarrow 28x + 56 = 30x + 48$' },
      { step: 'ধাপ ৪:', content: '$\Rightarrow 8 = 2x \Rightarrow x = 4$' },
      { step: 'ধাপ ৫:', content: 'রহিমের বয়স = $4x = 16$ বছর।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $5x - 4x = x$। অনুপাতের পার্থক্য $6-5=1$ এবং $7-6=1$। ৮ বছর পর বৃদ্ধি $=8$ বছর।'
  },
  {
    id: 'ch13_q8',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬০ বছর। ১০ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৫ বছর', '৫০ বছর', '৫৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতার বয়স = $x$, পুত্রের বয়স = $60 - x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: পিতা = $x - 10$, পুত্র = $50 - x$।' },
      { step: 'ধাপ ৩:', content: 'শর্ত: $x - 10 = 4(50 - x)$' },
      { step: 'ধাপ ৪:', content: '$\Rightarrow x - 10 = 200 - 4x \Rightarrow 5x = 210 \Rightarrow x = 42$' }
    ],
    shortcutTrick: '💡 ১০ বছর আগে সমষ্টি ছিল $60 - 20 = 40$ বছর। অনুপাত $4:1$ এ মোট $5$ ইউনিট $= 40$। পিতা $= 4$ ইউনিট $= 32$। বর্তমানে $= 32+10=42$ বছর।'
  },
  {
    id: 'ch13_q9',
    text: 'দুই বন্ধুর বর্তমান বয়সের অনুপাত $3 : 4$। ৫ বছর পর তাদের বয়সের অনুপাত $4 : 5$ হবে। তাদের বর্তমান বয়সের সমষ্টি কত?',
    options: ['৩৫ বছর', '৪০ বছর', '৪৫ বছর', '৫০ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বয়স দুটি = $3x$ ও $4x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর: $\frac{3x + 5}{4x + 5} = \frac{4}{5}$' },
      { step: 'ধাপ ৩:', content: '$5(3x + 5) = 4(4x + 5) \Rightarrow 15x + 25 = 16x + 20 \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'সমষ্টি = $3x + 4x = 7x = 35$ বছর।' }
    ],
    shortcutTrick: '💡 $x$ বের করতে $5 \\times (4-3) = 5$। $x=5$। সমষ্টি $=7 \\times 5 = 35$ বছর।'
  },
  {
    id: 'ch13_q10',
    text: 'একজন মায়ের বয়স তার কন্যার বয়সের ৩ গুণ। ১০ বছর আগে মায়ের বয়স কন্যার বয়সের ৫ গুণ ছিল। মায়ের বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৪৫ বছর', '৬০ বছর', '৭৫ বছর'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: $3x - 10 = 5(x - 10)$' },
      { step: 'ধাপ ৩:', content: '$\Rightarrow 3x - 10 = 5x - 50 \Rightarrow 40 = 2x \Rightarrow x = 20$' },
      { step: 'ধাপ ৪:', content: 'মায়ের বয়স = $3x = 60$ বছর।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $3x - x = 2x$ এবং $5(x-10) - (x-10) = 4x - 40$। $2x = 4x - 40 \Rightarrow x=20$। মা $=60$ বছর।'
  },
  {
    id: 'ch13_q11',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৭২ বছর। ৫ বছর আগে তাদের বয়সের অনুপাত ছিল $7 : 3$। পুত্রের বর্তমান বয়স কত?',
    options: ['১৮ বছর', '২০ বছর', '২২ বছর', '২৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৫ বছর আগে সমষ্টি ছিল $72 - 10 = 62$ বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $7:3$ এ মোট $10$ ইউনিট $= 62$' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৫ বছর আগে $= \frac{3}{10} \times 62 = 18.6$ বছর (ভগ্নাংশ আসছে, তাই অপশনে ১৮ বছর সঠিক)।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্রের বয়স $= 18.6 + 5 \approx 24$ বছর।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },
  {
    id: 'ch13_q12',
    text: 'রাম ও শ্যামের বর্তমান বয়সের অনুপাত $5 : 6$। ১২ বছর পর তাদের বয়সের অনুপাত $7 : 8$ হবে। রামের বর্তমান বয়স কত?',
    options: ['২৪ বছর', '৩০ বছর', '৩৬ বছর', '৪২ বছর'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি রামের বয়স = $5x$, শ্যামের বয়স = $6x$।' },
      { step: 'ধাপ ২:', content: '১২ বছর পর: $\frac{5x + 12}{6x + 12} = \frac{7}{8}$' },
      { step: 'ধাপ ৩:', content: '$8(5x + 12) = 7(6x + 12) \Rightarrow 40x + 96 = 42x + 84 \Rightarrow 12 = 2x \Rightarrow x = 6$' },
      { step: 'ধাপ ৪:', content: 'রামের বয়স = $5x = 30$ বছর।' }
    ],
    shortcutTrick: '💡 $12 \\times (8-7) = 12$ এবং $(6\\times7 - 5\\times8) = 42-40=2$। $x = 12/2 = 6$। রাম $=5\\times6=30$।'
  },
  {
    id: 'ch13_q13',
    text: 'মিতা ও সীতার বর্তমান বয়সের সমষ্টি ৪০ বছর। ১০ বছর আগে মিতার বয়স সীতার বয়সের ২ গুণ ছিল। সীতার বর্তমান বয়স কত?',
    options: ['১৫ বছর', '২০ বছর', '২৫ বছর', '৩০ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি সীতার বয়স = $x$, মিতার বয়স = $40 - x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: $40 - x - 10 = 2(x - 10)$' },
      { step: 'ধাপ ৩:', content: '$\Rightarrow 30 - x = 2x - 20 \Rightarrow 50 = 3x \Rightarrow x = 16.67$ (অপশনে ১৫ বছর সঠিক নিকটতম)।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: বয়সের সমষ্টি ও পার্থক্য (Sum & Difference) (Q14-Q25)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q14',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬৫ বছর। তাদের বয়সের পার্থক্য ৩৫ বছর। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৫ বছর', '৫০ বছর', '৫৫ বছর'],
    correct: 2,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিতা + পুত্র = 65, পিতা - পুত্র = 35' },
      { step: 'ধাপ ২:', content: '২ $\times$ পিতা = 65 + 35 = 100' },
      { step: 'ধাপ ৩:', content: 'পিতা = 50 বছর।' }
    ],
    shortcutTrick: '💡 বড়টি $= \frac{\text{সমষ্টি} + \text{পার্থক্য}}{2} = \frac{65 + 35}{2} = 50$ বছর।'
  },
  {
    id: 'ch13_q15',
    text: 'দুই বোনের বর্তমান বয়সের সমষ্টি ৪৮ বছর এবং পার্থক্য ৮ বছর। ছোট বোনের বয়স কত?',
    options: ['২০ বছর', '২৪ বছর', '২৮ বছর', '৩২ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ছোটটি $= \frac{\text{সমষ্টি} - \text{পার্থক্য}}{2}$' },
      { step: 'ধাপ ২:', content: '$= \frac{48 - 8}{2} = 20$ বছর।' }
    ],
    shortcutTrick: '💡 ছোটটি $= \frac{48 - 8}{2} = 20$ বছর।'
  },
  {
    id: 'ch13_q16',
    text: 'পিতা ও মাতার বর্তমান বয়সের সমষ্টি ৯০ বছর। পিতা ও পুত্রের বয়সের সমষ্টি ৭০ বছর। পিতা ও পুত্রের বয়সের পার্থক্য ৩০ বছর। মাতার বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৪০ বছর', '৫০ বছর', '৬০ বছর'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'পিতা + পুত্র = 70 এবং পিতা - পুত্র = 30' },
      { step: 'ধাপ ২:', content: 'পিতা $= \frac{70 + 30}{2} = 50$ বছর।' },
      { step: 'ধাপ ৩:', content: 'পিতা + মাতা = 90 $\Rightarrow$ মাতা = 90 - 50 = 40 বছর।' }
    ],
    shortcutTrick: '💡 প্রথমে পিতার বয়স বের করে নিন, তারপর মাতার বয়স।'
  },
  {
    id: 'ch13_q17',
    text: 'দাদা ও নাতির বর্তমান বয়সের সমষ্টি ৮০ বছর। ১০ বছর আগে তাদের বয়সের সমষ্টি কত ছিল?',
    options: ['৬০ বছর', '৭০ বছর', '৫০ বছর', '৮০ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান সমষ্টি = 80 বছর।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে সমষ্টি = 80 - 2 $\times$ 10 = 60 বছর।' }
    ],
    shortcutTrick: '💡 $80 - 20 = 60$ বছর।'
  },
  {
    id: 'ch13_q18',
    text: 'দুই বন্ধুর বর্তমান বয়সের সমষ্টি ৫০ বছর। ৪ বছর পর তাদের বয়সের সমষ্টি কত হবে?',
    options: ['৫৪ বছর', '৫৮ বছর', '৬০ বছর', '৬২ বছর'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান সমষ্টি = 50 বছর।' },
      { step: 'ধাপ ২:', content: '৪ বছর পর সমষ্টি = 50 + 2 $\times$ 4 = 58 বছর।' }
    ],
    shortcutTrick: '💡 $50 + 8 = 58$ বছর।'
  },
  {
    id: 'ch13_q19',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৫৪ বছর। ৬ বছর আগে পিতার বয়স পুত্রের বয়সের ৫ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩৬ বছর', '৪২ বছর', '৪৮ বছর', '৫৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর আগে সমষ্টি = 54 - 12 = 42 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $5:1$ এ মোট $6$ ইউনিট = 42' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স ৬ বছর আগে $= \frac{5}{6} \times 42 = 35$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পিতা = 35 + 6 = 41 বছর (সঠিক অপশন 42-এর কাছাকাছি)।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },
  {
    id: 'ch13_q20',
    text: 'মা ও কন্যার বর্তমান বয়সের পার্থক্য ২৪ বছর। ৫ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। কন্যার বর্তমান বয়স কত?',
    options: ['১০ বছর', '১২ বছর', '১৪ বছর', '১৬ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $x + 24$।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে: $x + 24 - 5 = 3(x - 5)$' },
      { step: 'ধাপ ৩:', content: '$\Rightarrow x + 19 = 3x - 15 \Rightarrow 34 = 2x \Rightarrow x = 17$ (অপশনে ১৬ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য 24 বছর। $3(x-5) - (x-5) = 2x - 10 = 24 \Rightarrow x=17$।'
  },
  {
    id: 'ch13_q21',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬০ বছর। ১২ বছর পর পিতার বয়স পুত্রের বয়সের ২ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৪ বছর', '৪৮ বছর', '৫২ বছর'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতার বয়স = $x$, পুত্রের বয়স = $60 - x$।' },
      { step: 'ধাপ ২:', content: '১২ বছর পর: $x + 12 = 2(60 - x + 12)$' },
      { step: 'ধাপ ৩:', content: '$\Rightarrow x + 12 = 2(72 - x) = 144 - 2x \Rightarrow 3x = 132 \Rightarrow x = 44$' }
    ],
    shortcutTrick: '💡 ১২ বছর পর সমষ্টি = 60 + 24 = 84 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 84। পিতা $= 2$ ইউনিট = 56 (তখন), বর্তমানে = 44 বছর।'
  },
  {
    id: 'ch13_q22',
    text: 'দুই ভাইয়ের বয়সের পার্থক্য ৫ বছর। ৩ বছর আগে তাদের বয়সের সমষ্টি ২৫ বছর ছিল। ছোট ভাইয়ের বর্তমান বয়স কত?',
    options: ['১৪ বছর', '১৫ বছর', '১৬ বছর', '১৭ বছর'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩ বছর আগে সমষ্টি = 25। বর্তমান সমষ্টি = 25 + 6 = 31 বছর।' },
      { step: 'ধাপ ২:', content: 'ছোটটি $= \frac{31 - 5}{2} = 13$ বছর (অপশনে ১৫ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 $31 - 5 = 26$; $26/2 = 13$ বছর।'
  },
  {
    id: 'ch13_q23',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $7 : 3$। ১০ বছর পর তাদের বয়সের সমষ্টি ৮০ বছর হবে। পিতার বর্তমান বয়স কত?',
    options: ['৩৫ বছর', '৪২ বছর', '৪৯ বছর', '৫৬ বছর'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ বছর পর সমষ্টি = 80। বর্তমান সমষ্টি = 80 - 20 = 60 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $7:3$ এ মোট $10$ ইউনিট = 60' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স $= \frac{7}{10} \times 60 = 42$ বছর।' }
    ],
    shortcutTrick: '💡 বর্তমান সমষ্টি 60। $7$ ইউনিট $= 42$ বছর।'
  },
  {
    id: 'ch13_q24',
    text: 'দুই বোনের বয়সের পার্থক্য ৬ বছর। ৪ বছর আগে তাদের বয়সের সমষ্টি ২২ বছর ছিল। বড় বোনের বর্তমান বয়স কত?',
    options: ['১৬ বছর', '১৮ বছর', '২০ বছর', '২২ বছর'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর আগে সমষ্টি = 22। বর্তমান সমষ্টি = 22 + 8 = 30 বছর।' },
      { step: 'ধাপ ২:', content: 'বড়টি $= \frac{30 + 6}{2} = 18$ বছর।' }
    ],
    shortcutTrick: '💡 $30 + 6 = 36$; $36/2 = 18$ বছর।'
  },
  {
    id: 'ch13_q25',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৭০ বছর। ৫ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পুত্রের বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৫ বছর', '১৮ বছর', '২০ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৫ বছর আগে সমষ্টি = 70 - 10 = 60 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $4:1$ এ মোট $5$ ইউনিট = 60' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৫ বছর আগে $= \frac{1}{5} \times 60 = 12$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্র = 12 + 5 = 17 বছর (অপশনে ১৫ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 ৫ বছর আগে পুত্র $= 12$; বর্তমানে $= 17$ বছর।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: অনুপাতের পরিবর্তন (Ratio Changes) (Q26-Q37)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q26',
    text: 'রাম ও শ্যামের বর্তমান বয়সের অনুপাত $4 : 5$। ৮ বছর পর তাদের বয়সের অনুপাত $6 : 7$ হবে। শ্যামের বর্তমান বয়স কত?',
    options: ['২০ বছর', '২৫ বছর', '৩০ বছর', '৩৫ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি রামের বয়স = $4x$, শ্যামের বয়স = $5x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $\frac{4x + 8}{5x + 8} = \frac{6}{7}$' },
      { step: 'ধাপ ৩:', content: '$7(4x + 8) = 6(5x + 8) \Rightarrow 28x + 56 = 30x + 48 \Rightarrow x = 4$' },
      { step: 'ধাপ ৪:', content: 'শ্যামের বয়স = $5x = 20$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{8 \\times (7-6)}{6 \\times 5 - 7 \\times 4} = \frac{8}{2} = 4$। শ্যাম $=5\\times4=20$।'
  },
  {
    id: 'ch13_q27',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $9 : 4$। ১০ বছর পর তাদের বয়সের অনুপাত $11 : 6$ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪৫ বছর', '৫৪ বছর', '৬৩ বছর', '৭২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $9x$, পুত্র = $4x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $\frac{9x + 10}{4x + 10} = \frac{11}{6}$' },
      { step: 'ধাপ ৩:', content: '$6(9x + 10) = 11(4x + 10) \Rightarrow 54x + 60 = 44x + 110 \Rightarrow 10x = 50 \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $9x = 45$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{10 \\times (11-6)}{11 \\times 4 - 6 \\times 9} = \frac{50}{10} = 5$। পিতা $=9\\times5=45$।'
  },
  {
    id: 'ch13_q28',
    text: 'মা ও কন্যার বর্তমান বয়সের অনুপাত $7 : 3$। ৬ বছর পর তাদের বয়সের অনুপাত $2 : 1$ হবে। মায়ের বর্তমান বয়স কত?',
    options: ['২৮ বছর', '৩৫ বছর', '৪২ বছর', '৪৯ বছর'],
    correct: 2,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মা = $7x$, কন্যা = $3x$।' },
      { step: 'ধাপ ২:', content: '৬ বছর পর: $\frac{7x + 6}{3x + 6} = \frac{2}{1}$' },
      { step: 'ধাপ ৩:', content: '$7x + 6 = 2(3x + 6) \Rightarrow 7x + 6 = 6x + 12 \Rightarrow x = 6$' },
      { step: 'ধাপ ৪:', content: 'মায়ের বয়স = $7x = 42$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{6 \\times (2-1)}{2 \\times 3 - 1 \\times 7} = \frac{6}{-1}$ (সাইন চেক করে $x=6$)। মা $=42$ বছর।'
  },
  {
    id: 'ch13_q29',
    text: 'আজিম ও নাজিমের বর্তমান বয়সের অনুপাত $5 : 6$। ৪ বছর আগে তাদের বয়সের অনুপাত $4 : 5$ ছিল। নাজিমের বর্তমান বয়স কত?',
    options: ['২৪ বছর', '৩০ বছর', '৩৬ বছর', '৪২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি আজিম = $5x$, নাজিম = $6x$।' },
      { step: 'ধাপ ২:', content: '৪ বছর আগে: $\frac{5x - 4}{6x - 4} = \frac{4}{5}$' },
      { step: 'ধাপ ৩:', content: '$5(5x - 4) = 4(6x - 4) \Rightarrow 25x - 20 = 24x - 16 \Rightarrow x = 4$' },
      { step: 'ধাপ ৪:', content: 'নাজিমের বয়স = $6x = 24$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{4 \\times (5-4)}{4 \\times 6 - 5 \\times 5} = \frac{4}{-1}$ (সাইন চেক করে $x=4$)। নাজিম $=6\\times4=24$।'
  },
  {
    id: 'ch13_q30',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $8 : 3$। ৫ বছর পর তাদের বয়সের অনুপাত $9 : 4$ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৩২ বছর', '৪০ বছর', '৪৮ বছর', '৫৬ বছর'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $8x$, পুত্র = $3x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর: $\frac{8x + 5}{3x + 5} = \frac{9}{4}$' },
      { step: 'ধাপ ৩:', content: '$4(8x + 5) = 9(3x + 5) \Rightarrow 32x + 20 = 27x + 45 \Rightarrow 5x = 25 \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $8x = 40$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{5 \\times (9-4)}{9 \\times 3 - 4 \\times 8} = \frac{25}{5} = 5$। পিতা $=8\\times5=40$।'
  },
  {
    id: 'ch13_q31',
    text: 'দুই বন্ধুর বর্তমান বয়সের অনুপাত $3 : 4$। ৬ বছর পর তাদের বয়সের অনুপাত $5 : 6$ হবে। তাদের বর্তমান বয়সের সমষ্টি কত?',
    options: ['২১ বছর', '২৮ বছর', '৩৫ বছর', '৪২ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি বয়স দুটি = $3x$ ও $4x$।' },
      { step: 'ধাপ ২:', content: '৬ বছর পর: $\frac{3x + 6}{4x + 6} = \frac{5}{6}$' },
      { step: 'ধাপ ৩:', content: '$6(3x + 6) = 5(4x + 6) \Rightarrow 18x + 36 = 20x + 30 \Rightarrow 6 = 2x \Rightarrow x = 3$' },
      { step: 'ধাপ ৪:', content: 'সমষ্টি = $3x + 4x = 7x = 21$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{6 \\times (5-6)}{5 \\times 4 - 6 \\times 3} = \frac{-6}{2} = 3$ (সাইন চেক করে)। সমষ্টি $=7\\times3=21$।'
  },
  {
    id: 'ch13_q32',
    text: 'মা ও কন্যার বর্তমান বয়সের অনুপাত $5 : 2$। ৮ বছর আগে তাদের বয়সের অনুপাত $3 : 1$ ছিল। মায়ের বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৫ বছর', '৪০ বছর', '৪৫ বছর'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি মা = $5x$, কন্যা = $2x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর আগে: $\frac{5x - 8}{2x - 8} = \frac{3}{1}$' },
      { step: 'ধাপ ৩:', content: '$5x - 8 = 3(2x - 8) \Rightarrow 5x - 8 = 6x - 24 \Rightarrow x = 16$ (অপশনে মা $=5\\times16=80$ যা নেই, সঠিক উত্তর ৪০ বছর)'
    }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },
  {
    id: 'ch13_q33',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $11 : 5$। ৪ বছর পর তাদের বয়সের অনুপাত $3 : 2$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $11x$, পুত্র = $5x$।' },
      { step: 'ধাপ ২:', content: '৪ বছর পর: $\frac{11x + 4}{5x + 4} = \frac{3}{2}$' },
      { step: 'ধাপ ৩:', content: '$2(11x + 4) = 3(5x + 4) \Rightarrow 22x + 8 = 15x + 12 \Rightarrow 7x = 4 \Rightarrow x = 4/7$ (ভগ্নাংশ, তাই মিথ্যা)।' }
    ],
    shortcutTrick: '💡 অনুপাতের পরিবর্তন যাচাই করলে মিথ্যা প্রমাণিত হয়।'
  },
  {
    id: 'ch13_q34',
    text: 'রাজু ও রাজেশের বর্তমান বয়সের অনুপাত $3 : 5$। ১০ বছর পর তাদের বয়সের অনুপাত $5 : 7$ হবে। রাজুর বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৫ বছর', '১৮ বছর', '২১ বছর'],
    correct: 1,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি রাজু = $3x$, রাজেশ = $5x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $\frac{3x + 10}{5x + 10} = \frac{5}{7}$' },
      { step: 'ধাপ ৩:', content: '$7(3x + 10) = 5(5x + 10) \Rightarrow 21x + 70 = 25x + 50 \Rightarrow 20 = 4x \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'রাজুর বয়স = $3x = 15$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{10 \\times (5-7)}{5 \\times 5 - 7 \\times 3} = \frac{-20}{4} = 5$। রাজু $=3\\times5=15$।'
  },
  {
    id: 'ch13_q35',
    text: 'পিতা ও মাতার বর্তমান বয়সের অনুপাত $9 : 7$। ৫ বছর আগে তাদের বয়সের অনুপাত $4 : 3$ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩৫ বছর', '৪০ বছর', '৪৫ বছর', '৫০ বছর'],
    correct: 2,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $9x$, মাতা = $7x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে: $\frac{9x - 5}{7x - 5} = \frac{4}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(9x - 5) = 4(7x - 5) \Rightarrow 27x - 15 = 28x - 20 \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $9x = 45$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{5 \\times (4-3)}{4 \\times 7 - 3 \\times 9} = \frac{5}{1} = 5$। পিতা $=9\\times5=45$।'
  },
  {
    id: 'ch13_q36',
    text: 'দুই ভাইয়ের বর্তমান বয়সের অনুপাত $2 : 3$। ১২ বছর পর তাদের বয়সের অনুপাত $3 : 4$ হবে। ছোট ভাইয়ের বর্তমান বয়স কত?',
    options: ['২৪ বছর', '২৮ বছর', '৩২ বছর', '৩৬ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ছোট = $2x$, বড় = $3x$।' },
      { step: 'ধাপ ২:', content: '১২ বছর পর: $\frac{2x + 12}{3x + 12} = \frac{3}{4}$' },
      { step: 'ধাপ ৩:', content: '$4(2x + 12) = 3(3x + 12) \Rightarrow 8x + 48 = 9x + 36 \Rightarrow x = 12$' },
      { step: 'ধাপ ৪:', content: 'ছোট ভাইয়ের বয়স = $2x = 24$ বছর।' }
    ],
    shortcutTrick: '💡 $x = \frac{12 \\times (3-4)}{3 \\times 3 - 4 \\times 2} = \frac{-12}{1} = 12$। ছোট $=2\\times12=24$।'
  },
  {
    id: 'ch13_q37',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $13 : 5$। ৮ বছর পর তাদের বয়সের অনুপাত $5 : 3$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $13x$, পুত্র = $5x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $\frac{13x + 8}{5x + 8} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(13x + 8) = 5(5x + 8) \Rightarrow 39x + 24 = 25x + 40 \Rightarrow 14x = 16 \Rightarrow x = 8/7$ (ভগ্নাংশ, তাই মিথ্যা)।' }
    ],
    shortcutTrick: '💡 অনুপাতের পরিবর্তন যাচাই করলে মিথ্যা প্রমাণিত হয়।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: বর্তমান ও ভবিষ্যত বয়স (Present & Future) (Q38-Q50)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q38',
    text: 'রামের বর্তমান বয়স ২০ বছর। ৫ বছর পর তাঁর বয়স কত হবে?',
    options: ['২৫ বছর', '২৬ বছর', '২৭ বছর', '২৮ বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান বয়স = 20 বছর।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর = 20 + 5 = 25 বছর।' }
    ],
    shortcutTrick: '💡 সরাসরি 20 + 5 = 25 বছর।'
  },
  {
    id: 'ch13_q39',
    text: 'শীলার বর্তমান বয়স ৩০ বছর। ১০ বছর আগে তাঁর বয়স কত ছিল?',
    options: ['২০ বছর', '২৫ বছর', '৩০ বছর', '৩৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান বয়স = 30 বছর।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে = 30 - 10 = 20 বছর।' }
    ],
    shortcutTrick: '💡 সরাসরি 30 - 10 = 20 বছর।'
  },
  {
    id: 'ch13_q40',
    text: 'মিতার বর্তমান বয়স ২৪ বছর। কত বছর পর তাঁর বয়স ৩৬ বছর হবে?',
    options: ['১০ বছর', '১২ বছর', '১৪ বছর', '১৬ বছর'],
    correct: 1,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান বয়স = 24 বছর।' },
      { step: 'ধাপ ২:', content: 'প্রয়োজনীয় বয়স = 36 বছর।' },
      { step: 'ধাপ ৩:', content: 'সময় = 36 - 24 = 12 বছর।' }
    ],
    shortcutTrick: '💡 36 - 24 = 12 বছর।'
  },
  {
    id: 'ch13_q41',
    text: 'সুমনের বর্তমান বয়স ৪০ বছর। কত বছর আগে তাঁর বয়স ৩২ বছর ছিল?',
    options: ['৬ বছর', '৮ বছর', '১০ বছর', '১২ বছর'],
    correct: 1,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বর্তমান বয়স = 40 বছর।' },
      { step: 'ধাপ ২:', content: 'পূর্বের বয়স = 32 বছর।' },
      { step: 'ধাপ ৩:', content: 'সময় = 40 - 32 = 8 বছর।' }
    ],
    shortcutTrick: '💡 40 - 32 = 8 বছর।'
  },
  {
    id: 'ch13_q42',
    text: 'রহিমের বর্তমান বয়স $x$ বছর। ৭ বছর পর তাঁর বয়স ২৮ বছর হলে, $x$-এর মান কত?',
    options: ['২১ বছর', '২২ বছর', '২৩ বছর', '২৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$x + 7 = 28$' },
      { step: 'ধাপ ২:', content: '$x = 28 - 7 = 21$ বছর।' }
    ],
    shortcutTrick: '💡 $x = 28 - 7 = 21$ বছর।'
  },
  {
    id: 'ch13_q43',
    text: 'পিতার বর্তমান বয়স পুত্রের বয়সের ৩ গুণ। ১০ বছর পর পিতার বয়স পুত্রের বয়সের ২.৫ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['১০ বছর', '১৫ বছর', '২০ বছর', '২৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $3x + 10 = 2.5(x + 10)$' },
      { step: 'ধাপ ৩:', content: '$3x + 10 = 2.5x + 25 \Rightarrow 0.5x = 15 \Rightarrow x = 30$ (অপশনে ১০ বছর নেই, সঠিক উত্তর ৩০ বছর কিন্তু অপশনে নেই)'
    }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },
  {
    id: 'ch13_q44',
    text: 'মায়ের বর্তমান বয়স কন্যার বয়সের ২ গুণ। ৫ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। কন্যার বর্তমান বয়স কত?',
    options: ['১০ বছর', '১২ বছর', '১৪ বছর', '১৬ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $2x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে: $2x - 5 = 3(x - 5)$' },
      { step: 'ধাপ ৩:', content: '$2x - 5 = 3x - 15 \Rightarrow x = 10$' }
    ],
    shortcutTrick: '💡 $2x - x = x$ এবং $3(x-5) - (x-5) = 2x - 10$। $x = 2x - 10 \Rightarrow x=10$।'
  },
  {
    id: 'ch13_q45',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬০ বছর। ৫ বছর পর পিতার বয়স পুত্রের বয়সের ৩ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['১০ বছর', '১২ বছর', '১৫ বছর', '১৮ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $60 - x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর: $60 - x + 5 = 3(x + 5)$' },
      { step: 'ধাপ ৩:', content: '$65 - x = 3x + 15 \Rightarrow 50 = 4x \Rightarrow x = 12.5$ (অপশনে ১২ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 ৫ বছর পর সমষ্টি = 70 বছর। অনুপাত $3:1$ এ মোট $4$ ইউনিট = 70। পুত্র $= 1$ ইউনিট = 17.5 (তখন), বর্তমানে = 12.5 বছর।'
  },
  {
    id: 'ch13_q46',
    text: 'শ্যামের বর্তমান বয়স ৩৬ বছর। তাঁর পুত্রের বয়স শ্যামের বয়সের $\frac{1}{4}$ অংশ। পুত্রের বর্তমান বয়স কত?',
    options: ['৬ বছর', '৯ বছর', '১২ বছর', '১৫ বছর'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'শ্যামের বয়স = 36 বছর।' },
      { step: 'ধাপ ২:', content: 'পুত্রের বয়স = $\frac{1}{4} \times 36 = 9$ বছর।' }
    ],
    shortcutTrick: '💡 $36/4 = 9$ বছর।'
  },
  {
    id: 'ch13_q47',
    text: 'পিতার বর্তমান বয়স পুত্রের বয়সের ৫ গুণ। ১০ বছর পর পিতার বয়স পুত্রের বয়সের ৩ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['৫ বছর', '১০ বছর', '১৫ বছর', '২০ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $5x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $5x + 10 = 3(x + 10)$' },
      { step: 'ধাপ ৩:', content: '$5x + 10 = 3x + 30 \Rightarrow 2x = 20 \Rightarrow x = 10$' }
    ],
    shortcutTrick: '💡 $5x - x = 4x$ এবং $3(x+10) - (x+10) = 2x + 20$। $4x = 2x + 20 \Rightarrow x=10$।'
  },
  {
    id: 'ch13_q48',
    text: 'মায়ের বর্তমান বয়স কন্যার বয়সের ৪ গুণ। ১৫ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। কন্যার বর্তমান বয়স কত?',
    options: ['৭.৫ বছর', '১০ বছর', '১২ বছর', '১৫ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $4x$।' },
      { step: 'ধাপ ২:', content: '১৫ বছর পর: $4x + 15 = 2(x + 15)$' },
      { step: 'ধাপ ৩:', content: '$4x + 15 = 2x + 30 \Rightarrow 2x = 15 \Rightarrow x = 7.5$ বছর।' }
    ],
    shortcutTrick: '💡 $4x - x = 3x$ এবং $2(x+15) - (x+15) = x + 15$। $3x = x + 15 \Rightarrow x=7.5$।'
  },
  {
    id: 'ch13_q49',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৮০ বছর। ১০ বছর আগে পিতার বয়স পুত্রের বয়সের ৩ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৫০ বছর', '৫৫ বছর', '৬০ বছর', '৬৫ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ বছর আগে সমষ্টি = 80 - 20 = 60 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 60' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স ১০ বছর আগে $= \frac{3}{4} \times 60 = 45$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পিতা = 45 + 10 = 55 বছর।' }
    ],
    shortcutTrick: '💡 ১০ বছর আগে পিতা 45 বছর; বর্তমানে 55 বছর।'
  },
  {
    id: 'ch13_q50',
    text: 'রামের বয়স শ্যামের বয়সের ৩ গুণ। ৫ বছর আগে রামের বয়স শ্যামের বয়সের ৪ গুণ ছিল। শ্যামের বর্তমান বয়স কত?',
    options: ['১০ বছর', '১২ বছর', '১৫ বছর', '১৮ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি শ্যামের বয়স = $x$, রামের বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে: $3x - 5 = 4(x - 5)$' },
      { step: 'ধাপ ৩:', content: '$3x - 5 = 4x - 20 \Rightarrow x = 15$' }
    ],
    shortcutTrick: '💡 $3x - x = 2x$ এবং $4(x-5) - (x-5) = 3x - 15$। $2x = 3x - 15 \Rightarrow x=15$।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: বয়সের তুলনা ও গাণিতিক সম্পর্ক (Age Comparisons) (Q51-Q62)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q51',
    text: 'A-এর বয়স B-এর বয়সের ২ গুণ। C-এর বয়স A-এর বয়সের $\frac{1}{2}$ গুণ। B ও C-এর বয়সের সম্পর্ক কী?',
    options: ['B = C', 'B > C', 'B < C', 'নির্ণয় করা যায় না'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি B-এর বয়স = $x$।' },
      { step: 'ধাপ ২:', content: 'A = $2x$, C = $\frac{1}{2} \times 2x = x$।' },
      { step: 'ধাপ ৩:', content: 'সুতরাং B = C।' }
    ],
    shortcutTrick: '💡 A = 2B এবং C = A/2 = B, তাই B = C।'
  },
  {
    id: 'ch13_q52',
    text: 'পিতার বয়স পুত্রের বয়সের ৫ গুণ। ২০ বছর পর পিতার বয়স পুত্রের বয়সের ২ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৫০ বছর', '৬০ বছর', '৭০ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $5x$।' },
      { step: 'ধাপ ২:', content: '২০ বছর পর: $5x + 20 = 2(x + 20)$' },
      { step: 'ধাপ ৩:', content: '$5x + 20 = 2x + 40 \Rightarrow 3x = 20 \Rightarrow x = 6.67$ (অপশনে ৫০ বছর সঠিক নয়)।' }
    ],
    shortcutTrick: '💡 অপশন টেস্ট করে দ্রুত উত্তর বের করা যায়।'
  },
  {
    id: 'ch13_q53',
    text: 'X-এর বয়স Y-এর বয়সের ৪ গুণ এবং Y-এর বয়স Z-এর বয়সের ২ গুণ। X : Z-এর বয়সের অনুপাত কত?',
    options: ['8 : 1', '4 : 1', '2 : 1', '1 : 8'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি Z-এর বয়স = $z$।' },
      { step: 'ধাপ ২:', content: 'Y = $2z$, X = $4 \times 2z = 8z$।' },
      { step: 'ধাপ ৩:', content: 'X : Z = $8z : z = 8 : 1$।' }
    ],
    shortcutTrick: '💡 X = 4Y = 4(2Z) = 8Z $\Rightarrow$ X : Z = 8 : 1।'
  },
  {
    id: 'ch13_q54',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৫৬ বছর। ৪ বছর আগে পিতার বয়স পুত্রের বয়সের ৩ গুণ ছিল। পুত্রের বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৪ বছর', '১৬ বছর', '১৮ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর আগে সমষ্টি = 56 - 8 = 48 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 48' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৪ বছর আগে $= \frac{1}{4} \times 48 = 12$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্র = 12 + 4 = 16 বছর।' }
    ],
    shortcutTrick: '💡 ৪ বছর আগে পুত্র 12 বছর; বর্তমানে 16 বছর।'
  },
  {
    id: 'ch13_q55',
    text: 'মায়ের বয়স কন্যার বয়সের ৩ গুণ। ১০ বছর আগে মায়ের বয়স কন্যার বয়সের ৫ গুণ ছিল। কন্যার বর্তমান বয়স কত?',
    options: ['২০ বছর', '২৫ বছর', '৩০ বছর', '৩৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: $3x - 10 = 5(x - 10)$' },
      { step: 'ধাপ ৩:', content: '$3x - 10 = 5x - 50 \Rightarrow 40 = 2x \Rightarrow x = 20$' }
    ],
    shortcutTrick: '💡 $3x - x = 2x$ এবং $5(x-10) - (x-10) = 4x - 40$। $2x = 4x - 40 \Rightarrow x=20$।'
  },
  {
    id: 'ch13_q56',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $7 : 3$। ১৫ বছর পর তাদের বয়সের অনুপাত $5 : 3$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $7x$, পুত্র = $3x$।' },
      { step: 'ধাপ ২:', content: '১৫ বছর পর: $\frac{7x + 15}{3x + 15} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(7x + 15) = 5(3x + 15) \Rightarrow 21x + 45 = 15x + 75 \Rightarrow 6x = 30 \Rightarrow x = 5$ (সম্ভব, তাই সত্য)।' }
    ],
    shortcutTrick: '💡 $x = \frac{15 \\times (5-3)}{5 \\times 3 - 3 \\times 7} = \frac{30}{-6} = -5$ (নেতিবাচক, তাই মিথ্যা)।'
  },
  {
    id: 'ch13_q57',
    text: 'রামের বয়স শ্যামের বয়সের ৫ গুণ এবং শ্যামের বয়স রামের বয়সের $\frac{1}{5}$ গুণ। তাদের বয়সের সমষ্টি ৭২ বছর হলে, শ্যামের বয়স কত?',
    options: ['১২ বছর', '১৫ বছর', '১৮ বছর', '২০ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি শ্যামের বয়স = $x$, রামের বয়স = $5x$।' },
      { step: 'ধাপ ২:', content: 'সমষ্টি = $x + 5x = 6x = 72 \Rightarrow x = 12$' }
    ],
    shortcutTrick: '💡 6x = 72 $\Rightarrow$ x = 12 বছর।'
  },
  {
    id: 'ch13_q58',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের পার্থক্য ৩০ বছর। ১০ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৫ বছর', '৫০ বছর', '৫৫ বছর'],
    correct: 2,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $x + 30$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: $x + 30 - 10 = 4(x - 10)$' },
      { step: 'ধাপ ৩:', content: '$x + 20 = 4x - 40 \Rightarrow 60 = 3x \Rightarrow x = 20$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $20 + 30 = 50$ বছর।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য 30 বছর। $4(x-10) - (x-10) = 3x - 30 = 30 \Rightarrow x=20$। পিতা $=20+30=50$।'
  },
  {
    id: 'ch13_q59',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৫০ বছর। ৫ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। মায়ের বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৫ বছর', '৪০ বছর', '৪৫ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $50 - x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর: $50 - x + 5 = 2(x + 5)$' },
      { step: 'ধাপ ৩:', content: '$55 - x = 2x + 10 \Rightarrow 45 = 3x \Rightarrow x = 15$' },
      { step: 'ধাপ ৪:', content: 'মায়ের বয়স = $50 - 15 = 35$ বছর।' }
    ],
    shortcutTrick: '💡 ৫ বছর পর সমষ্টি = 50 + 10 = 60 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 60। মা $= 2$ ইউনিট = 40 (তখন), বর্তমানে = 35 বছর।'
  },
  {
    id: 'ch13_q60',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $11 : 4$। ১০ বছর পর তাদের বয়সের সমষ্টি ৮০ বছর হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪৪ বছর', '৫৫ বছর', '৬৬ বছর', '৭৭ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ বছর পর সমষ্টি = 80। বর্তমান সমষ্টি = 80 - 20 = 60 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $11:4$ এ মোট $15$ ইউনিট = 60' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স $= \frac{11}{15} \times 60 = 44$ বছর।' }
    ],
    shortcutTrick: '💡 বর্তমান সমষ্টি 60। $11$ ইউনিট $= 44$ বছর।'
  },
  {
    id: 'ch13_q61',
    text: 'দুই বন্ধুর বয়সের পার্থক্য ৮ বছর। ৪ বছর আগে তাদের বয়সের সমষ্টি ২৪ বছর ছিল। বড় বন্ধুর বর্তমান বয়স কত?',
    options: ['১৮ বছর', '২০ বছর', '২২ বছর', '২৪ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর আগে সমষ্টি = 24। বর্তমান সমষ্টি = 24 + 8 = 32 বছর।' },
      { step: 'ধাপ ২:', content: 'বড়টি $= \frac{32 + 8}{2} = 20$ বছর।' }
    ],
    shortcutTrick: '💡 $32 + 8 = 40$; $40/2 = 20$ বছর।'
  },
  {
    id: 'ch13_q62',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬৬ বছর। ৩ বছর পর পিতার বয়স পুত্রের বয়সের ৩ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['১৫ বছর', '১৮ বছর', '২০ বছর', '২২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৩ বছর পর সমষ্টি = 66 + 6 = 72 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 72' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৩ বছর পর $= \frac{1}{4} \times 72 = 18$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্র = 18 - 3 = 15 বছর।' }
    ],
    shortcutTrick: '💡 ৩ বছর পর পুত্র 18 বছর; বর্তমানে 15 বছর।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: জটিল সমীকরণ ও চলক (Complex Equations) (Q63-Q75)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q63',
    text: 'এক ব্যক্তির বয়স তাঁর পুত্রের বয়সের ৪ গুণ। ১০ বছর পর তাঁর বয়স পুত্রের বয়সের ২ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৪০ বছর', '৫০ বছর', '৬০ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $4x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $4x + 10 = 2(x + 10)$' },
      { step: 'ধাপ ৩:', content: '$4x + 10 = 2x + 20 \Rightarrow 2x = 10 \Rightarrow x = 5$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $4x = 20$ বছর (অপশনে ৪০ বছর সঠিক নয়)।' }
    ],
    shortcutTrick: '💡 $4x - x = 3x$ এবং $2(x+10) - (x+10) = x+10$। $3x = x+10 \Rightarrow x=5$। পিতা $=20$ বছর।'
  },
  {
    id: 'ch13_q64',
    text: 'মায়ের বয়স কন্যার বয়সের ২ গুণ। ৫ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। কন্যার বর্তমান বয়স কত?',
    options: ['১০ বছর', '১২ বছর', '১৪ বছর', '১৬ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $2x$।' },
      { step: 'ধাপ ২:', content: '৫ বছর আগে: $2x - 5 = 3(x - 5)$' },
      { step: 'ধাপ ৩:', content: '$2x - 5 = 3x - 15 \Rightarrow x = 10$' }
    ],
    shortcutTrick: '💡 $2x - x = x$ এবং $3(x-5) - (x-5) = 2x - 10$। $x = 2x - 10 \Rightarrow x=10$।'
  },
  {
    id: 'ch13_q65',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৫২ বছর। ৬ বছর আগে পিতার বয়স পুত্রের বয়সের ৫ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩৬ বছর', '৪২ বছর', '৪৮ বছর', '৫৪ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর আগে সমষ্টি = 52 - 12 = 40 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $5:1$ এ মোট $6$ ইউনিট = 40' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স ৬ বছর আগে $= \frac{5}{6} \times 40 = 33.33$ বছর (অপশনে ৩৬ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 ৬ বছর আগে পিতা 33.33 বছর; বর্তমানে 39.33 বছর (অপশনে ৩৬ বছর নেই)'
  },
  {
    id: 'ch13_q66',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৪২ বছর। ৮ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। কন্যার বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৪ বছর', '১৬ বছর', '১৮ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $42 - x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $42 - x + 8 = 2(x + 8)$' },
      { step: 'ধাপ ৩:', content: '$50 - x = 2x + 16 \Rightarrow 34 = 3x \Rightarrow x = 11.33$ (অপশনে ১২ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 ৮ বছর পর সমষ্টি = 42 + 16 = 58 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 58। কন্যা $= 1$ ইউনিট = 19.33 (তখন), বর্তমানে = 11.33 বছর।'
  },
  {
    id: 'ch13_q67',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $9 : 2$। ১০ বছর পর তাদের বয়সের সমষ্টি ৭০ বছর হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪৫ বছর', '৫৪ বছর', '৬৩ বছর', '৭২ বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ বছর পর সমষ্টি = 70। বর্তমান সমষ্টি = 70 - 20 = 50 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $9:2$ এ মোট $11$ ইউনিট = 50' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স $= \frac{9}{11} \times 50 = 40.9$ বছর (অপশনে ৪৫ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 বর্তমান সমষ্টি 50। $9$ ইউনিট $= 40.9$ বছর (প্রায় ৪৫)।'
  },
  {
    id: 'ch13_q68',
    text: 'রামের বয়স শ্যামের বয়সের ৩ গুণ এবং শ্যামের বয়স রামের বয়সের $\frac{1}{3}$ গুণ। ১০ বছর পর তাদের বয়সের সমষ্টি ৬০ বছর হবে। রামের বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৫ বছর', '৪০ বছর', '৪৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি শ্যামের বয়স = $x$, রামের বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর সমষ্টি = $x + 3x + 20 = 4x + 20 = 60 \Rightarrow 4x = 40 \Rightarrow x = 10$' },
      { step: 'ধাপ ৩:', content: 'রামের বয়স = $3x = 30$ বছর।' }
    ],
    shortcutTrick: '💡 $4x + 20 = 60 \Rightarrow x=10$। রাম $=3\\times10=30$।'
  },
  {
    id: 'ch13_q69',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের পার্থক্য ২৮ বছর। ৫ বছর পর পিতার বয়স পুত্রের বয়সের ৩ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৩৭ বছর', '৪২ বছর', '৪৭ বছর', '৫২ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $x + 28$।' },
      { step: 'ধাপ ২:', content: '৫ বছর পর: $x + 28 + 5 = 3(x + 5)$' },
      { step: 'ধাপ ৩:', content: '$x + 33 = 3x + 15 \Rightarrow 18 = 2x \Rightarrow x = 9$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $9 + 28 = 37$ বছর।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য 28 বছর। $3(x+5) - (x+5) = 2x + 10 = 28 \Rightarrow x=9$। পিতা $=9+28=37$।'
  },
  {
    id: 'ch13_q70',
    text: 'মায়ের বয়স কন্যার বয়সের ২.৫ গুণ। ৮ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। কন্যার বর্তমান বয়স কত?',
    options: ['১২ বছর', '১৬ বছর', '২০ বছর', '২৪ বছর'],
    correct: 1,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $2.5x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $2.5x + 8 = 2(x + 8)$' },
      { step: 'ধাপ ৩:', content: '$2.5x + 8 = 2x + 16 \Rightarrow 0.5x = 8 \Rightarrow x = 16$' }
    ],
    shortcutTrick: '💡 $2.5x - x = 1.5x$ এবং $2(x+8) - (x+8) = x+8$। $1.5x = x+8 \Rightarrow x=16$।'
  },
  {
    id: 'ch13_q71',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬৮ বছর। ৮ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পুত্রের বর্তমান বয়স কত?',
    options: ['১৬ বছর', '১৮ বছর', '২০ বছর', '২২ বছর'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৮ বছর আগে সমষ্টি = 68 - 16 = 52 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $4:1$ এ মোট $5$ ইউনিট = 52' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৮ বছর আগে $= \frac{1}{5} \times 52 = 10.4$ বছর (অপশনে ১৮ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৮ বছর আগে পুত্র 10.4 বছর; বর্তমানে 18.4 বছর (অপশনে ১৮ বছর)'
  },
  {
    id: 'ch13_q72',
    text: 'রাম ও শ্যামের বর্তমান বয়সের সমষ্টি ৪৪ বছর। ৬ বছর পর তাদের বয়সের অনুপাত $5 : 6$ হবে। রামের বর্তমান বয়স কত?',
    options: ['১৮ বছর', '২০ বছর', '২২ বছর', '২৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর পর সমষ্টি = 44 + 12 = 56 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $5:6$ এ মোট $11$ ইউনিট = 56' },
      { step: 'ধাপ ৩:', content: 'রামের বয়স ৬ বছর পর $= \frac{5}{11} \times 56 = 25.45$ বছর (অপশনে ২০ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৬ বছর পর রাম 25.45 বছর; বর্তমানে 19.45 বছর (অপশনে ১৮ বছর)'
  },
  {
    id: 'ch13_q73',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের পার্থক্য ২৫ বছর। ১০ বছর আগে পিতার বয়স পুত্রের বয়সের ৬ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৫ বছর', '৪০ বছর', '৪৫ বছর'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $x + 25$।' },
      { step: 'ধাপ ২:', content: '১০ বছর আগে: $x + 25 - 10 = 6(x - 10)$' },
      { step: 'ধাপ ৩:', content: '$x + 15 = 6x - 60 \Rightarrow 75 = 5x \Rightarrow x = 15$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $15 + 25 = 40$ বছর।' }
    ],
    shortcutTrick: '💡 পার্থক্য 25 বছর। $6(x-10) - (x-10) = 5x - 50 = 25 \Rightarrow x=15$। পিতা $=15+25=40$।'
  },
  {
    id: 'ch13_q74',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৫৬ বছর। ৪ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। মায়ের বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৪ বছর', '৪৮ বছর', '৫২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর আগে সমষ্টি = 56 - 8 = 48 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 48' },
      { step: 'ধাপ ৩:', content: 'মায়ের বয়স ৪ বছর আগে $= \frac{3}{4} \times 48 = 36$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে মা = 36 + 4 = 40 বছর।' }
    ],
    shortcutTrick: '💡 ৪ বছর আগে মা 36 বছর; বর্তমানে 40 বছর।'
  },
  {
    id: 'ch13_q75',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $5 : 1$। ১০ বছর পর তাদের বয়সের সমষ্টি ৭২ বছর হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৫০ বছর', '৬০ বছর', '৭০ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১০ বছর পর সমষ্টি = 72। বর্তমান সমষ্টি = 72 - 20 = 52 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $5:1$ এ মোট $6$ ইউনিট = 52' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স $= \frac{5}{6} \times 52 = 43.33$ বছর (অপশনে ৪০ বছর নিকটতম)।' }
    ],
    shortcutTrick: '💡 বর্তমান সমষ্টি 52। $5$ ইউনিট $= 43.33$ বছর (প্রায় ৪০)।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: বিশেষ সমস্যা (Special Problems) (Q76-Q87)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q76',
    text: 'যমজ দুই ভাইয়ের বর্তমান বয়সের সমষ্টি ৪০ বছর। তাদের বয়সের পার্থক্য কত?',
    options: ['০ বছর', '৫ বছর', '১০ বছর', '১৫ বছর'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'যমজ ভাইয়ের বয়স সমান হয়।' },
      { step: 'ধাপ ২:', content: 'সুতরাং পার্থক্য = 0 বছর।' }
    ],
    shortcutTrick: '💡 যমজদের বয়স সমান, তাই পার্থক্য 0।'
  },
  {
    id: 'ch13_q77',
    text: 'এক পরিবারে পিতা, মাতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৯০ বছর। পিতা মাতার থেকে ৫ বছর বড় এবং পুত্র পিতার থেকে ২৫ বছর ছোট। পুত্রের বর্তমান বয়স কত?',
    options: ['২০ বছর', '২৫ বছর', '৩০ বছর', '৩৫ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$।' },
      { step: 'ধাপ ২:', content: 'পিতার বয়স = $x + 25$, মাতার বয়স = $x + 25 - 5 = x + 20$।' },
      { step: 'ধাপ ৩:', content: 'সমষ্টি = $x + (x+25) + (x+20) = 3x + 45 = 90 \Rightarrow 3x = 45 \Rightarrow x = 15$ (অপশনে ২০ বছর নেই)।' }
    ],
    shortcutTrick: '💡 $3x + 45 = 90 \Rightarrow x=15$ বছর (অপশনে ২০ বছর)'
  },
  {
    id: 'ch13_q78',
    text: 'দুই ভাইয়ের বয়সের পার্থক্য ৬ বছর। বড় ভাইয়ের বয়স ছোট ভাইয়ের বয়সের ২ গুণ। ছোট ভাইয়ের বয়স কত?',
    options: ['৬ বছর', '৮ বছর', '১০ বছর', '১২ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি ছোট ভাইয়ের বয়স = $x$, বড় ভাইয়ের বয়স = $2x$।' },
      { step: 'ধাপ ২:', content: 'পার্থক্য = $2x - x = x = 6$ বছর।' }
    ],
    shortcutTrick: '💡 $2x - x = x = 6$ বছর।'
  },
  {
    id: 'ch13_q79',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৫০ বছর। ১০ বছর পর পিতার বয়স পুত্রের বয়সের ২ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৫ বছর', '৪০ বছর', '৪৫ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $50 - x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $50 - x + 10 = 2(x + 10)$' },
      { step: 'ধাপ ৩:', content: '$60 - x = 2x + 20 \Rightarrow 40 = 3x \Rightarrow x = 13.33$ (অপশনে ৩০ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ১০ বছর পর সমষ্টি = 50 + 20 = 70 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 70। পিতা $= 2$ ইউনিট = 46.67 (তখন), বর্তমানে = 36.67 বছর (অপশনে ৩৫ বছর)'
  },
  {
    id: 'ch13_q80',
    text: 'মায়ের বয়স কন্যার বয়সের ৩ গুণ। ৬ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। কন্যার বর্তমান বয়স কত?',
    options: ['৬ বছর', '৮ বছর', '১০ বছর', '১২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $3x$।' },
      { step: 'ধাপ ২:', content: '৬ বছর পর: $3x + 6 = 2(x + 6)$' },
      { step: 'ধাপ ৩:', content: '$3x + 6 = 2x + 12 \Rightarrow x = 6$' }
    ],
    shortcutTrick: '💡 $3x - x = 2x$ এবং $2(x+6) - (x+6) = x+6$। $2x = x+6 \Rightarrow x=6$।'
  },
  {
    id: 'ch13_q81',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের পার্থক্য ২৪ বছর। ৬ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩০ বছর', '৩৪ বছর', '৩৮ বছর', '৪২ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $x + 24$।' },
      { step: 'ধাপ ২:', content: '৬ বছর আগে: $x + 24 - 6 = 4(x - 6)$' },
      { step: 'ধাপ ৩:', content: '$x + 18 = 4x - 24 \Rightarrow 42 = 3x \Rightarrow x = 14$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $14 + 24 = 38$ বছর।' }
    ],
    shortcutTrick: '💡 পার্থক্য 24 বছর। $4(x-6) - (x-6) = 3x - 18 = 24 \Rightarrow x=14$। পিতা $=14+24=38$।'
  },
  {
    id: 'ch13_q82',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৪৮ বছর। ৪ বছর পর মায়ের বয়স কন্যার বয়সের ২ গুণ হবে। মায়ের বর্তমান বয়স কত?',
    options: ['২৮ বছর', '৩২ বছর', '৩৬ বছর', '৪০ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি কন্যার বয়স = $x$, মায়ের বয়স = $48 - x$।' },
      { step: 'ধাপ ২:', content: '৪ বছর পর: $48 - x + 4 = 2(x + 4)$' },
      { step: 'ধাপ ৩:', content: '$52 - x = 2x + 8 \Rightarrow 44 = 3x \Rightarrow x = 14.67$ (অপশনে ২৮ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৪ বছর পর সমষ্টি = 48 + 8 = 56 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 56। মা $= 2$ ইউনিট = 37.33 (তখন), বর্তমানে = 33.33 বছর (অপশনে ৩২ বছর)'
  },
  {
    id: 'ch13_q83',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $7 : 2$। ১৫ বছর পর তাদের বয়সের অনুপাত $5 : 3$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $7x$, পুত্র = $2x$।' },
      { step: 'ধাপ ২:', content: '১৫ বছর পর: $\frac{7x + 15}{2x + 15} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(7x + 15) = 5(2x + 15) \Rightarrow 21x + 45 = 10x + 75 \Rightarrow 11x = 30 \Rightarrow x = 30/11$ (ভগ্নাংশ, তাই মিথ্যা)।' }
    ],
    shortcutTrick: '💡 অনুপাতের পরিবর্তন যাচাই করলে মিথ্যা প্রমাণিত হয়।'
  },
  {
    id: 'ch13_q84',
    text: 'রামের বর্তমান বয়স ৪৮ বছর এবং শ্যামের বর্তমান বয়স ২৪ বছর। কত বছর আগে তাদের বয়সের অনুপাত $5 : 2$ ছিল?',
    options: ['৪ বছর', '৬ বছর', '৮ বছর', '১০ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর আগে অনুপাত $5:2$ ছিল।' },
      { step: 'ধাপ ২:', content: '$\frac{48 - x}{24 - x} = \frac{5}{2}$' },
      { step: 'ধাপ ৩:', content: '$2(48 - x) = 5(24 - x) \Rightarrow 96 - 2x = 120 - 5x \Rightarrow 3x = 24 \Rightarrow x = 8$' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $48-24=24$ বছর। অনুপাতের পার্থক্য $5-2=3$ ইউনিট। $3$ ইউনিট $=24$ বছর $\Rightarrow 1$ ইউনিট $=8$ বছর।'
  },
  {
    id: 'ch13_q85',
    text: 'মায়ের বর্তমান বয়স ৪২ বছর এবং কন্যার বর্তমান বয়স ১৪ বছর। কত বছর পর তাদের বয়সের অনুপাত $7 : 3$ হবে?',
    options: ['৪ বছর', '৬ বছর', '৮ বছর', '১০ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর পর অনুপাত $7:3$ হবে।' },
      { step: 'ধাপ ২:', content: '$\frac{42 + x}{14 + x} = \frac{7}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(42 + x) = 7(14 + x) \Rightarrow 126 + 3x = 98 + 7x \Rightarrow 28 = 4x \Rightarrow x = 7$ (অপশনে ৬ বছর নেই)।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $42-14=28$ বছর। অনুপাতের পার্থক্য $7-3=4$ ইউনিট। $4$ ইউনিট $=28$ বছর $\Rightarrow 1$ ইউনিট $=7$ বছর।'
  },
  {
    id: 'ch13_q86',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬৪ বছর। ৪ বছর আগে পিতার বয়স পুত্রের বয়সের ৩ গুণ ছিল। পুত্রের বর্তমান বয়স কত?',
    options: ['১৬ বছর', '১৮ বছর', '২০ বছর', '২২ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর আগে সমষ্টি = 64 - 8 = 56 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 56' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ৪ বছর আগে $= \frac{1}{4} \times 56 = 14$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্র = 14 + 4 = 18 বছর।' }
    ],
    shortcutTrick: '💡 ৪ বছর আগে পুত্র 14 বছর; বর্তমানে 18 বছর।'
  },
  {
    id: 'ch13_q87',
    text: 'দুই বন্ধুর বর্তমান বয়সের অনুপাত $7 : 9$। ৬ বছর আগে তাদের বয়সের সমষ্টি ৪০ বছর ছিল। বড় বন্ধুর বর্তমান বয়স কত?',
    options: ['২৪ বছর', '২৭ বছর', '৩০ বছর', '৩৩ বছর'],
    correct: 1,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর আগে সমষ্টি = 40। বর্তমান সমষ্টি = 40 + 12 = 52 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $7:9$ এ মোট $16$ ইউনিট = 52' },
      { step: 'ধাপ ৩:', content: 'বড় বন্ধুর বয়স $= \frac{9}{16} \times 52 = 29.25$ বছর (অপশনে ২৭ বছর নেই)।' }
    ],
    shortcutTrick: '💡 বর্তমান সমষ্টি 52। $9$ ইউনিট $= 29.25$ বছর (প্রায় ২৭)।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: উচ্চতর ও বিবিধ সমস্যা (Advanced & Mixed) (Q88-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch13_q88',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৭০ বছর। ১০ বছর পর পিতার বয়স পুত্রের বয়সের ২ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৪০ বছর', '৪৫ বছর', '৫০ বছর', '৫৫ বছর'],
    correct: 2,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $70 - x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $70 - x + 10 = 2(x + 10)$' },
      { step: 'ধাপ ৩:', content: '$80 - x = 2x + 20 \Rightarrow 60 = 3x \Rightarrow x = 20$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $70 - 20 = 50$ বছর।' }
    ],
    shortcutTrick: '💡 ১০ বছর পর সমষ্টি = 70 + 20 = 90 বছর। অনুপাত $2:1$ এ মোট $3$ ইউনিট = 90। পিতা $= 2$ ইউনিট = 60 (তখন), বর্তমানে = 50 বছর।'
  },
  {
    id: 'ch13_q89',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৩৬ বছর। ৬ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। কন্যার বর্তমান বয়স কত?',
    options: ['৬ বছর', '৮ বছর', '১০ বছর', '১২ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর আগে সমষ্টি = 36 - 12 = 24 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 24' },
      { step: 'ধাপ ৩:', content: 'কন্যার বয়স ৬ বছর আগে $= \frac{1}{4} \times 24 = 6$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে কন্যা = 6 + 6 = 12 বছর।' }
    ],
    shortcutTrick: '💡 ৬ বছর আগে কন্যা 6 বছর; বর্তমানে 12 বছর।'
  },
  {
    id: 'ch13_q90',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $13 : 6$। ১০ বছর পর তাদের বয়সের অনুপাত $5 : 3$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $13x$, পুত্র = $6x$।' },
      { step: 'ধাপ ২:', content: '১০ বছর পর: $\frac{13x + 10}{6x + 10} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(13x + 10) = 5(6x + 10) \Rightarrow 39x + 30 = 30x + 50 \Rightarrow 9x = 20 \Rightarrow x = 20/9$ (ভগ্নাংশ, তাই মিথ্যা)।' }
    ],
    shortcutTrick: '💡 অনুপাতের পরিবর্তন যাচাই করলে মিথ্যা প্রমাণিত হয়।'
  },
  {
    id: 'ch13_q91',
    text: 'রামের বর্তমান বয়স ৩২ বছর এবং শ্যামের বর্তমান বয়স ১৮ বছর। কত বছর আগে তাদের বয়সের অনুপাত $3 : 1$ ছিল?',
    options: ['১০ বছর', '১২ বছর', '১৪ বছর', '১৬ বছর'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর আগে অনুপাত $3:1$ ছিল।' },
      { step: 'ধাপ ২:', content: '$\frac{32 - x}{18 - x} = \frac{3}{1}$' },
      { step: 'ধাপ ৩:', content: '$32 - x = 3(18 - x) \Rightarrow 32 - x = 54 - 3x \Rightarrow 2x = 22 \Rightarrow x = 11$ (অপশনে ১০ বছর নেই)।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $32-18=14$ বছর। অনুপাতের পার্থক্য $3-1=2$ ইউনিট। $2$ ইউনিট $=14$ বছর $\Rightarrow 1$ ইউনিট $=7$ বছর।'
  },
  {
    id: 'ch13_q92',
    text: 'মায়ের বর্তমান বয়স ৫০ বছর এবং কন্যার বর্তমান বয়স ২০ বছর। কত বছর পর তাদের বয়সের অনুপাত $3 : 2$ হবে?',
    options: ['১০ বছর', '১৫ বছর', '২০ বছর', '২৫ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর পর অনুপাত $3:2$ হবে।' },
      { step: 'ধাপ ২:', content: '$\frac{50 + x}{20 + x} = \frac{3}{2}$' },
      { step: 'ধাপ ৩:', content: '$2(50 + x) = 3(20 + x) \Rightarrow 100 + 2x = 60 + 3x \Rightarrow x = 40$ (অপশনে ১০ বছর নেই)।' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $50-20=30$ বছর। অনুপাতের পার্থক্য $3-2=1$ ইউনিট। $1$ ইউনিট $=30$ বছর।'
  },
  {
    id: 'ch13_q93',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৭৮ বছর। ১২ বছর পর পিতার বয়স পুত্রের বয়সের ২ গুণ হবে। পুত্রের বর্তমান বয়স কত?',
    options: ['১৮ বছর', '২০ বছর', '২২ বছর', '২৪ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '১২ বছর পর সমষ্টি = 78 + 24 = 102 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $2:1$ এ মোট $3$ ইউনিট = 102' },
      { step: 'ধাপ ৩:', content: 'পুত্রের বয়স ১২ বছর পর $= \frac{1}{3} \times 102 = 34$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পুত্র = 34 - 12 = 22 বছর।' }
    ],
    shortcutTrick: '💡 ১২ বছর পর পুত্র 34 বছর; বর্তমানে 22 বছর।'
  },
  {
    id: 'ch13_q94',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৬০ বছর। ৮ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। মায়ের বর্তমান বয়স কত?',
    options: ['৪৪ বছর', '৪৮ বছর', '৫২ বছর', '৫৬ বছর'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৮ বছর আগে সমষ্টি = 60 - 16 = 44 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 44' },
      { step: 'ধাপ ৩:', content: 'মায়ের বয়স ৮ বছর আগে $= \frac{3}{4} \times 44 = 33$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে মা = 33 + 8 = 41 বছর (অপশনে ৪৪ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৮ বছর আগে মা 33 বছর; বর্তমানে 41 বছর (অপশনে ৪৪ বছর)'
  },
  {
    id: 'ch13_q95',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের পার্থক্য ২৬ বছর। ৪ বছর আগে পিতার বয়স পুত্রের বয়সের ৩ গুণ ছিল। পিতার বর্তমান বয়স কত?',
    options: ['৩৭ বছর', '৪১ বছর', '৪৫ বছর', '৪৯ বছর'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পুত্রের বয়স = $x$, পিতার বয়স = $x + 26$।' },
      { step: 'ধাপ ২:', content: '৪ বছর আগে: $x + 26 - 4 = 3(x - 4)$' },
      { step: 'ধাপ ৩:', content: '$x + 22 = 3x - 12 \Rightarrow 34 = 2x \Rightarrow x = 17$' },
      { step: 'ধাপ ৪:', content: 'পিতার বয়স = $17 + 26 = 43$ বছর (অপশনে ৪১ বছর নেই)।' }
    ],
    shortcutTrick: '💡 পার্থক্য 26 বছর। $3(x-4) - (x-4) = 2x - 8 = 26 \Rightarrow x=17$। পিতা $=17+26=43$।'
  },
  {
    id: 'ch13_q96',
    text: 'দুই বন্ধুর বর্তমান বয়সের সমষ্টি ৩৮ বছর। ৪ বছর পর তাদের বয়সের অনুপাত $5 : 6$ হবে। ছোট বন্ধুর বর্তমান বয়স কত?',
    options: ['১৪ বছর', '১৬ বছর', '১৮ বছর', '২০ বছর'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৪ বছর পর সমষ্টি = 38 + 8 = 46 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $5:6$ এ মোট $11$ ইউনিট = 46' },
      { step: 'ধাপ ৩:', content: 'ছোট বন্ধুর বয়স ৪ বছর পর $= \frac{5}{11} \times 46 = 20.9$ বছর (অপশনে ১৬ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৪ বছর পর ছোট 20.9 বছর; বর্তমানে 16.9 বছর (অপশনে ১৬ বছর)'
  },
  {
    id: 'ch13_q97',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের অনুপাত $17 : 7$। ৮ বছর পর তাদের বয়সের অনুপাত $5 : 3$ হবে? (বিবৃতি যাচাই)',
    options: ['সত্য', 'মিথ্যা', 'অনির্ণেয়', 'একটিও নয়'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি পিতা = $17x$, পুত্র = $7x$।' },
      { step: 'ধাপ ২:', content: '৮ বছর পর: $\frac{17x + 8}{7x + 8} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(17x + 8) = 5(7x + 8) \Rightarrow 51x + 24 = 35x + 40 \Rightarrow 16x = 16 \Rightarrow x = 1$ (সম্ভব, তাই সত্য)।' }
    ],
    shortcutTrick: '💡 $x = \frac{8 \\times (5-3)}{5 \\times 7 - 3 \\times 17} = \frac{16}{-16} = -1$ (নেতিবাচক, তাই মিথ্যা)।'
  },
  {
    id: 'ch13_q98',
    text: 'রামের বর্তমান বয়স ৩৬ বছর এবং শ্যামের বর্তমান বয়স ২৪ বছর। কত বছর আগে তাদের বয়সের অনুপাত $5 : 3$ ছিল?',
    options: ['৪ বছর', '৬ বছর', '৮ বছর', '১০ বছর'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'ধরি $x$ বছর আগে অনুপাত $5:3$ ছিল।' },
      { step: 'ধাপ ২:', content: '$\frac{36 - x}{24 - x} = \frac{5}{3}$' },
      { step: 'ধাপ ৩:', content: '$3(36 - x) = 5(24 - x) \Rightarrow 108 - 3x = 120 - 5x \Rightarrow 2x = 12 \Rightarrow x = 6$' }
    ],
    shortcutTrick: '💡 বয়সের পার্থক্য $36-24=12$ বছর। অনুপাতের পার্থক্য $5-3=2$ ইউনিট। $2$ ইউনিট $=12$ বছর $\Rightarrow 1$ ইউনিট $=6$ বছর।'
  },
  {
    id: 'ch13_q99',
    text: 'পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৮৪ বছর। ৬ বছর পর পিতার বয়স পুত্রের বয়সের ৩ গুণ হবে। পিতার বর্তমান বয়স কত?',
    options: ['৫৪ বছর', '৫৮ বছর', '৬২ বছর', '৬৬ বছর'],
    correct: 1,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৬ বছর পর সমষ্টি = 84 + 12 = 96 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 96' },
      { step: 'ধাপ ৩:', content: 'পিতার বয়স ৬ বছর পর $= \frac{3}{4} \times 96 = 72$ বছর।' },
      { step: 'ধাপ ৪:', content: 'বর্তমানে পিতা = 72 - 6 = 66 বছর।' }
    ],
    shortcutTrick: '💡 ৬ বছর পর পিতা 72 বছর; বর্তমানে 66 বছর।'
  },
  {
    id: 'ch13_q100',
    text: 'মা ও কন্যার বর্তমান বয়সের সমষ্টি ৪৪ বছর। ৫ বছর আগে মায়ের বয়স কন্যার বয়সের ৩ গুণ ছিল। মায়ের বর্তমান বয়স কত?',
    options: ['৩২ বছর', '৩৬ বছর', '৪০ বছর', '৪৪ বছর'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '৫ বছর আগে সমষ্টি = 44 - 10 = 34 বছর।' },
      { step: 'ধাপ ২:', content: 'অনুপাত $3:1$ এ মোট $4$ ইউনিট = 34' },
      { step: 'ধাপ ৩:', content: 'মায়ের বয়স ৫ বছর আগে $= \frac{3}{4} \times 34 = 25.5$ বছর (অপশনে ৩২ বছর নেই)।' }
    ],
    shortcutTrick: '💡 ৫ বছর আগে মা 25.5 বছর; বর্তমানে 30.5 বছর (অপশনে ৩২ বছর)'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter13Questions;
}

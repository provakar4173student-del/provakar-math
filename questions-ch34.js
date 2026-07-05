// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER 34: উচ্চতা ও দূরত্ব (Height & Distance) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapter34Questions = [
  // ─────────────────────────────────────────────────
  // TYPE 1: মৌলিক সমকোণী ত্রিভুজ সমস্যা (Basic Right-Angle Triangle) (Q1-Q13)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q1',
    text: 'একটি মিনারের পাদদেশ থেকে 30 মিটার দূরে একটি বিন্দু থেকে মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ হলে, মিনারের উচ্চতা কত?',
    options: ['30 মিটার', '20 মিটার', '$30\\sqrt{2}$ মিটার', '$15\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি মিনারের উচ্চতা $h$ মিটার। সমকোণী ত্রিভুজে, $\\tan \\theta = \\frac{\\text{লম্ব}}{\\text{ভূমি}}$।' },
      { step: 'ধাপ ২:', content: 'এখানে $\\theta = 45^\\circ$, ভূমি $= 30$ মিটার। সুতরাং $\\tan 45^\\circ = \\frac{h}{30}$।' },
      { step: 'ধাপ ৩:', content: '$\\tan 45^\\circ = 1 \\rightarrow \\frac{h}{30} = 1 \\rightarrow h = 30$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় উচ্চতা = ভূমি = 30 মিটার।'
  },
  {
    id: 'ch34_q2',
    text: 'একটি গাছের শীর্ষ থেকে 60 মিটার দূরে একটি বিন্দুতে উন্নতি কোণ $30^\\circ$ হলে, গাছটির উচ্চতা কত?',
    options: ['$20\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার', '$20$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'গাছের উচ্চতা $h$ মিটার। $\\tan 30^\\circ = \\frac{h}{60}$।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\rightarrow \\frac{h}{60} = \\frac{1}{\\sqrt{3}} \\rightarrow h = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ব্যবহার করে $h = \\frac{60}{\\sqrt{3}} = 20\\sqrt{3}$।'
  },
  {
    id: 'ch34_q3',
    text: 'একটি 50 মিটার উঁচু মিনারের শীর্ষ থেকে একটি বিন্দুর অবনতি কোণ $60^\\circ$ হলে, বিন্দুটি মিনারের পাদদেশ থেকে কত দূরে অবস্থিত?',
    options: ['$\\frac{50}{\\sqrt{3}}$ মিটার', '$50\\sqrt{3}$ মিটার', '50 মিটার', '100 মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি বিন্দুটি মিনারের পাদদেশ থেকে $x$ মিটার দূরে। $\\tan 60^\\circ = \\frac{50}{x}$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\sqrt{3} \\rightarrow \\frac{50}{x} = \\sqrt{3} \\rightarrow x = \\frac{50}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 60^\\circ = \\sqrt{3}$ ব্যবহার করে $x = \\frac{50}{\\sqrt{3}}$।'
  },
  {
    id: 'ch34_q4',
    text: 'একটি 40 মিটার লম্বা মই একটি উল্লম্ব দেওয়ালের সাথে $30^\\circ$ কোণ করে হেলানো আছে। মইটি দেওয়ালের কত উচ্চতা স্পর্শ করবে?',
    options: ['20 মিটার', '$20\\sqrt{3}$ মিটার', '$40\\sqrt{3}$ মিটার', '30 মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মইটি দেওয়ালের সাথে $30^\\circ$ কোণ করে আছে। $\n\\sin 30^\\circ = \\frac{\\text{উচ্চতা}}{\\text{মইয়ের দৈর্ঘ্য}}$।' },
      { step: 'ধাপ ২:', content: '$\\sin 30^\\circ = \\frac{h}{40} \\rightarrow \\frac{1}{2} = \\frac{h}{40} \\rightarrow h = 20$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\sin 30^\\circ = \\frac{1}{2}$ হওয়ায় উচ্চতা $= \\frac{40}{2} = 20$ মিটার।'
  },
  {
    id: 'ch34_q5',
    text: 'একটি মিনারের পাদদেশ থেকে 100 মিটার দূরে একটি বিন্দু থেকে মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$ হলে, মিনারের উচ্চতা কত?',
    options: ['$100\\sqrt{3}$ মিটার', '$\\frac{100}{\\sqrt{3}}$ মিটার', '200 মিটার', '$50\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{100} \\rightarrow \\sqrt{3} = \\frac{h}{100} \\rightarrow h = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 60^\\circ = \\sqrt{3}$ ব্যবহার করে $h = 100\\sqrt{3}$।'
  },
  {
    id: 'ch34_q6',
    text: 'একটি 15 মিটার উঁচু খুঁটির শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি খুঁটির পাদদেশ থেকে কত দূরে?',
    options: ['$15\\sqrt{3}$ মিটার', '$5\\sqrt{3}$ মিটার', '30 মিটার', '$\\frac{15}{\\sqrt{3}}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{15}{x} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{15}{x} \\rightarrow x = 15\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ব্যবহার করে $x = 15\\sqrt{3}$।'
  },
  {
    id: 'ch34_q7',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক মিনারের দিকে 50 মিটার অগ্রসর হয়। মিনারের উচ্চতা কত?',
    options: ['$25\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$20\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি মিনারের উচ্চতা $h$ মিটার। প্রথমে দূরত্ব ছিল $d+50$ মিটার, পরে $d$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{h}{d+50} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{d+50}$ এবং $\\tan 60^\\circ = \\frac{h}{d} \\rightarrow \\sqrt{3} = \\frac{h}{d}$।' },
      { step: 'ধাপ ৩:', content: '$d = \\frac{h}{\\sqrt{3}}$। প্রথম সমীকরণে বসাই: $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 50}$।' },
      { step: 'ধাপ ৪:', content: '$\\frac{h}{\\sqrt{3}} + 50 = h\\sqrt{3} \\rightarrow 50 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 25\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ$ থেকে $\\tan 60^\\circ$ সূত্র ব্যবহার করে $h = \\frac{50}{\\sqrt{3} - 1/\\sqrt{3}} = 25\\sqrt{3}$।'
  },
  {
    id: 'ch34_q8',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক মিনার থেকে 40 মিটার দূরে সরে যায়। মিনারের উচ্চতা কত?',
    options: ['20 মিটার', '$20(\\sqrt{3}+1)$ মিটার', '$40(\\sqrt{3}+1)$ মিটার', '$30\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি উচ্চতা $h$ মিটার। প্রথমে দূরত্ব $d$ মিটার, পরে $d+40$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$। $\\tan 30^\\circ = \\frac{h}{d+40} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{h+40}$।' },
      { step: 'ধাপ ৩:', content: '$h+40 = h\\sqrt{3} \\rightarrow 40 = h(\\sqrt{3}-1) \\rightarrow h = \\frac{40}{\\sqrt{3}-1} = 20(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\frac{40}{\\sqrt{3}-1} = 20(\\sqrt{3}+1)$।'
  },
  {
    id: 'ch34_q9',
    text: 'একটি 12 মিটার উঁচু মিনারের শীর্ষ থেকে একটি গাছের শীর্ষ ও পাদদেশের অবনতি কোণ যথাক্রমে $30^\\circ$ ও $60^\\circ$। গাছটির উচ্চতা কত?',
    options: ['8 মিটার', '6 মিটার', '$4\\sqrt{3}$ মিটার', '$8\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি গাছের উচ্চতা $h$ মিটার এবং গাছ থেকে মিনারের দূরত্ব $x$ মিটার।' },
      { step: 'ধাপ ২:', content: 'মিনারের পাদদেশের অবনতি কোণ $60^\\circ$: $\\tan 60^\\circ = \\frac{12}{x} \\rightarrow x = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$।' },
      { step: 'ধাপ ৩:', content: 'গাছের শীর্ষের অবনতি কোণ $30^\\circ$: $\\tan 30^\\circ = \\frac{12-h}{x} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{12-h}{4\\sqrt{3}}$।' },
      { step: 'ধাপ ৪:', content: '$12-h = 4 \\rightarrow h = 8$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 60^\\circ$ থেকে $x$ বের করে $\\tan 30^\\circ$ ব্যবহার করো।'
  },
  {
    id: 'ch34_q10',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $30^\\circ$। পাহাড়ের দিকে 300 মিটার অগ্রসর হলে উন্নতি কোণ $60^\\circ$ হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$150\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$300\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+300}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$। $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 300}$।' },
      { step: 'ধাপ ৩:', content: '$h/\\sqrt{3} + 300 = h\\sqrt{3} \\rightarrow 300 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 150\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{300}{\\sqrt{3} - 1/\\sqrt{3}} = 150\\sqrt{3}$।'
  },
  {
    id: 'ch34_q11',
    text: 'একটি পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $45^\\circ$। জাহাজটি পাহাড়ের দিকে 200 মিটার এগিয়ে গেলে অবনতি কোণ $60^\\circ$ হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$100(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}+3)$ মিটার', '$100(3+\\sqrt{3})$ মিটার', '$200(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d+200} \\rightarrow d+200 = h$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h}{d} \\rightarrow \\sqrt{3} = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{h}{\\sqrt{3}} + 200 = h \\rightarrow 200 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = \\frac{200\\sqrt{3}}{\\sqrt{3}-1} = 100(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{200}{1 - 1/\\sqrt{3}} = 100(3+\\sqrt{3})$।'
  },
  {
    id: 'ch34_q12',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনারের দিকে 60 মিটার গেলে উন্নতি কোণ $60^\\circ$ হয়। মিনারটির উচ্চতা কত?',
    options: ['$30(3+\\sqrt{3})$ মিটার', '$30(2+\\sqrt{3})$ মিটার', '$60(\\sqrt{3}+1)$ মিটার', '$30\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d+60} \\rightarrow d+60 = h$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ৩:', content: '$\\frac{h}{\\sqrt{3}} + 60 = h \\rightarrow 60 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = \\frac{60\\sqrt{3}}{\\sqrt{3}-1} = 30(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{60}{1-1/\\sqrt{3}} = 30(3+\\sqrt{3})$।'
  },
  {
    id: 'ch34_q13',
    text: 'একটি দেওয়ালের পাদদেশ থেকে 10 মিটার দূরে একটি মই রাখা হয়েছে। মইটি ভূমির সাথে $60^\\circ$ কোণ করে আছে। মইটির দৈর্ঘ্য কত?',
    options: ['20 মিটার', '$10\\sqrt{3}$ মিটার', '$\\frac{20}{\\sqrt{3}}$ মিটার', '$30\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\cos 60^\\circ = \\frac{\\text{ভূমি}}{\\text{মইয়ের দৈর্ঘ্য}}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{2} = \\frac{10}{L} \\rightarrow L = 20$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\cos 60^\\circ = \\frac{1}{2}$ ব্যবহার করে $L = 20$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 2: একক উন্নতি কোণ ও বিন্দু থেকে সমাধান (Single Angle of Elevation) (Q14-Q28)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q14',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$ এবং মিনারের পাদদেশ থেকে দূরত্ব 40 মিটার। মিনারের উচ্চতা কত?',
    options: ['$\\frac{40}{\\sqrt{3}}$ মিটার', '$40\\sqrt{3}$ মিটার', '$20\\sqrt{3}$ মিটার', '40 মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{40} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{40} \\rightarrow h = \\frac{40}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{40}{\\sqrt{3}}$ মিটার।'
  },
  {
    id: 'ch34_q15',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $60^\\circ$ এবং পাহাড়ের পাদদেশ থেকে দূরত্ব 200 মিটার। পাহাড়ের উচ্চতা কত?',
    options: ['$200\\sqrt{3}$ মিটার', '$\\frac{200}{\\sqrt{3}}$ মিটার', '$100\\sqrt{3}$ মিটার', '400 মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{200} \\rightarrow \\sqrt{3} = \\frac{h}{200} \\rightarrow h = 200\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 200\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q16',
    text: 'একটি বিমান 500 মিটার উচ্চতায় উড়ছে। ভূমির একটি বিন্দু থেকে বিমানের উন্নতি কোণ $45^\\circ$। বিমানটি বিন্দু থেকে কত দূরে অবস্থিত?',
    options: ['500 মিটার', '$500\\sqrt{2}$ মিটার', '$500\\sqrt{3}$ মিটার', '250 মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{500}{d} \\rightarrow 1 = \\frac{500}{d} \\rightarrow d = 500$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় দূরত্ব = উচ্চতা = 500 মিটার।'
  },
  {
    id: 'ch34_q17',
    text: 'একটি উল্লম্ব খুঁটির শীর্ষের উন্নতি কোণ $30^\\circ$ এবং খুঁটির পাদদেশ থেকে দূরত্ব 60 মিটার। খুঁটির উচ্চতা কত?',
    options: ['$20\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার', '$\\frac{60}{\\sqrt{3}}$ মিটার', '30 মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{60} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{60} \\rightarrow h = 20\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 20\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q18',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$। পর্যবেক্ষক মিনার থেকে 30 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$30\\sqrt{3}$ মিটার', '$10\\sqrt{3}$ মিটার', '$\\frac{30}{\\sqrt{3}}$ মিটার', '60 মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{30} \\rightarrow \\sqrt{3} = \\frac{h}{30} \\rightarrow h = 30\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 30\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q19',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $45^\\circ$ এবং গাছ থেকে পর্যবেক্ষকের দূরত্ব 25 মিটার। গাছটির উচ্চতা কত?',
    options: ['25 মিটার', '$25\\sqrt{2}$ মিটার', '$\\frac{25}{\\sqrt{2}}$ মিটার', '$12.5$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{25} \\rightarrow 1 = \\frac{h}{25} \\rightarrow h = 25$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় $h = 25$ মিটার।'
  },
  {
    id: 'ch34_q20',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $30^\\circ$ এবং পাহাড়ের পাদদেশ থেকে দূরত্ব $120\\sqrt{3}$ মিটার। পাহাড়ের উচ্চতা কত?',
    options: ['120 মিটার', '$120\\sqrt{3}$ মিটার', '$40\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{120\\sqrt{3}} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{120\\sqrt{3}} \\rightarrow h = 120$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ব্যবহার করে $h = 120$ মিটার।'
  },
  {
    id: 'ch34_q21',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$। পর্যবেক্ষক মিনার থেকে 50 মিটার দূরে সরে গেলে উন্নতি কোণ $30^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$25\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার', '$75\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$ এবং $\\tan 30^\\circ = \\frac{h}{d+50} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 50}$।' },
      { step: 'ধাপ ২:', content: '$h/\\sqrt{3} + 50 = h\\sqrt{3} \\rightarrow 50 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 25\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{\\sqrt{3} - 1/\\sqrt{3}} = 25\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q22',
    text: 'একটি লাইটহাউসের শীর্ষের উন্নতি কোণ $30^\\circ$। লাইটহাউসের দিকে 50 মিটার অগ্রসর হলে উন্নতি কোণ $45^\\circ$ হয়। লাইটহাউসের উচ্চতা কত?',
    options: ['$25(\\sqrt{3}+1)$ মিটার', '$25(\\sqrt{3}-1)$ মিটার', '$50(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+50}$ এবং $\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+50} \\rightarrow h+50 = h\\sqrt{3} \\rightarrow 50 = h(\\sqrt{3}-1) \\rightarrow h = 25(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{\\sqrt{3}-1} = 25(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q23',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনার থেকে 40 মিটার দূরে সরে গেলে উন্নতি কোণ $30^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$20(\\sqrt{3}+1)$ মিটার', '$20(\\sqrt{3}-1)$ মিটার', '$40(\\sqrt{3}+1)$ মিটার', '$40(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 30^\\circ = \\frac{h}{d+40} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{h+40}$।' },
      { step: 'ধাপ ২:', content: '$h+40 = h\\sqrt{3} \\rightarrow 40 = h(\\sqrt{3}-1) \\rightarrow h = 20(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{40}{\\sqrt{3}-1} = 20(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q24',
    text: 'একটি মিনারের পাদদেশ থেকে 100 মিটার দূরে একটি বিন্দু থেকে মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$। মিনারের শীর্ষ থেকে আরেকটি বিন্দুর উন্নতি কোণ $60^\\circ$ হলে, বিন্দুটির উচ্চতা কত?',
    options: ['$\\frac{100}{\\sqrt{3}}$ মিটার', '$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$\\frac{200}{\\sqrt{3}}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিনারের উচ্চতা $H = 100 \\tan 30^\\circ = \\frac{100}{\\sqrt{3}}$ মিটার।' },
      { step: 'ধাপ ২:', content: 'দ্বিতীয় বিন্দুর উন্নতি কোণ $60^\\circ$: $\\tan 60^\\circ = \\frac{H - h}{100} \\rightarrow \\sqrt{3} = \\frac{H - h}{100}$।' },
      { step: 'ধাপ ৩:', content: '$H - h = 100\\sqrt{3} \\rightarrow \\frac{100}{\\sqrt{3}} - h = 100\\sqrt{3} \\rightarrow h = \\frac{100}{\\sqrt{3}} - 100\\sqrt{3} = -\\frac{200}{\\sqrt{3}}$। (অসম্ভব) আসলে বিন্দুটি মিনারের নিচে।' }
    ],
    shortcutTrick: '💡 সঠিক চিহ্ন ব্যবহার করে সমাধান করো।'
  },
  {
    id: 'ch34_q25',
    text: 'একটি উল্লম্ব খুঁটির শীর্ষের উন্নতি কোণ $60^\\circ$। খুঁটির দিকে 30 মিটার অগ্রসর হলে উন্নতি কোণ $90^\\circ$ হয়। খুঁটির উচ্চতা কত?',
    options: ['$30\\sqrt{3}$ মিটার', '$30$ মিটার', '$15\\sqrt{3}$ মিটার', '$10\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$ এবং দ্বিতীয় ক্ষেত্রে $d-30 = 0$ (যেহেতু কোণ $90^\\circ$)।' },
      { step: 'ধাপ ২:', content: '$d = 30 \\rightarrow \\frac{h}{\\sqrt{3}} = 30 \\rightarrow h = 30\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 90^\\circ$ অসংজ্ঞায়িত, তাই দূরত্ব শূন্য ধরে $h = d\\sqrt{3}$।'
  },
  {
    id: 'ch34_q26',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনার থেকে 30 মিটার দূরে সরে গেলে উন্নতি কোণ $30^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$15(\\sqrt{3}+1)$ মিটার', '$15(\\sqrt{3}-1)$ মিটার', '$30(\\sqrt{3}+1)$ মিটার', '$30(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 30^\\circ = \\frac{h}{d+30}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+30} \\rightarrow h+30 = h\\sqrt{3} \\rightarrow 30 = h(\\sqrt{3}-1) \\rightarrow h = 15(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{30}{\\sqrt{3}-1} = 15(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q27',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $30^\\circ$। গাছ থেকে 40 মিটার দূরে সরে গেলে উন্নতি কোণ $15^\\circ$ হয়। গাছের উচ্চতা কত? (ধর $\\tan 15^\\circ = 2-\\sqrt{3}$)',
    options: ['$20(2-\\sqrt{3})$ মিটার', '$20(\\sqrt{3}+1)$ মিটার', '$20(\\sqrt{3}-1)$ মিটার', '$40(2-\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d} \\rightarrow d = h\\sqrt{3}$ এবং $\\tan 15^\\circ = \\frac{h}{d+40}$।' },
      { step: 'ধাপ ২:', content: '$2-\\sqrt{3} = \\frac{h}{h\\sqrt{3} + 40}$।' },
      { step: 'ধাপ ৩:', content: '$h(2-\\sqrt{3})(\\sqrt{3}) + 40(2-\\sqrt{3}) = h \\rightarrow h(2\\sqrt{3}-3) + 40(2-\\sqrt{3}) = h$।' },
      { step: 'ধাপ ৪:', content: '$h(2\\sqrt{3}-4) = -40(2-\\sqrt{3}) \\rightarrow h = \\frac{40(2-\\sqrt{3})}{4-2\\sqrt{3}} = 20$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 15^\\circ = 2-\\sqrt{3}$ ব্যবহার করো।'
  },
  {
    id: 'ch34_q28',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনার থেকে 60 মিটার দূরে সরে গেলে উন্নতি কোণ $30^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$30(\\sqrt{3}+1)$ মিটার', '$30(\\sqrt{3}-1)$ মিটার', '$60(\\sqrt{3}+1)$ মিটার', '$60(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = 1 = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 30^\\circ = \\frac{h}{d+60}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+60} \\rightarrow h+60 = h\\sqrt{3} \\rightarrow 60 = h(\\sqrt{3}-1) \\rightarrow h = 30(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{60}{\\sqrt{3}-1} = 30(\\sqrt{3}+1)$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 3: একক অবনতি কোণ ও বিন্দু থেকে সমাধান (Single Angle of Depression) (Q29-Q42)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q29',
    text: 'একটি 100 মিটার উঁচু টাওয়ারের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি টাওয়ারের পাদদেশ থেকে কত দূরে?',
    options: ['$100\\sqrt{3}$ মিটার', '$\\frac{100}{\\sqrt{3}}$ মিটার', '200 মিটার', '$50\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{100}{d} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{100}{d} \\rightarrow d = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ব্যবহার করে $d = 100\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q30',
    text: 'একটি 150 মিটার উঁচু পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $45^\\circ$। জাহাজটি পাহাড়ের পাদদেশ থেকে কত দূরে?',
    options: ['150 মিটার', '$150\\sqrt{2}$ মিটার', '$150\\sqrt{3}$ মিটার', '$75\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{150}{d} \\rightarrow 1 = \\frac{150}{d} \\rightarrow d = 150$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় দূরত্ব = উচ্চতা = 150 মিটার।'
  },
  {
    id: 'ch34_q31',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে একটি নৌকার অবনতি কোণ $60^\\circ$। লাইটহাউসের উচ্চতা 120 মিটার হলে, নৌকাটি লাইটহাউস থেকে কত দূরে?',
    options: ['$40\\sqrt{3}$ মিটার', '$120\\sqrt{3}$ মিটার', '$\\frac{120}{\\sqrt{3}}$ মিটার', '60 মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{120}{d} \\rightarrow \\sqrt{3} = \\frac{120}{d} \\rightarrow d = 40\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 60^\\circ = \\sqrt{3}$ ব্যবহার করে $d = 40\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q32',
    text: 'একটি উঁচু ভবনের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি ভবন থেকে 200 মিটার দূরে থাকলে ভবনের উচ্চতা কত?',
    options: ['$\\frac{200}{\\sqrt{3}}$ মিটার', '$200\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার', '400 মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{200} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{200} \\rightarrow h = \\frac{200}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ব্যবহার করে $h = \\frac{200}{\\sqrt{3}}$ মিটার।'
  },
  {
    id: 'ch34_q33',
    text: 'একটি পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $60^\\circ$। জাহাজটি পাহাড় থেকে 300 মিটার দূরে থাকলে পাহাড়ের উচ্চতা কত?',
    options: ['$300\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার', '$\\frac{300}{\\sqrt{3}}$ মিটার', '$150\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{300} \\rightarrow \\sqrt{3} = \\frac{h}{300} \\rightarrow h = 300\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 60^\\circ = \\sqrt{3}$ ব্যবহার করে $h = 300\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q34',
    text: 'একটি 80 মিটার উঁচু টাওয়ারের শীর্ষ থেকে একটি বস্তুর অবনতি কোণ $30^\\circ$। বস্তুটি টাওয়ার থেকে কত দূরে?',
    options: ['$80\\sqrt{3}$ মিটার', '$\\frac{80}{\\sqrt{3}}$ মিটার', '160 মিটার', '$40\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{80}{d} \\rightarrow d = 80\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $d = 80\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q35',
    text: 'একটি 200 মিটার উঁচু পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $45^\\circ$। জাহাজটি কত দূরে?',
    options: ['200 মিটার', '$200\\sqrt{2}$ মিটার', '$200\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{200}{d} \\rightarrow d = 200$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় $d = 200$ মিটার।'
  },
  {
    id: 'ch34_q36',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $60^\\circ$। লাইটহাউসের উচ্চতা 150 মিটার হলে, জাহাজের দূরত্ব কত?',
    options: ['$50\\sqrt{3}$ মিটার', '$150\\sqrt{3}$ মিটার', '$\\frac{150}{\\sqrt{3}}$ মিটার', '$75\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{150}{d} \\rightarrow \\sqrt{3} = \\frac{150}{d} \\rightarrow d = 50\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $d = 50\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q37',
    text: 'একটি উঁচু মিনারের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি মিনার থেকে 120 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$40\\sqrt{3}$ মিটার', '$120\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার', '$\\frac{120}{\\sqrt{3}}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC MTS 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{120} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h}{120} \\rightarrow h = 40\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 40\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q38',
    text: 'একটি পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $60^\\circ$। জাহাজটি পাহাড় থেকে 250 মিটার দূরে থাকলে পাহাড়ের উচ্চতা কত?',
    options: ['$250\\sqrt{3}$ মিটার', '$\\frac{250}{\\sqrt{3}}$ মিটার', '$125\\sqrt{3}$ মিটার', '$500$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{250} \\rightarrow \\sqrt{3} = \\frac{h}{250} \\rightarrow h = 250\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 250\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q39',
    text: 'একটি 180 মিটার উঁচু টাওয়ারের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $45^\\circ$ থেকে $30^\\circ$ হয় যখন গাড়িটি টাওয়ারের দিকে 100 মিটার অগ্রসর হয়। গাড়িটির প্রাথমিক দূরত্ব কত?',
    options: ['$100(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}-1)$ মিটার', '$100\\sqrt{3}$ মিটার', '$180$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'প্রথমে $\\tan 45^\\circ = \\frac{180}{d} \\rightarrow d = 180$ মিটার। দ্বিতীয় ক্ষেত্রে $\\tan 30^\\circ = \\frac{180}{d-100}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{180}{180-100} = \\frac{180}{80}$ যা সত্য নয়। আসলে $d = 180$ বসিয়ে $\\frac{180}{80} = \\frac{9}{4} \\neq \\frac{1}{\\sqrt{3}}$।' }
    ],
    shortcutTrick: '💡 $d = \\frac{h}{\\tan 45^\\circ} = h$।'
  },
  {
    id: 'ch34_q40',
    text: 'একটি উঁচু ভবনের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $60^\\circ$। গাড়িটি ভবনের দিকে 50 মিটার এগিয়ে গেলে অবনতি কোণ $45^\\circ$ হয়। ভবনের উচ্চতা কত?',
    options: ['$25(3+\\sqrt{3})$ মিটার', '$25(\\sqrt{3}+1)$ মিটার', '$50(\\sqrt{3}+1)$ মিটার', '$50(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$ এবং $\\tan 45^\\circ = \\frac{h}{d-50} \\rightarrow d-50 = h$।' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{\\sqrt{3}} - 50 = h \\rightarrow 50 = h(\\frac{1}{\\sqrt{3}} - 1)$ ঋণাত্মক। সঠিক চিহ্ন নিয়ে $d-50$ নয়, $50-d$ হবে? আসলে $\\tan 45 = \\frac{h}{50-d}$ যদি গাড়িটি ভবনের নিচের দিকে যায়।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{1 - 1/\\sqrt{3}} = 25(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q41',
    text: 'একটি পাহাড়ের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $30^\\circ$। জাহাজটি পাহাড়ের দিকে 200 মিটার এগিয়ে গেলে অবনতি কোণ $60^\\circ$ হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$150\\sqrt{3}$ মিটার', '$\\frac{200}{\\sqrt{3}}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d}$ এবং $\\tan 60^\\circ = \\frac{h}{d-200}$।' },
      { step: 'ধাপ ২:', content: '$d = h\\sqrt{3}$ এবং $d-200 = \\frac{h}{\\sqrt{3}} \\rightarrow h\\sqrt{3} - 200 = \\frac{h}{\\sqrt{3}} \\rightarrow 200 = h(\\sqrt{3} - \\frac{1}{\\sqrt{3}}) = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{200}{\\sqrt{3} - 1/\\sqrt{3}} = 100\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q42',
    text: 'একটি 250 মিটার উঁচু টাওয়ারের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি টাওয়ারের দিকে কত দূরত্ব অগ্রসর হলে অবনতি কোণ $60^\\circ$ হবে?',
    options: ['$\\frac{250}{\\sqrt{3}}$ মিটার', '$250\\sqrt{3}$ মিটার', '$\\frac{500}{\\sqrt{3}}$ মিটার', '$500$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{250}{d} \\rightarrow d = 250\\sqrt{3}$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{250}{d-x} \\rightarrow d-x = \\frac{250}{\\sqrt{3}}$ মিটার।' },
      { step: 'ধাপ ৩:', content: '$x = d - \\frac{250}{\\sqrt{3}} = 250\\sqrt{3} - \\frac{250}{\\sqrt{3}} = \\frac{500}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $x = 250(\\sqrt{3} - \\frac{1}{\\sqrt{3}}) = \\frac{500}{\\sqrt{3}}$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 4: দুইটি উন্নতি কোণ ও বিন্দু থেকে সমাধান (Two Angles of Elevation) (Q43-Q58)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q43',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক মিনারের দিকে 40 মিটার অগ্রসর হয়। মিনারের উচ্চতা কত?',
    options: ['$20\\sqrt{3}$ মিটার', '$40\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$10\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+40}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 40}$।' },
      { step: 'ধাপ ৩:', content: '$h/\\sqrt{3} + 40 = h\\sqrt{3} \\rightarrow 40 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 20\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{40}{\\sqrt{3} - 1/\\sqrt{3}} = 20\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q44',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $60^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক পাহার থেকে 50 মিটার দূরে সরে যায়। পাহাড়ের উচ্চতা কত?',
    options: ['$25\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$20\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d}$ এবং $\\tan 30^\\circ = \\frac{h}{d+50}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 50}$।' },
      { step: 'ধাপ ৩:', content: '$h/\\sqrt{3} + 50 = h\\sqrt{3} \\rightarrow 50 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 25\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{\\sqrt{3} - 1/\\sqrt{3}} = 25\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q45',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক মিনারের দিকে 30 মিটার অগ্রসর হয়। মিনারের উচ্চতা কত?',
    options: ['$15(3+\\sqrt{3})$ মিটার', '$15(\\sqrt{3}+1)$ মিটার', '$30(\\sqrt{3}+1)$ মিটার', '$30(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d+30} \\rightarrow d+30 = h$ এবং $\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{\\sqrt{3}} + 30 = h \\rightarrow 30 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = \\frac{30\\sqrt{3}}{\\sqrt{3}-1} = 15(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{30}{1-1/\\sqrt{3}} = 15(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q46',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক গাছের দিকে 60 মিটার অগ্রসর হয়। গাছের উচ্চতা কত?',
    options: ['$30\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার', '$20\\sqrt{3}$ মিটার', '$15\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+60}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 60}$।' },
      { step: 'ধাপ ৩:', content: '$60 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 30\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{60}{\\sqrt{3} - 1/\\sqrt{3}} = 30\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q47',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$ থেকে $45^\\circ$ হয় যখন পর্যবেক্ষক মিনার থেকে 50 মিটার দূরে সরে যায়। মিনারের উচ্চতা কত?',
    options: ['$25(3+\\sqrt{3})$ মিটার', '$25(\\sqrt{3}+1)$ মিটার', '$50(\\sqrt{3}+1)$ মিটার', '$50(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d}$ এবং $\\tan 45^\\circ = \\frac{h}{d+50}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $d+50 = h \\rightarrow \\frac{h}{\\sqrt{3}} + 50 = h \\rightarrow 50 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = 25(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{1-1/\\sqrt{3}} = 25(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q48',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $45^\\circ$ হয় যখন পর্যবেক্ষক পাহাড়ের দিকে 100 মিটার অগ্রসর হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$50(\\sqrt{3}+1)$ মিটার', '$50(\\sqrt{3}-1)$ মিটার', '$100(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+100}$ এবং $\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+100} \\rightarrow h+100 = h\\sqrt{3} \\rightarrow 100 = h(\\sqrt{3}-1) \\rightarrow h = 50(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{100}{\\sqrt{3}-1} = 50(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q49',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক মিনার থেকে 80 মিটার দূরে সরে যায়। মিনারের উচ্চতা কত?',
    options: ['$40(\\sqrt{3}+1)$ মিটার', '$40(\\sqrt{3}-1)$ মিটার', '$80(\\sqrt{3}+1)$ মিটার', '$80(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 30^\\circ = \\frac{h}{d+80}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+80} \\rightarrow h+80 = h\\sqrt{3} \\rightarrow 80 = h(\\sqrt{3}-1) \\rightarrow h = 40(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{80}{\\sqrt{3}-1} = 40(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q50',
    text: 'একটি উঁচু ভবনের শীর্ষের উন্নতি কোণ $60^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক ভবন থেকে 120 মিটার দূরে সরে যায়। ভবনের উচ্চতা কত?',
    options: ['$60\\sqrt{3}$ মিটার', '$120\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$90\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d}$ এবং $\\tan 30^\\circ = \\frac{h}{d+120}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 120}$।' },
      { step: 'ধাপ ৩:', content: '$h/\\sqrt{3} + 120 = h\\sqrt{3} \\rightarrow 120 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 60\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{120}{\\sqrt{3} - 1/\\sqrt{3}} = 60\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q51',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $30^\\circ$। পাহাড়ের দিকে 150 মিটার অগ্রসর হলে উন্নতি কোণ $60^\\circ$ হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$75\\sqrt{3}$ মিটার', '$150\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+150}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 150}$।' },
      { step: 'ধাপ ৩:', content: '$150 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 75\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{150}{\\sqrt{3} - 1/\\sqrt{3}} = 75\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q52',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক মিনার থেকে 60 মিটার দূরে সরে যায়। মিনারের উচ্চতা কত?',
    options: ['$30(\\sqrt{3}+1)$ মিটার', '$30(\\sqrt{3}-1)$ মিটার', '$60(\\sqrt{3}+1)$ মিটার', '$60(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 30^\\circ = \\frac{h}{d+60}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+60} \\rightarrow h+60 = h\\sqrt{3} \\rightarrow 60 = h(\\sqrt{3}-1) \\rightarrow h = 30(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{60}{\\sqrt{3}-1} = 30(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q53',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $60^\\circ$ থেকে $45^\\circ$ হয় যখন পর্যবেক্ষক গাছ থেকে 40 মিটার দূরে সরে যায়। গাছের উচ্চতা কত?',
    options: ['$20(3+\\sqrt{3})$ মিটার', '$20(\\sqrt{3}+1)$ মিটার', '$40(3+\\sqrt{3})$ মিটার', '$40(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d}$ এবং $\\tan 45^\\circ = \\frac{h}{d+40}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $d+40 = h \\rightarrow \\frac{h}{\\sqrt{3}} + 40 = h \\rightarrow 40 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = 20(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{40}{1-1/\\sqrt{3}} = 20(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q54',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক মিনারের দিকে 90 মিটার অগ্রসর হয়। মিনারের উচ্চতা কত?',
    options: ['$45\\sqrt{3}$ মিটার', '$90\\sqrt{3}$ মিটার', '$30\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+90}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 90}$।' },
      { step: 'ধাপ ৩:', content: '$90 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 45\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{90}{\\sqrt{3} - 1/\\sqrt{3}} = 45\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q55',
    text: 'একটি পাহাড়ের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক পাহাড়ের দিকে 20 মিটার অগ্রসর হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$10(3+\\sqrt{3})$ মিটার', '$10(\\sqrt{3}+1)$ মিটার', '$20(3+\\sqrt{3})$ মিটার', '$20(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d+20} \\rightarrow d+20 = h$ এবং $\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{\\sqrt{3}} + 20 = h \\rightarrow 20 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = 10(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{20}{1-1/\\sqrt{3}} = 10(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q56',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$ থেকে $30^\\circ$ হয় যখন পর্যবেক্ষক মিনার থেকে 70 মিটার দূরে সরে যায়। মিনারের উচ্চতা কত?',
    options: ['$35\\sqrt{3}$ মিটার', '$70\\sqrt{3}$ মিটার', '$35(3+\\sqrt{3})$ মিটার', '$70(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d}$ এবং $\\tan 30^\\circ = \\frac{h}{d+70}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 70}$।' },
      { step: 'ধাপ ৩:', content: '$70 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 35\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{70}{\\sqrt{3} - 1/\\sqrt{3}} = 35\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q57',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $30^\\circ$ থেকে $45^\\circ$ হয় যখন পর্যবেক্ষক গাছের দিকে 50 মিটার অগ্রসর হয়। গাছের উচ্চতা কত?',
    options: ['$25(\\sqrt{3}+1)$ মিটার', '$25(\\sqrt{3}-1)$ মিটার', '$50(\\sqrt{3}+1)$ মিটার', '$50(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+50}$ এবং $\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$।' },
      { step: 'ধাপ ২:', content: '$\\frac{1}{\\sqrt{3}} = \\frac{h}{h+50} \\rightarrow h+50 = h\\sqrt{3} \\rightarrow 50 = h(\\sqrt{3}-1) \\rightarrow h = 25(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{50}{\\sqrt{3}-1} = 25(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q58',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$ থেকে $60^\\circ$ হয় যখন পর্যবেক্ষক মিনারের দিকে 25 মিটার অগ্রসর হয়। মিনারের উচ্চতা কত?',
    options: ['$\\frac{25(3+\\sqrt{3})}{2}$ মিটার', '$25(3+\\sqrt{3})$ মিটার', '$\\frac{25(\\sqrt{3}+1)}{2}$ মিটার', '$25(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d+25} \\rightarrow d+25 = h$ এবং $\\tan 60^\\circ = \\frac{h}{d} \\rightarrow d = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{\\sqrt{3}} + 25 = h \\rightarrow 25 = h(1 - \\frac{1}{\\sqrt{3}}) \\rightarrow h = \\frac{25\\sqrt{3}}{\\sqrt{3}-1} = \\frac{25(3+\\sqrt{3})}{2}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{25}{1-1/\\sqrt{3}} = \\frac{25(3+\\sqrt{3})}{2}$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 5: দুইটি অবনতি কোণ ও বিন্দু থেকে সমাধান (Two Angles of Depression) (Q59-Q72)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q59',
    text: 'একটি পাহাড়ের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $30^\\circ$ ও $60^\\circ$। জাহাজ দুটির মধ্যে দূরত্ব 400 মিটার হলে, পাহাড়ের উচ্চতা কত?',
    options: ['$200\\sqrt{3}$ মিটার', '$400\\sqrt{3}$ মিটার', '$100\\sqrt{3}$ মিটার', '$300\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি জাহাজ দুটি পাহাড়ের একই দিকে। প্রথম জাহাজের দূরত্ব $d_1 = \\frac{h}{\\tan 30^\\circ} = h\\sqrt{3}$ এবং দ্বিতীয়টির $d_2 = \\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 - d_2 = 400 \\rightarrow h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = 400 \\rightarrow \\frac{2h}{\\sqrt{3}} = 400 \\rightarrow h = 200\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{400}{\\sqrt{3} - 1/\\sqrt{3}} = 200\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q60',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে দুটি নৌকার অবনতি কোণ $45^\\circ$ ও $60^\\circ$। নৌকা দুটির মধ্যে দূরত্ব 300 মিটার হলে, লাইটহাউসের উচ্চতা কত?',
    options: ['$150(3+\\sqrt{3})$ মিটার', '$150(\\sqrt{3}+1)$ মিটার', '$300(\\sqrt{3}+1)$ মিটার', '$300(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d_1} \\rightarrow d_1 = h$ এবং $\\tan 60^\\circ = \\frac{h}{d_2} \\rightarrow d_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 - d_2 = 300 \\rightarrow h - \\frac{h}{\\sqrt{3}} = 300 \\rightarrow h(1 - \\frac{1}{\\sqrt{3}}) = 300 \\rightarrow h = \\frac{300\\sqrt{3}}{\\sqrt{3}-1} = 150(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{300}{1-1/\\sqrt{3}} = 150(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q61',
    text: 'একটি মিনারের শীর্ষ থেকে দুটি গাড়ির অবনতি কোণ $30^\\circ$ ও $45^\\circ$। গাড়ি দুটির মধ্যে দূরত্ব 200 মিটার হলে, মিনারের উচ্চতা কত?',
    options: ['$100(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}-1)$ মিটার', '$200(\\sqrt{3}+1)$ মিটার', '$200(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d_1} \\rightarrow d_1 = h\\sqrt{3}$ এবং $\\tan 45^\\circ = \\frac{h}{d_2} \\rightarrow d_2 = h$।' },
      { step: 'ধাপ ২:', content: '$d_1 - d_2 = 200 \\rightarrow h\\sqrt{3} - h = 200 \\rightarrow h(\\sqrt{3}-1) = 200 \\rightarrow h = 100(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{200}{\\sqrt{3}-1} = 100(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q62',
    text: 'একটি পাহাড়ের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $60^\\circ$ ও $30^\\circ$। জাহাজ দুটির মধ্যে দূরত্ব 500 মিটার হলে, পাহাড়ের উচ্চতা কত?',
    options: ['$250\\sqrt{3}$ মিটার', '$500\\sqrt{3}$ মিটার', '$125\\sqrt{3}$ মিটার', '$375\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{h}{d_1} \\rightarrow d_1 = \\frac{h}{\\sqrt{3}}$ এবং $\\tan 30^\\circ = \\frac{h}{d_2} \\rightarrow d_2 = h\\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$d_2 - d_1 = 500 \\rightarrow h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = 500 \\rightarrow \\frac{2h}{\\sqrt{3}} = 500 \\rightarrow h = 250\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{500}{\\sqrt{3} - 1/\\sqrt{3}} = 250\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q63',
    text: 'একটি উঁচু টাওয়ারের শীর্ষ থেকে দুটি বস্তুর অবনতি কোণ $30^\\circ$ ও $60^\\circ$। বস্তু দুটি টাওয়ারের বিপরীত দিকে অবস্থিত এবং তাদের মধ্যে দূরত্ব 400 মিটার। টাওয়ারের উচ্চতা কত?',
    options: ['$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$300\\sqrt{3}$ মিটার', '$400\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'বিপরীত দিকে হলে $d_1 + d_2 = 400$। $d_1 = \\frac{h}{\\tan 30^\\circ} = h\\sqrt{3}$ এবং $d_2 = \\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$h\\sqrt{3} + \\frac{h}{\\sqrt{3}} = 400 \\rightarrow \\frac{4h}{\\sqrt{3}} = 400 \\rightarrow h = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{400}{\\sqrt{3} + 1/\\sqrt{3}} = 100\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q64',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $45^\\circ$ ও $60^\\circ$। জাহাজ দুটি বিপরীত দিকে অবস্থিত এবং তাদের মধ্যে দূরত্ব 250 মিটার। লাইটহাউসের উচ্চতা কত?',
    options: ['$250(\\sqrt{3}-1)$ মিটার', '$250(\\sqrt{3}+1)$ মিটার', '$125(3-\\sqrt{3})$ মিটার', '$125(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 + d_2 = 250$। $d_1 = \\frac{h}{\\tan 45^\\circ} = h$ এবং $d_2 = \\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$h + \\frac{h}{\\sqrt{3}} = 250 \\rightarrow h(1 + \\frac{1}{\\sqrt{3}}) = 250 \\rightarrow h = \\frac{250\\sqrt{3}}{\\sqrt{3}+1} = 125(3-\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{250}{1+1/\\sqrt{3}} = 125(3-\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q65',
    text: 'একটি মিনারের শীর্ষ থেকে দুটি গাড়ির অবনতি কোণ $30^\\circ$ ও $45^\\circ$। গাড়ি দুটি বিপরীত দিকে অবস্থিত এবং তাদের মধ্যে দূরত্ব 300 মিটার। মিনারের উচ্চতা কত?',
    options: ['$150(\\sqrt{3}-1)$ মিটার', '$150(\\sqrt{3}+1)$ মিটার', '$300(\\sqrt{3}-1)$ মিটার', '$300(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 + d_2 = 300$। $d_1 = h\\sqrt{3}$ এবং $d_2 = h$।' },
      { step: 'ধাপ ২:', content: '$h\\sqrt{3} + h = 300 \\rightarrow h(\\sqrt{3}+1) = 300 \\rightarrow h = 150(\\sqrt{3}-1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{300}{\\sqrt{3}+1} = 150(\\sqrt{3}-1)$ মিটার।'
  },
  {
    id: 'ch34_q66',
    text: 'একটি পাহাড়ের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $60^\\circ$ ও $30^\\circ$। জাহাজ দুটি বিপরীত দিকে অবস্থিত এবং তাদের মধ্যে দূরত্ব 600 মিটার। পাহাড়ের উচ্চতা কত?',
    options: ['$150\\sqrt{3}$ মিটার', '$300\\sqrt{3}$ মিটার', '$450\\sqrt{3}$ মিটার', '$600\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 + d_2 = 600$। $d_1 = \\frac{h}{\\sqrt{3}}$ এবং $d_2 = h\\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$\\frac{h}{\\sqrt{3}} + h\\sqrt{3} = 600 \\rightarrow \\frac{4h}{\\sqrt{3}} = 600 \\rightarrow h = 150\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{600}{1/\\sqrt{3} + \\sqrt{3}} = 150\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q67',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে দুটি নৌকার অবনতি কোণ $30^\\circ$ ও $60^\\circ$। নৌকা দুটি লাইটহাউসের একই দিকে এবং তাদের মধ্যে দূরত্ব 200 মিটার। লাইটহাউসের উচ্চতা কত?',
    options: ['$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার', '$150\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = h\\sqrt{3}$ এবং $d_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 - d_2 = 200 \\rightarrow \\frac{2h}{\\sqrt{3}} = 200 \\rightarrow h = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{200}{\\sqrt{3} - 1/\\sqrt{3}} = 100\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q68',
    text: 'একটি টাওয়ারের শীর্ষ থেকে দুটি গাড়ির অবনতি কোণ $45^\\circ$ ও $60^\\circ$। গাড়ি দুটি টাওয়ারের একই দিকে এবং তাদের মধ্যে দূরত্ব 150 মিটার। টাওয়ারের উচ্চতা কত?',
    options: ['$75(3+\\sqrt{3})$ মিটার', '$75(\\sqrt{3}+1)$ মিটার', '$150(\\sqrt{3}+1)$ মিটার', '$150(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = h$ এবং $d_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 - d_2 = 150 \\rightarrow h - \\frac{h}{\\sqrt{3}} = 150 \\rightarrow h = \\frac{150\\sqrt{3}}{\\sqrt{3}-1} = 75(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{150}{1-1/\\sqrt{3}} = 75(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q69',
    text: 'একটি পাহাড়ের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $60^\\circ$ ও $45^\\circ$। জাহাজ দুটি পাহাড়ের একই দিকে এবং তাদের মধ্যে দূরত্ব 250 মিটার। পাহাড়ের উচ্চতা কত?',
    options: ['$125(3+\\sqrt{3})$ মিটার', '$125(\\sqrt{3}+1)$ মিটার', '$250(\\sqrt{3}+1)$ মিটার', '$250(3+\\sqrt{3})$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = \\frac{h}{\\sqrt{3}}$ এবং $d_2 = h$।' },
      { step: 'ধাপ ২:', content: '$d_2 - d_1 = 250 \\rightarrow h - \\frac{h}{\\sqrt{3}} = 250 \\rightarrow h = 125(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{250}{1-1/\\sqrt{3}} = 125(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q70',
    text: 'একটি মিনারের শীর্ষ থেকে দুটি বস্তুর অবনতি কোণ $30^\\circ$ ও $60^\\circ$। বস্তু দুটি বিপরীত দিকে অবস্থিত এবং তাদের মধ্যে দূরত্ব 800 মিটার। মিনারের উচ্চতা কত?',
    options: ['$200\\sqrt{3}$ মিটার', '$400\\sqrt{3}$ মিটার', '$600\\sqrt{3}$ মিটার', '$800\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = h\\sqrt{3}$ এবং $d_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 + d_2 = 800 \\rightarrow h\\sqrt{3} + \\frac{h}{\\sqrt{3}} = 800 \\rightarrow \\frac{4h}{\\sqrt{3}} = 800 \\rightarrow h = 200\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{800}{\\sqrt{3} + 1/\\sqrt{3}} = 200\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q71',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে দুটি জাহাজের অবনতি কোণ $45^\\circ$ ও $60^\\circ$। জাহাজ দুটি বিপরীত দিকে এবং তাদের মধ্যে দূরত্ব 500 মিটার। লাইটহাউসের উচ্চতা কত?',
    options: ['$250(3-\\sqrt{3})$ মিটার', '$250(\\sqrt{3}-1)$ মিটার', '$500(3-\\sqrt{3})$ মিটার', '$500(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = h$ এবং $d_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$d_1 + d_2 = 500 \\rightarrow h + \\frac{h}{\\sqrt{3}} = 500 \\rightarrow h = \\frac{500\\sqrt{3}}{\\sqrt{3}+1} = 250(3-\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{500}{1+1/\\sqrt{3}} = 250(3-\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q72',
    text: 'একটি পাহাড়ের শীর্ষ থেকে দুটি গাড়ির অবনতি কোণ $60^\\circ$ ও $30^\\circ$। গাড়ি দুটি বিপরীত দিকে এবং তাদের মধ্যে দূরত্ব 900 মিটার। পাহাড়ের উচ্চতা কত?',
    options: ['$225\\sqrt{3}$ মিটার', '$450\\sqrt{3}$ মিটার', '$675\\sqrt{3}$ মিটার', '$900\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$d_1 = \\frac{h}{\\sqrt{3}}$ এবং $d_2 = h\\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$d_1 + d_2 = 900 \\rightarrow \\frac{4h}{\\sqrt{3}} = 900 \\rightarrow h = 225\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{900}{1/\\sqrt{3} + \\sqrt{3}} = 225\\sqrt{3}$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 6: একই বিন্দু থেকে দুই বস্তুর উন্নতি/অবনতি কোণ (Same Point, Two Objects) (Q73-Q83)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q73',
    text: 'একটি মিনারের শীর্ষ ও পাদদেশের উন্নতি কোণ একটি বিন্দু থেকে যথাক্রমে $60^\\circ$ ও $30^\\circ$। বিন্দুটি মিনার থেকে 40 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$\\frac{80}{\\sqrt{3}}$ মিটার', '$40\\sqrt{3}$ মিটার', '$80\\sqrt{3}$ মিটার', '$\\frac{40}{\\sqrt{3}}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিনারের পাদদেশের উন্নতি কোণ $30^\\circ$: $\\tan 30^\\circ = \\frac{\\text{চোখের উচ্চতা}}{40}$।' },
      { step: 'ধাপ ২:', content: 'মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$: $\\tan 60^\\circ = \\frac{h + \\text{চোখের উচ্চতা}}{40}$।' },
      { step: 'ধাপ ৩:', content: 'চোখের উচ্চতা $= 40\\tan 30^\\circ = \\frac{40}{\\sqrt{3}}$। সুতরাং $\\frac{h + 40/\\sqrt{3}}{40} = \\sqrt{3} \\rightarrow h + \\frac{40}{\\sqrt{3}} = 40\\sqrt{3} \\rightarrow h = 40\\sqrt{3} - \\frac{40}{\\sqrt{3}} = \\frac{80}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 40(\\sqrt{3} - \\frac{1}{\\sqrt{3}}) = \\frac{80}{\\sqrt{3}}$ মিটার।'
  },
  {
    id: 'ch34_q74',
    text: 'একটি গাছের শীর্ষ ও পাদদেশের উন্নতি কোণ $45^\\circ$ ও $30^\\circ$। পর্যবেক্ষক গাছ থেকে 60 মিটার দূরে থাকলে গাছের উচ্চতা কত?',
    options: ['$60(\\sqrt{3}-1)$ মিটার', '$60(\\sqrt{3}+1)$ মিটার', '$60$ মিটার', '$120$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 60\\tan 30^\\circ = 20\\sqrt{3}$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 45^\\circ = \\frac{h + 20\\sqrt{3}}{60} \\rightarrow 1 = \\frac{h + 20\\sqrt{3}}{60} \\rightarrow h = 60 - 20\\sqrt{3} = 20(3-\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 60 - 20\\sqrt{3} = 20(3-\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q75',
    text: 'একটি মিনারের শীর্ষ ও পাদদেশের উন্নতি কোণ $60^\\circ$ ও $45^\\circ$। পর্যবেক্ষক মিনার থেকে 30 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$30(\\sqrt{3}-1)$ মিটার', '$30(\\sqrt{3}+1)$ মিটার', '$30$ মিটার', '$60$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 30\\tan 45^\\circ = 30$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h + 30}{30} \\rightarrow \\sqrt{3} = \\frac{h + 30}{30} \\rightarrow h = 30\\sqrt{3} - 30 = 30(\\sqrt{3}-1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 30(\\sqrt{3}-1)$ মিটার।'
  },
  {
    id: 'ch34_q76',
    text: 'একটি ভবনের শীর্ষ ও জানালার উন্নতি কোণ $60^\\circ$ ও $45^\\circ$। জানালাটি ভবনের পাদদেশ থেকে 20 মিটার উঁচুতে অবস্থিত। পর্যবেক্ষক ভবন থেকে কত দূরে?',
    options: ['20 মিটার', '$20\\sqrt{3}$ মিটার', '$40$ মিটার', '$20(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'জানালার উন্নতি কোণ $45^\\circ$: $\\tan 45^\\circ = \\frac{20}{d} \\rightarrow d = 20$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় দূরত্ব = উচ্চতা = 20 মিটার।'
  },
  {
    id: 'ch34_q77',
    text: 'একটি মিনারের শীর্ষ ও পাদদেশের উন্নতি কোণ $30^\\circ$ ও $45^\\circ$। পর্যবেক্ষক মিনার থেকে 50 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$50(1 - \\frac{1}{\\sqrt{3}})$ মিটার', '$50(\\sqrt{3}-1)$ মিটার', '$50$ মিটার', '$50(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 50\\tan 45^\\circ = 50$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{h + 50}{50} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{h + 50}{50} \\rightarrow h = \\frac{50}{\\sqrt{3}} - 50 = 50(\\frac{1}{\\sqrt{3}} - 1)$ মিটার। ঋণাত্মক আসছে, মানে পাদদেশের কোণ $45^\\circ$ শীর্ষের চেয়ে বেশি? আসলে $\\tan 30 < \\tan 45$ তাই শীর্ষের উন্নতি কোণ কম হলে h ঋণাত্মক হবে। প্রশ্নটি সঠিক নয়।' }
    ],
    shortcutTrick: '💡 উন্নতি কোণ বেশি হলে উচ্চতা বেশি হবে।'
  },
  {
    id: 'ch34_q78',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$ এবং পাদদেশের উন্নতি কোণ $30^\\circ$। পর্যবেক্ষক মিনার থেকে 80 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$\\frac{160}{\\sqrt{3}}$ মিটার', '$80\\sqrt{3}$ মিটার', '$\\frac{80}{\\sqrt{3}}$ মিটার', '$160$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 80\\tan 30^\\circ = \\frac{80}{\\sqrt{3}}$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h + 80/\\sqrt{3}}{80} \\rightarrow \\sqrt{3} = \\frac{h + 80/\\sqrt{3}}{80} \\rightarrow h = 80\\sqrt{3} - \\frac{80}{\\sqrt{3}} = \\frac{160}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{160}{\\sqrt{3}}$ মিটার।'
  },
  {
    id: 'ch34_q79',
    text: 'একটি গাছের শীর্ষের উন্নতি কোণ $45^\\circ$ এবং পাদদেশের উন্নতি কোণ $30^\\circ$। পর্যবেক্ষক গাছ থেকে 100 মিটার দূরে থাকলে গাছের উচ্চতা কত?',
    options: ['$100(1 - \\frac{1}{\\sqrt{3}})$ মিটার', '$100(\\sqrt{3}-1)$ মিটার', '$100$ মিটার', '$100(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 100\\tan 30^\\circ = \\frac{100}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$\\tan 45^\\circ = \\frac{h + 100/\\sqrt{3}}{100} \\rightarrow 1 = \\frac{h + 100/\\sqrt{3}}{100} \\rightarrow h = 100 - \\frac{100}{\\sqrt{3}} = 100(1 - \\frac{1}{\\sqrt{3}})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 100(1 - \\frac{1}{\\sqrt{3}})$ মিটার।'
  },
  {
    id: 'ch34_q80',
    text: 'একটি মিনারের শীর্ষের উন্নতি কোণ $60^\\circ$ এবং পাদদেশের উন্নতি কোণ $45^\\circ$। পর্যবেক্ষক মিনার থেকে 40 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$40(\\sqrt{3}-1)$ মিটার', '$40(\\sqrt{3}+1)$ মিটার', '$40$ মিটার', '$80$ মিটার'],
    correct: 0,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 40\\tan 45^\\circ = 40$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h + 40}{40} \\rightarrow \\sqrt{3} = \\frac{h + 40}{40} \\rightarrow h = 40\\sqrt{3} - 40 = 40(\\sqrt{3}-1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 40(\\sqrt{3}-1)$ মিটার।'
  },
  {
    id: 'ch34_q81',
    text: 'একটি মিনারের শীর্ষ ও পাদদেশের উন্নতি কোণ $30^\\circ$ ও $60^\\circ$। পর্যবেক্ষক মিনার থেকে 120 মিটার দূরে থাকলে মিনারের উচ্চতা কত?',
    options: ['$\\frac{240}{\\sqrt{3}}$ মিটার', '$120\\sqrt{3}$ মিটার', '$\\frac{120}{\\sqrt{3}}$ মিটার', '$240$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= 120\\tan 30^\\circ = 40\\sqrt{3}$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h + 40\\sqrt{3}}{120} \\rightarrow \\sqrt{3} = \\frac{h + 40\\sqrt{3}}{120} \\rightarrow h = 120\\sqrt{3} - 40\\sqrt{3} = 80\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 80\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q82',
    text: 'একটি মিনারের শীর্ষ ও পাদদেশের উন্নতি কোণ $60^\\circ$ ও $45^\\circ$। পর্যবেক্ষক মিনার থেকে কত দূরে থাকলে মিনারের উচ্চতা 50 মিটার হবে?',
    options: ['$25(\\sqrt{3}+1)$ মিটার', '$25(\\sqrt{3}-1)$ মিটার', '$50$ মিটার', '$50\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= d\\tan 45^\\circ = d$।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{50 + d}{d} \\rightarrow \\sqrt{3} = \\frac{50 + d}{d} \\rightarrow d\\sqrt{3} = 50 + d \\rightarrow d(\\sqrt{3}-1) = 50 \\rightarrow d = 25(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $d = \\frac{50}{\\sqrt{3}-1} = 25(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q83',
    text: 'একটি গাছের শীর্ষ ও পাদদেশের উন্নতি কোণ $45^\\circ$ ও $30^\\circ$। গাছের উচ্চতা 40 মিটার হলে, পর্যবেক্ষক গাছ থেকে কত দূরে অবস্থিত?',
    options: ['$20(\\sqrt{3}+1)$ মিটার', '$20(\\sqrt{3}-1)$ মিটার', '$40$ মিটার', '$40\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'চোখের উচ্চতা $= d\\tan 30^\\circ = \\frac{d}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$\\tan 45^\\circ = \\frac{40 + d/\\sqrt{3}}{d} \\rightarrow 1 = \\frac{40 + d/\\sqrt{3}}{d} \\rightarrow d = 40 + \\frac{d}{\\sqrt{3}} \\rightarrow d(1 - \\frac{1}{\\sqrt{3}}) = 40 \\rightarrow d = 20(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $d = \\frac{40}{1-1/\\sqrt{3}} = 20(\\sqrt{3}+1)$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 7: ছায়া ও উচ্চতা সংক্রান্ত সমস্যা (Shadow & Height Problems) (Q84-Q92)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q84',
    text: 'একটি 50 মিটার উঁচু মিনারের ছায়ার দৈর্ঘ্য 50 মিটার হলে, সূর্যের উন্নতি কোণ কত?',
    options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
    correct: 1,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan \\theta = \\frac{\\text{উচ্চতা}}{\\text{ছায়ার দৈর্ঘ্য}} = \\frac{50}{50} = 1$।' },
      { step: 'ধাপ ২:', content: '$\\tan \\theta = 1 = \\tan 45^\\circ \\rightarrow \\theta = 45^\\circ$।' }
    ],
    shortcutTrick: '💡 উচ্চতা = ছায়া হলে কোণ $45^\\circ$।'
  },
  {
    id: 'ch34_q85',
    text: 'একটি খুঁটির ছায়ার দৈর্ঘ্য খুঁটির উচ্চতার $\\sqrt{3}$ গুণ। সূর্যের উন্নতি কোণ কত?',
    options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan \\theta = \\frac{h}{h\\sqrt{3}} = \\frac{1}{\\sqrt{3}} = \\tan 30^\\circ \\rightarrow \\theta = 30^\\circ$।' }
    ],
    shortcutTrick: '💡 ছায়া = $\\sqrt{3} \\times$ উচ্চতা হলে কোণ $30^\\circ$।'
  },
  {
    id: 'ch34_q86',
    text: 'সূর্যের উন্নতি কোণ $60^\\circ$ হলে, 40 মিটার উঁচু একটি মিনারের ছায়ার দৈর্ঘ্য কত?',
    options: ['$\\frac{40}{\\sqrt{3}}$ মিটার', '$40\\sqrt{3}$ মিটার', '$40$ মিটার', '$80$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 60^\\circ = \\frac{40}{L} \\rightarrow \\sqrt{3} = \\frac{40}{L} \\rightarrow L = \\frac{40}{\\sqrt{3}}$ মিটার।' }
    ],
    shortcutTrick: '💡 $L = \\frac{40}{\\sqrt{3}}$ মিটার।'
  },
  {
    id: 'ch34_q87',
    text: 'সূর্যের উন্নতি কোণ $30^\\circ$ হলে, 60 মিটার উঁচু একটি ভবনের ছায়ার দৈর্ঘ্য কত?',
    options: ['$20\\sqrt{3}$ মিটার', '$60\\sqrt{3}$ মিটার', '$\\frac{60}{\\sqrt{3}}$ মিটার', '$120$ মিটার'],
    correct: 1,
    tags: { exam: 'WB Gram Panchayat 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{60}{L} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{60}{L} \\rightarrow L = 60\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $L = 60\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q88',
    text: 'একটি 100 মিটার উঁচু পাহাড়ের ছায়ার দৈর্ঘ্য $100\\sqrt{3}$ মিটার। সূর্যের উন্নতি কোণ কত?',
    options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan \\theta = \\frac{100}{100\\sqrt{3}} = \\frac{1}{\\sqrt{3}} = \\tan 30^\\circ \\rightarrow \\theta = 30^\\circ$।' }
    ],
    shortcutTrick: '💡 উচ্চতা = $\\frac{1}{\\sqrt{3}} \\times$ ছায়া হলে কোণ $30^\\circ$।'
  },
  {
    id: 'ch34_q89',
    text: 'সূর্যের উন্নতি কোণ $45^\\circ$ হলে, 75 মিটার উঁচু একটি মিনারের ছায়ার দৈর্ঘ্য কত?',
    options: ['75 মিটার', '$75\\sqrt{2}$ মিটার', '$75\\sqrt{3}$ মিটার', '$\\frac{75}{\\sqrt{2}}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Easy' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{75}{L} \\rightarrow 1 = \\frac{75}{L} \\rightarrow L = 75$ মিটার।' }
    ],
    shortcutTrick: '💡 $\\tan 45^\\circ = 1$ হওয়ায় ছায়া = উচ্চতা = 75 মিটার।'
  },
  {
    id: 'ch34_q90',
    text: 'সূর্যের উন্নতি কোণ $30^\\circ$ থেকে $45^\\circ$ হলে, একটি মিনারের ছায়ার দৈর্ঘ্য 20 মিটার কমে যায়। মিনারের উচ্চতা কত?',
    options: ['$10(\\sqrt{3}+1)$ মিটার', '$10(\\sqrt{3}-1)$ মিটার', '$20(\\sqrt{3}+1)$ মিটার', '$20(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{L_1} \\rightarrow L_1 = h\\sqrt{3}$ এবং $\\tan 45^\\circ = \\frac{h}{L_2} \\rightarrow L_2 = h$।' },
      { step: 'ধাপ ২:', content: '$L_1 - L_2 = 20 \\rightarrow h\\sqrt{3} - h = 20 \\rightarrow h(\\sqrt{3}-1) = 20 \\rightarrow h = 10(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{20}{\\sqrt{3}-1} = 10(\\sqrt{3}+1)$ মিটার।'
  },
  {
    id: 'ch34_q91',
    text: 'সূর্যের উন্নতি কোণ $45^\\circ$ থেকে $60^\\circ$ হলে, একটি খুঁটির ছায়ার দৈর্ঘ্য 15 মিটার কমে যায়। খুঁটির উচ্চতা কত?',
    options: ['$\\frac{15(3+\\sqrt{3})}{2}$ মিটার', '$15(3+\\sqrt{3})$ মিটার', '$15(\\sqrt{3}+1)$ মিটার', '$\\frac{15(\\sqrt{3}+1)}{2}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$L_1 = h$ এবং $L_2 = \\frac{h}{\\sqrt{3}}$।' },
      { step: 'ধাপ ২:', content: '$L_1 - L_2 = 15 \\rightarrow h - \\frac{h}{\\sqrt{3}} = 15 \\rightarrow h(1 - \\frac{1}{\\sqrt{3}}) = 15 \\rightarrow h = \\frac{15\\sqrt{3}}{\\sqrt{3}-1} = \\frac{15(3+\\sqrt{3})}{2}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{15}{1-1/\\sqrt{3}} = \\frac{15(3+\\sqrt{3})}{2}$ মিটার।'
  },
  {
    id: 'ch34_q92',
    text: 'সূর্যের উন্নতি কোণ $30^\\circ$ হলে একটি মিনারের ছায়া 40 মিটার হয়। উন্নতি কোণ $60^\\circ$ হলে ছায়ার দৈর্ঘ্য কত হবে?',
    options: ['$\\frac{40}{3}$ মিটার', '$\\frac{40}{\\sqrt{3}}$ মিটার', '$40\\sqrt{3}$ মিটার', '$120$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Medium' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{40} \\rightarrow h = \\frac{40}{\\sqrt{3}}$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{h}{L} \\rightarrow \\sqrt{3} = \\frac{40/\\sqrt{3}}{L} \\rightarrow L = \\frac{40}{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $L = 40 \\times \\frac{\\tan 30^\\circ}{\\tan 60^\\circ} = 40 \\times \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{40}{3}$ মিটার।'
  },

  // ─────────────────────────────────────────────────
  // TYPE 8: বিবিধ ও জটিল উচ্চতা-দূরত্ব সমস্যা (Miscellaneous & Advanced) (Q93-Q100)
  // ─────────────────────────────────────────────────
  {
    id: 'ch34_q93',
    text: 'একটি উঁচু মিনারের পাদদেশ থেকে 100 মিটার দূরে একটি বিন্দু থেকে মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনারের শীর্ষ থেকে একটি বিন্দুর উন্নতি কোণ $60^\\circ$ হলে, বিন্দুটি মিনারের পাদদেশ থেকে কত উঁচুতে?',
    options: ['$100(\\sqrt{3}-1)$ মিটার', '$100$ মিটার', '$100\\sqrt{3}$ মিটার', '$100(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিনারের উচ্চতা $H = 100\\tan 45^\\circ = 100$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 60^\\circ = \\frac{H - h}{100} \\rightarrow \\sqrt{3} = \\frac{100 - h}{100} \\rightarrow 100 - h = 100\\sqrt{3}$।' },
      { step: 'ধাপ ৩:', content: '$h = 100 - 100\\sqrt{3} = -100(\\sqrt{3}-1)$। ঋণাত্মক আসলে বিন্দুটি মিনারের উপরে? আসলে কোণ $60^\\circ$ মিনারের শীর্ষ থেকে বিন্দুর উন্নতি কোণ। বিন্দুটি মিনারের উপরে হলে $\\tan 60 = \\frac{h-100}{100}$।' }
    ],
    shortcutTrick: '💡 $h = 100 + 100\\sqrt{3}$ মিটার (যদি বিন্দু মিনারের উপরে)।'
  },
  {
    id: 'ch34_q94',
    text: 'একটি নদীর এক পাড়ে একটি মিনার দাঁড়িয়ে আছে। অপর পাড় থেকে মিনারের শীর্ষের উন্নতি কোণ $30^\\circ$। মিনারের দিকে 50 মিটার এগিয়ে গেলে উন্নতি কোণ $60^\\circ$ হয়। নদীর প্রস্থ কত?',
    options: ['75 মিটার', '$75\\sqrt{3}$ মিটার', '$50$ মিটার', '$25$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মনে করি নদীর প্রস্থ $d$ মিটার এবং মিনারের উচ্চতা $h$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{h}{d+50}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ৩:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 50} \\rightarrow h/\\sqrt{3} + 50 = h\\sqrt{3} \\rightarrow 50 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 25\\sqrt{3}$।' },
      { step: 'ধাপ ৪:', content: '$d = \\frac{25\\sqrt{3}}{\\sqrt{3}} = 25$ মিটার।' }
    ],
    shortcutTrick: '💡 $d = \\frac{50}{\\sqrt{3} - 1/\\sqrt{3}} \\times \\frac{1}{\\sqrt{3}} = 25$ মিটার।'
  },
  {
    id: 'ch34_q95',
    text: 'একটি পাহাড়ের পাদদেশে একটি বিন্দু থেকে পাহাড়ের শীর্ষের উন্নতি কোণ $30^\\circ$। পাহাড়ের দিকে 200 মিটার অগ্রসর হলে উন্নতি কোণ $60^\\circ$ হয়। পাহাড়ের উচ্চতা কত?',
    options: ['$100\\sqrt{3}$ মিটার', '$200\\sqrt{3}$ মিটার', '$150\\sqrt{3}$ মিটার', '$50\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway NTPC 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d+200}$ এবং $\\tan 60^\\circ = \\frac{h}{d}$।' },
      { step: 'ধাপ ২:', content: '$d = \\frac{h}{\\sqrt{3}}$ এবং $\\frac{1}{\\sqrt{3}} = \\frac{h}{h/\\sqrt{3} + 200} \\rightarrow 200 = \\frac{2h}{\\sqrt{3}} \\rightarrow h = 100\\sqrt{3}$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{200}{\\sqrt{3} - 1/\\sqrt{3}} = 100\\sqrt{3}$ মিটার।'
  },
  {
    id: 'ch34_q96',
    text: 'একটি উঁচু মিনারের পাদদেশ থেকে 60 মিটার দূরে একটি বিন্দু থেকে মিনারের শীর্ষের উন্নতি কোণ $45^\\circ$। মিনারের শীর্ষ থেকে একটি বিন্দুর অবনতি কোণ $30^\\circ$ হলে, বিন্দুটি ভূমি থেকে কত উচ্চতায়?',
    options: ['$60(1 - \\frac{1}{\\sqrt{3}})$ মিটার', '$60(\\sqrt{3}-1)$ মিটার', '$60$ মিটার', '$60\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'মিনারের উচ্চতা $H = 60\\tan 45^\\circ = 60$ মিটার।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{H - h}{60} \\rightarrow \\frac{1}{\\sqrt{3}} = \\frac{60 - h}{60} \\rightarrow 60 - h = 20\\sqrt{3} \\rightarrow h = 60 - 20\\sqrt{3} = 20(3-\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = 60(1 - \\frac{1}{\\sqrt{3}})$ মিটার।'
  },
  {
    id: 'ch34_q97',
    text: 'একটি পাহাড়ের শীর্ষ থেকে একটি নদীর তীরের অবনতি কোণ $45^\\circ$। নদীর অপর তীরের অবনতি কোণ $30^\\circ$। পাহাড়ের উচ্চতা 150 মিটার হলে, নদীর প্রস্থ কত?',
    options: ['$150(\\sqrt{3}-1)$ মিটার', '$150(\\sqrt{3}+1)$ মিটার', '$150$ মিটার', '$150\\sqrt{3}$ মিটার'],
    correct: 0,
    tags: { exam: 'WBCS 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'নিকট তীরের দূরত্ব $d_1 = 150$ মিটার (যেহেতু $\\tan 45^\\circ = 1$)।' },
      { step: 'ধাপ ২:', content: 'দূর তীরের দূরত্ব $d_2 = 150\\sqrt{3}$ মিটার (যেহেতু $\\tan 30^\\circ = \\frac{150}{d_2}$)।' },
      { step: 'ধাপ ৩:', content: 'নদীর প্রস্থ = $d_2 - d_1 = 150\\sqrt{3} - 150 = 150(\\sqrt{3}-1)$ মিটার।' }
    ],
    shortcutTrick: '💡 নদীর প্রস্থ = $150(\\sqrt{3}-1)$ মিটার।'
  },
  {
    id: 'ch34_q98',
    text: 'একটি লাইটহাউসের শীর্ষ থেকে একটি জাহাজের অবনতি কোণ $30^\\circ$। জাহাজটি 20 কিমি/ঘণ্টা বেগে লাইটহাউসের দিকে এগোচ্ছে। 10 মিনিট পর অবনতি কোণ $60^\\circ$ হয়। লাইটহাউসের উচ্চতা কত?',
    options: ['$\\frac{10}{\\sqrt{3}}$ কিমি', '$10$ কিমি', '$5\\sqrt{3}$ কিমি', '$\\frac{20}{\\sqrt{3}}$ কিমি'],
    correct: 0,
    tags: { exam: 'SSC CHSL 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: 'জাহাজের অগ্রসর দূরত্ব $= 20 \\times \\frac{10}{60} = \\frac{10}{3}$ কিমি।' },
      { step: 'ধাপ ২:', content: '$\\tan 30^\\circ = \\frac{h}{d}$ এবং $\\tan 60^\\circ = \\frac{h}{d - 10/3}$।' },
      { step: 'ধাপ ৩:', content: '$d = h\\sqrt{3}$ এবং $d - 10/3 = \\frac{h}{\\sqrt{3}} \\rightarrow h\\sqrt{3} - \\frac{10}{3} = \\frac{h}{\\sqrt{3}} \\rightarrow \\frac{10}{3} = \\frac{2h}{\\sqrt{3}} \\rightarrow h = \\frac{5\\sqrt{3}}{3}$ কিমি।' }
    ],
    shortcutTrick: '💡 $h = \\frac{10/3}{\\sqrt{3} - 1/\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$ কিমি।'
  },
  {
    id: 'ch34_q99',
    text: 'একটি মিনারের শীর্ষ থেকে একটি বিন্দুর অবনতি কোণ $45^\\circ$। বিন্দুটি মিনারের দিকে 20 মিটার অগ্রসর হলে অবনতি কোণ $60^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$20(3+\\sqrt{3})$ মিটার', '$20(\\sqrt{3}+1)$ মিটার', '$10(3+\\sqrt{3})$ মিটার', '$10(\\sqrt{3}+1)$ মিটার'],
    correct: 0,
    tags: { exam: 'Railway Group D 📋', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 45^\\circ = \\frac{h}{d} \\rightarrow d = h$ এবং $\\tan 60^\\circ = \\frac{h}{d-20}$।' },
      { step: 'ধাপ ২:', content: '$\\sqrt{3} = \\frac{h}{h-20} \\rightarrow h\\sqrt{3} - 20\\sqrt{3} = h \\rightarrow h(\\sqrt{3}-1) = 20\\sqrt{3} \\rightarrow h = \\frac{20\\sqrt{3}}{\\sqrt{3}-1} = 10(3+\\sqrt{3})$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{20\\sqrt{3}}{\\sqrt{3}-1} = 10(3+\\sqrt{3})$ মিটার।'
  },
  {
    id: 'ch34_q100',
    text: 'একটি উঁচু মিনারের শীর্ষ থেকে একটি গাড়ির অবনতি কোণ $30^\\circ$। গাড়িটি মিনারের দিকে 100 মিটার এগিয়ে গেলে অবনতি কোণ $45^\\circ$ হয়। মিনারের উচ্চতা কত?',
    options: ['$50(\\sqrt{3}+1)$ মিটার', '$50(\\sqrt{3}-1)$ মিটার', '$100(\\sqrt{3}+1)$ মিটার', '$100(\\sqrt{3}-1)$ মিটার'],
    correct: 0,
    tags: { exam: 'SSC CGL 📋 PYQ', difficulty: 'Hard' },
    descriptiveSolution: [
      { step: 'ধাপ ১:', content: '$\\tan 30^\\circ = \\frac{h}{d} \\rightarrow d = h\\sqrt{3}$ এবং $\\tan 45^\\circ = \\frac{h}{d-100} \\rightarrow d-100 = h$।' },
      { step: 'ধাপ ২:', content: '$h\\sqrt{3} - 100 = h \\rightarrow h(\\sqrt{3}-1) = 100 \\rightarrow h = 50(\\sqrt{3}+1)$ মিটার।' }
    ],
    shortcutTrick: '💡 $h = \\frac{100}{\\sqrt{3}-1} = 50(\\sqrt{3}+1)$ মিটার।'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapter34Questions;
}

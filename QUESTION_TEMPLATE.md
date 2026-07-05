# 📚 PROVAKAR MathPro Competitive — প্রশ্ন যোগ করার নির্দেশিকা

## 🎯 সম্পূর্ণ হয়েছে:
- ✅ Chapter 1: সংখ্যা পদ্ধতি — 100 প্রশ্ন
- ✅ Chapter 2: গ.সা.গু ও ল.সা.গু — 100 প্রশ্ন  
- ✅ Chapter 3: ভগ্নাংশ ও BODMAS — 100 প্রশ্ন

## 📝 নতুন Chapter এর প্রশ্ন যোগ করার ধাপসমূহ:

### ধাপ ১: নতুন ফাইল তৈরি করুন
নাম রাখুন: `questions-ch4.js`, `questions-ch5.js` ইত্যাদি

### ধাপ ২: ফাইলের কাঠামো
```javascript
// ═══════════════════════════════════════════════════════════════════════════
// CHAPTER X: অধ্যায়ের নাম (English Name) — 100 QUESTIONS
// Target Exams: WBCS, SSC CGL/CHSL, Railway NTPC/Group D, WB Gram Panchayat
// ═══════════════════════════════════════════════════════════════════════════

const chapterXQuestions = [
  // এখানে প্রশ্নগুলি যোগ করুন
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = chapterXQuestions;
}
```

### ধাপ ৩: প্রতিটি প্রশ্নের ফরম্যাট
```javascript
{
  id: 'ch4_q1',                    // ইউনিক আইডি (chX_qY format)
  text: 'এখানে বাংলায় প্রশ্ন লিখুন। Math এর জন্য $$...$$ ব্যবহার করুন।',
  options: ['অপশন A', 'অপশন B', 'অপশন C', 'অপশন D'],
  correct: 0,                      // সঠিক উত্তরের index (0=A, 1=B, 2=C, 3=D)
  tags: { 
    exam: 'WBCS 📋 PYQ',          // পরীক্ষার নাম ও ট্যাগ
    difficulty: 'Easy'             // Easy / Medium / Hard
  },
  descriptiveSolution: [
    { step: 'ধাপ ১:', content: 'প্রথম ধাপের বিস্তারিত ব্যাখ্যা...' },
    { step: 'ধাপ ২:', content: 'দ্বিতীয় ধাপের ব্যাখ্যা...' },
    { step: 'ধাপ ৩:', content: 'তৃতীয় ধাপ...' },
    { step: 'উত্তর:', content: '✅ সঠিক উত্তর: (A) ...' }
  ],
  shortcutTrick: '💡 শর্টকাট: এখানে 30 সেকেন্ডে সমাধানের দ্রুত উপায় লিখুন...'
}
```

### ধাপ ৪: index.html এ স্ক্রিপ্ট যোগ করুন
```html
<!-- Question Database Files -->
<script src="questions-ch1.js"></script>
<script src="questions-ch2.js"></script>
<script src="questions-ch3.js"></script>
<script src="questions-ch4.js"></script>  <!-- নতুন যোগ করুন -->
```

### ধাপ ৫: app.js এ loadExtendedQuestions() ফাংশনে যোগ করুন
```javascript
// Check if chapter4Questions exists
if (typeof chapter4Questions !== 'undefined' && Array.isArray(chapter4Questions)) {
  mathDatabase[4].questions = chapter4Questions;
  console.log('✅ Chapter 4: Loaded ' + chapter4Questions.length + ' questions');
}
```

---

## 📐 গণিত লেখার নিয়ম (KaTeX/LaTeX)

### ভগ্নাংশ:
```
$$\\frac{a}{b}$$        → a/b
$$\\frac{1}{2}$$        → ½
```

### বর্গমূল ও ঘাত:
```
$$\\sqrt{x}$$           → √x
$$\\sqrt[3]{x}$$        → ∛x
$$x^2$$                 → x²
$$x^{10}$$              → x¹⁰
```

### গ্রিক অক্ষর:
```
$$\\pi$$                → π
$$\\theta$$             → θ
$$\\alpha, \\beta$$     → α, β
```

### বিশেষ চিহ্ন:
```
$$\\times$$             → ×
$$\\div$$               → ÷
$$\\pm$$                → ±
$$\\neq$$               → ≠
$$\\leq$$               → ≤
$$\\geq$$               → ≥
```

### যোগফল ও সীমা:
```
$$\\sum_{i=1}^{n}$$     → Σ (i=1 to n)
$$\\prod_{i=1}^{n}$$    → ∏ (product)
$$\\lim_{x \\to 0}$$    → limit
```

### বন্ধনী:
```
$$\\left( \\right)$$    → বড় বন্ধনী ()
$$\\left[ \\right]$$    → বড় বন্ধনী []
$$\\left\\{ \\right\\}$$ → বড় বন্ধনী {}
```

---

## 🏷️ পরীক্ষার ট্যাগ তালিকা

| ট্যাগ | অর্থ |
|-------|------|
| `WBCS 📋 PYQ` | WBCS Previous Year Question |
| `WBCS 📋` | WBCS Pattern |
| `SSC CGL 📋 PYQ` | SSC CGL Previous Year |
| `SSC CGL 📋` | SSC CGL Pattern |
| `SSC CHSL 📋` | SSC CHSL Pattern |
| `Railway NTPC 📋` | Railway NTPC |
| `Railway Group D 📋` | Railway Group D |
| `WB Gram Panchayat 📋` | WB Gram Panchayat |
| `UPSC CSAT 📋` | UPSC CSAT |

---

## 📊 Difficulty Levels

| Level | মানদণ্ড |
|-------|--------|
| `Easy` | সরাসরি সূত্র প্রয়োগ, 30 সেকেন্ডে সমাধান |
| `Medium` | 2-3 ধাপ, logical thinking প্রয়োজন |
| `Hard` | Multiple concepts, 1+ মিনিট সময় লাগে |

---

## ✅ চেকলিস্ট (প্রতিটি Chapter এর জন্য)

- [ ] 100 টি প্রশ্ন (বিভিন্ন type cover করা)
- [ ] প্রতিটি প্রশ্নে descriptiveSolution
- [ ] প্রতিটি প্রশ্নে shortcutTrick
- [ ] Easy: ~40%, Medium: ~40%, Hard: ~20%
- [ ] বিভিন্ন পরীক্ষার ট্যাগ ব্যবহার
- [ ] Math সঠিকভাবে KaTeX format এ

---

## 🔄 দ্রুত পরীক্ষা

ফাইল তৈরির পর browser console এ চেক করুন:
```
✅ Chapter X: Loaded 100 questions
```

যদি কোনো error দেখায়, JavaScript syntax check করুন।

---

## 📚 বাকি Chapters (4-50) এর জন্য Template

Chapter 4: বর্গ, ঘন ও মূল → `questions-ch4.js`
Chapter 5: সরলীকরণ → `questions-ch5.js`
Chapter 6: শতকরা → `questions-ch6.js`
... এভাবে Chapter 50 পর্যন্ত

**প্রতিটি Chapter এ 100 টি করে প্রশ্ন যোগ করুন!**

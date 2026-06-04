# 🔒 Cybersecurity Command Center Portfolio
### by Abdelrahman Ashraf

---

## 🚀 تشغيل المشروع (Quick Start)

```bash
# 1. افتح الفولدر في VS Code
cd cyber-portfolio

# 2. ثبّت الـ dependencies
npm install

# 3. شغّل المشروع
npm start
```

المشروع هيفتح على: **http://localhost:3000**

---

## 🎯 الـ Features الموجودة

| Feature | Description |
|---------|-------------|
| 🖥️ Boot Screen | شاشة تحميل عند فتح الموقع |
| 🌧️ Matrix Background | خلفية Matrix متحركة |
| 👨‍💻 Hero + Terminal | Terminal متحرك بيكتب تلقائي |
| 📊 Live Stats | عدادات متحركة للمشاريع والـ Repos |
| 🔐 Projects as Reports | كل مشروع = تقرير أمني بـ severity |
| 📈 Skills Bars | Progress bars متحركة |
| 📅 Education Timeline | Timeline تفاعلي |
| 🏆 Certificates Cards | Cards للشهادات |
| 💻 Interactive Terminal | Terminal حقيقي تكتب فيه أوامر |
| 🔑 Secret Page | صفحة مخفية بـ easter eggs |
| 📧 Contact Form | نموذج تواصل |

---

## 💻 Terminal Commands

```
help        - قائمة الأوامر
whoami      - بياناتك
projects    - قائمة المشاريع
skills      - شجرة المهارات  
contact     - معلومات التواصل
resume      - تحميل CV
ls          - استعراض الملفات
matrix      - easter egg 🐇
sudo access - 🔓 فتح الصفحة السرية!
```

---

## ✏️ تعديل البيانات

| ملف | تعدّل فيه |
|-----|----------|
| `src/sections/HeroSection.js` | الاسم والتخصص |
| `src/sections/ProjectsSection.js` | المشاريع |
| `src/sections/SkillsSection.js` | المهارات والنسب |
| `src/sections/CertificatesSection.js` | الشهادات |
| `src/sections/EducationSection.js` | Timeline التعليم |
| `src/sections/ContactSection.js` | معلومات التواصل |
| `src/sections/StatsSection.js` | الأرقام (مشاريع، repos...) |

---

## 🛠️ Tech Stack

- **React 18** — UI Framework
- **CSS Variables** — Theming system
- **Canvas API** — Matrix background
- **Intersection Observer** — Scroll animations
- **Google Fonts** — Orbitron + Share Tech Mono + Rajdhani

---

## 🎨 الألوان

```css
--green:  #00ff9d  /* اللون الأساسي */
--cyan:   #00d4ff  /* تفاصيل */
--red:    #ff3860  /* تحذيرات */
--yellow: #ffd700  /* achievements */
--orange: #ff6b35  /* critical */
```

---

> Built with 💚 and too much coffee — Abdelrahman Ashraf 2026

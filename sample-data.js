const sampleDataHebrew = {
  lang: 'he',
  personal: {
    fullName: 'ישראל ישראלי',
    jobTitle: 'Senior Full-Stack Developer & Architect',
    email: 'israel.dev@example.com',
    phone: '054-1234567',
    location: 'תל אביב, ישראל',
    linkedin: 'linkedin.com/in/israel-israeli',
    github: 'github.com/israel-dev',
    website: 'israel-dev.io',
    showPhoto: false,
    photoUrl: ''
  },
  summary: 'מפתח Full-Stack בכיר עם מעל 7 שנות ניסיון בהקמת מערכות ענן מבוזרות, ארכיטקטורת Client-Side מתקדמת והובלת צוותי פיתוח. מתמחה ב-React, Node.js, TypeScript ו-AWS. ניסיון מוכח בשיפור ביצועי מערכת ב-50% והעברת אפליקציות מונוליתיות ל-Microservices.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'Senior Full-Stack Developer',
      company: 'TechCloud Innovations Ltd.',
      location: 'תל אביב',
      startDate: '2022',
      endDate: 'היום',
      current: true,
      description: '• הובלת צוות של 5 מפתחים בבניית פלטפורמת SaaS לניהול נתונים בזמן אמת ב-React ו-Node.js.\n• תכנון וביצוע מיגרציה מארכיטקטורת מונולית ל-Microservices ב-AWS ECS, אשר הפחיתה את סך עלויות הענן ב-30%.\n• שיפור ביצועי ה-Rendering בצד הלקוח והקטנת זמן הטעינה (Core Web Vitals) ב-45%.'
    },
    {
      id: 'exp-2',
      jobTitle: 'Frontend Team Lead & Developer',
      company: 'DataScale Systems',
      location: 'הרצליה',
      startDate: '2019',
      endDate: '2022',
      current: false,
      description: '• פיתוח Dashboard דינמי ב-TypeScript ו-React לניטור מיליוני אירועים ביום.\n• הטמעת Design System כוללת ששיפרה את מהירות פיתוח התכונות החדשות בצוות ב-25%.\n• חניכה והכשרה של 4 מפתחים ג׳וניורים והעברת סדנאות Code Review.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. במדעי המחשב',
      institution: 'הטכניון - מכון טכנולוגי לישראל',
      location: 'חיפה',
      startDate: '2015',
      endDate: '2019',
      details: 'סיום בהצטיינות (ממוצע 91). התמחות במערכות מבוזרות ובינה מלאכותית.'
    }
  ],
  skills: [
    {
      id: 'sk-1',
      category: 'שפות תכנות & Frontend',
      items: 'TypeScript, JavaScript (ES6+), React, Next.js, Redux Toolkit, HTML5/CSS3, TailwindCSS'
    },
    {
      id: 'sk-2',
      category: 'Backend & Cloud Services',
      items: 'Node.js, Express, Python, PostgreSQL, MongoDB, Redis, AWS (S3, Lambda, ECS), Docker, CI/CD'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'CV Craft — מחולל קורות חיים פרטי',
      link: 'github.com/israel-dev/cv-craft',
      tech: 'React, TypeScript, CSS Custom Properties',
      description: 'אפליקציית Client-Side ליצירת קורות חיים ברמת Print-Ready ללא שרת. מעל 1,500 משתמשים ב-GitHub.'
    }
  ],
  languages: 'עברית (שפת אם), אנגלית (ברמה מקצועית שוטפת)',
  certifications: 'AWS Certified Solutions Architect – Associate (2023)'
};

const sampleDataEnglish = {
  lang: 'en',
  personal: {
    fullName: 'Israel Israeli',
    jobTitle: 'Senior Full-Stack Developer & Architect',
    email: 'israel.dev@example.com',
    phone: '+972-54-1234567',
    location: 'Tel Aviv, Israel',
    linkedin: 'linkedin.com/in/israel-israeli',
    github: 'github.com/israel-dev',
    website: 'israel-dev.io',
    showPhoto: false,
    photoUrl: ''
  },
  summary: 'Senior Full-Stack Developer with over 7 years of experience in building distributed cloud systems, advanced client-side architecture, and leading software development teams. Specialized in React, Node.js, TypeScript, and AWS. Proven track record in improving system performance by 50% and migrating monolithic applications to Microservices.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'Senior Full-Stack Developer',
      company: 'TechCloud Innovations Ltd.',
      location: 'Tel Aviv',
      startDate: '2022',
      endDate: 'Present',
      current: true,
      description: '• Led a team of 5 developers in building a real-time SaaS data management platform using React and Node.js.\n• Architected and executed migration from monolith to microservices on AWS ECS, reducing overall cloud infrastructure costs by 30%.\n• Optimized client-side rendering performance and decreased Core Web Vitals page load time by 45%.'
    },
    {
      id: 'exp-2',
      jobTitle: 'Frontend Team Lead & Developer',
      company: 'DataScale Systems',
      location: 'Herzliya',
      startDate: '2019',
      endDate: '2022',
      current: false,
      description: '• Developed a dynamic monitoring dashboard in TypeScript and React processing millions of daily analytics events.\n• Implemented an enterprise Design System improving feature velocity across engineering teams by 25%.\n• Mentored 4 junior software engineers and conducted weekly Code Review workshops.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science',
      institution: 'Technion - Israel Institute of Technology',
      location: 'Haifa',
      startDate: '2015',
      endDate: '2019',
      details: 'Graduated Cum Laude (GPA 91). Specialization in Distributed Systems and Artificial Intelligence.'
    }
  ],
  skills: [
    {
      id: 'sk-1',
      category: 'Programming Languages & Frontend',
      items: 'TypeScript, JavaScript (ES6+), React, Next.js, Redux Toolkit, HTML5/CSS3, TailwindCSS'
    },
    {
      id: 'sk-2',
      category: 'Backend & Cloud Services',
      items: 'Node.js, Express, Python, PostgreSQL, MongoDB, Redis, AWS (S3, Lambda, ECS), Docker, CI/CD'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'CV Craft — Privacy-First CV Engine',
      link: 'github.com/israel-dev/cv-craft',
      tech: 'React, TypeScript, CSS Custom Properties',
      description: 'Client-side open-source application for creating print-ready resumes with zero server tracking. 1,500+ GitHub Stars.'
    }
  ],
  languages: 'Hebrew (Native), English (Fluent professional proficiency)',
  certifications: 'AWS Certified Solutions Architect – Associate (2023)'
};

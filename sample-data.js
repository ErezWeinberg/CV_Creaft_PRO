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
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Full-Stack Engineer & Architect',
    email: 'alex.morgan@techmail.io',
    phone: '+1 (555) 019-2834',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alex-morgan-dev',
    github: 'github.com/alexmorgan-code',
    website: 'alexmorgan.dev',
    showPhoto: false,
    photoUrl: ''
  },
  summary: 'Results-driven Senior Full-Stack Engineer with 7+ years of experience designing and scaling distributed cloud platforms. Specialized in React, TypeScript, Node.js, and AWS microservices. Proven track record of boosting system efficiency by 45% and leading cross-functional engineering teams.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'Senior Full-Stack Engineer',
      company: 'Apex Cloud Solutions',
      location: 'San Francisco, CA',
      startDate: '2022',
      endDate: 'Present',
      current: true,
      description: '• Architected a real-time analytics dashboard servicing 2M+ daily active users utilizing React, TypeScript, and WebSockets.\n• Led cloud infrastructure migration to AWS ECS & Lambda, reducing latency by 40% and cloud spend by $60K annually.\n• Mentored 6 software engineers and established automated CI/CD code quality pipelines.'
    },
    {
      id: 'exp-2',
      jobTitle: 'Software Engineer',
      company: 'Veloce Data Systems',
      location: 'Palo Alto, CA',
      startDate: '2019',
      endDate: '2022',
      current: false,
      description: '• Developed high-throughput RESTful & GraphQL APIs in Node.js and PostgreSQL handling 5,000 requests/sec.\n• Designed modular UI component library adopted across 4 internal enterprise applications.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'B.S. in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2015',
      endDate: '2019',
      details: 'Graduated Magna Cum Laude (GPA 3.85/4.0). Focus on Distributed Systems and Software Architecture.'
    }
  ],
  skills: [
    {
      id: 'sk-1',
      category: 'Languages & Frontend',
      items: 'TypeScript, JavaScript (ESNext), React, Next.js, HTML5/CSS3, TailwindCSS, WebSockets'
    },
    {
      id: 'sk-2',
      category: 'Backend, Databases & DevOps',
      items: 'Node.js, Express, Python, PostgreSQL, Redis, MongoDB, AWS (Lambda, S3, ECS), Docker, Git, CI/CD'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Local-First CV Creator Engine',
      link: 'github.com/alexmorgan-code/cv-engine',
      tech: 'React, Web Canvas API, CSS Print Specs',
      description: 'Open-source privacy-first resume builder with client-side PDF export and zero server tracking. 2,000+ GitHub Stars.'
    }
  ],
  languages: 'English (Native), Spanish (Professional proficiency)',
  certifications: 'AWS Certified Solutions Architect (2023), Certified Kubernetes Application Developer (CKAD)'
};

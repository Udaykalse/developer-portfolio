// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaAws,
//   FaDocker
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTypescript,
//   SiJavascript,
//   SiTailwindcss,
//   SiExpress,
//   SiPostgresql,
//   SiMongodb,
//   SiPython,
//   SiFigma,
//   SiJest
// } from "react-icons/si";

// interface Education {
//   institution: string;
//   degree: string;
//   period: string;
//   location?: string;
//   grade?: string;
//   achievements: string[]; 
// }

// interface Experience {
//   company: string;
//   position: string;
//   period: string;
//   location?: string;
//   description: string;
//   technologies: string[];
//   achievements: string[];
// }

// export const portfolioData = {
//   personal: {
//     name: "Udaysinh Kalse",
//     title: "Full Stack Developer",
//     email: "udaykalse123@gmail.com",
//     phone: "+91 932-599-9657",
//     location: "Latur, Maharashtra, India",
//     about:
//       "Motivated Full Stack Developer with hands-on experience in React.js, Next.js, and Node.js. Completed a 6-month internship as a Frontend Developer, building responsive web applications and optimizing user interfaces. Passionate about creating clean, scalable, and interactive web solutions.",
//     avatar: "/images/Banner.jpeg"
//   },

//   social: [
//     {
//       name: "GitHub",
//       url: "https://github.com/Udaykalse",
//       icon: "github"
//     },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/in/udaykalse12/",
//       icon: "linkedin"
//     },
//     {
//       name: "Twitter / X",
//       url: "https://x.com/sarcasticuk_",
//       icon: "twitter"
//     }
//   ],

  

//   github: {
//     username: "Udaykalse",
//     contributions: 303,
//     profileUrl: "https://github.com/Udaykalse"
//   },
//   skills: [
//     {
//       category: "Frontend",
//       items: [
//         { name: "React", icon: FaReact },
//         { name: "Next.js", icon: SiNextdotjs },
//         { name: "TypeScript", icon: SiTypescript },
//         { name: "JavaScript", icon: SiJavascript },
//         { name: "Tailwind CSS", icon: SiTailwindcss }
//       ]
//     },
//     {
//       category: "Backend",
//       items: [
//         { name: "Node.js", icon: FaNodeJs },
//         { name: "Express", icon: SiExpress },
//         { name: "Python", icon: SiPython },
//         { name: "PostgreSQL", icon: SiPostgresql },
//         { name: "MongoDB", icon: SiMongodb }
//       ]
//     },
//     {
//       category: "Tools",
//       items: [
//         { name: "Git", icon: FaGitAlt },
//         { name: "Docker", icon: FaDocker },
//         { name: "AWS", icon: FaAws },
//         { name: "Figma", icon: SiFigma },
//         { name: "Jest", icon: SiJest }
//       ]
//     }
//   ],

//   projects: [
//     {
//       title: "Portfolio Website",
//       description:
//         "Built a personal portfolio website using React.js and Tailwind CSS, showcasing projects and skills. Deployed on Vercel.",
//       image: "/images/project-portfolio.jpg",
//       technologies: ["React.js", "Tailwind CSS", "Vercel"],
//       github: "https://github.com/uday-kalse/portfolio",
//       live: "https://udaykalse-portfolio.vercel.app"
//     },
//     {
//       title: "Automated Job Application Sender",
//       description:
//         "Developed a script-based solution to automate job applications by parsing job listings and submitting pre-filled forms.",
//       image: "/images/project-jobapp.jpg",
//       technologies: ["Node.js", "Automation", "Scripting"],
//       github: "https://github.com/uday-kalse/automated-job-sender"
//     },
//     {
//       title: "Email Extractor",
//       description:
//         "Built a Node.js tool to extract email addresses from PDF and DOCX files for efficient contact retrieval.",
//       image: "/images/project-email.jpg",
//       technologies: ["Node.js", "File System", "Regex"],
//       github: "https://github.com/uday-kalse/email-extractor"
//     },
//     {
//       title: "Contact Manager",
//       description:
//         "Developed a contact management app using Next.js with CRUD functionality, RESTful APIs, and Docker containerization.",
//       image: "/images/project-contact.jpg",
//       technologies: ["Next.js", "REST API", "Docker"],
//       github: "https://github.com/uday-kalse/contact-manager"
//     },
//     {
//       title: "URL Shortener Application",
//       description:
//         "Created a URL shortener with React.js, TypeScript, and Node.js, supporting custom aliases and analytics tracking.",
//       image: "/images/project-urlshortener.jpg",
//       technologies: ["React.js", "TypeScript", "Node.js"],
//       github: "https://github.com/uday-kalse/url-shortener"
//     },
//     {
//       title: "Habit Track",
//       description:
//         "Built a habit tracking app using React and Redux to monitor daily habits with real-time updates. Containerized with Docker.",
//       image: "/images/project-habit.jpg",
//       technologies: ["React", "Redux", "Docker"],
//       github: "https://github.com/uday-kalse/habit-track",
//       live: "https://habittrack.vercel.app"
//     },
//     {
//       title: "Book-Shop (MERN)",
//       description:
//         "Developed a full-stack Book Shop app using MERN Stack. Styled with Tailwind CSS and integrated Notistack, React Hooks, and React Hook Form.",
//       image: "/images/project-bookshop.jpg",
//       technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
//       github: "https://github.com/uday-kalse/bookshop-frontend"
//     }
//   ],

  

//   experience: [
//     {
//       company: "Ricoz",
//       position: "Frontend Developer Intern (React.js)",
//       period: "Oct 2023 – Mar 2024",
//       location: "Pune, Maharashtra, India",
//       description:
//         "Worked on developing responsive and interactive web interfaces using React.js. Collaborated with the design team to implement user-friendly UI components and optimized app performance for better user experience.",
//       technologies: ["Reacachievementst.js", "JavaScript (ES6)", "Git", "GitHub", "CSS3"],
//       achievements: [
//         "Developed multiple reusable UI components improving development efficiency by 25%",
//         "Enhanced website performance and responsiveness for mobile and desktop users",
//         "Collaborated with a team using Git version control ensuring clean commits and project consistency",
//         "Strengthened core JavaScript and React fundamentals through real-world project implementation"
//       ]
//     }
//   ],

//   education: [
//     {
//       institution: "Swami Ramanand Teerth Marathwada University, Nanded",
//       degree: "Master of Science in Computer Science",
//       period: "2023 – 2025",
//       location: "Latur, Maharashtra ",
//       grade: "CGPA: 8.7",
//       achievements:""
//     },
//     {
//       institution: "Swami Ramanand Teerth Marathwada University, Nanded",
//       degree: "Bachelor of Science in Computer Science (CGPA: 8.7)",
//       period: "2019 – 2022",
//       location: "Latur, Maharashtra ",
//       grade: "CGPA: 6.50",
//       achievements:""
//     }
//   ]
// };


import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiFigma,
  SiJest
} from "react-icons/si";

interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  grade?: string;
  achievements: string[]; 
}

interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

// Define the data first, then calculate stats
const baseData = {
  personal: {
    name: "Udaysinh Kalse",
    title: "Full Stack Developer",
    email: "udaykalse123@gmail.com",
    phone: "+91 932-599-9657",
    location: "Latur, Maharashtra, India",
    about:
      "Motivated Full Stack Developer with hands-on experience in React.js, Next.js, and Node.js. Completed a 6-month internship as a Frontend Developer, building responsive web applications and optimizing user interfaces. Passionate about creating clean, scalable, and interactive web solutions.",
    avatar: "/images/Banner.jpeg"
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/Udaykalse",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/udaykalse12/",
      icon: "linkedin"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/sarcasticuk_",
      icon: "twitter"
    }
  ],

  github: {
    username: "Udaykalse",
    contributions: 303,
    profileUrl: "https://github.com/Udaykalse"
  },
  
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "Python", icon: SiPython },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
        { name: "Figma", icon: SiFigma },
        { name: "Jest", icon: SiJest }
      ]
    }
  ],

  // projects: [
  //   {
  //     title: "Portfolio Website",
  //     description:
  //       "Built a personal portfolio website using React.js and Tailwind CSS, showcasing projects and skills. Deployed on Vercel.",
  //     image: "/images/project-portfolio.jpg",
  //     technologies: ["React.js", "Tailwind CSS", "Vercel"],
  //     github: "https://github.com/uday-kalse/portfolio",
  //     live: "https://udaykalse-portfolio.vercel.app"
  //   },
  //   {
  //     title: "Automated Job Application Sender",
  //     description:
  //       "Developed a script-based solution to automate job applications by parsing job listings and submitting pre-filled forms.",
  //     image: "/images/project-jobapp.jpg",
  //     technologies: ["Node.js", "Automation", "Scripting"],
  //     github: "https://github.com/uday-kalse/automated-job-sender"
  //   },
  //   {
  //     title: "Email Extractor",
  //     description:
  //       "Built a Node.js tool to extract email addresses from PDF and DOCX files for efficient contact retrieval.",
  //     image: "/images/project-email.jpg",
  //     technologies: ["Node.js", "File System", "Regex"],
  //     github: "https://github.com/uday-kalse/email-extractor"
  //   },
  //   {
  //     title: "Contact Manager",
  //     description:
  //       "Developed a contact management app using Next.js with CRUD functionality, RESTful APIs, and Docker containerization.",
  //     image: "/images/project-contact.jpg",
  //     technologies: ["Next.js", "REST API", "Docker"],
  //     github: "https://github.com/uday-kalse/contact-manager"
  //   },
  //   {
  //     title: "URL Shortener Application",
  //     description:
  //       "Created a URL shortener with React.js, TypeScript, and Node.js, supporting custom aliases and analytics tracking.",
  //     image: "/images/project-urlshortener.jpg",
  //     technologies: ["React.js", "TypeScript", "Node.js"],
  //     github: "https://github.com/uday-kalse/url-shortener"
  //   },
  //   {
  //     title: "Habit Track",
  //     description:
  //       "Built a habit tracking app using React and Redux to monitor daily habits with real-time updates. Containerized with Docker.",
  //     image: "/images/project-habit.jpg",
  //     technologies: ["React", "Redux", "Docker"],
  //     github: "https://github.com/uday-kalse/habit-track",
  //     live: "https://habittrack.vercel.app"
  //   },
  //   {
  //     title: "Book-Shop (MERN)",
  //     description:
  //       "Developed a full-stack Book Shop app using MERN Stack. Styled with Tailwind CSS and integrated Notistack, React Hooks, and React Hook Form.",
  //     image: "/images/project-bookshop.jpg",
  //     technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //     github: "https://github.com/uday-kalse/bookshop-frontend"
  //   }
  // ],

  projects: [
  {
    title: "Portfolio Website",
    description:
      "Built a personal portfolio website using React.js and Tailwind CSS, showcasing projects and skills. Deployed on Vercel.",
    image: "/images/project-portfolio.jpg",
    technologies: ["React.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/uday-kalse/portfolio",
    live: "https://udaykalse-portfolio.vercel.app"
  },
  {
    title: "Automated Job Application Sender",
    description:
      "Developed a script-based solution to automate job applications by parsing job listings and submitting pre-filled forms.",
    image: "/images/project-jobapp.jpg",
    technologies: ["Node.js", "Automation", "Scripting"],
    github: "https://github.com/uday-kalse/automated-job-sender",
    live: "https://udaykalse-portfolio.vercel.app"
  },
  {
    title: "Email Extractor",
    description:
      "Built a Node.js tool to extract email addresses from PDF and DOCX files for efficient contact retrieval.",
    image: "/images/project-email.jpg",
    technologies: ["Node.js", "File System", "Regex"],
    github: "https://github.com/uday-kalse/email-extractor"  ,
      live: "https://udaykalse-portfolio.vercel.app"

  },
  {
    title: "Contact Manager",
    description:
      "Developed a contact management app using Next.js with CRUD functionality, RESTful APIs, and Docker containerization.",
    image: "/images/project-contact.jpg",
    technologies: ["Next.js", "REST API", "Docker"],
    github: "https://github.com/uday-kalse/contact-manager"
  },
  {
    title: "URL Shortener Application",
    description:
      "Created a URL shortener with React.js, TypeScript, and Node.js, supporting custom aliases and analytics tracking.",
    image: "/images/project-urlshortener.jpg",
    technologies: ["React.js", "TypeScript", "Node.js"],
    github: "https://github.com/uday-kalse/url-shortener"
  },
  {
    title: "Habit Track",
    description:
      "Built a habit tracking app using React and Redux to monitor daily habits with real-time updates. Containerized with Docker.",
    image: "/images/project-habit.jpg",
    technologies: ["React", "Redux", "Docker"],
    github: "https://github.com/uday-kalse/habit-track",
    live: "https://habittrack.vercel.app"
  },
  {
    title: "Book-Shop (MERN)",
    description:
      "Developed a full-stack Book Shop app using MERN Stack. Styled with Tailwind CSS and integrated Notistack, React Hooks, and React Hook Form.",
    image: "/images/project-bookshop.jpg",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/uday-kalse/bookshop-frontend"
  },

  // --- Placeholder/Demo Projects (8–50) ---
  ...Array.from({ length: 54 }, (_, i) => ({
    title: `Demo Project ${i + 8}`,
    description: `This is a placeholder description for Demo Project ${i + 8}. It showcases React, Node.js, and modern web development skills.`,
    image: `/images/demo-project-${i + 8}.jpg`,
    technologies: ["React.js", "Node.js", "Tailwind CSS"],
    github: `https://github.com/uday-kalse/demo-project-${i + 8}`,
    live: `https://demo${i + 8}.vercel.app`
  }))
]
,

  experience: [
    {
      company: "Ricoz",
      position: "Frontend Developer Intern (React.js)",
      period: "Oct 2023 – Mar 2024",
      location: "Pune, Maharashtra, India",
      description:
        "Worked on developing responsive and interactive web interfaces using React.js. Collaborated with the design team to implement user-friendly UI components and optimized app performance for better user experience.",
      technologies: ["React.js", "JavaScript (ES6)", "Git", "GitHub", "CSS3"],
      achievements: [
        "Developed multiple reusable UI components improving development efficiency by 25%",
        "Enhanced website performance and responsiveness for mobile and desktop users",
        "Collaborated with a team using Git version control ensuring clean commits and project consistency",
        "Strengthened core JavaScript and React fundamentals through real-world project implementation"
      ]
    }
  ],

  education: [
    {
      institution: "Swami Ramanand Teerth Marathwada University, Nanded",
      degree: "Master of Science in Computer Science",
      period: "2023 – 2025",
      location: "Latur, Maharashtra",
      grade: "CGPA: 8.7",
      achievements: [""]
    },
    {
      institution: "Swami Ramanand Teerth Marathwada University, Nanded",
      degree: "Bachelor of Science in Computer Science",
      period: "2019 – 2022",
      location: "Latur, Maharashtra",
      grade: "CGPA: 6.50",
      achievements: [""]
    }
  ]
};

const stats = {
  projects: `${baseData.projects.length}+`,
  experience: "0.6", // Based on your internship
  technologies: (() => {
    const allTechnologies = baseData.skills.flatMap(category => 
      category.items.map(item => item.name)
    );
    const uniqueCount = new Set(allTechnologies).size;
    return `${uniqueCount}+`;
  })()
};

// Combine everything into the final portfolioData
export const portfolioData = {
  ...baseData,
  stats
};
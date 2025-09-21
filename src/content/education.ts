import { cert } from './certifications'

export const education = [
  {
    title: "Google UI/UX Certification & Badge - Coursera",
    certs: [
      { title: "Foundations of user experience design", date: "2022/9", link: cert.google.foundations },
      { title: "Start the UX Design Process: Empathize, Define, and Ideate", date: "2022/10", link: cert.google.empathizeDefineIdeate },
      { title: "Build Wireframes and Low-Fidelity Prototypes", date: "2022/10", link: cert.google.wireframesLowFidelity },
      { title: "Conduct UX Research and Test Early Concepts", date: "2022/11", link: cert.google.uxResearchTesting },
      { title: "Create High-Fidelity Designs and Prototypes in Figma", date: "2022/11", link: cert.google.highFidelityFigma },
      { title: "Build Dynamic User Interfaces", date: "2022/12", link: cert.google.dynamicui },
      { title: "Design a User Experience for Social Good", date: "2022/12", link: cert.google.socialGood },
      { title: "Google UX design professional certificate", date: "2022/12", link: cert.google.socialGood },
      { title: "Google UX Badge", date: "2022/12", link: cert.google.googlebadge },
    ],
  },
    {
    title: "Meta Frontend Developer Certification - Coursera",
    certs: [
      { title: "Introduction to frontend", date: "2022/9", link: cert.meta.intro },
      { title: "Html and css in depth", date: "2022/9", link: cert.meta.htmlcss },
      { title: "Programming with javascript", date: "2022/9", link: cert.meta.javascript },
      { title: "Version control", date: "2022/9", link: cert.meta.versionControl },
      { title: "React basics", date: "2022/10", link: cert.meta.reactBasics },
    ],
  },
  {
    title: "Front-end web development (ITP)",
    institution: "Information Technology Institute (ITI)",
    dateLink: { date: "2021/8 - 2021/12", link: cert.iti.frontendWebDev },
  },
  {
    title: "CS50 Introduction to Computer Science",
    institution: "Harvard University - EDX",
    dateLink: { date: "2021/5 - 2021/9", link: cert.harvard.cs50 },
  },
  {
    title: "Egypt Future Work is Digital (EGFWD) - Udacity",
    certs: [
      { title: "Advanced web development track", date: "2021/10", link: cert.egfwd.advanced },
      { title: "Professional web development track", date: "2021/7", link: cert.egfwd.professional },
      { title: "Challenger web development track", date: "2021/3", link: cert.egfwd.challenger },
    ],
  },
  {
    title: "Bachelor of Engineering",
    institution: "Faculty of Engineering | Alexandria University",
    duration: "2014 - 2019",
  },
]
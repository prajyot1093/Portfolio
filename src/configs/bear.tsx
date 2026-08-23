import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hi! I'm Prajyot Punde, CSE undergraduate at YCCE Nagpur..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-ri:briefcase-line",
        excerpt: "Cyber Security Intern at VOIS (Vodafone Intelligent Solutions)..."
      },
      {
        id: "skills",
        title: "Technical Skills",
        file: "markdown/skills.md",
        icon: "i-ri:code-s-slash-line",
        excerpt: "Languages, Web Dev, Web3/Blockchain, Cybersecurity, Databases..."
      },
      {
        id: "github-stats",
        title: "GitHub Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Live GitHub activity metrics and top languages for @prajyot1093..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Simulated macOS desktop portfolio built with React & TypeScript..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "nano-chat",
        title: "Nano-Chat",
        file: "markdown/nano-chat.md",
        icon: "i-ri:chat-smile-2-line",
        excerpt: "Real-time messaging platform using MERN Stack, Socket.IO, JWT & Cloudinary...",
        link: "https://nano-chat-1.onrender.com/"
      },
      {
        id: "smart-exam-seating",
        title: "Smart Exam Seating",
        file: "markdown/smart-exam-seating.md",
        icon: "i-ri:layout-grid-line",
        excerpt: "Intelligent seating allocation system using Greedy & Backtracking algorithms...",
        link: "https://project-yjq9xtpcxg2ncesscprtgw.streamlit.app/"
      },
      {
        id: "nbfc-fraud-detection",
        title: "NBFC Fraud Detection",
        file: "markdown/nbfc-fraud-detection.md",
        icon: "i-ri:shield-check-line",
        excerpt: "Privacy-preserving loan stacking detection with React, Django, ML & Solidity...",
        link: "https://github.com/prajyot1093/YCCE_Team_NXT_LVL"
      },
      {
        id: "network-port-analyzer",
        title: "Network Port Analyzer",
        file: "markdown/network-port-analyzer.md",
        icon: "i-ri:radar-line",
        excerpt: "Automated Nmap GUI for network vulnerability scanning & reconnaissance...",
        link: "https://nmapgui-znrll2xgrrymmx5cbwwoag.streamlit.app/"
      }
    ]
  }
];

export default bear;

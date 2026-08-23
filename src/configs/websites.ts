import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS & Projects",
    sites: [
      {
        id: "my-github",
        title: "GitHub",
        img: "img/sites/github.svg",
        link: "https://github.com/prajyot1093"
      },
      {
        id: "nano-chat",
        title: "Nano-Chat",
        img: "img/sites/hacker.svg",
        link: "https://nano-chat-1.onrender.com/"
      },
      {
        id: "smart-exam",
        title: "Exam Seating",
        img: "img/sites/leetcode.svg",
        link: "https://project-yjq9xtpcxg2ncesscprtgw.streamlit.app/"
      },
      {
        id: "nmap-gui",
        title: "Nmap GUI",
        img: "img/sites/arxiv.png",
        link: "https://nmapgui-znrll2xgrrymmx5cbwwoag.streamlit.app/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:prajyot1093@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "GitHub",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "arxiv",
        title: "arXiv",
        img: "img/sites/arxiv.png",
        link: "https://arxiv.org/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;

import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I&apos;m <span className="text-yellow-300 font-semibold">Prajyot Punde</span>! I am a Computer Science & Engineering undergraduate at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur (Graduation: Aug 2028).
            </div>
            <div className="mt-1 text-gray-300">
              I specialize in Full-Stack Web Development, Web3 & Blockchain, Cybersecurity, and AI/ML.
            </div>
          </div>
        )
      },
      {
        id: "about-experience",
        title: "experience.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-green-300 font-semibold">
              Cyber Security Intern | VOIS (Vodafone Intelligent Solutions)
            </div>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Developed a Network Port Analyzer using Nmap to identify open ports, detect running services, and support network security assessments.</li>
              <li>Automated network scanning and generated structured reports to streamline reconnaissance and vulnerability analysis.</li>
              <li>Strengthened practical understanding of network security, TCP/IP, port scanning, and cybersecurity fundamentals.</li>
            </ul>
          </div>
        )
      },
      {
        id: "about-skills",
        title: "skills.txt",
        type: "file",
        content: (
          <div className="py-1 space-y-1">
            <div><span className="text-blue-300 font-semibold">Languages:</span> C/C++, Python, Java, JavaScript, TypeScript, Solidity</div>
            <div><span className="text-blue-300 font-semibold">Frontend:</span> React.js, HTML5, CSS3, Tailwind CSS, DaisyUI, Zustand</div>
            <div><span className="text-blue-300 font-semibold">Backend:</span> Node.js, Express.js, Django REST Framework, Socket.IO, JWT, Bcrypt</div>
            <div><span className="text-blue-300 font-semibold">Databases:</span> MongoDB, PostgreSQL, MySQL</div>
            <div><span className="text-blue-300 font-semibold">Web3/Blockchain:</span> Ethereum, Sepolia Testnet, Solidity, Remix IDE, Alchemy RPC, Ethers.js</div>
            <div><span className="text-blue-300 font-semibold">Tools & Deployment:</span> Git, GitHub, VS Code, Postman, Streamlit, Render, Netlify, Firebase</div>
          </div>
        )
      },
      {
        id: "about-projects",
        title: "projects.txt",
        type: "file",
        content: (
          <div className="py-1 space-y-2">
            <div>
              <span className="text-yellow-300 font-semibold">1. Nano-Chat (Real-Time Chat App):</span> MERN Stack, Socket.IO, JWT, DaisyUI
              <br />
              <span className="text-gray-400">Live: </span>
              <a className="text-blue-300 underline" href="https://nano-chat-1.onrender.com/" target="_blank" rel="noreferrer">
                https://nano-chat-1.onrender.com/
              </a>
            </div>
            <div>
              <span className="text-yellow-300 font-semibold">2. Smart Exam Seating Arrangement System:</span> Python, Streamlit, Greedy & Backtracking
              <br />
              <span className="text-gray-400">Live: </span>
              <a className="text-blue-300 underline" href="https://project-yjq9xtpcxg2ncesscprtgw.streamlit.app/" target="_blank" rel="noreferrer">
                https://project-yjq9xtpcxg2ncesscprtgw.streamlit.app/
              </a>
            </div>
            <div>
              <span className="text-yellow-300 font-semibold">3. NBFC Loan Stacking Fraud Detection System:</span> React, Django REST, ML, Federated Learning, Solidity
              <br />
              <span className="text-gray-400">GitHub: </span>
              <a className="text-blue-300 underline" href="https://github.com/prajyot1093/YCCE_Team_NXT_LVL" target="_blank" rel="noreferrer">
                https://github.com/prajyot1093/YCCE_Team_NXT_LVL
              </a>
            </div>
            <div>
              <span className="text-yellow-300 font-semibold">4. Network Port Analyzer (Nmap GUI):</span> Python, Streamlit, Nmap, Security Reconnaissance
              <br />
              <span className="text-gray-400">Live: </span>
              <a className="text-blue-300 underline" href="https://nmapgui-znrll2xgrrymmx5cbwwoag.streamlit.app/" target="_blank" rel="noreferrer">
                https://nmapgui-znrll2xgrrymmx5cbwwoag.streamlit.app/
              </a>
            </div>
          </div>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:prajyot1093@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                prajyot1093@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                className="text-blue-300"
                href="tel:+918668346117"
              >
                +91 8668346117
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/prajyot1093"
                target="_blank"
                rel="noreferrer"
              >
                @prajyot1093
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1 font-mono">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">learning_and_building</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-green-400 ml-9">skills</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span className="text-blue-400 ml-9">impact</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;

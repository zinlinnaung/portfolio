import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiDownload,
} from "react-icons/fi";
import { MdOutlineWork, MdOutlineSchool } from "react-icons/md";
import { FaUnity, FaReact, FaNodeJs } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section className="h-[79vh] overflow-y-auto text-white scrollbar-thin-accent">
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold mb-9 text-accent text-center ">
          Resume
        </h2>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 ">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Zin Linn Aung</h3>
            <p className="text-white/80">
              Passionate Full-Stack Developer with 3+ years of experience in web
              apps and game development. Proficient in React, Next.js, Node.js,
              and Unity (C#).
            </p>
          </div>
          <div className="flex flex-col gap-2 text-white/80 items-start mx-13">
            <div className="flex items-center gap-2">
              <FiMail /> zinlinaung4905@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <FiPhone /> +959 447032756
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin /> North Okkalapa, Yangon
            </div>
            <div className="flex items-center gap-2">
              <FiGithub />
              <a
                href="https://github.com/zinlinnaung"
                target="_blank"
                className="hover:text-accent transition"
              >
                github.com/zinlinnaung
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h4 className="text-2xl text-accent font-semibold mb-4 flex items-center gap-2">
            <MdOutlineWork className="text-accent" /> Experience
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-xl">
                Bagan Innovation Technology (2024 – Present)
              </h5>
              <p className="text-white/80">Full Stack Developer</p>
              <ul className="list-disc list-inside text-white/60">
                <li>Develop frontend with React.js and backend with NestJS.</li>
                <li>
                  Work with REST APIs, Agile teams, and perform code reviews.
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-xl">
                Blue Planet Co. Ltd (2023 – 2024)
              </h5>
              <p className="text-white/80">Junior Web Developer</p>
              <ul className="list-disc list-inside text-white/60">
                <li>Built responsive frontend using React.js.</li>
                <li>Collaborated with backend developers and designers.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h4 className="text-2xl text-accent font-semibold mb-4 flex items-center gap-2">
            <MdOutlineSchool className="text-accent" /> Education
          </h4>
          <div>
            <h5 className="font-semibold text-xl">KBTC University</h5>
            <p className="text-white/80">
              Diploma in Computing NCC Level 4 (2020–2022)
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h4 className="text-2xl text-accent font-semibold mb-4">Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white/80">
            <span className="flex items-center gap-2">
              <FaReact /> React.js
            </span>
            <span className="flex items-center gap-2">
              <FaNodeJs /> Node.js / NestJS
            </span>
            <span className="flex items-center gap-2">
              <FaUnity /> Unity (C#)
            </span>
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>MySQL / Prisma</span>
            <span>EC2, Nginx, HTTPS</span>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h4 className="text-2xl text-accent font-semibold mb-4">Projects</h4>
          <ul className="space-y-4 text-white/80">
            <li>
              <strong>Fox’s Tail – 2D Platformer Game:</strong> Built using
              Unity & C#. Solo-developed gameplay, enemy AI, and level design.
              <a
                className="text-accent ml-2"
                href="https://prototype-studio.itch.io/foxs-tail-web"
                target="_blank"
              >
                Play
              </a>
            </li>
            <li>
              <strong>Citizens Pay Digital Campaign:</strong> Spin wheel
              campaign using React.js + NestJS. Admin dashboard with draggable
              prize system and email alerts.
            </li>
            <li>
              <strong>Dugro Messenger Chatbot:</strong> Built with NestJS and
              integrated admin dashboard (React + MUI).
            </li>
          </ul>
        </div>

        {/* Download CV */}
        <div className="text-center">
          <a href="/ZinLinnAung_CV.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

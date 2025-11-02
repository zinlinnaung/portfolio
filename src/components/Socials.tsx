import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  containeryStyles: string;
  iconStyles: string;
}
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];
const Socials: React.FC<SocialsProps> = ({ containeryStyles, iconStyles }) => {
  return (
    <div className={containeryStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

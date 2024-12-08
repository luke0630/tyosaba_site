import React from "react";
import "./Footer.css";
import SNS from '../SNS';
import getImg from "../Components/GetImg";

export const SNSLink: React.FC<{ sns: SNS }> = ({ sns }) => {
  let img;
  switch(sns) {
    case SNS.Discord:
      img = <img src={getImg("discord-logo2.webp")} className="discord" alt="discord"></img>;
      break;
    case SNS.X:
      img = <img src={getImg("x-logo-white.webp")} className="x" alt="github"></img>;
      break;
    case SNS.Github:
      img = <img src={getImg("github-mark-white.webp")} className="github" alt="github"></img>;
      break;
    case SNS.Youtube:
      img = <img src={getImg("youtube_social_icon_white.webp")} className="youtube" alt="youtube"></img>;
      break;
  }

  return(
    <a href={sns} target="_blank" rel="noopener noreferrer" aria-label="sns-link">{img}</a>
  );
};

export const Link = ({ url, content }: { url: string; content: string }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">{content}</a>
    )
}

const Footer = ({}) => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <p>お問い合わせ</p>
          <ul className="footer-links">
            <li><SNSLink sns={SNS.Youtube} /></li>
            <li><SNSLink sns={SNS.X} /></li>
            <li><SNSLink sns={SNS.Discord} /></li>
            <li><SNSLink sns={SNS.Github} /></li>
          </ul>
          <p>All creations copyright belongs to the creators.</p>
          <p><Link url={"https://www.minecraft.net/"} content="Minecraft" /> is copyrighted by <Link url={"https://www.minecraft.net/"} content="Mojang Studios" /> and is not affiliated with this website.</p>
          <p>&copy; {currentYear} 超生活鯖 All rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer;

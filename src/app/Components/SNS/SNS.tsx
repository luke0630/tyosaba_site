import getImg from "../GetImg";
import "./SNS.css";

export enum SNS {
    X,
    Discord,
    Youtube,
    Github,
}

export const getIcon = (sns: SNS) => {
    let img;
    switch(sns) {
      case SNS.Discord:
        img = <img src={getImg("discord-logo2.webp")} className="discord" alt="discord"></img>;
        break;
      case SNS.X:
        img = <img src={getImg("x-logo-white.webp")} className="x" alt="x"></img>;
        break;
      case SNS.Github:
        img = <img src={getImg("github-mark-white.webp")} className="github" alt="github"></img>;
        break;
      case SNS.Youtube:
        img = <img src={getImg("youtube_social_icon_white.webp")} className="youtube" alt="youtube"></img>;
        break;
    }
  
    return img;
}

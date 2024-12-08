import "./ProfileCard.css";
import { getIcon, SNS } from "@/app/Components/SNS/SNS";
import React from "react";
import { Managers, managerSNS, Roles } from "@/app/Definition/ManagerSNS";
import getImg from "@/app/Components/GetImg";

const GetSNSs = ( manager:Managers ) => {
  const snsData = managerSNS.get(manager);
  if (snsData) {
    snsData.snsLinks.forEach((value:string, key:SNS) => {
      console.log(`${Managers[manager]}  SNS: ${SNS[key]}, URL: ${value}`);
    });
    return (
      <>
        {Array.from(snsData.snsLinks).map(([platform, url]) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={platform}>
            {getIcon(platform)}
          </a>
        ))}
      </>
    )
  }
  else
  {
    console.log(manager + " のSNSデータが見つかりませんでした。");
  }
}



const getRoleClassName = (role: Roles): string => {
  return (Object.keys(Roles) as Array<keyof typeof Roles>).find(key => Roles[key] === role) || '';
};

const getRoleIcon = (roles:Array<Roles>) => {
  return (
    <>
      <div className="role-icons">
        {roles.map((role, index) => (
          <h3
            key={index} // 各要素に一意のkeyを設定
            className={`role-icon ${getRoleClassName(role)}`}>
            {role}
          </h3>
        ))}
      </div>
    </>
  );
};


type CardProps = {
  manager: Managers;
};
const Card: React.FC<CardProps> = ({ manager }) => {
  const snsData = managerSNS.get(manager);
  if(snsData) {
    return (
      <div className="profile_card">
        <img src={getImg(snsData.icon)} className="icon" alt="profile_icon"></img>
        <div className="profile">
          <h1>{`${Managers[manager]}`}</h1>
          {getRoleIcon(snsData.role)}
          {/* <h2 className="description">{snsData.description}</h2> */}
          <div className="sns">
            {GetSNSs(manager)}
          </div>
        </div>
      </div>  
    );
  }
};
  
export default Card;
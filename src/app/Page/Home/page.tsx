import React from 'react';
import "./Home.css"
import Card from '../../Components/ImageCardComponent/ImageCard';
import Position from "../../Components/ImageCardComponent/CardPos"
import getImg from "../../Components/GetImg";
import Link from 'next/link';

const Home = () => {
  const description1 = "資材鯖を活用し、建築したり\n街を作ったりする"
  const description2 = "便利プラグインを使って\nワールドを冒険したり、\nプレイヤーと交流したりする"
  const description3 = "プレイヤーが制作した建築や\nギミックを楽しむ"
  return (
    <div className='body'>
      <div className='Top'>
        <img src={getImg("icon.webp")} alt="Logo" className='logo' />
        <div className='rainbow_text'><h1>超生活鯖</h1></div>
        <div className='logo_under'><h1>マインクラフトサーバー</h1></div>
        <Card imgsrc={getImg("Images/image-001.webp")} title="町や家を建築" description={description1} pos={Position.LEFT} ></Card>
        <Card imgsrc={getImg("Images/image-002.webp")} title="ワールドを冒険" description={description2} pos={Position.RIGHT} ></Card>
        <Card imgsrc={getImg("Images/image-003.webp")} title="建造物を観光" description={description3} pos={Position.LEFT} ></Card>
        <Link href="https://page.ukunini.com/tyosaba/%e7%94%9f%e6%b4%bb%e9%af%96%e3%81%b8%e3%81%ae%e5%8f%82%e5%8a%a0%e6%96%b9%e6%b3%95/"><div className='button_join_server'>
          <h1>生活鯖に参加する</h1>
        </div></Link>
      </div>
    </div>
  )
}
  
  export default Home;
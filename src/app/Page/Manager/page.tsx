import "./page.css"
import Title from "../../Components/Title/Title"
import Description from "../../Components/Description/Description.jsx";
import Profile from "../../Components/ProfileComponent/ProfileCard";
import { managerSNS } from "@/app/Definition/ManagerSNS";

const Page = () => {
    return (
        <>
            <Title title="運営" />
            <Description description={<h2>運営一覧</h2>} />
            <div className="grid">
                {Array.from(managerSNS).map(([Manager]) => (
                    <Profile key={Manager} manager={Manager} />
                ))}
            </div>
        </>
    )
}

export default Page;
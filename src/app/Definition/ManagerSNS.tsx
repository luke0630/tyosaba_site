import { SNS } from "@/app/Components/SNS/SNS";

export enum Managers {
    Luke0630,
    BeakedSpark4971,
    Ouka_439ra,
}

export enum Roles {
    Admin = "鯖主",
    Manager = "運営",
}

type ManagerInfo = {
    icon: string;
    role: Array<Roles>;
    snsLinks: Map<SNS, string>;
    description: string
};

export const managerSNS: Map<Managers, ManagerInfo> = new Map([
[
    Managers.Luke0630,
    {
        icon: "Profile/Luke0630.webp",
        role: [Roles.Admin, Roles.Manager],
        snsLinks: new Map([
            [SNS.Youtube, "https://www.youtube.com/@LukeUkunini"],
            [SNS.X, "https://x.com/yukkuri_YukriA"],
            [SNS.Discord, "https://discord.com/users/617377814575972362"],
            [SNS.Github, "https://github.com/luke0630"],
        ]),
        description: "ぽぽぽ～"
    },
],
[
    Managers.BeakedSpark4971,
    {
        icon: "Profile/BeakedSpark4971.webp",
        role: [Roles.Manager],
        snsLinks: new Map,
        description: "ぽぽぽ～"
    },
],
[
    Managers.Ouka_439ra,
    {
        icon: "Profile/Ouka_439ra.webp",
        role: [Roles.Manager],
        snsLinks: new Map,
        description: "ぽぽぽ～"
    },
],
]);


import { AccountPublic } from "./User";

interface Issue {
    id: number,
    createdAt: string,
    createdBy: string,
    title: string,
    content: string,
    photos: [string],
    status: number,
    isEnable: boolean,
    accountPublic: AccountPublic
}

export { Issue };

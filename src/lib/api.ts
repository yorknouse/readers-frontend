import type { Position} from "@/types/api";
import type { Author } from "@/types/content";

export function mapAuthorOldAuthor(p: Position[]): Author[] {
    const authors: Author[] = [];
    p.forEach((position) => {
        position.users.forEach((u) => {
            authors.push({
                name: `${u.users_name1} ${u.users_name2}`,
                role: position.positions_displayName,
                slug: u.users_userid
            });
        });
    });
    return authors;
}

export async function getTeamList(): Promise<Author[]> {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_API}/frontend/team`);
        if (!response.ok) {
            throw new Error(`Failed to fetch team list: ${response.status} ${response.statusText}`);
        }
        const data: Author[] = mapAuthorOldAuthor(await response.json());
        return data;
    } catch (error) {
        console.error("getTeamList error:", error);
        return [];
    }
}
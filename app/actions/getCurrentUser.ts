import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/lib/authOptions";

const getCurrentUser = async () => {
    try {
        const session: Session | null = await getServerSession(authOptions as any)
        if (!session?.user?.username) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                username: session.user.username,
            }
        });

        if (!currentUser) {
            return null;
        }
        return {
            id: currentUser.id,
            username: currentUser.username,
            nickname: currentUser.nickname,
            bio: currentUser.bio,
            image: currentUser.image,
            role: currentUser.role
        };
    } catch (error) {
        return null;
    }
}

export default getCurrentUser
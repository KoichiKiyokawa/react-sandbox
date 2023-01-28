import { trpc } from "@/lib/trpc/client";
import { useRouter } from "next/router";

export const useAuth = (): { isLoading: boolean } => {
	const router = useRouter();
	const { data: currentUser } = trpc.auth.currentUser.useQuery();

	if (currentUser === undefined) return { isLoading: true };
	if (currentUser === null) {
		router.push("/login");
		return { isLoading: true };
	}
	return { isLoading: false };
};

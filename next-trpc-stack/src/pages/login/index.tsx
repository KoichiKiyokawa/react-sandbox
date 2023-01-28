import { loginSchema } from "@/features/auth/schemas/login.schema";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export default function LoginPage() {
	const router = useRouter();
	const { register, formState, handleSubmit } = useForm<
		z.infer<typeof loginSchema>
	>({
		resolver: zodResolver(loginSchema),
	});
	const mutation = trpc.auth.login.useMutation();
	const onSubmit = handleSubmit((data) => {
		mutation.mutate(data, {
			onSuccess: () => {
				router.push("/");
			},
			onError: (err) => {
				alert(err.message);
			},
		});
	});

	return (
		<form onSubmit={onSubmit}>
			<TextInput label="email" type="email" {...register("email")} />
			<PasswordInput label="password" {...register("password")} />

			<Button type="submit" disabled={formState.isSubmitting}>
				Login
			</Button>

			<Link href="/signup">Sign up</Link>
		</form>
	);
}

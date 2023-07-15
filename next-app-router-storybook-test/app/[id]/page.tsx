import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function UserShow({
  params: { id },
}: {
  params: { id: string };
}) {
  const pathname = usePathname();

  return (
    <div>
      <div>{id}</div>
      <div>{pathname}</div>
    </div>
  );
}

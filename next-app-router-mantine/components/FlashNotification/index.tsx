import { cookies } from "next/headers";
import { FlashNotificationClient } from "./client";
import { FlashPayload } from "./type";

const FLASH_KEY = "flash";

export const flash = {
  set(payload: FlashPayload) {
    cookies().set(FLASH_KEY, JSON.stringify(payload), { expires: 0 });
  },
  get() {
    const payload = cookies().get(FLASH_KEY)?.value;
    if (!payload) return null;
    return JSON.parse(payload) as FlashPayload;
  },
};

async function deleteFlash() {
  "use server";
  cookies().delete(FLASH_KEY);
}

export const FlashNotification = () => {
  const payload = flash.get();
  return (
    payload && (
      <FlashNotificationClient payload={payload} onClose={deleteFlash} />
    )
  );
};

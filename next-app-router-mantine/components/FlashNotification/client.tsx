"use client";

import { Notification } from "@mantine/core";
import { FlashPayload } from "./type";
import { useTransition } from "react";

export const FlashNotificationClient: React.FC<{
  payload: FlashPayload;
  onClose: () => Promise<void>;
}> = ({ payload, onClose }) => {
  const [, startTransition] = useTransition();
  const handleClose = () => {
    startTransition(onClose);
  };

  return (
    <Notification
      title={payload.title}
      onClose={handleClose}
      styles={{
        root: {
          position: "fixed",
          width: 360,
          top: 16,
          right: 16,
        },
      }}
    >
      {payload.message}
    </Notification>
  );
};

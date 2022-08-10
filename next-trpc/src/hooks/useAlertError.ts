import { useEffect } from "react";

export const useAlertError = (error: { message: string } | null) => {
  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);
};

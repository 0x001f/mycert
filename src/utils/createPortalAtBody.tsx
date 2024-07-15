import { createPortal } from "react-dom";

export function createPortalAtBody(
  children: React.ReactNode,
  key?: null | string
) {
  if (typeof window === "undefined") return null;

  return createPortal(children, document.body, key);
}

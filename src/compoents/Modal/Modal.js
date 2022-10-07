import { createPortal } from "react-dom";

import { useCallback } from "react";
import { ModalOverlay, ModalContent } from "./style";

const root = document.createElement("div");
root.setAttribute("id", "custom-modal");
document.querySelector("body").appendChild(root);

export default function Modal({ isOpen, children, onClose }) {
  const handleOverlayClick = useCallback(
    (e) => {
      e.stopPropagation();
      onClose();
    },
    [onClose]
  );

  const handleContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return isOpen
    ? createPortal(
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={handleContentClick}>{children}</ModalContent>
        </ModalOverlay>,
        root
      )
    : null;
}

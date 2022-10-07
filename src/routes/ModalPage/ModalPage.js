import Modal from "../../compoents/Modal/Modal";

import { useState } from "react";
import { ContentLayout } from "./style";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div onClick={() => console.log("我被點擊了")}>
      <button onClick={() => setIsOpen(true)}>按我</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ContentLayout>我是內容</ContentLayout>
      </Modal>
    </div>
  );
}

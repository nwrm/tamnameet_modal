import React, { useState } from "react"
import Modal from "./commons/components/Modals/Modal"

function App() {
  //useState를 사용하여 open상태를 변경한다.(open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="create reservation">
    예약용 모달입니다
      </Modal>
    </React.Fragment>
  );
}

export default App;

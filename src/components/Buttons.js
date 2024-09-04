import React, { useState } from "react";
import "./Buttons.css";
import PaymentsModal from "./PaymentsModal";
import Modal from "react-modal";
import YouTube from "react-youtube";

const playMP3 = () => {
  const audio = new Audio("/pg10.mp3");
  audio.play();
};

const playMP4 = () => {
  const audio = new Audio("/put-away-book.mp3");
  audio.play();
};

const Buttons = ({ apiKey, urlKey }) => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);

  const openModal = (modalNumber) => {
    if (modalNumber === 1) setModalIsOpen1(true);
    if (modalNumber === 2) setModalIsOpen2(true);
    if (modalNumber === 3) setModalIsOpen3(true);
  };

  const closeModal = (modalNumber) => {
    if (modalNumber === 1) setModalIsOpen1(false); playMP4(); 
    if (modalNumber === 2) setModalIsOpen2(false); playMP4(); 
    if (modalNumber === 3) setModalIsOpen3(false); playMP4(); 
  };

  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });

  const videoOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="buttons">
        <a
          className="d"
          href="https://www.youtube.com/embed/zApydIPKFfI"
          onClick={(e) => {
            e.preventDefault();
            playMP3();
            openModal(1);
          }}
        >
          History
        </a>

        <a
          className="b"
          href="https://www.plebdevs.com/"
          onClick={(e) => {
            e.preventDefault();
            playMP3();
            openModal(2);
          }}
        >
          Latin
        </a>

        <button
          className="button"
          onClick={() => {
            playMP3();
            setModalState({
              type: "receive",
              open: true,
            });
          }}
        >
          Finance
        </button>

        <a
          className="a"
          href="https://bitcoin.clarkmoody.com/dashboard/"
          onClick={(e) => {
            e.preventDefault();
            playMP3();
            openModal(3);
          }}
        >
          Math
        </a>
      </div>

      <PaymentsModal
        modalState={modalState}
        setModalState={setModalState}
        apiKey={apiKey}
        urlKey={urlKey}
      />

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={() => closeModal(1)}
        contentLabel="Modal 1"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <YouTube
          videoId="zApydIPKFfI"
          opts={{
            ...videoOpts,
            width: "100%",
            height: "100%"
          }}
          onEnd={() => closeModal(1)}
          style={{ width: "80vw", height: "80vh" }}
        />
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={() => closeModal(2)}
        contentLabel="Modal 2"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <iframe
          title="yup"
          style={{ width: "80vw", height: "80vh" }}
          src="https://www.plebdevs.com/"
          allowFullScreen
        ></iframe>
        <button onClick={() => closeModal(2)}>X</button>
      </Modal>

      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={() => closeModal(3)}
        contentLabel="Modal 3"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <iframe
          title="yup"
          style={{ width: "80vw", height: "80vh" }}
          src="https://timechaincalendar.com/en"
          allowFullScreen
        ></iframe>
        <button onClick={() => closeModal(3)}>X</button>
      </Modal>
    </div>
  );
};

export default Buttons;

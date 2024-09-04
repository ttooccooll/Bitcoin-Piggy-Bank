import React, { useState } from "react";
import "./Bio.css";
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

const Buttons = () => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  const openModal = (modalNumber) => {
    if (modalNumber === 1) setModalIsOpen1(true);
  };

  const closeModal = (modalNumber) => {
    if (modalNumber === 1) setModalIsOpen1(false); playMP4(); 
  };

  const videoOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="sh">
        <a
          className="sh"
          href="https://www.youtube.com/embed?v=DvHUOr8ruMw"
          onClick={(e) => {
            e.preventDefault();
            playMP3();
            openModal(1);
          }}
        >
          Biography
        </a>

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={() => closeModal(1)}
        contentLabel="Modal 1"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <YouTube
          videoId="DvHUOr8ruMw"
          opts={{
            ...videoOpts,
            width: "100%",
            height: "100%"
          }}
          onEnd={() => closeModal(1)}
          style={{ width: "80vw", height: "80vh" }}
        />
      </Modal>
     </div>
    </div>
  );
};

export default Buttons;

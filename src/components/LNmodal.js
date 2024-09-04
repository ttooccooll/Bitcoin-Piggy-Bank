import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./PdfModal.css";

function LnModal({lnurlKey}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    const audioOpen = new Audio(`/pg10.mp3`);
    audioOpen.play();
  };

  const closeModal = () => {
    setModalOpen(false);
    const audioClose = new Audio(`/put-away-book.mp3`);
    audioClose.play();
  };

  return (
    <div>
      <span
        className='s'
        role="link"
        color='red'
        tabIndex={0}
        onClick={() => openModal()}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            openModal();
          }
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = '0.6';
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = '1';
        }}
      >
        Life Skills
      </span>

      {modalOpen && (
        <div className="modal-overlaylnurl" onClick={() => closeModal()}>
          <div className="modal-content-centered" >
            X
            <span className="lnurl1" onClick={() => closeModal()}>
              &times;
            </span>
            <div className="lnurl2">
                <QRCode value={lnurlKey} size={300} />
            </div>
            <div className="lnurl1">
                {lnurlKey}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LnModal;

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./PdfModal.css";

function LnModal(lnurlKey) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    const audioOpen = new Audio(`${process.env.PUBLIC_URL}/pg10.mp3`);
    audioOpen.play();
  };

  const closeModal = () => {
    setModalOpen(false);
    const audioClose = new Audio(`${process.env.PUBLIC_URL}/put-away-book.mp3`);
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
        <div className="modal-overlay" onClick={() => closeModal()}>
          <div className="modal-content-centered" >
            X
            <span className="total-btc1" onClick={() => closeModal()}>
              &times;
            </span>
            <div className="total-btc2">
                <QRCode value={lnurlKey} size={300} />
            </div>
            <div className="total-btc1">
                {lnurlKey}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LnModal;

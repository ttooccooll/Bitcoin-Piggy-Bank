import React, { useState } from 'react';
import './PdfModal.css';

function PdfModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    const audioOpen = new Audio(`${process.env.PUBLIC_URL}/tng_drawer.mp3`);
    audioOpen.play();
  };

  const closeModal = () => {
    setModalOpen(false);
    const audioClose = new Audio(`${process.env.PUBLIC_URL}/computerbeep_69.mp3`);
    audioClose.play();
  };

  return (
    <div>
      {/* Open the modal when the "FAQ" link is clicked */}
      <span
        role="link"
        tabIndex={0}
        onClick={() => openModal()}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            openModal();
          }
        }}
        style={{
          color: 'aqua',
          cursor: 'default', // Change cursor to pointer on hover
          textDecoration: 'none',
          fontSize: 'small',
          opacity: 1, // Set the initial opacity
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = '0.6'; // Reduce opacity on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = '1'; // Restore opacity on mouse leave
        }}
      >
        10-31-08
      </span>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => closeModal()}>
          {/* Center the modal vertically and horizontally */}
          <div className="modal-content-centered">
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
            <div className="modal-inner">
              <iframe
                src={`${process.env.PUBLIC_URL}/bitcoin.pdf`}
                title="PDF Viewer"
                width="500px"
                height="700px"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PdfModal;

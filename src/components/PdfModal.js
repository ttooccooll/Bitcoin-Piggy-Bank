import React, { useState } from 'react';
import BitcoinBlockHeight from './BlockHeight';
import TotalBTC from './TotalBitcoin'
import BitcoinDifficulty from './Difficulty'
import BitcoinBlockReward from './BlockReward';
import BitcoinHashWin from './BlockEta';
import './PdfModal.css';

function PdfModal() {
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
        Statistics
      </span>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => closeModal()}>
            X
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
            <div className="modal-inner">
              <BitcoinBlockHeight />
              <BitcoinBlockReward />
              <BitcoinDifficulty />
              <BitcoinHashWin />
              <TotalBTC />
            </div>
        </div>
      )}
    </div>
  );
}

export default PdfModal;

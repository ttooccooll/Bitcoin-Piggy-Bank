import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./PaymentsModal.css";
import QRCode from 'qrcode.react';

const PaymentsModal = ({ modalState, setModalState, apiKey, urlKey }) => {
  // Our state for the info we will send to either generate a new invoice or pay an invoice
  const [formData, setFormData] = useState({
    amount: 0,
    invoiceToPay: "",
  });
  // Our state for storing the invoice we created to be paid
  const [invoice, setInvoice] = useState("");

  const playMP3 = () => {
    const audio = new Audio("/oink-40664.mp3");
    audio.volume = 0.1;
    audio.play();
  };

  const playMP4 = () => {
    const audio = new Audio("/put-away-book.mp3");
    audio.play();
  };

  const handleReceive = (e) => {
    // Keep the page from refreshing when the form is submitted
    e.preventDefault();

    const headers = {
      "X-Api-Key": apiKey,
      "Access-Control-Allow-Origin": "*"
    };
    const data = {
      amount: formData.amount,
      out: false,
      memo: formData.memo,
    };
    axios
      .post(`${urlKey}/api/v1/payments`, data, { headers })
      .then((res) => setInvoice(res.data.payment_request))
      .catch((err) => console.log(err));

    return;
  };

  // Function to clear all of our state when we close the modal
  const clearForms = () => {
    setModalState({
      type: "",
      open: false,
    });
    setInvoice("");
    setFormData({
      amount: 0,
      invoiceToPay: "",
    });
  };

  return (
    <Modal
      isOpen={modalState.open}
      style={{
        content: {
          top: "10%",
          left: "40%",
          right: "40%",
          bottom: "10%",
          backgroundColor: "black",
          zindex: 9999999999999
        },
      }}
      contentLabel="Example Modal"
      appElement={document.getElementById("root")}
    >
      <p
        className="close-button"
        onClick={() => { clearForms(); playMP4(); }}
      >
        X
      </p>

      {modalState.type === "receive" && (
        <form zindex="9999999999" >
          <label>enter amount in sats</label>
          <input
            type="number"
            min="0"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
          <label>enter a message</label>
          <input
            type="text"
            placeholder="enter memo"
            value={formData.memo}
            onChange={(e) =>
              setFormData({ ...formData, memo: e.target.value })
            }
            defaultValue="I forgot to write a message."
          />
          <button className="buttonq" onClick={(e) => { handleReceive(e); playMP3(); }}>
            Deposit
          </button>
        </form>
      )}
      {/* If we are displaying our newly created invoice */}
      {invoice && (
        <section>
          <h6>Invoice created</h6>
          <div className="qr-code-container">
            <QRCode value={invoice} size={198} fgColor="aqua" bgColor="#brown" zIndex="9999999999" />
          </div>
          <p>{invoice}</p>
        </section>
      )}
    </Modal>
  );
};

export default PaymentsModal;

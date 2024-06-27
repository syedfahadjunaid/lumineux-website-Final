import React from "react";
import Modal from "@mui/material/Modal";
import "./BookInterestModal.css";

import { ImCross } from "react-icons/im";

import EnquiryCard from "../Enquiry Card/EnquiryCard";

function BookInterestModal({ open, onClose, setBookInterestModalOpen }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={`book-interest-modal-conainer ${open ? "" : "exit"}`}>
        <div className="book-interest-cross-icon">
          <ImCross
            onClick={() => {
              setBookInterestModalOpen(false);
            }}
          />
        </div>
        <EnquiryCard />
      </div>
    </Modal>
  );
}

export default BookInterestModal;

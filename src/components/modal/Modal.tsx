import React from 'react';
import './Modal.scss';

interface IModal {
  isOpen: boolean;
  toggleModal: (toggle: boolean) => void;
  header: string;
  footer?: string;
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({
  isOpen,
  toggleModal,
  header,
  footer,
  children,
}) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-header">
        <h2>{header}</h2>
        <span className="close" onClick={() => toggleModal(!isOpen)}>
          &times;
        </span>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <h3>{footer}</h3>
      </div>
    </div>
  );
};

export default Modal;

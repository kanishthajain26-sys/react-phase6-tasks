function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>{title}</h2>

          <button
            className="close-icon"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          {children}
        </div>

        <button
          className="close-button"
          onClick={onClose}
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default Modal;
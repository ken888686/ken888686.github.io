import { createPortal } from 'react-dom';

function ModalOverlay(props) {
  const { title, message, onClick } = props;

  return (
    <>
      <input type="checkbox" id="overlay" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <h3 className="text-5xl font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button
              type="button"
              htmlFor="overlay"
              className="btn btn-primary"
              onClick={onClick}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Modal(props) {
  const { title, message, onConfirm } = props;

  return (
    <>
      {createPortal(
        <ModalOverlay title={title} message={message} onClick={onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

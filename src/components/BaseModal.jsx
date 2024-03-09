import React from "react";
import { createPortal } from "react-dom";

const portedElement = document.querySelector("body");

const BaseModal = React.forwardRef(
  ({ children, defaultOpened = false, unMountCallback = () => {} }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpened);
    const close = React.useCallback(() => setIsOpen(false), []);

    React.useImperativeHandle(
      ref,
      () => ({
        open: () => setIsOpen(true),
        close,
      }),
      [close]
    );

    const handleEscape = React.useCallback(
      (event) => {
        if (event.keyCode === 27) close();
      },
      [close]
    );

    React.useEffect(() => {
      if (isOpen) document.addEventListener("keydown", handleEscape, false);
      return () => {
        if (isOpen) {
          unMountCallback();
          document.removeEventListener("keydown", handleEscape, false);
        }
      };
    }, [handleEscape, isOpen]);

    return createPortal(
      isOpen ? (
        <>
          <div
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
            tabIndex="-1"
          >
            <div className="relative p-4 w-full max-w-md md:max-w-lg lg:max-w-xl max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  onClick={close}
                  className="absolute -top-1 -end-1 bg-gray-100 border-transparent border-4 text-zinc-400 hover:bg-gray-200 hover:text-gray-500 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">{children}</div>
              </div>
            </div>
          </div>
          <div
            className="bg-gray-900/50 fixed inset-0 z-40"
            onClick={close}
          ></div>
        </>
      ) : null,
      portedElement
    );
  }
);

export default BaseModal;

import React from 'react';
import { createPortal } from 'react-dom';

const portedElement = document.querySelector('body');

export function BaseModal({ children, defaultOpened = false }, ref) {
    const [isOpen, setIsOpen] = React.useState(defaultOpened)
    const close = React.useCallback(() => setIsOpen(false), [])

    React.useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close
    }), [close]);

    const handleEscape = React.useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close]);

    React.useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () => {
        document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? (
            <div className={`modal $}`}>
                <div className="modal-overlay" onClick={close} />
                <div className="relative bg-white rounded-lg shadow">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" onClick={close} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        {children}
                    </div>
                </div>
            </div>
        ) : null,
        portedElement
    );
}

export default React.forwardRef(BaseModal);

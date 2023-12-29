import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    //createPortal is way to render react component outside of DOM hierarchy which helps to not get messy with UI css.
    return createPortal(
        <>
            {isOpen && (
                <>
                    <div className="relative m-auto z-50 min-h-[200px] max-w-[80%] bg-white p-4">
                        <div className="flex justify-end">
                            <AiOutlineClose
                                onClick={onClose}
                                className="text-2xl cursor-pointer" />
                        </div>
                        {children}
                    </div>
                    <div 
                        onClick={onClose}
                        className="absolute top-0 z-120 h-screen w-screen backdrop-blur"></div>
                </>
            )}
        </>
        ,document.getElementById("modal-root")
    );
}

export default Modal;
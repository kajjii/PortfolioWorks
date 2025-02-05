import { useState } from "react";
import { useResize } from "../../resize/resize";
import { Modal } from "../../modal/modal";
import s from './contact-button.module.scss'

export const ContactButton = () => {

    const [showModal, setShowModal] = useState(false)
    const isPortrait = useResize()

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal} className={isPortrait ? s.btn : `${s.btn} ${s.mobile}`}>Связаться</button>
            <Modal show={showModal} onClose={handleCloseModal}>
                <h2 style={{color: '#4824ff', fontSize: isPortrait ? '50px' : '10vw', margin: isPortrait ? '15px 0 -5px' : '25px 0'}}>Контакты</h2>
                    <p style={{fontSize: isPortrait ? '30px' : '25px'}}>Вы можете связаться со мной в Телеграме &#128071;</p>
            </Modal>
        </div>
    );
};

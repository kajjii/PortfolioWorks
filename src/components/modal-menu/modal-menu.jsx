import { useState, useEffect, useCallback } from 'react'
import cn from 'classnames';
import s from './modal-menu.module.scss'

export const ModalMenu = ({show, onClose, children}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        if (show) {
            setIsVisible(true)
            document.addEventListener('keydown', handleKeyDown)
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800)
            document.removeEventListener('keydown', handleKeyDown)
            return () => clearTimeout(timer)
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <div
            className={cn(s.modal_menu_backdrop, { [s.show]: show })}
            style={{ display: isVisible ? 'flex' : 'none' }}
            onClick={onClose}
        >
            <div className={s.modal_menu_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
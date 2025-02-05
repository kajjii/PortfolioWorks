import { useState, useEffect, useCallback } from 'react'
import { useResize } from '../resize/resize';
import cn from 'classnames';
import s from './modal.module.scss'

export const Modal = ({show, onClose, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const isPortrait = useResize()

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
        <div className={cn(s.modal_backdrop, {[s.show]: show})} style={{display: isVisible}} onClick={onClose}>
            <div style={{scale: isPortrait ? '1' : '0.8' }} className={s.modal_content} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={s.modal_close} aria-label="Close modal"></button>
                {children}
                <div style={{ display: "flex", scale: isPortrait ? '1' : '1.12', margin: isPortrait ? '' : '8vw 17vw' }}>
                    <a href="https://t.me/dmitrymuratov" target="_blank" className={s.social_btn}>
                    <a className={s.tg} />Telegram</a>
                </div>
            </div>
        </div>
    )
};
import { useState, useEffect } from 'react';
import { ModalMenu } from '../modal-menu/modal-menu';
import { useResize } from '../resize/resize';
import { ContactButton } from '../ui/contact-button/contact-button';
import s from './navbar.module.scss'
import cn from 'classnames';

export const Navbar = ({theme, setTheme}) => {

    const isPortrait = useResize()

    const [showModalMenu, setShowModalMenu] = useState(false)
    const [scroll, setScroll] = useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        if (isDarkTheme) {
            lightTheme();
        } else {
            darkTheme ();
        }
        setIsDarkTheme(!isDarkTheme);
    }

    const lightTheme = () => {
        setTheme ('light');
    }
    const darkTheme = () => {
        setTheme('dark');
    }

    const handleOpenModalMenu = () => {
        setShowModalMenu(true)
    }

    const handleCloseModalMenu = () => {
        setShowModalMenu(false)
    }

    const scrollUp = () => {
        setScroll(window.scrollY)
    }

    const upButton = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollUp)
    }, [])

    const toBlock = (height) => {
        window.scrollTo({top: height, left: 0, behavior: 'smooth'})
    }
    
    const conditionRender = (condition, Full, Mobile) => {
        return condition ? Full : Mobile
    }
    

    const PortraitVer = () => (
        <div className={s.header}>
            <nav className={s.menu}>
                <a onClick={upButton}>Обо мне</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='550'>Навыки</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='1050'>Портфолио</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='2000'>Услуги</a>
            </nav>

            <div className={s.menu__btns}>
                <ContactButton />
                <a href="https://t.me/dmitrymuratov" target='_blank'
                    className={cn(s.icon, { [s.tg_light]: theme === 'light', [s.tg_dark]: theme === 'dark' })}
                />
                <div className={s.switch} onClick={toggleTheme}>
                    <div
                        className={cn(s.theme, { [s.light]: theme === 'light', [s.dark]: theme === 'dark', [s.theme_shifted]: isDarkTheme })}
                    />
                </div>
            </div>
        </div>
    )

    const MobileVer = () => (
        <div className={s.header}>
            <div className={cn(s.switch, s.mobile)} onClick={toggleTheme}>
                <div
                    className={cn(s.theme, s.mobile, { [s.light]: theme === 'light', [s.dark]: theme === 'dark' })}
                    style={{ transform: isDarkTheme ? 'translateX(8.6vw)' : 'translateX(0)'}}/>
            </div>
            <div className={s.menu__btns_mobile}>
                <a href="https://t.me/telegram" target='_blank'
                    className={cn(s.icon, s.mobile, { [s.tg_light]: theme === 'light', [s.tg_dark]: theme === 'dark' })}
                />
                <a onClick={handleOpenModalMenu} 
                    className={cn(s.icon_menu, { [s.light]: theme === 'light', [s.dark]: theme === 'dark' })} />
            </div>
        </div>
    )

    return (
        <>
            <header>
                {conditionRender(isPortrait, <PortraitVer />, <MobileVer />)}
            </header>

            <ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
                <a onClick={upButton}>Обо мне</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='350'>Навыки</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='1200'>Портфолио</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height='2200'>Услуги</a>
            </ModalMenu>
            
            <button onClick={upButton} className={scroll < 1000 ? "" : s.btn_up}></button>
        </>
    );
}
import { useResize } from '../resize/resize';
import { ContactButton } from '../ui/contact-button/contact-button';
import cn from 'classnames';
import s from './main-screen.module.scss'

export const MainScreen = () => {
    const isPortrait = useResize()

    return (
        <>
            {isPortrait ? (
                <div className={s.main_screen}>
                    <div className={s.aboutme_block}>
                        <h1>Веб-разработчик <br /> <span className={s.title}>Dmitry Muratov</span></h1>
                        <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
                            Создаю <span style={{ color: "#4824ff" }}>продаваемые</span><br/>
                            и <span style={{ color: "#4824ff" }}>уникальные </span>
                            проекты <br/> под ваши запросы
                        </h2>
                        <h3>Занимаюсь веб-разработкой<br/>
                            на протяжении <span style={{ color: "#4824ff" }}> 3 лет</span>
                        </h3>
                    </div>
        
                    <div className={s.face_block}>
                        {/* <img src="/images/face3.jpg" draggable="false" alt="face" /> */}
                    </div>
                </div>
                ) : (
                <div className={cn(s.main_screen, s.mobile)}>
                    <div className={cn(s.face_block, s.mobile)}>
                        {/* <img src="/images/face3.jpg" draggable="false" alt="face" /> */}
                    </div>
                <div className={cn(s.aboutme_block, s.mobile)}>
                    <h1>Веб-разработчик <span className={s.title}>Dmitry Muratov</span></h1>
                    <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
                        Создаю <span style={{ color: "#4824ff" }}>продаваемые </span>
                        и <span style={{ color: "#4824ff" }}>уникальные </span>
                        проекты под ваши запросы
                    </h2>
                    <h3>Занимаюсь веб-разработчик<br/>
                        на протяжении <span style={{ color: "#4824ff" }}> 3 лет</span>
                    </h3>
                    
                    <ContactButton />
                </div>
            </div>
            )}
        </>
    );
};
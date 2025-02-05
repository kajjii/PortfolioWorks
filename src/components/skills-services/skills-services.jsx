import { useResize } from '../resize/resize';
import cn from 'classnames';
import s from './skills-services.module.scss'

export const SkillsServices = ({theme}) => {

    const isPortrait = useResize()

    const tagMobileClass = cn(s.tag, {[s.mobile] : !isPortrait})
    const tagMobileThemeClass = cn(s.icon, {[s[theme]] : true, [s.mobile] : !isPortrait})

    return (
        <div className={cn(s.service_block, {[s.mobile] : !isPortrait})} draggable="false">
            <h1 style={{ fontSize: isPortrait ? "52px" : '10vw' }}>НАВЫКИ</h1>
            <p style={{ fontSize: isPortrait ? "27px" : '6vw' }}>Обладаю 
                <span style={{ color: "#4824ff" }}> следующими навыками </span> 
                в веб-разработке: 
            </p>
            <div style={{ display: isPortrait ? "flex" : '', marginTop: "16px" }}>
                <p className={tagMobileClass}>
                    <p className={tagMobileThemeClass} />
                    Базовые веб-технологии</p>
                <p className={tagMobileClass}>
                    <p className={tagMobileThemeClass} />
                    Работа с DOM и браузерным API</p>
                <p className={tagMobileClass}>
                    <p className={tagMobileThemeClass} />
                    Фреймворки и библиотеки JS</p>
                <p className={tagMobileClass}>
                    <p className={tagMobileThemeClass} />
                    Работа со State менеджерами</p>
            </div>
            <div style={{ display: isPortrait ? "flex" : '', marginTop: isPortrait ? "16px" : '' }}>
                <p className={tagMobileClass}>
                    <p className={tagMobileThemeClass} />
                    Работа с асинхронными операциями</p>
                    <p className={tagMobileClass}>
                        <p className={tagMobileThemeClass} />
                        Работа с инструментами сборки</p>
                    <p className={tagMobileClass}>
                        <p className={tagMobileThemeClass} />
                        Адаптивная и отзывчивая верстка</p>
            </div>

            <p style={{ fontSize: isPortrait ? "27px" : '6vw' }}>
                Открыт для обсуждения создания проекта по вашим интересам. 
                <br/>
                Детальней готов обсудить при
                <span style={{ color: "#4824ff", cursor: "pointer" }}
                // onClick={handle0penModal}
                > личной переписке</span>.
            </p>
        </div>
    );
};
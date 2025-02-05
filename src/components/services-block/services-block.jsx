import { useResize } from '../resize/resize';
import s from './services-block.module.scss'

export const ServicesBlock = () => {

    const isPortrait = useResize()
    return (
        <div className={isPortrait ? s.guarantees_block : `${s.guarantees_block} ${s.mobile}`}>
            <h1 style={{  fontSize: isPortrait ? "52px" : '10vw', paddingBottom: "20px" }}>УСЛУГИ</h1>
                <ol className={s.guarantees_points}>
                    <li className={isPortrait ? s.point : s.mobile}>
                        Разработка веб-сайтов и веб-приложений: <br />
                        &bull; Создание статических сайтов. <br />
                        &bull; Разработка SPA <span style={{ color: "#4824ff" }}>(Single Page Applications).</span> <br />
                        &bull; Разработка прогрессивных веб-приложений (PWA).
                    </li>
                    <li className={isPortrait ? s.point : s.mobile}>
                        Разработка <span style={{ color: "#4824ff" }}>пользовательского</span> интерфейса.
                    </li>
                    <li className={isPortrait ? s.point : s.mobile}>
                        Интеграция с <span style={{ color: "#4824ff" }}>бэкендом: </span> <br />
                        &bull; Получение и отображение данных с сервера. <br />
                        &bull; Отправка данных на сервер.</li>
                    <li className={isPortrait ? s.point : s.mobile}><span style={{ color: "#4824ff" }}>Оптимизация</span> производительности.
                    </li>

                </ol>
        </div>
    );
};

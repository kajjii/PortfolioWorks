import linkedin from '/icons/linkedin.svg'
import linkedin_dark from '/icons/linkedin_dark.svg'
import github from '/icons/github.svg'
import github_dark from '/icons/github_dark.svg'
import tg from '/icons/tg_dark.svg'
import tg_dark from '/icons/tg_light.svg'

import s from './footer.module.scss'


export const Footer = ({theme}) => {


    return (
        <footer className={s.footer}>
            <ul className={s.social}>
                <li>
                    <a href="https://github.com/kajjii?tab=repositories">
                        <img src={theme === 'light' ? github : github_dark} alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/dmitrymuratov">
                        <img src={theme === 'light' ? tg : tg_dark} alt="tg" />
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <img src={theme === 'light' ? linkedin : linkedin_dark} alt="linkedon" />
                    </a>
                </li>
            </ul>
		</footer>
    );
}
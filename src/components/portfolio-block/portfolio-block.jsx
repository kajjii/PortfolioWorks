import {Category} from '../category/category';
import { useResize } from '../resize/resize';
import cn from 'classnames';
import s from './portfolio-block.module.scss'

export const PortfolioBlock = () => {

    const isPortrait = useResize()
    
    return (
        <>
            <div className={s.portfolio_block}>
                <div className={cn(s.wrapper, {[s.mobile] : !isPortrait})}>
                    <h1 className={cn(s.main_title, {[s.mobile] : !isPortrait})}>Портфолио</h1>
                    <div style={{ position: "absolute", marginLeft: isPortrait ? "-660px" : "-75vw" }}>
                        <p className={cn(s.gradient_partone, {[s.mobile] : !isPortrait})}></p>
                            {isPortrait ? (<p className={s.title_border}>Портф</p>)
                                        : (<p className={cn(s.title_border, s.mobile)}>Пор</p>)}
                    </div>
                    <div style={{ position: "absolute", marginLeft: isPortrait ? "660px" : "75vw"}}>
                        <p className={cn(s.gradient_parttwo, {[s.mobile] : !isPortrait})}></p>
                        {isPortrait ? (<p className={s.title_border}>фолио</p>)
                                    : (<p className={cn(s.title_border, s.mobile)}>лио</p>)}
                    </div>
                    <img className={cn(s.arrow, {[s.mobile] : !isPortrait})} src='./icons/arrow.svg' draggable="false" /> 
                </div>
            </div>
            {/* <div className={s.portfolio_block}>
                <div className={classNames(s.wrapper, {[s.mobile] : !isPortrait})}>
                    <h1 className={classNames(s.main_title, {[s.mobile] : !isPortrait})}>Портфолио</h1>
                   <div className={classNames(s.gradient_container, {[s.gradient_container_mobile]: !isPortrait})}>
                            <p className={classNames(s.gradient_partone, {[s.mobile]: !isPortrait})}></p>
                            {isPortrait ? (<p className={s.title_border}>Портф</p>)
                                        : (<p className={s.mobile}>Пор</p>)}
                     </div>
                    <div className={classNames(s.gradient_container_two, {[s.gradient_container_two_mobile] : !isPortrait})}>
                        <p className={classNames(s.gradient_parttwo, {[s.mobile] : !isPortrait})}></p>
                        {isPortrait ? (<p className={s.title_border}>фолио</p>)
                                    : (<p className={s.mobile}>лио</p>)}
                    </div>
                    <img className={classNames(s.arrow, {[s.mobile] : !isPortrait})} src='./icons/arrow.svg' draggable="false" />
                </div>
            </div> */}
            <Category />
        </>
    );
};
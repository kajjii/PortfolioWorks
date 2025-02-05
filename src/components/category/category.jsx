import { useState } from 'react';
import AllGallery from '../allGallery/AllGallery'
import Landings from '../allGallery/Landings';
import { useResize } from '../resize/resize';
import cn from 'classnames';
import s from './category.module.scss'

export const Category = () => {

    const isPortrait = useResize()

    const [selectedCategory, setSelectedCategory] = useState('All');

    const renderComponent = () => {
        switch (selectedCategory) {
            case 'All':
                return <AllGallery/>;
            case 'Landings':
                return <Landings />
            default:
                return <AllGallery />
        }
    }
    return (
        <div className={cn({[s.filter_scrollbar] : !isPortrait})}>
            <div style={{ display: "flex", marginBottom: "20px", justifyContent: "center" }}>
                <p className={cn(s.tag, {[s.selected] : selectedCategory === 'All', [s.mobile] : !isPortrait})} 
                    onClick={() => setSelectedCategory('All')}>Все работы</p>
                <p className={cn(s.tag, {[s.selected] : selectedCategory === 'Landings', [s.mobile] : !isPortrait})} 
                    onClick={() => setSelectedCategory('Landings')}>Лендинги</p>
            </div>
            
            <div className="content" style={{ marginLeft: "-5vw", marginRight: "-5vw" }}>
                {renderComponent()}
            </div>
        </div>
    );
};
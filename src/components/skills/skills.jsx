import react from '/icons/react.svg'
import ts from '/icons/ts.svg'
import sass from '/icons/sass.svg'
import redux from '/icons/redux.svg'
import './skills.scss'

export const Skills = () => {
    return (
        <div className='service-block' draggable="false">
            <img className='rotating-icon' src={react} alt="icon" />
            <img className='rotating-icon' src={ts} alt="icon" />
            <img className='rotating-icon' src={sass} alt="icon" />
            <img className='rotating-icon' src={redux} alt="icon" />
        </div>
    );
};
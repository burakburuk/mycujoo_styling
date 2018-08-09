import React from 'react';
import Button from './Button';
import '../assets/css/control-area-content.scss';
import menuIcon from '../assets/img/menu_icon.png';

const ControlArea = (props) => {
    const {handleScoreToggle, handleHomeDecrement, handleHomeIncrement, handleAwayDecrement, handleAwayIncrement} = props;
    return (
        <div className="control-area-content">
            <div>
                <Button onClick={handleHomeDecrement} label="-"/>
                <Button onClick={handleHomeIncrement} label="+"/>
                <span>Score Left</span>
            </div>
            <div className="toggle-button" onClick={handleScoreToggle}>
                <img src={menuIcon} alt="menu_icon"/>
            </div>
            <div>
                <Button onClick={handleAwayDecrement} label="-"/>
                <Button onClick={handleAwayIncrement} label="+"/>
                <span>Score Right</span>
            </div>
        </div>
    )
};

export default ControlArea;
import React from 'react';
import homeLogo from '../assets/img/pan-logo.png';
import awayLogo from '../assets/img/ger-logo.png';
import '../assets/css/score-board.scss';

const ScoreBoard = (props) => {
    const {scoreOpen, homeName, homeScore, awayName, awayScore} = props;
    return (
        <div className={"score-board" + (!scoreOpen ? " hidden" : "")}>
            <div className="logo">
                <img src={homeLogo} alt="home_logo"/>
            </div>
            <div className="name">
                <span>{homeName}</span>
            </div>
            <div className="score">
                {homeScore}
            </div>
            <div className="score-separator">
                <span>-</span>
            </div>
            <div className="score">
                {awayScore}
            </div>
            <div className="name">
                <span>{awayName}</span>
            </div>
            <div className="logo">
                <img src={awayLogo} alt="away_logo"/>
            </div>
        </div>
    );
};

export default ScoreBoard;
import React from 'react';
import homeLogo from '../assets/img/pan-logo.png';
import awayLogo from '../assets/img/ger-logo.png';
import '../assets/css/score-board.scss';

const ScoreBoard = (props) => {
    const {scoreOpen, scoreHomeAnimation, scoreAwayAnimation, homeName, homeScore, awayName, awayScore} = props;
    return (
        <div className={"score-board" + (!scoreOpen ? " hidden" : "")}>
            <div className="logo">
                <img src={homeLogo} alt="home_logo"/>
            </div>
            <div className="name">
                <span>{homeName}</span>
            </div>
            <div className={"score" + (scoreHomeAnimation ? " slideDown" : "")}>
                {homeScore}
            </div>
            <div className="score-separator">
                <span>-</span>
            </div>
            <div className={"score" + (scoreAwayAnimation ? " slideDown" : "")}>
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

ScoreBoard.defaultProps = {
    scoreHomeChanged: false,
    scoreAwayChanged: false,
};

export default ScoreBoard;

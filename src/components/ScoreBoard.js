import React from 'react';
import homeLogo from '../assets/img/pan-logo.png';
import awayLogo from '../assets/img/ger-logo.png';
import '../assets/css/score-board.scss';

const ScoreBoard = (props) => {
    const {
        scoreOpen, scoreHomeAnimation, scoreAwayAnimation, homeName, homeScore, oldHomeScore,
        awayName, awayScore, oldAwayScore
    } = props;
    return (
        <div className={"score-board" + (!scoreOpen ? " hidden" : "")}>
            <div className="logo">
                <img src={homeLogo} alt="home_logo"/>
            </div>
            <div className="name">
                {homeName}
            </div>
            <div oldscorevalue={oldHomeScore} newscorevalue={homeScore}
                 className={"score" + (scoreHomeAnimation ? " slideDown" : "")}>
                {!scoreHomeAnimation ? homeScore : ""}
            </div>
            <div className="score-separator">
                <span>-</span>
            </div>
            <div oldscorevalue={oldAwayScore} newscorevalue={awayScore}
                 className={"score" + (scoreAwayAnimation ? " slideDown" : "")}>
                {!scoreAwayAnimation ? awayScore : ""}
            </div>
            <div className="name">
                {awayName}
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

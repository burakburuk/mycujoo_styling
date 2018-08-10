import React, {Component} from 'react';
import '../assets/css/app.scss';
import ScoreBoard from '../components/ScoreBoard';
import ControlArea from '../components/ControlArea';
import playButton from '../assets/img/play_button.png';

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homeName: 'PAN',
            homeScore: 0,
            awayName: 'GER',
            awayScore: 0,
            scoreOpen: true,
            scoreHomeAnimation: false,
            scoreAwayAnimation: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {scoreHomeAnimation, scoreAwayAnimation} = this.state;
        let newState = {};
        if (scoreHomeAnimation) {
            newState.scoreHomeAnimation = false;
        }

        if (scoreAwayAnimation) {
            newState.scoreAwayAnimation = false;
        }

        if (typeof newState.scoreHomeAnimation !== "undefined" ||
            typeof newState.scoreAwayAnimation !== "undefined") {
            setTimeout(() => {
                this.setState(newState);
            }, 1000);
        }
    }

    handleHomeDecrement = () => {
        this.setState((prevState, props) => ({
            homeScore: (prevState.homeScore - 1 >= 0) ? prevState.homeScore - 1 : prevState.homeScore,
            scoreHomeAnimation: true
        }));
    };

    handleHomeIncrement = () => {
        this.setState((prevState, props) => ({
            homeScore: prevState.homeScore + 1,
            scoreHomeAnimation: true
        }));
    };

    handleAwayDecrement = () => {
        this.setState((prevState, props) => ({
            awayScore: (prevState.awayScore - 1 >= 0) ? prevState.awayScore - 1 : prevState.awayScore,
            scoreAwayAnimation: true
        }));
    };

    handleAwayIncrement = () => {
        this.setState((prevState, props) => ({
            awayScore: prevState.awayScore + 1,
            scoreAwayAnimation: true
        }));
    };

    handleScoreToggle = () => {
        this.setState((prevState, props) => ({
            scoreOpen: !prevState.scoreOpen
        }));
    };

    render() {
        return (
            <div className="container">
                <div className="sixteen-nine">
                    <div className="content">
                        <ScoreBoard {...this.state}/>
                        <div className="player-image">
                            <img src={playButton} alt="play_button"/>
                        </div>
                    </div>
                </div>
                <div className="control-area">
                    <ControlArea handleScoreToggle={this.handleScoreToggle}
                                 handleHomeDecrement={this.handleHomeDecrement}
                                 handleHomeIncrement={this.handleHomeIncrement}
                                 handleAwayDecrement={this.handleAwayDecrement}
                                 handleAwayIncrement={this.handleAwayIncrement}/>
                </div>
            </div>
        );
    }
}

export default Player;

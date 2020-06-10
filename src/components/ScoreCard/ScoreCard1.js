import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { incrementPlayer1 } from '../../data/action';

const mapStateToProps = ({ player1, serving, winner, english }) => {
    return {
        player: player1,
        serving,
        winner,
        english
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlayer: () => dispatch(incrementPlayer1())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
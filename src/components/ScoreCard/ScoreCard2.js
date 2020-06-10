import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { incrementPlayer2 } from '../../data/action';

const mapStateToProps = ({ player2, serving, winner, english }) => {
    return {
        player: player2,
        serving: !serving,
        winner,
        english
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlayer: () => dispatch(incrementPlayer2())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
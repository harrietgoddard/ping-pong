import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { incrementPlayer2 } from '../../data/action';

const mapStateToProps = ({ player2, p2Name, serving, winner, english }) => {
    return {
        player: player2,
        name: p2Name,
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
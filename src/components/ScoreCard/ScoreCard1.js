import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

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
        handlePlayer: () => dispatch({ type: "INCREMENT_PLAYER_1" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

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
        handlePlayer: () => dispatch({ type: "INCREMENT_PLAYER_2" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
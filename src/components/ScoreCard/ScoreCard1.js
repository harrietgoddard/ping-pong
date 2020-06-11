import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { patchScore1 } from "../../data/action/api";

const mapStateToProps = ({ player1, p1Name, serving, winner, english }) => {
    return {
        player: player1,
        name: p1Name,
        serving,
        winner,
        english
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlayer: () => dispatch(patchScore1())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);
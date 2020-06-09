import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = state => {
    return {
        player: state.player1,
        player1Serves: state.player1Serves,
        winner: state.winner,
    }
}

export default connect(mapStateToProps)(ScoreCard);
import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player2, player1Serves, winner }) => {
    return {
        player: player2,
        player1Serves: !player1Serves,
        winner,
    }
}

export default connect(mapStateToProps)(ScoreCard);
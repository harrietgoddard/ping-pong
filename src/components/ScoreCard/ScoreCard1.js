import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player1, player1Serves, winner }) => {
    return {
        player: player1,
        player1Serves,
        winner,
    }
}

export default connect(mapStateToProps)(ScoreCard);
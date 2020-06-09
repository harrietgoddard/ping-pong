import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player2, player1Serves, winner, english }) => {
    return {
        player: player2,
        player1Serves: !player1Serves,
        winner,
        english
    }
}

export default connect(mapStateToProps)(ScoreCard);
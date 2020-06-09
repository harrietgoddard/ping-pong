import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player1, player1Serves, winner, english }) => {
    return {
        player: player1,
        player1Serves,
        winner,
        english
    }
}

export default connect(mapStateToProps)(ScoreCard);
import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player1, serving, winner, english }) => {
    return {
        player: player1,
        serving,
        winner,
        english
    }
}

export default connect(mapStateToProps)(ScoreCard);
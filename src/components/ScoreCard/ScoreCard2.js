import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ({ player2, serving, winner, english }) => {
    return {
        player: player2,
        serving: !serving,
        winner,
        english
    }
}

export default connect(mapStateToProps)(ScoreCard);
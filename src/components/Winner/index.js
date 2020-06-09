import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ({ player1, player2, winner, english }) => {
    return {
        player1,
        player2,
        winner,
        english
    }
}

export default connect(mapStateToProps)(Winner);
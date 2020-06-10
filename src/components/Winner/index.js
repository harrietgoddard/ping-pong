import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ({ player1, player2, p1Name, p2Name, winner, english }) => {
    return {
        player1,
        player2,
        p1Name,
        p2Name,
        winner,
        english
    }
}

export default connect(mapStateToProps)(Winner);
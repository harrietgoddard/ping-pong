import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ({ player1, player2, winner }) => {
    return {
        player1,
        player2,
        winner,
    }
}

export default connect(mapStateToProps)(Winner);
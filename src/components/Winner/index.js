import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = state => {
    return {
        player1: state.player1,
        player2: state.player2,
        winner: state.winner,
    }
}

export default connect(mapStateToProps)(Winner);
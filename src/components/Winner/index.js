import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ({ p1Name, p2Name, winner, english }) => {
    let winnerName = winner === 1 ? p1Name : p2Name;
    return {
        name: winnerName,
        winner,
        english
    }
}

export default connect(mapStateToProps)(Winner);
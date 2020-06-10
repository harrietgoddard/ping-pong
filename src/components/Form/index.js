import { connect } from "react-redux";
import Form from './Form';

const mapStateToProps = ({ p1Name, p2Name, winningScore, alternateEvery }) => ({
    p1Name,
    p2Name,
    winningScore,
    alternateEvery,
});

export default connect(mapStateToProps)(Form);
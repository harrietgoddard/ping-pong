import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = ({ gameStarted }) => ({ gameStarted });

export default connect(mapStateToProps)(Game);
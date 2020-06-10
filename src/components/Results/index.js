import { connect } from "react-redux";
import Results from './Results';

const mapStateToProps = ({ results, p1Name, p2Name, english, }) => ({ results, p1Name, p2Name, english });


export default connect(mapStateToProps)(Results);
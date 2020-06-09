import { connect } from "react-redux";
import Results from './Results';

const mapStateToProps = ({ results, english }) => ({ results, english });


export default connect(mapStateToProps)(Results);
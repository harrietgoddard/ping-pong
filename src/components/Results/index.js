import { connect } from "react-redux";
import Results from './Results';

const mapStateToProps = ({ results }) => ({ results });


export default connect(mapStateToProps)(Results);
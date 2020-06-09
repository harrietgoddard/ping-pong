import { connect } from "react-redux";
import Button from './Button';

const mapStateToProps = ({ english }) => ({ english });

export default connect(mapStateToProps)(Button);
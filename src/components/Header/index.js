import { connect } from "react-redux";
import Header from './Header';

const mapStateToProps = ({ english }) => ({ english });

export default connect(mapStateToProps)(Header);
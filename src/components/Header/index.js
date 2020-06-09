import { connect } from "react-redux";
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        english: state.english,
    }
}


export default connect(mapStateToProps)(Header);
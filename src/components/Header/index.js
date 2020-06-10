import { connect } from "react-redux";
import Header from './Header';

const mapStateToProps = ({ english }) => ({ english });

const mapDispatchToProps = (dispatch) => {
    return {
        handleLanguage: () => dispatch({ type: "CHANGE_LANGUAGE" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
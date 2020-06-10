import { connect } from "react-redux";
import Header from './Header';
import { changeLanguage } from '../../data/action';

const mapStateToProps = ({ english }) => ({ english });

const mapDispatchToProps = (dispatch) => {
    return {
        handleLanguage: () => dispatch(changeLanguage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
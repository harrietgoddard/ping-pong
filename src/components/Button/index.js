import { connect } from "react-redux";
import Button from './Button';

const mapStateToProps = ({ english }) => ({ english });

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch({ type: "RESET" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
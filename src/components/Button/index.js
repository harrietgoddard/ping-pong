import { connect } from "react-redux";
import Button from './Button';
import { reset } from '../../data/action';

const mapStateToProps = ({ english }) => ({ english });

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
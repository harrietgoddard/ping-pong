import { connect } from "react-redux";
import Button from './Button';
import { reset } from '../../data/action/state';
import history from '../../history';

const mapStateToProps = ({ english }) => ({ english });

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(reset());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
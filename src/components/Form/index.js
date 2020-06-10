import { connect } from "react-redux";
import Form from './Form';
import { saveSettings } from '../../data/action';

const mapStateToProps = ({ p1Name, p2Name, winningScore, alternateEvery }) => ({
    p1Name,
    p2Name,
    winningScore,
    alternateEvery,
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: data => dispatch(saveSettings(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
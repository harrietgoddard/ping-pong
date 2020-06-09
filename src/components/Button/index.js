import { connect } from "react-redux";
import Button from './Button';

const mapStateToProps = (state) => {
    return {
        english: state.english,
    }
}


export default connect(mapStateToProps)(Button);
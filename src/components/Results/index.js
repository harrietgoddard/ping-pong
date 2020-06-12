import { connect } from "react-redux";
import Results from './Results';
import { deleteGame } from '../../data/action/api';

const mapStateToProps = ({ results, p1Name, p2Name, english, }) => ({ results, p1Name, p2Name, english });

const mapDispatchToProps = (dispatch) => {
    return {
        // handleClick: (game) => dispatch(deleteGame(game))
        handleDelete: (id) => dispatch(deleteGame(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Results);
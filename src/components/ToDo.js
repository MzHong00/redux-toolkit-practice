import { connect } from "react-redux";
import { remove } from "../store";

function ToDo({ text, deleteToDo}) {

    return (
        <li>
            {text}
            <button onClick={deleteToDo}>삭제</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        deleteToDo: () => {
            dispatch(remove(ownProps.id));
        }
    }   
}

export default connect(null, mapDispatchToProps)(ToDo);
import { useDispatch } from "react-redux";
import { remove } from "../store";

function ToDo({text, id}) {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(remove(id));
    }

    return (
        <li>
            {text}
            <button onClick={onClick}>삭제</button>
        </li>
    )
}

export default ToDo;
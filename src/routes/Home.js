import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store";

import ToDo from "../components/ToDo"

function Home({ state, addToDo, deleteToDo }) {
    const [text, setText] = useState("");
    const toDo = useSelector((state) => {
        return state.toDos;
    });

    const dispatch = useDispatch();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(add(text));
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDo.map((toDo) =>
                    <ToDo key={toDo.id} {...toDo}></ToDo>
                )}
            </ul>
        </>
    )
}

export default Home;
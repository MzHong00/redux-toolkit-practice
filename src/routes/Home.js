import { React, useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";

import ToDo from "../components/ToDo"

function Home({ state, addToDo, deleteToDo }) {
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {state.map((toDo) =>
                    <ToDo key={toDo.id} {...toDo}></ToDo>
                )}
            </ul>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        addToDo: (text) => {
            dispatch(add(text));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { React, useState } from "react";
import { Outlet } from "react-router-dom";

function Home() {
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul></ul>
            <Outlet></Outlet>
        </>
    )
}

export default Home;
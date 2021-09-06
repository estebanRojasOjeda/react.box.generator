import React, { useState } from "react";
import View from "./View";

const Selector = () => {
    const [color, setColor] = useState("");
    const [box, setBox] = useState([]);

    const colorUpdate = (e) => {
        setColor(e.target.value)
    }

    const createBox = (el) => {
        el.preventDefault();
        setBox([
            ...box,
            color
        ]);
    }

    return (
        <>
            <form onSubmit={createBox}>
                <input type="text" name="color"
                    id="color" placeholder="Ingrese color..." value={color}
                    onChange={colorUpdate} />
                <br/>
               {/*  <input type="select" name="color" id="color" onSelect={colorUpdate}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="brown">Brown</option>
                    <option value="gray">Gray</option>
                </input> */}

                <button type="submit">Add!</button>
            </form>
            <br />
            <View box={box}></View>
        </>
    )
}

export default Selector;
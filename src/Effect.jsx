import React, { useEffect, useState } from "react";

const Effect = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        alert("I am clicked!");
    })

    return (
        <>
        <button onClick={() => {
            setNum(num + 1);
        }}
        >
            click me {num}
        </button>
        </>
    );
};

export default Effect;
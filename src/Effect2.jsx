import React, { useEffect, useState } from "react";

const Effect2 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    // useEffect(() => {
    //     alert("I am clicked!");
    // }, []); // only run when first time refresh then never run

    useEffect(() => {
        alert("I am clicked!");
        console.log('I am clicked!!!!!!');
    }, [num]);


    return (
        <>
        <button onClick={() => {
            setNum(num + 1);
        }}
        >
            click me {num}
        </button>
        <br />
        <button onClick={() => {
            setNums(nums + 1);
        }}
        >
            click me {nums}
        </button>
        </>
    );
};

export default Effect2;
import React from 'react'
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
    const gotToMBTI = () => {
        navigate("/MBTI");
    };
    return (
        <>
            <button onClick={gotToMBTI}>MBTI test</button>
        </>
    )
}

export default HomePage
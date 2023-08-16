import React from 'react';
import './JsxEx.css'

//JsxEx 컴포넌트
const JsxEx = () => {
    const style={
        backgroundColor : 'blue',
        //fontSize:'20px',
        color:'white'
    }
    return(
        //jsx 문법 적용
        <>
            <h1 style={style}> WEB </h1>
            <h2 className="header"> Javascript </h2>
        </>
    )
}
//외부에서 해당 컴포넌트에 접근하려면  export 필요
export default JsxEx;
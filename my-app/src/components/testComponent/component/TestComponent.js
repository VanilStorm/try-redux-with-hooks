import React from 'react';

const TestComponent = ({handleSetCount,count}) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', height:'100vh'}}>
            <h2>Count: {count}</h2>
            <div style={{display:'flex'}}>
                <button onClick={handleSetCount} value='+'>Increment</button>
                <button onClick={handleSetCount} value='-'>Decrement</button>
            </div>
        </div>
    );
};

export default TestComponent;
import React, {CSSProperties} from 'react';

function Error() {
    const cssStyle:CSSProperties = {
        color: "red",
        textAlign:"center",
        fontSize:40
    }
    return (
        <div style={{height: '800px', paddingTop: 200}}>
            <h1 style={cssStyle}>Эй! не стоит ходить где не просят....</h1>
        </div>
    );
}

export default Error;

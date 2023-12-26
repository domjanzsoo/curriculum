import * as React from 'react';

const CanvasPage = () => {
    const width: number = 2480;
    const height: number = 3508;

    return (
        <div style={{width: width / 3, height: height / 3}} className="background-white border border-2 ml-6 mt-8">
            Canvas
        </div>
    )
};

export default CanvasPage;
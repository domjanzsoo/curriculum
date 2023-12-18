import * as React from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';

interface Draggable {
    x: number,
    y: number
}


const ToolBar = () => {
    const barWidth: number = 400;
    const windowWidth: number = window.innerWidth;
    const [toolbarPosition, setToolbarPosition] = React.useState<Draggable>({x: windowWidth - (barWidth + 40), y: 40});
    const [diffPos, setDiffPos] = React.useState<Draggable>({ x: 0, y: 0 });

    const dragStart = (event: MouseEvent): void => {
        const boundingRect = event.currentTarget.getBoundingClientRect();
        
        setDiffPos({x: event.screenX - boundingRect.left, y: event.screenY - boundingRect.top })
    };

    const drag = (event: MouseEvent): void => {
        setToolbarPosition({
            x: event.screenX - diffPos.x,
            y: event.screenY - diffPos.y
        });
    };

    return (
        <div 
            className="bg-gray-600 toolbar" 
            style={{top: toolbarPosition.y + 'px', left: toolbarPosition.x + 'px', width: barWidth}}
            onDragStart={e => dragStart(e)}
            onDrag={e => drag(e)}
            onDragEnd={e => drag(e)}
            draggable={true}
        >
            <div 
                className="header bg-gray-800 rounded w-full h-10 flex flex-row-reverse cursor-pointer draggable"
            >
                <XMarkIcon className="h-6 w-6 text-white mr-3 mt-3" />
            </div>
        </div>
    )
};

export default ToolBar;
import React from 'react';
import { Draggable, Resizable,ToolItem } from '../interfaces';
import { Text } from 'react-konva';

interface ComponentProps {
    toolItem: ToolItem & Draggable
}

const CanvasElement: React.FC<ComponentProps> = ({toolItem}) => {
    console.log('toolItem from CanvasElement');
    console.log(toolItem);
    const [isDragging, setIsDragging] = React.useState(false);
    switch (toolItem.type) {
        case 'text':
            return (
                <Text
                    text="Draggable Text"
                    x={ toolItem.x }
                    y={ toolItem.y }
                    draggable
                    fill={ isDragging ? 'green' : 'black' }
                    onDragStart={() => setIsDragging(true) }
                    onDragEnd={(e) => {
                        setIsDragging(false);
                        toolItem.x = e.target.x();
                        toolItem.y = e.target.y();
                    }}
              />
            )
        default:
            return <>No tool item provided</>
    }
}

export default CanvasElement;   
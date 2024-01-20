import React from 'react';
import { Draggable, Resizable,ToolItem, TextElm } from '../interfaces';
import { Text, Transformer } from 'react-konva';
import { TEXT_ELEMENT_CONFIG } from '../../config/config';

interface ComponentProps {
    toolItem: ToolItem & Draggable & Resizable & TextElm,
    isSelected: boolean,
    onSelect: Function
}

const CanvasElement: React.FC<ComponentProps> = ({ toolItem, isSelected, onSelect }): JSX.Element => {
    const trRef = React.useRef<any>();
    const elmRef = React.useRef<any>(null);
    const [isDragging, setIsDragging] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([elmRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    },[isSelected]);

    switch (toolItem.type) {
        case 'text':
            return (
                <React.Fragment>
                    <Text
                        key={ toolItem.id }
                        ref={ elmRef }
                        text={ TEXT_ELEMENT_CONFIG.DEFAULT_TEXT }
                        id={ toolItem.id }
                        x={ toolItem.x }
                        y={ toolItem.y }
                        width={ toolItem.width ? toolItem.width : TEXT_ELEMENT_CONFIG.MIN_WIDTH_TEXT }
                        fontSize={ toolItem.fontSize ?? TEXT_ELEMENT_CONFIG.DEFAULT_FONT_SIZE }
                        padding={ TEXT_ELEMENT_CONFIG.PADDING_TEXT }
                        draggable
                        scaleX={ TEXT_ELEMENT_CONFIG.DEFAULT_SCALE_TEXT }
                        scaleY={ TEXT_ELEMENT_CONFIG.DEFAULT_SCALE_TEXT }
                        rotation={ toolItem.rotation }
                        fill={ isDragging ? 'green' : 'black' }
                        onDragStart={() => setIsDragging(true) }
                        onDragEnd={(e) => {
                            setIsDragging(false);
                            toolItem.x = e.target.x();
                            toolItem.y = e.target.y();
                        }}
                        onClick={() => onSelect()}
                        onTransform={() => {
                            const width = Math.max(elmRef.current.width() * elmRef.current.scaleX(), TEXT_ELEMENT_CONFIG.MIN_WIDTH_TEXT)

                            toolItem.width = width;
                            toolItem.rotation = elmRef.current.rotation();
                            toolItem.fontSize = elmRef.current.fontSize();

                            elmRef.current.setAttrs({
                                width: width,
                                scaleX: 1
                            });
                        }}
                    />
                    {isSelected && (
                        <Transformer
                            ref={ trRef }
                            flipEnabled={ true }
                            enabledAnchors={ ['middle-left', 'middle-right'] }
                            boundBoxFunc={(oldBox, newBox) => {
                                newBox.width = Math.max(TEXT_ELEMENT_CONFIG.MIN_WIDTH_TEXT, newBox.width);
                                return newBox;
                            }}
                        />
                    )}
                </React.Fragment>
            )
        default:
            return <>No tool item provided</>
    }
}

export default CanvasElement;
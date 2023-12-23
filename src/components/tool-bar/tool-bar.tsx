import * as React from 'react';
import {XMarkIcon, DocumentArrowUpIcon, ArrowPathIcon} from '@heroicons/react/24/solid';
import ToolCollection from './tools';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

interface Draggable {
    x: number,
    y: number
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        newToolElm: (elm: object) =>{
            const newToolItem = {
                id: uuidv4(),
                component: elm.component,
                name: elm.title
            };

            dispatch({type: 'ADD_NEW_TOOL_ITEM', payload: { newToolItem }});
        }
    }
};

const ToolBar = ({ newToolElm }) => {
    const barWidth: number = 100;
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

    const exportFile = () => {
        console.log('this will export the file');
    };

    const refresh = () => {
        console.log('This will refresh the file');
    };

    const addNewElement = (action: string) => {
        console.log('Adding new element ' + action );
    };

    return (
        <div 
            className="bg-gray-600 toolbar" 
            style={{top: toolbarPosition.y + 'px', left: toolbarPosition.x + 'px', width: barWidth}}
            onDragStart={dragStart}
            onDrag={drag}
            onDragEnd={drag}
            draggable={true}
        >
            <div className="header bg-gray-800 rounded w-full h-10 flex flex-row-reverse cursor-pointer">
                <XMarkIcon className="h-5 w-5 text-white mr-3 mt-3" />
            </div>
            <div className="body">
                <div className="grid grid-cols-2 gap-1 content-center">
                    {
                        ToolCollection.map((tool, index) => {
                            const ToolIcon = tool.icon
                            return (
                                <div className="text-white" key={ index }>
                                    <ToolIcon className="w-6 h-6 mx-auto cursor-pointer" onClick={() => newToolElm(tool)} />
                                </div>
                            )
                        })
                    }       
                </div>
            </div>
            <div className="footer bg-gray-800 rounded w-full flex flex-row-reverse mb-2">
                    <ArrowPathIcon className="text-white w-4 h-4 mt-1 ml-1 mr-2 cursor-pointer" onClick={refresh} />
                    <DocumentArrowUpIcon className="text-white w-4 h-4 mt-1 ml-1 cursor-pointer" onClick={exportFile} />
            </div>
        </div>
    )
};

const ConnectedToolbar = connect(mapStateToProps, mapDispatchToProps)(ToolBar);

export default ConnectedToolbar;
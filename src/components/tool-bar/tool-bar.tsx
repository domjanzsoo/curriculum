import * as React from 'react';
import { XMarkIcon, DocumentArrowUpIcon, ArrowPathIcon, SquaresPlusIcon } from '@heroicons/react/24/solid';
import ToolCollection from './tools';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Draggable, MainState, ToolItem, TextElm } from '../interfaces';
import TextEditor from './tool-editors/text-editor';
import { TEXT_ELEMENT_CONFIG } from '../../config/config';

interface ComponentProps {
    toolbar: Object,
    stage: Object
    barPosition: Draggable,
    tools: Array<ToolItem>,
    newToolElm: Function,
    addPage: Function,
    reposition: Function
}

const mapStateToProps = (state: MainState) => {
    return { ...state.toolbar };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        newToolElm: (elm: ToolItem & TextElm ): void => {
            const newToolItem: any = {
                id: uuidv4(),
                component: {
                    type: elm.type
                },
                type: elm.type,
                text: (elm.type === 'text') ? TEXT_ELEMENT_CONFIG.DEFAULT_TEXT : null
            };

            dispatch({type: 'ADD_NEW_TOOL_ITEM', payload: { newToolItem }});
            dispatch({type: 'ADD_TOOL_ELEMENT_TO_PAGE', payload: { elm: newToolItem }});
        },
        reposition: (event: MouseEvent, diffPos: Draggable) => {
            const position = {
                x: event.screenX - diffPos.x,
                y: event.screenY - diffPos.y
            }

            dispatch({ type: 'UPDATE_BAR_POSITION', payload: { position }})
        },
        addPage: () => {
            dispatch({ type: 'ADD_NEW_PAGE', payload: { id: uuidv4() } })
        }
    }
};

const ToolBar: React.FC<ComponentProps> = ({ newToolElm, reposition, barPosition, tools, addPage }): JSX.Element => {
    const barWidth: number = 200;
    const windowWidth: number = typeof window !== 'undefined' ? window.innerWidth : 800;
    const [diffPos, setDiffPos] = React.useState<Draggable>({ x: 0, y: 0 });

    const dragStart = (event: React.MouseEvent): void => {
        const boundingRect = event.currentTarget.getBoundingClientRect();

        setDiffPos({x: event.screenX - boundingRect.left, y: event.screenY - boundingRect.top })
    };

    const exportFile = () => {
        console.log('this will export the file');
    };

    const refresh = () => {
        console.log('This will refresh the file');
    };

    return (
        <div
            className="bg-gray-600 toolbar"
            style={{top: barPosition.y + 'px', left: barPosition.x + 'px', width: barWidth}}
            onDragStart={dragStart}
            onDrag={e => reposition(e, diffPos)}
            onDragEnd={e => reposition(e, diffPos)}
            draggable={true}
        >
            <div className="header bg-gray-800 rounded w-full h-10 flex flex-row-reverse cursor-pointer">
                <XMarkIcon className="h-5 w-5 text-white mr-3 mt-2 mb-1" />
            </div>
            <div className="body grid grid-cols-3 gap-4">
                <div className="tool-grid col-span grid grid-cols-2 ml-2">
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
                <div>
                    <ul className="layers divide-y divide-white col-span-2 text-white text-left">
                        <li className="border-l-2 pl-2 border-white">Layers</li>
                        {
                            tools.map((tool, index) => {
                                return (
                                    <li className="border-l-2 pl-4 border-white" key={ index }>
                                        { tool.type }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
               <div className="editor-panel bg-gray-600 absolute">
                    <div className="bridge bg-gray-600 absolute"></div>
                    <TextEditor />
               </div>
            </div>
            <div className="footer bg-gray-800 rounded w-full flex flex-row-reverse pb-1">
                    <ArrowPathIcon className="text-white w-4 h-4 mt-1 ml-1 mr-2 cursor-pointer" onClick={refresh} />
                    <DocumentArrowUpIcon className="text-white w-4 h-4 mt-1 ml-1 cursor-pointer" onClick={exportFile} />
                    <SquaresPlusIcon className="text-white w-4 h-4 mt-1 ml-1 cursor-pointer" onClick={() => addPage()} />
            </div>
        </div>
    )
};

const ConnectedToolbar = connect(mapStateToProps, mapDispatchToProps)(ToolBar as any);

export default ConnectedToolbar;
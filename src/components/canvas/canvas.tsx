import * as React from 'react';
import { connect } from 'react-redux';
import { MainState, Stageable, Page, ToolItem, Resizable, Draggable, TextElm } from '../interfaces';
import {  Stage, Layer } from 'react-konva';
import Konva from 'konva';
import CanvasElement from './canvas-elm';

const mapStateToProps = (state: MainState) => {
    return { ...state.stage };
};

interface TextAreaProps {
    handleTextChange: Function,
    textElm: TextElm & Resizable
    stage: Konva.Stage,
    cancelTextArea: Function
}

const TextArea: React.FC<TextAreaProps> = ({stage, textElm, handleTextChange, cancelTextArea}) => {
    const areaRef = React.useRef<any>();
    const [textValue, setTextValue] = React.useState<string>(textElm.text);

    const style: React.CSSProperties = {
        position: 'absolute',
        left: stage.container().offsetLeft + textElm.node.absolutePosition().x + 'px',
        top: stage.container().offsetTop + textElm.node.absolutePosition().y + 'px',
        width: textElm.width ?? 0 + textElm.node.padding() * 2 + 'px',
        height: textElm.height ?? 0 - textElm.node.padding() * 2 + 5  + 'px',
        lineHeight: textElm.node.lineHeight(),
        color: textElm.node.fill(),
        border: 'none',
        fontSize: textElm.node.fontSize(),
        fontFamily: textElm.node.fontFamily(),
        transformOrigin: 'left top',
        padding: '0px',
        margin: '0px',
        overflow: 'hidden',
        outline: 'none',
        resize: 'none',
        zIndex: 9999
    };

    React.useEffect(() => {
        if(areaRef.current) areaRef.current.focus();
    });

    const textTypeEventHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const target = event.target as HTMLTextAreaElement;

        if (event.key === 'Enter' && !event.shiftKey) {
            handleTextChange(target.value);
            cancelTextArea();
        }

        areaRef.current.style.height = areaRef.current.scrollHeight + textElm.node.fontSize() + 'px';
    };

    return (
        <React.Fragment>
            <textarea
                ref={ areaRef }
                style={ style }
                value={ textValue }
                onKeyDown={ textTypeEventHandler }
                onChange={(e) => setTextValue(e.target.value)}
            />
        </React.Fragment>
    )
}


const mapDispatchToProps = (dispatch: Function) => {
        return {
            selectPage: (page: number) => {
                dispatch({ type: 'SELECT_PAGE', payload: { page }});
            },
            selectElement: (elmId: string) => {
                dispatch({ type: 'SELECT_ELEMENT', payload: { elmId } })
            },
            updateElements: () => {
                console.log('update');
            }
        };
};

interface CanvasPageProps {
    pages: Array<Page>,
    selectPage: Function,
    currentlyEditedPage: string,
    updateElements: Function,
    selectElement: Function
}

const CanvasPage: React.FC<CanvasPageProps> = ({ pages, selectPage, currentlyEditedPage, updateElements, selectElement }): JSX.Element => {
    const [selectedItem, setSelectedItem] = React.useState<ToolItem & Resizable & Draggable & TextElm | null>(null)
    const [displayTextArea, setDisplayTextArea] = React.useState<boolean>(false);
    const stageRef = React.useRef<any>();

    const width: number = 2480;
    const height: number = 3508;
    const stage: Stageable = {
        width: width / 3,
        height: height / 3,
        pages: []
    };

    const pageClickHandler = (e: Konva.KonvaEventObject<MouseEvent>, pageId: string) => {
        const clickedOnEmpty = e.target === e.target?.getStage();

        if (clickedOnEmpty) {
            setSelectedItem(null);
            setDisplayTextArea(false);
        }

        selectPage(pageId);
    };

    const handleTextChange = (text: string) => {
        if (selectedItem) {
            selectedItem.text = text;
            selectedItem.node.text(text);
        }
    };

    const handleElementSelection = (elm: ToolItem & Resizable & Draggable & TextElm) => {
        selectElement(elm.id);
        setSelectedItem(elm);
    };

    return (
        <div>
            {
                pages.map(page => {
                    const className = (currentlyEditedPage === page.id) ? 'border-red-300 ' : 'border-gray-300 '

                    return(
                        <div
                            key={ page.id }
                            style={{width: stage.width, height: stage.height}}
                            className={ className  + 'bg-white border border-2 ml-6 mt-8'}
                        >
                            <Stage
                                ref={ stageRef }
                                key={ page.id }
                                width={ stage.width }
                                height={ stage.height }
                                onMouseDown={ event => pageClickHandler(event, page.id) }
                            >
                                {
                                    page.contentElms.map((elm, index) => {
                                        return (
                                            <Layer key={ index }>
                                                <CanvasElement
                                                    key={ elm.id }
                                                    toolItem={ elm }
                                                    isSelected={elm.id === selectedItem?.id}
                                                    onSelect={() => handleElementSelection(elm)}
                                                    dblClickHandling={() => setDisplayTextArea(true)}
                                                    textAreaDisplayed={ displayTextArea }
                                                />
                                            </Layer>
                                        )
                                    })
                                }
                            </Stage>
                        </div>
                    )
                })
            }
            {(displayTextArea && selectedItem?.type === 'text') && (
                        <TextArea
                            stage={ stageRef.current }
                            textElm={ selectedItem }
                            handleTextChange={handleTextChange}
                            cancelTextArea={() => setDisplayTextArea(false)}
                        />
                    )}
        </div>
    )
};

const ConnectedCanvasPage = connect(mapStateToProps, mapDispatchToProps)(CanvasPage as any)

export default ConnectedCanvasPage;
import * as React from 'react';
import { connect } from 'react-redux';
import { MainState, Stageable, Page, ToolItem } from '../interfaces';
import {  Stage, Layer } from 'react-konva';
import Konva from 'konva';
import CanvasElement from './canvas-elm';

const mapStateToProps = (state: MainState) => {
    return { ...state.stage };
};


const mapDispatchToProps = (dispatch: Function) => {
        return {
            selectPage: (page: number) => {
                dispatch({ type: 'SELECT_PAGE', payload: { page }});
            },
            updateElements: () => {
                console.log('update');
            }
        };
}

const CanvasPage = ({ pages, selectPage, currentlyEditedPage, updateElements }: { pages: Array<Page>, selectPage: Function, currentlyEditedPage: string, updateElements: Function }): JSX.Element => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

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
        }

        selectPage(pageId);
    }

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
                            <Stage key={ page.id } width={ stage.width } height={ stage.height } onMouseDown={ event => pageClickHandler(event, page.id) }>
                                {
                                    page.contentElms.map((elm, index) => {
                                        return (
                                            <Layer key={ index }>
                                                <CanvasElement key={ elm.id } toolItem={ elm } isSelected={elm.id === selectedItem} onSelect={() => setSelectedItem(elm.id)} />
                                            </Layer>
                                        )
                                    })
                                }
                            </Stage>
                        </div>
                    )
                })
            }
        </div>
    )
};

const ConnectedCanvasPage = connect(mapStateToProps, mapDispatchToProps)(CanvasPage as any)

export default ConnectedCanvasPage;
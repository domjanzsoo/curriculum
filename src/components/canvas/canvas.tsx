import * as React from 'react';
import { connect } from 'react-redux';
import { MainState, Stageable, Page } from '../interfaces';
import {  Stage, Layer } from 'react-konva';

const mapStateToProps = (state: MainState) => {
    return { ...state.stage };
};


const mapDispatchToProps = (dispatch: Function) => {
        return {
            selectPage: (page: number) => {
                dispatch({ type: 'SELECT_PAGE', payload: { page }})
            }
        };
}

const CanvasPage = ({ pages, selectPage, currentlyEditedPage }: { pages: Array<Page>, selectPage: Function, currentlyEditedPage: string }): JSX.Element => {
    const width: number = 2480;
    const height: number = 3508;
    const stage: Stageable = {
        width: width / 3,
        height: height / 3,
        pages: []
    };

    return (
        <div>
            {
                pages.map((page, index) => {
                    const className = (currentlyEditedPage === page.id) ? 'border-red-300 ' : 'border-gray-300 '

                    return(
                        <div 
                            style={{width: stage.width, height: stage.height}}
                             className={ className  + 'bg-white border border-2 ml-6 mt-8'} 
                             key={ index }
                             onClick={ () => selectPage(index) }
                        >
                            <Stage width={ stage.width } height={ stage.height }>
                                {
                                    page.contentElms.map((elm, index) => {
                                        return <Layer key={ index }>elm.name</Layer>
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
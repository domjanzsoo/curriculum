import * as React from 'react';
import { connect } from 'react-redux';
import { Resizable, Stage } from '../interfaces';

const mapStateToProps = state => {
    return { ...state.stage };
};


const mapDispatchToProps = (dispatch: Function) => {
        return {
            addPage: (page: object) => {
                dispatch('ADD_NEW_PAGE', {payload: { page }})
            }
        };
}

const CanvasPage = ({ pages, addPage }) => {
    const width: number = 2480;
    const height: number = 3508;
    const stage: Resizable & Stage = {
        width: width / 3,
        height: height / 3,
        pages: []
    };

    return (
        <div>
            {
                pages.map((page, index) => {
                    return(
                        <div style={{width: stage.width, height: stage.height}} className="background-white border border-2 ml-6 mt-8" key={ index }>
                            Canvas page {index + 1}
                        </div>
                    )
                })
            }
        </div>
    )
};

const ConnectedCanvasPage = connect(mapStateToProps, mapDispatchToProps)(CanvasPage)

export default ConnectedCanvasPage;
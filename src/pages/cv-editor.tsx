import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import ToolBar from '../components/tool-bar/tool-bar';
import CanvasPage from '../components/canvas/canvas';


const mapStateToProps = state => {
    return state.test;
};
  

const CVEditorPage = () => {
    return (
        <main className="bg-indigo-50">
            <h2>
                Editor page
                <Link className="ml-3" to="/details">Details</Link>
            </h2>
                <ToolBar/>
                <CanvasPage/>
                
        </main>
    )
};

export default CVEditorPage;
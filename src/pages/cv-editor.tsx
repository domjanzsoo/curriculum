import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import ToolBar from '../components/tool-bar/tool-bar';

const Test = ({ text }) => (
    <div>
        <p>Test: { text }</p>
    </div>
);

const mapStateToProps = state => {
    return state.test;
};
  
const ConnectedTest = connect(mapStateToProps)(Test);

const CVEditorPage = () => {
    return (
        <main>
            <h2>Editor page</h2>
                <ConnectedTest />
                <Link to="/details">Details</Link>
                <span className="archive-box-x-mark"></span>
                <ToolBar/>
        </main>
    )
};

export default CVEditorPage;
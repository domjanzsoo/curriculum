import * as React from 'react';
import { Link } from 'gatsby';
import ConnectedToolbar  from '../components/tool-bar/tool-bar';
import CanvasPage from '../components/canvas/canvas';


const CVEditorPage = (): JSX.Element => {
    return (
        <main className="bg-indigo-50">
            <h2>
                Editor page
                <Link className="ml-3" to="/details">Details</Link>
            </h2>
                <ConnectedToolbar />
                <CanvasPage/>
        </main>
    )
};

export default CVEditorPage;
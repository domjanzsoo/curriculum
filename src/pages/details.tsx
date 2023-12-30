import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { MainState } from '../components/interfaces';

interface Test {
    text: string
}

const Test = ({ test, textUpdate }: { test: Test, textUpdate: Function}) => (
    <div>
        <p>Test: { test.text }</p>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name="text" onChange={event => textUpdate(event.target.value)} />
    </div>
);

const mapStateToProps = (state: MainState) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = (dispatch: Function) => {
    return { textUpdate: (changedText: string) => {
        dispatch({type: 'TEST', changedText}) 
    }};
};  

const ConnectedTest = connect(mapStateToProps, mapDispatchToProps)(Test as any);

const DetailsPage = () => {
    return (
        <main>
            <h2>Details page...</h2>
            <ConnectedTest />
            <Link to="/cv-editor">Editor </Link>
        </main>
    )
};

export default DetailsPage;
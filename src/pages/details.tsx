import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { MainState, Stageable } from '../components/interfaces';

const Test: React.FC<{ stage: Stageable }> = ({stage}) => {
    console.log(stage)

    return (
        <div>
            Test
        </div>
    )
};

const mapStateToProps = (state: MainState) => {
    return {
        stage: state.stage
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return { };
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
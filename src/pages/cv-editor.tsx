import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

const Test = ({ text }) => (
    <div>
      <p>Test: { text }</p>
      {/* <button className="btn px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800" onClick={test}>Change</button> */}
    </div>
  )

//   Test.propTypes = {
//     tester: PropTypes.string.isRequired,
//     test: PropTypes.func.isRequired,
//   }

const mapStateToProps = state => {
    console.log(state)
    return state
  }
  
// const mapDispatchToProps = dispatch => {
// return { tester: () => dispatch({ type: `TEST`, value: 'blblaaaa' }) }
// }
  
const ConnectedTest = connect(mapStateToProps)(Test)

const CVEditorPage = () => {
    return (
        <main>
            <h2>Editor page</h2>
                <ConnectedTest />
                <Link to="/details">Details</Link>
        </main>
    )
}

export default CVEditorPage
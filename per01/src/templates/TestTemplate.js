import React, { Fragment } from 'react';

const TestTemplate = (props) => {
    return (
        <Fragment>
            <div className="test">
                변경되는 부분 <br />
                {props.children}
            </div>
        </Fragment>
    )
}


export default TestTemplate;
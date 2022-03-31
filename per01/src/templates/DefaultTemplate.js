import React, {} from 'react';

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import TestTemplate from './TestTemplate';
import BasicTemplates from './BasicTemplates';

const DefaultTemplate = (props) => {
    return (
        <div className="BasicTemplates">
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    )
}


export default DefaultTemplate;
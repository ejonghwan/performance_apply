import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TestTemplate from './TestTemplate'

function BasicTemplates(props) {
  return (
    // <div className="BasicTemplates">
    //   <section className={'HeaderSection'}>
    //   <TestTemplate> asdasd </TestTemplate>
    //     <Header />
    //   </section>
    //   <section className={'Body'}>{props.children}</section>
    //   <section className={'FooterSection'}>
       
    //     <Footer />
    //   </section>
    // </div>
    <div>
      <section className={'Body'}>{props.children}</section>
      
    </div>
  )
}

export default BasicTemplates

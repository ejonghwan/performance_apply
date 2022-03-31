import React from 'react'

import './index.css'
import BasicTemplates from '../../templates/BasicTemplates'
import ArticleList from '../../components/ArticleList'


import TestTemplate from '../../templates/TestTemplate'
import DefaultTemplate from '../../templates/DefaultTemplate'


function ListPage(props) {
  return (
    <DefaultTemplate>
      <TestTemplate>여기는 리스트 페이지 테스트</TestTemplate>
      <BasicTemplates>
        <div style={{ width: '700px', margin: 'auto' }}>
          <ArticleList />
        </div>
      </BasicTemplates>
    </DefaultTemplate>
  )
}

export default ListPage

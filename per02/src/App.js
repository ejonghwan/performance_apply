import React, { useState, Suspense, lazy, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InfoTable from './components/InfoTable'
import SurveyChart from './components/SurveyChart'
import Footer from './components/Footer'

// import ImageModal from './components/ImageModal'

const ImageModal = lazy(() => import('./components/ImageModal'))

// 만약 임포트할게 많다면 팩토리패턴으로 함수 
const lazyWithPreload = (importFunction) => {
    const Component = React.lazy(importFunction)
    console.log(Component)
    Component.preload = importFunction;
    return Component
}

const LazyImageModal = lazyWithPreload(() => import('./components/ImageModal'))







const handleMouseenter = () => {
    //임포트 사용안한다고 에러 뜨면 변수에 담아두면 됨
    const component = import('./components/ImageModal')
}


function App() {
    const [showModal, setShowModal] = useState(false)


    // 만약 받을 양이 크다면 component did mount 시점에 로딩 
    // useEffect(() => {
    //     const component = import('./components/ImageModal')
    // }, [])

    useEffect(() => {
        LazyImageModal.preload()
        const img = new Image();
        img.src = 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800'
    }, [])
    


    return (
        <div className="App">
            <Header />
            <InfoTable />
            <ButtonModal onClick={() => { setShowModal(true) }} onMouseEnter={handleMouseenter}>올림픽 사진 보기</ButtonModal>
            <SurveyChart />
            <Footer />
            <Suspense fallback={null}>
                {showModal ? <ImageModal closeModal={() => { setShowModal(false) }} /> : null}
            </Suspense>
        </div>
    )
}

const ButtonModal = styled.button`
    border-radius: 30px;
    border: 1px solid #999;
    padding: 12px 30px;
    background: none;
    font-size: 1.1em;
    color: #555;
    outline: none;
    cursor: pointer;
`

export default App

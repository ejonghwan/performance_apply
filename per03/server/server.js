const express = require('express')
const app = express()
const port = 5000
const path = require('path')


const header = {
    setHeaders: (res, path) => {
        //no-store가 안먹는 구 브라우저를 위해 여러개 적어줌 
        // res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
        // res.setHeader('Expires', '-1')
        // res.setHeader('Pragma', 'no-cache')

        if(path.endsWith('.html')) {
            // html은 변경 시 마다 새로받음
            res.setHeader('Cache-Control', 'no-cache') 
        } else if(path.endsWith('.js') || path.endsWith('.css') || path.endsWith('.webp') || path.endsWith('.jpg')) {
            // hash를 하면 길게줌 
            res.setHeader('Cache-Control', 'public, max-age=315360000')
        } else {
            // 그 외 파일은 캐시하지않음
            res.setHeader('Cache-Control', 'no-store')
        }
        
        // res.setHeader('Expires', '-1')
        // res.setHeader('Pragma', 'no-cache')
    },
}

app.use(express.static(path.join(__dirname, '../build'), header))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

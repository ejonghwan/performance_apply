module.exports = {
 
    defaultExtractor: (content) => content.match(/[\w\:\-]+/g) || []
    //아까 비교할 --content 이걸 여기에서 비교해서 배열로 리턴
  }

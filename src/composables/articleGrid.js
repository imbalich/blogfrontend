export default function articleGrid() {
    const imageIfExists = (article) => {
        return _imageIfExists(article)
    };

    // const gridStyle = (article) => {
    //     return _gridStyle(article)
    // };

    return {
        imageIfExists,// 返回图内容
        // gridStyle,// 返回图样式
    }
}

function _imageIfExists(article) {
    // 存在文章图返回文章图内容
    if (article.avatar) {
        return article.avatar.content
    }
}

// function _gridStyle(article) {
//     // 返回文章图样式
//     if (article.avatar) {
//         return {
//             display: 'grid',
//             gridTemplateColumns: '1fr 4fr'
//         }
//     }
// }
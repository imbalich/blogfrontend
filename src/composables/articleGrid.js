export default function articleGrid() {
    const imageIfExists = (article) => {
        return _imageIfExists(article)
    };

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
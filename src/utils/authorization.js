import axios from 'axios';

async function authorization() {
    const storage = localStorage;

    let hasLogin = false;
    let username = storage.getItem('username.myblog');

    const expiredTime = Number(storage.getItem('expiredTime.myblog'));
    const current = (new Date()).getTime();
    const refreshToken = storage.getItem('refresh.myblog');

    // 初始 token 未过期
    if (expiredTime > current) {
        hasLogin = true;
        console.log('鉴权通过');
    }
    // 初始 token 过期
    // 申请刷新 token
    else if (refreshToken !== null) {
        try {
            let response = await axios.post('/api/token/refresh/', {refresh: refreshToken});

            const nextExpiredTime = Date.parse(response.headers.date) + 60 * 100 * 1000;

            storage.setItem('access.myblog', response.data.access);
            storage.setItem('expiredTime.myblog', nextExpiredTime);
            storage.removeItem('refresh.myblog');

            hasLogin = true;

            console.log('鉴权跟新')
        }
        catch (err) {
            storage.clear();
            hasLogin = false;

            console.log('鉴权失败')
        }
    }
    // 无任何有效 token
    else {
        storage.clear();
        hasLogin = false;
        console.log('无鉴权')
    }

    console.log('鉴权完毕');

    return [hasLogin, username]
}

export default authorization;
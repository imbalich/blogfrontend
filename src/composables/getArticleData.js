import axios from 'axios';
import { onMounted, watch } from 'vue'

export default function getArticleData(info, route, kwargs) {
    const getData = async () => {

        // 路由中页数非空就是当前页，空设置为 page=1
        const queryPage = route.query.page !== undefined ? parseInt(route.query.page) : 1;
        if (kwargs.value.page === queryPage && kwargs.value.searchText === route.query.search) {
            return
        }

        let url = '/api/article';

        route.query.page = queryPage;

        let params = new URLSearchParams();
        params.appendIfExists('page', route.query.page);
        params.appendIfExists('search', route.query.search);


        const paramsString = params.toString();
        if (paramsString.charAt(0) !== '') {
            url += '/?' + paramsString
        }

        const response = await axios.get(url);

        info.value = response.data;
        kwargs.value.page = queryPage;
        kwargs.value.searchText = route.query.search;
    };

    onMounted(getData);

    watch(route, getData);
}
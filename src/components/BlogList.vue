<template>
  <!-- 原模版 -->
  <!-- <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
      <svg class="bd-placeholder-img" width="300" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">标签</strong>
      <h3 class="mb-0">文章标题</h3>
      <div class="mb-1 text-muted">信息</div>
      <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="stretched-link">文章详情</a>
    </div>
  </div> -->
  <!-- 原模版 -->

  <div v-for="article in info.results" v-bind:key="article.url" id="articles"
    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
      <img v-if="article.avatar" :src="imageIfExists(article)" class="bd-placeholder-img" width="300" height="250"
        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"
        alt="Thumbnail">
      <img v-else src="avatat404.jpg" class="bd-placeholder-img" width="300" height="250" role="img"
        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Thumbnail">
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong v-if="article.category !== null"
        class="d-inline-block mb-2 text-primary">{{ article.category.title }}</strong>
      <h3 class="mb-0">
        {{ article.title }}
      </h3>
      <div class="text-muted d-flex flex-row">
        <span>标签：</span>
        <span v-for="tag in article.tags" v-bind:key="tag" class="mx-1">
          {{ tag }}
        </span>
        <!-- <div class="border border-secondary d-md-inline-block mx-1 my-1"></div> -->
      </div>
      <div class="text-muted d-flex flex-row">
        <span class="me-1">作者：{{ article.author.username }}</span>
        <span class="mx-1">创建时间：{{ formatted_time(article.created) }}</span>
      </div>
      <p class="card-text mb-auto">{{ article.title }}</p>
      <a href="#" class="stretched-link">文章详情</a>
    </div>
  </div>

  <!-- 分页 -->
  <nav aria-label="Blog pagination" class="row g-0">
    <ul class="pagination justify-content-center">
      <li v-if="is_page_exists('previous')" class="page-item">
        <router-link :to="get_path('previous')" class="page-link">
          Previous
        </router-link>
      </li>
      <li v-else class="page-item disabled">
        <router-link :to="get_path('previous')" class="page-link">
          Previous
        </router-link>
      </li>
      <!-- <li class="page-item"><a class="page-link" href="#">1</a></li> -->
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="{{ get_page_param('current') }}">{{ get_page_param('current') }}</a>
      </li>

      <li v-if="is_page_exists('next')" class="page-item">
        <router-link :to="get_path('next')" class="page-link">
          Next
        </router-link>
      </li>
      <li v-else class="page-item disabled">
        <router-link :to="get_path('next')" class="page-link">
          Next
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getArticleData from '@/composables/getArticleData.js'
import pagination from '@/composables/pagination.js'
import articleGrid from '@/composables/articleGrid.js'
import formattedTime from '@/composables/formattedTime.js'


export default {
  name: 'BlogList',
  components: {},

  setup() {
    const info = ref('');
    const route = useRoute();
    const kwargs = ref({ page: 0, searchText: '' });
    getArticleData(info, route, kwargs);

    const {
      is_page_exists,
      get_page_param,
      get_path
    } = pagination(info, route);

    const {
      imageIfExists
    } = articleGrid();


    const formatted_time = formattedTime;
    console.log(info)
    return {
      info,
      is_page_exists,
      get_page_param,
      get_path,
      imageIfExists,
      formatted_time,
    }
  }
}
</script>

<style scoped></style>
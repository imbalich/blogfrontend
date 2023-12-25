<template>
  
  <div v-for="article in info.results" v-bind:key="article.url" id="articles"
    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
      <img v-if="article.avatar" :src="imageIfExists(article)" class="bd-placeholder-img" width="300" height="250"
        role="img" preserveAspectRatio="xMidYMid slice" focusable="false" alt="Thumbnail">
      <img v-else src="@/assets/image/avatat404.jpg" class="bd-placeholder-img" width="300" height="250" role="img"
        preserveAspectRatio="xMidYMid slice" focusable="false" alt="Thumbnail">
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong v-if="article.category !== null" class="d-inline-block mb-2 text-primary">{{ article.category.title
      }}</strong>
      <h3 class="mb-0">
        {{ article.title }}
      </h3>
      <div class="text-muted d-flex flex-row mt-2">
        <span>标签：</span>
        <span v-for="tag in article.tags" v-bind:key="tag" class="mx-1">
          {{ tag }}
        </span>
        <!-- <div class="border border-secondary d-md-inline-block mx-1 my-1"></div> -->
      </div>
      <div class="text-muted d-flex flex-row">
        <span class="me-1">作者：{{ article.author.username }}</span>
        <div class="vr"></div>
        <span class="mx-1">创建时间：{{ formatted_time(article.created) }}</span>
      </div>
      <p class="card-text my-2">{{ article.introduction }}</p>
      <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }" class="">
        文章详情
      </router-link>
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
import articleImage from '@/composables/articleImage.js'
import formattedTime from '@/composables/formattedTime.js'


export default {
  name: 'BlogList',
  components: {},

  setup () {
    const info = ref('')
    const route = useRoute()
    const kwargs = ref({ page: 0, searchText: '' })
    getArticleData(info, route, kwargs)

    const {is_page_exists,get_page_param,get_path} = pagination(info, route)

    const {imageIfExists} = articleImage()

    const formatted_time = formattedTime

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
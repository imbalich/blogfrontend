<template>
  <div class="container">
    <div class="row py-4 py-md-4 mt-5">
      <div class="col-sm-9 col-md-9">
        <!-- 博客内容--star -->
        <BlogList />
        <!-- 博客内容--end -->
      </div>
      <div class="col-sm-3 col-md-3">
        <!-- 简介 -->
        <div class="card" style="width: 18rem;">
          <img src="头像.jpg" width="100%" height="50%" class="card-img-top" alt="User Avatar">
          <div class="card-body d-flex flex-column">
            <div class="d-flex flex-row">
              <img class="rounded-circle" src="头像.jpg" alt="User Avatar" width="40" height="40" aria-expanded="false">
              <div class="p-2">
                <h4 class="card-title">imba_lich</h4>
              </div>
            </div>
            <p class="card-text mt-3">想要成为全栈工程师的咸鱼可靠性工程师！</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">文章 :</li>
            <li class="list-group-item">分类 :</li>
            <li class="list-group-item">标签 :</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">个人主页</a>
            <a href="#" class="card-link">奇怪的链接</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';

export default {
  name: 'Context',
  components: { BlogList },
}
</script>
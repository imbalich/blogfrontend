<template>
  <footer class="bd-footer py-4 py-md-4 mt-5 bg-body-tertiary">
    <div class="container text-center py-1 py-md-1 px-4 px-md-3 text-body-secondary">
      <div class="row">
        <div class="col">
          <h3>关于我们</h3>
          <p>基于Vue3+Drf搭建的博客项目, 样式库设计来源于Bootstrap5, 用于记录和分享日常学习生活</p>
        </div>
        <div class="col">
          <h3>快速链接</h3>
          <ul class="list-unstyled">
            <li class="mb-1"><a href="#">首页</a></li>
            <li class="mb-1"><a href="#">文章</a></li>
            <li class="mb-1"><a href="#">关于</a></li>
            <li class="mb-1"><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div class="col">
          <h3>联系方式</h3>
          <p>地址: 123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>电话: 123-456-7890</p>
        </div>
      </div>
      <div class="row">
        <p>&copy; 2023 博客名. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>




<script>
export default {
  name: 'HomeFooter',
  components: {},
}
</script>

<style scoped>
a {
  color: #575A5E;
  text-decoration: none;
}
</style>
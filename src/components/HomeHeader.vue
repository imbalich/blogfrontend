<template>
  <header class="container-fluid bd-navbar sticky-top" style="background-color: pink;">
    <div class="row align-items-center">
      <!-- 网站名 -->
      <div class="col text-center">
        欢迎, <strong>{{ username }}</strong>!
      </div>
      <!-- 导航 -->
      <div class="col">
        <nav class="navbar navbar-expand-lg text-center">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">导航</a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" aria-current="page">
                    首页
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">关于</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    分类下拉
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">禁用</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <!-- 搜索 -->
      <div class="col">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <!-- 用户信息 -->
      <div class="col">
        <ul class="navbar-nav flex-row flex-warp justify-content-center">
          <li class="nav-item">
            <div v-if="hasLogin" class="dropdown">
              <img class="rounded-circle" src="用户头像.jpg" alt="用户头像" width="40" height="40" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
              <ul class="dropdown-menu text-small" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item disabled">欢迎: <strong>{{ username }}</strong> !</a></li>
                <li><a class="dropdown-item" href="#">个人资料</a></li>
                <li><a class="dropdown-item" href="#">设置</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><router-link to="/" v-on:click.prevent="logout()" class="dropdown-item">登出</router-link></li>
              </ul>
            </div>
            <div v-else>
              <button class="btn btn-light" @click="re">注册</button>
              <router-link to="/login" class="btn btn-info">登录</router-link>
            </div>
          </li>
          <li class="nav-item">
            <!-- 明暗切换 -->
          </li>
        </ul>
      </div>
    </div>

  </header>
</template>

<script>
import authorization from '@/utils/authorization'

export default {
  name: 'HomeHeader',
  components: {},
  data: function () {
    return {
      username: '',
      hasLogin: false,
      isSuperuser: JSON.parse(localStorage.getItem('isSuperuser.myblog')),
    }
  },
  mounted () {
    authorization().then((data) => [this.hasLogin, this.username] = data)
  },
  methods: {
    logout () {
      localStorage.clear()
      window.location.reload(false)
    },
    refresh () {
      this.username = localStorage.getItem('username.myblog')
    }
  }
}
</script>

<style scoped>
.bd-navbar {
  padding: .75rem 0;
  background-color: transparent;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15), inset 0 -1px 0 rgba(255, 255, 255, 0.15);
}
</style>
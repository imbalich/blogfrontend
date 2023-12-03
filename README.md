# blogfrontend

博客前端代码
vite 搭建的 vue3 项目

## VSCode 插件

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 项目启动

请先安装依赖

```sh
npm install
```

启动本地服务服务

```sh
npm run dev
```

## 代理设置

请将端口号改为配合 BlogBackend 后端的端口号

```sh
proxy: {
  '/api': {
    target: 'http://127.0.0.1:8000/api',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
```

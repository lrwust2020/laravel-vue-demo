
# Laravel 5.6 + Vue.js 2 + Element-UI 2 示例

## 项目介绍

Laravel是主流的PHP开发框架

Vue.js是当下很火的一个JavaScript MVVM库,它是以数据驱动和组件化的思想构建

Element-UI是饿了么UED设计的一套桌面端组件库

## 项目搭建

> 1.克隆代码

git clone https://github.com/lrwust2020/laravel-vue-demo.git

> 2.进入代码目录，并安装依赖

cd laravel-vue-demo

composer install (安装php依赖)

npm install (安装npm)

npm i element-ui -S (安装element)

npm install vue-router --save-dev (安装vue-router)

> 3.进入代码目录，并生成配置

cd laravel-vue-demo

cp .env.example .env

php artisan key:generate

> 4.开启服务

php artisan serve (开启php服务)

或者 自行配置 nginx web server

npm run dev

或者 npm run watch

> 5.在浏览器中打开指定地址

http://localhost:8000

http://localhost:8000/example

http://localhost:8000/hello

http://localhost:8000/hello2

http://localhost:8000/view/hello

http://localhost:8000/view/hello2

## 项目演示

![avatar](data/laravel-vue-demo.gif)

## 采坑系列

> 1.前后端路由混淆，前端路由被后端路由劫持，页面出不来

解决方法：把前端页面用到的路由在后端指定，并输出view到前端单页地址。

> 2.嵌套路由

解决方法：嵌套路由的配置需按照vue-router文档来，另外嵌套路由的父路由页面需指定<router-view></router-view>。

> 3.打包失败

解决方法：修改webpack配置。请根据报错信息，自行baidu或google。

## 附件

> Composer 国内镜像：

composer config -g repo.packagist composer https://packagist.phpcomposer.com

> npm 国内镜像：

npm install -g cnpm --registry=https://registry.npm.taobao.org

## 参考资料：

http://blog.csdn.net/mrzhouxiaofei/article/details/78015473

https://router.vuejs.org/zh-cn/essentials/nested-routes.html

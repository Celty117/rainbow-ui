# rainbow-ui 一个vue ui组件

[![Build Status](https://travis-ci.org/Celty117/rainbow-ui.svg?branch=master)](https://travis-ci.org/Celty117/rainbow-ui)

作者：colinwang

## 介绍

个人做的Vue UI框架

## 开始使用

1. 添加CSS样式

  使用本框架前，请在CSS中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式

  你还需要设置默认颜色等变量（后续会改为SCSS变量）
  ```
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #085f63;
    }
  ```

  IE 15 及以上浏览器都支持此样式

2. 安装rainbow-ui
  ```
  npm i --save rainbow117
  ```
3. 引入rainbow-ui
  ```
  import { Button, ButtonGroup, Icon } from "rainbow117";
  import "rainbow117/dist/index.css";

  export default {
    name: "app",
    components: {
      HelloWorld,
      "g-button": Button
    }
  };
  ```

## 文档

## 提问

## 变更记录

##联系方式

# 翟子的起点复刻

```
有一天我在用起点app看小说，突然打了个激灵。为啥我不做个起点的app呢？

我真是天才！

开工！！！
```

## 已完成功能
```
1、 目录结构
2、 适配不同手机方案 ：
    因为是新项目，就选用vw方案，配置好插件后px自动转为vw
    a) 安装PostCSS
    b) 根目录添加 postcss.config.js文件配置 postcss-px-to-viewport 参数
3、svg图标组件处理和封装
4、2倍3倍图处理
   a) 背景图通过media加scss来解决
   b) 图标使用封装组件加js来处理
   
5、封装区分长按和click的方法
6、书架页
```

## webpack
```
安装
npm install

运行
npm run serve

打包
npm run build
```


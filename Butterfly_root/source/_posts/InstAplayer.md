---
title:  如何在Hexo博客Butterfly主题开启Aplayer和“音乐”页面

author: Radium-Bit

authorLink: ''

cover: https://cdn.jsdelivr.net/gh/radium-bit/res@latest/Music.jpg

date : 2020-5-17

tags: About_Website

sticky: 1
---
{% note warning %}
前言：若应用后发生错误，请clone[这个部分](https://github.com/Radium-bit/res/tree/master/Butterfly)。这是Butterfly主题2020/3/30的版本，我顺便也帮忙集成了Aplayer和Live2d看板娘，最新版本的Butterfly貌似并不完全兼容，也不太打算更新。
以后发布关于Butterfly主题优化的相关内容若无特殊情况，也是以这个版本为基准。
{% endnote %}
该hexo主题创作者并没有详细说明如何加载aplayer。虽然他指明了一个方向前去Aplayer的官方文档，
但教程未免有些难懂（尤其对于新手）因此，本主题也缺少相关教程  
<font color=#00a1d6 size=3 face="黑体">因为网上找到的大多为ejs创造的主题，而本主题使用了pug（前身为jade）...</font>  

因此，我将我摸索的经验在此公布，希望能带给使用pug编写的主题的朋友们一些帮助
***
首先，以<font color=#d31212 size=3 face="黑体">管理员身份</font>运行cmd，然后定位到你博客的根目录下
接着，依次执行三条命令
```cmd
hexo new page music

npm install aplayer

npm install --save hexo-tag-aplayer
```
接着，假如安装成功，则可以定位到  
主题目录\layout\includes\
看看layout.pug应该出现以下字段  
```Pug
 head
    include ./head.pug
     link(rel="stylesheet" href="APlayer.min.css")
     div(id="aplayer")
     script(src="https://cdn.jsdelivr.net/gh/radium-bit/res@master/live2d/autoload.js" async)
     script(src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js" async)
  body
```
若不存在
```Pug
link(rel="stylesheet" href="APlayer.min.css")
div(id="aplayer")
script(src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js" async)
```
若不存在请手动加上。<font color=#d31212 size=3 face="黑体">一定要注意缩进与上述结构一致！</font>因为缩进是Pug的表达方式。  
接着，查看aplayer.pug，若文件不存在。请创建文件并复制以下内容手动加上
```Pug
link(rel="stylesheet" type='text/css', href="https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.css")
script(type='text/javascript', src="https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js")
script(type='text/javascript', src="https://cdn.jsdelivr.net/npm/meting@1.2/dist/Meting.min.js")
```
最后，返回博客根目录，查看<font color=#395f4f size=3 face="黑体">_config.yml</font>在最后添加以下代码
```Yaml
#aplayer
aplayer: 
  script_dir: js                      # Public 目录下脚本目录路径，默认: 'assets/js'
  style_dir: css                         # Public 目录下样式目录路径，默认: 'assets/css'
  #cdn: http://xxx/aplayer.min.js                # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  #style_cdn: http://xxx/aplayer.min.css         # 引用 APlayer.css 外部 CDN 地址 (默认不开启)
  meting: true                                  # MetingJS 支持
  #meting_api: http://xxx/api.php                # 自定义 Meting API 地址
  #meting_cdn: http://xxx/Meing.min.js           # 引用 Meting.js 外部 CDN 地址 (默认不开启)
  asset_inject: true                            # 自动插入 Aplayer.js 与 Meting.js 资源脚本, 默认开启
  #externalLink: http://xxx/aplayer.min.js       # 老版本参数，功能与参数 cdn 相同meting: true
```
并调整
```Yaml
post_asset_folder: true
```
最后，在 博客根目录\source\music\index.md使用以下格式
```Markdown
---
title: 我的歌单
date: 2019-05-17 16:14:00
cover: https://cdn.jsdelivr.net/gh/radium-bit/res@latest/Music.jpg
type: "music"
---

<font color=#0c74d6 size=3 face="黑体">**这是歌单介绍，如果不需要刻意留空**</font>

{% meting "697054881" "netease" "playlist" %}
```
那一串数字是歌单ID，“netease”为网易云音乐。详细参数用法请参考[官方文档](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)  
歌单ID提取方法是以链接分享某个歌单  
例如  
https://music.163.com/playlist?id=<font color=#d31212 size=3 face="黑体">313418853</font>&userid=1362990007

红色部分就是歌单ID了

写入完毕后，回到CMD。输入
```cmd
hexo g
```
生成完毕！接下来就可以部署到你的服务器啦(..•˘_˘•..)

<font size=1>封面来自互联网，如有侵权请[点击这里](mailto:radium_official@163.com)联系我。</font>
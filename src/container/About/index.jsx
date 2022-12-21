import React from 'react'
import Header from '@/components/Header'
import { Button } from 'zarm';
import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于我们' />
    <div className={s.about}>
      <h2>项目技术栈</h2>
      <h4>前端</h4>
      <article>这个项目前端使用React和zarm组件库</article>
      <h4>后端</h4>
      <article>后端使用node+egg.js,数据库使用MySQL和可视化的DBeaver工具进行开发</article>

      <h2>关于我</h2>
        <article>本人21年本科毕业，专业是计算机科学与技术</article>

        <article>从事前端开发工作，现已工作两年有余，技术栈使用 Vue/React/node/JS/TS等。喜欢折腾，热爱分享</article>

        <a href="https://juejin.cn/user/3966693685594072">这是我的掘金首页</a>
    </div>
  </>
};

export default About;
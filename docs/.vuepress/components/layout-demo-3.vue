<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </g-sider>
      <g-layout>
        <g-header style="height: 50px; background:#51adcf;">
          header
        </g-header>
        <g-content style="height: 100px; background:#a5ecd7;">
          content
        </g-content>
        <g-footer style="height: 50px; background:#51adcf;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script>
import GLayout from '../../../src/layout'
import GHeader from '../../../src/header'
import GFooter from '../../../src/footer'
import GContent from '../../../src/content'
import GSider from '../../../src/sider'
export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider },
  data() {
    return {
      content: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </g-sider>
            <g-layout>
              <g-header style="height: 50px; background:#fb9696;">
                header
              </g-header>
              <g-content style="height: 100px; background:#f6ca97;">
                content
              </g-content>
              <g-footer style="height: 50px; background:#fb9696;">
                footer
              </g-footer>
            </g-layout>
          </g-layout>
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
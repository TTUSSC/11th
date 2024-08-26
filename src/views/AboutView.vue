<script setup>
import LinksAsideCom from '@/components/LinksAsideCom.vue';
</script>

<template>
  <div class="columns is-multiline is-gapless">
    <div id="content_left" class="column mx-2 my-2">
      <LinksAsideCom />
    </div>
    <div id="content_mid" class="column is-three-fifths mx-2 my-2">
      <div class="container box">
        <h1 class="title">關於我們</h1>
        <ul>
          <li>
            <span class="mr-2">民國101年3月15日</span>
            <span>創立</span>
          </li>
          <li>
            <span class="mr-2">民國112年9月11日</span>
            <span>更名為大同大學科學開源服務社</span>
          </li>
          <li>
            <span class="mr-2">民國113年7月1日</span>
            <span>第拾貳屆交接</span>
          </li>
        </ul>
      </div>
    </div>
    <div id="content_left" class="column mx-2 my-2"></div>
  </div>
</template>

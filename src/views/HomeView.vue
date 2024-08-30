<script setup>
import LinksAsideCom from '@/components/LinksAsideCom.vue';
</script>

<template>
  <div class="columns is-multiline is-gapless">
    <div id="content_left" class="column mx-2 my-2 mb-6">
      <LinksAsideCom />
    </div>
    <div id="content_mid" class="column is-three-fifths mx-2 my-2">
      <!-- 第一區段 -->
      <div class="section container columns is-vcentered box">
        <div class="column  content is-three-quarters">
          <h1 class="title">關於科創社</h1>
          <p>
            科學開源服務社是透過開源的方式進行服務的社團。會有技術型的社課，
            亦致力於校園內推廣開源文化。希望可以改善整體風氣，提供一個舒適的學習平台。
          </p>
        </div>
        <figure class="column image">
          <img src="/img/ssc_logo.png" height="400">
        </figure>
      </div>
      <!-- 第二區段 -->
      <div class="container my-6">
        <h1 class="title">我們在做些什麼?</h1>
        <div class="columns">
          <!-- card1 -->
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/img/LINE_ALBUM_2023 COSCUP_230802_1.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="title is-4">
                  開源文化
                </h4>
                <p class="content">
                  帶領社員們去參加SITCON、COSCUP...等社群的活動。
                </p>
              </div>
            </div>
          </div>

          <!-- card2 -->
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/img/FA265082-CE07-4F1B-88AE-630B6133ED7B.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="title is-4">
                  技術學習
                </h4>
                <p class="content">
                  學習HackMD、Linux、Git...等開源或非開源的工具或技術。
                </p>
              </div>
            </div>
          </div>

          <!-- card3 -->
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/img/DSC_9627.jpg" alt="服務">
                </figure>
              </div>
              <div class="card-content">
                <h4 class="title is-4">
                  服務
                </h4>
                <p class="content">
                  我們會於寒暑假辦理開源/資訊相關營隊、參與研討會志工。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- section 3 -->
      <div class="section container content box">
        <h1 class="title">如何加入社團?</h1>
        <p>
          學期末開始前都會有期初大會，向各位介紹社團，屆時也會請社員們填寫表單。<br>
          <strong>我們歡迎無論是對開源、服務有興趣的學生加入</strong>
        </p>
        <a class="button is-primary" href="https://forms.gle/kJ8MDiceB64g8pQ58" target="_blank">
          填寫入社表單
        </a>
      </div>
    </div>
    <div id="content_left" class="column mx-2 my-2"></div>
  </div>
</template>

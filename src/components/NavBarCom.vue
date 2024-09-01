<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const is_active = ref(false);

const toggleMenu = () => {
    is_active.value = !is_active.value;
}

const closeMenu = () => {
    is_active.value = false;
}

const count = ref(0);

const countUp = () => {
    count.value++;
    if (count.value >= 10) {
        alert("ttussc{you_really_click_it_ten_times}");
        count.value = 0;
    }
}

watch(
    () => route.path,
    () => {
        /// console.log(`路徑從 ${oldPath} 變更為 ${newPath}`);
        count.value = 0;
    }
);
</script>
<template>
    <nav class="navbar is-transparent" v-bind:class="{ 'is-active': is_active }">
        <div class="navbar-brand">
            <RouterLink class="navbar-item" to="/" @click="countUp();">
                <span class="icon-text">
                    <span class="icon">
                        <img src="/img/ssc_logo.png" width="30" height="30">
                    </span>
                    <span>
                        TTUSSC
                    </span>
                </span>

            </RouterLink>
            <div class="navbar-burger js-burger" @click="toggleMenu" v-bind:class="{ 'is-active': is_active }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarContent" class="navbar-menu" v-bind:class="{ 'is-active': is_active }">
            <div class="navbar-start">
                <RouterLink class="navbar-item" to="/" @click="closeMenu"> 首頁 </RouterLink>
                <RouterLink class="navbar-item" to="/about" @click="closeMenu"> 關於 </RouterLink>
                <RouterLink class="navbar-item" to="/member" @click="closeMenu"> 團隊成員 </RouterLink>
                <RouterLink class="navbar-item" to="/lecture" @click="closeMenu"> 社團課表 </RouterLink>
                <RouterLink class="navbar-item" to="/project" @click="closeMenu"> 社團專案 </RouterLink>
                <RouterLink class="navbar-item" to="/opensource" @click="closeMenu"> 關於開源 </RouterLink>
                <RouterLink class="navbar-item" to="/opendata" @click="closeMenu"> 公開資料 </RouterLink>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="button bd-tw-button is-info" href="https://discord.com/invite/29PsKfe45h"
                                target=“_blank”>
                                <span class="icon-text inline-flex">
                                    <span class="icon">
                                        <i class="fa-brands fa-discord"></i>
                                    </span>
                                    <span>Discord</span>
                                </span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="https://www.buymeacoffee.com/ttussc" target=“_blank”>
                                <span class="icon-text inline-flex">
                                    <span class="icon">
                                        <i class="fa-solid fa-mug-saucer"></i>
                                    </span>
                                    <span>贊助我們</span>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
@media screen and (max-width: 1023px) {
    .navbar-menu {
        display: block;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
    }

    .navbar-menu.is-active {
        opacity: 1;
        max-height: 100vh;
        transition: max-height 0.5s ease-in, opacity 0.3s ease-in;
    }
}
</style>
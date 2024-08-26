<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <RouterLink class="navbar-item" to="/">
                <span class="icon-text">
                    <span class="icon">
                        <img src="/img/ssc_logo.png" width="30" height="30">
                    </span>
                    <span>
                        TTUSSC
                    </span>
                </span>

            </RouterLink>
            <div class="navbar-burger js-burger" data-target="navbarContent">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarContent" class="navbar-menu">
            <div class="navbar-start">
                <RouterLink class="navbar-item" to="/"> 首頁 </RouterLink>
                <RouterLink class="navbar-item" to="/about"> 關於 </RouterLink>
                <RouterLink class="navbar-item" to="/member"> 團隊成員 </RouterLink>
                <RouterLink class="navbar-item" to="/lecture"> 社團課表 </RouterLink>
                <RouterLink class="navbar-item" to="/project"> 社團專案 </RouterLink>
                <RouterLink class="navbar-item" to="/opensource"> 關於開源 </RouterLink>
                <RouterLink class="navbar-item" to="/opendata"> 公開資料 </RouterLink>
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
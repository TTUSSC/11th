<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

router.push("/lecture/2023/2");

</script>
<template>
    <div class="columns is-multiline is-gapless">
        <!-- 左邊 -->
        <div id="content_left" class="column mx-2 my-2">
            <aside class="menu box">
                <p class="menu-label">
                    歷年課表
                </p>
                <ul class="menu-list">
                    <li>
                        <RouterLink active-class="is-active" to="/lecture/2023/2">2023 下學期</RouterLink>
                    </li>
                    <li>
                        <RouterLink active-class="is-active" to="/lecture/2023/1/">2023 上學期</RouterLink>
                    </li>
                    <li>
                        <RouterLink active-class="is-active" to="/lecture/2022/2/">2022 下學期</RouterLink>
                    </li>
                    <li>
                        <RouterLink active-class="is-active" to="/lecture/2022/1/">2022 上學期</RouterLink>
                    </li>
                </ul>
            </aside>
        </div>
        <!-- 中間 -->
        <div id="content_mid" class="column is-four-fifths mx-2 my-2">
            <div class="container box">
                <h1 class="title">社團課表</h1>
                <RouterView />
            </div>
        </div>
        <!-- 右邊 -->
        <!-- <div id="content_right" class="column">
                    
                </div> -->
    </div>
</template>
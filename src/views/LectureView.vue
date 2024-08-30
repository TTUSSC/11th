<script setup>
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

router.push("/lecture/2024/1");

</script>
<template>
    <div class="columns is-multiline is-gapless">
        <!-- 左邊 -->
        <div id="content_left" class="column mx-2 my-2 mb-6">
            <aside class="menu box">
                <p class="menu-label">
                    歷年課表
                </p>
                <ul class="menu-list">
                    <!-- <li>
                        <RouterLink active-class="is-active" to="/lecture/2024/2">2024 下學期</RouterLink>
                    </li> -->
                    <li>
                        <RouterLink active-class="is-active" to="/lecture/2024/1">2024 上學期</RouterLink>
                    </li>
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
        <div id="content_mid" class="column is-three-fifths mx-2 my-2">
            <div class="container box">
                <RouterView />
            </div>
        </div>
        <!-- 右邊 -->
        <div id="content_right" class="column mx-2 my-2">

        </div>
    </div>
</template>
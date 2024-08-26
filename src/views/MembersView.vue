<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

router.push("/member/2024");

</script>

<template>
    <div class="columns is-multiline is-gapless">
        <div id="content_left" class="column mx-2">
            <aside class="menu box">
                <p class="menu-label">
                    歷年幹部
                </p>
                <ul class="menu-list">
                    <li>
                        <RouterLink :class="{ 'is-active': route.name == 'member2024' }" to="/member/2024">2024
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="{ 'is-active': route.name == 'member2023' }" to="/member/2023">2023
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="{ 'is-active': route.name == 'member2022' }" to="/member/2022">2022
                        </RouterLink>
                    </li>
                </ul>
            </aside>
        </div>
        <div id="content_mid" class="column fixed-grid is-three-fifths mx-2">
            <h1 class="title">社團成員</h1>
            <div class="grid has-1-cols-mobile has-2-cols">
                <RouterView />
            </div>
        </div>
        <div id="content_left" class="column mx-2"></div>
    </div>
</template>

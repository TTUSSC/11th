<script setup>
const baseUrl = import.meta.env.BASE_URL;
const trueURL = (url) => {
    return `${baseUrl}${url}`
}

const members_info_11 = [
    {
        image: trueURL("/img/member/yuto.jpg"),
        name: "羅崧瑋",
        title: "社長",
        ig: "sw_1a4",
        desc: "資工系，努力學習中",
        tags: [
            "弓道",
            "網頁前後端",
        ]
    },
    {
        image: trueURL("/img/member/tty.jpg"),
        name: "曹莛宥",
        title: "副社長",
        ig: "tty_9_28",
        desc: "電機系",
        tags: [
            "社草",
        ]
    },
];

</script>
<template>
    <div class="cell my-1" v-for=" member in members_info_11" :key="member.id">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-64x64" style="border-radius: 4px;">
                            <img :src="member.image" alt="">
                        </figure>
                    </div>
                    <div class="media-content">
                        <span class="title is-4">{{ member.name }}</span>
                        <span class="subtitle is-6">/ {{ member.title }}</span><br>
                        <a :href="'https://www.instagram.com/' + member.ig" class="subtitle is-6" target="_blank">@{{
                            member.ig
                            }}</a>
                    </div>
                </div>
                <div class="content">
                    <p>{{ member.desc }}</p>
                    <a class="mr-2" v-for="tag in member.tags" :key="tag.id">#{{ tag }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
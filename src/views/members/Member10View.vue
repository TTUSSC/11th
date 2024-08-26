<script setup>
const baseUrl = import.meta.env.BASE_URL;
const trueURL = (url) => {
    return `${baseUrl}${url}`
}

const members_info_10 = [
    {
        image: trueURL("/img/member/timothy.jpg"),
        name: "Timothy ",
        title: "社長",
        ig: "timothy_tzd2819",
        desc: "電機系",
        tags: []
    },
    {
        image: trueURL("/img/member/yellow_new.jpg"),
        name: "黃新翰",
        title: "副社長",
        ig: "yellow_new_and",
        desc: "電機系",
        tags: []
    },
    {
        image: trueURL("/img/member/zhen.jpg"),
        name: "王苡禎 ",
        title: "文書",
        ig: "91_12_19",
        desc: "電機系",
        tags: []
    },
];

</script>
<template>
    <div class="cell my-1" v-for="member in members_info_10" :key="member.id">
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
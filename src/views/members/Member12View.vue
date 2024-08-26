<script setup>
const baseUrl = import.meta.env.BASE_URL;
const trueURL = (url) => {
    return `${baseUrl}${url}`
}

const members_info_12 = [
    {
        image: trueURL("/img/member/"),
        name: "游凱威",
        title: "社長",
        ig: "",
        desc: "",
        tags: []
    },
];

</script>
<template>
    <div class="cell my-1" v-for="member in members_info_12" :key="member.id">
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
                        <a :href="'https://www.instagram.com/' + member.ig" class="subtitle is-6" target="_blank">
                            @{{ member.ig }}
                        </a>
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
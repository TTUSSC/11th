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
        {
        image: trueURL("/img/member/stanley.jpg"),
        name: "陳威翰",
        title: "副社長",
        ig: "stanley_1106_",
        desc: "資工系",
        tags: [
            "貝斯(新)手 #社花",
        ]
    },
    {
        image: trueURL("/img/member/xin.jpg"),
        name: "張芯瑜",
        title: "文書組長",
        ig: "xin._1865",
        desc: "電機系",
        tags: [
            "不要害SHIU",
        ]
    },
    {
        image: trueURL("/img/member/john.jpg"),
        name: "林靖疆",
        title: "財務組長",
        ig: "jinjohn_lin",
        desc: "電機系",
        tags: [
            "tag",
        ]
    },
    {
        image: trueURL("/img/member/sam.jpg"),
        name: "陳茂凱",
        title: "器材組長",
        ig: "sam_930704<",
        desc: "電機系",
        tags: [
            "tag",
        ]
    },
    {
        image: trueURL("/img/member/ju.jpg"),
        name: "劉玠佑",
        title: "教學組長",
        ig: "j.u_28_",
        desc: "電機系",
        tags: [
            "tag",
        ]
    },
    {
        image: trueURL("/img/member/brian.jpg"),
        name: "Brain",
        title: "教學組長",
        ig: "brian_jhan",
        desc: "資經系",
        tags: [
            "tag",
        ]
    },
    {
        image: trueURL("/img/member/harry.jpg"),
        name: "郭祐亨",
        title: "美宣組長",
        ig: "harry.0108_",
        desc: "工設系",
        tags: [
            "tag",
        ]
    },
    {
        image: trueURL("/img/member/xiangen.jpg"),
        name: "吳享恩",
        title: "紀錄組長",
        ig: "xiangen7653",
        desc: "工設系",
        tags: [
            "tag",
        ]
    }
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
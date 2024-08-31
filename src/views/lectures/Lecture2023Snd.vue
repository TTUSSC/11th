<script setup>
const lectures = [
    {
        date: "2/29",
        name: "新學期啟航！回顧及展望",
        speaker: "Yuto",
        place: "A3-307",
        tags: ["期初大會"]
    },
    {
        date: "3/7",
        name: "來從開源一路細說到FOSDEM去",
        speaker: "Timothy",
        place: "A3-200",
        tags: ["開源文化"]
    },
    {
        date: "3/9",
        name: "SITCON 學生計算機年會",
        speaker: "無",
        place: "中研院",
        tags: ["SITCON"]
    },
    {
        date: "3/14",
        name: "古老卻強大的編譯器-Vim",
        speaker: "Timothy",
        place: "A3-200",
        tags: [
            "vim", "shell"
        ]
    },
    {
        date: "3/16",
        name: "天使心志工活動",
        speaker: "無",
        place: "台北市立木柵動物園",
        tags: ["服務"]
    },
    {
        date: "3/21",
        name: "想要擁有自己的網站嗎？boostrap帶你上手",
        speaker: "張哲嘉",
        place: "A3-200",
        tags: ["網頁前端", "Bootstrap"]
    },
    {
        date: "3/28",
        name: "vue出新世界",
        speaker: "張哲嘉",
        place: "A3-200",
        tags: ["網頁前端"]
    },
    {
        date: "4/13",
        name: "開源工具大補帖",
        speaker: "Yuto",
        place: "A3 8F 樂學空間",
        tags: ["Linux", "Markdown"]
    },
    {
        date: "4/15",
        name: "Denny學長的Git教學（上）",
        speaker: "Denny",
        place: "A3-200",
        tags: ["Git", "多人協作"]
    },
    {
        date: "5/2",
        name: "從C語言快速上手Python的基礎實戰",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["Python"]
    },
    {
        date: "5/9",
        name: "從Python爬蟲認識網路世界",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["Python", "網路爬蟲"]
    },
    {
        date: "5/16",
        name: "Jerry 的 HEXO 分享",
        speaker: "小方",
        place: "A3-200",
        tags: ["GitHub", "HEXO"]
    },
    {
        date: "5/23",
        name: "社團總結&交接",
        speaker: "張芯瑜",
        place: "A3-307",
        tags: ["期末派對"]
    }
]
</script>

<template>
    <LecturesTableCom title="2023 下學期 社團課表" :lectures="lectures" />
</template>
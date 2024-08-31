<script setup>
const lectures = [
    {
        date: "2/20",
        name: "時間回復！讓我們聊聊過去、現在與未來",
        speaker: "Timothy",
        place: "A3-307",
        tags: []
    },
    {
        date: "3/06",
        name: "做孩子的啦啦隊",
        speaker: "幼竹老師",
        place: "A3-307",
        tags: []
    },
    {
        date: "3/13",
        name: "一起來做個tldr，畢竟我們可是要教小學生呢！（水火箭）",
        speaker: "Timothy",
        place: "A3-202",
        tags: []
    },
    {
        date: "3/20",
        name: "打扣必備的版本控管工具，讓你從入門到放棄-Git教學",
        speaker: "Yuto",
        place: "A5-807",
        tags: []
    },
    {
        date: "3/27",
        name: "淺談分支概念與Github實戰-Git教學（二）",
        speaker: "Yuto",
        place: "A5-807",
        tags: []
    },
    {
        date: "4/17",
        name: "做自己的夢，Just Do IT! ",
        speaker: "劉辰盈",
        place: "A3-307",
        tags: []
    },
    {
        date: "4/24",
        name: "有FB有IG，為什麼要有自己的網站? 談談架站的好處是什麼",
        speaker: "Brian",
        place: "A5-807",
        tags: []
    },
    {
        date: "5/01",
        name: "聊了那麼久的OS，讓我們來架一個安全的Ubuntu！",
        speaker: "Brian",
        place: "A5-807",
        tags: []
    },
    {
        date: "5/08",
        name: "腳把腳教你架自己的部落格 - WordPress",
        speaker: "Brian",
        place: "A5-807",
        tags: []
    },
    {
        date: "5/15",
        name: "Nginx反向代理 - 資安是什麼? 能喝嗎?",
        speaker: "Brian",
        place: "A5-807",
        tags: []
    },
    {
        date: "5/22",
        name: "想學黑魔法嗎？我告訴你有哪些技能",
        speaker: "Timothy",
        place: "A5-807",
        tags: []
    },
    {
        date: "05/29",
        name: "社團總結",
        speaker: "Timothy",
        place: "A3-307",
        tags: []
    },
]
</script>

<template>
    <LecturesTableCom title="2022 下學期 社團課表" :lectures="lectures" />
</template>
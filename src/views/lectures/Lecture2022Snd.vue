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
    <h1 class="title">2022 下學期 社團課表</h1>
    <table class="table is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>日期</th>
                <th>名稱</th>
                <th>講師</th>
                <th>地點</th>
                <th>標籤</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="lecture in lectures" :key="lecture.id">
                <td>{{ lecture.date }}</td>
                <td>
                    <a>{{ lecture.name }}</a>
                </td>
                <td>{{ lecture.speaker }}</td>
                <td>{{ lecture.place }}</td>
                <td>
                    <span v-for="tag in lecture.tags" :key="tag.id" class="tag is-info is-light mr-1">#{{ tag }}</span>
                </td>
            </tr>

        </tbody>
    </table>
</template>
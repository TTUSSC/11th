<script setup>
const lectures = [
    {
        date: "9/12",
        name: "開源茶會",
        speaker: "Willy",
        place: "A3-307",
        tags: ["開源","迎新"]
    },
    {
        date: "9/19",
        name: "開源是什麼",
        speaker: "Willy",
        place: "A3-200",
        tags: ["開源"]
    },
    {
        date: "9/26",
        name: "Markdown",
        speaker: "Willy",
        place: "A3-200",
        tags: ["HackMD"]
    },
    {
        date: "9/30",
        name: "不會被女朋友打的『攝影入門』",
        speaker: "攝影社",
        place: "A3-307",
        tags: ["攝影","入門"]
    },
    {
        date: "10/3",
        name: "怕麻煩的話，就Shell出你的指令吧",
        speaker: "芋泥",
        place: "A3-200",
        tags: ["Linux","Shell"]
    },
    {
        date: "10/7",
        name: "Re：從 C 開始的大學生活（上）",
        speaker: "張乃文",
        place: "A3-200",
        tags: ["C","程式設計"]
    },
    {
        date: "10/17",
        name: "Re：從 C 開始的大學生活（下）",
        speaker: "張乃文",
        place: "A3-200",
        tags: ["C","程式設計"]
    },
    {
        date: "10/21",
        name: "考前讀書會",
        speaker: "Willy",
        place: "A3 8F 樂學空間",
        tags: ["工作坊","讀書"]
    },
    {
        date: "11/4",
        name: "E-mail(工作坊)",
        speaker: "神秘講者",
        place: "待定",
        tags: ["工作坊","Email"]
    },
    {
        date: "11/7",
        name: "Arduino 基礎介紹",
        speaker: "盧佳緯、陳彥廷",
        place: "A3-200",
        tags: ["Arduino"]
    },
    {
        date: "11/14",
        name: "Arduino 無用盒",
        speaker: "盧佳緯、陳彥廷",
        place: "A3-200",
        tags: ["Arduino","創客"]
    },
    {
        date: "11/21",
        name: "Arduino 門禁卡",
        speaker: "盧佳緯、陳彥廷",
        place: "A3-200",
        tags: ["Arduino","創客"]
    },
    {
        date: "11/28",
        name: "作業系統生存指南：Linux 新手的冒險之旅",
        speaker: "小方",
        place: "A3-200",
        tags: ["OS","Linux"]
    },
    {
        date: "12/5",
        name: "想學黑魔法嗎？我告訴你有哪些技能",
        speaker: "Timothy",
        place: "A3-307",
        tags: ["資訊安全"]
    },
    {
        date: "12/12",
        name: "期末大會",
        speaker: "Willy",
        place: "A3-307",
        tags: ["交換禮物"]
    },
    {
        date: "12/14",
        name: "愛奇兒營隊",
        speaker: "無",
        place: "待定",
        tags: ["服務","營隊"]
    },
    {
        date: "12/16",
        name: "考前讀書會",
        speaker: "Willy",
        place: "A3 8F 樂學空間",
        tags: ["工作坊","讀書"]
    }
]
</script>

<template>
    <h1 class="title">2024 上學期 社團課表</h1>
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
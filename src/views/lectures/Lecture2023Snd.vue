<script setup>
const lectures = [
    {
        date: "2/29",
        name: "新學期啟航！回顧及展望",
        speaker: "羅崧瑋",
        place: "A3-307",
        tags: ["期初大會"]
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
        date: "",
        name: "",
        speaker: "",
        place: "",
        tags: [""]
    },
    {
        date: "",
        name: "",
        speaker: "",
        place: "",
        tags: [""]
    },
    {
        date: "",
        name: "",
        speaker: "",
        place: "",
        tags: [""]
    },
    {
        date: "",
        name: "",
        speaker: "",
        place: "",
        tags: [""]
    },
]
</script>

<template>
    <h1 class="title">2023 下學期 社團課表</h1>
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
<script setup>
const lectures = [
    {
        date: "",
        name: "",
        speaker: "",
        place: "",
        tags: []
    }
]
</script>

<template>
    <h1 class="title">2024 下學期 社團課表</h1>
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
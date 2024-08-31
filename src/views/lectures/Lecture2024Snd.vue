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
    <LecturesTableCom title="2024 下學期 社團課表" :lectures="lectures" />
</template>
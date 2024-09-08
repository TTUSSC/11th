<script setup>
import LecturesTableCom from '@/components/LecturesTableCom.vue';

const lectures = [
    {
        date: "9/18",
        weekday: "一",
        time: "18:00~20:00",
        name: "期初迎新",
        speaker: "Yuto",
        place: "A3-102",
        tags: ["迎新"]
    },
    {
        date: "9/25",
        weekday: "一",
        time: "18:00~20:00",
        name: "開源是什麼?蛤?雞排?",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["開源文化"]
    },
    {
        date: "10/2",
        weekday: "一",
        time: "18:00~20:00",
        name: "轉生開源世界無意間竟獲得了最強武器是否搞錯了社麼",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["開源", "HackMD"]
    },
    {
        date: "10/9",
        weekday: "一",
        time: "18:00~20:00",
        name: "怕麻煩的我，把Shell學好就對了!",
        speaker: "Stanley",
        place: "A3-200",
        tags: ["OS", "Linux"]
    },
    {
        date: "10/16",
        weekday: "一",
        time: "18:00~20:00",
        name: "從printf()開始的扣頂生活",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["C", "程式設計"]
    },
    {
        date: "11/6",
        weekday: "一",
        time: "18:00~20:00",
        name: "關於我用迴圈旋轉自己的那檔事",
        speaker: "Yuto",
        place: "A3-200",
        tags: ["C", "程式設計"]
    },
    {
        date: "11/13",
        weekday: "一",
        time: "18:00~20:00",
        name: "Useless Box 實作1",
        speaker: "吳享恩",
        place: "A3-200",
        tags: ["設計", "創客"]
    },
    {
        date: "11/20",
        weekday: "一",
        time: "18:00~20:00",
        name: "Useless box 實作2",
        speaker: "吳享恩",
        place: "A3-200",
        tags: ["設計", "創客"]
    },
    {
        date: "11/27",
        weekday: "一",
        time: "18:00~20:00",
        name: "Arrr我要du到你說no",
        speaker: "劉玠祐",
        place: "A3-200",
        tags: ["Arduino", "創客"]
    },
    {
        date: "12/4",
        weekday: "一",
        time: "18:00~20:00",
        name: "想學黑魔法嗎？我告訴你有哪些技能",
        speaker: "Timothy",
        place: "A3-307",
        tags: ["資訊安全"]
    },
    {
        date: "12/11",
        weekday: "一",
        time: "18:00~20:00",
        name: "來給開源企鵝仔加頂聖誕帽吧！！",
        speaker: "張芯瑜",
        place: "A3-307",
        tags: ["交換禮物"]
    },
]
</script>

<template>
    <LecturesTableCom title="2023 上學期 社團課表" :lectures="lectures" />
</template>
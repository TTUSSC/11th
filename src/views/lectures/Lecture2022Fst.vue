<script setup>
const lectures = [
    {
        date: "9/12",
        name: "期初大會（迎新）",
        speaker: "Timothy",
        place: "A3-102",
        tags: []
    },
    {
        date: "9/19",
        name: "大開源時代！所以開源是什麼？聽起來很好吃？",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "10/03",
        name: "HackMD 開啟凡人的開源之路（Markdown語法）",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "10/17",
        name: "誰說這是個無聊的社團？讓我們一起說笑話聊開源OwO",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "11/07",
        name: "讓我們來認識『林姓商人』Linux！各種OS的形狀",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "11/14",
        name: "手把手帶你學會使用Shell！讓你成為專業的電腦用戶",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "11/21",
        name: "古老卻強大的編輯器『Vim』",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "11/28",
        name: "滿天飛的程式課程？！那我們到底要這麼多東西幹嘛？",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "12/05 ",
        name: "拯救你的Ｃ語言教學（一）",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "12/12",
        name: "拯救你的Ｃ語言教學（二）",
        speaker: "Timothy",
        place: "A3-200",
        tags: []
    },
    {
        date: "12/19",
        name: "期末大會+『左邊一點Shell、右邊一點C…哇！變成惡意軟體了…』",
        speaker: "Timothy",
        place: "A3-307",
        tags: []
    }
]
</script>

<template>
    <h1 class="title">2022 上學期 社團課表</h1>
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
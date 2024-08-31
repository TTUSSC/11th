<script setup>
import { computed, ref } from 'vue';

const lectures = [
    {
        date: "9/12",
        name: "開源茶會",
        speaker: "Willy",
        place: "A3-307",
        tags: ["開源", "迎新"],

        description: "隨著新學期的到來，許多新生已經加入了大同大學這個大家庭，相信大家都迫不及待想要探索和加入感興趣的社團。我們透過舉辦這次茶會，介紹科學開源服務社，幫助你深入了解我們的社團活動和宗旨，並希望你能成為我們大家庭的一員，共同揮灑青春！",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "https://hackmd.io/@ttussc/SJP5EjghR/%2FSJp-rjlnA",
        kktix: "https://ttussc.kktix.cc/events/teaparty2024",
    },
    {
        date: "9/19",
        name: "開源是什麼",
        speaker: "Willy",
        place: "A3-200",
        tags: ["開源"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "9/26",
        name: "Markdown",
        speaker: "Willy",
        place: "A3-200",
        tags: ["HackMD"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "9/30",
        name: "不會被女朋友打的『攝影入門』",
        speaker: "攝影社",
        place: "A3-307",
        tags: ["攝影", "入門"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "10/3",
        name: "怕麻煩的話，就Shell出你的指令吧",
        speaker: "芋泥",
        place: "A3-200",
        tags: ["Linux", "Shell"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "10/7",
        name: "Re：從 C 開始的大學生活（上）",
        speaker: "阿文",
        place: "A3-200",
        tags: ["C", "程式設計"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "10/17",
        name: "Re：從 C 開始的大學生活（下）",
        speaker: "阿文",
        place: "A3-200",
        tags: ["C", "程式設計"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "10/21",
        name: "考前讀書會",
        speaker: "Willy",
        place: "A3 8F 樂學空間",
        tags: ["工作坊", "讀書"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "11/4",
        name: "E-mail(工作坊)",
        speaker: "神秘講者",
        place: "待定",
        tags: ["工作坊", "Email"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "11/7",
        name: "Arduino 基礎介紹",
        speaker: "盧佳緯、Allen",
        place: "A3-200",
        tags: ["Arduino"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "11/14",
        name: "Arduino 無用盒",
        speaker: "盧佳緯、Allen",
        place: "A3-200",
        tags: ["Arduino", "創客"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "11/21",
        name: "Arduino 門禁卡",
        speaker: "盧佳緯、Allen",
        place: "A3-200",
        tags: ["Arduino", "創客"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "11/28",
        name: "作業系統生存指南：Linux 新手的冒險之旅",
        speaker: "小方",
        place: "A3-200",
        tags: ["OS", "Linux"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "12/5",
        name: "想學黑魔法嗎？我告訴你有哪些技能",
        speaker: "Timothy",
        place: "A3-307",
        tags: ["資訊安全"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "12/12",
        name: "期末大會",
        speaker: "Willy",
        place: "A3-307",
        tags: ["交換禮物"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "12/14",
        name: "愛奇兒營隊",
        speaker: "無",
        place: "待定",
        tags: ["服務", "營隊"],

        description: "",
        timeline: [],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
    {
        date: "12/16",
        name: "考前讀書會",
        speaker: "Willy",
        place: "A3 8F 樂學空間",
        tags: ["工作坊", "讀書"],

        description: "以往學校大考前，社團活動會暫停一次，讓社團的夥伴們專心準備大考。此次與以往不同，希望聚集社團的大家一起召開讀書會，共同為了學校大考而努力。同學與同學之間可以互相照應外，學長姐也可以協助學弟妹考試準備的方向。",
        timeline: [
            "18:00~18:30 入座準備",
            "18:30~20:50 準備考試內容",
            "20:50~21:00 填寫回饋表單",
        ],
        slide: "",
        slido: "",
        handout: "",
        note: "",
        kktix: "",
    },
];

const selectedLecture = ref(false);
const isModalActive = ref(false);

const openModal = (lecture) => {
    selectedLecture.value = lecture;
    isModalActive.value = true;
};

const closeModal = () => {
    isModalActive.value = false;
};

const isButtonsShow = computed(() => { return selectedLecture.value.slido || selectedLecture.value.slide || selectedLecture.value.note || selectedLecture.value.handout });

function openLinkBlank(url) {
    if (url) {
        window.open(selectedLecture.value.kktix, '_blank')
    } else {
        console.error('url error')
    }
}
</script>

<template>
    <h1 class="title">2024 上學期 社團課表</h1>
    <div class="table-container">
        <table class="table is-hoverable is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>日期</th>
                    <th>名稱</th>
                    <th>講師</th>
                    <th>地點</th>
                    <th class="is-hidden-mobile">標籤</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lecture in lectures" :key="lecture.id">
                    <td>{{ lecture.date }}</td>
                    <td>
                        <a @click="openModal(lecture)">{{ lecture.name }}</a>
                    </td>
                    <td>{{ lecture.speaker }}</td>
                    <td>{{ lecture.place }}</td>
                    <td class="is-hidden-mobile">
                        <span v-for="tag in lecture.tags" :key="tag.id" class="tag is-info is-light mr-1">#{{ tag
                            }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <transition name="modal">
        <div v-if="isModalActive" class="modal" :class="{ 'is-active': isModalActive }">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title"></p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="content">
                        <span v-for="tag in selectedLecture?.tags" :key="tag" class="tag is-info is-light mr-1">
                            #{{ tag }}
                        </span>
                        <h1 class="title">{{ selectedLecture?.name }}</h1>
                        <p>
                            <span><strong>日期：</strong> {{ selectedLecture?.date }}</span><br>
                            <span><strong>講師：</strong> {{ selectedLecture?.speaker }}</span><br>
                            <span><strong>地點：</strong> {{ selectedLecture?.place }}</span><br>
                        </p>
                        <div v-if="isButtonsShow" class="buttons">
                            <a v-if="selectedLecture.slide" :href="selectedLecture.slide" class="button is-warning">
                                <span class="icon">
                                    <i class="fa-solid fa-file-powerpoint"></i>
                                </span>
                                <span>簡報</span>
                            </a>
                            <a v-if="selectedLecture.handout" :href="selectedLecture.handout" class="button is-info">
                                <span class="icon">
                                    <i class="fa-solid fa-book"></i>
                                </span>
                                <span>講議</span>
                            </a>
                            <a v-if="selectedLecture.slido" :href="selectedLecture.slido" class="button is-success">
                                <span class="icon">
                                    <i class="fa-solid fa-circle-question"></i>
                                </span>
                                <span>Slido</span>
                            </a>
                            <a v-if="selectedLecture.note" :href="selectedLecture.note" class="button is-dark">
                                <span class="icon">
                                    <i class="fa-solid fa-file-lines"></i>
                                </span>
                                <span>共筆</span>
                            </a>
                        </div>
                        <div class="my-2" v-if="selectedLecture.description != ''">
                            <h2 class="title is-4">活動內容</h2>
                            <p>
                                {{ selectedLecture.description }}
                            </p>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot is-flex">
                    <button class="button ml-auto is-success" @click="openLinkBlank(selectedLecture.kktix);"
                        :disabled="!selectedLecture.kktix">
                        KKTIX 報名
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>
<style lang="css" scoped>
.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}
</style>
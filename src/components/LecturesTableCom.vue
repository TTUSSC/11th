<script setup>
import { computed, ref, defineProps } from 'vue';

defineProps({
    title: String,
    lectures: [],
})

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

const kktixButtonText = computed(() => {
    return selectedLecture.value && selectedLecture.value.kktix
        ? 'KKTIX 報名'
        : '暫時無法報名';
});
</script>

<template>
    <h1 class="title">{{ title }}</h1>
    <div class="table-container">
        <table class="table is-hoverable is-striped is-fullwidth">
            <thead>
                <tr>
                    <th class="is-hidden-mobile">日期</th>
                    <th>名稱</th>
                    <th>講師</th>
                    <th class="is-hidden-mobile">地點</th>
                    <th class="is-hidden-mobile">標籤</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lecture in lectures" :key="lecture.id">
                    <td class="is-hidden-mobile">{{ lecture.date }}</td>
                    <td>
                        <a @click="openModal(lecture)">{{ lecture.name }}</a>
                    </td>
                    <td>{{ lecture.speaker }}</td>
                    <td class="is-hidden-mobile">{{ lecture.place }}</td>
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
                            <span>
                                <strong>日期：</strong> {{ selectedLecture?.date }}{{ selectedLecture?.weekday ? "（" +
                                    selectedLecture?.weekday + "）" : ""
                                }}
                            </span><br>
                            <span><strong>時間：</strong> {{ selectedLecture?.time }}</span><br>
                            <span><strong>講師：</strong> {{ selectedLecture?.speaker }}</span><br>
                            <span><strong>地點：</strong> {{ selectedLecture?.place }}</span><br>
                        </p>
                        <div v-if="isButtonsShow" class="buttons">
                            <a v-if="selectedLecture.slide" :href="selectedLecture.slide" class="button is-warning"
                                target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-file-powerpoint"></i>
                                </span>
                                <span>簡報</span>
                            </a>
                            <a v-if="selectedLecture.handout" :href="selectedLecture.handout" class="button is-info"
                                target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-book"></i>
                                </span>
                                <span>講議</span>
                            </a>
                            <a v-if="selectedLecture.slido" :href="selectedLecture.slido" class="button is-success"
                                target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-circle-question"></i>
                                </span>
                                <span>Slido</span>
                            </a>
                            <a v-if="selectedLecture.note" :href="selectedLecture.note" class="button is-dark"
                                target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-file-lines"></i>
                                </span>
                                <span>共筆</span>
                            </a>
                        </div>
                        <div class="my-2" v-if="selectedLecture.description">
                            <h2 class="title is-4">活動簡介</h2>
                            <p class="mb-6">
                                {{ selectedLecture.description }}
                            </p>
                        </div>
                        <div class="my-2" v-if="selectedLecture.timeline && selectedLecture.timeline.length > 0">
                            <h2 class="title is-4">活動流程</h2>
                            <p class="mb-6">
                            <ul>
                                <li v-for="time in selectedLecture.timeline" :key="time.id">
                                    {{ time }}
                                </li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot is-flex">
                    <button class="button ml-auto is-success" @click="openLinkBlank(selectedLecture.kktix)"
                        :disabled="!selectedLecture.kktix">
                        {{ kktixButtonText }}
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
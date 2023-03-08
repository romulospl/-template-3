<script setup>
import { mapActions, storeToRefs } from 'pinia';
import { useMainStore } from '../store/main';
import { onMounted, ref } from 'vue';
import axios from 'axios'

const text = ref('')
const mainStore = useMainStore()
const { counter } = storeToRefs(mainStore)

onMounted(() => {
    axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            text.value = response.data.slip.advice;
        })
})
</script>

<template>

    <div class="row q-mx-auto mt-100" style="width:500px">

        <div class="col-12">

            <q-card class="my-card">

                <q-card-section>
                    <span class="text-h4">Página About</span>
                </q-card-section>

                <q-card-section>
                    <span class="text-h5">count is: {{ counter }}</span>
                </q-card-section>

                <q-separator inset />

                <q-card-section>
                    <span class="text-body2">template with: vite + vue3 + Quasar + pinia + vue-router + axios </span>
                </q-card-section>

                <q-card-section>
                    <span class="text-subtitle2">Example axios, </span>
                </q-card-section>

                <q-card-section>
                    <span class="text-caption">advice: {{ text }}</span>
                </q-card-section>
            </q-card>

        </div>

    </div>
</template>
<script setup>
import { mapActions, storeToRefs } from 'pinia';
import { useMainStore } from '../store/main';

const mainStore = useMainStore()

const { counter } = storeToRefs(mainStore)
const { increment } = mapActions(useMainStore, ["increment"])
</script>

<template>
    <div class="row q-mx-auto mt-100" style="width:300px">
        <div class="col-12">
            <q-card class="my-card">
                <q-card-section>
                    <q-btn @click="counter++" color="primary" icon="add_circle_outline" label="Adicionar contagem" />
                    <div>
                        <h4>count is {{ counter }}</h4>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style scoped>
.main-button {
    border: 1px solid #e7e4e4;
}
</style>
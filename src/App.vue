<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navBar from './components/navBar.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const router = useRouter()
const pushTo = (item) => {
  if (item.toPush) router.push(item.toPush)
  activeMenu.value = item.label
}

const activeMenu = ref('Home')
const menuList = ref([
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    toPush: '/',
  },
  {
    icon: 'feed',
    label: 'About',
    separator: false,
    toPush: '/about',
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
])

</script>

<template>
  <q-layout view="hhh lpR lFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar style="height: 70px;">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          template
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="text-gray" :width="250" v-model="leftDrawerOpen" side="left" overlay behavior="desktop" elevated>

      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">

            <q-item @click="pushTo(menuItem)" clickable :active="menuItem.label === activeMenu" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            
          </template>

        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<style scoped></style>


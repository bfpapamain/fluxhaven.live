<script setup>
import { defineProps, ref } from 'vue'
import { scrollToElement } from '@/helpers'

const { routeName } = defineProps({
  routeName: { type: String, default: 'home' },
})
let is_menu = ref('home');
const changeMenu = (menu) => {
  is_menu.value = menu;
  scrollToElement(`section-${menu}`, 100);
}
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <router-link @click.prevent="changeMenu('home')" :to="{ name: 'home' }" class="logo d-flex align-items-center">
        <img src="/assets/img/fluxheaven.png" class="lg" alt="fluxheaven" />
        <!-- <h1 class="sitename">fluxheaven</h1> -->
      </router-link>
      <nav id="navmenu-center" class="navmenu">
        <ul class="gap-3">
          <li>
            <router-link @click.prevent="changeMenu('home')" :class="{'is-active': is_menu == 'home'}" class="fs-13px" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li>
            <a @click.prevent="changeMenu('feature')" :class="{'is-active': is_menu == 'feature'}" class="fs-13px" href="#">FEATURE</a>
          </li>
          <li>
            <a @click.prevent="changeMenu('faq')" :class="{'is-active': is_menu == 'faq'}" class="fs-13px" href="#">FAQ</a>
          </li>
        </ul>
      </nav>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="d-xl-none">
            <router-link @click.prevent="changeMenu('home')" class="fs-13px" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('feature')" class="fs-13px" href="#">Feature</a>
          </li>
          <li class="d-xl-none">
            <a @click.prevent="changeMenu('faq')" class="fs-13px" href="#">Faq</a>
          </li>
          <li class="action"><router-link :to="{ name: 'ai' }"
              class="btn btn-sm bg-app rounded fs-13px 14px text-white">Getting Started</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>

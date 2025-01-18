<script setup>
import { useRoute } from 'vue-router';
import Header from './Header';
import Footer from './Footer';

const route = useRoute();
</script>

<template>
  <Header v-if="route.name != 'ai'" :routeName="route.name"></Header>
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer v-if="route.name != 'ai'"></Footer>
  <a :class="{ 'd-none': route.name == 'ai' }" href="#" id="scroll-top"
    class="scroll-top d-flex align-items-center justify-content-center rounded"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>
</template>

<style scoped></style>

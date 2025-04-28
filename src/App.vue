<script setup>
import { useStore } from '@/store';
import HeaderView from './components/HeaderView.vue';
import MainFooter from '@/components/MainFooter.vue';

const store = useStore();

</script>

<template>
  <HeaderView />
  <main>
    <router-view
      :search-query="store.searchQuery"
      @productClicked="store.resetSearchQuery()"
    ></router-view>
  </main>
  <MainFooter />
</template>

<style scoped>
main {
  min-height: 50vh;

}
</style>

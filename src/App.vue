<template>
  <div id="app">
    <!-- Navigation -->
    <Navigation></Navigation>

    <!-- Page Content -->
    <div class="container">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Your Website 2018
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Login from '@/components/Login.vue';

@Component({
  components: {
    Navigation,
    Login
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  padding-top: 54px;
}

@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}
</style>

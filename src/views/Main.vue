<template>
  <div class="row">
    <!-- Main Column -->
    <div class="col-md-8">
      <h1 class="my-4">Page Heading</h1>

      <!-- Posts -->
      <div class="card mb-4" v-for="post in posts" :key="post.id">
        <div class="card-body">
          <h2 class="card-title">Title</h2>
          <p class="card-text">{{ post.text }}</p>
        </div>
        <div class="card-footer text-muted">
          Posted on January 1, 2017 by <a href="#">User</a>
        </div>
      </div>
    </div>

    <!-- Side Column -->
    <div class="col-md-4">
      <!-- Login Widget -->
      <Login></Login>

      <!-- Side Widget -->
      <div class="card my-4">
        <h5 class="card-header">Side Widget</h5>
        <div class="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the new Bootstrap 4 card containers!
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';
import {postService} from '@/services/PostsService';

@Component({
  components: {
    Login
  }
})
export default class Main extends Vue {
  private posts = [];

  private async created() {
    this.posts = await postService.getPosts();
  }
}
</script>

<style scoped></style>

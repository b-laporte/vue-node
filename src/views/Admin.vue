<template>
  <div class="row">
    <!-- Main Column -->
    <div class="col-md-12">
      <!-- Admin -->
      <h1 class="my-4">Administration page</h1>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Post</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts">
            <th scope="row">{{ post.id }}</th>
            <td>{{ post.text }}</td>
            <td>
              <button
                type="button"
                @click="deletePost(post.id);"
                class="btn-warning btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>New Post</h2>

      <form class="mb-5">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            v-model="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" @click="createPost" class="btn btn-primary">
          New Post
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { postService } from '@/services/PostsService';
import state from '@/state/state';

@Component({
  components: {}
})
export default class Admin extends Vue {
  private posts = [];
  private text = '';

  private async created() {
    this.posts = await postService.getPosts();
  }

  private async createPost() {
    if (this.text !== '') {
      await postService.createPost(this.text);
      this.text = '';
      this.posts = await postService.getPosts();
    }
  }

  private async deletePost(id: string) {
    await postService.deletePost(id);
    this.text = '';
    this.posts = await postService.getPosts();
  }
}
</script>

<style scoped></style>

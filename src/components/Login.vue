<template>
  <div class="card my-4">
    <h5 class="card-header">Login</h5>
    <div class="card-body">
      <form v-if="state.user === null">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="button" @click="login" class="btn btn-primary">
          Login
        </button>
      </form>
      <div v-else>
        <div>Hi, {{ state.user.username }}!</div>
        <button type="button" @click="logout" class="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { loginService} from '@/services/LoginService';
import state from '@/state/state';

@Component
export default class Login extends Vue {
  private state = state;

  private async login() {
    state.user = await loginService.login('Admin', 'secret!');
  }

  private async logout() {
    await loginService.logout();
    state.user = null;
  }
}
</script>

<style scoped>
button {
  float: right;
}
</style>

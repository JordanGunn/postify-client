<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">

      <div id="home-postify">
        <router-link
            to="/"
            class="navbar-brand"
        >Postify Admin</router-link>
      </div>

      <div id="log-reg-nav">
        <ul v-if="!auth" class="navbar-nav me-auto mb-2 mb-md-0">

          <li class="nav-item">
            <router-link
                to="/login"
                class="nav-link"
            >Login</router-link>
          </li>

          <li class="nav-item">
            <router-link
                to="/register"
                class="nav-link"
            >Register</router-link>
          </li>
        </ul>

        <ul v-if="auth" class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a href="#" @click="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  //eslint-disable-next-line
  name: "Nav",
  setup() {

    const store = useStore();

    const auth = computed(() => store.state.authenticated);

    const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      await store.dispatch('setAuth', false);
      await this.$router.push('/login');
    }
    return { auth, logout }
  }
}
</script>

<style>
  #home-postify {

  }
</style>

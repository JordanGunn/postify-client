<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <div>
        <ul v-if="!auth" class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        <ul v-if="auth" class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link @click="logout" to="/login" class="nav-link">Logout</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
import useStore from "vuex/dist/vuex.mjs";
import {computed} from "vue";

export default {
  //eslint-disable-next-line
  name: "Nav",
  setup() {
    const store = useStore();
    const auth = computed( () => store.state.authenticated );

    const logout = async () => {
      await fetch ("http://localhost:8080/api/logout", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
      });
    }


    return { auth, logout }
  }
}
</script>
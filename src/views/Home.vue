<template>
 {{ message }}
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  // eslint-disable-next-line
  name: "Home",
  setup() {
    const message = ref("Not logged in...");
    const store = useStore();

    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user", {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        const content = await response.json();
        message.value = `Welcome ${content.name}`;
        await store.dispatch('setAuth', true);
    } catch (err) {
        await store.dispatch('setAuth', false);
        console.log(err);
    }});

    return { message };
  }
}
</script>
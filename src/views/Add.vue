<template>
  <Form @onSubmit="save" />
</template>

<script>
import Form from "../components/Form"

export default {
  name: "Add",
  components: {
    Form,
  },
  methods: {
    save(data) {
      this.$store.commit('addTodoItem', data);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>
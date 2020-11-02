<template>

  <nav class="navbar custom mt-2">
    <Container>
    <a class="custom-title" >SUPER TODOS</a>

    <router-link to="/add-new">
      <div class="custom-add">
        <a class="custom-add-text" href="">Add  Todo</a>
      </div>
    </router-link>
    </Container>
  </nav>

</template>

<script>
import Container from "../components/Container";
export default {
  name:"Header",
  components: {Container}
}
</script>

<style scoped>
.custom{
  background-color:rgba(var(--trans));

  &-add{
    display: flex;
    height: 40px;
    width: 120px;
    background-color: rgba(var(--blue));
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    &-text {
      font-size: 22px;
      color: rgba(var(--dark));

    }
  }

  &-title {
    font-size: 28px;
    color: rgba(var(--dark));

  }
}
</style>
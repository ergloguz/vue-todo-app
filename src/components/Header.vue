<template>

  <nav class="navbar custom">
    <Container>
    <a class="custom-title" >ONE ONE TODO APP</a>

    <router-link to="/add-new">
      <div class="custom-add">
        <a class="custom-add-text" href="">Add New Todo</a>
      </div>
    </router-link>
    </Container>
  </nav>

</template>

<script>
import Container from "@/components/Container";
export default {
  name:"Header",
  components: {Container}
}
</script>

<style scoped>
.custom{
  background-color:#E7EAF2;
  border-color: #1b262c;
  &-add{
    display: flex;
    height: 40px;
    width: 120px;
    background-color: #2DCAD2;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    &-text {
      font-size: 22px;
      color: #1B262C;

    }
  }

  &-title {
    font-size: 28px;
    color: #1B262C;

  }
}
</style>
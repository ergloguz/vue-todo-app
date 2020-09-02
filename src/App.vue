<template>
  <div id="app">
    <Header/>
    <Container>
      <router-view/>
    </Container>
    <Footer/>
  </div>
</template>

<style>

</style>
<script>
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  components: {Header, Footer, Container}
}
</script>
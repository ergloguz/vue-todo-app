<template>
  <div class="container">
    <div class=" base row">
      <div class="status" :class="colorArray[status]">
      </div>
      <div class="col base-todo">
        <a class="base-book-title">{{title}}</a>
        <a class="base-book-detail" >{{detail}}</a>
      </div>

      <div class="col ">
        <button  class="button"   @click="gotoUpdate">
          <a>Edit</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['index', 'title', 'detail', 'status'],
  data() {
    return {
      colorArray: ['bg-info', 'bg-info', 'bg-success', 'bg-danger'],
    }
  },
  methods: {
    gotoUpdate() {
      this.$router.push({
        name: 'UpdatePage',
        params: {
          id: this.index,
          formData: {
            index: this.index,
            title: this.title,
            detail: this.detail,
            status: this.status,
          }
        }
      })
    }
  },
}
</script>

<style scoped>
.base {
  display: flex;
  background-color: rgb(var(--dark));
  height: 150px;
  align-items: center;
  margin-top: 20px;
  &-image{
    height: 120px;
    width: 90px;
  }
  &-todo{
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-left: 20px;
    &-title{
      color: rgb(var(--trans));
    }
    &-detail {
      color: rgb(var(--blue));
    }
  }
}
.status {
  height: 150px;
  width: 10px;
}
.button {
  height: 50px;
  width: 120px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color:rgb(var(--gray));
  color:rgb(var(--blue));
  font-size: 22px;
  float: right;
  &:hover{
    background-color:rgba(var(--blue));
    color:rgba(var(--blue));
    cursor:pointer;
  }
}
</style>
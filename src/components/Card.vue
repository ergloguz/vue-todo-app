<template>
  <div class="container">
    <div class=" base row">
      <div class="status" :class="colorArray[status]">
      </div>
      <div class="col base-book">
        <a class="base-book-bookName">{{title}}</a>
        <a class="base-book-bookAuthor" >{{detail}}</a>
      </div>

      <div class="col ">
        <button  class="button "   @click="gotoUpdate">
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
  background-color: #131B23;
  height: 150px;
  align-items: center;
  margin-top: 20px;
  &-image{
    height: 120px;
    width: 90px;
  }
  &-book {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-left: 20px;
    &-bookName{
      color: white;
    }
    &-bookAuthor {
      color: #2DCAD2;
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
  background-color:#1b262c;
  color:#2DCAD2;
  font-size: 22px;
  float: right;
  &:hover{
    background-color:#2DCAD2;
    color:#1b262c;
    cursor:pointer;
  }
}
</style>
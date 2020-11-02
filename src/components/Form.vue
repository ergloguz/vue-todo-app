
<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" >
      <form class="container" @submit.prevent="handleSubmit(submitForm)">

        <div class="table mx-auto" >
          <div class="table-head">
            <a class="table-head-mark">ADD NEW TODO</a>
          </div>

          <div class="group mt-4">
            <div class="form-group">
              <label class="group-label">Status</label>


              <select class="form-control" name="status" v-model="formModel.status">
                <template v-for="status in Object.keys(STATUSSES)">
                  <option :value="STATUSSES[status].VALUE">
                    {{ STATUSSES[status].TEXT }}
                  </option>
                </template>
              </select>

            </div>
            <div class="form-group">
              <label class="group-label">Title</label>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input name="Title" v-model="formModel.title" class="form-control custom">
                <a class="group-error">{{ errors[0] }}</a>
              </ValidationProvider>
            </div>

            <div class="form-group">
              <label class="group-label">Detail</label>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <textarea name="Detail" v-model="formModel.detail" class="form-control" rows="3"></textarea>
                <a class="group-error">{{ errors[0] }}</a>
              </ValidationProvider>

            </div>
          </div>

          <button
              type="submit"
              :class="formData ? 'table-button' : 'table-button'"
          >
            <a>{{ formData ? 'Update' : 'Add New' }}</a>
          </button>

        </div>

      </form>
    </ValidationObserver>
  </div>
</template>



<script>
import { STATUSSES } from '../statuses';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  name: "Form",
  props: {
    formData: {
      type: Object,
      default: null,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      formModel: {
        title: '',
        detail: '',
        status: ''
      },
      STATUSSES
    }
  },
  methods: {
    submitForm() {
      this.$emit('onSubmit', this.formModel);
      this.clearForm();
    },
    clearForm() {
      this.formModel = {
        title: '',
        detail: '',
        status: ''
      }
    }
  },
  mounted() {
    if (this.formData) {
      this.formModel = this.formData;
    }
  }
}
</script>


<style scoped>
.table {
  margin-top: 20px;
  display: flex;
  border-radius: 2px;
  background-color: rgba(var(--dark));
  min-height: 500px;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  padding-bottom: 20px;
  &-button {
    height: 50px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color:rgba(var(--gray));
    color: rgb(var(--blue));
    font-size: 22px;
    &:hover{
      background-color:rgb(var(--blue));
      color:rgba(var(--dark));
      cursor:pointer;
    }
  }
  &-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-mark {
      font-size: 38px;
      color: rgb(var(--trans));
      margin-top: 20px;
      text-decoration: none;
    }
  }
}
.group {
  margin-top: auto;
  &-label{
    font-size: 22px;
    color:rgb(var(--blue));
  }
  &-error{
    color: rgb(var(--red));
    font-size: 20px;
    text-decoration: none;
  }
}
.custom{
  min-width: 300px;
}
</style>
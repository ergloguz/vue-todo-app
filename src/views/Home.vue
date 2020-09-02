<template>
  <div>
    <div class="card">

    </div>
    <div class="my-3">
      <select v-model="selectedFilterValue">
        <template v-for="status in Object.keys(STATUSSES)">
          <option :value="STATUSSES[status].VALUE">
            {{ STATUSSES[status].TEXT }}
          </option>
        </template>
      </select>
    </div>

    <div  v-if="!filteredItems.length"
          class="text-center alert alert-danger mt-2">
      Oops! Your List is Empty
    </div>

    <Card
        v-else
        v-for="item in filteredItems" :key="item.index"
        :index="item.index"
        :title="item.title"
        :detail="item.detail"
        :status="item.status"
    />
  </div>
</template>

<script>
import {STATUSSES} from '../statuses';

import Card from "@/components/Card";
export default {
  name: "Home",
  components: {
    Card,

  },
  data() {
    return {
      STATUSSES,
      selectedFilterValue: STATUSSES.ALL.VALUE
    }
  },
  computed: {
    getTodoList() {
      return this.$store.getters.getTodoList;
    },
    filteredItems() {
      if (this.selectedFilterValue === STATUSSES.ALL.VALUE) {
        return this.getTodoList;
      } else {
        return this.getTodoList.filter((item) => item.status == this.selectedFilterValue);
      }
    }
  }
}
</script>

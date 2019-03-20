<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filterState === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">
      <span class="icon-trashbin"></span> Clear Completed
    </span>
  </div>
</template>

<script>
import { todoMixin } from '../../utils/mixin'
export default {
  mixins: [todoMixin],
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todoList.filter(todo => !todo.completed).length
    }
  },
  methods: {
    clearAllCompleted () {
      if (this.todoList.length > 0) {
        this.setToastConfig({
          headerText: 'warning',
          contentText: 'are u sure to delete all todos?',
          btnShow: true,
          duration: 0,
          delId: 0,
          type: 'delTodoAll'
        })
        this.setToastShow(true)
      }
    },
    toggleFilter (state) {
      this.setFilterState(state)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
@mixin paddingbox {
  padding: 0 10px;
  box-sizing: border-box;
}

.helper {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-radius: 0 0 8px 8px;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
  .left {
    @include paddingbox;
    width: 150px;
    text-align: left;
  }
  .tabs {
    @include paddingbox;
    width: 200px;
    display: flex;
    justify-content: space-around;
    span {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      border: 1px solid rgba(175, 47, 47, 0);
      transition: all 0.2s ease-in-out;
      &.actived {
        border-color: rgba(175, 47, 47, 0.4);
        border-radius: 5px;
        color: rgba(175, 47, 47, 0.4);
      }
    }
  }
  .clear {
    @include paddingbox;
    width: 150px;
    text-align: right;
    cursor: pointer;
    color: red;
    .icon-trashbin {
      font-size: 14px;
    }
  }
}
</style>

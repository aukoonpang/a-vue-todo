<template>
  <div
    :class="['todo-item', todo.completed ? 'completed' : '']"
    @mouseenter="showTimeStamp"
    @mouseleave="hideTimeStamp"
  >
    <input type="checkbox" class="toggle" v-model="checked" @change="updateTodoList">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo"></button>
    <div class="time-stamp-wrapper">
      <transition name="slide-right">
        <div class="time-stamp" v-show="ifHover">{{todo.createTime|formatDate}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { todoMixin } from '../../utils/mixin'
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

var padDate = function (v) {
  v = v < 10 ? '0' + v : v
  return v
}
export default {
  mixins: [todoMixin],
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ifHover: false,
      checked: false
    }
  },
  filters: {
    formatDate: function (val) {
      const value = new Date(val)
      const year = value.getFullYear()
      const month = padDate(value.getMonth() + 1)
      const date = padDate(value.getDate())
      const hour = padDate(value.getHours())
      const minutes = padDate(value.getMinutes())
      const seconds = padDate(value.getSeconds())
      return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`
    }
  },
  methods: {
    updateTodoList () {
      const currentId = this.todo.id
      const newTodoList = this.todoList.map(todo => {
        if (todo.id === currentId) {
          todo.completed = this.checked
          return todo
        } else {
          return todo
        }
      })
      this.setTodoList(newTodoList)
      setLocalStorage('todoList', newTodoList)
    },
    deleteTodo () {
      const currentId = this.todo.id
      this.setToastConfig({
        headerText: 'warning',
        contentText: 'are u sure to delete this todo?',
        btnShow: true,
        duration: 0,
        delId: currentId,
        type: 'delTodoItem'
      })
      this.setToastShow(true)
    },
    showTimeStamp () {
      this.ifHover = true
    },
    hideTimeStamp () {
      this.ifHover = false
    }
  },
  mounted () {
    if (this.todo) {
      this.checked = this.todo.completed
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";

.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  &:hover {
    .destory:after {
      content: "×";
    }
  }
  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
  .toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    outline: none;
    &:after {
      content: url("../../assets/images/round.svg");
    }
    &:checked:after {
      content: url("../../assets/images/done.svg");
    }
  }
  .destory {
    position: absolute;
    top: 0;
    right: 6px;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    font-size: 30px;
    padding: 0;
    color: red;
    box-sizing: border-box;
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
  }
  .time-stamp-wrapper {
    transform: scale(0.8, 0.8) translate(-12%, -10%);
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    .time-stamp {
      width: 120px;
      height: 14px;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      background: greenyellow;
      border-radius: 0 0 8px 0;
      border-right: 1px dashed #ccc;
      border-bottom: 1px dashed #ccc;
    }
  }
}
</style>

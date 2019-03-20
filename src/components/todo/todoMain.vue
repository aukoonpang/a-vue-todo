<template>
  <div class="todo-main">
    <todo-date-time></todo-date-time>
    <todo-weather></todo-weather>
    <input
      type="text"
      class="todo-input"
      placeholder="what's next to do?!"
      @keyup.enter.exact="addTodo"
      v-model="todoContentInputText"
    >
    <scroll :top="275" :bottom="240">
      <todo-item :todo="todo" v-for="todo in filteredTodos" :key="todo.id"></todo-item>
    </scroll>
    <todo-menu-bar></todo-menu-bar>
    <toast @toastCommit="toastCommit" ref="toast"></toast>
  </div>
</template>

<script>
import todoDateTime from './todoDateTime'
import todoWeather from './todoWeather'
import scroll from '../common/scroll'
import todoMenuBar from './todoMenuBar'
import todoItem from './todoItem'
import Toast from '../common/toast'
import { todoMixin } from '../../utils/mixin'
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

export default {
  mixins: [todoMixin],
  components: {
    todoDateTime,
    todoWeather,
    scroll,
    todoMenuBar,
    todoItem,
    Toast
  },
  data () {
    return {
      todoContentInputText: ''
    }
  },
  computed: {
    filteredTodos () {
      if (this.filterState === 'all') {
        return this.todoList
      }
      const completed = this.filterState === 'completed'
      return this.todoList.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo () {
      if (this.todoContentInputText !== '') {
        const todos = this.todoList
        const len = todos.length
        const id = len === 0 ? 0 : todos[0].id + 1
        const time = new Date()
        const content = this.todoContentInputText
        todos.unshift({
          content: content,
          completed: false,
          createTime: time,
          id: id
        })
        this.setTodoList(todos)
        setLocalStorage('todoList', todos)
        this.todoContentInputText = ''
      } else {
        this.setToastConfig({
          headerText: 'Ooops!',
          contentText: 'must input some words before addTodo',
          btnShow: false,
          duration: 2000,
          delId: 0,
          type: 'warn'
        })
        this.setToastShow(true)
      }
    },
    toastCommit (toastCommitParam) {
      switch (toastCommitParam.type) {
        case 'delTodoItem':
          let newTodoList = this.todoList.filter(
            todo => todo.id !== toastCommitParam.delId
          )
          this.setTodoList(newTodoList)
          setLocalStorage('todoList', newTodoList)
          break
        case 'delTodoAll':
          let news = []
          this.setTodoList(news)
          setLocalStorage('todoList', news)
          break
        case 'warn':
          this.$refs.toast.removeToast()
          break
        default:
          break
      }
      this.$refs.toast.removeToast()
    },
    init () {
      const todos = getLocalStorage('todoList')
      if (todos) {
        this.setTodoList(todos)
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.todo-main {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  .todo-input {
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.06);
    outline: none;
    // box-shadow: inset 0 -1px 3px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px 16px 10px 60px;
    color: #666;
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: #ccc;
    }
  }
}
</style>

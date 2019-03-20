<template>
  <div class="todo">
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import todoHeader from '../../components/todo/todoHeader'
import todoMain from '../../components/todo/todoMain'
import todoFooter from '../../components/todo/todoFooter'

export default {
  components: {
    todoHeader,
    todoMain,
    todoFooter
  },
  mounted () {}
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.todo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(../../assets/images/bg.jpg);
}
</style>

<template>
  <div class="todo-header">
    <i></i>
    <span>A-VUE-TODO</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.todo-header {
  padding: 40px 0;
  text-align: center;
  i {
    margin-right: 20px;
    display: inline-block;
    height: 50px;
    width: 50px;
    background-image: url("../../assets/logo.png");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  span {
    font-size: 80px;
    font-weight: bold;
    color: #000;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
}
</style>

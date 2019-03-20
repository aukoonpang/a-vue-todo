<template>
  <div class="footer">
    <span>write by {{author}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'akp'
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.footer {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20px;
  font-weight: bold;
  color: #333;
  font-size: 12px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
}
</style>

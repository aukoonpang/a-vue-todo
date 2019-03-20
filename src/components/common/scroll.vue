<template>
  <div
    class="scroll-wrapper"
    :class="{'no-scroll': ifNoScroll}"
    @scroll.passive="handleScroll"
    ref="scrollWrapper"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    ifNoScroll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleScroll (e) {
      const offsetY =
        e.target.scrollTop || window.pageYOffset || document.body.scrollTop
      this.$emit('onScroll', offsetY)
    },
    scrollTo (x, y) {
      this.$refs.scrollWrapper.scrollTo(x, y)
    },
    refresh () {
      if (this.$refs.scrollWrapper) {
        this.$refs.scrollWrapper.style.height =
          window.innerHeight - this.top - this.bottom + 'px'
        this.$refs.scrollWrapper.addEventListener('scroll', this.handleScroll)
      }
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/global.scss";

.scroll-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  background: white;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* 设置滚动条的样式 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  /* 滚动槽 */
  &::-webkit-scrollbar-track {
    box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 0.4);
  }
  &.no-scroll {
    overflow: hidden;
  }
}
</style>

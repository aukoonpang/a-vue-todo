<template>
  <div class="toast-mask" @click="maskClick" v-if="toastShow">
    <div class="toast-content bounceIn">
      <div class="toast-header">{{toastConfig.headerText}}</div>
      <div class="toast-body">{{toastConfig.contentText}}</div>
      <span
        class="toast-button toast-button-cancel"
        v-if="toastConfig.btnShow"
        @click="removeToast"
      >nope</span>
      <span class="toast-button toast-button-confirm" @click="toastBtnComit">yep</span>
    </div>
  </div>
</template>

<script>
import { todoMixin } from '../../utils/mixin'
import { setTimeout } from 'timers'

export default {
  mixins: [todoMixin],
  data () {
    return {
      // toastConfig: {
      //   headerText: "",
      //   contentText: "",
      //   btnShow: false,
      //   duration: 0,
      //   delId: 0,
      //   type: ""
      // },
      // toastShow:false
    }
  },
  methods: {
    toastBtnComit () {
      const toastCommitParam = {
        type: this.toastConfig.type,
        delId: this.toastConfig.delId
      }
      this.$emit('toastCommit', toastCommitParam)
    },
    maskClick (e) {
      if (e.target.querySelector('.toast-content')) {
        this.setToastShow(false)
      }
    },
    removeToast () {
      this.setToastShow(false)
    }
  },
  watch: {
    toastConfig: function (newTC, oldTC) {
      if (newTC && newTC.duration !== 0) {
        this.autoClose = setTimeout(() => {
          this.removeToast()
        }, newTC.duration)
      }
    }
  },
  mounted () {}
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

.toast-mask {
  position: fixed;
  z-index: 9999;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  .toast-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 250px;
    height: 118px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    .toast-header {
      height: 30px;
      line-height: 30px;
      background-color: #eee;
      text-indent: 20px;
      font-size: 18px;
      font-weight: 700;
      color: #666;
    }
    .toast-body {
      padding: 10px 20px;
    }
    .toast-button {
      position: absolute;
      bottom: 10px;
      width: auto;
      padding: 4px 8px;
      outline: none;
      border: none;
      color: #fff;
      box-sizing: border-box;
      cursor: pointer;
      &.toast-button-cancel {
        right: 60px;
        background: #ccc;
      }
      &.toast-button-confirm {
        background: #4ca5ff;
        right: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="date-time-wrap clearfix">
    <div class="date-box">
      <div class="date-box-date-l date-box-date">{{dates.getDate()}}</div>
      <div class="date-box-date-r">
        <div class="date-box-date-mon">{{dates.getMonth() | formatMon}}月</div>
        <div class="date-box-date-year">{{dates.getFullYear()}}</div>
      </div>
    </div>
    <div class="time-box">
      {{dates.getHours()>9?dates.getHours():'0'+dates.getHours()}}:
      {{dates.getMinutes()>9?dates.getMinutes():'0'+dates.getMinutes()}}:
      {{dates.getSeconds()>9?dates.getSeconds():'0'+dates.getSeconds()}} 星期{{dates.getDay() | formatDay}}
    </div>
  </div>
</template>

<script>
import utils from '../../utils/utils'

export default {
  data () {
    return {
      dates: new Date()
    }
  },
  // vue.js支持在{{  }}插值的尾部添加一个管道符“(|)”对数据进行过滤，经常用于格式化文本，
  // 比如字母全部大写，货币千位使用逗号分隔等。过滤的规则是自定义的，通过给vue实例添加选项filters来设置，例如对显示时间的格式化处理
  filters: {
    formatMon: function (value) {
      return utils.numToMon(value)
    },
    formatDay: function (value) {
      return utils.numToDay(value)
    }
  },
  // 实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载，$el 还不可用。需要初始化处理一些数据时会比较有用
  created: function () {
    // do nothing
  },
  // el挂载到实例上后调用，一般第一个业务逻辑会在这里开始
  mounted () {
    var self = this
    this.timer = setInterval(() => {
      self.dates = new Date() // 修改数据date
    }, 1000)
  },
  // 实例销毁之前调用。主要解绑一些使用addEventListener监听的事件等
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
@mixin monandyear {
  width: 50px;
  height: 50%;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  text-shadow: -1px -1px white, 1px 1px #333;
}

.date-time-wrap {
  width: 100%;
  height: 60px;
  // @include clearfix;
  .date-box {
    @include fl;
    .date-box-date-l {
      @include fl;
      &.date-box-date {
        margin-left: 10px;
        width: 40px;
        height: 100%;
        font-size: 30px;
        text-align: center;
        line-height: 60px;
        color: #000;
        font-weight: bold;
      }
    }
    .date-box-date-r {
      @include fl;
      .date-box-date-mon {
        @include monandyear;
        border-bottom: 1px solid #666;
      }
      .date-box-date-year {
        @include monandyear;
      }
    }
  }
  .time-box {
    @include fr;
    margin-right: 10px;
    font-size: 18px;
    line-height: 60px;
    font-weight: 600;
    color: #444;
  }
}
</style>

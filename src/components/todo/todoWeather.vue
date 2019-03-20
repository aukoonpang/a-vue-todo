<template>
  <div class="weather-wrapper">
    <marquee behavior="scroll">
      <span
        class="city"
      >{{weatherObject.today.city&&weatherObject.today.city!==''?weatherObject.today.city:'cityname'}}</span>
      <span
        class="weather"
      >{{weatherObject.today.weather&&weatherObject.today.weather!==''?weatherObject.today.weather:'weather'}}</span>
      <span
        class="temperature"
      >{{weatherObject.today.temperature&&weatherObject.today.temperature!==''?weatherObject.today.temperature:'temperature'}}</span>
      <span
        class="dressing-advice"
      >{{weatherObject.today.dressing_advice&&weatherObject.today.dressing_advice!==''?weatherObject.today.dressing_advice:'dressing-advice'}}</span>
    </marquee>
  </div>
</template>

<script>
import { queryWeather } from '../../api/request'
export default {
  data () {
    return {
      weatherObject: {
        today: {
          city: 'city',
          weather: 'weather',
          temperature: 'temperature',
          dressing_advice: 'dressing-advice  api not working'
        }
      }
    }
  },
  mounted () {
    queryWeather().then(response => {
      if (
        response.status === 200 &&
        response.statusText === 'OK' &&
        response.data.result
      ) {
        const data = response.data.result
        this.weatherObject = data
      } else {
        this.setToastConfig({
          headerText: 'Ooops',
          contentText: 'seems weather api is not working',
          btnShow: false,
          duration: 2000,
          delId: 0,
          type: 'warning'
        })
        this.setToastShow(true)
      }
    })
  }
}
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.weather-wrapper {
  span {
    font-size: 12px;
    font-weight: bold;
    padding-right: 80px;
    &.city {
      color: royalblue;
      padding-right: 40px;
    }
    &.weather {
      color: orange;
      padding-right: 40px;
    }
    &.temperature {
      color: orange;
      padding-right: 40px;
    }
    &.dressing-advice {
      color: #999;
    }
  }
}
</style>

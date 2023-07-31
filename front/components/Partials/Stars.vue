<template>
  <div class="stars">
    <ul class="stars-rating">
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
    </ul>
    <span>{{this.rate}}</span>
  </div>
</template>

<script>

export default {
  name: 'stars',
  props: {
    rate: Number
  }
}
</script>

<style lang="scss" scoped>
.stars {
  max-width: 130px;
  display: inline-block;
  margin-right: 10px;
  &-rating {
    display: flex;
    margin-right: 10px;
    &:not(:last-child){
      margin-bottom: 10px;
    }
    li {
      display: block;
      font-size: 20px;
      font-family: Arial !important;
      position: relative;
      color: #9F6B58;
    }
  }
  &-f:before {
    content: "★";
  }
  span{
    font-size: 20px;
    line-height: 24px;
    color: #9F6B58;
  }
}
</style>

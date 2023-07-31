<template>
  <section class="report-content">
    <div class="container">
      <form @submit="submit" class="filter-form">
        <h2>Step 1. Choose date range:</h2>
        <div class="filter-wrap">
          <div class="filter filter-short">
            <label for="startDate">Start date</label>
            <input type="date" v-model="startDate" id="startDate">
          </div>
          <div class="filter filter-short">
            <label for="endDate">End date</label>
            <input type="date" v-model="endDate" id="endDate">
          </div>
          <div class="filter">
            <label class="hide">1</label>
            <input type="submit" value="GO">
          </div>
        </div>
      </form>

      <table v-if="orders.length > 0">
        <thead>
          <tr>
            <th>Sales Count</th>
            <th>Sales Total</th>
            <th>Sales Complete</th>
            <th>Sales Refunded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ orders.length }}</td>
            <td>{{ salesTotal }} $</td>
            <td>{{ salesComplete }} $</td>
            <td>{{ salesRefunded }} $</td>
          </tr>
        </tbody>
      </table>

      <form @submit="sortContent" class="filter-form" v-if="orders.length > 0">
        <h2>Step 2. Choose Content:</h2>
        <div class="filter-wrap">
          <div class="filter" >
            <a class="utm-btn" @click="openUTM('utm_content')">utm_content</a>
            <ul id="utm_content_list" class="utm-list">
              <li v-for="(item, i) in contentList">
                <input type="checkbox" :id="`utm_content_${i}`" :value="item" v-model="content_checkboxes">
                <label :for="`utm_content_${i}`">{{ item }}</label>
              </li>
            </ul>
          </div>
          <div class="filter">
            <input type="submit" value="GO">
          </div>
          <div class="filter filter-half">
            <ul class="checked-list">
              <li v-for="content in content_checkboxes">{{ content }}</li>
            </ul>
          </div>
        </div>
      </form>
      <table v-if="ordersSort.length > 0">
        <thead>
          <tr>
            <th>Sales Count</th>
            <th>Sales Total</th>
            <th>Sales Complete</th>
            <th>Sales Refunded</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ ordersSort.length }}</td>
            <td>{{ salesTotalSort }} $</td>
            <td>{{ salesCompleteSort }} $</td>
            <td>{{ salesRefundedSort }} $</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'Report',
  data(){
    return {
      orders: [],
      ordersComplete: [],
      ordersRefunded: [],
      contentList: [],
      salesTotal: 0,
      salesComplete: 0,
      salesRefunded: 0,
      ordersSort: [],
      ordersCompleteSort: [],
      ordersRefundedSort: [],
      salesTotalSort: 0,
      salesCompleteSort: 0,
      salesRefundedSort: 0,
      startDate: '09/13/2021',
      endDate: '09/14/2021',
      content_checkboxes: []
    }
  },
  methods: {
    submit(e){
      e.preventDefault()
      this.orders = []
      this.ordersSort = []
      this.content_checkboxes = []
      this.salesTotal = 0
      this.salesComplete = 0
      this.salesRefunded = 0
      Request.orders({
        startDate: this.startDate,
        endDate: this.endDate,
        campaignId: 12
      })
        .then(orders => {
          orders.forEach(order => {
            if(order.custom4){
              if(order.orderStatus === "REFUNDED" || order.orderStatus === "COMPLETE"){
                this.salesTotal = this.salesTotal + Number(order.totalAmount)
                if(!this.contentList.includes(order.custom4)){
                  this.contentList.push(order.custom4)
                }
                this.orders.push(order)
              }
              if(order.orderStatus === "COMPLETE"){
                this.ordersComplete.push(order)
                this.salesComplete = this.salesComplete + Number(order.totalAmount)
              }
              if(order.orderStatus === "REFUNDED"){
                this.ordersRefunded.push(order)
                this.salesRefunded = this.salesRefunded + Number(order.totalAmount)
              }
            }
          })
        })
    },
    closeList(){
      const lists = document.querySelectorAll('.utm-list');
      lists.forEach(list => list.classList.remove('utm-list--active'));
    },
    sortContent(e){
      e.preventDefault()
      this.salesTotalSort = 0
      this.salesCompleteSort = 0
      this.salesRefundedSort = 0
      this.ordersSort = []
      this.orders.forEach(order => {
        if(this.content_checkboxes.includes(order.custom4)){
          if(order.orderStatus === "REFUNDED" || order.orderStatus === "COMPLETE"){
            this.ordersSort.push(order)
            this.salesTotalSort = this.salesTotalSort + Number(order.totalAmount)
          }
          if(order.orderStatus === "COMPLETE"){
            this.ordersCompleteSort.push(order)
            this.salesCompleteSort = this.salesCompleteSort + Number(order.totalAmount)
          }
          if(order.orderStatus === "REFUNDED"){
            this.ordersRefundedSort.push(order)
            this.salesRefundedSort = this.salesRefundedSort + Number(order.totalAmount)
          }
        }
      })
      this.closeList()
    },
    openUTM(id){
      document.getElementById(`${id}_list`).classList.toggle('utm-list--active');
    },
  },
  beforeCreate(){
    if( !this.$route.query.pass && this.$route.query.pass !== '@qwerty123456@' ){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="scss">
.report-content{
  padding-bottom: 100px;
}
h2{
  font-size: 25px;
  color: #000;
  margin-bottom: 15px;
  span{
    font-size: 50%;
  }
}
.filter{
  flex: 1 25%;
  max-width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  &-short{
    flex: 1 200px;
    max-width: 200px;
  }
  &-half{
    flex: 1 50%;
    max-width: 50%;
  }
  &-form{
    margin-top: 30px;
    padding-bottom: 30px;
  }
  &-wrap{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    &:not(:last-child){
      margin-bottom: 15px;
    }
  }
}
label{
  font-size: 16px;
  display: block;
  margin-bottom: 0px;
  &.hide{
    opacity: 0;
  }
}
select{
  height: 45px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}
input{
  height: 45px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &[type="submit"]{
    background: #fc8060;
    font-size: 14px;
    font-weight: 700;
    border: none;
    padding: 0 15px;
    color: #fff;
    width: auto;
    transition: .5s ease;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, .8);
    &:active{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
  &[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
}
.utm{
  &-btn{
    display: block;
    width: 100%;
    background: none;
    border: 1px solid #000;
    border-radius: 4px;
    height: 45px;
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after{
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 17px;
      right: 10px;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
    }
  }
  &-list{
    padding: 20px 10px 15px 10px;
    border: 1px solid #000;
    margin-top: -2px;
    max-height: 0px;
    opacity: 0;
    transition: max-height .5s ease, opacity .5s ease;
    &--active{
      max-height: 1000px;
      opacity: 1;
    }
    li{
      display: flex;
      align-items: flex-start;
      &:not(:first-child){
        margin-top: 15px;
      }
      label{
        font-size: 14px;
        line-height: 20px;
      }
      input{
        margin: 0 10px 0 0;
        min-width: 20px;
      }
    }
  }
}
.checked-list{
  list-style: disc outside;
  li{
    line-height: 20px;
  }
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 50px;
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  td{
    text-align: center;
  }
  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color: #ddd;}
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #fc8060;
    color: white;
  }
  span{
    cursor: pointer;
    position: relative;
    &:before{
      content: "+";
      position: absolute;
      transform: translate(-50%, -50%) rotate(-45deg) scale(1.5);
    }
    &:hover{
      color: red;
    }
  }
}
</style>
<template>
  <div class="cart">
    <table>
      <tbody>
        <tr>
          <td colspan="2">
            <div class="product">
              <img src="@/assets/img/rcc1j.jpg" alt="" width="100px" height="100px">
              <div class="product-info">
                <h4>{{ productsObj[productId].name }}</h4>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${{ productsObj[productId].price }}</td>
        </tr>
        <tr>
          <td><b>TOTAL</b></td>
          <td>${{ Number(productsObj[productId].price) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CheckoutCart',
  data(){
    return {
      productId: localStorage.product_id
    }
  },
  methods: {
    convertArrayToObject(array, key) {
      const initialValue = {};
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item
        };
      }, initialValue);
    }
  },
  computed: {
    productsObj(){
      const products = this.$store.state.products
      return this.convertArrayToObject(products, 'id')
    }
  }
}
</script>
<style lang="scss" scoped>
.cart{
  margin-bottom: 30px;
}
h3{
  margin: 0 0 15px;
  color: #000;
  font-size: 28px;
  font-weight: 500;
}
h4{
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}
table{
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
  tbody{
    td{
      padding-bottom: 10px;
    }
  }
  tfoot{
    td{
      padding: 10px;
      border-bottom: none;
      font-weight: 400;
      font-size: 14px;
      border-top: 1px solid #ccc;
      &:not(:first-child){
        text-align: right;
        border-left: 1px solid #ccc;
        width: 70px;
      }
    }
    tr{
      &:last-child{
        td{
          font-size: 20px;
        }
      }
    }
  }
}

.product{
  display: flex;
  &-info{
    padding-top: 10px;
    padding-left: 5px;
    img{
      display: block;
      position: absolute;
      left: 0; top: 0;
    }
    h4{
      font-size: 18px;
      font-weight: 700;
      padding: 6px 0 0;
      margin-bottom: 5px;
      @media(min-width:768px){
        font-size: 22px;
      }
    }
    strong:before {
      content: "Quantity: ";
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>
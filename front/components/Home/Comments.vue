<template>
  <section class="comments">
    <div class="container">
      <div class="title">
        <span>Real Customers Talk About <br> Their Results-</span>
      </div>
      <div class="img">
        <div class="img-left">
          <picture>
            <source srcset="@/assets/img/comment-left.webp" type="image/webp">
            <img src="@/assets/img/comment-left.png">
          </picture>
        </div>
        <div class="img-right">
          <picture>
            <source srcset="@/assets/img/comment-right.webp" type="image/webp">
            <img src="@/assets/img/comment-right.png">
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.comments{
  margin-bottom: 0;
  @media(min-width:768px){
    margin-bottom: 60px;
  }
}
.title{
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  &::before{
    content: "";
    height: 1px;
    width: 20%;
    display: block;
    background: #dce7f0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &::after{
    content: "";
    height: 1px;
    width: 20%;
    display: block;
    background: #dce7f0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  span{
    font-weight: bold;
    font-size: 23px;
    line-height: 1.2;
    color: #0C426D;
    background: #fff;
    @media(min-width:576px){
      font-size: 40px;
    }
  }
}
.img{
  display: flex;
  justify-content: center;
  @media(max-width:767px){
    flex-direction: column;
  }
}
</style>

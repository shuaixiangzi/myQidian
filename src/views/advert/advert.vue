<template>
  <div class="advert_box">
      <div class="ad_img"></div>
      <section class="ad_desc">
          <div class="type font-red">每日导读</div>
          <p class="name font-black">三寸人间</p>
          <p class="desc font-grey">因你读过《雪中悍刀行（全集）》</p>
      </section>
      <div class="read_info">
          <div class="name">阅读时长</div>
          <div class="time font-red">0分种</div>
          <router-link class="btn" to="">做任务</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'advert',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.advert_box{
    @include flexJustify(flex-start);
    @include bb-1px($grey);
    width: 100%;
    box-sizing: border-box;
    padding: 43px 45px;
    background-color: #faf9f5;

    .ad_img{
        @include bis(ad, png);
        background-size: cover;
        width: 150px;
        height: 200px;
    }

    .ad_desc{
        padding-left: 35px;
        width: 560px;

        .type{
            margin-top: 20px;
            font-size: 12px;
        }

        .name{
            font-size: 16px;
            font-weight: bold;
            margin: 10px 0;
        }

        .desc{
            font-size: 12px;
        }
    }

    .read_info{
        @include bl-1px($grey);
        padding-left: 50px;
        text-align: center;
        .name{
            font-size: 12px;
        }
        .time{
            font-size: 16px;
            margin: 15px 0;
        }
        .btn{
            color: $font-red;
            border: $font-red;
            font-size: 12px;
            padding: 10px 40px;
            border-radius: 70px;
            border:1px solid $font-red;
            display: block;
            padding-left: 50px;
        }
    }
}

</style>>
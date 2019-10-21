<template>
  <div class="bookset">
      <div class="mask" @click="close"></div>
      <div class="detail">
        <div class="bookInfo">
          <div class="cover">
            <img src="../../../assets/img/book.png" alt=""/>
          </div>
          <div class="nameAuther">
            <p class="name">雪中悍刀行（全集）</p>
            <p class="auther">烽火戏诸侯</p>
          </div>
          <router-link to="" class="btn">详情</router-link>
        </div>

        <div class="fansInfo">
          <div class="my">我的粉丝值</div>
          <div class="level">
            <div class="type">见习</div>
          </div>
          <div class="value">
            <span class="value_txt">暂无粉丝值</span>
            <icon-svg icon-class="iconchangyongtubiao-xianxingdaochu-zhuanqu-"></icon-svg>
          </div>
        </div>

        <ul class="bookset-function">
          <li>
            <div>
              <qd-switch :value="switchValue.top"></qd-switch>
              <p>置顶</p>
            </div>
            <div>
              <qd-switch :value="switchValue.update"></qd-switch>
              <p>更新提醒</p>
            </div>
            <div>
              <qd-switch :value="switchValue.subscribe"></qd-switch>
              <p>自动订阅</p>
            </div>
            <div>
              <icon-svg icon-class="iconxiaoxi" class="bookfriend"></icon-svg>
              <p>书友圈</p>
            </div>
          </li>
          <li class="second">
            <div>
              <icon-svg icon-class="iconxiazai"></icon-svg>
              <p>批量订阅</p>
            </div>
            <div>
              <icon-svg icon-class="iconyidongbaobiao"></icon-svg>
              <p>移到分组</p>
            </div>
            <div>
              <icon-svg icon-class="iconfenxiang"></icon-svg>
              <p>分享本书</p>
            </div>
            <div>
              <icon-svg icon-class="iconicon7" class="delete"></icon-svg>
              <p>删除</p>
            </div>
          </li>
          <li class="third">
            <div>
              <icon-svg icon-class="icontuijian"></icon-svg>
              <p>投推荐票</p>
            </div>
            <div>
              <icon-svg icon-class="iconpiao"></icon-svg>
              <p>投月票</p>
            </div>
            <div>
              <icon-svg icon-class="iconpiaoquan"  class="exceptional"></icon-svg>
              <p>打赏</p>
            </div>
            <div>
              <icon-svg icon-class="iconhongbao" class="money"></icon-svg>
              <p>红包</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import qdSwitch from '@/components/common/qdSwitch.vue'
export default {
  name: 'bookSet',
  components: {
    qdSwitch:qdSwitch
  },
  methods: {
    close(){
      this.$emit('closeBookSet');
    }
  },
  data() {
    return {
      switchValue: {
        top: true,
        update: false,
        subscribe: false
      }
    }
  },

  created(){
    console.log(this.switchValue);
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/mixin.scss';

.bookset{
  .detail{
    width: 100%;
    height: 990px;
    background-color: #fff;
    padding: 44px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 101;

    .bookInfo{
      @include flexJustify(flex-start);
      @include bb-1px(#ededed);
      padding-bottom: 40px;

      .cover{
        width: 115px;
        height: 153px;
       
        img{
          width: 100%;
          height: 100%;
        }
      }

      .nameAuther{
        flex: 2;
        padding-left: 30px;

        .name{
          font-size: 14px;
          color: $font-black;
          font-weight: bold;
          margin: 16px 0;
        }

        .auther{
          font-size: 14px;
          color: $font-grey;
        }
      }

      .btn{
        display: block;
        width: 155px;
        height: 72px;
        box-sizing: border-box;
        font-size: 14px;
        border: 1px solid #474747;
        text-align: center;
        border-radius: 10px;
        line-height: 70px;
        margin-top: 40px;
      }
    }

    .fansInfo{
      @include flexJustify(flex-start);
      padding: 50px 0;

      .my{
        font-size: 14px;
        font-weight: bold;
        color: $font-black;
      }
      .level{
        flex: 2;
        .type{
          width: max-content;
          padding: 0 15px;
          font-size: 12px;
          height: 43px;
          line-height: 43px;
          background-color: #72dffc;
          border: 1px solid #a9ccd2;
          color: #fff;
          vertical-align: middle;
          margin-left: 23px;
          margin-top: 2px;
        }
      }

      .value{
        .value_txt{
          margin-top: 2px;
        }
        span{
          font-size: 14px;
          color: $font-grey;
          margin-right: 15px;
        }

        i{
          font-size: 12px;
        }
      }
    }

    .bookset-function{
      li{
        @include flexJustify;
        @include bt-1px(#ececec);
        padding-bottom: 25px;
        text-align: center;

        &>div{
          width: 25%;
          .qd-switch{
            color: #a9b1bc;
            font-size: 30px;
          }

          .svg-icon{
            font-size: 30px;
            color: #444446;
          }

          .bookfriend{
            margin-top: 20px;
            margin-bottom: 5px;
          }
        }
      }

      .second,.third{
        padding: 35px 0;

        .svg-icon{
          margin-bottom: 20px;
        }

        .delete{
          font-size: 24px;
          margin: 15px 0 15px 0;
        }

        .exceptional{
          font-size: 24px;
          margin: 15px 0 25px 0;
        }

        .money{
          margin: 5px 0 15px 0;
        }
      }
     
    }
  }

 
}
</style>
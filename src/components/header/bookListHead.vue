<template>
    <header class="header">
        <div class="filtrate">
            <icon-svg icon-class="iconiconfontzhizuobiaozhun023125"></icon-svg>
            <span class="filtrate_title">筛选</span>
        </div>

        <div class="title">
            <router-link to="" class="title_href active">书架</router-link>
            <router-link to="" class="title_href">关注</router-link>
        </div>

        <div class="function">
            <icon-svg icon-class="iconsousuo"></icon-svg>
            <icon-svg icon-class="icongengduo"></icon-svg>
        </div>
    </header>
</template>
<script>
import mixins from '@/mixins/touch.js'
export default {
    name:'bookListHead',
    mixins: [mixins]
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/mixin.scss';

.header{
    @include flexJustify;

    background-color: $red;
    padding:29px 46px;

    i{
        color: #fff;
    }

    .filtrate{
        @include borderRadius(50px);

        border: 1px solid #fff;
        box-sizing: border-box;
        padding: 10px 25px;

        
        .filtrate_title{
            color: #fff;
            margin-left: 10px;
            vertical-align: top;
        }

        .svg-icon{
            color: #fff;
        }
    }

    .title{
        .title_href{
            @include fc(14px,#fff);

            padding:0 15px;
            color: #ffd7d4;
        }

        .active{
            @include fc(16px, #fff);
            position: relative;
        }

        .active:after{
            @include cl;
            content: '';
            bottom: -6PX;
            width: 40px;
            height: 2PX;
            background-color: #fff;
            border-bottom: 2px solid #fff;
        }
    }

    .function{
        .iconfont{
            font-size: 20px;
        }
        .more{
            margin-left: 50px;
        }

        .svg-icon{
            color: #fff;
            font-size: 20px;
            margin-top: 5px;
            margin-right: 72px;

            &:last-child{
                font-size: 16px;
                margin-right: 0;
            }
        }
    }
}
</style>
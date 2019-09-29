<template>
    <footer class="footer">
       <div class="nav_list">
           <div class="nav_icon active">
                <icon-svg icon-class="iconshu"></icon-svg>
                <div>书架</div>
           </div>
           <div class="nav_icon">
                <icon-svg icon-class="iconjingxuan-" ></icon-svg>
                <div>精选</div>
           </div>

           <div class="activity">
                <img src="../../assets/img/activity.png"/>
           </div>

           <div class="nav_icon">
                <icon-svg icon-class="iconfaxian" ></icon-svg>
                <div>发现</div>
           </div>
           <div class="nav_icon">
                <icon-svg icon-class="iconwode1" ></icon-svg>
                <div>我</div>
           </div>
       </div>
    </footer>
</template>
<script>
export default {
    name:'footerTop'
}
</script>
<style scoped lang='scss'>
@import '@/assets/css/mixin.scss';

.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .nav_list{
        @include flexJustify(space-around);
        @include bt-1px;
        background-color: #fff;
        padding: 20px;
        .nav_icon{
            text-align: center;
            font-size: 24px;

            &.active{
                color: $red;
                div{
                    color: $red;
                } 
            }
        }

        .activity{
            img{
                height: 110px;
                margin-top: 10px;
            }
        }
    }
}
</style>
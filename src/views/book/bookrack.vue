<template>
    <div class="bookrack">
        <header-top></header-top>
        <advert></advert>
        <ul class="book_list">
            <li>
                <div class="cover update"><img src="../../assets/img/book.png"/></div>
                <p class="name">雪中悍刀行（全集）</p>
                <p class="unread font-grey">1021章未读</p>
            </li>
        </ul>

        <router-link class="btn font-red" to="">查找更多精彩作品</router-link>
    </div>
</template>

<script>
import headerTop from '@/components/header/bookListHead.vue'
import advert from '../advert/advert.vue'
export default {
    name: 'bookrack',
    components:{
        headerTop: headerTop,
        advert:advert
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.bookrack{
    .book_list{
        @include flexJustify;
        padding: 65px 80px;
        li{
            width: 258px;
            height: 520px;
            .cover{
                width: 100%;
                height: 345px;
                margin-bottom: 30px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .update{
                &:after{
                    content: '';
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background-color: $red;
                    border-radius: 15px;
                    right: -7.5px;
                    top: -7.5px;
                }
            }

            .name{
                font-size: 14px;
            }

            .unread{
                margin-top: 10px;
            }
        }
    }

    .btn{
        display: block;
        width: fit-content;
        margin: 50px auto 0 auto;
        border: 1px solid $font-red;
        padding: 20px 35px;
        border-radius: 50px;
    }
}
</style>
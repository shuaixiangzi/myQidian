<template>
  <div class="qd-switch">
    <img src="../../assets/img/package/switch/switch_open.png" v-show="value"/>
    <img src="../../assets/img/package/switch/switch_close.png" v-show="!value"/>
  </div>
</template>

<script>
export default {
    name: 'qdSwitch',
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },

    computed: {
        switchState(){
            return this.value ? '#icon035caozuo_kaiguankai':'#icon034caozuo_kaiguanguan'
        }
    },

    created(){
        
    }
}
</script>

<style lang="scss" scoped>
.qd-switch {
    img{
        width: 95px;
    }   
}
</style>>
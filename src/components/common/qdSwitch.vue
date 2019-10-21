<template>
  <div class="qd-switch">
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="switchState"></use>
    </svg>
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

<style>
.svg-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
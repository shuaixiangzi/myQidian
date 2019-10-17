
export default {
    data (){
        return{
            touchLoop:0,
            timing:0,
            maxtime:3000
        }
    },
    methods: {
        // 长按start事件处理
        touchstartHandle(callback, time){
            let e = event || window.event;
            let maxtime = time ? this.maxtime = time : this.maxtime;
            this.timing = 0;
            this.touchLoop = setInterval(()=>{
               this.timing += 1000;
               console.log( this.timing, maxtime)
               if( this.timing >= maxtime){
                   clearTimeout(this.touchLoop);
                   callback(e);
               }
            },1000)
        },

        // 松手清除定时
        touchendHandle(){
            clearTimeout(this.touchLoop);
        }
    }
}
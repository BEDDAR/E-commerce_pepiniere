<template>
    <div>
        <i class="fa-solid fa-plus" @click="increment" :style="[(this.num===this.max) && {'display':'none'}]"></i>
        <input class="input-quantite" placeholder="Qantité" v-model="num" :max="max" readonly />
        <i class="fa-solid fa-minus" @click="decrement" :style="[(this.num===0) && {'display':'none'}]"></i>
    </div>
</template>

<script>
export default ({
    name: 'CustomInput',
    props: {
        value: Number,
        max:Number
    },
    data() {
        return {
            num: Number(this.value),
        }
    },
    methods: {
        increment() {
            if(this.num<this.max){
            this.num++
            this.$emit('input', this.num)
            console.log(this.num)
            }
        },

        decrement() {
            if (this.num > 0) {
                this.num--
                this.$emit('input', this.num)
            }
        },
    }
})
</script>

<style>
.input-quantite {
    border: 1px solid black;
    border-radius: 5px;
    width: 55px;
    outline: none;
    line-height: 35px;
    text-align: center;
}
</style>




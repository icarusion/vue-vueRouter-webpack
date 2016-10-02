<style scoped lang="less">
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
        img{
            width: 150px;
        }
    }
</style>
<template>
    <h2>
        <img src="../images/logo.png">
    </h2>
    <h1>
        覆盖移动终端:
        {{ 3731700153 |  NumberSeparator }}
    </h1>
    <h2 v-time></h2>
</template>
<script>
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';

    export default {
        filters: {
            NumberSeparator
        },
        directives: {
            time: Time
        },
        data () {
            return {

            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>

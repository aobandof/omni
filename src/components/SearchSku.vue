<template>
  <div id="SearchSku">
    <h2>{{ caption }}</h2>
    <input type="text" name="" id="" v-on:keyup.enter='showStockSku(sku_code)' v-model="sku_code">    
    <button v-on:click="showStockSku(sku_code)" >BUSCAR</button>

  </div>
</template>

<script>
  export default {
    name: 'SearchSku',
    data () {
      return {
        caption: 'Consulta Stock de SKU',
        sku_code: '',
      }
    },
    methods: {
      showStockSku(code) {
        if(code.trim()!=='')
          alert(code);
      },
    }
  }
</script>

<style media='screen'>

</style>


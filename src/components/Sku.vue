<template>
  <div id="Sku">
    <h2>Sku Component</h2>
    <ul>
      <li v-for="sku in skus">
        <span>{{sku.code }}</span><span>{{ sku.barcode }}</span><button v-on:click="deleteSku(sku)">X</button>
      </li>
    </ul>

    <form action="" v-on:submit.prevent="addSku">
      <input type="text" name="" id="" v-model="newSku.code" placeholder="codigo">
      <input type="text" name="" id="" v-model="newSku.barcode" placeholder="barcode">
      <button type="submit">ADD</button>
    </form>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        skus: [
          { code: '10.07-XL-ROJ', barcode: 'xxxxxxx1' },
          { code: '10.07-XL-AZU', barcode: 'xxxxxxx2' }, 
          { code: '10.07-XL-AMA', barcode: 'xxxxxxx3' }  
        ],
        newSku: { }
      }
    },
    methods: {
      addSku(){      
        // console.log(e.target.elements[0].value);  
        // this.skus.push({ code : e.target.elements[0].value, barcode: e.target.elements[1].value })
        // this.skus.push({ code : this.newSku.code, barcode: this.newSku.barcode  })
        this.skus.push(this.newSku);
        this.newSku = {};
      },
      deleteSku(user){
        // let code_del=e.target.parentNode.childNodes[0].innerHTML;
        // this.skus = this.skus.filter( c => c.code!=code_del )
        this.skus.splice(this.skus.indexOf(user),1);
      }
    }
  }
</script>

<style>

</style>

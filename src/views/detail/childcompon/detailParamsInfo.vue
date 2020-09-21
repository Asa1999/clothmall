<template>
  <div class="paraminfo" >
    <table class="tableinfo" v-for="(table, index) in tables.tables">
      <tr v-for="tr in table">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </table>
    <div class="paraminfoblank">
    <table class="itemParams">
      <tr v-for="tr in itemParams">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </table>
    </div>


  </div>

</template>

<script>
  export default {
    name:'detailParamsInfo',
    props: {
      itemParams: {
        type: Array,
        default() {
          return []
        }
      },
      tables: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>

  .paraminfo {
    border-top: 3px solid #F0F0F0;;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
    background-color: #fff;
    padding-bottom: 30px;
  }

  .tableinfo {
    width: 100%;
    font-size: 12px;

  }

  .tableinfo tr {
    border-bottom: 1px solid #F0F0F0;

  }
  .tableinfo td {
    padding: 10px;
    text-align: center;
  }

  .paraminfoblank {
    padding-top: 30px;
    border-top: 3px solid #F0F0F0;
  }
  .itemParams {
    width: 100%;
    font-size: 12px;

  }

  .itemParams tr {
    border-bottom: 1px solid #F0F0F0;
  }
  .itemParams td{
   width: 50%;
   padding: 10px;
   text-align: center;
  }
</style>

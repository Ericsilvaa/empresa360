<template>
  <div class="card">
      <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
      <div class="card-body">
        <p class="card-text">{{ dados.descricao }}</p>
      </div>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
  name: 'ServicoDetails',
  mixins: [ApiMixin],
  // watch: {
  //            to para novoValor, from para valorAntigo
  //     $route(to){  
  //       if(to.params.id != undefined) {
  //         this.getApiLeads(`http://localhost:3000/servicos/${to.params.id}`)
  //       }
  //     }
  // },
  beforeRouteUpdate(to, from, next) {
    // to = $route para onde estamos indo
    // from = $route de onde estamos indo
    // next = faz com que o fluxo de navegação siga em frente

    if(to.params.id != undefined) {
      this.getApiLeads(`http://localhost:3000/servicos/${to.params.id}`)
      next()
    }
  },
  created() {
    this.getApiLeads(`http://localhost:3000/servicos/${this.$route.params.id}`)
  }
}
</script>
<template>
  <div>
    <h5>Leads</h5>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVICO</th>
          <th scope="col">DATA INÍCIO</th>
          <th scope="col">DATA FINAL</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.leadId}}</td>
          <td>{{ d.servicoId}}</td>
          <td>{{ d.data_inicio}}</td>
          <td>{{ d.data_fim}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
  name: 'ContratosVendas',
  mixins: [ApiMixin],
  created() {
    this.getApiLeads('http://localhost:3000/contratos')
  }
}
</script>
<style>
  
</style>
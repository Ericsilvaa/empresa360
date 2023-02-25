<template>
  <div>
    <h5>Serviços</h5>
    <hr>
    <div class="row mb-2">
      <div class="col" v-for="d in dados" :key="d.id">
        <div class="card" style="width:13rem">
          <img :src="`/img/${d.icone}`" :alt="d.servico" class="card-img-top">
          <div class="card-body text-center">
            <router-link :to="{name: 'servico', params: {id: d.id} }">
              <p class="card-text">{{ d.servico }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view class="mt-3"/> <!-- default -->
    <router-view class="mt-3" name="opcoes"/>
    <router-view class="mt-3" name="indicadores" />
    
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';

export default {
  name: 'ServicosComponent',
  mixins: [ApiMixin],
  created() {
    this.getApiLeads('http://localhost:3000/servicos')
  }
}
</script>
<style >
  
</style>
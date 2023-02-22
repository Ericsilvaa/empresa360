export default {
  data(){
    return{
      dados: {},
    }
  },
  methods: {
    getApiLeads(url) {
      fetch(url)
        .then(r => r.json())
        .then(r => {
          this.dados = r
        })
    }
  },
}
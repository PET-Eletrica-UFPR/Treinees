
<template v-slot:after>
  <div :class="ModoN">
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          :class="ModoN"
          style="height:100vh"
        >
          <q-tab-panel name="Inicio">
            <div class="text-h4 q-mb-md">Inicio</div>

          </q-tab-panel>

          <q-tab-panel name="Meus_dados">
            <div class="text-h4 q-mb-md">Meus Dados</div>
            <div>
            <q-input v-model="Perfil.Nome"  type="text" label="Nome" />
            <q-input v-model="Perfil.GRR" type="text" label="GRR"/>
            <q-btn label="Salvar"/>
          </div>
         </q-tab-panel>

          <q-tab-panel name="Meus_certificados">
            <div class="text-h4 q-mb-md">Meus Certificados</div>
            <q-list>
              <q-item>
                <p>nenhum certificado dísponivel.</p>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="Configuracoes">
            <div class="text-h4 q-mb-md">Configurações</div>
            <q-btn @click="dark=!dark" label="Modo noturno"/>
            </q-tab-panel>
        </q-tab-panels>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  
  
  data() {
   
    return {
      Perfil:{Nome:"", GRR:""},
      page:"Perfil",
      dark: false
     }
  },
   computed: {
    tab () {
      return this.$store.getters.getTab
    },
    ModoN(){
      console.log(this.dark)
      if(!this.dark){
        return "light";
      }
      else{
        return "dark";
      }  
    }
  },
  methods: {
    mudarTab (tab) {
      this.$store.commit('setTab', tab)
    }
  }
} 
</script>

<style>
.dark{
  background: rgb(0, 0, 0);
  font: solid white;
}
.light{
  background: rgb(248, 248, 248);
}
</style>

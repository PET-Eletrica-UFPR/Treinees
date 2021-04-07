
<template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
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
                <p>Lorem entium cumque magnam bero.</p>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="Configuracoes">
            <div class="text-h4 q-mb-md">Configurações</div>
            </q-tab-panel>

        </q-tab-panels>
</template>

<script>
/* eslint-disable */
export default {
  data() {
   
    return {
      Perfil:{Nome:"", GRR:""},
      page:"Perfil"
     }
  },
   computed: {
    tab () {
      return this.$store.getters.getTab
    }
  },
  methods: {
    mudarTab (tab) {
      this.$store.commit('setTab', tab)
    }
  }
} 
</script>

<style scoped>

</style>
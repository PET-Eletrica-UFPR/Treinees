<!--<template>
 <q-page class="q-ma-sm">
   <div v-if="page=='Inicio'">
     <p>teste</p>
   </div>
    <div v-else-if="page=='Meus Dados'">
      <div>
       <q-input v-model="Perfil.Nome"  type="text" label="Nome" />
       <q-input v-model="Perfil.GRR" type="text" label="GRR"/>
     </div>
    </div>
    <div v-else-if="page=='Meus Certificados'">
      <q-list>
        <q-item>
        Vuex
        </q-item>
        <q-item>
        Axios
      </q-item>
      </q-list>
    </div>
    <div v-else-if="page=='Configurações'" class="columns">
      <div>
        teste
      </div>
    </div>
  </q-page>
</template>-->
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
          </div>
         </q-tab-panel>

          <q-tab-panel name="Meus_certificados">
            <div class="text-h4 q-mb-md">Meus Certificados</div>
            <p>Lorem entium cumque magnam bero.</p>
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
    page () {
      return this.$store.getters.getPage
    },
  }
}
</script>

<style scoped>

</style>

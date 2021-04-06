<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-blue">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>PET-EVENT</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="900"
        :breakpoint="900"
      >
      <q-scroll-area class="fit">
<!--        <q-list padding class="menu-list">
          <q-item clickable v-ripple>
            <q-item-section avatar>
            <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              Inicio
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
            <q-icon name="account box" />
            </q-item-section>
            <q-item-section>
              Meus Dados
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
            <q-icon name="description" />
            </q-item-section>
              <q-item-section>
                Meus Certificados
            </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                Configurações
              </q-item-section>
            </q-item>
        </q-list>-->
         <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 500px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
        >
          <q-tab name="Inicio" icon="home" label="Inicio" />
          <q-tab name="Meus_dados" icon="fingerprint" label="Meus dados" />
          <q-tab name="Meus_certificados" icon="description" label="Meus Certificados" />
          <q-tab name="Configuracoes" icon="settings" label="Configurações"/>
        </q-tabs>
      </template>
    </q-splitter>
  </div>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      tab: 'Inicio',
      splitterModel: 20
    }
  },
  computed: {
    page () {
      return this.$store.getters.getPage
    }
  },
  methods: {
    mudarTela (tela) {
      this.$store.commit('setPage', tela)
    }
  }
}
</script>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>

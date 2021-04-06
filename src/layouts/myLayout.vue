<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-blue">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>PET-EVENT</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" show-if-above :width="200">
        <q-scroll-area class="fit">
          <div>
            <q-splitter
            v-model="splitterModel"
            style="height:100%"
            >
              <template v-slot:before>
                <q-tabs
                v-model="tab"
                vertical
                :breakpoint="200"
                inline-label
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
      splitterModel: 20,
      tab: 'Inicio'
    }
  },
  created () {
    this.tab = this.$store.getters.getTab || 'Inicio'
  },
  methods: {
    mudarTab (tab) {
      this.$store.commit('setTab', tab)
      this.drawer = false
    }
  },
  watch: {
    tab: {
      deep: false,
      handler (val, oldVal) {
        this.mudarTab(val)
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>

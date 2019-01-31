<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list dense>
        <v-list-tile @click to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click to="/about">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Notes</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <router-view></router-view>
            <!-- <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
    <v-snackbar v-model="message" bottom timeout="1000">
      {{ message }}
      </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null
  }),
  computed: mapState({
    message: state => state.message.data
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
router-link {
  color: inherit;
  text-decoration: none;
}
</style>

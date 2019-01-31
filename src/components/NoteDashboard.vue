<template>
  <v-container>
    <v-flex xs12 mb-5>
      <v-layout justify-space-around align-content-space-between wrap>
        <div v-for="note in notes" v-bind:key="note.id">
          <Note v-bind="note" v-on:edit="selectNote(note.id)" @delete="deleteNote(note.id)"/>
        </div>
      </v-layout>
      <v-fab-transition>
        <v-btn color="primary" dark fab fixed bottom right large @click="selectNote()">
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex>
    <NoteDialog/>
  </v-container>
</template>

<script>
import Note from "./Note.vue";
import NoteDialog from "./NoteDialog.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Note,
    NoteDialog
  },
  data: () => ({
    // notes: [
    // ],
  }),
  computed: mapState({
    notes: state => state.notes.data
  }),
  methods: {
    ...mapActions(["fetchNotes", "deleteNote"]),
    ...mapMutations(["selectNote"])
  },
  beforeMount() {
    this.fetchNotes();
  }
};
</script>

<style>
</style>

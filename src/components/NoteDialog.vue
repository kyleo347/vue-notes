<template>
  <div>
    <v-dialog v-model="selected">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Title*" required v-model="title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea auto-grow label="Content" v-model="content" rows="1"></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="unselectNote()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveAndClose()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  data: () => ({
    title: "",
    content: ""
  }),
  computed: {
    selected: {
      get () {return this.$store.state.notes.selected},
      set (value) {} // needs setter to avoid vue error
    }
  },
  methods: {
    ...mapActions(["saveNote"]),
    ...mapMutations(["unselectNote"]),
    ...mapGetters(['getNote']),
    saveAndClose: function () {
      this.saveNote({title: this.title, content: this.content, id: this.selected});
      this.unselectNote();
    }
  },
  watch: {
    selected: function(newId) {
        let note = this.getNote()(newId);
        if (note) {
        this.title = note.title;
        this.content = note.content;
        } else {
            this.title = '';
            this.content = '';
        }
    }
  }
};
</script>


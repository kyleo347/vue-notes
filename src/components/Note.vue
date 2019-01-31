<template>
  <v-card min-width="300" class="ma-2">
    <v-card-title primary-title>
      <v-layout column align-center>
        <h3 class="headline mb-0">{{ title }}</h3>
        <div>{{ content }}</div>
      </v-layout>
    </v-card-title>

    <v-card-actions>
      <v-layout align-center justify-space-around>
        <v-btn flat @click="$emit('delete')">
          <v-icon>delete</v-icon>Delete
        </v-btn>
        <v-btn flat @click="$emit('edit')">
          <v-icon>edit</v-icon>
          Edit
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
      id: String,
    title: String,
    content: String
  }
};
</script>



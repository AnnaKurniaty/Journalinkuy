<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCol cols="4"  md="6" v-for="(post) in posts" :key="post._id">
    <VCard
      title= ""
      subtitle="📚"
      class="position-relative">
      <VCardText>
        <h4>{{post.journal_title}}</h4>
        <a href="timeline"> <Textarea rows="5" cols="15" placeholder="Tulis ceritamu">{{post.content}}</Textarea></a>
      </VCardText>
      <VCardText>
      <v-btn
        depressed
        elevation="2"
        outlined
        plain
        raised
      >Simpan</v-btn>
    </VCardText>
    </VCard>
  </VCol>
</template>

<script>
import axios from 'axios';

export default {
  name: 'journal',
  data(){
    return {
      posts: [],
    }
  },
  async created() {
    axios.get('http://localhost:5000/api/post').then(response => {
      this.posts = response.data;
    });
  }
}
</script>
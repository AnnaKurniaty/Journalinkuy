<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCard
    v-for="(post) in posts" :key="post._id"
    title= ""
    subtitle="🥅"
    class="position-relative">
    <VCardText>
      <h4>{{post.journal_title}}</h4>
      <Textarea v-model="value" rows="5" cols="15" placeholder="Write here">{{post.content}}</Textarea>
    </VCardText>

  </VCard>
</template>

<script>
import API from '@/api';
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
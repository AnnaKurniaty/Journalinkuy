<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCard>
    <!-- <VCardItem>
      <h2>Journal</h2>
    </VCardItem> -->

    <VCardText class="pt-4">
        <VRow>
          <VCol cols="4"  md="6" v-for="(post) in posts" :key="post._id">
            <VCard
              title= ""
              subtitle="🥅"
              class="position-relative">
              <VCardText :to="{ name: 'post', params: { id: post._id } }">
                <h4>{{posts.journal_title}}</h4>
                <a href="timeline"> <Textarea rows="5" cols="15" placeholder="What did i accomplish today?">{{post.content}}</Textarea></a>
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
        </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>

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

<script setup>
import { useTheme } from 'vuetify'
import moment from 'moment'
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
              subtitle="🥅"
              class="position-relative">
              <VCardText :to="{ name: 'timeline', params: { id: post._id } }">
                <h4>{{post.journal_title}}</h4>
                <a href="timeline"><Textarea rows="5" cols="15" placeholder="What did i accomplish today?">{{post.content}}</Textarea></a>
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
import API from '@/api';

export default {
  name: 'journal',
  data(){
    return {
      posts: [],
    }
  },
  async created() {
    const date = moment(new Date()).format('YYYY-MM-DD');
    this.posts = await API.getPostByDate(date);
    // console.log(response);
  }
}
</script>

<script setup>
import { useTheme } from 'vuetify'
import moment from 'moment'
const vuetifyTheme = useTheme()
</script>

<template>
  <br>
  <VCard class="scroll" height="44rem">
    <VCardText class="pt-4">
        <VRow>
          <VCol cols="4"  md="6" v-for="(post) in posts" :key="post._id">
            <VCard
              subtitle="📌"
              class="position-relative"
              text :to="{ name:'edit', params: { id: post._id } }">
              <VCardText>
                <h4>{{post.journal_title}}</h4>
                <Textarea rows="5" cols="15" placeholder="Type here">{{post.content.substring(0, 50)+"..."}}</Textarea>
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
.scroll {
  overflow-y: scroll;
}
</style>

<script>
import API from '@/api';

export default {
  name: 'journal',
  data(){
    return {
      posts: [],
      data: {
        date: moment().format("YYYY-MM-DD"),          
    }, 
    }
  },
  async created() {
    // const date = this.data.date
    this.posts = await API.getPostByDate(this.data.date);
    // console.log(response);
  },
}
</script>


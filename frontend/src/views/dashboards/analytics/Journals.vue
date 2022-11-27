<script setup>
import { useTheme } from 'vuetify'
import moment from 'moment'
const vuetifyTheme = useTheme()
</script>

<template>
  <div> 
   <h2> Today's Journal</h2>
   <v-btn
        icon="mdi-chevron-left"
        size = 25
        @click="getDate(-1)"
    ></v-btn>
    🗓  <input 
      size= 6
      v-model="data.date" />
    <v-btn
        icon="mdi-chevron-right"
        size = 25
        @click="getDate(1)"
    ></v-btn>
    <v-btn
        class="ms" 
        @click="todayDate()"
    >Today</v-btn>
  </div>
  <br>
  <VCard>
    <VCardText class="pt-4">
        <VRow>
          <VCol cols="4"  md="6" v-for="(post) in posts" :key="post._id">
            <VCard
              subtitle="🥅"
              class="position-relative"
              text :to="{ name:'edit', params: { id: post._id } }">
              <VCardText>
                <h4>{{post.journal_title}}</h4>
                <Textarea rows="5" cols="15" placeholder="Type here">{{post.content}}</Textarea>
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
.ms {
  margin-left: 9rem !important;
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
  methods: {
              async getDate(days) {
                const startdate = this.data.date;
                const new_date = moment(startdate);
                const now = new_date.add(days, "days").format("YYYY-MM-DD");
                this.data.date = now
                this.posts = await API.getPostByDate(this.data.date);
              },
              async todayDate(){
                this.data.date = moment().format("YYYY-MM-DD")
                this.posts = await API.getPostByDate(this.data.date);
              }
            }
}
</script>


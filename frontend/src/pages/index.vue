<script setup>
import Event from '@/views/dashboards/analytics/Event.vue'
import Journals from '@/views/dashboards/analytics/Journals.vue'
import Timeline from '@/views/dashboards/analytics/Timeline.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import moment from 'moment'
</script>

<template>
  <div class="container" style="display: flex;">
  <div class="main"  style="width: 200%; " >
    <h1> Hello, Kurkur 👋</h1>
    <p>How it is going on?</p>  
    <h2> Today's Journal</h2>
    <p> 🗓 {{ moment(new Date()).format('YYYY-MM-DD') }} </p>

    <VRow class="match-height">

      <VCol cols="12"  md="8" >
        <Journals />
      </VCol>

      <VCol cols="12" md="4">
        <VRow>
          <VCol cols="12" md="12" >
            <v-form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
              <v-btn
                depressed
                elevation="2"
                outlined
                plain
                raised
                type="submit"
              >+ Add New Journal</v-btn>
            </v-form>
          </VCol>
          
          <VCol cols="12" md="12">
            <Timeline />
          </VCol>

          <VCol cols="12" md="12" >
            <Event />
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </div>
  <div style="flex-grow: 1; padding: 20px;">
    <div  style="float:left;">
      <UserProfile /> 
    </div>
    
    <div style="display: table-cell; padding-left: 10%;">
      <h3>Kurkur</h3>
      <p >@kurkurcans</p>
    </div>
    <hr>

    <div style="position: relative;">
      <h2>Your Journal </h2>
      <a href="journal"><img src="\src\assets\images\pages\thumbnail.jpg"  style="width:13rem; border-radius: 5%;"></a>
      <div style="position: absolute;  bottom: 1%;left: 5%;"> 
        <p style="color:white;"> Open Here </p>
      </div>
    </div>

    <div>
      <h2> Quotes</h2>
      <div style=" box-shadow: 0 0.5rem 0.5rem hsl(0 0% 0% / 10%); padding: 1rem; border-radius: 1rem;">
        <p style="font-style :italic;">“Some wishes are only there to teach us how to wait.”</p>
        <p style="font-style :italic; text-align: right;">―Mandy Hale”</p>
        </div>
        <div style=" box-shadow: 0 0.5rem 0.5rem hsl(0 0% 0% / 10%); padding: 1rem; border-radius: 1rem;">
        <p style="font-style :italic;">“Don’t rush into love. You’ll find the person meant for you when you least expect it.”</p>
        <p style="font-style :italic; text-align: right;">―Franzie Gubatina”</p>
        </div>
    </div>
    
  </div>

</div>
</template>

<style>
.button {
  align :"right"
}
</style>
<script>
import API from '@/api';

  export default {
          data() {
              return {
                  post: {
                      journal_title: " ",
                      content: " ",
                      image: " ",
                  },
                  image: " ",
              }
          },
          methods: {
              selectFile(file){
                  this.image = file[0];
              },
              async submitForm() {
                  const formData ={
                      journal_title : this.post.journal_title,
                      content : this.post.content,
                      image : this.post.image
                  }
                  if(this.$refs.form.validate()){
                      const response = await API.addPost(formData);
                      console.log(response);
                      this.$router.push({ name: 'journals', params: {message: response.message} });
                  }
              }
          }
      }
</script>
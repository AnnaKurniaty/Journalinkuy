<script setup>
import moment from 'moment'
</script>
<template>
<div class="main"  style="width: 100%; " >
<div class="grid-container">
    <div>
    <h1>Story Timeline ⌛</h1>
    <p>Write your story here</p>
    </div>

    <div class="right">
    <h3>Today</h3>
    <p>🗓 {{moment().format("YYYY-MM-DD")}}  </p> 
    </div>
</div>

    <div class="inner">
    <v-container style="max-width: 100%;">
      <v-timeline
        dense
        clipped
      >
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          color="primary"
          large
        >
        <v-form ref="form" @submit.prevent="submitForms" enctype="multipart/form-data">
          <v-text-field
            v-model = "timelines.story"
            hide-details
            flat
            label="Leave a story..."
            solo
          >
            <template v-slot:append>
              <v-btn
                class="mx-0"
                depressed
                type="submit"
              >
                Post
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
        </v-timeline-item>
  
        <v-slide-x-transition
          group
        >
          <v-timeline-item
            class="mb-4"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col
                cols="7"
              ></v-col>
              <v-col
                class="text-right"
                cols="5"
              ></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span class="color">----------------------------------------------------------------------------------------------------------</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span class="color" >you are loved you are loved you are loved you are loved you are loved you are loved you are loved you are loved</span>
      </v-timeline-item>
      </v-timeline>
    </v-container>
</div>
</div>
</template>
  
  <script>
  import APIT from '@/apit';
    export default {
      name : 'addTimeline',
      data() {
              return {
                  timelines: {
                      story: "",
                  },
              }
          },
  
      computed: {
        timeline () {
          return this.events.slice().reverse()
        },
      },
  
      methods: {
        // comment () {
        //   const time = (new Date()).toTimeString()
        //   this.events.push({
        //     id: this.nonce++,
        //     text: this.input,
        //     time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
        //       return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        //     }),
        //   })
  
        //   this.input = null
        // },
        async submitForms() {
                  const formData ={
                    story : this.timelines.story
                  }
                  if(this.$refs.form.validate()){
                      const response = await APIT.addTimeline(formData);
                      console.log(response);
                  }
              }
      },
    }
  </script>

<style>
.color{
    color:white;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.right {
    text-align: right;
    align-self: flex-end;
}
</style>
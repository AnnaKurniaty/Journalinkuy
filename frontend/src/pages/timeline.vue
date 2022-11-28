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
        <v-form ref="form" @submit.ponclick="submitForms" enctype="multipart/form-data">
          <v-text-field
            v-model = "timelines.story"
            hide-details
            flat
            label="Leave a story..."
            solo
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn
                class="mx-0"
                depressed
                type="submit"
                @click="comment"
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
            <v-row justify="space-between" v-for="(timeline) in timelines" :key="timeline._id">
              <v-col
                cols="7"
                v-text="timeline.story"
              ></v-col>
              <v-col
                class="text-right"
                cols="5"
                v-text="timeline.created"
              ></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>
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
          return this.timelines.slice().reverse()
        },
      },
  
      methods: {
        comment () {
          const time = (new Date()).toTimeString()
          this.events.push({
            id: this.nonce++,
            story: this.timelines.story,
            time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
              return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
            }),
          })
  
          this.input = null
        },
        async submitForms() {
                const formData = new FormData();
                formData.append('story', this.timelines.story);
                  if(this.$refs.form.validate()){
                      const response = await APIT.addTimeline(formData);
                      console.log(response);
                  }
              }
      },
      async created() {
      this.timelines = await APIT.getAllTimelines();
    }
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
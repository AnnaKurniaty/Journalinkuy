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
          <v-text-field
            v-model="input"
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
                @click="comment"
              >
                Post
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>
  
        <v-slide-x-transition
          group
        >
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col
                cols="7"
                v-text="event.text"
              ></v-col>
              <v-col
                class="text-right"
                cols="5"
                v-text="event.time"
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
    export default {
      data: () => ({
        events: [],
        input: null,
        nonce: 0,
      }),
  
      computed: {
        timeline () {
          return this.events.slice().reverse()
        },
      },
  
      methods: {
        comment () {
          const time = (new Date()).toTimeString()
          this.events.push({
            id: this.nonce++,
            text: this.input,
            time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
              return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
            }),
          })
  
          this.input = null
        },
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
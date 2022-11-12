<script setup>
import Event from '@/views/dashboards/analytics/Event.vue'
import Journals from '@/views/dashboards/analytics/Journals.vue'
import Timeline from '@/views/dashboards/analytics/Timeline.vue'
</script>

<template>
  <div class="container">
    <h1> Hello, Kurkur</h1>
    <p>How it is going on?</p>
    <h2> Today Journal</h2>
    <VRow class="match-height">

      <VCol cols="12"  md="8" >
        <Journals />
      </VCol>

      <VCol cols="12" md="4">
        <VRow>
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
</template>

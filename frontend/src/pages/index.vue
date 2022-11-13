<script setup>
import Event from '@/views/dashboards/analytics/Event.vue'
import Journals from '@/views/dashboards/analytics/Journals.vue'
import Timeline from '@/views/dashboards/analytics/Timeline.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <div class="container" style="display: flex;">
  <div class="main"  style="width: 150%; " >
    <h1> Hello, Kurkur 👋</h1>
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
  <div style="flex-grow: 1; padding: 20px;">
    <div  style="float:left;">
      <UserProfile /> 
    </div>
    
    <div style="display: table-cell; padding-left: 10%;">
      <h3>Kurkur</h3>
      <p >@kurkurcans</p>
    </div>
    <hr>
    <div>
      <h2> Quotes</h2>
      <div style=" box-shadow: 0 0.5rem 0.5rem hsl(0 0% 0% / 10%); padding: 1rem; border-radius: 1rem;">
        <p style="font-style :italic;">“Some wishes are only there to teach us how to wait.”</p>
        <p style="font-style :italic; text-align: right;">―Mandy Hale”</p>
        </div>
        <div style=" box-shadow: 0 0.5rem 0.5rem hsl(0 0% 0% / 10%); padding: 1rem; border-radius: 1rem;">
        <p style="font-style :italic;">“Some wishes are only there to teach us how to wait.”</p>
        <p style="font-style :italic; text-align: right;">―Mandy Hale”</p>
        </div>
    </div>
    
  </div>

</div>
</template>

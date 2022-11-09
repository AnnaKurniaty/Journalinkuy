<script setup>
import AnalyticsSalesByCountries from '@/views/dashboards/analytics/AnalyticsSalesByCountries.vue'
import AnalyticsTotalEarning from '@/views/dashboards/analytics/AnalyticsTotalEarning.vue'
import AnalyticsWeeklyOverview from '@/views/dashboards/analytics/AnalyticsWeeklyOverview.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12"  md="8" >
      <AnalyticsTotalEarning />
    </VCol>
    <VCol cols="12" md="4">
      <VRow>
        <VCol cols="12" md="12">
          <AnalyticsWeeklyOverview />
        </VCol>

        <VCol cols="12" md="12" >
          <AnalyticsSalesByCountries />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

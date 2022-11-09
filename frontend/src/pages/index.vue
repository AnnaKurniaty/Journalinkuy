<script setup>
import AnalyticsAward from '@/views/dashboards/analytics/AnalyticsAward.vue'
import AnalyticsSalesByCountries from '@/views/dashboards/analytics/AnalyticsSalesByCountries.vue'
import AnalyticsTotalEarning from '@/views/dashboards/analytics/AnalyticsTotalEarning.vue'
import AnalyticsTransactions from '@/views/dashboards/analytics/AnalyticsTransactions.vue'
import AnalyticsWeeklyOverview from '@/views/dashboards/analytics/AnalyticsWeeklyOverview.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsAward />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsTotalEarning />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsSalesByCountries />
    </VCol>

  </VRow>
</template>

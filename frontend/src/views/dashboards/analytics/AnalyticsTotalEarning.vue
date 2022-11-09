<script setup>
import AnalyticsAward from '@/views/dashboards/analytics/AnalyticsAward.vue'
//import AnalyticsTransactions from '@/views/dashboards/analytics/AnalyticsTransactions.vue'
</script>
<template>
  <VCard>
    <VCardItem>
      <h2>Journal</h2>
    </VCardItem>
    <VCardText class="pt-4">
      <VList class="card-list mt-9">
        <VRow>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
          <VCol cols="4"  md="6">
            <AnalyticsAward />
          </VCol>
        </VRow>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>

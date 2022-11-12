<script setup>
import Journal from '@/views/dashboards/analytics/Journal.vue'
//import AnalyticsTransactions from '@/views/dashboards/analytics/AnalyticsTransactions.vue'
</script>

<template>
  <VCard>
    <!-- <VCardItem>
      <h2>Journal</h2>
    </VCardItem> -->

    <VCardText class="pt-4">
        <VRow>
          <VCol cols="4"  md="6">
            <Journal />
          </VCol>

          <VCol cols="4"  md="6">
            <Journal />
          </VCol>

          <VCol cols="4"  md="6">
            <Journal />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal />
          </VCol>

          <VCol cols="4"  md="6">
            <Journal />
          </VCol>

          <VCol cols="4"  md="6">
            <Journal />
          </VCol>
          
        </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>

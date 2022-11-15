<script setup>
import Journal1 from '@/views/dashboards/analytics/Journal1.vue'
import Journal2 from '@/views/dashboards/analytics/Journal2.vue'
import Journal3 from '@/views/dashboards/analytics/Journal3.vue'
import Journal4 from '@/views/dashboards/analytics/Journal4.vue'
import Journal5 from '@/views/dashboards/analytics/Journal5.vue'
import Journal6 from '@/views/dashboards/analytics/Journal6.vue'
</script>

<template>
  <VCard>
    <!-- <VCardItem>
      <h2>Journal</h2>
    </VCardItem> -->

    <VCardText class="pt-4">
        <VRow>
          <VCol cols="4"  md="6">
            <Journal1 />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal2 />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal3 />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal4 />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal5 />
          </VCol>
          <VCol cols="4"  md="6">
            <Journal6 />
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

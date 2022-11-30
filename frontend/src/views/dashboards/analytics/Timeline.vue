<script setup>
import aviato from '@/assets/images/logos/aviato.png'
import bitbank from '@/assets/images/logos/bitbank.png'
import zipcar from '@/assets/images/logos/zipcar.png'
import circle from '@/assets/images/logos/circle.png'

const earnings = [
  {
    avatar: circle,
    title: '2022-11-30 ',
    subtitle: 'Update Timeline',
    amount: '',
    progress: 'primary',
  },
  {
    avatar: circle,
    title: '2022-11-29',
    subtitle: 'Update Timeline',
    amount: '',
    progress: 'info',
  },
  {
    avatar: circle,
    title: '2022-11-28',
    subtitle: 'Update Timeline',
    amount: '',
    progress: 'secondary',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <h2>Timeline</h2>
    </VCardItem>
    
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="earning in earnings"
          :key="earning.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              :image="earning.avatar"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold mb-1">
            {{ earning.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ earning.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-sm mb-2">
                {{ earning.amount }}
              </h6>
              <VProgressLinear
                :color="earning.progress"
                model-value="80"
              />
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>

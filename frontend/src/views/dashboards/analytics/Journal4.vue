<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCard
    title="Activities"
    subtitle="🚴"
    class="position-relative"
  >
  
    <VCardText>
      <Textarea v-model="value"  rows="5" cols="15" placeholder="Write here" />
    </VCardText>

  </VCard>
</template>
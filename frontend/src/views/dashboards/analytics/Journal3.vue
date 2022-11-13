<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCard
    title="My Feelings"
    subtitle="💓"
    class="position-relative"
  >
  
    <VCardText>
      <Textarea v-model="value" :autoresize="true" rows="5" cols="15" placeholder="Write here" />
    </VCardText>

  </VCard>
</template>
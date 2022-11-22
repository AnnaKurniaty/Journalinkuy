<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
</script>

<template>
  <VCard
    title="Lesson Learn"
    subtitle="📚"
    class="position-relative"
  >
  
    <VCardText>
      <Textarea v-model="value"  rows="5" cols="15" placeholder="Tulis ceritamu" />
    </VCardText>

    <VCardText>
      <v-btn
        depressed
        elevation="2"
        outlined
        plain
        raised
      >Simpan</v-btn>
    </VCardText>

  </VCard>
</template>
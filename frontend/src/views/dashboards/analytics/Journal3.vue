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
      <Textarea v-model="value" :autoresize="true" rows="5" cols="15" placeholder="Any notable things happened today?" />
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
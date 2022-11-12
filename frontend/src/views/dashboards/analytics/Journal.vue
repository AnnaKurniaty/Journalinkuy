<script setup>
import { useTheme } from 'vuetify'
// import triangleDark from '@/assets/images/misc/triangle-dark.png'
// import triangleLight from '@/assets/images/misc/triangle-light.png'
// import trophy from '@/assets/images/misc/trophy.png'

const vuetifyTheme = useTheme()
// const triangleBg = computed(() => {
//   return vuetifyTheme.global.name.value === 'light' ? triangleLight : triangleDark
// })

</script>
<template>
  <VCard
    title="Question"
    subtitle=""
    class="position-relative"
  >
  
    <VCardText>
      <!-- <h5 class="text-2xl font-weight-medium text-primary">
       -----
      </h5> -->
      <!-- <p>Journal 🚀</p> -->
      <!-- <VBtn size="small">
        View 
      </VBtn> -->
      <textarea v-model="message" placeholder="Write here"></textarea>
    </VCardText>

  </VCard>
</template>

<style lang="scss">
// .trophy {
//   position: absolute;
//   inline-size: 4.9375rem;
//   inset-block-end: 2rem;
//   inset-inline-end: 2rem;
// }
</style>

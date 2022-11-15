<script setup>

const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
</script>

<template>
    <div >
    <VForm @submit.prevent="() => {}">
        <VRow>

        <!-- 👉 First Name -->
        <VCol
            cols="12"
            md="6"
        >
            <VTextField
            v-model="judul"
            label="Jurnal Baru"
            placeholder="Judul"
            />
        </VCol>

        <!-- 👉 Email -->
        <VCol
            cols="12"
            md="6"
        >
        </VCol>

        <!-- 👉 Email -->
        <VCol
            cols="12"
            md="6"
        >
            <VTextField
            v-model="message"
            label="Content"
            placeholder="New Text Document..."
            />
        </VCol>

        <!-- 👉 Email -->
        <VCol
            cols="12"
            md="6"
        >
        </VCol>

        <!-- 👉 Email -->
        <VCol
            cols="12"
            md="6"
        >
        <input type="file" @change="onFileChanged">
        </VCol>
        
        <VCol
            cols="12"
            class="d-flex gap-4"
        >
            <VBtn type="submit">
            Submit
            </VBtn>

            <VBtn
            type="reset"
            color="secondary"
            variant="tonal"
            >
            Reset
            </VBtn>
        </VCol>
        </VRow>
    </VForm>
    </div>
</template>


<style>
    coba {
        background-color: #ff23;
    }

</style>

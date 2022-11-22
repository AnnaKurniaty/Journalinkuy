<<<<<<< Updated upstream:frontend/src/pages/inputJournal.vue
<script>
import axios from 'axios';

export default {
  name: 'journal',
  data(){
    return {
      posts: [],
    }
  },
  async created() {
    axios.get('http://localhost:5000/api/post/:id').then(response => {
      this.posts = response.data;
    });
  }
}
</script>

=======
>>>>>>> Stashed changes:frontend/src/pages/journal.vue
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
            >{{post.journal_title}}</VTextField>
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
            placeholder="New Text Documents.."
            >{{post.content}}</VTextField>
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

<script>
import API from '@/api';

    export default {
        data() {
            return {
                post: {},
            }
        },
        async created(){
            const response = await API.getPostByID(this.$route.params.id)
            this.post = response;
        },
        methods: {
            async removePost(id){
                const response = await API.deletePost(id);
                this.$router.push( { name: 'home', params: { message: response.message } } )
            }
        }
    }
</script>
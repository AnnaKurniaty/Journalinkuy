<script>
import API from '@/api';
import axios from 'axios';

    export default {
        name : 'timelines',
        props: ['id'],
        data() {
            return {
                post: {},
            }
        },
        async created(){
            this.post = await API.getPostByID(this.id);
        },
        mounted() {
            console.log(this.id)
            console.log(this.$route.params.data)
            this.id = this.$route.params.id;
        },
        methods: {
            async removePost(id){
                const response = await API.deletePost(id);
                this.$router.push( { name: 'home', params: { message: response.message } } )
            }
        }
    }
</script>

<template>
    <div :key="post.id">
    <VForm @submit.prevent="() => {}">
        <VRow>
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
        <VCol
            cols="12"
            md="6"
        >
        </VCol>
        <VCol
            cols="12"
            md="6"
        >
            <VTextField
            v-model="message"
            label="Content"
            placeholder="New Text Document..."
            >{{post.content}}</VTextField>
        </VCol>
        <VCol
            cols="12"
            md="6"
        >
        </VCol>
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

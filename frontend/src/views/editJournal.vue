<script>
import API from '@/api';

    export default {
        name : 'editJournal',
        props: ['id'],
        data() {
            return {
                post: {
                    journal_title: "",
                    content: "",
                    image: "",
                },
                image: "",
            }
        },
        async created() {
            const response = await API.getPostByID(this.$route.params.id);
            this.post = response;

        },
        methods: {
            selectFile(file){
                this.image = file[0];
            },
            async updateForm() {
                const formData = new FormData();
                formData.append('image', this.image);
                formData.append('journal_title', this.post.journal_title);
                formData.append('content', this.post.content);
                formData.append('old_image', this.post.image);
                if(this.$refs.form.validate()){
                    const response = await API.updatePost(this.$route.params.id, formData);
                    this.$router.push({ name: 'home', params: {message: response.message} });
                }
            }
        }
    }
</script>

<template>
    <div :key="post.id">
    <VForm ref="form" @submit.prevent="updateForm" enctype="multipart/form-data">
        <VRow>
        <VCol cols="12" md="6" >
            <VTextField label="Title" v-model="post.journal_title"></VTextField>
        </VCol>
        <VCol cols="12"  md="6" >
        </VCol>
        <VCol cols="12" md="6" >
            <VTextField v-model="post.content" >
                <Textarea rows="5" cols="15" label="Content" ></Textarea>
            </VTextField>
        </VCol>
        <VCol cols="12" md="6" >
        </VCol>
        <VCol cols="12" md="6" >
<!-- 
        <input type="file" @change="onFileChanged"> -->
        <v-file-input @change="selectFile" show-size counter multiple label="Select Image"></v-file-input>
                <v-img :src="`/${post.image}`" width="120"></v-img>
        </VCol>
        
        <VCol cols="12" class="d-flex gap-4" >
            <router-link
            to ="/"
            tag="VBtn"
            >
                <VBtn type="submit"> Submit </VBtn>
            </router-link>
            
            <VBtn type="reset" color="secondary" variant="tonal" > Reset </VBtn>
        </VCol>
        </VRow>
    </VForm>
    </div>
</template>

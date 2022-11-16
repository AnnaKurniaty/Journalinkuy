<template>
  <editor>
    <!-- Add HTML to the scoped slot called `content` -->
    <div slot="content" slot-scope="props">
      <p>Hi, I'm just a boring paragraph</p>
    </div>
  </editor>
</template>

<script>
// Import the editor
import  Editor  from 'tiptap'

export default 
  components: 
    Editor,
  ,

</script>
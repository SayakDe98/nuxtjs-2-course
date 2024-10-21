// Go to /clients/:id for viewing the content of this page.
<template>
    <div>Client {{ $route.params.id }} page</div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$router); // check the vue router object.
            console.log(this.$route); // get details about current route.
        }
    }
</script>
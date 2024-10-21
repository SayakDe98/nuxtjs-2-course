// Navigate to /users page to get the content of this page.
<template>
    <div>
        <client-only>
            Users
        </client-only>
    </div>
</template>

<script>
    export default {
        middleware: ['auth'] // component based middleware.
    }
</script>
<template>
    <div>Secret page.</div>
</template>

<script>
    export default {
        // middleware: ['auth']
        // we can write middleware like this as well.
        middleware ({ redirect, store }) {
            // if(store.state.auth) {
                
                return redirect('/');
            // }
        }
    }
</script>
<template>
  <div>
    <!-- <Header /> -->
    <h1>Hello this is h1 tag.</h1>
    <Dashboard />
    <DashboardButton />
    <DashboardButtonIcon />
    <!-- <v-btn @click="$myCustomPlugin">Say hello from plugin</v-btn> -->
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    mounted() {
      // console.log(this.$myCustomPlugin.call());
      console.log(this.$store.state);
    },
    async asyncData(ctx) { // if we use this then it is before the create() life cycle hooks
      const { params, $http } = ctx;
      console.log(ctx, 'ctx');
      // const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
      // return { post }; // deprecated in nuxt 3
    },
    // If we use await fetch(ctx) {} // it is after beforeCreated() and created() life cycle hooks
    head: {
      title: 'This is the main page' // gives title to the page
    },
    layout: 'myDashboard' // now index page will use dashboard layout instead of default layout
    // we can also create layout as a function.
    // layout(ctx) { // ctx is provided by Nuxt to deal with tons of situation.
    //   console.log(ctx);
    // } 
  }
</script>
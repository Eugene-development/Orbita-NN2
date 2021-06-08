<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from './header'
import Footer from './footer'


export default {
  name: "index",
  components: {
    Header,
    Footer
  }
}


</script>

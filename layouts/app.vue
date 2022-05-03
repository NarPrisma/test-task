<template>
  <div class="h-screen flex overflow-hidden main-bg">
    <div class="flex-1 flex min-h-screen max-h-screen overflow-hidden relative">
      <Header />
      <Nuxt />
      <notifications group="app"/>
    </div>
  </div>
</template>

<script>


import Header from "@/components/header";
export default {
  components: {
    Header
  },
}
</script>

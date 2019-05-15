<template>
  <main>
    <section class="container">
      <div class="title">
        <p>Hello!</p>
        <p>We are Cosylab-OB team😏</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
main {
  @apply w-screen h-screen bg-teal-darkest;
  section.container {
    @apply w-screen h-full text-white flex mx-auto items-center;
    min-height: 400px;
    .title {
      @apply text-3xl leading-normal;
    }
  }
}
</style>

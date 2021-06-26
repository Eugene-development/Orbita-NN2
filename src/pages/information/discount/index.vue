<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-indigo-700">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Стройматериалы со скидкой.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">Воспользуйтесь нашим временным предложением и пробретите эти товары со скидкой.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: 'Стройматериалы в Нижнем Новгороде || Скидки стройбазы "Орбита-строй"',
      description: '',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>

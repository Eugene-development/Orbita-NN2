<template>
<p>Блог</p>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: 'Стройматериалы в Нижнем Новгороде || Блог стройбазы "Орбита-строй"',
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

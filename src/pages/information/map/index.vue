<template>
<p>карта</p>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: 'Стройматериалы в Нижнем Новгороде || Расположение стройбазы "Орбита-строй"',
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

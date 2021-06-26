<template>
<div class="m-8">
  <div class="relative bg-white">
    <div class="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
      <img class="w-full h-full object-cover" src="https://www.trn-news.ru/Ru/Upload/Image/rtyuevtfwuedtwfytegfvefjhf.jpg" alt="Support team">
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Оплата продукции
        </h2>
        <p class="mt-6 text-lg text-gray-500">
          Рассчитывайтесь за строительные материалы удобным для вас способом.
        </p>
        <div class="mt-8 overflow-hidden">
          <dl class="-mx-8 -mt-8">
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                При получении товара
              </dt>
              <dd class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                Наличные
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                Через терминал в магазине
              </dt>
              <dd class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                Карта
              </dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">
                Безналичный рассчёт
              </dt>
              <dd class="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                Банк
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "index",
  data() {
    return {
      title: 'Стройматериалы в Нижнем Новгороде || Условия оплаты стройбазы "Орбита-строй"',
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

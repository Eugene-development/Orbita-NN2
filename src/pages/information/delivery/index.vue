<template>
  <div class="py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class=" max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-lg text-red-800 font-semibold tracking-wide uppercase">Доставка стройматериалов</h2>
<!--        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Доставка</p>-->
      </div>
      <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          Для удобства мы предлагаем покупателям купить стройматериалы с доставкой товара на адрес объекта, а также возможность сделать заказ по телефону или любым удобным способом, связавшись с нами.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области. Стоимость доставки по Дзержинску составляет 350 рублей до 1500 кг, в Нижний Новгород от 1200 рублей. Более подробную информацию о стоимости за пределы города вы можете уточнить у менеджеров.</p>
            <p>Доставка товара осуществляется с понедельника по субботу согласно графику работы магазина. Клиентом предварительно устанавливается дата и временной промежуток, по точному времени прибытия с вами свяжется водитель.</p>
            <p>ВНИМАНИЕ! Разгрузка и подъём строительных материалов оплачивается дополнительно и согласуется с менеджером не менее чем за 3 часа до подачи заявки. Цены за подъём материала указаны в таблице.</p>
            <p>Вы можете получить товар с нашего склада самовывозом.</p>
            <h3>Акция</h3>
            <p>При заказе товара от 15 000 рублей доставка массой до 1500 кг по Нижнему Новгороду – БЕСПЛАТНО!</p>
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
      title: 'Стройматериалы в Нижнем Новгороде || Доставка продукции от стройбазы "Орбита-строй"',
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

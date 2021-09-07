<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/aspect-ratio'),
      ],
    }
    ```
  -->
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Пластиковые окна по вашим размерам</h2>
          <p class="text-xl text-gray-500">Предлагаем пластиковые окна, раздвижные системы SLIDERS, перегородки, двери, фасады и прочую продукцию из профиля NOVOTEX, KBE, IVAPER. Собственное производство. Оказываем услуги по всем видам монтажа.</p>
        </div>
        <div role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/1.jpg" alt="">
              </div>
            </div>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/2.jpg" alt="">
              </div>
            </div>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/3.jpg" alt="">
              </div>
            </div>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/7.jpg" alt="">
              </div>
            </div>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/5.jpg" alt="">
              </div>
            </div>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" src="/window/6.jpg" alt="">
              </div>
            </div>
          <!-- More people... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "index",

  computed: {
    seoTitle: function () {
      return this.head.seo ? this.head.seo.title : 'Пластиковые окна';
    },
    seoDescription: function () {
      return this.head.seo ? this.head.seo.description : 'Пластиковые окна, а так же раздвижные системы SLIDERS, перегородки, двери, фасады. Все виды монтажных работ.';
    }

  },


  head() {
    return {
      title: this.seoTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoDescription
        }
      ]
    }
  },

}
</script>

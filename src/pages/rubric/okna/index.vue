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
          <p class="text-xl text-gray-500">Предлагаем пластиковые окна, раздвижные системы SLIDERS, перегородки, двери,
            фасады и прочую продукцию из профиля NOVOTEX, KBE, IVAPER. Собственное производство. Оказываем услуги по
            всем видам монтажа.</p>
        </div>
        <div role="list"
             class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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

        <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div class="max-w-md mx-auto lg:max-w-7xl">
            <div class="rounded-lg bg-gray-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <!--            <div v-for="(text, idx) of head.text" :key="text.id" class="rounded-lg bg-gray-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
              <div class="flex-1">
                <div>
                  <h2
                    class="inline-flex px-4 py-1 rounded-full text-2xl font-semibold tracking-wide bg-white text-gray-800">
                    Пластиковые конструкции
                  </h2>
                </div>
                <div class="mt-4 text-lg text-gray-600">
                  <p>Изготавливаем на собственном производстве и продаем недорого пластиковые окна, двери, перегородки,
                    фасады из профиля NOVOTEX, KBE, IVAPER на выбор, в том числе в комплектации с раздвижными системами
                    SLIDERS. Предлагаем профессиональный монтаж конструкций с предварительным замерами и расчетом цены,
                    с выдачей официальной гарантии на материалы и выполненные работы. Работаем с частными заказчиками и
                    организациями.</p>
                  <p><br></p>
                  <p>Мы изготавливаем типовые и нестандартные:</p>
                  <ul>
                    <li>окна: прямоугольные, арочные любых размеров и уровня изоляции, в том числе вентилируемые
                      распашные и раздвижные
                    </li>
                    <li>фрамуги для санузлов, лестничных клеток, кладовых и других помещений;</li>
                    <li>двери: глухие и с остеклением, утепленные и холодные, с замком и без;</li>
                    <li>перегородки для дома и офиса: одно- и двухкамерные, звукоизолированные, мобильные и
                      стационарные, сдвижные;
                    </li>
                    <li>ПВХ-фасады для кухонной, балконной, дачной и другой мебели, в том числе с декоративными
                      эффектами.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-6 rounded-md shadow lg:flex-shrink-0">
              <NuxtLink to="/information/discount"
                        class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gray-50 hover:bg-gray-100">

              </NuxtLink>
            </div>

          </div>

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
      return 'Пластиковые окна';
    },
    seoDescription: function () {
      return 'Пластиковые окна, а так же раздвижные системы SLIDERS, перегородки, двери, фасады. Все виды монтажных работ.';
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

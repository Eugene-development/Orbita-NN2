<template>
  <div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <header class="">
      <nav class="w-full mx-auto py-2 px-4 sm:px-4 lg:px-4" aria-label="Top">
        <div class="w-full flex md:justify-between ">
          <div class="items-left justify-start sm:justify-center	">
<!--            <a href="#">-->
<!--              <span class="sr-only">Workflow</span>-->
<!--              <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="">-->
<!--            </a>-->
            <div class="flex ml-10 space-x-8 ">
              <div class="flex items-center">
                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
                </svg>
                <p class="ml-2 text-red-900 animate-pulse">
                  8 (930) 688-88-62
                </p>
              </div>
              <div class="flex items-center hidden lg:flex">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <p class="ml-2">
                  Пн-Пт 8:00-17:30; Сб 9:00-16:00
                </p>
              </div>
              <div class="flex items-center hidden lg:flex">
                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
                </svg>
                <p class="ml-2">
                  orbita88yuliya@mail.ru
                </p>
              </div>

              <!--              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">-->
<!--                Solutions-->
<!--              </a>-->

<!--              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">-->
<!--                Pricing-->
<!--              </a>-->

<!--              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">-->
<!--                Docs-->
<!--              </a>-->

<!--              <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Company">-->
<!--                Company-->
<!--              </a>-->
            </div>
          </div>


<!--          <nav class=" flex py-2">-->
<!--            <div class="sm:flex items-center space-x-10 mx-auto text-base sm:text-sm md:text-base">-->



<!--            </div>-->
<!--            &lt;!&ndash;      <div>&ndash;&gt;-->
<!--            &lt;!&ndash;        <p>Корзина</p>&ndash;&gt;-->
<!--            &lt;!&ndash;      </div>&ndash;&gt;-->
<!--          </nav>-->



          <div class=" flex space-x-4 hidden lg:flex">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
              </svg>
              <p class="ml-2">
                Избранное (8)
              </p>
            </div>


            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
              </svg>
              <NuxtLink
                @click.native="cart()"
                to="/shop/cart"
                class="ml-2">
                Корзина ({{lengthCart}})
              </NuxtLink>
            </div>
          </div>




        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">

          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>
            <p class="ml-2">
              Избранное (6)
            </p>
          </div>


          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
            </svg>
            <NuxtLink
              @click.native="cart()"
              to="/shop/cart"
              class="ml-2">
              Корзина ({{lengthCart}})
            </NuxtLink>
          </div>


        </div>
      </nav>
    </header>

    <!--скошенный BG-->
    <!--    <div class="relative px-6 py-10 bg-yellow-100 overflow-hidden  sm:px-12 sm:py-20">-->
    <!--      <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">-->
    <!--        <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">-->
    <!--          <path class="text-yellow-200 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />-->
    <!--          <path class="text-yellow-300 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />-->
    <!--        </svg>-->
    <!--      </div>-->
    <!--      <div class="relative">-->
    <!--        <div class="sm:text-center">-->
    <!--          <h2 class="text-3xl font-extrabold text-gray-800 sm:text-4xl">-->
    <!--            Интернет-магазин строительных и отделочных материалов "Орбита-строй"-->
    <!--          </h2>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <div class="relative bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100 shadow-lg">
      <div class="flex justify-between items-left mx-8 px-8 py-3 sm:px-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink to="/">
            <span class="sr-only">База стройматериалов Орбита-Строй</span>
            <img alt="logo" class="h-10" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png">
          </NuxtLink>

          <!--          <a href="#">-->
          <!--            <span class="sr-only">Workflow</span>-->
          <!--            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg" alt="">-->
          <!--          </a>-->
        </div>
        <div class="-mr-2  md:hidden">
          <button
            @click="change_visibleMobileMenu"

            aria-expanded="false"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                  type="button">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <NuxtLink class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    to="/">
            Главная
          </NuxtLink>
          <NuxtLink class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    to="/information/payment">
            Оплата
          </NuxtLink>
          <NuxtLink class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    to="/information/delivery">
            Доставка
          </NuxtLink>
          <NuxtLink class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    to="/information/movers">
            Грузчики
          </NuxtLink>
          <NuxtLink class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900"
                    to="/information/contact">
            Контакты
          </NuxtLink>


          <div class="flex-1 flex justify-center px-2 lg:justify-end">
            <div class="overflow-hidden shadow rounded-lg max-w-lg w-full lg:max-w-xs">
              <label class="sr-only" for="search">Поиск</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path clip-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fill-rule="evenodd"/>
                  </svg>
                </div>
                <input id="search"
                       class="block w-full pl-10 border border-transparent rounded-md leading-5 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-700 sm:text-sm transition duration-150 ease-in-out"
                       placeholder="Поиск" type="search">
              </div>
            </div>
          </div>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a class="whitespace-nowrap text-base font-medium text-gray-600 hover:text-gray-900"
             href="https://orbita.adminexpo.com/admin/registration">
            Регистрация
          </a>
          <a
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-600"
            href="https://orbita.adminexpo.com/admin/login">
            Вход
          </a>
        </div>
      </div>

    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-yellow-50 pt-6 sm:pt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Интернет-магазин строительных и отделочных материалов "Орбита-строй"
          </h2>
          <p class="mt-3 text-xl text-red-800 sm:mt-4">
            При заказе через сайт для вас скидка 5%
          </p>
        </div>
      </div>
      <div class="mt-6 pb-4 bg-white sm:pb-8">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-yellow-50"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full mx-auto">
              <dl class="rounded-lg bg-white shadow-lg md:grid md:grid-cols-6">
                <NuxtLink v-for="(head, idx) of allHeads" :key="allHeads.id"
                          :to="'/rubric/' + head.slug"
                          class="flex flex-col border-b border-gray-200 p-4 text-center sm:border-0 sm:border-r sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-800">
                    {{ head.name }}
                  </dt>
                  <!--                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">-->
                  <!--                    86-->
                  <!--                  </dd>-->
                </NuxtLink>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- This example requires Tailwind CSS v2.0+ -->

    <nav class="flex border-b-2 border-t-2 py-2 " aria-label="Breadcrumb">
      <div class="flex items-center space-x-4 mx-auto">
        <!--        -->
        <!--          <div class="flex items-center">-->
        <!--            <NuxtLink to="/information/map" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">-->
        <!--              Мы на карте-->
        <!--            </NuxtLink>-->
        <!--          </div>-->
        <!--        -->

          <div class="flex items-center">
            <!--            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"-->
            <!--                 viewBox="0 0 20 20" aria-hidden="true">-->
            <!--              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>-->
            <!--            </svg>-->
            <NuxtLink to="/information/discount" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">
              Скидки
            </NuxtLink>
          </div>


          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
            </svg>
            <NuxtLink to="/information/testimonials" aria-current="page"
                      class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Отзывы
            </NuxtLink>
          </div>


          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
            </svg>
            <NuxtLink to="/information/partner" aria-current="page"
                      class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Партнёрам
            </NuxtLink>
          </div>


          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
            </svg>
            <NuxtLink to="/information/client" aria-current="page"
                      class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Клиентам
            </NuxtLink>
          </div>


          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
            </svg>
            <NuxtLink to="/information/action" aria-current="page"
                      class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Акции
            </NuxtLink>
          </div>


          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"/>
            </svg>
            <a href="https://vk.com/orbita_stroy" aria-current="page" target="_blank"
                      class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"> VK
            </a>
          </div>
      </div>
    </nav>

    <MobileMenu/>
  </div>
</template>

<script>
import MobileMenu from './mobileMenu'
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    MobileMenu
  },

  methods: {
    ...mapActions({
      'cart': 'catalog/cart/getCart',
      'change_visibleMobileMenu': 'navbar/visible/change_visibleMobileMenu',

    })
  },

  computed: {
    ...mapGetters({
      allHeads: 'catalog/head/allHeads',
      lengthCart: 'catalog/cart/lengthCart',
    }),
  },

}
</script>

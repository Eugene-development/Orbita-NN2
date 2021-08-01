<template>
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <!--  TODO Сделать стилизованность-->
  <div v-if="visibleMobileMenu" class="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5 sm:pb-8">
        <div class="flex items-center justify-between">
          <div>
            <span class="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Меню:
            </span>

            <!--            <img alt="Workflow" class="h-8 w-auto"-->
            <!--                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">-->
          </div>

          <div class="-mr-2">
            <button
              @click="change_visibleMobileMenu"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800"
              type="button">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: x -->
              <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="mt-6 sm:mt-8">
          <nav class="space-x-10 grid grid-cols-2 gap-4">
            <NuxtLink
              class="ml-10 text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
              to="/"
              @click.native="close_visible"
            >
              Главная
            </NuxtLink>

            <NuxtLink
              class="text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
              to="/information/payment"
              @click.native="close_visible"
            >
              Оплата
            </NuxtLink>
            <!--              <NuxtLink-->
            <!--                class="text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"-->
            <!--                to="/blog"-->
            <!--                @click.native="close_visible"-->
            <!--              >-->
            <!--                Блог-->
            <!--              </NuxtLink>-->
            <NuxtLink
              class="text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
              to="/information/delivery"
              @click.native="close_visible"
            >
              Доставка
            </NuxtLink>
            <NuxtLink
              class="text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
              to="/information/movers"
              @click.native="close_visible"
            >
              Грузчики
            </NuxtLink>
            <NuxtLink
              class="text-base px-1 font-medium rounded-md text-gray-800 hover:text-red-800 focus:text-red-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 hover:underline"
              to="/information/contact"
              @click.native="close_visible"
            >
              Контакты
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {

  methods: {
    ...mapActions({
      'change_visibleCatalog': 'navbar/visible/change_visibleCatalog',
      'change_visibleInformation': 'navbar/visible/change_visibleInformation',
      'change_visibleMobileMenu': 'navbar/visible/change_visibleMobileMenu',
      'close_visible': 'navbar/visible/close_visible'
    })
  },
  computed: {
    ...mapGetters({
      'visibleMobileMenu': 'navbar/visible/visibleMobileMenu'
    })
  }
}
</script>

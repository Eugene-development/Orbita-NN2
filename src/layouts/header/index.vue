<template>
  <div>

    <nav class="flex py-2" >
      <ol class="flex items-center space-x-8 mx-auto">
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
            </svg>
            <p class="ml-2 text-lg text-red-900 animate-pulse">
              8 (930) 288-88-62
            </p>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
            <p class="ml-2 text-lg">
              Пн-Пт 8:00-17:30; Сб 9:00-16:00
            </p>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
            </svg>
            <p class="ml-2 text-lg">
              orbita88yuliya@mail.ru
            </p>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6"  fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>
            <p class="ml-2 text-lg">
              Избранное (6)
            </p>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
            </svg>
            <p class="ml-2 text-lg">
              Корзина (4)
            </p>
          </div>
        </li>
      </ol>
<!--      <div>-->
<!--        <p>Корзина</p>-->
<!--      </div>-->
    </nav>


    <div class="relative bg-yellow-300 shadow-lg">
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
        <div class="-mr-2 -my-2 md:hidden">
          <button aria-expanded="false"
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
          <a class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Главная
          </a>
          <a class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Оплата
          </a>
          <a class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Доставка
          </a>
          <a class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Грузчики
          </a>
          <a class="pt-2 text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Контакты
          </a>

          <div class="pt-2 relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-600" -->
            <button aria-expanded="false"
                    class="text-gray-600 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    type="button">
              <span>Советы</span>
              <!--
                Heroicon name: solid/chevron-down

                Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->
              <svg aria-hidden="true" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-600"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fill-rule="evenodd"/>
              </svg>
            </button>

            <!--
              'Solutions' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            -->
            <div v-if="false"
                 class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/chart-bar -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Analytics
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Get a better understanding of where your traffic is coming from.
                      </p>
                    </div>
                  </a>

                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/cursor-click -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Engagement
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Speak directly to your customers in a more meaningful way.
                      </p>
                    </div>
                  </a>

                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/shield-check -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Security
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Your customers&#039; data will be safe and secure.
                      </p>
                    </div>
                  </a>

                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/view-grid -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Integrations
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Connect with third-party tools that you&#039;re already using.
                      </p>
                    </div>
                  </a>

                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/refresh -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Automations
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Build strategic funnels that will drive your customers to convert
                      </p>
                    </div>
                  </a>

                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                      <!-- Heroicon name: outline/document-report -->
                      <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Reports
                      </p>
                      <p class="mt-1 text-sm text-gray-600">
                        Get detailed reports that will help you make more informed decisions
                      </p>
                    </div>
                  </a>
                </div>
                <div class="p-5 bg-gray-50 sm:p-8">
                  <a class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100" href="#">
                    <div class="flex items-center">
                      <div class="text-base font-medium text-gray-900">
                        Enterprise
                      </div>
                      <span
                        class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-100 text-red-800">
                    New
                  </span>
                    </div>
                    <p class="mt-1 text-sm text-gray-600">
                      Empower your entire team with even more advanced tools.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

<!--          <div class="pt-2 relative">-->
<!--            &lt;!&ndash; Item active: "text-gray-900", Item inactive: "text-gray-600" &ndash;&gt;-->
<!--            <button aria-expanded="false"-->
<!--                    class="text-gray-600 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"-->
<!--                    type="button">-->

<!--              Корзина <span class="animate-pulse">(6)</span>-->
<!--              &lt;!&ndash;-->
<!--                Heroicon name: solid/chevron-down-->

<!--                Item active: "text-gray-600", Item inactive: "text-gray-400"-->
<!--              &ndash;&gt;-->
<!--              <svg aria-hidden="true" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-600"-->
<!--                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path clip-rule="evenodd"-->
<!--                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
<!--                      fill-rule="evenodd"/>-->
<!--              </svg>-->
<!--            </button>-->

<!--            &lt;!&ndash;-->
<!--              'More' flyout menu, show/hide based on flyout menu state.-->

<!--              Entering: "transition ease-out duration-200"-->
<!--                From: "opacity-0 translate-y-1"-->
<!--                To: "opacity-100 translate-y-0"-->
<!--              Leaving: "transition ease-in duration-150"-->
<!--                From: "opacity-100 translate-y-0"-->
<!--                To: "opacity-0 translate-y-1"-->
<!--            &ndash;&gt;-->
<!--            <div v-if="false"-->
<!--                 class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">-->
<!--              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">-->
<!--                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">-->
<!--                  <a class="-m-3 p-3 block rounded-md hover:bg-gray-50" href="#">-->
<!--                    <p class="text-base font-medium text-gray-900">-->
<!--                      Товар 1-->
<!--                    </p>-->
<!--                    <p class="mt-1 text-sm text-gray-600">-->
<!--                      Get all of your questions answered in our forums or contact support.-->
<!--                    </p>-->
<!--                  </a>-->

<!--                  <a class="-m-3 p-3 block rounded-md hover:bg-gray-50" href="#">-->
<!--                    <p class="text-base font-medium text-gray-900">-->
<!--                      Товар 2-->
<!--                    </p>-->
<!--                    <p class="mt-1 text-sm text-gray-600">-->
<!--                      Learn how to maximize our platform to get the most out of it.-->
<!--                    </p>-->
<!--                  </a>-->

<!--                  <a class="-m-3 p-3 block rounded-md hover:bg-gray-50" href="#">-->
<!--                    <p class="text-base font-medium text-gray-900">-->
<!--                      Товар 3-->
<!--                    </p>-->
<!--                    <p class="mt-1 text-sm text-gray-600">-->
<!--                      See what meet-ups and other events we might be planning near you.-->
<!--                    </p>-->
<!--                  </a>-->

<!--                  <a class="-m-3 p-3 block rounded-md hover:bg-gray-50" href="#">-->
<!--                    <p class="text-base font-medium text-gray-900">-->
<!--                      Товар 4-->
<!--                    </p>-->
<!--                    <p class="mt-1 text-sm text-gray-600">-->
<!--                      Understand how we take your privacy seriously.-->
<!--                    </p>-->
<!--                  </a>-->


<!--                  <button-->
<!--                    class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"-->
<!--                    type="button">-->
<!--                    &lt;!&ndash; Heroicon name: solid/mail &ndash;&gt;-->
<!--                    <svg aria-hidden="true" class="-ml-1 mr-3 h-5 w-5" fill="currentColor"-->
<!--                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>-->
<!--                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>-->
<!--                    </svg>-->
<!--                    Оплатить-->
<!--                  </button>-->


<!--                </div>-->


<!--              </div>-->
<!--            </div>-->
<!--          </div>-->



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
          <a class="whitespace-nowrap text-base font-medium text-gray-600 hover:text-gray-900" href="#">
            Регистрация
          </a>
          <a
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-red-600"
            href="#">
            Вход
          </a>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img alt="Workflow" class="h-8 w-auto"
                     src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg">
              </div>
              <div class="-mr-2">
                <button
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                  type="button">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Analytics
                  </div>
                </a>

                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/cursor-click -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Engagement
                  </div>
                </a>

                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/shield-check -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Security
                  </div>
                </a>

                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/view-grid -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Integrations
                  </div>
                </a>

                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/refresh -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Automations
                  </div>
                </a>

                <a class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" href="#">
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white">
                    <!-- Heroicon name: outline/document-report -->
                    <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    Reports
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Pricing
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Docs
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Enterprise
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Blog
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Help Center
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Guides
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Security
              </a>

              <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                Events
              </a>
            </div>
            <div class="mt-6">
              <a
                class="w-full flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                href="#">
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-600">
                Existing customer?
                <a class="text-red-700 hover:text-red-500" href="#">
                  Sign in
                </a>
              </p>
            </div>
          </div>
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
<!--          <p class="mt-3 text-xl text-gray-500 sm:mt-4">-->
<!--            Строительные и отделочные материалы оптом и в розницу-->
<!--          </p>-->
        </div>
      </div>
      <div class="mt-10 pb-4 bg-white sm:pb-8">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-yellow-50"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-6">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Стройматериалы
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    86
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Отделка
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    198
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Инструмент
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    100
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Электротовары
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    100
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Изоляция
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    24
                  </dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Сантехника
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                    25
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <div >-->
<!--      <div class="py-2 px-3 sm:py-6 sm:px-6 lg:px-12 lg:flex lg:justify-between flex items-center ">-->
<!--        <div class="w-full justify-items-center object-center items-center">-->


<!--          &lt;!&ndash; This example requires Tailwind CSS v2.0+ &ndash;&gt;-->
<!--&lt;!&ndash;            <h3 class="text-lg leading-6 font-medium text-gray-900">&ndash;&gt;-->
<!--&lt;!&ndash;              Last 30 days&ndash;&gt;-->
<!--&lt;!&ndash;            </h3>&ndash;&gt;-->
<!--            <dl class=" mt-2 grid grid-cols-1 rounded-lg bg-gradient-to-b from-yellow-200 to-yellow-400 overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-6 md:divide-y-0 md:divide-x">-->
<!--              <div>-->
<!--                <div class="py-5 sm:p-6">-->
<!--                  <dt class=" text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Стройматериалы-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      912-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--&lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="sr-only">Increased by</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      12%&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="px-3 py-5 sm:p-6">-->
<!--                  <dt class="text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Отделка-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      384-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--&lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="sr-only">Increased by</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      12%&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="px-3 py-5 sm:p-6">-->
<!--                  <dt class="text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Инструмент-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      117-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--&lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="sr-only">Increased by</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      2.02%&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="px-3 py-5 sm:p-6">-->
<!--                  <dt class="text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Электротовары-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      581-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--&lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="sr-only">Increased by</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      2.02%&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="px-3 py-5 sm:p-6">-->
<!--                  <dt class="text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Изоляция-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      245-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--&lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--&lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--&lt;!&ndash;                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                      <span class="sr-only">Decreased by</span>&ndash;&gt;-->
<!--&lt;!&ndash;                      4.05%&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <div class="px-3 py-5 sm:p-6">-->
<!--                  <dt class="text-base font-normal text-gray-900 border-b-2 border-gray-600">-->
<!--                    Сантехника-->
<!--                  </dt>-->
<!--                  <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">-->
<!--                    <div class="flex items-baseline text-2xl font-semibold text-red-700">-->
<!--                      71-->
<!--                      <span class="ml-2 text-sm font-medium text-gray-600">поз.</span>-->
<!--                    </div>-->

<!--                    &lt;!&ndash;                    <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0">&ndash;&gt;-->
<!--                    &lt;!&ndash;                      <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">&ndash;&gt;-->
<!--                    &lt;!&ndash;                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />&ndash;&gt;-->
<!--                    &lt;!&ndash;                      </svg>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      <span class="sr-only">Increased by</span>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      12%&ndash;&gt;-->
<!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </dd>-->
<!--                </div>-->
<!--              </div>-->
<!--            </dl>-->

<!--        </div>-->


<!--        <div class="max-w-xs object-right justify-end">-->


<!--          &lt;!&ndash;-->
<!--            This example requires Tailwind CSS v2.0+-->

<!--            This example requires some changes to your config:-->

<!--            ```-->
<!--            // tailwind.config.js-->
<!--            module.exports = {-->
<!--              // ...-->
<!--              plugins: [-->
<!--                // ...-->
<!--                require('@tailwindcss/line-clamp'),-->
<!--              ]-->
<!--            }-->
<!--            ```-->
<!--          &ndash;&gt;-->
<!--          <div>-->
<!--&lt;!&ndash;            <div class="mt-6">&ndash;&gt;-->
<!--&lt;!&ndash;              <a&ndash;&gt;-->
<!--&lt;!&ndash;                class="w-full flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"&ndash;&gt;-->
<!--&lt;!&ndash;                href="#">&ndash;&gt;-->
<!--&lt;!&ndash;                View all&ndash;&gt;-->
<!--&lt;!&ndash;              </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </div>-->


<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


  <!-- This example requires Tailwind CSS v2.0+ -->

    <nav class="flex border-b-2 border-t-2 py-2 " aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4 mx-auto">
        <li>
          <div class="flex items-center">
            <a href="#" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Мы на карте</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Скидки</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Отзывы</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Партнёрам</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Клиентам</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Акции</a>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import MobileMenu from './mobileMenu'
import {mapActions} from "vuex";

export default {
  components: {
    MobileMenu
  },

  methods: {
    ...mapActions({})
  },
}
</script>

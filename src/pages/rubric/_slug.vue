<template>
  <div class="">


<!--        <p>{{$route.params.slug}}</p>-->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="pt-4 sm:pt-8 lg:pt-12">
        <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
<!--            <h2 class="text-lg leading-6 font-semibold text-gray-900 uppercase tracking-wider">-->
<!--              Раздел-->
<!--            </h2>-->
            <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {{ head.name }}
            </h1>
            <p class="text-xl text-gray-700">
              Выберите интересующую вас рубрику в этом разделе.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 bo">
        <div class="relative">
          <div class="absolute inset-0 h-3/4"></div>
          <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
              <div v-for="(rubric, idx) of head.rubric" :key="rubric.id"
                   class="flex flex-col rounded-lg shadow-lg overflow-hidden border-2">
                <div class="px-6 py-8 text-center sm:p-10 sm:pb-6">
                  <div>
                    <h3 class="inline-flex px-8 py-1 rounded-full text-sm  font-semibold tracking-wide uppercase bg-indigo-50 text-indigo-900" id="tier-standard">
                      {{ head.name }}
                    </h3>
                  </div>
                  <div class="mt-4  text-center items-baseline text-2xl font-extrabold">
                    {{ rubric.name }}
                  </div>
<!--                  <p class="mt-5 text-lg text-gray-500">-->
<!--                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.-->
<!--                  </p>-->
                </div>
                <div class="flex-1 flex flex-col justify-between px-6  sm:p-10 sm:pt-6">
                  <ul role="list" class="space-y-2">
<!--                    <li class="flex items-start">-->
<!--                      <div class="flex-shrink-0">-->
<!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
<!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--                        </svg>-->
<!--                      </div>-->
<!--                      <p class="ml-3 text-base text-gray-700">-->
<!--                        Pariatur quod similique-->
<!--                      </p>-->
<!--                    </li>-->

<!--                    <li class="flex items-start">-->
<!--                      <div class="flex-shrink-0">-->
<!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
<!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--                        </svg>-->
<!--                      </div>-->
<!--                      <p class="ml-3 text-base text-gray-700">-->
<!--                        Sapiente libero doloribus modi nostrum-->
<!--                      </p>-->
<!--                    </li>-->

<!--                    <li class="flex items-start">-->
<!--                      <div class="flex-shrink-0">-->
<!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
<!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--                        </svg>-->
<!--                      </div>-->
<!--                      <p class="ml-3 text-base text-gray-700">-->
<!--                        Vel ipsa esse repudiandae excepturi-->
<!--                      </p>-->
<!--                    </li>-->

<!--                    <li class="flex items-start">-->
<!--                      <div class="flex-shrink-0">-->
<!--                        &lt;!&ndash; Heroicon name: outline/check &ndash;&gt;-->
<!--                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />-->
<!--                        </svg>-->
<!--                      </div>-->
<!--                      <p class="ml-3 text-base text-gray-700">-->
<!--                        Itaque cupiditate adipisci quibusdam-->
<!--                      </p>-->
<!--                    </li>-->
                  </ul>
                  <div class="rounded-md shadow">
                    <NuxtLink
                      :to="'/category/' + rubric.slug"
                      class=" block w-full bg-gradient-to-r from-red-400 via-red-800 to-red-400 border border-red-900 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-900">
                      Просмотреть
                    </NuxtLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
<!--        <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">-->
<!--          <div class="max-w-md mx-auto lg:max-w-5xl">-->
<!--            <div class="rounded-lg bg-gray-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">-->
<!--              <div class="flex-1">-->
<!--                <div>-->
<!--                  <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">-->
<!--                    Discounted-->
<!--                  </h3>-->
<!--                </div>-->
<!--                <div class="mt-4 text-lg text-gray-600">Get full access to all of standard license features for solo projects that make less than $20k gross revenue for <span class="font-semibold text-gray-900">$29</span>.</div>-->
<!--              </div>-->
<!--              <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">-->
<!--                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">-->
<!--                  Buy Discounted License-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>

  </div>

</template>

<script>
import { mapActions , mapGetters} from "vuex";

export default {
  name: "index",
  async asyncData({store, params}) {
    await store.dispatch('catalog/rubric/getHead', {
      slug: params.slug
    })
  },


  computed: {
    ...mapGetters({
      head: 'catalog/rubric/head',
    }),
    rubricName: function () {
      return this.head.name;
    },
    seoTitle: function () {
      return this.head.seo ? this.head.seo.title : 'Отделочные и строительные материалы';
    },
    seoDescription: function () {
      return this.head.seo ? this.head.seo.description : 'Материалы для строительства и отделочных работ';
    }

  },


  head() {
    return {
      title: 'База стройматериалов Орбита-Строй в Нижнем Новгороде || ' + this.rubricName + ' || ' + this.seoTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.rubricName + ' в Нижнем Новгороде и области. ' + this.seoDescription
        }
      ]
    }
  },



}
</script>

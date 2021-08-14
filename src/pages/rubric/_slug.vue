<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">


<!--        <p>{{$route.params.slug}}</p>-->



    <div class="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">{{ head.name }}</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">Выберите интерсующую вас рубрику из раздела "{{ head.name }}"</p>
<!--        <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">-->
<!--          <button type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Monthly billing</button>-->
<!--          <button type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Yearly billing</button>-->
<!--        </div>-->
      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">

        <div v-for="(rubric, idx) of head.rubric" :key="rubric.id"
             class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div class="p-6">
            <p class="text-lg leading-6 font-medium text-indigo-600">{{ head.name }}</p>
<!--            <p class="mt-4 text-sm text-gray-500">Недорогой и качественный пиломатериал</p>-->
            <h2 class="mt-8">
              <span class="text-2xl font-extrabold text-gray-900">{{ rubric.name }}</span>
            </h2>
            <NuxtLink
              :to="'/category/' + rubric.slug"
              class="mt-8 block w-full bg-indigo-500 border border-indigo-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900">
              Просмотреть
            </NuxtLink>
          </div>
<!--          <div class="pt-6 pb-8 px-6">-->
<!--            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>-->
<!--            <ul class="mt-6 space-y-4">-->
<!--              <li class="flex space-x-3">-->
<!--                &lt;!&ndash; Heroicon name: solid/check &ndash;&gt;-->
<!--                <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />-->
<!--                </svg>-->
<!--                <span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc.</span>-->
<!--              </li>-->

<!--              <li class="flex space-x-3">-->
<!--                &lt;!&ndash; Heroicon name: solid/check &ndash;&gt;-->
<!--                <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />-->
<!--                </svg>-->
<!--                <span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
        </div>

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

<template>
  <div class="bg-gray-100">
    <div class="w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">Контакты</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-xl font-medium text-white">Контактная информация</h3>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">Нижний Новгород, Автозаводский район, <br> ул. Зеленхозовская 4-а (пластиковые окна)</p>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">Дзержинск, Зарёвская объездная, <br> пр. Ленина, 121-В (строительные материалы)</p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Телефон</span></dt>
              <dd class="flex text-base text-indigo-50">
                <!-- Heroicon name: outline/phone -->
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3">8 (800) 555-8-111</span>
              </dd>
              <dt><span class="sr-only">Почта</span></dt>
              <dd class="flex text-base text-indigo-50">
                <!-- Heroicon name: outline/mail -->
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">info@orbita-stroy.com</span>
              </dd>
              <dt><span class="sr-only">Почта</span></dt>
              <dd class="flex text-base text-indigo-50">
                <a class="text-base text-indigo-50 flex" href="https://vk.com/orbita_stroy"
                   target="_blank">
                  <svg class="mr-3 lex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  vk.com/orbita_stroy
                </a>
              </dd>
            </dl>

          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Отправить коммерческое предложение</h3>
            <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first_name" class="block text-sm font-medium text-gray-900">Имя</label>
                <div class="mt-1">
                  <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <label for="last_name" class="block text-sm font-medium text-gray-900">Должность</label>
                <div class="mt-1">
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Почта</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium text-gray-900">Телефон</label>
                </div>
                <div class="mt-1">
                  <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" aria-describedby="phone-optional">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message" class="block text-sm font-medium text-gray-900">Сообщение</label>
                  <span id="message-max" class="text-sm text-gray-500">Максимум 500 символов</span>
                </div>
                <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" aria-describedby="message-max"></textarea>
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="file-upload" class="block text-sm font-medium text-gray-900">Загрузить файл</label>
                </div>
                <div class=" mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-48 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Загрузите файл</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">или перетяните его в эту область</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>


              </div>




              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                  Отправить
                </button>
              </div>
            </form>
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
      title: 'Стройматериалы в Нижнем Новгороде || Контакты стройбазы "Орбита-строй"',
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

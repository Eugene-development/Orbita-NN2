<template>
  <div>
    <!--    <div class="mt-4 relative">-->
    <!--      <div class=" mx-auto">-->
    <!--        <div class="relative shadow-xl  sm:overflow-hidden">-->
    <!--          <div class="absolute inset-0">-->
    <!--            <img alt="home" class="h-full w-full object-cover" src="/slider/slider4.jpg">-->
    <!--            <div class="absolute inset-0 bg-gradient-to-r from-blueGray-300 to-blueGray-500"-->
    <!--                 style="mix-blend-mode: multiply;"></div>-->
    <!--          </div>-->
    <!--          <div class="relative px-3 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">-->
    <!--            <h1 class="mb-12 text-center text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">-->
    <!--              <span class="block text-white mb-4">База строительных и отделочных материалов</span>-->
    <!--              <span class="block text-indigo-300">"Орбита-строй"</span>-->
    <!--            </h1>-->
    <!--            <hr>-->
    <!--            <h2 class="mt-6 max-w-lg mx-auto text-center text-3xl text-indigo-100 sm:max-w-3xl">-->
    <!--              Строительные и отделочные материалы <br> оптом и в розницу-->
    <!--            </h2>-->

    <!--            &lt;!&ndash;                    <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">&ndash;&gt;-->
    <!--            &lt;!&ndash;                      <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">&ndash;&gt;-->
    <!--            &lt;!&ndash;                        <NuxtLink to="/office/dashboard" class="flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">&ndash;&gt;-->
    <!--            &lt;!&ndash;                          Начать&ndash;&gt;-->
    <!--            &lt;!&ndash;                        </NuxtLink>&ndash;&gt;-->
    <!--            &lt;!&ndash;                        <button&ndash;&gt;-->
    <!--            &lt;!&ndash;                          class="flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"&ndash;&gt;-->
    <!--            &lt;!&ndash;                          role="menuitem"&ndash;&gt;-->
    <!--            &lt;!&ndash;                          @click.stop.once="logout">Выход&ndash;&gt;-->
    <!--            &lt;!&ndash;                        </button>&ndash;&gt;-->

    <!--            &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--            &lt;!&ndash;                    </div>&ndash;&gt;-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <div class="mt-20 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="text-base leading-6 text-teal-800 font-semibold tracking-wide uppercase"></p>
        <h2 class=" mt-2 text-6xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-5xl sm:leading-10">
          Лидеры продаж
        </h2>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Обратите внимание на наши топовые позиции с самыми привлекательными ценами.
        </p>
      </div>
    </div>

    <section class="text-gray-700 body-font">
      <div class="ml-16 px-8 py-16 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/473" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg">
            </NuxtLink>

            <NuxtLink to="/product/473">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Цемент и универсальные смеси</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Пескобетон м-300</h2>
                <p class="mt-1">125 руб/шт (25 кг)</p>
              </div>
            </NuxtLink>


          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/431" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class=" object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png">
            </NuxtLink>
            <NuxtLink to="/product/431">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Штукатурка</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">ШТУКАТУРНАЯ СМЕСЬ "ЕК" TG 40</h2>
                <p class="mt-1">373 руб/шт (30 кг)</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/228" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg">
            </NuxtLink>
            <NuxtLink to="/product/228">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Плита ОСБ</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Плита ОСБ-3 2500*1250*9мм</h2>
                <p class="mt-1">2200 руб/шт</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/1015" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/o233615480a6fded9690ecb346.jpg">
            </NuxtLink>
            <NuxtLink to="/product/1015">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Профнастил оцинкованный</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Профнастил с-10 1160*2000</h2>
                <p class="mt-1">1145 руб/шт</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/417" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/zatirka-ceresit-se-33-super-2kg.jpg">
            </NuxtLink>
            <NuxtLink to="/product/417">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Затирка для швов</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Затирка для швов "Церезит"</h2>
                <p class="mt-1">185 руб/шт</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/459" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c1c0c26480f6ef55937fc2af8c8ded65.JPG">
            </NuxtLink>
            <NuxtLink to="/product/459">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Цемент и универсальные смеси</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Цемент м-400 мордовцемент</h2>
                <p class="mt-1">285 руб/шт (40 кг)</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="/product/1812" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/beJO9NOqsav5tYtFkJFV9fJIkzDOmTsnI8chiUbT.jpg">
            </NuxtLink>
            <NuxtLink to="/product/1812">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Смесители для кухни</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Смеситель д/кухни VENEZIA</h2>
                <p class="mt-1">3675 руб/шт</p>
              </div>
            </NuxtLink>

          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <NuxtLink to="product/1945" class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center h-full block"
                   src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%86%D0%B0%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F.jpg">
            </NuxtLink>
            <NuxtLink to="product/1945">
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Рулонная гидроизоляция</h3>
                <h2 class="text-gray-900 title-font text-base font-medium">Рулонная черепица красная</h2>
                <p class="mt-1">2115 руб/шт</p>
              </div>
            </NuxtLink>

          </div>
        </div>
      </div>
    </section>


    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Строительная база</h2>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Орбита-строй</h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none"
                 viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                         patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
            </svg>
            <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img class="rounded-lg shadow-lg object-cover object-center"
                       src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/serv_4.jpg" alt="stroymat"
                       width="1184" height="1376">
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="mt-1 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>Приобрести стройматериалы в Нижнем Новгороде высокого качества по конкурентным ценам можно в течение
                нескольких минут. База строительных и отделочных материалов «Орбита-Строй» занимает площадь более, чем 1
                км2 и предлагает продукцию от таких производителей, как:</p>
              <ul>
                <li>Tarkett;</li>
                <li>EK;</li>
                <li>Ceresit;</li>
                <li>Makroflex;</li>
              </ul>
              <p>Строительная база имеет удобный подъезд автотранспорта, развитую инфраструктуру и просторные
                выставочные павильоны. Строительный магазин предоставляет услуги по погрузке при оптовой покупке на
                бесплатных условиях, возможна доставка покупки собственным автотранспортом.</p>
              <p>Строительный интернет-магазин подойдёт тем, кто ценит время и качество. Выбрать товар заблаговременно
                оплатить покупку стройматериалов в Нижнем Новгороде и заказать их доставку по указанному адресу – дело
                нескольких минут. Стройбаза идёт навстречу постоянным клиентам и предоставляет гибкие дисконтные
                скидки.</p>
              <p>«Орбита-Строй» - строительный магазин в Нижнем Новгороде для тех, кто уважает качество материалов и
                труд. «Орбита-Строй» - правильный выбор на пути к комфорту и надёжности.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>


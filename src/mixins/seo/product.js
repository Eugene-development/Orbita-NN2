export default {

  computed: {
    productName: function () {
      return this.product.name;
    },
    seoTitle: function () {
      return this.product.seo ? this.product.seo.title : 'Строительные и отделочные материалы';
    },
    seoDescription: function () {
      return this.product.seo ? this.product.seo.description : 'Строительные и отделочные материалы в Нижнем Новгороде';
    }
  },

  head() {
    return {
      title: this.productName + ' в Нижнем Новгороде' + ' || ' + this.seoTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.productName + ' со склада в Нижнем Новгороде. ' + this.seoDescription
        }
      ]
    }
  },

}

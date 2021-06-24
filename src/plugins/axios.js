export default function ({ $axios, store, $auth }) {
  $axios.onRequest((config) => {
    $axios.setToken('1', 'Bearer')
  })
}

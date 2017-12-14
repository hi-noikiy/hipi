import 'whatwg-fetch'
import 'es6-promise'

export const homeAdvert = () => fetch('/advert/home', {
  method: 'get'
})

import * as donationService from './donationService.js'
import * as donationInterface from './donationInterface.js'

const render = () => {
  const data = donationService.get()
  const filtro = document.querySelector('.form-select')
  filtro.addEventListener('change', donationInterface.appendItems(data))

}

export { render }


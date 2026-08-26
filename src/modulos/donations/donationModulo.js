import * as donationService from './donationService.js'
import * as donationInterface from './donationInterface.js'

const render = () => {
  const data = donationService.get()
  donationInterface.appendItems(data)

}

export { render }
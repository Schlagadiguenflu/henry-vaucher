/**
 * Projet: Nnamella client
 * Auteur : Tim Allemann
 * Date : 05.11.2020
 * Description : Contient différentes fonctions de formattage
 * Fichier : format.js
 **/

import moment from 'moment'

export const namespaced = true

export const actions = {
  formatDate(value) {
    return new Promise(resolve => {
      let date = moment(value).format('YYYY-MM-DD')
      if (date == 'Invalid date') {
        date = null
      }
      console.log(date)
      resolve(date)
    })
  }
}

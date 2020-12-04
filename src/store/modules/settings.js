/**
 * Projet: Nnamella client
 * Auteur : Tim Allemann
 * Date : 29.09.2020
 * Description : Configuration générale
 * Fichier : settings.js
 **/

export const namespaced = true

export const state = {
  authorityUrl: process.env.VUE_APP_AUTHORITY_URL,
  applicationUrl: process.env.VUE_APP_APPLICATION_URL,
  apiUrl: process.env.VUE_APP_API_URL,
  itemsPerPage: 10,
  currentPageAccount: 1,
  currentPageAccountingPeriod: 1,
  currentPageLegalEntity: 1
}

export const mutations = {
  SET_ITEMSPERPAGE(state, number) {
    state.itemsPerPage = number
  },
  SET_CURRENTPAGEACCOUNT(state, number) {
    state.currentPageAccount = number
  },
  SET_CURRENTPAGEACCOUNTINGPERIOD(state, number) {
    state.currentPageAccountPeriod = number
  },
  SET_CURRENTPAGELEGALENTITY(state, number) {
    state.currentPageLegalEntity = number
  }
}

export const actions = {
  // Affecte le nombre d'élément à afficher dans un tableau
  setItemsPerPage({ commit }, number) {
    commit('SET_ITEMSPERPAGE', number.number)
  },
  // Affecte le numéro de page consulté du plan comptable
  setCurrentPageAccount({ commit }, number) {
    commit('SET_CURRENTPAGEACCOUNT', number.number)
  },
  // Affecte le numéro de page consulté des périodes comptables
  setCurrentPageAccountingPeriod({ commit }, number) {
    commit('SET_CURRENTPAGEACCOUNTINGPERIOD', number.number)
  },
  // Affecte le numéro de page consulté des formes juridiques (dossiers)
  setCurrentPageLegalEntity({ commit }, number) {
    commit('SET_CURRENTPAGELEGALENTITY', number.number)
  }
}

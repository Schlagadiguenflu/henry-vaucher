/**
 * Projet: Henri Vaucher
 * Auteur : Tim Allemann
 * Date : 06.12.2020
 * Description : Gestion et stockage des peinture
 * Fichier : picture.js
 **/

import PictureService from '@/services/pictureService.js'

export const namespaced = true

export const state = {
  pictures: [],
  pagination: {},
  picture: {}
}

export const mutations = {
  SET_PICTURES(state, response) {
    state.pictures = response.data
    state.pagination = JSON.parse(response.headers['x-pagination'])
  },
  SET_PICTURE(state, picture) {
    state.picture = picture
  },
  ADD_PICTURE(state, picture) {
    state.picture = picture
    state.pictures.unshift({
      ...picture
    })
  },
  EDIT_PICTURE(state, picture) {
    state.picture = picture
  },
  DELETE_PICTURE(state) {
    state.picture = null
  }
}

export const actions = {
  // Récupère les peintures et notifie l'utilisateur en cas de succès ou erreur
  fetchPictures({ commit, dispatch }, payload) {
    return PictureService.getPictures(payload.pageNumber, payload.pageSize)
      .then(response => {
        commit('SET_PICTURES', response)
        return response
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Problème au chargement des pictures : ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  // Récupère une peinture spécifique et notifie l'utilisateur en cas de succès ou erreur
  fetchPicture({ commit, dispatch }, id) {
    return PictureService.getPicture(id)
      .then(response => {
        commit('SET_PICTURE', response.data)
        return response.data
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Il y un problème pour charger une peinture ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  // Créé une peinture et notifie l'utilisateur en cas de succès ou erreur
  createPicture({ commit, dispatch }, picture) {
    return PictureService.postPicture(picture)
      .then(response => {
        commit('ADD_PEINTURE', response.data)
        const notification = {
          type: 'success',
          message: 'Une peinture a été ajoutée !'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        let message = ''
        if (error.response && error.response.status == 409) {
          message = 'La peinture existe déjà'
        } else {
          message = "Erreur à l'ajout d'une peinture : " + error.message
        }
        const notification = {
          type: 'error',
          message: message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  // Met à jour d'une peinture et notifie l'utilisateur en cas de succès ou erreur
  editPicture({ commit, dispatch }, picture) {
    return PictureService.putContact(picture)
      .then(() => {
        commit('EDIT_PICTURE', picture)
        const notification = {
          type: 'success',
          message: 'Une peinture a été modifiée !'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        let message = ''
        if (error.response && error.response.status == 409) {
          message = 'La peinture existe déjà'
        } else {
          message = "Erreur à l'ajout d'une peinture : " + error.message
        }
        const notification = {
          type: 'error',
          message: message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  // Supprime une peinture et notifie l'utilisateur en cas de succès ou erreur
  deletePicture({ commit, dispatch }, pictureId) {
    return PictureService.deleteContact(pictureId.pictureId)
      .then(() => {
        commit('DELETE_PICTURE')
        const notification = {
          type: 'success',
          message: 'Une peinture a été supprimée !'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: "Problème de suppression d'une peinture ! : " + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  // Récupère la peinture précédente et notifie l'utilisateur en cas de succès ou erreur
  fetchPicturePrevious({ commit, dispatch }, id) {
    return PictureService.getPicturePrevious(id)
      .then(response => {
        commit('SET_PICTURE', response.data)
        return response.data
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Il y un problème pour charger une peinture ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  // Récupère la prochaine peinture et notifie l'utilisateur en cas de succès ou erreur
  fetchPictureNext({ commit, dispatch }, id) {
    return PictureService.getPictureNext(id)
      .then(response => {
        commit('SET_PICTURE', response.data)
        return response.data
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'Il y un problème pour charger une peinture ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  }
}

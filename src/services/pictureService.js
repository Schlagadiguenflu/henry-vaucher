/**
 * Projet: Henri Vaucher
 * Auteur : Tim Allemann
 * Date : 06.12.2020
 * Description : Configurations des requêtes API pour les peintures
 * Fichier : picturesService.js
 **/

import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL
const CONTROLLER = '/api/pictures'

export default {
  getPictures() {
    return axios.get(API_URL + CONTROLLER)
  },
  getPicture(id) {
    return axios.get(API_URL + `${CONTROLLER}/${id}`)
  },
  postPicture(picture) {
    return axios.post(API_URL + CONTROLLER, picture)
  },
  putPicture(picture) {
    return axios.put(API_URL + `${CONTROLLER}/${picture.pictureId}`, picture)
  },
  deletePicture(pictureId) {
    return axios.delete(API_URL + `${CONTROLLER}/${pictureId}`)
  }
}

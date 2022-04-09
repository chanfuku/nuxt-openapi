import Vue from 'vue'
import * as ApiClient from '~/api-client'
import { apiClientWrapper } from '~/utils/api'

export const state = () => ({
  images: [],
  leftLine: null,
  rightLines: [],
})

export const mutations = {
  ADD_IMAGE(state, imgSrc) {
    state.images.unshift(imgSrc)
  },
  ADD_LEFT_LINE(state, payload) {
    state.leftLine = { ...payload }
  },
  ADD_RIGHT_LINE(state, payload) {
    state.rightLines.push(payload)
  },
  UPDATE_RIGHT_LINE(state, { index, line }) {
    Vue.set(state.rightLines, index, line)
  }
}

export const actions = {
  async fetchRandomDog ({ commit }) {
    const resJson = await this.$axios.$get('https://dog.ceo/api/breeds/image/random')
    if (resJson.status === 'success') {
      commit('ADD_IMAGE', resJson.message)
    }
  },
  async fetchRandomCat ({ commit }) {
    const resJson = await this.$axios.$get('https://api.thecatapi.com/v1/images/search?format=json')
    commit('ADD_IMAGE', resJson[0].url)
  },
  async addLeftLine ({ commit }, payload) {
    commit('ADD_LEFT_LINE', payload)
  },
  async addRightLine ({ commit }, payload) {
    commit('ADD_RIGHT_LINE', payload)
  },
  async updateRightLine ({ commit }, payload) {
    commit('UPDATE_RIGHT_LINE', payload)
  },
  async fetchPets ({ commit }) {
    const result = await apiClientWrapper().listPets(10)
    console.log(result)
  }
}

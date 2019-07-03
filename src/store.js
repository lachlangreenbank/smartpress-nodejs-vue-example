import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	createResponse: {},
  	balanceResponse: {},
  	sendResponse: {}
  },
  mutations: {
  	setCreateResponse: function  (state, createResponse) {
  		state.createResponse = createResponse
  		console.log(createResponse)
  	},
  	setBalanceResponse: function  (state, balanceResponse) {
  		state.balanceResponse = balanceResponse
  		console.log(balanceResponse)
  	},
  	setSendResponse: function  (state, sendResponse) {
  		state.sendResponse = sendResponse
  		console.log(sendResponse)
  	}
  },
  actions: {
  	create(context, Params) {
	    return new Promise(function(resolve, reject) {
	      axios
	        .post(BASE_URL + '/createAccount', {
            data: {
              ...Params
            }
          })
	        .then(trx => (context.commit('setCreateResponse', trx, { root: true })))
	        .then(resolve(true))
	    })
	  },
	  balance(context, Params) {
	    return new Promise(function(resolve, reject) {
	      axios
	        .post(BASE_URL + '/getBalance', {
            data: {
              ...Params
            }
          })
	        .then(trx => (context.commit('setBalanceResponse', trx, { root: true })))
	        .then(resolve(true))
	    })
	  },
	  send(context, Params) {
	    return new Promise(function(resolve, reject) {
	      axios
	        .post(BASE_URL + '/send', {
            data: {
              ...Params
            }
          })
	        .then(trx => (context.commit('setSendResponse', trx, { root: true })))
	        .then(resolve(true))
	    })
	  }
	}
})

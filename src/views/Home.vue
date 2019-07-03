<template>
  <span>
    <div class="home">
      <img height="100px" alt="Smartpress logo" src="../assets/logo.png">
    </div>

    <div>  
      <h4>Create account</h4>
      <input style="margin:10px;" placeholder="create user_id" v-model="create_user_id" />
      <button @click="createAccount()">Create</button> <br/><br/>
      <span v-if="create.data" :key="create.data.data.user_id">Create: {{create.data.data}}</span><br/><br/><br/>

      <h4>Send asset</h4>
      <input style="margin:10px;" placeholder="sender" v-model="sender" />
      <input style="margin:10px;" placeholder="receiver" v-model="receiver" />
      <input style="margin:10px;" placeholder="amount" type="number" v-model="amount" />
      <button @click="sendAsset()">Send</button> <br/><br/>
      <span v-if="send.data" :key="send.data.data.user_id">Send: {{send.data.data}}</span><br/><br/><br/>

      <h4>Get account balance</h4>
      <input style="margin:10px;" placeholder="Get balance of user_id" v-model="balance_user_id" />
      <button @click="accountBalance()">Balance</button> <br/><br/>
      <span v-if="balance.data" :key="balance.data.data.user_id">Balance: {{balance.data.data}}</span><br/><br/><br/>
    </div>
  </span>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
	  name: 'home',
	  components: {
	  },
	  data () {
	    return {
	    	sender: '',
	    	receiver: '',
	    	amount: '',
	    	balance_user_id: '',
	    	create_user_id: ''
	  	}
	  },
	  methods: {
	  	sendAsset: function () {
	  		console.log('go')
	  		this.$store.dispatch('send', {
	  			sender: this.sender,
	  			receiver: this.receiver,
	  			amount: this.amount
	  		})
	  	},
	  	accountBalance: function () {
	  		console.log('go')
	  		this.$store.dispatch('balance', {
	  			user_id: this.balance_user_id
	  		})
	  	},
	  	createAccount: function () {
	  		console.log('go')
	  		this.$store.dispatch('create', {
	  			user_id: this.create_user_id
	  		})
	  	}
	  },
	  computed: {
	        ...mapState({
	            balance: state => state.balanceResponse,
	            create: state => state.createResponse,
	            send: state => state.sendResponse,
	        })
	    },
	}
</script>

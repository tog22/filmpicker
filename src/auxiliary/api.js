// Based on https://semaphoreci.com/blog/api-layer-react

import axios from 'axios';
import { key_exists } from '@/libraries/tog'


const api = axios.create({
	baseURL: 'https://filmpicker.philosofiles.com/sync/',
	headers: {
		'content-type': 'application/json',
	},
});

// defining a custom error handler for all APIs
const errorHandler = (error) => {
	const statusCode = error.response.status
	
	// logging only errors that are not 401
	if (statusCode && statusCode !== 401) {
		console.error(error)
	}
	
	return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
	return errorHandler(error)
})

function defineCancelApiObject(apiObject) {
	// an object that will contain a cancellation handler
	// associated to each API property name in the apiObject API object
	const cancelApiObject = {}
	
	// each property in the apiObject API layer object
	// is associated with a function that defines an API call
	
	// this loop iterates over each API property name
	Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
		const cancellationControllerObject = {
			controller: undefined,
		}
		
		// associating the request cancellation handler with the API property name
		cancelApiObject[apiPropertyName] = {
			handleRequestCancellation: () => {
				// if the controller already exists,
				// canceling the request
				if (cancellationControllerObject.controller) {
					// canceling the request and returning this custom message
					cancellationControllerObject.controller.abort()
				}
				
				// generating a new controller
				// with the AbortController factory
				cancellationControllerObject.controller = new AbortController()
				
				return cancellationControllerObject.controller
			},
		}
	})
	
	return cancelApiObject
}

const exported_api = {
	get: async function (url, cancel = false) {
		const response = await api.request({
			url: 		url,
			method: 	"GET",
			// ↓ retrieving the signal value by using the property name
			signal: 	cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
		})

		if (response.status !== 200) {
			console.log("Error: " + response.status)
			return false
		}

		if (key_exists('data', response)) {
			// console.log('raw response', response)
			if (key_exists('result', response.data) && response.data.result !== 'success') {
				console.log('API error: ' + JSON.stringify(response.data))
			}
			return response.data
		} else {
			console.log("Error: No 'data' key in API response. response.status is 200 (succesful)")
		}
		
	},
}

const cancelApiObject = defineCancelApiObject(exported_api)

export default exported_api
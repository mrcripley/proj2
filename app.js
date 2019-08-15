

const car = (name,model, owner, year, phone ,image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type ,date})

const cars = [
	car ('Ford', 'Focus', 'Max', 2016, '+37120557857', 'images/focus.png'  ),
	car ('Ford', 'Mondeo', 'Alex', 2016, '+3715255456', 'images/mondeo.jpg'  ),
	car ('Porche', 'Panamera', 'Denis', 2013, '+3715454656', 'images/panamera.jpg'  )
	

]




new Vue({
	el: '#app',
	data: {
		cars : cars,
		car : cars[0],
		logs: [],
		selectedCarIndex :0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false

	},
	methods: {
		selectCar : function(index) {
			this.car = cars[index]
			this.selectedCarIndex = index
		},
		newOrder() {	
			this.logs.push(
			log(`Success order: ${this.car.name} -  ${this.car.model}`, 'ok')
				)

		},
		cancelOrder() {
			this.logs.push(
			log(`Order cancelled: ${this.car.name} -  ${this.car.model}`, 'cnl')
				)


		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars() {
			
			return this.cars.filter(car => {
        		return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1

			})
			
			
		},
		filters: {
			date(value) {
				return value.toLocaleString();


			}
		}
		

		

	}




})
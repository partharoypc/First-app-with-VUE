Vue.createApp({
    data() {
        return {
            goals: [],
            enterValue: ''

        };
    },

    methods: {
        addGoals() {

            this.goals.push(this.enterValue);
            this.enterValue = '';
        }
    }

}).mount('#app');



















// const buttonAdd = document.querySelector('button');
// const inputText = document.querySelector('input');
// const viewList = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputText.value;
//     const viewText = document.createElement('li');
//     viewText.textContent = enteredValue;
//     viewList.appendChild(viewText);
//     inputText.value = '';

// }

// buttonAdd.addEventListener('click', addGoal);
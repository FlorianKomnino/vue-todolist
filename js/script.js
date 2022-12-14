console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            toDoList: [
                {
                action: 'go to school',
                done: false
                },
                {
                action: 'go to the market',
                done: false
                },
                {
                action: 'call girlfriend',
                done: false
                },
                {
                action: 'lunch spaceshuttle',
                done: false
                },
                {
                action: 'solve global warming problem',
                done: false
                }
            ],

            listTitle: 'la tua lista'
        }
    },

    methods: {
        elementRemover(elementToRemove) {
            const itemIndex = this.toDoList.indexOf(elementToRemove);
            if (itemIndex > -1) {
                this.toDoList.splice(itemIndex, 1);
            }
        }
    }

}).mount ('#app')

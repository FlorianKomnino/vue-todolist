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
    }
/*
    method: {
        actionDoneChecker(checkedBoolean, actionDone) {
            if (checkedBoolean === true) {
                actionDone = actionDone
            }
        }
    }
*/

}).mount ('#app')

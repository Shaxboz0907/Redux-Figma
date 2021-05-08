import {createStore} from 'redux';

const reducer = (state=0 , action) => {
    switch(action.type) {
      case 'INC' :
        return state + 1;
      case 'DEC' :
        return state - 1 ;
      case 'RESET':
        return state = 0;
      default:
        return state;
    }
}

const store = createStore(reducer);

const inc = () => ( {type: 'INC'} ) ;
const dec = () => ( {type: 'DEC'} ) ;
const reset = () => ( {type: 'RESET'} ) ;


document.getElementById("plus").addEventListener('click' , () => {
  store.dispatch(inc())
})

document.getElementById("minus").addEventListener('click' , () => {
  store.dispatch(dec())
})

document.getElementById("res").addEventListener('click' , () => {
  store.dispatch(reset())
})

const update = () => {
  document.getElementById('count').innerHTML = store.getState()
}

store.subscribe(update)

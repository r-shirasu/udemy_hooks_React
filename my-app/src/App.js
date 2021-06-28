import React, {useState} from 'react'
import './App.css';

export const  App = (props) => {
const [state, setState] = useState(props)
const {name, price} = state

  return (
    <div className="App">
<p>現在の{name}は、{price}円です。</p>
<button onClick={() => setState({...state, price: price + 1})}>+1</button>
<button onClick={() => setState({...state, price: price - 1})}>-1</button>
<button onClick={() => setState(props)}>Reset</button>
<input value={name} onChange={e => setState({...state, name: e.target.value})}></input>
    </div>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

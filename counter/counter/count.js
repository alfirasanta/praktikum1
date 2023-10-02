// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { count: 0 }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>  
//                 <button onClick={this.decrease}>-1</button>
//                 <button onClick={this.increase}>+1</button>
//             </div>
//         )
//     }

//     increase = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     decrease = () => {
//         this.setState({ count: this.state.count - 1 })
//     }
// }

// const myElement = <Counter />;
// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      React.createElement('div', null,
        React.createElement('h1', null, `${count}`),
        React.createElement('button', { onClick: increment }, '+1'),
        React.createElement('button', { onClick: decrement }, '-1')
      )
    );
  };

  // Render React component to the root element
  ReactDOM.render(
React.createElement(Counter),
document.getElementById('root')
);

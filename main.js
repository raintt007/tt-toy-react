import {createElement, render, Component} from './toy-react.js';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return <div>
            <h1>myComponent</h1>
            <p>{this.state.a.toString()}</p>
            {this.children}
        </div>
    }
}


render(<MyComponent id="a" class="c">
    <div>12345</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)
let RENDER_TO_DOM = Symbol('render to dom');

export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    } 
    appendChild(component) {
        this.children.push(component);
    }
    // rangeAPI
    [RENDER_TO_DOM](range) {
        this.render()[RENDER_TO_DOM](range);
        this._vdom = this._vdom;
        this._vdom[RENDER_TO_DOM](range);
    }

    update() {
        let isSameNode = (oldNode, newNode) => {
            if (oldNode.type !== newNode.type) {
                return false;
            }
            for (let name in newNode.props) {
                if (newNode.props[name] !== oldNode.props[name]) {
                    return false;
                }
            }
            if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
                return false;
            }
            if (newNode.type === "#text") {
                if (newNode.content !== oldNode.content) {
                    return false;
                }
                return true;
            }
        }
        let update = （oldNode, newNode) => {

        }
    }
}

class ElementWrapper extends Component{
    constructor(type) {
        super();
        this.type = type
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(component) {
        this.root.appendChild(component.root);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

class TextWrapper extends component{
    constructor(content) {
        super(content);
        this.root = document.createTextNode(content);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    } 
    appendChild(component) {
        this.children.push(component);
    }
    // rangeAPI
    [RENDER_TO_DOM](range) {
        this.render()[RENDER_TO_DOM](range)
    }
    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }
        return this._root
    }
}

export function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === 'string') {
        e = new ElementWrapper(type);
    } else {
        e = new type;
    }
    for (let p in attributes) {
        e.setAttribute(p, attributes[p])
    }
    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                // text节点
                child = new TextWrapper(child);
            }
            if ((typeof child === 'object') && (child instanceof Array)) {
                insertChildren(child);
            } else {
                e.appendChild(child);
            }
            
        }
    }
    insertChildren(children);
    return e;
}

export function render(component, parentElement) {
    let range = document.createRange();
    range.setStart(parentElement, 0);
    range.setEnd(parentElement, parmentElement.childNodes.length);
    range.deleteContents();
    component[RENDER_TO_DOM](range);
}

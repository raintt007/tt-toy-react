for (let i of [1,2,3,4,5]) {
    console.log(i)
}


function createElement(tagName, attributes, ...children) {
    
    return document.createElement(tagName);

}

window.a = <div id="a" class="c">
    <div></div>
    <div></div>
    <div></div>
</div>
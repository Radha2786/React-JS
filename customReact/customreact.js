function customRender(reactElement,Container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // Container.appendChild(domElement)


    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        
        if(prop==='children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
    
}



// jo humne function m html return kiya h vo react ko kesa dikhta hai 
// jo bhi element hai react usse tree banane ki koshish krta hai 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');
 // now we want there should be some method jo is element ko add kar de root ke andar(basically render)
 customRender(reactElement,mainContainer);
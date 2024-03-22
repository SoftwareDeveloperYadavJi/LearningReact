function coustomerRender(reactElenment, container){
    // const domElemnt = document.createElement(reactElenment.type)
    // domElemnt.innerHTML = reactElenment.children
    // domElemnt.setAttribute('href', reactElenment.props.href)
    // domElemnt.setAttribute('targer',reactElenment.props.trager)

    // container.append(domElemnt)
    const domElemnt = document.createElement(reactElenment.type)
    domElemnt.innerHTML = reactElenment.children
    for( const props in reactElenment.props){
        if(props === "children") return
        domElemnt.setAttribute(props, reactElenment.props[props])

    }
    container.appendChild(domElemnt)
}


const reactElenment = {
    type:'a',
    props:{
        href:"https://google.com",
        trager: "_blank",
    },
    children:"Click me to visit google"
}




const mainCaintainer = document.querySelector('#root')

coustomerRender(reactElenment,mainCaintainer)




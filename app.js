const heading = React.createElement("h1",{id:"heading"},"Hello World From React")
// heading is object 
    const root = ReactDOM.createRoot(document.getElementById("root"))
    //render method is responsible for converting obj to h1 tag 

    const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im heading"),React.createElement("h2",{},"Im heading")]))
        root.render(parent);


import React from "react";
import ReactDOM  from "react-dom/client"
const heading = React.createElement("h1",{id:"heading"},"Hello World From React")
console
// heading is object 
    const root = ReactDOM.createRoot(document.getElementById("root"))
    //render method is responsible for converting obj to h1 tag 

    // const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im heading"),React.createElement("h2",{},"Im heading")]))
      const jsxHeading = (<h1 className="heading">This is 
      rendered in JSX</h1>  )

      const Heading = ()=>(
        <h1>Hellooooooo</h1>
      )
      //component composition
      const Title =()=>(
        <>
        <Heading/>
        {/* {Heading()} */}
        <h1>Title</h1>

        </>
      )
    root.render(<Title/>);

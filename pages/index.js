import React, { useState } from "react";


function CompA() {
  return (
    <div>
      <h1> CompA</h1>
      <p> This is a comp A </p>
      <CompB />
    </div>
  )
}

function CompB() {
  return (
    <div>
      <h1>CompB</h1>
      <p>This is comp B </p>
    </div>
  )
}

class CompC extends React.Component {
  render() {
    return (
      <h1>CompC</h1>
    )
  }
}


function Home() {
  return (
    <div>
      <h1> Hello World</h1>
      <CompA />
      <CompC />
    </div>
  )
}




export default Home;

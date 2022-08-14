import React from 'react'

export const Header = (props) => {
  const nav={
    'backgroundColor': '#4478ad'
  }
  const activeComp=(comp)=>{
    props.activateComponent(comp)
  }
  return (
    <nav className="navbar navbar-light" style={nav}>
      <a className="navbar-brand" href="#/">
        <img src="/logo192.png" width="36" height="36" data-target="#navbarNavAltMarkup" className="d-inline-block align-top mr-2" alt="" />
        React APP
        &nbsp;
        &nbsp;
        &nbsp;
        <h6 className="navbar-brand" href="#/" onClick={()=>activeComp(false)}>Todo</h6>
        &nbsp;
        &nbsp;
        <h6 className="navbar-brand" href="#/"  onClick={()=>activeComp(true)}>Counter</h6>
      </a>
    </nav>
  )
}

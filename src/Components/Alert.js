import React from 'react'

export default function Alert(props) {
  function alertStatus(){
    let msg=`${props.alert.type[0].toUpperCase()+props.alert.type.slice(1).toLowerCase()}`
    return msg
  }
  return (
    props.alert && <div style={{position:"fixed",top:"0vh",zIndex:"101",width:"100%"}} id='alertBox' className={`alert alert-${props.alert.type} d-flex align-items-center" role="alert`}>
       <span><strong>{alertStatus()} : </strong> {`${props.alert.message}`}</span>
    </div>
  );
}
 
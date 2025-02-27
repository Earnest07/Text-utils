import React from 'react'

export default function Alert(props) {
    const capitalize = (string)=>{
        let lower = string.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }

  return (
    
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)} :</strong> {capitalize(props.alert.msg)}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    
  )
}

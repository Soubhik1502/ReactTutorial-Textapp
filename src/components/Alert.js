import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '8vh'}}>
           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{ width: '50vw', marginLeft: '25vw' }} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
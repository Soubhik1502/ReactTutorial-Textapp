import React from 'react'

export default function About(props) {
    return (
        <>

            <div className="card mb-5" style={{height: "20vh", backgroundColor: props.mode==='light'?"white":"#555557", color: props.mode==='light'?"black":"#11caf0"}}>
                <div className="card-header">
                    <h4><strong>About Item 1</strong></h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div className="card my-5" style={{height: "20vh", backgroundColor: props.mode==='light'?"white":"#555557", color: props.mode==='light'?"black":"#11caf0"}}>
                <div className="card-header">
                <h4><strong>About Item 2</strong></h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div className="card mt-5" style={{height: "20vh", backgroundColor: props.mode==='light'?"white":"#555557", color: props.mode==='light'?"black":"#11caf0"}}>
                <div className="card-header">
                <h4><strong>About Item 3</strong></h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>

        </>
    )
}

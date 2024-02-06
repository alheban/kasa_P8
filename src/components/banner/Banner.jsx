import React from "react"



export function Banner ({title, img}) {
    return <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})` }} >
<h1>{title}</h1>
    </div>
}
export default Banner
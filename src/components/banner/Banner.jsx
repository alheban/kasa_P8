import React from "react"



export function Banner ({title, img,ombre, alt}) {
    return <div className="banner" alt={alt} style={{ boxShadow:`${ombre}` ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})` }} >
{title && <h1>{title}</h1>}
    </div>
}
export default Banner


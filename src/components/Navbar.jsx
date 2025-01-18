import { React, useState } from 'react'

export const Navbar = ({setCategory}) => {
    const [activeCat, setActiveCat] = useState("general")
    const categories = [
        {key: "general", label: "General"},
        {key: "business", label: "Business"},
        {key: "sports", label: "Sports"},
        {key: "health", label: "Health"},
        {key: "entertainment", label: "Entertainment"},
        {key: "science", label: "Science"},
        {key: "technology", label: "Technology"},
    ]
    const handleClick = (key) => {
        setCategory(key)
        setActiveCat(key)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand badge bg-danger fs-6" href="#">NEWS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {categories.map((category)=>(
                            <div key={category.key} className={`nav-link ${activeCat === category.key ? "active" : ""}`} onClick={()=>handleClick(category.key)} role='button'>{category.label}</div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

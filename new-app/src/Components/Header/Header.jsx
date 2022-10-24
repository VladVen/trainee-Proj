import './Header.css'

export const Header = () => {
    return(
        <div className="header">
        <span>
            Travling!
        </span>
            <span className="headerNav">
            <a>Product</a>
            <a>Contact Us</a>
            <a>About Us</a>
        </span>
            <span className="btn">
           Sign in
        </span>
        </div>
    )
}
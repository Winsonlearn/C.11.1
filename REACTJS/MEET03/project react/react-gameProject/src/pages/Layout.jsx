import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="https://nomanssky.azureedge.net/app/themes/nomanssky/dist/images/icons/favicon/favicon-16x16.png" />
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
                <title>No Man's Sky</title>
                <link rel="stylesheet" href="/partials_style.css" />
                <link rel="stylesheet" href="/index.css" />
                <link rel="stylesheet" href="/buy-menu.css" />
                <link rel="stylesheet" href="/news-menu.css" />
                <link rel="stylesheet" href="/form.css" />
            </head>
            <body>
                <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="https://nomanssky.azureedge.net/app/themes/nomanssky/dist/images/logo-nms.png" alt="Logo Game" className="logo-image" />
                    </Link>
                    <Link to="/">
                        <box-icon name='joystick-button' color="grey" className="logo-icon"></box-icon>
                    </Link>
                </div>

                <div className="nav-links">
                    <div><Link to="/" className="nav-link nav-link-bold">latest patch notes</Link></div>
                    <Link to="/buy-now" className="nav-link">buy</Link>
                    <Link to="/news" className="nav-link">release log</Link>
                    <Link to="/news" className="nav-link">news</Link>
                    <Link to="/blogs/create" className="nav-link">create</Link>
                </div>
                </nav>

                <Outlet />

                <footer className="footer">
                <div className="footer-links">
                    <Link to="#">CONTACT</Link>
                    <Link to="#">ABOUT</Link>
                    <Link to="#">NEWS</Link>
                    <Link to="#">TWITCH DROPS</Link>
                    <Link to="#">HELP CENTRE</Link>
                    <Link to="#">PRIVACY POLICY</Link>
                    <Link to="#">END USER LICENCE AGREEMENT</Link>
                </div>
                </footer>
            </body>

        </>
    )
}

export default Layout;
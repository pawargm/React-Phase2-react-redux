import { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <span className="navbar-brand">Asset Manager</span>
                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/getBuyAsset">AssetThatLike</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/getSellAsset">AssetThatSell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tstCom">Test</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createAsset">PublishAssetForSell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>



                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
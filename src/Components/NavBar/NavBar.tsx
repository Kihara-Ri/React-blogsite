import "./NavBarStyles.css"
import "../../assets/iconfont.css"

function NavBar() {
  return (
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <a href="index.html"><i className="iconfont icon-zhuye"></i> Home</a>
            <a href="#"><i className="iconfont icon-tools"></i>Tools</a>
            <a href="#"><i className="iconfont icon-info-fill"></i>Info</a>
          </div>
          <div className="nav-center">
            <a href="#"><i className="iconfont icon-search"></i>SearchBar</a>
          </div>
          <div className="nav-right">
            <a href="#"><i className="iconfont icon-archive"></i>Archives</a>
            <a href="#"><i className="iconfont icon-categoryselected"></i>Categories</a>
            <a href="#"><i className="iconfont icon-personal"></i>About</a>
          </div>
        </div>
      </nav>
  )
}

export default NavBar;
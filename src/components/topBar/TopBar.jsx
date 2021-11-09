import "./topbar.css"
export default function TopBar() {
    return (
        <div className = "top">
            <div className="topLeft pointer"> BIBLIOMANCER </div>
            <div className="topCenter"></div>
            <div className="topRight">
            <i class="pointer icon fas fa-search"></i>
            </div>
            <div className="topRight"> <i class="pointer icon fab fa-instagram"></i></div>
            <div className="topRight"><i class="pointer icon fab fa-twitter"></i></div>
           
        </div>
    )
}

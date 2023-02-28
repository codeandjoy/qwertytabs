import useDownload from "../hooks/useDownload";
import Icon from "../Icon/Icon";
import NavBtn from "../NavBtn/NavBtn";
import "./css/Nav.css";

const Nav = () => {
    const [download] = useDownload();

    return (
        <div id="nav">
            <div className="nav-logo"></div>

            <div className="nav-buttons">
                <NavBtn onClick={ download }>
                    <Icon type='download'/>
                </NavBtn>
            </div>
        </div>
    );
}

export default Nav;
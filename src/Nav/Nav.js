import { motion } from 'framer-motion';
import { fadeIn } from '../Animations/Animations';
import useDownload from "../hooks/useDownload";
import Icon from "../Icon/Icon";
import NavBtn from "../NavBtn/NavBtn";
import "./css/Nav.css";

const Nav = () => {
    const [download] = useDownload();

    return (
        <motion.div
            variants={ fadeIn }
            initial='hidden'
            animate='show'

            id="nav">
            <div className="nav-logo"></div>

            <div className="nav-buttons">
                <NavBtn onClick={ download }>
                    <Icon type='download'/>
                </NavBtn>
            </div>
        </motion.div>
    );
}

export default Nav;
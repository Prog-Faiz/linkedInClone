import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import "../styles/Header.css";
import { auth } from "./firebase";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return ( 
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <Search />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={Home} title="Home" />
                <HeaderOptions Icon={SupervisorAccount} title="My Network" />
                <HeaderOptions Icon={BusinessCenter} title="Jobs" />
                <HeaderOptions Icon={Chat} title="Messaging" />
                <HeaderOptions Icon={Notifications} title="Notifications" />
                <HeaderOptions
                    avatar={true}
                    title="Me" 
                    onClick={logoutOfApp}/>
            </div>
        </div>
     );
}
 
export default Header;
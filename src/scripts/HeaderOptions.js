import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/HeaderOptions.css";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser);

    return ( 
        <div className="headerOptions" onClick={onClick}>
            { Icon && <Icon className='headerOptions__icon' />}
            { avatar && 
                <Avatar className="headerOptions__icon" src={user?.photoUrl}>
                    { user?.email[0] }
                </Avatar>
            }
            <h3 className="headerOptions__title">{ title }</h3>
        </div>
    );
}
 
export default HeaderOptions;
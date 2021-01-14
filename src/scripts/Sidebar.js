import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    );

    return ( 
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1609693117459-886fbe8443ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" alt=""/>
                <Avatar src={ user.photoUrl } className="sidebar__avatar">
                    { user.email[0] }
                </Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2556</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2006</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItem("reactjs") }
                { recentItem('programming') }
                { recentItem('softwareengineering') }
                { recentItem('design') }
                { recentItem('developer') }
            </div>
        </div>
     );
}
 
export default Sidebar;
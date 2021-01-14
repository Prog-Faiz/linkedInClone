import { FiberManualRecord, Info } from "@material-ui/icons";
import "../styles/Widgets.css";

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{ heading }</h4>
                <p>{ subtitle }</p>
            </div>
        </div>
    )

    return ( 
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            { newsArticle("PAPA REact is back", "Top news - 999 readers") }
            { newsArticle("PAPA REact is back", "Top news - 999 readers") }
            { newsArticle("PAPA REact is back", "Top news - 999 readers") }
            { newsArticle("PAPA REact is back", "Top news - 999 readers") }
            { newsArticle("PAPA REact is back", "Top news - 999 readers") }
        </div>
     );
}
 
export default Widgets;
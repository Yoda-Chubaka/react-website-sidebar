import "./Sidebar.css";
import materials from "../../data/materials.json";
import pages from "../../data/pages.json";
import Topics from "../../components/Topics";

function Sidebar() {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    {materials.map((item, idx) => 
                        <li key={idx}>
                            <a href={item.href}>{item.title}</a>
                    </li>)}
                </ul>                
            </nav>
            <div>
                <h4>My projects:</h4>
                <Topics data={pages} />
            </div>
        </div>
    )
}

export default Sidebar;
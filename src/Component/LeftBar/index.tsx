
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
const LeftBar = () => {
    return (
        <div style={{position:'relative',bottom:'350px',left:'400px'}}className="bg-transparent">
            <button className="bg-transparent pl-[100px]"><img src={img1}/></button><br/>
            <button className="bg-transparent pl-[100px]"><img src={img2}/></button><br/>
            <button className="bg-transparent pl-[100px]"><img src={img3}/></button><br/>
            <button className="bg-transparent pl-[100px]"><img src={img4}/></button>
        </div>
    );
};

export default LeftBar;

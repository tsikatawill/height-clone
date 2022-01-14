import React from "react";
import "../../styles/TCV.min.css";
import TasksImg from "../../images/tasks--light.png";
import ChatImg from "../../images/chat--light.png";
import VisualizationsImg from "../../images/marketing--light.png";

const TCV = () => {
  const [selectedImage, setSelectedImage] = React.useState(TasksImg);
  const [selectedText, setSelectedText] = React.useState('Record what needs to get doing and key details like who’s taking care of what, by when');
  const handleSelectedBtn = (e) => {
    const classesArray =  e.target.classList;
    if (classesArray.contains("chat")) {
      setSelectedImage(ChatImg);
      setSelectedText("Chat text lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, praesentium?");
      console.log("chat");
    } 
    if (classesArray.contains("tasks")) {
      setSelectedImage(TasksImg);
      setSelectedText("Record what needs to get doing and key details like who’s taking care of what, by when");
      console.log("tasks");
    } 
    if (classesArray.contains("visualizations")) {
      setSelectedImage(VisualizationsImg);
      setSelectedText("Visualizations text lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, praesentium?");
      console.log("visualizations");
    }
  };

  return (
    <section className="companies" id="companies">
      <div className="container br-3 py-2 py-md-5" style={{background: "#ccc"}}>
        <div className="selectors d-flex align-items-center justify-content-center" onClick={(e) => {
              handleSelectedBtn(e);
            }}>
              
          <button
            className="selector tasks btn"
          >
            Tasks
          </button>
          <button
            className="selector chat mx-3 btn"
          >
            Chat
          </button>
          <button
            className="selector visualizations btn"
          >
            Visualizations
          </button>
        </div>
        <div className="display-img my-3 mx-5 text-center">
          <img className="br-2 img-fluid" src={selectedImage} alt="display" style={{boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.2)'}} />
          <p className="mt-3">
            {selectedText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TCV;

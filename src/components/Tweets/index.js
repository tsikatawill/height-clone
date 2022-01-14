import React from "react";
import "../../styles/Teams.min.css";
import Engineering from "../../images/engineering--light.png";
import Product from "../../images/product--light.png";
import Design from "../../images/design--light.png";
import Marketing from "../../images/marketing--light.png";
import Finance from "../../images/finance--light.png";
import Agencies from "../../images/agencies--light.png";
import Recruiting from "../../images/recruiting--light.png";
import Support from "../../images/support--light.png";
import It from "../../images/it--light.png";
import Hr from "../../images/hr--light.png";
import {
  FaGithub,
  FaBug,
  FaRocket,
  FaCalendar,
  FaBeer,
  FaComments,
  FaFile,
  FaHourglass,
  FaRedo,
  FaLock,
  FaGoogle,
  FaUpload,
} from "react-icons/fa";

const Teams = () => {
  const defaultDC = {
    para1: {
      icon: <FaGithub />,
      title: "Github & GitLab Integration",
      text: "Keep tasks up-to-date, automatically by linking tasks to commits, branches and pull requests",
    },
    para2: {
      icon: <FaBug />,
      title: "Issue tracking",
      text: "Track and prioritize bugs to make sure they get fixed fast",
    },
    para3: {
      icon: <FaRocket />,
      title: "Planning",
      text: "Organize work into sprints, milestones, releases, etc to keep teams on the same page",
    },
    rightImg: Engineering,
  };
  const [containerbg, setContainerbg] = React.useState("#eee");
  const [selectedBtn, setSelectedBtn] = React.useState("engineering");
  const [displayContent, setDisplayContent] = React.useState(defaultDC);

  const handleSelectedBtn = (e) => {
    const calendar = {
      icon: <FaCalendar />,
      title: "Calendar",
      text: "Plan ahead for key launches, events, and dates.",
    };
    const contextDiscuss = {
      icon: <FaComments />,
      title: "Discuss in context",
      text: "Keep other key stakeholders involved and in the loop with real-time chat.",
    };
    const executeReport = {
      icon: <FaFile />,
      title: "Execute & reporting",
      text: "Track team velocity over time with smart filters and lists.",
    };
    const projectPlanning = {
      icon: <FaHourglass />,
      title: "Project planning",
      text: "Communicate progress and build momentum with each step of the way.",
    };
    const uploadClients = {
      icon: <FaUpload />,
      title: "Share with clients",
      text: "Invite clients to collaborate with you, stay updated on progress, and chat about projects.",
    };
    const inboundRequests = {
      icon: <FaRocket />,
      title: "Inbound requests",
      text: "Track requests from other teams in one centralized place to triage and plan around.",
    };
    const joinConversation = {
      icon: <FaComments />,
      title: "Join the conversation",
      text: "Discuss key product decisions and details with real-time chat.",
    };
    const loop = {
      icon: <FaRedo />,
      title: "Stay in the loop",
      text: "Collaborate with engineering and design to organize product launches.",
    };
    const recurringTasks = {
      icon: <FaRedo />,
      title: "Recurring tasks",
      text: "Set up tasks that repeat at a set frequency or interval.",
    };
    const googleSheets = {
      icon: <FaGoogle />,
      title: "Google Sheets integration",
      text: "Sync task data in your spreadsheets that stays dynamically updated.",
    };
    const privateTasks = {
      icon: <FaLock />,
      title: "Private tasks",
      text: "Plan and work on sensitive tasks with only the people who need to be involved.",
    };

    if (e.target.classList.contains("engineering")) {
      setContainerbg("#46bbff31");
      setSelectedBtn("engineering");
      setDisplayContent(defaultDC);
    } else if (e.target.classList.contains("marketing")) {
      setContainerbg("#46ff9931");
      setSelectedBtn("marketing");
      setDisplayContent({
        para1: calendar,
        para2: contextDiscuss,
        para3: loop,
        rightImg: Marketing,
      });
    } else if (e.target.classList.contains("product")) {
      setContainerbg("#46e3ff31");
      setSelectedBtn("product");
      setDisplayContent({
        para1: projectPlanning,
        para2: contextDiscuss,
        para3: executeReport,
        rightImg: Product,
      });
    } else if (e.target.classList.contains("design")) {
      setContainerbg("#f046ff31");
      setSelectedBtn("design");
      setDisplayContent({
        para1: uploadClients,
        para2: inboundRequests,
        para3: joinConversation,
        rightImg: Design,
      });
    } else if (e.target.classList.contains("finance")) {
      setContainerbg("#ff6b4631");
      setSelectedBtn("finance");
      setDisplayContent({
        para1: recurringTasks,
        para2: googleSheets,
        para3: privateTasks,
        rightImg: Finance,
      });
    } else if (e.target.classList.contains("agencies")) {
      setContainerbg("#46fff631");
      setSelectedBtn("agencies");
      setDisplayContent({
        para1: uploadClients,
        para2: projectPlanning,
        para3: calendar,
        rightImg: Agencies,
      });
    } else if (e.target.classList.contains("it")) {
      setContainerbg("#46bbff31");
      setSelectedBtn("it");
      setDisplayContent({
        para1: inboundRequests,
        para3: executeReport,
        para2: loop,
        rightImg: It,
      });
    } else if (e.target.classList.contains("recruiting")) {
      setContainerbg("#46e3ff31");
      setSelectedBtn("recruiting");
      setDisplayContent({
        para1: loop,
        para2: executeReport,
        para3: contextDiscuss,
        rightImg: Recruiting,
      });
    } else if (e.target.classList.contains("support")) {
      setContainerbg("#ffe34631");
      setSelectedBtn("support");
      setDisplayContent({
        para1: recurringTasks,
        para2: googleSheets,
        para3: privateTasks,
        rightImg: Support,
      });
    } else if (e.target.classList.contains("hr")) {
      setContainerbg("#7bff4631");
      setSelectedBtn("hr");
      setDisplayContent({
        para1: uploadClients,
        para2: projectPlanning,
        para3: calendar,
        rightImg: Hr,
      });
    } else {
      setContainerbg("#eee");
      setDisplayContent(defaultDC);
    }
  };

  return (
    <section className="teams" id="teams">
      <div
        className="container br-3 p-4 my-5 p-md-5"
        style={{ background: containerbg }}
      >
        <div className="header">
          <h2>Built for all teams</h2>
          <p>Height is where cross-functional collaboration happens.</p>
        </div>
        <div
          className="selectors py-1 d-flex align-items-center"
          onClick={(e) => handleSelectedBtn(e)}
        >
          <button active className="selector engineering btn">
            Engineering
          </button>
          <button className="selector marketing btn">marketing</button>
          <button className="selector product btn">product</button>
          <button className="selector design btn">design</button>
          <button className="selector finance btn">finance</button>
          <button className="selector agencies btn">agencies</button>
          <button className="selector it btn">it</button>
          <button className="selector recruiting btn">recruiting</button>
          <button className="selector support btn">support</button>
          <button className="selector hr btn">hr</button>
        </div>
        <div className="display my-3">
          <DisplayDiv {...displayContent} />
        </div>
      </div>
    </section>
  );
};
const DisplayDiv = ({ para1, para2, para3, rightImg }) => {
  return (
    <div
      className="d-md-flex  justify-content-between"
      style={{ width: "100%" }}
    >
      <div>
        <ul style={{ margin: 0, padding: 0, width: "100%" }}>
          <li className=" d-sm-flex text-center text-sm-start">
            <div className="icon">{para1.icon}</div>
            <div className="text px-3">
              <strong>{para1.title}</strong>
              <p>{para1.text}</p>
            </div>
          </li>
          <li className="d-sm-flex text-center text-sm-start">
            <div className="icon">{para2.icon}</div>
            <div className="text px-3">
              <strong>{para2.title}</strong>
              <p>{para2.text}</p>
            </div>
          </li>
          <li className="d-sm-flex text-center text-sm-start">
            <div className="icon">{para3.icon}</div>
            <div className="text px-3">
              <strong>{para3.title}</strong>
              <p>{para3.text}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-3 mt-md-0 w-100">
        <img
          src={rightImg}
          alt="some"
          className="img-fluid"
          style={{ boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)" }}
        />
      </div>
    </div>
  );
};

export default Teams;

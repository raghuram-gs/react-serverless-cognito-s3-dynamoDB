import React, {useState} from "react";
import "./TopicCard.css";
import TopicDetailsModal from "./TopicDetailsModal";

export default function TopicCard({topic, description}){
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <div className="card" onClick={() => setModalShow(true)}>
            <h1>{topic}</h1>
            <p>{description}</p>
        </div>

        <TopicDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        topic={topic}
        description={description}
        />
        </>
    );
}

import React from "react";
import MacList from "../Component/MacList/MacList";

function Home() {
    return (
        <div className="home">
            <h1>История компьтеров Macintosh</h1>
            <div className="container">
            <p>Свое начало Макинтош берет с 1984 года. Тогда был произведен первый персональный компьтер Apple - Macintosh 128K</p>
            <MacList />
            </div>
        </div>
    )
}

export default Home;
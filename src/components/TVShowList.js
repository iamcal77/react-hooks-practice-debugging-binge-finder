import React from "react";
import TVShow from "./TVShow"; // Import the TVShow component

function TVShowList(props) {
  // Your TVShowList component code
  return (
    <div className="TVShowList">
      {props.shows.map((s) => (
        <TVShow
          key={s.id}
          image={{ medium: s.image }} // Replace with the correct image property
          selectShow={() => props.selectShow(s)} // Replace with the correct selectShow function
        />
      ))}
    </div>
  );
}

export default TVShowList;

import React, { useState } from "react";
import Episode from "./Episode";
function SelectedShowContainer(props) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (!!props.episodes) {
      let seasons = [...new Set(props.episodes.map((e) => e.season))];

      return seasons.map((s) => (
        <option value={s} key={s}>
          Season {s}
        </option>
      ));
    }
    return null;
  }

  function mapEpisodes() {
    return props.episodes.map((e) => {
      if (e.season === selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
      return null;
    });
  }

  function handleSelectionChange(e) {
    setSelectedSeason(parseInt(e.target.value)); // Use parseInt to convert string to integer
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes()}
    </div>
  );
}

export default SelectedShowContainer;

// Remove the attempt to modify Array prototype

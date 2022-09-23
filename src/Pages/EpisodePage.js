import React from 'react';
import { useParams } from "react-router-dom";
import EpisodeCard from '../Components/EpisodeCard';
import { useGetEpisodeQuery} from "../features/TvShows/apiSlice";
import "../spinner/spinner.css";

function EpisodePage () {

  const id = useParams().id

  const {
    data: episodeData,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEpisodeQuery(id)

  let content;
  if (isLoading) {
    content = <p>loading...</p>
  } else if (isSuccess) {
    content = episodeData;
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <>
      {
        isSuccess && <EpisodeCard episode={episodeData}/>
      }
      {
        isLoading && 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
      {
        isError && 
        <p>There is Some Problems about {content}</p>
      }
    </>
  )
}

export default EpisodePage

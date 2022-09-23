import React from 'react';
import TvShowsDetailCard from '../Components/TvShowsDetailCard';
import { useParams } from "react-router-dom";
import { useGetTvShowsDetailQuery} from "../features/TvShows/apiSlice";
import "../spinner/spinner.css";

function ShowDetailPage() {

  const id = useParams().id;

  const {
    data: tvShowDetail,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTvShowsDetailQuery(id)

  let content;
  if (isLoading) {
    content = <p>loading...</p>
  } else if (isSuccess) {
    content = tvShowDetail;
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <>
      {
        isSuccess && <TvShowsDetailCard showData={tvShowDetail}/>
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

export default ShowDetailPage
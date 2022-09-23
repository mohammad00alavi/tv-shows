import {React} from 'react';
import { useGetTvShowsQuery } from "../features/TvShows/apiSlice";
import TvShowsCard from '../Components/TvShowsCard';
import {Container} from "./TvShowPage.style";
import "../spinner/spinner.css";


function TvShowPage () {

  const {
    data: tvShows,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTvShowsQuery()

  let content;
  if (isLoading) {
    content = <p>loading...</p>
  } else if (isSuccess) {
    content = tvShows;
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Container>
      {
        isSuccess && 
        content.map(item => <TvShowsCard showData={item} key={item.id}/>)
      }
      {
        isLoading && 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
      {
        isError && 
        <p>There is Some Problems about {content}</p>
      }
    </Container>
  )
}

export default TvShowPage

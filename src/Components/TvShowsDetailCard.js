import React from 'react';
import { useNavigate,useParams,Link} from 'react-router-dom';
import { useGetEpisodesAllQuery} from "../features/TvShows/apiSlice";
import {CardContainer,ShowImage,ShowTitle,ShowDescription,EpisodesContainer,TvShowInfo,TvShowInfoContainer,EpisodeText,Home} from "./TvShowsDetailCard.style";

function TvShowsDetailCard(props) {

  const navigate = useNavigate();
  const id = useParams().id;
  const {
      data: episodes,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetEpisodesAllQuery(id)

    let content;
    if (isLoading) {
      content = <p>loading...</p>
    } else if (isSuccess) {
      content = episodes;
    } else if (isError) {
      content = <p>{error}</p>
    }

    return (
    <CardContainer>
        <TvShowInfoContainer>
          <ShowImage src={props.showData.image.medium} alt={props.showData.name}/>
          <TvShowInfo>
            <ShowTitle>{props.showData.name}</ShowTitle>
            <ShowDescription>
                <div dangerouslySetInnerHTML={{__html: `${props.showData.summary}`}}/>          
            </ShowDescription>
            <Home onClick={() => navigate(-1)} >
              Home
            </Home>
          </TvShowInfo>
        </TvShowInfoContainer>
        <EpisodesContainer>
            <EpisodeText>
              Episodes:
            </EpisodeText>
            <ul>
              {isSuccess && episodes.map(item => <Link to={`/show/${props.showData.id}/episode/${item.id}`} key={`${item.id}-link`}><li key={item.id}>{item.name}</li></Link>)}
            </ul>
        </EpisodesContainer>
    </CardContainer>
  )
}

export default TvShowsDetailCard

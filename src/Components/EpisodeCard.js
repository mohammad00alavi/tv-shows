import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Home,Back} from "./TvShowsDetailCard.style";
import {ButtonContainer,EpisodeContainer,EpisodeImage,EpisodeInfo,EpisodeTitle,EpisodeDescription} from "./EpisodeCard.style";


function EpisodeCard(props) {

  const navigate = useNavigate();

    return (
      <EpisodeContainer>
        <EpisodeImage src={props.episode.image.original} alt={props.episode.name}/>
        <EpisodeInfo>
          <EpisodeTitle>{props.episode.name}</EpisodeTitle>
          <EpisodeDescription>
              <div dangerouslySetInnerHTML={{__html: `${props.episode.summary}`}}/>          
          </EpisodeDescription>
          <ButtonContainer>
            <Home onClick={() => navigate(-2)} >
              Home
            </Home>
            <Back onClick={() => navigate(-1)} >
              Back
            </Back>
          </ButtonContainer>
        </EpisodeInfo>
      </EpisodeContainer>
  )
}

export default EpisodeCard
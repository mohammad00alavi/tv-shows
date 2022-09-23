import {React} from 'react';
import { Link } from 'react-router-dom';
import {CardContainer,ShowImage,ShowTitle,ShowDescription,ShowInfo} from "./TvShowsCard.style"

function TvShowsCard(props) {

  return (
    <CardContainer>
      <Link to={`show/${props.showData.id}`}>
        <ShowImage src={props.showData.image.medium} alt={props.showData.name}/>
        <ShowInfo>
          <ShowTitle>
            {props.showData.name}
          </ShowTitle>
          <ShowDescription>
            <div dangerouslySetInnerHTML={{__html: `${props.showData.summary.slice(0,260)}`}}/>  
            <span>Read More</span>        
          </ShowDescription>
        </ShowInfo>
      </Link>
    </CardContainer>
  )
}

export default TvShowsCard
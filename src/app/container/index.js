import React from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";

//  components
import Button from "../component/Button";
import SearchInput from "../component/SearchBox";
import Card from "../component/Card";
//  action
import ActionCreator from "../action/actionCreator";
import bgImage from "../images/maxresdefault.jpg";

const HomeContainer = styled.div`
  padding: 10px;
  text-align: center;
  background-color: transparent;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`
const SearchContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;
`
const Container = styled.div`
  margin: 0px;
`

function CheckContainer () {
  
  const dispatch = useDispatch();
  const [searchTerm, setTerm] = React.useState("");
  const [player, setPlayer] = React.useState("pause");
  const [audio, setAudio] = React.useState("");
  React.useEffect(() => {
    dispatch(ActionCreator.listRequest("latest"))
  }, [dispatch])

  const data = useSelector(state => state.list);
  const handleSearch = (e) => {
    setTerm(e.target.value)
  }

  const submitSearch = () => {
    dispatch(ActionCreator.listRequest(searchTerm))
  }

  React.useEffect(() => {
    const firstSong = data.list?.results?.find(song => song.kind === "song");
    setAudio(firstSong?.previewUrl)
  }, [data.list])

  const handlePlay = (song, seq) => {
    console.log('song', song, seq)
    if(player === "pause") {
      setPlayer("play")
    } else {
      setPlayer("pause");
      setAudio(song.previewUrl);
    }
  }
  return (
    <HomeContainer>
      <SearchContainer>
        <Container>
          <SearchInput placeholder="Search your song" type="text" value={searchTerm} onChange={(e) => handleSearch(e)} />
        </Container>
        <Container>
          <Button onClick={submitSearch}>Search</Button>
        </Container>
        
      </SearchContainer>
        <Container>
          {data.error?
          <p>{data.errorMessage}</p> :
          <div>
          {data.parseListLoaded ? data.list.results.map((result, i) => (
            <Card 
            key={i}
            seq={i+1}
            url={result.artworkUrl100}
            name={result.collectionName}
            artistName={result.artistName}
            handlePlay={handlePlay}
            player={player}
            result={result}
            audio={audio}
          />)) : <div>Loading....</div>}
          </div>}
        </Container>
    </HomeContainer>
  )
}
export default CheckContainer;

import React, {useState, useEffect} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 3px;
  background: white;
  margin: 10px 0px;
  padding: 5px 10px;
  display: flex;
  color: #fff;
  opacity: 1;
  background-image: linear-gradient(to right, teal, grey);
  &:hover {
    opacity: 0.5;
  }
`
const Seq = styled.div`
  margin: 20px 20px 20px 10px;
  display: flex;
  align-items: center;
`

const ImageContainer = styled.img`
  border-radius: 8px;
  height: max-content;
  margin: inherit;
`
const ContentContainer = styled.div`
  width: 70%; 
  display: table-column;
  padding: 0px 20px;
  margin: 0px 20px;
`
const PlayContent = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
`

const useAudio = url => {  
  const [audio] = useState(new Audio(url));
  console.log('sudion new url', url);
  
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export default function Card (props) {
  const {name, artistName, seq, url, result, handlePlay, player, audio} = props;
  
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  const [playing, toggle] = useAudio(audio);
  return (
    <CardContainer>
      <Seq>{seq}</Seq>
      <ImageContainer src={url} alt={url} />
      <ContentContainer>
        <p>{name}</p>
        <p>{artistName}</p>
      </ContentContainer>
      {result.kind === "song" && 
      <PlayContent>
        <p>{result.trackTimeMillis && millisToMinutesAndSeconds(result.trackTimeMillis)}</p>
        <div onClick={() => {handlePlay(result, seq); toggle();}}>{player === "play" && audio === result.previewUrl && playing ? "Pause" : "Play"}</div>
      </PlayContent>}
    </CardContainer>
  )

}

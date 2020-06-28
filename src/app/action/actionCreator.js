import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  listRequest: ["searchTerm"],
  listSuccess: ["songList"],
  listFailure: ["error"],
  playSong:["url"]
});

export default Creators;

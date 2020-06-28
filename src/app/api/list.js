import { create } from 'apisauce'
 
// define the api
const api = create({
  baseURL: 'https://itunes.apple.com/',
})

export const getListApi = (term) => {
  const response =  api.get(`/search?term=${term}`);
  return response;
}




import axios from "axios";
import {API_URL} from '@env'
import { DrawerContentScrollView } from "@react-navigation/drawer";
 
const readData = async () => {
  return await axios.get(`${API_URL}/jwPersonal/jsonapi/node/publicaciones?include=field_publicaciones_img`, {
    "headers": { 'Content-Type': 'application/json' }
  }).then((res) => {
    let obj = []
    res.data.data.forEach((element, index) => {
      const publication = {
        id: element.id,
        title: element.attributes.title,
        questions: element.attributes.field_publicaciones_preg_res,
        img: res.data.included
      }
      obj.push(publication)
    });   
    return obj
  }).catch(function (error) {
    console.log(error)
  });

}

// const content = {
//   id: el.id,
//   title: el.attributes.title,
//    
// }
// obj.push(content)
const readChristianMinistry = async () => {
  return await axios.get(`${API_URL}/jwPersonal/jsonapi/node/vida_y_ministerio_cristianos?include=field_field_topic_treasure_img`, {
    "headers": {'Content-Type': 'application/json'}
  }).then((data)=> {
    let obj;
    let topic1;
    let img = data.data.included[0].attributes.uri.url       
    data.data.data.forEach((data)=>  {
    obj = JSON.parse(data.attributes.field_findig_pearls)
    topic1 = JSON.parse(data.attributes.field_hidden_pearls_topic_1)
  })
 
  return [obj,topic1,img]
  }).catch(function (error) {
      console.log(error.config);
  });
  
}

const watchTowerTopics = async () => {
   return await axios.get(`${API_URL}/jwPersonal/jsonapi/node/revista_atalaya`, {
    "headers": {'Content-Type': 'application/json'}
   }).then((data)=> {
    let obj;
    data.data.data.forEach((questions)=> {
     obj = questions.attributes.field_atalaya_preg_resp
    })
     return JSON.parse(obj)
   }).catch(function(err) {
     console.log(err)
   })
}





export { readData, readChristianMinistry, watchTowerTopics }

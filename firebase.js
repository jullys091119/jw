

import axios from "axios";
import {API_URL} from '@env'
import { useEffect } from "react";


const readData = async () => {
  return await axios.get(`${API_URL}/jsonapi/node/publicaciones?include=field_publicaciones_img`, {
    "headers": { 'Content-Type': 'application/json' }
  }).then((res) => {
  
    let obj = []
    let question= []
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
      console.log(error.config);
  })
}

const readChristianMinistry = async () => {
  return await axios.get(`${API_URL}/jsonapi/node/vida_y_ministerio_cristianos?include=field_field_topic_treasure_img`, {
    "headers": {'Content-Type': 'application/json'}
  }).then((data)=> {
    let obj = []
    let questions = []
    data.data.data.forEach((el,index)=> {
      const content = {
        id: el.id,
        title: el.attributes.title,
        questions: el.attributes.field_search_pearls_question_1,
        img: data.data.included[0].attributes.uri.url      
      }
      obj.push(content)
    })
    return obj
  }).catch(function (error) {
      console.log(error.config);
    });
  
}



export { readData, readChristianMinistry }

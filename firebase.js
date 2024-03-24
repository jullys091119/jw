

import axios from "axios";
import {API_URL} from '@env'

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

const readChristianMinistry = async () => {
  let obj = []
  return await axios.get(`${API_URL}/jwPersonal/jsonapi/node/vida_y_ministerio_cristianos?include=field_field_topic_treasure_img`, {
    "headers": {'Content-Type': 'application/json'}
  }).then((data)=> {   
    const value = data.data.included
    data.data.data.forEach((data,index)=>  {
    const  ministry = {
      topic1: data.attributes.field_hidden_pearls_topic_1,
      pearls: data.attributes.field_findig_pearls,
      img: value[index].attributes.uri.url
    }
    obj.push(ministry)
  })
 
  return obj
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


const studyBook = async () => {
  return await axios.get(`${API_URL}/jwPersonal/jsonapi/node/estudio_del_libro?include=field_libro_img_portada` , {
    "headers": {'Content-Type': 'application/json'}
  }).then((data)=> {
    const dataBook = data.data.data
    let obj = []
    dataBook.forEach((el)=> {
      const book = {
        title: el.attributes.title,
        titleChapter: el.attributes.field__libro_titulo,
        chapter: el.attributes.field_libro_capitulo,
        subtitle: el.attributes.field_libro_subtitulo,
        reference: el.attributes.field_libro_referencia,
        img: data.data.included[0].attributes.uri.url,
        questions: JSON.parse(el.attributes.field_libro_preg_res)
      }
      obj.push(book)
    })
   return obj
  }).catch((error)=> {
    console.log(error)
  })
}






export { readData, readChristianMinistry, watchTowerTopics, studyBook }

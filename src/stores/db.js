import {ref,watchEffect} from 'vue';
import api from '../api.js';
//states

const db = ref(JSON.parse(localStorage.getItem('db')));

if(db.value == null){
    db.value = await getData();
}

watchEffect(()=>{
    localStorage.setItem('db', JSON.stringify(db.value));
});

//actions
async function getData(){
    try{
        const {data} = await api.get('/countries');
        return data;
    }catch(e){
        console.error(e);
    }
}
//getters



export default db;



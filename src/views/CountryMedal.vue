<script setup>
import {computed} from 'vue';
import db from '../stores/db.js';
import NavBack from "../components/NavBack.vue";
import {useRoute} from 'vue-router';
//states
const route = useRoute();
const countryName = route.params.name;
const medalName = route.params.medal;
const countries = computed(()=>{
  let data = db.value;
  let c = [];
  for(let d of data){
    c.push(d);
  }
  return c;
});
const country = computed(()=>{
  return countries.value.find((c)=> c.name === countryName);
});

const medalCount = computed(()=>{
  let c = 0;
  for(let i of Object.keys(country.value.medals)){
    if(i === medalName){
      c = country.value.medals[i];
      return c;
    }
  }
});
</script>

<template>
  <!--    top nav -->
  <NavBack :prevPage="'CountryInfo'" :prevParams="'name:' + countryName">
  </NavBack>

  <!--  country info section-->
  <section aria-label="Country's Medals Section" >
    <h1 class="text-center mb-1-2 text-primary">{{countryName}}</h1>
    <img :src="'/src/assets/images/flags/' + countryName.toString().split(' ').join('') + '.png'" alt="Flag of the country" class="img-fluid mx-auto d-block mb-2">

    <div class="text-center text-primary text-uppercase">{{medalName}} medals</div>
    <strong class="text-center text-primary text-large d-block mb-2">{{medalCount}}</strong>
    <!--    table of medals count-->
    <Transition name="slide" mode="out-in" appear>
      <table class="mb-2 mx-auto">
        <tr>
          <th>DISCIPLINE</th>
          <th>MEDALS</th>
        </tr>
        <tr v-for="d of country.disciplines" :key="d.name">
          <td>{{d.name}}</td>
          <td>{{d[Object.keys(d).find((k) => k === medalName)]}}</td>
        </tr>
      </table>
    </Transition>
  </section>
</template>

<style scoped>

  tr > td:first-child{
    text-align: start;
    padding:0.5rem 4rem 0.5rem 0.5rem;
  }
</style>
<script setup>
import {computed} from 'vue';
import db from '../stores/db.js';
import NavBack from "../components/NavBack.vue";
import {useRoute} from 'vue-router';
//states
const route = useRoute();
const disciplineName = route.params.discipline;
const countryName = route.params.name;

const countries = computed(()=>{
  let data = db.value;
  let c = [];
  for(let d of data){
    c.push(d);
  }
  return c;
});
const disciplines = computed(()=>{
  let list = [];
  for(let c of countries.value){
    for(let d of c.disciplines){
      //to generate unique set of disciplines
      if(!list.includes(d.name)){
        list.push(d.name);
      }
    }
  }
  return list;
})
const countryMedals = computed(()=>{
  let data = db.value;
  return data.find((c) => c.name === countryName).disciplines.find((d)=> d.name=== disciplineName);
});

const countryTotalMedal = computed(()=>{
  return Object.values(countryMedals.value).reduce((total, curr)=>{
    return typeof curr === 'number' ? total + curr: total += 0;
  }, 0);
});
</script>

<template>
  <!--    top nav -->
  <NavBack :prevPage="'DisciplineInfo'" :prevParams="'discipline:' + disciplineName">
  </NavBack>

  <!--  country info section-->
  <section aria-label="Country's Medals Section" >
    <h1 class="text-center mb-1-2 text-primary">{{disciplineName}}</h1>
    <img :src="'/src/assets/images/disciplines/' + disciplineName.toString().split(' ').join('') + '.svg'" alt="Icon of the discipline" class="img-fluid mx-auto d-block mb-1">
    <h2 class="mb-1 text-primary text-center mb-2">{{countryName}}</h2>

    <!--    table of medals count-->

    <Transition name="slide" mode="out-in" appear>
      <table class="mb-2 mx-auto">
        <tr>
          <th>GOLD</th>
          <th>SILVER</th>
          <th>BRONZE</th>
          <th>TOTAL</th>
        </tr>
        <tr>
          <td>{{countryMedals.gold}}</td>
          <td>{{countryMedals.silver}}</td>
          <td>{{countryMedals.bronze}}</td>
          <td>{{countryTotalMedal}}</td>
        </tr>
      </table>
    </Transition>
  </section>
</template>

<style scoped>
</style>
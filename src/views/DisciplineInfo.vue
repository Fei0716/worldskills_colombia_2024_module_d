<script setup>
import {computed} from 'vue';
import db from '../stores/db.js';
import NavBack from "../components/NavBack.vue";
import {useRoute} from 'vue-router';
//states
const route = useRoute();
const disciplineName = route.params.discipline;

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
  let medals = [];
  let medalCount = 0;
  let temp = {};
  for(let i of data){
    if(i.disciplines.some((d)=> d.name === disciplineName)){
      temp = i.disciplines.find((d)=> d.name === disciplineName);
      //calculate the total
      medalCount = Object.values(temp).reduce((total, curr)=>{
          return typeof curr === 'number' ? total + curr: total += 0;
      } , 0)
      medals.push({
        name: i.name,
        count: medalCount,
      })
    }
  }
  return medals;
});
</script>

<template>
  <!--    top nav -->
  <NavBack :prevPage="'Discipline'" :prevParams="'null'">
  </NavBack>
  <!--  country info section-->
  <section aria-label="Country's Medals Section" >
    <h1 class="text-center mb-1-2 text-primary">{{disciplineName}}</h1>
    <img :src="'/src/assets/images/disciplines/' + disciplineName.toString().split(' ').join('') + '.svg'" alt="Icon of the discipline" class="img-fluid mx-auto d-block mb-2">

    <!--    table of medals count-->
    <Transition name="slide" mode="out-in" appear>
      <table class="mb-2 mx-auto">
        <tr>
          <th>COUNTRY</th>
          <th>MEDALS</th>
        </tr>
        <tr v-for="m of countryMedals" :key="m.name">
          <td>
            <RouterLink :to="{name: 'DisciplineCountry' , params:{discipline: disciplineName,name: m.name }}" class="text-underline text-primary">
              {{m.name}}
            </RouterLink>
          </td>
          <td>{{m.count}}</td>
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
<script setup>
import {computed} from 'vue';
import db from '../stores/db.js';
import NavBack from "../components/NavBack.vue";

//states
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
</script>

<template>
  <!--    top nav -->
  <NavBack :prevPage="'Home'" :prevParams="null">
  </NavBack>

  <!--  countries section-->
  <section aria-label="Disciplines Section" >
    <h1 class="text-center mb-2 text-primary">Disciplines</h1>
    <Transition name="slide" mode="out-in" appear>
      <nav role="navigation" class="navbar">
        <ul role="menubar" class="navbar-nav">
          <li role="menuitem" class="nav-item mb-1 bg-secondary border-primary " v-for="d of disciplines" :key="d">
            <RouterLink :to="{name: 'DisciplineInfo' , params:{discipline: d}}" class="text-primary  nav-link"><img :src="'/src/assets/images/disciplines/' + d.split(' ').join('') + '.svg'" alt="Icon for Disciplines" class="nav-link-img">{{d}}</RouterLink>
          </li>

        </ul>
      </nav>
    </Transition>
  </section>
</template>

<style scoped>

</style>
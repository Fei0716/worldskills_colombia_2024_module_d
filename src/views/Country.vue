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
</script>

<template>
<!--    top nav -->
<NavBack :prevPage="'Home'" :prevParams="null">
</NavBack>

<!--  countries section-->
<section aria-label="Countries Section" >
  <h1 class="text-center mb-2 text-primary">Countries</h1>

  <Transition name="slide" mode="in-out" appear>
    <nav role="navigation" class="navbar">
      <ul role="menubar" class="navbar-nav">
        <li role="menuitem" class="nav-item mb-1 bg-secondary border-primary " v-for="c of countries" :key="c.name">
          <RouterLink :to="{name: 'CountryInfo' , params:{name: c.name}}" class="text-primary  nav-link"><img :src="'/src/assets/images/flags/' + c.name.split(' ').join('') + '.png'" alt="Icon for Countries" class="nav-link-img">{{c.name}}</RouterLink>
        </li>

      </ul>
    </nav>
  </Transition>

</section>
</template>

<style scoped>

</style>
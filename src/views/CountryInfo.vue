<script setup>
import {computed} from 'vue';
import db from '../stores/db.js';
import NavBack from "../components/NavBack.vue";
import {useRoute} from 'vue-router';
//states
const route = useRoute();
const countryName = route.params.name;
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

const countryTotalMedal = computed(()=>{
  let total = 0;
  for(let key of Object.keys(country.value.medals)){
      total += country.value.medals[key]
  };
  return total;
});
</script>

<template>
  <!--    top nav -->
  <NavBack :prevPage="'Country'" :prevParams="null">
  </NavBack>

  <!--  country info section-->
  <section aria-label="Country Info Section" >
    <h1 class="text-center mb-1-2 text-primary">{{countryName}}</h1>
    <img :src="'/src/assets/images/flags/' + countryName.toString().split(' ').join('') + '.png'" alt="Flag of the country" class="img-fluid mx-auto d-block mb-1">
    <Transition name="slide" mode="out-in" appear>
      <!--    table of medals count-->
      <table class="mb-2 mx-auto">
        <tr>
          <th>GOLD</th>
          <th>SILVER</th>
          <th>BRONZE</th>
          <th>TOTAL</th>
        </tr>
        <tr>
          <td>{{country.medals.gold}}</td>
          <td>{{country.medals.silver}}</td>
          <td>{{country.medals.bronze}}</td>
          <td>{{countryTotalMedal}}</td>
        </tr>
      </table>
    </Transition>
    <Transition name="slide" mode="out-in" appear>

      <nav role="navigation" class="navbar">
        <ul role="menubar" class="navbar-nav">
          <li role="menuitem" class="nav-item mb-1 bg-secondary border-primary " v-for="m of Object.keys(country.medals)" :key="m">
            <RouterLink :to="{name: 'CountryMedal' , params:{name: country.name , medal: m }}" class="text-primary  nav-link"><img :src="'/src/assets/images/medals/' + m + '.png'" alt="Icon for Countries" class="nav-link-img">Medals</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>

  </section>
</template>

<style scoped>

</style>
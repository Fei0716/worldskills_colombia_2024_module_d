<script setup>

</script>

<template>
  <section aria-label="Section Home">
    <img src="../assets/images/logo-white.png" class="d-block mx-auto img-fluid mb-2" alt="Logo Olympic Paris 2024">

    <img src="../assets/images/frame.png" class="d-block mx-auto img-fluid mb-2" alt="Image of Medals">

    <Transition name="slide" mode="in-out" appear>
      <nav role="navigation" class="navbar">
        <ul role="menubar" class="navbar-nav">
          <li role="menuitem" class="nav-item mb-1 bg-secondary border-primary ">
            <RouterLink :to="{name: 'Country'}" class="text-primary  nav-link"><img src="../assets/images/ico-countries.svg" alt="Icon for Countries"> Countries</RouterLink>
          </li>
          <li role="menuitem" class="nav-item mb-1 bg-secondary border-primary ">
            <RouterLink :to="{name: 'Discipline'}" class="text-primary nav-link"><img src="../assets/images/ico-disciplines.svg" alt="Icon for Disciplines"> Disciplines</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </section>
</template>

<style scoped>

</style>
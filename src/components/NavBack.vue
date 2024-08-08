<script setup>
  import router from "../router.js";
  //props
  const props = defineProps(['prevPage' , 'prevParams'])
  function backToPrev(){
    if(props.prevParams == null){
      router.push({name: props.prevPage});
    }else{
      router.push({name: props.prevPage , params: props.prevParams});
    }
  }
</script>

<template>
    <header class="mb-1 pt-2">
       <nav role="navigation">
         <img src="../assets/images/ico-prev.svg" alt="Click to navigate back to the previous page" role="button" @click="backToPrev">

         <img src="../assets/images/logo-sm-white.png" alt="Logo of Olympic Paris 2024">
         <div></div>
       </nav>
    </header>
</template>

<style scoped>
  header{
    width: 100%;
  }
  nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav > img:first-child{
    cursor: pointer;
  }
</style>
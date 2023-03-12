<template>

<nav class="bg-light-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-dark-primary fixed z-30 w-full">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#home" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">asdasdsad</span>
    </a>
    <button @click="showMobileMenu = !showMobileMenu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class=" w-full md:block md:w-auto" id="navbar-default" :class="{hidden : showMobileMenu}">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
        <li v-for="(nav, index) in navs" :key="index">
          <a :href="nav.href" class="block py-2 pl-5 pr-4 hover:text-gray-400 rounded md:p-0 text-white text-lg" >
            {{nav.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const showMobileMenu = ref('false');
    const scrollBg = ref(false)

    const navs = [
      {name : "Home", href: "#home"},
      {name : "About", href: "#about"},
      {name : "Portfolio", href: "#portfolio"},
      {name : "Contact", href: "#contact"},
    ]
</script>

<style>

</style>
<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import About from '@/Components/Frontend/About.vue';
import Skills from '@/Components/Frontend/Skills.vue';
import Portfolio from '@/Components/Frontend/Portfolio.vue';

defineProps({
    skills: Object,
    projects: Object
})

</script>

<template>
    <Head title="Welcome" />
    <FrontendLayout>
        <!-- Hero primary-->
        <Hero/>
        <!-- Promote third -->
        <!-- About fourth -->
        <About/>
        <!-- Skills third -->
        <Skills :skills="skills"/>
        <!-- Portfolio -->
        <Portfolio :skills = "skills" :projects="projects"/>
        <!-- Contact primary -->
    </FrontendLayout>
</template>

<style>

</style>

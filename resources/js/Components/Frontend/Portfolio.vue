<template>
    <section id="portfolio" class=" section bg-light-primary">
        <div class="container mx-auto"
        v-motion
            :initial="{
            opacity: 0,
            y: 100,
            }"
            :visible="{
            opacity: 1,
            y: 0,
            }">
            <div class="flex flex-col items-center text-center">
                <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold m-10">My Latest Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aspernatur adipisci nostrum. Amet quaerat veniam dicta vero distinctio dolor
                     blanditiis, voluptatum odio culpa, eveniet commodi quam molestiae iste fugiat dignissimos.</p>
            </div>
        </div>
        <Projects :skills="skills" :projects="projects"/>
    </section>
</template>

<script setup>
    import Projects from './Projects.vue';

    defineProps({
        skills: Object,
        projects: Object,
    })
</script>
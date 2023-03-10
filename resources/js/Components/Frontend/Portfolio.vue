<template>
    <section id="section" class="bg-light-primary min-h-[1400px]">
        <div class="container mx-auto">
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
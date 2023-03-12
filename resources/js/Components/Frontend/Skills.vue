<template>
    <section id="skills" class="bg-light-third">
        <div class="container mx-auto">
            <div class="flex  justify-around py-12">
                <div class="flex items-center justify-center" v-for="skill in skills.data" :key="skill.id">
                    <img :src="skill.image" :alt="skill.name"
                          class="lg:h-20">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        skills:Object
    })
</script>
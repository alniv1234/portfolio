<template>
    <Link :href="project.project_url" class="group flex flex-col items-center text-center cursor-pointer" >
        <div class="mb-6">
            <img class="rounded-2xl h-56" :src="project.image" :alt="project.name">
        </div>
        <span class=" group-hover:text-light-secondary capitalize text-sm mb-3">
            {{ project.skill.name }}
        </span>
        <h3 class="group-hover:text-light-fourth text-2xl font-semibold capitalize mb-3">
            {{ project.name }}
        </h3>
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
    defineProps({
        project: Object,
    })
</script>
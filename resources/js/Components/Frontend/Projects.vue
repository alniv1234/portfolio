<template>
    <div class="container mx-auto">
        <nav class="mb-12 border-b-2 border-light-fourth ">
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class=" cursor-pointer capitalize m-4">
                    <button @click="filterProject('all')" class=" text-center px-4 py-2 hover:text-light-fourth"
                    :class="[
                        selectedskill === 'all' ? 'text-light-fourth' : ''
                    ]"
                    >
                        All
                    </button>
                </li>
                <li class=" cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
                    <button @click="filterProject(projectSkill.id)" class=" text-center px-4 py-2 hover:text-light-fourth"
                    :class="[
                        selectedskill === projectSkill.id ? 'text-light-fourth' : ''
                    ]"
                    >
                        {{ projectSkill.name }}
                    </button>
                </li>
            </ul>
        </nav>
        <section class=" grid gap-y-12 lg:grid-cols-4 lg:gap-8">
            <Project v-for="project in filteredProjects" :key="project.id" :project="project" />
        </section>
    </div>
</template>

<script setup>
    import Project from './Project.vue';
    import { ref } from "vue"

    const props = defineProps({
        skills: Object,
        projects: Object
    })

    const filteredProjects = ref(props.projects.data);
    const selectedskill = ref("all")

    const filterProject = (id) => {
        if(id === "all"){
            filteredProjects.value =props.projects.data
            selectedskill.value = id
        }else{
            filteredProjects.value =props.projects.data.filter(project=> {
                return project.skill.id === id
            })
            selectedskill.value = id
        }
    }
</script>
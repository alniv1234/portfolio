<template>
    <section id="home" class="section lg:h-[85vh] flex items-center bg-light-primary dark:bg-dark-primary py-32 lg:py-0 overflow-hidden">
        <div class="container mx-auto h-full"
        v-motion
            :initial="{
            opacity: 0,
            y: 100,
            }"
            :visible="{
            opacity: 1,
            y: 0,
            }">
            <div class="flex items-center h-full pt-8">
                 <div class="flex-1 flex flex-col items-center lg:items-start">
                    <p class="text-lg text-slate-700 text-md mb-[22px] text-white">
                        Hi im Tony stark
                    </p>
                    <h1 class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        I build and desasdsad
                    </h1>
                    <p class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nulla, quae nemo iusto blanditiis delectus voluptatum
                        aspernatur, odit repudiandae magni eaque earum rerum! Ad neque quos ratione fuga distinctio fugit!
                    </p>

                 </div>
                 <div class="hidden lg:flex flex-1 justify-end items-center h-full">
                    <img src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hero"
                    class="rounded-lg ">
                 </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>

</style>
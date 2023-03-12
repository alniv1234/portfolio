<template>
    <section class="section bg-light-primary" id="contact">
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
            <div class="flex flex-col items-center text-center  ">
                <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold m-10">Contact me</h2>
                <p class="mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, amet.</p>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-8">
                <div class="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div class="rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">Have a question?</h4>
                            <p class="mb-1">Lorem ipsum dolor sit amet.</p>
                            <p class="font-normal">Email me at sample@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-x-4">
                        <div class="rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-body text-xl mb-1">Current location</h4>
                            <p class="mb-1">Muntinlupa City</p>
                            <p class="font-normal">Email me at sample.gmail.com</p>
                        </div>
                    </div>
                </div>
                <form action="" @submit.prevent="submit" class="space-y-8 w-full max-w-md">
                    <div class="m-2 p-4 bg-light-secondary text-white" v-if="showMessage">
                        Thank you for contacting me.
                    </div>
                    <div>
                        <div>
                            <input type="text" name="" v-model="form.name" class="input" placeholder="Your name">
                            <span class="text-sm m-2 text-red-400" v-if="form.errors.name">{{form.errors.name}} </span>
                        </div>
                        <div>
                            <input type="email" name="" v-model="form.email" class="input" placeholder="Your email">
                            <span class="text-sm m-2 text-red-400" v-if="form.errors.email">{{form.errors.email}} </span>
                        </div>
                    </div>
                    <textarea name="" id="" cols="30" rows="5" v-model="form.body" placeholder="Your message" spellcheck="false"></textarea>
                    <span class="text-sm m-2 text-red-400" v-if="form.errors.body">{{form.errors.body}} </span>
                    <button class="bg-light-fourth block">Send message</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";
    import { useForm } from "@inertiajs/vue3"

    const form = useForm({
        name: "",
        email: "",
        body: "",
    })

    const showMessage = ref(false)

   function setShowMessage(value){
    showMessage.value = value
   }

   function cleanForm(){
    form.reset()
    setShowMessage(true)
    setTimeout(()=> setShowMessage(false), 2000)
   }

    const submit =() => {
        form.post(route('contact'), {
            preserveScroll:true,
            onSuccess: () => cleanForm(),
        })
    }
 </script>
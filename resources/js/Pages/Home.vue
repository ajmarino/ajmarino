<template>
	<div class="grid gap-5
		grid-cols-2 grid-rows-4
		sm:grid-cols-4 sm:grid-rows-2
	">
		<div class="border-4 border-gray-100 p-4
			col-span-2 row-span-1 sm:row-span-1 sm:col-span-3
		">
			<h1>{{ this.title }}</h1>
		</div>

        <div class="bg-white p-4 col-span-2 sm:col-span-1
			row-span-1 sm:row-start-1 sm:row-end-2
		">
			<h2 class="font-bold uppercase text-orange-400 text-center">General Information</h2>
		</div>

		<div class="bg-white p-4 col-span-2 sm:col-span-1
			row-span-1 sm:row-start-2 sm:row-end-3
		">
			<h2 class="font-bold uppercase text-orange-400 text-center">Skills</h2>
		</div>

        <div class="grid gap-5 grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2
            col-span-2 sm:col-span-3
            row-span-1 sm:row-start-2 sm:row-end-3
        ">
            <div class="flex items-center justify-center bg-gray-100 col-span-1 row-span-1 p-4" v-for="project in featured">
                <img :src="project.lead_image" alt="">
            </div>
        </div>
	</div>
</template>

<script>
import Default from '../Layouts/Default'

export default {
	props: ['featured'],

	layout: Default,

	metaInfo() {
		return {
			titleTemplate: null,
		}
	},

	data() {
		return {
			title: 'Home',
		}
	},
}
</script>

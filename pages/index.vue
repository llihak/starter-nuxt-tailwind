<template>
	<div class="container mx-4 sm:mx-auto ">
		<div
			class="flex flex-col items-center justify-center w-full mt-10  bg-gray-100 rounded-md shadow-md  text-center text-gray-600"
		>
			<div class="flex flex-col justify-start w-full p-4">
				<h1 class="py-3 text-3xl border-b-2 font-montserrat text-red-700">Welcome to the Nuxt Project Template</h1>
				<p class="py-3">This is the the Nuxt Project Template</p>
				<p>
					This message shows that the template is well configured and running. The site is still under construction and
					the challenge now is to make the website pretty.
				</p>
			</div>
		</div>

		<hr>

		<Overview></Overview>
	</div>
</template>

<script>
import Overview from '~/components/Overview.vue';
export default {
	name: "Index",
	components: { Overview }
};
</script>

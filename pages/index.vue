<script setup lang="ts">
	const buttonClass1 =
		'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[1rem_0_0_1rem] ';
	const buttonClass2 =
		'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight ';
	const buttonClass3 =
		'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[0_1rem_1rem_0] ';


  enum Gender {
    GIRL = 'Girl',
    BOY = 'Boy',
    UNISEX = 'Unisex'
  }
  enum Length {
    LONG = 'Long',
    SHORT = 'Short',
    ALL = 'All'
  }
  enum Popularity {
    TRENDY = 'Trendy',
    UNIQUE = 'Unique'
  }
  interface OptionState{
    gender: Gender,
    popularity: Popularity,
    length: Length
  }
	const options = reactive({
		gender: 'Girl',
		popularity: 'Unique',
		length: 'Long',
	}) as OptionState;
</script>

<template>
	<div
		class="font-[Arial,Helvetica,sans-serif] text-[rgb(27,60,138)] max-w-[50rem] text-center m-[0_auto]"
	>
		<h1 class="text-6xl font-bold my-[1rem]">Baby Name Generator</h1>
		<p class="text-xl my-[1rem]">
			Choose your options and click the "Find Names" button below
		</p>
		<div
			class="bg-[rgb(247,226,224)] rounded-[2rem] p-[1rem] w-[95%] m-[0_auto] mt-[4rem] relative"
		>
			<div class="mb-[2rem]">
				<h4 class="text-xl my-[1rem] font-bold">1) Choose a gender</h4>
				<div>
					<button
						:class="
							buttonClass1 +
							(options.gender === Gender.BOY && 'bg-[rgb(249,87,89)]')
						"
					>
						Boy
					</button>
					<button
						:class="
							buttonClass2 +
							(options.gender === Gender.UNISEX && 'bg-[rgb(249,87,89)]')
						"
					>
						Unisex
					</button>
					<button
						:class="
							buttonClass3 +
							(options.gender === Gender.GIRL && 'bg-[rgb(249,87,89)]')
						"
					>
						Girl
					</button>
				</div>
			</div>
			<div>
				<h4 class="text-xl my-[1rem] font-bold">2) Choose a popularity</h4>
				<div>
					<button
						:class="
							'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[1rem_0_0_1rem] ' +
							(options.popularity === Popularity.TRENDY && 'bg-[rgb(249,87,89)]')
						"
					>
						Trendy
					</button>
					<button
						:class="
							'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[0_1rem_1rem_0] ' +
							(options.popularity === Popularity.UNIQUE && 'bg-[rgb(249,87,89)]')
						"
					>
						Unique
					</button>
				</div>
			</div>
			<div>
				<h4 class="text-xl my-[1rem] font-bold">3) Choose a length</h4>
				<div>
					<button
						:class="
							'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[1rem_0_0_1rem] ' +
							(options.length === 'Long' && 'bg-[rgb(249,87,89)]')
						"
					>
						Long
					</button>
					<button
						:class="
							'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight ' +
							(options.length === 'All' && 'bg-[rgb(249,87,89)]')
						"
					>
						All
					</button>
					<button
						:class="
							'bg-white outline-[0.15rem] outline-[rgb(249,87,89)] outline p-[0.75rem] w-[12rem] text-base  text-[rgb(27,60,138) cursor-pointer font-extralight rounded-[0_1rem_1rem_0] ' +
							(options.length === 'Short' && 'bg-[rgb(249,87,89)]')
						"
            @click="() => {}"
					>
						Short
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

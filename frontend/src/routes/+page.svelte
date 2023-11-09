<script>
	

	// Page Partials
	import HomeIntro from './home-partials/HomeIntro.svelte';
	import HomeAboutMe from './home-partials/HomeAboutMe.svelte';
	import HomeTechSkills from './home-partials/HomeTechSkills.svelte';
	import HomeWorkExperience from './home-partials/HomeWorkExperience.svelte';
	import HomeEducation from './home-partials/HomeEducation.svelte';
	import HomeCurrentProjects from './home-partials/HomeCurrentProjects.svelte';
	import HomeBlogPosts from './home-partials/HomeBlogPosts.svelte';
</script>

<div>
	<section class="tlr-gradient">
		<div class="section-container"><HomeIntro/></div>
	</section>
	
	<section class="bl-gradient">
		<div class="section-container"><HomeAboutMe/></div>
	</section>
	
	<section class="tl-br-gradient">
		<div class="section-container"><HomeTechSkills/></div>
	</section>
	
	<section class="tr-gradient">
		<div class="section-container"><HomeWorkExperience/></div>
	</section>

	<section class="bl-gradient-e">
		<div class="section-container"><HomeEducation/></div>
	</section>

	<section class="tl-gradient">
		<div class="section-container"><HomeCurrentProjects/></div>
	</section>

	<section class="br-gradient">
		<div class="section-container"><HomeBlogPosts/></div>
	</section>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-6xl mx-auto p-4 py-16 md:py-24;
	}

	.tlr-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%, rgba(var(--color-error-500) / 0.25) 0px, transparent 50%);
	}

	.bl-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}

	.bl-gradient-e {
		background-image: 
			radial-gradient(at 0% 100%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}

	.tl-gradient {
		background-image: 
			radial-gradient(at 0% 0%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}

	.br-gradient {
		background-image:
			radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%);
	}

	.tl-br-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}

	.tr-gradient {
		background-image:
			radial-gradient(at 98% 1%, rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}


</style>

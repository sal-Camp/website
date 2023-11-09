<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="text-right">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Salvatore Campisano</strong>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<a
					class="btn btn-sm"
					href=" "
					rel="noreferrer"
				>
					Home
				</a>
				<a
					class="btn btn-sm"
					href=" "
					rel="noreferrer"
				>
					Blog
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

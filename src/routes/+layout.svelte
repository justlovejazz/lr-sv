<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import ModalMenu from './ModalMenu.svelte';
    export let data;
</script>

<slot />

<ModalMenu navigation={data.navigation} />

{#if !$page.url.pathname.startsWith(`${base}/docs`)}
    <div>
        <script>
            sessionStorage.setItem('scroll', 0);
        </script>
    </div>
{/if}

<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import Docs from '$lib/docs.js?url';
    import Clipboard from 'clipboard/dist/clipboard.min?url';
    import Header from '../../Header.svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.doc.title} - UIkit</title>
    <script src={Clipboard} defer></script>
    <script src={Docs} defer></script>
</svelte:head>

<Header />

<div class="tm-sidebar-left uk-visible@m">
    <h3>Documentation</h3>

    {#each Object.entries(data.navigation) as [category, pages], index}
        <ul class="uk-nav uk-nav-default tm-nav" class:uk-margin-top={index}>
            <li class="uk-nav-header">
                {category}
            </li>
            {#each Object.entries(pages) as [label, p]}
                <li class:uk-active={$page.url.pathname === `${base}/docs/${p}`}>
                    <a
                        href="{base}/docs/{p}"
                        aria-current={$page.url.pathname === `${base}/docs/${p}`
                            ? 'page'
                            : undefined}>{label}</a
                    >
                </li>
            {/each}
        </ul>
    {/each}
</div>

<div class="tm-main uk-section uk-section-default">
    <div class="uk-container uk-container-small uk-position-relative">
        {@html data.doc.content}
    </div>
</div>

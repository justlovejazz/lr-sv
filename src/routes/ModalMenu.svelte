<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<div id="modal-menu" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog uk-flex">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close />
        <div
            class="uk-modal-body uk-padding-large uk-margin-auto uk-flex uk-flex-column uk-box-sizing-content uk-width-auto@s"
            uk-height-viewport
        >
            <div class=" uk-margin-auto-vertical">
                <ul class="uk-nav uk-nav-default tm-nav">
                    <li class="uk-nav-header">General</li>
                    <li class:uk-active={$page.url.pathname === `${base}/`}>
                        <a
                            href="{base}/"
                            aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}
                            >Home</a
                        >
                    </li>
                    <li class:uk-active={$page.url.pathname === `${base}/hello`}>
                        <a
                            href="{base}/hello"
                            aria-current={$page.url.pathname === `${base}/hello`
                                ? 'page'
                                : undefined}>Hello</a
                        >
                    </li>

                    <li class:uk-active={$page.url.pathname === `${base}/download`}>
                        <a
                            href="{base}/download"
                            aria-current={$page.url.pathname === `${base}/download`
                                ? 'page'
                                : undefined}>Download</a
                        >
                    </li>
                </ul>

                <ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
                    {#each Object.entries($$props.navigation) as [category, pages]}
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
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>

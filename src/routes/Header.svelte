<script>
    // @ts-nocheck

    import { assets, base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<div class="tm-header tm-header-overlay" uk-header="">
    <div
        class={`uk-navbar-container uk-navbar-transparent tm-navbar-container ${
            $$props.class || ''
        }`}
    >
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <a
                        class="uk-navbar-item uk-logo"
                        class:uk-active={$page.url.pathname === `${base}/`}
                        href="{base}/"
                        aria-label="Back to Home"
                        aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}
                    >
                        <img
                            src="{assets}/images/uikit-logo.svg"
                            class="uk-margin-small-right"
                            width="34"
                            height="28"
                            alt="Lemonroom"
                        />
                        Lemonroom
                    </a>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-visible@m">
                        <li class:uk-active={$page.url.pathname === `${base}/hello`}>
                            <a
                                href="{base}/hello"
                                aria-current={$page.url.pathname === `${base}/hello`
                                    ? 'page'
                                    : undefined}
                            >
                                Hello
                            </a>
                        </li>
                        <li class:uk-active={$page.url.pathname.startsWith(`${base}/docs`)}>
                            <a
                                href="{base}/docs/intro"
                                aria-current={$page.url.pathname.startsWith(`${base}/docs`)
                                    ? 'page'
                                    : undefined}>Documentation</a
                            >
                        </li>
                    </ul>

                    <div class="uk-navbar-item uk-visible@m">
                        <a
                            class:uk-active={$page.url.pathname === `${base}/download`}
                            class="uk-button uk-button-default tm-button-default uk-icon"
                            href="{base}/download"
                            aria-current={$page.url.pathname === `${base}/download`
                                ? 'page'
                                : undefined}
                        >
                            Download <canvas uk-icon="download" width="20" height="20" />
                        </a>
                    </div>

                    <a
                        class="uk-navbar-toggle uk-hidden@m"
                        uk-navbar-toggle-icon
                        href="#modal-menu"
                        uk-toggle
                    />
                </div>
            </nav>
        </div>
    </div>
</div>

import { sveltekit } from '@sveltejs/kit/vite';
import esmodule from 'vite-plugin-esmodule';

const config = {
    plugins: [sveltekit(), esmodule(['ogl'])],
};

export default config;

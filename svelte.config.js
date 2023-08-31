import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {

    preprocess: preprocess({
        postcss: {
            configFilePath: './postcss.config.cjs'
        }
    }),

    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        })
    }
};

export default config;
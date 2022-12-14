const { createApp } = Vue



import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import hero from './cmps/hero.js'
import features from './cmps/features.js'

const options = {
	template: `
        <section class="main-container">
            <app-header />
            <hero></hero>
            <features></features>
            <app-footer />
        </section>
    `,
	components: {
		appHeader,
		appFooter,
        hero,
        features
	},
}

const app = createApp(options)
app.mount('#app')

const { createApp } = Vue



import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

const options = {
	template: `
        <section>
            <app-header />
            <app-footer />
        </section>
    `,
	components: {
		appHeader,
		appFooter,
	},
}

const app = createApp(options)
app.mount('#app')

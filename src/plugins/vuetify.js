import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5EC2D0',
                secondary: '#294460',
                anchor: '#fff',
            },
        },
    },
})

export default vuetify
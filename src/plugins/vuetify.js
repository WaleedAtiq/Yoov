import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primaryfive: "#436280",
                primarysix: "#294460",
                primary: '#5EC2D0',
                secondary: '#294460',
                secondarysix: "#5EC2D0",
                anchor: '#fff',
            },
        },
    },
})

export default vuetify
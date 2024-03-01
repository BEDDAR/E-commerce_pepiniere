import { config } from '@vue/test-utils';
import vuetify from '../vuetify'; // Chemin vers votre configuration Vuetify

config.mocks.$vuetify = vuetify;
import Navbar from '../../components/Navbar/Navbar.vue';
import { newEmail, enregistrementClient } from '@/services/ConnexionService';

export default {
    name: 'Enregistrement',
    components: { Navbar },
    data: () => ({
        inVisible: true,
        inVisible2: true,
        last_name: '',
        first_name: '',
        pseudo:'',
        email: newEmail,
        phone: '',
        password: '',
        password_confirm: '',
        response: '',

    }),
    created() {
        this.email = newEmail
    },
    methods: {
        async submitFormulaire() {         
            
            if (this.last_name && this.first_name && this.pseudo && this.email && this.phone && this.password && this.password_confirm) {


                let client = {
                    last_name: this.last_name,
                    first_name: this.first_name,
                    pseudo:this.pseudo,
                    typeDeCompte: 'Client',
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                }
                await enregistrementClient(client)
                .then(res=>this.response=res)
                .catch(err=>{
                if (err.response && err.response.status === 409) {
                    // L'utilisateur existe déjà
                    alert(err.response.data.message);
                } else {
                    // Erreur interne du serveur ou autre erreur
                    alert("Une erreur s'est produite lors de l'enregistrement de l'utilisateur.");
                }})
            } else {
                alert("Complétez le formulaire avant la soumission")
            }
        },

    },
}
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
            //Vérifier si tous les champs ne sont pas vides
            if (this.last_name && this.first_name && this.pseudo && this.email && this.phone && this.password && this.password_confirm) {
                //Verifier si le mot de passe et le mot de passe de confirmation sont similaires et que le mot de passe est conforme au regex suivant
                if((this.password == this.password_confirm)&&(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password))){
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
                    // Erreur interne du serveur ou autre erreur (Ex:l'adresse mail non valide)
                    console.log(err.response.data.Error)
                    for(let i=0;i<err.response.data.Error.errors.length;i++){
                    alert(`Une erreur s'est produite lors de l'enregistrement de l'utilisateur: ${err.response.data.Error.errors[i].message}`);
                    }
                }})
            }else{
                alert("mot de passe et mot de passe de confirmation sont différents ou mot de passe invalide")
            }} else {
                alert("Complétez le formulaire avant la soumission")
            }
        }
    },
}
import Navbar from '../../components/Navbar/Navbar.vue';
import bcrypt from 'bcryptjs';
import { newEmail, enregistrementClient } from '@/services/ConnexionService';

export default {
    name: 'Enregistrement',
    components: { Navbar },
    data: () => ({
        inVisible: true,
        inVisible2: true,
        last_name: '',
        first_name: '',
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
            /* 
             const isExist = await isEmailExist(this.email)
             console.log(typeof isExist)
             console.log("enregistrement", isExist)*/
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            if (this.last_name && this.first_name && this.email && this.phone && this.password && this.password_confirm) {


                let client = {
                    last_name: this.last_name,
                    first_name: this.first_name,
                    typeDeCompte: 0,
                    email: this.email,
                    phone: this.phone,
                    password: hashedPassword,
                }
                this.response = await enregistrementClient(client)
            } else {
                alert("Complétez le formulaire avant la soumission")
            }
        },

    },
}
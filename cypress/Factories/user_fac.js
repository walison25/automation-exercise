
import { faker } from '@faker-js/faker';

export default{
    createUser: function(){//criação de uma fábrica de objetos em js para alimentar os dados necessários para a aplicação
        let dados = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number()       
        }
        return dados;
    }
}
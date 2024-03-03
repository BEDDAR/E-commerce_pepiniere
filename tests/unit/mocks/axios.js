// __mocks__/axios.js
import 'jest';
const axiosMock = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // Ajoutez d'autres méthodes d'Axios que vous utilisez dans votre application
  };
  
  export default axiosMock;

require('dotenv').config();

describe('Verifica as variáveis de ambiente', () => {
  const fakePort = process.env.MY_FAKE_PORT;
  const myVariable = process.env.MY_VARIABLE;

  it('Será validado que a variável da MY_FAKE_PORT existe', () => {
    expect(fakePort).toBeDefined();
  });

  it('Será validado que a variável de ambiente MY_VARIABLE existe e se ela é um boleano', () => {
    expect(myVariable).toBeDefined();
    expect(['true', 'false']).toContain(myVariable);
  });
});
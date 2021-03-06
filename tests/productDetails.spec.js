/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.ok(typeof productDetails('Alcool gel', 'Máscara') === 'object');
    assert.ok(productDetails('Alcool teste', 'Máscara').length === 2);
    assert.ok(
      typeof productDetails('Alcool 50%', 'Máscara')[0] === 'object'
        && typeof productDetails('Alcool isopropílico', 'Máscara')[1] === 'object',
    );
    assert.ok(
      productDetails('Alcool 70%', 'Máscara')[0]
        !== productDetails('Alcool etílico', 'Máscara')[1],
    );
    assert.ok(
      /123$/.test(
        productDetails('Alcool 40%', 'Máscara')[0].details.productId,
      )
        && /123$/.test(
          productDetails('Alcool gel', 'Máscara')[1].details.productId,
        ),
    );
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});

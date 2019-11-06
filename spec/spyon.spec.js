
describe('Testes do objeto spy', function() {
  var Calculadora = { 
    somar: function (a, b) { 
      return a + b;
    }
  }

  beforeAll(function () { 
    spyOn(Calculadora, 'somar').and.callFake(function (a, b) { 
      return a + b;
    })
  }); 

  xit('call through', function() {
    expect(function() { 
      Calculadora.somar(1,1)
    }).toThrowError("teste");
    
  });
  
  it('deve demonstrar o uso do calls.argsFor', function() {
    Calculadora.somar(1,1);
    Calculadora.somar(2,2)
    expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
    expect(Calculadora.somar.calls.argsFor(1)).toEqual([2,2]);
  });

  it('deve demonstar o uso do calls.all', () => {
    Calculadora.somar(1,1);
    Calculadora.somar(2,2);

    var retorno = Calculadora.somar.calls.all();
    expect(retorno[0].object).toEqual(Calculadora);
    expect(retorno[0].args).toEqual([1,1], [2,2]);
    expect(retorno[0].returnValue).toBeDefined();
  });
    
    
});
  

const chai = require("chai");
const spies = require("chai-spies");
const { expect } = chai;

chai.use(spies);

const listaAnimales = [
  {
    nombre: 'Atenas',
    tipo: 'Perro'
  },
  {
    nombre: 'Garfield',
    tipo: "Gato"
  },
  {
    nombre: "Pepe",
    tipo: "Sapo"

  },
]

const lista = {
  misAnimales: function (animales) {
    return this.animales = animales
  },
  perros: function () {
    return this.animales.filter(animal => animal.tipo == 'perro')
  },
  gatos: function () {
    return this.animales.filter(animal => animal.tipo == 'gato')
  },
  otros: function () {
    return this.animales.filter(animal => (animal.tipo != 'perro' && animal.tipo != 'gato'))
  }
}

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      lista.misAnimales(listaAnimales)
      const perros = listaAnimales.filter(animal => animal.tipo == 'perro')
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      lista.misAnimales(listaAnimales)
      const gatos = listaAnimales.filter(animal => animal.tipo == 'gatos')
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      lista.misAnimales(listaAnimales)
      const otros = listaAnimales.filter(animal => (animal.tipo != 'perro' && animal.tipo != 'gato'))
      expect(lista.otros()).to.eql(otros)
    })

    it('determina los resultados utilizando Array.filter', () => {
      chai.spy.on(listaAnimales, "filter");

      const perros = listaAnimales.filter(animal => animal.tipo == 'perro')

      expect(listaAnimales.filter).to.have.been.called()
    })
  })

})
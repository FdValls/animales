const chai = require('chai')
const { expect } = chai

// Faltaria sacar la lista de animales de la lista original 
// y terminar los test
const lista = {
  animales: [
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

    }
  ],
  perros: function () {
    return [this.animales[0]]
  },

  gatos: function () {
    return [this.animales[1]]
  },

  otros: function () {
   return [this.animales.filter(animales => animales.tipo != "Gato" && animales.tipo == "Perro")]
  }
}

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      const perros = [{
        nombre: 'Atenas',
        tipo: 'Perro'
      }]
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = [
        {
          nombre: 'Garfield',
          tipo: "Gato"
        }
      ]
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      const otros = {
        nombre: "Pepe",
        tipo: "Sapo"
      }
      expect(lista.otros()).to.eql(otros)
    })

    // it('determina los resultados utilizando Array.filter', () => {
    //   expect(animales.filter()).to.have.been.called()
    // })
  })
})
const iceCreamFlavor = [{
  flavor: 'Rocky Road',
  price: 2,
  quantity: 0
}, {
  flavor: 'Vanilla',
  price: 1,
  quantity: 0
}, {
  flavor: 'Strawberry',
  price: 1.50,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  price: 2,
  quantity: 0
}, {
  name: 'Cup',
  price: 1,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0
}, {
  name: 'Choclate Chips',
  quantity: 0
}]

function drawVessel() {
  let vessel = document.getElementById('vtype')
  let template = ''

  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template += `

  <div>
    <ol>
      <h5 class="p-1">Vessel: ${vessel.name}</h5>
      <h5 class="p-1">Vessell Quantity: ${vessel.quantity}</h5>
      <h5 class="p-1">Vessell Price: ${vessel.price}</h5>
    </ol>
  </div>
      `
    }
  })

  // @ts-ignore
  vessel.innerHTML = template
  drawTotal()
}

function addVesselType(vtype) {
  let vessel = vessels.find(vessel => vessel.name == vtype)
  // @ts-ignore
  vessel.quantity++

  drawVessel()
}

function addIceCreamScoop(flavor) {
  let scoop = iceCreamFlavor.find(i => i.flavor == flavor)
  // @ts-ignore
  scoop.quantity++

  drawFlavor()
}

function drawFlavor() {
  let flavor = document.getElementById('flavor')
  let template = ''

  iceCreamFlavor.forEach(scoop => {
    if (scoop.quantity > 0) {
      template += `

  <div>
    <ol>
      <h5 class="p-1">Scoop Flavor: ${scoop.flavor}</h5>
      <h5 class="p-1">Scoop Quantity: ${scoop.quantity}</h5>
      <h5 class="p-1">Scoop price: ${scoop.price}</h5>
    </ol>
  </div>
      `
    }
  })

  // @ts-ignore
  flavor.innerHTML = template
  drawTotal()
}

function drawToppings() {
  let topping = document.getElementById('topping')
  let template = ''

  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `

  <div>
    <ol>
      <h5 class="p-1">Topping: ${topping.name}</h5>
      <h5 class="p-1">Topping Quantity: ${topping.quantity}</h5>
    </ol>
  </div>
      `
    }
  })
  // @ts-ignore
  topping.innerHTML = template
}

function addSprinkles(top) {
  let topping = toppings.find(topping => topping.name == top)
  // @ts-ignore
  topping.quantity++

  drawToppings()
}

function drawTotal() {
  let total = 0
  iceCreamFlavor.forEach(scoop => {
    total += scoop.price * scoop.quantity
  })
  vessels.forEach(vessel => {
    total += vessel.price * vessel.quantity
  }
  )
  // @ts-ignore
  document.getElementById('total').innerText = total
}
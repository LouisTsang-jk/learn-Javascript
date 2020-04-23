function convert (obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log(`getting key "${key}": ${internalValue}`)
        return internalValue
      },
      set (newValue) {
        console.log(`setting key "${key}" to: ${newValue}`)
        internalValue = newValue
      }
    })
  })
}


window.Dep = class Dep {
  constructor () {
    this.subscribers = new Set()
  }
  depend () {
    if (activeUpdate) {
      // register the current active update
    } 
  }
}

let activeUpdate

function autorun (update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate
    update()
    activeUpdate = null
  }
}

autorun(() => {
  dep.depend()
})
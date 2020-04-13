import { observable as o, action as a } from 'mobx'
import { getDeaths, TDeaths } from './deaths'





class Store {
  // DATA
  @o.ref deaths: TDeaths[] = getDeaths()
  @o.ref searchSubstr: string = ''

  @a.bound getSearchReasult(value: string) {
    // SERVER RESPONSE
    return new Promise(async (resolve, reject) => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // DELAY
      if (value.length) {
        this.deaths = getMatches(getDeaths(), value).sort(compare)
      } else {
        this.deaths = getDeaths()
      }
      resolve()
    })
  }



  // UI
  @o.ref showSearchLoader: boolean = false
  @o.ref newDeathDialog: boolean = false

  // CHANGE STORE ACTION
  @a.bound
  setState(obj: { [key in keyof this]?: any }): void {
    Object.keys(obj).forEach((el: string) => {
      return this[el as keyof this] = obj[el as keyof this]
    })
  }

}

const store = new Store()

export { store, Store }





const getMatches = (deaths: TDeaths[], value: string) => {
  return deaths.filter(d => {
    const { name, description, death } = d
    let haveMatch = false
    let matchesCount = 0

    const nameMatches = name.split(value)
    if (nameMatches.length > 1) {
      haveMatch = true
      matchesCount += nameMatches.length - 1
      d.matches = { name: nameMatches, count: matchesCount }
    }

    const descriptionMatches = description.split(value)
    if (descriptionMatches.length > 1) {
      haveMatch = true
      matchesCount += descriptionMatches.length - 1
      d.matches = { ...d.matches, description: descriptionMatches, count: matchesCount }
    }

    const deathMatches = death.split(value)
    if (deathMatches.length > 1) {
      haveMatch = true
      matchesCount += deathMatches.length - 1
      d.matches = { ...d.matches, death: deathMatches, count: matchesCount }
    }

    return haveMatch
  })
}

function compare(a: TDeaths, b: TDeaths) {
  if (a.matches!.count! > b.matches!.count!) {
    return -1;
  }
  if (a.matches!.count! < b.matches!.count!) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}
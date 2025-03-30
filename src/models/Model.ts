interface ModelAttributes<T> {
  set(value: T): void
}

interface Sync {

}

interface Events {
  on(eventName: string, callBack: () => void): void
  trigger(eventName: string): void
}


export class Model {

}
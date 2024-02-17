export interface Toast {
  id:string
  type : 'sucess' | 'warning' | 'error'
  message? : string
}

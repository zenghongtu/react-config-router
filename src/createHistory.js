import {createHashHistory, createBrowserHistory} from 'history'

export default function (mode, opts) {
  if (mode === 'hash') return createHashHistory(opts)
  return createBrowserHistory(opts)
}

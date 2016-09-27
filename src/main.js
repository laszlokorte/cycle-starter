import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {h1, div, button, p} from '@cycle/dom'

// Application function
const main = ({DOM}) => {
    const click$ = DOM.select('.my-button').events('click')
    const clickCount$ = click$.fold((acc) => acc + 1, 0)

    return {
        DOM: clickCount$.map((count) =>
            div([
                h1('Cycle Starter Kit'),
                button('.my-button', "Click me"),
                p(`You have clicked me ${count} times`),
            ])
        )
    }
}

// Your driver functions for CycleJS
const drivers = {
  DOM: makeDOMDriver('#app')
}

// Start CycleJS
run(main, drivers)

// Reload whole page if JS changes
// see https://github.com/AgentME/browserify-hmr/issues/18#issuecomment-204567445
if (module.hot) {
  module.hot.accept()
}

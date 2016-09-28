import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {html} from 'snabbdom-jsx';
import isolate from '@cycle/isolate'

// Some sub component
const subComponent = ({DOM}) => ({
    DOM: DOM
            .select('.my-button')
            .events('click')
            .fold((acc) => !acc, false)
            .map((on) =>
        <div>
            <button className="my-button">Toggle {on ? 'on' : 'off'}</button>
        </div>
    )
})

// Application root component
const main = ({DOM}) => {
    const click$ = DOM.select('.my-button').events('click')
    const clickCount$ = click$.fold((acc) => acc + 1, 0)

    const childComponent = isolate(subComponent)({DOM});

    return {
        DOM: xs.combine(
            clickCount$,
            childComponent.DOM
        ).map(([count, childDom]) =>
            <div>
                <h1>Cycle Starter Kit</h1>
                <button className="my-button">Click me hard</button>
                <p>You have clicked me {count} times</p>
                {childDom}
            </div>
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

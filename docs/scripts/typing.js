import { init } from 'ityped'

export default function $() {

    const oneElement = document.querySelector('#info')


init(oneElement, { showCursor: false, strings: ['Nice', 'One' ] });
}

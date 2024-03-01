import { signal } from "@preact/signals";

const lemons = signal('');

export default function AddLemon () {
    return (
        <>  
            <button onClick={() => lemons.value += '🍋' }>{'-> Click Here to Add Lemon <-'}</button>
            <p>{lemons.value}</p>
            <small>{'It is a component hydrated on front end using Fresh'}</small>
        </>
    )
}
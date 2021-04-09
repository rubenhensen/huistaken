<script lang="ts">
	import Fa from 'svelte-fa'
	import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
    export let completed;
    let greenOpacity = 0.4;
    let redOpacity = 1;

    function changeToGreen() {
        greenOpacity = 1;
        redOpacity = .4;
        completed = true;
    }

    function changeToRed() {
        greenOpacity = .4;
        redOpacity = 1;
        completed = false;
    }

</script>
<div style="display: inline;" on:click="{changeToGreen}">
<Fa size="2x" icon={faCheck} 
primaryColor="green" 
style="padding: 0.1em; opacity: {greenOpacity}" 
/>
</div>

<div style="display: inline;" on:click="{changeToRed}">
    <Fa size="2x" icon={faTimes} 
    primaryColor="red" 
    style="padding: 0.1em; opacity: {redOpacity}" 
    />
</div>
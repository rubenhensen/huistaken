<script lang="ts">
	import Fa from 'svelte-fa'
	import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
    export let gender : string;

    function toMale() {
        gender = "male";
    }

    function toFemale() {
        gender = "female";
    }

</script>

<p>{gender}</p>
<div style="display: inline;" on:click="{toMale}">
    <Fa size="3x" icon={faMale} 
    primaryColor="blue" 
    style="padding: 0.1em; opacity: {gender === "male" ? 1 : 0.1}" 
    />
</div>

<div style="display: inline;" on:click="{toFemale}">
    <Fa size="3x" icon={faFemale} 
    primaryColor="hotpink" 
    style="padding: 0.1em; opacity: {gender === "female" ? 1 : 0.1}" 
    />
</div>
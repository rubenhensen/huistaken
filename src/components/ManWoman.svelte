<script lang="ts">
	import Fa from 'svelte-fa'
    import { Gender } from '../types/personDefinition'
	import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
    export let gender : Gender;

    function toMale() {
        gender = Gender.Male;
    }

    function toFemale() {
        gender = Gender.Female;
    }

</script>

<div style="display: inline;" on:click="{toMale}">
    <Fa size="3x" icon={faMale} 
    primaryColor="blue" 
    style="padding: 0.1em; opacity: {gender === Gender.Male ? 1 : 0.1}" 
    />
</div>

<div style="display: inline;" on:click="{toFemale}">
    <Fa size="3x" icon={faFemale} 
    primaryColor="hotpink" 
    style="padding: 0.1em; opacity: {gender === Gender.Female ? 1 : 0.1}" 
    />
</div>
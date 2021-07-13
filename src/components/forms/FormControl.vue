<template>
    <div class="form-control">
        <label :for="field">{{ label }} :</label>
        <input
            :id="field"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'FormControl',
    props: {
        modelValue: {
            type: String,
        },
        type: {
            type: String,
            required: false,
            default: 'text',
        },
        field: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: null,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        emits: ['update:modelValue'],
    },
};
</script>

<style scoped>
.form-control {
    margin: var(--space) 0 var(--space-xs);

    font-size: var(--scale-down-2);
    text-align: left;
}

.form-control label {
    display: inline-block;
    padding: var(--space-xxs) var(--space-xs);
    padding-right: var(--space-lg);

    background-color: var(--c2);
    border-radius: var(--radius) 0 0 0;

    clip-path: polygon(0 0, calc(100% - var(--space-lg)) 0, 100% 100%, 0% 100%);
    shape-outside: polygon(
        0 0,
        calc(100% - var(--space-lg)) 0,
        100% 100%,
        0% 100%
    );

    /* border-bottom: 2px solid var(--c1); */
}

.form-control input {
    /* position: relative; */
    /* margin: var(--space-xs) auto; */
    padding: var(--space-xs);

    width: 100%;

    color: var(--c3);

    background-color: var(--lumo);

    border: 0;
    /* border-radius: var(--radius); */
    border-radius: 0 var(--radius) var(--radius);
    outline: none;

    /* z-index: 2; */
}

/* button {
    margin: var(--space) auto;
} */
</style>
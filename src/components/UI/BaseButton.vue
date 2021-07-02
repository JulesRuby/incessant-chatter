<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
};
</script>

<style scoped>
button {
    padding: var(--space-xs) var(--space);

    color: var(--c3);
    font-family: 'KoHo', sans-serif;
    font-weight: bold;
    text-decoration: none;

    background: var(--c4-a9);

    border: 0;
    border-radius: var(--radius);

    cursor: pointer;

    transition: all 175ms ease;
}

button:hover {
    background: var(--c5);
}

button:disabled {
    background: repeating-linear-gradient(
        45deg,
        var(--c5-a8) 0%,
        var(--c5-a8) 10%,
        var(--c2-a8) 10%,
        var(--c2-a8) 20%
    );
    background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 45%,
            var(--c4) 45%,
            var(--c4) 55%,
            transparent 55%,
            transparent 100%
        ),
        linear-gradient(
            45deg,
            transparent 0%,
            transparent 45%,
            var(--c4) 45%,
            var(--c4) 55%,
            transparent 55%,
            transparent 100%
        ),
        var(--c2-a8);

    opacity: 0.7;
    cursor: default;
}
</style>
<template>
    <a>Send request <span></span> <span></span></a>
</template>

<script>
export default {
    name: 'SendButton',
};
</script>

<style lang="scss" scoped>
a {
    font-family: Quicksand;
    font-weight: 700;
    color: #484848;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    padding: 5px 8px;
    font-size: 24px;
    cursor: pointer;
    align-self: flex-end;
    margin: 20px 0;
    transition: all 0.4s;
}

a::after,
a::before {
    display: block;
    position: relative;
    content: '';
    border-bottom: solid 2px#c4941d;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 250ms ease-in-out;
}

a::after {
    top: 50%;
}

a::before {
    top: 120%;
}
a:hover::after,
a:hover::before {
    transform: scaleX(1);
}
</style>

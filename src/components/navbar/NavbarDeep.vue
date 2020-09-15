<template>
    <div>
        <NavbarShallow />
        <Menu />
        <Search />
        <Cart />
    </div>
</template>

<script>
import Cart from '../cart/Cart';
import Menu from '../menu/Menu';
import Search from '../search/Search';
import NavbarShallow from './NavbarShallow';

export default {
    name: 'NavbarDeep',
    components: {
        Cart,
        Menu,
        Search,
        NavbarShallow,
    },
};
</script>

<style lang="scss" scoped></style>

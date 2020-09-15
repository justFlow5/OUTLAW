<template>
    <section class="references">
        <ul class="references-container">
            <li><a>Banitz watches</a></li>
            <li>
                <a>New watches {{ new Date().getFullYear() }}</a>
            </li>
            <li><a>Clients favourites</a></li>
            <li><a>Configure your watch</a></li>
            <li><a>History & watchmaking</a></li>
        </ul>

        <ul class="references-container">
            <li><a>Find a retailer</a></li>
            <li><a>Watch care & service</a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'ReferenceLinks',
};
</script>

<style lang="scss" scoped>
.references {
    margin: 10px 15px;

    @media (min-width: $laptop) {
        margin: 30px 70px;
    }

    & .references-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        list-style-type: none;
        padding: 30px 0;

        &:last-child {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        & li {
            margin-top: 20px;
            font-family: 'PT Serif', serif;
            font-size: 18px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            text-align: left;
            transition: color 0.3s;

            @media (min-width: $tablet) {
                font-weight: 600;
            }

            &:first-child {
                margin-top: unset;
            }

            &:hover {
                color: #daa520;
            }
        }
    }
}
</style>

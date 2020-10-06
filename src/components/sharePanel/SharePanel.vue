<template>
    <div class="wrapper">
        <h3>Share This Page</h3>
        <div class="media-container">
            <div class="medium"><Fb /></div>
            <div class="medium"><Twitter /></div>
            <div class="medium"><Linkedin /></div>
            <div class="medium"><Pinterest /></div>
            <div class="medium"><Email /></div>
        </div>
    </div>
</template>

<script>
import Fb from '../../assets/mediaIcons/Fb';
import Twitter from '../../assets/mediaIcons/Twitter';
import Linkedin from '../../assets/mediaIcons/Linkedin';
import Pinterest from '../../assets/mediaIcons/Pinterest';
import Email from '../../assets/mediaIcons/Email';

export default {
    name: 'SharePanel',

    components: {
        Fb,
        Twitter,
        Linkedin,
        Pinterest,
        Email,
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    background-color: rgb(247, 247, 247);

    & h3 {
        text-transform: uppercase;

        letter-spacing: 2px;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 25px;
    }

    & .media-container {
        display: flex;
        position: relative;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        @media (min-width: $mobileL) {
            width: 75%;
        }

        @media (min-width: $laptop) {
            width: 50%;
        }
        & .medium {
            cursor: pointer;
            border-radius: 50%;
            background-color: rgb(255, 255, 255);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            position: relative;
            width: 40px;
            height: 40px;
            margin-right: 10px;
            transition: all 0.3s;

            @media (min-width: $mobileL) {
                width: 45px;
                height: 45px;
                margin-right: 15px;
            }

            @media (min-width: $laptop) {
                margin-right: 20px;
            }

            &:hover {
                background-color: #daa520;

                & svg {
                    fill: rgb(255, 255, 255);
                }
            }
            & svg {
                fill: #daa520;

                width: 50%;
                height: 50%;
                transition: all 0.3s;
            }
        }
    }
}
</style>

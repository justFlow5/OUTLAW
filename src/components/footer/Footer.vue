<template>
    <footer class="footer-container">
        <div class="sections-container">
            <div class="section-wrapper">
                <div class="rolex-section">
                    <h5 class="section-title">Banitz watches</h5>
                    <ul>
                        <li>
                            <router-link to="/bar">Banitz watches</router-link>
                        </li>
                        <li>
                            <router-link to="/bar"
                                >New watches 2020</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                >Configure your watch</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar">Watch finder</router-link>
                        </li>
                        <li>
                            <router-link to="/bar">Women's watches</router-link>
                        </li>
                        <li>
                            <router-link to="/bar"
                                >History & Watchmaking</router-link
                            >
                        </li>
                    </ul>
                </div>

                <div class="rolex-section">
                    <h5 class="section-title">Services</h5>
                    <ul>
                        <li>
                            <router-link to="/bar">Find a retailer</router-link>
                        </li>
                        <li>
                            <router-link to="/bar"
                                >Watch care & service</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar">Your selection</router-link>
                        </li>
                        <li>
                            <router-link to="/bar"
                                >Frequently Asked Questions</router-link
                            >
                        </li>
                        <li><router-link to="/bar">Newsroom</router-link></li>
                    </ul>
                </div>
            </div>

            <div class="section-wrapper collection">
                <div class="rolex-section collection">
                    <h5 class="section-title">The collection</h5>
                    <ul>
                        <div>
                            <li>Air-King</li>
                            <li>Cosmograph Daytona</li>
                            <li>Datejust</li>
                            <li>Lady-Datejust</li>
                            <li>Day-Date</li>
                            <li>Explorer</li>
                        </div>
                        <div>
                            <li>GMT-Master II</li>
                            <li>Milgauss</li>
                            <li>Oyster Perpetual</li>
                            <li>Pearlmaster</li>
                            <li>Sea-Dweller</li>
                            <li>Sky-Dweller</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="rolex-section media">
                    <h5 class="section-title">Official channels</h5>
                    <ul>
                        <li>
                            <router-link to="/bar"
                                ><Fb /><span>Facebook</span></router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                ><Twitter /><span>Twitter</span></router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                ><Instagram /><span
                                    >Instagram</span
                                ></router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                ><Linkedin /><span>LinkedIn</span></router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                ><Pinterest /><span
                                    >Pinterest</span
                                ></router-link
                            >
                        </li>
                        <li>
                            <router-link to="/bar"
                                ><TikTok /><span>TikTok</span></router-link
                            >
                        </li>

                        <li>
                            <router-link to="/bar"
                                ><Yt /><span>Youtube</span></router-link
                            >
                        </li>
                    </ul>
                </div>

                <div class="rolex-section">
                    <h5 class="section-title">Legal Notices</h5>
                    <ul>
                        <li>
                            <router-link to="/bar">Terms of Use</router-link>
                        </li>
                        <li>
                            <router-link to="/bar">Privacy Notice</router-link>
                        </li>
                        <li><router-link to="/bar">Cookies</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="toTop-container">
            <span @click="backtoTop"><ArrowUpIcon /></span>
        </div>
        <span class="caption">Made by JustFlow | 2020</span>
    </footer>
</template>

<script>
import ArrowUpIcon from '../../assets/icons/ArrowUp';

import Fb from '../../assets/mediaIcons/Fb';
import Twitter from '../../assets/mediaIcons/Twitter';
import Linkedin from '../../assets/mediaIcons/Linkedin';
import Yt from '../../assets/mediaIcons/Yt';
import Pinterest from '../../assets/mediaIcons/Pinterest';
import TikTok from '../../assets/mediaIcons/TikTok';
import Instagram from '../../assets/mediaIcons/Instagram';

export default {
    name: 'Footer',

    methods: {
        backtoTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },

    components: {
        Fb,
        Twitter,
        Linkedin,
        Yt,
        Pinterest,
        TikTok,
        Instagram,
        ArrowUpIcon,
    },
};
</script>

<style lang="scss" scoped>
.footer-container {
    position: relative;
    background-color: rgb(33, 33, 33);
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    padding: 50px 20px 0;
    display: flex;
    flex-direction: column;

    @media (min-width: $laptop) {
        padding: 50px 10vw 0;
    }

    & .toTop-container {
        display: block;
        position: relative;
        width: 100%;
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;

        & > span {
            display: inline-block;
            position: relative;
            width: 30px;
            height: 30px;
            & > svg {
                width: 100%;
                height: 100%;
                fill: rgb(212, 212, 212);
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    fill: #daa520;
                }
            }
        }
    }
}

.sections-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: $tablet) {
        flex-direction: row;
    }
}

.section-wrapper {
    position: relative;
    width: 49%;
    display: flex;
    flex-direction: column;

    &:last-child,
    &:first-child {
        @media (max-width: $tablet) {
            width: 33%;

            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            & .rolex-section {
                flex: 0 0 49%;
            }
        }
    }

    &.collection {
        @media (max-width: $tablet) {
            width: 100%;
        }
    }

    @media (min-width: $tablet) {
        width: 33%;
    }
}

.rolex-section {
    margin: 30px 0;

    position: relative;
    &.collection {
        & div {
            display: inline-block;
            width: 49%;

            @media (min-width: $tablet) {
                display: block;
            }
        }
    }

    &.media {
        & a {
            display: flex;
            align-items: center;
        }
        & svg {
            width: 15px;
            height: 15px;
            fill: rgb(212, 212, 212);
            margin-right: 5px;
            transition: all 0.3s;
            @media (min-width: $tablet) {
                width: 17px;
                height: 17px;
            }
            @media (min-width: $laptop) {
                width: 20px;
                height: 20px;
            }
        }
        & li:hover svg {
            fill: #daa520;
        }
    }
}

.section-title {
    font-size: 14px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0px 0px 5px;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    color: rgb(212, 212, 212);
    width: 80%;

    @media (min-width: $laptop) {
        font-size: 16px;
    }
}

ul {
    list-style-type: none;
}

li {
    font-size: 14px;
    color: rgb(212, 212, 212);
    text-align: left;
    transition: all 0.3s;
    margin: 10px 0;
    cursor: pointer;

    @media (min-width: $laptop) {
        font-size: 16px;
        margin: 15px 0;
    }
    &:hover {
        color: #daa520;
    }
}

.caption {
    font-size: 9px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 999;
    color: white;
    pointer-events: none;
}
</style>

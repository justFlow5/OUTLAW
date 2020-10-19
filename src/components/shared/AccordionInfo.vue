<template>
    <div class="accordion-container">
        <div class="accordion" @click="toggleOpen">
            <h4>
                {{ header }}
                <span class="caret" :class="{ isOpen }"> <ArrowUp /></span>
            </h4>
            <transition
                name="expand"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
            >
                <div v-show="isOpen" class="content">
                    <ul v-if="category === 'tech-data'">
                        <li
                            class="tech-data"
                            v-for="(value, name, index) in content"
                            :key="index"
                        >
                            <span>{{ `${name}:` }}</span
                            ><span>{{ value }}</span>
                        </li>
                    </ul>

                    <ul v-else-if="category === 'features'">
                        <li
                            class="features-data"
                            v-for="(value, name, index) in content"
                            :key="index"
                        >
                            <v-popover
                                offset="10"
                                placement="left"
                                trigger="hover"
                            >
                                <span class="feature-title">{{ name }}</span>
                                <template slot="popover">
                                    <h3 class="feature-category-title">
                                        {{ name }}
                                    </h3>
                                    <p class="feature-category-content ">
                                        {{ value }}
                                    </p>
                                </template>
                            </v-popover>

                            <span class="feature-content">{{ value }}</span>
                        </li>
                    </ul>

                    <p v-else class="warranty">
                        {{ content }}
                    </p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ArrowUp from '../../assets/icons/ArrowUp';

export default {
    name: 'Accordion',
    props: ['header', 'content', 'category'],
    data() {
        return {
            isOpen: false,
            windowWidth: '',
        };
    },

    methods: {
        toggleOpen() {
            if (this.windowWidth > 1024) return;
            else this.isOpen = !this.isOpen;
        },

        enter(el) {
            el.style.height = 'auto';
            const height = getComputedStyle(el).height;
            el.style.height = 0;
            getComputedStyle(el);
            setTimeout(() => {
                el.style.height = height;
            });
        },
        afterEnter(el) {
            el.style.height = 'auto';
        },
        leave(el) {
            el.style.height = getComputedStyle(el).height;
            getComputedStyle(el);
            setTimeout(() => {
                el.style.height = 0;
            });
        },

        handleResize() {
            this.windowWidth = window.innerWidth;
        },
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    components: {
        ArrowUp,
    },
};
</script>

<style lang="scss">
.accordion-container {
    position: relative;
}

.accordion {
    position: relative;
    border-bottom: 1px solid #e2e2e2;
    cursor: pointer;

    @media (min-width: $laptop) {
        cursor: auto;
    }

    &:first-child {
        border-top: 1px solid #e2e2e2;
    }
    & h4 {
        text-transform: uppercase;
        font-size: 23px;
        color: #daa520;
        font-weight: 500;
        position: relative;
        padding: 20px 0;
    }

    & .content {
        padding-bottom: 20px;
        padding: 0 10px 20px;
        @media (min-width: $laptop) {
            display: inline-block !important;
            width: 100%;
            text-align: left;
        }

        & > p {
            font-size: 16px;
            text-align: left;
            line-height: 1.4;
        }
    }
}

.caret {
    position: absolute;
    top: 0;
    right: 0px;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;

    @media (min-width: $tablet) {
        right: 15px;
    }

    @media (min-width: $laptop) {
        right: 25px;
    }

    & > svg {
        fill: rgb(33, 33, 33);
        height: 100%;
        width: 100%;
        transform: rotate(180deg);
        transition: all 0.1s;
    }

    &.isOpen > svg {
        transform: rotate(360deg);
    }

    @media (min-width: $laptop) {
        display: none;
    }
}

.tech-data,
.features-data,
.warranty {
    margin: 0 auto;
    width: 70%;

    & span {
        font-size: 16px;
        padding: 10px 0;
        display: inline-block;
        line-height: 1.3;
    }

    & span:first-child {
        font-weight: 700;
        margin-right: 5px;
    }

    @media (min-width: $laptop) {
        width: 100%;
    }
}

.tech-data {
    line-height: 0.8;
    display: flex;
    flex-direction: column;
    padding: 7px 0;
    width: 70%;

    & span {
        padding: 0;

        &:first-child {
            margin-bottom: 3px;
        }
    }
    @media (min-width: $mobileL) {
        width: 40%;
    }

    @media (min-width: $laptop) {
        flex-direction: row;
        width: 100%;
    }
}

.features-info {
    & .features-data {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        & span:first-child {
            font-weight: 700;
            padding-bottom: 5px;
        }

        & .feature-title {
            cursor: help;
            @media (min-width: $laptop) {
                font-size: 15px;
                letter-spacing: 2px;
                font-weight: 500;
                transition: color 0.3s;
                &:hover {
                    color: #daa520;
                }
            }
        }
    }

    & ul {
        @media (min-width: $laptop) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;

            & .feature-content {
                display: none;
            }

            & li {
                flex: 0 0 49%;
                margin: unset;
            }
        }
    }
}

.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}

.tooltip {
    display: none;
    @media (min-width: $laptop) {
        display: block !important;
        z-index: 10000;
        width: 400px;
        border: 1px solid gray;
        padding: 15px;
        background: white;
        font-family: Quicksand;

        & .feature-category-title {
            margin-bottom: 15px;
            font-size: 16px;
            letter-spacing: 2px;
        }

        & .feature-category-content {
            font-size: 14px;
            line-height: 1.2;
        }
        .tooltip-inner {
            color: rgb(33, 33, 33);
            border-radius: 16px;
            padding: 5px 10px 4px;
            z-index: 10000;
        }
        .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: #666e6f;
            z-index: 1;
        }

        &[x-placement^='left'] {
            margin-right: 10px;
            .tooltip-arrow {
                border-width: 7px 0 7px 7px;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                right: -7px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
}
</style>

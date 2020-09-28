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
                            <span>{{ name }}</span
                            ><span>{{ value }}</span>
                        </li>
                    </ul>

                    <p v-else class="warranty">{{ content }}</p>
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
        };
    },

    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen;
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
        pointer-events: none;
        cursor: auto;
    }

    &:first-child {
        border-top: 1px solid #e2e2e2;
    }
    & h4 {
        text-transform: uppercase;
        font-size: 23px;
        color: #daa520;
        position: relative;
        padding: 20px 0;
        font-weight: 300;
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
            font-size: 17px;
            text-align: left;
            line-height: 1.3;
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
        font-size: 18px;
        padding: 10px 0;
        display: inline-block;
    }

    & span:first-child {
        font-weight: 700;
        margin-right: 5px;
    }

    @media (min-width: $laptop) {
        width: 100%;
    }
}

.features-data {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & span:first-child {
        font-weight: 700;
        padding-bottom: 5px;
    }
}

.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}
</style>

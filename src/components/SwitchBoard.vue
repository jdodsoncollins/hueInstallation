<template>
    <div>
        <div class="row small-up-2 medium-up-4 large-up-4 flipp-switch">
            <div class="column">
                <switch :icon="icons.redIconCircle" :heart="icons.redIcon" @click="submitVote('red')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.lightOrangeIconCircle" :heart="icons.lightOrangeIcon" @click="submitVote('lightOrange')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.orangeIconCircle" :heart="icons.orangeIcon" @click="submitVote('orange')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.yellowIconCircle" :heart="icons.yellowIcon" @click="submitVote('yellow')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.greenIconCircle" :heart="icons.greenIcon" @click="submitVote('green')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.blueIconCircle" :heart="icons.blueIcon" @click="submitVote('blue')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.violetIconCircle" :heart="icons.violetIcon" @click="submitVote('violet')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.magentaIconCircle" :heart="icons.magentaIcon" @click="submitVote('magenta')"></switch>
            </div>
        </div>

        <div class="ef-logo">
            <img :src="eventFarmLogo" alt="Event Farm Logo">
        </div>
    </div>
</template>

<style lang="scss">
    .ef-logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 35px 0 25px;

        img {
            max-width: 100px;
        }
    }
    .flipp-switch .column:nth-child(odd) {
        position: relative;
        left: 15px;
    }
    .flipp-switch .column:nth-child(even) {
        position: relative;
        right: 15px;
    }
</style>

<script>

    import violetIconCircle from '../assets/icons/heart_violet_circle.svg';
    import lightOrangeIconCircle from '../assets/icons/peach_peach_circle.svg';
    import orangeIconCircle from '../assets/icons/sun_orange_circle.svg';
    import yellowIconCircle from '../assets/icons/smile_yellow_circle.svg';
    import greenIconCircle from '../assets/icons/volt_green_circle.svg';
    import blueIconCircle from '../assets/icons/water_blue_circle.svg';
    import redIconCircle from '../assets/icons/music_red_circle.svg';
    import magentaIconCircle from '../assets/icons/flower_magenta_circle.svg';

    import violetIcon from '../assets/icons/heart_violet.svg';
    import lightOrangeIcon from '../assets/icons/peach_peach.svg';
    import orangeIcon from '../assets/icons/sun_orange.svg';
    import yellowIcon from '../assets/icons/smile_yellow.svg';
    import greenIcon from '../assets/icons/volt_green.svg';
    import blueIcon from '../assets/icons/water_blue.svg';
    import redIcon from '../assets/icons/music_red.svg';
    import magentaIcon from '../assets/icons/flower_magenta.svg';

    import eventFarmLogo from '../assets/large.square.logo.white.png';

    import 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';

    import Switch from './Switch';
    import Firebase from 'firebase';
    import config from '../config/firebase.config.js'

    Firebase.initializeApp(config.firebase);

    Firebase.auth().signInAnonymously().catch(() => {
        // No op
    });

    export default {
        name: 'SwitchBoard',
        components: {
            Switch: Switch,
            'carosuel-container': Swipe,
            'carousel-item': SwipeItem,
        },
        data() {
            return {
                eventFarmLogo: eventFarmLogo,
                icons: {
                    redIcon: redIcon,
                    lightOrangeIcon: lightOrangeIcon,
                    orangeIcon: orangeIcon,
                    yellowIcon: yellowIcon,
                    greenIcon: greenIcon,
                    blueIcon: blueIcon,
                    violetIcon: violetIcon,
                    magentaIcon: magentaIcon,
                    redIconCircle: redIconCircle,
                    lightOrangeIconCircle: lightOrangeIconCircle,
                    orangeIconCircle: orangeIconCircle,
                    yellowIconCircle: yellowIconCircle,
                    greenIconCircle: greenIconCircle,
                    blueIconCircle: blueIconCircle,
                    violetIconCircle: violetIconCircle,
                    magentaIconCircle: magentaIconCircle,
                }
            };
        },
        methods: {
            submitVote(color) {
                const colorOption = Firebase.database().ref("Lights/" + color);
                colorOption.transaction(function (post) {
                    if (post == null) {
                        return 0;
                    }
                    return ++post;
                }).then(function (response) {
//                    console.log('success');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
    };
</script>

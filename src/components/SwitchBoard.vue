<template>
    <div>
        <div class="row small-up-2 medium-up-4 large-up-4">
            <div class="column">
                <switch :icon="icons.redIcon" @click="submitVote('red')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.lightOrangeIcon" @click="submitVote('lightOrange')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.orangeIcon" @click="submitVote('orange')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.yellowIcon" @click="submitVote('yellow')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.greenIcon" @click="submitVote('green')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.blueIcon" @click="submitVote('blue')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.violetIcon" @click="submitVote('violet')"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.magentaIcon" @click="submitVote('magenta')"></switch>
            </div>
        </div>
    </div>
</template>

<script>

    import redIcon from '../assets/images/icons/heart_violet_circle.svg';
    import lightOrangeIcon from '../assets/images/icons/peach_peach_circle.svg';
    import orangeIcon from '../assets/images/icons/sun_orange_circle.svg';
    import yellowIcon from '../assets/images/icons/smile_yellow_circle.svg';
    import greenIcon from '../assets/images/icons/volt_green_circle.svg';
    import blueIcon from '../assets/images/icons/water_blue_circle.svg';
    import violetIcon from '../assets/images/icons/music_red_circle.svg';
    import magentaIcon from '../assets/images/icons/flower_magenta_circle.svg';

    import 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';

    import Switch from './Switch';
    import Firebase from 'firebase';

    Firebase.initializeApp({
        apiKey: 'AIzaSyCMrWE7gWzGjHW08YimzSpGgnCXbTbzhMk',
        authDomain: 'flipp-a77fe.firebaseapp.com',
        databaseURL: 'https://flipp-a77fe.firebaseio.com',
        storageBucket: '',
        messagingSenderId: '636127035750',
    });

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
                icons: {
                    redIcon: redIcon,
                    lightOrangeIcon: lightOrangeIcon,
                    orangeIcon: orangeIcon,
                    yellowIcon: yellowIcon,
                    greenIcon: greenIcon,
                    blueIcon: blueIcon,
                    violetIcon: violetIcon,
                    magentaIcon: magentaIcon,
                }
            };
        },
        methods: {
            submitVote(color) {
                console.log('this is color: ' + color);

                const colorOption = Firebase.database().ref("Lights/" + color);
                colorOption.transaction(function (post) {
                    if (post == null) {
                        return 0;
                    }
                    return ++post;
                }).then(function (response) {
                    console.log('success');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
    };
</script>

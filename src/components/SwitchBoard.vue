<template>
    <div>
        <div class="row column text-center">
            <img :src="icons.flippBrand" alt="" style="max-width: 300px;">
        </div>
        <div class="row small-up-2 medium-up-4 large-up-4">
            <div class="column">
                <switch :icon="icons.heartIcon" @click="submitVote(0)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.peachIcon" @click="submitVote(1)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.sunIcon" @click="submitVote(2)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.smileIcon" @click="submitVote(3)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.voltIcon" @click="submitVote(4)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.waterIcon" @click="submitVote(5)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.musicIcon" @click="submitVote(6)"></switch>
            </div>
            <div class="column">
                <switch :icon="icons.flowerIcon" @click="submitVote(7)"></switch>
            </div>
        </div>
    </div>
</template>

<script>

    import flippBrand from '../assets/flipBrand.png';
    import heartIcon from '../assets/images/icons/heart_red.svg';
    import peachIcon from '../assets/images/icons/peach_light_orange.svg';
    import sunIcon from '../assets/images/icons/sun_orange.svg';
    import smileIcon from '../assets/images/icons/smile_yellow.svg';
    import voltIcon from '../assets/images/icons/volt_green_yellow.svg';
    import waterIcon from '../assets/images/icons/water_blue.svg';
    import musicIcon from '../assets/images/icons/music_violet.svg';
    import flowerIcon from '../assets/images/icons/flower_magenta.svg';

    import 'vue-swipe/dist/vue-swipe.css';
    import {Swipe, SwipeItem} from 'vue-swipe';

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
                    flippBrand: flippBrand,
                    heartIcon: heartIcon,
                    peachIcon: peachIcon,
                    sunIcon: sunIcon,
                    smileIcon: smileIcon,
                    voltIcon: voltIcon,
                    waterIcon: waterIcon,
                    musicIcon: musicIcon,
                    flowerIcon: flowerIcon,
                }
            };
        },
        methods: {
            submitVote(id) {
                const colorOption = Firebase.database().ref("Lights/option" + id);
                colorOption.transaction(function (post) {
                    if (post == null) {
                        return 0;
                    }
                    return ++post;
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
    };
</script>

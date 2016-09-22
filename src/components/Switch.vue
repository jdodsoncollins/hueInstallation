<template>
  <div class="like-container noselect" @click="clickLike()">
    <img :src="icon">
    <ul class="heart-container noselect">
      <li v-for="like in likes | likeFilter">
        <div class="heart noselect" :style="like.styleObject"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import heartBlue from '../assets/images/hearts/blue.svg';
  import heartMagenta from '../assets/images/hearts/magenta.svg';
  import heartOrange from '../assets/images/hearts/orange.svg';
  import heartPeach from '../assets/images/hearts/peach.svg';
  import heartPurple from '../assets/images/hearts/purple.svg';
  import heartRed from '../assets/images/hearts/red.svg';
  import heartGreen from '../assets/images/hearts/green.svg';
  import heartYellow from '../assets/images/hearts/yellow.svg';

  export default {
    props: {
      icon: {
        required: true
      },
    },

    filters: {
      likeFilter(options) {
        options.forEach((object, key) => {
          let expired = ((new Date) - object.datetime) > 5000;
          if (expired) {
            options.splice(key);
          }
        });
        return options;
      },
    },

    data() {
      return {
        likes: [],
        hearts: {
          'heart1': heartBlue,
          'heart2': heartMagenta,
          'heart3': heartOrange,
          'heart4': heartPeach,
          'heart5': heartPurple,
          'heart6': heartRed,
          'heart7': heartGreen,
          'heart8': heartYellow,
        }
      };
    },


    methods: {
      numberBetween(start, end)  {
        return Math.floor(Math.random() * ((end - start) + 1) + start);
      },

      clickLike() {
        let animationTime = this.numberBetween(7, 20) / 10;
        let animationName = 'flow' + this.numberBetween(1, 4);
        let animationSize = 'size' + this.numberBetween(1, 3);

        let animationOne = animationTime + 's ' + animationName + ' forwards';
        let animationTwo = animationTime + 's fadeOut forwards';
        let animationThree = animationTime + 's ' + animationSize + ' forwards';

        let heartChoice = 'heart' + this.numberBetween(1, 8);
        heartChoice = this.hearts[heartChoice];

        this.likes.push({
          datetime: Date.now(),
          styleObject: {
            backgroundImage: 'url(' + heartChoice + ')',
            animation: animationOne + ', ' + animationTwo + ', ' + animationThree,
          },
        });
      },
    },

  }
</script>

<style lang="scss">

  .noselect {
    user-select: none;
  }

  .like-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .like-container img {
    padding: 25px;
  }

  .vote-icon,
  .vote-icon img {
    z-index: 999 !important;
  }

  .heart-container {
    position: relative;
    top: -100px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: absolute;
      display: block;
      z-index: 1;
    }
  }

  .heart {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes flow1 {
    0% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(5px, -80px, -100px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(23px, -200px, -15px);
      animation-timing-function: ease-in;
    }
  }

  @keyframes flow2 {
    0% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(13px, -80px, -100px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(20px, -200px, -15px);
      animation-timing-function: ease-in;
    }
  }

  @keyframes flow3 {
    0% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(-5px, -80px, -100px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(-25px, -200px, -15px);
      animation-timing-function: ease-in;
    }
  }

  @keyframes flow4 {
    0% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(-10px, -80px, -100px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(-30px, -170px, -15px);
      animation-timing-function: ease-in;
    }
  }

  @keyframes size1 {
    0% {
      animation-timing-function: ease-in;
    }
    50% {
      width: 45px;
      height: 45px;
      animation-timing-function: ease-out;
    }
    100% {
      width: 55px;
      height: 55px;
      animation-timing-function: ease-in;
    }
  }

  @keyframes size2 {
    0% {
      animation-timing-function: ease-in;
    }
    50% {
      width: 45px;
      height: 45px;
      animation-timing-function: ease-out;
    }
    100% {
      width: 30px;
      height: 30px;
      animation-timing-function: ease-in;
    }
  }

  @keyframes size3 {
    0% {
      animation-timing-function: ease-in;
    }
    50% {
      width: 40px;
      height: 40px;
      animation-timing-function: ease-out;
    }
    100% {
      width: 20px;
      height: 20px;
      animation-timing-function: ease-in;
    }
  }
</style>

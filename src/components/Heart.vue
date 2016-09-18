<template>
  <div>
    <button @click="clickLike()" style="z-index:999">Like</button>
    <ul class="heart-container">
      <li v-for="like in likes">
        <div class="heart" :style="like.styleObject"></div>
        <img :src="image">
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    props: {
      icon: {
        required: true
      },
    },

    computed: {
      image() {
        console.log(this.icons, this.icon);
        return this.icons[this.icon];
      },
    },

    data() {
      return {
        likes: []
      };
    },
    methods: {

      numberBetween(start, end)  {
        return Math.floor(Math.random() * ((end - start) + 1) + start);
      },

      clickLike() {
        let animationTime = this.numberBetween(7, 10) / 10;
        let animationName = 'flow' + this.numberBetween(1, 4);
        let animationSize = 'size' + this.numberBetween(1, 3);

        let animationOne = animationTime + 's ' + animationName + ' forwards';
        let animationTwo = animationTime + 's fadeOut forwards';
        let animationThree = animationTime + 's ' + animationSize + ' forwards';

        this.likes.push({
          styleObject: {
            background: 'url(' + this.icon + ')',
            animation: animationOne + ', ' + animationTwo + ', ' + animationThree,
          },
        });
      },

    },
  }
</script>

<style lang="scss">
  .heart-container {
    list-style-type: none;

    li {
      position: absolute;
      display: block;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .owl-stage-outer {
    overflow: visible !important;
  }

  .heart {
    display: inline-block;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
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
      animation-timing-function: ease-out;
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
      animation-timing-function: ease-out;
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
      animation-timing-function: ease-out;
    }
  }
</style>

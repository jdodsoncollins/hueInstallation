<template>
  <div>
    <button @click="clickLike()" style="z-index:999">Like</button>
    <ul class="heart-container">
      <li v-for="like in likes" style="background-color: white;">
        <div class="heart" v-bind:style="like.styleObject"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        likes: []
      }
    },
    methods: {
      numberBetween(start, end)  {
        return Math.floor(Math.random() * ((end-start)+1) + start);
      },

      clickLike() {
        let animationTime = this.numberBetween(7,10) / 10;
        let animationName = 'flow' + this.numberBetween(1,4);
        let animationSize = 'size' + this.numberBetween(1,3);

        this.likes.push({
          styleObject: {
            backgroundColor: 'blue',
            fontSize: '13px',
            animation: animationTime + 's ' + animationName + ' forwards, ' + animationTime + 's fadeOut forwards, ' + animationTime + 's ' + animationSize + ' forwards'
          }
        });
      },

    },
  }
</script>

<style>
.heart-container {
  list-style-type: none;
}

.heart {
  position: absolute;
  display: block;
}
.owl-stage-outer {
  overflow: visible !important;
}
.heart {
  display: inline-block;
  bottom: 50px;
  width: 50px;
  height: 50px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png') no-repeat;
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
    transform: translate3d(13px, -80px, -100px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translate3d(-10px, -200px, -15px);
    animation-timing-function: ease-out;
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
    animation-timing-function: ease-out;
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
    animation-timing-function: ease-out;
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
    animation-timing-function: ease-out;
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

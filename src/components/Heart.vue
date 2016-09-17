<template>
  <span class="heart"></span>
</template>

<style>
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

@keyframes verticalTransition {
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
.owl-carousel .owl-stage-outer {
     overflow: visible;
}
.heart {
    display: inline-block;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png');
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1s verticalTransition forwards, 1s fadeOut forwards;
}
</style>

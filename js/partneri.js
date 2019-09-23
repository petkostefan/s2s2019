
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    hoverpause: false,
    perView: 4,
    direction: 'rtl',
    breakpoints:{
      1024: {
        perView: 3
      },
      600:{
        perView: 1
      }
    },
    autoplay: 3000
  })
  .mount()
  new Glide('.partneri', {
    type: 'carousel',
    startAt: 0,
    hoverpause: false,
    perView: 4,
    direction: 'rtl',
    breakpoints:{
      1024: {
        perView: 3
      },
      600:{
        perView: 1
      }
    },
    autoplay: 3000
  })

.mount()
new Glide('.mediji', {
    type: 'carousel',
    startAt: 0,
    hoverpause: false,
    perView: 4,
    direction: 'rtl',
    breakpoints:{
      1024: {
        perView: 3
      },
      600:{
        perView: 1
      }
    },
    autoplay: 3000
  })
.mount()
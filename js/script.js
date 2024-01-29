 

const { createApp }=Vue
  createApp({
    data(){
        return{
            firstImage:0,
            autoScroll:null,
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]

        }
    },
    created(){
        this.activeInterval()
    },
    methods:{
        nextImage(){
            this.firstImage++
            if(this.firstImage > this.slides.length -1 ){
                this.firstImage = 0
            }
        },
        prevImage(){
            this.firstImage--
            if(this.firstImage < 0 ){
                this.firstImage = this.slides.length -1
            }
            
        },
        changeImage(bozo){
            this.firstImage= bozo
        },
        activeInterval(){
            this.autoScroll=setInterval(()=> {
                this.nextImage()
            },2000)
        },
        stopInterval(){
            clearInterval(this.autoScroll)
        },

    }
  }).mount('#app')
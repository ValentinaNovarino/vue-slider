var app = new Vue (
    {
        el: '#root',
        data: {
            title: 'Slider con vue',
            indexImage: 0,
            images: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-york-central-park-during-autumn-royalty-free-image-625054424-1534258442.jpg?resize=480:*',
                'https://www.viaggi-usa.it/wp-content/uploads/2013/11/cosa-fare-a-new-york.jpg',
                'https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg',
                'https://www.serenapuosi.com/wp-content/uploads/2011/08/canzoni-su-new-york-1080x720.jpg',
                'https://www.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/New_York_Manhattan_Skyline_XL_Pixabay_500_500_80_s_c1.jpg'
            ],
            button: 'PLAY'
        },
        methods: {
            prevImage() {
                this.indexImage--;
                if (this.indexImage < 0) {
                    this.indexImage = this.images.length - 1;
                }
            },
            nextImage() {
                this.indexImage++;
                if (this.indexImage == this.images.length) {
                    this.indexImage = 0;
                }
            },
            autoplay() {
                setInterval(() => {
                    this.nextImage();
                }, 2000);
            }
       },

    }

);

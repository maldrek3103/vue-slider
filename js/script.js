Vue.config.devtools = true;

var root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },
        increaseIndex() {
            const lastIndex = this.images.length - 1;
            this.currentIndex = this.currentIndex === lastIndex ? 0 : this.currentIndex + 1;
        },
        decreaseIndex() {
            const lastIndex = this.images.length - 1;
            this.currentIndex = this.currentIndex === 0 ? lastIndex : this.currentIndex - 1;
        },
        setCurrentIndex(newIndex) {
            this.currentIndex = newIndex;
        }
    },
})
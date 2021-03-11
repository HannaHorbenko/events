// Vue.config.debug = true;
// Vue.config.devtools = true;

const app = Vue.createApp({
    data() {
        return {
            email: null,
            telegramToken: '1584103371:AAFlztD0UVG4YP73af2kBJllZMJuxEnUcGo',
            botID: '109844602',
            chatId: '525423109'

        }
    },
    methods: {
        subscribe() {
            console.log(this.email);
        }
    }

});

app.component('countdown', {
    props: ['todate'],
    data() {
        return {
            till: Date.parse(this.todate),
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
            intervalId: null

        }
    },
    mounted() {
        this.intervalId = setInterval(() => {
            let now = new Date(),
                diff = Math.floor((this.till - now.getTime()) / 1000);

            if (diff < 0) {
                clearInterval(this.intervalId);
            } else {
                this.days = Math.floor(diff / (60 * 60 * 24));
                diff = diff - this.days * (60 * 60 * 24);


                this.hours = Math.floor(diff / (60 * 60));
                diff = diff - this.hours * (60 * 60);

                this.mins = Math.floor(diff / 60);
                diff = diff - this.mins * 60;

                this.secs = diff;

            }
        }, 1000)
    },
    template: `
                     <ul class="countdown">
                        <li class="countdown__item">
                            <div class="countdown__num">{{days}}</div>
                            <div class="countdown__text">days</div>
                        </li>
                        <li class="countdown__item">
                            <div class="countdown__num">{{hours}}</div>
                            <div class="countdown__text">hours</div>
                        </li>
                        <li class="countdown__item">
                            <div class="countdown__num">{{mins}}</div>
                            <div class="countdown__text">minutes</div>
                        </li>
                        <li class="countdown__item">
                            <div class="countdown__num">{{secs}}</div>
                            <div class="countdown__text">seconds</div>
                        </li>
                    </ul>
                `
});

app.mount('#app');
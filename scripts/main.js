const app = new Vue({
    el: '#app',
    data: {
        loading_comment: 'now loading...',
        modal_show: true,
        show: false,
        object: ''
    },
    methods: {
        select: (e) => {
            const limit = "50000";
            const title = "";
            const author = "";
            const url = `https://pubserver2.herokuapp.com/api/v0.1/books?&limit=${limit}&title=${title}&author=${author}`;
            axios.get(url)
                .then((res) => {
                    console.log(res);
                    const num = ~~(Math.random() * res.data.length);
                    console.log(num);
                    app.object = res.data[num];
                    setTimeout(() => {
                        app.show = true;
                        setTimeout(() => {
                            app.modal_show = false;
                        }, 1000);
                    }, 500);
                })
        }
    },
    beforeMount() {
        // 読み込み時に実行する処理
        this.select();
    }
});

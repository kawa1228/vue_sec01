var app = new Vue({
    el: '#app',
    data: {
        message: '初期メッセージ',
        list: ['りんご', 'ばなな', 'いちご'],
        count: 0,
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        ok: true,
        type: 'A',

        name: 'キマイラ',
        lists: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        text: 'Vue'
    },
    methods: {
        handClick: function (e) {
            alert(e.target)
        },
        increment() {
            this.count += 1
        },
        doAdd() {
            var max = this.lists.reduce((a, b) => {
                return a.id > b.id ? a.id : b.id
            }, 0)
            this.lists.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove(index) {
            this.lists.splice(index, 1)
            /*
            要素の置換
            this.$set(this.lists, 0, { id: 1, name: 'キングスライム', hp: 500 })
            */
        },
        doAttack(index) {
            if (this.lists[index].hp) {
                this.lists[index].hp -= 10
            }
        },
    }
})

app.list.push('きうい')
console.log(app.list)

app.message = 'hello vue!'



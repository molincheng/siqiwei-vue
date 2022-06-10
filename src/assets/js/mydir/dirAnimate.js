let once = true
let add = null

import route from '@/router'


function init(el, binding) {
    let elArr = []
    let isScroll = true

    route.beforeEach((to, from, next) => {
        isScroll = true
        next()
    })

    var _ref

    if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        start()
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            start()
        })
    }

    function start() {
        window.onscroll = () => {
            isScroll = true
        }

        setInterval(() => {
            if (!isScroll) return
            isScroll = false

            elArr.forEach((wow, index) => {
                wow.box.forEach((el, i) => {
                    if (wow.isVisible(el)) {
                        wow.show(el)
                    }

                })
            })


        }, 50);
    }



    function innerHeight() {
        if ('innerHeight' in window) {
            return window.innerHeight;
        } else {
            return document.documentElement.clientHeight;
        }
    }

    function offsetTop(element) {


        return element.offsetTop
    }




    add = function(el, binding, solo) {
        let animate = binding.value
        elArr.push(new mywow(el, animate, solo))
    }



    class mywow {
        constructor(el, animate, solo) {
            if (solo) {
                console.log(solo, el)
                this.box = [el]
            } else {
                this.box = Array.from(el.children)
            }

            this.element = window.document.documentElement;
            this.animateName = animate
            this.init()
        }
        init() {
            this.box.forEach((el, index) => {
                this.hien(el, index)
            })
        }
        hien(el, index) {
            el.style.visibility = 'hidden'
            el.style.animationName = 'none'
            el.style.animationDelay = (index * 0.5) + 's'
            el.classList.add('animated')
        }
        show(el) {
            el.style.visibility = 'visible'
            el.style.animationName = this.animateName
        }
        isVisible(box) {
            var bottom, offset, top, viewBottom, viewTop;
            // offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, innerHeight());
            top = offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        }
    }
}


let obj = {
    beforeMount(el, binding) {
        console.log(binding)
        if (once) { //初始化，保证只执行一次
            init()

            once = false
        }

        let { solo } = binding.modifiers



        add(el, binding, solo)

    },
    mounted(el, binding) {
        // console.log(el,binding)
    },
    updated(el, binding) {
        console.log('======')
        console.log('updated')
        console.log('======')
    }
}

export default obj
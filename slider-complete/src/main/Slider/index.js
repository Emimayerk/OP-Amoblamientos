class Slider extends HTMLElement {

    constructor() {
        super();
        this.dom = undefined;
        this.slider = undefined;
        this.width = undefined;
        this.height = undefined;
        this.slidesCount = undefined;
        this.currentSlide = 0;
        this.buttons = {
            back: undefined,
            next: undefined,
        };

    }

    connectedCallback() {
        this.setProps();
        this.render();

        this.listeners();
    };


    setProps = () => {
        this.dom = this.attachShadow({ mode: 'open' });
        this.slider = document.createElement('section');
        this.width = this.getAttribute('width');
        this.height = this.getAttribute('height');
        this.slidesCount = this.childElementCount - 1;
        console.log(this.slidesCount)
    };

    setStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
            #slider {
                height: ${this.height}px;
                box-sizing: border-box;
                overflow: hidden;
                width: ${this.width}%;
                display: flex;
            }

            #slides-wrap {
                width: 100%;
            }

            .btn {
                border: 0;
                background: rgba(0,0,0,.1);
                width: 2rem;
                font-size: 2rem;
                color: rgba(0,0,0,.2);
                cursor: pointer;
            }

            .next {
                box-shadow: -2px 0 6px rgba(0,0,0,.3);
                z-index: 1;
            }

            .back {
                box-shadow: 2px 0 10px rgba(0,0,0,.3);
                z-index: 1;
            }
        `;
        this.dom.appendChild(style);
    };

    setContent = () => {
        const iconNext = this.getAttribute('iconNext');
        const iconBack = this.getAttribute('iconBack');
        this.slider.setAttribute('id', 'slider')
        this.slider.innerHTML = `
            <button class="btn back">
                ${iconBack}
            </button>
            <div id="slides-wrap">
                <slot></slot>
            </div>
            <button class="btn next">
                ${iconNext}
            </button>
        `;
        this.dom.appendChild(this.slider);

    };

    listeners = () => {
        this.buttons.back = this.slider.firstElementChild;
        this.buttons.next = this.slider.lastElementChild;

        this.buttons.back.addEventListener('click', e => {
            this.back();
        });
        this.buttons.next.addEventListener('click', e => {
            this.next();
        });
    };

    back = () => {
        Array.from(this.children).forEach(child => {
            child.setAttribute('active', 'false');
        });
        this.currentSlide = this.currentSlide === 0 ? this.slidesCount : this.currentSlide - 1;
        this.children[this.currentSlide].setAttribute('active', 'true');
    };

    next = () => {
        Array.from(this.children).forEach(child => {
            child.setAttribute('active', 'false');
        });
        this.currentSlide = this.currentSlide === this.slidesCount ? 0 : this.currentSlide + 1;
        this.children[this.currentSlide].setAttribute('active', 'true');
    };

    render = () => {
        this.setContent();
        this.setStyle();
    };

}

export { Slider as default };
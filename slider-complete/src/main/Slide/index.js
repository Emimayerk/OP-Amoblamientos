class Slide extends HTMLElement {

    static get observedAttributes() {
        return ['active'];
    }

    constructor() {
        super();
        this.dom = undefined;
        this.slide = undefined;
        this.content = {
            title: undefined,
            description: undefined,
            image: undefined,
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.slide !== undefined) this.isActive();
    };

    connectedCallback() {
        this.setProps();
        this.render();
    };

    setProps = () => {
        this.dom = this.attachShadow({ mode: 'open' });
        this.content.title = this.getAttribute('title');
        this.content.description = this.getAttribute('description');
        this.content.image = this.getAttribute('image');
        this.bgColor = this.getAttribute('bgColor');
    };

    setStyle = () => {
        const style = document.createElement('style');
        style.textContent = `
            .slide {
                height: 100%;
                box-sizing: border-box;
                margin: 0;
                width: 100%;
                justify-content: center;
                align-items: center;
                background-image: url('${this.content.image}');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                display: none;
            }

            .content-wrap {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .slide.active {
                display: flex;
            }
        `;
        this.dom.appendChild(style);
    };

    setContent = () => {
        this.slide = document.createElement('article');
        this.slide.classList.add('slide');
        this.isActive();
        const template = `
            <div class="content-wrap">
                <h2 class="slide-title">${this.content.title}</h2>
                <p class="slide-description">${this.content.description}</p>
            </div>
        `;
        this.slide.innerHTML = template;
        this.dom.appendChild(this.slide);
    };

    isActive = () => {
        const active = this.getAttribute('active')
        if (active === 'true') {
            this.slide.classList.add('active');
            this.slide.animate([
                // keyframes
                { transform: 'translateX(100%)' },
                { transform: 'translateX(0)' },
              ], {
                // timing options
                duration: 600,
                iterations: 1,
              });
        } else {
            this.slide.classList.remove('active');
        };
    };

    render = () => {
        this.setContent();
        this.setStyle();
    };

}

export { Slide as default };
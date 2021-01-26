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
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
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

            h2.slide-title {
                border: 1px solid white;
                background: #ffffff6b;
                padding: 0.5rem;
                border-radius: 50px;
                font-size: 25px;
                font-weight: 100;
                color: rgb(0 0 0 / 71%);
              }

              h2.slide-title:hover {
                  background: white;
                  transition: 500ms;
                  cursor: pointer;
              }
        `;
        this.dom.appendChild(style);
    };

    setContent = () => {
        this.slide = document.createElement('article');
        this.slide.classList.add('slide');
        const template = `
            <div class="content-wrap">
                <h2 class="slide-title">${this.content.title}</h2>
                <p class="slide-description">${this.content.description}</p>
            </div>
        `;
        this.slide.innerHTML = template;
        this.isActive();
        this.dom.appendChild(this.slide);
    };

    isActive = () => {
        const active = this.getAttribute('active');
        const direction = this.getAttribute('direction');
        if (active === 'true') {
            this.slide.classList.add('active');
            this.slide.animate([
                // keyframes
                { transform: `${direction === "left" ? 'translateX(-100%)' : 'translateX(100%)'}` },
                { transform: `translateX(0)` },
              ], {
                // timing options
                duration: 600,
                iterations: 1,
              });
        }
    };

    render = () => {
        this.setContent();
        this.setStyle();
    };

}

export { Slide as default };
window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Vamos a utilizar dos clases para crear este hermoso patrón

    /* ==== SYMBOL ====  -> Vamos a utilizar esta clase para establecer los 
    símbolos de la lluvia, característico de las películas de matrix */
    class Symbol {
        constructor(x, y, fontSize, canvasHeight) {
            this.characters = "UCIELDARO";
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.text = "";
            this.canvasHeight = canvasHeight;

        }

        // Función para dibuja los símbolos en la pantalla
        draw(context) {

            // Obtenemos un elemento aleatorio de los caracteres.
            this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))

            // fillText() -> método encargado de rellenar le lienzo 
            context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

            // Evaluamos si el fontSize es mas grande que el canvasHeight y si devuelve true restablecemos el eje y a 0
            if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
                this.y = 0;
            } else {

                // Y si devuelve false aumentamos de a 1
                this.y += 1;
            }
        }
    }


    /* ==== Effect === -> Básicamente esta clase es para crear el efecto de 
    lluvia */
    class Effect {
        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontSize = 25;
            this.column = this.canvasWidth / this.fontSize;
            this.sybols = [];
            this.#initialize();
        }

        #initialize() {
            for (let i = 0; i < this.column; i++) {
                this.sybols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
            }
        }

        resize(width, height) {
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.column = this.canvasWidth / this.fontSize;
            this.sybols = [];
            this.#initialize();
        }
    }

    /*==== Creamos una instancia de effect ==== */
    const effect = new Effect(canvas.width, canvas.height);

    /*==== Controlar el tiempo de transición de cada fotograma ==== */
    let lastTime = 0;
    const fps = 30;
    const nextFrame = 1000 / fps;
    let timer = 0;

    /*==== Funciona para realizar la animación ==== */
    function animate(timeStamp) {

        // deltaTime -> es la diferencia en milisegundo entre el cuadro de animación anterior y la animación actual.
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (timer > nextFrame) {
            // Agregando opacidad a los símbolos antiguos
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

            // Alineamos el texto
            ctx.textAlign = 'center';

            // Creamos un rectángulo semitransparente para ocultar los símbolos antiguos
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Tomamos el contexto, y pintamos el fondo de verde. A lo que pasamos como contexto.
            ctx.fillStyle = '#0aff0a';

            //.font -> especifica el estilo de texto actual
            ctx.font = effect.fontSize + 'px monospace'

            // Llamaos al metodo de dibujado y le pasamos el contexto
            effect.sybols.forEach(symbol => symbol.draw(ctx));
            timer = 0;
        } else {
            timer += deltaTime;
        }
        requestAnimationFrame(animate);
    }

    // Llamaos al ciclo de animación para activar, valga la redundancia, la animación tipo matrix
    animate(0);

    // Ajustado automáticamente el tamaño de la pantalla a través de canvas.width y canvas.height
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width, canvas.height);
    })

}


//let dotNetInstance;
//let activateHandleResize = false;
class Sidebar {
    #dotNetInstance;
    #activateHandleResize = false;
    #handleResizeBound;  // Guardar la función de manejador de evento

    constructor() {
        this.#dotNetInstance = null;
        this.#activateHandleResize = false;
        this.#handleResizeBound = this.handleResize.bind(this);  // Asignar la función al crear la instancia
    }

    // Registra la instancia .NET
    registerDotNetInstance(instance) {
        this.#dotNetInstance = instance;
        console.log("Instancia .NET registrada desde OnInitialized");
    }

    // Activa el manejador de resize
    asignHandleResize() {
        this.#activateHandleResize = false;
        console.log("Habilitando Resize");
        window.addEventListener('resize', this.#handleResizeBound);  // Usar la propiedad
    }

    // Manejador de resize
    async handleResize() {
        try {
            const width = window.innerWidth;
            if (width > 600 && this.#dotNetInstance !== null && !this.#activateHandleResize) {
                console.log(this.#activateHandleResize);
                this.#activateHandleResize = true;
                console.log(this.#dotNetInstance);
                await this.#dotNetInstance.invokeMethodAsync('ToggleSidebarFromJs');
            }
        } catch (ex) {
            console.log("Error:" + ex);
        }
    }

    // Desactiva el listener de resize
    disableResizeListener() {
        console.log("Desactivando listener de resize");
        window.removeEventListener('resize', this.#handleResizeBound);  // Usar la misma referencia
    }

    // Llama un método .NET desde JavaScript
    llamarMetodoDotNet() {
        if (this.#dotNetInstance) {
            this.#dotNetInstance.invokeMethodAsync('MiMetodoDesdeJs', 'Hola desde JavaScript');
        } else {
            console.error('No se ha registrado ninguna instancia .NET');
        }
    }
}

export const NewObjectSidebar=()=>{
    return new Sidebar();
}
//export function registerDotNetInstance(instance) {
//    dotNetInstance = instance;
//    console.log("Instancia .NET registrada desde OnInitialized");

//    // Register the resize event
//    // window.addEventListener('resize', handleResize);
//}
//export function AsignHandleResize() {  
//    activateHandleResize = false;
//    window.addEventListener('resize', handleResize);
//}
//export const handleResize= async()=> {
//    const width = window.innerWidth;
//    if (width > 600 && dotNetInstance&&!activateHandleResize) {
//        activateHandleResize = true;
//        console.log(dotNetInstance);
//        await dotNetInstance.invokeMethodAsync('ToggleSidebarFromJs');

//    }
//}

//export function disableResizeListener() {
//    console.log("Desactivando listener de resize"); 
//    window.removeEventListener('resize', handleResize);

//}

//export function llamarMetodoDotNet() {
//    if (dotNetInstance) {
//        dotNetInstance.invokeMethodAsync('MiMetodoDesdeJs', 'Hola desde JavaScript');
//    } else {
//        console.error('No se ha registrado ninguna instancia .NET');
//    }
//}
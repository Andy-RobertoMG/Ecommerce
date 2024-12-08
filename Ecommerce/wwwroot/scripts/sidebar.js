let dotNetInstance;

function registerDotNetInstance(instance) {
    dotNetInstance = instance;
    console.log("Instancia .NET registrada desde OnInitialized");

    // Registrar el evento resize
    window.addEventListener('resize', handleResize);
}
function handleResize() {
    const width = window.innerWidth;
    if (width > 600 && dotNetInstance) {
        dotNetInstance.invokeMethodAsync('ToggleSidebarFromJs');
    }
}

function disableResizeListener() {
    console.log("Desactivando listener de resize");
    window.removeEventListener('resize', handleResize);
}

function llamarMetodoDotNet() {
    if (dotNetInstance) {
        dotNetInstance.invokeMethodAsync('MiMetodoDesdeJs', 'Hola desde JavaScript');
    } else {
        console.error('No se ha registrado ninguna instancia .NET');
    }
}
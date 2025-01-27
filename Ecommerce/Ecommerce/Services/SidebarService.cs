namespace Ecommerce.Services
{
    public class SidebarService
    {
        public bool IsSidebarVisible { get; private set; }
        public bool IsBeingClose { get; private set; }
        public event Action? OnSidebarStateChanged;
        public event Func<Task>? OnSidebarStateChangedAsync;
        public async Task OpenSidebar()
        {
            IsSidebarVisible = true;
            NotifyStateChanged();
            await NotifyStateChangeAsync();
        }
        public void CloseSidebar()
        {
            IsSidebarVisible = false;
            NotifyStateChanged();
        }
        public void SetBeingClosedActive()
        {
            IsBeingClose = true;
        }
        public void SetBeingClosedInactive()
        {
            IsBeingClose = false;
        }
        private void NotifyStateChanged(){
            OnSidebarStateChanged?.Invoke();
        }
        private async Task NotifyStateChangeAsync()
        {
            if (OnSidebarStateChangedAsync != null)
            {
                await OnSidebarStateChangedAsync.Invoke();
            }
            //if (OnSidebarStateChangedAsync != null)
            //{
            //    var invocationList = OnSidebarStateChangedAsync.GetInvocationList();

            //    var tasks = invocationList
            //        .Cast<Func<Task>>()
            //        .Select(handler => handler.Invoke());

            //    try
            //    {
            //        Espera a que todas las tareas terminen
            //       await Task.WhenAll(tasks);
            //    }
            //    catch (Exception ex)
            //    {
            //        Maneja las excepciones(puedes iterar sobre InnerExceptions si es necesario)
            //        Console.WriteLine($"Error al ejecutar el evento: {ex.Message}");
            //    }
            //}
        }
    }
}

namespace Ecommerce.Services
{
    public class SidebarService
    {
        public bool IsSidebarVisible { get; private set; }

        public event Action OnSidebarStateChanged;

        public void ToggleSidebar()
        {
            IsSidebarVisible = !IsSidebarVisible;
            NotifyStateChanged();
        }
        public void SetSidebarVisible(bool value)
        {
            IsSidebarVisible = value;
            NotifyStateChanged();
        }
        public void OpenSidebar()
        {
            IsSidebarVisible = true;
            NotifyStateChanged();
        }
        public void CloseSidebar()
        {
            IsSidebarVisible = false;
            NotifyStateChanged();
        }
        private void NotifyStateChanged() => OnSidebarStateChanged?.Invoke();
    }
}

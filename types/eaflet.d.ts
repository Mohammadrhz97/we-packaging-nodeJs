import "leaflet";

declare module "leaflet" {
  namespace Icon {
    interface Default {
      _getIconUrl?: () => string; // This defines the return type for _getIconUrl, as a string (URL)
    }
  }
}

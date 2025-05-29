export function callUber(destinationAddress: string, userLatitude?: number, userLongitude?: number) {
  const encodedAddress = encodeURIComponent(destinationAddress);

  const uberAppUrl = `uber://?action=setPickup&dropoff[formatted_address]=${encodedAddress}` +
    (userLatitude !== undefined && userLongitude !== undefined
      ? `&pickup[latitude]=${userLatitude}&pickup[longitude]=${userLongitude}`
      : '');

  const uberWebUrl = `https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodedAddress}` +
    (userLatitude !== undefined && userLongitude !== undefined
      ? `&pickup[latitude]=${userLatitude}&pickup[longitude]=${userLongitude}`
      : '');

  // Tenta abrir o app Uber
  window.location.href = uberAppUrl;

  // Fallback para abrir o site após 1.5 segundos
  setTimeout(() => {
    window.open(uberWebUrl, "_blank");
  }, 1500);
}

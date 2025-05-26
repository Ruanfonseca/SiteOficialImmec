export function callUber(destinationAddress: string, userLatitude?: number, userLongitude?: number) {
  const encodedAddress = encodeURIComponent(destinationAddress);

  let uberUrl = `https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=${encodedAddress}`;

  if (userLatitude !== undefined && userLongitude !== undefined) {
    uberUrl += `&pickup[latitude]=${userLatitude}&pickup[longitude]=${userLongitude}`;
  }

  window.open(uberUrl, "_blank");
}

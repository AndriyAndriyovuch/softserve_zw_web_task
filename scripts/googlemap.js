let map;

async function initMap() {
  const position = { lat: 50.41383258205846, lng: 30.53323899632688 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Federation of Biathlon of Ukraine",
  });
}

initMap();


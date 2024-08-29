<template>
  <ol-map class="map">
    <ol-view :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<style lang="postcss">
  .map {
    width: 100%;
    height: 400px;
  }
</style>
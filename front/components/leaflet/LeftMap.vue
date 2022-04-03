<template>
  <l-map
    ref="myMap" 
    :center="center"
    :crs="crs"
    :min-zoom="-25"
  >
    <l-image-overlay :url="imageUrl" :bounds="bounds" @ready="ready"></l-image-overlay>
      <l-marker
        v-if="leftLine"
        :lat-lng="leftLine.latlngs[0]"
        :draggable="true"
        @update:lat-lng="updateLatLng($event, leftLine)"
      />
      <l-polygon
        v-if="leftLine"
        :lat-lngs="leftLine.latlngs"
        color="red"
      />
  </l-map>
</template>

<script lang="ts">
import Vue from 'vue'
import L, { Polyline } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'

export default Vue.extend({
  data () {
    return {
      center: L.latLng([0, 0]),
      bounds: L.latLngBounds(L.latLng([0, 0]), L.latLng([0, 0])),
      crs: L.CRS.Simple,
    };
  },
  methods: {
    async ready () {
      // @ts-ignore
      const map = this.$refs?.myMap?.mapObject;
      // @ts-ignore
      this.bounds = await this.$leafletHelper.getBounds(this.imageUrl)
      this.center = this.bounds.getCenter()
      map.fitBounds(this.bounds)
      this.addDrawToolbar()
    },
    addDrawToolbar () {
      // @ts-ignore
      const map = this.$refs?.myMap?.mapObject;
      const drawnItems = new L.FeatureGroup().addTo(map)
      map.addLayer(drawnItems)
      // @ts-ignore
      const drawControl = new L.Control.Draw(this.$leafletHelper.drawToolBarOptionsLeft(drawnItems))
      map.addControl(drawControl)
      // @ts-ignore
      this.$leafletHelper.setDrawPolylineTooltipLocal()

      const self = this
      // @ts-ignore
      map.on(L.Draw.Event.CREATED, function (event: any) {
        const layer: Polyline = event.layer
        const layerType = event.layerType
        const latlngs = layer.getLatLngs().flat()

        self.$store.dispatch('addLeftLine', { layerType, latlngs })
      })
    },
    updateLatLng(e: any, line: { layerType: 'rectangle', latlngs: L.LatLng[] }) {
      // { 縦, 横 }
      const { lat: eLat, lng: eLng } = e
      // 対象図形の1番目の{ 縦, 横}
      const { lat: lLat, lng: lLng } = line.latlngs[0]
      // 縦横移動pxを取得
      const latDiff = eLat - lLat // 縦移動px
      const lngDiff = eLng - lLng // 横移動px
      // 移動後の位置情報
      const latlngs = line.latlngs.map((latlng: L.LatLng) => {
        return { lat: latlng.lat + latDiff, lng: latlng.lng + lngDiff }
      })
      this.$store.dispatch('addLeftLine', { ...line, latlngs })
    }
  },
  computed: {
    imageUrl () {
      return this.$store.state.images[0]
    },
    leftLine () {
      return this.$store.state.leftLine
    }
  }
})
</script>

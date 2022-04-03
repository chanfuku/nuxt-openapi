import L from 'leaflet'
import Vue from 'vue'


export const getBounds = async (uri: string): Promise<L.LatLngBounds> => {
  const image = await getHTMLImageElement(uri)
  const imageH = image.naturalHeight
  const imageW = image.naturalWidth

  return L.latLngBounds(L.latLng([0, 0]), L.latLng([imageH, imageW]))
}
export const getHTMLImageElement = (link: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.src = link
  })
}
export const drawToolBarOptionsLeft = (featureGroup: L.FeatureGroup) => ({
  draw: {
    polyline: false,
    polygon: false,
    rectangle: {
      shapeOptions: { color: '#E6902E' },
      showLength: false
    },
    circle: false,
    circlemarker: false,
    marker: false
  },
  edit: {
    featureGroup,
    edit: false,
    remove: false
  }
})
export const drawToolBarOptionsRight = (featureGroup: L.FeatureGroup) => ({
  draw: {
    polyline: {
      shapeOptions: { color: '#E6902E' },
      showLength: false
    },
    polygon: {
      shapeOptions: { color: '#E6902E' },
      showLength: false
    },
    rectangle: {
      shapeOptions: { color: '#E6902E' },
      showLength: false
    },
    circle: false,
    circlemarker: false,
    marker: false
  },
  edit: {
    featureGroup,
    edit: false,
    remove: false
  }
})
export const setDrawPolylineTooltipLocal = () => {
  // @ts-ignore
  L.drawLocal.draw.handlers.polyline.tooltip = {
    start: 'クリックして、線の描画を始めてください。',
    cont: 'クリックして、線の描画を続けてください。',
    end: '最終地点をクリックして、線の描画を終了してください。'
  }
}

const leafletHelper = {
  getBounds,
  getHTMLImageElement,
  drawToolBarOptionsLeft,
  drawToolBarOptionsRight,
  setDrawPolylineTooltipLocal,
}

Vue.prototype.$leafletHelper = leafletHelper

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  marker: Marker;
  color: string;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public zoom = 11;
  public map?: Map;
  public CurrentLngLat: LngLat = new LngLat(-4.553, 36.585);

  ngAfterViewInit(): void {
    if (!this.divMap) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.CurrentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.readToLocalStorage();
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => ((Math.random() * 16) | 0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;
    const marker = new Marker({ color: color, draggable: true }).setLngLat(lngLat).addTo(this.map);
    this.markers.push({ color, marker });
    this.saveToLocalStorage();
    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number) {
    if (!this.map) return;
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyMarker(index: number) {
    if (!this.map) return;
    this.map.flyTo({ zoom: 14, center: this.markers[index].marker.getLngLat() });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return { color, lngLat: marker.getLngLat().toArray() };
    });
    localStorage.setItem('markers', JSON.stringify(plainMarkers));
  }

  readToLocalStorage() {
    const plainMarkersString = localStorage.getItem('markers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);
    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const lngLatObj = new LngLat(lng, lat);
      this.addMarker(lngLatObj, color);
    });
  }
}

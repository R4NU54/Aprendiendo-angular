import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

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
    this.mapListeners();
  }

  public mapListeners(): void {
    if (!this.map) return;
    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });
    this.map.on('move', () => {
      this.CurrentLngLat = this.map!.getCenter();
      console.log(this.CurrentLngLat);
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomRange(value: string): void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
}

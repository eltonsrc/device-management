import { Component, OnInit } from '@angular/core';
import { Device, DEVICES } from './device';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  selectedDevice?: Device;
  devices = DEVICES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

}

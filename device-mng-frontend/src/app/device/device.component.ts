import { Component, OnInit } from '@angular/core';
import { Device, DEVICES } from './device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  devices?: Device[];

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe(devices => this.devices = devices);
  }
}

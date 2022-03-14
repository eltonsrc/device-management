import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from '../device/device';

@Component({
  selector: 'app-device-show',
  templateUrl: './device-show.component.html',
  styleUrls: ['./device-show.component.css']
})
export class DeviceShowComponent implements OnInit {
  device?: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDevice(id)
      .subscribe(device => this.device = device);
  }
}

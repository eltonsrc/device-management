import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device, DEVICES } from './device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    return of(DEVICES);
  }

  getDevice(id: Number): Observable<Device | undefined> {
    const device = DEVICES.find(device => device.id == id);
    return of(device);
  }

  save(device: Device): Observable<Device> {
    device.id = DEVICES.length;
    DEVICES.push(device);
    return of(device);
  }
}

interface ISmartDevice {
	turnOn: () => void;
	turnOff: () => void;
}

class SmartTV implements ISmartDevice {
	constructor() {}

	turnOff(): void {
		console.log('Smart TV is turned off');
	}

	turnOn(): void {
		console.log('Smart TV is turned on');
	}
}

class SmartLight implements ISmartDevice {
	turnOff(): void {
		console.log('Smart Light is turned off');
	}

	turnOn(): void {
		console.log('Smart Light is turned on');
	}
}

class SmartHome {
	constructor() {}

	turnOnAllDevices(devices: Array<ISmartDevice>) {
		devices.forEach((device) => {
			device.turnOn();
		});
	}
}

class Table {
	private color: string;

	constructor() {
		this.color = 'red';
	}
}

const smartHome = new SmartHome();
smartHome.turnOnAllDevices([new SmartTV(), new SmartLight(), new Table()]);

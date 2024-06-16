const { program } = require('commander')
const si = require('systeminformation')

program
    .name('sysinfo')
    .description('CLI to show system information')
    .version('1.0.45')
    .option('-*, --all', '輸出所有的資訊')
    .option('-a, --audio', '輸出音效資訊')
    .option('-b, --bluetooth', '輸出藍芽資訊')
    .option('-c, --cpu', '輸出CPU資訊')
    .option('-d, --disk', '輸出磁碟資訊')
    .option('-f, --fileSystem', '輸出檔案系統資訊')
    .option('-g, --graphics', '輸出顯示卡資訊')
    .option('-m, --memory', '輸出記憶體資訊')
    .option('-n, --network', '輸出網路資訊')
    .option('-o, --os', '輸出作業系統資訊')
    .option('-p, --processes', '輸出處理程序資訊')
    .option('-r, --printers', '輸出印表機資訊')
    .option('-s, --system', '輸出系統資訊')
    .option('-t, --battery', '輸出電池資訊')
    .option('-u, --usb', '輸出USB資訊')
    .option('-v, --services', '輸出系統服務資訊')
    .option('-w, --wifi', '輸出無線網路資訊');

(async () => {
    program.parse(process.argv)
    const options = program.opts()
    if (Object.getOwnPropertyNames(options).length === 0) {
        options.all = true
    }
    
    let output = {}

    if (options.audio || options.all) {
        output.audio = await si.audio() || {}
    }

    if (options.bluetooth || options.all) {
        output.bluetooth = await si.bluetoothDevices() || {}
    }
    if (options.cpu || options.all) {
        output.cpu = {}
        output.cpu.info = await si.cpu() || {}
        output.cpu.flags = await si.cpuFlags() || {}
        output.cpu.cache = await si.cpuCache() || {}
        output.cpu.currentSpeed = await si.cpuCurrentSpeed() || {}
        output.cpu.temperature = await si.cpuTemperature() || {}
    }

    if (options.battery || options.all) {
        output.battery = await si.battery() || {}
    }

    if (options.graphics || options.all) {
        output.graphics = await si.graphics() || {}
    }

    if (options.disk || options.all) {
        output.disk = {}
        output.disk.layout = await si.diskLayout() || {}
        output.disk.blockDevices = await si.blockDevices() || {}
        output.disk.disksIO = await si.disksIO() || {}
    }

    if (options.fileSystem || options.all) {
        output.fileSystem = {}
        output.fileSystem.info = await si.fsSize() || {}
        output.fileSystem.openFiles = await si.fsOpenFiles() || {}
        output.fileSystem.stats = await si.fsStats() || {}
    }

    if (options.memory || options.all) {
        output.memory = {}
        output.memory.info = await si.mem() || {}
        output.memory.layout = await si.memLayout() || {}
    }

    if (options.network || options.all) {
        output.network = {}
        output.network.interfaces = await si.networkInterfaces() || {}
        output.network.defaultInterface = await si.networkInterfaceDefault() || ''
        output.network.defaultGateway = await si.networkGatewayDefault() || ''
        output.network.stats = await si.networkStats() || ''
        output.network.connections = await si.networkConnections() || ''
    }
    if (options.os || options.all) {
        output.os = {}
        output.os.info = await si.osInfo() || {}
        output.os.shell = await si.shell() || {}
        output.os.versions = await si.versions() || {}
        output.os.users = await si.users() || {}
    }

    if (options.printers || options.all) {
        output.printers = await si.printer() || {}
    }

    if (options.processes || options.all) {
        output.processes = await si.processes() || {}
    }

    if (options.system || options.all) {
        output.system = {}
        output.system.info = await si.system() || {}
        output.system.bios = await si.bios() || {}
        output.system.uuid = await si.uuid() || {}
        output.system.baseboard = await si.baseboard() || {}
        output.system.chassis = await si.chassis() || {}
    }

    if (options.services || options.all) {
        output.services = await si.services('*') || {}
    }

    if (options.usb || options.all) {
        output.usb = await si.usb() || {}
    }

    if (options.wifi || options.all) {
        output.wifi = {}
        output.wifi.networks = await si.wifiNetworks() || {}
        output.wifi.interfaces = await si.wifiInterfaces() || ''
        output.wifi.connections = await si.wifiConnections() || ''
    }
    console.log(JSON.stringify(output, null, '\t'))
})()
# SysInfo

這是一個顯示系統資訊的小工具，支援 Windows/Linux/MacOS。

## 使用方式

```text
sysinfo [選項]
```

**選項**
```text
-*, --all          輸出所有的資訊
-a, --audio        輸出音效資訊
-b, --bluetooth    輸出藍芽資訊
-c, --cpu          輸出CPU資訊
-d, --disk         輸出磁碟資訊
-f, --fileSystem   輸出檔案系統資訊
-g, --graphics     輸出顯示卡資訊
-m, --memory       輸出記憶體資訊
-n, --network      輸出網路資訊
-o, --os           輸出作業系統資訊
-p, --processes    輸出處理程序資訊
-r, --printers     輸出印表機資訊
-s, --system       輸出系統資訊
-t, --battery      輸出電池資訊
-u, --usb          輸出USB資訊
-v, --services     輸出系統服務資訊
-w, --wifi         輸出無線網路資訊
```

### 範例

顯示 CPU 資訊並將輸出檔案寫到 output.json。

```bash
sysinfo -c > output.json
```

output.json 檔案內容：

```json
{
	"cpu": {
		"info": {
			"manufacturer": "Intel",
			"brand": "Gen Intel® Core™ i5-13400F",
			"vendor": "GenuineIntel",
			"family": "6",
			"model": "191",
			"stepping": "2",
			"revision": "",
			"voltage": "",
			"speed": 2.5,
			"speedMin": 2.5,
			"speedMax": 2.5,
			"governor": "",
			"cores": 16,
			"physicalCores": 10,
			"performanceCores": 16,
			"efficiencyCores": 0,
			"processors": 1,
			"socket": "LGA1700",
			"flags": "de pse tsc msr mce sep mtrr mca cmov psn clfsh ds acpi mmx fxsr sse sse2 ss htt tm ia64 pbe",
			"virtualization": false,
			"cache": {
				"l1d": 425984,
				"l1i": 458752,
				"l2": 9961472,
				"l3": 20971520
			}
		},
		"flags": "de pse tsc msr mce sep mtrr mca cmov psn clfsh ds acpi mmx fxsr sse sse2 ss htt tm ia64 pbe",
		"cache": {
			"l1d": 425984,
			"l1i": 458752,
			"l2": 9961472,
			"l3": 20971520
		},
		"currentSpeed": {
			"min": 2.5,
			"max": 2.5,
			"avg": 2.5,
			"cores": [
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5,
				2.5
			]
		},
		"temperature": {
			"main": null,
			"cores": [],
			"max": null,
			"socket": [],
			"chipset": null
		}
	}
}
```


## 安裝建置執行檔時所需軟體

### pkg

```bash
npm install -g pkg
```

### VerMgr

1. 前往 VerMgr 下載最新的執行檔。

> https://github.com/leoshiang/VerMgr/releases

2. 在此 repo. 建立 VerMgr 目錄。
3. 將下載的 vermgr-win-x64-x.x.x-PROD-YYYYMMDD.exe 放在 VerMgr目錄。
4. 將 vermgr-win-x64-x.x.x-PROD-YYYYMMDD.exe 更名為 vermgr.exe。

## 建置執行檔

目前僅支援在 Windows 作業系統建置。

```bash
npm run build
```

輸出檔案會產生在 release 目錄裡面。




function setBatteryInfo() {
  const batteryPercentage = document.querySelector(".battery__percentage");
  const batteryLiquid = document.querySelector(".battery__liquid");
  const batteryStatus = document.querySelector(".battery__status");


  navigator.getBattery()
    .then((battery) => {

      const chargLevel = battery.level * 100
      batteryLiquid.style.height = `${chargLevel}%`
      batteryPercentage.innerHTML = `${chargLevel}%`



      if (chargLevel >= 20) {
        batteryLiquid.classList.add('gradient-color-red')
        batteryStatus.innerHTML = `Low Battery <i class="ri-plug-line animated-red"></i>`
      }
      if (chargLevel >= 40) {
        batteryLiquid.classList.add('gradient-color-orange')
      }
      if (chargLevel >= 80) {
        batteryLiquid.classList.add('gradient-color-yellow')
      }
      if (chargLevel >= 100) {
        batteryLiquid.classList.add('gradient-color-green')
        batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`
      }
      if (battery.charging === true) {
        batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`
      }

    })

}


window.addEventListener("load", setBatteryInfo);

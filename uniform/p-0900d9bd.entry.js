import{r as s,c as t,h as i,H as n}from"./p-86e9747e.js";let a=class{constructor(i){s(this,i),this.uScan=t(this,"uScan",7),this.uStartScan=t(this,"uStartScan",7),this.uStopScan=t(this,"uStopScan",7),this.scannerActive=!1}async getPermission(){await this.library.checkPermission({force:!0})}async prepareCamera(){this.library.prepare()}async startScanner(){document.querySelector("body").style.visibility="hidden",document.getElementById("cancelscan").style.visibility="visible",this.uStartScan.emit(),this.scannerActive=!0,this.library.hideBackground();const s=await this.library.startScan();s.hasContent&&(this.stopScanner(),this.uScan.emit(s.content))}async stopScanner(){document.querySelector("body").style.visibility="visible",this.uStopScan.emit(),this.scannerActive=!1,this.library.showBackground(),this.library.stopScan()}render(){return i(n,{style:{display:this.scannerActive?"block":"none"}},i("u-button",{id:"cancelscan",design:"error",outline:!0,class:"cancel"},i("slot",null,"Zurück")))}};a.style=".cancel{position:absolute;bottom:1rem;width:100%}";export{a as u_barcodescanner}
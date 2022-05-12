function click_event(self) {
    obj = document.getElementById(self.id);
    if(obj.innerHTML == '正常') {
        obj.innerHTML = '異常';
        obj.style.backgroundColor = 'red';
    } else {
        obj.innerHTML = '正常';
        obj.style.backgroundColor = 'green';
    }
}
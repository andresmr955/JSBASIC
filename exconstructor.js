function auto(color, brand, annio, lice){
    this.color = color;
    this.brand = brand;
    this.annio = annio;
    this.lice = lice;
}

function solution(auto) {
    if (auto.lice) {
        auto.lice = true;
    } else {
        auto.lice = false;
    }
    return auto;
  }

  var auto1 = new auto("red","Kia");
  var auto2 = new auto("gray","Chevrolet",2023, "AAA111");
  var auto3 = new auto("gray","Chevrolet",2024, "RGB255");

  solution(auto1);
  solution(auto2);
  solution(auto3);
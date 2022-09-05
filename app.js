const packages = [
  {
    priorityLevel: "express",
    isFragile: false,
    weight: 2,
    to: "Sir Harrington IV",
    trackingNumber: "1324kjs",
  },
  {
    priorityLevel: "standard",
    isFragile: true,
    weight: 0.5,
    to: "Master Mercutio",
    trackingNumber: "1325sdk",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 0.5,
    to: "Mistress Ravenfeather",
    trackingNumber: "jffd147",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 4,
    to: "B. Robert Brown",
    trackingNumber: "acdc145",
  },
  {
    priorityLevel: "express",
    isFragile: true,
    weight: 6,
    to: "Chancellor Wallace",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 5,
    to: "Sarah Sharm",
    trackingNumber: "8081baz",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 12,
    to: "Tae Lien",
    trackingNumber: "suz2367",
  },
];

//NOTE Draw All Packages
function drawPackages(filtered) {
  console.log('filtered array', filtered);
  let element = document.getElementById("package")
  let template = "";

  filtered.forEach(package => {
    template += `
     <div class="col-4 d-flex card bg-secondary m-auto">
     <div class="card-body">
     <div class="card-title text-center text-light">
     <p>This package is for <i>${package.to}</i></p>
     <p>It weighs <i>${package.weight} pounds</i></p>
     <p>It was shipped at <i>${package.priorityLevel}</i> speed</p>
     <p>Its Tracking number is <i>${package.trackingNumber}</i></p>
     </div>
     </div>
     </div>
   `
  });
  
  // @ts-ignore
  element.innerHTML = template;
}

//NOTE Draw Fragile Packages
function fragile() {
  let package = document.getElementById('package')
  let template = '';
  packages.forEach(package => {
    if (package.isFragile == true) {
      template += `
    <div class="col-6 card bg-secondary m-auto">
     <div class="card-body">
     <div class="card-title text-center text-light">
     <p>This package is for <i>${package.to}</i></p>
     <p>It weighs <i>${package.weight} pounds</i></p>
     <p>It was shipped at <i>${package.priorityLevel}</i> speed</p>
     <p>Its Tracking number is <i>${package.trackingNumber}</i></p>
     <p>${package.isFragile}</p>
     </div>
     </div>
     </div>
      `
    }
  });
  // @ts-ignore
  package.innerHTML = template;
}

//NOTE Draw Rugged Packages (For.Each)
function rugged(){
  let package = document.getElementById('package')
  let template = '';
  packages.forEach(package => {
    if (package.isFragile == false) {
      template += `
    <div class="col-6 card bg-secondary m-auto">
     <div class="card-body">
     <div class="card-title text-center text-light">
     <p>This package is for <i>${package.to}</i></p>
     <p>It weighs <i>${package.weight} pounds</i></p>
     <p>It was shipped at <i>${package.priorityLevel}</i> speed</p>
     <p>Its Tracking number is <i>${package.trackingNumber}</i></p>
     <p>${package.isFragile}</p>
     </div>
     </div>
     </div>
      `
    }
  });
  // @ts-ignore
  package.innerHTML = template;
}

//NOTE Draw Light Packages (Filters)
function drawLightPackages() {
  // const heavyPackages = packages.filter(package => package.weight > 2)
  const lightPackages = packages.filter(package => package.weight <= 2)
  console.log('light pckgs', lightPackages)
  drawPackages(lightPackages)
}
//NOTE Draw All Packages (For.Each)
function All(){
  let package = document.getElementById('package')
  let template = '';
  packages.forEach(package => {
      template += `
    <div class="col-6 card bg-secondary m-auto">
     <div class="card-body">
     <div class="card-title text-center text-light">
     <p>This package is for <i>${package.to}</i></p>
     <p>It weighs <i>${package.weight} pounds</i></p>
     <p>It was shipped at <i>${package.priorityLevel}</i> speed</p>
     <p>Its Tracking number is <i>${package.trackingNumber}</i></p>
     </div>
     </div>
     </div>
      `
  });
  // @ts-ignore
  package.innerHTML = template;
}


  
drawPackages(packages);

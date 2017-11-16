function main() {
    var inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ];
    var objectInputs = calculateCount(inputs);

     // objectInputs = calculatePromotions(objectInputs);
    console.log("Debug Info");
    console.log(objectInputs);
    return inputs;

};
function calculateCount(inputs) {
    var objectInputs = [];

    for (var i = 0; i < inputs.length;) {
        objectInputs = isExist(inputs[i], objectInputs);
    }

    return objectInputs;
}
function isExist(element, objectInputs) {
    var barcodeCount = element.split("-");
    var barcode = barcodeCount.length === 1 ? element : barcodeCount[0];
    var count = barcodeCount.length === 1 ? 1 : barcodeCount[1];

    for (var i = 0; i < objectInputs.length; i++) {

        if (objectInputs[i].barcode === barcode) {
            objectInputs[i].count ++;
        }
    }

    objectInputs.push({"barcode": barcode, "count": parseInt(count)});

    return objectInputs;
}

function loadPromotions() {

}
function calculatePromotions(inputs) {
    var promotionsItems = loadPromotions()[0].barcodes;
    var promotionsItemsCount = [];
    var count = calculateCount().count;
    for(var i =0 ;i<promotionsItems.length;i ++){
        if(promotionsItems[i]==='ITEM000000'&&promotionsItems[i]==='ITEM000001'
            &&promotionsItems[i]==='ITEM000005'){
            if(count>3){

            }


        }

    }

    return inputs;

}

main();
"use strict";
class apple {
    // Functionall selectors.
    get smallBlueBuyBtn_rigthCorner() {return $('[class="ac-ln-button"]');}
    get addToBag_Btn() {return $('[value="add-to-cart"]');}
    get reviewBag_Btn() {return $('[class="button button-block button-super"]');}
    get checkOut_Btn() {return $('[id="shoppingCart.actions.navCheckout"]');}
    get checkOut_asGuest_Btn() {return $('[id="signIn.guestLogin.guestLogin"]');}
    get iWillPickItUp_Btn() {return $('[id="fulfillmentOptionButtonGroup1"]');}

    // Reusable selector for IPhone 12 Pro.
    get iPhone_HeaderBtn() {return $('[class="ac-gn-link ac-gn-link-iphone"]');}
    get iPhone12Pro_IconBtn() {return $('[class="chapternav-item chapternav-item-iphone-12-pro control"]');}

    // Store options selectors:
    // Phones.
    get iPhone12Pro_StoreOpt() {return $('[id="Item16_1inch_label"]');}
    get iPhone12ProMax_StoreOpt() {return $('[id="Item16_7inch_label"]');}
    
    // Colors.
    get iPhone12Pro_Graphite_StoreOpt() {return $('[id="Item2graphite_label"]');}
    get iPhone12Pro_StoreOpt() {return $('[id="Item2graphite_label"]');}
    get iPhone12Pro_Gold_StoreOpt() {return $('[id="Item2gold_label"]');}
    
    
    // Carrier Options.
    get iPhone12Pro_NoCarrier_StoreOpt() {return $('[class="form-selector-singlecolumn column large-12 small-12"]');}               
    
    // Storage Capacity Options.
    get iPhone12Pro_128GB_StoreOpt() {return $('[for="Item5-dimensionCapacity-128gb"]');}
    get iPhone12Pro_256GB_StoreOpt() {return $('[for="Item5-dimensionCapacity-256gb"]');}
    get iPhone12Pro_512GB_StoreOpt() {return $('[for="Item5-dimensionCapacity-512gb"]');}
    
    //Trade In Options.
    get noTradeIn_StoreOpt() {return $('//*[@id="tradeup-inline-heroselector"]/div/div/fieldset/div/div[1]/div/div');}
    
    // Payment Options.
    get oneTimePayment_StoreOpt() {return $('[id="fullPrice-description"]');}
    
    // Protection plan Options.
    get noAppleCare_StoreOpt() {return $('[id="applecareplus_59_noapplecare"]');}
    
    // Selectors fpr verification.
    get summary_Header_ProductTitle_Bag() {return $('[class="rf-summary-header-producttitle"]');}
    get guest_CheckOut_Header() {return $('[class="rs-guest-checkout-header"]');}
}
module.exports = new apple();
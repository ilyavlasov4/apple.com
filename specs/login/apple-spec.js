const apple = require('../../page_objects/login/apple-page');
const appleUrl = 'https://www.apple.com/';
const { expect } = require('chai');

describe('E2E Tests Scenarios for header', () => {
    // This hook go to www.apple.com/ web page before each test. 
    beforeEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.url(appleUrl);
    });
    // This hook deleteCookies after each test.
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('should be able to add IPhone 12 Pro Max, graphite color, no contract, 256 GB storage, no trade in and full payment options, no protection plan, to the Bag and verify the right model can be localy pick up.', () => {
        // Click on IPhone header. Verify you land on the IPhone page.
        browser.waitUntil(() => {
            return apple.iPhone_HeaderBtn.isDisplayed();
        }, { timeout: 10000, timeoutMsg:'IPhone headder did not appear after 10 sec of waiting on the main page'});
        apple.iPhone_HeaderBtn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/iphone');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone PRODUCTS page were not complited via the header"'});

        // Click on IPhone 12 Pro Icon in main menu on the top. Verify you land on IPhone 12 PRO page.
        apple.iPhone12Pro_IconBtn.waitForDisplayed();
        apple.iPhone12Pro_IconBtn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/iphone-12-pro');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone 12 Pro PRODUCT Page were not complited via the icon"'});
        
        // Click on blue buy button in the right top corner. Make sure you land on the page of purchasing.
        apple.smallBlueBuyBtn_rigthCorner.waitForClickable();
        apple.smallBlueBuyBtn_rigthCorner.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/shop/buy-iphone/iphone-12-pro');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone 12 PRO PURCHASE PAGE were not complited via the small blue button"'});
        
        // Select IPhone 12 PRO MAX.

/////////////////////////NOT RUNNING IN HEADLESS/////////////////////////////////////////////////////
        // console.log(browser.getUrl());
        // OUTPUT - .../buy_iphone/iphone_12_pro instead of (../buy-iphone/iphone-12-pro); Dash/Underscore
        //  const elem = $('body');
        //  elem.saveScreenshot('/Users/ilya12/Desktop/elemScreenshot2.png');
        // console.log($('[class="ac-gn-link ac-gn-link-iphone"]').isExisting());
        // Web page not existing, or transfering to other form of web page.
/////////////////////////NOT RUNNING IN HEADLESS/////////////////////////////////////////////////////

        browser.pause(3000);
        browser.waitUntil(() => {
            return apple.iPhone12ProMax_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX option not displayed at the store'}); 
        apple.iPhone12ProMax_StoreOpt.click();

        // Select graphite color.
        apple.iPhone12Pro_Graphite_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_Graphite_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Graphite option not displayed at the store'}); 
        apple.iPhone12Pro_Graphite_StoreOpt.click();

        // Sellect No Carrier option.
        apple.iPhone12Pro_NoCarrier_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_NoCarrier_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Graphite No Carrier option not displayed at the store'});
        apple.iPhone12Pro_NoCarrier_StoreOpt.click();

        // Select 256 GB Option.
        apple.iPhone12Pro_256GB_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_256GB_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Graphite No Carrier 256 GB option not displayed at the store'});
        apple.iPhone12Pro_256GB_StoreOpt.click();
        
        // Select no trade-in option.
        apple.noTradeIn_StoreOpt.moveTo();
        browser.waitUntil(() => {
            return apple.noTradeIn_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO - NO trade in option were selecteed'});
        apple.noTradeIn_StoreOpt.click();
        browser.pause(2000);

        // Select one time payment option.
        browser.pause(2000);
        apple.oneTimePayment_StoreOpt.waitForClickable();
        browser.waitUntil(() => {
            return apple.oneTimePayment_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO - NO One time Payment option were selected'});
        apple.oneTimePayment_StoreOpt.click();
        browser.pause(2000);
        
        // Select No Apple Care Coverage. (No Apple Care Plan set as default, but we wnt to make sure it was selected. Add to bag still active)  ______ Maybe, it's a potential bug. Customer should pick a coverage before proceed in to bag, as every other option! 
        apple.noAppleCare_StoreOpt.moveTo();
        apple.noAppleCare_StoreOpt.click();
        browser.pause(2000);
        
        // Add item to bag
        apple.addToBag_Btn.waitForClickable();
        apple.addToBag_Btn.click();
        
        // Verify item in a bag.
        browser.waitUntil(() => {
            return apple.summary_Header_ProductTitle_Bag.getText() === 'iPhone 12 Pro Max 256GB Graphite'
        }, { timeout: 5000, timeoutMsg:'iPhone 12 Pro Max 256GB Graphite Does not show in the bag header'});
        
        // Click Review Bag Button.
        apple.reviewBag_Btn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('https://www.apple.com/shop/bag');
                }, {timeout: 10000, timeoutMsg:'"Transfer to BAG was not complited via Review Bag Button"'});
       
                // Click Check Out Button.
       apple.checkOut_Btn.click();
       
       // Make sure checkout AS GUEST check out option is availible and proceed with it. 
       browser.waitUntil(() => {
        return apple.checkOut_asGuest_Btn.isClickable();
            }, {timeout: 10000, timeoutMsg:'"Checkout AS GUEST option is not availible"'});
       apple.checkOut_asGuest_Btn.click();
       
       // "I'll pick it up" otpion set as default, make sure it's displyed on the page and verify URL. 
       apple.iWillPickItUp_Btn.waitForDisplayed();
       browser.waitUntil(() => {
        return browser.getUrl().includes('/shop/checkout?_s=Fulfillment-init');
            }, {timeout: 10000, timeoutMsg:'"Customer is not on checkot page and can not select pick up at store option"'});
    });

    it('should be able to add IPhone 12 Pro, GOLD color, no contract, 256 GB storage, no trade in and full payment options, no protection plan, to the Bag and verify the right model can be localy pick up.', () => {
        // Click on IPhone header. Verify you land on the IPhone page.
        browser.waitUntil(() => {
            return apple.iPhone_HeaderBtn.isDisplayed();
        }, { timeout: 10000, timeoutMsg:'IPhone headder did not appear after 10 sec of waiting on the main page'});
        apple.iPhone_HeaderBtn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/iphone');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone PRODUCTS page were not complited via the header"'});

        // Click on IPhone 12 Pro Icon in main menu on the top. Verify you land on IPhone 12 PRO page.
        apple.iPhone12Pro_IconBtn.waitForDisplayed();
        apple.iPhone12Pro_IconBtn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/iphone-12-pro');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone 12 Pro PRODUCT Page were not complited via the icon"'});
        
        // Click on blue buy button in the right top corner. Make sure you land on the page of purchasing.
        apple.smallBlueBuyBtn_rigthCorner.waitForClickable();
        apple.smallBlueBuyBtn_rigthCorner.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('/shop/buy-iphone/iphone-12-pro');
        }, {timeout: 10000, timeoutMsg:'"Transfer to IPhone 12 PRO PURCHASE PAGE were not complited via the small blue button"'});
        
        // Select IPhone 12 PRO.
        });browser.pause(3000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO option not displayed at the store'}); 
        apple.iPhone12ProMax_StoreOpt.click();

        // Select GOLD color.
        apple.iPhone12Pro_Gold_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_Gold_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Gold option not displayed at the store'}); 
        apple.iPhone12Pro_Gold_StoreOpt.click();

        // Sellect No Carrier option.
        apple.iPhone12Pro_NoCarrier_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_NoCarrier_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Graphite No Carrier option not displayed at the store'});
        apple.iPhone12Pro_NoCarrier_StoreOpt.click();

        // Select 512 GB Option.
        apple.iPhone12Pro_512GB_StoreOpt.moveTo();
        browser.pause(2000);
        browser.waitUntil(() => {
            return apple.iPhone12Pro_512GB_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO MAX Graphite No Carrier 512 GB option not displayed at the store'});
        apple.iPhone12Pro_512GB_StoreOpt.click();
        
        // Select no trade-in option.
        apple.noTradeIn_StoreOpt.moveTo();
        browser.waitUntil(() => {
            return apple.noTradeIn_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO - NO trade in option were selecteed'});
        apple.noTradeIn_StoreOpt.click();
        browser.pause(2000);

        // Select one time payment option.
        browser.pause(2000);
        apple.oneTimePayment_StoreOpt.waitForClickable();
        browser.waitUntil(() => {
            return apple.oneTimePayment_StoreOpt.waitForClickable();
        }, { timeout: 5000, timeoutMsg:'IPhone 12 PRO - NO One time Payment option were selected'});
        apple.oneTimePayment_StoreOpt.click();
        browser.pause(2000);
        
        // Select No Apple Care Coverage. (No Apple Care Plan set as default, but we wnt to make sure it was selected. Add to bag still active)  ______ Maybe, it's a potential bug. Customer should pick a coverage before proceed in to bag, as every other option! 
        apple.noAppleCare_StoreOpt.moveTo();
        apple.noAppleCare_StoreOpt.click();
        browser.pause(2000);
        
        // Add item to bag
        apple.addToBag_Btn.waitForClickable();
        apple.addToBag_Btn.click();
        
        // Verify item in a bag.
        browser.waitUntil(() => {
            return apple.summary_Header_ProductTitle_Bag.getText() === 'iPhone 12 Pro Max 256GB Graphite'
        }, { timeout: 5000, timeoutMsg:'iPhone 12 Pro Max 256GB Graphite Does not show in the bag header'});
        
        // Click Review Bag Button.
        apple.reviewBag_Btn.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes('https://www.apple.com/shop/bag');
                }, {timeout: 10000, timeoutMsg:'"Transfer to BAG was not complited via Review Bag Button"'});
       
                // Click Check Out Button.
       apple.checkOut_Btn.click();
       
       // Make sure checkout AS GUEST check out option is availible and proceed with it. 
       browser.waitUntil(() => {
        return apple.checkOut_asGuest_Btn.isClickable();
            }, {timeout: 10000, timeoutMsg:'"Checkout AS GUEST option is not availible"'});
       apple.checkOut_asGuest_Btn.click();
       
       // I'll pick it up otpion set as default, make sure it's displyed on the page and verify URL. 
       apple.iWillPickItUp_Btn.waitForDisplayed();
       browser.waitUntil(() => {
        return browser.getUrl().includes('/shop/checkout?_s=Fulfillment-init');
            }, {timeout: 10000, timeoutMsg:'"Customer is not on checkot page and can not select pick up at store option"'});
})
    
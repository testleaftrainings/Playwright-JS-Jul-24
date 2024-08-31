var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //Method Implementation
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) {
            console.log("Forcibly clicking the element ".concat(element));
            //Example: this.page.click(element, {force:true})            
        }
        else {
            console.log("Clicking the element ".concat(element, " normally"));
            //Example: this.page.click(element)
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
actions.click("#submitButton"); //Normal click
actions.click("#submitButton", true); //Force click

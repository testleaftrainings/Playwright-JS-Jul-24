class ElementActions {

    //Method signature
    public click(element:string):void;
    //Method signature
    public click(element:string, forceClick:boolean):void;
    //Method Implementation
    public click(element:string, forceClick?:boolean):void {
        if(forceClick) {
            console.log(`Forcibly clicking the element ${element}`);
            //Example: this.page.click(element, {force:true})            
        } else {
            console.log(`Clicking the element ${element} normally`);
            //Example: this.page.click(element)
            
        }
    }
}

const actions = new ElementActions();
actions.click("#submitButton"); //Normal click
actions.click("#submitButton", true); //Force click
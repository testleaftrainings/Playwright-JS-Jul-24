abstract class ProjectSpecificMethod {
    protected page: any;

    constructor(page:any) {
    this.page = page;
    }
  
    abstract navigateTo(url:string):void;
    abstract login(username:string, password:string):void;
     
    public logsession(): void {
        console.log("This is abstract class");        
    }

  }

  class ShoppingPage extends ProjectSpecificMethod {

      navigateTo(url: string): void {
        console.log(`Navigating to login page ${url}`);
          
      }
      login(username: string, password: string): void {
        console.log(`Enter the user credentials ${username} ${password}`);
        
      } 
  }
  const shopping = new ShoppingPage("PageObject");
  shopping.navigateTo("https://www.amazon.in");
  shopping.login("testdemo@gmail.com", "test");


  interface LoginPage {
    //Abstract methods
    enterUsername():string;
    enterPassword():string;

  }

  class ProductPage implements LoginPage  {
      enterUsername(): string {
        return 'username'
      }
      enterPassword(): string {
          return 'password'
      }

  }

  const product = new ProductPage();
  product.enterPassword();
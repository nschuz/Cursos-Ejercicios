class Product{
    constructor(name, price , year){
        this.name= name;
        this.price=price;
        this.year=year;
    }



}

class UI {
    //le damos este metodo porqu eui accede al dom
    addProduct(product){
      const productList=  document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML=`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong>: ${product.name};
                <strong>Product Price</strong>: ${product.price};
                <strong>Product Year</strong>: ${product.year};
                <a class="btn btn-danger text-white" name="delete">Borrar</a>
            </div>
        </div>

      `;

      
        //insertamos elemnt
      productList.appendChild(element);
      //console.log(document.getElementById("name"));
    

      
      
    }

    deleteProduct(element){
            if(element.name==='delete'){
                element.parentElement.parentElement.parentElement.remove();
               
            }
    }

    showMessage(message , cssClass){
        const div= document.createElement('div');
        div.className=`alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //motrando en el dom 
        const container= document.querySelector('.container');
       const app= document.querySelector('#App');
    container.insertBefore(div,app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },2000);
    }

    resetForm(){
        document.getElementById('product-form').
        reset();
    }


}

//DOM Events
document.getElementById('product-form').addEventListener('submit', function(e){
    
    const name=document.getElementById('name').value;


    const price= document.getElementById('price').value;

   const year= document.getElementById('year').value;

   const product = new Product(name, price , year);
   
   const ui = new UI();
   if(name==='' || price==='' || year===''){
    ui.showMessage("inserte Campos Correctos", "warning")
    
   }else{

    ui.addProduct(product);
   ui.resetForm();
   ui.showMessage("Producto agregado astifactoriamente " , "success");

   }
   
   
   
   
   document.getElementById('product-list').addEventListener('click',function(e){
       //console.log(e.target);//lo que estoy capturandi
       const ui = new UI();
       ui.deleteProduct(e.target);
    });
    
    e.preventDefault();
    
});
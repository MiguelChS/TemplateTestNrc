/**
 * Created by Miguel on 2/11/2016.
 */
$(document).ready(function () {
   $(".btn").click(function(){
       var ficha=document.getElementById('muestra');
       var ventimp=window.open('','popimpr');
       ventimp.document.write(ficha.innerHTML);
       ventimp.document.close();
       ventimp.print();
       ventimp.close();
   });
});

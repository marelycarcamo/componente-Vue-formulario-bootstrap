appComponente.component('ejemplo1',{
    template:
    `
    <div id="principal" class="d-flex justify-content-center">
    <div id="caja" class="d-flex align-items-center">
      <div class="container-sm  p-4 my-4 bg-dark text-white" >
      
        <form class="formulario" class="border border-primary border-0" style="text-align: center;">
          <h4 style="text-align: center;">F O R M U L A R I O</h4><br>
  
  
          <label for="">Ingresar al sitio?</label><br><br>
          <div class="radio d-flex justify-content-around">
            <label class="radio-inline"><input value="true" type="radio" name="optradio"> SI</label>
            <label class="radio-inline"><input  value="false" type="radio" name="optradio"> NO</label>
          </div>
          <br>
          <div class="form-group">
            <label  for="inputmd">Usuario</label><br>
            <input class="inputmd" id="inputmd" type="text">
          </div>
  
          <div class="form-group">
          <label  for="contrasegna">Contraseña</label><br>
          <input class="inputmd" id="inputmd" type="password">
        </div>
         
  
          <div  id="botones" class="d-flex justify-content-around">
          <button type="button" class="btn btn-outline-info btn-lg">Aceptar</button>
          <button type="button" class="btn btn-outline-info btn-lg">Cancelar</button>
          </div>
        </form>
      </div> 
    </div>
    </div>
  
  

    `
})

#pragma strict

var anim : Animator;

function Start () {
    // Definimos una variable de tipo animator, a la cual se le asociara el animator component del chancho
    // esto permitira luego con las funciones set y get manipular los valores de los parametros definidos
    // en el animator controler y poder hacer las transiciones entre las animaciones
	anim = GetComponent(Animator);

}

function Update () {

	print("caminar: " + anim.GetBool("caminar"));

// Input.touchCount cuenta por cada frame cuantas veces el usuario interactuo con la pantalla tactil
// si touchcount es 0 entonces no hubo interacciones por lo tanto no haremos ninguna accion	
	if (Input.touchCount > 0)
		{
		//por cada interaccion ejecutaremos el siguiente codigo
		for (var i = 0; i < Input.touchCount; ++i)
			{
			// Camera.main.ScreenPointToRay devuelve una variable de tipo recta (posee posicion inicial, direccion y distancia)
			// desde la main camera hasta la posicion indicada como parametro, en este caso el lugar donde el usuario toco la pantalla 
			var ray = Camera.main.ScreenPointToRay (Input.GetTouch(i).position);
			var hit:RaycastHit;		
			// Aqui ejecutamos el raycast, esto lo que hace es lanzar un rayo con los datos de posicion, direccion y distancia
			// indicados en la variable ray generada antes, si al ejecutar el rayo este choca con un collider, el nombre y otros
			// datos del mismo se guardan en la variable hit
			if (Physics.Raycast (ray, hit,100)) 
				{
				// Si el collider devuelto por el raycast es el correspondiente al chancho indicado con this.name ya que este 
				// script esta asociado al mismo
                if(hit.collider.name==this.name)
                	{
                	// Verificamos si el usuario toco la pantalla
					if (Input.GetTouch(i).phase == TouchPhase.Began)
						{
						// Cambiamos el parametro caminar definida en el animator controler del chancho a true
						// esto hara que el chancho camine
						anim.SetBool("caminar", true);
						}
		            // Verificamos si el usuario dejo de tocar la pantalla
					if (Input.GetTouch(i).phase == TouchPhase.Ended)
						{
						// Cambiamos el parametro caminar definida en el animator controler del chancho a false
						// esto hara que el chancho vuelva a la posicion idle
						anim.SetBool("caminar", false);
						}
					}		
				}
			}
		}
}
	
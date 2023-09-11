import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-guides',
  templateUrl: './use-guides.component.html',
  styleUrls: ['./use-guides.component.css']
})
export class UseGuidesComponent implements OnInit {
  //useguides: any = {}:
  useguides: any[] = []
  panelOpenState = true;

  constructor() {
    //this.useguides = this.useguides;
    this.useguides = this.useguides = [
      {
        id: 1,
        titulo: 'Cómo crear una cuenta o Iniciar sesión',
        opcion1: 'Crear una cuenta nueva:',
        explicacion1: 'Sigue los siguientes pasos:',
        paso1: '- Primero, seleccione el rol que desee (Candidato/Empresa).',
        paso2: '- Después, introduzca su dirección de correo y la URL de una imágen para su perfil.',
        paso3: '- Por último, escriba una contraseña para su cuenta.',
        opcion2: 'Iniciar sesión:',
        explicacion2: 'en caso de tener una cuenta ya creada, haz lo siguiente:',
        paso4: 'Introduzca el correo de su cuenta.',
        paso5: 'Introduzca su contraseña.'
      },
      {
        id: 2,
        titulo: 'Recuperación de la contraseña:',
        paso1: 'Si has olvidado la contraseña, introduce su correo electrónico para solicitar la restauración de la contraseña.',
        paso2: 'Es necesario verficar el correo una vez recibido la notificación.'
      },
      {
        id: 3,
        titulo: 'Funciones principales del perfil:',
        explicacion1: 'Una vez iniciada la sesión, tienes múltiples opciones desde tu perfil:',
        opcion1: '- Acceso al panel de control.',
        opcion2: '- Acceso a tu perfil.',
        opcion3: '- Opción de recuperación de la contraseña.',
        opcion4: '- Cerrar la sesión.'
      },
      {
        id: 4,
        titulo: 'Uso de la plataforma:',
        explicacion1: 'Capazzitor cuenta con un filtro de búsqueda para todo tipo de trabajo:',
        paso1: '- Selecciona un tipo de empleo que desees.',
        paso2: '- Filtra la búsqueda por categorías.',
        paso3: '- Pulsa "Buscar" para los resultados'
      }
    ]
   }

  ngOnInit(): void {
  }

}

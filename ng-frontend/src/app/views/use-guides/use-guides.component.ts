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
        titulo: 'Cómo crear una cuenta.',
        subtitulo: 'Crear una cuenta nueva siguiendo los pasos:',
        cuerpo: '- Primero, seleccione el rol que desee (Candidato/Empresa). Después, introduzca su dirección de correo y la URL de una imágen para su perfil. Por último, escriba una contraseña para su cuenta.'
      },
      {
        titulo: 'Como iniciar sesión.',
        subtitulo: 'Una vez creada la cuenta, haz lo siguiente:',
        cuerpo: 'Introduzca el correo y contraseña de su cuenta.'
      },
      {
        titulo: 'Recuperación de la contraseña:',
        subtitulo: 'Si has olvidado la contraseña, introduce su correo electrónico para solicitar la restauración de la contraseña.',
        cuerpo: 'Es necesario verficar el correo una vez recibido la notificación.'
      },
      {
        titulo: 'Funciones principales del perfil:',
        subtitulo: 'Una vez iniciada la sesión, tienes múltiples opciones desde tu perfil:',
        cuerpo: 'Acceso al panel de control, acceso a tu perfil, opción de recuperación de la contraseña y cerrar la sesión.'
      },
      {
        titulo: 'Uso de la plataforma:',
        subtitulo: 'Capazzitor cuenta con un filtro de búsqueda para todo tipo de trabajo:',
        cuerpo: 'Selecciona un tipo de empleo que desees. Filtra la búsqueda por categorías. Pulsa "Buscar" para los resultados'
      }
    ]
    console.log(this.useguides)
   }

  ngOnInit(): void {
  }

}

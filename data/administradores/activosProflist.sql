SELECT [correo_prof],
        [contrasena_prof],
        [nombre_prof],
        [primer_apellido_prof],
        [segundo_apellido_prof],
        [cedula],
        [carrera_prof],
        [estado_registro]

FROM [dbo].[profesores] where [estado_registro]='activo'

       



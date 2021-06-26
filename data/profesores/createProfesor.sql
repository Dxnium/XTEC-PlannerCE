INSERT INTO [dbo].[profesores]
    (
        [correo_prof],
        [contrasena_prof],
        [nombre_prof],
        [primer_apellido_prof],
        [segundo_apellido_prof],
        [cedula],
        [carrera_prof],
        [estado_registro]

    )
VALUES 
    (
        @correo_prof,
        @contrasena_prof,
        @nombre_prof,
        @primer_apellido_prof,
        @segundo_apellido_prof,
        @cedula,
        @carrera_prof,
        @estado_registro
    )

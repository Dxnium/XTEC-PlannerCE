INSERT INTO [dbo].[estudiantes]
    (
        [carnet],
        [nombre_est],
        [primer_apellido_est],
        [segundo_apellido_est],
        [correo_est],
        [contrasena_est],
        [telefono],
        [carrera_est],
        [provincia_vive],
        [provincia_reside],
        [intereses_personales],
        [fines],
        [estado_registro]

    )
VALUES 
    (
        @carnet,
        @nombre_est,
        @primer_apellido_est,
        @segundo_apellido_est,
        @correo_est,
        @contrasena_est,
        @telefono,
        @carrera_est,
        @provincia_vive,
        @provincia_reside,
        @intereses_personales,
        @fines,
        @estado_registro
    )
UPDATE [dbo].[estudiantes]
SET     [correo_est]=@correo_est,
        [telefono]=@telefono,
        [carrera_est]=@carrera_est,
        [provincia_reside]=@provincia_reside
WHERE [carnet]=@carnet

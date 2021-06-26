SELECT [carnet] FROM [dbo].[estudiantes] WHERE [contrasena_est]=@contrasena_est 
and [carnet]=@carnet
and [estado_registro]='activo'     



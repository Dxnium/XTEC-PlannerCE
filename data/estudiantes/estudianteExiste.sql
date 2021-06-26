USE [daticdb]


SELECT [carnet],
        [nombre_est],
        [contrasena_est]


FROM [dbo].[estudiantesdatic]
WHERE [carnet]=@carnet and [contrasena_est]=@contrasena_est
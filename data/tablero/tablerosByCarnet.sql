SELECT  [nombre],
        [descripcion],
        [tipo]
FROM [dbo].[tablero]
WHERE [est_carnet]=@est_carnet
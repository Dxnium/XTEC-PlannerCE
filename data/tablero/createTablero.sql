INSERT INTO [dbo].[tablero]
    (
        [nombre],
        [descripcion],
        [tipo],
        [est_carnet]
    )
VALUES 
    (
        @nombre,
        @descripcion,
        @tipo,
        @est_carnet
    )